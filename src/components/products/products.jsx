import React from "react";
import axios from "axios";

import "../products/products.scss";
import Herader from "../header/herader";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const images = response.data.products;
        this.setState({ images });
        console.log(images);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <section className="products">
          <Herader />
          <div className="photoOfProducts">
            {images.map((image, index) => (
              <div className="aboutProduct" key={index}>
                <img
                  src={image.thumbnail}
                  alt={`Image ${index}`}
                  className="image productPhotoImg"
                />
                <svg
                  className="loopa"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
                <div className="productPriceAndName">
                  <span>{image.brand}</span>
                  <p>{`${image.price}$`}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}
