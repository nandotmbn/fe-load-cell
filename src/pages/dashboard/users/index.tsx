import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import AdministratorLayout from "@/layouts/AdministratorLayout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import DashboardViews from "@/views/dashboard";

export default function Home() {
	const router = useRouter()
	useEffect(() => {
		router.replace("/dashboard/users/profile")
	}, [router])
	return (
		<>
			<Head>
				<title>Kami noTe</title>
				<meta
					name="description"
					content="Fish weighing equipment on fishing vessels is integrated with a recording and management system."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AdministratorLayout>
				<DashboardViews />
			</AdministratorLayout>
		</>
	);
}
