import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandsMarquee from '../components/home/BrandsMarquee';
import HappyClients from '../components/home/HappyClients';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TotemPOS from '../components/home/TotemPOS';
import ServicesSection from '../components/home/ServicesSection';
import Testimonials from '../components/home/Testimonials';
import InquiryForm from '../components/home/InquiryForm';
import GoogleMap from '../components/home/GoogleMap';

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="AFIS IT & POS Solutions - Leading provider of POS systems, receipt printers, barcode scanners, and IT hardware in Doha, Qatar. Shop genuine products with 1 year warranty and 24/7 support."
        keywords="POS systems Qatar, POS hardware Doha, IT solutions Qatar, AFIS Qatar, point of sale Qatar, retail POS systems, restaurant POS Qatar"
        keywordsAr="أنظمة نقاط البيع قطر, أجهزة نقاط البيع الدوحة, حلول تكنولوجيا المعلومات قطر, افيس قطر, برنامج كاشير قطر, نقاط البيع للمطاعم قطر"
        canonical="https://www.afis.qa/"
      />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <HappyClients />
      <WhyChooseUs />
      <TotemPOS />
      <BrandsMarquee />
      <ServicesSection />
      <Testimonials />
      <InquiryForm />
      <GoogleMap />
    </>
  );
};

export default Home;
