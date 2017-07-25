
var app=angular.module("app",[ 'ngRoute','services','ngSanitize'])//没有的不能多写，这里多写，程序无法执行
app.directive("news",function () {
    return{
        template:"<div class='content'><a href='{{link}}'><div class='fleft'>{{title}}</div><img src='{{imgurl}}' alt=''></a></div>",
        scope:{
                imgurl:"@imgurl",
                title:"@title",
                link:"@link"
        }
    }
})

app.config(function ($routeProvider) {
    $routeProvider.when('/', {//主页数据的取出
        templateUrl: "tpl/home.html",
        controller: function ($scope, $routeParams, store) {
            store.getNew().then(function (data) {
                $scope.data1 = data.stories;
            })


        }
    }).when('/list/:id', {
        templateUrl: 'tpl/list.html',
        controller: function ($scope, $routeParams, store) {
            var id = $routeParams.id;
            store.getId(id).then(function (data) {
                $scope.b = data.background;
                $scope.d = data.description;
                $scope.name = data.name;
                $scope.data1 = data.stories;
                // console.log($scope.d)
                $scope.edit = data.editors;
            })

            // 不是getShow
        }
    }).when('/show/:id',{
        templateUrl:"tpl/show.html",
        controller:function ($scope,$routeParams,store) {
            var id=$routeParams.id;
            store.getShow(id).then(function(data){
                $scope.data1 = data;
                console.log($scope.data1 )
            })
        }
    }).when('/shownews/:id', {
        templateUrl: "tpl/shownews.html",
        controller: function ($scope, $routeParams, store) {
            var id = $routeParams.id;
            store.getShow(id).then(function (data) {
                $scope.data1 = data;
                console.log($scope.data1)
            })
        }
    })
})

// 公用导航
app.run(function ($rootScope, store) {//不需要在控制器内
    store.themes.then(function (data) {//从服务模块接收数据themes
        $rootScope.data = data.others;
    })
})

app.controller("c1", function ($scope) {

})


app.controller('top',function ($scope,$filter) {
    $scope.aa=1

})
// 首页banner指令
app.directive('banner',function () {
    return{
        templateUrl:"./tpl/banner.html",//????因为是在home.html中调用，所以用./
        // replace:true,
        link:function (scope,element,attrs) {
            // console.log(element)
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            });
        }
    }
})
// 各页导航指令
app.directive('navh',function(){
    return {
        templateUrl:"./tpl/navH.html",
        link:function (scope,element,attrs) {
                var flag=true;
                $(".xuanxiang").click(function () {
                    if(flag){
                        $(".select").css("left","0")
                        flag=false
                    }else{
                        $(".select").css("left","-4.78rem")
                        flag=true
                    }
                })
        }
    }
})
app.directive('navl',function(){
    return {
        templateUrl:"./tpl/navL.html",
        link:function (scope,element,attrs) {
            var flag=true;
            $(".xuanxiang").click(function () {
                if(flag){
                    $(".select").css("left","0")
                    flag=false
                }else{
                    $(".select").css("left","-4.78rem")
                    flag=true
                }
            })
        }
    }
})
app.directive('navs',function(){
    return {
        templateUrl:"./tpl/navS.html",
        link:function (scope,element,attrs) {
        }
    }
})
app.directive('navnews',function(){
    return {
        templateUrl:"./tpl/navNews.html",
        link:function (scope,element,attrs) {
        }
    }
})











