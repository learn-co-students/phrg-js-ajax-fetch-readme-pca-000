const app = "I don't do much.";

const token = 'YOUR_TOKEN_HERE' // replaced my access token before PR
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
