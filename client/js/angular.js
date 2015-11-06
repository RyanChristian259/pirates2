var app = angular.module('myApp', ['ngRoute', 'ngResource']);

app.controller('shipsController',['$scope', '$http', '$location', '$routeParams', 'getIdService', '$route', function($scope, $http, $location, $routeParams, getIdService, $route) {


  $scope.currentUrl = $route.current.templateUrl;
  console.log($scope.currentUrl);

  $scope.addUser = function(){
    var payload = {
      'name': $scope.username
    };
    $http.post('/users', payload).then(function(response){
      console.log(response);
      $scope.username = 'User Saved';
    });
    $scope.getUser();
  };


  $scope.getUser = function () {
    // console.log('Tina the cat');
   $http.get('/users')
    .success(function(data) {
     $scope.userData = data;
    })
    .error(function(err) {
    });
  };

//Get Single UserId
  $scope.getSingleUserId = function (data) {
   getIdService.id = data._id;
   getIdService.editUserName = data.name;
   console.log(getIdService.id);
  };


//Get Single ShipId
  $scope.getShipId = function (data) {
   getIdService.currentShipId = data._id;
   getIdService.placeHolderName = data.name;
   getIdService.placeHolderMissions = data.missions;
   console.log(getIdService.currentShipId);
  };

  $scope.shipName = getIdService.placeHolderName;
  $scope.shipMissions = getIdService.placeHolderMissions;
  $scope.editUserName = getIdService.editUserName;

//add ship to user
 $scope.addShip = function(){
    var id = getIdService.id;
    var payload = {
      'name': $scope.name,
      'missions': $scope.missions
    };
    console.log(payload, 'payload');
    $http.put('/users/' + id + '/ships', payload).then(function(response){
      console.log('success');
    });
  };

//Update Ship
 $scope.updateShip = function(){
    var id = getIdService.currentShipId;
    var payload = {
      'name': $scope.shipName,
      'missions': $scope.shipMissions
    };
    $http.put('/ships/' + id, payload).then(function(response){
      console.log('success');
    });
  };

//Update User
 $scope.editUser = function(){
    var id = getIdService.id;
    var payload = {
      'name': $scope.editUserName,
    };
    $http.put('/users/' + id, payload).then(function(response){
      console.log('success');
    });
  };

//delete ship from user
 $scope.deleteShip = function(data){
    $http.delete('/ships/' + data).success(function(data){
      console.log('success');
      $scope.userData = data;
    })
    .error(function(err){
    });
      $scope.getUser();
  };

}]);//myController

