import React, { useEffect, useRef, useState } from "react";
import { Code2, Database, Wrench, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-[#1f6feb] to-[#58a6ff]",
    skills: ["Python", "Scala", "R", "C++", "Java", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Wrench,
    color: "from-[#8250df] to-[#bc8cff]",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Hugging Face",
      "Spark MLlib",
    ],
  },
  {
    title: "Big Data & Systems",
    icon: Database,
    color: "from-[#3fb950] to-[#56d364]",
    skills: [
      "Hadoop",
      "Apache Spark",
      "MapReduce",
      "NumPy",
      "Pandas",
      "Jupyter",
      "Git",
      "Linux",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Zap,
    color: "from-[#f78166] to-[#ff8a6c]",
    skills: [
      "Power BI",
      "Excel",
      "Databricks",
      "Docker",
      "Relational Databases",
    ],
  },
];

const coreCompetencies = [
  "Machine Learning",
  "Deep Learning Models",
  "AI System Design",
  "Data Science",
  "Clustering",
  "NLP",
  "Computer Vision",
  "Model Evaluation",
  "Data Ingestion Pipelines",
  "Distributed Computing",
  "Problem Solving",
  "Communication",
];

export default function SkillsSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".skill-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-1 w-12 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#c9d1d9]">
            Technical Skills
          </h2>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const isVisible = visibleCards.includes(idx);
            return (
              <Card
                key={idx}
                data-index={idx}
                className={`skill-card p-6 md:p-8 bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10 transition-all duration-500 hover:scale-[1.02] group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="px-3 py-1.5 bg-[#1c2128] text-[#7d8590] hover:bg-[#30363d] hover:text-[#c9d1d9] transition-colors border border-[#30363d]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Core Competencies */}
        <Card className="p-6 md:p-8 bg-[#161b22] border border-[#30363d] hover:border-[#bc8cff] hover:shadow-lg hover:shadow-[#bc8cff]/10 transition-all">
          <h3 className="text-2xl font-bold text-[#c9d1d9] mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-[#58a6ff] to-[#bc8cff] rounded-full" />
            Core Competencies
          </h3>

          <div className="flex flex-wrap gap-3">
            {coreCompetencies.map((competency, idx) => (
              <Badge
                key={competency}
                className="px-4 py-2 bg-[#1c2128] text-[#7d8590] hover:bg-gradient-to-r hover:from-[#1f6feb] hover:to-[#8250df] hover:text-white transition-all cursor-default border border-[#30363d] hover:border-transparent text-sm hover:scale-105"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {competency}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Achievement Highlight */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              metric: "98.3%",
              label: "ML Model Accuracy",
              subtext: "Transformer-based SVM",
            },
            {
              metric: "50%",
              label: "Efficiency Gain",
              subtext: "Automated Data Processing",
            },
            {
              metric: "15M+",
              label: "Records Processed",
              subtext: "Big Data Analytics",
            },
          ].map((stat, idx) => (
            <Card
              key={idx}
              className="p-6 text-center bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10 transition-all hover:scale-105 group"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.metric}
              </div>
              <div className="font-semibold text-[#c9d1d9] mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-[#7d8590]">{stat.subtext}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
