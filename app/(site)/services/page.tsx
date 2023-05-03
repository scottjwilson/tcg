import { getProjects, getServices } from "@/sanity/sanity-utils";
import PageWrapper from "@/components/ui/layout/PageWrapper";
import PageHero from "@/components/ui/layout/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import PageContainer from "@/components/ui/layout/PageContainer";
import Image from "next/image";
import Link from "next/link";

const ServicesPage = async () => {
  const servicesData = await getServices();
  return (
    <PageWrapper>
      <PageHero
        title="Services Offered"
        subtitle="- THE CLEANING GOUROU INC -
"
      />
      <PageContainer className="container">
        {servicesData.map((service) => (
          <div
            key={service._id}
            className="max-w-5xl lg:h-64 mx-auto grid md:grid-cols-2 bg-gray-100 my-6"
          >
            <div className="col-span-1 overflow-hidden">
              <Image
                src={service.mainImage}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-full "
                alt={service.title}
              />
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center space-y-2 py-8 md:py-0">
              <h2 className="font-mono text-2xl">{service.title}</h2>
              <p>{service.description}</p>
              {/* 
              <div className="pb-6">
                <div className="h-[1px] w-16 bg-gray-800 " />
              </div> */}
              <Link
                className="border border-black px-3 py-1 text-sm hover:bg-gray-700 hover:text-white transition ease-linear"
                href={`/services/${service.slug}`}
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </PageContainer>
    </PageWrapper>
  );
};
export default ServicesPage;
