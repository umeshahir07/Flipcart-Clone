import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Style/Productpage.css';


function Productpage() {

  const [state, setState] = useState([])



  const abc = async () => {
    const xyz = await axios.get("http://localhost:3001/productpage")
    setState(xyz.data)
  }


  useEffect(() => {
    abc()
  }, [])

  return (


    <div className='mt-3 ' >

      <div className='container'>
        <h3><b className='fs-3'>Top Deals On Fashion</b></h3>
      </div>

      <div className="d-flex mt-4 flex-wrap gap-3 justify-content-center">

        {

          state.map((item) => {
            return <>

              <Link className='link' to={`/alldata/${item.category}`}> <div style={{ textDecoration: "none", color: "black" }} className=' '>

                <div  className='shrink card'  style={{ width: "13rem" }} >
                  <img  style={{ height: "200px", width: "100%", objectFit: "cover", objectPosition: "top" }} src={item.img} class="card-img-top  " alt="..." />
                  <div class="card-body">
                    <p class="card-text fw-bold">{item.name}</p>
                    <p style={{color:"green"}} class="card-text fw-bold" >{item.Discount}</p>
                  </div>
                </div>
              </div></Link>


            </>



          })
        }

      </div>
    </div>
  )


}

export default Productpage
