import React from 'react'
import './modal.css';

const Modal = ({setOpenCreate}) => {
  return (
    <div className="modal">
            <div className="modal-card">
                <div className="modal-titlebox">
                    <div className="modal-title">Create New</div>
                    <div className="x-btn" onClick={()=>{setOpenCreate(prev=>!prev)}}>X</div>
                </div>
                <div className="modal-body">
                    <div className="inputRowModal">
                        <div className="inputBox">
                            <div className="input-label">Name</div>
                            <input type='text' className='input-modal' placeholder='Enter name of pateint' />
                        </div>
                        <div className="inputBox">
                            <div className="input-label">Age</div>
                            <input type='text' className='input-modal' placeholder='Enter Age of pateint' />
                        </div>

                     </div>  

                     <div className="inputRowModal">
                        <div className="inputBox">
                            <div className="input-label">Address</div>
                            <input type='text' className='input-modal' placeholder='Enter address of pateint' />
                        </div>
                        <div className="inputBox">
                            <div className="input-label">Mobile no.</div>
                            <input type='text' className='input-modal' placeholder='Enter Mobile no.' />
                        </div>

                     </div>  

                     <div className="inputRowModal">
                        <div className="inputBox">
                            <div className="input-label">Examined by</div>
                            <input type='text' className='input-modal' placeholder='Enter name of Doctor' />
                        </div>
                        <div className="inputBox">
                            <div className="input-label">Examined date</div>
                            <input type='date' className='input-modal' placeholder='Enter Age of pateint' />
                        </div>

                     </div>  

                     <div className="inputRowModal">
                        <div className="inputBox">
                            <div className="input-label">Selected test</div>
                            <select className='input-modal'>
                                <option>test1</option>
                                <option>test2</option>
                            </select>
                            
                        </div>
                        <div className="inputBox">
                            <div className="input-label">Report Date</div>
                            <input type='date' className='input-modal' placeholder='Enter Age of pateint' />
                        </div>

                     </div>  
                     <div className="btnDivModal">
                        <div className="submit-modal">Submit</div>
                        <div className="submit-modal">Clear</div>
                     </div>
                       
                </div>
            </div>
        </div>
  )
}

export default Modal