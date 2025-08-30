"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Testimonial = {
    quote: string;
    author: string;
    location?: string;
};

interface Props {
    items: Testimonial[];
}

export function TestimonialsSlider({ items }: Props) {
    const autoplay = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
    );
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

    const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-ink/15 bg-olive/10 shadow-sm" ref={emblaRef}>
            <div className="flex">
                {items.map((t, idx) => (
                    <div key={idx} className="min-w-0 flex-[0_0_100%]">
                        <div className="relative p-8 md:p-10">
                            {/* Opening quotes */}
                            <svg aria-hidden className="text-ink/10" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7.5 11C6.12 11 5 12.12 5 13.5S6.12 16 7.5 16 10 14.88 10 13.5V8A3 3 0 0 0 7 5H5v2h2a1 1 0 0 1 1 1v3Zm9 0c-1.38 0-2.5 1.12-2.5 2.5S15.12 16 16.5 16 19 14.88 19 13.5V8a3 3 0 0 0-3-3h-2v2h2a1 1 0 0 1 1 1v3Z" fill="currentColor" />
                            </svg>

                            <blockquote className="mt-4 font-serif text-2xl md:text-[28px] leading-relaxed text-ink">
                                “{t.quote}”
                            </blockquote>
                            <div className="mt-4 text-sm text-ink/60">
                                {t.author}{t.location ? `, ${t.location}` : ""}
                            </div>

                            {/* Closing quotes */}
                            <svg aria-hidden className="pointer-events-none absolute right-4 bottom-4 rotate-180 text-ink/10" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7.5 11C6.12 11 5 12.12 5 13.5S6.12 16 7.5 16 10 14.88 10 13.5V8A3 3 0 0 0 7 5H5v2h2a1 1 0 0 1 1 1v3Zm9 0c-1.38 0-2.5 1.12-2.5 2.5S15.12 16 16.5 16 19 14.88 19 13.5V8a3 3 0 0 0-3-3h-2v2h2a1 1 0 0 1 1 1v3Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            <button
                type="button"
                aria-label="Previous testimonial"
                onClick={scrollPrev}
                className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center w-12 h-12 text-white"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                type="button"
                aria-label="Next testimonial"
                onClick={scrollNext}
                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center w-12 h-12 text-white"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}
