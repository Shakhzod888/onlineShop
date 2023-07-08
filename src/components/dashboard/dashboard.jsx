import React, { Component } from "react";
import "../dashboard/dashboard.scss";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products/categories/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="dashboard">
        <div className="inpBox">
          <input
            type="text"
            name=""
            placeholder="Search"
            className="searchInp"
            id="searchInp"
          />
        </div>
        <div className="categoryes">
          <span>Category</span>
          <p className="category active">All</p>
          <p className="category">Office</p>
          <p className="category">Living Room</p>
          <p className="category">kitchen</p>
          <p className="category">Bedroom</p>
          <p className="category">Dining</p>
          <p className="category">Kids</p>
          {/* {data && data.map((category) => <p key={category.id}>{category}</p>)} */}
        </div>
        <div className="company">
          <span>Company</span>
          <select name="sort" id="sort" className="chooseInp sort-input">
            <option value="price-lowest">all</option>
            <option value="price-highest">marcos</option>
            <option value="name-a">liddy</option>
            <option value="name-z">ikea</option>
          </select>
        </div>
        <div className="freeShoping">
          <p>Free Shoping</p>
          <input type="checkbox" />
        </div>
        <button className="cleareBtn">Clear Filter</button>
      </div>
    );
  }
}
