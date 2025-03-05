import { createContext,useState,useContext, Children } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

    const [posts, setPosts] = useState([])
const fetchPosts = () => {
        axios.get('http://localhost:3000/api/posts')
        .then(res => setPosts(res.data))
        .catch((err) => console.error(err))    
}


    const initialPost = {
        id: "",
        title: "",
        content: "",
        image: "",
        tags: [],
}

const [ post,setPost] = useState(initialPost); 

const fetchSingoloPost = () => {
        axios.get('http://localhost:3000/api/posts' + '/' + id).then(res => setPost(res.data))
        .catch(err => console.error(err))    
}

}