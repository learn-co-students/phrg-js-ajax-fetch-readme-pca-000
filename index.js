const token =  '109fe9b8a30cc52f362cfe336c3cc59b8bcf77b0'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
