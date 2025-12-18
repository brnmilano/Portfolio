"use client";

import { useId, useMemo, useRef, useCallback } from "react";
import type { TextareaProps } from "./textarea.types";
import { TextareaSizes } from "./textarea.types";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  MoreHorizontal,
} from "lucide-react";
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
  showToolbar = false,
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

  const applyFormatting = useCallback((command: string, value?: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    if (selectedText || value) {
      let formattedText = selectedText;
      let prefix = "";
      let suffix = "";

      switch (command) {
        case "bold":
          prefix = "**";
          suffix = "**";
          break;
        case "italic":
          prefix = "*";
          suffix = "*";
          break;
        case "underline":
          prefix = "__";
          suffix = "__";
          break;
        case "strikethrough":
          prefix = "~~";
          suffix = "~~";
          break;
      }

      formattedText = `${prefix}${selectedText}${suffix}`;

      const newValue =
        textarea.value.substring(0, start) +
        formattedText +
        textarea.value.substring(end);

      textarea.value = newValue;

      // Move o cursor para o final do texto formatado
      const newPosition = start + formattedText.length;
      textarea.setSelectionRange(newPosition, newPosition);
      textarea.focus();

      // Dispara evento de change para integração com React Hook Form
      const event = new Event("input", { bubbles: true });
      textarea.dispatchEvent(event);
    }
  }, []);

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
        {showToolbar && (
          <div
            className={styles.toolbar}
            role="toolbar"
            aria-label="Ferramentas de formatação"
          >
            {/* Botões de formatação básica */}
            <button
              type="button"
              className={styles.toolbarButton}
              onClick={() => applyFormatting("bold")}
              aria-label="Negrito"
              title="Negrito"
            >
              <Bold size={16} />
            </button>

            <button
              type="button"
              className={styles.toolbarButton}
              onClick={() => applyFormatting("italic")}
              aria-label="Itálico"
              title="Itálico"
            >
              <Italic size={16} />
            </button>

            <button
              type="button"
              className={styles.toolbarButton}
              onClick={() => applyFormatting("underline")}
              aria-label="Sublinhado"
              title="Sublinhado"
            >
              <Underline size={16} />
            </button>

            <button
              type="button"
              className={styles.toolbarButton}
              onClick={() => applyFormatting("strikethrough")}
              aria-label="Tachado"
              title="Tachado"
            >
              <Strikethrough size={16} />
            </button>

            <div className={styles.toolbarDivider} />

            <button
              type="button"
              className={styles.toolbarButton}
              aria-label="Mais opções"
              title="Mais opções"
            >
              <MoreHorizontal size={16} />
            </button>
          </div>
        )}

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
