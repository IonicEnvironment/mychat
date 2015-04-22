var app = angular.module('mobreg', ['ionic'])
app.config(function($stateProvider,$urlRouterProvider){
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
});

app.run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
        console.log(navigator.contacts);
        adata();
        
        function adata()
        {
            var options = new ContactFindOptions();
                options.filter="";
                options.multiple=true; 
                var fields = ["*"];
                navigator.contacts.find(fields, onSuccess, onError, options);
        }
        
        function onSuccess(contacts) {
            alert(JSON.stringify(contacts[7]));
                for (var i = 0; i < contacts.length; i++) {
                    
                    alert(JSON.stringify(contacts[i].phoneNumber[0].value));
                }
            }
        
        function onError()
{
alert("Some Error Occured");
}
    });
});
app.controller('mobileregister',['$scope','$state',function($scope,$state){
    $scope.callme = function()
    {
        if(angular.isUndefined(this.fname) || this.fname === null)
        {
            navigator.notification.alert("Please enter Firstname",function(){},"Notification","OK");
        }
        else if(angular.isUndefined(this.lname) || this.lname === null)
        {
            navigator.notification.alert("Please enter Lastname",function(){},"Notification","OK");
        }
        else if(angular.isUndefined(this.mobnum) || this.mobnum === null)
        {
            navigator.notification.alert("Please enter Mobile Number",function(){},"Notification","OK");
        }
        else
        {
            alert("name : "+this.fname+" "+this.lname+"\nmobile number : "+this.mobnum);
            $state.go("signup");
        }
    }
}]);
