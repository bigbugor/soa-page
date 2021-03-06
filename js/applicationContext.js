var sysUserTempRoot = 'template/sys/user/';
var quartzRoot ='template/quartz/'
var SoaContext = window.SoaContext = {};
window.limit = 10;
var BaseUrl = {
	sys:"http://localhost/sys-resource/sys/v1/",
	quartz : "http://localhost/quartz-resource/quartz/v1/"
}

var Urls ={
	
	sys:{
		login:BaseUrl.sys+"login",
		users:BaseUrl.sys+"users"
	}
	,quartz :{
		jobs : BaseUrl.quartz+"jobs"
	}
}



angular.module('applicationContext',['ngRoute','userControllerModule','quartzControllerModule','filterModule','soaDirective'])

.config(function($routeProvider){
	$routeProvider
	//首页
	//begin 用户管理
	.when('/users/:page',{
		controller:'users',
		templateUrl : sysUserTempRoot+'list.html'
	})
	.when('/user/add',{
		controller:'userAdd',
		templateUrl : sysUserTempRoot+'add.html'
	})
	//end 用户管理
	.when('/jobs/:page',{
		controller:'jobs',
		templateUrl : quartzRoot+"list.html"
	})
	.when('/job/add',{
		controller : 'jobsAdd',
		templateUrl : quartzRoot+'add.html'
	})
	.when('/job/update/:id',{
		controller : 'jobsUpdate',
		templateUrl : quartzRoot+'add.html'
	})
	.when("/cronHelp",{
		controller : 'help'
		,templateUrl : 'template/cronhelp/crontab.html'
	})
	
	.otherwise({
        redirectTo: '/users/1'
    })
    ;
})

;