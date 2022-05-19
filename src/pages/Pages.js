import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthenticatePage, LoginPage, HomePage } from "../pages";

const Pages = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage></HomePage>}></Route>
				<Route
					path="/authenticate"
					element={<AuthenticatePage></AuthenticatePage>}
				></Route>
				<Route path="/login" element={<LoginPage></LoginPage>}></Route>

				{/* <Route path='/new-post' element={<Posting></Posting>}></Route>
                <Route path='/about' element={<AboutPage></AboutPage>}></Route>
                <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route> */}
			</Routes>
		</>
	);
};

export default Pages;
