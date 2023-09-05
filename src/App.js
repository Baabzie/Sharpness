import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Problem1 } from './pages/Problem1';
import { Problem2 } from './pages/Problem2';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home/>}/>
        <Route path="/problem1" element={<Problem1/>}/>
        <Route path="/problem2" element={<Problem2/>}/>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
