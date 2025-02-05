export const getTokenFromLocalStorage = (): string | null => {
  try {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      return user?.token || null;
    }
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
  }
  return null;
};
