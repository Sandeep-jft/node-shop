import React from "react";
import { Rating } from "@mui/material";
import { Card, Row, Col } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";

const RatingComponent = (props) => {
  const { rating, review } = props;
  return (
    <Row>
      <Col className="justify-content-center">
        <Rating
          name="text-feedback"
          value={rating}
          readOnly
          precision={0.5}
          style={{
            fontSize:'1.1rem',
          }}
          emptyIcon={
            <StarIcon
              style={{ opacity: 0.55,}}
              fontSize="inherit"
            />
          }
        />&nbsp;{review}
      </Col>
    </Row>
  );
};

export default RatingComponent;
