import { BrowserRouter } from 'react-router-dom';
import Router from './Routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from './component';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col content-between'>
        <Header />
        <div className='flex-1'>
          <Router />
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
