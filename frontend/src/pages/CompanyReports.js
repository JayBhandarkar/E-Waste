import React, { useState } from 'react';
import { FileText, Download, Calendar, TrendingUp, BarChart3, PieChart } from 'lucide-react';

const CompanyReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const reportData = {
    totalCollected: 2450,
    totalRecycled: 2180,
    carbonSaved: 1250,
    revenue: 45600
  };

  const reports = [
    {
      id: 1,
      title: 'Monthly E-Waste Collection Report',
      type: 'Collection',
      date: '2024-01-31',
      status: 'Ready',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Recycling Efficiency Analysis',
      type: 'Analysis',
      date: '2024-01-30',
      status: 'Ready',
      size: '1.8 MB'
    },
    {
      id: 3,
      title: 'Carbon Footprint Reduction Report',
      type: 'Environmental',
      date: '2024-01-29',
      status: 'Processing',
      size: '3.2 MB'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
        <p className="text-gray-600">Track your company's e-waste management performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Collected</p>
              <p className="text-2xl font-bold text-gray-900">{reportData.totalCollected} kg</p>
            </div>
            <BarChart3 className="h-8 w-8 text-eco-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Recycled</p>
              <p className="text-2xl font-bold text-gray-900">{reportData.totalRecycled} kg</p>
            </div>
            <PieChart className="h-8 w-8 text-primary-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Carbon Saved</p>
              <p className="text-2xl font-bold text-gray-900">{reportData.carbonSaved} kg CO₂</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue Generated</p>
              <p className="text-2xl font-bold text-gray-900">${reportData.revenue}</p>
            </div>
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Report Generation */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Generate New Report</h2>
        <div className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Period</label>
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-eco-500 focus:border-transparent"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
            <input 
              type="date" 
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-eco-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
            <input 
              type="date" 
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-eco-500 focus:border-transparent"
            />
          </div>
          <button className="bg-eco-600 text-white px-6 py-2 rounded-lg hover:bg-eco-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Available Reports */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Report Title</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Size</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-3" />
                      {report.title}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{report.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      report.status === 'Ready' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{report.size}</td>
                  <td className="py-3 px-4">
                    {report.status === 'Ready' && (
                      <button className="flex items-center text-eco-600 hover:text-eco-700">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompanyReports;