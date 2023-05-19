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
	HighlightOutlined,
	InfoOutlined,
	KeyOutlined,
	LogoutOutlined,
	ReconciliationOutlined,
	UnorderedListOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
const { Panel } = Collapse;

function NavigationBarAdministratorLayout() {
	const router = useRouter();
	const [activePanel, setActivePanel] = useState("");
	const [activePage, setActivePage] = useState("");

	const defineActivePage = (panel: string, page: string) => {
		if (panel == activePanel && page == activePage) return "bg-blue-400";
		return "";
	};

	const handleActivePage = () => {
		setActivePanel(router.route.split("/")[2]);
		setActivePage(router.route.split("/")[3]);
	};

	useEffect(() => {
		handleActivePage();
	}, [router]);

	return (
		<div className="flex-4 h-full">
			<div className="relative h-full flex-12">
				<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-rounded-xl scrollbar-w-1 scrollbar-thumb-gray-400 scrollbar-track-blue-100 pt-4 pb-20">
					<Collapse ghost defaultActiveKey={[1, 2, 3, 4]}>
						<Panel
							header={
								<div className="flex flex-row items-center justify-start">
									<ReconciliationOutlined className="text-sm" />
									<p className="mx-2 text-xs">Manajemen</p>
								</div>
							}
							key="2"
						>
							<Link href="/dashboard/management/today">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-blue-400 rounded-full px-2 hover:text-white ${defineActivePage(
										"management",
										"today"
									)}`}
								>
									<InfoOutlined className="text-sm" />
									<p className="text-xs ml-1">Hari Ini</p>
								</div>
							</Link>
							<Link href="/dashboard/management/history">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-blue-400 rounded-full px-2 hover:text-white ${defineActivePage(
										"management",
										"history"
									)}`}
								>
									<HighlightOutlined className="text-sm" />
									<p className="text-xs ml-1">Riwayat</p>
								</div>
							</Link>
						</Panel>
						<Panel
							header={
								<div className="flex flex-row items-center justify-start">
									<UserOutlined className="text-sm" />
									<p className="mx-2 text-xs">Pengguna</p>
								</div>
							}
							key="1"
						>
							<Link href="/dashboard/users/profile">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-blue-400 rounded-full px-2 hover:text-white ${defineActivePage(
										"users",
										"profile"
									)}`}
								>
									<ContainerOutlined className="text-sm" />
									<p className="text-xs ml-1">Profil</p>
								</div>
							</Link>
							<Link href="/dashboard/users/access">
								<div
									className={`flex flex-row items-center justify-start mb-1 hover:bg-blue-400 rounded-full px-2 hover:text-white ${defineActivePage(
										"users",
										"access"
									)}`}
								>
									<KeyOutlined className="text-sm" />
									<p className="text-xs ml-1">API Key</p>
								</div>
							</Link>
						</Panel>
						<button
							className={`flex flex-row w-full items-center justify-start mt-8 mb-1 hover:bg-red-400 rounded-full px-2 hover:text-white`}
						>
							<LogoutOutlined className="text-sm" />
							<p className="text-xs ml-1">Logout</p>
						</button>
					</Collapse>
				</div>
			</div>
		</div>
	);
}

export default NavigationBarAdministratorLayout;
