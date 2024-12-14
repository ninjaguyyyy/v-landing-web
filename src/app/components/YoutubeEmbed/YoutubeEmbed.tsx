
import React from 'react';

export const YoutubeEmbed = ({ videoId }: { videoId: string }): JSX.Element => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const handlePlay = () => {
    setIsVideoLoaded(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
      {!isVideoLoaded ? (
        <div className='border-4 border-solid border-white h-[275px] overflow-y-hidden  -'>
          <img
            src={thumbnailUrl}
            alt="YouTube Thumbnail"
            style={{
              width: '100%',
              height: 'auto', // Adjust the height as needed
              objectFit: 'cover', // Crop the image to fill the container
              objectPosition: 'center top', // Adjust the crop (e.g., 'center', 'center top', etc.)
              cursor: 'pointer',
              backgroundPosition: '50% 50%',
              transform: 'translateY(-45px)',

            }}
            onClick={handlePlay}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '40px',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            &#9654; {/* Play Button */}
          </div>
        </div>
      ) : (
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
          title="YouTube Video"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </div>
  );
};


