import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LockIcon from '@mui/icons-material/Lock';

const BottomSection = (props) => {
	return (
		<Box className="App__profileContainer__bottomSection"
		>
			<Box className="App__profileContainer__bottomSection__nameSection">
				<Typography variant="caption">My name is</Typography>
				<Typography variant="h5">Lorem Ipsum</Typography>
			</Box>
			<Box className="App__profileContainer__bottomSection__iconSection">
				<AccountCircleIcon fontSize="large"></AccountCircleIcon>
				<EmailIcon fontSize="large"></EmailIcon>
				<CakeIcon fontSize="large"></CakeIcon>
				<LocationOnIcon fontSize="large"></LocationOnIcon>
				<PhoneIphoneIcon fontSize="large"></PhoneIphoneIcon>
				<LockIcon fontSize="large"></LockIcon>
			</Box>
		</Box>
	);
}

export default BottomSection;