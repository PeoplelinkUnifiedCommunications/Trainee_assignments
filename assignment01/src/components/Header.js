import React from "react";
import "../styles.css";
import imgOne from "../Avatars/imgOne.jpg";
import f1Img from "../RecipeImages/f1Img.jpg";
import Avatars from "../components/Avatarslist/Avatarslist";
import ImgeOne from "../Avatars/imgOne.jpg";
import ImgeTwo from "../Avatars/imgTwo.jpg";
import ImgeThree from "../Avatars/imgThree.jpg";
import ImgeFour from "../Avatars/imgFour.jpg";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="bg_image"></div>
        <section className="container">
          <nav className="nav_wrapper">
            <ul className="left_nav">
              <li>
                <a href="#">
                  BAGI <span>RESEP.COM</span>
                </a>
              </li>
              <li>
                <select name="" id="">
                  <option hidden value="Browse">
                    BROWSE
                  </option>
                </select>
              </li>
            </ul>
            <ul className="right_nav mobile_menu">
              <li>
                <span>WRITE A RECIPE</span>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-search"></i>
                </a>
              </li>
              <li>
                <i class="fas fa-comment"></i>
              </li>
              <li>
                <i class="fas fa-bell"></i>
              </li>
              <li>
                <img src={imgOne} alt="" />
              </li>
            </ul>
            <ul className=" right_nav mobile_dropdown profile">
              <li>
                <img src={imgOne} alt="" />
              </li>
            </ul>
            <ul className="mobile_dropdown_hover">
              <li>WRITE A RECIPE</li>
              <li>
                <i className="fas fa-search"></i>&nbsp; Search
              </li>
              <li>
                <i class="fas fa-comment"></i>&nbsp; Comment
              </li>
              <li>
                <i class="fas fa-bell"></i>&nbsp; Notifications
              </li>
            </ul>
          </nav>

          {/* //////////////////////////Kitchen Banner//////////////////////////////////////// */}

          <div className="kitchen_container">
            <div className="kitchen_wrapper">
              <div className="kitchen_stats">
                <img src={f1Img} alt="" />
                <div className="kitchen_stats_details">
                  <h3>Shirley's Kitchen</h3>
                  <div className="kitchen_ratings">
                    <span style={{ color: "orange" }}>
                      <i class="fa fa-star"></i>&nbsp; 4.6
                    </span>
                    <span>Avg of 26 Rated Recipes</span>
                    <span className="platinum">Platinum</span>
                  </div>
                  <div className="kitchen_likes">
                    <span>
                      94<i class="fas fa-comment-dots"></i>
                    </span>
                    <span>
                      24<i class="fas fa-heart"></i>
                    </span>
                    <span>
                      31<i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="avatars_posts">
                <div className="avatars">
                  <Avatars img={ImgeOne} kitchen="kitchen" />
                  <Avatars img={ImgeTwo} kitchen="kitchen" />
                  <Avatars img={ImgeThree} kitchen="kitchen" />
                  <Avatars img={ImgeFour} kitchen="kitchen" />
                  <Avatars img={ImgeOne} kitchen="kitchen" />
                  <Avatars img={ImgeTwo} kitchen="kitchen" />
                </div>
                <div className="post_settings">
                  <a href="#">New Post</a>
                  <a href="#">
                    <i class="fas fa-cog"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* /////////////////////////////////main menu///////////////////////////////// */}
          <div className="main_menu">
            <ul style={{ display: "flex", flexWrap: "wrap" }}>
              <li>
                <select name="" id="">
                  <option value="POST-TRENDING">POST-TRENDING</option>
                </select>
              </li>
              <li>PHOTOS</li>
              <li>MAGAZINES</li>
              <li>RESPONSES</li>
            </ul>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;
