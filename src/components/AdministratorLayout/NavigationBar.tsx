/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Collapse } from "antd";
import {
	AimOutlined,
	BankOutlined,
	ContainerOutlined,
	EyeOutlined,
	FileDoneOutlined,
	FileExclamationOutlined,
	FileOutlined,
	FireOutlined,
	FlagOutlined,
	GlobalOutlined,
	ReconciliationOutlined,
	UnorderedListOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
const { Panel } = Collapse;

function NavigationBarAdministratorLayout() {
	const router = useRouter()
	const [activePanel, setActivePanel] = useState("");
	const [activePage, setActivePage] = useState("");

	const defineActivePage = (panel: string, page: string) => {
		if (panel == activePanel && page == activePage) return "bg-blue-400 text-white"
		return ""
	}

	const handleActivePage = () => {
		setActivePanel(router.route.split('/')[2]);
		setActivePage(router.route.split('/')[3]);
	}

	useEffect(() => {
		handleActivePage()
	}, [router])

	return (
		<div className="flex-4 h-full">
			<div className="relative h-full flex-12">
				<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-rounded-xl scrollbar-w-1 scrollbar-thumb-gray-400 scrollbar-track-blue-100 pt-4 pb-20">
					<Collapse ghost defaultActiveKey={[1, 2, 3, 4]}>
						<Panel
							header={
								<div className="flex flex-row items-center justify-start">
									<UserOutlined className="text-sm" />
									<p className="mx-2 text-xs">Pengguna</p>
								</div>
							}
							key="1"
						>
							<Link href="/admin/users/list">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("users", "list")}`}
								>
									<UnorderedListOutlined className="text-sm" />
									<p className="text-xs ml-1">Daftar</p>
								</div>
							</Link>
							<Link href="/admin/users/biodata">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("users", "biodata")}`}
								>
									<ContainerOutlined className="text-sm" />
									<p className="text-xs ml-1">Biodata</p>
								</div>
							</Link>
							<Link href="/admin/users/education">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("users", "education")}`}
								>
									<BankOutlined className="text-sm" />
									<p className="text-xs ml-1">Pendidikan</p>
								</div>
							</Link>
							<Link href="/admin/users/research-and-publication">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("users", "research-and-publication")}`}
								>
									<FireOutlined className="text-sm" />
									<p className="text-xs ml-1">Riset dan Publikasi</p>
								</div>
							</Link>
							<Link href="/admin/users/about">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("users", "about")}`}
								>
									<GlobalOutlined className="text-sm" />
									<p className="text-xs ml-1">Tentang</p>
								</div>
							</Link>
						</Panel>

						<Panel
							header={
								<div className="flex flex-row items-center justify-start">
									<ReconciliationOutlined className="text-sm" />
									<p className="mx-2 text-xs">Program Studi</p>
								</div>
							}
							key="2"
						>
							<Link href="/admin/programs/list">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("programs", "list")}`}
								>
									<UnorderedListOutlined className="text-sm" />
									<p className="text-xs ml-1">Daftar</p>
								</div>
							</Link>
							<Link href="/admin/programs/profile">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("programs", "profile")}`}
								>
									<ContainerOutlined className="text-sm" />
									<p className="text-xs ml-1">Profil Program Studi</p>
								</div>
							</Link>
							<Link href="/admin/programs/vision">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("programs", "vision")}`}
								>
									<EyeOutlined className="text-sm" />
									<p className="text-xs ml-1">Visi</p>
								</div>
							</Link>
							<Link href="/admin/programs/mission">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("programs", "mission")}`}
								>
									<AimOutlined className="text-sm" />
									<p className="text-xs ml-1">Misi</p>
								</div>
							</Link>
							<Link href="/admin/programs/curriculum">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("programs", "curriculum")}`}
								>
									<ContainerOutlined className="text-sm" />
									<p className="text-xs ml-1">Kurikulum</p>
								</div>
							</Link>
							<Link href="/admin/programs/information">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("programs", "information")}`}
								>
									<FlagOutlined className="text-sm" />
									<p className="text-xs ml-1">Informasi</p>
								</div>
							</Link>
							<Link href="/admin/programs/field">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("programs", "field")}`}
								>
									<FireOutlined className="text-sm" />
									<p className="text-xs ml-1">Bidang Keilmuan</p>
								</div>
							</Link>
							<Link href="/admin/programs/alumni-profile">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("programs", "alumni-profile")}`}
								>
									<GlobalOutlined className="text-sm" />
									<p className="text-xs ml-1">Profil Lulusan</p>
								</div>
							</Link>
						</Panel>

						<Panel
							header={
								<div className="flex flex-row items-center justify-start">
									<ReconciliationOutlined className="text-sm" />
									<p className="mx-2 text-xs">Riset dan Inovasi</p>
								</div>
							}
							key="3"
						>
							<Link href="/admin/research-and-innovations/list">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("research-and-innovations", "list")}`}
								>
									<UnorderedListOutlined className="text-sm" />
									<p className="text-xs ml-1">Daftar</p>
								</div>
							</Link>
							<Link href="/admin/research-and-innovations/detail">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("research-and-innovations", "detail")}`}
								>
									<ContainerOutlined className="text-sm" />
									<p className="text-xs ml-1">Detail</p>
								</div>
							</Link>
							<Link href="/admin/research-and-innovations/innovation">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("research-and-innovations", "innovation")}`}
								>
									<FireOutlined className="text-sm" />
									<p className="text-xs ml-1">Inovasi</p>
								</div>
							</Link>
						</Panel>

						<Panel
							header={
								<div className="flex flex-row items-center justify-start">
									<FileDoneOutlined className="text-sm" />
									<p className="mx-2 text-xs">Konten</p>
								</div>
							}
							key="4"
						>
							<Link href="/admin/contents/information">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("contents", "information")}`}
								>
									<FileExclamationOutlined className="text-sm" />
									<p className="text-xs ml-1">Informasi</p>
								</div>
							</Link>
							<Link href="/admin/contents/news">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("contents", "news")}`}
								>
									<FlagOutlined className="text-sm" />
									<p className="text-xs ml-1">Berita</p>
								</div>
							</Link>
							<Link href="/admin/contents/document">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${defineActivePage("contents", "document")}`}
								>
									<FileOutlined className="text-sm" />
									<p className="text-xs ml-1">Dokumen</p>
								</div>
							</Link>
						</Panel>
					</Collapse>
				</div>
			</div>
		</div>
	);
}

export default NavigationBarAdministratorLayout;
