// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

const items: MenuProps["items"] = [
	{
		label: (
			<Link href="/program/electrical-engineering">
				<button className="text-left">
					Teknik Elektro
				</button>
			</Link>
		),
		key: "1",
	},
	{
		label: (
			<Link href="/program/informatics-and-computer-engineering">
				<button className="text-left">
					Teknik Informatika dan Komputer
				</button>
			</Link>
		),
		key: "2",
	},
];

function HeaderMainLayout() {
	const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
	const [isOnTop, setOnTop] = useState<Boolean>(false);
	const handleMobileMenuOpened = () => {
		setMobileMenuOpened(!isMobileMenuOpened);
	};

	const handleScroll = () => {
		if (window.scrollY) return setOnTop(true);
		setOnTop(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	return (
		<nav
			className={`w-full fixed z-50 flex items-center justify-between md:justify-evenly md:gap-8 duration-700 bg-gradient-to-r to-blue-800 from-yellow-400 via-blue-800`}
		>
			<div className="px-1 py-2">
				<Link href="/">
					<div className="flex flex-row items-center gap-4">
						<Image
							className="cursor-pointer hidden lg:inline"
							src="/images/Logo_PENS_White.png"
							alt="Logo PENS"
							width={50}
							height={300}
						/>
						<h1 className="font-bold text-white text-lg">Pascasarjana PENS</h1>
					</div>
					<Image
						className="cursor-pointer lg:hidden"
						src="/images/Logo_PENS_White.png"
						alt="Logo PENS"
						width={120}
						height={20}
					/>
				</Link>
			</div>

			<button
				className="flex flex-row items-center md:hidden bg-blue-900 text-sm text-white px-2 py-4 self-start"
				onClick={handleMobileMenuOpened}
			>
				{!isMobileMenuOpened ? (
					<>
						<p>Menu</p>
						<i className="material-icons text-yellow-500">expand_more</i>
					</>
				) : (
					<>
						<p>Close</p>
						<i className="material-icons text-yellow-500">expand_less</i>
					</>
				)}
			</button>

			{!isMobileMenuOpened ? null : (
				<ul className="absolute top-20 w-full md:hidden grid grid-cols-2 gap-4 px-4 bg-white">
					<li className="">
						<Link href="/about">
							<button className="text-left text-xs">
								Tentang Pascasarjana
							</button>
						</Link>
					</li>
					<li className="">
						<Dropdown menu={{ items }}>
							<div>
								<button className="text-left text-xs mr-2">
									Program
								</button>
								<DownOutlined className="text-xs" />
							</div>
						</Dropdown>
					</li>
					<li className="">
						<Link href="/lecturer-and-staff">
							<button className="text-left text-xs">
								Dosen dan Staf
							</button>
						</Link>
					</li>
					<li className="">
						<Link href="/research-and-innovations">
							<button className="text-left text-xs">
								Riset dan Inovasi
							</button>
						</Link>
					</li>
					<li className="">
						<Link href="/information">
							<button className="text-left text-xs">
								Informasi
							</button>
						</Link>
					</li>
					<li className="flex flex-row gap-4">
						<button className="rounded-full text-white">
							<Image
								className="cursor-pointer"
								src="/images/id.png"
								alt="Logo Koridorlab"
								width={40}
								height={40}
							/>
						</button>

						<button className="rounded-full text-white">
							<Image
								className="cursor-pointer"
								src="/images/en.png"
								alt="Logo Koridorlab"
								width={40}
								height={40}
							/>
						</button>
					</li>
				</ul>
			)}

			<ul className="hidden flex flex-row gap-2 text-white md:gap-4 text-xs text-gray-900 items-end py-4 md:flex">
				<li className="flex-1 border-b-2 border-yellow-500">
					<Link href="/about">
						<button className="text-left text-xs">
							Tentang Pascasarjana
						</button>
					</Link>
				</li>
				<li className="flex-1 border-b-2 border-yellow-500">
					<Dropdown menu={{ items }}>
						<div>
							<button className="text-left text-xs mr-2">
								Program
							</button>
							<DownOutlined className="text-xs" />
						</div>
					</Dropdown>
				</li>
				<li className="flex-1 border-b-2 border-yellow-500">
					<Link href="/lecturer-and-staff">
						<button className="text-left">
							Dosen dan Staf
						</button>
					</Link>
				</li>
				<li className="flex-1 border-b-2 border-yellow-500">
					<Link href="/research-and-innovations">
						<button className="text-left">
							Riset dan Inovasi
						</button>
					</Link>
				</li>
				<li className="flex-1 border-b-2 border-yellow-500">
					<Link href="/information">
						<button className="text-left">
							Informasi
						</button>
					</Link>
				</li>
				<li className="flex flex-1 border-b-2 border-yellow-500 flex-row gap-4 ml-4 lg:ml-16">
					<button className="rounded-full text-white">
						<Image
							className="cursor-pointer md:inline lg:hidden"
							src="/images/id.png"
							alt="Bendera Indonesia"
							width={20}
							height={20}
						/>
						<Image
							className="cursor-pointer hidden lg:inline"
							src="/images/id.png"
							alt="Bendera Indonesia"
							width={40}
							height={40}
						/>
					</button>

					<button className="rounded-full text-white">
						<Image
							className="cursor-pointer md:inline lg:hidden"
							src="/images/en.png"
							alt="Bendera Inggris"
							width={20}
							height={20}
						/>
						<Image
							className="cursor-pointer hidden lg:inline"
							src="/images/en.png"
							alt="Bendera Inggris"
							width={40}
							height={40}
						/>
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default HeaderMainLayout;
