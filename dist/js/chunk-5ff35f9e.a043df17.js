(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ff35f9e"],{"473e":function(e,a,t){"use strict";function r(){var e=window.localStorage.getItem("tsic_token");return e?{Authorization:"Bearer "+e,"Content-type":"application/x-www-form-urlencoded"}:{}}t.d(a,"a",(function(){return r}))},bdd6:function(e,a,t){},cdd8:function(e,a,t){"use strict";var r=t("bdd6"),s=t.n(r);s.a},d7fa:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"edit_profile"},[t("div",{staticClass:"nav"},[t("Navbar")],1),t("div",{staticClass:"content"},[t("div",{staticClass:"section full-height"},[t("div",{staticClass:"absolute-center"},[t("div",{staticClass:"section"},[t("div",{staticClass:"container"},[t("div",{staticClass:"header_title"},[t("div",{staticClass:"card"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-6"},[t("h5",[e._v("Staff ID")]),t("h3",[e._v(e._s(e.queryuser.staff_id))])]),t("div",{staticClass:"col-6"},[t("h5",[e._v("Username")]),t("h3",[e._v(e._s(e.queryuser.username))])])])])]),t("form",[t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:20",expression:"'required|max:20'"}],attrs:{counter:20,"error-messages":e.errors.collect("f_name"),label:"first name","data-vv-name":"f_name",required:""},model:{value:e.f_name,callback:function(a){e.f_name=a},expression:"f_name"}})],1),t("div",{staticClass:"form-group col-md-6"},[t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:20",expression:"'required|max:20'"}],attrs:{counter:20,"error-messages":e.errors.collect("l_name"),label:"last name","data-vv-name":"l_name",required:""},model:{value:e.l_name,callback:function(a){e.l_name=a},expression:"l_name"}})],1),t("div",{staticClass:"form-group col-md-6"},[t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:15",expression:"'required|max:15'"}],attrs:{counter:15,"error-messages":e.errors.collect("old_password"),label:"old password","data-vv-name":"old_password",type:"password",required:""},model:{value:e.old_password,callback:function(a){e.old_password=a},expression:"old_password"}})],1),t("div",{staticClass:"form-group col-md-6"},[t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"max:15",expression:"'max:15'"}],attrs:{counter:15,"error-messages":e.errors.collect("new_password"),label:"new password","data-vv-name":"new_password",type:"password",required:""},model:{value:e.new_password,callback:function(a){e.new_password=a},expression:"new_password"}})],1),t("div",{staticClass:"form-group col-md-6"},[t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"max:15",expression:"'max:15'"}],attrs:{counter:15,"error-messages":e.errors.collect("confirm_password"),label:"confirm password","data-vv-name":"confirm_password",type:"password",required:""},model:{value:e.confirm_password,callback:function(a){e.confirm_password=a},expression:"confirm_password"}})],1),t("div",{staticClass:"form-group col-md-6"},[t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"E-mail","data-vv-name":"email",required:""},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}})],1),t("div",{staticClass:"form-group col-md-12"},[t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:20",expression:"'required|max:20'"}],attrs:{counter:20,"error-messages":e.errors.collect("position"),label:"position","data-vv-name":"position",required:""},model:{value:e.position,callback:function(a){e.position=a},expression:"position"}})],1)]),t("v-btn",{staticClass:"mr-4",on:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.edit_user(a)},click:function(a){return e.edit_user()}}},[e._v("Confirm")])],1)])])])])])])},s=[],i=(t("a15b"),t("d81d"),t("b64b"),t("d3b7"),t("96cf"),t("473e")),n=function(){return t.e("chunk-51c2136e").then(t.bind(null,"1a3c"))},o={$_veeValidate:{validator:"new"},name:"edit_user_profile",components:{Navbar:n},data:function(){return{queryuser:[],email:"",f_name:"",l_name:"",position:"",old_password:"",new_password:"",confirm_password:"",valid:!0,dictionary:{attributes:{email:"E-mail Address"},custom:{f_name:{required:function(){return"Name can not be empty"},max:"The name field may not be greater than 10 characters"},l_name:{required:function(){return"Name can not be empty"},max:"The name field may not be greater than 10 characters"},old_password:{required:function(){return"password can not be empty"},max:"The name field may not be greater than 10 characters"},new_password:{max:"The name field may not be greater than 10 characters",match:"password is not match"},confirm_password:{max:"The name field may not be greater than 10 characters"},position:{required:function(){return"Name can not be empty"},max:"The name field may not be greater than 10 characters"}}}}},created:function(){var e=this;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,regeneratorRuntime.awrap(this.axios.request({method:"get",url:"http://localhost:5000/staffs/",headers:Object(i["a"])()}).then((function(a){e.queryuser=a.data.data,e.username=e.queryuser.username,e.f_name=e.queryuser.first_name,e.l_name=e.queryuser.last_name,e.email=e.queryuser.email,e.position=e.queryuser.position})));case 3:a.sent,a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),console.log(a.t0);case 9:case"end":return a.stop()}}),null,this,[[0,6]])},mounted:function(){this.$validator.localize("en",this.dictionary)},methods:{edit_user:function(){var e,a,t=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(e={staff_id:this.queryuser.staff_id,fname:this.f_name,lname:this.l_name,email:this.email,old_password:this.old_password,new_password:this.new_password,position:this.position},a=function(e){return Object.keys(e).map((function(a){return encodeURIComponent(a)+"="+encodeURIComponent(e[a])})).join("&")},this.f_name&&this.l_name&&this.email&&this.old_password&&this.position||(this.valid=!1),this.f_name.length>20&&(this.valid=!1),this.l_name.length>20&&(this.valid=!1),this.new_password&&this.new_password!==this.confirm_password&&(window.alert("confirm password is not match!!"),this.confirm_password="",this.new_password="",this.valid=!1),this.valid){r.next=10;break}this.$validator.validateAll(),r.next=19;break;case 10:return r.prev=10,r.next=13,regeneratorRuntime.awrap(this.axios.put("http://localhost:5000/staffs/",a(e),{headers:Object(i["a"])()}).then((function(e){window.alert("success,update your profile!!"),t.$router.push("/home/user_profile")})).catch((function(e){window.alert("False,Can't update your profile!!"),window.alert("Password incorrect!"),t.$router.go(t.$router.currentRoute)})));case 13:return r.abrupt("return",r.sent);case 16:r.prev=16,r.t0=r["catch"](10),console.error(r.t0);case 19:this.valid=!0;case 20:case"end":return r.stop()}}),null,this,[[10,16]])}}},l=o,d=(t("cdd8"),t("2877")),c=t("6544"),m=t.n(c),u=t("8336"),p=t("8654"),v=Object(d["a"])(l,r,s,!1,null,"61a8ac00",null);a["default"]=v.exports;m()(v,{VBtn:u["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=chunk-5ff35f9e.a043df17.js.map