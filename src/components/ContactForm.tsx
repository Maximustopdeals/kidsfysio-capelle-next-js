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

  if (status === "success") {
    return (
      <div className="text-center py-10 px-6 rounded-xl bg-sage-pale/40">
        <h3 className="font-serif text-2xl font-light text-charcoal">
          Bedankt voor uw bericht
        </h3>
        <p className="mt-3 text-muted">
          We nemen zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-mist bg-cream text-charcoal placeholder:text-subtle/70 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage/40 transition-all duration-300 text-[0.95rem]";

  const labelClass =
    "block text-sm font-medium text-ink mb-2 tracking-wide";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          <option value="Familie en/ of vrienden">Familie / vrienden</option>
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
        <p className="text-sm text-red-700">
          Er ging iets mis. Probeer het opnieuw of mail naar{" "}
          <a href="mailto:info@kidsfysiocapelle.nl" className="underline">
            info@kidsfysiocapelle.nl
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 rounded-full bg-sage text-cream font-medium tracking-wide hover:bg-forest transition-colors duration-400 disabled:opacity-60"
      >
        {status === "sending" ? "Versturen..." : "Verstuur bericht"}
      </button>
    </form>
  );
}
