"use client";

import { useState } from 'react';
import { 
  BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
  AreaChart, Area
} from 'recharts';

// Update the mock data with more realistic values
const monthlyRevenueData = [
  { month: 'Jan', revenue: 32000, profit: 12800, orders: 24 },
  { month: 'Feb', revenue: 45000, profit: 18000, orders: 32 },
  { month: 'Mar', revenue: 28000, profit: 11200, orders: 18 },
  { month: 'Apr', revenue: 58000, profit: 23200, orders: 45 },
  { month: 'May', revenue: 31000, profit: 12400, orders: 28 },
  { month: 'Jun', revenue: 42000, profit: 16800, orders: 36 },
];

// Mock products data
const productsData = [
  { id: 1, name: 'Recycled Plastic Bottles', status: 'Sold', price: 250, quantity: 50, buyer: 'EcoRetailer Inc.' },
  { id: 2, name: 'Eco-friendly Bags', status: 'Listed', price: 180, quantity: 100, buyer: null },
  { id: 3, name: 'Plastic Sheets', status: 'Sold', price: 320, quantity: 30, buyer: 'GreenMart' },
  { id: 4, name: 'Furniture Decor Set', status: 'Sold', price: 450, quantity: 20, buyer: 'SustainLife Co.' },
  { id: 5, name: 'Recycled Pellets', status: 'Listed', price: 150, quantity: 200, buyer: null },
];

// Update geographical data with more details
const geographicalData = [
  { name: 'North India', value: 35, totalOrders: 156, growth: '+12%' },
  { name: 'South India', value: 30, totalOrders: 142, growth: '+8%' },
  { name: 'East India', value: 15, totalOrders: 78, growth: '+15%' },
  { name: 'West India', value: 20, totalOrders: 98, growth: '+10%' },
];

// Update in-demand products with more metrics
const inDemandProductsData = [
  { name: 'Biodegradable Cutlery', demandLevel: 85, currentSupply: 30, potential: 95 },
  { name: 'Compostable Containers', demandLevel: 75, currentSupply: 40, potential: 85 },
  { name: 'Recycled Paper Products', demandLevel: 65, currentSupply: 45, potential: 75 },
  { name: 'Eco-friendly Packaging', demandLevel: 90, currentSupply: 20, potential: 98 },
];

// Update sales by category with more metrics
const salesByCategoryData = [
  { category: 'Plastic Bottles', sales: 12500, growth: 15, orders: 89 },
  { category: 'Plastic Bags', sales: 9800, growth: 8, orders: 65 },
  { category: 'Recycled Pellets', sales: 7500, growth: 12, orders: 45 },
  { category: 'Furniture Decor', sales: 15000, growth: 20, orders: 98 },
  { category: 'Plastic Sheets', sales: 11000, growth: 5, orders: 76 },
];

// Define chart colors
const CHART_COLORS = {
  primary: '#15803d',    // green-700
  secondary: '#166534',  // green-800
  tertiary: '#14532d',  // green-900
  success: '#22c55e',   // green-500
  warning: '#eab308',   // yellow-500
  error: '#dc2626',     // red-600
  gray: '#6b7280',      // gray-500
  revenue: '#15803d',   // green-700
  profit: '#4ade80',    // green-400
  // Additional colors for pie chart
  pieColors: {
    north: '#15803d',   // green-700
    south: '#059669',   // emerald-600
    east: '#0d9488',    // teal-600
    west: '#0891b2',    // cyan-600
  }
};

