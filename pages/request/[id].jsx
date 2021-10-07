import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mePic from "../../assets/images/bag-ektak.png"
import travelerPic from "../../assets/images/me.jpg"
import SoonPage from '../../components/soon'


export default function RequestDetailsPage() {
    return (
      // <>
      //   <div className="ship-page">
      //     <div>
      //       <div className="ship-title">
      //         <h5>shipping title</h5>
      //         <h5>50 EGP</h5>
      //       </div>
      //       <div className="ship-image">
      //         <Image src={mePic} alt="ship-image" layout="fill"/>
      //       </div>
      //     </div>
      //     <div className="ship-info">
      //       <h6>More info.</h6>
      //       <p>
      //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia saepe, voluptate deleniti voluptas totam nesciunt esse ipsam perferendis recusandae repellendus laudantium eos, reiciendis cupiditate tempora beatae fugiat, sit sapiente? Odio.
      //       </p>
      //       <ul className="destination">
      //         <li>
      //           <small>From</small>
      //           <span>Aswan</span>
      //         </li>
      //         <li>
      //           <small>To</small>
      //           <span>Cairo</span>
      //         </li>
      //       </ul>
      //     </div>

      //     <div className="shiper-account">
            
      //       <div className="no-offers">
      //         <span>No offers</span>
      //         <i className="text-secondary far fa-frown ml-2"></i>
      //       </div>

      //       <div className="active">
      //         <div className="traveler-info">
      //           <div className="traveler-img">
      //             <Image src={travelerPic} alert="traveler-img" layout="fill" />
      //           </div>
      //           <div>
      //             <div className="name-rate">
      //               <h6>
      //                 Ali khaled 
      //                 <span>
      //                   <i className="fas fa-star text-warning"></i>
      //                   <small>4.3</small>
      //                 </span>
      //               </h6>
      //               <span>
      //                 +201063072099
      //               </span>
      //             </div>
      //             <div className="traveler-location">
      //               <h6>
      //                 <Link href="/">
      //                   <a className="/">Show last location</a>
      //                 </Link>
      //               </h6>
      //               <p>
      //                 <small>Last seen</small>
      //                 <span>02:35 AM - 20-11-2021</span>
      //               </p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>

      //     <div className="traveler-account">
      //       <div className="active">
      //         <h5>Contact with <span>'Hossam'</span></h5>
      //         <h6>+201120988399</h6>
      //         <div>
      //           <small></small>
      //           <small>OR</small>
      //           <small></small>
      //         </div>
      //         <span className="btn btn-primary">
      //           Submit shipping
      //         </span>
      //       </div>
      //       <div className="make-offer row">
      //         <h5>Make an offer</h5>
      //         <form className="form-group ">
      //           <div className="form-group fly-label">
      //               <input 
      //                   // value={formInfo.start_price}
      //                   // onChange= {(e) => setFormInfo({start_price: Number(e.target.value)})}
      //                   name="shipping-price"
      //                   type="text" className="form-control" id="shipping-price" 
      //                   placeholder="Make offer" />
      //               <span className="custom-label">EGP</span>
      //           </div>
      //           <button type="submit" className="btn btn-primary mt-2 ">Ok</button>

      //         </form>
      //       </div>
      //     </div>


      //   </div>
      // </>
      <>
            <SoonPage />  
        </>
    )
}

