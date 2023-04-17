import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import Hero from "@/components/ui/layout/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <Skills />
      {/* @ts-expect-error Server Component */}
      <Projects />
    </>
  );
}
