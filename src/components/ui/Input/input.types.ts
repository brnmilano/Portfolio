/* eslint-disable @typescript-eslint/no-explicit-any */
import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import { FieldErrors, Path } from "react-hook-form";

/**
 * Posições possíveis para o ícone no input
 *
 * @default "right"
 */
export type IconPosition = "right";

/**
 * Props para o componente Input
 * Estende as propriedades nativas do elemento HTML input
 *
 * @example
 * ```tsx
 * <Input
 *   label="Nome de usuário"
 *   icon={<UserIcon />}
 *   iconPosition="right"
 *   errors={formState.errors}
 *   registerField="username"
 * />
 * ```
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Elemento de ícone a ser exibido dentro do input */
  icon?: ReactNode;

  /** Posição onde o ícone deve ser renderizado */
  iconPosition?: IconPosition;

  /** Classes CSS adicionais para o wrapper do container do input */
  containerClassName?: string;

  /** Texto de label acessível exibido acima do campo de input */
  label?: string;

  /**
   * Objeto de erros de validação do React Hook Form
   * Usado para exibir mensagens de erro específicas do campo
   */
  errors: FieldErrors<any>;

  /**
   * Identificador do campo para registro no React Hook Form
   * Usado para mapear o input ao estado do formulário e schema de validação
   * Retorna ao prop 'name' se não fornecido
   */
  registerField?: Path<any>;

  /** React ref encaminhado ao elemento input subjacente */
  ref?: Ref<HTMLInputElement>;
}

/**
 * Propriedades de acessibilidade para o botão de alternância de visibilidade da senha
 * Garante atributos ARIA adequados para leitores de tela
 *
 * @example
 * ```tsx
 * <button
 *   {...passwordToggleAccessibilityProps}
 *   onClick={togglePasswordVisibility}
 * >
 *   {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
 * </button>
 * ```
 */
export interface PasswordToggleAccessibilityProps {
  /** Label do leitor de tela descrevendo a ação do botão de alternância */
  "aria-label": string;

  /** Indica se a senha está atualmente visível (estado pressionado) */
  "aria-pressed": boolean;

  /** ID do elemento input controlado por este botão de alternância */
  "aria-controls": string;

  /** Texto de dica de ferramenta exibido ao passar o mouse */
  title: string;
}
