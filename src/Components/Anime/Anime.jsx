import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { ThumbsUp, Smile, Frown, Meh, Check, Play, ClipboardList } from 'lucide-react';

const Anime = () => {
  const [animeList, setAnimeList] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      const query = `
        query {
          Page(perPage: 20) {
            media(sort: TRENDING_DESC, type: ANIME) {
              id
              title {
                romaji
                english
                native
              }
              description
              episodes
              coverImage {
                large
              }
              trending
              averageScore
            }
          }
        }
      `;

      try {
        const data = await request('https://graphql.anilist.co', query);
        setAnimeList(data.Page.media); // Corrected to access the correct path
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAnime();
  }, []);

  // Function to truncate the description
  // const truncateDescription = (description, limit) => {
  //   if (description.length > limit) {
  //     return `${description.slice(0, limit)}...`;
  //   }
  //   return description;
  // };

  if (!animeList) return <p>Loading...</p>;

  return (
    <div className='pt-36 lg:px-44 px-6'>
      <div className='border'>
        <input type="text" placeholder='Search'/>
        <button>S</button>
      </div>
      <h1 className='text-center lg:text-8xl mb-20'>Top 20 Trending Anime</h1>
      <div className='grid lg:grid-cols-5 grid-cols-2 gap-5 '>
        {animeList.map((anime) => (
          <div className='flex flex-col items-center shadow-xl  px-2' key={anime.id}>
            <div className='w-full h-72 lg:h-96 overflow-hidden relative group'>
  <img
    className='w-full h-full object-cover'
    src={anime.coverImage.large}
    alt={anime.title.romaji}
  />
  {/* Gradient overlay */}
  <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
  <div className='z-10 absolute bottom-0 left-0 flex justify-between w-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
    <p className='font-bold'>Episodes: {anime.episodes?anime.episodes:"Airing"}</p>
    <p 
      className='font-bold flex  justify-center items-center gap-2'
      >
      {
        anime.averageScore?(
          <>
        {
          anime.averageScore > 75 ? (
            <Smile className='text-green-600 ' />
          ) : anime.averageScore > 50 ? (
            <Meh className='text-orange-400'/>
          ) : (
            <Frown className='text-red-600' />
          )
        }
        {anime.averageScore}%
        </>
      ):("")
      }
    </p>
  </div>
</div>

<div className='flex justify-start items-start w-full'>
              <div className='flex gap-4 mt-3'>
                <div className='bg-green-300 rounded-full p-2 hover:scale-125 transition-all duration-300'><Check/></div>
                <div className='bg-gray-400 rounded-full p-2 hover:scale-125 transition-all duration-300'><ClipboardList/></div>
                <div className='bg-blue-400 rounded-full p-2 hover:scale-125 transition-all duration-300'><Play/></div>
              </div>
              
            </div>
            <div className='flex w-full justify-start'>
            <h2 className='text-xl text-gray-700 font-bold my-5'>{anime.title.english || anime.title.romaji}</h2>
            </div>
            
            
            {/* <p className='text-xs'>{truncateDescription(anime.description, 100)}</p> Limit to 100 characters */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anime;
