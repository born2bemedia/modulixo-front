import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import createMetadata from "@/helpers/metadata";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import { renderBlock } from "@/helpers/renderBlock";

export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const idea = await getIdeaBySlug(slug);

  if (!idea) {
    return {
      title: "Idea Not Found",
    };
  }

  return createMetadata({
    title: `${idea.title} | Modulixo`,
    description: "",
    //imageUrl: "#",
  });
}

export async function getIdeaBySlug(slug) {
  const data = await fetchFromAPI("/api/policies", {
    query: `where[slug][equals]=${slug}`,
    cache: "no-store",
  });
  return data?.docs?.length > 0 ? data.docs[0] : null;
}

const ArticlePage = async ({ params }) => {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const idea = await getIdeaBySlug(slug);

  if (!idea) {
    return <p>Idea not found.</p>;
  }

  return (
    <>
      <section className={styles.articleWrap}>
        <div className="_container">
          <div className={styles.body}>
            <div className={styles.nav}>
              <h2>Legal</h2>
              <ul className={styles.list}>
                <li
                  className={slug === "terms-and-conditions" ? styles.active : ""}
                >
                  <Link href="/legal/terms-and-conditions">Terms and Conditions</Link>
                </li>
                <li className={slug === "privacy-policy" ? styles.active : ""}>
                  <Link href="/legal/privacy-policy">Privacy Policy</Link>
                </li>
                <li
                  className={slug === "cookie-policy" ? styles.active : ""}
                >
                  <Link href="/legal/cookie-policy">Cookie Policy</Link>
                </li>
                <li
                  className={slug === "refund-policy" ? styles.active : ""}
                >
                  <Link href="/legal/refund-policy">Refund Policy</Link>
                </li>
              </ul>
            </div>
            <div className={styles.content}>
              <h1>{idea.title}</h1>
              {idea.content.root.children.map((block, index) =>
                renderBlock(block, index)
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
