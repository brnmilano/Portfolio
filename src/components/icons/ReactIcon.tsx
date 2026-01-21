import type { IconProps } from "@/types/icons";

export function ReactIcon(props: IconProps) {
  const { size, color = "#61DAFB" } = props;

  return (
    <svg
      width={size}
      height={size}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <circle cx="12" cy="12" r="1.6" stroke={color} strokeWidth="1" />

      <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1" />

      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(60 12 12)"
        stroke={color}
        strokeWidth="1"
      />

      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(120 12 12)"
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  );
}
