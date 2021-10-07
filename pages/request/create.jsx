import React from 'react'
import Image from 'next/image'

import shipImg from "../../assets/images/bag-ektak.png"
import SoonPage from '../../components/soon'

export default function CreateRequestPage() {
    return (

        // <>
        //     <div className="create-request">
        //         <h5 className="form-title">Create a new request</h5>
        //         <form className="form-group">
        //             <div className="form-group">
        //                 <label htmlFor="shipping-images">Shipping images</label>
        //                 <input 
        //                     accept="image/*"
        //                     // onChange={(e) => addImage(e.target.files[0]) }
        //                     type="file" minLength='14' maxLength='14' className="form-control" id="shipping-images" placeholder="upload shipping images" />
        //                 <small id="nationIdHelp" className="form-text text-warning">
        //                     {/* {imagesErrors} */}
        //                 </small>
        //                 <div className="images-preview">
        //                     <ul>
        //                         <li>
        //                             <Image src={shipImg} alt="ship-imgs" layout="fill" />
        //                             <span>
        //                                 <i className="fas fa-trash-alt"></i>
        //                             </span>
        //                         </li>
        //                         <li>
        //                             <Image src={shipImg} alt="ship-imgs" layout="fill" />
        //                             <span>
        //                                 <i className="fas fa-trash-alt"></i>
        //                             </span>
        //                         </li>
        //                         <li>
        //                             <Image src={shipImg} alt="ship-imgs" layout="fill" />
        //                             <span>
        //                                 <i className="fas fa-trash-alt"></i>
        //                             </span>
        //                         </li>
        //                         <li>
        //                             <Image src={shipImg} alt="ship-imgs" layout="fill" />
        //                             <span>
        //                                 <i className="fas fa-trash-alt"></i>
        //                             </span>
        //                         </li>
        //                         <li>
        //                             <Image src={shipImg} alt="ship-imgs" layout="fill" />
        //                             <span>
        //                                 <i className="fas fa-trash-alt"></i>
        //                             </span>
        //                         </li>
        //                         <li  className="text-warning max-images">
        //                             {/* <i class="fas fa-hand-paper"></i> */}
        //                             <i className="fas fa-ban"></i>
        //                             <small>Max 5</small>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>

        //             <div className="form-group">
        //                 <label htmlFor="shipping-tilte">Shipping tilte</label>
        //                 <input 
        //                     // value={formInfo.tilte}
        //                     // onChange= {(e) => setFormInfo({title: e.target.value})}
        //                     name="shipping-tilte"
        //                     type="text" className="form-control" id="shipping-tilte" 
        //                     placeholder="Enter tilte" />
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="shipping-desc">Shipping description</label>
        //                 <textarea 
        //                     // value={formInfo.descreption}
        //                     // onChange= {(e) => setFormInfo({descreption: e.target.value})}
        //                     name="shipping-desc"
        //                     type="text" className="form-control" id="shipping-desc" 
        //                     placeholder="Shipping information ..." />
        //             </div>
                    
        //             <div className="form-group fly-label">
        //                 <label htmlFor="shipping-price">Shipping price</label>
        //                 <input 
        //                     // value={formInfo.start_price}
        //                     // onChange= {(e) => setFormInfo({start_price: Number(e.target.value)})}
        //                     name="shipping-price"
        //                     type="text" className="form-control" id="shipping-price" 
        //                     placeholder="Shipping price" />
        //                 <span className="custom-label">EGP</span>
        //             </div>
        //             <div className="destination row">
        //                 <label htmlFor="destination col-12">Destination</label>
        //                 <div className="input-group flex-nowrap m-1">
        //                     <div className="input-group-prepend">
        //                         <span className="input-group-text" id="addon-wrapping">From</span>
        //                     </div>
        //                     <select
        //                         defaultValue=""
        //                         className="form-select"
        //                         // onChange={(e) => setFormInfo({ status: e.target.value })}
        //                         >
        //                         <option value=""></option>
        //                         <option value="Aswan">Aswan</option>
        //                         <option value="Qena">Qena</option>
        //                         <option value="Luxor">Luxor</option>
        //                         <option value="Giza">Giza</option>
        //                         <option value="Cairo">Cairo</option>
        //                         <option value="Suis">Suis</option>
        //                         <option value="Hurgada">Hurgada</option>
        //                         <option value="Ismailia">Ismailia</option>
        //                         <option value="Mansora">Mansora</option>
        //                         <option value="Alexandria">Alexandria</option>
        //                         <option value="October">October</option>
                                
        //                     </select>
        //                 </div>
        //                 <div className="input-group flex-nowrap m-1">
        //                     <div className="input-group-prepend" >
        //                         <span className="input-group-text" id="addon-wrapping">To</span>
        //                     </div>
        //                     <select
        //                         defaultValue=""
        //                         className="form-select"
        //                         // onChange={(e) => setFormInfo({ status: e.target.value })}
        //                         >
        //                         <option value=""></option>
        //                         <option value="Aswan">Aswan</option>
        //                         <option value="Qena">Qena</option>
        //                         <option value="Luxor">Luxor</option>
        //                         <option value="Giza">Giza</option>
        //                         <option value="Cairo">Cairo</option>
        //                         <option value="Suis">Suis</option>
        //                         <option value="Hurgada">Hurgada</option>
        //                         <option value="Ismailia">Ismailia</option>
        //                         <option value="Mansora">Mansora</option>
        //                         <option value="Alexandria">Alexandria</option>
        //                         <option value="October">October</option>
        //                     </select>
        //                 </div>
                            
        //             </div>
        //             <button type="submit" className="btn btn-primary mt-2 ">Login</button>

        //         </form>
        //    </div>
        // </>
        <>
            <SoonPage />  
        </>
        
    )
}
