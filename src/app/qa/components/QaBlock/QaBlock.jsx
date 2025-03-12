import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import React from "react";
import styles from "./QaBlock.module.scss";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const QaBlock = ({ title, questions }) => {
  return (
    <div className={styles.qaBlock}>
      <SectionTitle text={title} tag={"h2"} />
      <div className={styles.questions}>
        <Accordion
          className={styles.accordion}
          transition
          transitionTimeout={250}
        >
          {questions.map(({ question, answer }, i) => (
            <AccordionItem
              header={
                <div className={styles.qaHeader}>
                  <span>{question}</span>
                  <img src="/images/qa/arrow.svg" alt="arrow" />
                </div>
              }
              key={i}
            >
              <div className={styles.qaAnswer}>{answer}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default QaBlock;
