(this["webpackJsonpreact-redux-starter-template"]=this["webpackJsonpreact-redux-starter-template"]||[]).push([[0],{153:function(e,t,n){e.exports=n.p+"static/media/PushPin.d22b5a3d.png"},168:function(e,t,n){e.exports=n(319)},173:function(e,t,n){},174:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},175:function(e,t,n){},180:function(e,t,n){},290:function(e,t,n){},317:function(e,t,n){},318:function(e,t,n){},319:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(5),r=n.n(i),c=(n(173),n(18)),s=n(19),l=n(22),u=n(20),p=n(21),d=(n(174),n(175),n(58));var h=n(88),f=n(45),m=n(152),g=n(66),v=(n(180),n(153)),b=n.n(v),E=n(344),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={searchWidget:null},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;Object(g.loadModules)(["esri/widgets/Search","esri/layers/GraphicsLayer","esri/Graphic","esri/symbols/PictureMarkerSymbol","esri/geometry/support/webMercatorUtils","esri/tasks/Locator"]).then((function(t){var n=Object(h.a)(t,6),a=n[0],o=n[1],i=n[2],r=n[3],c=n[4];n[5];if(null==e.state.searchWidget&&null!=e.props.view&&null!=e.props.view.map){var s=e.props.view,l=new a({view:s,container:"searchWidget",locationEnabled:!1,resultGraphicEnabled:!1}),u=l.get("sources");l.set("sources",u),e.setState({searchWidget:l});var p=new o;e.props.view.map.add(p);var d,f,m=new r({url:b.a,height:"48px",width:"48px"});if(l.on("search-complete",(function(e){var t=new i({geometry:c.webMercatorToGeographic(e.results[0].results[0].feature.geometry),symbol:m});p.graphics.add(t)})),1==e.props.resultPinDragable)s.on("drag",(function(e){if("start"===e.action)s.hitTest(e).then((function(t){t.results[0].graphic&&"point"===t.results[0].graphic.geometry.type&&(e.stopPropagation(),d=t.results[0].graphic)}));else if("update"===e.action)d&&(e.stopPropagation(),f?p.remove(f):p.remove(d),(f=d.clone()).geometry=s.toMap(e),p.add(f));else if("end"===e.action&&d){e.stopPropagation(),f&&p.remove(f);var t=d.clone();t.geometry=f.geometry.clone(),p.add(t),d=null,f=null}}))}}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"mapSearch"},o.a.createElement(E.a,{container:!0,spacing:10,alignitem:"center",direction:"row",justify:"center"},o.a.createElement("div",{id:"searchWidget"})))}}]),t}(a.Component),y=n(161),O=n.n(y),w=n(154),k=n.n(w),j=n(155),P=n.n(j),S=n(113),T=n.n(S),N=n(114),D=n.n(N),_=n(351),M=n(349),I=n(160),R=n.n(I),x=n(69),A=n.n(x),L=n(70),U=n.n(L),B=n(156),F=n.n(B),W=n(346),G=n(347),K=(n(290),n(30)),V=n(157),J=n(71),H={clickCoordinates:"click map",centerpointCoordinates:"pan map"},X={config:""},z=Object(K.c)({default:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_data":return t.payload;default:return e}},map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MAPCLICK_COORDINATES":return Object(J.a)({},e,{clickCoordinates:t.payload});case"UPDATE_CENTERPOINT_COORDINATES":return Object(J.a)({},e,{centerpointCoordinates:t.payload});default:return e}},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONFIG":return Object(J.a)({},e,{config:t.payload});default:return e}}}),q=n(158),$=n.n(q),Q=n(159),Y=n.n(Q),Z=[V.a,$.a,Y.a],ee=Object(K.e)(z,{},Object(K.d)(K.a.apply(void 0,Z),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),te=n(90),ne=n.n(te);var ae=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).update=function(e){n.props.onUpdate(e.target.value),n.setState({fieldVal:e.target.value})},n.handleClose=function(e){return function(t){console.log("key: "+e),"add"===e?n.setState({titleBarTitle:"Add Project"}):n.setState({titleBarTitle:"Remove Project"}),n.setState({editAction:e}),n.setState({anchorEl:null})}},n.getPointerEvents=function(){return!0},n.componentDidMount=function(){n.sideNav=o.a.createRef()};var a=n.props.classes;n.state={pointerEvents:"auto",sidePanelClasses:["sidePanel","pointerEventsInactive"],textFieldClasses:[a.textField,a.pointerEventsInactive]},n.sideNav=o.a.createRef();var i=ne()(ee.getState,"map.clickCoordinates");ee.subscribe(i((function(e,t,a){var o=ee.getState().map.clickCoordinates,i=e.lat+" "+e.lon;console.log(o),n.setState({clickCoordinates:i})})));var r=ne()(ee.getState,"map.centerpointCoordinates");ee.subscribe(r((function(e,t,a){ee.getState().map.centerpointCoordinates;var o=e.lat+" "+e.lon;n.setState({centerpointCoordinates:o})})));var s=ne()(ee.getState,"config.config.title");return ee.subscribe(s((function(e,t,a){console.log("title new val and old val: ",e+" "+t),n.setState({configTitle:e})}))),n.configTest=ee.getState().config.config.title,console.log("this.configTest: ",n.configTest),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.props.classes;this.props.hideSidePanel||this.state.sidePanelClasses===["sidePanel","pointerEventsActive"]?this.props.hideSidePanel&&this.state.sidePanelClasses!==["sidePanel","pointerEventsInactive"]&&(this.state.sidePanelClasses.splice(-1,1),this.state.sidePanelClasses.push("pointerEventsInactive")):(this.state.sidePanelClasses.splice(-1,1),this.state.sidePanelClasses.push("pointerEventsActive"))}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(P.a,{muiTheme:T()(k.a)},o.a.createElement("div",null,o.a.createElement(W.a,{in:!this.props.hideSidePanel,timeout:1e3},o.a.createElement(G.a,{className:this.state.sidePanelClasses.join(" ")},o.a.createElement(F.a,{className:e.appBar,title:this.state.titleBarTitle,iconElementLeft:o.a.createElement(D.a,{color:"inherit","aria-label":"Menu","aria-owns":this.state.anchorEl?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.menuClick},o.a.createElement(R.a,null))},o.a.createElement(_.a,{id:"simple-menu",anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onChange:this.handleClose},o.a.createElement(M.a,{onClick:this.handleClose("add")},"Add"),o.a.createElement(M.a,{onClick:this.handleClose("remove")},"Remove"))),o.a.createElement("h2",null,this.state.configTitle),o.a.createElement("h3",null,"centerpoint coords: ",this.state.centerpointCoordinates),o.a.createElement("h3",null,"click coords: ",this.state.clickCoordinates)))))}}]),t}(a.Component),oe=O()((function(e){return{appBar:{position:"relative"},textField:{marginLeft:e.spacing(),marginRight:e.spacing()},pointerEventsActive:{pointerEvents:"auto"},pointerEventsInactive:{pointerEvents:"none"},paper:{paddingTop:2*e.spacing(),paddingBottom:2*e.spacing()},type:{width:"100%",maxWidth:500,paddingLeft:15},typeTitle:{paddingTop:5},addButton:{color:e.palette.getContrastText(A.a[500]),backgroundColor:A.a[500],"&:hover":{backgroundColor:A.a[700]}},deleteButton:{color:e.palette.getContrastText(U.a[500]),backgroundColor:U.a[500],"&:hover":{backgroundColor:U.a[700]}},extendedIcon:{marginRight:2*e.spacing()}}}))(ae),ie=(n(317),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setProjectCallback=function(e){console.log(n.state.project),n.props.projectCallback(e)},n.setPhaseCallback=function(e){console.log(n.state.phase),n.props.phaseCallback(e)},n.componentDidUpdate=function(){},n.state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"mapOverlayPanel"},o.a.createElement(E.a,{container:!0,spacing:10,alignItems:"center",direction:"row",justify:"center"},o.a.createElement(C,{view:this.props.view,resultPinDragable:!0}),o.a.createElement(oe,{ref:"sidePanel",hideSidePanel:this.props.hideSidePanel})))}}]),t}(a.Component)),re=n(6),ce=n(348),se=n(324),le=n(352),ue=n(350),pe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).componentDidUpdate=function(){console.log("componentDidUpdate")},n.generate=function(e){return[0,1,2,3,4,5,6].map((function(t){return o.a.cloneElement(e,{key:t})}))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){var t=this.props.classes;console.log("popupRender");var n={};return n.parcelData={label:"Parcel Data:",data:this.props.data},console.log("popupData: "+JSON.stringify(n)),console.log("classes.subHeader: "+JSON.stringify(t.subHeader)),o.a.createElement("div",{className:t.parentDiv},o.a.createElement(ce.a,{className:t.list,subheader:o.a.createElement("li",null)},Object.keys(n).map((function(e){return o.a.createElement("li",{key:"section-".concat(n[e].label),className:t.listSection},"{}"!=JSON.stringify(n[e].data)&&o.a.createElement("ul",{className:t.ul},o.a.createElement(ue.a,{disableGutters:!0,disableSticky:!0,className:t.subHeader},"".concat(n[e].label)),Object.keys(n[e].data).map((function(t){return o.a.createElement(se.a,{key:"item-".concat(n[e].label,"-").concat(t)},o.a.createElement(le.a,{primary:"".concat(t," : ").concat(n[e].data[t])}))}))))}))))}}]),t}(o.a.Component),de=Object(re.a)((function(e){return{parentDiv:{width:"100%",height:"100%"},list:{width:"100%",height:"100%",backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0},subHeader:{fontSize:"2rem",backgroundColor:"#E8E8E8"}}}))(pe),he=(n(318),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).loadMap=function(e){var t=Object(h.a)(e.loadedModules,5),a=t[0],o=t[1],i=(t[2],t[3],t[4],e.containerNode),r=Object(f.a)(n);new o({container:i,center:[-78.90392,35.99702],zoom:18,map:new a({basemap:"satellite"})}).when((function(e){r.setState({mapView:e}),e.on("click",r.mapClick),e.watch("extent",r.mapCenter),e.popup.highlightEnabled=!1,e.popup.actions={},e.popup.watch("visible",(function(e){e&&r.setReactPopupContent()}))}))},n.setReactPopupContent=function(){var e=Object(f.a)(n),t=document.createElement("div");e.state.mapView.popup.content=t,r.a.render(o.a.createElement(de,{data:e.state.data}),t)},n.mapClick=function(e){console.log("quit clicking me mapPoint: "+JSON.stringify(e.mapPoint));var t={lat:e.mapPoint.latitude.toFixed(5).toString(),lon:e.mapPoint.longitude.toFixed(5).toString()};n.props.updateMapclickCoordinates(t)},n.mapCenter=function(e){var t={lat:e.center.latitude,lon:e.center.longitude};console.log("mapCenter e: ",e),n.props.updateCenterpointCoordinates(t)},n.state={ctrlKey:!1,mapView:null,hideSidePanel:!0,realEstateData:null},n.mapClick=n.mapClick.bind(Object(f.a)(n)),n.loadMap=n.loadMap.bind(Object(f.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",(function(t){t.ctrlKey&&!e.state.ctrlKey&&e.setState({ctrlKey:!0})})),document.addEventListener("keyup",(function(t){e.state.ctrlKey&&e.setState({ctrlKey:!1})}));var e=this}},{key:"render",value:function(){return o.a.createElement("div",{className:"ReactScene"},o.a.createElement(m.a,{options:{url:"https://js.arcgis.com/4.10/"},modulesToLoad:["esri/Map","esri/views/MapView","esri/layers/FeatureLayer","esri/layers/GraphicsLayer","esri/core/watchUtils"],onReady:this.loadMap}),o.a.createElement(ie,{view:this.state.mapView,resultPinDragable:!0,hideSidePanel:!1,hideSidePanel_MapOverlay:this.state.hideSidePanel}))}}]),t}(o.a.PureComponent)),fe=Object(d.b)(null,{updateMapclickCoordinates:function(e){return function(t){t({type:"UPDATE_MAPCLICK_COORDINATES",payload:e})}},updateCenterpointCoordinates:function(e){return function(t){t({type:"UPDATE_CENTERPOINT_COORDINATES",payload:e})}}})(he),me={title:"test title"},ge=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={config:me},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.defaultFunction(),this.props.setConfig(me)}},{key:"render",value:function(){return console.log("render config: ",me),o.a.createElement("div",null,o.a.createElement(fe,{config:this.state.config}))}}]),t}(a.Component);var ve=Object(d.b)((function(e){return{default:e.default}}),{defaultFunction:function(){return console.log("defaultFunction"),{type:"fetch_data",payload:"Hello"}},setConfig:function(e){return function(t){t({type:"SET_CONFIG",payload:e})}}})(ge),be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(d.a,{store:ee},o.a.createElement(ve,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");be?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):Ee(e)}))}}()}},[[168,1,2]]]);
//# sourceMappingURL=main.06489be9.chunk.js.map