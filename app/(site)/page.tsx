import ContactForm from "@/components/ui/forms/ContactForm";
import Feautures from "@/components/ui/layout/Feautures";
import Hero from "@/components/ui/layout/Hero";
import PageContainer from "@/components/ui/layout/PageContainer";

import PageWrapper from "@/components/ui/layout/PageWrapper";
import Projects from "@/components/ui/layout/Projects";
import Reviews from "@/components/ui/layout/Reviews";
import { getProjects } from "@/sanity/sanity-utils";

const HomePage = async () => {
  const projects = await getProjects();
  const yelpRes = await fetch(
    `https://api.yelp.com/v3/businesses/the-cleaning-gourou-santa-clarita/reviews`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PRIVATE_YELP_KEY}`,
      },
    }
  );

  const reviews = await yelpRes.json();

  return (
    <PageWrapper>
      <Hero />
      <PageContainer>
        <Feautures />
        <Projects projects={projects} />
        <Reviews reviews={reviews} />
        <ContactForm />
      </PageContainer>
    </PageWrapper>
  );
};

export default HomePage;
