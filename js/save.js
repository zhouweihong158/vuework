var save={install(vue,params){
    //保存
    vue.prototype.save=function(attr,val){
        sessionStorage[attr]=JSON.stringify(val);
    }
    //清除
    vue.prototype.del=function(attr,val){
        sessionStorage.removeItem(attr);
    }
    //获取
vue.prototype.get=function(attr,attr1){
             if(attr1){
                  return sessionStorage[attr]?JSON.parse(sessionStorage[attr])[attr1]:"";
             }  else{
                 return sessionStorage[attr]
             }
}
}}