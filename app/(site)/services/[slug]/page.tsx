import { getService } from "@/sanity/sanity-utils";
import PageWrapper from "@/components/ui/layout/PageWrapper";
import PageContainer from "@/components/ui/layout/PageContainer";
import PageHeader from "@/components/ui/layout/PageHeader";
import ContactForm from "@/components/ui/forms/ContactForm";

export const generateMetadata = async ({ params }: any) => {
  const { title, description, mainImage } = await getService(params.slug);
  return {
    title: title,
    description: description,
    image: mainImage,
  };
};

const ServicePage = async ({ params }: any) => {
  const service = await getService(params.slug);
  return (
    <PageWrapper>
      <PageHeader title={service.title} heroImage={service.heroImage} />
      <PageContainer className="container">
        <hr className="my-12" />
        <div className="grid md:grid-cols-2 gap-8">
          {service.serviceDetails.map((detail) => (
            <div key={detail._id} className="bg-gray-100 space-y-4 p-8">
              <h2 className="font-mono text-2xl capitalize">{detail.title}</h2>
              <p>{detail.content}</p>
            </div>
          ))}
        </div>
        <hr className="my-12" />

        <ContactForm />
      </PageContainer>
    </PageWrapper>
  );
};
export default ServicePage;
