webpackJsonp([1],{"+HYV":function(t,s){},"53hM":function(t,s){},"6y6B":function(t,s){},"7K/x":function(t,s){},EfXr:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("t7M8"),e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]},c=a("/Xao")({name:"app"},e,!1,function(t){a("wZZV")},null,null).exports,r=a("zO6J"),n=(a("EfXr"),a("2sCs")),o=a.n(n),l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"header"},[a("symbol",{attrs:{id:"icon-cart",viewBox:"0 0 38 32"}},[a("title",[t._v("cart")]),t._v(" "),a("path",{staticClass:"path1",attrs:{d:"M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"}}),t._v(" "),a("path",{staticClass:"path2",attrs:{d:"M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"}}),t._v(" "),a("path",{staticClass:"path3",attrs:{d:"M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"}}),t._v(" "),a("path",{staticClass:"path4",attrs:{d:"M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"}})]),t._v(" "),a("div",{staticClass:"navbar"},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"navbar-right-container",staticStyle:{display:"flex"}},[a("div",{staticClass:"navbar-menu-container"},[a("span",{staticClass:"navbar-link"},[t._v("用户名")]),t._v(" "),a("a",{staticClass:"navbar-link",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.loginModalFlag=!0}}},[t._v("Login")]),t._v(" "),a("a",{staticClass:"navbar-link",attrs:{href:"javascript:void(0)"},on:{click:t.logOut}},[t._v("Logout")]),t._v(" "),a("div",{staticClass:"navbar-cart-container"},[t.goodsNum?a("span",{staticClass:"navbar-cart-count",domProps:{textContent:t._s(t.goodsNum)}}):t._e(),t._v(" "),a("a",{staticClass:"navbar-link navbar-cart-link",attrs:{href:"/cart"}},[a("svg",{staticClass:"navbar-cart-logo"},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#icon-cart"}})])])])])])]),t._v(" "),a("div",{staticClass:"md-modal modal-msg md-modal-transition",class:{"md-show":t.loginModalFlag}},[a("div",{staticClass:"md-modal-inner"},[a("div",{staticClass:"md-top"},[a("div",{staticClass:"md-title"},[t._v("Login in")]),t._v(" "),a("button",{staticClass:"md-close",on:{click:function(s){t.loginModalFlag=!1}}},[t._v("Close")])]),t._v(" "),a("div",{staticClass:"md-content"},[a("div",{staticClass:"confirm-tips"},[a("div",{staticClass:"error-wrap"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.errorTip,expression:"errorTip"}],staticClass:"error error-show"},[t._v("用户名或者密码错误")])]),t._v(" "),a("ul",[a("li",{staticClass:"regi_form_input"},[a("i",{staticClass:"icon IconPeople"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"regi_login_input regi_login_input_left",attrs:{type:"text",tabindex:"1",name:"loginname",placeholder:"User Name","data-type":"loginname"},domProps:{value:t.user},on:{input:function(s){s.target.composing||(t.user=s.target.value)}}})]),t._v(" "),a("li",{staticClass:"regi_form_input noMargin"},[a("i",{staticClass:"icon IconPwd"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],staticClass:"regi_login_input regi_login_input_left login-input-no input_text",attrs:{type:"password",tabindex:"2",name:"password",placeholder:"Password"},domProps:{value:t.userPwd},on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key))return null;t.login(s)},input:function(s){s.target.composing||(t.userPwd=s.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"login-wrap"},[a("a",{staticClass:"btn-login",attrs:{href:"javascript:;"},on:{click:t.login}},[t._v("登  录")])])])])]),t._v(" "),t.loginModalFlag?a("div",{staticClass:"md-overlay",on:{click:function(s){t.loginModalFlag=!1}}}):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"navbar-left-container"},[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"navbar-brand-logo",attrs:{src:"/static/logo.png"}})])])}]},d=a("/Xao")({props:["myCart"],data:function(){return{loginModalFlag:!1,user:"",userPwd:"",errorTip:!1}},computed:{goodsNum:function(){var t=0;return this.myCart.forEach(function(s){t+=s.productNum}),t}},mounted:function(){},methods:{login:function(){},logOut:function(){},checkLogin:function(){},getCartCount:function(){}}},l,!1,function(t){a("x1yj")},null,null).exports,v=a("rleB"),h=a.n(v),u={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"footer__wrap"},[s("div",{staticClass:"footer__secondary"},[s("div",{staticClass:"footer__inner"},[s("div",{staticClass:"footer__secondary__nav"},[s("span",[this._v("Copyright © 2017")]),this._v(" "),s("a",{attrs:{href:"javascript:"}},[this._v("\n                  About Us\n                ")]),this._v(" "),s("a",{attrs:{href:"JavaScript:"}},[this._v("\n                  Terms & Conditions\n                ")]),this._v(" "),s("a",{attrs:{href:"javascript:"}},[this._v("\n                  Privacy Policy\n                ")])])])])])])}]},_=function(t){a("53hM")},p=a("/Xao")(h.a,u,!1,_,null,null).exports,f=a("tIUq"),m=a.n(f),C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"nav-breadcrumb-wrap"},[s("div",{staticClass:"container"},[s("nav",{staticClass:"nav-breadcrumb"},[s("a",{attrs:{href:"/goods"}},[this._v("Home")]),this._v(" "),this._t("default")],2)])])])},staticRenderFns:[]},g=function(t){a("ohvn")},k=a("/Xao")(m.a,C,!1,g,null,null).exports,b={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"md-modal modal-msg md-modal-transition",class:{"md-show":this.mdShow}},[s("div",{staticClass:"md-modal-inner"},[s("div",{staticClass:"md-top"},[s("div",{staticClass:"md-title"},[this._v("Login in")]),this._v(" "),s("button",{staticClass:"md-close",on:{click:this.closeModal}},[this._v("Close")])]),this._v(" "),s("div",{staticClass:"md-content"},[s("div",{staticClass:"confirm-tips"},[this._t("message")],2),this._v(" "),s("div",{staticClass:"btn-wrap"},[this._t("btnGroup")],2)])])]),this._v(" "),this.mdShow?s("div",{staticClass:"md-overlay",on:{click:this.closeModal}}):this._e()])},staticRenderFns:[]},w=a("/Xao")({props:["mdShow"],data:function(){return{msg:"hello vue"}},methods:{closeModal:function(){this.$emit("close")}}},b,!1,function(t){a("yc+0")},null,null).exports,y={data:function(){return{goodsList:[],cartList:[],goodsFilterPrice:[{startPrice:0,endPrice:500},{startPrice:500,endPrice:1e3},{startPrice:1e3,endPrice:2e3},{startPrice:2e3,endPrice:3e3}],checkSelect:"all",filterBy:!1,overLayFlag:!1,sort:!0,priceRander:"",mdShow:!1,mdShowCart:!1,upDown:!1}},mounted:function(){this.getGoodsList()},components:{vheader:d,vfooter:p,vbrander:k,modal:w},methods:{getGoodsList:function(t){var s=this;o.a.get("/static/data/goodList.json").then(function(t){t.data.result.length<=0?(s.busy=!0,s.loadShow=!1):""==s.priceRander?s.goodsList=t.data.result:s.goodsList=t.data.result.filter(function(t){return t.salePrice>=s.priceRander.startPrice&&t.salePrice<=s.priceRander.endPrice}),0==s.sort&&s.goodsList.reverse()})},setPriceLight:function(t){this.checkSelect=t,"all"==this.checkSelect?this.priceRander="":this.priceRander=this.goodsFilterPrice[t],this.getGoodsList()},openPop:function(){this.filterBy=!0,this.overLayFlag=!0},closePop:function(){this.filterBy=!1,this.overLayFlag=!1},sortChange:function(){this.sort=!this.sort,this.upDown=!this.upDown,this.getGoodsList()},loadMore:function(){var t=this;this.busy=!0,setTimeout(function(){t.getGoodsList(!0),t.loadShow=!0},500)},addCart:function(t){var s=!0;this.cartList.forEach(function(a){a.productId===t.productId&&(a.productNum++,s=!1)}),s?(this.$set(t,"productNum",1),this.$set(t,"checked",1),this.cartList.push(t),this.mdShowCart=!0):this.mdShow=!0},closeModal:function(){this.mdShow=!1,this.mdShowCart=!1}}},M={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("vheader",{attrs:{myCart:t.cartList}}),t._v(" "),a("vbrander",[a("span",[t._v("Goods")])]),t._v(" "),a("div",{staticClass:"accessory-result-page accessory-page"},[a("div",{staticClass:"container"},[a("div",{staticClass:"filter-nav"},[a("span",{staticClass:"sortby"},[t._v("排序:")]),t._v(" "),a("a",{staticClass:"default cur",attrs:{href:"javascript:void(0)"}},[t._v("默认")]),t._v(" "),a("a",{staticClass:"price",attrs:{href:"javascript:void(0)"},on:{click:t.sortChange}},[t._v("价格 "),t.upDown?a("span",[t._v("↓")]):a("span",[t._v("↑")])]),t._v(" "),a("a",{staticClass:"filterby stopPop",attrs:{href:"javascript:void(0)"},on:{click:t.openPop}},[t._v("Filter by")])]),t._v(" "),a("div",{staticClass:"accessory-result"},[a("div",{staticClass:"filter stopPop",class:{"filterby-show":t.filterBy},attrs:{id:"filter"}},[a("dl",{staticClass:"filter-price"},[a("dt",[t._v("价格:")]),t._v(" "),a("dd",[a("a",{class:{cur:"all"==t.checkSelect},attrs:{href:"javascript:void(0)"},on:{click:function(s){t.setPriceLight("all")}}},[t._v("All")])]),t._v(" "),t._l(t.goodsFilterPrice,function(s,i){return a("dd",[a("a",{class:{cur:t.checkSelect==i},attrs:{href:"javascript:void(0)"},on:{click:function(s){t.setPriceLight(i)}}},[t._v(t._s(s.startPrice)+" - "+t._s(s.endPrice))])])})],2)]),t._v(" "),a("div",{staticClass:"accessory-list-wrap"},[a("div",{staticClass:"accessory-list col-4"},[a("ul",t._l(t.goodsList,function(s){return a("li",[a("div",{staticClass:"pic"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"static/"+s.productImage,alt:""}})])]),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"name"},[t._v(t._s(s.productName))]),t._v(" "),a("div",{staticClass:"price"},[t._v("价格："+t._s(s.salePrice))]),t._v(" "),a("div",{staticClass:"btn-area"},[a("a",{staticClass:"btn btn--m",attrs:{href:"javascript:;"},on:{click:function(a){t.addCart(s)}}},[t._v("加入购物车")])])])])}))])])])])]),t._v(" "),a("modal",{attrs:{mdShow:t.mdShow},on:{close:t.closeModal}},[a("p",{attrs:{slot:"message"},slot:"message"},[t._v("\n                             该商品数量添加成功!，亲!\n      ")]),t._v(" "),a("div",{attrs:{slot:"btnGroup"},slot:"btnGroup"},[a("a",{staticClass:"btn btn--m",attrs:{href:"javascript:;"},on:{click:function(s){t.mdShow=!1}}},[t._v("关闭")]),t._v(" "),a("router-link",{staticClass:"btn btn--m btn--red",attrs:{to:{path:"/cart",query:{cartList:t.cartList}}}},[t._v("查看购物车")])],1)]),t._v(" "),a("modal",{attrs:{mdShow:t.mdShowCart},on:{close:t.closeModal}},[a("p",{attrs:{slot:"message"},slot:"message"},[a("svg",{staticClass:"icon-status-ok"},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#icon-status-ok"}})]),t._v(" "),a("span",[t._v("加入购物车成功!")])]),t._v(" "),a("div",{attrs:{slot:"btnGroup"},slot:"btnGroup"},[a("a",{staticClass:"btn btn--m",attrs:{href:"javascript:;"},on:{click:function(s){t.mdShowCart=!1}}},[t._v("继续购物")]),t._v(" "),a("router-link",{staticClass:"btn btn--m btn--red",attrs:{to:{path:"/cart",query:{cartList:t.cartList}}}},[t._v("查看购物车")])],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.overLayFlag,expression:"overLayFlag"}],staticClass:"md-overlay",on:{click:function(s){s.stopPropagation(),t.closePop(s)}}}),t._v(" "),a("vfooter")],1)},staticRenderFns:[]},x=a("/Xao")(y,M,!1,null,null,null).exports,L=(a("Qbok"),a("7K/x"),a("+HYV"),{data:function(){return{cartList:[],modalConfirm:!1,delProductId:{},checkAll:!1,delNum:0}},components:{vheader:d,vfooter:p,vbrander:k,modal:w},mounted:function(){this.getCartInfo()},computed:{checkAllFlag:function(){return this.checkedCount==this.cartList.length},checkedCount:function(){var t=0;return this.cartList.forEach(function(s){"1"==s.checked&&t++}),t},totalPrice:function(){var t=0;return this.cartList.forEach(function(s){"1"==s.checked&&(t+=parseFloat(s.salePrice*s.productNum))}),t}},methods:{getCartInfo:function(){this.$route.query.cartList?this.cartList=this.$route.query.cartList:this.cartList=[]},goodsEdit:function(t,s){if("add"==t)s.productNum++;else if("des"==t){if(s.productNum<=1)return;s.productNum--}else s.checked=1==s.checked?0:1},delConfirm:function(t){this.modalConfirm=!0,this.delProductId=t.productId,this.delNum=t.productNum},closeModal:function(){this.modalConfirm=!1},cartDelt:function(){var t=this;this.cartList.forEach(function(s,a){s.productId==t.delProductId&&t.cartList.splice(a,1)}),this.modalConfirm=!1},selectAll:function(){var t=this;this.checkAll=!this.checkAllFlag,this.cartList.forEach(function(s){s.checked=t.checkAll})}}}),P={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("vheader",{attrs:{myCart:t.cartList}}),t._v(" "),a("vbrander",[a("span",[t._v("Cart")])]),t._v(" "),a("symbol",{attrs:{id:"icon-ok",viewBox:"0 0 32 32"}},[a("title",[t._v("ok")]),t._v(" "),a("path",{staticClass:"path1",attrs:{d:"M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"}})]),t._v(" "),a("symbol",{attrs:{id:"icon-edit",viewBox:"0 0 32 32"}},[a("title",[t._v("edit")]),t._v(" "),a("path",{staticClass:"path1",attrs:{d:"M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"}})]),t._v(" "),a("symbol",{attrs:{id:"icon-del",viewBox:"0 0 32 32"}},[a("title",[t._v("delete")]),t._v(" "),a("path",{staticClass:"path1",attrs:{d:"M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"}}),t._v(" "),a("path",{staticClass:"path2",attrs:{d:"M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"}}),t._v(" "),a("path",{staticClass:"path3",attrs:{d:"M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"}}),t._v(" "),a("path",{staticClass:"path4",attrs:{d:"M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"}})]),t._v(" "),a("symbol",{attrs:{id:"icon-clock",viewBox:"0 0 32 32"}},[a("title",[t._v("clock")]),t._v(" "),a("path",{staticClass:"path1",attrs:{fill:"#605f5f",d:"M16 29c-7.168 0-13-5.831-13-13s5.832-13 13-13c7.168 0 13 5.832 13 13s-5.832 13-13 13zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"}}),t._v(" "),a("path",{staticClass:"path2",attrs:{fill:"#605f5f",d:"M23.958 21.837l-6.958-6.489v-6.282c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v6.934c0 0.414 0.174 0.814 0.477 1.098l7.435 6.934c0.279 0.259 0.642 0.402 1.023 0.402 0.415 0 0.814-0.174 1.096-0.477 0.564-0.605 0.532-1.555-0.073-2.12z"}})]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"cart"},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"item-list-wrap"},[a("div",{staticClass:"cart-item"},[t._m(1,!1,!1),t._v(" "),t._l(t.cartList,function(s,i){return a("ul",{staticClass:"cart-item-list"},[a("li",[a("div",{staticClass:"cart-tab-1"},[a("div",{staticClass:"cart-item-check"},[a("a",{staticClass:"checkbox-btn item-check-btn",class:{check:"1"==s.checked},attrs:{href:"javascipt:;"},on:{click:function(a){t.goodsEdit("checked",s)}}},[a("svg",{staticClass:"icon icon-ok"},[a("use",{attrs:{"xlink:href":"#icon-ok"}})])])]),t._v(" "),a("div",{staticClass:"cart-item-pic"},[a("img",{attrs:{src:"static/"+s.productImage}})]),t._v(" "),a("div",{staticClass:"cart-item-title"},[a("div",{staticClass:"item-name"},[t._v(t._s(s.productName))])])]),t._v(" "),a("div",{staticClass:"cart-tab-2"},[a("div",{staticClass:"item-price"},[t._v(t._s(t._f("currency")(s.salePrice,"￥")))])]),t._v(" "),a("div",{staticClass:"cart-tab-3"},[a("div",{staticClass:"item-quantity"},[a("div",{staticClass:"select-self select-self-open"},[a("div",{staticClass:"select-self-area"},[a("a",{staticClass:"input-sub",on:{click:function(a){t.goodsEdit("des",s)}}},[t._v("-")]),t._v(" "),a("span",{staticClass:"select-ipt"},[t._v(t._s(s.productNum))]),t._v(" "),a("a",{staticClass:"input-add",on:{click:function(a){t.goodsEdit("add",s)}}},[t._v("+")])])])])]),t._v(" "),a("div",{staticClass:"cart-tab-4"},[a("div",{staticClass:"item-price-total"},[t._v(t._s(t._f("currency")(parseFloat(s.salePrice*s.productNum),"￥")))])]),t._v(" "),a("div",{staticClass:"cart-tab-5"},[a("div",{staticClass:"cart-item-opration"},[a("a",{staticClass:"item-edit-btn",attrs:{href:"javascript:;"},on:{click:function(a){t.delConfirm(s)}}},[a("svg",{staticClass:"icon icon-del"},[a("use",{attrs:{"xlink:href":"#icon-del"}})])])])])])])})],2)]),t._v(" "),a("div",{staticClass:"cart-foot-wrap"},[a("div",{staticClass:"cart-foot-inner"},[a("div",{staticClass:"cart-foot-l"},[a("div",{staticClass:"item-all-check"},[a("a",{attrs:{href:"javascipt:;"},on:{click:t.selectAll}},[a("span",{staticClass:"checkbox-btn item-check-btn",class:{check:t.checkAllFlag}},[a("svg",{staticClass:"icon icon-ok"},[a("use",{attrs:{"xlink:href":"#icon-ok"}})])]),t._v(" "),a("span",[t._v("Select all")])])])]),t._v(" "),a("div",{staticClass:"cart-foot-r"},[a("div",{staticClass:"item-total"},[t._v("\n              Item total: "),a("span",{staticClass:"total-price"},[t._v(t._s(t._f("currency")(t.totalPrice,"￥")))])]),t._v(" "),a("div",{staticClass:"btn-wrap"},[a("router-link",{staticClass:"btn btn--red",class:{"btn--dis":0==t.checkedCount},attrs:{to:"/address"}},[t._v("Checkout")])],1)])])])])]),t._v(" "),a("modal",{attrs:{mdShow:t.modalConfirm},on:{close:t.closeModal}},[a("p",{attrs:{slot:"message"},slot:"message"},[t._v("你确认要删除此条数据吗?")]),t._v(" "),a("div",{attrs:{slot:"btnGroup"},slot:"btnGroup"},[a("a",{staticClass:"btn btn--m",attrs:{href:"javascript:;"},on:{click:t.cartDelt}},[t._v("确认")]),t._v(" "),a("a",{staticClass:"btn btn--m btn--red",attrs:{href:"javascript:;"},on:{click:function(s){t.modalConfirm=!1}}},[t._v("关闭")])])]),t._v(" "),a("vfooter")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-title-normal"},[s("h2",{staticClass:"page-title-h2"},[s("span",[this._v("我的购物车")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cart-item-head"},[s("ul",[s("li",[this._v("商品")]),this._v(" "),s("li",[this._v("单价")]),this._v(" "),s("li",[this._v("数量")]),this._v(" "),s("li",[this._v("价格")]),this._v(" "),s("li",[this._v("删除")])])])}]},z=a("/Xao")(L,P,!1,function(t){a("o4Qd")},null,null).exports,E={data:function(){return{addressList:[],limit:3,addressId:"",mdAddressConfirm:!1,checkIndex:""}},computed:{addressListFilter:function(){return this.addressList.slice(0,this.limit)},defaultAddress:function(){var t=this,s="";return this.addressList.forEach(function(a,i){a.isDefault&&(t.checkIndex=i,s=a.addressId)}),s}},mounted:function(){this.getAddressList()},methods:{getAddressList:function(){var t=this;o.a.get("/static/data/address.json").then(function(s){var a=s.data;0==a.status&&(t.addressList=a.result)})},showMore:function(){3==this.limit?this.limit=this.addressList.length:this.limit=3},delAddressConfirm:function(t){this.addressId=t,this.mdAddressConfirm=!0},delAddress:function(){var t=this;this.addressList.forEach(function(s,a){s.addressId==t.addressId&&t.addressList.splice(a,1),t.mdAddressConfirm=!1})},closeModal:function(){this.mdAddressConfirm=!1},addressDefault:function(t){var s=this;this.addressList.forEach(function(a,i){a.addressId==t?(a.isDefault=!0,s.checkIndex=i):a.isDefault=!1})}},components:{vheader:d,vfooter:p,vbrander:k,modal:w}},F={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("vheader",{attrs:{myCart:t.addressList}}),t._v(" "),a("vbrander",[a("span",[t._v("Address")])]),t._v(" "),a("div",{staticClass:"checkout-page"},[a("svg",{staticStyle:{position:"absolute",width:"0",height:"0",overflow:"hidden"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("defs",[a("symbol",{attrs:{id:"icon-add",viewBox:"0 0 31 32"}},[a("title",[t._v("add")]),t._v(" "),a("path",{staticClass:"path1",attrs:{d:"M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"}})]),t._v(" "),a("symbol",{attrs:{id:"icon-ok",viewBox:"0 0 32 32"}},[a("title",[t._v("ok")]),t._v(" "),a("path",{staticClass:"path1",attrs:{d:"M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"}})]),t._v(" "),a("symbol",{attrs:{id:"icon-edit",viewBox:"0 0 32 32"}},[a("title",[t._v("edit")]),t._v(" "),a("path",{staticClass:"path1",attrs:{d:"M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"}})]),t._v(" "),a("symbol",{attrs:{id:"icon-del",viewBox:"0 0 32 32"}},[a("title",[t._v("delete")]),t._v(" "),a("path",{staticClass:"path1",attrs:{d:"M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"}}),t._v(" "),a("path",{staticClass:"path2",attrs:{d:"M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"}}),t._v(" "),a("path",{staticClass:"path3",attrs:{d:"M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"}}),t._v(" "),a("path",{staticClass:"path4",attrs:{d:"M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"}})]),t._v(" "),a("symbol",{attrs:{id:"icon-clock",viewBox:"0 0 32 32"}},[a("title",[t._v("clock")]),t._v(" "),a("path",{staticClass:"path1",attrs:{d:"M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"}})]),t._v(" "),a("symbol",{attrs:{id:"icon-question",viewBox:"0 0 32 32"}},[a("title",[t._v("question")]),t._v(" "),a("path",{staticClass:"path1",attrs:{d:"M16 2.56c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44c-7.411 0-13.44-6.029-13.44-13.44s6.029-13.44 13.44-13.44zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"}}),t._v(" "),a("path",{staticClass:"path2",attrs:{d:"M16 22.080c-1.059 0-1.92 0.861-1.92 1.92s0.861 1.92 1.92 1.92c1.059 0 1.92-0.861 1.92-1.92s-0.861-1.92-1.92-1.92z"}}),t._v(" "),a("path",{staticClass:"path3",attrs:{d:"M12.16 12.48c0.706 0 1.28-0.574 1.28-1.28 0-1.412 1.148-2.56 2.56-2.56s2.56 1.148 2.56 2.56c0 1.412-1.148 2.56-2.56 2.56-0.706 0-1.28 0.574-1.28 1.28v3.84c0 0.706 0.574 1.28 1.28 1.28s1.28-0.574 1.28-1.28v-2.723c2.224-0.575 3.84-2.616 3.84-4.957 0-2.823-2.297-5.12-5.12-5.12s-5.12 2.297-5.12 5.12c0 0.706 0.574 1.28 1.28 1.28z"}})])])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"checkout-addr"},[t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1),t._v(" "),t._m(2,!1,!1),t._v(" "),a("div",{staticClass:"addr-list-wrap"},[a("div",{staticClass:"addr-list"},[a("ul",[t._l(t.addressListFilter,function(s,i){return a("li",{class:{check:t.checkIndex==i},on:{click:function(s){t.checkIndex=i}}},[a("dl",[a("dt",[t._v(t._s(s.userName))]),t._v(" "),a("dd",{staticClass:"address"},[t._v(t._s(s.streetName))]),t._v(" "),a("dd",{staticClass:"tel"},[t._v(t._s(s.tel))])]),t._v(" "),a("div",{staticClass:"addr-opration addr-del"},[a("a",{staticClass:"addr-del-btn",attrs:{href:"javascript:;"},on:{click:function(a){t.delAddressConfirm(s.addressId)}}},[a("svg",{staticClass:"icon icon-del"},[a("use",{attrs:{"xlink:href":"#icon-del"}})])])]),t._v(" "),s.isDefault?a("div",{staticClass:"addr-opration addr-default"},[t._v("Default address")]):a("div",{staticClass:"addr-opration addr-default",on:{click:function(a){t.addressDefault(s.addressId)}}},[t._m(3,!0,!1)])])}),t._v(" "),a("li",{staticClass:"addr-new"},[a("div",{staticClass:"add-new-inner"},[a("i",{staticClass:"icon-add"},[a("svg",{staticClass:"icon icon-add"},[a("use",{attrs:{"xlink:href":"#icon-add"}})])]),t._v(" "),a("p",[t._v("Add new address")])])])],2)]),t._v(" "),a("div",{staticClass:"shipping-addr-more"},[a("a",{staticClass:"addr-more-btn up-down-btn",class:{open:t.limit>3},attrs:{href:"javascript:;"},on:{click:t.showMore}},[t._v("\n              more\n              "),t._m(4,!1,!1)])])]),t._v(" "),t._m(5,!1,!1),t._v(" "),t._m(6,!1,!1),t._v(" "),a("div",{staticClass:"next-btn-wrap"},[a("router-link",{staticClass:"btn btn--m btn--red",attrs:{to:"/goods"}},[t._v("Next")])],1)])])]),t._v(" "),a("modal",{attrs:{mdShow:t.mdAddressConfirm},on:{close:t.closeModal}},[a("p",{attrs:{slot:"message"},slot:"message"},[a("svg",{staticClass:"icon-status-ok"},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#icon-status-ok"}})]),t._v(" "),a("span",[t._v("您真的要删除该地址吗？")])]),t._v(" "),a("div",{attrs:{slot:"btnGroup"},slot:"btnGroup"},[a("a",{staticClass:"btn btn--m",attrs:{href:"javascript:;"},on:{click:t.delAddress}},[t._v("确认")]),t._v(" "),a("a",{staticClass:"btn btn--m",attrs:{href:"javascript:;"},on:{click:function(s){t.mdAddressConfirm=!1}}},[t._v("取消")])])]),t._v(" "),a("vfooter")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-title-normal"},[s("h2",{staticClass:"page-title-h2"},[s("span",[this._v("check out")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"check-step"},[s("ul",[s("li",{staticClass:"cur"},[this._v("选择"),this._v("收货地址")]),this._v(" "),s("li",[s("span",[this._v("查看")]),this._v("订单")]),this._v(" "),s("li",[s("span",[this._v("订单")]),this._v("支付")]),this._v(" "),s("li",[s("span",[this._v("订单")]),this._v("信息")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-title-normal checkout-title"},[s("h2",[s("span",[this._v("Shipping address")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"addr-set-default-btn",attrs:{href:"javascript:;"}},[s("i",[this._v("Set default")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("i",{staticClass:"i-up-down"},[s("i",{staticClass:"i-up-down-l"}),this._v(" "),s("i",{staticClass:"i-up-down-r"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-title-normal checkout-title"},[s("h2",[s("span",[this._v("Shipping method")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"shipping-method-wrap"},[s("div",{staticClass:"shipping-method"},[s("ul",[s("li",{staticClass:"check"},[s("div",{staticClass:"name"},[this._v("Standard shipping")]),this._v(" "),s("div",{staticClass:"price"},[this._v("Free")]),this._v(" "),s("div",{staticClass:"shipping-tips"},[s("p",[this._v("Once shipped，Order should arrive in the destination in 1-7 business days")])])])])])])}]},S=a("/Xao")(E,F,!1,function(t){a("6y6B")},null,null).exports;i.a.use(r.a);var I=new r.a({mode:"history",routes:[{path:"/goods",name:"GoodsList",component:x},{path:"/cart",name:"Cart",component:z},{path:"/address",name:"Address",component:S}]}),j=/(\d{3})(?=\d)/g;i.a.config.productionTip=!1,i.a.filter("currency",function(t,s,a){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";s=null!=s?s:"$",a=null!=a?a:2;var i=Math.abs(t).toFixed(a),e=a?i.slice(0,-1-a):i,c=e.length%3,r=c>0?e.slice(0,c)+(e.length>3?",":""):"",n=a?i.slice(-1-a):"";return(t<0?"-":"")+s+r+e.slice(c).replace(j,"$1,")+n}),new i.a({el:"#app",router:I,render:function(t){return t(c)}})},Qbok:function(t,s){},o4Qd:function(t,s){},ohvn:function(t,s){},rleB:function(t,s){},tIUq:function(t,s){},wZZV:function(t,s){},x1yj:function(t,s){},"yc+0":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.46d133233244afeec583.js.map