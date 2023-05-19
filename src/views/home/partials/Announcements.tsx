import Image from "next/image";
import Link from "next/link";
import React from "react";

function AnnouncementsCard() {
	return (
		<div className="inline-block px-3">
			<div className="w-64 max-w-xs overflow-hidden rounded-lg drop-shadow-xl bg-white hover:drop-shadow-2xl transition-shadow duration-300 ease-in-out border-t-4 border-t-blue-800 border-r-4 border-r-yellow-400 px-4 pt-2 flex flex-col justify-between">
				<div className="flex-3">
					<h5 className="font-semibold text-2xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h5>
					<p className="mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
						consectetur veritatis aut.
					</p>
				</div>
				<div className="self-end flex-1 pb-4 mt-8">
					<Link href="/article" className="flex flex-row items-center gap-2">
						<p className="text-blue-800 text-sm">Baca Selengkapnya...</p>
						<button className="w-6 h-6 rounded-full bg-blue-800">
							<span className="material-symbols-outlined text-yellow-400">chevron_right</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

function Announcements() {
	return (
		<div className="mt-12 w-full flex flex-row bg-gray-50">
			<div className="relative flex-1">
				<div className="absolute left-0 top-0">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_1.png"
						alt="Jumbotron PENS"
						width={640}
						height={1}
					/>
				</div>
			</div>
			<div className="flex overflow-x-scroll py-10 hide-scroll-bar flex-8">
				<div className="flex flex-nowrap ml-10 ">
					<AnnouncementsCard />
					<AnnouncementsCard />
					<AnnouncementsCard />
					<AnnouncementsCard />
					<AnnouncementsCard />
					<AnnouncementsCard />
					<AnnouncementsCard />
				</div>
			</div>
		</div>
	);
}

export default Announcements;
