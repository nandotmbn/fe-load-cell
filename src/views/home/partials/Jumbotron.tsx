import {
	FieldTimeOutlined,
	PercentageOutlined,
	SolutionOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeJumbotron() {
	return (
		<div className="flex flex-row self-center bg-gray-200 border-b-8 border-yellow-400">
			<div className="w-full flex-2">
				<Image
					className="contain w-full relative"
					src="/images/home/scale1.png"
					alt="Jumbotron PENS"
					width={600}
					height={200}
				/>
			</div>
			<div
				className="flex-2 flex-col flex justify-center text-lg"
				style={{
					backgroundImage: `url('/logo-white.png')`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center",
				}}
			>
				<div className="relative">
					<div className="absolute right-2 w-44 h-12 bg-transparent border-t-8 border-r-8 border-yellow-400"></div>
				</div>
				<h2 className="text-6xl font-semibold">Selamat Datang</h2>
				<span className="flex flex-row gap-2 text-lg">
					<p>di</p>
					<p>
						<strong>Kimi noTe</strong>
					</p>
				</span>
				<h2 className="text-xl font-semibold text-blue-700 mt-4">
					Alat penimbang ikan pada kapal penangkap ikan terintegrasi dengan
					sistem perekaman dan manajemen.
				</h2>
				<div className="flex flex-row text-blue-500 font-bold gap-2 py-2">
					<div className="text-center bg-white bg-opacity-70 rounded-full w-28 h-28 flex flex-col text-xs items-center justify-center">
						<FieldTimeOutlined className="text-2xl" />
						<p>Respon Cepat</p>
					</div>
					<div className="text-center bg-white bg-opacity-70 rounded-full w-28 h-28 flex flex-col text-xs items-center justify-center">
						<SolutionOutlined className="text-2xl" />
						<p>
							Terdokumentasi
						</p>
					</div>
					<div className="text-center bg-white bg-opacity-70 rounded-full w-28 h-28 flex flex-col text-xs items-center justify-center">
						<PercentageOutlined className="text-2xl" />
						<p>Presisi</p>
					</div>
				</div>
				<Link href="/auth/signup">
					<button className="mt-10 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-800 duration-700">
						Mulai Sekarang
					</button>
				</Link>
			</div>
		</div>
	);
}

export default HomeJumbotron;
