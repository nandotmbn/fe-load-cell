import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";

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
				<div className="flex flex-col items-center justify-center my-48">
          <p>404</p>
					<p>Page is Not Found</p>
				</div>
			</MainLayout>
		</>
	);
}
