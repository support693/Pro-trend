import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import ScrollAnimate from "@/components/ScrollAnimate";

const stats = [
  { value: "50+", label: "Active Clients" },
  { value: "100%", label: "Result Focused" },
  { value: "#1", label: "Growth Platform" },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Search Engine Optimization",
    desc: "Boost your visibility on Google and drive organic traffic that converts.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    title: "Social Media Management",
    desc: "Strategic multi-platform management that builds community and brand identity.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Content Creation",
    desc: "Cinematic reels, carousels, and branded content that captivates your audience.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Google Ads & Performance",
    desc: "Data-driven ad campaigns that maximize ROI across Google, Facebook & more.",
  },
];

const clients = [
  { name: "Arrow Plus", logo: "/clients/arrow-plus.jpg", darkBg: true },
  { name: "Askans Architecture", logo: "/clients/askans.png", darkBg: false },
  { name: "ETA's Cars", logo: "/clients/eta-cars.jpg", darkBg: true },
  { name: "Lazaro Tailorshop", logo: "/clients/lazaro.jpeg", darkBg: true },
  { name: "Vanavil Farms", logo: "/clients/vanavil-farms.jpeg", darkBg: true },
  { name: "Frames & Fusion", logo: "/clients/frames-fusion.png", darkBg: false },
  { name: "Landmark Pallavaa", logo: "/clients/landmark-pallavaa.jpeg", darkBg: false },
];

