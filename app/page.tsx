import Navbar from "@/components/layout/Navbar";
import CinematicBackground from "@/components/layout/CinematicBackground";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import ShowreelSection from "@/components/sections/ShowreelSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import ToolsSection from "@/components/sections/ToolsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Cinematic fixed background */}
      <CinematicBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" role="main">
        <HeroSection />
        <WorkSection />
        <ShowreelSection />
        <AboutSection />
        <ServicesSection />
        <WorkflowSection />
        <ToolsSection />
        <ContactSection />
      </main>
    </>
  );
}
