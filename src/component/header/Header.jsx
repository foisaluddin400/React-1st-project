import React from 'react'
import { CgProfile } from "react-icons/cg";
import './Header.css'
// import profile from '../../assets/img/resturent1.jpg'

export default function Header() {
  return (
    <div>

        <div className="header-section">

            <div className="head-logo">
                <div className="head-logo-in">
                    <h1>Resturent</h1>
                </div>
            </div>

            <div className="head-menu">
                <div className="head-menu-in">
                    <a href="#">Home</a>
                    <a href="#">Recipes</a>
                    <a href="#">About</a>
                    <a href="#">Search</a>
                </div>
            </div>

            <div className="head-search-box">
                <div className="head-search-in">
                    <input type="text" name="text" id="text" placeholder='Search'/>
                </div>
            </div>

            <div className="head-icon">
                <div className="head-icon-in">
                    <CgProfile />
                </div>
            </div>

        </div>

        <div className="nav-main-img">
            <div className="nav-img">
                {/* <img src={profile} alt="" /> */}
                <div className="backimg">
                    <h1>Discover an exeptional cooking class tailored for you!</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, cupiditate cum! Nulla nostrum suscipit illo ad dolore quas sequi veniam.</p>
                    <div className="btn">
                        <button className='btn1'>Explore Now</button>
                        <button className='btn2'>Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>




    </div>
  )
}
