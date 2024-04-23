import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Faqs from "./pages/faqs";
import Bar from "./pages/bar";
import Pie from "./pages/pie";
import Line from "./pages/line";
import Geography from "./pages/geography";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "/team",
				element: <Team />,
			},
			{
				path: "/contacts",
				element: <Contacts />,
			},
			{
				path: "/invoices",
				element: <Invoices />,
			},
			{
				path: "/form",
				element: <Form />,
			},
			{
				path: "/calendar",
				element: <Calendar />,
			},
			{
				path: "/faq",
				element: <Faqs />,
			},
			{
				path: "/bar",
				element: <Bar />,
			},
			{
				path: "/pie",
				element: <Pie />,
			},
			{
				path: "/line",
				element: <Line />,
			},
			{
				path: "/geography",
				element: <Geography />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
