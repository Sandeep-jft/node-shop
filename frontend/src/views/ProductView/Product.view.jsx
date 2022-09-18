import React, { memo } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "src/components/rating";

const ProductView = (props) => {
  const { _id, title, image, price, rating, reviews } = props;

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img
          variant="top"
          className="img-fluid"
          src={image}
          alt="product-image"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <div>
              <strong>{title}</strong>
            </div>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating rating={rating} review={`${reviews} reviews`} />
        </Card.Text>
        <Card.Text>Rs.{price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default memo(ProductView);
