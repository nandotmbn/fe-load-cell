import { Users } from "@/services";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function HeaderAdministratorLayout() {
	const [data, setData] = useState({
		fullName: "",
		username: "",
	});

	useEffect(() => {
		Users.getUserProfiles({ isNotify: false }).then((res) => {
			setData(res.data);
		});
	}, []);
	return (
		<header
			id="header"
			className="flex flex-row flex-1 px-4 py-2 gap-2 items-center justify-between"
		>
			<Link href="/">
				<Image
					className="cursor-pointer inline flex-2"
					src="/images/long-logo-invert.png"
					alt="Logo PENS"
					width={200}
					height={1280}
					unoptimized={true}
				/>
			</Link>
			<div
				// size="large"
				// placeholder="Cari di Administrator"
				// onSearch={(text: string) => {
				// 	console.log(text);
				// }}
				className="flex-10 ml-8"
			/>
			<div className="flex-3 flex flex-col items-end h-16 justify-end">
				<div className="h-16 w-full flex flex-row justify-end items-center gap-2">
					<UserOutlined className="text-base md:text-4xl" />
					<div className="flex flex-col">
						<p className="text-sm hidden lg:flex">{data.fullName}</p>
						<p className="text-gray-500 text-xs">{data.username}</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default HeaderAdministratorLayout;
