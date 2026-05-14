const Step = ({ num, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center font-bold mb-4">{num}</div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-sm text-neutral-500">{desc}</p>
  </div>
);

const HowItWorks = () => (
  <section className="py-24 max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <Step num="1" title="Post Request" desc="Tell us what you need done." />
      <Step num="2" title="Get Matched" desc="Review vetted professional profiles." />
      <Step num="3" title="Pay Securely" desc="Release funds once satisfied." />
    </div>
  </section>
);
export default HowItWorks;