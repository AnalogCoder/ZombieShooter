(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=Phaser;var r=e.n(t);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}var c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(s,Phaser.Scene);var t,r,c,f,u=(c=s,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=a(c);if(f){var r=a(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=u.call(this,{key:"Main"})).zombies=[],e}return t=s,(r=[{key:"preload",value:function(){console.log("preload start"),this.load.spritesheet("zombie_appear","./asset/img/zombie/appear.png",{frameWidth:220,frameHeight:288}),this.load.spritesheet("zombie_attack","./asset/img/zombie/attack.png",{frameWidth:372,frameHeight:324}),this.load.spritesheet("zombie_die","./asset/img/zombie/die.png",{frameWidth:444,frameHeight:292}),this.load.spritesheet("zombie_idle","./asset/img/zombie/idle.png",{frameWidth:200,frameHeight:308}),this.load.spritesheet("zombie_walk","./asset/img/zombie/walk.png",{frameWidth:200,frameHeight:312}),console.log("preload end")}},{key:"create",value:function(){console.log("create start"),this.anims.create({key:"zombie_appear",frames:this.anims.generateFrameNumbers("zombie_appear",{frames:[0,1,2,3,4,5,6,7,8,9,10]}),frameRate:3,repeat:-1}),this.anims.create({key:"zombie_attack",frames:this.anims.generateFrameNumbers("zombie_attack",{frames:[0,1,2,3,4,5,6]}),frameRate:10,repeat:-1}),this.anims.create({key:"zombie_die",frames:this.anims.generateFrameNumbers("zombie_die",{frames:[0,1,2,3,4,5,6,7]}),frameRate:10,repeat:-1}),this.anims.create({key:"zombie_idle",frames:this.anims.generateFrameNumbers("zombie_idle",{frames:[0,1,2,3,4,5]}),frameRate:10,repeat:-1}),this.anims.create({key:"zombie_walk",frames:this.anims.generateFrameNumbers("zombie_walk",{frames:[0,1,2,3,4,5,6,7,8,9]}),frameRate:10,repeat:-1}),this.add.sprite(400,200).play("zombie_appear"),console.log("create end")}},{key:"update",value:function(){}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===f(n)?n:String(n)),o)}var n}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,Phaser.Scene);var t,r,o,n,i=(o=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(o);if(n){var r=l(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,{key:"Intro"})}return t=a,(r=[{key:"preload",value:function(){}},{key:"create",value:function(){var e=this;console.log(this.game.scale.width),this.add.text(this.game.scale.width/2,this.game.scale.height/2,"Zoombie Shooter",{fontFamily:"Arial",fontSize:80,color:"red"}).setOrigin(.5,.5),this.input.on("pointerdown",(function(t){console.log(t),e.scene.start("Main")}))}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(),m={type:r().AUTO,parent:"app",scale:{mode:r().Scale.FIT,parent:"app",expandParent:!1,autoCenter:r().Scale.Center.CENTER_BOTH},scene:[p,c]};window.onload=function(){new(r().Game)(m)}})();