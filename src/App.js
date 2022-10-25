import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Router/Router';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
