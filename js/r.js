var router = new VueRouter({
    routes:[
        { path: '/', component: Home},
        { path: '/Info', component: Info,
               children:[
                   { path: '', component: List },
                   { path: 'list/:id', component: Con }
                   ]
        },
        { path: '/Doc', component: Doc,
            children:[
                { path: '', components: {left:left,right:right} }
            ]
        },
        {path:"/login",component:Login},
        { path: '*'  ,redirect:"/" },
    ] 
})
