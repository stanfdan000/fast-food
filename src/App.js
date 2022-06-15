import './App.css';
import { useState } from 'react';
import React from 'react';
import FoodDropdown from './FoodDropdown.js';
import OrderImages from './OrderImages.js';
import DrinkDropdown from './DrinkDropdown.js';
import SideDropdown from './SideDropdown.js';


const drinkArr = ['toxic Rick Energy', 'operation phoenix', 'fleeb juice'];
const foodArr = ['burger', 'hotdog', 'nuggets'];
const sideArr = ['pickle rick cake', 'rick and morty pudding', 'rick and morty ice cream'];

function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  return (
    <div className="App">
      
      <h1 className='title'></h1>
      <h2 className='order'></h2>
      <OrderImages
        foodId={foodId}
        foodArr={foodArr}
        drinkArr={drinkArr}
        drinkId={drinkId}
        sideArr={sideArr}
        sideId={sideId}
      />


      <section className='dropdown-section'>
        <div>
          <FoodDropdown setFoodId={setFoodId} foodArr={foodArr} />
        </div>
        <div>
          <DrinkDropdown setDrinkId={setDrinkId} drinkArr={drinkArr} />
        </div>
        <div>
          <SideDropdown setSideId={setSideId} sideArr={sideArr} />
        </div>
      </section>


        

      
        
  
    </div>
  );
}

export default App;
