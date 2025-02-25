import { API_TOKEN, API_URL } from "./constants";

const shopFetchProducts = async ({
  categorySlugs,
  setLoading,
  setCategories,
  selectedCategory,
  selectedPrice,
  selectedSort,
  itemsPerPage,
  currentPage,
  setProducts,
  setTotalPages,
}) => {
  setLoading(true);

  try {
    const categoryRes = await fetch(
      `${API_URL}/api/categories?where[slug][in]=${categorySlugs.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const categoryData = await categoryRes.json();
    setCategories(categoryData.docs);
    const categoryIds = selectedCategory
      ? [selectedCategory]
      : categoryData.docs.map((cat) => cat.id);

    let priceFilter = "";
    if (selectedPrice) {
      const [min, max] = selectedPrice.split("-").map(Number);
      priceFilter = `&where[price][greater_than]=${min}&where[price][less_than]=${max}`;
    }

    const productsRes = await fetch(
      `${API_URL}/api/products?where[category][in]=${categoryIds.join(
        ","
      )}&sort=${selectedSort}${priceFilter}&limit=${itemsPerPage}&page=${currentPage}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const productsData = await productsRes.json();
    setProducts(productsData.docs);
    setTotalPages(productsData.totalPages);
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    setLoading(false);
  }
};

export default shopFetchProducts;
