import React from "react";
import CategorySection from "../../../../shared/ui/CategorySection/CategorySection";
import { fetchCategoryBySlug } from "@/helpers/fetchLatestProductsFromCategory";
import ModellingInnerContact from "../components/ModellingInnerContact/ModellingInnerContact";
import createMetadata from "@/helpers/metadata";

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const category = await fetchCategoryBySlug({ categorySlug: slug });

  if (!category) {
    return {
      title: "Modulixo",
    };
  }

  return createMetadata({
    title: category.seo_title ? category.seo_title : category.title,
    description: category.seo_description
      ? category.seo_description
      : category.description,
  });
}

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
        link={"/services/3d-modelling"}
        buttonText={"Explore Our Full 3D Modelling Collection"}
      />
      <ModellingInnerContact />
    </>
  );
};

export default ModellingInner;
