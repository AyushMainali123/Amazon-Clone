import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon Prime"
      />
      {/* Products id, title, price, rating, image */}
      {/* Product */}
      <div className="home__row">
        <Product
          id={1}
          title={"Ayush"}
          price={100000}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          }
        />
        <Product
          id={2}
          title={"Ayush"}
          price={100000}
          rating={5}
          image={
            "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id={3}
          title={"Ayush"}
          price={100000}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/41m+krxXiBL._AC_US160_.jpg"
          }
        />
        <Product
          id={4}
          title={"Ayush"}
          price={100000}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/41m+krxXiBL._AC_US160_.jpg"
          }
        />
        <Product
          id={5}
          title={"Ayush"}
          price={100000}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/41m+krxXiBL._AC_US160_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title={"Ayush"}
          price={100000}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/41m+krxXiBL._AC_US160_.jpg"
          }
        /></div>      
    </div>
  );
};

export default Home;
