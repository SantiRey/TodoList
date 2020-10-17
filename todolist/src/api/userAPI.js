let dataReceived = "";
function getUsers(table) {
	var urlRequest = "http://localhost:3000/";
	urlRequest = "http://localhost:3000/" + table + "/all";
	return fetch(`${urlRequest}`).then((res) => res.json());
}
function crateUser(userName, password) {
	var url = "http://localhost:3000/users/";
	return fetch(url, {
		method: "post",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name: userName, password: password }),
	})
		.then((resp) => {
			if (resp.status === 200) {
				return resp.json();
			} else {
				console.log("Status: " + resp.status);
				return Promise.reject("server");
			}
		})
		.then((dataJson) => {
			dataReceived = JSON.parse(dataJson);
			console.log(dataReceived);
		})
		.catch((err) => {
			if (err === "server") return;
			console.log(err);
		});
}
function deleteUser(userID) {
	var url = "http://localhost:3000/users/";
	return fetch(url + userID, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ "": "" }),
	})
		.then((resp) => {
			resp.json();
		})
		.then(() => {
			console.log(dataReceived);
		})
		.catch((err) => {
			if (err === "server") return;
			console.log(err);
		});
}
export default {
	getUsers,
	crateUser,
	deleteUser,
};
