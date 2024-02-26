import {HashRouter, Route, Routes, useLocation, useParams} from "react-router-dom";
import { useState } from 'react'
import { ContextApplication } from "./libs/config/contexts.js";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PageCommonOutlet from "./pages/commons/PageCommonOutlet.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <ContextApplication.Provider value={{isAuthenticated, setIsAuthenticated}}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<PageCommonOutlet />}>
              {/* <Route index={true} element={<PageBarangList />} />
              <Route path={"new"} element={<PageBarangCreate />} />
              <Route path={"detail/:id"} element={<PageBarangDetail />} /> */}
            </Route>
            <Route path="/terima" element={<PageCommonOutlet />}>
              {/* <Route index={true} element={<PageTerimaList />} />
              <Route path={"ambil"} element={<PageTerimaAmbil />} />
              <Route path={"print"} element={<PageTerimaPrint />} /> */}
            </Route>
            <Route path="/kas" element={<PageCommonOutlet />}>
              {/* <Route index={true} element={<PageKasList />} /> */}
            </Route>
          </Routes>
        </HashRouter>
      </ContextApplication.Provider>
    </>
  )
}

export default App
