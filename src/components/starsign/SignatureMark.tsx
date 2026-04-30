type Props = { className?: string; animate?: boolean };

export function SignatureMark({ className = "", animate = false }: Props) {
  return (
    <svg
      viewBox="0 0 240 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M30 80 C 40 30, 95 25, 95 60 C 95 90, 40 95, 50 75 C 60 60, 110 70, 130 65 L 150 65 L 158 50 L 166 80 L 174 45 L 182 75 L 195 65"
        style={
          animate
            ? { strokeDasharray: 600, strokeDashoffset: 600, animation: "draw-signature 2.6s ease-out forwards" }
            : undefined
        }
      />
      <path d="M205 55 L 213 67 L 226 60 L 218 72 L 222 86 L 210 78 L 198 82 L 205 70 Z" />
    </svg>
  );
}