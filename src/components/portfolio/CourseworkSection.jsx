import React, { useState } from "react";
import { BookOpen, Brain, Database, Network, Image, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const coursework = {
  "AI & Machine Learning": {
    icon: Brain,
    color: "from-[#1f6feb] to-[#58a6ff]",
    courses: [
      "Python for Machine Learning",
      "Reinforcement Learning",
      "Deep Learning for Signal & Image Processing",
      "AI in Natural Language Processing",
      "AI in Speech Processing",
      "Applied Cryptography",
    ],
  },
  "Data & Algorithms": {
    icon: Database,
    color: "from-[#8250df] to-[#bc8cff]",
    courses: [
      "Data Structures & Algorithms 1",
      "Data Structures & Algorithms 2",
      "Design and Analysis of Algorithms",
      "Big Data Analytics",
      "Big Data and Database Management",
      "Formal Language and Automata",
    ],
  },
  "Systems & Networks": {
    icon: Network,
    color: "from-[#3fb950] to-[#56d364]",
    courses: [
      "Operating Systems",
      "Introduction to Computer Networks",
      "Advanced Computer Networks",
      "Introduction to Cloud Computing",
      "Robotic Operating Systems & Robot Simulation",
    ],
  },
  "Signal Processing": {
    icon: Image,
    color: "from-[#f78166] to-[#ff8a6c]",
    courses: [
      "Signal & Image Processing",
      "Deep Learning for Signal & Image Processing",
      "Introduction to Robotics",
      "Principles of Measurements & Sensors",
    ],
  },
  "Core Computing": {
    icon: Cpu,
    color: "from-[#a371f7] to-[#d2a8ff]",
    courses: [
      "Elements of Computing Systems 1",
      "Elements of Computing Systems 2",
      "Object-Oriented Programming",
      "Introduction to Modern Compiler Design",
      "Introduction to Electronics",
      "Introduction to Electrical Engineering",
    ],
  },
  Mathematics: {
    icon: BookOpen,
    color: "from-[#da3633] to-[#f85149]",
    courses: [
      "Mathematics for Intelligent Systems 1-6",
      "Computational Engineering Mechanics 1-2",
      "Intelligence of Biological Systems 1-4",
    ],
  },
};

export default function CourseworkSection() {
  const [activeTab, setActiveTab] = useState("AI & Machine Learning");

  return (
    <section className="py-20 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-1 w-12 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#c9d1d9]">
            Undergraduate Coursework
          </h2>
        </div>

        <p className="text-lg text-[#8b949e] mb-8">
          Comprehensive AI Engineering curriculum from{" "}
          <span className="font-semibold text-[#58a6ff]">
            Amrita Vishwa Vidyapeetham
          </span>
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 bg-[#161b22] border border-[#30363d]">
            {Object.keys(coursework).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-xs md:text-sm data-[state=active]:bg-[#1f6feb] data-[state=active]:text-white text-[#7d8590]"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(coursework).map(([category, data]) => {
            const Icon = data.icon;
            return (
              <TabsContent key={category} value={category}>
                <Card className="p-6 md:p-8 bg-[#161b22] border border-[#30363d]">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${data.color}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#c9d1d9]">
                      {category}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    {data.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg bg-[#0d1117] hover:bg-[#1c2128] transition-colors border border-[#30363d] hover:border-[#58a6ff] group"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#58a6ff] flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Academic Achievement */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { label: "Cumulative GPA", value: "3.7/4.0" },
            { label: "Year 3 GPA", value: "3.628" },
            { label: "Total Credits", value: "133" },
            { label: "A+ Grades", value: "12+" },
          ].map((stat, idx) => (
            <Card
              key={idx}
              className="p-6 text-center bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10 transition-all hover:scale-105 group"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-[#7d8590] group-hover:text-[#c9d1d9] transition-colors">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
