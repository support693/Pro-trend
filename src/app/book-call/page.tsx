"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollAnimate from "@/components/ScrollAnimate";

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function BookCall() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const isToday = (day: number) =>
    day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();

  const isPast = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  const isSunday = (day: number) => new Date(currentYear, currentMonth, day).getDay() === 0;

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); }
    else setCurrentMonth(currentMonth - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); }
    else setCurrentMonth(currentMonth + 1);
  };

  const canGoPrev = currentYear > today.getFullYear() || (currentYear === today.getFullYear() && currentMonth > today.getMonth());

  const selectedDateStr = selectedDate
    ? `${monthNames[currentMonth]} ${selectedDate}, ${currentYear}`
    : "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center px-4 pt-24">
          <ScrollAnimate animation="zoom-in">
            <div className="floating-card p-12 max-w-lg text-center">
              <div className="w-20 h-20 gradient-btn rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Call Booked Successfully!</h2>
              <p className="text-gray-500 mb-2">
                <span className="font-semibold text-gray-700">{selectedDateStr}</span> at{" "}
                <span className="font-semibold text-gray-700">{selectedTime}</span>
              </p>
              <p className="text-gray-500 text-sm mb-6">
                We&apos;ll reach out to <span className="font-medium">{formData.name}</span> at{" "}
                <span className="font-medium">{formData.phone}</span> to confirm your consultation.
              </p>
              <a
                href="/"
                className="gradient-btn text-white font-semibold px-8 py-3 rounded-full text-sm inline-block transition-all"
              >
                Back to Home
              </a>
            </div>
          </ScrollAnimate>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimate animation="fade-down">
            <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-purple">FREE CONSULTATION</span>
            </div>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Book a <span className="gradient-text">Strategy Call</span>
            </h1>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-up" delay={200}>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Pick a date and time that works for you. Our team will call you for a free brand consultation.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Steps indicator */}
      <section className="px-4 pb-8">
        <div className="max-w-md mx-auto flex items-center justify-center gap-3">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step >= s ? "gradient-btn text-white" : "bg-gray-100 text-gray-400"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div className={`w-12 h-0.5 ${step > s ? "gradient-btn" : "bg-gray-200"} transition-all`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-2 text-xs text-gray-400">
          <span className={step >= 1 ? "text-purple font-medium" : ""}>Date</span>
          <span className={step >= 2 ? "text-purple font-medium" : ""}>Time</span>
          <span className={step >= 3 ? "text-purple font-medium" : ""}>Details</span>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Step 1: Calendar */}
          {step === 1 && (
            <ScrollAnimate animation="fade-up">
              <div className="floating-card p-6 md:p-8">
                {/* Month nav */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    disabled={!canGoPrev}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      canGoPrev ? "hover:bg-purple/5 text-gray-600" : "text-gray-200 cursor-not-allowed"
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h3 className="text-lg font-bold text-gray-900">
                    {monthNames[currentMonth]} {currentYear}
                  </h3>
                  <button
                    onClick={nextMonth}
                    className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-purple/5 text-gray-600 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((d) => (
                    <div key={d} className="text-center text-xs font-semibold text-gray-400 py-2">{d}</div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                    const past = isPast(day);
                    const sunday = isSunday(day);
                    const disabled = past || sunday;
                    const selected = selectedDate === day;
                    const todayMark = isToday(day);

                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        onClick={() => setSelectedDate(day)}
                        className={`h-11 rounded-xl text-sm font-medium transition-all ${
                          selected
                            ? "gradient-btn text-white shadow-md shadow-purple/20"
                            : disabled
                            ? "text-gray-200 cursor-not-allowed"
                            : todayMark
                            ? "bg-purple/5 text-purple hover:bg-purple/10"
                            : "text-gray-700 hover:bg-purple/5 hover:text-purple"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs text-gray-400 mt-4 text-center">Sundays are unavailable</p>

                {/* Continue button */}
                <button
                  onClick={() => selectedDate && setStep(2)}
                  disabled={!selectedDate}
                  className={`mt-6 w-full py-3.5 rounded-full font-semibold text-base transition-all ${
                    selectedDate
                      ? "gradient-btn text-white shadow-lg shadow-purple/20"
                      : "bg-gray-100 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  Continue — {selectedDate ? selectedDateStr : "Select a date"}
                </button>
              </div>
            </ScrollAnimate>
          )}

          {/* Step 2: Time slots */}
          {step === 2 && (
            <ScrollAnimate animation="fade-up">
              <div className="floating-card p-6 md:p-8">
                <button onClick={() => setStep(1)} className="text-purple text-sm font-medium mb-4 flex items-center gap-1 hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Change date
                </button>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Select a time</h3>
                <p className="text-gray-500 text-sm mb-6">{selectedDateStr}</p>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl text-sm font-medium transition-all border ${
                        selectedTime === time
                          ? "gradient-btn text-white border-transparent shadow-md shadow-purple/20"
                          : "border-gray-200 text-gray-700 hover:border-purple/30 hover:text-purple"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => selectedTime && setStep(3)}
                  disabled={!selectedTime}
                  className={`mt-6 w-full py-3.5 rounded-full font-semibold text-base transition-all ${
                    selectedTime
                      ? "gradient-btn text-white shadow-lg shadow-purple/20"
                      : "bg-gray-100 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  Continue — {selectedTime || "Select a time"}
                </button>
              </div>
            </ScrollAnimate>
          )}

          {/* Step 3: Details form */}
          {step === 3 && (
            <ScrollAnimate animation="fade-up">
              <div className="floating-card p-6 md:p-8">
                <button onClick={() => setStep(2)} className="text-purple text-sm font-medium mb-4 flex items-center gap-1 hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Change time
                </button>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Your Details</h3>
                <p className="text-gray-500 text-sm mb-6">
                  {selectedDateStr} at {selectedTime}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-purple/50 focus:ring-2 focus:ring-purple/10 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-purple/50 focus:ring-2 focus:ring-purple/10 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-purple/50 focus:ring-2 focus:ring-purple/10 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Service Interested In</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-purple/50 focus:ring-2 focus:ring-purple/10 transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="seo">SEO</option>
                      <option value="smm">Social Media Management</option>
                      <option value="content">Content Creation</option>
                      <option value="ads">Google Ads & Performance Marketing</option>
                      <option value="instagram">Instagram Growth</option>
                      <option value="content-marketing">Content Marketing</option>
                      <option value="full">Full Suite Package</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1.5">Anything we should know?</label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your brand or goals..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-purple/50 focus:ring-2 focus:ring-purple/10 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-btn text-white font-semibold py-3.5 rounded-full text-base transition-all shadow-lg shadow-purple/20"
                  >
                    Book My Free Call
                  </button>
                </form>
              </div>
            </ScrollAnimate>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-gray-100 text-center">
        <div className="flex items-center justify-center mb-4">
          <Image src="/logo.png" alt="Pro Trend" width={120} height={32} className="h-7 w-auto" />
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Pro Trend. All rights reserved.
        </p>
      </footer>
    </>
  );
}
