let main = new Vue({
    el: '#menu',
    methods:{
        showMenu: function(){
           let menuItem = document.getElementById('menu-container');
           menuItem.style.visibility = menuItem.style.visibility == 'hidden' ? 'visible' : 'hidden';
        }
    }
})