import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeJumbotron() {
	return (
		<div className="flex flex-row self-center bg-gray-100 border-b-8 border-yellow-400">
			<div className="w-full flex-3">
				<Image
					className="contain w-full relative"
					src="/images/home/pens_jumbotron.png"
					alt="Jumbotron PENS"
					width={1960}
					height={1}
				/>
			</div>
			<div
				className="flex-2 flex-col flex justify-center text-lg"
				style={{
					backgroundImage: `url('/images/Logo_PENS_White.png')`,
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
						<strong>Pascasarjana PENS</strong>
					</p>
				</span>
				<p>Politeknik Elektronika Negeri Surabaya</p>
				<h2 className="text-4xl font-semibold text-blue-700 mt-4">
					Program Magister Terapan Pertama di Indonesia
				</h2>
				<Link href="/about">
					<button className="mt-8 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-800 duration-700">
						Tentang Pascasarjana
					</button>
				</Link>
			</div>
		</div>
	);
}

export default HomeJumbotron;
