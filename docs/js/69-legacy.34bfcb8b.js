(self["webpackChunkofficial"]=self["webpackChunkofficial"]||[]).push([[69],{4827:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("video",{ref:"comVideo",attrs:{src:t.src,autoplay:t.autoplay,loop:t.loop,preload:"",muted:"",controls:t.controls,poster:t.poster,"x5-video-player-type":"h5-page","x5-video-player-fullscreen":"true","x5-playsinline":"","webkit-playsinline":"",playsinline:""},domProps:{muted:!0}},[i("source",{attrs:{src:t.src,type:"video/mp4"}})])},r=[],o={props:{src:String,autoplay:{type:Boolean,default:!1},controls:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},poster:{type:String,default:""}},data:function(){return{}},mounted:function(){var t=this,e=this.$refs.comVideo;e.addEventListener("canplay",(function(){t.autoplay&&e.play()})),document.addEventListener("WeixinJSBridgeReady",(function(){t.autoplay&&e.play()}),!1)},methods:{play:function(){this.$refs.comVideo.play()},pause:function(){this.$refs.comVideo.pause()}}},c=o,n=i(1001),a=(0,n.Z)(c,s,r,!1,null,"932e06a6",null),l=a.exports},9337:function(t,e,i){var s=i(2109),r=i(9781),o=i(3887),c=i(5656),n=i(1236),a=i(6135);s({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,i,s=c(t),r=n.f,l=o(s),A={},d=0;while(l.length>d)i=r(s,e=l[d++]),void 0!==i&&a(A,e,i);return A}})},7069:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return V}});var s=i(5492),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"jz-core-technology"},[i("div",{staticClass:"double-core"},[i("div",{staticClass:"core-wrapper"},[i("div",{staticClass:"core-title title"},[t._v(t._s(t.i18n.doubleCore.title))]),t.$parent.isSmallScreen?t._e():i("img",{attrs:{src:t.doubleCore.pic,alt:""}}),t.$parent.isSmallScreen?i("img",{attrs:{src:t.doubleCore.picMoblie,alt:""}}):t._e(),i("div",{staticClass:"content-text"},t._l(t.i18n.doubleCore.parts,(function(e,s){return i("div",{key:s,staticClass:"content-item"},[i("div",{staticClass:"core-title title",domProps:{innerHTML:t._s(e.title)}}),i("div",{staticClass:"core-desc desc",domProps:{innerHTML:t._s(e.desc)}})])})),0)])]),i("div",{staticClass:"bevdet-block"},[i("div",{staticClass:"core-title title",domProps:{innerHTML:t._s(t.i18n.bevdet.title.replace(/<br\/?>/g,t.$parent.isSmallScreen?"<br>":""))}}),i("div",{staticClass:"core-desc desc",domProps:{innerHTML:t._s(t.i18n.bevdet.desc.replace(/<br\/?>/g,t.$parent.isSmallScreen?"<br><br>":"<br>"))}}),t._l(t.bevdet.chartParts,(function(e,s){return i("div",{key:s,staticClass:"chart-part-item"},[i("div",{staticClass:"core-title title",domProps:{innerHTML:t._s(t.i18n.bevdet.chartParts[s].title)}}),i("div",{staticClass:"img-container"},[i("img",{attrs:{src:e.pic1,alt:""}}),i("img",{attrs:{src:e[t.$parent.isSmallScreen?"pic2Mobile":"pic2"],alt:""}})])])}))],2),i("div",{staticClass:"card-container"},t._l(t.i18n.bevdet.cardList,(function(e,s){return i("div",{key:s,staticClass:"card-item"},[i("img",{attrs:{src:t.bevdet.cardList[s].icon,alt:""}}),i("div",{staticClass:"core-title title",domProps:{innerHTML:t._s(e.title)}}),i("div",{staticClass:"core-desc desc",domProps:{innerHTML:t._s(e.desc)}})])})),0),i("div",{staticClass:"part-3d"},[i("div",{staticClass:"core-title title",domProps:{innerHTML:t._s(t.i18n.bevdet.part3D.title)}}),t.$parent.isSmallScreen?t._e():i("img",{attrs:{src:t.bevdet.part3D.pic}}),t.$parent.isSmallScreen?i("div",{staticClass:"imgs-container"},[i("img",{attrs:{src:t.bevdet.part3D.picMobile1,alt:""}}),i("img",{attrs:{src:t.bevdet.part3D.picMobile2,alt:""}})]):t._e(),i("div",{staticClass:"video-block"},t._l(t.bevdet.part3D.videos,(function(e,s){return i("div",{key:s,staticClass:"core-banner video-item"},[i("com-video",{ref:e.code,refInFor:!0,attrs:{src:e.video,poster:e.poster}}),i("div",{staticClass:"banner-text",class:{isPlaying:e.isPlaying},on:{click:function(){return t.toggleVideo(e)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPlaying,expression:"!item.isPlaying"}],staticClass:"title item-title"},[t._v(" "+t._s(t.i18n.bevdet.part3D.videos[s].title)+" ")]),i("img",{directives:[{name:"show",rawName:"v-show",value:!e.isPlaying,expression:"!item.isPlaying"}],staticClass:"play-icon",attrs:{src:t.bevdet.part3D.playIcon,alt:"play"}})]),i("div",{staticClass:"sub-text stardot-label stardot-label-left",domProps:{innerHTML:t._s(t.i18n.bevdet.part3D.videos[s].desc)}})],1)})),0)]),t._l(["control","computeSolution"],(function(e){return i("div",{key:e,class:"normal-part "+e},[i("div",{staticClass:"core-title title",domProps:{innerHTML:t._s(t.i18n[e].title)}}),i("div",{staticClass:"core-desc desc",domProps:{innerHTML:t._s(t.i18n[e].desc.replace(/<br\/?>/g,t.$parent.isSmallScreen?"<br><br>":"<br>"))}}),i("img",{attrs:{src:t.normal[e],alt:""}})])}))],2)},o=[],c=i(1001),n={},a=(0,c.Z)(n,r,o,!1,null,"9d1f4bde",null),l=a.exports,A=i(4827),d=i(1165),p=i(2054),g=i(2861),u=i(1753),b=i(2316),B=i(7676),m=i(5388),v=i(3775),f=i(5267),C=i(8440),E=i(8073),w=i(4045),h=i(4304),y=i(866),I=i(9408),x=i(931),M=i(8706),O=i(7784),Q=i(6290),R=i(4396),Y=i(277),U=i(2010),V=(0,s.Z)((0,s.Z)({},l),{},{components:{ComVideo:A.Z},data:function(){return{i18n:U.Z.technology,doubleCore:{pic:p,picMoblie:g},bevdet:{chartParts:[{pic1:u,pic2:b,pic2Mobile:B},{pic1:m,pic2:v,pic2Mobile:f}],cardList:[{icon:C},{icon:E},{icon:w}],part3D:{pic:h,picMobile1:y,picMobile2:I,poster6v2d:x,poster6vbev:M,playIcon:d,videos:[{isPlaying:!1,poster:x,code:"6v2d",video:R},{isPlaying:!1,poster:M,code:"6vbev",video:Y}]}},normal:{control:O,computeSolution:Q}}},methods:{toggleVideo:function(t){var e=t.code,i=t.isPlaying;i?this.$refs[e][0].pause():this.$refs[e][0].play(),t.isPlaying=!i}}})},931:function(t,e,i){"use strict";t.exports=i.p+"img/6V2D.0d45b1a3.png"},8706:function(t,e,i){"use strict";t.exports=i.p+"img/6VBEV.da2a7556.png"},1753:function(t,e,i){"use strict";t.exports=i.p+"img/bevdet1.65ef27ba.png"},7676:function(t,e,i){"use strict";t.exports=i.p+"img/bevdet2-mobile.31ec12d4.png"},2316:function(t,e,i){"use strict";t.exports=i.p+"img/bevdet2.520e7685.png"},866:function(t,e,i){"use strict";t.exports=i.p+"img/bevdet3d-mobile1.414558c0.png"},9408:function(t,e,i){"use strict";t.exports=i.p+"img/bevdet3d-mobile2.9e19c146.png"},4304:function(t,e,i){"use strict";t.exports=i.p+"img/bevdet3d.9f01ab15.png"},5388:function(t,e,i){"use strict";t.exports=i.p+"img/bevdet4D.1b2f9b0c.png"},5267:function(t,e,i){"use strict";t.exports=i.p+"img/bevdet4D2-mobile.1a12db4a.png"},3775:function(t,e,i){"use strict";t.exports=i.p+"img/bevdet4D2.e280ee7a.png"},6290:function(t,e,i){"use strict";t.exports=i.p+"img/computing.c6d3e0c4.png"},2861:function(t,e,i){"use strict";t.exports=i.p+"img/doubleCore-mobile.cb15e3df.png"},2054:function(t,e,i){"use strict";t.exports=i.p+"img/doubleCore.16c6064f.png"},8440:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0HSURBVHgB7V3NctzGEW4AlMRKKslKOSiRaAusHHIMedNFzvIJIpVz8kVk7gmpF4jWV19kVh6A5BOIfgLR0SW5RNQxJ8E2KdmJJa6SqCJa3B13L0B6MNtY/M0Mfoivaotc7A9BfOie/nq6ZwDOEV5A7+4hXD7CxzP6Hc4BHDgnQEL9MTiP8Fc/OjT8DsTiIgyH0GK4cE4wAncAP5BL6F0C9z60HOfCgiPrfca9Ngax8h4M96ClOBcWLMDZSnrNA6fVVtx6gg+gtyoA+kmv02tfws9vQ0vRehdNETPExl6x7YDjK6QHGHAttzHgarUF49hL7teXj+E//LEDYk15qz8H7ga0EK0lOAqsYqTh881fwjCgBwZXH8uvuSDW6TPQMrSW4EgW9aRDwRyMPz19cgJAv8suuTduoWxqJcFkieiGY5kqgRZLlnv6nMZboVgxvmv1K+j1oUVoZZA1HVhBcB2OFrn3PofLj+SACy/I3jU4WoGWoHUWTLIIlMBqPB1UnWGkWDGRHX1HK9AqC34Gvd5FcJ6AIouuw3Bt1ufQih8isbIWbk2eulUWPA+wDowsSvscjtf3QAm42iKbWkNwJIsG8jF8HguskhDJpk35WFtkU2sIjmSRjOBEkkVpiGRTIB3qzcphNwWtIPhL6N3mZFGeMZSTTRRwNV02tSLIyiOL0qDKJsQ+ftcyNBSNt2BOFuH4WVjHjqaSH7D0HHqNDbgabcFMGQ5kkUVpOIAr24rLb6xsarQFM2U4wyyyKA3vYEwWG5NNTS3vKWXBF/xbG66A3+GYteTEE/vGsXDyDv56+M/YMZJF78GrAWgABlcDV6n2+OD6r+Fg7gLYBF7bIV7b/bEDO++Cx9uQE4UInvf7vhCjXfz1N1ARPnl5AL//X8xjFg6sOHBZsb/N/xg+uqrtTxRB4DjeyttgL8j6gUIuGsmlca8ycj98M1TJhemZoXKg8VbNYd98+wZuHr+BCoGGNX6Y5wO5CUa3vApK1Gob68N/KUfE7gIMt0EzqNqSZpfkY598ewjVQixdwqEx67tzu+h5/9YjIX7QicKB3R+BtzYM9qxEmFSGo6YkURYtZklJFgHKMIwvJq76DDrH+jRMhkMYPUAXJU+G7B1/8TiTFMxtwTK54Rd49yySS7JoNX5UbJsil4CeYZ/LU9MYDRZA4+0xGpByeAkyorRMyjPglwUjiwIdsigNmKceQJWyadqAMt9cjdHBWcpwTIHPU4uNJuSpG0MwumY1egxMBFZJwL+lzjY1oiuiEQRH+ebYuKNbFmWBKpua0BXRCIKdKUsR2zat9xScbPJg/MBWwFUEtSc4qTsBKkLTuiJqTXBCGc6mjcAqCU3riqg1wVwZzlyOMhxTaFJXRG0JDjNI1ciiNDSpK6K2BDsVy6I0kGyaDrjqJ5tqSTBXhoMWcwdqBq4rom7lPbUjOMxYsbJoH2qGSDbtyscEnnudZFMdLZjGXV8+UKUsSkPduyJqRXCZ7oSqUPeuiFoRzMkiW/OuZVDnrojaEJzUnQANQJ27IuagJkCJ8UB+jhdoX6csosDHA6/vRnOpAkYBWt6+rlpnOtfncPmu3BXhhv9TpV0RtbBgThZ5mmQRWRG1o1wE5wgnBh46MN6iB178ybFDuLKla7ysY1dE5QQnySIdgRVNVBCRsxZCowwULXP4Aq6UTlKQbFIDrqplU+UEmyrD4YrzZgGJGeggufLyHgWVEsyV4SApO2Wtl1w+T67YJ+8QPaYSJ0Ry2Qn8qJ5asWKxQbl1qACVEiyUwAo0yaJplw+kVVeuw3CZGtOix7II53YD+Y00gQ8lwcim04DLOiojOFokNGYtOmQRyS1g2km5JYMp8mVy3H5ZecN1RVQlmyojmAmstHQnuOAqLnZ2wMbVPcPUd+QHV96DVrxlO+CqhOCEMpx7oAForTfk52OAnbTPCIUIjAu09F2Nwzy1DOvlPdYJrqI7IQ1OPOrVhqq7IsK/ZxmmuxNGAK/l526GLgBhsLeZk00XwbUWcFkl2E53ggjkZzjWr6d9Qh23Mbp/CppQdXmPVYItdScoE/DQn7VH0tfQW1dvOjzTXdCIqCsiprttlfdYI5jrTkB3rSWwkjEX6s/YmIo31jZlqeScM42DdGwEjlqlGZjYhUUNuGwtemqNYC7f/D681GopEcgap8ZUylJRzvkQLj+hdbVoooGOMe8rtUJPEjjZ5FjIU1sh2FZ3AlcRwmAJZqxQ4GUYs4si6oqQvYtx2WScYJtlOFxFCCgpwzRQds1UAFRFeY9xghO6E7ZBM5IqQihNGeacBVeVOWlDsVnfzHVFCIN56txrdFy6cUvIz4+/eJz4Hdz6FnSxTRSwq+tVhhUh8TUmaby7gO/x8AK/xcdpNQdZrBuumHcGqpa8Fka/2kHBlaPUbKVtsZfnusswasG2uhOyVoQQoZRdIlcpl+rYrm+ma2DLaxgj2FZ3gq6KENv1zba6IowQbLM7QVfqMyEAum8qACKvgV4iNhFiwmsYIViAW2jvhLzQXRHCTdSbrG/2YDwAw15DO8F00alERT5mShbprgihcXnEZJwsyyatXkM7wba6E0xVhLwPw11uoh4MwbTX0Fr4Hob/+roT6E4egdcXMJpImxPwggswmkTBpipCCKOJfnb60iGfAiCSTWHxnLd0ek44PblfJndNXgM1/D1PUhynXkNHTlyrDs6iRbOA/jmSDUn1zGRh6mu616vEc/jUjactT8dKLgjC15xdF8aFhyJmr4jY8siV62CadgMN3QnP4cqDtGL16df0V4RwE/WQXBjQiwroHxUtj2W6InwdskkLwaErdZSTyX/RqY1EDdAyYGgiQufqmzOA5GEhkk11RWghWIcWDWecxKp6HAnfo6WT6JGQT+6dzJgdKgMcJrjiuyHdvOFSSoKyX4Hyeo8yeEWIMdEVUZrghDKcXGtZ8YV4YbE6Bk6Yo321QY+kYnUTReV8lO7s0O4rVDiPFjfAn3donBwz7rWInjXRFVGaYCakDxZyJulH4Zjqy98xq1idmZRf0q1V8aZRb9q9BXi1yrWbEtncNCAUAH0XaLyBSxFMeyeoAU8RWYQ3iapnZ3qAcLyCz+JHyxerx88h/n+hJJpZ6cG516I3HdcVUXSviFIEM3snFFokFE/ihnJoL+0zTjj+Sd8x9kETmEzSMG3IiaonYzedKBgbJO0V8ZPxCPKiMMFE7sLJd+qXFY1mYwGJl6EQXUxnf34G5pB6PrqhLnpK1/oP/30JeVGIYNqUak35YyUXCY1dwCxRsaNUaOIFeQ3mkCkixrEy5om8EjcGl6de+8/L3FZciOA/vf4Gfhr/Q6UWCUXX9jR+Uu7dtM+oBe0ig1vPiuhGzTWehpMsajySrx5MhTqu0zX/89ELyIPcqcpfXb8p1C3lypbhcCUzGIWu4oXe4d6f0L0/BL2uVM1cTSJ7zkuR5r2E2ndWqrEoUCJtOEoU/dEvFuHzr/+RibvcBP997qpQxl4t/wizBzC5vAE6/7P53fBCuvcLZLt0ISCVIN/MdHMiAbQwaSwporP2jGq5QRqSaIu9D98e6Ce4SLFYVnBWLCGIfvpQHwSQkJ8ONfNwBTSBuzZZb6DMBHObNf7b83aXRt9qq7Pi3FEDkejKy4CZbcq0p3Hm+eB5VEZjxYKujk609hZRBgznRoNoUTQ/5e3kLu94FiQMBjurboaqR9LmxxjsmthImmSTCA3s1GOclvcMZn8uA6Jc8TP5mMn9+8LZKcCxDTBSdmJyiNwf/tixvTh4eE7uAC/0b0HZlBomEyKwaaJpTQazpzHOpInlWd4iE8HMlucBuodlG1ue09AwH921dVl1tqpzioZJMrSzcZ8yXtfgKHG8TyW4zADfQT/yBrqpBDPyRetO2x3yQw24ZlnxzEwW151AESJ0qBR5uiISLTgKrMg1+9JXbdNkN3SoHExcxMqmRAtmuhOM1D51KIZ3MCaLTS3vYQlO6E7YrEsU2yG5vEedy2YJbureCecNWboipgjW3Z3QwRyyLHo6FWQx3QmYOD/qIucaY1ZXRMyCE7oTuqi55uC6Ir6CKwP65cyCO1nUbHC9VCSbzizY9CKhHcwiqStiQrCO7oQO1SJJNk1cdFrrYofmQA2S3agHpy+/qZNFzYUqmxxutgjftAMdGoso2JrMGRPBAjq0FlYXBO9gHx3BLcecmFTrZa83/kvvamxK6o/Db7qAzAKKXvdche+Eoqu9dCiHWq4226F6dAS3HB3BLUdHcMvREdxy5CZYKM1ePb9faiW2DumY9/u+cihzy1Bugl0nvkXb/8VoizmBDppABjQWI7Wldh8yosByws7naMd96cBtIUa3UadBB/1AA5pKVjgOZJ4MKpSkuHTjgydIcuHl9TqUQoBJjsxz9YWCLMdxqas/gA628dRxvFwVrqXSjPP+rVX8cVeI5LWdO5QDBbVOGPd8dhw8zr1U1fdXt4qmgpe7awAAAABJRU5ErkJggg=="},8073:function(t){"use strict";t.exports="data:image/png;base64,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"},7784:function(t,e,i){"use strict";t.exports=i.p+"img/planning.1f5603cc.png"},4045:function(t){"use strict";t.exports="data:image/png;base64,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"},4396:function(t,e,i){"use strict";t.exports=i.p+"media/6v-2d.d017c99d.mp4"},277:function(t,e,i){"use strict";t.exports=i.p+"media/6v-bev.f6b65712.mp4"},1165:function(t){"use strict";t.exports="data:image/png;base64,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"},8832:function(t,e,i){"use strict";function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,{Z:function(){return s}})},5492:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});i(7941),i(2526),i(7327),i(1539),i(5003),i(4747),i(9337);var s=i(8832);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){(0,s.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}}}]);