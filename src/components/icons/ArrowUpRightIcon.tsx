import type { IconProps } from "@/type/icons";

export default function ArrowUpRightIcon(props: IconProps) {
  const {
    color = "var(--blue)",
    size,
    letterStrokeWidth: strokeWidth = 1.5,
  } = props;

  return (
    <svg
      role="img"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
