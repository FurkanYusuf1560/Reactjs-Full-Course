import { useEffect, useState } from "react"

export default function Users(){
    
    const [usersList, setUsersList] = useState([])
    const [pending, setPending] = useState(false)

    async function fetchAllUsers() {
        try {
            setPending(true)
            const apiResponse = await fetch('https://dummyjson.com/users')
            const result = await apiResponse.json(); 

            if(result?.users){
                setUsersList(result?.users)
                setPending(false)
            } else {
                setUsersList([])
                setPending(false)
            }

        } catch (error) {
            console.log(error);
                
        }
    }

    // function handleFetchListOfUsers(){
    //     fetchAllUsers()
    // }

    // useEffect(()=>{
    //     fetchAllUsers()
    // }, [])

    if(pending) return <h1>Fetching Users! wait </h1>
    
    
    return <div>
        <h1>All User List</h1>
        <button onClick={fetchAllUsers}>Fetch Users List</button>
        <ul>
            {
                usersList && usersList.length > 0 ? 
                usersList.map(userItem=> <li key={userItem?.id}>
                    <p>{userItem?.firstName} {userItem?.lastName} {userItem?.age}</p>
                </li>) : <h1>No users Found</h1>
            }
        </ul>
    </div>
}