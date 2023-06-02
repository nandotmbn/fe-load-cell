import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	date: string
}

async function getAllRecords(user: ILogin) {
	const { data } = await serviceInstance("id-ID", user.isNotify).get(
		"/api/v1/record?" + `date=${user.date}`,
		{
			headers: {
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { getAllRecords };
