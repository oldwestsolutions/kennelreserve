import Image from 'next/image';
import Link from 'next/link';

export default function Donate() {
  const donationOptions = [
    { amount: 25, description: 'Provides food for a shelter animal for one month' },
    { amount: 50, description: 'Covers basic medical check-up for one animal' },
    { amount: 100, description: 'Helps spay/neuter an animal' },
    { amount: 250, description: 'Supports emergency medical care' },
    { amount: 500, description: 'Contributes to shelter renovation projects' },
    { amount: 1000, description: 'Sponsors a special rescue mission' }
  ];

  const partnerOrganizations = [
    {
      name: 'Paws & Claws Rescue',
      logo: 'https://images.unsplash.com/photo-1551730459-92db2a308d6a',
      description: 'Rescuing and rehabilitating abandoned pets',
      focus: 'Dogs & Cats'
    },
    {
      name: 'Whiskers Haven',
      logo: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
      description: 'Specialized cat rescue and sanctuary',
      focus: 'Cats'
    },
    {
      name: 'Forever Friends',
      logo: 'https://images.unsplash.com/photo-1553060544-a616b9fe44e3',
      description: 'No-kill shelter focused on senior animals',
      focus: 'Senior Pets'
    },
    {
      name: 'Animal Medical Fund',
      logo: 'https://images.unsplash.com/photo-1584559582128-b8be330fcb8a',
      description: 'Providing emergency medical care for animals',
      focus: 'Medical Care'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Donate Hero */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Difference Today</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your donation helps animal welfare organizations provide care, shelter, and medical treatment to animals in need.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Donation Information</h2>

              {/* Donation Type Selection */}
              <div className="mb-8">
                <div className="text-lg font-medium mb-4">Select Donation Type</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-blue-500 bg-blue-50 rounded-lg p-4 text-center cursor-pointer">
                    <div className="font-medium text-blue-600">One-Time</div>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-4 text-center cursor-pointer">
                    <div className="font-medium text-gray-600">Monthly</div>
                  </div>
                </div>
              </div>

              {/* Donation Amount Selection */}
              <div className="mb-8">
                <div className="text-lg font-medium mb-4">Select Amount</div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {donationOptions.map((option, index) => (
                    <div 
                      key={index} 
                      className={`rounded-lg p-4 text-center cursor-pointer ${
                        index === 1 ? 'border-2 border-blue-500 bg-blue-50' : 'border border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                      }`}
                    >
                      <div className="font-medium text-xl mb-1">${option.amount}</div>
                      <div className="text-xs text-gray-500">{option.description}</div>
                    </div>
                  ))}
                  <div className="border border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50">
                    <div className="font-medium text-lg mb-1">Custom</div>
                    <input 
                      type="text" 
                      placeholder="$" 
                      className="w-full border-b border-gray-300 text-center focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Donation Allocation */}
              <div className="mb-8">
                <div className="text-lg font-medium mb-4">Allocate Your Donation</div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input id="all" name="allocation" type="radio" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="all" className="ml-2 text-gray-700">Where Needed Most</label>
                  </div>
                  <div className="flex items-center">
                    <input id="medical" name="allocation" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="medical" className="ml-2 text-gray-700">Medical Care</label>
                  </div>
                  <div className="flex items-center">
                    <input id="shelter" name="allocation" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="shelter" className="ml-2 text-gray-700">Shelter Operations</label>
                  </div>
                  <div className="flex items-center">
                    <input id="food" name="allocation" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="food" className="ml-2 text-gray-700">Food and Supplies</label>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <input id="subscribe" type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="subscribe" className="ml-2 text-sm text-gray-700">
                      Keep me updated on how my donation is making an impact
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium">
                Proceed to Payment
              </button>

              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Your donation is tax-deductible to the extent allowed by law.</p>
                <p className="mt-2 flex items-center justify-center">
                  <svg className="h-5 w-5 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure donation processed by Stripe
                </p>
              </div>
            </div>
          </div>

          {/* Impact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600 text-sm">
                      In 2023, we helped provide care for over 2,500 animals and found forever homes for more than 1,200 dogs and cats.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600 text-sm">
                      95% of all donations go directly to animal care, with only 5% used for administrative costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600 text-sm">
                      Your donation helps fund medical care, shelter operations, rescue missions, and community education programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Other Ways to Help</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  <Link href="/volunteer" className="text-gray-600 hover:text-blue-600">
                    Volunteer your time
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  <Link href="/shop" className="text-gray-600 hover:text-blue-600">
                    Shop our store
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  <Link href="/foster" className="text-gray-600 hover:text-blue-600">
                    Become a foster
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  <Link href="/events" className="text-gray-600 hover:text-blue-600">
                    Attend our events
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  <Link href="/supplies" className="text-gray-600 hover:text-blue-600">
                    Donate supplies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Partner Organizations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Partner Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerOrganizations.map((org, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image 
                    src={org.logo} 
                    alt={org.name} 
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{org.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{org.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Focus: {org.focus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Donors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "I've been donating monthly for over a year now, and it's incredible to see the impact my contribution makes. The regular updates I receive show exactly how my donation is helping animals in need."
              </p>
              <div className="text-gray-800 font-medium">- Jennifer R.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "After losing my beloved dog last year, I decided to make a donation in his memory. The organization sent me a beautiful card and photo of the animals my donation helped. It meant the world to me."
              </p>
              <div className="text-gray-800 font-medium">- Michael T.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "As a small business owner, I wanted to give back. Setting up a recurring donation was simple, and it's rewarding to know that a portion of our profits is helping animals find their forever homes."
              </p>
              <div className="text-gray-800 font-medium">- Sarah L.</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Is my donation tax-deductible?</h3>
              <p className="text-gray-600">
                Yes, all donations are tax-deductible to the extent allowed by law. You will receive a receipt for your records.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">How is my donation used?</h3>
              <p className="text-gray-600">
                Your donation goes directly to supporting animal care, including medical treatments, food, shelter operations, rescue missions, and community education programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Can I donate to a specific cause?</h3>
              <p className="text-gray-600">
                Yes, you can allocate your donation to specific areas like medical care, shelter operations, or food and supplies using the allocation options on the donation form.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">How do I cancel my monthly donation?</h3>
              <p className="text-gray-600">
                You can cancel your monthly donation at any time by logging into your account or contacting our donor support team at support@kennelreserve.org.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 