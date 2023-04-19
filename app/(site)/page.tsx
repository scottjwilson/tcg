import Skills from "@/components/ui/Skills";
import Hero from "@/components/ui/layout/Hero";
import PageContainer from "@/components/ui/layout/PageContainer";
import PageHero from "@/components/ui/layout/PageHero";
import PageWrapper from "@/components/ui/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <PageContainer>
        {/* @ts-expect-error Server Component */}
        <Skills />
      </PageContainer>
    </PageWrapper>
  );
}
