"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Phone, CheckCircle, ChevronDown } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(preselectedService || "");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; service?: string }>({});

  useEffect(() => {
    if (preselectedService) setService(preselectedService);
  }, [preselectedService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => {
      setName(""); setPhone(""); setService(preselectedService || "");
      setSubmitted(false); setErrors({});
    }, 300);
  }, [onClose, preselectedService]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, handleClose]);

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim() || name.trim().length < 2) e.name = "Please enter your name.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) e.phone = "Please enter a valid 10-digit phone number.";
    if (!service) e.service = "Please select a service.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#0a2340] px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-white font-heading font-bold text-xl">Get a Free Quote</h2>
            <p className="text-blue-200 text-sm mt-0.5">We&apos;ll call you back in minutes</p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={52} />
              <h3 className="text-xl font-heading font-bold text-[#0a2340] mb-2">
                Got it, {name.split(" ")[0]}!
              </h3>
              <p className="text-gray-600 mb-1">
                We&apos;ll call <strong>{phone}</strong> shortly to confirm your{" "}
                <strong>{service}</strong> request.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Need immediate help? Call us directly:
              </p>
              <a href={BUSINESS.phoneHref} className="btn-primary w-full justify-center">
                <Phone size={18} />
                {BUSINESS.phone}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#045cb4] transition-colors ${
                    errors.name ? "border-red-400 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder="(214) 555-0100"
                  className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#045cb4] transition-colors ${
                    errors.phone ? "border-red-400 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#045cb4] transition-colors bg-white ${
                      errors.service ? "border-red-400 bg-red-50" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Other">Other / Not Sure</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              <button type="submit" className="w-full py-4 rounded-xl font-bold text-slate-900 text-base mt-2 transition-opacity hover:opacity-90 active:scale-[0.98]" style={{ backgroundColor: "#fef15f" }}>
                Request My Free Quote →
              </button>

              <p className="text-center text-xs text-slate-400 pt-1">
                No obligation. We&apos;ll call you back within minutes.
              </p>

              {/* Or call directly divider */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs text-slate-400 whitespace-nowrap">or call directly</span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm border-2 transition-colors hover:bg-blue-50"
                style={{ borderColor: "#045cb4", color: "#045cb4" }}
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
