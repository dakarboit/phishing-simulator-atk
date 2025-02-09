import React from 'react';
import { BarChart3, Users, Mail, Shield, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Active Campaigns', value: '3', icon: BarChart3, color: 'text-blue-600' },
    { label: 'Total Users', value: '1,234', icon: Users, color: 'text-green-600' },
    { label: 'Emails Sent', value: '5,678', icon: Mail, color: 'text-purple-600' },
    { label: 'Risk Score', value: '72%', icon: AlertTriangle, color: 'text-orange-600' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Security Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <h3 className="text-gray-600">{stat.label}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Campaigns</h2>
            <button className="text-blue-600 hover:text-blue-800">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">Q{i} Security Assessment</h3>
                  <p className="text-sm text-gray-600">Active • 234 participants</p>
                </div>
                <Shield className="w-6 h-6 text-green-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Risk Analysis</h2>
            <button className="text-blue-600 hover:text-blue-800">Details</button>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Email Opens</span>
                <span className="text-sm text-gray-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Link Clicks</span>
                <span className="text-sm text-gray-600">42%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Credentials Entered</span>
                <span className="text-sm text-gray-600">18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;