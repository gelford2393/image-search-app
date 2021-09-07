import {useState, useEffect} from 'react'
import axios from 'axios'


const Api = () => {
    const count = 1;
    const [state, setState] = useState([]);
    useEffect(() => {
        axios.get('https://api.unsplash.com/photos?client_id=BZF4Ye06e5BGNf7LR__i6xquizTJ46-PwXG5eVoG8WY')
        .then((res) => {
            setState(res.data)
        })
    }, [count])
    return state;
  
}

export {Api}
