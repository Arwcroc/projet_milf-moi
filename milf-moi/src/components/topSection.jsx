import React from "react";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import RefreshIcon from '@mui/icons-material/Refresh';
import LinkIcon from '@mui/icons-material/Link';
import LanIcon from '@mui/icons-material/Lan';
import { Link } from "react-router-dom"

const TopSection = (props) => {
	const [iconFontSize, setIconFontSize] = useState(undefined);
	const [iconColor, setIconColor] = useState("action");
	const [iconInternFontSize, setIconInternFontSize] = useState(undefined);
	const [iconInternColor, setIconInternColor] = useState("action");
	return (
		<Box className="App__profileContainer__topSection"
		sx={{
			width: "100%",
			height: "35%",
			background: "#cacadada",
			borderBottom: "solid 2px darkgrey",
		}}
		>
			<Box className="App__profileContainer__topSection__externButton">
				<LinkIcon 
					onClick={() => window.open('https://twitch.com/')}
				/>
			</Box>
			<Box className="App__profileContainer__topSection__menuButton">
				<Link to="/">
					<LanIcon
						onMouseOver={() => {
							setIconInternFontSize("large")
							setIconInternColor("primary")
						}}
						onMouseLeave={() => {
							setIconInternFontSize("medium")
							setIconInternColor("action")
						}}
						fontSize={iconInternFontSize}
						color={iconInternColor}
					/>
				</Link>
			</Box>
			<Box className="App__profileContainer__topSection__refreshButton">
				<RefreshIcon 
					onMouseOver={() => {
						setIconFontSize("large")
						setIconColor("primary")
					}}
					onMouseLeave={() => {
						setIconFontSize("medium")
						setIconColor("action")
					}}
					fontSize={iconFontSize}
					color={iconColor}
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