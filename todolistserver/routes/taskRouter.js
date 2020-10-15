var express = require("express");
var router = express.Router();
var {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
	tableName,
} = require("../services/taskServices");

router.get("/all", async function (req, res, next) {
	try {
		const Tasks = await getAllTasks(tableName);
		res.status(200).json({
			data: Tasks,
			messages: "Tasks listed",
		});
	} catch (err) {
		next(err);
	}
});

router.get("/:taskID", async function (req, res, next) {
	const { TaskID } = req.params;
	console.log(`Request to get Task : ${TaskID}`);
	try {
		const Tasks = await getTask(TaskID, tableName);
		res.status(200).json({
			data: Tasks,
			messages: "one Task listed",
		});
	} catch (err) {
		next(err);
	}
});

router.post("/", async function (req, res, next) {
	console.log("Got Body: ", req.body);
	createTask(req.body, tableName)
		.then((resq) =>
			res.status(201).json({ data: resq, messages: "Task created" })
		)
		.catch((err) => next(err));
});
router.put("/:TaskID", async function (req, res, next) {
	const id = req.params.TaskID;
	const data = req.body;
	console.log("Task to delete with id ", id);
	updateTask(id, data, tableName)
		.then((resq) =>
			res.status(200).json({ data: resq, messages: "Task updated" })
		)
		.catch((err) => next(err));
});

router.delete("/:TaskID", async function (req, res, next) {
	const id = req.params.TaskID;
	console.log("Task to delete with id ", id);
	deleteTask(id, tableName)
		.then((resq) =>
			res.status(200).json({ data: resq, messages: "Task deleted" })
		)
		.catch((err) => next(err));
});

module.exports = router;
