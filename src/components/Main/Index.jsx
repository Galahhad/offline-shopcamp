import React from "react";
import styles from "./Main.module.css";
import ProductsContent from "./ProductsContent";
import Rightbar from "./Rightbar";

const Main = () => {
  return (
    <main className={styles.main}>
      <Rightbar />
      <ProductsContent />
    </main>
  );
};

export default Main;
