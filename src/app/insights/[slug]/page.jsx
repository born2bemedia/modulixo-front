import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import createMetadata from "@/helpers/metadata";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import { renderBlock } from "@/helpers/renderBlock";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import Image from "next/image";
import { API_URL } from "@/helpers/constants";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";

// Ensure CACHE_TAG_IDEAS is defined or imported as needed.
const CACHE_TAG_IDEAS = "ideas";

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const idea = await getIdeaBySlug(slug);

  if (!idea) {
    return {
      title: "Idea Not Found",
    };
  }

  return createMetadata({
    title: idea.seo_title,
    description: idea.seo_description,
  });
}

async function getInsights() {
  const data = await fetchFromAPI("/api/ideas", {
    tag: CACHE_TAG_IDEAS,
  });
  // Adjust the order as needed
  return (data.docs || []).reverse();
}

export async function getIdeaBySlug(slug) {
  const data = await fetchFromAPI("/api/ideas", {
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

  const insights = await getInsights();

  const currentIndex = insights.findIndex((item) => item.slug === slug);

  console.log("currentIndex", currentIndex);

  console.log("insights", insights.length);

  const prevArticle = currentIndex > 0 ? insights[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < insights.length - 1 ? insights[currentIndex + 1] : null;

  return (
    <>
      <section className={styles.articleWrap}>
        <div className="_container">
          <div className={styles.body}>
            <div className={styles.nav}>
              <h2>Insights</h2>
              <ul className={styles.list}>
                <li
                  className={
                    slug ===
                    "the-future-of-3d-modelling-whats-next-in-digital-design"
                      ? styles.active
                      : ""
                  }
                >
                  <Link href="/insights/the-future-of-3d-modelling-whats-next-in-digital-design">
                    Article 1
                  </Link>
                </li>
                <li
                  className={
                    slug ===
                    "motion-magic-how-animation-is-transforming-branding-and-marketing"
                      ? styles.active
                      : ""
                  }
                >
                  <Link href="/insights/motion-magic-how-animation-is-transforming-branding-and-marketing">
                    Article 2
                  </Link>
                </li>
                <li
                  className={
                    slug ===
                    "the-art-of-storytelling-in-video-production-more-than-just-a-pretty-edit"
                      ? styles.active
                      : ""
                  }
                >
                  <Link href="/insights/the-art-of-storytelling-in-video-production-more-than-just-a-pretty-edit">
                    Article 3
                  </Link>
                </li>
                <li
                  className={
                    slug ===
                    "uiux-trends-redefining-digital-experiences-in-2025"
                      ? styles.active
                      : ""
                  }
                >
                  <Link href="/insights/uiux-trends-redefining-digital-experiences-in-2025">
                    Article 4
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.content}>
              <SectionLabel text={idea.image.alt} />
              <Image
                src={`${API_URL}${idea.image.url}`}
                alt={idea.image.alt}
                width={682}
                height={200}
                quality={100}
              />
              <h1>{idea.title}</h1>
              {idea.content.root.children.map((block, index) =>
                renderBlock(block, index)
              )}
              <div className={styles.buttons}>
                {prevArticle && (
                  <span className={styles.prev}>
                    <WhiteButton
                      text={`Article ${currentIndex}`}
                      url={`/insights/${prevArticle.slug}`}
                    />
                  </span>
                )}
                {nextArticle && (
                  <span className={styles.next}>
                    <WhiteButton
                      text={`Article ${currentIndex + 2}`}
                      url={`/insights/${nextArticle.slug}`}
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
