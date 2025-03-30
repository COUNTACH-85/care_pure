const ActivityFeed = () => {
    const activities = [
      { text: "2,500 steps", time: "1 hour ago" },
      { text: "300ml Water", time: "2 hours ago" },
      { text: "7.3 hours Sleep", time: "Today" },
      { text: "15 minutes Meditation", time: "Yesterday" },
    ];
  
    return (
      <div className="p-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Activity Feed</h2>
        <ul>
          {activities.map((activity, idx) => (
            <li key={idx} className="py-2 border-b last:border-none">
              <p>{activity.text}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ActivityFeed;
  