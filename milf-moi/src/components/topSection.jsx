import React from "react";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import RefreshIcon from '@mui/icons-material/Refresh';

const TopSection = (props) => {
	const [iconFontSize, setIconFontSize] = useState(undefined);
	return (
		<Box className="App__profileContainer__topSection"
		sx={{
			width: "100%",
			height: "35%",
			background: "#cacadada",
			borderBottom: "solid 2px darkgrey",
		}}
		>
			<Box className="App__profileContainer__topSection__refreshButton">
				<RefreshIcon 
					onMouseOver={() => setIconFontSize("large")}
					onMouseLeave={() => setIconFontSize("medium")}
					fontSize={iconFontSize}
					onClick={props.onRefreshClick}
				/>
			</Box>
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