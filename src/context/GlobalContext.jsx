import { createContext,useState,useContext, Children } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({Children}) => {

    const [posts, setPosts] = useState([])

    useEffect( () => {
        axios.get('http://localhost:3000/api/posts')
        .then(res => setPosts(res.data))
        .catch((err) => console.error(err))
    })
}