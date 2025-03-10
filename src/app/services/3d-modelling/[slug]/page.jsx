import React from "react";
import CategorySection from "../../../../shared/ui/CategorySection/CategorySection";
import { fetchCategoryBySlug } from "@/helpers/fetchLatestProductsFromCategory";
import ModellingInnerContact from "../components/ModellingInnerContact/ModellingInnerContact";

const ModellingInner = async ({ params }) => {
  const awaitedParams = await params; // Await the params
  const { slug } = awaitedParams;

  const category = await fetchCategoryBySlug({ categorySlug: slug });

  return (
    <>
      <CategorySection
        categorySlug={slug}
        limit={999}
        title={category.title}
        subtitle={category.subtitle}
        description={category.description}
      />
      <ModellingInnerContact />
    </>
  );
};

export default ModellingInner;
