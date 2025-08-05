import React from "react";
import { useState } from "react";
//user location - create hook
//places - create hook
import styles from "./Home.module.scss";
import Header from "../components/Header/Header.tsx";

const Home = () => {
  /** 
   data - 
    location from location custom hook
    results, loading from places custom hook
   
   state- 
    searchMode
    searchQuery
  **/

  //handle loading

  return (
    //favorites context?
    <main className={styles.container}>
      <Header />
      <div className={styles.layout}>
        <div>restaurant list here</div>
        <div>map view here</div>
      </div>
    </main>
  );
};

export default Home;
