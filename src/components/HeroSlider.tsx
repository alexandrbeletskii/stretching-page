"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Slide = {
    src: string;
    alt: string;
};

interface HeroSliderProps {
    slides: Slide[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
    const autoplay = React.useRef(
        Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
    );
    const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

    return (
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex">
                {slides.map((slide, idx) => (
                    <div className="min-w-0 flex-[0_0_100%] relative aspect-[3/4]" key={idx}>
                        <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={idx === 0} />
                    </div>
                ))}
            </div>
        </div>
    );
}



