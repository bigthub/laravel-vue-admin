(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fd21"],{ea3b:function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"test"},[e._v("1111\n  "),n("span",{staticStyle:{display:"block"}},[e._v("点击")])])}],c={name:"WebSocket",data:function(){return{websock:null}},created:function(){this.initWebSocket()},destroyed:function(){this.websock.close()},methods:{initWebSocket:function(){if("WebSocket"in window){var e="ws://127.0.0.1:5200?id=6";this.websock=new WebSocket(e),this.websock.onmessage=this.onmessage,this.websock.onopen=this.onopen,this.websock.onerror=this.onerror,this.websock.onclose=this.close}else console.log("Your browser does not support WebSocket!")},onopen:function(){},onerror:function(){this.initWebSocket()},onmessage:function(e){console.log(e.data);var o=JSON.parse(e.data);console.log(o)},send:function(e){this.websock.send(e)},close:function(e){console.log("断开连接",e)}}},i=c,r=n("2877"),l=Object(r["a"])(i,t,s,!1,null,null,null);o["default"]=l.exports}}]);