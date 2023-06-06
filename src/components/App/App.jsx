import React from "react";
import { Routes, Route } from "react-router";

import Page from "../Page/Page";
// import { Register, Login } from "../../pages/Authorization";


const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/*" element={<Page />} />
				{/* <Route path="login" element={<Login />} /> */}
				{/* <Route path="register" element={<Register />} /> */}
			</Routes>
		</div>
	);
}

export default App;
