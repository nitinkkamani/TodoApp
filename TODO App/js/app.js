angular.module('todoApp',[]).
controller('todoController',['$scope',function($scope){

	$scope.todos=[];

	var todoData = localStorage['todoList'];
		//storing array as string in local storage
	if (todoData !== undefined) {
		$scope.todos = JSON.parse(todoData);

	}

	$scope.addTodo = function(){
		$scope.todos.push({'title': $scope.newTodo,'done':false})
		$scope.newTodo = ''
		localStorage['todoList'] = JSON.stringify($scope.todos);

	}

	$scope.clearCompleted = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done
		})
	}

	$scope.editTodo = function(msg){
		console.log(msg);

		for (var i = 0; i < $scope.todos.length; i++) {
			if($scope.todos[i].title == msg) {
				$scope.todos[i].title = event.target.innerText;
			}
		}

		localStorage['todoList'] = JSON.stringify($scope.todos);
		console.log($scope.todos)

		event.target.contentEditable = event.target.contentEditable ==  "false" ? "true" : "false";
	}

	$scope.enterAgain = function(msg) {
		if(event.which == 13 && msg!=""){
			$scope.editTodo(msg);

		}
		
	}


}])