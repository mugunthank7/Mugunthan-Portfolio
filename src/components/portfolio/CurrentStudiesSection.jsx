import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Brain, TrendingUp, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const currentCourses = [
  {
    title: "Data Science",
    icon: BarChart3,
    color: "from-[#1f6feb] to-[#58a6ff]",
    description:
      "Advanced methodologies for extracting insights from complex datasets",
  },
  {
    title: "Machine Learning",
    icon: Brain,
    color: "from-[#8250df] to-[#bc8cff]",
    description:
      "Deep dive into supervised, unsupervised, and reinforcement learning algorithms",
  },
  {
    title: "Probability & Statistics",
    icon: TrendingUp,
    color: "from-[#3fb950] to-[#56d364]",
    description:
      "Statistical foundations for data analysis and predictive modeling",
  },
];

export default function CurrentStudiesSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".course-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20 px-6 bg-[#010409]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-1 w-12 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#c9d1d9]">
            Current Studies at University of Houston
          </h2>
        </div>

        <div className="mb-8">
          <p className="text-lg text-[#8b949e] leading-relaxed">
            Currently pursuing a{" "}
            <span className="font-semibold text-[#58a6ff]">
              Master of Science in Engineering Data Science
            </span>
            , focusing on advanced topics in machine learning, big data
            analytics, and statistical methods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {currentCourses.map((course, idx) => {
            const Icon = course.icon;
            const isVisible = visibleCards.includes(idx);
            return (
              <Card
                key={idx}
                data-index={idx}
                className={`course-card group relative overflow-hidden bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10 transition-all duration-500 hover:scale-[1.02] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative p-6">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${course.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#c9d1d9] mb-3 group-hover:text-[#58a6ff] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-[#7d8590] leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
