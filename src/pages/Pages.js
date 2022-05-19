import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthenticatePage, LoginPage, HomePage } from "../pages";
import DetailPage from "./DetailPage";
import SearchPage from "./SearchPage";
import UserPage from "./UserPage";
import AddPostPage from "./AddPostPage";
import EditPostPage from "./EditPostPage";
import MyAccountPage from "./MyAccountPage";

const Pages = () => {
	return (
		<>
			<Routes>
				{/* <Route path="/" element={<HomePage></HomePage>}></Route> */}
				<Route path="/" element={<UserPage></UserPage>}></Route>
				{/* <Route path="/" element={<DetailPage></DetailPage>}></Route> */}
				{/* <Route path="/" element={<SearchPage></SearchPage>}></Route> */}
				{/* <Route path="/" element={<AddPostPage></AddPostPage>}></Route> */}
				{/* <Route path="/" element={<EditPostPage></EditPostPage>}></Route> */}
				{/* <Route path="/" element={<MyAccountPage></MyAccountPage>}></Route> */}
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
