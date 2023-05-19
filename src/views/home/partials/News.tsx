import { NewsCardInterface } from "@/interfaces/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const news = [0, 1, 2, 3, 4, 5, 6];

function NewsCard({ isOdd }: NewsCardInterface) {
	return (
		<div className="inline-block px-3">
			<div
				className={`w-64 max-w-xs overflow-hidden rounded-lg hover:drop-shadow-2xl transition-shadow duration-300 ease-in-out py-8 flex flex-col justify-between ${
					isOdd ? "bg-blue-800" : "bg-yellow-400"
				}`}
			>
				<div className="flex-2">
					<Image
						className="contain w-full relative"
						src="/images/home/pens_jumbotron.png"
						alt="Jumbotron PENS"
						width={1960}
						height={1}
					/>
				</div>
				<div className="flex-4 p-2">
					<div className="flex flex-row gap-1 mt-2">
						<div className="w-2 h-2 rounded-full bg-white"></div>
						<div className="w-2 h-2 rounded-full bg-white"></div>
						<div className="w-2 h-2 rounded-full bg-white"></div>
					</div>
					<h5
						className={`font-semibold text-xl ${
							isOdd ? "text-white" : "text-gray-800"
						}`}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h5>
				</div>
				<div className="self-end flex-1 p-2">
					<Link href="/article" className="flex flex-row items-center gap-2">
						<p className={`text-sm ${isOdd ? "text-white" : "text-gray-800"}`}>
							Baca Selengkapnya...
						</p>
						<button
							className={`w-6 h-6 rounded-full ${
								isOdd ? "bg-white" : "bg-gray-800"
							}`}
						>
							<span className="material-symbols-outlined text-yellow-400">
								chevron_right
							</span>
						</button>
					</Link>
				</div>
				<div className="relative">
					<div
						className={`absolute right-0 top-0 h-8 w-8 rounded-br-lg rounded-tl-lg ${
							isOdd ? "bg-yellow-400" : "bg-blue-800"
						}`}
					></div>
					<div
						className={`absolute -right-12 top-0 h-16 w-16 rounded-br-lg rounded-tl-lg rotate-45 bg-gray-50`}
					></div>
				</div>
			</div>
		</div>
	);
}

function News() {
	return (
		<div className="mt-12 z-10">
			<h2 className="text-2xl border-b-4 border-gray-300 text-center mb-4">
				Berita Terbaru
			</h2>
			<div className="w-full flex flex-row">
				<div className="relative flex-1">
					<div className="absolute left-0 top-0">
						<Image
							className="contain w-full relative"
							src="/images/home/ornament_2.png"
							alt="Jumbotron PENS"
							width={640}
							height={1}
						/>
					</div>
				</div>
				<div className="flex overflow-x-scroll py-10 hide-scroll-bar flex-9">
					<div className="flex flex-nowrap ml-10 ">
						{news.map((e: any, i: number) => {
							return <NewsCard key={i} isOdd={i % 2 == 0 ? true : false} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;
