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
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
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
    bodyFormData.set('id',id);

    let game = axios({
      method: 'post',
      url: 'http://localhost/delete.php',
      data: bodyFormData,
      config : {headers: {'Content-Type': 'application/json' }},
    }).then (function(response) {
      return response;
    }).catch(error => {
      console.log(error);
    });
    return game;
  }

  addGame(title,platform,price,description,cover) {
    let gameToCreate = new FormData();
    gameToCreate.set('title',title);
    gameToCreate.set('platform',platform);
    gameToCreate.set('price', price);
    gameToCreate.set('description',description);
    gameToCreate.set('cover',cover);
    
    let game = axios({
      method:'post',
      url:'http://localhost/add.php',
      headers: {'Content-Type': 'application/json'},
      data : gameToCreate
    })
      .then(function(response) {
        return response.data;
      });
    return game;
  }

  editGame(id,title,platform,price,description,cover) {
    let gameToCreate = new FormData();
    gameToCreate.set('id', id);
    gameToCreate.set('title',title);
    gameToCreate.set('platform',platform);
    gameToCreate.set('price', price);
    gameToCreate.set('description',description);
    gameToCreate.set('cover',cover);
    
    let game = axios({
      method:'post',
      url:'http://localhost/edit.php',
      headers: {'Content-Type': 'application/json'},
      data : gameToCreate
    })
      .then(function(response) {
        return response.data;
      });
    return game;
  }

  voteGame(id, rating) {
    let gameToCreate = new FormData();
    gameToCreate.set('id', id);
    gameToCreate.set('rating',rating);
    
    let game = axios({
      method:'post',
      url:'http://localhost/vote.php',
      headers: {'Content-Type': 'application/json'},
      data : gameToCreate
    })
      .then(function(response) {
        return response.data;
      });
    return game;
  }

  searchGame(title) {
    
  }
}
