import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect} from "react"
import {useGlobalContext} from "../context/GlobalContext"

const SingleProducts = () => {

    const {id} = useParams()

    // const initialPost = {
    //         id: "",
    //         title: "",
    //         content: "",
    //         image: "",
    //         tags: [],
    // }
    
    // const [ post,setPost] = useState(initialPost); 
     const {post,fetchpost} = useGlobalContext()

    
    
     useEffect(() => {
            // axios.get('http://localhost:3000/api/posts' + '/' + id).then(res => setPost(res.data))
            // .catch(err => console.error(err))
        fetchpost(id)
    },[id])

   



    return(
        <h1>prodotto selezionato: {post.title}</h1> 
    )
}

export default SingleProducts