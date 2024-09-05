// Blog/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';

interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/getPosts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    fetchPosts();
  }, []);
  
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-sirina mx-auto">
          <h1 className="text-4xl font-bold text-center mt-8">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {posts.map((post) => (
              <div key={post._id} className="border p-4 rounded-lg shadow-lg">
                <img
                  src={post.image.asset.url}
                  alt={post.image.alt}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-2xl font-semibold mt-4">{post.title}</h2>
                <p className="mt-2">{post.description}</p>
                <a href={`/blog/${post.slug.current}`} className="text-blue-500 hover:underline mt-4 block">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
