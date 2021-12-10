import pool from "../db/database.js";

export async function getByUsername(username) {
  return goals.filter((goal) => goal.username === username);
}

export async function getBytargetMonth(username, targetMonth) {
  return goals.find(
    (goal) => goal.targetMonth === targetMonth && goal.username === username
  );
}

export async function create(content, targetMonth, username) {
  const goal = {
    id: String(idx),
    username,
    content,
    updatedAt: new Date().toString(),
    targetMonth,
    isDone: false,
  };
  idx++;
  goals = [goal, ...goals];
  return goal;
}

export async function updateContent(content, targetMonth, username) {
  const goal = await getBytargetMonth(username, targetMonth);
  goal.content = content;
  return goal;
}

export async function remove(username, targetMonth) {
  goals = goals.filter(
    (goal) => goal.username !== username || goal.targetMonth !== targetMonth
  );
}

export async function toggleDone(username, targetMonth) {
  const goal = await getBytargetMonth(username, targetMonth);
  if (goal.isDone === true) {
    goal.isDone = false;
  } else {
    goal.isDone = true;
  }
  return goal;
}
