// TODO
//create components for each of the grocerylist items
var Beans = () => (
  <div>Beans</div>
);

var Potatoes = () => (
  <div>Potatoes</div>
);

var Eggs = () => (
  <div>Eggs</div>
);


// var GroceryList = () => (
//   <div>Beans
//     <div>Potatoes
//       <div>Eggs</div>
//     </div>
//   </div>
// );

var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <Beans />
    <Potatoes />
    <Eggs />
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));