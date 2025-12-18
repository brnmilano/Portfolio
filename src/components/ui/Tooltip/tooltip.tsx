"use client";

import { useState } from "react";
import styles from "./tooltip.module.scss";
import { TooltipPositions, type TooltipProps } from "./tooltip.type";

export default function Tooltip({
  content,
  children,
  position = TooltipPositions.TOP,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <div className={`${styles.tooltip} ${styles[position]}`}>
          {content}

          <div className={styles.arrow} />
        </div>
      )}
    </div>
  );
}
