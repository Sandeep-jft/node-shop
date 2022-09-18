import React, { Fragment, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { getAllProducts } from "src/services/productService";
import { useSelector, useDispatch } from "react-redux";
import { CONSTANTS } from "src/utils/constant";
import {
  fetchProductsError,
  getProducts,
} from "src/reduxStore/reducers/productReducer";
import { isEmpty } from "lodash";
import ProductLoader from "src/Loaders/ProductLoader.view";
import ProductView from "../ProductView/Product.view";
import { memo } from "react";

const HomeView = () => {
  const [loading, setLoading] = useState(true);
  const { productReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await getAllProducts();
      if (response.status !== CONSTANTS.SUCCESS) {
        throw response;
      }

      setLoading(false);
      dispatch(getProducts(response.data));
    } catch (error) {
      setLoading(false);
      dispatch(fetchProductsError(error));
    }
  };

  useEffect(() => {
    if (isEmpty(productReducer.products)) {
      fetchData();
    }

    setLoading(false);
  }, []);

  return (
    <Fragment>
      <Row  >
        {loading
          ? [1, 2, 3].map((item) => {
              return (
                <Col key={item}>
                  <ProductLoader />
                </Col>
              );
            })
          : productReducer.products.map((product) => {
              return (
                <Col md={3} key={product._id}>
                  <ProductView {...product} />
                </Col>
              );
            })}
      </Row>
    </Fragment>
  );
};

export default memo(HomeView);
