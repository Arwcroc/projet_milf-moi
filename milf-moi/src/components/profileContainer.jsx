import React from "react";
import { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import "./bottomSection.jsx";
import "./topSection.jsx";
import TopSection from "./topSection.jsx";
import BottomSection from "./bottomSection.jsx";

const ProfileContainer = () => {
	const [userData, setUserData] = useState(undefined);

	const RefreshClick = () => {
		setUserData(undefined);
		fetch("https://randomuser.me/api/").then( async (response) => {
			if (response.status < 200 || response.status >= 400) return;
			let body = await response.json();
			setUserData(body.results[0]);
		})
	}
	useEffect(() => {
		if (userData !== undefined) return;
		RefreshClick();
	}, [userData])

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
					<TopSection userData={userData} onRefreshClick={RefreshClick}/>
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