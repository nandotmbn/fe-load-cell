import { Users } from "@/services";
import { Breadcrumb, Input } from "antd";
import React, { useEffect, useState } from "react";

function UserAccessViews() {
	const [data, setData] = useState({
		fullName: "",
		username: "",
		apiKey: "",
	});

	const handleUpdateApiKey = async () => {
		Users.updateUserApikey({
			isNotify: true,
		}).then((res) => {
			if (!res) return;
			setData(res.data)
		});
	};

	useEffect(() => {
		Users.getUserProfiles({ isNotify: false }).then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<div className="h-full">
			<Breadcrumb
				items={[
					{
						title: "Pengguna",
					},
					{
						title: "Akses",
					},
				]}
			/>
			<div className="flex flex-col shadow-xl rounded-xl w-1/2 m-auto p-4">
				<div className="flex flex-row items-center justify-between gap-4 mb-8">
					<h3 className="text-2xl font-bold">Akses API Key Anda</h3>
				</div>
				<div className="w-full">
					<p>API Key</p>
					<div className="flex flex-row w-full justify-between">
						<p className="text-4xl font-semibold">{data.apiKey}</p>
						<button onClick={handleUpdateApiKey} className="w-44 py-1 rounded-xl bg-blue-700 text-white">Hash</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserAccessViews;
