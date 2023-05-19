import { Input } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HeaderAdministratorLayout() {
	return (
		<header
				id="header"
				className="flex flex-row flex-1 px-4 py-2 items-center justify-between"
			>
				<Image
					className="cursor-pointer inline flex-2"
					src="/images/long-logo-invert.png"
					alt="Logo PENS"
					width={200}
					height={1280}
					unoptimized={true}
				/>
				<Input.Search
					size="large"
					placeholder="Cari di Administrator"
					onSearch={(text: string) => {
						console.log(text);
					}}
					className="flex-13 mx-16"
				/>
				<div className="flex-1 flex flex-col items-end h-16 justify-center">
					<div className="h-16 flex flex-row justify-center items-center">
						<div className="w-12 h-12 rounded-full bg-red-600"></div>
					</div>
				</div>
			</header>
	);
}

export default HeaderAdministratorLayout;
