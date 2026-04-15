"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

/* ─── Data ─────────────────────────────────────────────── */

const reelsData = [
  { client: "Client Reel 1",    src: "/works/videos/reel-1.mp4" },
  { client: "Client Reel 2",    src: "/works/videos/reel-2.mp4" },
  { client: "Client Reel 3",    src: "/works/videos/reel-3.mp4" },
  { client: "Client Reel 4",    src: "/works/videos/reel-4.mp4" },
  { client: "CPL League Reel",  src: "/works/videos/reel-5.mp4" },
  { client: "Lazaro Tailorshop",src: "/works/videos/reel-6.mp4" },
];

const podcastsData = [
  { client: "3 Mind Hacks",             src: "/works/videos/podcast-1.mp4" },
  { client: "Nazir Sir — Brand Talk",   src: "/works/videos/podcast-2.mp4" },
  { client: "3 Marketing Techniques",   src: "/works/videos/podcast-3.mp4" },
  { client: "Motivational Series",      src: "/works/videos/podcast-4.mp4" },
];

const postersData = [
  { client: "Client Poster 1",    src: "/works/posters/poster-1.png"        },
  { client: "Client Poster 2",    src: "/works/posters/poster-2.png"        },
  { client: "Client Poster 3",    src: "/works/posters/poster-3.png"        },
  { client: "Lazaro Tailorshop",  src: "/works/posters/poster-lazaro-1.png" },
  { client: "Lazaro — Vol. 2",    src: "/works/posters/poster-lazaro-2.png" },
  { client: "Lazaro — Main",      src: "/works/posters/poster-lazaro-3.png" },
];

const carouselData = [
  {
    client: "Carousel Set 1",
    slides: ["/works/carousels/1/1.png","/works/carousels/1/2.png","/works/carousels/1/3.png","/works/carousels/1/4.png","/works/carousels/1/5.png","/works/carousels/1/6.png"],
  },
  {
    client: "Carousel Set 2",
    slides: ["/works/carousels/2/1.png","/works/carousels/2/2.png","/works/carousels/2/3.png","/works/carousels/2/4.png","/works/carousels/2/5.png"],
  },
  {
    client: "Carousel Set 3",
    slides: ["/works/carousels/3/1.png","/works/carousels/3/2.png","/works/carousels/3/3.png","/works/carousels/3/4.png"],
  },
  {
    client: "Vanavil Farms — Honey",
    slides: ["/works/carousels/4/1.png","/works/carousels/4/2.png","/works/carousels/4/3.png","/works/carousels/4/4.png","/works/carousels/4/5.png","/works/carousels/4/6.png","/works/carousels/4/7.png","/works/carousels/4/8.png","/works/carousels/4/9.png"],
  },
  {
    client: "Carousel Set 5",
    slides: ["/works/carousels/5/1.png","/works/carousels/5/2.png","/works/carousels/5/3.png","/works/carousels/5/4.png"],
  },
];

/* ─── Filter tabs ───────────────────────────────────────── */

const TABS = ["All", "Reels", "Podcasts", "Posters", "Carousels"] as const;
type Tab = (typeof TABS)[number];

/* ─── Section heading ───────────────────────────────────── */

