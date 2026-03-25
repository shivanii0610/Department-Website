import { ImageIcon } from 'lucide-react';

export default function PlaceholderImage({ label = "Image", className = "", height = "200px" }) {
  return (
    <div
      className={`placeholder-img ${className}`}
      style={{ minHeight: height }}
    >
      <ImageIcon size={32} strokeWidth={1.5} />
      <span>{label}</span>
    </div>
  );
}
