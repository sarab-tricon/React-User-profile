

export async function loadUsers(count = 15) {
  try {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
}
