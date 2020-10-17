let dataReceived = "";

function crateTask(taskName, userID) {
	var url = "http://localhost:3000/tasks/";
	return fetch(url, {
		method: "post",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ taskName: taskName, userID: userID }),
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
function deleteTask(taskID) {
	var url = "http://localhost:3000/tasks/";
	console.log("URLAPI::::: " + url + taskID);
	return fetch(url + taskID, {
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

function getTasks() {
	var urlRequest = "http://localhost:3000/" + "tasks" + "/all";
	return fetch(`${urlRequest}`).then((res) => res.json());
}
export default { crateTask, deleteTask, getTasks };
