import './App.css';
import RatingPage from './Pages/RatingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className='w-full h-full'>
        <RatingPage
          name={'محمد مهدی مرندی تهرانی'}
        />
        <ToastContainer rtl />
      </div>
    </>
  )
}

export default App;
