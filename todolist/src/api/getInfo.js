const urlRequest = "http://localhost:3000/users/all";

function getUsers() {
	//fetch(`${urlRequest}`).then((res) => console.log(res));

	return fetch(`${urlRequest}`, { mode: "cors" })
		.then((res) => console.log(res))
		.then((res) => res)
		.then((res) => res.data)
		.catch((err) => console.log(err));
	//.then((res) => res.data);
}

export default {
	getUsers,
};
