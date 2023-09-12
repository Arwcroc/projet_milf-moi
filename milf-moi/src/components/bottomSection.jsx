import React from "react";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LockIcon from '@mui/icons-material/Lock';

const BottomSection = (props) => {
	const icons = [
		{
			id: "account",
			comp: AccountCircleIcon,
			topText: "My name is",
			bottomText: props.userData.name.first + " " + props.userData.name.last
		},
		{
			id: "email",
			comp: EmailIcon,
			topText: "My mail is",
			bottomText: props.userData.email
		},
		{
			id: "birthday",
			comp: CakeIcon,
			topText: "My birthday is",
			bottomText: props.userData.dob.date
		},
		{
			id: "postal address",
			comp: LocationOnIcon,
			topText: "My postal address is",
			bottomText: props.userData.location.city + " - " + props.userData.location.country
		},
		{
			id: "phone number",
			comp: PhoneIphoneIcon,
			topText: "My phone number is",
			bottomText: props.userData.phone
		},
		{
			id: "password",
			comp: LockIcon,
			topText: "My password is",
			bottomText: props.userData.login.password
		},
	]

	const [selectedIcon, setSelectedIcon] = useState(icons[0]);

	return (
		<Box className="App__profileContainer__bottomSection"
		>
			<Box className="App__profileContainer__bottomSection__nameSection">
				<Typography variant="caption">{selectedIcon.topText}</Typography>
				<Typography variant="h5">{selectedIcon.bottomText}</Typography>
			</Box>
			<Box className="App__profileContainer__bottomSection__iconSection">
				{
					icons.map((icon) => {
						return (
							<icon.comp  
								key={icon.id} 
								fontSize={selectedIcon.id === icon.id ? "large" : "medium"}
								onMouseOver={() => setSelectedIcon(icon)}
								color={selectedIcon.id === icon.id ? "success" : "action"}
							/>
						)
					})
				}
			</Box>
		</Box>
	);
}

export default BottomSection;