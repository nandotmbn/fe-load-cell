import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import DeveloperViews from "@/views/developer/Developer";

export default function Developer() {
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
			<MainLayout>
				<DeveloperViews />
			</MainLayout>
		</>
	);
}
