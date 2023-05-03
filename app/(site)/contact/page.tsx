import ContactForm from "@/components/ui/forms/ContactForm";
import PageContainer from "@/components/ui/layout/PageContainer";
import PageHero from "@/components/ui/layout/PageHero";
import PageWrapper from "@/components/ui/layout/PageWrapper";

const ContactPage = () => {
  return (
    <PageWrapper>
      <PageHero
        title="Contact"
        subtitle="Call us now, to receive your tailored made quote. Your business is unique and we understand that, so our services will be tailored to fit right in.
        "
      />

      <PageContainer className="container">
        <ContactForm />
      </PageContainer>
    </PageWrapper>
  );
};
export default ContactPage;
