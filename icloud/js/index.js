window.addEventListener("DOMContentLoaded",function () {
    var leftTop=document.querySelector(".left-top");
    var leftList=document.querySelector(".left-list");
    var leftHeight=document.documentElement.clientHeight;
    var lToph=leftTop.offsetHeight;
    leftList.style.height=leftHeight-lToph+"px";

    var setting=document.querySelector('.setting');
    var span=document.querySelectorAll('.setting span');
    setting.onmouseover=function () {
        span.forEach(function (v) {
            v.style.background="#fff";
        });
    };
    setting.onmouseout=function () {
        span.forEach(function (v) {
            v.style.background="";
        });
    }

});
        var todos=[{
            id:1,
            title:"任务1",
            color:"#5DFF1A",
            todos:[{
                title:"走走停停",
                date:new Date(),
                done:false
            },{
                title:"走走停停22",
                date:new Date(),
                done:true
            },{
                title:"走走停停3232",
                date:new Date(),
                done:true
            },{
                title:"走走停停43343",
                date:new Date(),
                done:true
            }]
        },{
            id:2,
            title:"任务2",
            color:"#FEF216",
            todos:[{
                title:"kkkkkkkk54",
                date:new Date(),
                done:true
            },{
                title:"kkkkkkkk656",
                date:new Date(),
                done:false
            },{
                title:"kkkkkkkk87",
                date:new Date(),
                done:false
            },{
                title:"kkkkkkk9898k",
                date:new Date(),
                done:false
            }]
        },{
            id:3,
            title:"任务3",
            color:"#FE772A",
            todos:[{
                title:"kzzzzz1221",
                date:new Date(),
                done:false
            },{
                title:"kzzzzz4343",
                date:new Date(),
                done:true
            },{
                title:"kzzzzz54545",
                date:new Date(),
                done:true
            },{
                title:"kzzzzz66767",
                date:new Date(),
                done:true
            }]
        },{
            id:4,
            title:"任务4",
            color:"#FE1D8A",
            todos:[{
                title:"gtgththth",
                date:new Date(),
                done:true
            },{
                title:"gtcscs",
                date:new Date(),
                done:true
            },{
                title:"gtfvf",
                date:new Date(),
                done:false
            },{
                title:"gtgnhynyn",
                date:new Date(),
                done:false
            }]
        }
        ];
        var color=["#5DFF1A","#FEF216","#FE772A",
            "#FE1D8A","#E31BFE","#681AFE","#17BEFE"];
        var app=angular.module("app",[]);
        app.controller("ctrl",function ($scope,$filter) {
            $scope.todos=todos;
            $scope.colors=color;
            //获取项目长度
            $scope.getNum=function () {
                $scope.index=$scope.todos.length-1;
                $scope.color=todos[($scope.index-1)].color;
            };
            $scope.getNum();
            //添加新项目
            $scope.addList=function () {
                var len=$scope.todos.length+1;
                $scope.todos.push({
                    id:len,
                    title:"任务"+len,
                    color:color[(len-1)%7],
                    todos:[]
                });
                $scope.index=$scope.todos.length-1;
                $scope.getTotal();
            };
            //获取完成项目总数
            $scope.getTotal=function () {
                $scope.znum=$filter('filter')(todos[$scope.index].todos,true);
                $scope.maxlen=$scope.znum.length;
            };
            $scope.getTotal();
            
            //选中项目
            $scope.selectedItem=function (i){
                $scope.index=i;
                $scope.flag=false;
                $scope.scolor=$scope.todos[i].color;
                $scope.sname=$scope.todos[i].title;
                $scope.getTotal();
            };
            
            //清除所有完成项
            $scope.delItem=function () {
                $scope.allItem=$filter('filter')(todos[$scope.index].todos,false);
                $scope.todos[$scope.index].todos=$scope.allItem;
                $scope.getTotal();
            };
            
            //显示完成项目
            $scope.flag=false;
            $scope.rotates=function () {
                $scope.flag=!$scope.flag;
            };

            //添加新内容
            $scope.addCon=function () {
                $scope.todos[$scope.index].todos.push({
                    title:'',
                    date:new Date(),
                    done:false
                });
            };

            //已完成的内容
            $scope.suc=function (o) {
                o.done=true;
                $scope.getTotal();
            };
            //没完成内容
            $scope.nocon=function (o) {
                o.done=false;
                $scope.getTotal();
            };
            
            //是否显示选项
            $scope.flag1=false;
            $scope.issel=function () {
                $scope.flag1=!$scope.flag1;
            };

            //改list名字
            $scope.sname=$scope.todos[$scope.index].title;
            $scope.update=function () {
                $scope.todos[$scope.index].title=$scope.sname;
                $scope.todos[$scope.index].color=$scope.scolor;
                $scope.flag1=false;
            };
            //切换颜色
            $scope.scolor=$scope.todos[$scope.index].color;
            $scope.setcolor=function (i) {
                $scope.scolor=$scope.colors[i];
            };
            
            //删除list
            $scope.delList=function () {
                $scope.todos.splice($scope.index,1);
                $scope.index=$scope.todos.length-1;
                $scope.flag1=false;
            }
        });