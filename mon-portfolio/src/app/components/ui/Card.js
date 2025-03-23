import Link from 'next/link';

export default function Card({ title, subtitle, image, slug, category, className = "" }) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className={`bg-[#111b31] rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 ${className}`}>
        <div className="aspect-video bg-gray-800 relative overflow-hidden">
          {image && (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-500/50"></div>
            </div>
          )}
          {!image && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"></div>
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
        <div className="p-4">
          {category && <span className="text-xs text-gray-400 block mb-1">{category}</span>}
          {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
      </div>
    </Link>
  );
}