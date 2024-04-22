import React, { useEffect, useRef, useState } from 'react'
import'./navbar.css';
import imgLogo from '../../assets/logo.png';
import Modal from '../Modal/modal';
const Navbar = () => {


    const[openCreate,setOpenCreate]=useState(false);
    const [clickAddTest,setClickAddTest]=useState(false);

    const ref=useRef();
    useEffect(()=>{
        const checkIfClickedOutside=(e)=>{
            if(clickAddTest && ref.current && !ref.current.contains(e.target)){
                setClickAddTest(false);
            }
        }
        document.addEventListener("mousedown",checkIfClickedOutside);
        return()=>{
            document.removeEventListener("mousedown",checkIfClickedOutside);
        }
    },[clickAddTest])

  return (
     <div className="navbar">
        <div className="leftsideNavbar">
           <img src={imgLogo} className='imglogoNavbar' alt='logo'/>
        </div>
        <div className="rightsideNavbar">
            <div className="linksRightNavbar" onClick={()=>{setOpenCreate(prev=>!prev)}}>
                Create New
            </div>
            <div className="linksRightNavbar">
                Report
            </div>
            <div className="linksRightNavbar">
                <div className="navLinkAddTest" onClick={()=>{setClickAddTest(true)}}>
                    Add Test
                </div>
                {
                  clickAddTest && <div className="addtest-modal" ref={ref}>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Name</div>
                        <input type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Description</div>
                        <input type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Price</div>
                        <input type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Image Link</div>
                        <input type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Fasting</div>
                        <input type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Normal Range</div>
                        <input type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Abnormal Range</div>
                        <input type="text" />
                    </div>
                    <div className="create-addTest">Create </div>

                </div>
}
            </div>

        </div>
        {
           openCreate   &&    <Modal setOpenCreate={setOpenCreate}/>
}
     </div>
  )
}

export default Navbar