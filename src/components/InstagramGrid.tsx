import Image from "next/image";

interface Item {
    href: string;
    src: string;
    alt: string;
    label?: string;
    videoSrc?: string;
}

interface InstagramGridProps {
    items: Item[];
    showOverlayIcon?: boolean;
    className?: string;
}

export function InstagramGrid({ items, showOverlayIcon = true, className }: InstagramGridProps) {
    return (
        <div className={className ?? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
            {items.map((item, idx) => {
                const aspectClass = item.videoSrc ? "aspect-[9/16]" : "aspect-square";

                return (
                    <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        className={`group relative block ${aspectClass} overflow-hidden rounded-xl border border-ink/15 bg-bone shadow-sm`}
                    >
                        {item.videoSrc ? (
                            <video
                                src={item.videoSrc}
                                muted
                                playsInline
                                autoPlay
                                loop
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                        )}
                        {showOverlayIcon && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                        {showOverlayIcon && (
                            <span className="pointer-events-none absolute right-3 bottom-3 grid place-items-center rounded-full bg-bone/85 w-7 h-7 text-ink/80">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="18" cy="6" r="1.2" fill="currentColor" />
                                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </span>
                        )}
                        {item.label && (
                            <span className="absolute left-3 bottom-3 rounded-full bg-bone/80 px-3 py-1 text-xs text-ink/80">
                                {item.label}
                            </span>
                        )}
                    </a>
                );
            })}
        </div>
    );
}
