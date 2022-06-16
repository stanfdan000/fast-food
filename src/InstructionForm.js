import { useState } from 'react';

export default function InstructionForm({ instructions, setInstructions }){

  const [inputInForm, setInputForm] = useState('');

  function handleSubmit(e){

    e.preventDefault();

    setInstructions([...instructions, inputInForm]);


    setInputForm('');

  }

  function handleInputChange(e){
    setInputForm(e.target.value);
  }

  return <>
  
    <form onSubmit={handleSubmit}>
        Add Special Instructions:
      <input required value={inputInForm} onChange={handleInputChange}/>
    </form>
  </>;
}