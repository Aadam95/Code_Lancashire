import React, {useState} from "react"

export default function GithubSearch() {

    const [error, setError] = useState("")
    const [user, setUser] = useState(null)

    function handleFormSubmit(event) {
            //    prevent default behaviour
            event.preventDefault()
    
            // create a form data object providing the form element
            let formData = new FormData(event.target)
            // convert the form data object to an usable object
            let data = Object.fromEntries(formData.entries())
    
            getUserDetailsFromGithub(data)
    }

    function getUserDetailsFromGithub(userInput) {

        setError("")
        setUser(null)
       
        fetch(`https://api.github.com/users/${userInput.username}`)
            .then((response) => response.json())
            .then((data) => {
    
    
    
                // handle error messages and UI
                if (data.message) {
                    setError(data.message)
                    return
                }
    
    
                // remove the class of hidden from the div with the id of user-info
                setUser(data)
    
    
            })
    }

    return(
        <>
            <form onSubmit={handleFormSubmit} action="" id="username-form" className="flex items-center w-full">
                <input type="text" name="username" id="" placeholder="Enter your Github username"
                className="border border-blue-800 rounded-l p-2 flex-grow" />
                <button className="bg-blue-500 text-white px-4 py-2.5 rounded-r">Search</button>
            </form>

            {
                user ? (<div id="user-info">
                    <div className="flex items-center gap-2">
                    <img src={user.avatar_url} alt="user image" id="userimage" 
                    className="w-16 h-16 rounded-full object-cover object-center" />
                    <h3 id="username">{user.login}</h3>
                    </div>
                
                    <div>
                        <span>Public repos</span>
                        <span id="public_repos">{user.public_repos}</span>
                    </div>

                    <div>
                     <span>Followers</span>
                     <span id="followers">{user.followers}</span>
                    </div>
                </div>) : <p id="error" className="text-red-500 my-2">
                    {error}
                </p>
            }
        </>
    )
}    