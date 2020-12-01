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


// var GroceryList = () => (
//   <div>Beans
//     <div>Potatoes
//       <div>Eggs</div>
//     </div>
//   </div>
// );

// //creating a component OF components
// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <Beans />
//     <Potatoes />
//     <Eggs />
//   </div>
// );


// //now create a reuseable GroceryListItem component that dynamically renders a given grocery item
// var GroceryListItem = (props) => (
// <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//   </ul>
// );

//final product of class component usage:

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );

  }

}
// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);


//invoke the creation of GroceryList
var FinalGroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Beans', 'Potatoes', 'Eggs']}/>
  </div>
);





ReactDOM.render(<FinalGroceryList />, document.getElementById("app"));