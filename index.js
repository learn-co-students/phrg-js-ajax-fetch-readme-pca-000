const token = '602d003db6af2cff671d95526a5727bd6f46df2a'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json =>console.log(json));
