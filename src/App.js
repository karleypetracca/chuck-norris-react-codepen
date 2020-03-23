import React from "react";
import Header from "./components/header";
import Quote from "./components/quote";
import Form from "./components/form";
import Modal from "./components/modal";
import Footer from "./components/footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Chuck Norris</h1>
      <Header />
      <Quote />
      <Form />
      <Modal />
      <Footer />
    </div>
  );
}
