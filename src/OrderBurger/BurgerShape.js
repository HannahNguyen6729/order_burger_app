import React, { Component } from "react";
import { connect } from "react-redux";

class BurgerShape extends Component {
  renderIngredient = (item, name) => {
    let numbArr = [];
    for (let i = 0; i < item.quantity; i++) {
      numbArr.push(i);
    }
    return numbArr.map((item, index) => (
      <div className={name.toLowerCase()} key={index}></div>
    ));
  };
  renderLayer = () => {
    return this.props.burgerLayer.map((item) => {
      switch (item.name) {
        case "Salad": {
          return this.renderIngredient(item, item.name);
        }
        case "Cheese": {
          return this.renderIngredient(item, item.name);
        }
        case "Beef": {
          return this.renderIngredient(item, item.name);
        }
        default:
          break;
      }
    });
  };
  render() {
    return (
      <div className="text-center ">
        <h1 className=" mt-5" style={{ color: "#c46023" }}>
          Burger King restaurant
        </h1>
        <h2 className="mb-5" style={{ color: "#ffaa01" }}>
          Your best choice
        </h2>

        <div className="breadTop"></div>
        {this.renderLayer()}
        <div className="breadBottom mb-5"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burgerLayer: state.burgerReducer.burger,
  };
};
export default connect(mapStateToProps)(BurgerShape);
