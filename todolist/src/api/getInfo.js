var urlRequest = "http://localhost:3000/";

function getUsers(table) {
	urlRequest = "http://localhost:3000/" + table + "/all";
	return fetch(`${urlRequest}`).then((res) => res.json());
}

function getTasks(table) {
	urlRequest = "http://localhost:3000/" + table + "/all";
	return fetch(`${urlRequest}`).then((res) => res.json());
}

export default {
	getUsers,
	getTasks,
};
