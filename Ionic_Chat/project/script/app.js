angular.module('mobreg', ['ionic'])
.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    
    $stateProvider
    .state('home',{
        url:'/',
        templateUrl:'home.html'
    })
    .state('signup',{
        url:'/',
        templateUrl:'signup.html'
    })
})