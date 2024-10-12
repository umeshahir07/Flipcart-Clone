import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function Alldata() {

  const { category } = useParams();


  const [data, setData] = useState([]); 

  const [state, setState] = useState("asc");


  const abc = async () => {
    const xyz = await axios.get(`http://localhost:3001/${category}`)
    console.log(xyz.data)
    setData(xyz.data)

  }

  useEffect(() => {
    abc()
  }, [category])

  function handlesorting(e) {
    setState(e.target.value)

  }
  const sortproduct = [...data].sort((a, b) => {
    if (state === "asc") {
      return a.price - b.price;
    }
    else { return b.price - a.price }
  })

  return (<>


    <h1 style={{ fontSize: "2rem", padding: "20px" }}>All Items</h1>

    <div>
        <select className='fs-5 ms-5 ' id="sort" value={state} onChange={handlesorting}>

          <option value="asc">low to high</option>
          <option value="desc">high to low</option>


        </select>
      </div>

    <div  className='d-flex mt-4 flex-wrap gap-3 justify-content-center '>

      

      {
        sortproduct.map((item) => {
          return <>
            <div  className=''>
              <div className='shrink card' style={{ width: "15rem" }} >
                <Link to={`/alldata/${category}/${item.id}`}>
                  <img style={{ height: "250px", width: "100%", objectFit: "cover", objectPosition: "top" }} src={item.img} class="card-img-top " alt="..." />
                </Link>
                <div class="card-body">
                  <p class="card-text fw-bold">{item.name}</p>
                  <div className='d-flex gap-3 '>
                    <p><b> ₹{item.price}</b></p>
                    <s style={{ color: "grey" }}>{item.mrp}</s>
                    <p style={{ color: "#145A32" }}>{item.dis}</p>
                    <p style={{ color: "#145A32" }}>{item.rating}</p>

                  </div>

                </div>
              </div>
            </div>
          </>
        })
      }


    </div>
  </>
  )
}

export default Alldata
