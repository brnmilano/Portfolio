/**
 * Mescla múltiplas classes CSS e remove strings vazias/undefined
 * Útil para CSSModules dinâmicos e classes condicionais
 *
 * @example
 * ```tsx
 * mergeClasses(styles.container, isActive && styles.active, customClass)
 * // Retorna: "container active customClass"
 * ```
 *
 * @param classes - Classes a serem mescladas
 * @returns String com classes separadas por espaço
 */
export const mergeClasses = (
  ...classes: (string | undefined | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Builder para classes de button
 * Consolida a lógica de className do componente Button
 *
 * @example
 * ```tsx
 * buildButtonClasses({
 *   baseStyle: styles.button,
 *   variant: styles.primary,
 *   size: styles['size-small'],
 *   socialStyle: isSocial && styles.social
 * })
 * ```
 */
export const buildButtonClasses = ({
  baseStyle,
  variant,
  size,
  custom,
}: {
  baseStyle: string;
  variant: string;
  size: string;
  custom?: string;
}): string => {
  return mergeClasses(baseStyle, variant, size, custom);
};

/**
 * Builder para classes de input/textarea
 * Consolida a lógica de className do componente Input
 *
 * @example
 * ```tsx
 * buildInputClasses({
 *   baseStyle: styles.input,
 *   iconStyle: hasIcon && styles.withIcon,
 *   custom: customInputClass
 * })
 * ```
 */
export const buildInputClasses = ({
  baseStyle,
  conditionalStyle,
  custom,
}: {
  baseStyle: string;
  conditionalStyle?: string | false;
  custom?: string;
}): string => {
  return mergeClasses(baseStyle, conditionalStyle, custom);
};

/**
 * Builder para classes com container base
 * Consolida a lógica de className para containers
 *
 * @example
 * ```tsx
 * buildContainerClasses({
 *   base: styles.container,
 *   size: styles['size-medium'],
 *   custom: customContainerClass
 * })
 * ```
 */
export const buildContainerClasses = ({
  base,
  variant,
  custom,
}: {
  base: string;
  variant?: string;
  custom?: string;
}): string => {
  return mergeClasses(base, variant, custom);
};
