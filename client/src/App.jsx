import { useContext } from 'react';
import './App.css'
import ConcertModal from './components/ConcertModal/ConcertModal';
import AppRoutes from './routes/AppRoutes'
import { modalContext } from './contexts/modal.context';

function App() {

  const { showModal, setShowModal, selectedConcert } = useContext(modalContext)

  return (
    <>
      <div className="App">
        <AppRoutes />
      </div>
      <ConcertModal showModal={showModal} setShowModal={setShowModal} selectedConcert={selectedConcert} />
    </>
  );
}

export default App
