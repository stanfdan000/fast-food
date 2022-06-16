export default function orderImages({ foodId, foodArr, drinkId, drinkArr, sideArr, sideId }){
  return <div className="order-img-div">
    <div className="foodItem">
      <img className="orderImg" src={`/food/food${foodId}.jpg`} />
      <h3>{foodArr[`${foodId - 1}`]}</h3>
    </div>
    <div className="foodItem">
      <img className="orderImg" src={`/drinks/drink${drinkId}.jpg`} />
      <h3>{drinkArr[`${drinkId - 1}`]}</h3>
    </div>
    <div className="foodItem">
      <img className="orderImg" src={`/sides/side${sideId}.jpg`} />
      <h3>{sideArr[`${sideId - 1}`]}</h3>
    </div>
  </div>;
}