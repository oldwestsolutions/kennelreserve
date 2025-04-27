'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background-alt border-b-4 border-turtle-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center hover-grow">
                {/* Franklin-inspired Turtle Icon */}
                <div className="w-12 h-12 mr-2 bg-turtle-green text-gray-light rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.177 14.429c.343.954.623 2.467.4 4.571h-3.431C15.744 20.531 14.473 22 13 22c-1.475 0-2.748-1.47-3.146-3h-3.43c-.223-2.105.057-3.618.399-4.571-.693-1.862-1.012-3.748-.572-5.438.576-2.007 2.048-3.478 4.209-4.2C11.148 3.105 12.052 2 13 2c.947 0 1.85 1.105 2.54 2.791 2.16.72 3.633 2.193 4.209 4.2.438 1.69.12 3.574-.572 5.438z"/>
                    <circle cx="10" cy="9" r="1" />
                    <circle cx="16" cy="9" r="1" />
                  </svg>
                </div>
                <span className="font-bold text-xl text-luxury-brown">Kennel Reserve</span>
              </Link>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link href="/" className="border-transparent text-primary-dark inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium hover:text-turtle-green hover:border-turtle-green transition-all duration-300">
                Home
              </Link>
              <Link href="/shop" className="border-transparent text-primary-dark hover:text-turtle-green hover:border-turtle-green inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium transition-all duration-300">
                Shop
              </Link>
              <Link href="/news" className="border-transparent text-primary-dark hover:text-turtle-green hover:border-turtle-green inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium transition-all duration-300">
                News
              </Link>
              <Link href="/community" className="border-transparent text-primary-dark hover:text-turtle-green hover:border-turtle-green inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium transition-all duration-300">
                Community
              </Link>
              <Link href="/donate" className="border-transparent text-primary-dark hover:text-turtle-green hover:border-turtle-green inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium transition-all duration-300">
                Donate
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-full bg-turtle-green text-gray-light hover:bg-accent hover:text-primary-dark transition-all duration-300 focus:outline-none franklin-outline"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-background rounded-b-2xl shadow-lg border-t border-turtle-green">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="bg-background-alt border-l-4 border-turtle-green text-primary-dark block pl-3 pr-4 py-3 rounded-r-xl text-base font-medium">
              Home
            </Link>
            <Link href="/shop" className="border-transparent text-primary-dark hover:bg-background-alt hover:border-turtle-green hover:text-primary-dark block pl-3 pr-4 py-3 border-l-4 rounded-r-xl text-base font-medium transition-all duration-300">
              Shop
            </Link>
            <Link href="/news" className="border-transparent text-primary-dark hover:bg-background-alt hover:border-turtle-green hover:text-primary-dark block pl-3 pr-4 py-3 border-l-4 rounded-r-xl text-base font-medium transition-all duration-300">
              News
            </Link>
            <Link href="/community" className="border-transparent text-primary-dark hover:bg-background-alt hover:border-turtle-green hover:text-primary-dark block pl-3 pr-4 py-3 border-l-4 rounded-r-xl text-base font-medium transition-all duration-300">
              Community
            </Link>
            <Link href="/donate" className="border-transparent text-primary-dark hover:bg-background-alt hover:border-turtle-green hover:text-primary-dark block pl-3 pr-4 py-3 border-l-4 rounded-r-xl text-base font-medium transition-all duration-300">
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 