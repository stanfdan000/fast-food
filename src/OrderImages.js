export default function orderImages(props){
  return <div className="order-img-div">
    <div className="foodItem">
      <img className="orderImg" src={`/food-${props.foodId}.jpg`} />
      <h3>{props.foodArr[`${props.foodId - 1}`]}</h3>
    </div>
  </div>;
}