import React from "react";
import { Routes, Route } from "react-router-dom";
import { RegisterPage, LoginPage, HomePage } from "../pages";
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
				<Route exact path="/" element={<HomePage></HomePage>}></Route>

				<Route path="u/:UserId" element={<UserPage></UserPage>}></Route>
				<Route path="/login" element={<LoginPage></LoginPage>}></Route>
				<Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
				<Route path="p/:strId" element={<DetailPage></DetailPage>}></Route>
				<Route path="/explore" element={<SearchPage></SearchPage>}></Route>
				<Route path="/new-post" element={<AddPostPage></AddPostPage>}></Route>
				<Route path="/e/:strId" element={<EditPostPage></EditPostPage>}></Route>
				<Route path="/my-account" element={<MyAccountPage></MyAccountPage>}></Route>


				{/* <Route path="/" element={<DetailPage></DetailPage>}></Route> */}


				{/* <Route path='/new-post' element={<Posting></Posting>}></Route> */}
                {/* <Route path='/about' element={<AboutPage></AboutPage>}></Route> */}
                {/* <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route> */}
			</Routes>
		</>
	);
};

export default Pages;
