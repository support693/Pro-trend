"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const reels = [
  { client: "Arrow Plus", category: "Reels", videoId: "YOUTUBE_VIDEO_ID_1" },
  { client: "Askans Architecture", category: "Posters", videoId: "YOUTUBE_VIDEO_ID_2" },
  { client: "ETA's Cars", category: "Podcasts", videoId: "YOUTUBE_VIDEO_ID_3" },
  { client: "Lazaro Tailorshop", category: "Carousels", videoId: "YOUTUBE_VIDEO_ID_4" },
  { client: "Vanavil Farms", category: "Reels", videoId: "YOUTUBE_VIDEO_ID_5" },
  { client: "Frames & Fusion", category: "Posters", videoId: "YOUTUBE_VIDEO_ID_6" },
  { client: "Landmark Pallavaa", category: "Carousels", videoId: "YOUTUBE_VIDEO_ID_7" },
  { client: "Arrow Plus", category: "Podcasts", videoId: "YOUTUBE_VIDEO_ID_8" },
  { client: "ETA's Cars", category: "Reels", videoId: "YOUTUBE_VIDEO_ID_9" },
  { client: "Lazaro Tailorshop", category: "Posters", videoId: "YOUTUBE_VIDEO_ID_10" },
  { client: "Vanavil Farms", category: "Carousels", videoId: "YOUTUBE_VIDEO_ID_11" },
  { client: "Askans Architecture", category: "Podcasts", videoId: "YOUTUBE_VIDEO_ID_12" },
];

const categories = ["All", "Reels", "Podcasts", "Posters", "Carousels"];

const categoryGradients: Record<string, string> = {
  "Reels": "from-purple-600 via-purple-500 to-violet-400",
  "Podcasts": "from-rose-500 via-pink-400 to-fuchsia-400",
  "Posters": "from-amber-500 via-orange-400 to-yellow-400",
  "Carousels": "from-teal-500 via-emerald-400 to-cyan-400",
};

const categoryAccent: Record<string, string> = {
  "Reels": "bg-purple-100 text-purple-700",
  "Podcasts": "bg-pink-100 text-pink-700",
  "Posters": "bg-amber-100 text-amber-700",
  "Carousels": "bg-teal-100 text-teal-700",
};

export default function OurWorkClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState<(typeof reels)[0] | null>(null);

  const filtered = activeFilter === "All" ? reels : reels.filter((r) => r.category === activeFilter);

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
            Real campaigns. Real brands. Real growth. See how we&apos;ve helped our clients scale their digital presence.
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="px-4 pb-10">
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? "gradient-btn text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Reel Cards Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filtered.map((reel, i) => (
              <button
                key={`${reel.client}-${reel.videoId}`}
                onClick={() => setActiveVideo(reel)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/60"
                style={{ animationDelay: `${(i % 6) * 60}ms` }}
              >
                {/* 9:16 card */}
                <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      categoryGradients[reel.category] ?? "from-gray-500 to-gray-700"
                    }`}
                  />

                  {/* Noise texture overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

                  {/* Play icon — center */}
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-colors duration-200">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-5 px-3">
                    <span className="text-white text-xs font-bold tracking-wide uppercase">Watch Reel</span>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <span
                      className={`inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full mb-1 ${
                        categoryAccent[reel.category] ?? "bg-white/20 text-white"
                      }`}
                    >
                      {reel.category}
                    </span>
                    <p className="text-white text-[11px] font-semibold leading-tight truncate">{reel.client}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-20">No reels in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-sm"
            style={{ paddingBottom: "0" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1.5 z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Close
            </button>

            {/* Meta */}
            <div className="mb-3 flex items-center gap-2">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  categoryAccent[activeVideo.category] ?? "bg-white/20 text-white"
                }`}
              >
                {activeVideo.category}
              </span>
              <span className="text-white font-semibold text-sm">{activeVideo.client}</span>
            </div>

            {/* 9:16 iframe */}
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "177.78%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                title={`${activeVideo.client} — ${activeVideo.category}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

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
                <Link
                  href="/book-call"
                  className="bg-white text-purple font-semibold px-8 py-3.5 rounded-full text-base hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Book a Free Call
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full text-base hover:bg-white/10 transition-colors"
                >
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
