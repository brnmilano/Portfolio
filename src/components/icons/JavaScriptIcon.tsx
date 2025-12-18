import type { IconProps } from "@/type/icons";

export default function JavaScriptIcon(props: IconProps) {
  const { size, color = "#F7DF1E" } = props;

  const pathData =
    "M9.6 16.8c.3.6.6 1.2 1.5 1.2.9 0 1.2-.4 1.2-1.8v-6H15v6c0 2.1-1.2 3.3-3 3.3-1.6 0-2.6-.8-3-1.8l.6-.9zm6.6-.6c.3.6.9 1.2 1.8 1.2.7 0 1.2-.4 1.2-.9 0-.6-.5-.8-1.3-1.2l-.4-.2c-1.3-.6-2.1-1.3-2.1-2.7 0-1.3 1-2.4 2.7-2.4 1.2 0 2 .4 2.6 1.4l-1.4.9c-.3-.6-.6-.8-1.2-.8-.6 0-.9.4-.9.8 0 .6.4.8 1.2 1.2l.4.2c1.5.6 2.3 1.3 2.3 2.8 0 1.6-1.3 2.5-3 2.5-1.7 0-2.8-.8-3.3-1.9l1.4-.9z";

  return (
    <svg
      width={size}
      height={size}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <rect
        x="0.75"
        y="0.75"
        width="22.5"
        height="22.5"
        rx="4"
        stroke={color}
        strokeWidth="1.5"
      />

      <path fill={color} d={pathData} />
    </svg>
  );
}