function SectionHeading({ icon, label, accent }: { icon: React.ReactNode; label: string; accent: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${accent}`}>{icon}</div>
      <h2 className="text-xl font-bold text-gray-900">{label}</h2>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

/* ─── Reel card — 9:16 portrait ────────────────────────── */

function ReelCard({ item, onPlay }: { item: (typeof reelsData)[0]; onPlay: () => void }) {
  return (
    <button
      onClick={onPlay}
      className="group relative rounded-2xl overflow-hidden w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/60"
    >
      <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
        <video
          src={item.src}
          preload="metadata"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* dark tint always */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/40 transition-all duration-200">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Hover reveal */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="text-white text-[10px] font-bold tracking-widest uppercase">Watch Reel</span>
        </div>
        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/70 to-transparent">
          <span className="inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full mb-1 bg-purple-100 text-purple-700">Reel</span>
          <p className="text-white text-[11px] font-semibold truncate">{item.client}</p>
        </div>
      </div>
    </button>
  );
}

/* ─── Podcast card — 16:9 landscape ────────────────────── */

function PodcastCard({ item, onPlay }: { item: (typeof podcastsData)[0]; onPlay: () => void }) {
  return (
    <button
      onClick={onPlay}
      className="group relative rounded-2xl overflow-hidden w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60"
    >
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <video
          src={item.src}
          preload="metadata"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        {/* Waveform decoration */}
        <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-20 pointer-events-none">
          {[3,6,4,8,5,9,4,7,3,6,5,8,4,6,3].map((h, i) => (
            <div key={i} className="w-1 bg-white rounded-full" style={{ height: `${h * 4}px` }} />
          ))}
        </div>
        {/* Play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/40 transition-all duration-200">
            <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Hover reveal */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="text-white text-[10px] font-bold tracking-widest uppercase">Watch Episode</span>
        </div>
        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
          <span className="inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full mb-1 bg-pink-100 text-pink-700">Podcast</span>
          <p className="text-white text-xs font-semibold truncate">{item.client}</p>
        </div>
      </div>
    </button>
  );
}

/* ─── Poster card — 4:5 portrait ───────────────────────── */

function PosterCard({ item, onOpen }: { item: (typeof postersData)[0]; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group relative rounded-2xl overflow-hidden w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
    >
      <div className="relative w-full" style={{ paddingBottom: "125%" }}>
        <Image
          src={item.src}
          alt={item.client}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
            </svg>
          </div>
        </div>
        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/70 to-transparent">
          <span className="inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full mb-1 bg-amber-100 text-amber-700">Poster</span>
          <p className="text-white text-[11px] font-semibold truncate">{item.client}</p>
        </div>
      </div>
    </button>
  );
}

/* ─── Carousel card — real slides with dot nav ──────────── */

function CarouselCard({ item }: { item: (typeof carouselData)[0] }) {
  const [active, setActive] = useState(0);
  const total = item.slides.length;
  return (
    <div className="group relative rounded-2xl overflow-hidden w-full">
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        <Image
          src={item.slides[active]}
          alt={`${item.client} slide ${active + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Nav arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setActive((p) => (p - 1 + total) % total)}
            className="w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow text-gray-700 hover:bg-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => setActive((p) => (p + 1) % total)}
            className="w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow text-gray-700 hover:bg-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        {/* Label + dots */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/70 to-transparent">
          <span className="inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full mb-1 bg-teal-100 text-teal-700">Carousel</span>
          <p className="text-white text-[11px] font-semibold truncate">{item.client}</p>
          <div className="flex gap-1 mt-1.5 flex-wrap">
            {item.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1 rounded-full transition-all duration-200 ${i === active ? "w-4 bg-teal-400" : "w-1.5 bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Lightbox ───────────────────────────────────────────── */

type LightboxItem =
  | { type: "video"; src: string; client: string; category: string }
  | { type: "image"; src: string; client: string };

function Lightbox({ item, onClose }: { item: LightboxItem; onClose: () => void }) {
  const isPortrait = item.type === "video" && item.category === "Reels";
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${item.type === "image" ? "max-w-lg" : isPortrait ? "max-w-sm" : "max-w-2xl"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Close
        </button>

        <p className="text-white font-semibold text-sm mb-3">{item.client}</p>

        {item.type === "video" ? (
          <div
            className="relative w-full rounded-2xl overflow-hidden bg-black"
            style={{ paddingBottom: isPortrait ? "177.78%" : "56.25%" }}
          >
            <video
              src={item.src}
              controls
              autoPlay
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ) : (
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image
              src={item.src}
              alt={item.client}
              width={800}
              height={1000}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────── */

export default function OurWorkClient() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

  const show = (tab: Tab) => activeTab === "All" || activeTab === tab;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal/5 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full gradient-btn" />
            <span className="text-sm font-medium text-purple">Client Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Results We&apos;ve <span className="gradient-text">Delivered</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Real campaigns. Real brands. Real growth.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 pb-10">
        <div className="flex flex-wrap justify-center gap-2.5">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "gradient-btn text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto space-y-14">

          {/* Reels */}
          {show("Reels") && (
            <div>
              <SectionHeading
                label="Reels"
                accent="bg-purple-100"
                icon={
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                }
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {reelsData.map((item, i) => (
                  <ReelCard
                    key={i}
                    item={item}
                    onPlay={() => setLightbox({ type: "video", src: item.src, client: item.client, category: "Reels" })}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Podcasts */}
          {show("Podcasts") && (
            <div>
              <SectionHeading
                label="Podcasts"
                accent="bg-pink-100"
                icon={
                  <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                }
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {podcastsData.map((item, i) => (
                  <PodcastCard
                    key={i}
                    item={item}
                    onPlay={() => setLightbox({ type: "video", src: item.src, client: item.client, category: "Podcasts" })}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Posters */}
          {show("Posters") && (
            <div>
              <SectionHeading
                label="Posters"
                accent="bg-amber-100"
                icon={
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18" />
                  </svg>
                }
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {postersData.map((item, i) => (
                  <PosterCard
                    key={i}
                    item={item}
                    onOpen={() => setLightbox({ type: "image", src: item.src, client: item.client })}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Carousels */}
          {show("Carousels") && (
            <div>
              <SectionHeading
                label="Carousels"
                accent="bg-teal-100"
                icon={
                  <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                }
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {carouselData.map((item, i) => (
                  <CarouselCard key={i} item={item} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-btn rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Want Results Like These?</h2>
              <p className="mt-4 text-white/80 text-lg max-w-lg mx-auto">
                Book a free strategy call and let&apos;s build your success story next.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/book-call" className="bg-white text-purple font-semibold px-8 py-3.5 rounded-full text-base hover:bg-gray-50 transition-colors shadow-lg">
                  Book a Free Call
                </Link>
                <Link href="/services" className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full text-base hover:bg-white/10 transition-colors">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Pro Trend. All rights reserved.</p>
      </footer>
    </>
  );
}
