let main = new Vue({
    el: '#menu',
    data:{
    },
    methods:{
        teacherRequest : function(){
            alert("Запрос по данным учителя");
        },
        scheduleRequest : function(){
            alert("Запрос расписания");
        },
        newsRequest : function(){
            alert("Запрос новостей");
        }
    }
})