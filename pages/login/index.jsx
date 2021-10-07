/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import loginPic from "../../assets/images/login.png"
import SoonPage from '../../components/soon';


export default function index() {
    // const [loader, setLoader] = useState(true);

    // onChange(e){
    //     const re = /^[0-9\b]+$/;

    //     // if value is not blank, then test the regex

    //     if (e.target.value === '' || re.test(e.target.value)) {
    //         this.setState({value: e.target.value})
    //     }
    // }
    return (
        // <>
        //     <div className="container login-page">
        //         <div className="login-pic">
        //             <Image layout='fill' src={loginPic} alt="sektak-world" />
        //         </div>
        //         <form className="form-group">
                    
        //             <div className="input-group flex-nowrap m-1">
        //                 <div className="input-group-prepend">
        //                     <span className="input-group-text" id="addon-wrapping">+20</span>
        //                 </div>
        //                 <input 
        //                     type="number" 
        //                     className="form-control custom-form-control " 
        //                     placeholder="Phone number"
        //                     aria-label="Phone number" />
        //             </div>
        //             <div className="input-group m-1">
        //                 <input 
        //                     type="password" 
        //                     className="form-control" 
        //                     placeholder="Password" 
        //                     aria-label="Password" />
        //             </div>
        //             <br />
        //             <div className="not-have-account">
        //                 If you don't have account 
        //                 <span>
        //                     <Link href="/register">
        //                         <a>Create now!</a>
        //                     </Link>
        //                 </span>
        //             </div>
        //             <button type="submit" className="btn btn-primary mt-2 ">Login</button>
        //         </form>
        //     </div>
        // </>
        <>
            <SoonPage />  
        </>
    )
}
