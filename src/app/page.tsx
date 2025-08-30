
import Image from "next/image";
import { InstagramGrid } from "@/components/InstagramGrid";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bone/80 backdrop-blur-sm border-b border-clay/30">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-serif text-xl tracking-tight text-ink">NK Stretching</a>
          <ul className="hidden sm:flex gap-6 text-sm text-ink/80">
            <li><a href="#about" className="hover:text-ink">About</a></li>
            <li><a href="#pricing" className="hover:text-ink">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-ink">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-ink">FAQ</a></li>
            <li><a href="#contact" className="hover:text-ink">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="home" className="bg-bone min-h-screen">
        <section className="mx-auto max-w-6xl px-6 pt-28 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight text-ink">
              Stretching and yoga that bring back freedom of movement
            </h1>
            <p className="mt-6 text-ink/80 text-lg max-w-prose">
              Gentle, safe, with measurable progress every week. 1:1 sessions online and in person.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#pricing" className="inline-flex items-center rounded-full bg-olive px-6 py-3 text-white transition-opacity hover:opacity-90">Start training</a>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-clay/20">
            <Image src="/hero.jpg" alt="Nadiia — stretching" fill className="object-cover" />
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="font-serif text-3xl text-ink mb-6">About</h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-clay/20">
              <Image src="/about.jpg" alt="Nadiia — about portrait" fill className="object-cover" />
            </div>
            <div className="md:col-span-2 max-w-prose text-ink/85">
              <blockquote className="font-serif text-xl leading-relaxed text-ink">
                “I’m Nadiia, a stretching instructor. Seventeen years in rhythmic gymnastics taught me discipline and a fine awareness of the body. A Bachelor’s in Physical Education, anatomy and biomechanics gave me a solid scientific foundation. I teach gently and safely — through breath and mindful work with tissues — to restore freedom of movement without pain or overload.”
              </blockquote>
              <ul className="mt-5 list-disc pl-5 text-ink/80 space-y-2">
                <li>17 years in rhythmic gymnastics</li>
                <li>Bachelor of Physical Education: anatomy and biomechanics</li>
                <li>Focus: safe, mindful flexibility and sustainable progress</li>
              </ul>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-ink/10 bg-bone p-4">
                  <div className="font-serif text-lg text-ink">Approach</div>
                  <p className="text-sm text-ink/70 mt-1">gentle progression, breathwork, fascia care, safe technique</p>
                </div>
                <div className="rounded-lg border border-ink/10 bg-bone p-4">
                  <div className="font-serif text-lg text-ink">Format</div>
                  <p className="text-sm text-ink/70 mt-1">1:1 online/in person, guidance and short home routines</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-end mb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs text-ink/60">@nk_stretching</span>
                <a
                  href="https://www.instagram.com/nk_stretching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-3 py-1 text-xs text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" className="text-white" />
                    <circle cx="18" cy="6" r="1.2" fill="currentColor" className="text-white" />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" className="text-white" />
                  </svg>
                  Follow
                </a>
              </div>
            </div>
            <InstagramGrid
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              items={[
                { href: "https://www.instagram.com/reel/DMniZvZN_Pv/", src: "/ig-1.jpg", alt: "Reel — stretch", videoSrc: "/reel_1.mp4" },
                { href: "https://www.instagram.com/reel/DNtIc2v0PBb/", src: "/ig-2.jpg", alt: "Reel — review", videoSrc: "/reel_2.mp4" },
                { href: "https://www.instagram.com/reel/DNlbmcRpTPF/", src: "/ig-3.jpg", alt: "Reel — routine", videoSrc: "/reel_3.mp4" },
                { href: "https://www.instagram.com/reel/DMSt7p3NkyH/", src: "/ig-4.jpg", alt: "Reel — practice", videoSrc: "/reel_4.mp4" },
              ]}
            />
            <p className="mt-2 text-xs text-ink/60">Place thumbnails in public: ig-1.jpg, ig-2.jpg, ig-3.jpg.</p>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="font-serif text-3xl text-ink mb-6">Formats & Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-ink/15 bg-bone p-6 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4 bg-clay/20">
                <Image src="/in_person.png" alt="In-person 1:1 — preview" fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl text-ink">In‑person 1:1</h3>
                <span className="text-[10px] rounded-full bg-olive/10 text-olive px-2 py-0.5">in person</span>
              </div>
              <p className="mt-2 text-ink/70">Private sessions in studio/gym.</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-ink/85 space-y-2">
                <li>Assessment and goal setting</li>
                <li>Personal plan and pain‑free technique</li>
                <li>Home mini‑routines and guidance</li>
                <li>Weekly progress tracking</li>
              </ul>
              <hr className="my-4 border-ink/10" />
              <ul className="space-y-3 text-ink">
                <li className="flex items-center justify-between"><span>Single session</span><span className="font-semibold">$100</span></li>
                <li className="flex items-center justify-between"><span>Pack of 4</span><span className="font-semibold">$390</span></li>
                <li className="flex items-center justify-between"><span className="inline-flex items-center gap-2">Pack of 8 <span className="text-[10px] rounded bg-olive/10 text-olive px-1.5 py-0.5">recommended</span></span><span className="font-semibold">$760</span></li>
                <li className="flex items-center justify-between"><span>Pack of 12</span><span className="font-semibold">$1080</span></li>
              </ul>
              <div className="mt-4">
                <a href="#contact" className="inline-flex items-center rounded-full bg-olive px-4 py-2 text-white transition-opacity hover:opacity-90">Ask a question</a>
              </div>
            </div>

            <div className="rounded-xl border border-ink/15 bg-bone p-6 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4 bg-clay/20">
                <Image src="/online.png" alt="Online 1:1 — preview" fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl text-ink">Online 1:1</h3>
                <span className="text-[10px] rounded-full bg-olive/10 text-olive px-2 py-0.5">Zoom</span>
              </div>
              <p className="mt-2 text-ink/70">Private online sessions with full technique guidance.</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-ink/85 space-y-2">
                <li>Flexible schedule, train from anywhere</li>
                <li>Personal adjustments during the session</li>
                <li>Home tasks and video explanations</li>
                <li>Progress tracking in chat</li>
              </ul>
              <hr className="my-4 border-ink/10" />
              <ul className="space-y-3 text-ink">
                <li className="flex items-center justify-between"><span>Single session</span><span className="font-semibold">$80</span></li>
                <li className="flex items-center justify-between"><span>Pack of 4</span><span className="font-semibold">$310</span></li>
                <li className="flex items-center justify-between"><span>Pack of 8</span><span className="font-semibold">$600</span></li>
                <li className="flex items-center justify-between"><span>Pack of 12</span><span className="font-semibold">$840</span></li>
              </ul>
              <div className="mt-4">
                <a href="#contact" className="inline-flex items-center rounded-full bg-olive px-4 py-2 text-white transition-opacity hover:opacity-90">Ask a question</a>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-ink/60">Session length — 60 minutes. Packs are valid for 8–12 weeks.</p>
        </section>

        <section id="testimonials" className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="font-serif text-3xl text-ink mb-6">Testimonials</h2>
          <TestimonialsSlider
            items={[
              { quote: "In 6 weeks my neck pain was gone — sitting at the desk feels easier. Sessions are gentle and clear.", author: "Anna", location: "New York" },
              { quote: "Back to splits without pain. I love the attention to technique and breath.", author: "Marina", location: "Dance" },
              { quote: "Online format turned out convenient — progress was noticeable by week two.", author: "Igor", location: "IT" }
            ]}
          />
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="font-serif text-3xl text-ink mb-6">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <details className="rounded-lg border border-ink/15 bg-bone p-5">
              <summary className="cursor-pointer text-ink">Is this suitable for beginners?</summary>
              <p className="mt-3 text-ink/80">Yes. We start gently with mobility and breathwork, no overload.</p>
            </details>
            <details className="rounded-lg border border-ink/15 bg-bone p-5">
              <summary className="cursor-pointer text-ink">How often should I train?</summary>
              <p className="mt-3 text-ink/80">Optimal is 2–3 times per week; consistent 2x already brings steady progress.</p>
            </details>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="font-serif text-3xl text-ink mb-6">Contact</h2>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center rounded-full bg-olive px-4 py-2 text-white transition-opacity hover:opacity-90">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M6.6 10.8c2 3.2 4.4 5.6 7.2 7.2l1.6-1.6c.3-.3.8-.4 1.2-.2 1.1.4 2.3.6 3.5.6.3 0 .5.2.5.5V20c0 1.1-.9 2-2 2C12.5 22 2 11.5 2 4c0-1.1.9-2 2-2h2.3c.3 0 .5.2.5.5 0 1.2.2 2.4.6 3.5.1.4 0 .9-.2 1.2l-1.6 1.6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              WhatsApp
            </a>
            <a href="#" className="inline-flex items-center rounded-full bg-olive px-4 py-2 text-white transition-opacity hover:opacity-90">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M2 12l20-9-5 20-6-6-5 3 2-8z" />
              </svg>
              Telegram
            </a>
            <a href="https://www.instagram.com/nk_stretching" target="_blank" className="inline-flex items-center rounded-full bg-olive px-4 py-2 text-white transition-opacity hover:opacity-90">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="18" cy="6" r="1.2" fill="currentColor" />
                <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Instagram
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
