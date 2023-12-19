import '../assets/Header.scss'
import { Link, NavLink } from 'react-router-dom';
export default function Header() {
    window.addEventListener( "scroll", function(){
        var menu = this.document.querySelector('.menu')
      
     
		var chieucao = this.window.scrollY;
		if(chieucao >= 10 ){
			menu.style.height = `0px`
            menu.style.visibility = `hidden`
            menu.style.fontSize = `0px`
           
            
        } else {
           menu.style.height= "46.33px";
           menu.style.visibility = `visible`
           menu.style.fontSize = `16px`
          
           
           
        }
    }
    ) 
    return <>
        
        <div className='header' >
            <div className='top'>
                <h3>RELEASE OFFICIAL DOTAI® CLASSIC NEW PRODUCT LINE 2023 </h3>
            </div>

             {/* thanh tiêu đề */}

            <div className="home">
                <div className="start">
                <img className="VN" src="https://levents.asia/template/assets/images/svg/ic-vn.svg"
                        alt=""/>
                </div>
            
                <div className="center">
                    <div className="col-4 logo">
                        <NavLink to="/home">DOTAI</NavLink>
                    </div>
                </div>
                
                <div className="col-4 home-menu end">
                    <img src="https://levents.asia/template/assets/images/notification.png" alt="bell"/>
                    <input type="text" placeholder="Search"/> 
                    <img src="https://levents.asia/template/assets/images/svg/ic-ser.svg" alt="search"/>
                    <a href=""><img src="https://levents.asia/template/assets/images/svg/ic-cart.svg" alt="cart"/></a>
                    <a href=""><img  src="https://levents.asia/template/assets/images/svg/ic-user.svg" alt="user"/></a><br/>

                </div>
            </div>


             {/* thanh menu */}
            <div className="menu">
                <ul>
                    <li><NavLink to="/aboutus">About Us</NavLink></li>
                    <li><NavLink to="/product">Products</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/customer">Customer Service</NavLink></li>
                    <li><NavLink to="/recruitment">Recruitment</NavLink></li>
                </ul>
            </div>
        </div>
        <div className='mg'></div>
        </>
}

