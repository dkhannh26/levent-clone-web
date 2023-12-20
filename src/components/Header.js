import '../assets/Header.scss'
import { Link, NavLink } from 'react-router-dom';
import { BellOutlined,ShoppingOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import  vn  from '../img/header/Flag_of_Vietnam.svg.png'
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
                    <img className="VN" src={vn}
                        alt=""/>
                </div>
            
                <div className="center">
                    <div className="col-4 logo">
                        <NavLink to="/home">DOTAI</NavLink>
                    </div>
                </div>
                
                <div className="col-4 home-menu end">
                    <BellOutlined />
                    <input type="text" placeholder="Search"/> 
                    <ShoppingOutlined />
                    <SearchOutlined />
                    <UserOutlined />

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