const steps = [
  {
    num: "01",
    title: "Book a Free Call",
    desc: "Schedule a strategy session with our team to understand your brand goals.",
  },
  {
    num: "02",
    title: "Get a Custom Plan",
    desc: "We craft a tailored digital marketing strategy designed for your growth.",
  },
  {
    num: "03",
    title: "Watch Your Brand Grow",
    desc: "Sit back as we execute, optimize, and deliver measurable results.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden">
        {/* Subtle background shapes */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple/[0.02] to-teal/[0.02] rounded-full blur-3xl" />
        </div>

        <div className="max-w-full mx-auto px-2 w-full">
          <div className="text-center max-w-full mx-auto px-2">
            {/* Badge */}
            <ScrollAnimate animation="fade-down" duration={500}>
              <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full gradient-btn" />
                <span className="text-sm font-medium text-purple">Digital Marketing Agency</span>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                21st Century&apos;s Best{" "}
                <span className="gradient-text">Growth Partner</span> on the Planet
              </h1>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={200}>
              <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                A perfect fit for brands, influencers, and businesses looking to scale through strategic SEO, Social Media &amp; Google Ads.
              </p>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-call"
                  className="gradient-btn text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all shadow-lg shadow-purple/20 flex items-center gap-2"
                >
                  Get a Free Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-purple font-medium px-8 py-3.5 rounded-full text-base transition-colors border border-gray-200 hover:border-purple/30"
                >
                  View Our Packages
                </Link>
              </div>
            </ScrollAnimate>

            {/* Social proof row */}
            <ScrollAnimate animation="fade" delay={500}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Non-drop services
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lifetime support
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 Support
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Floating stat cards around hero */}
          <div className="relative mt-16 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
              {stats.map((stat, i) => (
                <ScrollAnimate key={stat.label} animation="fade-up" delay={400 + i * 100}>
                  <div className="floating-card p-5 text-center transition-all duration-300">
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* How It Works */}
      <section className="py-24 px-4">
        <div className="max-w-full mx-auto px-2">
          <ScrollAnimate animation="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-4">
                <svg className="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-purple">How it works?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How to <span className="gradient-text">grow</span> your brand in <span className="gradient-text">3 steps</span>?
              </h2>
              <p className="mt-4 text-gray-500 max-w-lg mx-auto">
                The All-in-One Digital Marketing solution you will need!
              </p>
            </div>
          </ScrollAnimate>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center">
                <ScrollAnimate animation="fade-up" delay={i * 200}>
                  <div className="floating-card p-8 text-center transition-all duration-300 group w-[280px]">
                    <div className="w-14 h-14 gradient-btn rounded-2xl flex items-center justify-center mx-auto mb-5 text-white font-bold text-lg group-hover:scale-110 transition-transform">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollAnimate>
                {i < steps.length - 1 && (
                  <ScrollAnimate animation="fade" delay={i * 200 + 300}>
                    <div className="hidden md:flex items-center mx-4">
                      <div className="flex items-center text-purple/40">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-purple/20 to-purple/40" />
                        <svg className="w-6 h-6 -ml-1 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex md:hidden justify-center my-4">
                      <svg className="w-6 h-6 text-purple/40 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </ScrollAnimate>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-full mx-auto px-2">
          <ScrollAnimate animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-4">
                <svg className="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span className="text-sm font-medium text-purple">What We Do</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Services That Drive <span className="gradient-text">Real Growth</span>
              </h2>
            </div>
          </ScrollAnimate>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <ScrollAnimate key={svc.title} animation="fade-up" delay={i * 100}>
                <div className="floating-card p-6 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mb-4 text-purple group-hover:gradient-btn group-hover:text-white transition-all">
                    {svc.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
          <ScrollAnimate animation="fade" delay={400}>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="text-purple hover:text-purple-dark font-medium inline-flex items-center gap-2 transition-colors"
              >
                See All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* About / Growth Section */}
      <section className="py-24 px-4">
        <div className="max-w-full mx-auto px-2">
          <ScrollAnimate animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-4">
                <svg className="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm font-medium text-purple">About</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Social Media <span className="gradient-text">Growth</span> Made Easy
              </h2>
              <p className="mt-4 text-gray-500 max-w-lg mx-auto">
                The All-in-One Digital Marketing solution you will need!
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollAnimate animation="fade-right">
              <div className="floating-card overflow-hidden rounded-2xl relative min-h-[320px] flex">
                {/* Left text side */}
                <div className="relative z-10 p-8 flex flex-col justify-center w-[45%]">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Krithika T</h3>
                  <p className="text-purple text-base font-semibold mb-5">CEO &amp; Founder</p>
                  <blockquote className="text-gray-600 italic leading-relaxed text-base">
                    &ldquo;We don&apos;t just run campaigns &mdash; we build brands that grow.&rdquo;
                  </blockquote>
                </div>
                {/* Right image side */}
                <div className="absolute right-0 top-0 bottom-0 w-[60%]">
                  <Image
                    src="/krithika.jpg"
                    alt="Krithika T - CEO & Founder"
                    fill
                    className="object-cover object-[70%_20%]"
                  />
                  {/* Narrow gradient only on the left edge so face stays clear */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 via-[30%] to-transparent" />
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Increase your <span className="gradient-text">Audience</span> Globally.
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  With a dedicated team and data-driven strategies, we help brands across India scale their digital presence. From SEO to content creation, we handle everything so you can focus on your business.
                </p>
                <Link
                  href="/services"
                  className="gradient-btn text-white font-semibold px-4 py-3 rounded-full text-sm inline-flex items-center gap-2 transition-all shadow-md shadow-purple/15"
                >
                  See Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Client Social Proof */}
      <section className="py-20 px-4 bg-gray-50/50">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollAnimate animation="fade-up">
            <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-purple">Trusted By</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Brands That <span className="gradient-text">Trust Us</span>
            </h2>
          </ScrollAnimate>
          {/* Top row - 4 logos */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {clients.slice(0, 4).map((c, i) => (
              <ScrollAnimate key={c.name} animation="zoom-in" delay={i * 100}>
                <div className={`floating-card p-5 flex items-center justify-center transition-all duration-300 h-[120px] rounded-2xl ${c.darkBg ? "!bg-black !border-gray-800" : ""}`}>
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={180}
                    height={80}
                    className="max-h-[80px] max-w-full object-contain scale-125"
                  />
                </div>
              </ScrollAnimate>
            ))}
          </div>
          {/* Bottom row - 3 logos centered */}
          <div className="grid grid-cols-3 gap-5 max-w-[75%] mx-auto mt-5">
            {clients.slice(4).map((c, i) => (
              <ScrollAnimate key={c.name} animation="zoom-in" delay={400 + i * 100}>
                <div className={`floating-card p-5 flex items-center justify-center transition-all duration-300 h-[120px] rounded-2xl ${c.darkBg ? "!bg-black !border-gray-800" : ""}`}>
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={180}
                    height={80}
                    className="max-h-[80px] max-w-full object-contain scale-125"
                  />
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4">
        <ScrollAnimate animation="zoom-in" className="max-w-4xl mx-auto">
          <div className="gradient-btn rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Grow Your Brand?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-lg mx-auto">
                Book a free strategy call and discover what Pro Trend can do for you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-call"
                  className="bg-white text-purple font-semibold px-8 py-3.5 rounded-full text-base hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Book a Call
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
          <div className="max-w-full mx-auto px-2">
            <div className="flex items-center justify-center mb-4">
              <Image src="/logo.png" alt="Pro Trend" width={120} height={32} className="h-7 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pro Trend. All rights reserved.
            </p>
          </div>
        </footer>
      </ScrollAnimate>
    </>
  );
}
