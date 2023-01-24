import { Route, Routes } from 'react-router-dom';
import { MathComponent } from 'mathjax-react';

import { publicRoutes } from './Routes';
import './App.scss';
import Redirect from './Components/Redirect/Redirect';
import Header from './Layout/Header/Header';
import SideBar from './Layout/SideBar/SideBar';
import HomePage from './Layout/Contents/HomePage/HomePage';
import DetailLesson from './Layout/Contents/DetailLesson/DetailLesson';
import DetailFiles from './Layout/Contents/DetailFiles/DetailFiles';
import DetailDocumentById from './Layout/Contents/DetailDocumentById/DetailDocumentById';

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
            element={
              <div>
                <MathComponent
                  tex={String.raw`R_n = \sum_{i=1}^{n} f \left( \frac{i\pi}{4n} \right) (x_i - x_{i - 1}) = \displaystyle\sum_{i=1}^{n} \frac{\pi}{4n} \tan \frac{i\pi}{4n}`}
                />
              </div>
            }
          />
          <Route path={publicRoutes.about} element={<div>about</div>} />
          <Route
            path={`${publicRoutes.lessonById}/:id`}
            element={<DetailLesson />}
          />
          <Route
            path={`${publicRoutes.docById}/:id`}
            element={<DetailDocumentById />}
          />
          <Route path="*" element={<Redirect />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
