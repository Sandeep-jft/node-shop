import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlaceholderView from "src/Loaders/PlaceholderLoader.view";
import { getProductDetailsById } from "src/services/productService";
import { CONSTANTS } from "src/utils/constant";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Image,
  Button
} from "react-bootstrap";
import RatingComponent from "src/components/rating";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ProductDetailView = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  const getProductDetail = async () => {
    try {
      const response = await getProductDetailsById(id);
      if (response.status !== CONSTANTS.SUCCESS) {
        throw response;
      }
      setDetail(response.data);
      setLoading(false);
    } catch (error) {
      console.error({ error });
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
        <Link to='/' className="btn btn-light" >
            <KeyboardBackspaceIcon />Go Back
        </Link>
      {loading ? (
        <PlaceholderView />
      ) : (
        <Row className='my-4' >
          <Col md={6}>
            <Image
              src={detail.image}
              alt={detail.title}
              fluid
              style={{ width: "100%" }}
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem my={3} variant="heading">
                <h3>{detail.title}</h3>
              </ListGroupItem>
              <ListGroupItem my={3}>Rs. {detail.price}</ListGroupItem>
              <ListGroupItem my={3}>
                <RatingComponent
                  rating={detail.rating}
                  review={`${detail.reviews} reviews`}
                />
              </ListGroupItem>
              <ListGroupItem my={3}>{detail.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroupItem my={3}>
                <Row>
                  <Col>Status</Col>
                  <Col>{detail.stock > 0 ? "In stock" : "Out of stock"}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem my={3}>
                <Button className="btn-block" type="button"  style={{width:'100%'}} >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetailView;
