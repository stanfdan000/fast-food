import './App.css';
import { useState } from 'react';
import React from 'react';
import FoodDropdown from './FoodDropdown';
import OrderImages from './OrderImages';

const foodArr = ['burger', 'hotdog', 'nuggets'];

function App() {
  const [foodId, setFoodId] = useState(1);
  return (
    <div className="App">
      <h1 className='title'></h1>
      <h2 className='order'></h2>
      <OrderImages
        foodId={foodId}
        foodArr={foodArr}
      />


      <section className='dropdown-section'>
        <div>
          <FoodDropdown setFoodId={setFoodId} foodArr={foodArr} />
        </div>
      </section>
        
  
    </div>
  );
}

export default App;
