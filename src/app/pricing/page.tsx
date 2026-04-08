import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollAnimate from "@/components/ScrollAnimate";

const packages = [
  {
    name: "GOLD",
    price: "₹25,000",
    gst: "+ GST",
    duration: "1 Month Trial",
    badge: null,
    features: [
      "3 Platforms + 1 Optional",
      "Social Media Marketing & Management",
      "Product Visibility",
      "Google Ads",
    ],
    missing: ["SEO Keywords", "Content Creation"],
  },
  {
    name: "SILVER",
    price: "₹60,000",
    gst: "+ GST",
    duration: "6+1 = 7 Months",
    badge: null,
    features: [
      "3 Platforms + 1 Optional",
      "Social Media Marketing & Management",
      "Product Visibility",
      "Google Ads",
      "Content Creation (Reels, Carousels, Templates)",
    ],
    missing: ["SEO Keywords"],
  },
  {
    name: "DIAMOND",
    price: "₹75,000",
    gst: "+ GST",
    duration: "6+2 = 8 Months",
    badge: "Most Popular",
    features: [
      "3 Platforms + 1 Optional",
      "Social Media Marketing & Management",
      "Product Visibility",
      "Google Ads",
      "Content Creation (Reels, Carousels, Templates)",
      "SEO — 20+ Keywords",
    ],
    missing: [],
  },
  {
    name: "PLATINUM",
    price: "₹1,20,000",
    gst: "+ GST",
    duration: "12+3 = 15 Months",
    badge: "Best Value",
    features: [
      "All 4 Platforms",
      "Social Media Marketing & Management",
      "Product Visibility",
      "Google Ads",
      "Content Creation (Reels, Carousels, Templates)",
      "SEO — 20+ Keywords",
      "Full Suite — Everything Included",
    ],
    missing: [],
  },
];

const comparisonFeatures = [
  { name: "Price", gold: "₹25,000", silver: "₹60,000", diamond: "₹75,000", platinum: "₹1,20,000" },
  { name: "Duration", gold: "1 Month", silver: "6+1 = 7 Mo", diamond: "6+2 = 8 Mo", platinum: "12+3 = 15 Mo" },
  { name: "Platforms", gold: "3 + 1", silver: "3 + 1", diamond: "3 + 1", platinum: "3 + 1" },
  { name: "SEO Keywords", gold: false, silver: false, diamond: true, platinum: true },
  { name: "Content Creation", gold: false, silver: true, diamond: true, platinum: true },
  { name: "Social Media Mgmt", gold: true, silver: true, diamond: true, platinum: true },
  { name: "Social Media Mktg", gold: true, silver: true, diamond: true, platinum: true },
  { name: "Google Ads", gold: true, silver: true, diamond: true, platinum: true },
  { name: "Product Visibility", gold: true, silver: true, diamond: true, platinum: true },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimate animation="fade-down">
            <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-purple">PRICING</span>
            </div>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={200}>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
              Choose a plan that fits your brand&apos;s goals. No hidden fees — just real results.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Package Cards */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => {
            const isPopular = pkg.badge === "Most Popular";
            const isBest = pkg.badge === "Best Value";
            const highlighted = isPopular || isBest;

            return (
              <ScrollAnimate key={pkg.name} animation="fade-up" delay={i * 100}>
                <div
                  className={`floating-card p-6 flex flex-col h-full relative transition-all duration-300 ${
                    highlighted
                      ? "gradient-border ring-2 ring-purple/20 shadow-xl shadow-purple/10"
                      : ""
                  }`}
                >
                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className={`text-xs font-bold px-4 py-1 rounded-full text-white ${isPopular ? "gradient-btn" : "bg-gray-900"}`}>
                        {isPopular ? "⭐ " : "🏆 "}{pkg.badge}
                      </span>
                    </div>
                  )}

                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 mt-2">{pkg.name}</h3>

                  {/* Price */}
                  <div className="mt-4 mb-1">
                    <span className="text-3xl font-bold gradient-text">{pkg.price}</span>
                    <span className="text-gray-400 text-sm ml-1">{pkg.gst}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6">{pkg.duration}</p>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 mb-5" />

                  {/* Features */}
                  <div className="flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </div>
                    ))}
                    {pkg.missing.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CrossIcon />
                        <span className="text-gray-300 text-sm line-through">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`https://wa.me/918122021798?text=Hi%20Pro%20Trend%2C%20I%27m%20interested%20in%20the%20${pkg.name}%20package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 text-center font-semibold py-3 rounded-full text-sm transition-all block ${
                      highlighted
                        ? "gradient-btn text-white shadow-md shadow-purple/20"
                        : "border border-gray-200 text-gray-700 hover:border-purple/30 hover:text-purple"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimate animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Compare <span className="gradient-text">All Plans</span>
              </h2>
              <p className="mt-4 text-gray-500">Feature-by-feature comparison to help you decide.</p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={200}>
            <div className="floating-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-4 px-6 font-semibold text-gray-500">Feature</th>
                      <th className="text-center py-4 px-4 font-bold text-gray-900">Gold</th>
                      <th className="text-center py-4 px-4 font-bold text-gray-900">Silver</th>
                      <th className="text-center py-4 px-4 font-bold text-purple">Diamond ⭐</th>
                      <th className="text-center py-4 px-4 font-bold text-gray-900">Platinum 🏆</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, i) => (
                      <tr
                        key={row.name}
                        className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-gray-50/50" : ""}`}
                      >
                        <td className="py-3.5 px-6 font-medium text-gray-700">{row.name}</td>
                        {(["gold", "silver", "diamond", "platinum"] as const).map((plan) => {
                          const val = row[plan];
                          return (
                            <td key={plan} className={`py-3.5 px-4 text-center ${plan === "diamond" ? "bg-purple/[0.02]" : ""}`}>
                              {typeof val === "boolean" ? (
                                <span className="inline-flex justify-center">
                                  {val ? <CheckIcon /> : <CrossIcon />}
                                </span>
                              ) : (
                                <span className="text-gray-600 font-medium">{val}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* CTA Below Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimate animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Our team will analyze your brand and recommend the best package — completely free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://wa.me/918122021798?text=Hi%20Pro%20Trend%2C%20I%20need%20help%20choosing%20a%20package"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-btn text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all shadow-lg shadow-purple/20 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us Now
              </Link>
              <Link
                href="tel:+918122021798"
                className="border border-gray-200 text-gray-700 hover:border-purple/30 hover:text-purple font-semibold px-8 py-3.5 rounded-full text-base transition-colors"
              >
                Call: +91 8122021798
              </Link>
            </div>
          </ScrollAnimate>

          {/* Trust signals */}
          <ScrollAnimate animation="fade" delay={300}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckIcon />
                No hidden fees
              </div>
              <div className="flex items-center gap-1.5">
                <CheckIcon />
                Cancel anytime
              </div>
              <div className="flex items-center gap-1.5">
                <CheckIcon />
                Free consultation
              </div>
            </div>
          </ScrollAnimate>
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
