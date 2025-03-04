import styles from "./Skeleton.module.scss";

export default function Skeleton({ count = 1, height = 600 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={styles.skeletonCard}
          style={{ height: `${height}px` }}
        >
          <div className={styles.skeletonImage}></div>
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonButton}></div>
          </div>
        </div>
      ))}
    </>
  );
}
