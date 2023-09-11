import React from "react";
import { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import "./bottomSection.jsx";
import "./topSection.jsx";
import TopSection from "./topSection.jsx";
import BottomSection from "./bottomSection.jsx";

const ProfileContainer = () => {
	const [userData, setUserData] = useState(undefined);
	useEffect(() => {
		if (userData !== undefined) return;
		fetch("https://randomuser.me/api/").then( async (response) => {
			if (response.status < 200 || response.status >= 400) return;
			let body = await response.json();
			setUserData(body.results[0]);
		})
	}, [])
	return (
		<Paper className="App__profileContainer"
		elevation={22}
		sx={{
			width: "75%",
			height: "75%",
		}}
		> 
		{
			userData ? (
				<>
					<TopSection userData={userData} />
					<BottomSection userData={userData} />
				</>
			): (
				<></>
			)
		}
		</Paper>
	);
}

export default ProfileContainer;