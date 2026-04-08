import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollAnimate from "@/components/ScrollAnimate";

const services = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    desc: "Our agency offers top-notch SEO services to enhance your website's visibility on search engines, attract more visitors, and convert leads into loyal customers.",
    deliverables: [
      "Google My Business (GMB) Optimization",
      "On-Page SEO & Technical SEO",
      "Off-Page & Link Building",
      "Local SEO & E-commerce SEO",
      "Content SEO — 20+ target keywords",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: "smm",
    title: "Social Media Management",
    desc: "Strategic multi-platform management that builds a consistent brand identity and community across Instagram, Facebook, and YouTube.",
    deliverables: [
      "Platform setup and profile optimization",
      "Content calendar planning and scheduling",
      "Community engagement & comment management",
      "Monthly analytics reporting",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    id: "content",
    title: "Content Creation",
    desc: "We produce diverse content formats designed for maximum engagement, brand consistency, and audience growth.",
    deliverables: [
      "Cinematic Reels & Short-form Video",
      "Carousel Posts & Infographics",
      "Branded Templates & Story Designs",
      "Product Photography Direction",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "ads",
    title: "Google Ads & Performance Marketing",
    desc: "Advanced strategies and precise targeting to maximize ROI and ensure your brand reaches its full potential.",
    deliverables: [
      "PPC (Pay-Per-Click) Campaigns",
      "Facebook Ads, Google Ads, LinkedIn Ads",
      "Search Engine Marketing (SEM)",
      "Influencer & Affiliate Marketing",
      "Email & WhatsApp Marketing",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "instagram",
    title: "Instagram Growth",
    desc: "Authentic, strategy-driven Instagram growth that builds real connections and measurable community.",
    deliverables: [
      "Follower growth strategy",
      "DM Handling & Inbox Management",
      "Engagement rate optimization",
      "Hashtag and trend research",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    desc: "Compelling storytelling that captures attention, engages readers, and converts visitors into loyal customers.",
    deliverables: [
      "Target Audience Research",
      "SEO-Optimised Blog & Web Content",
      "Data-Driven Content Strategy",
      "Consistent Brand Voice Development",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const clientWork = [
  {
    client: "ETA Cars",
    type: "Cinematic Reels",
    desc: "Stunning car showcase reels driving lead generation and engagement.",
    logo: "/clients/eta-cars.jpg",
    darkBg: true,
  },
  {
    client: "Vanavil Farms",
    type: "Product Visuals",
    desc: "Natural honey and organic product visuals capturing quality and sustainability.",
    logo: "/clients/vanavil-farms.jpeg",
    darkBg: true,
  },
  {
    client: "Lazaro",
    type: "Fashion Posts",
    desc: "Exquisite fashion and tailoring posts blending elegance and craftsmanship.",
    logo: "/clients/lazaro.jpeg",
    darkBg: true,
  },
];

const pillars = [
  {
    title: "Brand-First",
    desc: "We prioritize your brand's identity and vision.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Full-Service",
    desc: "We handle everything from strategy to execution.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Data-Driven",
    desc: "Strategies backed by comprehensive analytics.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Transparent",
    desc: "Clarity in reporting and results tracking.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimate animation="fade-down">
            <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-purple">WHAT WE DO</span>
            </div>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              End-to-End Digital Marketing Services{" "}
              <span className="gradient-text">Tailored to Your Brand</span>
            </h1>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={200}>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
              From strategy to execution, we handle everything so you can focus on your business.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* All 6 Services */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {services.map((svc, i) => (
            <ScrollAnimate key={svc.id} animation={i % 2 === 0 ? "fade-right" : "fade-left"} delay={100}>
              <div className="floating-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                {/* Icon & Title */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl gradient-btn flex items-center justify-center text-white">
                    {svc.icon}
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{svc.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-5">{svc.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {svc.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* Client Work Showcase */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimate animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-purple">Our Work</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Client <span className="gradient-text">Work Showcase</span>
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid md:grid-cols-3 gap-6">
            {clientWork.map((work, i) => (
              <ScrollAnimate key={work.client} animation="fade-up" delay={i * 150}>
                <div className="floating-card overflow-hidden group">
                  {/* Client logo header */}
                  <div className={`h-40 flex items-center justify-center ${work.darkBg ? "bg-gray-900" : "bg-gray-50"}`}>
                    <Image
                      src={work.logo}
                      alt={work.client}
                      width={160}
                      height={80}
                      className="max-h-[80px] max-w-[70%] object-contain"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-purple bg-purple/5 px-2.5 py-1 rounded-full">
                        {work.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{work.client}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{work.desc}</p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pro Trend — 4 Pillars */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimate animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-purple">Why Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose <span className="gradient-text">Pro Trend</span>
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <ScrollAnimate key={p.title} animation="zoom-in" delay={i * 100}>
                <div className="floating-card p-6 text-center group h-full">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mx-auto mb-4 text-purple group-hover:gradient-btn group-hover:text-white transition-all">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <ScrollAnimate animation="zoom-in" className="max-w-4xl mx-auto">
          <div className="gradient-btn rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Scale Your Brand?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-lg mx-auto">
                Let&apos;s discuss which services are right for your business.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://wa.me/918122021798?text=Hi%20Pro%20Trend%2C%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple font-semibold px-8 py-3.5 rounded-full text-base hover:bg-gray-50 transition-colors shadow-lg"
                >
                  WhatsApp Us Now
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full text-base hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </section>

      {/* Footer */}
      <ScrollAnimate animation="fade">
        <footer className="py-10 px-4 border-t border-gray-100 text-center">
          <div className="flex items-center justify-center mb-4">
            <Image src="/logo.png" alt="Pro Trend" width={120} height={32} className="h-7 w-auto" />
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pro Trend. All rights reserved.
          </p>
        </footer>
      </ScrollAnimate>
    </>
  );
}
