import { API_TOKEN, API_URL } from "./constants";

const fetchLatestProductsFromCategory = async ({
  categorySlug,
  limit,
  setLoading,
}) => {
  setLoading(true);
  try {
    const categoryRes = await fetch(
      `${API_URL}/api/categories?where[slug][in]=${categorySlug}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!categoryRes.ok) {
      throw new Error(`Error ${categoryRes.status}: ${categoryRes.statusText}`);
    }

    const categoryData = await categoryRes.json();
    const categoryIds = categoryData.docs.map((cat) => cat.id);

    // Fetch products sorted by createdAt in descending order to get the latest
    const productsRes = await fetch(
      `${API_URL}/api/products?where[category][in]=${categoryIds.join(
        ","
      )}&sort=-createdAt&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "force-cache",
      }
    );

    if (!productsRes.ok) {
      throw new Error(`Error ${productsRes.status}: ${productsRes.statusText}`);
    }

    const productsData = await productsRes.json();
    //console.log(productsData);

    // Return the latest 4 products
    return productsData.docs;
  } catch (error) {
    console.error("Failed to fetch latest products:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export default fetchLatestProductsFromCategory;
