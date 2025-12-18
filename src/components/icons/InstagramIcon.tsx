import type { IconProps } from "@/type/icons";

export default function InstagramIcon(props: IconProps) {
  const { color = "var(--gray-200)", size, letterStrokeWidth = 0.1 } = props;

  const iconPath =
    "M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z";

  return (
    <svg
      role="img"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Borda */}
      <rect fill="none" stroke={color} strokeWidth={0} />

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
