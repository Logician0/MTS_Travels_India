import React, { useState, useMemo } from 'react';
import { Filter, Calendar as CalendarIcon, ArrowUpDown, Shield, Car, X, CheckCircle, Ban, IndianRupee, Eye, MapPin, LogOut, RefreshCw, Search } from 'lucide-react';

const AdminDashboard = () => {
    const [pin, setPin] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // 🎛️ FILTER & SORT STATES
    const [filterTrip, setFilterTrip] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');
    const [search, setSearch] = useState('');
    const [dateRange, setDateRange] = useState('all');
    const [customStart] = useState('');
    const [customEnd] = useState('');
    const [sortBy, setSortBy] = useState('date_desc');
    const [priorityAssign, setPriorityAssign] = useState(true);

    // 🚖 ACTION & MODAL STATES
    const [selectedBooking, setSelectedBooking] = useState<any | null>(null);
    const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [driverForm, setDriverForm] = useState({ name: '', phone: '', carNumber: '' });
    const [isActionLoading, setIsActionLoading] = useState(false);
    const [lastUpdated, setLastUpdated] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const API_URL = (import.meta as any).env?.VITE_API_URL || 'https://mts-travels-api-staging.suraj-logician.workers.dev';

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${API_URL}/api/bookings`, {
                headers: { 'X-Admin-Pin': pin }
            });
            const data = await response.json();
            if (data.success) {
                setBookings(data.bookings);
                setIsLoggedIn(true);
                setLastUpdated(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
            } else {
                setError('Access Denied: Invalid Security PIN');
            }
        } catch (err) {
            setError('Server connection failed. Check if Backend is running.');
        } finally {
            setLoading(false);
        }
    };

    const refreshBookings = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${API_URL}/api/bookings`, { headers: { 'X-Admin-Pin': pin } });
            const data = await response.json();
            if (!data.success) throw new Error('Unable to refresh bookings');
            setBookings(data.bookings);
            setLastUpdated(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
        } catch {
            setError('Could not refresh bookings. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setPin('');
        setBookings([]);
        setIsLoggedIn(false);
        setSelectedBooking(null);
    };

    const handleAssignDriver = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedBooking) return;
        setIsActionLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/assign-driver`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-Admin-Pin': pin },
                body: JSON.stringify({
                    orderId: selectedBooking.orderId,
                    driverName: driverForm.name,
                    driverPhone: driverForm.phone,
                    carNumber: driverForm.carNumber
                })
            });

            const data = await response.json();
            if (data.success) {
                setBookings(bookings.map(b => b._id === selectedBooking._id ? {
                    ...b, status: 'Driver Assigned', driverName: driverForm.name, driverPhone: driverForm.phone, carNumber: driverForm.carNumber
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

    const handleCancelAndRefund = async (booking: any) => {
        const customerName = booking.name || booking.customerName;
        const refundValue = (booking.price * 0.8).toFixed(2);
        const confirmText = `Are you sure you want to cancel this booking for ${customerName} and refund 80% (₹${refundValue})?`;

        if (!window.confirm(confirmText)) return;

        try {
            const response = await fetch(`${API_URL}/api/refund-booking`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-Admin-Pin': pin },
                body: JSON.stringify({ paymentId: booking.paymentId })
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

    const renderRideCountdown = (booking: any) => {
        if (booking.status === 'Cancelled') return <span className="text-red-600 font-bold text-[10px] sm:text-xs flex items-center gap-1 mt-1"><Ban className="w-3 h-3" /> Cancelled</span>;
        if (booking.status === 'Driver Assigned') return <span className="text-emerald-600 font-bold text-[10px] sm:text-xs flex items-center gap-1 mt-1"><CheckCircle className="w-3 h-3" /> Driver Assigned</span>;

        try {
            if (!booking.date || !booking.time) return <span className="text-slate-400 text-[10px] sm:text-xs mt-1 block">Time pending</span>;
            const [timePart, modifier] = booking.time.split(' ');
            let [hours, minutes] = timePart.split(':');
            if (hours === '12') hours = modifier === 'AM' ? '00' : '12';
            else if (modifier === 'PM') hours = (parseInt(hours, 10) + 12).toString();

            const rideDateTime = new Date(`${booking.date}T${hours.padStart(2, '0')}:${minutes}:00`);
            const now = new Date();
            const diffMs = rideDateTime.getTime() - now.getTime();
            const diffHours = diffMs / (1000 * 60 * 60);

            if (diffHours < 0) return <span className="text-slate-400 font-bold text-[10px] sm:text-xs mt-1 block tracking-tight">Ride Passed</span>;
            if (diffHours > 24) {
                const days = Math.floor(diffHours / 24);
                return <span className="text-emerald-600 font-bold text-[10px] sm:text-xs mt-1 block tracking-tight">{days} day{days > 1 ? 's' : ''} to ride</span>;
            }
            if (diffHours <= 24 && diffHours > 5) return <span className="text-amber-500 font-bold text-[10px] sm:text-xs mt-1 block tracking-tight">{Math.floor(diffHours)} hrs left</span>;
            if (diffHours <= 5) return <span className="text-red-600 font-black text-[10px] sm:text-xs mt-1 block tracking-tight animate-pulse">URGENT: {Math.floor(diffHours)} hrs!</span>;
        } catch (e) {
            return <span className="text-slate-400 text-[10px] sm:text-xs mt-1 block">Pending</span>;
        }
    };

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

        if (filterStatus !== 'all') {
            result = result.filter(b => filterStatus === 'needs_driver'
                ? (!b.status || b.status === 'Confirmed')
                : b.status === filterStatus);
        }

        if (search.trim()) {
            const query = search.trim().toLowerCase();
            result = result.filter(b => [b.customerName, b.name, b.customerPhone, b.phone, b.route, b.direction, b.orderId]
                .some(value => String(value || '').toLowerCase().includes(query)));
        }

        if (dateRange !== 'all') {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            result = result.filter(b => {
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
                    start.setHours(0, 0, 0, 0);
                    const end = new Date(customEnd);
                    end.setHours(23, 59, 59, 999);
                    return bookingMadeDate >= start && bookingMadeDate <= end;
                }
                return true;
            });
        }

        const getRideTimestamp = (obj: any) => {
            try {
                if (!obj.date || !obj.time) return Infinity;
                const [timePart, modifier] = obj.time.split(' ');
                let [hours, minutes] = timePart.split(':');
                if (hours === '12') hours = modifier === 'AM' ? '00' : '12';
                else if (modifier === 'PM') hours = (parseInt(hours, 10) + 12).toString();
                return new Date(`${obj.date}T${hours.padStart(2, '0')}:${minutes}:00`).getTime();
            } catch (e) { return Infinity; }
        };

        result.sort((a, b) => {
            if (priorityAssign) {
                const aNeedsDriver = (!a.status || a.status === 'Confirmed') ? 1 : 0;
                const bNeedsDriver = (!b.status || b.status === 'Confirmed') ? 1 : 0;
                if (aNeedsDriver !== bNeedsDriver) return bNeedsDriver - aNeedsDriver;
                if (aNeedsDriver === 1) return getRideTimestamp(a) - getRideTimestamp(b);
                const getBookingTime = (obj: any) => obj.createdAt ? new Date(obj.createdAt).getTime() : 0;
                return getBookingTime(b) - getBookingTime(a);
            }
            const getBookingTime = (obj: any) => obj.createdAt ? new Date(obj.createdAt).getTime() : 0;
            const getPrice = (obj: any) => Number(obj.price) || 0;

            if (sortBy === 'date_desc') return getBookingTime(b) - getBookingTime(a);
            if (sortBy === 'date_asc') return getBookingTime(a) - getBookingTime(b);
            if (sortBy === 'price_desc') return getPrice(b) - getPrice(a);
            if (sortBy === 'price_asc') return getPrice(a) - getPrice(b);
            return 0;
        });

        return result;
    }, [bookings, filterTrip, filterStatus, search, dateRange, customStart, customEnd, sortBy, priorityAssign]);

    const stats = useMemo(() => {
        const activeBookings = processedBookings.filter(b => b.status !== 'Cancelled');
        const totalRevenue = activeBookings.reduce((sum, b) => sum + (Number(b.price) || 0), 0);
        const totalBookings = activeBookings.length;
        const avgValue = totalBookings > 0 ? (totalRevenue / totalBookings).toFixed(0) : 0;
        return { totalRevenue, totalBookings, avgValue };
    }, [processedBookings]);

    const formatDateTime = (dateString: string) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4 sm:p-6">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                    <div className="text-center mb-6 sm:mb-8">
                        <div className="bg-emerald-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">MTS Command</h2>
                        <p className="text-slate-500 mt-1 text-xs sm:text-sm">Protected booking operations</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input type="password" placeholder="••••••••" value={pin} onChange={(e) => setPin(e.target.value)} className="w-full px-4 py-3 sm:py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-center text-lg sm:text-xl tracking-widest" required />
                        <button type="submit" disabled={loading} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 sm:py-4 rounded-xl transition-all active:scale-95 disabled:opacity-50 text-sm sm:text-base">
                            {loading ? 'Checking access…' : 'Unlock Dashboard'}
                        </button>
                    </form>
                    {error && <div className="mt-4 p-2.5 sm:p-3 bg-red-50 text-red-600 text-xs sm:text-sm rounded-lg text-center border border-red-100">{error}</div>}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-20">
            {/* Native App Magic: Hide Scrollbars */}
            <style>{`
                ::-webkit-scrollbar { display: none; }
                * { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            <div className="max-w-7xl mx-auto px-3 sm:px-8 pt-6 sm:pt-8">

                <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-7">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">MTS Travels India</p>
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Booking command centre</h1>
                        <p className="text-xs text-slate-500 mt-1">{lastUpdated ? `Last updated ${lastUpdated}` : 'Live booking view'}</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={refreshBookings} disabled={loading} className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 disabled:opacity-60">
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
                        </button>
                        <button onClick={logout} className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800">
                            <LogOut className="w-4 h-4" /> Sign out
                        </button>
                    </div>
                </header>

                {/* 🚀 COMPACT STAT CARDS FOR MOBILE */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-8">
                    <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-wider leading-tight">Revenue</p>
                        <h3 className="text-lg sm:text-4xl font-black text-slate-900 mt-0.5 sm:mt-1">₹{stats.totalRevenue.toLocaleString('en-IN')}</h3>
                    </div>
                    <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-wider leading-tight">Bookings</p>
                        <h3 className="text-lg sm:text-4xl font-black text-slate-900 mt-0.5 sm:mt-1">{stats.totalBookings}</h3>
                    </div>
                    <div className="col-span-2 md:col-span-1 bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-wider leading-tight">Avg Order Value</p>
                        <h3 className="text-lg sm:text-4xl font-black text-slate-900 mt-0.5 sm:mt-1">₹{stats.avgValue}</h3>
                    </div>
                </div>

                {/* 🎛️ DENSE CONTROLS */}
                <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm mb-4 sm:mb-6 flex flex-col lg:flex-row gap-3 sm:gap-4 items-end lg:items-center justify-between">
                    <div className="flex flex-row flex-wrap sm:flex-nowrap gap-2 sm:gap-4 w-full lg:w-auto">
                        <div className="flex-1 flex items-center gap-1.5 sm:gap-2 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2">
                            <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                            <select value={filterTrip} onChange={(e) => setFilterTrip(e.target.value)} className="bg-transparent outline-none text-xs sm:text-sm font-medium text-slate-700 w-full cursor-pointer">
                                <option value="all">All Trips</option>
                                <option value="one_way">One Way</option>
                                <option value="round_trip">Round Trip</option>
                            </select>
                        </div>
                        <div className="flex-1 flex items-center gap-1.5 sm:gap-2 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2">
                            <CalendarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                            <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="bg-transparent outline-none text-xs sm:text-sm font-medium text-slate-700 w-full cursor-pointer">
                                <option value="all">All Time</option>
                                <option value="last_7">Last 7 Days</option>
                                <option value="last_30">Last 30 Days</option>
                            </select>
                        </div>
                        <div className="flex-1 flex items-center gap-1.5 sm:gap-2 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2">
                            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="bg-transparent outline-none text-xs sm:text-sm font-medium text-slate-700 w-full cursor-pointer" aria-label="Booking status">
                                <option value="all">All Statuses</option>
                                <option value="needs_driver">Needs Driver</option>
                                <option value="Driver Assigned">Assigned</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-row sm:flex-nowrap gap-2 sm:gap-4 w-full lg:w-auto">
                        <div onClick={() => setPriorityAssign(!priorityAssign)} className={`flex-1 flex items-center justify-center sm:justify-start gap-2 border rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-4 sm:py-2 cursor-pointer transition-all select-none ${priorityAssign ? 'bg-amber-50 border-amber-300' : 'bg-slate-50 border-slate-200'}`}>
                            <input type="checkbox" checked={priorityAssign} readOnly className="w-3 h-3 sm:w-4 sm:h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500 pointer-events-none" />
                            <div className="flex flex-col">
                                <span className={`text-xs sm:text-sm font-bold leading-none ${priorityAssign ? 'text-amber-800' : 'text-slate-600'}`}>Priority</span>
                            </div>
                        </div>

                        <div className={`flex-1 flex items-center gap-1.5 sm:gap-2 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 transition-opacity ${priorityAssign ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
                            <ArrowUpDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} disabled={priorityAssign} className="bg-transparent outline-none text-[10px] sm:text-sm font-medium text-slate-700 w-full cursor-pointer disabled:cursor-not-allowed">
                                <option value="date_desc">Newest First</option>
                                <option value="date_asc">Oldest First</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="relative mb-4 sm:mb-6">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search customer, phone, route, or order ID" className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>

                {/* 📋 RESPONSIVE DATA CONTAINER */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm sm:shadow-xl overflow-hidden">

                    {/* 💻 DESKTOP TABLE VIEW (Hidden on Mobile) */}
                    <div className="hidden lg:block overflow-x-auto">
                        {processedBookings.length === 0 ? (
                            <div className="p-8 sm:p-12 text-center text-slate-500 text-sm sm:text-base font-medium">No bookings found.</div>
                        ) : (
                            <table className="w-full text-left border-collapse min-w-[1000px]">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest font-bold">
                                        <th className="px-6 py-4">Status/Pay</th>
                                        <th className="px-6 py-4">Booked Time</th>
                                        <th className="px-6 py-4">Customer</th>
                                        <th className="px-6 py-4">Ride Schedule</th>
                                        <th className="px-6 py-4 text-center">Details</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {processedBookings.map((booking) => (
                                        <tr key={booking._id} className={`transition-colors group ${priorityAssign && (!booking.status || booking.status === 'Confirmed') ? 'bg-amber-50/40 hover:bg-amber-50' : 'hover:bg-slate-50'}`}>
                                            <td className="px-6 py-5">
                                                <div className={`font-black text-lg ${booking.status === 'Cancelled' ? 'text-slate-400 line-through' : 'text-slate-900'}`}>₹{booking.price}</div>
                                                <div className="mt-1">
                                                    {booking.status === 'Cancelled' ? (
                                                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">Refunded</span>
                                                    ) : (
                                                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">Paid</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-sm text-slate-600 font-medium whitespace-nowrap">
                                                {formatDateTime(booking.createdAt)}
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="font-bold text-sm text-slate-900 line-clamp-1">{booking.name || booking.customerName}</div>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <div className="text-sm font-bold text-slate-800">
                                                    {booking.date} <span className="text-slate-400 font-normal">|</span> {booking.time}
                                                </div>
                                                {renderRideCountdown(booking)}
                                            </td>
                                            <td className="px-6 py-5 text-center">
                                                <button onClick={() => { setSelectedBooking(booking); setIsDetailsModalOpen(true); }} className="px-3 py-2 bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5">
                                                    <Eye className="w-4 h-4" /> View Details
                                                </button>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                {(!booking.status || booking.status === 'Confirmed') ? (
                                                    <button onClick={() => { setSelectedBooking(booking); setIsDriverModalOpen(true); }} className="px-4 py-2 bg-slate-900 text-[#ffc800] text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm active:scale-95 whitespace-nowrap">
                                                        <Car className="w-4 h-4" /> Assign
                                                    </button>
                                                ) : booking.status === 'Driver Assigned' ? (
                                                    <span className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 whitespace-nowrap">
                                                        <CheckCircle className="w-4 h-4" /> Assigned
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-400 whitespace-nowrap">
                                                        <Ban className="w-4 h-4" /> Cancelled
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* 📱 MOBILE CARD VIEW (Hidden on Desktop) */}
                    <div className="block lg:hidden divide-y divide-slate-100">
                        {processedBookings.length === 0 ? (
                            <div className="p-8 text-center text-slate-500 text-sm font-medium">No bookings found.</div>
                        ) : (
                            processedBookings.map((booking) => (
                                <div key={booking._id} className={`p-4 flex flex-col gap-3 transition-colors ${priorityAssign && (!booking.status || booking.status === 'Confirmed') ? 'bg-amber-50/40 hover:bg-amber-50' : 'hover:bg-slate-50'}`}>

                                    {/* Top Row: Badges & Time */}
                                    <div className="flex justify-between items-center">
                                        {booking.status === 'Cancelled' ? (
                                            <span className="px-2 py-1 rounded bg-slate-100 text-slate-500 text-[9px] font-bold uppercase tracking-wider flex items-center gap-1"><Ban className="w-3 h-3" /> Refunded</span>
                                        ) : (
                                            <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-[9px] font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Paid</span>
                                        )}
                                        <span className="text-[10px] text-slate-500 font-medium">{formatDateTime(booking.createdAt)}</span>
                                    </div>

                                    {/* Middle Row: Name & Price */}
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1">
                                            <h4 className="font-black text-slate-900 text-base leading-tight line-clamp-1">{booking.name || booking.customerName}</h4>
                                            <p className="text-[11px] font-bold text-slate-500 mt-1 line-clamp-1 uppercase tracking-tight">{booking.direction || booking.route}</p>
                                        </div>
                                        <div className={`font-black text-lg text-right flex-shrink-0 ${booking.status === 'Cancelled' ? 'text-slate-400 line-through' : 'text-emerald-700'}`}>
                                            ₹{booking.price}
                                        </div>
                                    </div>

                                    {/* Schedule Box */}
                                    <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex justify-between items-center shadow-sm mt-1">
                                        <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                                            📅 {booking.date} <span className="text-slate-300 font-normal">|</span> {booking.time}
                                        </div>
                                        <div className="text-right">
                                            {renderRideCountdown(booking)}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 mt-2">
                                        <button onClick={() => { setSelectedBooking(booking); setIsDetailsModalOpen(true); }} className="flex-1 py-2.5 bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 active:scale-95">
                                            <Eye className="w-4 h-4" /> Details
                                        </button>

                                        {(!booking.status || booking.status === 'Confirmed') ? (
                                            <button onClick={() => { setSelectedBooking(booking); setIsDriverModalOpen(true); }} className="flex-1 py-2.5 bg-slate-900 text-[#ffc800] text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 shadow-md active:scale-95">
                                                <Car className="w-4 h-4" /> Assign
                                            </button>
                                        ) : booking.status === 'Driver Assigned' ? (
                                            <span className="flex-1 py-2.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center gap-1.5">
                                                <CheckCircle className="w-4 h-4" /> Assigned
                                            </span>
                                        ) : (
                                            <span className="flex-1 py-2.5 rounded-lg text-xs font-bold bg-slate-50 text-slate-400 border border-slate-100 flex items-center justify-center gap-1.5">
                                                <Ban className="w-4 h-4" /> Cancelled
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* ==========================================
                BOTTOM-SHEET BOOKING DETAILS MODAL 
                ========================================== */}
            {isDetailsModalOpen && selectedBooking && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-in max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
                        <div className="bg-slate-900 px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between sticky top-0 z-10">
                            <div>
                                <h3 className="text-white font-bold text-lg sm:text-xl flex items-center gap-2">Overview</h3>
                                <p className="text-slate-400 text-[10px] sm:text-xs mt-0.5 font-mono">ID: {selectedBooking.orderId}</p>
                            </div>
                            <button onClick={() => setIsDetailsModalOpen(false)} className="text-slate-400 hover:text-white bg-slate-800 p-1.5 sm:p-2 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">

                            <div className="flex flex-row items-center justify-between gap-3 p-3 sm:p-4 bg-slate-50 border border-slate-100 rounded-xl">
                                <div className="flex-1">
                                    <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Route</p>
                                    <p className="text-sm sm:text-lg font-black text-slate-800 flex items-start gap-1.5 leading-tight">
                                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        {selectedBooking.direction || selectedBooking.route}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Total</p>
                                    <p className={`text-xl sm:text-2xl font-black ${selectedBooking.status === 'Cancelled' ? 'text-slate-400 line-through' : 'text-emerald-600'}`}>
                                        ₹{selectedBooking.price}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-3 sm:space-y-4">
                                    <div>
                                        <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase mb-1">Customer Info</p>
                                        <p className="font-bold text-slate-800 text-sm">{selectedBooking.name || selectedBooking.customerName}</p>
                                        <p className="text-slate-600 text-xs sm:text-sm">{selectedBooking.phone || selectedBooking.customerPhone}</p>
                                        <p className="text-slate-500 text-[10px] sm:text-sm">{selectedBooking.email || selectedBooking.customerEmail}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase mb-1">Trip Details</p>
                                        <p className="font-medium text-slate-800 text-xs sm:text-sm capitalize">Type: {(selectedBooking.tripType || '').replace('_', ' ')}</p>
                                        <p className="font-medium text-slate-800 text-xs sm:text-sm">Vehicle: {selectedBooking.specificVehicle || selectedBooking.vehicleType || 'Not specified'}</p>
                                        <p className="font-medium text-slate-800 text-xs sm:text-sm">Date: {selectedBooking.date}</p>
                                        <p className="font-medium text-slate-800 text-xs sm:text-sm">Time: {selectedBooking.time}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 sm:space-y-4">
                                    <div>
                                        <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase mb-1">Payment Info</p>
                                        <p className="text-[10px] sm:text-xs font-mono break-all text-slate-500">ID: {selectedBooking.paymentId}</p>
                                        <p className="text-slate-500 text-[10px] sm:text-xs mt-1">Booked: {formatDateTime(selectedBooking.createdAt)}</p>
                                    </div>

                                    {selectedBooking.status === 'Driver Assigned' && (
                                        <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-lg">
                                            <p className="text-[10px] text-emerald-600 font-bold uppercase mb-1.5 flex items-center gap-1"><Car className="w-3 h-3" /> Driver Info</p>
                                            <p className="font-bold text-slate-800 text-xs sm:text-sm">{selectedBooking.driverName}</p>
                                            <p className="text-slate-600 text-xs sm:text-sm">{selectedBooking.driverPhone}</p>
                                            <p className="text-slate-600 text-[10px] sm:text-sm font-mono mt-1 bg-white inline-block px-1 rounded">{selectedBooking.carNumber}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="pt-4 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5 sm:justify-end pb-4 sm:pb-0">
                                {(!selectedBooking.status || selectedBooking.status === 'Confirmed' || selectedBooking.status === 'Driver Assigned') && (
                                    <button onClick={() => handleCancelAndRefund(selectedBooking)} className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-3 bg-white border border-slate-200 text-red-600 text-xs sm:text-sm font-bold rounded-xl active:bg-red-50 flex items-center justify-center gap-2">
                                        <IndianRupee className="w-4 h-4" /> Cancel & Refund 80%
                                    </button>
                                )}

                                {(!selectedBooking.status || selectedBooking.status === 'Confirmed') && (
                                    <button onClick={() => { setIsDetailsModalOpen(false); setIsDriverModalOpen(true); }} className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-3 bg-slate-900 text-[#ffc800] text-xs sm:text-sm font-bold rounded-xl active:scale-95 flex items-center justify-center gap-2">
                                        <Car className="w-4 h-4" /> Assign Driver Now
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ==========================================
                BOTTOM-SHEET DRIVER ASSIGNMENT MODAL 
                ========================================== */}
            {isDriverModalOpen && selectedBooking && (
                <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-fade-in">
                        <div className="bg-slate-900 px-4 py-4 sm:px-6 sm:py-4 flex items-center justify-between border-b-4 border-emerald-500">
                            <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                                <Car className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" /> Assign Driver
                            </h3>
                            <button onClick={() => setIsDriverModalOpen(false)} className="text-slate-400 hover:text-white">
                                <X className="w-5 h-5 sm:w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-5 sm:p-6 pb-8 sm:pb-6">
                            <div className="bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded-xl mb-4 sm:mb-5 shadow-inner">
                                <p className="text-slate-500 mb-0.5 text-[10px] sm:text-xs uppercase tracking-wider font-bold">Assigning for:</p>
                                <p className="font-black text-slate-900 text-base sm:text-lg leading-tight">{selectedBooking.name || selectedBooking.customerName}</p>
                                <p className="text-slate-600 font-medium mt-0.5 text-xs sm:text-sm line-clamp-1">{selectedBooking.direction || selectedBooking.route}</p>
                            </div>

                            <form onSubmit={handleAssignDriver} className="space-y-3 sm:space-y-4">
                                <div>
                                    <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Driver Name</label>
                                    <input required type="text" value={driverForm.name} onChange={e => setDriverForm({ ...driverForm, name: e.target.value })} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1" placeholder="e.g. Ramesh Kumar" />
                                </div>
                                <div>
                                    <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Driver Phone</label>
                                    <input required type="tel" value={driverForm.phone} onChange={e => setDriverForm({ ...driverForm, phone: e.target.value })} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1" placeholder="10 digit number" />
                                </div>
                                <div>
                                    <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">License Plate</label>
                                    <input required type="text" value={driverForm.carNumber} onChange={e => setDriverForm({ ...driverForm, carNumber: e.target.value })} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 uppercase" placeholder="e.g. UK07 AB 1234" />
                                </div>

                                <button type="submit" disabled={isActionLoading} className="w-full mt-2 py-3 sm:py-3.5 bg-emerald-600 text-white rounded-lg sm:rounded-xl text-sm font-bold active:bg-emerald-700 disabled:opacity-70 flex items-center justify-center gap-2 active:scale-95 transition-transform">
                                    {isActionLoading ? 'Sending Details...' : <><Users className="w-4 h-4 sm:w-5 sm:h-5" /> Notify Customer</>}
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
