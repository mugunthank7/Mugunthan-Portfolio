import React, { useEffect, useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Zap,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ scrollToSection }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1117]"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(56, 139, 253, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 139, 253, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
      </div>

      {/* Dynamic Gradient Orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl transition-all duration-1000"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 139, 253, 0.4) 0%, transparent 70%)",
          left: `${mousePosition.x * 0.5}%`,
          top: `${mousePosition.y * 0.5}%`,
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl transition-all duration-1000"
        style={{
          background:
            "radial-gradient(circle, rgba(163, 113, 247, 0.4) 0%, transparent 70%)",
          right: `${(100 - mousePosition.x) * 0.5}%`,
          bottom: `${(100 - mousePosition.y) * 0.5}%`,
        }}
      />

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#388bfd] opacity-10 font-mono text-sm animate-float"
            style={{
              left: `${(i * 15) % 90}%`,
              top: `${(i * 20) % 80}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            {
              [
                "{ }",
                "[ ]",
                "< />",
                "fn()",
                "import",
                "const",
                "return",
                "class",
              ][i]
            }
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#161b22] backdrop-blur-sm rounded-full border border-[#30363d] hover:border-[#388bfd] transition-colors">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-[#c9d1d9]">
            Open to Opportunities
          </span>
        </div>

        <div className="mb-4 inline-flex items-center gap-2 text-[#7d8590]">
          <Terminal className="w-4 h-4" />
          <span className="font-mono text-sm">~/portfolio</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#58a6ff] via-[#bc8cff] to-[#d2a8ff] bg-clip-text text-transparent">
            Mugunthan Kesavan
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-[#7d8590] font-light">
          <span className="text-[#58a6ff]">Data Science Graduate Student</span>{" "}
          & <span className="text-[#d2a8ff]">AI Engineer</span>
        </p>

        <p className="text-lg md:text-xl mb-8 text-[#8b949e] max-w-3xl mx-auto leading-relaxed">
          Transforming complex data into intelligent solutions through
          <span className="text-[#58a6ff]"> Machine Learning</span>,
          <span className="text-[#bc8cff]"> Deep Learning</span>, and
          <span className="text-[#d2a8ff]"> Big Data Analytics</span>
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="mailto:mkesavan@cougarnet.uh.edu"
            className="flex items-center gap-2 px-6 py-3 bg-[#238636] text-white rounded-lg font-medium hover:bg-[#2ea043] transition-all hover:scale-105 shadow-lg shadow-[#238636]/20"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/mugunthankesavan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#161b22] text-[#c9d1d9] rounded-lg font-medium hover:bg-[#1f6feb] hover:text-white transition-all hover:scale-105 border border-[#30363d]"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/mugunthank7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#161b22] text-[#c9d1d9] rounded-lg font-medium hover:bg-[#30363d] transition-all hover:scale-105 border border-[#30363d]"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Research Papers", value: "3+" },
            { label: "Projects", value: "6+" },
            { label: "Accuracy Rate", value: "98%" },
            { label: "Kaggle Rank", value: "Top 20%" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-4 bg-[#161b22] rounded-xl border border-[#30363d] hover:border-[#58a6ff] transition-all hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-[#7d8590] group-hover:text-[#c9d1d9] transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#58a6ff] animate-bounce cursor-pointer hover:text-[#79c0ff] transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}
