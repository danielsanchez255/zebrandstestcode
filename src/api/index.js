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
