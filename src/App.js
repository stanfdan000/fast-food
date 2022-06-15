import './App.css';
import { useState } from 'react';
import React from 'react';
import FoodDropdown from './FoodDropdown';
import OrderImages from './OrderImages';
import backgroundimg from './rick-and-Morty-breaking-bad-4k-o0-1920x1080.jpg';



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
        
        <FoodDropdown setFoodId={setFoodId} foodArr={foodArr} />
        
      </section>
        
  
    </div>
  );
}

export default App;
