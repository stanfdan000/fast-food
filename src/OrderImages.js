export default function orderImages({ foodId, foodArr }){
  return <div className="order-img-div">
    <div className="foodItem">
      <img className="orderImg" src={`/food/food${foodId}.jpg`} />
      <h3>{foodArr[`${foodId - 1}`]}</h3>
    </div>
  </div>;
}