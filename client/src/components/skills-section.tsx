import { Brain, Code, BarChart3, Cloud, Settings, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning & AI",
      color: "from-blue-50 to-indigo-50",
      iconColor: "text-data-blue",
      skills: [
        { name: "TensorFlow", level: 90, proficiency: "Expert" },
        { name: "PyTorch", level: 85, proficiency: "Advanced" },
        { name: "scikit-learn", level: 88, proficiency: "Expert" },
      ],
      additional: "Keras, CNN, Deep Learning, NLP",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming & Development",
      color: "from-green-50 to-emerald-50",
      iconColor: "text-data-green",
      skills: [
        { name: "Python", level: 95, proficiency: "Expert" },
        { name: "R", level: 80, proficiency: "Advanced" },
        { name: "SQL", level: 90, proficiency: "Expert" },
      ],
      additional: "Java, JavaScript, ReactJS",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analysis & Visualization",
      color: "from-purple-50 to-violet-50",
      iconColor: "text-data-purple",
      skills: [
        { name: "Pandas & NumPy", level: 92, proficiency: "Expert" },
        { name: "Tableau", level: 85, proficiency: "Advanced" },
        { name: "Matplotlib", level: 88, proficiency: "Expert" },
      ],
      additional: "PowerBI, Statistical Analysis",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Big Data",
      color: "from-orange-50 to-red-50",
      iconColor: "text-orange-500",
      skills: [
        { name: "Google Cloud Platform", level: 85, proficiency: "Advanced" },
        { name: "AWS", level: 75, proficiency: "Intermediate" },
        { name: "Apache Spark", level: 70, proficiency: "Intermediate" },
      ],
      additional: "Hadoop, Distributed Computing",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Specializations",
      color: "from-teal-50 to-cyan-50",
      iconColor: "text-teal-500",
      specializations: [
        "Natural Language Processing",
        "Computer Vision",
        "Time Series Analysis",
        "Recommendation Systems",
        "Business Intelligence",
        "Statistical Modeling",
      ],
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Languages",
      color: "from-pink-50 to-rose-50",
      iconColor: "text-pink-500",
      languages: [
        { name: "English", level: "Native" },
        { name: "Hindi", level: "Native" },
        { name: "Tamil", level: "Native" },
        { name: "Marathi", level: "Elementary" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across the entire data science and machine learning pipeline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`bg-gradient-to-br ${category.color} hover-lift fade-in delay-${index % 3 + 1}`}
            >
              <CardContent className="p-8">
                <div className={`${category.iconColor} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-slate-900">
                  {category.title}
                </h3>

                {category.skills && (
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">{skill.name}</span>
                          <span className="text-sm font-medium text-slate-500">
                            {skill.proficiency}
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                          data-testid={`skill-progress-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                      </div>
                    ))}
                    {category.additional && (
                      <div className="mt-4 text-sm text-slate-500">
                        {category.additional}
                      </div>
                    )}
                  </div>
                )}

                {category.specializations && (
                  <div className="space-y-3">
                    {category.specializations.map((spec) => (
                      <div key={spec} className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                )}

                {category.languages && (
                  <div className="space-y-3">
                    {category.languages.map((lang) => (
                      <div key={lang.name} className="flex justify-between items-center">
                        <span className="text-slate-600">{lang.name}</span>
                        <span className="text-sm font-medium text-slate-500">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
