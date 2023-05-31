import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WakatimeStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
          headers: {
            Authorization: 'waka_87ec01d6-9081-43d7-a497-46cd2b753046',
          },
        });
        setStats(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }

  // Render the stats data in your desired format
  return (
    <div>
      <h2>Wakatime Stats</h2>
      {/* <p>Total Coding Hours: {stats.data.human_readable_total}</p>
      <p>Languages: {stats.data.languages.join(', ')}</p>
      Add more data as needed */}
    </div>
  );
};

export default WakatimeStats;