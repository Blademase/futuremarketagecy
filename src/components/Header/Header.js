import './Header.css';
import {ReactComponent as Logo} from "../images/logo.svg"
import {ReactComponent as PhoneIcon} from "../images/PhoneIcon.svg"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
function Header() {
  return (
    <div id="Header">
      <div id="BurgerMenu">
      <Link to="/BurgerMenu">
      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<circle cx="20.2303" cy="20.2303" r="19.7303" stroke="white"/>
<g opacity="0.8">
<path d="M11.5937 13.0611H29.4063C29.734 13.0611 30 12.5994 30 12.0306C30 11.4616 29.734 11 29.4063 11H11.5937C11.266 11 11 11.4617 11 12.0306C11 12.5994 11.266 13.0611 11.5937 13.0611Z" fill="white"/>
<path d="M29.4063 19.061H11.5937C11.266 19.061 11 19.5228 11 20.0916C11 20.6604 11.266 21.1221 11.5937 21.1221H29.4063C29.734 21.1221 30 20.6604 30 20.0916C30 19.5228 29.734 19.061 29.4063 19.061Z" fill="white"/>
<path d="M29.4063 27.1221H11.5937C11.266 27.1221 11 27.5838 11 28.1526C11 28.7214 11.266 29.1832 11.5937 29.1832H29.4063C29.734 29.1832 30 28.7214 30 28.1526C30 27.5838 29.734 27.1221 29.4063 27.1221Z" fill="white"/>
</g>

</svg>
</Link> 
<a href="tel:83451233445">
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20.6912" cy="20.2303" r="19.7303" stroke="white"/>
<g clip-path="url(#clip0_288_116)">
<path d="M27.7895 23.4919C26.6886 23.4919 25.6076 23.3197 24.5832 22.9812C24.0725 22.807 23.491 22.9422 23.1578 23.2817L21.1359 24.808C18.791 23.5563 17.3466 22.1124 16.112 19.7851L17.5934 17.8159C17.9783 17.4315 18.1163 16.87 17.9509 16.3432C17.611 15.3134 17.4383 14.2329 17.4383 13.1315C17.4383 12.3358 16.791 11.6885 15.9954 11.6885H12.6929C11.8973 11.6885 11.25 12.3358 11.25 13.1314C11.25 22.2514 18.6695 29.6709 27.7895 29.6709C28.5852 29.6709 29.2325 29.0236 29.2325 28.228V24.9348C29.2325 24.1392 28.5851 23.4919 27.7895 23.4919ZM28.2334 28.228C28.2334 28.4729 28.0344 28.6719 27.7895 28.6719C19.2203 28.6719 12.2491 21.7007 12.2491 13.1314C12.2491 12.8866 12.4481 12.6875 12.693 12.6875H15.9954C16.2403 12.6875 16.4393 12.8866 16.4393 13.1314C16.4393 14.3397 16.629 15.5256 17.0003 16.649C17.052 16.8149 17.01 16.9866 16.8422 17.1612L15.1251 19.4353C15.01 19.588 14.9919 19.7924 15.0783 19.9626C16.4798 22.7172 18.1827 24.4202 20.9568 25.8417C21.1256 25.9299 21.3324 25.9114 21.4856 25.7958L23.812 24.0334C23.9295 23.9158 24.1056 23.8739 24.2647 23.928C25.3959 24.3017 26.5817 24.491 27.7895 24.491C28.0344 24.491 28.2334 24.69 28.2334 24.9348V28.228Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_288_116">
<rect width="17.9825" height="17.9825" fill="white" transform="translate(11.25 11.6885)"/>
</clipPath>
</defs>
</svg>
</a>
<Routes> 
            <Route path="/BurgerMenu" element={<BurgerMenu />} /> 
</Routes>  
      </div>
        <div id="Logo">
            <Logo />
        </div>
        <div id="Menu">
        <button>Обо мне</button>
        <button>Наставничество</button>
        <button>Мероприятие</button>
        <button>Кейсы</button>
        <button>Отзывы</button>
        <button>Контакты</button>
        </div>
        <div id="PhoneIcon"> 
        <a href="tel:83451233445">
           <PhoneIcon/>
     
          <span id="PhoneNumber">8-345-123-34-45</span>
          </a>
           </div> 
        
    </div>
  );
}

export default Header;
