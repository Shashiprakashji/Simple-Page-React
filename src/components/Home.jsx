import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Shashi</h1>
          <p>Tech Enthusiast</p>
        </main>
      </div>
      <div className="home2" id="brands">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            doloribus, assumenda eligendi architecto inventore unde vel corporis
            nobis explicabo exercitationem, dolores eos vero quis officiis
            debitis. Numquam quos necessitatibus quas!
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            eaque rerum praesentium, facilis minus voluptate quasi cupiditate
            totam magni perspiciatis, maxime, consequuntur minima animi cum rem
            asperiores autem distinctio aperiam..
          </p>
        </div>
      </div>
      <div className="home4">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
