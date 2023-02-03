import { useEffect, useState } from "react";

export function useLocalstorage(key, initialValue){
    const [state, setState] = useState(() => {
		if (typeof window !== 'undefined') {
			try {
				const localStorageValue = localStorage.getItem(key);
				return localStorageValue ? JSON.parse(localStorageValue) : initialValue;
			} catch (error) {
				return initialValue;
			}
		} else {
			return initialValue;
		}
    })

    useEffect(() => {
		console.log('state = ', state)
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState]
}