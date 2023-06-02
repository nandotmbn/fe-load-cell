import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean
}

async function getTodayRecords(user: ILogin) {
	const { data } = await serviceInstance("id-ID", user.isNotify).get(
		"/api/v1/record/today",
		{
			headers: {
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { getTodayRecords };
