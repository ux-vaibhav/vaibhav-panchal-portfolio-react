import React, {useState, useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Experience from './Experience';
import TechnicalSkills from './TechnicalSkills';
import Responsibilities from './Responsibilities';
import Activities from './Activities';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Loader from './Loader';
import TwoColumn from './TwoColumn';
import Hobby from './Hobby';

export default function Main() {
     const [menuActive,SetMenuActive] = useState(false);
	 const [loader, setloader] = useState(true)
	 const [scroll, setscroll] = useState(false)
	 const [scrollperc, setscrollperc] = useState(0)
	 const openMenu = (MenuStatus) =>{
		 SetMenuActive(MenuStatus)
	 }

	 
	 const listenScrollEvent = e => {
	 let windowHeight = document.body.scrollHeight;
	 let scrollPercentage = Math.round((window.scrollY / windowHeight) * 130);
	 setscrollperc(scrollPercentage+'%');
	 if (window.scrollY > 400) {
			setscroll(true);
		} else {
			setscroll(false);
		}
	  }

	 useEffect(() => {
		setTimeout(() => {
		setloader(false)
		}, 2000);
	 },[])

	 useEffect(() => {
		window.addEventListener('scroll',listenScrollEvent)
	 },[scroll])
	 
	return (
		<div className={menuActive?'overflow': null}>
			<div className="progress" style={{width:scrollperc}}></div>
			<Header setMenu={ openMenu } scroll={scroll}/>
			<main className={menuActive?'menu-active': null}>
				<Home />
				<TwoColumn>
					<Experience />
					<TechnicalSkills />
				</TwoColumn>
				<TwoColumn>
					<Responsibilities />
					<Activities />
				</TwoColumn>
				<Testimonial />
				<Hobby/>
				<Contact/>
				<Loader loader={loader}/>
			</main>
		</div>
	)
}
