import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	data: {
		oldPassword: string,
		newPassword: string
	}
}

async function updateUserPassword(user: ILogin) {
	const { data } = await serviceInstance("id-ID", user.isNotify).put(
		"/api/v1/users/password",
		user.data,
		{
			headers: {
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { updateUserPassword };
