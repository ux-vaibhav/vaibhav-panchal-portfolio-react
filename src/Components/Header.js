import React, {useState, useEffect} from 'react';
import { FiSun,FiMoon } from "react-icons/fi";

export default function Header(props) {
  	
	const [menuOpen, setmenuOpen] = useState(true);
	const now = new Date();
	const hour = now.getHours();
	const isThemeSet = localStorage.getItem('dark');
	const currentTheme = localStorage.getItem('dark')==='true'?true:false;
	console.log('currentTheme',currentTheme);
	const [theme, settheme] = useState(currentTheme);
	
	const body = document.querySelector('body');
	
	const menuToggle = () =>{
		setmenuOpen(!menuOpen);
		props.setMenu(menuOpen);
	}
	
	const themeToggle = () => {
		settheme(!theme)
		body.toggleAttribute('data-theme-dark');
		localStorage.setItem('dark',!theme);
	}

	useEffect(() => {
		console.log('Header UseEffect');
		if(isThemeSet == null){
			if (hour > 4 && hour < 18)
			{
				localStorage.setItem('dark',false);
				body.removeAttribute('data-theme-dark');
				settheme(false);
			}else{
				localStorage.setItem('dark',true);	
				body.setAttribute('data-theme-dark',true);
				settheme(true);
			}
		}else{
			if(!theme){
				localStorage.setItem('dark',false);
				body.removeAttribute('data-theme-dark');
			}else{
				localStorage.setItem('dark',true);	
				body.setAttribute('data-theme-dark',true);
			}
	  }	
	},[])

	return (
		<header className={props.scroll?'active':null}>
			<div className={!menuOpen?'action active':'action'}>
				<div className="menu-ico" onClick={menuToggle}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="theme-change" onClick={themeToggle}>
					{theme?<FiSun/>:<FiMoon/>}
				</div>
			</div>
			<nav className={!menuOpen?'active':null}>
				<ul>
					<li><a href="#home" onClick={menuToggle}>Home</a></li>
					<li><a href="#experience" onClick={menuToggle}>Experience</a></li>
					<li><a href="#respo" onClick={menuToggle}>RESPONSIBILITIES</a></li>
					<li><a href="#testimonial" onClick={menuToggle}>Testimonial</a></li>
					<li><a href="#contact" onClick={menuToggle}>Contact</a></li>
				</ul>
			</nav>
		</header>
	)
}

