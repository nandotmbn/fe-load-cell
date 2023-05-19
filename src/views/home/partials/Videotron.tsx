import React from "react";

function Videotron() {
	return (
		<div className="mt-24 w-full bg-gray-200 flex flex-col items-center py-24 gap-20">
			<div className="flex-row flex w-8/12 gap-12">
				<div className="flex-1 flex-col">
					<h6 className="text-2xl font-bold text-right">
						Program Magister Terapan pertama di Indonesia pada bidang
						Engineering Technology yang menerapkan konsep Laboratory-Based
						Education
					</h6>
					<h6 className="mt-8 text-right">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
						dolor qui aut deleniti assumenda ullam? Ducimus voluptate magnam
						alias praesentium molestias totam veniam fugit!
					</h6>
				</div>
				<div className="flex-1 bg-gray-300 rounded-2xl">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/6BMIM5iwI9s?autoplay=1&mute=1"
					></iframe>
					<div className="relative">
						<div
							className={`absolute -right-2 -bottom-2 h-16 w-2 bg-yellow-400 rounded-tr-lg`}
						></div>
					</div>
					<div className="relative">
						<div
							className={`absolute -right-2 -bottom-2 h-2 w-16 bg-yellow-400 rounded-tr-lg`}
						></div>
					</div>
					<div className="relative">
						<div
							className={`absolute -right-4 -bottom-4 h-20 w-2 bg-blue-800 rounded-tr-lg`}
						></div>
					</div>
					<div className="relative">
						<div
							className={`absolute -right-4 -bottom-4 h-2 w-20 bg-blue-800 rounded-tr-lg`}
						></div>
					</div>
				</div>
			</div>
			<div className="flex-row flex w-8/12 gap-12">
				<div className="flex-1 bg-gray-300 rounded-2xl">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/lXAwRUQ5fbQ?autoplay=1&mute=1"
					></iframe>
          <div className="relative">
						<div
							className={`absolute -right-2 -bottom-2 h-16 w-2 bg-yellow-400 rounded-tr-lg`}
						></div>
					</div>
					<div className="relative">
						<div
							className={`absolute -right-2 -bottom-2 h-2 w-16 bg-yellow-400 rounded-tr-lg`}
						></div>
					</div>
					<div className="relative">
						<div
							className={`absolute -right-4 -bottom-4 h-20 w-2 bg-blue-800 rounded-tr-lg`}
						></div>
					</div>
					<div className="relative">
						<div
							className={`absolute -right-4 -bottom-4 h-2 w-20 bg-blue-800 rounded-tr-lg`}
						></div>
					</div>
				</div>
				<div className="flex-1 flex-col">
					<h6 className="text-2xl font-bold">Kenapa S2 di PENS?</h6>
					<ul className="mt-8 list-disc">
						<li>
							Pendekatan pendidikan terapan dengan konsep Laboratory-Based
							Education
						</li>
						<li>
							Pembelajaran berorientasi praktikal (70% praktikum, 30% teori)
							untuk memastikan bahwa semua materi perkuliahan berjalan pada
							jalur hands-on experience
						</li>
						<li>Penerapan keahlian melalui penelitian</li>
						<li>
							Hasil Pembelajaran berupa product oriented research dan publikasi
							pada jurnal nasional/internasional terakreditasi di bidang
							engineering
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Videotron;
