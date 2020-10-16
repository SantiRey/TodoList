import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home.vue";
import userView from "../view/users/usersView.vue";
import taskView from "../view/users/taskView.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/users",
		name: "userView",
		component: userView,
	},
	{
		path: "/task",
		name: "taskView",
		component: taskView,
	},
];
const router = new VueRouter({
	mode: "history",
	routes: routes,
});

export default router;
