import { Fragment } from "react";
import React from "react";
import classes from "../Header/Header.module.css";
import HeaderBtn from "../HeaderBtn/HeaderBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ChaiSh.</h1>
        <div className={classes.sidebarSocial}>
          <a
            href="https://twitter.com/BilalMohmand58"
            target="_blank"
            rel="opener noreferrer"
          >
            <i className=" fa-brands fa-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/bil.al_7/"
            target="_blank"
            rel="opener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <span>
            <i class="fa-solid fa-phone"></i>
          </span>
        </div>
        <HeaderBtn onClick={props.showCartHandler} />
      </header>
      <div className={classes.heroSec}>
        <div className={classes.heroText}>
          <h4>Tea Time</h4>
          <h1>The Tea Was Fantastic</h1>
          <p>
            boost your productivity and build your mood with cup of tea Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati
            ipsa explicabo. Suscipit ad molestiae temporibus error. Pariatur
            tempore maxime perferendis.
          </p>
          <button className={classes.heroBtn}>Get your now</button>
        </div>
        <div className={classes["main-image"]}>
          <img
            src="https://images.unsplash.com/photo-1548724530-41412fa0e7dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="tea cups"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
