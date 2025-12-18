"use client";

import { ButtonSizes, ButtonVariants, type ButtonProps } from "./button.type";
import styles from "./button.module.scss";

export function Button(props: ButtonProps) {
  const {
    social,
    iconLeft,
    iconRight,
    text,
    buttonVariant = ButtonVariants.PRIMARY,
    size = ButtonSizes.SMALL,
    disabled = false,
    ariaLabel,
    ...rest
  } = props;

  return (
    <button
      className={`
        ${social ? styles.button : styles.social} 
        ${styles[buttonVariant]} 
        ${styles[`size-${size}`]}`}
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      {iconLeft && social && (
        <span className={styles.iconLeft}>{iconLeft}</span>
      )}

      {text}

      {iconRight && social && (
        <span className={styles.iconRight}>{iconRight}</span>
      )}
    </button>
  );
}
