(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[3],{942:function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var a=r(n(2)),i=r(n(58)),l=r(n(51)),o=r(n(52)),s=r(n(1)),d={propTypes:{width:a.oneOfType([a.string,a.number]).isRequired,height:a.oneOfType([a.string,a.number]).isRequired,images:a.arrayOf(a.shape({url:a.string.isRequired})).isRequired,style:a.objectOf(a.string),slideDuration:a.number,showNavs:a.bool,showBullets:a.bool,bgColor:a.string,useGPURender:a.bool,onClickNav:a.func,onClickBullets:a.func,onStartSlide:a.func,onCompleteSlide:a.func,navStyle:function(e,t,n){return r=e[t],/[1-2]/.test(r)&&"number"===typeof r?null:new Error("Invalid prop "+t+" supplied to "+n+". Validation failed.");var r}},defaultTypes:{slideDuration:.5,showNavs:!0,showBullets:!0,bgColor:"#000000",useGPURender:!0,navStyle:1}},c=function(){var e={},t=[],n=new Array(3).fill(0).map((function(e){return new Image}));return{load:function(r){if(r&&!e[r])if(0===n.length)t.push(r);else{var a=n.shift();a.src=r,a.onload=function(){e[r]=!0,t.length>0?a.src=t.shift():n.push(a)}}}}}(),u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object.assign.apply(Object,[{}].concat(t))},p={ClassNameRoot:"image-slider",ClassNameNavs:"image-slider-navs",ClassNameBullets:"image-slider-bullets",ImageNavArrowLeft1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABQklEQVRYhe3VsUoDQRAG4H/B4yBeIIUoNgkWQipTiD5BLO19AckbpAkIKWKl5BV8AYuUQtL5EIYrLGySM50iKULGQq7Q290r7p9Y5G7LW/hYZv4ZCPTPBogSKZF/RHL/m0UTJvdWEQTBW19W02vsqCEI4lsRWY/vUVVCfoi1DJ/QVkJS4m6CKzQQKCB/CYXCZwk6YiPISLYWdMRWbjJi7ygq4mpaIuLOBQ3xRY+E+NNNQfIGCAMJ4oF/RhGQg/3kReRjedHFkX0MMl5yeNyZvot8Jg+nMFrILs7qN/Fc5Gs2OrExDMQgwrmP4XRXDsPKiZfhJT5lkizDnF1OhjuFHQx7n1gZ/ma0MBo7PsMoIC6GjNgZOuLPDQ35zbw+oqKCpEyjN3reu0StIOL5DCK00EYToR4CGISoIixYeM4pkS1FvgHo6Qgr01CvgAAAAABJRU5ErkJggg==",ImageNavArrowLeft2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABg0lEQVRYhe3WvUoDQRAH8DlELkSNIipYaREbC1EPQYgRbQS1sfAFfAZBX0H86MQmYG0dNdaCYpHG2k6TiCRY5EMsROLtnUv2vN2LeP/VwptpZ/mxy+zuUJP05y8QERIhf4S4EbjYKCfJ+EbdzxEyK0fvtfwydWhDyCxkmna8Na5XGaMB4QSL+r01oAERieeXtS0aJgOMiETldeGQ5ikB3omPWKR+1mFAREUAETUBQ4IIECIneBUEURFARE3AkCAChAQTGKQNAUBGY8XjYCI8YmyOVx85cnMXX/ETAIRGZrcLVc485FI9ikMNhSQoNbFbrHHmKbvUhUYY09uOQXSXnzn1Mph74jCTAlP2MKgbz5g5m6nLGNzb5TJ7MgaGcGZqX2DOXAaISJlzxkCRFlPyMGBEyuQ4A0M+mbQlMhcuA0Qcps9mDkqNFmPF4WPqV+YqS0M6ZmGBObmldRrUM9U7zMxO5pI2aIzMsG+XKhgzbf+VSUboQhgTo27qDNXCuIyQf4p8AIChAHbSxD08AAAAAElFTkSuQmCC",ImageNavArrowRight1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABQ0lEQVRYw+3WvWoCQRQF4LPgEhAWLESJpY15A4mNbdoUgkWKPIWF2NmKFiEWeYBsI+YhQl4gCQGfwEII/oGVXn9IBOPc2cIzTdyZduFj9t57ZiBwvxEjMfKvEaAWzNv9DDz9i+06DbkYhiKzj4ecxjCQVOX+eywy/dQYBpJEsdQazXSGgXhIoXzd1hkGEslQkKjTkBA7Q0NsDBHRGSqiMWTkkJn8MHTExDhANIaMmBk6Yq4NHdkznflCZPxeCJwgOybTe1qJyMszLl0h/ldDNsbjG26RdvO7/EF9S3RfcYc8fBeF/0O4aOEjgj+MBoIdK0e14AekodzsqDd2FPfSUpqWef2qc8F7SFhGj/Uksk4353EXESAMJDKjGEgQNpcrWwxSEJRvmqjqSctAEsjiCrnfjNLWqYX3NpAHOEQ4O0bOFFkD6w4BsXFPGt0AAAAASUVORK5CYII=",ImageNavArrowRight2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABf0lEQVRYw+3Wv0vDQBQH8BeCpDqJQqS4COJvRxc3Bwf/AyE41bUOzo79IwRXHUpxdbH+BjcnNwdtTN3qIGosdDlzqdc77d0J9euieQdZcvAhee/eO2L0+4syJEP+MMIjefa9bF2Nk2PeQx87e0bIq+8w1owqs3oGgaQEj/hBzwAQf+TmkjEbg/gSvz84v+sw9W4GgeRo3ts4rUmmPPOZwSQ+ZU4UZn9aZSAI62YilQEhgjnWMjAkZea84pEsgagy1WaAiJmBIhrmnjNgpMPcSmZXYUCIYKpaBobYGCAimEPJhO3cQBHBXISy0rbHTPOmZyR5M1BcfXoWyFk1h0fIOVh4exRE+ZoCyoMRTjQbCrFOk+Rhq+srUaAJTiDPiZHAnXgLgepdVgLThbUEdp4YCORkNBK4GW8hULcVK4FBviEgyOLQa2gjEIhD+c1S3DITmN81SMvBXtwyERjEJZ9Wlkq0pidQ1eXScNLKR9UGoo+fIDwzrnq/AiOolSH/FHkHtYX8nGW/BYIAAAAASUVORK5CYII=",AltNavArrowLeft:"slide to left",AltNavArrowRight:"slide to right"},g={display:"block",margin:"0",padding:"0",border:"0"},m={position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"cover"},A={position:"absolute",top:"50%",cursor:"pointer",outline:"none",background:"none"},h={position:"absolute",left:"50%",bottom:"15px"},f={display:"inline-block",cursor:"pointer",outline:"none",background:"none",boxShadow:"1px 1px 1px 0px #1a1a1a",borderRadius:"50%",border:"1px solid #FFFFFF",width:"15px",height:"15px",marginLeft:"3px",marginRight:"3px"},v={ImageSlider:u(g,{position:"absolute",left:0,top:0,width:"100%",height:"100%"}),ImageSlideCurrent:u(m,{overflow:"hidden"}),ImageSlideNext:u(m,{overflow:"hidden"}),NavLeft:u(g,A,{left:"30px",marginTop:"-25px"}),NavRight:u(g,A,{right:"30px",marginTop:"-25px"}),BulletContainer:function(e){return u(g,h,{marginLeft:"-"+21*e/2+"px"})},BulletNormal:u(g,f),BulletActive:u(g,f,{background:"#FFFFFF"}),getRootContainer:function(e,t,n){return u(g,{overflow:"hidden",width:e,height:t,background:n})},getSubContainer:function(e,t){return u(g,{position:"absolute",overflow:"hidden",width:e,height:t})},getImageSlide:function(e,t,n,r){return u(m,{overflow:"hidden",transition:t+"s",backgroundImage:"url("+e+")",transform:r?"translate3d("+100*n+"%, 0px, 0px)":"translate("+100*n+"%, 0px)"})}},S=function(e){function t(t){var n;return n=e.call(this,t)||this,o(l(l(n)),"getImageUrl",(function(e){return n.props.images[e]?n.props.images[e].url:""})),o(l(l(n)),"isCanSlide",(function(e){return e!==n.state.idx&&!n.state.sliding})),o(l(l(n)),"callPropsFunc",(function(e){if(n.props[e]){for(var t,r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];(t=n.props)[e].apply(t,a)}})),o(l(l(n)),"onClickNav",(function(e){n.isCanSlide(-1)&&(n.callPropsFunc("onClickNav",e),n.slide(e?n.state.idx+1:n.state.idx-1))})),o(l(l(n)),"onClickBullets",(function(e){n.isCanSlide(e)&&(n.callPropsFunc("onClickBullets",e),n.slide(e))})),o(l(l(n)),"slide",(function(e){var t=e>n.state.idx,r=n.getImageUrl(n.state.idx),a=n.getImageUrl(e),i=t?1:-1,l=t?-1:1;n.setState({idx:e,sliding:!0,currentSlideStyle:v.getImageSlide(r,0,0,n.props.useGPURender),nextSlideStyle:v.getImageSlide(a,0,i,n.props.useGPURender)},(function(){setTimeout((function(){n.setState({currentSlideStyle:v.getImageSlide(r,n.props.slideDuration,l,n.props.useGPURender),nextSlideStyle:v.getImageSlide(a,n.props.slideDuration,0,n.props.useGPURender)})}),50),c.load(n.getImageUrl(e+2))})),n.callPropsFunc("onStartSlide",e+1,n.props.images.length)})),o(l(l(n)),"onSlideEnd",(function(){var e=n.getImageUrl(n.state.idx);n.setState({currentSlideStyle:v.getImageSlide(e,0,0,n.props.useGPURender),sliding:!1}),n.callPropsFunc("onCompleteSlide",n.state.idx+1,n.props.images.length)})),o(l(l(n)),"isRenderLeftNav",(function(e,t){return e>0&&t>0})),o(l(l(n)),"isRenderRightNav",(function(e,t){return e>0&&t<e-1})),o(l(l(n)),"renderNav",(function(e,t){return{left:n.isRenderLeftNav(e,t)?s.createElement("button",{type:"button",style:v.NavLeft,onClick:n.onClickNav.bind(l(l(n)),!1)},s.createElement("img",{src:p["ImageNavArrowLeft"+n.props.navStyle],alt:p.AltNavArrowLeft})):null,right:n.isRenderRightNav(e,t)?s.createElement("button",{type:"button",style:v.NavRight,onClick:n.onClickNav.bind(l(l(n)),!0)},s.createElement("img",{src:p["ImageNavArrowRight"+n.props.navStyle],alt:p.AltNavArrowRight})):null}})),o(l(l(n)),"renderBullets",(function(e,t){if(e>1){var r=Array.from({length:e}).map((function(e,r){return s.createElement("button",{type:"button",className:p.ClassNameBullets,style:r===t?v.BulletActive:v.BulletNormal,key:"bullet-"+(r+1),onClick:n.onClickBullets.bind(l(l(n)),r)})}));return s.createElement("div",{style:v.BulletContainer(e)},r)}return null})),o(l(l(n)),"renderSlide",(function(e){return s.createElement("div",{style:v.ImageSlider},s.createElement("div",{style:n.state.currentSlideStyle,onTransitionEnd:n.onSlideEnd}),s.createElement("div",{style:n.state.nextSlideStyle}))})),n.state={idx:0,sliding:!1,currentSlideStyle:v.getImageSlide(n.getImageUrl(0),n.props.slideDuration,0),nextSlideStyle:v.getImageSlide(n.getImageUrl(1),n.props.slideDuration,1)},c.load(n.getImageUrl(2)),n}return i(t,e),t.prototype.render=function(){var e=v.getRootContainer(this.props.width,this.props.height,this.props.bgColor),t=this.props.images.length,n=this.props.showNavs?this.renderNav(t,this.state.idx).left:null,r=this.props.showNavs?this.renderNav(t,this.state.idx).right:null,a=this.props.showBullets?this.renderBullets(t,this.state.idx):null;return s.createElement("div",{className:p.ClassNameRoot,style:u(e,this.props.style)},s.createElement("div",{style:v.getSubContainer(this.props.width,this.props.height)},this.renderSlide(t),n,r,a))},t}(s.Component);S.propTypes=d.propTypes,S.defaultProps=d.defaultTypes,e.exports=S},943:function(e,t,n){e.exports=n.p+"static/media/covid-19-symptoms-v03.5cfbc8cd.png"},944:function(e,t,n){e.exports=n.p+"static/media/COVID19-symptoms.89d770b4.png"},945:function(e,t,n){e.exports=n.p+"static/media/ESx80erU4AATrBC.d69abca0.jpg"},946:function(e,t,n){e.exports=n.p+"static/media/ESXzdzJWsAAdkku.c8c5253d.jpg"},947:function(e,t,n){e.exports=n.p+"static/media/seek_medical_advice.1b111fad.jpg"},948:function(e,t,n){e.exports=n.p+"static/media/social_distancing.39d13c04.png"},949:function(e,t,n){e.exports=n.p+"static/media/stay_home.8e69c99d.jpg"},950:function(e,t,n){e.exports=n.p+"static/media/wash_hands_CDC.06211d19.jpg"},956:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n(13),i=n(18),l=n(19),o=n(1),s=n.n(o),d=n(942),c=n.n(d),u=n(943),p=n.n(u),g=n(944),m=n.n(g),A=n(945),h=n.n(A),f=n(946),v=n.n(f),S=n(947),y=n.n(S),E=n(948),b=n.n(E),N=n(949),C=n.n(N),I=n(950),R=n.n(I),k=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=[{url:p.a},{url:m.a},{url:h.a},{url:v.a},{url:y.a},{url:b.a},{url:C.a},{url:R.a}];return s.a.createElement("div",{className:"responsive"},s.a.createElement(c.a,{width:1200,height:600,images:e}))}}]),n}(s.a.Component),w=n(149),B=n(65),Q=n.n(B),x=n(76),U=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state=w.a.getState(),e.viewmessage=function(){switch(e.state.checkSymptom.newRecord.risk){case"Vulnerable":return Q.a.render(s.a.createElement("h2",{style:{color:"Red"}},e.state.checkSymptom.newRecord.risk),document.getElementById("result"));case"Potential":return Q.a.render(s.a.createElement("h2",{style:{color:"Yellow"}},e.state.checkSymptom.newRecord.risk),document.getElementById("result"));default:return Q.a.render(s.a.createElement("h2",{style:{color:"Green"}},e.state.checkSymptom.newRecord.risk),document.getElementById("result"))}},e}return Object(a.a)(n,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid",onLoad:this.viewmessage},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{id:"result"})),s.a.createElement("hr",null),s.a.createElement("div",{className:"col-12"},s.a.createElement(k,null))),s.a.createElement("hr",null),s.a.createElement(x.b,{to:"/info"},s.a.createElement("input",{type:"button",className:"btn-primary",value:"Click here to view Information"})," "),s.a.createElement(x.b,{to:"/NepalMap"},s.a.createElement("input",{type:"button",className:"btn-primary",value:"Click here to view condition of Nepal"})," ")))}}]),n}(o.Component);t.default=U}}]);
//# sourceMappingURL=3.b07dcee6.chunk.js.map