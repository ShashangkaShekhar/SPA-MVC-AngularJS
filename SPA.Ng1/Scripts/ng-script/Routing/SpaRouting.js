/*
*    Created By: Shashangka Shekhar;
*    Create Date: 20-6-2016 (dd-mm-yy); 
*    Updated Date: 20-6-2016 (dd-mm-yy);
*    Dependencies: ['ngRoute'];
*/

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    //Use the $locationProvider to configure how the application deep linking paths are stored.
    $locationProvider.html5Mode({
        enabled: true, //(default: false) If true, will rely on history.pushState to change urls where supported. Will fall back to hash-prefixed paths in browsers that do not support pushState.
        requireBase: false //(default: true) When html5Mode is enabled, specifies whether or not a tag is required to be present. If enabled and requireBase are true, and a base tag is not present, an error will be thrown when $location is injected.
        //rewriteLinks: false //(default: true) When html5Mode is enabled, enables/disables url rewriting for relative links.
    }).hashPrefix('!'); //The default value for the prefix is '!'.


    //Use for configuring routes.
    $routeProvider
        //.When - Adds a new route definition to the $route service.
       .when('/', {
           templateUrl: '/Template/Home.html',
           controller: 'HomeController'
       }) // Home Page
       .when('/Company', {
           templateUrl: '/Template/Company.html',
           controller: 'CompanyController'
       }) // Company Page
       .when('/Contact', {
           templateUrl: '/Template/Contact.html',
           controller: 'ContactController'
       }) // Contact Page
       .otherwise({ redirectTo: "/" });//Sets route definition that will be used on route change when no other route definition is matched.
}]);