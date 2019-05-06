import axios from 'axios';
import qs from 'qs';

export class Game {

  getGame(id) {
    let game = axios({
      method:'get',
      url:'http://localhost/get.php',
      params : {
        id:id
      },
      headers: {'Content-Type': 'application/json'}
    })
      .then(function(response) {
        return response.data;
      });
    return game;
  }

  getListOfGames() {
    let games = axios({
      method:'get',
      url:'/api/database.json',
      headers: {'Content-Type': 'application/json'}
    })
      .then(function(response) {
        return response.data;
      });
    return games;
  }

  deleteGame(id) {

    let bodyFormData = new FormData();
    bodyFormData.set('id','5');

    let game = axios({
      method: 'post',
      url: 'http://localhost/delete.php',
      data: bodyFormData,
      config : {headers: {'Content-Type': 'application/json' }},
    }).then (function(response) {
      return response;
    });
    return game;
  }
  addGame() {}
  editGame() { }
  vote() {}
}
