import { Navigate, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {useEffect} from 'react'

function BlogDetail() {
    let params = useParams();
    let url = 'http://localhost:3001/blogs/'+params.id;
    let {data : blog, loading, error} = useFetch(url);

    let navigate = useNavigate();

    useEffect(() => {
        if(error){
            setTimeout(()=>{
                navigate('/');
            },2000)
        }
    }, [error,navigate])//return redirect

    return (
        <div className='BlogDetail'>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blog && (
                <div>
                    <h3>{blog.title}</h3>
                    <p>Posted by - {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
            )}
        </div>
    );
  }
  
  export default BlogDetail;
  