(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{118:function(e,a,t){e.exports=t.p+"static/media/logo.628df208.png"},119:function(e,a,t){"use strict";var n=t(0),s=t.n(n),l=t(120),r=t(121),c=t(118),m=t.n(c);a.a=function(e){return s.a.createElement("section",{className:"home_banner_area"},s.a.createElement("div",{className:"container box_1620",style:{display:"flex",flexDirection:"column",alignItems:"center"}},s.a.createElement("img",{style:{maxHeight:"150px"},src:m.a,alt:"website logo"}),s.a.createElement("h3",null,e.title),s.a.createElement(l.a,{tag:"nav",listTag:"div"},s.a.createElement(r.a,{tag:"a",href:"/"},"Home"),s.a.createElement(r.a,{tag:"a",href:"/"+e.currentUri},e.currentUri))))}},120:function(e,a,t){"use strict";var n=t(4),s=t(6),l=t(0),r=t.n(l),c=t(1),m=t.n(c),i=t(5),o=t.n(i),u=t(2),d={tag:u.m,listTag:u.m,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,children:m.a.node,"aria-label":m.a.string},g=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,c=e.children,m=e.tag,i=e.listTag,d=e["aria-label"],g=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),v=Object(u.i)(o()(a),l),E=Object(u.i)(o()("breadcrumb",t),l);return r.a.createElement(m,Object(n.a)({},g,{className:v,"aria-label":d}),r.a.createElement(i,{className:E},c))};g.propTypes=d,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=g},121:function(e,a,t){"use strict";var n=t(4),s=t(6),l=t(0),r=t.n(l),c=t(1),m=t.n(c),i=t(5),o=t.n(i),u=t(2),d={tag:u.m,active:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){var a=e.className,t=e.cssModule,l=e.active,c=e.tag,m=Object(s.a)(e,["className","cssModule","active","tag"]),i=Object(u.i)(o()(a,!!l&&"active","breadcrumb-item"),t);return r.a.createElement(c,Object(n.a)({},m,{className:i,"aria-current":l?"page":void 0}))};g.propTypes=d,g.defaultProps={tag:"li"},a.a=g},158:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(14),l=t(16),r=t(15),c=t(17),m=t(0),i=t.n(m),o=t(119),u=t(53),d=t(54),g=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(r.a)(a).call(this,e))).handleAlertHide=function(){t.setState({errMsg:null,successMsg:null})},t.handleCheckForm=function(){null===t.state.mail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?t.setState({errMsg:"ceci n'est pas une adresse email valide"}):""===t.state.name?t.setState({errMsg:"vous n'avez pas saisie de nom"}):""===t.state.subject?t.setState({errMsg:"vous n'avez pas saisie de sujet"}):""===t.state.message?t.setState({errMsg:"vous n'avez pas saisie de message"}):t.handleSend()},t.handleSend=function(){},t.state={errMsg:null,successMsg:null,name:"",mail:"",subject:"",message:""},t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.errMsg,n=a.successMsg,s=a.name,l=a.mail,r=a.subject,c=a.message,m=this.handleAlertHide,o=this.handleCheckForm;return i.a.createElement("div",{className:"col-lg-9"},null!==t?i.a.createElement(u.a,{msg:t,click:m}):i.a.createElement("span",null),null!==n?i.a.createElement(d.a,{msg:n,click:m}):i.a.createElement("span",null),i.a.createElement("div",{className:"row contact_form",id:"contactForm"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"name",placeholder:"Entrez votre nom",value:s,onChange:function(a){return e.setState({name:a.target.value})}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Entrez votre addresse email",value:l,onChange:function(a){return e.setState({mail:a.target.value})}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",className:"form-control",id:"subject",name:"subject",placeholder:"Entrez votre sujet",value:r,onChange:function(a){return e.setState({subject:a.target.value})}}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("textarea",{className:"form-control",name:"message",id:"message",rows:"1",placeholder:"Entrez votre Message",value:c,onChange:function(a){return e.setState({message:a.target.value})}}))),i.a.createElement("div",{className:"col-md-12 text-right"},i.a.createElement("button",{type:"submit",value:"submit",className:"btn submit_btn",onClick:o},"Envoyer"))))}}]),a}(m.Component);t.d(a,"default",function(){return v});var v=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.a,{currentUri:"contact"}),i.a.createElement("section",{className:"contact_area p_120"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"contact_info"},i.a.createElement("div",{className:"info_item"},i.a.createElement("i",{className:"lnr lnr-home"}),i.a.createElement("h6",null,"Paris, France"),i.a.createElement("p",null,"Gagny")),i.a.createElement("div",{className:"info_item"},i.a.createElement("i",{className:"lnr lnr-envelope"}),i.a.createElement("h6",null,i.a.createElement("a",{href:"#"},"contact@eazys-dev.fr")),i.a.createElement("p",null,"Toujours pr\xe9sent en cas de besoin.")))),i.a.createElement(g,null)))))}}]),a}(m.Component)}}]);
//# sourceMappingURL=15.a0ca7c9c.chunk.js.map