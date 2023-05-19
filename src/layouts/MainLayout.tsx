import { HeaderMainLayout, FooterMainLayout } from "@/components";
import React from "react";

interface IMainLayout {
	children: JSX.Element;
}

function MainLayout({ children }: IMainLayout) {
	return (
		<div>
			<HeaderMainLayout />
			<div className="w-full flex justify-center pt-16">{children}</div>
			<FooterMainLayout />
		</div>
	);
}

export default MainLayout;
