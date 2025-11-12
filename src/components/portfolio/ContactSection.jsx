import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#010409] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(88, 166, 255, 0.4) 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c9d1d9] mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or
            collaborations in
            <span className="text-[#58a6ff]"> AI</span> and
            <span className="text-[#bc8cff]"> Data Science</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="p-8 bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] transition-all">
            <h3 className="text-2xl font-bold text-[#c9d1d9] mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:mkesavan@cougarnet.uh.edu"
                className="flex items-center gap-4 p-4 rounded-lg bg-[#1c2128] hover:bg-[#30363d] transition-all group border border-[#30363d] hover:border-[#58a6ff]"
              >
                <div className="p-3 rounded-lg bg-[#238636]">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#7d8590]">Email</div>
                  <div className="font-medium text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors">
                    mkesavan@cougarnet.uh.edu
                  </div>
                </div>
              </a>

              <a
                href="tel:3462041541"
                className="flex items-center gap-4 p-4 rounded-lg bg-[#1c2128] hover:bg-[#30363d] transition-all group border border-[#30363d] hover:border-[#58a6ff]"
              >
                <div className="p-3 rounded-lg bg-[#1f6feb]">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#7d8590]">Phone</div>
                  <div className="font-medium text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors">
                    (346) 204-1541
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1c2128] border border-[#30363d]">
                <div className="p-3 rounded-lg bg-[#8250df]">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#7d8590]">Location</div>
                  <div className="font-medium text-[#c9d1d9]">Houston, TX</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-[#30363d]">
              <p className="text-[#7d8590] mb-4">Connect on social media</p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/mugunthankesavan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#1c2128] hover:bg-[#1f6feb] transition-all hover:scale-110 border border-[#30363d] hover:border-[#58a6ff]"
                >
                  <Linkedin className="w-5 h-5 text-[#c9d1d9]" />
                </a>
                <a
                  href="https://github.com/mugunthank7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#1c2128] hover:bg-[#30363d] transition-all hover:scale-110 border border-[#30363d] hover:border-[#58a6ff]"
                >
                  <Github className="w-5 h-5 text-[#c9d1d9]" />
                </a>
              </div>
            </div>
          </Card>

          {/* Quick Message Card */}
          <Card className="p-8 bg-[#161b22] border border-[#30363d] hover:border-[#bc8cff] transition-all">
            <h3 className="text-2xl font-bold text-[#c9d1d9] mb-6">
              Quick Message
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#7d8590] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#7d8590] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#7d8590] mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-lg bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent resize-none transition-all"
                />
              </div>

              <Button
                className="w-full bg-[#238636] text-white hover:bg-[#2ea043] font-medium py-6 text-lg transition-all hover:scale-[1.02]"
                onClick={() => {
                  window.location.href = "mailto:mkesavan@cougarnet.uh.edu";
                }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-[#8b949e] text-lg">
            Currently pursuing{" "}
            <span className="font-semibold text-[#58a6ff]">
              MS in Engineering Data Science
            </span>{" "}
            at
            <span className="font-semibold text-[#bc8cff]">
              {" "}
              University of Houston
            </span>
          </p>
          <p className="text-[#7d8590] mt-2">Expected Graduation: May 2027</p>
        </div>
      </div>
    </section>
  );
}
