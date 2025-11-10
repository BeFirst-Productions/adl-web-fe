"use client";

import Image from "next/image";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "The Complete Guide to Starting a Business in Dubai",
      date: "November 8, 2025",
      author: "Admin",
      excerpt:
        "Learn everything you need to know about starting your business in Dubai — from choosing a trade license to finding the right location.",
      image: "/assets/images/blogs-page/blog01.png",
    },
    {
      id: 2,
      title: "Which is Better for Your Business: Mainland or Free Zone?",
      date: "November 7, 2025",
      author: "Admin",
      excerpt:
        "Discover the pros and cons of setting up in a Mainland company vs a Free Zone in the UAE.",
      image: "/assets/images/blogs-page/blog01.png",
    },
    {
      id: 3,
      title: "Digitalizing Company Formation in the UAE",
      date: "November 6, 2025",
      author: "Admin",
      excerpt:
        "The UAE is going digital — here's how you can register your company online faster and easier.",
      image: "/assets/images/blogs-page/blog01.png",
    },
    {
      id: 4,
      title: "How to Obtain an EID Certification in Dubai",
      date: "November 5, 2025",
      author: "Admin",
      excerpt:
        "Get step-by-step guidance on applying for your Emirates ID certification as part of the business setup process.",
      image: "/assets/images/blogs-page/blog01.png",
    },
    {
      id: 5,
      title: "Why Trademark Registration Matters for Startups",
      date: "November 4, 2025",
      author: "Admin",
      excerpt:
        "Learn why protecting your intellectual property early is crucial for your brand identity and business growth.",
      image: "/assets/images/blogs-page/blog01.png",
    },
  ];

  return (
    <div className="min-h-screen text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8">
        {/* Blog Grid Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center lg:text-left mb-8">
            Our All Blogs
          </h1>

          {/* Grid Layout for Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="glass-bg rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h2 className="text-lg font-semibold hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">
                      {blog.date} | by {blog.author}
                    </p>
                    <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

             
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">
              1
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
              2
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex flex-col gap-6">
          {/* Latest Posts */}
          <div className="glass-bg p-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Latest Posts</h3>
            <ul className="space-y-4">
              {blogs.slice(0, 5).map((post) => (
                <li
                  key={post.id}
                  className="flex items-center gap-3 hover:text-blue-400 cursor-pointer transition"
                >
                  <div className="relative w-16 h-12 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-300 leading-snug hover:text-blue-400 transition">
                    {post.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Call-to-Action Box */}
          <div className="glass-bg p-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Let's Build Your Dream</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Ready to start your business in Dubai? Get expert help from our
              consultants today.
            </p>
            <button className="cursor-pointer w-full glass-bg text-white py-2 rounded-lg transition">
              Book a Meeting
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
