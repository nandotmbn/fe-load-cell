import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	recordId: string
}

async function deleteRecords(user: ILogin) {
	const { data } = await serviceInstance("id-ID", user.isNotify).delete(
		"/api/v1/record/" + user.recordId,
		{
			headers: {
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { deleteRecords };
