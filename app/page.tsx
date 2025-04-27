import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#4a7c59] text-[#f0f5e9] py-20 rounded-b-[3rem]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#8cb369" strokeWidth="4" />
            <circle cx="75" cy="25" r="10" fill="#8cb369" />
            <circle cx="25" cy="75" r="10" fill="#8cb369" />
            <path d="M15,15 Q50,30 85,15" fill="none" stroke="#b68f40" strokeWidth="2" />
            <path d="M15,85 Q50,70 85,85" fill="none" stroke="#b68f40" strokeWidth="2" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#d9c589]">Supporting Animal Friends</h1>
              <p className="text-xl mb-8 leading-relaxed">Join our neighborhood of animal lovers dedicated to helping dogs and cats find happy homes through friendship, resources, and community.</p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/shop" className="bg-[#c2b097] text-[#3d3426] hover:bg-[#d9c589] font-medium py-3 px-8 rounded-2xl text-center text-lg shadow-md transition-standard hover-grow">
                  Shop & Support
                </Link>
                <Link href="/donate" className="bg-[#8cb369] text-[#f0f5e9] hover:bg-[#7ca982] font-medium py-3 px-8 rounded-2xl text-center text-lg shadow-md transition-standard hover-grow">
                  Donate Now
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-96 w-full">
                <div className="absolute inset-0 bg-[#e3e8d7] rounded-[2.5rem] shadow-lg transform rotate-3"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e" 
                  alt="Dog and cat together" 
                  className="rounded-[2rem] object-cover transform -rotate-3 shadow-lg border-4 border-[#e3e8d7]"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-[#f0f5e9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative elements */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-[#7ca982] rounded-full"></div>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d3426] mb-2">How We Help Our Friends</h2>
            <p className="mt-4 text-lg text-[#595e56] max-w-2xl mx-auto">Supporting animal non-profits through friendly neighborhood initiatives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#e3e8d7] p-8 rounded-[2rem] shadow-md hover-grow">
              <div className="h-16 w-16 bg-[#7ca982] text-[#f0f5e9] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#4a7c59]">Shop For A Cause</h3>
              <p className="text-[#3d3426] mb-5 text-lg">Every purchase in our shop helps support animal welfare organizations and shelters in our neighborhood.</p>
              <Link href="/shop" className="inline-flex items-center text-[#4a7c59] hover:text-[#b68f40] text-lg font-medium">
                Visit Shop <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="bg-[#e3e8d7] p-8 rounded-[2rem] shadow-md hover-grow">
              <div className="h-16 w-16 bg-[#b68f40] text-[#f0f5e9] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#4a7c59]">Latest Animal News</h3>
              <p className="text-[#3d3426] mb-5 text-lg">Stay informed with the latest stories, successes, and updates from animal welfare friends.</p>
              <Link href="/news" className="inline-flex items-center text-[#4a7c59] hover:text-[#b68f40] text-lg font-medium">
                Read News <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="bg-[#e3e8d7] p-8 rounded-[2rem] shadow-md hover-grow">
              <div className="h-16 w-16 bg-[#c2b097] text-[#3d3426] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#4a7c59]">Friendly Community</h3>
              <p className="text-[#3d3426] mb-5 text-lg">Connect with other animal lovers, share stories, and find resources for pet friends and volunteers.</p>
              <Link href="/community" className="inline-flex items-center text-[#4a7c59] hover:text-[#b68f40] text-lg font-medium">
                Join Friends <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="py-16 bg-[#e3e8d7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d3426]">Meet Our Animal Friends</h2>
            <p className="mt-4 text-lg text-[#595e56]">These special animals are looking for loving homes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Max",
                type: "Dog",
                image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
                personality: "Playful & Loving"
              },
              {
                name: "Luna",
                type: "Cat",
                image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
                personality: "Gentle & Curious"
              },
              {
                name: "Charlie",
                type: "Dog",
                image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031",
                personality: "Friendly & Energetic"
              },
              {
                name: "Bella",
                type: "Cat",
                image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
                personality: "Calm & Sweet"
              }
            ].map((pet, index) => (
              <div key={index} className="bg-[#f0f5e9] rounded-[2rem] overflow-hidden shadow-md hover-grow">
                <div className="relative h-48 w-full">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    className="object-cover"
                    fill
                  />
                  <div className="absolute top-3 right-3 bg-[#8cb369] text-[#f0f5e9] px-3 py-1 rounded-full text-sm font-medium">{pet.type}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#4a7c59]">{pet.name}</h3>
                  <p className="text-[#595e56] mb-3">{pet.personality}</p>
                  <Link href="/community" className="bg-[#c2b097] hover:bg-[#b68f40] text-[#3d3426] py-2 px-4 rounded-xl inline-block text-md font-medium transition-standard">
                    Read {pet.name}&apos;s Story
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/community" className="inline-block bg-[#7ca982] text-[#f0f5e9] hover:bg-[#4a7c59] font-medium py-3 px-8 rounded-2xl text-lg shadow-md transition-standard hover-grow">
              Meet More Friends
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3d3426] text-[#f0f5e9] rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#d9c589]">Ready to Help Animal Friends?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join our welcoming neighborhood of animal lovers who are making a real difference in the lives of dogs and cats in need.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/donate" className="bg-[#8cb369] hover:bg-[#7ca982] text-[#f0f5e9] font-medium py-3 px-8 rounded-2xl text-center text-lg shadow-md transition-standard hover-grow">
              Donate Today
            </Link>
            <Link href="/shop" className="bg-[#c2b097] text-[#3d3426] hover:bg-[#d9c589] font-medium py-3 px-8 rounded-2xl text-center text-lg shadow-md transition-standard hover-grow">
              Shop & Support
            </Link>
          </div>
          
          {/* PBS-style decorative element */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-1 bg-[#8cb369] rounded-full"></div>
              <div className="w-3 h-3 bg-[#b68f40] rounded-full"></div>
              <div className="w-12 h-1 bg-[#8cb369] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
