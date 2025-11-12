import React, { useEffect, useRef, useState } from "react";
import { BookOpen, ExternalLink, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title:
      "Humor Detection in Telugu Social Media Text Using Cost-Sensitive Learning and Indian Language Embeddings",
    authors: "Rupa, N. B., Hima, Y., Mugunthan, K., & Premjith, B.",
    venue: "Proceedings of ICRTC 2024, Springer LNNS 885",
    year: "2025",
    status: "Published",
    link: "#",
  },
  {
    title:
      "Pretrained Models for Zero-Shot Classification and Supervised Learning: A Simulation Study for Tamil Tweet Sentiment Analysis",
    authors: "Mugunthan, K., Jain, R., & Jayaraman, V. K.",
    venue: "6th International Conference on Data Science and Applications",
    year: "2025",
    status: "Accepted (Forthcoming)",
  },
  {
    title:
      "Machine Learning Framework for the Prediction of Pore-Forming Proteins",
    authors: "Mugunthan, K., et al.",
    venue: "Springer",
    year: "2025",
    status: "Accepted (In Press)",
  },
];

export default function PublicationsSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".publication-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="publications"
      className="py-20 px-6 bg-[#010409]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-1 w-12 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#c9d1d9]">
            Publications
          </h2>
          <BookOpen className="w-6 h-6 text-[#58a6ff] animate-pulse" />
        </div>

        <div className="space-y-6">
          {publications.map((pub, idx) => {
            const isVisible = visibleCards.includes(idx);
            return (
              <Card
                key={idx}
                data-index={idx}
                className={`publication-card p-6 md:p-8 bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10 transition-all duration-500 hover:scale-[1.02] group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-lg bg-gradient-to-br from-[#1f6feb] to-[#58a6ff] group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-bold text-[#c9d1d9] leading-snug flex-1 group-hover:text-[#58a6ff] transition-colors">
                        {pub.title}
                      </h3>
                      {pub.status === "Published" ? (
                        <Badge className="bg-[#238636] text-white border-0 hover:bg-[#2ea043]">
                          <Award className="w-3 h-3 mr-1" />
                          Published
                        </Badge>
                      ) : (
                        <Badge className="bg-[#9e6a03] text-white border-0">
                          {pub.status}
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-[#7d8590] mb-2">{pub.authors}</p>

                    <p className="text-sm text-[#6e7681] mb-3">
                      <span className="font-medium text-[#8b949e]">
                        {pub.venue}
                      </span>{" "}
                      • {pub.year}
                    </p>

                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[#58a6ff] hover:text-[#79c0ff] font-medium group/link"
                      >
                        View Publication
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
