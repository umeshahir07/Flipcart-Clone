import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DECaction, Incaction, REMOVEaction } from './Action';
import { Link } from 'react-router-dom';

function Cart() {
  const cartItem = useSelector(store => store);
  const dispatch = useDispatch();

  function Inc(id) {
    dispatch(Incaction(id));
  }

  function Dec(id) {
    dispatch(DECaction(id));
  }

  function Remove(id) {
    dispatch(REMOVEaction(id));
    
  }

  const totalprice = cartItem.reduce((total, item) => total + parseInt(item.price )* item.qty, 0)


  


  return (
    <div className="container mx-auto p-4">
      {cartItem.map(item => {
        return (
          <div key={item.id} className="flex   flex-col items-center mb-8 lg:flex-row lg:justify-center">
            <section className="overflow-hidden  w-full lg:w-4/5">
              <div className="mx-auto  flex flex-col lg:flex-row items-center">
                <img
                  alt={item.name}
                  className="w-full lg:w-1/2 h-64 lg:h-96 rounded object-cover"
                  src={item.img}
                />
                <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                  <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                    Shoes
                  </h2>
                  <h1 className="my-4 text-3xl font-semibold text-black">{item.name}</h1>
                  <div className="my-4 flex items-center">
                    <span className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                      <span className="ml-3 inline-block text-xs font-semibold">
                        4 Reviews
                      </span>
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem
                    amet repudiandae neque adipisci eum enim, natus illo inventore totam?
                  </p>
                  <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                    <div className="flex items-center">
                      <span className="mr-3 text-sm font-semibold">Color</span>
                      <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                      <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                      <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                    </div>
                    <div className="ml-auto flex items-center">
                      <span className="mr-3 text-md font-semibold">{item.dis}</span>
                      <div className="relative">
                        <p><s>{item.mrp}</s></p>
                        <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-down"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                    <span className="title-font text-xl font-bold text-gray-900">
                    ₹ {item.price}
                    </span>
                    <div className="flex items-center mt-4 lg:mt-0">
                      <button
                        onClick={() => Dec(item.id)}
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        -
                      </button>
                      <p className="mx-4 text-xl font-bold">{item.qty}</p>
                      <button
                        onClick={() => Inc(item.id)}
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        +
                      </button>
                      <button
                        onClick={() => Remove(item.id)}
                        type="button"
                        className="ml-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>
              </div>
            </section>

          </div>
        );
      })}
      <div className='justify-content-center d-flex gap-5'>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>Total Price :{totalprice}</h2>
        <Link to="/form">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
