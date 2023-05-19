import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import HomeViews from "@/views/home/Home";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginViews from "@/views/auth/signin";

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
			<MainLayout>
				<LoginViews />
			</MainLayout>
		</>
	);
}
