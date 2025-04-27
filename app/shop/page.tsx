import Image from 'next/image';
import Link from 'next/link';

export default function Shop() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Paw Print T-Shirt',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
      category: 'Clothing',
      beneficiary: 'Local Animal Shelter'
    },
    {
      id: 2,
      name: 'Dog Walking Leash',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
      category: 'Pet Supplies',
      beneficiary: 'Rescue Organization'
    },
    {
      id: 3,
      name: 'Cat Toy Set',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f',
      category: 'Pet Supplies',
      beneficiary: 'Feline Rescue'
    },
    {
      id: 4,
      name: 'Donation Certificate',
      price: 50.00,
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6',
      category: 'Donation',
      beneficiary: 'All Organizations'
    },
    {
      id: 5,
      name: 'Animal Print Tote Bag',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6',
      category: 'Accessories',
      beneficiary: 'Wildlife Conservation'
    },
    {
      id: 6,
      name: 'Pet Portrait Commission',
      price: 85.00,
      image: 'https://images.unsplash.com/photo-1582456890096-158363a9a209',
      category: 'Art',
      beneficiary: 'Animal Welfare Fund'
    },
    {
      id: 7,
      name: 'Dog Training Guide Book',
      price: 18.50,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
      category: 'Books',
      beneficiary: 'Dog Training Program'
    },
    {
      id: 8,
      name: 'Monthly Pet Box Subscription',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d',
      category: 'Subscription',
      beneficiary: 'Various Organizations'
    }
  ];

  // Filter categories from products
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <div className="bg-[var(--turtle-green)] text-[var(--gray-light)] py-10 md:py-16 rounded-b-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-full w-full overflow-hidden opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="var(--accent)" strokeWidth="4" />
              <circle cx="15" cy="15" r="5" fill="var(--luxury-brown)" />
              <circle cx="85" cy="15" r="5" fill="var(--luxury-brown)" />
              <circle cx="85" cy="85" r="5" fill="var(--luxury-brown)" />
              <circle cx="15" cy="85" r="5" fill="var(--luxury-brown)" />
            </svg>
          </div>
          
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--accent)]">Our Neighborhood Shop</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">Every purchase supports our animal friends and helps us provide resources to animal shelters in need.</p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-[var(--primary-dark)] rounded-2xl text-[var(--gray-light)] shadow-[var(--shadow-md)]">Dog Products</span>
              <span className="px-4 py-2 bg-[var(--luxury-brown)] rounded-2xl text-[var(--gray-light)] shadow-[var(--shadow-md)]">Cat Products</span>
              <span className="px-4 py-2 bg-[var(--background-alt)] rounded-2xl text-[var(--primary-dark)] shadow-[var(--shadow-md)]">Supplies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-[var(--primary-dark)]">Featured Products</h2>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 bg-[var(--turtle-green)] rounded-full"></div>
              <div className="h-2 w-2 bg-[var(--luxury-brown)] rounded-full"></div>
              <div className="h-2 w-2 bg-[var(--accent)] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                name: "Eco-Friendly Pet Bed",
                price: "$45.99",
                image: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1",
                category: "Dogs & Cats"
              },
              {
                id: 2,
                name: "Organic Dog Treats",
                price: "$12.50",
                image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd",
                category: "Dogs"
              },
              {
                id: 3,
                name: "Interactive Cat Toy",
                price: "$18.99",
                image: "https://images.unsplash.com/photo-1610090498988-89ff0346ecb8",
                category: "Cats"
              },
              {
                id: 4,
                name: "Rescue Support T-Shirt",
                price: "$24.95",
                image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860",
                category: "Humans"
              }
            ].map((product) => (
              <div key={product.id} className="bg-[var(--background-alt)] rounded-[var(--rounded-2xl)] overflow-hidden shadow-[var(--shadow-md)] hover-grow">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="object-cover"
                    fill
                  />
                  <div className="absolute top-3 right-3 bg-[var(--turtle-green)] text-[var(--gray-light)] px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--turtle-green)] mb-2">{product.name}</h3>
                  <p className="text-[var(--luxury-brown)] font-bold mb-4">{product.price}</p>
                  <button className="w-full bg-[var(--luxury-brown)] hover:bg-[var(--accent)] text-[var(--gray-light)] font-medium py-2 px-4 rounded-xl transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="py-16 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-dark)]">New in Our Neighborhood</h2>
            <p className="mt-4 text-lg text-[var(--gray-dark)] max-w-2xl mx-auto">Fresh arrivals to help our animal friends</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 5,
                name: "Sustainable Pet Bowl Set",
                price: "$34.99",
                image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd",
                category: "Dogs & Cats"
              },
              {
                id: 6,
                name: "Cozy Pet Blanket",
                price: "$29.99",
                image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
                category: "Dogs & Cats"
              },
              {
                id: 7,
                name: "Animal Rescue Calendar",
                price: "$15.95",
                image: "https://images.unsplash.com/photo-1618077360339-14c5f242e3fb",
                category: "Fundraiser"
              }
            ].map((product) => (
              <div key={product.id} className="bg-[var(--background)] rounded-[var(--rounded-2xl)] overflow-hidden shadow-[var(--shadow-md)] hover-grow">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="object-cover"
                    fill
                  />
                  <div className="absolute top-3 right-3 bg-[var(--turtle-green)] text-[var(--gray-light)] px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--turtle-green)] mb-2">{product.name}</h3>
                  <p className="text-[var(--luxury-brown)] font-bold mb-4">{product.price}</p>
                  <button className="w-full bg-[var(--luxury-brown)] hover:bg-[var(--accent)] text-[var(--gray-light)] font-medium py-2 px-4 rounded-xl transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--turtle-green)] text-[var(--gray-light)] rounded-[var(--rounded-2xl)] overflow-hidden shadow-[var(--shadow-lg)]">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[var(--background-alt)] text-[var(--turtle-green)] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--accent)] mb-2">$145,000</h3>
                  <p>Raised for shelters</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[var(--background-alt)] text-[var(--turtle-green)] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--accent)] mb-2">23 Shelters</h3>
                  <p>Supported nationwide</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[var(--background-alt)] text-[var(--turtle-green)] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--accent)] mb-2">4,250 Animals</h3>
                  <p>Helped find homes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[var(--background-alt)] rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--primary-dark)] rounded-[var(--rounded-2xl)] p-8 md:p-12 shadow-[var(--shadow-lg)] text-center">
            <h2 className="text-3xl font-bold text-[var(--accent)] mb-4">Join Our Animal Friendly Community</h2>
            <p className="text-xl text-[var(--gray-light)] mb-8 max-w-3xl mx-auto">Subscribe to our newsletter for exclusive deals and updates on new products that help our animal friends.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-xl bg-[var(--background)] text-[var(--primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--turtle-green)]"
              />
              <button className="bg-[var(--turtle-green)] hover:bg-[var(--accent)] text-[var(--gray-light)] font-medium py-3 px-6 rounded-xl shadow-md transition-all duration-300 hover-grow">
                Subscribe
              </button>
            </div>
            
            {/* PBS-style decorative element */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-1 bg-[var(--turtle-green)] rounded-full"></div>
                <div className="w-3 h-3 bg-[var(--accent)] rounded-full"></div>
                <div className="w-12 h-1 bg-[var(--turtle-green)] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 