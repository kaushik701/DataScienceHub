import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      issued: "April 2025",
      expires: "April 2028",
      credentialId: "5a8b30b8f83e4ea5952618f1e02c2261",
      verificationUrl: "https://aws.amazon.com/verification",
      icon: "fab fa-aws",
      bgColor: "bg-orange-500",
      textColor: "text-orange-600",
    },
    {
      title: "Google Data Analytics Professional",
      issuer: "Google Career Certificates",
      completed: "April 2023",
      courses: "8 Courses",
      skills: "SQL, Tableau, R",
      verificationUrl: "https://coursera.org/verify/professional-cert/T7G34DYWLN4F",
      icon: "fab fa-google",
      bgColor: "bg-blue-500",
      textColor: "text-blue-600",
    },
    {
      title: "Google Business Intelligence Professional",
      issuer: "Google Career Certificates",
      completed: "June 2023",
      courses: "3 Courses",
      focus: "BI, Dashboards",
      verificationUrl: "https://coursera.org/verify/professional-cert/NMHT6YUQ33JL",
      icon: "fab fa-google",
      bgColor: "bg-green-500",
      textColor: "text-green-600",
    },
    {
      title: "IBM Data Science Professional",
      issuer: "IBM Skills Network",
      completed: "January 2022",
      courses: "10 Courses",
      capstone: "Applied Project",
      verificationUrl: "https://coursera.org/verify/professional-cert/GHUATEU7DFJF",
      icon: "fab fa-ibm",
      bgColor: "bg-blue-700",
      textColor: "text-blue-700",
    },
    {
      title: "Machine Learning with TensorFlow on GCP",
      issuer: "Google Cloud Training",
      completed: "July 2020",
      courses: "5 Courses",
      focus: "TensorFlow, ML",
      verificationUrl: "https://coursera.org/verify/specialization/XPELMCTSPGND",
      icon: "fas fa-brain",
      bgColor: "bg-orange-600",
      textColor: "text-orange-600",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "deeplearning.ai",
      completed: "July 2020",
      courses: "5 Courses",
      instructor: "Andrew Ng",
      verificationUrl: "https://coursera.org/verify/specialization/BLWHBBJ46GHV",
      icon: "fas fa-network-wired",
      bgColor: "bg-purple-600",
      textColor: "text-purple-600",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Professional Certifications
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Industry-recognized credentials demonstrating expertise across AI, ML, and data science domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className={`bg-white hover-lift fade-in delay-${(index % 3) + 1}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${cert.bgColor} rounded-lg flex items-center justify-center text-white mr-4`}>
                    <i className={cert.icon}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-slate-900 text-sm leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-600">{cert.issuer}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {cert.issued && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Issued</span>
                      <span className="font-medium">{cert.issued}</span>
                    </div>
                  )}
                  {cert.expires && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Expires</span>
                      <span className="font-medium">{cert.expires}</span>
                    </div>
                  )}
                  {cert.completed && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Completed</span>
                      <span className="font-medium">{cert.completed}</span>
                    </div>
                  )}
                  {cert.courses && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Courses</span>
                      <span className="font-medium">{cert.courses}</span>
                    </div>
                  )}
                  {cert.skills && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Skills</span>
                      <span className="font-medium">{cert.skills}</span>
                    </div>
                  )}
                  {cert.focus && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Focus</span>
                      <span className="font-medium">{cert.focus}</span>
                    </div>
                  )}
                  {cert.capstone && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Capstone</span>
                      <span className="font-medium">{cert.capstone}</span>
                    </div>
                  )}
                  {cert.instructor && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Instructor</span>
                      <span className="font-medium">{cert.instructor}</span>
                    </div>
                  )}
                  {cert.credentialId && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Credential ID</span>
                      <span className="font-medium font-mono text-xs break-all">{cert.credentialId}</span>
                    </div>
                  )}
                </div>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${cert.textColor} hover:opacity-80 text-sm font-medium`}
                  data-testid={`cert-verify-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Credential
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
