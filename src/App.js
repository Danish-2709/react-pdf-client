// import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { ProSidebarProvider } from "react-pro-sidebar";
import React from 'react';
import { SessionProvider } from './components/SessionContext';
import './App.css';
import AdminPanel from './components/AdminPanel'
import Apps from './components/Sidebar'
// import PDF from './components/PDF'
import PdfUpload from './components/PdfUpload'

function App() {
  return (
    // <Router>
      <ProSidebarProvider>
      <SessionProvider>
        {/* <Routes>
          <Route  path="/" element={ */}
          <>              
          <div className='app-container'>
          <Apps />
          <div class="content">
          <AdminPanel />
          <PdfUpload />
          </div>
          </div>
          </>
          {/* } />
          <Route  path="/PdfUpload" element={
          <>              
          <div className='app-container'>
          <Apps />
          <div class="content">
          <AdminPanel />
          <PdfUpload />
          </div>
          </div>
          </>
          } />
        </Routes> */}
      </SessionProvider>
      </ProSidebarProvider>
    // </Router>
  );
}
   //  "@material-ui/core": "^4.12.4", 
export default App;
