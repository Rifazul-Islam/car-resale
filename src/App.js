
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import './App.css';


function App() {
  return (
    <div className="App">
      
        <div className='max-w-[1200px]  mx-auto'>
        <RouterProvider router={router} > 

     </RouterProvider>
        </div>
    </div>
  );
}

export default App;
