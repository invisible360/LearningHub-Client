import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Router/Router';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
