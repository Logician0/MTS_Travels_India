import React, { useState, useMemo } from 'react';
import { Filter, Calendar as CalendarIcon, ArrowUpDown, Shield, Users, Car, X, CheckCircle, AlertCircle, Ban, IndianRupee, Eye, MapPin } from 'lucide-react'; 

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

    // 🚖 ACTION & MODAL STATES
    const [selectedBooking, setSelectedBooking] = useState<any | null>(null);
    const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [driverForm, setDriverForm] = useState({ name: '', phone: '', carNumber: '' });
    const [isActionLoading, setIsActionLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || 'https://mts-travels-india-backend.onrender.com';

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${API_URL}/api/bookings?pin=${pin}`);
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

    // --- 🚘 ASSIGN DRIVER FUNCTION ---
    const handleAssignDriver = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedBooking) return;
        setIsActionLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/assign-driver`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId: selectedBooking.orderId,
                    driverName: driverForm.name,
                    driverPhone: driverForm.phone,
                    carNumber: driverForm.carNumber,
                    customerEmail: selectedBooking.email || selectedBooking.customerEmail, 
                    customerName: selectedBooking.name || selectedBooking.customerName 
                })
            });

            const data = await response.json();
            if (data.success) {
                setBookings(bookings.map(b => b._id === selectedBooking._id ? { 
                    ...b, 
                    status: 'Driver Assigned', 
                    driverName: driverForm.name, 
                    driverPhone: driverForm.phone, 
                    carNumber: driverForm.carNumber 
                } : b));
                setIsDriverModalOpen(false);
                setIsDetailsModalOpen(false); 
                setDriverForm({ name: '', phone: '', carNumber: '' });
                alert("Driver assigned & Email sent to customer successfully!");
            } else {
                alert("Failed to assign driver.");
            }
        } catch (err) {
            alert("Error connecting to server to assign driver.");
        } finally {
            setIsActionLoading(false);
        }
    };

    // --- 💸 REFUND & CANCEL FUNCTION ---
    const handleCancelAndRefund = async (booking: any) => {
        const customerName = booking.name || booking.customerName;
        const refundValue = (booking.price * 0.8).toFixed(2);
        const confirmText = `Are you sure you want to cancel this booking for ${customerName} and refund 80% (₹${refundValue}) to their original payment method?`;
        
        if (!window.confirm(confirmText)) return;

        try {
            const response = await fetch(`${API_URL}/api/refund-booking`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    paymentId: booking.paymentId,
                    totalAmount: booking.price
                })
            });

            const data = await response.json();
            if (data.success) {
                setBookings(bookings.map(b => b._id === booking._id ? { ...b, status: 'Cancelled' } : b));
                setIsDetailsModalOpen(false); 
                alert(`Success: ₹${refundValue} has been refunded.`);
            } else {
                alert("Refund failed: " + data.message);
            }
        } catch (err) {
            alert("Error connecting to server. Refund may not have processed.");
        }
    };

    // --- ⏳ COUNTDOWN LOGIC ---
    const renderRideCountdown = (booking: any) => {
        if (booking.status === 'Cancelled') {
            return <span className="text-red-600 font-bold text-xs flex items-center gap-1 mt-1"><Ban className="w-3 h-3"/> Cancelled</span>;
        }
        if (booking.status === 'Driver Assigned') {
            return <span className="text-emerald-600 font-bold text-xs flex items-center gap-1 mt-1"><CheckCircle className="w-3 h-3"/> Driver Assigned</span>;
        }

        try {
            if (!booking.date || !booking.time) return <span className="text-slate-400 text-xs mt-1 block">Time pending</span>;
            
            const [timePart, modifier] = booking.time.split(' ');
            let [hours, minutes] = timePart.split(':');
            if (hours === '12') hours = '00';
            if (modifier === 'PM') hours = (parseInt(hours, 10) + 12).toString();

            const rideDateTime = new Date(`${booking.date}T${hours.padStart(2, '0')}:${minutes}:00`);
            const now = new Date();
            const diffMs = rideDateTime.getTime() - now.getTime();
            const diffHours = diffMs / (1000 * 60 * 60);

            if (diffHours < 0) return <span className="text-slate-400 font-bold text-xs mt-1 block tracking-tight">Ride Passed</span>;
            
            if (diffHours > 24) {
                const days = Math.floor(diffHours / 24);
                return <span className="text-emerald-600 font-bold text-xs mt-1 block tracking-tight">{days} day{days > 1 ? 's' : ''} to ride</span>;
            }
            if (diffHours <= 24 && diffHours > 5) {
                return <span className="text-amber-500 font-bold text-xs mt-1 block tracking-tight">{Math.floor(diffHours)} hours left</span>;
            }
            if (diffHours <= 5) {
                return <span className="text-red-600 font-black text-xs mt-1 block tracking-tight animate-pulse">URGENT: {Math.floor(diffHours)} hours left!</span>;
            }
        } catch(e) {
            return <span className="text-slate-400 text-xs mt-1 block">Pending</span>;
        }
    };

    // 🧠 CORE ENGINE: Filters strictly by BOOKING DATE (createdAt), not ride date
    const processedBookings = useMemo(() => {
        let result = [...bookings];

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

        if (dateRange !== 'all') {
            const today = new Date();
            today.setHours(0, 0, 0, 0); 
            
            result = result.filter(b => {
                // STRICT CHECK: Only look at when the booking was actually made
                if (!b.createdAt) return false; 
                
                const bookingMadeDate = new Date(b.createdAt);
                if (isNaN(bookingMadeDate.getTime())) return false; 
                
                if (dateRange === 'last_7') {
                    const sevenDaysAgo = new Date(today);
                    sevenDaysAgo.setDate(today.getDate() - 7);
                    return bookingMadeDate >= sevenDaysAgo && bookingMadeDate <= new Date(); 
                }
                if (dateRange === 'last_30') {
                    const thirtyDaysAgo = new Date(today);
                    thirtyDaysAgo.setDate(today.getDate() - 30);
                    return bookingMadeDate >= thirtyDaysAgo && bookingMadeDate <= new Date();
                }
                if (dateRange === 'custom' && customStart && customEnd) {
                    const start = new Date(customStart);
                    start.setHours(0,0,0,0);
                    const end = new Date(customEnd);
                    end.setHours(23, 59, 59, 999); 
                    return bookingMadeDate >= start && bookingMadeDate <= end;
                }
                return true;
            });
        }

        result.sort((a, b) => {
            // STRICT SORT: Only sort by the time the transaction was created
            const getBookingTime = (obj: any) => {
                if (!obj.createdAt) return 0; 
                return new Date(obj.createdAt).getTime();
            };
            const getPrice = (obj: any) => Number(obj.price) || 0;

            if (sortBy === 'date_desc') return getBookingTime(b) - getBookingTime(a);
            if (sortBy === 'date_asc') return getBookingTime(a) - getBookingTime(b);
            if (sortBy === 'price_desc') return getPrice(b) - getPrice(a);
            if (sortBy === 'price_asc') return getPrice(a) - getPrice(b);
            return 0;
        });

        return result;
    }, [bookings, filterTrip, dateRange, customStart, customEnd, sortBy]);

    const stats = useMemo(() => {
        const activeBookings = processedBookings.filter(b => b.status !== 'Cancelled');
        const totalRevenue = activeBookings.reduce((sum, b) => sum + (Number(b.price) || 0), 0);
        const totalBookings = activeBookings.length;
        const avgValue = totalBookings > 0 ? (totalRevenue / totalBookings).toFixed(0) : 0;
        return { totalRevenue, totalBookings, avgValue };
    }, [processedBookings]);

    // UI Helper
    const formatDateTime = (dateString: string) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleString('en-IN', { 
            month: 'short', day: 'numeric', year: 'numeric', 
            hour: '2-digit', minute: '2-digit' 
        });
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-900 p-6">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8 text-emerald-600" />
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
                
                {/* 🚀 STAT CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Filtered Revenue</p>
                        <h3 className="text-4xl font-black text-slate-900 mt-1">₹{stats.totalRevenue.toLocaleString('en-IN')}</h3>
                        <div className="mt-2 text-emerald-600 text-sm font-medium">Active Bookings Only</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Filtered Bookings</p>
                        <h3 className="text-4xl font-black text-slate-900 mt-1">{stats.totalBookings}</h3>
                        <div className="mt-2 text-blue-600 text-sm font-medium">Active Transactions</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Avg. Order Value</p>
                        <h3 className="text-4xl font-black text-slate-900 mt-1">₹{stats.avgValue}</h3>
                        <div className="mt-2 text-purple-600 text-sm font-medium">Per Customer Revenue</div>
                    </div>
                </div>

                {/* 🎛️ CONTROLS */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col lg:flex-row gap-4 items-end lg:items-center justify-between">
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-auto">
                            <Filter className="w-4 h-4 text-slate-400" />
                            <select value={filterTrip} onChange={(e) => setFilterTrip(e.target.value)} className="bg-transparent outline-none text-sm font-medium text-slate-700 w-full cursor-pointer">
                                <option value="all">All Services</option>
                                <option value="one_way">Cab: One Way</option>
                                <option value="round_trip">Cab: Round Trip</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-auto">
                            <CalendarIcon className="w-4 h-4 text-slate-400" />
                            <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="bg-transparent outline-none text-sm font-medium text-slate-700 w-full cursor-pointer">
                                <option value="all">All Time Bookings</option>
                                <option value="last_7">Booked Last 7 Days</option>
                                <option value="last_30">Booked Last 30 Days</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full lg:w-auto">
                        <ArrowUpDown className="w-4 h-4 text-slate-400" />
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-transparent outline-none text-sm font-medium text-slate-700 w-full cursor-pointer">
                            <option value="date_desc">Newest Bookings First</option>
                            <option value="date_asc">Oldest Bookings First</option>
                        </select>
                    </div>
                </div>

                {/* 📋 CLEAN DATA TABLE */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        {processedBookings.length === 0 ? (
                            <div className="p-12 text-center text-slate-500 font-medium">No bookings found based on transaction date.</div>
                        ) : (
                            <table className="w-full text-left border-collapse min-w-[1000px]">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                        <th className="px-6 py-4">Status & Payment</th>
                                        <th className="px-6 py-4">Booking Time</th>
                                        <th className="px-6 py-4">Customer</th>
                                        <th className="px-6 py-4">Ride Schedule</th>
                                        <th className="px-6 py-4 text-center">Details</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {processedBookings.map((booking) => (
                                        <tr key={booking._id} className="hover:bg-slate-50 transition-colors group">
                                            
                                            {/* Col 1: Status & Payment */}
                                            <td className="px-6 py-5">
                                                <div className={`font-black text-lg ${booking.status === 'Cancelled' ? 'text-slate-400 line-through' : 'text-slate-900'}`}>₹{booking.price}</div>
                                                <div className="flex items-center gap-1.5 mt-1">
                                                    {booking.status === 'Cancelled' ? (
                                                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">Refunded</span>
                                                    ) : (
                                                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">Paid</span>
                                                    )}
                                                </div>
                                            </td>

                                            {/* Col 2: Booking Time */}
                                            <td className="px-6 py-5 text-sm text-slate-600 font-medium">
                                                {formatDateTime(booking.createdAt)}
                                            </td>
                                            
                                            {/* Col 3: Customer */}
                                            <td className="px-6 py-5">
                                                <div className="font-bold text-slate-900">{booking.name || booking.customerName}</div>
                                            </td>
                                            
                                            {/* Col 4: Ride Schedule & Countdown */}
                                            <td className="px-6 py-5">
                                                <div className="text-sm font-bold text-slate-800">
                                                    📅 {booking.date} <span className="text-slate-400 font-normal">|</span> {booking.time}
                                                </div>
                                                {renderRideCountdown(booking)}
                                            </td>

                                            {/* Col 5: Details Button */}
                                            <td className="px-6 py-5 text-center">
                                                <button 
                                                    onClick={() => { setSelectedBooking(booking); setIsDetailsModalOpen(true); }}
                                                    className="px-3 py-2 bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
                                                >
                                                    <Eye className="w-4 h-4" /> View Details
                                                </button>
                                            </td>

                                            {/* Col 6: Assign Driver Button */}
                                            <td className="px-6 py-5 text-right">
                                                {(!booking.status || booking.status === 'Confirmed') ? (
                                                    <button 
                                                        onClick={() => { setSelectedBooking(booking); setIsDriverModalOpen(true); }}
                                                        className="px-4 py-2 bg-slate-900 text-[#ffc800] text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
                                                    >
                                                        <Car className="w-4 h-4" /> Assign Driver
                                                    </button>
                                                ) : booking.status === 'Driver Assigned' ? (
                                                    <span className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                        <CheckCircle className="w-4 h-4"/> Driver Assigned
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-400">
                                                        <Ban className="w-4 h-4"/> Cancelled
                                                    </span>
                                                )}
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

            {/* ==========================================
                BOOKING DETAILS MODAL
                ========================================== */}
            {isDetailsModalOpen && selectedBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
                        <div className="bg-slate-900 px-6 py-5 flex items-center justify-between sticky top-0 z-10">
                            <div>
                                <h3 className="text-white font-bold text-xl flex items-center gap-2">
                                    Booking Overview
                                </h3>
                                <p className="text-slate-400 text-xs mt-1 font-mono">ID: {selectedBooking.orderId}</p>
                            </div>
                            <button onClick={() => setIsDetailsModalOpen(false)} className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div className="p-6 sm:p-8 space-y-6">
                            
                            {/* Top Info Banner */}
                            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Route</p>
                                    <p className="text-lg font-black text-slate-800 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-emerald-600" /> 
                                        {selectedBooking.direction || selectedBooking.route}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Total Paid</p>
                                    <p className={`text-2xl font-black ${selectedBooking.status === 'Cancelled' ? 'text-slate-400 line-through' : 'text-emerald-600'}`}>
                                        ₹{selectedBooking.price}
                                    </p>
                                </div>
                            </div>

                            {/* Data Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Left Col */}
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">Customer Info</p>
                                        <p className="font-bold text-slate-800">{selectedBooking.name || selectedBooking.customerName}</p>
                                        <p className="text-slate-600 text-sm">{selectedBooking.phone || selectedBooking.customerPhone}</p>
                                        <p className="text-slate-500 text-sm">{selectedBooking.email || selectedBooking.customerEmail}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">Trip Details</p>
                                        <p className="font-medium text-slate-800 capitalize">Type: {(selectedBooking.tripType || '').replace('_', ' ')}</p>
                                        <p className="font-medium text-slate-800">Vehicle: {selectedBooking.specificVehicle || selectedBooking.vehicleType || 'Not specified'}</p>
                                        <p className="font-medium text-slate-800">Date: {selectedBooking.date}</p>
                                        <p className="font-medium text-slate-800">Time: {selectedBooking.time}</p>
                                    </div>
                                </div>
                                
                                {/* Right Col */}
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">Payment Info</p>
                                        <p className="font-medium text-slate-800 text-sm">Status: <span className="text-emerald-600 font-bold">Paid Successfully</span></p>
                                        <p className="text-slate-500 text-xs font-mono mt-1 break-all">Razorpay ID: {selectedBooking.paymentId}</p>
                                        <p className="text-slate-500 text-xs mt-1">Booked On: {formatDateTime(selectedBooking.createdAt)}</p>
                                    </div>
                                    
                                    {selectedBooking.status === 'Driver Assigned' && (
                                        <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-lg">
                                            <p className="text-xs text-emerald-600 font-bold uppercase mb-2 flex items-center gap-1"><Car className="w-3 h-3"/> Driver Info</p>
                                            <p className="font-bold text-slate-800 text-sm">{selectedBooking.driverName}</p>
                                            <p className="text-slate-600 text-sm">{selectedBooking.driverPhone}</p>
                                            <p className="text-slate-600 text-sm font-mono mt-1 bg-white inline-block px-1 rounded">{selectedBooking.carNumber}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Actions Footer inside Details */}
                            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-end">
                                {(!selectedBooking.status || selectedBooking.status === 'Confirmed' || selectedBooking.status === 'Driver Assigned') && (
                                    <button 
                                        onClick={() => handleCancelAndRefund(selectedBooking)}
                                        className="px-6 py-3 bg-white border border-slate-200 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        <IndianRupee className="w-4 h-4" /> Cancel & Refund 80%
                                    </button>
                                )}
                                
                                {(!selectedBooking.status || selectedBooking.status === 'Confirmed') && (
                                    <button 
                                        onClick={() => { setIsDetailsModalOpen(false); setIsDriverModalOpen(true); }}
                                        className="px-6 py-3 bg-slate-900 text-[#ffc800] font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        <Car className="w-4 h-4" /> Assign Driver Now
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ==========================================
                DRIVER ASSIGNMENT MODAL 
                ========================================== */}
            {isDriverModalOpen && selectedBooking && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-fade-in">
                        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b-4 border-emerald-500">
                            <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                <Car className="w-5 h-5 text-emerald-400" /> Assign Driver
                            </h3>
                            <button onClick={() => setIsDriverModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <div className="p-6">
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-5 text-sm shadow-inner">
                                <p className="text-slate-500 mb-1 text-xs uppercase tracking-wider font-bold">Assigning for:</p>
                                <p className="font-black text-slate-900 text-lg">{selectedBooking.name || selectedBooking.customerName}</p>
                                <p className="text-slate-600 font-medium mt-1">{selectedBooking.direction || selectedBooking.route}</p>
                            </div>

                            <form onSubmit={handleAssignDriver} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Driver Name</label>
                                    <input required type="text" value={driverForm.name} onChange={e => setDriverForm({...driverForm, name: e.target.value})} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="e.g. Ramesh Kumar" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Driver Phone</label>
                                    <input required type="tel" value={driverForm.phone} onChange={e => setDriverForm({...driverForm, phone: e.target.value})} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="10 digit number" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">License Plate</label>
                                    <input required type="text" value={driverForm.carNumber} onChange={e => setDriverForm({...driverForm, carNumber: e.target.value})} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 uppercase" placeholder="e.g. UK07 AB 1234" />
                                </div>
                                
                                <button type="submit" disabled={isActionLoading} className="w-full mt-4 py-3.5 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors disabled:opacity-70 flex items-center justify-center gap-2 shadow-md active:scale-95">
                                    {isActionLoading ? 'Sending Details...' : <><Users className="w-5 h-5" /> Assign & Notify Customer</>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;