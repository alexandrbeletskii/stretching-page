"use client";

import React from "react";

interface InstagramEmbedProps {
    urls: string[];
}

export function InstagramEmbed({ urls }: InstagramEmbedProps) {
    React.useEffect(() => {
        // Load Instagram embed script once
        const existing = document.querySelector<HTMLScriptElement>("script#ig-embed");
        if (!existing) {
            const s = document.createElement("script");
            s.id = "ig-embed";
            s.async = true;
            s.src = "https://www.instagram.com/embed.js";
            document.body.appendChild(s);
            s.onload = () => {
                // @ts-ignore
                if (window.instgrm?.Embeds) window.instgrm.Embeds.process();
            };
        } else {
            // @ts-ignore
            if ((window as any).instgrm?.Embeds) (window as any).instgrm.Embeds.process();
        }
    }, [urls]);

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {urls.map((url, i) => (
                <blockquote
                    key={i}
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{ background: "#fff", borderRadius: 12, overflow: "hidden" }}
                />
            ))}
        </div>
    );
}

