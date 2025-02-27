"use server";

import createMetadata from "@/helpers/metadata";
import ProductHero from "../components/ProductHero/ProductHero";
import { Metadata } from "next";
import { API_URL, CACHE_TAG_PRODUCTS } from "@/helpers/constants";
import fetchFromAPI from "@/helpers/fetchFromAPI";

export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return createMetadata({
    title: `${product.title} ${
      product.category?.id !== 6 ? "3D Printing Plan" : ""
    } | Modulixo`,
    description:
      product.category?.id !== 6
        ? `Get the ready-to-print 3D model for ${product.title}. Professionally designed for easy printing and everyday use.`
        : "",
    imageUrl: "https://Modulixo.com/images/meta.png",
  });
}

async function getProductBySlug(slug) {
  const data = await fetchFromAPI("/api/products", {
    query: `where[slug][equals]=${slug}`,
    tag: CACHE_TAG_PRODUCTS,
  });
  if (data.docs.length === 0) {
    return null;
  }

  console.log(data.docs[0]);

  return data.docs[0];
}

const ProductPage = async ({ params }) => {
  const awaitedParams = await params;
  const { slug, locale } = awaitedParams;
  const product = await getProductBySlug(slug);
  if (!product) {
    return <p>Product not found.</p>;
  }
  //console.log(product);

  return (
    <>
      <ProductHero product={product} />
    </>
  );
};

export default ProductPage;
