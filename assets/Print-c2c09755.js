import{n as i,d as n,m as y,e as v,i as l,V as g}from"./index-43934c25.js";import{B as $,a as k}from"./BaseKey-fd9279cf.js";var b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"key",class:t.myclasses,style:t.mystyles,attrs:{id:t.myid,title:t.displayName}},[t._v(" "+t._s(t.displayName)+" ")])},w=[];const x={name:"print-key",props:{layer:Number},extends:$,computed:{myid(){return`key-${this.layer}-${this.id}`},displayName(){return this.meta.type==="layer"?this.meta.code.replace("layer",this.meta.layer):this.meta.type==="text"?this.formatName(this.breakLines(this.meta.text)):this.meta.type==="layer-container"?`${this.meta.name.toUpperCase()},
${this.formatName(this.meta.contents.code)}`:this.meta.type==="container"?`${this.meta.name.toUpperCase()}
(${this.formatName(this.meta.contents.code)})`:this.formatName(this.breakLines(this.meta.name))}},methods:{breakLines(t){return this.uw<1.75&&(t=t.replace(" ",`
`).replace("_",`_
`)),t}}},c={};var L=i(x,b,w,!1,C,null,null,null);function C(t){for(let s in c)this[s]=c[s]}const u=function(){return L.exports}();var K=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"print-keymap",style:t.styles},[t._l(t.currentLayer(t.layer),function(a){return[e("PrintKey",t._b({key:a.id,attrs:{layer:t.layer,printable:!0}},"PrintKey",a,!1))]})],2)},P=[];const N={name:"PrintKeymap",components:{PrintKey:u},extends:k,props:{profile:Boolean,layer:{type:Number,default:0}},data(){return{width:0,height:0}},computed:{...n("app",["layout"]),...n("keymap",["config"]),...y("keymap",["getLayer","loadingKeymapPromise","colorway","defaults"]),...n("app",["layout","layouts","previewRequested"])},mounted(){this.setSize(this.calculateMax(this.layout))},methods:{...v("keymap",["resizeConfig"]),currentLayer(t){const s=this.layouts[this.layout],e=this.getLayer(t);if(l(s)||l(e))return[];this.profile&&console.time("currentLayer");const a=this.colorway;let p=s.map((h,o)=>{let r=Object.assign({w:1,h:1},h);const d=this.calcKeyKeymapPos(r.x,r.y),f=this.calcKeyKeymapDims(r.w,r.h);return Object.assign({id:o,layer:this.layer,meta:e[o],colorway:a},d,f)});return this.profile&&console.timeEnd("currentLayer"),p},getComponent(){return u}}},_={};var S=i(N,K,P,!1,R,null,null,null);function R(t){for(let s in _)this[s]=_[s]}const j=function(){return S.exports}();var D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"print-layout"},[e("div",{staticClass:"print-controls"},[e("button",{staticClass:"ui-button",attrs:{id:"leavePrint"},on:{click:t.gohome}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",size:"lg","fixed-width":""}}),t._v(" "+t._s(t.i18n("back.title"))+" ")],1),e("button",{staticClass:"ui-button",attrs:{id:"print"},on:{click:function(a){return t.print()}}},[e("font-awesome-icon",{attrs:{icon:"print",size:"lg","fixed-width":""}}),t._v(" "+t._s(t.i18n("print.title"))+" ")],1)]),e("div",{staticClass:"meta-info"},[e("table",[e("tr",[e("th",[t._v(t._s(t.i18n("keyboard.label")))]),e("td",[t._v(t._s(t.keyboard))])]),e("tr",[e("th",[t._v(t._s(t.i18n("layout.label")))]),e("td",[t._v(t._s(t.layout))])]),e("tr",[e("th",[t._v(t._s(t.i18n("author.title")))]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t._author,expression:"_author"}],attrs:{type:"text",placeholder:t.i18n("author.placeholder")},domProps:{value:t._author},on:{input:function(a){a.target.composing||(t._author=a.target.value)}}})])]),e("tr",{on:{click:t.toggleDate}},[e("th",[t._v(t._s(t.i18n("date.title")))]),e("td",[t._v(t._s(t.today))])]),e("tr",[e("th",[t._v(t._s(t.i18n("source.title")))]),e("td",[e("a",{class:t.myclasses,attrs:{href:t.firmwareURL,target:"_blank"}},[t._v(t._s(t.firmwareURL))])])]),e("tr",[e("th",[t._v(t._s(t.i18n("notes.title")))]),e("td",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t._notes,expression:"_notes"}],staticClass:"optional-notes",attrs:{cols:"80",rows:"3",placeholder:t.i18n("notes.placeholder")},domProps:{value:t._notes},on:{input:function(a){a.target.composing||(t._notes=a.target.value)}}})])])])]),e("div",[t._l(t.activeLayers,function(a){return[e("div",{key:a,staticClass:"layer-output",class:t.firefoxOnly(a)},[e("h3",{staticClass:"layer-output-title"},[t._v(" "+t._s(t.i18n("layer.label"))+" "+t._s(a)+" ")]),e("PrintKeymap",{attrs:{layer:a}})],1)]})],2)])},O=[];const T={name:"printerator-component",computed:{...n("app",["keyboard","layout","layouts","author","notes"]),...y("keymap",["activeLayers"]),today(){const t=new Date(Date.now());return this.dateToggle?`${t.toLocaleDateString()} ${t.toLocaleTimeString()}`:`${t.toISOString()}`},firmwareURL(){return`https://github.com/qmk/qmk_firmware/tree/master/keyboards/${this.keyboard}`},myclasses(){let t=[];return(this.keyboard.match(/\//g)||[]).length>0&&t.push("source-small"),t.join(" ")},_author:{set(t){this.$store.commit("app/setAuthor",t)},get(){return this.author}},_notes:{set(t){this.$store.commit("app/setNotes",t)},get(){return this.notes}}},components:{PrintKeymap:j},mounted(){console.log("Active layers",this.activeLayers)},methods:{i18n(t){return this.$t(`print.${t}`)},gohome(){this.$router.push(`/${this.keyboard}/${this.layout}`)},toggleDate(){this.dateToggle=!this.dateToggle},print(){this._notes===""&&(this._notes=this.$t("print.notes.empty")),this._author===""&&(this._author=this.$t("print.anonymous.label")),g.nextTick(()=>{window.print()})},firefoxOnly(t){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&t/3%3==0?"layout-output-firefox":""}},data(){return{dateToggle:!0}}},m={};var U=i(T,D,O,!1,z,null,null,null);function z(t){for(let s in m)this[s]=m[s]}const E=function(){return U.exports}();export{E as default};
