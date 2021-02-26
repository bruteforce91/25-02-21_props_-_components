import React from "react";
import "./body.css";
import { PropTypes } from "prop-types";
import Product from "./Product";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProducts: false,
    };
  }

  handleClick() {
    this.setState ({showProducts:true});
  }
  //props ci sono
  render() {
    const { cover, title, descr, products} = this.props;
    const { showProducts}=this.state;
    return (
      <main className="Body">
        <div>
          <img src={cover} alt="body" />
          <h3>{title}</h3>
          <p>{descr}</p>
          <div className="products-container">
            {showProducts ? (
              products.map((product) => {
                return <li><Product title={product.title} image={product.image} price={product.price}/></li>
              })
            ) : (
              <button onClick={this.handleClick}>Show Products</button>
            )}
          </div>
        </div>
      </main>
    );
  }
}

Body.propTypes = {
  title: PropTypes.string.isRequired,
  cover:PropTypes.string.isRequired,
  descr:PropTypes.string.isRequired,
};

export default Body;
