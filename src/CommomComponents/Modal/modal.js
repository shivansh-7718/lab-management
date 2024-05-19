import React ,{useEffect, useState}from 'react'
import './modal.css';
import axios from 'axios';


const Modal = ({setOpenCreate,item}) => {

    const [input,setInput]=useState({"name":item?item.name:"","age":item?item.age:"","address":item?item.address:"","mobileNo":item?item.mobileNo:"","examinedBy":item?item.examinedBy:"","examinedDate":item?item.examinedDate:"","test":item?item.test:"","reportDate":item?item.reportDate:""});
    const handleInputs=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
     const[listOfTest,setListOfTest]=useState([])
      useEffect(()=>{
          handleSelectOption();
      },[])

        const handleSelectOption=async()=>{
           await axios.get('http://localhost:8000/test/get').then(response =>{
               const data=response.data.data;
              setListOfTest(data);
              if(!item){
                setInput({...input,test:data[0]._id})
              }else{
                setInput({...input,test:item?.test})
              }
              
        }).catch(err=>{
            
           console.log(err);
       })

    
      }

      const handleCreateNew=async()=>{
        if(!item){
            await axios.post("http://localhost:8000/patient/post",input).then(resp=>{
            window.location.reload();
             }).catch(err=>{
            alert("Please fill every Deatil");
            console.log(err);
        })

        }else{
            await axios.put(`http://localhost:8000/patient/${item?._id}`,input).then(resp=>{
            window.location.reload();
        }).catch(err=>{
            alert("something went wrong");
            console.log(err);
        })
        }
        
      }

    




  return (
    <div className="modal">
            <div className="modal-card">
                <div className="modal-titlebox">
                    <div className="modal-title">{item?"Update Pateint":"Create new"}</div>
                    <div className="x-btn" onClick={()=>{setOpenCreate(prev=>!prev)}}>X</div>
                </div>
                <div className="modal-body">
                    <div className="inputRowModal">
                        <div className="inputBox">
                            <div className="input-label">Name</div>
                            <input type='text' name='name' onChange={(e)=>{handleInputs(e)}} value={input.name} className='input-modal' placeholder='Enter name of pateint' />
                        </div>
                        <div className="inputBox">
                            <div className="input-label">Age</div>
                            <input type='text' name='age' onChange={(e)=>{handleInputs(e)}} value={input.age} className='input-modal' placeholder='Enter Age of pateint' />
                        </div>

                     </div>  

                     <div className="inputRowModal">
                        <div className="inputBox">
                            <div className="input-label">Address</div>
                            <input type='text' name='address' onChange={(e)=>{handleInputs(e)}} value={input.address} className='input-modal' placeholder='Enter address of pateint' />
                        </div>
                        <div className="inputBox">
                            <div className="input-label">Mobile no.</div>
                            <input type='text' name='mobileNo' onChange={(e)=>{handleInputs(e)}} value={input.mobileNo} className='input-modal' placeholder='Enter Mobile no.' />
                        </div>

                     </div>  

                     <div className="inputRowModal">
                        <div className="inputBox">
                            <div className="input-label">Examined by</div>
                            <input type='text' name='examinedBy' onChange={(e)=>{handleInputs(e)}} value={input.examinedBy} className='input-modal' placeholder='Enter name of Doctor' />
                        </div>
                        <div className="inputBox">
                            <div className="input-label">Examined date</div>
                            <input type='date' name='examinedDate' onChange={(e)=>{handleInputs(e)}} value={input.examinedDate} className='input-modal' placeholder='Enter Age of pateint' />
                        </div>

                     </div>  

                     <div className="inputRowModal">
                        <div className="inputBox">
                            <div className="input-label">Selected test</div>
                            <select className='input-modal' name='test' value={input.test} onChange={(e)=>{handleInputs(e)}} >
                                {
                                listOfTest?.map((item,index)=>{
                                    return(
                                        <option value={`${item._id}`}>{item.name}</option>
                                    );
                                })
                               } 
                               {/* <option>Test 1</option> */}
                            </select>
                            
                        </div>
                        <div className="inputBox">
                            <div className="input-label">Report Date</div>
                            <input type='date' name='reportDate' onChange={(e)=>{handleInputs(e)}} value={input.reportDate} className='input-modal' placeholder='Enter Age of pateint' />
                        </div>

                     </div>  
                     <div className="btnDivModal">
                         <div className="submit-modal" onClick={handleCreateNew} >Submit</div> 
                        <div className="submit-modal">Clear</div>
                     </div>
                       
                </div>
            </div>
        </div>
        )                           }

export default Modal