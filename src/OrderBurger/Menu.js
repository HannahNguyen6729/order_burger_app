import React, { Component } from "react";
import { connect } from "react-redux";
import { changeNumber } from "../BurgerRedux/actions/Actions";

class Menu extends Component {
  renderIngredients = () => {
    return this.props.burger.map((item, index) => (
      <tr style={{ color: "#c15d21" }} key={index} className="table-warning">
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <button className="btn btn-success mr-2" onClick={() =>{this.props.changeNumb(item.name,true)}}>+</button>
          {item.quantity}
          <button className="btn btn-danger ml-2" onClick={() =>{this.props.changeNumb(item.name,false)}}>-</button>
        </td>
        <td>{item.quantity * item.price}</td>
      </tr>
    ));
  };
  renderTotalPrice = () => {
    return this.props.burger.reduce(
      (total, current) => (total += current.price * current.quantity),
      0
    );
  };
  render() {
    return (
      <div>
        <h2 className="my-5 text-center" style={{ color: "#53a524" }}>
          Please choose the ingredients you like
          <i className="fa fa-smile-wink"></i>
        </h2>
        <div>
          <table className="table table-bordered " style={{ fontSize: 22 }}>
            <thead>
              <tr style={{ color: "#793307" }} className="table-success">
                <th>Ingredients</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total price</th>
              </tr>
            </thead>
            <tbody>
              {this.renderIngredients()}
              <tr
                className="table-success"
                style={{ color: "#793307", fontWeight: "bold" }}
              >
                <td className="text-center" colSpan="3">
                  Total
                </td>
                <td>{this.renderTotalPrice()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeNumb: (name, value) => {
      dispatch(changeNumber(name, value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
