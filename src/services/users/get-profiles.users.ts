import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean
}

async function getUserProfiles(user: ILogin) {
	const { data } = await serviceInstance("id-ID", user.isNotify).get(
		"/api/v1/users/",
		{
			headers: {
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { getUserProfiles };
