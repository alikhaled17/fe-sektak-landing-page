/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

import feSektakLogo from '../assets/images/fe-sektak-logo.png';
import profileAvatar from '../assets/images/avatar.jpg';
import mePic from "../assets/images/me.jpg"

export default function NavBar() {
    const router = useRouter();
    const [activeSideBar, setActiveSideBar] = useState('')
    const [activeDropList, setActiveDropList] = useState('')

    // line in below for test login nav layout, but in the next step will call login status from context 
    const [isLogged, setLogged] = useState(false)
    
     // line in below for test type of user but in the next step will call type from context not static const
    const [userStatus, setUserStatus ] = useState('user');

    const checkRouter = (pathVal) => {
        return router.pathname === pathVal ? "active": "";
    }
    

    return (
        <>
            <div className="navbar  ">
                <div className="container">
                    <div className="nav-brand ">
                        <div className="brand-logo">
                            <Image  src={feSektakLogo} width="50" height="35" alt="brand-logo" />
                        </div>
                        <div className="brand-name">
                            <span>fe-</span>
                            <span>sektak</span>
                        </div>
                    </div>

                    <div className="nav-items ">
                        <ul className="container text-center m-auto">
                          
                            {
                                isLogged && (
                                    userStatus === 'provider' ? 
                                    <li className="item">
                                        <Link href="/requests">
                                            <a className={`${checkRouter('/requests')} item-link`}>Requests</a>
                                        </Link>
                                    </li>
                                    :
                                    <li className="item">
                                        <Link href="/request/create">
                                            <a className={`${checkRouter('/request/create')} item-link`}>New request</a>
                                        </Link>
                                    </li>
                                )
                            }
                            
                        </ul>
                    </div>
                    
                    <div className="nav-tail ">
                        {/*  */}
                        {
                            isLogged === true ?
                            <>
                                <div className="prof-img">
                                    <Link href="/profile">
                                        <a className={`${checkRouter('/profile')} item-link`}>
                                            <Image  src={profileAvatar} width="40" height="40" alt="profile-avatar" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="drop-list">
                                    <div 
                                        className="drop-icon"
                                        onClick={() => activeDropList === "" ? setActiveDropList("active-drop-list") : setActiveDropList("")}>
                                        <i className="fas fa-sort-down"></i>
                                    </div>
                                    <ul className={`${activeDropList}`}>
                                        <li onClick={() => setActiveDropList("")}>
                                            <i className="fas fa-cog"></i>
                                            <span>Sittings</span>
                                        </li>
                                        <li onClick={() => setActiveDropList("")}>
                                            <i className="fas fa-sign-out-alt" ></i>
                                            <span onClick={() => setLogged(false)}>Logout</span>
                                        </li>
                                    </ul>
                                </div>
                            </>
                            :
                            <>
                                <div className="btn btn-primary">
                                    <Link href="/login">
                                        <a className={`${checkRouter('/login')} item-link`}>
                                            Login
                                        </a>
                                    </Link>
                                </div>
                            </>
                        }

                        
                    </div>
                </div>

            </div>


            <div className="nav-menue" >
                <div className="nav-header ">
                    <div className="menu-icon" onClick={() => setActiveSideBar('active')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="brand-logo">
                        <Image  src={feSektakLogo} width="36" height="25" alt="brand-logo" />
                    </div>
                </div>
                <div className={`side-menue ${activeSideBar}`}>
                    <div className="side-header">
                        <span className="close-side" onClick={() => setActiveSideBar('')}>
                            <i className="fas fa-times"></i>
                        </span>

                        {
                        isLogged === true ? 
                        <div className="side-header-info">
                            <div className="header-image ">
                                <Image  src={mePic} layout="fill" alt="brand-logo" />
                            </div>
                            <h5 className="prof-name">Ali khaled</h5>
                            <span>+201120988399</span>
                        </div>
                        :
                        <div className="side-header-info">
                            
                            <div className="header-text">
                                <h3><span>fe-</span>sektak</h3>
                                <p>Make shipping more easy</p>
                                <span>
                                    set your price and find the suitable traveller's trip ..
                                </span>
                            </div>
                        </div>
                        }

                    </div>
                    <div className="side-items">
                        <ul>
                            <li className="item" onClick={() => setActiveSideBar('')}>
                                <Link href="/">
                                    <a className={`${checkRouter('/')} item-link`}>Home</a>
                                </Link>
                            </li>
                            {
                                isLogged ?
                                <li className="item" onClick={() => setActiveSideBar('')}>
                                    <a onClick={() => setLogged(false)}>Logout</a>
                                </li>
                                :
                                <>
                                  
                                    <li className="item" onClick={() => setActiveSideBar('')}>
                                        <Link href="/login">
                                            <a className={`${checkRouter('/login')} item-link`}>Login</a>
                                        </Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
