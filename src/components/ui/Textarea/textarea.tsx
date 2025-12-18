"use client";

import { useId, useMemo, useRef } from "react";
import type { TextareaProps } from "./textarea.types";
import { TextareaSizes } from "./textarea.types";

import styles from "./textarea.module.scss";

/**
 * @description Componente de Textarea com suporte a barra de ferramentas de formatação.
 * Possui acessibilidade, estilos personalizáveis e suporte a diferentes tamanhos.
 *
 * @param param0.label Label do textarea, exibido acima do campo
 * @param param0.showToolbar Exibe barra de ferramentas de formatação
 * @param param0.size Tamanho do textarea (small, medium, large)
 * @param param0.containerClassName Classes CSS personalizadas para o container
 * @param param0.errors Objeto de erros de validação do React Hook Form
 * @param param0.registerField Identificador do campo para registro no React Hook Form
 * @param param0.name Nome do textarea
 * @param param0.rows Número de linhas visíveis
 * @param param0.minHeight Altura mínima do textarea
 * @param param0.resize Tipo de redimensionamento permitido
 * @param rest Todas as outras propriedades do textarea HTML
 * @returns Componente Textarea renderizado
 */
export function Textarea({
  label,
  size = TextareaSizes.MEDIUM,
  containerClassName,
  errors,
  registerField,
  name,
  rows = 4,
  minHeight,
  resize = "vertical",
  className,
  ...rest
}: TextareaProps) {
  const textareaId = useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fieldName = registerField || name || "";

  const containerClasses = useMemo(
    () =>
      `${styles.container} ${styles[size]} ${containerClassName || ""}`.trim(),
    [containerClassName, size],
  );

  const textareaClasses = useMemo(
    () => `${styles.textarea} ${className || ""}`.trim(),
    [className],
  );

  const hasError = errors && fieldName && errors[fieldName];

  const textareaStyle = useMemo(
    () => ({
      minHeight: minHeight,
      resize: resize,
    }),
    [minHeight, resize],
  );

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={textareaId} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.content}>
        <textarea
          ref={textareaRef}
          id={textareaId}
          className={textareaClasses}
          rows={rows}
          name={fieldName}
          style={textareaStyle}
          aria-invalid={hasError ? "true" : "false"}
          aria-describedby={hasError ? `${textareaId}-error` : undefined}
          {...rest}
        />
      </div>

      {hasError && (
        <p id={`${textareaId}-error`} className={styles.error} role="alert">
          {errors![fieldName]?.message as string}
        </p>
      )}
    </div>
  );
}
