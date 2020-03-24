import React from "react";
import { joinClassNames } from "./helpers";
import styles from "./text.module.scss";

export default function Text({ className, children }) {
  return <span className={joinClassNames(styles.name, className)}>{children}</span>;
}
