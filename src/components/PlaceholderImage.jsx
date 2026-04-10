import { ImageIcon } from 'lucide-react';

export default function PlaceholderImage({ src, label = "Image", className = "", height = "200px", aspect = "square" }) {
  const hasImage = src && src.length > 5 && src !== "#";
  
  if (hasImage && aspect === 'passport') {
    const h = parseInt(height) || 200;
    const w = Math.round(h * 0.75);
    
    return (
      <div className={`flex justify-center items-center p-2 ${className}`}>
        <div className="relative group">
          <img
            src={src}
            alt={label}
            style={{ width: `${w}px`, height: `${h}px` }}
            className="object-cover rounded-md shadow-md border-2 border-white ring-1 ring-gray-200"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://via.placeholder.com/${w}x${h}?text=Error`;
            }}
          />
        </div>
      </div>
    );
  }

  // Aspect ratios for other types
  const ratios = {
    "square": "aspect-square",
    "video": "aspect-video",
    "portrait": "aspect-[2/3]"
  };

  if (hasImage) {
    return (
      <img
        src={src}
        alt={label}
        className={`object-cover ${ratios[aspect] || ''} ${className}`}
        style={{ height: height, width: className.includes('w-') ? undefined : '100%' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400?text=Error+Loading+Image";
        }}
      />
    );
  }

  return (
    <div
      className={`placeholder-img overflow-hidden flex flex-col items-center justify-center bg-gray-50 border border-gray-100 text-gray-400 gap-2 transition-all duration-300 ${ratios[aspect] || ''} ${className}`}
      style={{ height: height }}
    >
      <ImageIcon size={32} strokeWidth={1.5} />
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </div>
  );
}
