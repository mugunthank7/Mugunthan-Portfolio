import React, { useEffect, useRef, useState } from "react";
import { Award, Trophy, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Data Science with Python",
    issuer: "IBM Coursera",
    date: "Jul 2024",
    skills: ["Python", "Data Analysis", "Machine Learning"],
  },
  {
    title: "Statistics for Data Science",
    issuer: "IBM Coursera",
    date: "Jul 2024",
    skills: ["Statistics", "Probability", "Data Analysis"],
  },
  {
    title: "Google Data Analytics",
    issuer: "Google Coursera",
    date: "Sep 2023",
    skills: ["Data Analytics", "SQL", "Tableau"],
  },
  {
    title: "Python Advanced Course",
    issuer: "Udemy",
    date: "Dec 2023",
    skills: ["Python", "OOP", "Advanced Programming"],
  },
];

const achievements = [
  "Top 20% rank in Kaggle Machine Learning competitions",
  "Led 5+ workshops on ML and AI for university students",
  "3 Published Research Papers in AI/ML domain",
  "Mentored 10+ students in Data Science projects",
];

export default function CertificationsSection() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = sectionRef.current?.querySelectorAll(".cert-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-20 px-6 bg-[#010409]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-1 w-12 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#c9d1d9]">
            Certifications & Achievements
          </h2>
          <Trophy className="w-6 h-6 text-[#58a6ff] animate-pulse" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, idx) => {
            const isVisible = visibleCards.includes(idx);
            return (
              <Card
                key={idx}
                data-index={idx}
                className={`cert-card p-6 bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10 transition-all duration-500 hover:scale-[1.02] group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-lg bg-gradient-to-br from-[#1f6feb] to-[#58a6ff] group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#c9d1d9] mb-1 group-hover:text-[#58a6ff] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-[#7d8590] mb-2">{cert.issuer}</p>
                    <p className="text-xs text-[#6e7681] mb-3">{cert.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-[#1c2128] text-[#7d8590] hover:bg-[#30363d] hover:text-[#c9d1d9] transition-colors text-xs border border-[#30363d]"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Recognition */}
        <Card className="p-6 md:p-8 bg-[#161b22] border border-[#30363d] hover:border-[#bc8cff] hover:shadow-lg hover:shadow-[#bc8cff]/10 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <Medal className="w-6 h-6 text-[#bc8cff]" />
            <h3 className="text-2xl font-bold text-[#c9d1d9]">
              Additional Recognition
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-[#0d1117] border border-[#30363d] hover:border-[#bc8cff] transition-all group"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-[#bc8cff] flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-[#8b949e] leading-relaxed group-hover:text-[#c9d1d9] transition-colors">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
