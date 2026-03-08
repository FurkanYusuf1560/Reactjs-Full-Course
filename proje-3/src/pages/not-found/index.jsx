import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return (
        <div>
            <h1>This page doesn't exist</h1>
            <Link to={'/recipe-list'}>Go to recipe List page</Link>
        </div>
    )
}