'use client'
import { Navbar } from '../shared/ui/navigation/navbar';
import { HeroSection } from '../shared/ui/section/hero';
import { CapabilitiesSection } from '../entities/capability/capability-section';
import { BlogSection } from '../entities/blog/ui/blog-section';
import { Footer } from '../shared/ui/footer';
import { CUSTOMERS } from '../data/customers';
import { useDictionary } from '@/contexts';
import { CustomerLogosMarquee } from '../entities/customer/customer-logos-marquee';


export default function Content() {

  const { capabilities } = useDictionary();
  const services =  capabilities.services;
  // const blogPosts = dict.notes;
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased">
      <Navbar />

      <main>
        <HeroSection />

        <CapabilitiesSection
          services={services}
          onSelectService={()=>console.log("selected")}
        />

        {/*<BlogSection
          posts={blogPosts}
          onSelectPost={()=>console.log("selected")}
        />*/}

        <CustomerLogosMarquee customers={CUSTOMERS} />

      </main>

      <Footer />

    </div>
  );
}
