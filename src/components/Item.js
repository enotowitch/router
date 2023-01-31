import React, { useContext, useState } from "react"
import like from "../img/like.svg"
import liked from "../img/liked.svg"
import { Context } from "../Context"

export default function Item(props) {
	const { id, isLiked, title, url } = props.obj

	const { likeFn } = useContext(Context)


	return (
		<div className="post">
			<strong>{id}</strong>
			<div>{title}</div>
			{isLiked ?
				<img src={liked} className="like" onClick={() => likeFn(id)} />
				:
				<img src={like} className="like" onClick={() => likeFn(id)} />
			}
		</div>
	)
}