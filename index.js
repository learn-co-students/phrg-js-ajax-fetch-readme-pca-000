const app = "I don't do much.";

const token = 'f40b3c95f59b8e715c2bb53d2efc6b3f17ee9ba4'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
