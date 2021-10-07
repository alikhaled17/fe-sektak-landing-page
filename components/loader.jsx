import React from 'react';
import Image from 'next/image';
import loaderPic from "../assets/images/fe-sektak-logo.png"

export default function LoaderPage() {


    return (
        <div className="loader-page">
            <div className="page-loading">
                <div className="sektak-loader-image" >
                    <Image layout='fill' src={loaderPic} alt="AlaunoLoader" />
                </div>
                <div className="sektak-loader-name">
                    <h1><span>fe-</span>sektak</h1>
                </div>
                <div className="sektak-loader-msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo perspiciatis deserunt nisi blanditiis illum exercitationem.</p>
                </div>
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    )
}
