import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {

	const [info, infoSet] = useState()

	function likeFn(id) {
		const updated = info.map(item => item.id === id ? { ...item, isLiked: !item.isLiked } : item)
		infoSet(updated)
	}

	function fetchFn(url) {
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				infoSet(data);
			});
	}

	return (
		<Context.Provider value={{ info, likeFn, fetchFn }}>
			{children}
		</Context.Provider>
	)
}

export { ContextProvider, Context }