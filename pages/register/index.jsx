import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import StyleSheet from 'react'
import feSektakLogo from '../../assets/images/fe-sektak-logo.png';
import loginPic from "../../assets/images/login.png"
import SoonPage from '../../components/soon';

export default function RegisterPage() {
    return (
        // <>
        //      <div className="container login-page">
        //         <div className="login-pic">
        //             <Image layout='fill' src={loginPic} alt="sektak-world" />
        //         </div>

        //         <form className="form-group">
                        
        //             <div className="input-group mt-2">
        //                 <input 
        //                     type="text" 
        //                     className="form-control" 
        //                     placeholder="First name" 
        //                     aria-label="first-name" />
        //             </div>
        //             <div className="input-group mt-2">
        //                 <input 
        //                     type="text" 
        //                     className="form-control" 
        //                     placeholder="Last name" 
        //                     aria-label="last-name" />
        //             </div>
        //             <div className="input-group flex-nowrap mt-2">
        //                 <div className="input-group-prepend">
        //                     <span className="input-group-text" id="addon-wrapping">+20</span>
        //                 </div>
        //                 <input 
        //                     type="number" 
        //                     className="form-control custom-form-control " 
        //                     placeholder="Phone number" 
        //                     aria-label="Phone number" />
        //             </div>
        //             <div className="input-group mt-2">
        //                 <input 
        //                     type="password" 
        //                     className="form-control" 
        //                     placeholder="Password" 
        //                     aria-label="Password" />
        //             </div>
        //             <div className="input-group mt-2" >
        //                 <input 
        //                     type="file" 
        //                     className="form-control input-img" 
        //                     placeholder="user-image" 
        //                     aria-label="user-image" 
        //                     accept="image/*"
        //                 />
        //             </div>
        //             <br />
        //             <div className="not-have-account">
        //                 If you have account 
        //                 <span>
        //                         <Link href="/register">
        //                             <a>Login</a>
        //                         </Link>
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
