const token = 'cf5d8aa7c09360bf9439c57ec0c5f953d0f3b943'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
