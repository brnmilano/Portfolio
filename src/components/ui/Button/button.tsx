"use client";

import { ButtonSizes, ButtonVariants, type ButtonProps } from "./button.types";
import styles from "./button.module.scss";
import { buildButtonClasses } from "@/utils/classNameBuilder";

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

  const buttonClasses = buildButtonClasses({
    baseStyle: social ? styles.button : styles.social,
    variant: styles[buttonVariant],
    size: styles[`size-${size}`],
  });

  return (
    <button
      className={buttonClasses}
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
