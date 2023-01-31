import React, { useEffect, useState } from "react"
import Album from "./components/Album"
import Post from "./components/Post"
import { Link, Routes, Route } from "react-router-dom"

function App() {

	const [photos, photosSet] = useState([])
	const [posts, postsSet] = useState([])

	// ! photos
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums`)
			.then(response => response.json())
			.then(json => {
				photosSet(json)
			})
	}, [])
	// ? photos

	// ! posts
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then(response => response.json())
			.then(json => {
				postsSet(json)
			})
	}, [])
	// ? posts

	const photos_ = photos.map(imgObj => <Album imgObj={imgObj} />)
	const posts_ = posts.map(postObj => <Post postObj={postObj} />)

	return (
		<>
			<nav className="dib c">
				<Link to="/photos">ALBUMS</Link>
				&nbsp;
				<Link to="/posts">POSTS</Link>
			</nav>

			<Routes>
				<Route path="/photos" element={photos_} />
				<Route path="/posts" element={posts_} />
			</Routes>
		</>
	);
}

export default App;
