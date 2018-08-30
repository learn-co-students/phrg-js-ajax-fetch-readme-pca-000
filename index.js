const app = "I don't do much.";

const token = '63418df250b50a6009dca17a73669393f0587dd3'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
