const QuickActions = () => {
    return (
      <div className="p-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          {["Log Water", "Log Meal", "Log Exercise", "Log Sleep"].map((action, idx) => (
            <button key={idx} className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
              {action}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default QuickActions;
  