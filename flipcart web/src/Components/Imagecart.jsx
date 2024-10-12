import React, { useEffect, useState } from 'react'
import './Style/Imagecart.css';
import axios from 'axios';

function Imagecart() {
 const [state,SetState]=useState([])
    useEffect(()=>{
            abc()
    },[])

    const abc = async() => {
    
        const xyz = await axios.get('http://localhost:3001/Imagecart')
        //  console.log(xyz.data)
         SetState(xyz.data)

        

    }

  return (
    <div className='imgcart d-flex gap-5 justify-content-center mt-4 flex-wrap ' >
        
        {
            state.map((item)=>{
                return <>

                    <div  style={{display:"flex",flexDirection:"column"}} ><img style={{height:"100px",width:"100px", }} src= {item.img}alt="" />
                    <p style={{fontWeight:"bold",textAlign:"center"}}>{item.name}</p>
                    </div>

                </>
            })
        }
  

    </div>
  )
}

export default Imagecart
