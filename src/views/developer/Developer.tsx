import Image from "next/image";
import React from "react";

function DeveloperViews() {
	return (
		<div className="p-4">
			<div className="flex flex-row gap-4 w-full md:w-8/12 m-auto mt-8 px-2 items-center">
				<div className="flex-1">
					<Image
						className="contain relative w-full rounded-full"
						src="/developer.jpg"
						alt="Jumbotron PENS"
						width={400}
						height={400}
						unoptimized={true}
					/>
				</div>
				<div className="flex-2 flex-col flex">
					<div className="flex flex-row items-start justify-between gap-5 mb-2">
						<p>Nama</p>
						<p className="font-semibold text-right">Septia Nanda Firmansyah</p>
					</div>
					<div className="flex flex-row items-start justify-between gap-5 mb-2">
						<p>Prodi</p>
						<p className="font-semibold text-right">S1 Teknik Perkapalan</p>
					</div>
					<div className="flex flex-row items-start justify-between gap-5 mb-2">
						<p>NRP</p>
						<p className="font-semibold text-right">04111940000052</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeveloperViews;
