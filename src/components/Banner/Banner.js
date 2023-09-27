import React from "react";
import TourButton from "../TourButton/TourButton";
import classes from "./Banner.module.css";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <section className={classes.banner}>
      <div className={classes["banner-content"]}>
        <h1 style={{ color: 'white' }}>Welcome To Dream Trail Tour</h1>
        <h3 style={{ color: 'white' }}>Think of a place, We'll arrange for you</h3>
        <TourButton color="white" size="lg">
          <HashLink smooth to="#tours">
            Discover our Tours
          </HashLink>
        </TourButton>
      </div>
    </section>
  );
};

export default Banner;
