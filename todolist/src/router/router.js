import Vue from "vue";
import VueRouter from "vue-router";
import userView from "../view/users/usersView.vue";
import Home from "../view/Home.vue";

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
];
const router = new VueRouter({
	mode: "history",
	routes: routes,
});

export default router;
