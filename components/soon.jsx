import React from 'react'
import Image from 'next/image'

import comingSoonImg from "../assets/images/coming-soon.jpg"

export default function SoonPage() {
    return (
        <>
            <div className="text-center">
                <br /><br />
                <h4 className="m2 text-secondary">COMING SOON</h4>
                <h6 className="text-success">Stay tuned!</h6>
                <Image src={comingSoonImg} width="300" height="300" alt="coming-soon" />
            </div>
        </>
    )
}
