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
       
    });
});

app.controller('mobileregister',['$scope','$state',function($scope,$state){
    
    $scope.mobileRegister = function()
    {
        /*if(angular.isUndefined(this.fname) || this.fname === null)
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
        {*/
            //alert("name : "+this.fname+" "+this.lname+"\nmobile number : "+this.mobnum);
            $state.go("signup");
       // }
    }
}]);

app.controller('contactctrl',['$scope',function($scope){
    
    $scope.$on('$ionicView.enter',function(){
        try
        {
            var options = new ContactFindOptions();
            options.filter="";
            options.multiple=true; 
            var fields = ["*"];
    
            $scope.contactData = [];
            $scope.restData = [];
            navigator.contacts.find(fields, onSuccess, onError, options);
    
            function onSuccess(contacts) {
                for(x in contacts)
                {
                    if(contacts[x]['phoneNumbers'] === "null" || contacts[x]['phoneNumbers'] === null)
                    {
                        $scope.restData.push({mob:contacts[x]['phoneNumbers'],name:contacts[x]['displayName'],type:contacts[x]['phoneNumbers'],photo:contacts[x]['photos'][0].value});
                    }
                    else
                    {
                        $scope.contactData.push({mob:contacts[x]['phoneNumbers'][0].value,name:contacts[x]['displayName'],type:contacts[x]['phoneNumbers'][0].type,photo:contacts[x]['photos'][0].value});
                    }
                }
            }

            function onError()
            {
              alert("Some Error Occured");
            }
        }
        catch(ex)
        {
            alert(ex.message);
        }
       alert("contact");
    });
    
    $scope.checkit = function()
    {
        alert("checkit");
    }
}]);
