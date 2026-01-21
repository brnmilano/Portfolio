import type { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Variantes visuais disponíveis para o componente Button
 * Define os estilos primário, secundário e social
 *
 * @enum - Botão com estilo primário = PRIMARY
 * @enum - Botão com estilo secundário = SECONDARY
 * @enum - Botão com estilo social = SOCIAL
 *
 * @example
 * ```tsx
 * <Button text="Enviar" buttonVariant={ButtonVariants.PRIMARY} />
 * <Button text="Cancelar" buttonVariant={ButtonVariants.SECONDARY} />
 * <Button text="Saber mais" buttonVariant={ButtonVariants.SOCIAL} />
 * ```
 */
export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SOCIAL = "social",
}

/**
 * Tamanhos disponíveis para o componente Button
 * Define os tamanhos pequenos, médios e grandes
 *
 * @enum - Botão pequeno = SMALL
 * @enum - Botão médio = MEDIUM
 * @enum - Botão grande = LARGE
 *
 * @example
 * ```tsx
 * <Button text="Pequeno" size={ButtonSizes.SMALL} />
 * <Button text="Médio" size={ButtonSizes.MEDIUM} />
 * <Button text="Grande" size={ButtonSizes.LARGE} />
 * ```
 */
export enum ButtonSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

/**
 * Props para o componente Button
 * Extende as propriedades nativas do elemento button HTML
 *
 * @example
 * ```tsx
 * <Button
 *   icon={<SomeIcon />}
 *   text="Clique aqui"
 *   buttonVariant={ButtonVariants.PRIMARY}
 *   size={ButtonSizes.MEDIUM}
 *   ariaLabel="Botão de confirmação"
 *   disabled={false}
 * />
 * ```
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Ícone opcional à esquerda do texto do botão
   */
  iconLeft?: ReactNode;

  /**
   * Ícone opcional à direita do texto do botão
   */
  iconRight?: ReactNode;

  /**
   * Define se o botão é do tipo social, aplicando estilos específicos para botões de redes sociais
   */
  social: boolean;

  /** Texto a ser exibido no botão. Se não fornecido, pode usar children */
  text?: string;

  /** Variante visual do botão. Define a aparência com base no propósito
   * @default ButtonVariants.PRIMARY
   */
  buttonVariant?: ButtonVariants;

  /** Tamanho do botão. Controla padding e fonte
   * @default ButtonSizes.MEDIUM
   */
  size?: ButtonSizes;

  /** Label para acessibilidade (aria-label). Importante quando o botão não tem texto visível */
  ariaLabel?: string;

  /** Se o botão está desabilitado. Previne interação e aplica estilo visual de desabilitado */
  disabled?: boolean;

  /** Referência para o elemento button DOM. Útil para manipulação direta ou focus programático */
  ref?: React.Ref<HTMLButtonElement>;
}
