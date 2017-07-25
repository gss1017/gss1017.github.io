var services=angular.module('services',[])
services.factory('store',function ($http,$q) {
    return{
        themes:(function () {
            var d=$q.defer();//创立延迟对象，解决异步
            $http({//访问地址
                url:'./php/api.php?url=http://news-at.zhihu.com/ap' +
                'i/4/themes',

            }).then(function (data) {
                d.resolve(data.data)
            })
            return d.promise
        })(),
        getId: function (id) {
            var d = $q.defer();//创立延迟对象，解决异步
            $http({
                method:'GET',
                url: './php/api.php?url=http://news-at.zhihu.com/api/4/theme/' + id
                // api中第十条
            }).then(function (data) {
                d.resolve(data.data)
                // console.log(data.data)
            })
            return d.promise;
        },
        getNew: function () {
            var d = $q.defer();//创立延迟对象，解决异步
            $http({
                method:'GET',
                url: './php/api.php?url=http://news-at.zhihu.com/api/4/news/latest'
            }).then(function (data) {
                // console.log(data)
                d.resolve(data.data)
                // console.log(data.data)
            })
            return d.promise;
        },
        getShow: function (id) {
            var d = $q.defer();
            $http({
                method:'GET',
                url: 'php/api.php?url=http://news-at.zhihu.com/api/4/news/'+ id

            }).then(function (data) {
                d.resolve(data.data)

            })
            return d.promise;
        }
    }
})
