import React from "react";
import styles from "./QaWrapper.module.scss";
import {
  animationQuestions    ,
  generalQuestions,
  threeDModellingQuestions,
  uiUxDesignQuestions,
  videoProductionQuestions,
} from "@/lib/qa";
import QaBlock from "../QaBlock/QaBlock";

const QaWrapper = () => {
  return (
    <section className={styles.qaWrapper}>
      <div className="_container">
        <div className={styles.body}>
          <QaBlock title={"General Questions"} questions={generalQuestions} />
          <QaBlock
            title={"3D Modelling"}
            questions={threeDModellingQuestions}
          />
          <QaBlock title={"Animation"} questions={animationQuestions} />
          <QaBlock
            title={"Video Production"}
            questions={videoProductionQuestions}
          />
          <QaBlock title={"UI/UX Design"} questions={uiUxDesignQuestions} />
        </div>
      </div>
    </section>
  );
};

export default QaWrapper;
