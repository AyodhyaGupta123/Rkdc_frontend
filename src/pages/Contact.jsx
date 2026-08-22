import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const whatsappNumber = "918103078916";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      "*New Inquiry*",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Project Type: ${form.projectType || "-"}`,
      `Message: ${form.message || "-"}`,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-paper pb-20 pt-28">
      <section className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">Contact</p>
            <h1 className="mt-6 font-display text-5xl leading-none text-ink md:text-6xl">
              Let’s create your next space.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
              Tell us about your project, your ambitions, and the atmosphere you want to create.
              We’ll help shape a concept that fits your vision and your site.
            </p>

            <div className="mt-10 space-y-6 text-sm text-stone">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink">Email</p>
                <a href="mailto:arraghuwarsingh78916@gmail.com" className="mt-2 inline-block text-base text-ink hover:opacity-70">
                  arraghuwarsingh78916@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink">Phone</p>
                <a href="tel:+918103078916" className="mt-2 inline-block text-base text-ink hover:opacity-70">
                  81030 78916
                </a>
                <a href="tel:+918120249676" className="mt-2 block text-base text-ink hover:opacity-70">
                  8120249676
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink">Address</p>
                <p className="mt-2 text-base text-ink">
                  Near MK Pond College, New Chouksey Nagar, Lambakheda, Berasiya Road, Bhopal
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[8px] border border-line bg-offwhite p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-stone/70 focus:border-ink"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-stone/70 focus:border-ink"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone">Project type</label>
                <input
                  type="text"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  placeholder="Residential, hospitality, commercial..."
                  className="w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-stone/70 focus:border-ink"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals..."
                  className="w-full resize-none border border-line bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-stone/70 focus:border-ink"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
              >
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
