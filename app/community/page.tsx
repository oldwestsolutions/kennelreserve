import Image from 'next/image';
import Link from 'next/link';

export default function Community() {
  // Sample community posts
  const communityPosts = [
    {
      id: 1,
      author: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      petType: 'Dog',
      title: 'My rescue dog\'s amazing transformation',
      content: 'After adopting Max from the shelter 6 months ago, he\'s completely transformed. When we got him, he was afraid of everything. Now he\'s the happiest, most confident dog at the park!',
      image: 'https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c',
      likes: 128,
      comments: 32,
      timeAgo: '2 days ago'
    },
    {
      id: 2,
      author: 'Carlos Mendez',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      petType: 'Cat',
      title: 'Tips for introducing a new cat to your home',
      content: 'After bringing home our third rescue cat, I\'ve learned a lot about how to make the introduction process smooth for everyone. Here are my top 5 tips...',
      image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13',
      likes: 94,
      comments: 21,
      timeAgo: '3 days ago'
    },
    {
      id: 3,
      author: 'Emma Wilson',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      petType: 'Dog',
      title: 'Volunteer experience at the local shelter',
      content: 'I started volunteering at Paws & Claws Shelter last month, and it\'s been such a rewarding experience. I walk dogs twice a week and help with socialization...',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
      likes: 73,
      comments: 18,
      timeAgo: '5 days ago'
    },
    {
      id: 4,
      author: 'Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      petType: 'Cat',
      title: 'Help needed: Cat has stopped eating',
      content: 'My 7-year-old tabby Luna has suddenly stopped eating her regular food. She seems otherwise normal, but I\'m concerned. Has anyone experienced this before?',
      image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e',
      likes: 42,
      comments: 56,
      timeAgo: '1 day ago'
    },
    {
      id: 5,
      author: 'Rachel Adams',
      authorImage: 'https://images.unsplash.com/photo-1592621385612-4d7129426394',
      petType: 'Dog',
      title: 'Best dog-friendly hiking trails in the area',
      content: 'After exploring with my Golden Retriever for the past year, I\'ve found some amazing trails that are perfect for dogs. Here are my top recommendations...',
      image: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8',
      likes: 112,
      comments: 27,
      timeAgo: '6 days ago'
    },
    {
      id: 6,
      author: 'David Wilson',
      authorImage: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44',
      petType: 'Cat',
      title: 'Success story: My formerly feral cat',
      content: 'Two years ago I started feeding a feral cat in my backyard. With a lot of patience and time, she\'s now a loving indoor cat who sleeps on my pillow every night!',
      image: 'https://images.unsplash.com/photo-1571570703673-45cbcb6b70ea',
      likes: 89,
      comments: 23,
      timeAgo: '1 week ago'
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Adoption Day at Central Park',
      date: 'February 12, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Central Park, Main Pavilion',
      image: 'https://images.unsplash.com/photo-1615266508370-7b333f6e88b0'
    },
    {
      id: 2,
      title: 'Pet First Aid Workshop',
      date: 'February 18, 2024',
      time: '1:00 PM - 3:00 PM',
      location: 'Community Center, Room 204',
      image: 'https://images.unsplash.com/photo-1612957514163-c3532fa0c256'
    },
    {
      id: 3,
      title: 'Fundraising Gala: Paws & Claws',
      date: 'March 5, 2024',
      time: '6:30 PM - 10:00 PM',
      location: 'Grand Hotel Ballroom',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Community Hero */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Community</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with fellow animal lovers, share your stories, ask questions, and find support from people who share your passion for pets.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex overflow-x-auto">
            <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-600 font-medium">
              All Posts
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">
              Dogs
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">
              Cats
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">
              Success Stories
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">
              Help & Advice
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">
              Events
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Posts Feed */}
          <div className="flex-1">
            {/* Create Post */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                    alt="User profile"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="flex-1">
                  <input type="text" placeholder="Share your pet story or ask a question..." className="w-full px-4 py-2 bg-gray-100 rounded-full border-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-100">
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Photo
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Video
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Location
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md">
                  Post
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {communityPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                        <Image 
                          src={post.authorImage} 
                          alt={post.author} 
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{post.author}</h3>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500">{post.timeAgo}</span>
                          <span className="mx-1 text-gray-500">•</span>
                          <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-800">{post.petType}</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{post.title}</h4>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    {post.image && (
                      <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                        <Image 
                          src={post.image} 
                          alt="Post image"
                          className="object-cover"
                          fill
                        />
                      </div>
                    )}
                    <div className="flex justify-between text-sm border-t border-gray-100 pt-3">
                      <button className="flex items-center text-gray-600 hover:text-blue-600">
                        <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        {post.likes} Likes
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-blue-600">
                        <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {post.comments} Comments
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-blue-600">
                        <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-md">
                Load More
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
            {/* About Community */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">About Our Community</h2>
              <p className="text-gray-600 mb-4">
                A space for animal lovers to connect, share stories, and support each other in our journey with our beloved pets.
              </p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div>
                  <div className="font-semibold text-gray-900">12.4k</div>
                  <div>Members</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">287</div>
                  <div>Online</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">2019</div>
                  <div>Created</div>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                Join Community
              </button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex gap-3">
                    <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image 
                        src={event.image} 
                        alt={event.title} 
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.date}</p>
                      <Link href="/community/events" className="text-xs text-blue-600 hover:underline">
                        View details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/community/events" className="block text-blue-600 text-center mt-4 hover:underline">
                See all events
              </Link>
            </div>

            {/* Community Rules */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Community Guidelines</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">1.</span>
                  <span>Be kind and respectful to all members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">2.</span>
                  <span>No promotional content without approval</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">3.</span>
                  <span>Share factual information about animal care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">4.</span>
                  <span>Use appropriate content warnings for sensitive topics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">5.</span>
                  <span>Report any concerns to community moderators</span>
                </li>
              </ul>
              <Link href="/community/guidelines" className="block text-blue-600 text-center mt-4 hover:underline">
                Read full guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 