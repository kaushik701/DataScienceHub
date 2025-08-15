import { Mail, Download, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    // This would trigger the actual resume download
    window.open("/api/resume", "_blank");
  };

  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            {/* Professional headshot placeholder */}
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl flex items-center justify-center text-white text-6xl font-bold">
              KI
            </div>
          </div>

          <div className="fade-in delay-1 text-center lg:text-left">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Data Scientist</span>
              <br />
              <span className="text-slate-900">& ML Engineer</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Aspiring Data Scientist with expertise in TensorFlow, PyTorch, and scikit-learn,
              seeking to leverage AI solutions for complex business challenges. Currently pursuing
              Master's in Computer Science (Data Science) at Oregon State University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={handleContactClick}
                className="bg-primary text-white hover:bg-blue-700"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={handleResumeDownload}
                className="border-primary text-primary hover:bg-primary hover:text-white"
                data-testid="button-resume-download"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-slate-600">
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>Corvallis, Oregon</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+1 (541) 286-2510</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span>iyerkaushik82@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
