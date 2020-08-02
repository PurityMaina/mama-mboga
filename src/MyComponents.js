import React from 'react';

class Spinach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type :"Vegetables",
      name: "Spinach",
      quantity:200,
      
    };
  }
  render() {
    return (
      <div className = "one">
        <img src = "/images/spinach.jpeg" alt="" />
        <ul>
          <p>Type:{this.state.type}</p>
          <p>Name:{this.state.name}</p>
          <p>Quantity:{this.state.quantity}</p>
        </ul>
      </div>
    );
  }
}

class Onions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Vegetables",
      name: "Onions",
      quantity:300,
    
    };
  }
  render() {
    return (
      <div className = "two">
        <img src = "/images/onions.jpeg" alt=""  />
        <ul>
          <p>Type:{this.state.type}</p>
          <p>Name:{this.state.name}</p>
          <p>Quantity:{this.state.quantity}</p>
        </ul>
      </div>
    );
  }
}


class Oranges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Fruits",
      name: "Oranges",
      quantity:250,
    
    };
  } 
  render() {
    return (
      <div className = "three">
        <img src = "/images/oranges.jpeg" alt = "" />
        <ul>
          <p>Type:{this.state.type}</p>
          <p>Name:{this.state.name}</p>
          <p>Quantity:{this.state.quantity}</p>
        </ul>
        <Spinach />
        <Onions />
      </div>
    );
  }
}
 

 function MyNavBar(){
  return (
    <div className= "nav">
      <body>
      <header>
      <nav>
          <ul>
              <li><a href = "Home.html">Home</a></li>
              <li><a href = "About.html">About</a></li>
              <li><a href = "products.html">Products</a></li>
              <li><a href = "cart.html">Cart</a></li>
              <li><a href = "contacts.html">Contacts</a></li>
          </ul>
        </nav>
        </header>
        </body>
    </div>
  );    
}

export default Oranges;