import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Table from '../Components/table';
import Loader from '../Components/loader';

const PinDetails: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  const { pinId } = useParams();

  const { _id, image, postedBy } = state;

  useEffect(() => {
    setTimeout(() => {
      if (pinId === _id) {
        setLoading(false); // Set loading to false when data is ready
      }
    }, 3000);
  }, [pinId, _id]);

  const tableData = [
    { heading: 'Uploaded by', description: postedBy?.username },
    { heading: 'Category', description: 'category!!!' },
    { heading: 'Description', description: 'description....' },
    { heading: 'Save', description: 'null' },
    { heading: 'Comments', description: 'comments....' },
    // { heading: 'Row 6', description: 'Description for Row 6' },
  ];
  return (
    <div className='pin-details'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            <h2>Pin Details</h2>
          </div>
          <div className='pin-details-container'>
            <div className='pin-details-left'>
              <img className='pin-image' src={image?.url} alt='user-post' />
            </div>
            <div className='pin-details-right'>
              <Table tableData={tableData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PinDetails;
