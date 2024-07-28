import React from "react";
import "../../css/about-css/dev.css";
import pc from "../../images/pc.svg";
import Sline from "../svg-componets/Sline";

function Development() {
	return (
		<div className='devStageContainer | max-width-container flex justify-center mt-20'>
			<div className='pc-container | relative'>
				<img
					src={pc}
					alt=''
					className='relative'
				/>
				<div className='devContent | absolute top-[10%] w-[80%] right-[10%]'>
					<h1 className='underline text-lg'>Development Stage</h1>
					<p className='font-[poppins] text-xs'>
						Our development stage focuses on transforming innovative
						ideas into functional solutions. This involves rigorous
						planning, coding, and testing to ensure the highest
						quality. Our dedicated team works tirelessly to bring
						the best features and performance to our platform.
					</p>
				</div>
				<div className='sline | hidden absolute top-[80%] left-[10%] w-[20px]'>
					<Sline />
				</div>
			</div>
		</div>
	);
}

export default Development;

