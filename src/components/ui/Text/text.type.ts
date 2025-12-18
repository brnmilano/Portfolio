/**
 * Tamanhos disponíveis para o componente Text
 * Define os tamanhos pequenos, médios e grandes
 *
 * @enum - Texto pequeno = SMALL
 * @enum - Texto médio = MEDIUM
 * @enum - Texto grande = LARGE
 *
 * @example
 * ```tsx
 * <Text text="Pequeno" size={TextSizes.SMALL} />
 * <Text text="Médio" size={TextSizes.MEDIUM} />
 * <Text text="Grande" size={TextSizes.LARGE} />
 * ```
 */
export enum TextSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum TextVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

/**
 * Props para o componente Text
 * Define as propriedades do texto
 *
 * @example
 * ```tsx
 * <Text text="Meu Texto" size={TextSizes.MEDIUM} color="#000000" />
 * ```
 */
export interface TextProps {
  /**
   * Texto do texto a ser exibido
   */
  text: string;
  /**
   * Tamanho do texto
   */
  size: TextSizes;
  /**
   * Cor do texto
   */
  color: string;
}
