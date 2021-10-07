import React, {useState} from 'react'
import Image from 'next/image'

import mePic from "../../assets/images/me.jpg"

import NewReq from '../../components/requests/new-req'
import InProcessReq from '../../components/requests/in-process'
import DoneReq from '../../components/requests/done'

import NewOffer from '../../components/offers/new-offer'
import InProcessOffer from '../../components/offers/in-process'
import DoneOffer from '../../components/offers/done'
import SoonPage from '../../components/soon'

export default function ProfilePage() {

    const [requestStatus, setRequestStatus ] = useState({reqSec: <NewReq />, classSec: 'new'} );
    const checkReqClass = (s) => s === requestStatus.classSec ? "active" : '' ;

    const [offerStatus, setOfferStatus ] = useState({offerSec: <NewReq />, classSec: 'new'} );
    const checkOfferClass = (s) => s === offerStatus.classSec ? "active" : '' ;
    
    
    // line in below for test type of user but in the next step will call type from context not static const
    const [userStatus, setUserStatus ] = useState('provider');
    

    return (
        // <>
        //     <div className="container prof-page text-center">
        //         <div>
        //             <div className="pic m-auto">
        //                 <Image layout='fill' src={mePic} alt="profile-picture" />
        //             </div>
        //             <div className="identity">
        //                 <h3>Ali khaled</h3>
        //                 <p>+201062072099</p>
        //                 {/* RATING HERE *if switch to provider */}
        //             </div>
        //         </div>

        //         {
        //             userStatus !== 'provider' ? 
        //             <>
        //                 <h4>user test header for you hossam </h4>
        //                 <div className="profile-navbar">
        //                     <span 
        //                         className={`${checkReqClass('new')}`} 
        //                         onClick={() => 
        //                             requestStatus.classSec !== 'new' 
        //                             && setRequestStatus({reqSec: <NewReq />, classSec: 'new'})
        //                         }
        //                     >New</span>
        //                     <span 
        //                         className={`${checkReqClass('in-process')}`} 
        //                         onClick={() => 
        //                             requestStatus.classSec !== 'in-process' 
        //                             && setRequestStatus({reqSec: <InProcessReq />, classSec: 'in-process'})
        //                         }
        //                         >In Process</span>
        //                     <span 
        //                         className={`${checkReqClass('done')}`} 
        //                         onClick={() => 
        //                             requestStatus.classSec !== 'done' 
        //                             && setRequestStatus({reqSec: <DoneReq />, classSec: 'done'}) 
        //                         } 
        //                         >Done</span>
        //                 </div>
        //                 <div>
        //                     {requestStatus.reqSec}
        //                 </div>
        //             </>
        //         :
        //             <>
        //                 <h4>provider test header for you hossam </h4>
        //                 <div className="profile-navbar">
        //                     <span 
        //                         className={`${checkOfferClass('new')}`} 
        //                         onClick={() => 
        //                             offerStatus.classSec !== 'new' 
        //                             && setOfferStatus({offerSec: <NewOffer />, classSec: 'new'})
        //                         }
        //                         >New</span>
        //                     <span 
        //                         className={`${checkOfferClass('in-process')}`} 
        //                         onClick={() => 
        //                             offerStatus.classSec !== 'in-process' 
        //                             && setOfferStatus({offerSec: <InProcessOffer />, classSec: 'in-process'})
        //                         }
        //                         >In Process</span>
        //                     <span 
        //                         className={`${checkOfferClass('done')}`} 
        //                         onClick={() => 
        //                             offerStatus.classSec !== 'done' 
        //                             && setOfferStatus({offerSec: <DoneOffer />, classSec: 'done'}) 
        //                         } 
        //                         >Done</span>
        //                 </div>
        //                 <div>
        //                     {offerStatus.offerSec}
        //                 </div>
        //             </>
        //         }

        //     </div> 
            
            

        // </>
        <>
            <SoonPage />  
        </>
    )
}
