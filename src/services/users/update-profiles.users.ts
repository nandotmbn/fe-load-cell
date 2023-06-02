import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	data: {
		fullName: string,
		username: string
	}
}

async function updateUserProfiles(user: ILogin) {
	const { data } = await serviceInstance("id-ID", user.isNotify).put(
		"/api/v1/users/",
		user.data,
		{
			headers: {
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { updateUserProfiles };
