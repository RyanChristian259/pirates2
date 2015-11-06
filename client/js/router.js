app.config(function ($routeProvider) {
 $routeProvider

    .when('/', {
     templateUrl: 'pages/home.html',
     controller:'shipsController',
   })

    .when('/user', {
     templateUrl: 'pages/user.html',
     controller:'shipsController',
   })

     .when('/edit', {
     templateUrl: 'pages/editShip.html',
     controller:'shipsController',
   })

   .otherwise({redirectTo: '/home'});
});



