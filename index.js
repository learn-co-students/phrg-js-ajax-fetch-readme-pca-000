const app = "I don't do much.";
const token = 'b1bfc1ea62fcc8a052f6170a38b6133cdcb6ba67'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

