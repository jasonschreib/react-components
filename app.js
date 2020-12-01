// TODO
//create components for each of the grocerylist items
// var Beans = () => (
//   <div>Beans</div>
// );

// var Potatoes = () => (
//   <div>Potatoes</div>
// );

// var Eggs = () => (
//   <div>Eggs</div>
// );

//now create a reuseable GroceryListItem component that dynamically renders a given grocery item
var GroceryListItem = (props) => (
<ul>
    <li>{props.list[0]}</li>
    <li>{props.list[1]}</li>
    <li>{props.list[2]}</li>
  </ul>
);

//Refactored GroceryList to dynamically render an array of groceryItems
var GroceryList = () => (
<div>
  <GroceryListItem list = {['Beans', 'Potatoes', 'Eggs']}/>
</div>
);

// var GroceryList = () => (
//   <div>Beans
//     <div>Potatoes
//       <div>Eggs</div>
//     </div>
//   </div>
// );

//creating a component OF components
// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <Beans />
//     <Potatoes />
//     <Eggs />
//   </div>
// );

ReactDOM.render(<GroceryList />, document.getElementById("app"));