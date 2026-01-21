/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TextareaHTMLAttributes } from "react";
import { FieldErrors, Path } from "react-hook-form";

/**
 * Tamanhos disponíveis para o componente Textarea
 *
 * @enum - Textarea pequeno = SMALL
 * @enum - Textarea médio = MEDIUM
 * @enum - Textarea grande = LARGE
 *
 * @example
 * ```tsx
 * <Textarea label="Descrição" size={TextareaSizes.SMALL} />
 * <Textarea label="Comentário" size={TextareaSizes.MEDIUM} />
 * <Textarea label="Observações" size={TextareaSizes.LARGE} />
 * ```
 */
export enum TextareaSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

/**
 * Props para o componente Textarea
 * Estende as propriedades nativas do elemento HTML textarea
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Descrição"
 *   placeholder="Digite aqui..."
 *   showToolbar
 *   rows={5}
 *   errors={formState.errors}
 *   registerField="description"
 * />
 * ```
 */
export interface TextareaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
> {
  /** Classes CSS adicionais para o wrapper do container do textarea */
  containerClassName?: string;

  /** Texto de label acessível exibido acima do campo de textarea */
  label?: string;

  /**
   * Objeto de erros de validação do React Hook Form
   * Usado para exibir mensagens de erro específicas do campo
   */
  errors?: FieldErrors<any>;

  /**
   * Identificador do campo para registro no React Hook Form
   * Usado para mapear o textarea ao estado do formulário e schema de validação
   * Retorna ao prop 'name' se não fornecido
   */
  registerField?: Path<any>;

  /**
   * Exibe barra de ferramentas de formatação
   * @default false
   */
  showToolbar?: boolean;

  /**
   * Tamanho do textarea
   * @default MEDIUM
   */
  size?: TextareaSizes;

  /**
   * Altura mínima do textarea
   */
  minHeight?: string;

  /**
   * Permite redimensionamento do textarea
   * @default vertical
   */
  resize?: "none" | "both" | "horizontal" | "vertical";
}
