import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Code2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutWithPhoto() {
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
      id="about"
      className="py-20 px-6 bg-[#0d1117] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(88, 166, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-3 mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="h-1 w-12 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#c9d1d9]">
            About Me
          </h2>
          <Sparkles className="w-6 h-6 text-[#58a6ff] animate-pulse" />
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Photo */}
          <div
            className={`md:col-span-2 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff] to-[#bc8cff] rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="absolute inset-0 bg-[#161b22] rounded-2xl border-2 border-[#30363d] group-hover:border-[#58a6ff] transition-colors" />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6913dff79d024b122d3de031/64917c5d0_IMG_6601.jpg"
                alt="Mugunthan Kesavan"
                className="relative rounded-2xl w-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`md:col-span-3 space-y-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-lg text-[#8b949e] leading-relaxed">
              I'm a Data Science graduate student at the{" "}
              <span className="font-semibold text-[#58a6ff]">
                University of Houston
              </span>
              , with a strong foundation in AI, Machine Learning, and Big Data
              Analytics.
            </p>
            <p className="text-lg text-[#8b949e] leading-relaxed">
              My expertise spans developing end-to-end AI systems using Python,
              Scala, Hadoop, and Spark. I'm passionate about applying AI-driven
              methods to solve real-world challenges through scalable,
              research-based approaches.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge className="bg-[#1f6feb] text-white hover:bg-[#388bfd] px-4 py-2 text-sm border-0">
                <GraduationCap className="w-4 h-4 mr-2" />
                MS Data Science
              </Badge>
              <Badge className="bg-[#8250df] text-white hover:bg-[#a371f7] px-4 py-2 text-sm border-0">
                <Code2 className="w-4 h-4 mr-2" />
                AI Engineering
              </Badge>
            </div>

            {/* Education Cards */}
            <div className="grid gap-4 mt-8">
              <Card className="p-6 bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] transition-all hover:scale-[1.02] group">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-gradient-to-br from-[#1f6feb] to-[#58a6ff] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors">
                      Master of Science
                    </h4>
                    <p className="text-sm text-[#8b949e]">
                      Engineering Data Science
                    </p>
                    <p className="text-sm text-[#7d8590]">
                      University of Houston
                    </p>
                    <p className="text-xs text-[#6e7681] mt-1">
                      Expected: May 2027
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-[#161b22] border border-[#30363d] hover:border-[#bc8cff] transition-all hover:scale-[1.02] group">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-gradient-to-br from-[#8250df] to-[#bc8cff] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#c9d1d9] group-hover:text-[#bc8cff] transition-colors">
                      Bachelor of Technology
                    </h4>
                    <p className="text-sm text-[#8b949e]">
                      Artificial Intelligence Engineering
                    </p>
                    <p className="text-sm text-[#7d8590]">
                      Amrita Vishwa Vidyapeetham, India
                    </p>
                    <p className="text-xs text-[#6e7681] mt-1">
                      GPA: 3.7/4.0 • Graduated: June 2025
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
