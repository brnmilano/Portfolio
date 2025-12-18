import { TitleProps } from "./title.type";
import style from "./title.module.scss";

export default function Title(props: TitleProps) {
  const { text, size, color } = props;

  // fallback seguro: garante uma classe válida e cor padrão
  const className = style[`title-${size}`] ?? style["title-medium"];
  const titleColor = color ?? "inherit";

  return (
    <h1 style={{ color: titleColor }} className={className}>
      {text}
    </h1>
  );
}
