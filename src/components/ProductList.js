import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import { Container, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchReqdata, fetchRate } from "../actions";

const ProductList = (props) => {
  const [curr, setCurr] = useState(localStorage.getItem('curr') || props.currency);

  useEffect(() => {
    props.fetchReqdata();
  }, [])

  const handleDrop = (e) => {
    props.fetchRate(e.target.name, curr);
    // localStorage.setItem('curr',e.target.name);
    setCurr(e.target.name)
  }

  const { products } = props;
  return (
    <React.Fragment>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '20px' }}>
          <p style={{ fontSize: '24px', marginRight: '10px' }}><b>Currency</b></p>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {curr}
            </Dropdown.Toggle>
            <Dropdown.Menu onClick={handleDrop}>
              <Dropdown.Item href="#/action-1" name='INR'>INR</Dropdown.Item>
              <Dropdown.Item href="#/action-2" name='USD'>USD</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="product-list">
          {products.length > 0 &&
            products.map(product => {
              const { id } = product;
              return <ProductBox key={id} product={product} />;
            })}
        </div>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    currency: state.products.currency,
  };
};

export default connect(
  mapStateToProps,
  { fetchReqdata, fetchRate }
)(ProductList);
