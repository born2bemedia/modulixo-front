import { API_TOKEN, API_URL } from "./constants";

const fetchFromAPI = async (
  endpoint,
  { query = "", cache = "force-cache", tag } = {}
) => {
  try {
    const url = `${API_URL}${endpoint}${query && `?${query}`}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      cache,
      next: { tags: tag ? [tag] : [] },
    });
    return await response.json();
  } catch (error) {
    console.error("API fetch error:", error);
    return null;
  }
};

export default fetchFromAPI;
