import React from 'react';
import Masonry from 'react-masonry-css';
import Pin, { PinProps } from './pin';

const breakPointObj = {
  default: 4,
  3000: 4,
  1500: 4,
  1200: 3,
  900: 2,
  768: 3,
  600: 2
};

export interface MasonryLayoutProps{
    pins: PinProps[],
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({pins}) => {
  return (
    <Masonry className="masonry-layout" style={{display: 'flex', position: 'absolute', left: '18rem'}} breakpointCols={breakPointObj}>
      {pins?.map((pin) => (
        <div className='' key={pin._id} style={{width: '15rem'}}>
            <Pin _id={pin._id} destination={pin.destination} image={pin.image} postedBy={pin.postedBy} save={pin.save} />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryLayout;