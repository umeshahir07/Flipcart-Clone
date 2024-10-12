
import './Style/Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";




function Navbar() {
    const cartItem = useSelector(store => store);

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
   
     
    

    return (
        <div>
            <div className="main d-flex">
                <Link to="/"> <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Logo" /></Link>
                <div  className='search'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input  className='input' type="text" placeholder='search products, brands and more' />
                </div>


                {
                    isAuthenticated ? (
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >
                            Log Out
                        </button>
                    ) : (

                        <div className='btn1'>
                            <i className="fa-solid fa-user"></i>
                            <button onClick={() => loginWithRedirect()} style={{ width: "100px", marginLeft: "-15px", border: "none", fontWeight: "bolder", background: "none" }}>Log In</button>
                        </div>
                    )
                }





                <div className='btn d-flex gap-5'>

                    <div className='btn2  '>

                        <i className="fa-solid fa-cart-shopping "></i>
                        <Link to={"/Cart"} style={{ width: "100px", border: "none", fontWeight: "bolder", background: "none" }}>Cart
                            <span class="position-absolute  start-70 translate-middle badge rounded-pill bg-danger"
                                style={{ top: "13px" }}>
                                {cartItem.length}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </Link>
                    </div>
                    <div className='btn3'>
                        <i className="fa-solid fa-shop"></i>
                        <button style={{ width: "150px", marginLeft: "-15px", border: "none", fontWeight: "bolder", background: "none" }}>Become a Seller</button>
                    </div>
                </div>
                <i style={{ padding: "12px" }} className="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    );
}

export default Navbar;
