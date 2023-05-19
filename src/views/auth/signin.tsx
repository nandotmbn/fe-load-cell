/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Input } from "antd";
import cookiesHandler from "@/utils/storage/cookies";
import { Auth } from "@/services";
import { LoadingOutlined } from "@ant-design/icons";

interface ILogin {
	username: string;
	password: string;
}

function LoginViews() {
	const router = useRouter();
	const [refresher, refresherOrb] = useState(0);
	const [isLoading, setLoading] = useState(false);
	const [data, _setData] = useState<ILogin>({
		username: "",
		password: "",
	});

	const setData = (label: string, value: any) => {
		_setData({
			...data,
			[label]: value,
		});
	};

	const handleLogin = async () => {
		setLoading(true);
		Auth.login({ data: data, isNotify: true })
			.then((result) => {
				cookiesHandler.setCookie("access_token", result.data.access_token, 1);
				refresherOrb(refresher + 1);
			})
			.catch((error) => {
				refresherOrb(refresher + 1);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		if (cookiesHandler.getCookie("access_token")) router.replace("/admin");
	}, [refresher, refresherOrb]);
	return (
		<div className="flex flex-col items-center justify-center w-full py-4">
			<div className="w-96 pb-16 bg-blue-700 rounded-xl text-white shadow-xl flex flex-col p-4 my-8">
				<h2 className="text-center font-bold text-xl">Masuk</h2>
				<div className="mt-4">
					<div>
						<label htmlFor="username">E-mail/Username</label>
						<Input
							id="username"
							name="username"
							onChange={(text) => setData("username", text.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<Input.Password
							id="password"
							name="password"
							onChange={(text) => setData("password", text.target.value)}
						/>
					</div>
					<button
						onClick={handleLogin}
						className=" my-2 px-4 py-1 rounded bg-gray-800 text-gray-100 w-full"
					>
						{isLoading ? <LoadingOutlined /> : "Masuk"}
					</button>
					<p className="text-blue-300 mt-8">
						Belum punya akun?{" "}
						<Link href="/auth/signup">
							<span className="text-white">Daftar</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default LoginViews;
