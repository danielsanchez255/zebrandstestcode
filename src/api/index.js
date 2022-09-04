import axios from "axios";

const API = axios.create({ 
    baseURL: 'https://api.github.com',
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer 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",
        "Accept": "application/vnd.github.v3+json"
    } 
});

export const fetchGitHub = () => API.get('/repos/octocat/Spoon-Knife/issues?per_page=2').catch((error) => console.log("Error: ", error));

