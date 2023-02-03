import { Route, Routes } from 'react-router-dom';

import { publicRoutes } from './Routes';
import './App.scss';
import Redirect from './Components/Redirect/Redirect';
import Header from './Layout/Header/Header';
import SideBar from './Layout/SideBar/SideBar';
import HomePage from './Layout/Contents/HomePage/HomePage';
import DetailLesson from './Layout/Contents/DetailLesson/DetailLesson';
import DetailFiles from './Layout/Contents/DetailFiles/DetailFiles';
import DetailDocumentById from './Layout/Contents/DetailDocumentById/DetailDocumentById';
import Discovery from './Layout/Contents/Discovery/Discovery';
import DiscoveryById from './Layout/Contents/DiscoveryById/DiscoveryById';
import InfoGraphic from './Layout/Contents/InfoGraphic/InfoGraphic';

function App() {
  return (
    <div className={'App'}>
      <Header />
      <SideBar />
      <div className={'App-Content'}>
        <Routes>
          <Route path={publicRoutes.home} element={<HomePage />} />
          <Route path={publicRoutes.file} element={<DetailFiles />} />
          <Route path={publicRoutes.cotheemkhongbiet} element={<Discovery />} />
          <Route
            path={`${publicRoutes.cotheemkhongbiet}/:id`}
            element={<DiscoveryById />}
          />

          <Route path={publicRoutes.about} element={<InfoGraphic />} />
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
