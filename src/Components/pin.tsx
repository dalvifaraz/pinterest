import React from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import { Link } from 'react-router-dom'

export interface PinImageProps {
  url: string;
}
export interface PinPostByProps {
  image: string;
  username: string;
  _id: string;
}

export interface PinProps {
  _id: string;
  destination: string;
  image: PinImageProps;
  postedBy: PinPostByProps;
  save: any;
}

const Pin: React.FC<PinProps> = ({
  _id,
  destination,
  image,
  postedBy,
  save,
}) => {
  const [postHovered, setPostHovered] = React.useState(false);
  return (
    <div className='pin'>
      <div
        className='pin-container'
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        // onClick={() => navigate(`/pin-detail/${_id}`)}
      >
        <img
          className='pin-image'
          src={image.url}
          //   src={urlFor(image.asset.url).width(250).url()}
          alt='user-post'
        />

        {postHovered && (
          <div className='hovered-container' style={{ height: '100%' }}>
            <div
              className=''
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div className='' style={{ display: 'flex', gap: 2 }}>
                <a
                    href={`${image?.url}?dl=`}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className='pin-download-img'
                >
                  <MdDownloadForOffline size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link
        to={`user-profile/${postedBy?._id}`}
        className="user-detail-container"
      >
        <img
          src={postedBy?.image}
          alt="user-profile"
          className="user-profile-picture"
        />
        <p className="user-details-title">{postedBy?.username}</p>
      </Link>
    </div>
  );
};

export default Pin;
