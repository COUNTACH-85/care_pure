import HealthMetrics from "../components/HealthMetrics";
import WeeklyStepsChart from "../components/WeeklyStepsChart";
import ActivityFeed from "../components/ActivityFeed";
import QuickActions from "../components/QuickActions";
import Recommended from "../components/Recommended";
import React from "react";
import { supabase } from "../createClient";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
        {/* <Navbar /> */}

        {/* Main content */}
        <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
            <h1 className="text-3xl font-bold">Good Morning, Jane</h1>
            <p className="text-gray-500 mb-6">Here's your health overview for today</p>

            <HealthMetrics />

            <WeeklyStepsChart />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ActivityFeed />
                <QuickActions />
            </div>

            <Recommended />
        </div>
    </>
  );
};

export default Dashboard;
