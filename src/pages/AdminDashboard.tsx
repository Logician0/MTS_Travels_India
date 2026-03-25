import React, { useState, useMemo } from 'react';
import { Filter, Calendar as CalendarIcon, ArrowUpDown } from 'lucide-react'; 

const AdminDashboard = () => {
    const [pin, setPin] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // 🎛️ FILTER & SORT STATES
    const [filterTrip, setFilterTrip] = useState('all');
    const [dateRange, setDateRange] = useState('all');
    const [customStart, setCustomStart] = useState('');
    const [customEnd, setCustomEnd] = useState('');
    const [sortBy, setSortBy] = useState('date_desc');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://mts-travels-india-backend.onrender.com/api/bookings?pin=${pin}`);
            const data = await response.json();
            if (data.success) {
                setBookings(data.bookings);
                setIsLoggedIn(true);
            } else {
                setError('Access Denied: Invalid Security PIN');
            }
        } catch (err) {
            setError('Server connection failed. Check if Backend is running.');
        } finally {
            setLoading(false);
        }
    };

    // 🧠 CORE ENGINE: Applies all filters and sorting dynamically
    const processedBookings = useMemo(() => {
        let result = [...bookings];

        // 1. Filter by Trip Type (Case-insensitive matching for robust filtering)
        if (filterTrip !== 'all') {
            result = result.filter(b => {
                if (!b.tripType) return false;
                const type = b.tripType.toLowerCase();
                if (filterTrip === 'one_way') return type === 'one_way' || type === 'oneway';
                if (filterTrip === 'round_trip') return type === 'round_trip' || type === 'roundtrip';
                if (filterTrip === 'tour_package') return type === 'tour_package';
                if (filterTrip === 'bike_rental') return type === 'bike_rental';
                return true;
            });
        }

        // 2. Filter by Date Range (Uses createdAt if available, fallback to booking date)
        if (dateRange !== 'all') {
            const today = new Date();
            today.setHours(0, 0, 0, 0); 

            result = result.filter(b => {
                // Use createdAt for when the booking was made, or date for when the trip is
                const dateToCheck = b.createdAt ? new Date(b.createdAt) : new Date(b.date);
                if (isNaN(dateToCheck.getTime())) return true; // Skip invalid dates

                if (dateRange === 'last_7') {
                    const sevenDaysAgo = new Date(today);
                    sevenDaysAgo.setDate(today.getDate() - 7);
                    return dateToCheck >= sevenDaysAgo && dateToCheck <= new Date(); 
                }
                
                if (dateRange === 'last_30') {
                    const thirtyDaysAgo = new Date(today);
                    thirtyDaysAgo.setDate(today.getDate() - 30);
                    return dateToCheck >= thirtyDaysAgo && dateToCheck <= new Date();
                }

                if (dateRange === 'custom' && customStart && customEnd) {
                    const start = new Date(customStart);
                    start.setHours(0,0,0,0);
                    const end = new Date(customEnd);
                    end.setHours(23, 59, 59, 999); 
                    return dateToCheck >= start && dateToCheck <= end;
                }

                return true;
            });
        }

        // 3. Advanced Sorting
        result.sort((a, b) => {
            // Helper to get a reliable timestamp
            const getTime = (obj: any) => {
                const dateStr = obj.createdAt || obj.date;
                if (!dateStr) return 0;
                return new Date(dateStr).getTime();
            };

            // Helper to ensure price is a pure number
            const getPrice = (obj: any) => {
                const p = Number(obj.price);
                return isNaN(p) ? 0 : p;
            };

            if (sortBy === 'date_desc') return getTime(b) - getTime(a);
            if (sortBy === 'date_asc') return getTime(a) - getTime(b);
            if (sortBy === 'price_desc') return getPrice(b) - getPrice(a);
            if (sortBy === 'price_asc') return getPrice(a) - getPrice(b);
            
            return 0;
        });

        return result;
    }, [bookings, filterTrip, dateRange, customStart, customEnd, sortBy]);

    // 📊 GOD-TIER CALCULATIONS
    const stats = useMemo(() => {
        const totalRevenue = processedBookings.reduce((sum, b) => sum + (Number(b.price) || 0), 0);
        const totalBookings = processedBookings.length;
        const avgValue = totalBookings > 0 ? (totalRevenue / totalBookings).toFixed(0) : 0;
        return { totalRevenue, totalBookings, avgValue };
    }, [processedBookings]);


    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-900 p-6">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 transform transition-all">
                    <div className="text-center mb-8">
                        <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🛡️</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-800">MTS Command Center</h2>
                        <p className="text-slate-500 mt-2">Enter your encrypted PIN to continue</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-center text-xl tracking-widest"
                            required
                        />
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all active:scale-95 disabled:opacity-50"
                        >
                            {loading ? 'Decrypting...' : 'Unlock Dashboard'}
                        </button>
                    </form>
                    {error && <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center border border-red-100">{error}</div>}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-20">
            {/* Top Navigation */}
            <nav className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 sticky top-0 z-20 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="bg-emerald-600 text-white p-2 rounded-lg font-bold text-xl">MTS</div>
                    <h1 className="text-lg sm:text-xl font-bold text-slate-800 hidden sm:block">Admin Control Panel</h1>
                </div>
                <button onClick={() => window.location.reload()} className="text-slate-500 hover:text-red-600 font-medium transition-colors text-sm sm:text-base">Logout Session</button>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
                
                {/* 🚀 TOP CLASS STAT CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Filtered Revenue</p>
                        <h3 className="text-4xl font-black text-slate-900 mt-1">₹{stats.totalRevenue.toLocaleString('en-IN')}</h3>
                        <div className="mt-2 text-emerald-600 text-sm font-medium">Based on current view</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Filtered Bookings</p>
                        <h3 className="text-4xl font-black text-slate-900 mt-1">{stats.totalBookings}</h3>
                        <div className="mt-2 text-blue-600 text-sm font-medium">Completed Transactions</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Avg. Order Value</p>
                        <h3 className="text-4xl font-black text-slate-900 mt-1">₹{stats.avgValue}</h3>
                        <div className="mt-2 text-purple-600 text-sm font-medium">Per Customer Revenue</div>
                    </div>
                </div>

                {/* 🎛️ FILTER & SORT CONTROL BAR */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col lg:flex-row gap-4 items-end lg:items-center justify-between">
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        {/* Trip Type Filter */}
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-auto">
                            <Filter className="w-4 h-4 text-slate-400" />
                            <select 
                                value={filterTrip} 
                                onChange={(e) => setFilterTrip(e.target.value)}
                                className="bg-transparent outline-none text-sm font-medium text-slate-700 w-full cursor-pointer"
                            >
                                <option value="all">All Services</option>
                                <option value="one_way">Cab: One Way</option>
                                <option value="round_trip">Cab: Round Trip</option>
                                <option value="tour_package">Tour Packages</option>
                                <option value="bike_rental">Bike Rentals</option>
                            </select>
                        </div>

                        {/* Date Range Filter */}
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-auto">
                            <CalendarIcon className="w-4 h-4 text-slate-400" />
                            <select 
                                value={dateRange} 
                                onChange={(e) => setDateRange(e.target.value)}
                                className="bg-transparent outline-none text-sm font-medium text-slate-700 w-full cursor-pointer"
                            >
                                <option value="all">All Time</option>
                                <option value="last_7">Last 7 Days</option>
                                <option value="last_30">Last 30 Days</option>
                                <option value="custom">Custom Range</option>
                            </select>
                        </div>

                        {/* Custom Date Inputs */}
                        {dateRange === 'custom' && (
                            <div className="flex items-center gap-2 w-full sm:w-auto animate-fade-in">
                                <input 
                                    type="date" 
                                    value={customStart} 
                                    onChange={(e) => setCustomStart(e.target.value)}
                                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-emerald-500 w-full"
                                />
                                <span className="text-slate-400 font-bold">-</span>
                                <input 
                                    type="date" 
                                    value={customEnd} 
                                    onChange={(e) => setCustomEnd(e.target.value)}
                                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-emerald-500 w-full"
                                />
                            </div>
                        )}
                    </div>

                    {/* Sorting */}
                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full lg:w-auto">
                        <ArrowUpDown className="w-4 h-4 text-slate-400" />
                        <select 
                            value={sortBy} 
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-transparent outline-none text-sm font-medium text-slate-700 w-full cursor-pointer"
                        >
                            <option value="date_desc">Newest Bookings</option>
                            <option value="date_asc">Oldest Bookings</option>
                            <option value="price_desc">Highest Price First</option>
                            <option value="price_asc">Lowest Price First</option>
                        </select>
                    </div>

                </div>

                {/* 📋 PREMIUM DATA TABLE */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                    <div className="px-6 sm:px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white">
                        <h2 className="text-xl font-bold text-slate-800">Booking Logs</h2>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                            Showing {processedBookings.length} Results
                        </span>
                    </div>
                    <div className="overflow-x-auto">
                        {processedBookings.length === 0 ? (
                            <div className="p-12 text-center text-slate-500 font-medium">
                                No bookings found for these filters.
                            </div>
                        ) : (
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                        <th className="px-6 sm:px-8 py-4">Status</th>
                                        <th className="px-6 sm:px-8 py-4">Customer Details</th>
                                        <th className="px-6 sm:px-8 py-4">Trip Information</th>
                                        <th className="px-6 sm:px-8 py-4">Vehicle</th>
                                        <th className="px-6 sm:px-8 py-4 text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {processedBookings.map((booking) => (
                                        <tr key={booking._id} className="hover:bg-slate-50 transition-colors group">
                                            <td className="px-6 sm:px-8 py-5">
                                                <span className="flex flex-col gap-1">
                                                    <span className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                                                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                                        PAID
                                                    </span>
                                                    {/* Display exact booking timestamp if available */}
                                                    {booking.createdAt && (
                                                        <span className="text-[10px] text-slate-400 font-mono">
                                                            Booked: {new Date(booking.createdAt).toLocaleDateString()}
                                                        </span>
                                                    )}
                                                </span>
                                            </td>
                                            <td className="px-6 sm:px-8 py-5">
                                                <div className="font-bold text-slate-900">{booking.customerName}</div>
                                                <div className="text-sm text-slate-500">{booking.customerPhone}</div>
                                            </td>
                                            <td className="px-6 sm:px-8 py-5">
                                                <div className="text-sm font-semibold text-slate-800">{booking.route || booking.direction}</div>
                                                <div className="text-xs text-slate-400 font-medium uppercase mt-1">📅 {booking.date} {booking.time ? `at ${booking.time}` : ''}</div>
                                            </td>
                                            <td className="px-6 sm:px-8 py-5">
                                                <div className="text-sm text-slate-700 font-medium">{booking.specificVehicle}</div>
                                                <div className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded inline-block mt-1 uppercase tracking-tighter">
                                                    {booking.tripType ? booking.tripType.replace('_', ' ') : 'N/A'}
                                                </div>
                                            </td>
                                            <td className="px-6 sm:px-8 py-5 text-right">
                                                <div className="text-lg font-black text-slate-900">₹{booking.price}</div>
                                                <div className="text-[10px] text-slate-400 font-mono mt-1">{booking.paymentId}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;