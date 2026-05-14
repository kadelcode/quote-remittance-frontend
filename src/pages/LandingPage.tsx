import CTABanner from '@/components/landing/cta-banner/CTABanner';
import DashboardPreview from '@/components/landing/dashboard-preview/DashboardPreview';
import FAQ from '@/components/landing/faq/FAQ';
import Features from '@/components/landing/features/Features';
import Footer from '@/components/landing/footer/Footer';
import Hero from '@/components/landing/hero/Hero';
import HowItWorks from '@/components/landing/how-it-works/HowItWorks';
import Navbar from '@/components/landing/navbar/Navbar';
import Security from '@/components/landing/security/Security';
import Testimonials from '@/components/landing/testimonials/Testimonials';
import TrustedBy from '@/components/landing/trusted-by/TrustedBy';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Security />
      <DashboardPreview />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  );
};

export default LandingPage;
