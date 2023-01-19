import { Route, Routes } from 'react-router-dom';
import Latex from 'react-latex';

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
  const a = `$$ 	\\displaystyle \\lim_{n \\to \\infty} \\sum_{i=1}^{n} x_i \\sqrt{1+x_i^3} \\Delta x = \\newline \\displaystyle\\int_{2}^{5} \\\\ \\left(x\\sqrt{1+x^3}\\right) \\mathrm{d}x$$`;

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
                <Latex>{a}</Latex>
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
