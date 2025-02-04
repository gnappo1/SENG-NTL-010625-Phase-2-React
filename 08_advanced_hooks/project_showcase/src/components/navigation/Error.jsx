import { useRouteError } from "react-router-dom"

const Error = () => {
    const {status, error} = useRouteError()

    console.log("🚀 ~ Error ~ error:", error)
    return (
        <div>
            <h4>{error.message}</h4>
        </div>
    )
}

export default Error