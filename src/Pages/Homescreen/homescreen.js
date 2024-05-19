import React, { useEffect,useState} from 'react'
import './homescreen.css';
import LabPic from '../../assets/labfile.png';
import data from './data.json';
import Footer from '../../CommomComponents/Footer/footer';
import Modal from '../../CommomComponents/Modal/modal';
import axios from 'axios';


const Homescreen = () => {
    const [listOfTest,setListOfTest]=useState([]);
    const [activeIndexNav,setActiveIndexNav]= useState(0);
    const [selectedDetailedTest,setSelectedDetailedtest]= useState(null);
    console.log(listOfTest);
    const [clickAddTest,setClickAddTest]=useState(false);


    useEffect(()=>{
       fetchDataOnLoading();
       
      // console.log(selectedDetailedTest)
    },[])

    const fetchDataOnLoading= async()=>{
        await axios.get('http://localhost:8000/test/get').then(response =>{
           const data=response.data.data;
           setListOfTest(data);
           setSelectedDetailedtest(data[0]);
          }).catch(err=>{
            console.log(err);
          })
    }

    console.log(selectedDetailedTest)


    const handleClickNavLink= (index) =>{
        setActiveIndexNav(index)
        setSelectedDetailedtest(listOfTest[index]);

    }
     const[openCreate,setOpenCreate]=useState(false);
     const handleClosePopup=(val)=>{
        setClickAddTest(val)
     }



  return (
    <div className="homescreen">
        <div className="introHomeScreen">
            <div className="imgHomeScreenLog">
                <div className="imgDiv">
                   <img className='labLogoHomeScreen' src={LabPic} alt='labpic'/>
                </div>
                <div className="introPart">
                    <div className="titlemini">PathoGenius Diagnostics</div>
                    <div className="titleMajor">Pathology Management System</div>
                    <div className="description1">
                    The foundation for successful modern laboratories is a comprehensive lab operations management plan.This enables building and effectively executing an operating philosphy,leading to consistently meeting your scientific and buisness goals. Finding the partner who best helps your organisation develop and execute this plan-from current operations to future strategies- will enable you to achieve the success. 
                    </div>
                    <div className="description2">
                    Our asset management programs bring over 40 years of experience in day-to-day lab operations.We can guide you on the journey to advance lab performance and elevate scientific productivity. Using a proven set of methodologies,products and services with a focus on continuous innovations, together we can simplify,optimize and transform your lab.
                    </div>
                    <div className="topBtnsDiv">
                        <div className="btns-div" onClick={()=>setClickAddTest(true)}>
                            Create
                        </div>
                        <div className="btns-div">
                            <a style={{textDecoration:"none", color:"black"}} href='#contact'>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="testHomeScreen">
            <div className="leftPartTest">
                <div className="totalTest">{listOfTest?.length} Test Available</div>
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
                            
                                <div className="detailsBlock">
                                {"Fasting"}: <span className='spanColrChange'>{selectedDetailedTest?.fasting}</span>
                                </div>
                                <div className="detailsBlock">
                                {"Abnormal Range"}: <span className='spanColrChange'>{selectedDetailedTest?.abnormalRange}</span>
                                </div>
                                <div className="detailsBlock">
                                {"Normal Range"}: <span className='spanColrChange'>{selectedDetailedTest?.normalRange}</span>
                                </div>
                                <div className="detailsBlock">
                                {"Price"}: <span className='spanColrChange'>{selectedDetailedTest?.price}</span>
                                </div>
                            
                            
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
            
}
<Footer/>
{
    clickAddTest && <Modal setOpenCreate={handleClosePopup}/>
}

    </div>
  )
}

export default Homescreen