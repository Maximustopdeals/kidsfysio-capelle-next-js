"use client";

import { useState } from "react";
import { formspreeEndpoint } from "@/config";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // Succesmelding (High-End Kaart)
  if (status === "success") {
    return (
      <div className="text-center py-16 px-8 rounded-[2rem] bg-brand-light/50 border border-brand-mint/30 shadow-sm">
        <div className="mx-auto w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/30">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl font-light text-brand-dark mb-3">
          Bedankt voor uw bericht
        </h3>
        <p className="text-muted text-lg">
          We nemen zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  // Input styling (High-End)
  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-charcoal/10 bg-white text-brand-dark placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/40 transition-all duration-300 text-[0.95rem] shadow-sm";
  
  const labelClass =
    "block text-sm font-semibold text-brand-dark mb-2 tracking-wide";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="naam" className={labelClass}>
            Uw naam *
          </label>
          <input
            id="naam"
            name="uw_naam"
            type="text"
            required
            className={inputClass}
            placeholder="Voor- en achternaam"
          />
        </div>
        <div>
          <label htmlFor="naam-kind" className={labelClass}>
            Naam van uw kind *
          </label>
          <input
            id="naam-kind"
            name="naam_kind"
            type="text"
            required
            className={inputClass}
            placeholder="Naam kind"
          />
        </div>
        <div>
          <label htmlFor="geboortedatum" className={labelClass}>
            Geboortedatum kind *
          </label>
          <input
            id="geboortedatum"
            name="geboortedatum_kind"
            type="date"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="uw@email.nl"
          />
        </div>
        <div>
          <label htmlFor="telefoon" className={labelClass}>
            Telefoonnummer *
          </label>
          <input
            id="telefoon"
            name="telefoonnummer"
            type="tel"
            required
            className={inputClass}
            placeholder="06..."
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="postcode" className={labelClass}>
              Postcode *
            </label>
            <input
              id="postcode"
              name="postcode"
              type="text"
              required
              className={inputClass}
              placeholder="2900 AA"
            />
          </div>
          <div>
            <label htmlFor="huisnummer" className={labelClass}>
              Huisnr. *
            </label>
            <input
              id="huisnummer"
              name="huisnummer"
              type="text"
              required
              className={inputClass}
              placeholder="12"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="gevonden" className={labelClass}>
          Hoe heeft u ons gevonden? *
        </label>
        <select
          id="gevonden"
          name="hoe_gevonden"
          required
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>
            Selecteer...
          </option>
          <option value="Google">Google</option>
          <option value="Familie en/of vrienden">Familie en/of vrienden</option>
          <option value="Instagram">Instagram</option>
          <option value="Anders">Anders</option>
        </select>
      </div>

      <div>
        <label htmlFor="info" className={labelClass}>
          Aanvullende informatie *
        </label>
        <textarea
          id="info"
          name="aanvullende_informatie"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Vertel kort waar we u mee kunnen helpen"
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-sm text-red-700">
          Er ging iets mis. Probeer het opnieuw of mail naar{" "}
          <a href="mailto:info@kidsfysiocapelle.nl" className="font-semibold underline hover:text-red-900 transition-colors">
            info@kidsfysiocapelle.nl
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 rounded-full bg-brand-primary text-white font-nunito font-bold tracking-wide shadow-lg shadow-brand-primary/20 hover:-translate-y-0.5 hover:bg-brand-dark transition-all duration-300 disabled:opacity-60 disabled:hover:translate-y-0 disabled:shadow-none mt-4"
      >
        {status === "sending" ? "Versturen..." : "Verstuur bericht"}
      </button>
    </form>
  );
}
