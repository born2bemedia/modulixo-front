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
    //console.log(categoryData.docs[0]);
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
    const categoryData = await fetchCategoryBySlug({ categorySlug });
    console.log(categoryData);
    const categoryId = categoryData.id;

    const productsRes = await fetch(
      `${API_URL}/api/products?where[category][in]=${categoryId}&sort=-createdAt&limit=${limit}`,
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
