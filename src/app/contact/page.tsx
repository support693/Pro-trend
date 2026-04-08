import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollAnimate from "@/components/ScrollAnimate";

const values = [
  {
    title: "Result-Focused",
    desc: "Every campaign is designed with measurable outcomes in mind.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Client-First",
    desc: "Your brand's vision and goals drive every decision we make.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "We stay ahead of trends to give your brand a competitive edge.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    desc: "Clear communication, honest reporting, and no hidden costs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const contactMethods = [
  {
    title: "WhatsApp",
    value: "+91 8122021798",
    href: "https://wa.me/918122021798?text=Hi%20Pro%20Trend%2C%20I%27d%20like%20to%20get%20in%20touch",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    title: "Phone",
    value: "+91 8122021798",
    href: "tel:+918122021798",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email",
    value: "support@protrend.in",
    href: "mailto:support@protrend.in",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* About Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimate animation="fade-down">
            <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-purple">ABOUT US</span>
            </div>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We&apos;re <span className="gradient-text">Pro Trend</span> — Your Growth Partner
            </h1>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={200}>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Pro Trend is a performance-driven digital marketing agency founded by Krithika T, helping brands across India scale through strategic SEO, social media management, content creation, and Google Ads. With 50+ active clients and a 100% result-focused philosophy, we are the 21st Century&apos;s Best Growth Partner.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Founder Section */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimate animation="fade-up">
            <div className="floating-card overflow-hidden rounded-2xl relative min-h-[320px] flex">
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center w-[50%]">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Krithika T</h3>
                <p className="text-purple text-base font-semibold mb-5">CEO &amp; Founder</p>
                <blockquote className="text-gray-600 italic leading-relaxed text-base mb-6">
                  &ldquo;We don&apos;t just run campaigns &mdash; we build brands that grow.&rdquo;
                </blockquote>
                <div className="flex gap-3 text-sm text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">50+ Clients</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">100% Result Focused</span>
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-[55%]">
                <Image
                  src="/krithika.jpg"
                  alt="Krithika T - CEO & Founder"
                  fill
                  className="object-cover object-[70%_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 via-[30%] to-transparent" />
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimate animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-purple">Our Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What <span className="gradient-text">Drives Us</span>
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollAnimate key={v.title} animation="zoom-in" delay={i * 100}>
                <div className="floating-card p-6 text-center group h-full">
                  <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center mx-auto mb-4 text-purple group-hover:gradient-btn group-hover:text-white transition-all">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimate animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-purple">Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Let&apos;s <span className="gradient-text">Talk Growth</span>
              </h2>
              <p className="mt-4 text-gray-500 max-w-lg mx-auto">
                Ready to take your brand to the next level? Reach out and let&apos;s discuss your goals.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <ScrollAnimate animation="fade-right" className="lg:col-span-3">
              <div className="floating-card p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-purple/50 focus:ring-2 focus:ring-purple/10 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-purple/50 focus:ring-2 focus:ring-purple/10 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-purple/50 focus:ring-2 focus:ring-purple/10 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-purple/50 focus:ring-2 focus:ring-purple/10 transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="seo">Search Engine Optimization (SEO)</option>
                      <option value="smm">Social Media Management</option>
                      <option value="content">Content Creation</option>
                      <option value="ads">Google Ads & Performance Marketing</option>
                      <option value="instagram">Instagram Growth</option>
                      <option value="content-marketing">Content Marketing</option>
                      <option value="full">Full Suite Package</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your brand and goals..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-purple/50 focus:ring-2 focus:ring-purple/10 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="gradient-btn text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all shadow-lg shadow-purple/20 w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollAnimate>

            {/* Contact Info */}
            <ScrollAnimate animation="fade-left" className="lg:col-span-2">
              <div className="space-y-5">
                {contactMethods.map((m) => (
                  <Link
                    key={m.title}
                    href={m.href}
                    target={m.title === "WhatsApp" ? "_blank" : undefined}
                    rel={m.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="floating-card p-5 flex items-center gap-4 group transition-all duration-300 block"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center text-purple group-hover:gradient-btn group-hover:text-white transition-all flex-shrink-0">
                      {m.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{m.title}</p>
                      <p className="font-semibold text-gray-900 group-hover:text-purple transition-colors">
                        {m.value}
                      </p>
                    </div>
                  </Link>
                ))}

                {/* Map / Location card */}
                <div className="floating-card p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple/5 flex items-center justify-center text-purple flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-semibold text-gray-900">India</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We work with brands across India, providing digital marketing solutions remotely and in-person.
                  </p>
                </div>

                {/* Social links */}
                <div className="floating-card p-5">
                  <p className="text-sm text-gray-400 mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    <Link
                      href="https://www.instagram.com/protrendpartner?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl overflow-hidden hover:scale-110 transition-transform"
                    >
                      <Image src="/platforms/instagram.jpg" alt="Instagram" width={44} height={44} className="w-full h-full object-contain" />
                    </Link>
                    <Link href="#" className="w-11 h-11 rounded-xl overflow-hidden hover:scale-110 transition-transform">
                      <Image src="/platforms/facebook.jpg" alt="Facebook" width={44} height={44} className="w-full h-full object-contain" />
                    </Link>
                    <Link href="#" className="w-11 h-11 rounded-xl overflow-hidden hover:scale-110 transition-transform">
                      <Image src="/platforms/linkedin.jpg" alt="LinkedIn" width={44} height={44} className="w-full h-full object-contain" />
                    </Link>
                    <Link href="#" className="w-11 h-11 rounded-xl overflow-hidden hover:scale-110 transition-transform">
                      <Image src="/platforms/x.jpg" alt="X" width={44} height={44} className="w-full h-full object-contain" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
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
