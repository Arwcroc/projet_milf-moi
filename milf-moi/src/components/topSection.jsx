import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const TopSection = (props) => {
	return (
		<Box className="App__profileContainer__topSection"
		sx={{
			width: "100%",
			height: "35%",
			background: "#cacadada",
			borderBottom: "solid 2px darkgrey",
		}}
		>
			<div className="App__profileContainer__topSection__avatarWrapper">
				<Avatar className="App__profileContainer__topSection__avatarWrapper__avatar"
				sx={{ width: 56, height: 56 }}
				src= {props.userData.picture.large}
				>
					H
				</Avatar>
			</div>
		</Box>
	);
}

export default TopSection;