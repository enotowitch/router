import React, { useState } from "react"
import like from "../img/like.svg"
import likd from "../img/liked.svg"

export default function Album(props) {
	const { id, title, userId } = props.imgObj

	const [liked, likedSet] = useState(false)


	return (
		<div className="post">
			<strong>{id}</strong>
			<div>{title}</div>
			{liked ?
				<img src={likd} className="like" onClick={() => likedSet(prev => !prev)} />
				:
				<img src={like} className="like" onClick={() => likedSet(prev => !prev)} />
			}
		</div>
	)
}