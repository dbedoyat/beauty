import React, { Component } from 'react'
import Link from './Link';
import { FiHome, FiHeart, FiPlus, FiSearch, FiUser} from "react-icons/fi";

class Footer extends Component {

    render() {

        return (

            <footer>
                
                
                <li className="link">
                   
                    <Link activeClassName='active' href="/">
                     
                        <a href="">
                            <FiHome />
                            <span>Home</span>
                        </a>
                    </Link>
                    
                </li>
                <li className="link">
                    <Link activeClassName='active' href="/favorites">
                        <a href="">
                            <FiHeart />
                            <span>Favorites</span>
                        </a>
                    </Link>
                </li>
                <li className="link">
                    <Link activeClassName='active' href="/review">
                        <a href="">
                            <FiPlus />
                            <span>Review</span>
                        </a>
                    </Link>
                </li>
                <li className="link">
                    <Link activeClassName='active' href="/search">
                        <a href="">
                            <FiSearch />
                            <span>Search</span>
                        </a>
                    </Link>
                </li>
                <li className="link">
                    <Link activeClassName='active' href="/profile">
                        <a href="">
                            <FiUser />
                            <span>Profile</span>
                        </a>
                    </Link>
                </li>


            
                <style jsx>{`
                
                    footer{
                        background:#fff;
                        height:60px;
                        width:100%;
                    }

                    footer li.link{
                        width:20%;
                        height:60px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        float: left;

                    }
    
                `}</style>

            </footer>
        );
    }
}


export default Footer;