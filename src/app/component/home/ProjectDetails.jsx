import React from 'react';
import bgImage from '@/../../public/image/detailsbg.png'
import story from '@/../../public/image/story.png'
import Image from 'next/image';
const ProjectDetails = () => {
    return (
        <div>
            <div
      className="flex items-center justify-center h-[400px] md:h-[650px] bg-center"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
        
      }}
    >
      <div className="  bg-opacity-50 p-6 rounded-lg text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold">The Fallingwater House</h1>
        <p className="text-orange-500 text-lg md:text-xl">Renovation & Architecture</p>
      </div>
    </div>

    <div className="flex flex-col container md:gap-8 md:flex-row h-[700px] items-center justify-between p-6">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
        </p>
      </div>
      <div className="md:w-1/2">
        <Image
          src={story}
          alt="Our Story"
          className="rounded-lg shadow-lg object-cover w-full md:h-[500px]"
        />
      </div>
    </div>
        </div>
    );
};

export default ProjectDetails;