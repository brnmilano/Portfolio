/**
 * Tamanhos disponíveis para o componente Title
 * Define os tamanhos pequenos, médios e grandes
 *
 * @enum - Título pequeno = SMALL
 * @enum - Título médio = MEDIUM
 * @enum - Título grande = LARGE
 *
 * @example
 * ```tsx
 * <Title text="Pequeno" size={TitleSizes.SMALL} />
 * <Title text="Médio" size={TitleSizes.MEDIUM} />
 * <Title text="Grande" size={TitleSizes.LARGE} />
 * ```
 */
export enum TitleSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum TitleVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

/**
 * Props para o componente Title
 * Define as propriedades do título
 *
 * @example
 * ```tsx
 * <Title text="Meu Título" size={TitleSizes.MEDIUM} color="#000000" />
 * ```
 */
export interface TitleProps {
  /**
   * Texto do título a ser exibido
   */
  text: string;
  /**
   * Tamanho do título
   */
  size: TitleSizes;
  /**
   * Cor do título
   */
  color: string;
}
