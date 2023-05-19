import Image from "next/image";
import React, { useState } from "react";
import Announcements from "./partials/Announcements";
import HomeJumbotron from "./partials/Jumbotron";
import News from "./partials/News";
import Videotron from "./partials/Videotron";

function HomeViews() {
	const [searchText, setSearchText] = useState("");
	return (
		<div className={`w-full flex flex-col`}>
			{/* <HomeJumbotron />
			<Announcements />
			<div className="relative">
				<div className="absolute right-0 -top-2">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_3.png"
						alt="Jumbotron PENS"
						width={120}
						height={1}
					/>
				</div>
			</div>
			<News />
			<div className="relative">
				<div className="absolute right-0 -top-44">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_4.png"
						alt="Jumbotron PENS"
						width={50}
						height={1}
					/>
				</div>
			</div>
			<Videotron /> */}
		</div>
	);
}

export default HomeViews;
