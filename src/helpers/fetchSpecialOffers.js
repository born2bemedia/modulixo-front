import { API_TOKEN, API_URL } from "./constants";

const fetchSpecialOffers = async ({ setLoading }) => {
  try {
    setLoading(true);
    const productsRes = await fetch(`${API_URL}/api/special-offers`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });

    if (!productsRes.ok) {
      throw new Error(`Error ${productsRes.status}: ${productsRes.statusText}`);
    }

    const productsData = await productsRes.json();

    return productsData.docs;
  } catch (error) {
    console.error("Failed to fetch latest products:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export default fetchSpecialOffers;
