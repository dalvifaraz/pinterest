import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Edit from './routes/edit';
import store from './redux/store';
import ErrorPage from './error-page';
import './index.css';
import PinDetails from './routes/details';
import Header from './Components/header';
import Login from './routes/login';
//TODO: Uncomment for bootstrap or later remove this along with dependency
// import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'pinterest',
        element: <Root />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <Edit />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'pin-details/:pinId',
        element: <PinDetails />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
