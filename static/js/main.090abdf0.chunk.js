(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),c=a.n(l),r=(a(16),a(1)),o=a(2),u=a(4),s=a(3),d=a(5),m=a(10),h=(a(7),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.detail,a=e.deleteDetail,n=t.map((function(e){return i.a.createElement("div",{className:"details",key:e.id},i.a.createElement("div",{style:{display:"inline-block",width:"200px",overflow:"hidden",fontSize:"27px"},name:"name"}," ",e.name),i.a.createElement("img",{src:"https://img.icons8.com/flat_round/50/000000/delete-sign.png",alt:"Display",onClick:function(){a(e.id)}}))}));return i.a.createElement("div",{className:"detail-List"},n)}}]),t}(n.Component)),p=a(9),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={name:null},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=document.getElementById("name");""!==t.value&&a.props.addDetail(a.state),t.value=""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("br",null),i.a.createElement("input",{type:"text",placeholder:"Type here",id:"name",onChange:this.handleChange}),i.a.createElement("button",null,"Add")))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).addDetail=function(t){t.id=e.count++,e.setState({detail:[].concat(Object(m.a)(e.state.detail),[t])})},e.deleteDetail=function(t){var a=e.state.detail.filter((function(e){return e.id!==t}));e.setState({detail:a})},e.state={detail:[]},e.count=0,e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"TodoList"},i.a.createElement("p",{style:{fontSize:"40px"}},"ToDo-List"),i.a.createElement(h,{deleteDetail:this.deleteDetail,detail:this.state.detail}),i.a.createElement(f,{addDetail:this.addDetail}))}}]),t}(n.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.090abdf0.chunk.js.map