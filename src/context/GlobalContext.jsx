import { createContext,useState,useContext, Children } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"

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
const {id} = useParams()
const [ post,setPost] = useState(initialPost); 

const fetchSingoloPost = (id) => {
        axios.get('http://localhost:3000/api/posts' + '/' + id).then(res => setPost(res.data))
        .catch(err => console.error(err))    
}

const value = {
    posts,
    post,
    fetchPosts,
    fetchSingoloPost,
};

return(
    <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
)

}

 const useGlobalContext = useContext(GlobalContext)
 export{
    GlobalProvider,
    useGlobalContext
 }