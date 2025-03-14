import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import banner from '../assets/images/banner.png';

export const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  
  return (
    <div>
      <div className='w-full p-0 justify-center items-center text-center'>
        <div className="w-full">
          <img src={banner} className="w-full" alt="Banner Image" />
        </div>
      </div>
      <div className='flex flex-col gap-6 p-2 sm:p-20 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-5xl text-center'>Welcome to my Blog</h1>
        <p className='text-gray-500 text-xs sm:text-lg text-center'>
          This blog is a collaborative space where I share my learnings and experiences as a web developer, and I invite you to join the conversation. Create your account and share your knowledge too!
        </p>
        <Link
          to='/search'
          className='text-xs text-center sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

