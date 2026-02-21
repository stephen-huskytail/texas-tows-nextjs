"use client";
// Texas Tows Inc. — Contact Form Component
// Fields: Name, Phone, Email, Service (dropdown), Message, Submit
// Props: preselectedService, compact, darkBg

import { useState } from "react";
import { Phone, CheckCircle, Loader2, Mail } from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/constants";

interface ContactFormProps {
  preselectedService?: string;
  compact?: boolean;
  darkBg?: boolean;
}

export default function ContactForm({ preselectedService, compact = false, darkBg = false }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: preselectedService || "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[\d\s\-+()]{7,}$/.test(form.phone)) newErrors.phone = "Please enter a valid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Please enter a valid email";
    if (!form.service || form.service === "select-service") newErrors.service = "Please select a service";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const inputClass = `w-full px-4 py-3 rounded-md border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#045cb4] ${
    darkBg
      ? "bg-white/10 border-white/20 text-white placeholder-white/50"
      : "bg-white border-slate-200 text-slate-800 placeholder-slate-400"
  }`;

  const labelClass = `block text-sm font-medium mb-1.5 ${darkBg ? "text-white" : "text-slate-700"}`;

  if (submitted) {
    return (
      <div className={`rounded-xl p-8 text-center ${darkBg ? "bg-white/10" : "bg-green-50 border border-green-200"}`}>
        <CheckCircle className={`w-12 h-12 mx-auto mb-4 ${darkBg ? "text-green-400" : "text-green-600"}`} />
        <h3 className={`font-heading font-bold text-xl mb-2 ${darkBg ? "text-white" : "text-slate-800"}`}>
          Message Received!
        </h3>
        <p className={`text-sm mb-4 ${darkBg ? "text-white/80" : "text-slate-600"}`}>
          We&apos;ll be in touch shortly. For immediate assistance, call us directly.
        </p>
        <a href={BUSINESS.phoneHref} className="btn-primary inline-flex">
          <Phone className="w-4 h-4" />
          Call {BUSINESS.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            className={`${inputClass} ${errors.name ? "border-red-400" : ""}`}
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            autoComplete="name"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`}
            placeholder="(214) 555-0123"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
            autoComplete="tel"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          <span className="inline-flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            Email Address{" "}
            <span className={`font-normal ${darkBg ? "text-white/50" : "text-slate-400"}`}>(optional)</span>
          </span>
        </label>
        <input
          id="contact-email"
          type="email"
          className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          autoComplete="email"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Service Dropdown */}
      <div>
        <label htmlFor="contact-service" className={labelClass}>
          Service Needed <span className="text-red-400">*</span>
        </label>
        <select
          id="contact-service"
          className={`${inputClass} ${errors.service ? "border-red-400" : ""}`}
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option value="select-service">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Additional Details{" "}
          <span className={`font-normal ${darkBg ? "text-white/50" : "text-slate-400"}`}>(optional)</span>
        </label>
        <textarea
          id="contact-message"
          rows={compact ? 3 : 4}
          className={inputClass}
          placeholder="Location, vehicle type, or anything else we should know..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center text-base"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Phone className="w-4 h-4" />
            Request Service
          </>
        )}
      </button>

      <p className={`text-xs text-center ${darkBg ? "text-white/60" : "text-slate-400"}`}>
        For immediate help, call{" "}
        <a
          href={BUSINESS.phoneHref}
          className={`font-semibold ${darkBg ? "text-white" : "text-blue-600"}`}
        >
          {BUSINESS.phone}
        </a>
      </p>
    </form>
  );
}
