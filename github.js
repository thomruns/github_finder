class Github {
  constructor(){
    this.client_id = '24194e3330c3aadb9d50';  //GitHub Oath code
    this.client_secret = '9fe54e818c019f33a413fd1b1ef6d49329f55494';  //GitHub Oath code
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

 async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile, //same as profile:profile since both const and property have identical names
      repos //same as repos:repos since both const and property have identical names
    }

  }

}