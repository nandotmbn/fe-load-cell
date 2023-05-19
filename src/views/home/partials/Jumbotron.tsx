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
		<div className="flex flex-col md:flex-row self-center bg-gray-200 border-b-8 border-yellow-400">
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
				<div className="relative hidden md:flex">
					<div className="absolute right-2 w-44 h-12 bg-transparent border-t-8 border-r-8 border-yellow-400"></div>
				</div>
				<h2 className="text-2xl lg:text-6xl font-semibold text-center md:text-left">Selamat Datang</h2>
				<span className="flex flex-row gap-2 text-lg justify-center md:justify-start">
					<p className="text-center md:text-left">di</p>
					<p>
						<strong className="">Kami noTe</strong>
					</p>
				</span>
				<h2 className="text-base md:text-2xl text-center md:text-left font-semibold text-blue-700 mt-4">
					Alat penimbang ikan pada kapal penangkap ikan terintegrasi dengan
					sistem perekaman dan manajemen.
				</h2>
				<div className="flex flex-row text-blue-500 font-bold py-2 w-full items-center justify-evenly">
					<div className="text-center bg-white bg-opacity-70 rounded-full w-24 h-24 flex flex-col text-xs items-center justify-center">
						<FieldTimeOutlined className="text-2xl" />
						<p className="">Respon <br /> Cepat</p>
					</div>
					<div className="text-center bg-white bg-opacity-70 rounded-full w-24 h-24 flex flex-col text-xs items-center justify-center">
						<SolutionOutlined className="text-2xl" />
						<p className="">
							Dokumentasi <br /> Lengkap
						</p>
					</div>
					<div className="text-center bg-white bg-opacity-70 rounded-full w-24 h-24 flex flex-col text-xs items-center justify-center">
						<PercentageOutlined className="text-2xl" />
						<p className="">Presisi <br /> Tinggi</p>
					</div>
				</div>
				<Link href="/auth/signup">
					<button className="mt-10  mb-2 bg-blue-600 text-white px-4 py-2 rounded-2xl w-full hover:bg-blue-800 duration-700">
						Mulai Sekarang
					</button>
				</Link>
			</div>
		</div>
	);
}

export default HomeJumbotron;
