class Github {
  constructor(){
    this.client_id = '24194e3330c3aadb9d50';  //GitHub Oath code
    this.client_secret = '9fe54e818c019f33a413fd1b1ef6d49329f55494';  //GitHub Oath code
  }

 async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile //same as profile:profile as both const and property have identical names
    }

  }

}