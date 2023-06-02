import { Users } from "@/services";
import {
	CheckCircleFilled,
	CloseOutlined,
	DeleteFilled,
	EditFilled,
} from "@ant-design/icons";
import { Breadcrumb, Input, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function UserProfileViews() {
	const [isEdit, setEdit] = useState(false);
	const [isRePassword, setRePassword] = useState(false);

	const [newPassword, setNewPassword] = useState("");
	const [oldPassword, setOldPassword] = useState("");

	const router = useRouter();

	const [data, setData] = useState({
		fullName: "",
		username: "",
	});

	const [updatedData, _setUpdatedData] = useState({
		fullName: "",
		username: "",
	});

	const setUpdatedData = (label: string, value: string) => {
		_setUpdatedData({
			...updatedData,
			[label]: value,
		});
	};

	const handleUpdateProfile = async () => {
		Users.updateUserProfiles({
			isNotify: true,
			data: {
				fullName: updatedData.fullName,
				username: updatedData.username,
			},
		}).then((res) => {
			if (!res) return;
			setData(res.data);
			_setUpdatedData(res.data);
			router.reload();
		});
	};

	const handleUpdatePassword = async () => {
		Users.updateUserPassword({
			isNotify: true,
			data: {
				newPassword,
				oldPassword,
			},
		}).then((res) => {
			if (!res) return;
			setNewPassword("");
			setOldPassword("");
			setRePassword(false);
		});
	};

	useEffect(() => {
		Users.getUserProfiles({ isNotify: false }).then((res) => {
			setData(res.data);
			_setUpdatedData(res.data);
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
						title: "Profile",
					},
				]}
			/>
			<div className="flex flex-col shadow-xl rounded-xl w-1/2 m-auto p-4">
				<div className="flex flex-row items-center justify-between gap-4 mb-8">
					<h3 className="text-2xl font-bold">Profil Anda</h3>
					{isEdit ? (
						<div className="flex-row flex">
							<button
								onClick={() => {
									_setUpdatedData(data);
									setEdit(false);
								}}
								className="px-2 py-1 rounded-xl bg-red-500 flex flex-row gap-4 items-center text-white"
							>
								<p>Batal</p> <CloseOutlined />
							</button>
							<button
								onClick={() => handleUpdateProfile()}
								className="px-2 py-1 rounded-xl bg-green-500 flex flex-row gap-4 items-center text-white"
							>
								<p>Selesai</p> <CheckCircleFilled />
							</button>
						</div>
					) : (
						<button
							onClick={() => setEdit(true)}
							className="px-2 py-1 rounded-xl bg-blue-500 flex flex-row gap-4 items-center text-white"
						>
							<p>Sunting</p> <EditFilled />
						</button>
					)}
				</div>
				<div>
					<p>Nama</p>
					{isEdit ? (
						<Input
							onChange={(text) => setUpdatedData("fullName", text.target.value)}
							value={updatedData?.fullName}
						/>
					) : (
						<p className="text-2xl font-semibold">{data.fullName}</p>
					)}
				</div>
				<div>
					<p>Username</p>
					{isEdit ? (
						<Input
							onChange={(text) => setUpdatedData("username", text.target.value)}
							value={updatedData?.username}
						/>
					) : (
						<p className="text-2xl font-semibold">{data.username}</p>
					)}
				</div>
			</div>
			<div className="flex flex-col shadow-xl rounded-xl w-1/2 m-auto p-4">
				<div className="flex flex-row items-center justify-between gap-4">
					<h3 className="text-2xl font-bold">Ubah Sandi Akun</h3>
					{isRePassword ? (
						<div className="flex-row flex">
							<button
								onClick={() => setRePassword(false)}
								className="px-2 py-1 rounded-xl bg-red-500 flex flex-row gap-4 items-center text-white"
							>
								<p>Batal</p> <CloseOutlined />
							</button>
							<button
								onClick={() => handleUpdatePassword()}
								className="px-2 py-1 rounded-xl bg-green-500 flex flex-row gap-4 items-center text-white"
							>
								<p>Selesai</p> <CheckCircleFilled />
							</button>
						</div>
					) : (
						<button
							onClick={() => setRePassword(true)}
							className="px-2 py-1 rounded-xl bg-blue-500 flex flex-row gap-4 items-center text-white"
						>
							<p>Sunting</p> <EditFilled />
						</button>
					)}
				</div>
				{isRePassword && (
					<div className="mt-8">
						<p>Password Lama</p>
						<Input.Password
							value={oldPassword}
							onChange={(text) => setOldPassword(text.target.value)}
						/>
					</div>
				)}
				{isRePassword && (
					<div>
						<p>Password Baru</p>
						<Input.Password
							value={newPassword}
							onChange={(text) => setNewPassword(text.target.value)}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default UserProfileViews;
