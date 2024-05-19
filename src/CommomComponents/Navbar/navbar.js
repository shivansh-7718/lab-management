import React, { useEffect, useRef, useState } from 'react'
import'./navbar.css';
import imgLogo from '../../assets/logog.png';
import imgName from '../../assets/name.png';
import Modal from '../Modal/modal';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Navbar = () => {


    const[openCreate,setOpenCreate]=useState(false);
    const [clickAddTest,setClickAddTest]=useState(false);
    const [input,setInput]=useState({"name":"","description":"","price":"","imgLink":"","fasting":"","abnormalRange":"","normalRange":""});


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
    const handleInputs=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const onClickCreate=async()=>{
        await axios.post("http://localhost:8000/test/post",input).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        window.location.reload();
    }

  return (
     <div className="navbar">
        <Link to='/' className="leftsideNavbar">
           <img src={imgLogo} className='imglogoNavbar' alt='logo'/>
           
        </Link>
        <p className='nameBar'>PathoGenius</p>
        <div className="rightsideNavbar">
            <div className="linksRightNavbar" onClick={()=>{setOpenCreate(prev=>!prev)}}>
                Create New
            </div>
            <Link to='/status' className="linksRightNavbar">
                Report
            </Link>
            <div className="linksRightNavbar">
                <div className="navLinkAddTest" onClick={()=>{setClickAddTest(true)}}>
                    Add Test
                </div>
                {
                  clickAddTest && <div className="addtest-modal" ref={ref}>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Name</div>
                        <input name='name' onChange={(e)=>{handleInputs(e)}} value={input.name} type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Description</div>
                        <input name='description' onChange={(e)=>{handleInputs(e)}} value={input.description} type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Price</div>
                        <input name='price' onChange={(e)=>{handleInputs(e)}} value={input.price} type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Image Link</div>
                        <input name='imgLink' onChange={(e)=>{handleInputs(e)}} value={input.imgLink} type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Fasting</div>
                        <input name='fasting' onChange={(e)=>{handleInputs(e)}} value={input.fasting} type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Normal Range</div>
                        <input name='normalRange' onChange={(e)=>{handleInputs(e)}} value={input.normalRange} type="text" />
                    </div>
                    <div className="input-addtest-modal">
                        <div className="inputAddtestLabel">Abnormal Range</div>
                        <input name='abnormalRange' onChange={(e)=>{handleInputs(e)}} value={input.abnormalRange} type="text" />
                    </div>
                    <div className="create-addTest" onClick={onClickCreate}>Create </div>

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