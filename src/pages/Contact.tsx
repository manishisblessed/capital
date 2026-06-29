import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Send, MapPin, Mail, Phone } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — wire up to actual endpoint later
    setTimeout(() => {
      setStatus("sent");
      setForm(initial);
      setTimeout(() => setStatus("idle"), 3500);
    }, 900);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            <span className="block">Happy to answer</span>
            <span className="italic font-light block">your queries.</span>
          </>
        }
        subtitle="Reach out about investment opportunities, fund participation, or strategic partnerships."
      />

      <section className="py-20 lg:py-28 bg-paper">
        <div className="container-tb">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-6">Send us a message</p>
                <h2 className="display-3 mb-12">Let's talk.</h2>
              </Reveal>

              <form onSubmit={onSubmit} className="space-y-2">
                <Field
                  label="Name"
                  type="text"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <Field
                  label="Subject"
                  type="text"
                  value={form.subject}
                  onChange={(v) => setForm({ ...form, subject: v })}
                  required
                />
                <Field
                  label="Message"
                  type="textarea"
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  required
                />

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-3 h-14 px-8 bg-navy-500 text-paper rounded-full text-sm uppercase tracking-[0.18em] transition-all duration-500 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{status === "sent" ? "Sent" : status === "sending" ? "Sending..." : "Send Message"}</span>
                    <Send size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </button>
                  {status === "sent" && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-sm text-red-500"
                    >
                      Thank you. We'll get back to you shortly.
                    </motion.p>
                  )}
                </div>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="bg-cream rounded-3xl p-10 lg:p-12">
                  <p className="eyebrow mb-6">Office</p>
                  <div className="space-y-8">
                    <InfoItem icon={<MapPin size={18} />} label="Location">
                      63, 6th Floor, Maker Tower "F"
                      <br />
                      Cuffe Parade, Mumbai 400 005
                      <br />
                      Maharashtra, India
                    </InfoItem>

                    <InfoItem icon={<Phone size={18} />} label="Phone">
                      —
                    </InfoItem>

                    <InfoItem icon={<Mail size={18} />} label="Email">
                      <a href="mailto:contact@tridentbay.in" className="hover:text-red-500 transition-colors">
                        contact@tridentbay.in
                      </a>
                    </InfoItem>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-paper pb-24">
        <div className="container-tb">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-rule">
              <iframe
                title="TridentBay office on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7068814076244!2d72.81616367507671!3d18.910856482244456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c5a8e8a5e9%3A0x5b5b5b5b5b5b5b5b!2sMaker%20Tower%20F%2C%20Cuffe%20Parade%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  type: "text" | "email" | "textarea";
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const float = focused || hasValue;

  const sharedProps = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    required,
    className:
      "w-full bg-transparent border-0 border-b border-rule pt-7 pb-3 text-base text-navy-500 outline-none transition-colors focus:border-red-500 placeholder-transparent resize-none",
  };

  return (
    <div className="relative">
      <label
        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
          float
            ? "top-1 text-[10px] uppercase tracking-[0.22em] text-red-500"
            : "top-7 text-base text-muted"
        }`}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea rows={4} {...(sharedProps as any)} />
      ) : (
        <input type={type} {...(sharedProps as any)} />
      )}
    </div>
  );
}

function InfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-paper border border-rule grid place-items-center text-red-500 shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-1">{label}</p>
        <div className="text-base text-navy-500 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
