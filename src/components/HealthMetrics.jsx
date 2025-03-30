const HealthMetrics = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {[
          { label: "Steps", value: "8,420", goal: "10,000", percentage: "84%" },
          { label: "Sleep", value: "7.3 hrs", status: "Good" },
          { label: "Heart Rate", value: "68 bpm", status: "Normal" },
          { label: "Water", value: "5 glasses", goal: "8 glasses", percentage: "63%" },
        ].map((item, idx) => (
          <div key={idx} className="p-4 bg-white shadow-md rounded-2xl text-center">
            <h3 className="text-xl font-semibold">{item.value}</h3>
            <p className="text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default HealthMetrics;
  