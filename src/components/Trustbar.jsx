const TrustBar = () => (
  <div className="grid grid-cols-3 gap-8 py-16 bg-white border-b border-neutral-100">
    {[
      { label: "Verified Pros", val: "5k+" },
      { label: "Jobs Finished", val: "12k+" },
      { label: "Trust Score", val: "99%" }
    ].map((stat) => (
      <div key={stat.label} className="text-center">
        <h3 className="text-3xl font-bold text-neutral-900">{stat.val}</h3>
        <p className="text-neutral-500 text-sm mt-1">{stat.label}</p>
      </div>
    ))}
  </div>
);
export default TrustBar;