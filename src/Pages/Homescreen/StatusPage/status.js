import React, { useEffect, useState } from "react";
import "./status.css";
//import UpdateIcon from '@mui/icons-material/Update';
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import ArticleIcon from "@mui/icons-material/Article";
import Modal from "../../../CommomComponents/Modal/modal";
import { Link } from "react-router-dom";
import axios from "axios";
import nodataimg from '../../../assets/nodataimg.jpeg'

const Status = () => {


  const [activeBar, setActiveBar] = useState("Pending");
  const [data, setData] = useState([]);
  const[clickedUpdate,setClickedUpdate]=useState(false);
  const[clickedPateint,setClickedpat]=useState(null);

  useEffect(()=>{
    fetchElement();
  },[activeBar]);

  const fetchElement=async()=>{
    await axios.get(`http://localhost:8000/patient/getStatus/${activeBar}`).then(res=>{
      setData(res.data.data);
    }).catch(err=>{
      console.log(err);
    })
  }

  const deletePatient=async(id)=>{
    await axios.delete(`http://localhost:8000/patient/${id}`).then(resp=>{
      console.log(resp);
      window.location.reload()
    }).catch(err=>{
      console.log(err);
    })
  }


  
  const updateIconClick=(item)=>{
    setClickedUpdate(true)
    setClickedpat(item);
  }

  return (
    
    <div className="statusPage">
      <div className="statusPageWorkDiv">
        <div className="statusBar">
          <div
            className={`statusTitle ${
              activeBar === "Pending" ? "activeBarStatus" : null
            }`}
            onClick={() => setActiveBar("Pending")}
          >
            Pending
          </div>
          <div
            className={`statusTitle ${
              activeBar === "Completed" ? "activeBarStatus" : null
            }`}
            onClick={() => setActiveBar("Completed")}
          >
            Completed
          </div>
        </div>
        <div className="statusList">
          {data &&
            data.map((item, index) => {
              return (
                <div className="statusRowList">
                  <div className="statusName">{item?.name}</div>
                  <div className="statusDrDetails">
                    <div className="statusDrName">{item?.examinedBy}</div>
                    <div className="statusDrName">{item?.reportDate}</div>
                  </div>
                  <div className="statusBtns">
                    {
                        activeBar==="Pending"? <div className="icons" onClick={()=>{updateIconClick(item)}}>
                        <UpdateIcon />
                      </div>:null
                    }
                    {
                        activeBar==="Pending"?<div className="icons" onClick={()=>deletePatient(item._id)}>
                        <DeleteIcon />
                      </div>:null
                    }
                   
                    
                    <Link to={activeBar==="Completed"?`/prescription/${item._id}`:`/report/${item._id}`} className="icons">
                      <ArticleIcon />
                    </Link>
                  </div>
                </div>
              );
            })}
            {
              data.length==0 && <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
                <img width={350} src={nodataimg}/>
              </div>
            }
        </div>
      </div>
      {
        clickedUpdate && <Modal item={clickedPateint} setOpenCreate={setClickedUpdate}/>
      }
    </div>
   
  );
};

export default Status;
