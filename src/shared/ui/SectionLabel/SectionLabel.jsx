import React from 'react'
import styles from "./SectionLabel.module.scss"

const SectionLabel = ({text}) => {
  return (
    <span className={styles.sectionLabel} dangerouslySetInnerHTML={{__html: text}} />
  )
}

export default SectionLabel