import { useGetUsersQuery } from "./usersApiSlice";
import { Link } from "react-router-dom";

export const UserList = () =>{
    const {data:users, isLoading, isSuccess, isError,error} = useGetUsersQuery

    let content

    if(isLoading){
        content = (
            <div>Loading</div>
        )
    }

    else if(isError) {
        content=(
            <p>{error}</p>
        )
    }

    else if (isSuccess){
        content = (
            <ul>
                {users.map((user, i)=> <li key={i}>{user.username}</li>)}
            </ul>
        )
    }

    return content
}