import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { DepartmentsOverview } from "@/components/home/DepartmentsOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SynerMech Private Limited | Integrated Engineering Solutions</title>
        <meta 
          name="description" 
          content="SynerMech unifies engineering excellence across 10 disciplines. Expert consultancy, project execution, and innovative solutions for civil, mechanical, electrical, software, and more." 
        />
        <meta name="keywords" content="engineering solutions, multi-disciplinary engineering, engineering consultancy, integrated engineering services" />
      </Helmet>
      <Layout>
        <HeroSection />
        <DepartmentsOverview />
        <WhyChooseUs />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
