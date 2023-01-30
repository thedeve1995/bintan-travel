import './App.css';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

  function navbar(){
    let nav= document.getElementById('nav');
    let window = document.getElementById('window');
    let menu = document.getElementById('menu');
    let close = document.getElementById('close');

    nav.style.display = "grid"
    window.style.height= "28vh"
    menu.style.display = "none"
    close.style.display = "block"
  }
  function close(){
    let nav= document.getElementById('nav');
    let window = document.getElementById('window');
    let menu = document.getElementById('menu');
    let close = document.getElementById('close');

    nav.style.display = "none"
    menu.style.display = "block"
    close.style.display = "none"
    window.style.height= "6vh"
  }
  
  return (
    <div className='Header'>
      <div className="nav" id='window'>
          <Link to="/">
            <a className='logo' href='#'> <i className='fa-brands fa-pagelines'></i> Bintan Travel</a>
          </Link>
          <ul className='hide' id='nav'>
            <li><a href='#'>Home</a></li>
            <li><a href='#page3'>Testimonials</a></li>
            <li><a href='#videopage'>Video</a></li>
            <li><a href='#'>Package</a></li>
            <li><a href='#'>Profile</a></li>
            
          </ul>
          <a onClick={navbar} className='menu' id='menu'><i class="fa-solid fa-bars"></i></a>
          <a onClick={close} className='menu' id='close'>X</a>
          <div className='login-btn'>

            <Link to={!user && '/login'}>
              <div onClick={handleAuthenticaton} className='user-ui'>
                <h4>Hello, {!user ? 'Guest' : user.email.slice(0,9)}</h4>
                <p>{user ? 'Sign Out' : 'Sign In'}</p>
              </div>
            </Link>
            <Link to="/checkout">
            <span className='cart'>
              <i class="fa-solid fa-cart-flatbed-suitcase"></i>
              <sup>{basket?.length}</sup>
            </span>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Header;
