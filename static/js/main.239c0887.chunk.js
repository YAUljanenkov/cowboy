(this.webpackJsonpcowboy=this.webpackJsonpcowboy||[]).push([[0],{16:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(20),s=n.n(o),c=(n(26),n(16),n(8)),r=n(2),d=n(10),u=n(11),h=n(13),l=n(12),b=(n(27),n.p+"static/media/weapon.388a8aec.png"),m=n.p+"static/media/start.8725ac69.mp3",j=n.p+"static/media/countSound.9c207ff6.mp3",p=n.p+"static/media/shotEnemy.bcbd11bf.mp3",v=n.p+"static/media/shotPlayer.d698c123.mp3",y=n(1),f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isChecked:!1,alpha:0,beta:0,gamma:0,isDown:!1,isCounting:!1,counted:!1,enemyShot:!1,playerShot:!1},e.phoneDownEventListener=function(t){t.beta<-80&&t.beta>-100&&!e.state.isDown?e.setState({isDown:!0}):(t.beta>-80||t.beta<-100)&&e.state.isDown&&e.setState({isDown:!1})},e.phoneShootEventListener=function(t){!e.state.playerShot&&(t.beta>0&&t.beta<10||t.beta<-170&&t.beta>-180)&&(e.shotPlayerAudio.onended=function(){return e.setState({playerShot:!0})},e.shotPlayerAudio.play().then())},e.requestPermission=function(){return"undefined"!==typeof DeviceOrientationEvent&&"function"===typeof DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission().then((function(e){if("granted"!==e)return alert("Sorry, you cannot play this game."),!1})),!0},e.startGame=function(){e.requestPermission()&&(e.startAudio=new Audio(m),e.startAudio.load(),e.startAudio.volume=1,e.countAudio=new Audio(j),e.countAudio.load(),e.countAudio.volume=1,e.shotEnemyAudio=new Audio(p),e.shotEnemyAudio.load(),e.shotEnemyAudio.volume=1,e.shotPlayerAudio=new Audio(v),e.shotPlayerAudio.load(),e.shotPlayerAudio.volume=1,e.setState({isChecked:!0}))},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){var i=this;this.state.isChecked&&!t.isChecked&&(this.startAudio.play().then((function(){})),window.addEventListener("deviceorientation",this.phoneDownEventListener)),this.state.isCounting||!this.state.isDown||this.state.counted||(this.startAudio.pause(),this.startAudio.currentTime=0,this.countAudio.onended=function(){return i.setState({counted:!0})},this.countAudio.play().then(),this.setState({isCounting:!0})),!this.state.isCounting||this.state.isDown||this.state.counted||(this.countAudio.pause(),this.countAudio.currentTime=0,this.startAudio.play().then(),this.setState({isCounting:!1})),this.state.counted&&!t.counted&&(window.removeEventListener("deviceorientation",this.phoneDownEventListener),window.addEventListener("deviceorientation",this.phoneShootEventListener),setTimeout((function(){i.shotEnemyAudio.onended=function(){return i.setState({enemyShot:!0})},i.shotEnemyAudio.play().then()}),700))}},{key:"render",value:function(){return this.state.enemyShot?(window.removeEventListener("deviceorientation",this.phoneShootEventListener),this.state.playerShot?Object(y.jsx)(r.a,{to:"/cowboy/won"}):Object(y.jsx)(r.a,{to:"/cowboy/lost"})):Object(y.jsx)("div",{className:"space",children:this.state.isChecked?Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:b,alt:"Weapon",className:"weapon"})}):Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"start-button",onClick:this.startGame,children:"Press to start"})})})}}]),n}(a.a.Component),O=(n(34),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={alpha:0,beta:0,gamma:0,x:0,y:0,z:0},e.getPermission=function(){"undefined"!==typeof DeviceOrientationEvent&&("function"===typeof DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission().then((function(t){alert("Orientation resp "+t),"granted"===t&&window.addEventListener("deviceorientation",(function(t){e.setState({alpha:t.alpha,beta:t.beta,gamma:t.gamma})}))})),window.addEventListener("deviceorientation",(function(t){e.setState({alpha:t.alpha,beta:t.beta,gamma:t.gamma})}))),"undefined"!==typeof DeviceMotionEvent&&"function"===typeof DeviceMotionEvent.requestPermission&&(DeviceMotionEvent.requestPermission().then((function(t){alert("Motion resp "+t),"granted"===t&&window.addEventListener("devicemotion",(function(t){e.setState({x:t.acceleration.x,y:t.acceleration.y,z:t.acceleration.z})}))})),window.addEventListener("devicemotion",(function(t){e.setState({x:t.acceleration.x,y:t.acceleration.y,z:t.acceleration.z})})))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{className:"space",children:[Object(y.jsx)("h5",{children:"x,y,z are acceleration variables."}),Object(y.jsx)("h5",{children:"Alpha, beta and gamma are deltas between device axes and coordinate axes"}),Object.keys(this.state).map((function(t){return Object(y.jsxs)("div",{className:"data-wrapper",children:[Object(y.jsx)("span",{children:t}),Object(y.jsx)("span",{children:e.state[t].toFixed(2)})]})})),Object(y.jsx)("button",{onClick:this.getPermission,children:"Press me"})]})}}]),n}(a.a.Component));var w=function(){return Object(y.jsx)(c.a,{children:Object(y.jsxs)(r.d,{children:[Object(y.jsx)(r.b,{path:"/game",children:Object(y.jsx)(f,{})}),Object(y.jsx)(r.b,{path:"/orientation",children:Object(y.jsx)(O,{})}),Object(y.jsx)(r.b,{path:"/won",children:Object(y.jsxs)("div",{className:"space",children:[Object(y.jsx)("h1",{children:"You won!"}),Object(y.jsx)(c.b,{className:"button",to:"/game",children:"Play again"})]})}),Object(y.jsx)(r.b,{path:"/lost",children:Object(y.jsxs)("div",{className:"space",children:[Object(y.jsx)("h1",{children:"You lost!"}),Object(y.jsx)(c.b,{className:"button",to:"/game",children:"Play again"})]})}),Object(y.jsx)(r.b,{path:"/",children:Object(y.jsxs)("div",{className:"space",children:[Object(y.jsx)(c.b,{className:"button",to:"/game",children:"Game"}),Object(y.jsx)(c.b,{className:"button",to:"/orientation",children:"Tests"})]})})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),o(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root")),x()}},[[35,1,2]]]);
//# sourceMappingURL=main.239c0887.chunk.js.map