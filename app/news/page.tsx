import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  // Sample news data
  const newsArticles = [
    {
      id: 1,
      title: 'Local Shelter Reaches Record Adoption Numbers in 2023',
      date: 'January 15, 2024',
      summary: 'The city\'s main animal shelter reported a record-breaking year with over 1,200 animals finding forever homes.',
      image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c',
      author: 'Jane Smith',
      category: 'Shelter News'
    },
    {
      id: 2,
      title: 'New Study Shows Benefits of Animal Therapy for Mental Health',
      date: 'January 8, 2024',
      summary: 'Recent research confirms that regular interaction with pets can significantly reduce anxiety and depression symptoms.',
      image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636',
      author: 'Dr. Mark Johnson',
      category: 'Research'
    },
    {
      id: 3,
      title: 'Upcoming Fundraising Event: "Paws for a Cause" Gala',
      date: 'December 28, 2023',
      summary: 'The annual charity event will be held next month to raise funds for emergency medical care for stray animals.',
      image: 'https://images.unsplash.com/photo-1557495235-340eb888a9fb',
      author: 'Community Team',
      category: 'Events'
    },
    {
      id: 4,
      title: 'City Council Approves New Pet-Friendly Park Initiative',
      date: 'December 20, 2023',
      summary: 'Local government has approved funding for three new dog parks to be built in underserved neighborhoods.',
      image: 'https://images.unsplash.com/photo-1562176566-e9afd27531d4',
      author: 'Mark Williams',
      category: 'Community News'
    },
    {
      id: 5,
      title: 'Rescue Organization Celebrates 10-Year Anniversary',
      date: 'December 15, 2023',
      summary: 'Paws & Claws Rescue celebrates a decade of saving over 5,000 animals from euthanasia and finding them loving homes.',
      image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a',
      author: 'Lisa Anderson',
      category: 'Organizations'
    },
    {
      id: 6,
      title: 'Tips for Helping Your Pet Adjust to a New Home',
      date: 'December 10, 2023',
      summary: 'Experts share advice on helping newly adopted animals transition smoothly to their forever homes.',
      image: 'https://images.unsplash.com/photo-1581888227599-779811939961',
      author: 'Dr. Sarah Miller',
      category: 'Pet Care'
    }
  ];

  // Filter categories from news articles
  const categories = Array.from(new Set(newsArticles.map(article => article.category)));

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* News Hero */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest updates from animal welfare organizations, success stories, and more.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1604916287784-c324202b3205" 
                  alt="Major donation to animal shelters" 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Featured</span>
                  <span className="text-sm text-gray-500 ml-2">January 20, 2024</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Major Donation Helps Expand Shelter Facilities Across the Region</h2>
                <p className="text-gray-600 mb-4">
                  A generous $1.5 million donation from a local business owner will help expand animal shelter facilities in five cities, providing better care and accommodations for homeless pets awaiting adoption.
                </p>
                <p className="text-gray-800 mb-6">
                  The expansion will include new medical facilities, larger play areas, and improved housing for both dogs and cats. "This donation will transform our ability to care for animals in need," said shelter director Emily Rogers.
                </p>
                <Link href="/news/1" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* News Categories and Search */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">All News</button>
              {categories.map((category, index) => (
                <button key={index} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm">
                  {category}
                </button>
              ))}
            </div>
            <div className="w-full sm:w-auto">
              <div className="relative">
                <input
                  type="text"
                  className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search news..."
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600">{article.category}</span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <Link href={`/news/${article.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates from the animal welfare community.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-md border border-gray-300" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">We respect your privacy and will never share your information.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 