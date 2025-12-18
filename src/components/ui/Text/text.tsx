import type { TextProps } from "./text.type";
import style from "./text.module.scss";

export default function Text(props: TextProps) {
  const { text, size, color } = props;

  // fallback seguro: garante uma classe válida e cor padrão
  const className = style[`text-${size}`] ?? style["text-medium"];
  const textColor = color ?? "inherit";

  return (
    <p style={{ color: textColor }} className={className}>
      {text}
    </p>
  );
}
