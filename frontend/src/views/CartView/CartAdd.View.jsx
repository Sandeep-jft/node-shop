import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCartService } from "src/services/cartService";
import {
  Row,
  Col,
  ListGroupItem,
  ListGroup,
  Form,
  Image,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "src/reduxStore/reducers/cartReducer";
import Message from "src/components/shared/message";
import { isEmpty, map } from "lodash";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

const CartAddView = () => {
  const query = useLocation();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { user} = useSelector(state=>state.userReducer);
  const { id } = useParams();
  const qty = useState(query?.search.split("=")[1])[0];
  const Navigate = useNavigate();

  const addProductToCart = async (id, qty) => {
    const payload = await addToCartService(id, Number(qty));
    dispatch(addToCart(payload));
  };

  useEffect(() => {
    if (id && qty) {
      addProductToCart(id, qty);
    }
  }, [id, qty]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    if (!isEmpty(user)) {
      Navigate("/checkout");
    } else {
      Navigate("/login?redirect=cart");
    }
  };

  return (
    <div>
      <h1 className="my-3">Shopping Cart</h1>
      <Row className="justify-content-md-center">
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Message>
              No items in cart <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup>
              {map(cartItems, (cart) => (
                <ListGroupItem my={2} key={cart._id}>
                  <Row>
                    <Col md={2}>
                      <Image src={cart.image} alt="cart-image" fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${cart._id}`}>{cart.title}</Link>
                    </Col>
                    <Col md={2}>Rs. {cart.price}</Col>
                    <Col md={2}>
                      <Form.Select
                        value={cart.qty}
                        onChange={(event) =>
                          addProductToCart(cart._id, event.target.value)
                        }
                        aria-label="Default select example"
                      >
                        {[...Array(cart.stock).keys()].map((item) => {
                          return (
                            <option key={item + 1} value={item + 1}>
                              {item + 1}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Col>
                    <Col>
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => removeItemFromCart(cart._id)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroupItem>
              <h3>
                Total quantity :{" "}
                {cartItems.reduce(
                  (item, nextItem) => item + Number(nextItem.qty),
                  0
                )}{" "}
                items{" "}
              </h3>
            </ListGroupItem>
            <ListGroupItem>
              <h3>
                Total:{" "}
                {cartItems
                  .reduce(
                    (item, nextItem) =>
                      item + Number(nextItem.qty) * Number(nextItem.price),
                    0
                  )
                  .toFixed(2)}
              </h3>
            </ListGroupItem>
            <ListGroupItem>
              <Button
                variant="contained"
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
                style={{ backgroundColor: "black", width: "100%" }}
              >
                Proceed to Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default CartAddView;
