export async function fetchNotifications() {
  try {
    const response = await fetch("http://localhost:3000/notifications");

    if (!response.ok) {
      throw new Error("Failed to fetch notifications");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
