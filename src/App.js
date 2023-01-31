import React, { useEffect, useState, useContext } from "react"
import Items from "./components/Items"
import { Link, Routes, Route } from "react-router-dom"
import { Context } from "./Context"

function App() {


	return (
		<>
			<nav className="dib c">
				<Link to="/albums">ALBUMS</Link>
				&nbsp;
				<Link to="/posts">POSTS</Link>
			</nav>

			<Routes>
				<Route exact path="/albums" element={<Items url="https://mockend.com/enotowitch/router/posts" />} />
				<Route exact path="/posts" element={<Items url="https://mockend.com/enotowitch4/router2/posts" />} />
			</Routes>
		</>
	);
}

export default App;
