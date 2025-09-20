// components/Faq.tsx
export default function Faq({ faq }: { faq?: { q: string; a: string }[] }) {
  if (!faq) return null;
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          FAQ – Frequently Asked Questions
        </h2>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/20">
          {faq.map((f: any, i: number) => (
            <details key={f.q + i} className="group p-5">
              <summary className="cursor-pointer list-none text-white font-medium flex justify-between items-center">
                {f.q}
                <span className="ml-4 text-primary group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm text-gray-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
