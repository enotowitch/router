import React from "react"

export default function Post(props) {

	const { id, body, title, userId } = props.postObj

	return (
		<div className="post">
			<strong>{id}. </strong>
			<span>{title}</span>
			<div>{body}</div>
		</div>
	)
}