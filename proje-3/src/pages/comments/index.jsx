import useFetch from "../../hooks/use-fetch";

export default function CommentsList(){

    const { data, loading} = useFetch("https://dummyjson.com/comments");

     if(loading) return <h1>Fetching Comments please wait</h1> 

    return (
        <div>
            <h1>Comment List Page</h1>
            <ul>
        {
            data?.comments?.length > 0 ?
            data?.comments.map(commentItem => <div>
                
                <label>{commentItem?.body}</label>
                <p>{commentItem?.body}</p>
            </div>)
            : null    
    }
      </ul>
        </div>
    )
}