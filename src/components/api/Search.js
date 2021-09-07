import {useState, useEffect} from 'react'
import axios from 'axios';

const Search = (props) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/photos?&query=${props}&client_id=BZF4Ye06e5BGNf7LR__i6xquizTJ46-PwXG5eVoG8WY`)
        .then((res) => {
            setState(res.data.results)
        })
    }, [props])
    return state;
  
}

export {Search}
