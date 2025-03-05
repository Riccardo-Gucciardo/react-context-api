import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect,useState } from "react"

const SingleProducts = () => {

    const {id} = useParams()

    const initialPost = {
            id: "",
            title: "",
            content: "",
            image: "",
            tags: [],
    }
    
    const [ post,setPost] = useState(initialPost); 
    
    useEffect(() => {
            axios.get('http://localhost:3000/api/posts' + '/' + id).then(res => setPost(res.data))
            .catch(err => console.error(err))

    },[id])

    return(
        <h1>prodotto selezionato: {post.title}</h1> 
    )
}

export default SingleProducts