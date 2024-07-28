import React from "react";
import "../../css/home-css/hero.css";
import { NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Arrow from "../svg-componets/Arrow";
import HeroImage from "../svg-componets/HeroImage";
import HeroGear from "../svg-componets/HeroGear";

function Hero() {
	return (
		<div className='hero-main-container | max-width-container flex flex-col-reverse'>
			<div className='col1 | text-center mt-4'>
				<h1 className='sub-heading | hidden text-xl'>
					heyo 👋 Welcome
				</h1>
				<h2 className='text-4xl | text-white'>
					sign in now to chat, video call and collaborate in one place
				</h2>
				<p className='hidden'>
					ApniVidya provides an online learning platform where
					instructors can teach students in a virtual setup. Our
					platform enhances the educational experience by offering
					interactive tools and seamless communication.
				</p>
				<div className='cta-arrow-container | '>
					<div className='arrow-image | hidden mt-[62.5px]'>
						<AnimatePresence>
							<Arrow />
						</AnimatePresence>
					</div>
					<div>
						<button
							type='button'
							className='cta | bg-[#FFC100] min-w-[292.6px] min-h-[89.6px] border-4 text-white text-5xl rotate-[-2.14deg] mt-6 md:mt-0'>
							<NavLink to='/signup'>signup</NavLink>
						</button>
					</div>
				</div>
				<div className='gearSvg | hidden'>
					<AnimatePresence>
						<HeroGear />
					</AnimatePresence>
				</div>
			</div>
			<div className='col2 image-with-blob | '>
				<AnimatePresence>
					<HeroImage />
				</AnimatePresence>
			</div>
		</div>
	);
}
export default Hero;

