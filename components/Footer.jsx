"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full font-inter bg-[#77B900] text-white py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">

        {/* Logo + Description */}
        <div className="flex flex-col gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
            <Image 
              src="/logo_white.svg" 
              alt="FindUs Logo" 
              width={80} 
              height={80} 
              className="object-cover"
            />
          </div>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-md">
            FindUs connects you with trusted local service experts quickly, reliably, and securely. Make home maintenance effortless.
          </p>
          
          <div className="flex gap-3 sm:gap-4 mt-1 sm:mt-2">
            <Link
              href="https://www.facebook.com/share/1JjgKzMbyK/" 
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
              target="_blank"
  rel="noopener noreferrer"
            >
              <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
           
            <Link
              href="#" 
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
              target="_blank"
  rel="noopener noreferrer"
            >
              <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/finduspk/about/" 
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 sm:gap-2.5">
          <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-white">Quick Links</h3>
           <Link 
            href="/" 
            className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
          >
            Home
          </Link>
          <Link 
            href="/team" 
            className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
          >
            Team
          </Link>
          <Link 
            href="/how-we-work" 
            className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
          >
            How We Work
          </Link>
          <Link 
            href="/contact-us" 
            className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
          >
            Contact
          </Link>
          <Link 
            href="/privacy-policy" 
            className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-and-conditions" 
            className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
          >
           Terms & Conditions
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 sm:gap-2.5">
          <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-white">Contact Us</h3>
          <div className="flex flex-col gap-2">
            <a 
              href="mailto:contact@findus.com.pk" 
              className="text-white/90 hover:text-white transition-colors text-sm sm:text-base break-all"
            >
              📧 contact@findus.com.pk
            </a>
           
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-8 sm:mt-10 md:mt-12"></div>

      {/* Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-6 sm:mt-8">
        <p className="text-center sm:text-left text-white/90 text-xs sm:text-sm">
          © 2025 FindUs. All rights reserved.
        </p>
       
      
      
      </div>
    </footer>
  );
}