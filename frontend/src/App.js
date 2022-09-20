import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import MainView from "./views/MainView/Main.View";
import ProductDetailView from "./views/ProdutDetailView/ProductDetail.view";
import NotFoundView from "./views/NotFoundView/NotFound.View";
import CartAddView from "./views/CartView/CartAdd.View";
import LoginView from "./views/LoginView/Login.View";
import RegisterView from "./views/RegisterView/Register.View";
import ProfileView from "./views/ProfileView/Profile.View";

const App = () => {
  return (
    <>
      <Header />
      <main className="my-3">
        <Container>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/product/:id" element={<ProductDetailView />} />
            <Route path="/cart" element={<CartAddView />} />
            <Route path="/cart/:id" element={<CartAddView />} />
            <Route path='/profile' element={<ProfileView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
