import axios from "axios";

const API = axios.create({ 
    baseURL: 'https://api.github.com/',
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'Bearer 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'
    } 
});

export const fetchGitHubUsers = (user) => API.get('search/users?q=' + user + '&per_page=10').catch((error) => console.log("Error: ", error));
export const fetchGitHubRepositories = (repositories) => API.get('search/repositories?q=' + repositories + '&per_page=10').catch((error) => console.log("Error: ", error));
