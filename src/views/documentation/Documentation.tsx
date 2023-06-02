import React from "react";
import docs from "./Documentation.json";

function DocumentationViews() {
	return (
		<div className="w-full mt-8 px-2 md:px-8">
			<div className="mb-8">
				<h2 className="text-4xl font-bold">Variabel</h2>
				{docs.variable.map((vars: any, index: number) => {
					return (
						<div key={index}>
							<p>
								<strong>{vars.key} : </strong>
								{vars.value}
							</p>
						</div>
					);
				})}
			</div>
			{docs.item.map((doc: any, index: number) => {
				return (
					<div key={index} className="mb-8">
						<p className="text-4xl font-semibold">{doc.name}</p>
						{doc.item.map((d: any, _index: number) => {
							return (
								<div
									key={_index}
									className="w-full border-2 rounded-xl shadow-xl py-8 px-4 mb-2"
								>
									<div className="flex flex-row gap-2">
										<p
											className={`font-bold text-2xl
                    ${d.request.method == "GET" && "text-green-600"}
                    ${d.request.method == "POST" && "text-yellow-600"}
                    ${d.request.method == "PUT" && "text-blue-600"}
                    ${d.request.method == "DELETE" && "text-red-600"}
                    `}
										>
											{d.request.method}
										</p>
									</div>
									<p className="text-purple-700 font-semibold">{d.name}</p>
									<div className="mb-2">
										<p className="text-2xl font-bold">URL</p>
										<p className="overflow-auto">{d.request.url.raw || "-"}</p>
									</div>
									<div className="mb-2">
										<p className="text-2xl font-bold">Request</p>
										<p className="">{d.request?.body?.raw || "-"}</p>
									</div>
									<div className="mb-2">
										<p className="text-2xl font-bold">Auth</p>
										<p className="">{d.request?.auth?.type || "-"}</p>
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default DocumentationViews;
