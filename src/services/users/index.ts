import { getUserProfiles } from "./get-profiles.users";
import { updateUserApikey } from "./update-apikey.users";
import { updateUserProfiles } from "./update-profiles.users";
import { updateUserPassword } from "./update-password.users";

const Users = {
	getUserProfiles,
	updateUserProfiles,
	updateUserPassword,
	updateUserApikey
};

export { Users };
