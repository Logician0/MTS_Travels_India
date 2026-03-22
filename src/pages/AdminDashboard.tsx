import React, { useState, useMemo } from 'react';

const AdminDashboard = () => {
    const [pin, setPin] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // 📊 GOD-TIER CALCULATIONS: Automatically compute business stats
    const stats = useMemo(() => {
        const totalRevenue = bookings.reduce((sum, b) => sum + (b.price || 0), 0);
        const totalBookings = bookings.length;
        const avgValue = totalBookings > 0 ? (totalRevenue / totalBookings).toFixed(0) : 0;
        return { totalRevenue, totalBookings, avgValue };
    }, [bookings]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            // 🚀 LIVE RENDER URL APPLIED HERE
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
            <nav className="bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-10 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="bg-emerald-600 text-white p-2 rounded-lg font-bold text-xl">MTS</div>
                    <h1 className="text-xl font-bold text-slate-800">Admin Control Panel</h1>
                </div>
                <button onClick={() => window.location.reload()} className="text-slate-500 hover:text-red-600 font-medium transition-colors">Logout Session</button>
            </nav>

            <div className="max-w-7xl mx-auto px-8 mt-8">
                {/* 🚀 STEP 1: TOP CLASS STAT CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Total Revenue</p>
                        <h3 className="text-4xl font-black text-slate-900 mt-1">₹{stats.totalRevenue.toLocaleString('en-IN')}</h3>
                        <div className="mt-2 text-emerald-600 text-sm font-medium">↑ Live from Database</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Active Bookings</p>
                        <h3 className="text-4xl font-black text-slate-900 mt-1">{stats.totalBookings}</h3>
                        <div className="mt-2 text-blue-600 text-sm font-medium">Completed Transactions</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Avg. Order Value</p>
                        <h3 className="text-4xl font-black text-slate-900 mt-1">₹{stats.avgValue}</h3>
                        <div className="mt-2 text-purple-600 text-sm font-medium">Per Customer Revenue</div>
                    </div>
                </div>

                {/* 📋 STEP 2: PREMIUM DATA TABLE */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                    <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white">
                        <h2 className="text-xl font-bold text-slate-800">Recent Booking Logs</h2>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Real-Time Data</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                    <th className="px-8 py-4">Status</th>
                                    <th className="px-8 py-4">Customer Details</th>
                                    <th className="px-8 py-4">Trip Information</th>
                                    <th className="px-8 py-4">Vehicle</th>
                                    <th className="px-8 py-4 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {bookings.map((booking) => (
                                    <tr key={booking._id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-8 py-5">
                                            <span className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                                PAID
                                            </span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="font-bold text-slate-900">{booking.customerName}</div>
                                            <div className="text-sm text-slate-500">{booking.customerPhone}</div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="text-sm font-semibold text-slate-800">{booking.route}</div>
                                            <div className="text-xs text-slate-400 font-medium uppercase mt-1">📅 {booking.date} at {booking.time}</div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="text-sm text-slate-700 font-medium">{booking.specificVehicle}</div>
                                            <div className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded inline-block mt-1 uppercase tracking-tighter">{booking.tripType}</div>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="text-lg font-black text-slate-900">₹{booking.price}</div>
                                            <div className="text-[10px] text-slate-400 font-mono mt-1">{booking.paymentId}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;