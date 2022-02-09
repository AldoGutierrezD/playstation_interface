Vue.component('games',{
    props: {
        background: String,
        title: String,
        hours: Number
    },
    template: `
        <div class="w-1/3 m-2">
            <div class="w-full h-28 bg-cover rounded-2xl" :class="background"></div>
            <div class="w-full mt-1 rounded-b-2xl py-1 pl-3">
                <h2 class="text-sm ">{{title}}</h2>
                <h3 class="text-sm font-gilroy-light">{{hours}} hrs</h3>
            </div>
        </div>    
    `
});

new Vue({
    el: '#main'
});