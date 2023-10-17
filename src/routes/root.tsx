import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../Components/sidebar';
export default function Root() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
