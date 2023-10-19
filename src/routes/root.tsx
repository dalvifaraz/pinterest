import { Outlet } from 'react-router-dom';
import Header from '../Components/header';
import MasonryLayout from '../Components/masonrylayout';
import { feed_details } from '../Util/constant';

export default function Root() {
  return (
    <>
      <Header />
      <MasonryLayout pins={feed_details} />
      <Outlet />
    </>
  );
}
