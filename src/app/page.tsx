"use client";

import { useState, useEffect } from "react";
import { FiMail, FiMapPin, FiLinkedin, FiDownload } from "react-icons/fi";

export default function Home() {
  const [activeSection, setActiveSection] = useState("summary");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["summary", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(`section-${section}`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-accent dark:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-primary/20 via-light-secondary/20 to-light-accent/20 dark:from-dark-primary/20 dark:via-dark-secondary/20 dark:to-dark-accent/20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-light-primary/20 dark:bg-dark-accent/20 border border-light-secondary/30 dark:border-dark-accent/30 rounded-full text-sm font-medium">
            Open to work
          </div>
          <div className="mb-4 text-sm font-medium tracking-widest text-light-secondary dark:text-dark-accent uppercase">
            Senior Software Engineer
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent uppercase">
            Ikhsanuddin
          </h1>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <a href="mailto:mail.ikhsanuddin@gmail.com" className="flex items-center gap-2 hover:text-light-secondary dark:hover:text-dark-accent transition-colors">
              <FiMail /> mail.ikhsanuddin@gmail.com
            </a>
            <a href="https://linkedin.com/in/ikhsanuddin" className="flex items-center gap-2 hover:text-light-secondary dark:hover:text-dark-accent transition-colors">
              <FiLinkedin /> linkedin.com/in/ikhsanuddin
            </a>
            
            <span className="flex items-center gap-2">
              <FiMapPin /> Remote, Worldwide
            </span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-light-accent/30 dark:border-white/30 rounded-full p-1">
            <div className="w-1.5 h-2 bg-light-accent/50 dark:bg-white/50 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="section-summary" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">Summary</h2>
              <div className="space-y-6 text-light-accent dark:text-gray-300 leading-relaxed">
                <p>
                  I am an experienced and detail-oriented Senior Software Engineer dedicated to
                  creating robust and scalable digital solutions. Over the years, I have honed
                  my skills in full-stack development, cloud architecture, and team leadership,
                  always striving to balance technical excellence with business objectives.
                </p>
                <p>
                  My passion lies in understanding complex problems and crafting elegant solutions
                  that are both performant and maintainable. I have collaborated with diverse teams,
                  including designers, product managers, and stakeholders, to bring innovative
                  concepts to life.
                </p>
                <p>
                  Driven by curiosity and a commitment to continuous learning, I regularly explore
                  new technologies and methodologies to enhance my craft. Whether working on
                  microservices, web applications, or mobile interfaces, I am committed to
                  delivering high-quality results that make a meaningful impact.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/20 dark:to-dark-secondary/20 backdrop-blur-sm border border-light-accent/10 dark:border-white/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="section-experience" className="min-h-screen py-20 px-6 bg-light-bg dark:bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">Experience</h2>
          
          <div className="space-y-16">
            {/* Experience 1 - Undercurrent Capital */}
            <div className="relative pl-8 border-l-2 border-light-secondary/30 dark:border-dark-secondary/30">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-light-secondary dark:bg-dark-accent rounded-full"></div>
              <div className="mb-2 text-sm text-light-secondary dark:text-dark-accent font-medium">September 2023 - December 2025</div>
              <h3 className="text-2xl font-bold mb-2">Full-stack Dev</h3>
              <div className="mb-6 text-light-accent/70 dark:text-gray-400">Undercurrent Capital Pte Ltd, Singapore (Remote)</div>
              <ul className="space-y-2 text-light-accent dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Developed and integrated applications using Telegram API and Web3 Wallet Service.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Engineered solutions for a Decentralized Exchange utilizing Typescript and Go.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Collaborated on game development projects with Phaser Js, enhancing user engagement.</span>
                </li>
              </ul>
            </div>

            {/* Experience 2 - Twospaces.id */}
            <div className="relative pl-8 border-l-2 border-light-secondary/30 dark:border-dark-secondary/30">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-light-secondary dark:bg-dark-accent rounded-full"></div>
              <div className="mb-2 text-sm text-light-secondary dark:text-dark-accent font-medium">April 2022 - April 2023</div>
              <h3 className="text-2xl font-bold mb-2">Technical Lead</h3>
              <div className="mb-6 text-light-accent/70 dark:text-gray-400">Twospaces.id, Tangerang, Indonesia</div>
              <ul className="space-y-2 text-light-accent dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Project Planning, Infrastructure Setup, Manage Software Development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Mentoring & Coaching Junior Co-Workers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Deployment & Monitoring</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Software Development</span>
                </li>
              </ul>
            </div>

            {/* Experience 3 - Tekno Kreasi Nyata (Technical Lead) */}
            <div className="relative pl-8 border-l-2 border-light-secondary/30 dark:border-dark-secondary/30">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-light-secondary dark:bg-dark-accent rounded-full"></div>
              <div className="mb-2 text-sm text-light-secondary dark:text-dark-accent font-medium">March 2020 - April 2022</div>
              <h3 className="text-2xl font-bold mb-2">Technical Lead</h3>
              <div className="mb-6 text-light-accent/70 dark:text-gray-400">Tekno Kreasi Nyata, Tangerang, Indonesia</div>
              <ul className="space-y-2 text-light-accent dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Creating Collaborative environment that promote teamwork and collaboration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Giving advice & solution in technical issue</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Guide newcomer with current state infrastructure & development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Analyze software and giving solution for improvement</span>
                </li>
              </ul>
            </div>

            {/* Experience 4 - Tekno Kreasi Nyata (Senior Frontend Dev) */}
            <div className="relative pl-8 border-l-2 border-light-secondary/30 dark:border-dark-secondary/30">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-light-secondary dark:bg-dark-accent rounded-full"></div>
              <div className="mb-2 text-sm text-light-secondary dark:text-dark-accent font-medium">November 2018 - February 2020</div>
              <h3 className="text-2xl font-bold mb-2">Senior Frontend Dev</h3>
              <div className="mb-6 text-light-accent/70 dark:text-gray-400">Tekno Kreasi Nyata, Tangerang, Indonesia</div>
              <ul className="space-y-2 text-light-accent dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Manage Frontend team to deliver lightweight & optimized software solution</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Creating Frontend Framework that meet the business needs</span>
                </li>
              </ul>
            </div>

            {/* Experience 5 - Yamisok */}
            <div className="relative pl-8 border-l-2 border-light-secondary/30 dark:border-dark-secondary/30">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-light-secondary dark:bg-dark-accent rounded-full"></div>
              <div className="mb-2 text-sm text-light-secondary dark:text-dark-accent font-medium">June 2017 - October 2018</div>
              <h3 className="text-2xl font-bold mb-2">Frontend Dev</h3>
              <div className="mb-6 text-light-accent/70 dark:text-gray-400">Yamisok, Tangerang, Indonesia</div>
              <ul className="space-y-2 text-light-accent dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Transforming User Interface Design into Yamisok's Website Interface.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-light-secondary dark:text-dark-accent mt-1">→</span>
                  <span>Using Firebase, Vue.js and Laravel.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="section-skills" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">Skills & Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-light-secondary dark:text-dark-accent">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React.js / Next.js",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "AWS / Cloud",
                  "Docker / Kubernetes",
                  "GraphQL / REST API",
                  "MongoDB / PostgreSQL",
                  "CI/CD",
                  "Microservices",
                  "System Design",
                  "Performance Optimization"
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-4 bg-light-accent/5 dark:bg-white/5 border border-light-accent/10 dark:border-white/10 rounded-lg hover:bg-light-accent/10 dark:hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-light-primary dark:text-dark-secondary">Tools & Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Git / GitHub",
                  "VS Code",
                  "Figma",
                  "Jira",
                  "Postman",
                  "Jenkins",
                  "Terraform",
                  "Redis"
                ].map((tool) => (
                  <div
                    key={tool}
                    className="p-4 bg-light-accent/5 dark:bg-white/5 border border-light-accent/10 dark:border-white/10 rounded-lg hover:bg-light-accent/10 dark:hover:bg-white/10 transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4 text-light-accent dark:text-dark-accent">Languages</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>English</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-8 h-2 bg-light-accent dark:bg-dark-accent rounded"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Indonesian</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-8 h-2 bg-light-accent dark:bg-dark-accent rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-light-primary/10 to-light-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary/10 border border-light-accent/10 dark:border-white/10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Education & Certificates</h3>
            <div className="space-y-4 text-light-accent dark:text-gray-300">
              <div>
                <div className="font-bold text-light-accent dark:text-white">Bachelor of Psychology</div>
                <div className="text-sm text-light-accent/70 dark:text-gray-400">Mercubuana University — 2019</div>
              </div>
              <div>
                <div className="font-bold text-light-accent dark:text-white">AWS Certified Solutions Architect</div>
                <div className="text-sm text-light-accent/70 dark:text-gray-400">Amazon Web Services — 2022</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="section-contact" className="min-h-screen flex items-center py-20 px-6 bg-light-bg dark:bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-5xl font-bold mb-12">Let&apos;s Connect</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:mail.ikhsanuddin@gmail.com"
              className="p-6 bg-light-accent/5 dark:bg-white/5 border border-light-accent/10 dark:border-white/10 rounded-2xl hover:bg-light-accent/10 dark:hover:bg-white/10 transition-all hover:scale-105"
            >
              <FiMail className="text-3xl mb-4 mx-auto text-light-secondary dark:text-dark-accent" />
              <div className="font-bold mb-2">Email</div>
              <div className="text-light-accent/70 dark:text-gray-400 text-sm">mail.ikhsanuddin@gmail.com</div>
            </a>
            
            <a
              href="https://linkedin.com/in/ikhsanuddin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-light-accent/5 dark:bg-white/5 border border-light-accent/10 dark:border-white/10 rounded-2xl hover:bg-light-accent/10 dark:hover:bg-white/10 transition-all hover:scale-105"
            >
              <FiLinkedin className="text-3xl mb-4 mx-auto text-light-secondary dark:text-dark-accent" />
              <div className="font-bold mb-2">LinkedIn</div>
              <div className="text-light-accent/70 dark:text-gray-400 text-sm">linkedin.com/in/ikhsanuddin</div>
            </a>
          </div>

          <a
            href="/Ikhsanuddin - Senior Sofware Engineer - 2026.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-secondary dark:to-dark-accent hover:from-light-secondary hover:to-light-accent dark:hover:from-dark-primary dark:hover:to-dark-secondary rounded-full font-bold transition-all hover:scale-105 text-white"
          >
            <FiDownload className="text-xl" />
            Download CV
          </a>

          <footer className="mt-20 text-light-accent/50 dark:text-gray-500 text-sm">
          </footer>
        </div>
      </section>
    </main>
  );
}
