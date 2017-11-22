var toDoApp=angular.module('toDoApp');

toDoApp.directive('topNavBar',function(){
	return{
		restrict:'E',
		templateUrl:'./template/TopNavBar.html'
	}
})
toDoApp.directive('sideNavBar',function(){
	return{
		restrict:'E',
		templateUrl:'./template/SideNavBar.html'
	}
})
toDoApp.directive('addNote',function(){
	return{
		restrict:'E',
		templateUrl:'./template/AddNote.html'
	}
});