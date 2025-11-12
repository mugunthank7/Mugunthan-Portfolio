import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 px-6 bg-[#010409]"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`flex items-center gap-3 mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="h-1 w-12 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#c9d1d9]">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#58a6ff] via-[#bc8cff] to-[#d2a8ff]" />

          {/* Experience Item */}
          <div
            className={`relative pl-8 md:pl-24 pb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="absolute left-[-8px] md:left-[39px] top-2 w-5 h-5 rounded-full bg-[#58a6ff] border-4 border-[#0d1117] shadow-lg shadow-[#58a6ff]/50 animate-pulse" />

            <Card className="p-6 md:p-8 bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10 transition-all hover:scale-[1.02] group">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#c9d1d9] mb-2 group-hover:text-[#58a6ff] transition-colors">
                    Research Intern
                  </h3>
                  <div className="flex items-center gap-2 text-[#58a6ff] font-medium mb-2">
                    <Briefcase className="w-4 h-4" />
                    Flame University
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#7d8590] text-sm px-3 py-1.5 bg-[#1c2128] rounded-full border border-[#30363d]">
                  <Calendar className="w-4 h-4" />
                  Jan 2025 – Jul 2025
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Optimized predictive ML models on 30K+ sequences using transformer-based embeddings and SVM, achieving 98.3% accuracy and 98% F1-score",
                  "Developed Python/Pandas/NumPy ingestion and preprocessing scripts to automate dataset generation, reducing manual effort by 50%",
                  "Explored distributed ML workflows using Hadoop and Spark for scalable feature extraction and model training",
                  "Applied unsupervised clustering and feature selection to identify key attributes, improving dataset quality for downstream tasks",
                  "Conducted 10-fold cross-validation with Grid Search for systematic model tuning and experiment reproducibility",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#58a6ff] flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Leadership Section */}
          <div
            className={`relative pl-8 md:pl-24 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="absolute left-[-8px] md:left-[39px] top-2 w-5 h-5 rounded-full bg-[#bc8cff] border-4 border-[#0d1117] shadow-lg shadow-[#bc8cff]/50" />

            <Card className="p-6 md:p-8 bg-[#161b22] border border-[#30363d] hover:border-[#bc8cff] hover:shadow-lg hover:shadow-[#bc8cff]/10 transition-all hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#bc8cff]" />
                <h3 className="text-xl md:text-2xl font-bold text-[#c9d1d9] group-hover:text-[#bc8cff] transition-colors">
                  Leadership & Activities
                </h3>
              </div>

              <ul className="space-y-3">
                {[
                  "Led workshops on Python, Machine Learning, and Model Optimization for 70+ students",
                  "Mentored 10+ juniors on end-to-end AI and Data Science projects",
                  "Ranked in the Top 20% on Kaggle ML competitions",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#bc8cff] flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
