import axios from 'axios';

export class GameModel {

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
      url:'http://localhost/list.php',
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
    gameToCreate.set('platform',JSON.stringify(platform));
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

  editGame(game) {

    let gameToUpdate = new FormData();
    if(game.id) gameToUpdate.set('id', game.id);
    if(game.title) gameToUpdate.set('title',game.title);
    if(game.platform) gameToUpdate.set('platform', JSON.stringify(game.platform));
    if(game.price) gameToUpdate.set('price', game.price);
    if(game.description) gameToUpdate.set('description',game.description);
    if(game.cover) gameToUpdate.set('cover',game.cover);
    if(typeof game.isFavorite !== 'undefined') gameToUpdate.set('isFavorite',game.isFavorite);
    
    let result = axios({
      method:'post',
      url:'http://localhost/edit.php',
      headers: {'Content-Type': 'application/json'},
      data : gameToUpdate
    })
      .then(function(response) {
        return response.data;
      });
    return result;
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
    let games = axios({
      method:'get',
      url:'http://localhost/list.php',
      headers: {'Content-Type': 'application/json'}
    })
      .then(function(response) {
        return response.data.filter(s => s.title.includes(title));
      });
    return games;
  }

}
