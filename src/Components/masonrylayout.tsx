import React from 'react';
import Masonry from 'react-masonry-css';
import Pin, { PinProps } from './pin';

export interface MasonryLayoutProps {
  pins: PinProps[];
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ pins }) => {
  const breakPointObj = {
    default: 4,
    3000: 4,
    1500: pins.length > 3 ? 4 : pins.length > 2 ? 3 : 2,
    1200: 3,
    900: 2,
    768: 3,
    600: 2,
  };

  return (
    <Masonry
      className='masonry-layout root-container'
      breakpointCols={breakPointObj}
    >
      {pins.length > 0 &&
        pins?.map((pin) => (
          <div className='' key={pin._id} style={{ width: '15rem' }}>
            <Pin
              _id={pin._id}
              destination={pin.destination}
              image={pin.image}
              postedBy={pin.postedBy}
              save={pin.save}
            />
          </div>
        ))}
    </Masonry>
  );
};

export default MasonryLayout;
