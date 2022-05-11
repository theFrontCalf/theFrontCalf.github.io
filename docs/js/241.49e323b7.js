"use strict";(self["webpackChunkofficial"]=self["webpackChunkofficial"]||[]).push([[241],{2365:function(t,s,e){e.d(s,{Z:function(){return h}});var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:"news-items-container "+t.cls},t._l(t.list,(function(s,i){return e("div",{key:i,class:"item-wrapper "+t.itemCls,on:{click:function(){return t.itemClick(s,i)}}},[e("img",{staticClass:"item-img",attrs:{src:s.pic||t.pic.placePng,alt:"img"}}),e("div",{staticClass:"item-text"},[e("div",[e("p",{staticClass:"date"},[t._v(t._s(s.date.split(" ")[0]))]),e("p",{staticClass:"line-clamp-2 title"},[t._v(" "+t._s(s.title)+" ")]),e("p",{staticClass:"line-clamp-2 desc"},[t._v(" "+t._s(s.desc)+" ")])]),e("span",{staticClass:"code-button"},[t._v("→")])])])})),0)},n=[],a=e(9661),c={props:{list:[],i18nKey:{type:String,default:"list"},cls:{type:String,default:""},itemCls:String,itemClick:{type:Function,default:()=>{}}},mounted(){console.log(this.itemCls)},data(){return{pic:{placePng:a}}}},l=c,r=e(1001),o=(0,r.Z)(l,i,n,!1,null,"1afb16f2",null),h=o.exports},2241:function(t,s,e){e.r(s),e.d(s,{default:function(){return A}});var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"jz-news"},[e("div",{staticClass:"top-static-banner"},[t.$parent.isSmallScreen?t._e():e("div",{staticClass:"banner-desc"},[e("div",{staticClass:"desc-text"},[e("span",{staticClass:"date-text"},[t._v(t._s(t.i18n.banner.date))]),e("span",{staticClass:"desc-title",domProps:{innerHTML:t._s(t.i18n.banner.title.replace(/<br\/?>/g,t.$parent.isSmallScreen?"<br>":""))}}),e("span",{staticClass:"desc-subtitle"},[t._v(t._s(t.i18n.banner.subtitle))])]),e("button",{staticClass:"jz-button news-banner-btn",on:{click:function(s){return t.topMore(t.i18n.banner)}}},[t._v(" "+t._s(t.i18n_c.more)+" "),e("span",{staticClass:"code-icon"},[t._v("→")])])]),t.$parent.isSmallScreen?e("div",{staticClass:"banner-desc-mobile",domProps:{innerHTML:t._s(t.i18n.banner.title.replace(/<br\/?>/g,t.$parent.isSmallScreen?"<br>":""))}}):t._e(),e("img",{staticClass:"banner-img",attrs:{src:t.banner.icon,alt:"banner"}})]),e("div",{staticClass:"news-list-container"},[e("div",{staticClass:"tabs-container"},[e("div",{staticClass:"tabs-list"},t._l(t.tabsList,(function(s,i){return e("div",{key:i,class:"tab-item"+(t.activeTab===s.name?" tab-active":""),on:{click:function(){return t.tabChange(s)}}},[t._v(" "+t._s(t.i18n.tabsList[s.name])+" ")])})),0)]),e("div",{staticClass:"news-list"},[t.$parent.isSmallScreen?t._e():e("news-item",{attrs:{cls:"news-list-block",itemCls:"news-item",list:t.showNewsList,i18nKey:"newsList",itemClick:t.newsItemClick}}),t.$parent.isSmallScreen?e("div",{staticClass:"news-item-mobile"},t._l(t.showNewsList,(function(s,i){return e("div",{key:i,staticClass:"news-item",on:{click:function(){return t.newsItemClick(s,i)}}},[e("div",{staticClass:"item-text"},[e("p",{staticClass:"line-clamp-2 title"},[t._v(t._s(s.title))]),e("p",{staticClass:"date"},[t._v(t._s(s.date))])]),e("img",{staticClass:"item-img",attrs:{src:s.pic||t.pic.placePng,alt:"img"}})])})),0):t._e()],1),t.showNewsList.length>=9?e("div",{staticClass:"show-more"},[t.hasMore?e("button",{staticClass:"jz-button more-news-btn",on:{click:t.showMore}},[t._v(" "+t._s(t.i18n_c.showMore)+" "),e("span",{staticClass:"code-icon"})]):t._e(),t.hasMore?t._e():e("fieldset",{staticClass:"no-more-line"},[e("legend",[t._v(t._s(t.i18n_c.noMore))])])]):t._e()])])},n=[],a=e(1001),c={},l=(0,a.Z)(c,i,n,!1,null,"3dac0fd6",null),r=l.exports,o=e(2010),h=e(2536),m=e(2365),w=e(396),d=e(9661),p=e(44);const u=["consulte","cooperation","technical","activity"],b=9;var A={...r,components:{newsItem:m.Z},data(){return{i18n_c:o.Z.commen,i18n:o.Z.news,pic:{placePng:d,downIcon:p},banner:{date:"2022/01/28",title:"鉴行理想，智在远方丨鉴智机器人2021年大事记",subtitle:"前路已在脚下，拥抱未来出发。",icon:w},tabsList:[{label:"全部新闻",name:"allNews"},{label:"企业咨询",name:u[0]},{label:"生态合作",name:u[1]},{label:"产品技术",name:u[2]},{label:"公司活动",name:u[3]}],newsList:[],activeTab:"allNews",hasMore:!0,showNewsList:[],showMoreBtnClckedTimes:1}},mounted(){this.getNewList(this.activeTab)},methods:{topMore(t){this.$router.push({path:`/news/${t.id}`,query:{type:t.type}})},tabChange(t){this.getNewList(t.name),this.activeTab=t.name,this.hasMore=!0,this.showMoreBtnClckedTimes=1},fetchJson(t){return fetch(`/json/${o.A===h.R.zh?"zh":"en"}/news_${t}.json`).then((t=>t.json())).then((s=>(sessionStorage.setItem(t,JSON.stringify(s.data)),s.data)))},sortList(t){return t.sort(((t,s)=>new Date(s.date).getTime()-new Date(t.date).getTime()))},getNewList(t){if("allNews"===t){const s=[];u.map((t=>{s.push(this.fetchJson(t))})),Promise.all(s).then((s=>{this.newsList=s.reduce(((t,s)=>t.concat(s)),[]),this.newsList=this.sortList(this.newsList),this.showNewsList=this.newsList.slice(0,b),sessionStorage.setItem(t,JSON.stringify(this.newsList))}))}else this.fetchJson(t).then((t=>{this.newsList=this.sortList(t),this.showNewsList=this.newsList.slice(0,b)}))},newsItemClick(t){this.$router.push({path:`/news/${t.id}`,query:{type:this.activeTab}})},showMore(){this.showMoreBtnClckedTimes+=1,this.showNewsList=this.newsList.slice(0,b*this.showMoreBtnClckedTimes),this.showNewsList.length===this.newsList.length&&(this.hasMore=!1)}}}},9661:function(t,s,e){t.exports=e.p+"img/show1.b89d8a43.png"},396:function(t,s,e){t.exports=e.p+"img/banner.f5ddfa7d.png"},44:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACASURBVHgB7dBhCYAwEAXgaQIjXAQjuAZWsJkNjGAFTeBFWATffgzGcQ/9KbIHj8HGfRsLoeU/6bxNEbmwJDSqanLOBcuO4lhj2e8Dz5gHMDcQSOxjGJZvUwsa6ETneqgjmB080AXdKmiyX0AxByxxoUfMASn0CqvA/D8rg1o+kBt7XivJZ2okvAAAAABJRU5ErkJggg=="}}]);