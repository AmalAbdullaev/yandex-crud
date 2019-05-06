import axios from 'axios';

export class Game {

  getGame() {}
  getListOfGames() {
    let games = axios({
      method:'get',
      url:'/api/database.json',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
      .then(function(response) {
        return response.data;
      });
    return games;
  }
  deleteGame() {}
  addGame() {}
  editGame() { }
  vote() {}
}
