import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchActivities, fetchTeams, fetchLeaderboard, fetchWorkouts } from './api';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [teams, setTeams] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
    fetchActivities().then(setActivities);
    fetchTeams().then(setTeams);
    fetchLeaderboard().then(setLeaderboard);
    fetchWorkouts().then(setWorkouts);
  }, []);

  return (
    <div className="App">
      <h1>OctoFit Tracker</h1>
      <section>
        <h2>Users</h2>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </section>
      <section>
        <h2>Activities</h2>
        <pre>{JSON.stringify(activities, null, 2)}</pre>
      </section>
      <section>
        <h2>Teams</h2>
        <pre>{JSON.stringify(teams, null, 2)}</pre>
      </section>
      <section>
        <h2>Leaderboard</h2>
        <pre>{JSON.stringify(leaderboard, null, 2)}</pre>
      </section>
      <section>
        <h2>Workouts</h2>
        <pre>{JSON.stringify(workouts, null, 2)}</pre>
      </section>
    </div>
  );
}

export default App;
