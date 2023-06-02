import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
}

async function updateUserApikey(user: ILogin) {
	const { data } = await serviceInstance("id-ID", user.isNotify).put(
		"/api/v1/users/apiKey",
		{
			headers: {
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { updateUserApikey };
