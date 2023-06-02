import Head from "next/head";
import AdministratorLayout from "@/layouts/AdministratorLayout";
import DashboardTodayViews from "@/views/dashboard/management/today";

export default function Home() {
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
				<DashboardTodayViews />
			</AdministratorLayout>
		</>
	);
}
