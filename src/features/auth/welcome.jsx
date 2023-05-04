import {useSelector} from 'react-redux'
import { selectCurrentUser, selectCurrentToken } from './authSlice'
import { Link } from 'react-router-dom'

const Welcome = () =>{
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)

    const welcome = user? `Welcome ${user}` : `Welcome`
    const tokenAbbrev = `${token.slice(0,9)}...`

    const content =(
        <section>
            <h1>{welcome}</h1>
            <p>Token: {tokenAbbrev}</p>
            <p><Link to="/user-list">Go to the user List</Link></p>
        </section>
    )

    return content
}

export default Welcome