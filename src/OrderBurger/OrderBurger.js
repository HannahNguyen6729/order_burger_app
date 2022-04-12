import React, { Component } from "react";
import BurgerShape from "./BurgerShape";
import Menu from "./Menu";
import './burger.css';

export default class OrderBurger extends Component {
  render() {
    return (
      <div className="container-fluid" style={{backgroundColor: '#f5ebdc', width:'100%', minHeight:'900px'}}>
        <div className="row">
          <div className="col-6">
            <BurgerShape />
          </div>
          <div className="col-6">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}
