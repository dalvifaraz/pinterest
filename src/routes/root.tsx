import { Outlet } from 'react-router-dom';
import Header from '../Components/header';
export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
