"use client";

import { InputProps } from "./input.types";
import { useMemo, useId } from "react";
import styles from "./input.module.scss";
import {
  buildContainerClasses,
  buildInputClasses,
} from "@/utils/classNameBuilder";

interface ErrorData {
  message?: string;
}

export const DisplayErrorMessage = (data: ErrorData | undefined) => {
  return <p>{data?.message ?? "Campo inválido"}</p>;
};

/**
 * @description Componente de Input. Possui visibilidade de senha, acessibilidade,
 * estilos personalizáveis e utiliza os hooks useState, useCallback e useMemo.
 * - Utiliza o useCallback para evitar recriações desnecessárias de funções.
 * - Utiliza o useMemo para evitar recriações desnecessárias.
 * - Utiliza o useId para gerar IDs únicos para acessibilidade.
 *
 * @param param0.icon Ícone a ser exibido no input
 * @param param0.iconPosition Posição do ícone no input
 * @param param0.containerClassName Classes CSS personalizadas para o wrapper externo do input
 * @param param0.className Classes CSS adicionais para o input
 * @param param0.label Label do input, exibido como texto acima do campo
 * @param param0.type Tipo do input sendo text ou password (o padrão é "text")
 * @param rest Todas as outras propriedades do input HTML (placeholder, disabled, onChange, etc.)
 * @returns
 */
export function Input({
  icon,
  iconPosition = "right",
  containerClassName,
  className,
  label,
  type = "text",
  errors,
  registerField,
  name,
  ...rest
}: InputProps) {
  const inputId = useId();

  const fieldName = registerField || name || "";

  const containerClasses = useMemo(
    () =>
      buildContainerClasses({
        base: styles.container,
        custom: containerClassName,
      }),
    [containerClassName],
  );

  const inputClasses = useMemo(
    () =>
      buildInputClasses({
        baseStyle: styles.input,
        conditionalStyle: icon ? styles.withIcon : undefined,
        custom: className,
      }),
    [className, icon],
  );

  return (
    <div className={containerClasses}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>

      <div className={styles.content}>
        {icon && iconPosition === "right" && (
          <span className={styles.icon}>{icon}</span>
        )}

        <input
          id={inputId}
          className={inputClasses}
          type={type}
          name={name}
          {...rest}
        />
      </div>

      <div
        className={`${styles.errorMessage} ${
          errors[fieldName] && styles.showingErrorMessage
        }`}
      >
        {DisplayErrorMessage(errors[fieldName])}
      </div>
    </div>
  );
}
