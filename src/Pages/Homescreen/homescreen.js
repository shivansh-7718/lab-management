import React, { useEffect,useState} from 'react'
import './homescreen.css';
import LabPic from '../../assets/labfile.png';
import data from './data.json';


const Homescreen = () => {
    const [listOfTest,setListOfTest]=useState([]);
    const [activeIndexNav,setActiveIndexNav]= useState(0);
    const [selectedDetailedTest,setSelectedDetailedtest]= useState(null);
    console.log(listOfTest);


    useEffect(()=>{
        setListOfTest(data.data)
        setSelectedDetailedtest(data.data[0])
    },{})


    const handleClickNavLink= (index) =>{
        setActiveIndexNav(index)
        setSelectedDetailedtest(data.data[index]);

    }
     const[openCreate,setOpenCreate]=useState(false);



  return (
    <div className="homescreen">
        <div className="introHomeScreen">
            <div className="imgHomeScreenLog">
                <div className="imgDiv">
                   <img className='labLogoHomeScreen' src={LabPic} alt='labpic'/>
                </div>
                <div className="introPart">
                    <div className="titlemini">Enterprise Limited</div>
                    <div className="titleMajor">Pathology Management System</div>
                    <div className="description1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate impedit illum explicabo nihil? Harum voluptates incidunt earum rem quasi. Asperiores quae enim, eos officiis consequuntur doloribus fugiat animi nobis optio vel dignissimos aut unde, quam minus repellendus assumenda tenetur corrupti tempora. Suscipit doloribus dicta sunt? Ad quas facere quo.
                    </div>
                    <div className="description2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, laudantium qui, minus minima molestias eaque consectetur temporibus consequatur odit quae doloribus alias quos! Sunt culpa tenetur praesentium ullam necessitatibus recusandae voluptate aliquid saepe repellendus aperiam, quidem accusamus illo repudiandae itaque, at unde nemo in delectus et. Ipsam facere minus laborum.
                    </div>
                    <div className="topBtnsDiv">
                        <div className="btns-div" onClick={()=>{setOpenCreate(prev=>!prev)}}>
                            Create
                        </div>
                        <div className="btns-div">
                            Contact
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="testHomeScreen">
            <div className="leftPartTest">
                <div className="totalTest">4 Test Available</div>
                <div className="testNameDiv">
                    {
                        listOfTest?.map((item,index)=>{
                            return(
                                <div onClick={()=>{handleClickNavLink(index)}} className={`testNameTitle ${activeIndexNav===index?"activeNavLink": null}`}>{item.name}</div>
                            );
                        })
                    }
        
                </div>
            </div>
            <div className="rightPartTest">
                <div className="topRightPart">
                    {selectedDetailedTest?.name}
                </div>
                <div className="bottomRightPart">
                    <div className="topBottomRightPart">
                        {selectedDetailedTest?.description}
                    </div>
                    <div className="bottomBottomRightPart">
                        <div className="bBRightPartLeftSide">
                            {
                                selectedDetailedTest?.requirements.map((item,index)=>{
                                    return(
                                        <div className="detailsBlock">
                                            {item.key}: <span className='spanColrChange'>{item.value}</span>
                                         </div>
                                    );
                                })
                            }
                            
                        </div>
                        <div className="bBRightPartRightSide">
                            <img src={selectedDetailedTest?.imgLink} alt="log" className='bBRightImage' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contactHomeScreen">
            <div className="contactFormTitle" id='contact'>Contact Us</div>
            <div className="conatctForm">
                <div className="inputFields">
                    <input type="email" className='inputFieldsBox' placeholder='Enter your email id' />
                    <input type="text" className='inputFieldsBox' placeholder='Enter your Name' />
                    <input type="number" className='inputFieldsBox' placeholder='Enter your Phone Number' />
                    <textarea type="textbox" className='inputTextareaMessage' placeholder='Type your query...'  rows={10}/>

                </div>
                <div className="sendEmailButton">
                    Send
                </div>
            </div>
        </div>  
        {
           openCreate   &&    <div className="modal">
            <div className="modal-card">
                <div className="modal-titlebox">
                    <div className="modal-title">Create New</div>
                    <div className="x-btn" onClick={()=>{setOpenCreate(prev=>!prev)}}>X</div>
                </div>
            </div>
        </div>
}
    </div>
  )
}

export default Homescreen