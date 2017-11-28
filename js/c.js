var Home=Vue.component("Home",{
    template:`<div class="home">
<Nav></Nav>
<div class="banner">
<img src="img/qjxp0814_18.jpg" alt="">
</div>
</div>`,
})
var Nav=Vue.component("Nav", {
    template: `<ul class="Nav">
<router-link  :to="item.url"  v-for="(item,key) in navData" :key="key" exact tag="li">{{item.title}}</router-link>
<router-link  to="/login"  v-if="!islogin"  exact tag="li" >登录</router-link>
<span v-if="islogin" class="info" @click="show">
{{name}}
<span  v-show="isshow" @click="logout" class="logout">退出</span>
</span>
</ul>`,
    data() {
        return {
            navData: [
                {title: '首页', url: '/'},
                {title: '公司介绍', url: '/Info'},
                {title: '文档内容', url: '/Doc'}
            ],
            islogin:false,
            isshow:false,
            name:""
        }
    },
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow;
            console.log(this.isshow);
        } ,
        logout(){
              this.del("login");
              router.push("/")
        }
    }
});
var Info=Vue.component("Info",{
    template:`<div class="Info">
      <Nav></Nav>
    
<router-view></router-view>

</div>`,
});
var List=Vue.component("List",{
    template:`<div class="List">

<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <router-link to='/Info/list/1'>
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
              </router-link>
    </li>
    <li   class="mui-table-view-cell mui-media">
        <router-link  to='/Info/list/2' >
            <div class="mui-media-body">
                木屋
                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
            </router-link>
     </li>
    <li class="mui-table-view-cell mui-media">
        <router-link   to='/Info/list/3'>
            <div class="mui-media-body">
                CBD
                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
            </router-link>
     </li>
</ul>
</div>`,
});
var  Con=Vue.component("Con",{
    data(){
        return{
            listdata:[
                {title: '睡觉', con: '能和心爱的人一起睡觉'},
                {title: '这样一间小木屋', con: '想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖'},
                {title: '烤炉模式的城', con: '烤炉模式的城，这样一间小木屋，如同打翻的调色盘一般'},
                ]
        }
        },
    template:`<div style="padding:44px" >                     
                                     <h1>{{listdata[$route.params.id-1].title}}</h1>
                                     <p>{{listdata[$route.params.id-1].con}}</p>
                               

</div>`  ,
})
var Doc=Vue.component("Doc",{
    template:`<div class="Doc">
      <Nav></Nav>
     <div class="bottom">
<router-view name="left"></router-view>
<router-view name="right"></router-view>
</div>

</div>`,

    beforeRouteEnter(to,from,next){

        next(function(vm){
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
});
var left=Vue.component("left",{
    template:`<div class="left">
           <ul>
        <router-link to="#one" tag="li">全局配置</router-link>
           <router-link to="#two" tag="li">路由</router-link>
          <router-link to="#three" tag="li">组件</router-link>
           </ul>
</div>`,
    watch: {
        $route() {
            var hash = this.$route.hash.slice(1);

            function animate() {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }

            new TWEEN.Tween({tweeningNumber: document.querySelector(".right").scrollTop})
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({tweeningNumber: (document.querySelector("#" + hash).offsetTop) - 44}, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop= this.tweeningNumber.toFixed(0)
                })
                .start()
            animate()
        }
    }
});
var right=Vue.component("right",{
    template:`<div class="right">
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
                  <div id="one" style="height:300px">one</div>
                  sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
                  <div id="two" style="height:300px">two</div>
                  sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
                  <div id="three" style="height:300px">three</div>
                  sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
sdzfdzg<br>
</div>`,
});
var Login=Vue.component("Login",{
    template:  `	
		<div style="position: absolute;top:0;left:0;width: 100%">
		<header class="mui-bar mui-bar-nav">
    <a class="mui-icon mui-icon-undo" @click="back"></a>
		    <h1 class="mui-title">登录</h1>
		</header>
		<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>用户名</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			</div>
		</div>
</div>	`,
    methods:{
        back(){
            router.push("/");
        },
        submit(){
            var obj={"name":document.querySelector("#name").value}
               this.save("login",obj);
            router.push("/Doc");
        }
    }
})

