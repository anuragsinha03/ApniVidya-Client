import axios from "axios";
import commonApiEndpoint from "./commonApiEndpoint";

const loginEndpoint = async ({ email, password }) => {
	const API_ENDPOINT = `${commonApiEndpoint}api/auth/login`;
	const response = await axios.post(
		API_ENDPOINT,
		{ email, password },
		{ headers: { "Content-Type": "application/json" } }
	);
	return response;
};
export default loginEndpoint;

