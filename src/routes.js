import Base from "./components/containers/Base";
import SignInContainer from "./components/SignIn";
import SignUpContainer from "./components/SignUp";

const routes = {
	component: Base,
	childRoutes: [
		{
			path: "/signup",
			component: SignUpContainer
		},
		{
			path: "/signin",
			component: SignInContainer
		}
	]
};

export default routes;
