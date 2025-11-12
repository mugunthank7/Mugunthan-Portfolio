import React, { useEffect, useRef, useState } from "react";
import {
  Rocket,
  Database,
  Brain,
  Globe,
  TrendingUp,
  Video,
  Code,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Enhanced Segmented Neural Style Transfer for Video",
    description:
      "Real-time video stylization using segmentation-based neural style transfer with temporal coherence",
    icon: Video,
    color: "from-[#da3633] to-[#f85149]",
    highlights: [
      "Applies different artistic styles to distinct regions using semantic segmentation",
      "Incorporates temporal loss function for frame coherence and smooth transitions",
      "Real-time performance tracking with TensorBoard for optimization",
    ],
    tags: [
      "PyTorch",
      "Computer Vision",
      "Neural Style Transfer",
      "Video Processing",
    ],
    size: "large",
    github:
      "https://github.com/mugunthank7/Enhanced-Segmented-Neural-Style-Transfer-for-Real-Time-Video-Stylization",
    hasDemo: true,
    demoGif:
      "https://raw.githubusercontent.com/mugunthank7/Enhanced-Segmented-Neural-Style-Transfer-for-Real-Time-Video-Stylization/main/results/video.gif",
  },
  {
    title: "Sales Data Analytics with Hadoop and Spark",
    description:
      "Designed and implemented a distributed data processing pipeline using Hadoop MapReduce and Apache Spark to analyze 15M+ transaction records",
    icon: Database,
    color: "from-[#1f6feb] to-[#58a6ff]",
    highlights: [
      "Executed large-scale data ingestion, transformation, and feature extraction workflows for ML readiness",
      "Applied Spark MLlib for classification and clustering, achieving a 40% reduction in computation time",
    ],
    tags: ["Hadoop", "Spark", "MapReduce", "Big Data"],
    size: "large",
  },
  {
    title: "Machine Learning for Protein Analysis",
    description:
      "Processed 30K+ protein records using ProtBERT/ESM2 embeddings and clustering for structural pattern discovery",
    icon: Brain,
    color: "from-[#8250df] to-[#bc8cff]",
    highlights: [
      "Benchmarked Random Forest, XGBoost, SVM, achieving 10% higher accuracy vs. baselines",
    ],
    tags: ["Deep Learning", "ProtBERT", "XGBoost", "SVM"],
    size: "medium",
  },
  {
    title: "Protein Methyl Transfer Identification",
    description:
      "Implementing hybrid pipelines combining embedding-based and physicochemical features",
    icon: TrendingUp,
    color: "from-[#3fb950] to-[#56d364]",
    highlights: [
      "Evaluating SVM, Random Forest, and XGBoost under cross-validation to assess predictive robustness",
    ],
    tags: ["ML Pipeline", "Feature Engineering", "Cross-validation"],
    size: "medium",
  },
  {
    title: "Natural Language Processing (Multilingual)",
    description:
      "Applied IndicBERT, LABSE, and MURIL embeddings for multilingual humor detection in social media data",
    icon: Globe,
    color: "from-[#f78166] to-[#ff8a6c]",
    highlights: [
      'Published work on "Humor Detection in Telugu Social Media Text" in Springer',
    ],
    tags: ["NLP", "Transformers", "Multilingual", "Social Media"],
    size: "large",
  },
  {
    title: "Multilingual Transformer Evaluation for Tamil Sentiment",
    description:
      "Created Tamil sentiment corpus via scraping, cleaning, and manual annotation",
    icon: Brain,
    color: "from-[#a371f7] to-[#d2a8ff]",
    highlights: [
      "Benchmarked multilingual embeddings + ML models for cross-lingual sentiment classification",
    ],
    tags: ["Sentiment Analysis", "Tamil NLP", "Data Collection"],
    size: "medium",
  },
];

export default function ProjectsSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-6 bg-[#0d1117] relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(88, 166, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88, 166, 255, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-1 w-12 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#c9d1d9]">
            Featured Projects
          </h2>
          <Code className="w-6 h-6 text-[#58a6ff] animate-pulse" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isVisible = visibleCards.includes(idx);
            return (
              <Card
                key={idx}
                data-index={idx}
                className={`project-card group relative overflow-hidden bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] transition-all duration-500 hover:scale-[1.02] ${
                  project.size === "large" ? "md:col-span-2" : ""
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Gradient Glow on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                />

                <div className="relative p-6 md:p-8">
                  {/* Demo GIF if available */}
                  {project.hasDemo && project.demoGif && (
                    <div className="mb-6 rounded-xl overflow-hidden border-2 border-[#30363d] group-hover:border-[#58a6ff] transition-colors">
                      <img
                        src={project.demoGif}
                        alt={`${project.title} demo`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#c9d1d9] mb-3 group-hover:text-[#58a6ff] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#8b949e] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#7d8590]"
                      >
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-[#58a6ff] flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-[#1c2128] text-[#7d8590] hover:bg-[#30363d] hover:text-[#c9d1d9] transition-colors border border-[#30363d]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#58a6ff] hover:text-[#79c0ff] font-medium group/link"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
