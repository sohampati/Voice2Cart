
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DemoSection } from "@/components/DemoSection";
import { AuthSection } from "@/components/AuthSection";
import { Integrations } from "@/components/Integrations";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      <Hero />
      <Features />
      <DemoSection />
      <AuthSection />
      <Integrations />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
