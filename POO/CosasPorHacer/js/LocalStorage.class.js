class ManipularLocalStorage {
  static ArrayTweets = [];

  static AgregarTweetLocalStorage(contenidoTweet) {
    this.ArrayTweets = this.ObtenerLocalStorage();

    this.ArrayTweets.push(contenidoTweet);

    localStorage.setItem("tweets", JSON.stringify(this.ArrayTweets));
  }

  static ObtenerLocalStorage() {
    let tweetsObtenidosLocalStorage = [];
    if (localStorage.getItem("tweets") === null) {
      return tweetsObtenidosLocalStorage;
    }
    return JSON.parse(localStorage.getItem("tweets"));
  }
}