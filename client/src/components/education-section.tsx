import { GraduationCap, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const education = [
    {
      degree: "Master's in Computer Science",
      specialization: "Data Science Specialization",
      institution: "Oregon State University",
      location: "Corvallis, Oregon",
      duration: "Sept 2023 - June 2025",
      icon: <GraduationCap className="w-8 h-8" />,
      bgColor: "from-blue-50 to-indigo-100",
      iconBg: "bg-primary",
      focus: "ML, AI, Statistics",
      description: "Advanced coursework in machine learning algorithms, statistical analysis, data mining, and artificial intelligence systems with hands-on research projects.",
    },
    {
      degree: "Bachelor of Engineering",
      specialization: "Computer Engineering",
      institution: "University of Mumbai",
      location: "Mumbai, Maharashtra",
      duration: "Aug 2018 - June 2022",
      icon: <Building2 className="w-8 h-8" />,
      bgColor: "from-green-50 to-emerald-100",
      iconBg: "bg-accent",
      focus: "Software Engineering",
      description: "Comprehensive foundation in computer science fundamentals, algorithms, data structures, software development, and engineering principles.",
    },
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strong academic foundation in computer science and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className={`bg-gradient-to-br ${edu.bgColor} hover-lift fade-in delay-${index + 1}`}
            >
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 ${edu.iconBg} rounded-lg flex items-center justify-center text-white mr-4`}>
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className={`${edu.iconBg === 'bg-primary' ? 'text-primary' : 'text-accent'} font-medium mb-1`}>
                      {edu.specialization}
                    </p>
                    <p className="text-slate-600 text-sm">{edu.institution}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Duration</span>
                    <span className="font-medium text-slate-900">{edu.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Location</span>
                    <span className="font-medium text-slate-900">{edu.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">{edu.degree.includes("Master's") ? "Focus Areas" : "Specialization"}</span>
                    <span className="font-medium text-slate-900">{edu.focus}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
