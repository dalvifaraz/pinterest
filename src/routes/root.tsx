import React, { useState, useEffect } from 'react';
import MasonryLayout from '../Components/masonrylayout';
import { feed_details } from '../Util/constant';
import { useSelector } from 'react-redux';

export default function Root() {
  const [pinDetails, setPinDetails] = useState(feed_details);
  const search = useSelector((state: any) => state.pinterest.searchValue);

  useEffect(() => {
    if (search.length > 0) {
      const filteredData = feed_details.filter((item) => {
        return item.category.toLowerCase().includes(search.toLowerCase());
      });
      setPinDetails(filteredData);
    }
    if (search.length <= 0) {
      setPinDetails(feed_details);
    }
  }, [search]);

  return <MasonryLayout pins={pinDetails} />;
}
