import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home.vue";
import userView from "../view/users/usersView.vue";
import taskView from "../view/task/taskView.vue";
import newUser from "../components/CxUserCreation.vue";
import login from "../components/CxLogin.vue";
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
	{
		path: "/newuser",
		name: "newUser",
		component: newUser,
	},
	{
		path: "/login",
		name: "login",
		component: login,
	},
];
const router = new VueRouter({
	mode: "history",
	routes: routes,
});

export default router;
