import { useEffect } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"

const PostList = () => {

    
    // const [posts, setPosts] = useState([])
 
 
    const {posts,fetchPosts} = useGlobalContext()

    if (posts == []){
        fetchPosts()
    }
 
 
    useEffect( () => {
        // axios.get('http://localhost:3000/api/posts')
        // .then(res => setPosts(res.data))
        // .catch((err) => console.error(err))
    })


    return(
        <>
        <div className="container">
            <div className="row">
                {posts.map((elem) => {

                        const {id,title,tags} = elem
                        
                        return(
                            <div key={id} className="col-5">
                                <div className="card" >
                                    <div className="card-body">
                                        <h4 className="card-title">{title}</h4>
                                        <p className="card-text">{tags}</p>

                                        <NavLink to={'/PostList/' + id}>
                                            <button>vai al Post</button>
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        )
                    })    

                }
            </div>

        </div>
    </>)
    

}

export default PostList