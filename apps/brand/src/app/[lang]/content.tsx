'use client'
import React, { useState } from 'react';
import { BlogPost } from '../entities/blog/types';
import { Navbar } from '../shared/ui/navigation/navbar';
import { HeroSection } from '../shared/ui/section/hero';
import { CapabilitiesSection } from '../entities/capability/capability-section';
import { BLOG_POSTS, SERVICES } from '../data/temp';
import { BlogSection } from '../entities/blog/ui/blog-section';
import { Footer } from '../shared/ui/footer';
import { CUSTOMERS } from '../data/customers';
import { CustomerLogosMarquee } from '../entities/customer/customer-logos-marquee';


export default function Content() {
  // const [selectedService, setSelectedService] = useState<string>('FULL TECHNICAL SETUP');
  // const [activePost, setActivePost] = useState<BlogPost | null>(null);
  // const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);

  // Open the inquiry modal with a specific service pre-selected
  // const handleOpenInquiry = (serviceTitle: string = 'FULL TECHNICAL SETUP') => {
  //   setActivePost(null);
  //   setSelectedService(serviceTitle);
  //   setIsInquiryOpen(true);
  // };

  // Close all open overlays when navigating via the top navbar
  // const handleResetOverlays = () => {
  //   setActivePost(null);
  //   setIsInquiryOpen(false);
  // };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased">
      <Navbar />

      <main>
        <HeroSection />

        <CapabilitiesSection
          services={SERVICES}
          onSelectService={()=>console.log("selected")}
        />

        <BlogSection
          posts={BLOG_POSTS}
          onSelectPost={()=>console.log("selected")}
        />

        <CustomerLogosMarquee customers={CUSTOMERS} />

      </main>

      <Footer />

    </div>
  );
}
