import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollAnimate from "@/components/ScrollAnimate";

export const metadata: Metadata = {
  title: "Our Work — Pro Trend",
  description: "See how Pro Trend has helped brands grow through strategic digital marketing. Client showcase with real results.",
};

const reels = [
  { client: "Arrow Plus", category: "Social Media", videoId: "YOUTUBE_VIDEO_ID_1" },
  { client: "Askans Architecture", category: "Content", videoId: "YOUTUBE_VIDEO_ID_2" },
  { client: "ETA's Cars", category: "Google Ads", videoId: "YOUTUBE_VIDEO_ID_3" },
  { client: "Lazaro Tailorshop", category: "Reels", videoId: "YOUTUBE_VIDEO_ID_4" },
  { client: "Vanavil Farms", category: "Social Media", videoId: "YOUTUBE_VIDEO_ID_5" },
  { client: "Frames & Fusion", category: "Content", videoId: "YOUTUBE_VIDEO_ID_6" },
  { client: "Landmark Pallavaa", category: "Reels", videoId: "YOUTUBE_VIDEO_ID_7" },
  { client: "Arrow Plus", category: "Reels", videoId: "YOUTUBE_VIDEO_ID_8" },
  { client: "ETA's Cars", category: "Content", videoId: "YOUTUBE_VIDEO_ID_9" },
  { client: "Lazaro Tailorshop", category: "Social Media", videoId: "YOUTUBE_VIDEO_ID_10" },
  { client: "Vanavil Farms", category: "Reels", videoId: "YOUTUBE_VIDEO_ID_11" },
  { client: "Askans Architecture", category: "Content", videoId: "YOUTUBE_VIDEO_ID_12" },
];

export default function OurWork() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal/5 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-full mx-auto px-2 text-center">
          <ScrollAnimate animation="fade-down" duration={500}>
            <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full gradient-btn" />
              <span className="text-sm font-medium text-purple">Client Showcase</span>
            </div>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Results We&apos;ve <span className="gradient-text">Delivered</span>
            </h1>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={200}>
            <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              Real campaigns. Real brands. Real growth. See how we&apos;ve helped our clients scale their digital presence.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Reels Grid */}
      <section className="py-8 px-4 pb-24">
        <div className="max-w-full mx-auto px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {reels.map((reel, i) => (
              <ScrollAnimate key={`${reel.client}-${i}`} animation="fade-up" delay={(i % 6) * 80}>
                <div className="floating-card overflow-hidden rounded-2xl transition-all duration-300 group">
                  {/* Vertical reel slot — 9:16 aspect ratio */}
                  <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${reel.videoId}?rel=0`}
                      title={`${reel.client} — ${reel.category}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  {/* Label */}
                  <div className="p-3">
                    <div className="inline-flex items-center gap-1 bg-purple/5 border border-purple/10 rounded-full px-2.5 py-0.5 mb-1.5">
                      <span className="text-[10px] font-medium text-purple">{reel.category}</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-800 truncate">{reel.client}</p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50/50">
        <ScrollAnimate animation="zoom-in" className="max-w-4xl mx-auto">
          <div className="gradient-btn rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Want Results Like These?
              </h2>
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
        </ScrollAnimate>
      </section>

      {/* Footer */}
      <ScrollAnimate animation="fade">
        <footer className="py-10 px-4 border-t border-gray-100 text-center">
          <div className="max-w-full mx-auto px-2">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pro Trend. All rights reserved.
            </p>
          </div>
        </footer>
      </ScrollAnimate>
    </>
  );
}
