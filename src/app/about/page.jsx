"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  HandHeart,
  GraduationCap,
  Scale,
  HeartPulse,
  Users,
  TrendingUp,
  Heart,
  Globe,
  Lightbulb,
  CheckCircle,
  Target,
  Award,
  MapPin
} from "lucide-react";

export default function About() {

  const images = [
    "https://i.ibb.co.com/Pzzzcrpf/Screenshot-2026-02-11-120224.png",
    "https://i.ibb.co.com/Zqn6rKf/Screenshot-2026-02-11-120237.png",
    "https://i.ibb.co.com/SkLVj3C/Screenshot-2026-02-11-120248.png",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/630142471_834977552928507_2121097542758993365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8yuSF_xYDXUQ7kNvwE1K9IA&_nc_oc=AdmDw0QL0FtS2AViQOoBmYVJptaekoe1TgYDFRGQzNIXom3gkEw0fkLjH8r3lPD3AOo&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=myInnZ2tuvJ67jdjHWwSTw&oh=00_AfvV9_GZqcSqQGk6u4820wQpbG-Ajmaxuzm61B501rGPig&oe=6992095B",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/630526896_834977529595176_506175100321992261_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vFNMVWqkD4EQ7kNvwFechXB&_nc_oc=Adl3GR0Xz4hKVDpU86_ysC8_q0OBCRy5oC32eFs2iB8gr6cJN0VXdg6LGbA9pe0WUL4&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=Lt_wbZUP_37AkxrOhVDsPw&oh=00_Afs52d1HZG67bQqNCeB1FZJoua0QADuXWgtE_ztCtS6c3g&oe=6991E17E",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/629734028_834977519595177_7806978560091439448_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=21autYVVg6wQ7kNvwHTvV9A&_nc_oc=AdnOoTByMDdRJJzzdTyZQwK4-B7lvrudgLHjyjaaUfHASdg1URKRJnEcm1yu_2JnFiM&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=8VFFJkH4fmhpo1ogu3ou5w&oh=00_AfuXMumgnJOroPaMUv6HWkeCAQOq65LaZ4rNstkFhyWkWg&oe=6991EED5",
  ];

  const batchSize = 3; // Protibar koto image dakhabe
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => (prev + batchSize) % images.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Current batch images select kora
  const currentImages = [];
  for (let i = 0; i < batchSize; i++) {
    currentImages.push(images[(startIndex + i) % images.length]);
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-300 via-primary-300 to-primary-300 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-200/20 rounded-full translate-y-24 -translate-x-24"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">
            About OAB Foundation
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            At OAB Foundation, we believe in building a better world through
            sustainability, equality, and collective action. Since 2018, we have
            been working across Bangladesh to create lasting impact aligned with
            the United Nations Sustainable Development Goals (SDGs).
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2 text-primary-600">
              <Globe className="h-6 w-6" />
              <span className="font-semibold">Nationwide Impact</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-primary-600">
              <Users className="h-6 w-6" />
              <span className="font-semibold">Thousands of Volunteers</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-primary-600">
              <Award className="h-6 w-6" />
              <span className="font-semibold">Since 2018</span>
            </div>
          </div>
        </motion.div>
      </section>

{/* Who We Are */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="animate-on-scroll"
>
  <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
    <div className="p-3 bg-primary/10 rounded-xl md:mt-2 shrink-0">
      <Lightbulb className="h-8 w-8 text-primary-600" />
    </div>

  <div className="flex-1">
  <div className="mb-8">
    <div className="inline-block">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Who We Are
      </h2>
      <div className="h-1 w-20 bg-primary rounded-full"></div>
    </div>
  </div>
<p className="text-gray-700 leading-relaxed text-lg pl-4 mb-4">
  <span className="text-primary-600 font-semibold">OAB Foundation (Over All Bangladesh Foundation)</span> is a visionary 
  non-profit organization established in <span className="text-primary-600 font-semibold">2018</span> with a strong commitment to 
  building a <span className="text-primary-600 font-semibold">sustainable, inclusive, and equitable Bangladesh</span>. 
  From its inception, the foundation has been working tirelessly to 
  <strong>address pressing social challenges</strong>, uplift <strong>disadvantaged communities</strong>, 
  and promote the values of <strong>justice, equality, and sustainability</strong>.
</p>

<p className="text-gray-700 leading-relaxed text-lg pl-4 mb-4">
  Over the years, <span className="text-primary-600 font-semibold">OAB Foundation</span> has grown into a nationwide platform for 
  <strong>youth, volunteers, and change-makers</strong> united by a shared dream of 
  creating a <span className="text-primary-600 font-semibold">fairer and greener future</span>. Through diverse programs and initiatives, 
  we empower <strong>children, women, and young people</strong> to become 
  <strong>skilled, confident, and socially responsible citizens</strong> capable of leading positive change within their own communities.
</p>

<p className="text-gray-700 leading-relaxed text-lg pl-4">
  Our work is deeply rooted in the belief that <span className="text-primary-600 font-semibold">sustainable development</span> is
  only possible when <strong>communities are actively involved</strong> in shaping their
  own future. By aligning our initiatives with the <span className="text-primary-600 font-semibold">United Nations Sustainable Development Goals (SDGs)</span>, 
  we ensure that our <span className="text-primary-600 font-semibold">impact</span> is both <strong>locally meaningful</strong> and <strong>globally relevant</strong>.
</p>

     <section className="mt-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentImages.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`OAB Foundation Activity ${index + 1}`}
              className="rounded-xl w-full h-48 object-cover shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </section>


  {/* Highlight points */}
  <div className="grid md:grid-cols-2 gap-6 mt-6">
    <div className="group relative overflow-hidden p-6 bg-gradient-to-br from-primary-100 to-primary-500 rounded-2xl  transition-all duration-300 hover:shadow-lg">
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-125 hover:border-primary-700 transition-transform duration-500"></div>
      <div className="relative">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <MapPin className="h-6 w-6 text-primary-600" />
        </div>
        <h4 className="font-bold text-lg text-gray-900 mb-2">
          Nationwide Presence
        </h4>
        <p className="text-gray-700">
          Active engagement across rural and urban communities throughout
          Bangladesh with grassroots implementation.
        </p>
      </div>
    </div>

    <div className="group relative overflow-hidden p-6 bg-gradient-to-br from-primary-100 to-primary-500 rounded-2xl  transition-all duration-300 hover:shadow-lg">
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-125 transition-transform duration-500"></div>
      <div className="relative">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Users className="h-6 w-6 text-primary-600" />
        </div>
        <h4 className="font-bold text-lg text-gray-900 mb-2">
          Youth-Driven Movement
        </h4>
        <p className="text-gray-700">
          Powered by passionate youth and volunteers committed to social
          responsibility and sustainable development.
        </p>
      </div>
    </div>
  </div>
</div>
  </div>
</motion.section>


      {/* Core Work Areas */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Core <span className="text-primary-600 font-bold">Work Areas</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Leaf className="h-7 w-7 text-primary-600" />,
              title: "Climate Action & Environment",
              description: "Raising awareness, training youth, and driving community-based solutions to fight climate change and protect our planet.",
              color: "from-primary-50 to-primary-100 border-primary-100"
            },
            {
              icon: <HandHeart className="h-7 w-7 text-primary-600" />,
              title: "Women & Children Empowerment",
              description: "Ensuring rights, education, healthcare, and leadership opportunities for women and disadvantaged children.",
              color: "from-primary-50 to-primary-100 border-primary-100"
            },
            {
              icon: <GraduationCap className="h-7 w-7 text-primary-600" />,
              title: "Education & Skill Development",
              description: "Equipping young people with knowledge, leadership skills, and capacity-building programs through the OAB Learning Academy.",
              color: "from-primary-50 to-primary-100 border-primary-100"
            },
            {
              icon: <Scale className="h-7 w-7 text-primary-600" />,
              title: "Human Rights & Social Development",
              description: "Promoting equality, justice, and inclusive growth by uplifting marginalized communities.",
              color: "from-primary-50 to-primary-100 border-primary-100"
            },
            {
              icon: <HeartPulse className="h-7 w-7 text-primary-600" />,
              title: "Health & Well-being",
              description: "Saving lives and improving health through the OAB Blood Bank, health campaigns, and awareness initiatives.",
              color: "from-primary-50 to-primary-100 border-primary-100"
            },
            {
              icon: <Target className="h-7 w-7 text-primary-600" />,
              title: "Community Development",
              description: "Building sustainable communities through integrated development programs and grassroots initiatives.",
              color: "from-primary-50 to-primary-100 border-primary-100"
            }
          ].map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${area.color} p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 group`}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work in Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="animate-on-scroll"
      >
        <div className=" rounded-2xl p-4 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Work in Action</h2>
          <div className="space-y-5">
            {[
              "Running community-based initiatives that provide education, training, and opportunities to underprivileged groups.",
              "Organizing awareness campaigns, workshops, and advocacy programs for social justice and environmental protection.",
              "Focusing on youth leadership development to build skills, confidence, and vision for a sustainable society.",
              "Partnering with national and international organizations to amplify impact and bring global solutions to local challenges.",
              "Implementing projects such as health awareness drives, blood donation programs, skill development workshops, and climate action campaigns."
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 mt-1 transform group-hover:scale-125 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                </div>
                <p className="text-gray-700 flex-1">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>



      {/* Impact Stats */}
      <section className="py-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center"> Our <span className="text-primary-600 font-bold">Impact</span> in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
        { 
          icon: Users, 
          label: "Active Volunteers", 
          value: "10,000+", 
          description: "Nationwide engagement",
          gradient: "from-primary-500 to-primary-600",
          delay: 0.1
        },
        { 
          icon: TrendingUp, 
          label: "Successful Campaigns", 
          value: "250+", 
          description: "Strategic initiatives",
          gradient: "from-primary-500 to-primary-500",
          delay: 0.2
        },
        { 
          icon: Heart, 
          label: "Communities Impacted", 
          value: "100+", 
          description: "Positive transformation",
          gradient: "from-primary-500 to-primary-600",
          delay: 0.3
        },
        { 
          icon: MapPin, 
          label: "Regions Covered", 
          value: "8", 
          description: "National footprint",
          gradient: "from-primary-500 to-primary-500",
          delay: 0.4
        }
      ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary p-6 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`text-3xl text-primary-700 mb-3 flex justify-center`}>
                  <IconComponent className="h-10 w-10" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className={`text-gray-700 font-medium mb-1 `}>{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
                      {/* Animated Progress Line */}
              <div className="mt-6 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: stat.delay + 0.3 }}
                  className={`h-full bg-gradient-to-r ${stat.gradient}`}
                />
              </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Our Belief */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="animate-on-scroll  rounded-2xl p-8 md:p-10  hover:border hover:bg-primary-100 border-primary-500"
      >
        <div className="flex items-start gap-4 mb-6">
          <Heart className="h-8 w-8 text-primary-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Belief</h2>
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                At the core of OAB Foundation lies a simple but powerful belief:
                sustainable change begins with people. By empowering individuals and
                creating platforms for leadership and action, we aim to transform
                entire communities.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                We believe meaningful change begins at the local level. That's why we
                listen to communities, understand their needs, and co-create solutions
                with them—from rural villages to urban centers—rooted in trust,
                action, and hope.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}