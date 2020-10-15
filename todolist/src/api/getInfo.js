const urlRequest = "http://localhost:3000/users/all";

function getUsers() {
	//fetch(`${urlRequest}`).then((res) => console.log(res));

	return fetch(`${urlRequest}`).then((res) => res.json());
	//.then((res) => res.data);
}

export default {
	getUsers,
};
