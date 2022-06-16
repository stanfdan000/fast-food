export default function orderNameInput({ setOrderName }){
  function handleChange(e){
    setOrderName(e.target.value);
  }
  return <div className="order-input">
        Name on order:
    <input className="orderNameInput" onChange={handleChange} />
  </div>;
}