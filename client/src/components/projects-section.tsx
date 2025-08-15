import { Workflow, TrendingUp, Globe, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AIFlow - Domain-Specific Language",
      description: "Developed a domain-specific language that streamlines AI workflow creation and execution, reducing development time by 40% through declarative syntax and templating capabilities.",
      icon: <Workflow className="w-8 h-8 text-blue-600" />,
      bgColor: "from-blue-100 to-indigo-200",
      technologies: ["Python", "ML Pipelines", "DSL Design"],
      period: "Mar 2025 – May 2025",
      achievement: "40% Time Reduction",
      achievementColor: "text-accent",
    },
    {
      title: "AI-Powered Hedge Fund Simulation",
      description: "Multi-agent trading system with 14 specialized AI agents achieving 18% improved returns and 12% reduced volatility through advanced quantitative modeling.",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      bgColor: "from-green-100 to-emerald-200",
      technologies: ["Python", "Multi-Agent", "FinTech", "Trading"],
      period: "Jan 2025 - Mar 2025",
      achievement: "18% Returns ↑",
      achievementColor: "text-accent",
    },
    {
      title: "LangClass - Multilingual Text Classification",
      description: "Advanced language detection system analyzing 50,000+ text samples with 15% improved accuracy and 8% reduction in false positives for global content moderation.",
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      bgColor: "from-purple-100 to-violet-200",
      technologies: ["TensorFlow", "NLP", "Classification"],
      period: "May 2024 - July 2024",
      achievement: "15% Accuracy ↑",
      achievementColor: "text-accent",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hands-on experience developing innovative AI solutions with measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`bg-white hover-lift fade-in delay-${index + 1} overflow-hidden`}
            >
              {/* Project visual */}
              <div className={`h-48 bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}>
                <div className="text-center">
                  {project.icon}
                  <div className="mt-2 font-semibold text-gray-800">
                    {project.title.split(' - ')[1] || project.title.split(' ')[0]}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`project-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.period}
                  </div>
                  <div className={`text-sm font-semibold ${project.achievementColor}`}>
                    {project.achievement}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12 fade-in">
          <Button
            className="bg-primary text-white hover:bg-blue-700"
            data-testid="button-view-more-projects"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
