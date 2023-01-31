import React, { useContext, useEffect } from "react"
import { Context } from "../Context"
import Item from "./Item"

export default function Items(props) {

	const { fetchFn, info } = useContext(Context)

	// useEffect(() => { ??? // no fetch
	fetchFn(props.url) // todo infinite fetch
	// }, []) ??? // no fetch

	const items = info && info.map(item => <Item obj={item} />)

	return (
		<>
			{items}
		</>
	)
}