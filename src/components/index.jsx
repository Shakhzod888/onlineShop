import React from "react";
import Products from "./products/products";
import Dashboard from "./dashboard/dashboard";

import "../components/index.scss";
import Office from "./office/office";
import LivingRoom from "./leavingRoom/livingRoom";
import Kitchen from "./kitchen/kitchen";

export default class Index extends React.Component {
  render() {
    return (
      <>
        <div className="index">
          <div className="mainPage">
            <Dashboard />
            <Products />
            {/* <Office /> */}
            {/* <LivingRoom /> */}
            {/* <Kitchen /> */}
          </div>
        </div>
      </>
    );
  }
}