const SellerDashboardHome = () => {
  const [timeRange, setTimeRange] = useState('6months');
  
  // Calculate total metrics
  const totalRevenue = monthlyRevenueData.reduce((sum, data) => sum + data.revenue, 0);
  const totalProfit = monthlyRevenueData.reduce((sum, data) => sum + data.profit, 0);
  const totalSold = productsData.filter(p => p.status === 'Sold').length;
  
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Seller Dashboard</h1>
        <div className="flex space-x-2 w-full sm:w-auto">
          <button 
            onClick={() => setTimeRange('30days')}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-sm rounded-lg ${timeRange === '30days' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
          >
            30 Days
          </button>
          <button 
            onClick={() => setTimeRange('6months')}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-sm rounded-lg ${timeRange === '6months' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
          >
            6 Months
          </button>
          <button 
            onClick={() => setTimeRange('1year')}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-sm rounded-lg ${timeRange === '1year' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
          >
            1 Year
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-green-600">
          <h2 className="text-gray-500 text-sm uppercase font-semibold">Total Products Listed</h2>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">{productsData.length}</p>
          <p className="text-green-600 text-sm mt-2">↑ 15% from last month</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-green-700">
          <h2 className="text-gray-500 text-sm uppercase font-semibold">Products Sold</h2>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">{totalSold}</p>
          <p className="text-green-600 text-sm mt-2">↑ 8% from last month</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-green-800">
          <h2 className="text-gray-500 text-sm uppercase font-semibold">Total Revenue</h2>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">₹{totalRevenue.toLocaleString()}</p>
          <p className="text-green-600 text-sm mt-2">↑ 12% from last month</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-green-900">
          <h2 className="text-gray-500 text-sm uppercase font-semibold">Total Profit</h2>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">₹{totalProfit.toLocaleString()}</p>
          <p className="text-green-600 text-sm mt-2">↑ 10% from last month</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Monthly Revenue & Profit Chart */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Revenue & Profit</h2>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-700 mr-1"></span>
                Revenue
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-1"></span>
                Profit
              </span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={monthlyRevenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={CHART_COLORS.revenue} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={CHART_COLORS.revenue} stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={CHART_COLORS.profit} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={CHART_COLORS.profit} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickFormatter={(value) => `₹${value/1000}k`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    border: 'none',
                  }}
                  formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                  labelStyle={{ color: '#111827', fontWeight: 600 }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue"
                  stroke={CHART_COLORS.revenue}
                  fill="url(#revenueGradient)"
                  strokeWidth={2}
                  dot={{ r: 4, fill: 'white', strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  name="Profit"
                  stroke={CHART_COLORS.profit}
                  fill="url(#profitGradient)"
                  strokeWidth={2}
                  dot={{ r: 4, fill: 'white', strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Geographical Distribution */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Regional Distribution</h2>
          <div className="h-80 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={geographicalData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    <Cell fill={CHART_COLORS.pieColors.north} />
                    <Cell fill={CHART_COLORS.pieColors.south} />
                    <Cell fill={CHART_COLORS.pieColors.east} />
                    <Cell fill={CHART_COLORS.pieColors.west} />
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      border: 'none',
                    }}
                    formatter={(value, name, props) => [
                      `${value}% (${props.payload.totalOrders} orders)`,
                      props.payload.name
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 pl-6">
              <div className="space-y-4">
                {geographicalData.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                    <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: Object.values(CHART_COLORS.pieColors)[index] }}
                    />
                      <span className="text-sm font-medium text-gray-700">{entry.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-gray-900">{entry.value}%</span>
                      <span className="text-xs text-green-600 ml-2">{entry.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Sales by Category */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Sales by Category</h2>
          <div className="h-60 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesByCategoryData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={CHART_COLORS.success} stopOpacity={0.8}/>
                    <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickFormatter={(value) => `₹${value/1000}k`}
                />
                <YAxis
                  dataKey="category"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  width={120}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    border: 'none',
                  }}
                  formatter={(value, name, props) => [
                    `₹${value.toLocaleString()}`,
                    `${props.payload.category}`
                  ]}
                />
                <Bar
                  dataKey="sales"
                  fill="url(#salesGradient)"
                  radius={[0, 4, 4, 0]}
                  barSize={30}
                >
                  {salesByCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {salesByCategoryData.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-700">{category.category}</p>
                  <p className="text-xs text-gray-500">{category.orders} orders</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">₹{category.sales.toLocaleString()}</p>
                  <p className={`text-xs ${category.growth >= 10 ? 'text-green-600' : category.growth >= 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {category.growth > 0 ? '+' : ''}{category.growth}% growth
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Market Demand vs Supply */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Market Demand vs Supply Gap</h2>
          <div className="h-60 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={inDemandProductsData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis 
                  type="number" 
                  domain={[0, 100]} 
                  tickFormatter={(value) => `${value}%`}
                  tickCount={6}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  width={100}
                  tick={{ fill: '#374151', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    border: 'none',
                  }}
                  formatter={(value, name) => [
                    `${value}%`,
                    name === 'supplyGap' ? 'Supply Gap' : 'Current Supply'
                  ]}
                />
                <Bar 
                  dataKey="currentSupply" 
                  name="Current Supply" 
                  fill={CHART_COLORS.success}
                  barSize={20}
                />
                <Bar 
                  dataKey="supplyGap" 
                  name="Supply Gap" 
                  fill={CHART_COLORS.gray}
                  barSize={20}
                >
                  {inDemandProductsData.map((entry, index) => {
                    const gap = entry.demandLevel - entry.currentSupply;
                    return (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={gap > 30 ? CHART_COLORS.error : CHART_COLORS.warning}
                        fillOpacity={0.6} 
                      />
                    );
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {inDemandProductsData.map((item, index) => {
              const gap = item.demandLevel - item.currentSupply;
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  <span className={`text-sm font-semibold ${
                    gap > 30 ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {gap}% Gap
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Your Products</h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productsData.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.status === 'Sold' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{product.price}</td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.quantity}</td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.buyer || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* View All Link */}
        <div className="mt-4 text-right">
          <button 
            className="text-green-700 hover:text-green-800 font-medium text-sm sm:text-base"
            onClick={() => {
              console.log('Navigate to all products');
            }}
          >
            View All Products →
          </button>
        </div>
      </div>
      
      {/* Buyer Information */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Top Buyers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['EcoRetailer Inc.', 'GreenMart', 'SustainLife Co.', 'EcoStore'].map((buyer, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-medium text-gray-800">{buyer}</h3>
              <p className="text-sm text-gray-500 mt-1">Products Purchased: {3 - idx}</p>
              <div className="mt-2">
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  idx === 0 ? 'bg-green-100 text-green-800' : 
                  idx === 1 ? 'bg-blue-100 text-blue-800' : 
                  idx === 2 ? 'bg-purple-100 text-purple-800' : 
                  'bg-orange-100 text-orange-800'
                }`}>
                  {idx === 0 ? 'High Volume' : 
                   idx === 1 ? 'Regular Customer' : 
                   idx === 2 ? 'New Buyer' : 
                   'Potential Growth'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellerDashboardHome;

