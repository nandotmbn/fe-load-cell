import { message } from "antd";
import { serviceInstance } from "..";
import _ from "lodash"

interface IRegister {
	data: {
		firstName: string;
		lastName: string;
		username: string;
		email: string;
		rolesId: string;
		password: string;
	};
	isNotify: boolean;
}

async function register(user: IRegister) {
	const { data } = await serviceInstance("id-ID", user.isNotify).post(
		"/api/v1/auth/register",
		user.data,
		{
			headers: {
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { register };
