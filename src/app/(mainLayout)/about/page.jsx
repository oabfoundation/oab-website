import WorkAreas from "@/components/mainLayout/about/WorkAreas";
import OurPartners from "@/components/mainLayout/home/Partners";
export const metadata = {
  title: "About Us",
  description:
    "Learn about OAB Foundation's journey since 2018, our mission, vision, and how we are working towards UN Sustainable Development Goals.",
};
const Globe = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Users = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Award = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const Leaf = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const stats = [
  { icon: Globe, label: "Nationwide Impact", value: "34+" },
  { icon: Users, label: "Active Volunteers", value: "2,000+" },
  { icon: Award, label: "Founded", value: "2018" },
  { icon: Leaf, label: "SDGs Aligned", value: "12+" },
];

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-amber-200 bg-white/80 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-md group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="text-center">
      <div className="text-2xl font-black text-gray-900">{value}</div>
      <div className="text-sm text-gray-500 font-medium mt-0.5">{label}</div>
    </div>
  </div>
);

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #f59e0b 0%, #ea580c 60%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .mesh-bg {
          background: radial-gradient(ellipse 80% 60% at 60% 0%, rgba(251,191,36,0.18) 0%, transparent 70%),
                      radial-gradient(ellipse 60% 50% at 10% 80%, rgba(234,88,12,0.08) 0%, transparent 70%),
                      #faf9f7;
        }
        .quote-mark { font-size: 6rem; line-height: 0; color: #fbbf24; opacity: 0.3; font-family: Georgia, serif; }
      `}</style>
      <div className=" space-y-24">
        {/* Hero Block */}
        <div className="mesh-bg relative overflow-hidden rounded-3xl p-10 md:p-16 border border-amber-100">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full border-[40px] border-amber-300/10 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border-[30px] border-orange-300/10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Non-Profit Organization · Est. 2018
            </div>

            <h1 className=" text-5xl md:text-7xl font-black leading-[1.05] mb-6 text-gray-900">
              Building a <br />
              <span className="gradient-text">Better Bangladesh</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              At OAB Foundation, we believe in building a better world through
              sustainability, equality, and collective action — aligned with the
              United Nations SDGs.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="max-w-11/12 mx-auto px-4">
          {/* Who We Are */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-600 text-sm font-bold tracking-widest uppercase mb-4">
                <div className="h-px w-8 bg-amber-400" />
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                A Nationwide Platform for Change
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900 font-semibold">
                    OAB Foundation
                  </strong>{" "}
                  (Over All Bangladesh Foundation) is a visionary non-profit
                  established in 2018, committed to building a sustainable,
                  inclusive, and equitable Bangladesh.
                </p>
                <p>
                  We've grown into a nationwide platform uniting{" "}
                  <strong className="text-gray-900 font-semibold">
                    youth, volunteers, and change-makers
                  </strong>{" "}
                  around a shared dream — empowering children, women, and young
                  people to become confident, socially responsible citizens.
                </p>
                <p>
                  Our work rests on the belief that sustainable development
                  requires{" "}
                  <strong className="text-gray-900 font-semibold">
                    communities actively shaping their own futures
                  </strong>
                  . By aligning with the UN SDGs, our impact is locally
                  meaningful and globally relevant.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl bg-gradient-to-br from-amber-400 to-orange-600 p-8 md:p-10 text-white overflow-hidden">
              <div className="absolute top-4 left-6 quote-mark">"</div>
              <blockquote className="relative z-10 text-xl md:text-2xl font-semibold leading-snug mb-6 pt-4">
                We believe every community holds the seeds of its own
                transformation.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                  O
                </div>
                <div>
                  <div className="font-semibold text-sm">OAB Foundation</div>
                  <div className="text-white/70 text-xs">
                    Over All Bangladesh Foundation
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -top-10 -right-4 w-28 h-28 rounded-full bg-white/5 pointer-events-none" />
            </div>
          </div>
          {/* Core Work Areas */}
          <WorkAreas />
          <OurPartners></OurPartners>
        </div>
      </div>
    </div>
  );
}
