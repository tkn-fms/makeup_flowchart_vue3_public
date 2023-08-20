(function(e){function t(t){for(var a,o,s=t[0],l=t[1],u=t[2],m=0,r=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&r.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(r.length)r.shift()();return i.push.apply(i,u||[]),c()}function c(){for(var e,t=0;t<i.length;t++){for(var c=i[t],a=!0,s=1;s<c.length;s++){var l=c[s];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=c[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=a,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(c,a,function(t){return e[t]}.bind(null,a));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=l;i.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0ab6":function(e,t,c){},"16ca":function(e,t,c){"use strict";c("fdd6")},"1cee":function(e,t,c){},"281c":function(e,t,c){},4022:function(e,t,c){},"402c":function(e,t,c){"use strict";c("e77a")},4133:function(e,t,c){},"4adc":function(e,t,c){"use strict";c("281c")},"4b0d":function(e,t,c){},"4ce4":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);var a=c("7a23");function n(e,t){const c=Object(a["O"])("router-view");return Object(a["I"])(),Object(a["d"])(c)}c("5e04");var i=c("6b0d"),o=c.n(i);const s={},l=o()(s,[["render",n]]);var u=l,b=c("6605"),m=c("5502");const r={class:"home"},d=Object(a["g"])("h1",null,"Make-up FLOW 体験サイト",-1),O=Object(a["g"])("hr",null,null,-1),j={class:"description"},p=Object(a["i"])('<p id="desc-title">Make-up FLOWに興味をお持ち頂きありがとうございます．</p><p id="desc-title">こちらでは化粧フローチャート作成に特化したWebシステム，<br>Make-up FLOWを用いて化粧フロチャートの作成を体験することができます．</p><p id="desc-check">詳細な作成手順は<a href="https://takano.nkmr.io/m1/description_test/" target="_blank">こちら</a>に記載してありますので，</p><p id="desc-check">説明を全て読んでからシステムの体験を開始してください．</p><div id="heading">注意事項</div><ul><table><tr><td><li>実験にはPCを用いて，ブラウザーをフルスクリーンの状態で行ってください．</li></td></tr><tr><td><li>ブラウザーのリロードボタン及び戻るボタンは押さないでください．</li></td></tr></table></ul><div id="heading"><a>問い合わせ先</a></div><ul id="none"><table><tr><td><li>氏名：髙野沙也香</li></td></tr><tr><td><li>メールアドレス：cs232026@meiji.ac.jp</li></td></tr></table></ul>',8),g={class:"start"},f=Object(a["g"])("div",{id:"heading"},"体験準備",-1),v={id:"none"},y=Object(a["g"])("td",null,[Object(a["g"])("li",null,"体験終了時にほしいデータがあれば選択してください．")],-1),k=Object(a["g"])("label",{for:"json"},"json",-1),h=Object(a["g"])("label",{for:"svg"},"svg",-1),N=Object(a["g"])("td",null,[Object(a["g"])("li",null,"名前を入力して体験を開始してください．")],-1),W=["disabled"];var T={__name:"Home",setup(e){const t=Object(a["L"])(""),c=Object(a["L"])([]),n=Object(m["b"])(),i=Object(b["c"])(),o=Object(a["b"])({get:()=>t.value,set:e=>{t.value=e}}),s=Object(a["b"])({get:()=>c.value,set:e=>{c.value=e}}),l=Object(a["b"])({get:()=>""==t.value,set:e=>{console.log(e)}}),u=()=>{const e=Math.floor(1e4+9e4*Math.random());n.commit("setUserData",{name:t.value,id:e}),n.commit("setDownloadData",c),console.log("id:"+n.state.userId+", name:"+n.state.userName),console.log(n.state.downloadData),i.push("/flowchart")};return(e,t)=>(Object(a["I"])(),Object(a["f"])("div",r,[d,O,Object(a["g"])("div",j,[p,Object(a["g"])("div",g,[f,Object(a["g"])("ul",v,[Object(a["g"])("table",null,[Object(a["g"])("tr",null,[y,Object(a["g"])("td",null,[Object(a["fb"])(Object(a["g"])("input",{type:"checkbox",id:"json",value:"json","onUpdate:modelValue":t[0]||(t[0]=e=>Object(a["t"])(s)?s.value=e:null)},null,512),[[a["Z"],Object(a["W"])(s)]]),k,Object(a["fb"])(Object(a["g"])("input",{type:"checkbox",id:"svg",value:"svg","onUpdate:modelValue":t[1]||(t[1]=e=>Object(a["t"])(s)?s.value=e:null)},null,512),[[a["Z"],Object(a["W"])(s)]]),h])]),Object(a["g"])("tr",null,[N,Object(a["g"])("td",null,[Object(a["fb"])(Object(a["g"])("input",{type:"text",id:"name","onUpdate:modelValue":t[2]||(t[2]=e=>Object(a["t"])(o)?o.value=e:null)},null,512),[[a["bb"],Object(a["W"])(o)]]),Object(a["g"])("button",{onClick:u,disabled:Object(a["W"])(l),class:Object(a["x"])(Object(a["W"])(l)?"":"ableButton")},"開始",10,W)])])])])])])]))}};c("e017");const w=T;var x=w,I=c("7929");const M=[{id:"1",type:"input",label:"メイク開始",position:{x:250,y:5},class:"light"}],_={class:"node-makeup",style:{display:"flex"}},L=["src"],S={key:0,id:"title"},D={key:1,id:"title"};var C={__name:"MakeNode",props:{label:{type:String,required:!0},data:{required:!0}},setup(e){const t=e,c=["base","eyebrow","eye","nose","mouth"],n=t.label.split("(指定なし)");return(e,i)=>(Object(a["I"])(),Object(a["f"])("div",_,[Object(a["k"])(Object(a["W"])(I["d"]),{type:"target",position:Object(a["W"])(I["g"]).Top},null,8,["position"]),Object(a["g"])("img",{id:"icon",src:"https://takano.nkmr.io/b4/makeflowchart/img/icon/"+c[t.data.partNum]+".png"},null,8,L),t.label.includes("指定なし")?(Object(a["I"])(),Object(a["f"])("p",D,Object(a["T"])(Object(a["W"])(n)[0]+Object(a["W"])(n)[1]),1)):(Object(a["I"])(),Object(a["f"])("p",S,Object(a["T"])(t.label),1)),Object(a["k"])(Object(a["W"])(I["d"]),{type:"source",position:Object(a["W"])(I["g"]).Bottom},null,8,["position"])]))}};c("7517");const E=C;var P=E;const U={class:"motivation-node"},V=Object(a["g"])("div",{class:"mvdiamond"},[Object(a["g"])("div",{class:"mvdiamond-inner"},[Object(a["g"])("p",{id:"mvtitle"},"気合い")])],-1);var F={__name:"MotivationNode",setup(e){return(e,t)=>(Object(a["I"])(),Object(a["f"])("div",U,[Object(a["k"])(Object(a["W"])(I["d"]),{type:"target",position:Object(a["W"])(I["g"]).Top},null,8,["position"]),V,Object(a["k"])(Object(a["W"])(I["d"]),{type:"source",position:Object(a["W"])(I["g"]).Bottom},null,8,["position"])]))}};c("402c");const q=F;var B=q;const z={class:"season-node"},A=Object(a["g"])("div",{class:"sdiamond"},[Object(a["g"])("div",{class:"sdiamond-inner"},[Object(a["g"])("p",{id:"stitle"},"季節")])],-1);var J={__name:"SeasonNode",setup(e){return(e,t)=>(Object(a["I"])(),Object(a["f"])("div",z,[Object(a["k"])(Object(a["W"])(I["d"]),{type:"target",position:Object(a["W"])(I["g"]).Top},null,8,["position"]),A,Object(a["k"])(Object(a["W"])(I["d"]),{type:"source",position:Object(a["W"])(I["g"]).Bottom},null,8,["position"])]))}};c("4adc");const R=J;var X=R;const Y={class:"time-node"},H=Object(a["g"])("div",{class:"tdiamond"},[Object(a["g"])("div",{class:"tdiamond-inner"},[Object(a["g"])("p",{id:"ttitle"},"外出時間")])],-1);var Z={__name:"TimeNode",setup(e){return(e,t)=>(Object(a["I"])(),Object(a["f"])("div",Y,[Object(a["k"])(Object(a["W"])(I["d"]),{type:"target",position:Object(a["W"])(I["g"]).Top},null,8,["position"]),H,Object(a["k"])(Object(a["W"])(I["d"]),{type:"source",position:Object(a["W"])(I["g"]).Bottom},null,8,["position"])]))}};c("16ca");const $=Z;var G=$;const K={class:"selects"},Q={class:"box"},ee=Object(a["g"])("p",null,"施術部位：",-1),te=["value"],ce={class:"box"},ae=Object(a["g"])("p",null,"使用アイテム：",-1),ne=["value"],ie={class:"box"},oe=Object(a["g"])("p",null,"タイプ(形状/色)：",-1),se=["value"],le=["value"],ue=["value"],be=["value"],me=["value"],re=["value"],de=["value"],Oe=["value"],je=["value"],pe=["value"],ge=["value"];var fe={__name:"NodeSettings",setup(e){const t=["肌","眉","目","鼻","口"],c=["日焼け止め","化粧下地","コントロールカラー下地","ファンデーション","BBクリーム","CCクリーム","コンシーラー","フェイスパウダー","アイブロウ","スクリューブラシ","アイシャドウ下地","アイシャドウ","グリッター","アイライナー","ダブルライナー","二重ライナー","涙袋ライナー","ビューラー","ホットビューラー","マスカラ下地","マスカラ","コーム","チーク","リップクリーム","口紅","リップグロス","リップライナー","ハイライト","シェーディング","メイクキープミスト"],n=["指定なし"],i=["無色","色付き"],o=["イエロー","オレンジ","ピンク","グリーン","ブルー","パープル"],s=["パウダー","リキッド","クリーム","ジェル","クッション"],l=["ルース","プレスト"],u=["ペンシル","パウダー","マスカラ"],b=["パウダー","リキッド","クリーム","ジェル"],r=["リキッド","ペンシル","ジェル"],d=["パウダー","クリーム","ジェル"],O=["パウダー","リキッド","クリーム","スティック"],j=["パウダー","リキッド","クリーム","スティック"];let p=Object(a["L"])(0),g=Object(a["L"])(0),f=Object(a["L"])(0);const v=Object(m["b"])(),y=Object(a["b"])({get:()=>p.value,set:e=>{p.value=e,v.commit("setPart",{num:e,name:t[e]})}}),k=Object(a["b"])({get:()=>g.value,set(e){g.value=e,v.commit("setItem",{num:e,name:c[e]}),f.value=0,0==e?v.commit("setType",{num:0,name:i[0]}):2==e||5==e?v.commit("setType",{num:0,name:o[0]}):3==e?v.commit("setType",{num:0,name:s[0]}):7==e?v.commit("setType",{num:0,name:l[0]}):8==e?v.commit("setType",{num:0,name:u[0]}):11==e?v.commit("setType",{num:0,name:b[0]}):13==e?v.commit("setType",{num:0,name:r[0]}):22==e?v.commit("setType",{num:0,name:d[0]}):27==e?v.commit("setType",{num:0,name:O[0]}):28==e?v.commit("setType",{num:0,name:j[0]}):v.commit("setType",{num:0,name:"指定なし"})}}),h=Object(a["b"])({get:()=>f.value,set(e){f.value=e,0==g.value?v.commit("setType",{num:e,name:i[e]}):2==g.value||5==g.value?v.commit("setType",{num:e,name:o[e]}):3==g.value?v.commit("setType",{num:e,name:s[e]}):7==g.value?v.commit("setType",{num:e,name:l[e]}):8==g.value?v.commit("setType",{num:e,name:u[e]}):11==g.value?v.commit("setType",{num:e,name:b[e]}):13==g.value?v.commit("setType",{num:e,name:r[e]}):22==g.value?v.commit("setType",{num:e,name:d[e]}):27==g.value?v.commit("setType",{num:e,name:O[e]}):28==g.value?v.commit("setType",{num:e,name:j[e]}):v.commit("setType",{num:0,name:"指定なし"})}});return(e,m)=>(Object(a["I"])(),Object(a["f"])("div",K,[Object(a["g"])("div",Q,[ee,Object(a["fb"])(Object(a["g"])("select",{name:"parts","onUpdate:modelValue":m[0]||(m[0]=e=>Object(a["t"])(y)?y.value=e:null),style:{"margin-left":"34px"}},[(Object(a["I"])(),Object(a["f"])(a["a"],null,Object(a["M"])(t,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,te)),64))],512),[[a["ab"],Object(a["W"])(y)]])]),Object(a["g"])("div",ce,[ae,Object(a["fb"])(Object(a["g"])("select",{name:"items","onUpdate:modelValue":m[1]||(m[1]=e=>Object(a["t"])(k)?k.value=e:null),style:{"margin-left":"12px"}},[(Object(a["I"])(),Object(a["f"])(a["a"],null,Object(a["M"])(c,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,ne)),64))],512),[[a["ab"],Object(a["W"])(k)]])]),Object(a["g"])("div",ie,[oe,Object(a["fb"])(Object(a["g"])("select",{name:"types","onUpdate:modelValue":m[2]||(m[2]=e=>Object(a["t"])(h)?h.value=e:null)},[0==Object(a["W"])(g)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:0},Object(a["M"])(i,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,se)),64)):2==Object(a["W"])(g)||5==Object(a["W"])(g)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:1},Object(a["M"])(o,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,le)),64)):3==Object(a["W"])(g)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:2},Object(a["M"])(s,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,ue)),64)):7==Object(a["W"])(g)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:3},Object(a["M"])(l,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,be)),64)):8==Object(a["W"])(g)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:4},Object(a["M"])(u,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,me)),64)):11==Object(a["W"])(g)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:5},Object(a["M"])(b,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,re)),64)):13==Object(a["W"])(g)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:6},Object(a["M"])(r,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,de)),64)):22==Object(a["W"])(g)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:7},Object(a["M"])(d,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,Oe)),64)):27==Object(a["W"])(g)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:8},Object(a["M"])(O,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,je)),64)):28==Object(a["W"])(g)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:9},Object(a["M"])(j,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,pe)),64)):(Object(a["I"])(),Object(a["f"])(a["a"],{key:10},Object(a["M"])(n,(e,t)=>Object(a["g"])("option",{key:t,value:t},Object(a["T"])(e),9,ge)),64))],512),[[a["ab"],Object(a["W"])(h)]])])]))}};c("72d5");const ve=fe;var ye=ve;const ke={class:"face-image",style:{"pointer-events":"none"}},he={class:"image-area"},Ne=Object(a["g"])("img",{src:"https://takano.nkmr.io/b4/makeflowchart/img/face/base.png"},null,-1);var We={__name:"FaceImage",setup(e){const t=Object(m["b"])(),c=Object(a["b"])(()=>t.state.makenodeList);return(e,t)=>(Object(a["I"])(),Object(a["f"])("div",ke,[Object(a["g"])("div",he,[Ne,Object(a["g"])("img",{src:"https://takano.nkmr.io/b4/makeflowchart/img/face/eyebrow.png",class:Object(a["x"])(Object(a["W"])(c)[0]?"visible1":"hidden1")},null,2),Object(a["g"])("img",{src:"https://takano.nkmr.io/b4/makeflowchart/img/face/eyebrowmascara.png",class:Object(a["x"])(Object(a["W"])(c)[1]?"visible1":"hidden1")},null,2),Object(a["g"])("img",{src:"https://takano.nkmr.io/b4/makeflowchart/img/face/eyeshadow.png",class:Object(a["x"])(Object(a["W"])(c)[2]?"visible1":"hidden1")},null,2),Object(a["g"])("img",{src:"https://takano.nkmr.io/b4/makeflowchart/img/face/eyeliner.png",class:Object(a["x"])(Object(a["W"])(c)[3]?"visible1":"hidden1")},null,2),Object(a["g"])("img",{src:"https://takano.nkmr.io/b4/makeflowchart/img/face/buehlerandmascara.png",class:Object(a["x"])(Object(a["W"])(c)[4]?"visible1":"hidden1")},null,2),Object(a["g"])("img",{src:"https://takano.nkmr.io/b4/makeflowchart/img/face/rip.png",class:Object(a["x"])(Object(a["W"])(c)[5]?"visible1":"hidden1")},null,2),Object(a["g"])("img",{src:"https://takano.nkmr.io/b4/makeflowchart/img/face/gross.png",class:Object(a["x"])(Object(a["W"])(c)[6]?"visible1":"hidden1")},null,2),Object(a["g"])("img",{src:"https://takano.nkmr.io/b4/makeflowchart/img/face/cheek.png",class:Object(a["x"])(Object(a["W"])(c)[7]?"visible1":"hidden1")},null,2)])]))}};c("aa61");const Te=We;var we=Te,xe=c("5c40");const Ie={class:"nodes"},Me=["src"],_e={key:0,id:"m-title"},Le={key:1,id:"m-title"},Se={key:1,id:"m-title"},De=Object(a["g"])("div",{class:"mv-diamond"},[Object(a["g"])("div",{class:"mv-diamond-inner"},[Object(a["g"])("p",{id:"mv-title"},"気合い")])],-1),Ce=[De],Ee=Object(a["g"])("div",{class:"s-diamond"},[Object(a["g"])("div",{class:"s-diamond-inner"},[Object(a["g"])("p",{id:"s-title"},"季節")])],-1),Pe=[Ee],Ue=Object(a["g"])("div",{class:"t-diamond"},[Object(a["g"])("div",{class:"t-diamond-inner"},[Object(a["g"])("p",{id:"t-title"},"外出時間")])],-1),Ve=[Ue];var Fe={__name:"NodeField",setup(e){const t=["base","eyebrow","eye","nose","mouth"],c=Object(m["b"])(),n=(e,t,c)=>{e.dataTransfer&&(e.dataTransfer.setData("application/vueflow",t,c),e.dataTransfer.effectAllowed="move")},i=Object(xe["e"])(()=>c.state.partNum),o=Object(xe["e"])(()=>c.state.itemName),s=Object(xe["e"])(()=>c.state.typeName);return(e,c)=>(Object(a["I"])(),Object(a["f"])("aside",null,[Object(a["g"])("div",Ie,[Object(a["g"])("div",{class:"makeup-node",style:{display:"flex"},draggable:!0,onDragstart:c[0]||(c[0]=e=>n(e,"customMake"))},[Object(a["g"])("img",{id:"m-icon",src:"https://takano.nkmr.io/b4/makeflowchart/img/icon/"+t[Object(a["W"])(i)]+".png"},null,8,Me),"指定なし"!=Object(a["W"])(s)?(Object(a["I"])(),Object(a["f"])(a["a"],{key:0},[Object(a["W"])(o).length>=7?(Object(a["I"])(),Object(a["f"])("p",_e,Object(a["T"])(Object(a["W"])(o)+"\n("+Object(a["W"])(s)+")"),1)):(Object(a["I"])(),Object(a["f"])("p",Le,Object(a["T"])(Object(a["W"])(o)+"("+Object(a["W"])(s)+")"),1))],64)):(Object(a["I"])(),Object(a["f"])("p",Se,Object(a["T"])(Object(a["W"])(o)),1))],32),Object(a["g"])("div",{class:"vue-flow__node-input",draggable:!0,onDragstart:c[1]||(c[1]=e=>n(e,"input"))},"メイク開始",32),Object(a["g"])("div",{class:"vue-flow__node-output",draggable:!0,onDragstart:c[2]||(c[2]=e=>n(e,"output"))},"メイク終了",32),Object(a["g"])("div",{class:"mvbranch-node",draggable:!0,onDragstart:c[3]||(c[3]=e=>n(e,"customMotivation"))},Ce,32),Object(a["g"])("div",{class:"sbranch-node",draggable:!0,onDragstart:c[4]||(c[4]=e=>n(e,"customSeason"))},Pe,32),Object(a["g"])("div",{class:"tbranch-node",draggable:!0,onDragstart:c[5]||(c[5]=e=>n(e,"customTime"))},Ve,32)])]))}};c("d449");const qe=Fe;var Be=qe;const ze={class:"topmenu"},Ae={class:"leftside"},Je={class:"stepicon"},Re={id:"circle"},Xe=Object(a["g"])("div",{id:"step"},"STEP",-1),Ye=["textContent"],He={class:"rightside"};var Ze={__name:"TopMenu",emits:["checkTurn1","submitObject"],setup(e,{emit:t}){const c=Object(m["b"])(),n=["マスクを外す機会がある場合の自身の理想の化粧フローチャートを作成してください．\nなお，化粧にかけられる時間が十分にあるとします．","化粧にかけられる時間が短い時に飛ばす工程をクリックしてください．\n飛ばす工程が無ければ右上にある「次へ」ボタンを押してください．","化粧をする時に，やろうと思ったのについ忘れてしまう工程をクリックしてください．\n忘れる工程が無ければ右上にある「終わり」ボタンを押してください．"],i=Object(a["b"])(()=>c.state.turn),o=()=>{c.state.turn>1&&c.commit("setTurn",-1)},s=()=>{1==c.state.turn&&t("checkTurn1"),c.state.inputN&&c.state.outputN&&c.commit("setTurn",1)},l=()=>{t("submitObject")};return(e,t)=>(Object(a["I"])(),Object(a["f"])("div",ze,[Object(a["g"])("div",Ae,[Object(a["g"])("div",Je,[Object(a["g"])("div",Re,Object(a["T"])(Object(a["W"])(i)),1),Xe]),Object(a["g"])("label",{id:"description",textContent:Object(a["T"])(n[Object(a["W"])(i)-1])},null,8,Ye)]),Object(a["g"])("div",He,[Object(a["W"])(i)>1?(Object(a["I"])(),Object(a["f"])("button",{key:0,class:"button-68",role:"button",onClick:o},"戻る")):Object(a["e"])("",!0),Object(a["W"])(i)<3?(Object(a["I"])(),Object(a["f"])("button",{key:1,class:"button-68",role:"button",onClick:s},"次へ")):(Object(a["I"])(),Object(a["f"])("button",{key:2,class:"button-68",role:"button",onClick:l},"終わり"))])]))}};c("f3f8");const $e=Ze;var Ge=$e,Ke=c("2560"),Qe=c("e774");const et={class:"sidemenu"};var tt={__name:"Flowchart",setup(e){const{onPaneReady:t,onConnect:c,onEdgesChange:n,onNodesChange:i,addEdges:o,addNodes:s,toObject:l,project:u,getNode:r,getEdge:d}=Object(I["k"])(),O=Object(a["L"])(M),j={customMake:Object(a["u"])(P),customMotivation:Object(a["u"])(B),customSeason:Object(a["u"])(X),customTime:Object(a["u"])(G)},p=Object(m["b"])(),g=Object(b["c"])();var f=[],v=[],y={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[]};const k=[{name:"Copy",slug:"copy"}],h=Object(a["L"])(M),N=e=>{Object.defineProperty(e,"pageX",{value:e.pageX-350,writable:!0}),Object.defineProperty(e,"pageY",{value:e.pageY-100,writable:!0}),h.value.showMenu(e)},W=e=>{p.commit("setSelectNodeList",e.nodes)},T=()=>{for(var e,t=p.state.selectnodeList,c=0;c<t.length;c++){var a=p.state.selectnodeList[c];e="input"==a.type||"output"==a.type?{id:E(),type:a.type,position:u({x:a.position.x+100,y:a.position.y+100}),label:a.label}:"customMake"==a.type?{id:U(),type:a.type,position:u({x:a.position.x+100,y:a.position.y+100}),label:a.label,style:a.style,data:a.data}:{id:"customMotivation"==a.type?V():"customSeason"==a.type?F():q(),type:a.type,position:u({x:a.position.x+100,y:a.position.y+100}),label:a.label,style:a.style},s([e])}};t(({fitView:e})=>{e()});const w=e=>e.fitView(),x=e=>{if(f.includes(e)){var t=v[e];return t.length}return 0},_=(e,t)=>{var c=e.id,a=e.source;if(f=Object.keys(v),"add"==t)f.includes(a)?v[a].push(c):(v[a]=[],v[a].push(c),f=Object.keys(v));else if("remove"==t){var n=v[a];if(n.length>=2)for(var i=0;i<n.length;i++)n[i]==c&&v[a].splice(i,1);else delete v[a],f=Object.keys(v)}else if("change"!=t)return},L=e=>{if("add"==e.type)y[e.imgNum].push(e.id);else{if("remove"!=e.type)return;for(var t=y[e.imgNum],c=0;c<t.length;c++)t[c]==e.id&&y[e.imgNum].splice(c,1)}for(var a=0;a<Object.keys(y).length;a++){var n=y[a];n.length>=1?p.commit("setMakeNodeList",{imgNum:a,imgState:!0}):p.commit("setMakeNodeList",{imgNum:a,imgState:!1})}},S=()=>{var e=!1,t=!1;O.value.forEach(c=>{Object(I["j"])(c)&&("input"==c.type?e=!0:"output"==c.type&&(t=!0))}),p.commit("setInOutput",{input:e,output:t}),p.state.inputN&&p.state.outputN||alert("メイク開始・終了ノードを設置してください．")};i(e=>{for(var t=0;t<e.length;t++)if("add"==e[t].type){if("customMake"==e[t].item.type){var c=e[t].item,a=c.data;if(1==a.partNum&&8==a.itemNum)L({imgNum:0,id:c.id,type:"add"});else if(1==a.partNum&&8==a.itemNum&&2==a.typeNum)L({imgNum:1,id:c.id,type:"add"});else if(2==a.partNum&&11==a.itemNum)L({imgNum:2,id:c.id,type:"add"});else if(2==a.partNum&&13<=a.itemNum&&a.itemNum<=16)L({imgNum:3,id:c.id,type:"add"});else if(2==a.partNum&&17<=a.itemNum&&a.itemNum<=20)L({imgNum:4,id:c.id,type:"add"});else if(4==a.partNum&&24==a.itemNum)L({imgNum:5,id:c.id,type:"add"});else if(4==a.partNum&&25==a.itemNum)L({imgNum:6,id:c.id,type:"add"});else{if(0!=a.partNum||22!=a.itemNum)return;L({imgNum:7,id:c.id,type:"add"})}}}else if("remove"==e[t].type){if(e[t].id.indexOf("make")>-1){const c=r.value(e[t].id),a=c.data;if(1==a.partNum&&8==a.itemNum)L({imgNum:0,id:e[t].id,type:"remove"});else if(1==a.partNum&&8==a.itemNum&&2==a.typeNum)L({imgNum:1,id:e[t].id,type:"remove"});else if(2==a.partNum&&11==a.itemNum)L({imgNum:2,id:e[t].id,type:"remove"});else if(2==a.partNum&&13<=a.itemNum&&a.itemNum<=16)L({imgNum:3,id:e[t].id,type:"remove"});else if(2==a.partNum&&17<=a.itemNum&&a.itemNum<=20)L({imgNum:4,id:e[t].id,type:"remove"});else if(4==a.partNum&&24==a.itemNum)L({imgNum:5,id:e[t].id,type:"remove"});else if(4==a.partNum&&25==a.itemNum)L({imgNum:6,id:e[t].id,type:"remove"});else{if(0!=a.partNum||22!=a.itemNum)return;L({imgNum:7,id:e[t].id,type:"remove"})}}}else{if("select"!=e[t].type)return;var n;(e[t].id.indexOf("make")>-1||e[t].id.indexOf("branch")>-1)&&(n=r.value(e[t].id),e[t].selected?n.style["--vf-node-color"]="#3cb371":n.style["--vf-node-color"]="black"),2==p.state.turn?e[t].id.indexOf("make")>-1&&e[t].selected&&(n.data["skip"]?(n.style["--vf-node-text"]="black",n.data["skip"]=!1):(n.style["--vf-node-text"]="#ff8c00",n.data["skip"]=!0)):3==p.state.turn&&e[t].id.indexOf("make")>-1&&e[t].selected&&(n.data["forget"]?(n.style["--vf-node-bg"]="white",n.data["forget"]=!1):(n.style["--vf-node-bg"]="pink",n.data["forget"]=!0))}}),n(e=>{for(var t,c=0;c<e.length;c++)if("add"==e[c].type){var a=e[c].item;f=Object.keys(v),f.includes(a.source)?v[a.source].push(a.id):(v[a.source]=[],v[a.source].push(a.id),f=Object.keys(v)),t=x(a.source),t>=1&&O.value.forEach(e=>{Object(I["i"])(e)&&e.source==a.source&&(e.type="smoothstep")})}else if("remove"==e[c].type){var n,i;O.value.forEach(a=>{a.id==e[c].id&&(i=a,n=a.source,t=x(n))}),2==t&&O.value.forEach(e=>{Object(I["i"])(e)&&e.source==n&&(e.type="straight")}),_(i,"remove")}else{if("select"!=e[c].type)return;var o=d.value(e[c].id);e[c].selected?(o.animated=!0,2==p.state.turn&&p.commit("setEdgeId",e[c].id)):(o.animated=!1,2==p.state.turn&&p.commit("setEdgeId",""))}}),c(e=>{var t,c;f=Object.keys(v),t=f.includes(e.source)?x(e.source)+1:1;const a=()=>`e${e.source}_${e.target}`;if(t<3){if(e.source.indexOf("make")>-1){if(!(t<2))return void alert("1つの化粧ノードから出せる矢印は1本だけです.追加で分岐させたい場合は分岐ノードを繋げてください");c={id:a(),source:e.source,target:e.target,type:"straight",style:{stroke:"black"},markerEnd:I["e"].ArrowClosed,animated:!1}}else if(e.source.indexOf("branch")>-1){var n,i,s;e.source.indexOf("mvbranch")>-1?(n=t%2==0?"なし":"あり",i=t%2==0?"blue":"red",s=t%2==0?"no":"max"):e.source.indexOf("sbranch")>-1?(n=t%2==0?"冬":"夏",i=t%2==0?"gray":"blue",s=t%2==0?"winter":"summer"):(n=t%2==0?"短い":"長い",i=t%2==0?"blue":"red",s=t%2==0?"short":"long"),c={id:a(),source:e.source,target:e.target,type:t>1?"smoothstep":"straight",label:n,style:{stroke:i},labelStyle:{fill:"white"},labelBgStyle:{fill:i},markerEnd:I["e"].ArrowClosed,animated:!1,data:{type:s}}}else{if(!(t<2))return void alert("1つのメイク開始/終了ノードから出せる矢印は1本だけです.追加で分岐させたい場合は分岐ノードを繋げてください");c={id:a(),source:e.source,target:e.target,type:"straight",style:{stroke:"black"},markerEnd:I["e"].ArrowClosed,animated:!1}}o([c])}else alert("1つのノードから出せる矢印は2本までです.追加で分岐させたい場合は分岐ノードを繋げてください")});const D=e=>{e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")};let C=0;const E=()=>"ss_"+C++,U=()=>"make_"+C++,V=()=>"mvbranch_"+C++,F=()=>"sbranch_"+C++,q=()=>"tbranch_"+C++,z=e=>{var t;const c=null===(t=e.dataTransfer)||void 0===t?void 0:t.getData("application/vueflow"),a=u({x:e.clientX-400,y:e.clientY-150});var n;if("input"==c||"output"==c)n={id:E(),type:c,position:a,label:"input"==c?"メイク開始":"メイク終了"};else if("customMake"==c)n={id:U(),type:c,position:a,label:p.state.itemName.length>=7?p.state.itemName+"\n("+p.state.typeName+")":p.state.itemName+"("+p.state.typeName+")",style:{"--vf-node-color":"black"},data:{partName:p.state.partName,partNum:p.state.partNum,itemName:p.state.itemName,itemNum:p.state.itemNum,typeName:p.state.typeName,typeNum:p.state.typeNum,skip:!1,forget:!1}};else{var i,o;"customMotivation"==c?(i="気合い",o=V()):"customSeason"==c?(i="季節",o=F()):(i="外出時間",o=q()),n={id:o,type:c,position:a,label:i,style:{"--vf-node-color":"black"}}}s([n])},A=()=>{if(console.log(p.state.downloadData.indexOf("json")),console.log(p.state.downloadData.indexOf("svg")),-1!=p.state.downloadData.indexOf("json")){const e=p.state.userName+".json",t=JSON.stringify(l()),c=document.createElement("a");c.href="data:text/plain,"+encodeURIComponent(t),c.download=e,c.click()}-1!=p.state.downloadData.indexOf("svg")&&Qe["a"](document.querySelector(".vue-flow__container")).then((function(e){const t=document.createElement("a");t.download=p.state.userName+".svg",t.href=e,t.click()})),setTimeout((function(){g.push("/finish")}),1e3)};return(e,t)=>(Object(a["I"])(),Object(a["f"])(a["a"],null,[Object(a["k"])(Ge,{onSubmitObject:A,onCheckTurn1:S}),Object(a["g"])("div",{class:"dndflow",onDrop:z},[Object(a["g"])("div",et,[Object(a["k"])(we),Object(a["k"])(ye),Object(a["k"])(Be)]),Object(a["k"])(Object(a["W"])(I["h"]),{class:"basicflow",modelValue:O.value,"onUpdate:modelValue":t[0]||(t[0]=e=>O.value=e),"node-types":j,"default-zoom":1.5,"min-zoom":.2,"max-zoom":4,"fit-view-on-init":!0,"snap-to-grid":!0,"connection-mode":Object(a["W"])(I["b"]).Loose,onDragover:D,onPaneReady:w,onSelectionContextMenu:W,onContextmenu:t[1]||(t[1]=Object(a["gb"])(e=>N(e),["prevent","stop"]))},{"node-Make":Object(a["eb"])(e=>[Object(a["k"])(P,Object(a["y"])(Object(a["q"])(e)),null,16)]),"node-Motivation":Object(a["eb"])(e=>[Object(a["k"])(B,Object(a["y"])(Object(a["q"])(e)),null,16)]),"node-Season":Object(a["eb"])(e=>[Object(a["k"])(X,Object(a["y"])(Object(a["q"])(e)),null,16)]),"node-Time":Object(a["eb"])(e=>[Object(a["k"])(G,Object(a["y"])(Object(a["q"])(e)),null,16)]),default:Object(a["eb"])(()=>[Object(a["k"])(Object(a["W"])(I["a"]),{"pattern-color":"#000000",gap:"8"}),Object(a["k"])(Object(a["W"])(I["f"])),Object(a["k"])(Object(a["W"])(I["c"])),Object(a["k"])(Object(a["W"])(Ke["a"]),{"element-id":"myUniqueId",options:k,ref_key:"vueContextMenu",ref:h,onOptionClicked:T},null,512)]),_:1},8,["modelValue","default-zoom","min-zoom","connection-mode"])],32)],64))}};c("b728");const ct=tt;var at=ct;const nt={class:"finish"},it=Object(a["g"])("h1",null,"Make-up FLOW 体験サイト",-1),ot=Object(a["g"])("hr",null,null,-1),st=Object(a["g"])("div",{class:"comment"},[Object(a["g"])("p",null,"化粧フローチャートの作成お疲れ様でした．体験はこちらで終了となります．"),Object(a["g"])("p",null,"Make-up FLOWにご興味を抱いてくださったこと感謝申し上げます．")],-1),lt=[it,ot,st];function ut(e,t){return Object(a["I"])(),Object(a["f"])("div",nt,lt)}c("9dea");const bt={},mt=o()(bt,[["render",ut]]);var rt=mt;const dt=[{path:"/",name:"Home",component:x},{path:"/flowchart",name:"Flowchart",component:at},{path:"/finish",name:"Finish",component:rt}],Ot=Object(b["a"])({history:Object(b["b"])(),routes:dt});var jt=Ot,pt=Object(m["a"])({state:{userName:"",userId:"",downloadData:[],turn:1,outputN:!1,inputN:!1,partNum:0,partName:"肌",itemNum:0,itemName:"日焼け止め",typeNum:0,typeName:"無色",makenodeList:[!1,!1,!1,!1,!1,!1,!1,!1,!1],selectnodeList:[]},mutations:{setUserData:function(e,t){e.userName=t.name,e.userId=t.id},setDownloadData:function(e,t){e.downloadData=t},setTurn:function(e,t){e.turn=e.turn+t},setInOutput:function(e,t){e.inputN=t.input,e.outputN=t.output},setPart:function(e,t){e.partNum=t.num,e.partName=t.name},setItem:function(e,t){e.itemNum=t.num,e.itemName=t.name},setType:function(e,t){e.typeNum=t.num,e.typeName=t.name},setMakeNodeList:function(e,t){e.makenodeList[t.imgNum]=t.imgState},setSelectNodeList:function(e,t){e.selectnodeList=t}},actions:{},modules:{}});Object(a["c"])(u).use(pt).use(jt).mount("#app")},"5e04":function(e,t,c){"use strict";c("4133")},"72d5":function(e,t,c){"use strict";c("8ccf")},7517:function(e,t,c){"use strict";c("4022")},"8ccf":function(e,t,c){},"8e15":function(e,t,c){},"9dea":function(e,t,c){"use strict";c("a5e4")},a5e4:function(e,t,c){},aa61:function(e,t,c){"use strict";c("0ab6")},b728:function(e,t,c){"use strict";c("4b0d")},d449:function(e,t,c){"use strict";c("1cee")},e017:function(e,t,c){"use strict";c("8e15")},e77a:function(e,t,c){},f3f8:function(e,t,c){"use strict";c("4ce4")},fdd6:function(e,t,c){}});
//# sourceMappingURL=app.dd721006.js.map