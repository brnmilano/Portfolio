import type { IconProps } from "@/types/icons";

export function MailIcon(props: IconProps) {
  const { color = "var(--gray-200)", size, letterStrokeWidth = 0.1 } = props;

  const iconPath =
    "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm2 .5 7 4.5 7-4.5M5 18h14V8.236l-6.447 4.144a1 1 0 0 1-1.106 0L5 8.236V18z";

  return (
    <svg
      role="img"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ícone — peso */}
      <path
        d={iconPath}
        fill="none"
        stroke={color}
        strokeWidth={letterStrokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Ícone — base */}
      <path d={iconPath} fill={color} />
    </svg>
  );
}
