window.addEventListener("load", function(){
    handleFormSubmit()
})

function handleFormSubmit() {
    let form = document.getElementById("username-form")
    
    form.addEventListener("submit", function(event){
        event.preventDefault()

        let formData = new FormData(form)
        let data = Object.fromEntries(formData.entries())

        getUserDetailsFromGithub(data)
    })
}

function getUserDetailsFromGithub(userInput) {
    fetch(`https://api.github.com/users/${userInput.username}`)
    .then((response) => response.json())
    .then((data) => {
        let userimage = document.querySelector("#userimage")
        let usernameTag = document.querySelector("#username")
        let profileLink = document.querySelector("#profile-link")
        let usernameLink = document.querySelector("#username-link")
        let public_repos = document.querySelector("#public_repos")
        let followers = document.querySelector("#followers")
        
        let profileUrl = data.html_url

        profileLink.setAttribute('href', profileUrl)
        usernameLink.setAttribute('href', profileUrl)

        usernameTag.innerHTML = data.login
        followers.innerHTML = data.followers
        public_repos.innerHTML = data.public_repos
        userimage.setAttribute("src", data.avatar_url)

        console.log('data', data)
    })
}

function saveSearch(username) {
    let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    if (!recentSearches.includes(username)) {
        recentSearches = [username, ...recentSearches.slice(0, 4)];
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }
}

function