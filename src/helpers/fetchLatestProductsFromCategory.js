import { API_TOKEN, API_URL } from "./constants";

export const fetchCategoryBySlug = async ({ categorySlug }) => {
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
    return categoryData.docs[0];
  } catch (error) {
    console.error("Failed to fetch category:", error);
    return null;
  }
};

const fetchLatestProductsFromCategory = async ({
  categorySlug,
  limit,
  setLoading,
}) => {
  setLoading(true);
  try {
    const productsRes = await fetch(
      `${API_URL}/api/products?where[category.slug][in]=${categorySlug}&sort=-createdAt&limit=${limit}`,
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

    return productsData.docs;
  } catch (error) {
    console.error("Failed to fetch latest products:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export default fetchLatestProductsFromCategory;
