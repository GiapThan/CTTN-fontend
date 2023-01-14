import { Route, Routes } from 'react-router-dom';

import { publicRoutes } from './Routes';
import './App.scss';
import Redirect from './Components/Redirect/Redirect';
import Header from './Layout/Header/Header';
import SideBar from './Layout/SideBar/SideBar';
import HomePage from './Layout/Contents/HomePage/HomePage';
import DetailLesson from './Layout/Contents/DetailLesson/DetailLesson';
import DetailFiles from './Layout/Contents/DetailFiles/DetailFiles';

function App() {
  return (
    <div className={'App'}>
      <Header />
      <SideBar />
      <div className={'App-Content'}>
        <Routes>
          <Route path={publicRoutes.home} element={<HomePage />} />
          <Route path={publicRoutes.file} element={<DetailFiles />} />
          <Route
            path={publicRoutes.cotheemkhongbiet}
            element={<div>cotheemkhongbiet</div>}
          />
          <Route path={publicRoutes.about} element={<div>about</div>} />
          <Route
            path={`${publicRoutes.lessonById}/:id`}
            element={<DetailLesson />}
          />
          <Route path="*" element={<Redirect />} />
        </Routes>
      </div>
    </div>
  );
}
/* 
<iframe width="1001" height="538" src="https://www.youtube.com/embed/rCHLweZg6uk" title="demo video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
https://www.youtube.com/embed/4ZnQur6rewg?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Ffullstack.edu.vn&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1 */
export default App;
