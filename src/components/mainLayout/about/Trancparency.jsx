import React from "react";
import {
  ShieldCheck,
  FileText,
  Users,
  DollarSign,
  Eye,
  Scale,
  ArrowRight,
} from "lucide-react";

const transparencyData = [
  {
    icon: ShieldCheck,
    title: "Legal Status",
    desc: "Registered non-profit operating under Bangladesh regulations with full legal compliance.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Users,
    title: "Governance",
    desc: "Led by a dedicated Executive Committee ensuring ethical decision-making and accountability.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: DollarSign,
    title: "Financials",
    desc: "Donations are tracked and allocated strictly to approved programs with 100% transparency.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: FileText,
    title: "Reporting",
    desc: "Regular impact summaries and project reports shared via official, audited channels.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Scale,
    title: "Ethical Standards",
    desc: "Zero tolerance for fund misuse. We follow strict community-first and non-discrimination principles.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Eye,
    title: "Public Oversight",
    desc: "Donors and partners can request verification or updates regarding any supported initiatives.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function Transparency() {
  return (
    <section className="relative pt-16 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Transparency & <span className="text-primary">Accountability</span>
          </h2>
          <p className="text-lg text-base-content/70 leading-relaxed">
            At OAB Foundation, we believe trust is earned through openness. We
            maintain rigorous standards in financial management and ethical
            governance to honor your support.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transparencyData.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-base-200/50 hover:border-2 border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-base-content/60 leading-relaxed mb-6">
                {item.desc}
              </p>
    
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-5">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral text-neutral-content p-8 md:p-14">
          
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">
                  Need more information?
                </h3>
                <p className="text-neutral-content/70 text-lg">
                  We are open to audits and inquiries. If you would like to 
                  review our detailed financial records or project reports, 
                  our team is ready to assist.
                </p>
              </div>
              <button className="group btn btn-primary btn-lg bg-orange-600 text-white flex p-2 rounded-2xl px-8 shadow-xl shadow-primary/20 border-none">
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}