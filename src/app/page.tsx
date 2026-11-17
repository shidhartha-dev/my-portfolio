"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import AvailabilitySection from "@/components/AvailabilitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ParticlesProviderWrapper = dynamic(
  () => import("@/components/ParticlesProviderWrapper"),
  { ssr: false }
);

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <ParticlesProviderWrapper>
      <ParticleBackground />
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <AvailabilitySection />
        <ContactSection />
        <Footer />
      </main>
    </ParticlesProviderWrapper>
  );
}
