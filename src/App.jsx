
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import HomePage from './pages/HomePage';
import AboutUs from './pages/aboutUs';
import PostList from './pages/PostList';
import SingleProducts from './pages/SingleProduct';


//layouts
import { DefaultLayout } from './layouts/DefaultLayout';

import {GlobalProvider} from './context/GlobalContext'



function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/AboutUs" Component={AboutUs} />
          <Route path="/PostList" Component={PostList} />
          <Route path="/PostList/:id" Component={SingleProducts} />
        </Route>
      </Routes>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;