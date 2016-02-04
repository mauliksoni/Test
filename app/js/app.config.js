angular.module('inceptionApp').config(function($urlRouterProvider, $stateProvider, $httpProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url: '/app/home',
		templateUrl: '/views/home.html',
		controller: 'AppHomeCtrl'
	});
	
})

.run(function($window,$state) {
	var params = $window.location.search.substring(1);

	if (params && $window.opener && $window.opener.location.origin === $window.location.origin) {
		var pair = params.split('=');
		var code = decodeURIComponent(pair[1]);
		$window.opener.postMessage(code, $window.location.origin);
	}
	
	//Default Home view
	$state.go('home');
});
