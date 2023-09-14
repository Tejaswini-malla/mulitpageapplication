import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Homepage';
import Orderpage from './Orderpage';
const App = () => {
  return(
    <div>
      <center>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Orderpage" element={<Orderpage/>}/>
        </Routes>
        </BrowserRouter>
      </center>
    </div>
  )

}
export default App;
