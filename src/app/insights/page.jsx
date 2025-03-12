import React from "react";
import InsightsHero from "./components/InsightsHero/InsightsHero";
import { CACHE_TAG_IDEAS } from "@/helpers/constants";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import InsightsLoop from "./components/InsightsLoop/InsightsLoop";

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
