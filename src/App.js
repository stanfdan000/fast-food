import './App.css';
import { useState } from 'react';
import React from 'react';
import FoodDropdown from './FoodDropdown.js';
import OrderImages from './OrderImages.js';
import DrinkDropdown from './DrinkDropdown.js';
import SideDropdown from './SideDropdown.js';
import InstructionList from './InstructionList.js';
import InstructionForm from './InstructionForm.js';
import OrderNameInput from './OrderNameInput.js';


const drinkArr = ['toxic Rick Energy', 'operation phoenix', 'fleeb juice'];
const foodArr = ['burger', 'hotdog', 'nuggets'];
const sideArr = ['pickle rick cake', 'rick and morty pudding', 'rick and morty ice cream'];

function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [instructions, setInstructions] = useState([]);
  const [OrderName, setOrderName] = useState(``);


  return (
    <div className="App">
      
      <h1 className='title'>Order Your Food Fast!!!!</h1>
      <h2 className='order'>ORDER FOR:{OrderName}</h2>
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

      <section>
        {
          <OrderNameInput setOrderName={setOrderName} />
        }
      </section>

      <section>
        <InstructionForm instructions={instructions} setInstructions={setInstructions} />
      </section>
      <section>
        <ul>
          <InstructionList instructions={instructions} />
        </ul>
      </section>



        

      
        
  
    </div>
  );
}

export default App;
