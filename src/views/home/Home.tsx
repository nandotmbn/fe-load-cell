import React, { useState } from "react";
import HomeJumbotron from "./partials/Jumbotron";

function HomeViews() {
	const [searchText, setSearchText] = useState("");
	return (
		<div className={`w-full flex flex-col`}>
			<HomeJumbotron />
		</div>
	);
}

export default HomeViews;
