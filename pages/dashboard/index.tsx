import DefaultLayout from "components/layouts/DefaultLayout";
import type { ReactElement } from "react";

export default function Dashboard() {
	return <div>Dashboard</div>;
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
