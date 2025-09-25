// Simple API utility for connecting frontend to backend
const API_BASE = 'http://localhost:8000/api';

export async function fetchUsers() {
  const response = await fetch(`${API_BASE}/users/`);
  return response.json();
}

export async function fetchActivities() {
  const response = await fetch(`${API_BASE}/activities/`);
  return response.json();
}

export async function fetchTeams() {
  const response = await fetch(`${API_BASE}/teams/`);
  return response.json();
}

export async function fetchLeaderboard() {
  const response = await fetch(`${API_BASE}/leaderboard/`);
  return response.json();
}

export async function fetchWorkouts() {
  const response = await fetch(`${API_BASE}/workouts/`);
  return response.json();
}
