import React from "react";
import InsightsHero from "./components/InsightsHero/InsightsHero";
import { CACHE_TAG_IDEAS } from "@/helpers/constants";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import InsightsLoop from "./components/InsightsLoop/InsightsLoop";

export const metadata = {
  title: "Modulixo Insights | The Latest in 3D, Animation & Digital Design",
  description:
    "Stay ahead in the digital world! Explore articles, trends, and expert insights on 3D modelling, animation, video production, and UI/UX design.",
  openGraph: {
    title: "Modulixo Insights | The Latest in 3D, Animation & Digital Design",
    description:
      "Stay ahead in the digital world! Explore articles, trends, and expert insights on 3D modelling, animation, video production, and UI/UX design.",
    images: "https://modulixo.com/images/meta.png",
  },
};

async function getInsights() {
  const data = await fetchFromAPI("/api/ideas", {
    tag: CACHE_TAG_IDEAS,
  });
  return (data.docs || []).reverse();
}

const InsigthsPage = async () => {
  const insights = await getInsights();
  return (
    <>
      <InsightsHero />
      <InsightsLoop insights={insights} />
    </>
  );
};

export default InsigthsPage;
