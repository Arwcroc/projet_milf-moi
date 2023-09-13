import React from "react";
import './App.css';
import "./components/profileContainer.jsx"
import ProfileContainer from "./components/profileContainer.jsx";
import {
	Link,
	Route,
	Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
		<Routes>
			<Route path="/" element={
				<>
					<a href= "https://google.fr" target="_blank" rel="noreferrer">Google</a>
					<Link to="/profile">Profile</Link>
					<a href= "https://www.youtube.com/watch?v=dQw4w9WgXcQ">Safe Zone</a>
				</>
			}/>
			<Route path="/profile" element={
				<ProfileContainer/>
			}/>
		</Routes>
    </div>
  );
}

export default App;
