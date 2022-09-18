import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeView from "./views/HomeView/Home.view";
import { Routes, Route } from "react-router-dom";
import MainView from "./views/MainView/Main.View";
import ProductDetailView from "./views/ProdutDetailView/ProductDetail.view";
import NotFoundView from "./views/NotFoundView/NotFound.View";

const App = () => {
  return (
    <>
      <Header />
      <main className="my-3">
        <Container>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/product/:id" element={<ProductDetailView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
