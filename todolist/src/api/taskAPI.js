var url = "http://localhost:3000/tasks/";

let dataReceived = "";

function crateTask(taskName, userID) {
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
	return fetch(url + taskID, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ "": "" }),
	})
		.then((resp) => {
			resp.text();
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

function getTasks() {
	url = "http://localhost:3000/" + "tasks" + "/all";
	return fetch(`${url}`).then((res) => res.json());
}
export default { crateTask, deleteTask, getTasks };
