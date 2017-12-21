// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(18)

	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/aleksandr/NIR_AR/test/kubar/examples/bundles/shooter.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	module.exports = {
	    data: function () {
	        return {
	            isAdd: true,
	            record: 0,
	            ship: {
	                name: 'ship',
	                width: 0.1,
	                height: 0.1,
	                length: 0.1,
	                PhysicsBodyType: 1,
	                affectedByGravity: false,
	                categoryBitMask: 0,
	                contactTestBitMask: 1,
	                chamferRadius: 0,
	                materialsCount: 6,
	                vector: {
	                    x: Math.random(),
	                    y: Math.random(),
	                    z: -1
	                },
	                contents: {
	                    type: 'image',
	                    src: 'https://github.com/kfeagle/firstdemo/blob/master/taobao.jpg?raw=true'
	                }
	            },
	            ball: {
	                name: 'ball',
	                type: 'sphere',
	                radius: '0.025',
	                categoryBitMask: 1,
	                contactTestBitMask: 0,
	                PhysicsBodyType: 1,
	                affectedByGravity: false,
	                contents: {
	                    type: 'image',
	                    src: 'https://github.com/kfeagle/firstdemo/blob/master/bullet.jpg?raw=true'
	                }
	            }

	        };
	    },
	    mounted: function () {
	        console.log('Data observation finished');
	        this.$refs['scene'].addNode({
	            name: 'color',
	            width: 0.5,
	            height: 0.025,
	            length: 0.5,
	            chamfererRadius: 0,
	            vector: {
	                x: 0.0,
	                y: -1.0,
	                z: 0.0
	            },
	            categoryBitMask: 2,
	            contactTestBitMask: 1,
	            contents: {
	                type: 'color',
	                name: 'red'
	            }
	        });
	        this.$refs['scene'].addNode(this.ship);
	    },
	    methods: {
	        tap: function (event) {
	            this.$refs['scene'].addNode(this.ball);
	        },
	        contact: function (event) {
	            if (event.nodes.nodeA.mask == 0 || event.nodes.nodeB.mask == 0) {

	                this.isAdd = false;
	                this.$refs['scene'].removeNode(event.nodes.nodeA.name);
	                this.$refs['scene'].removeNode(event.nodes.nodeB.name);
	                this.ship.vector.x = Math.random();
	                this.ship.vector.y = Math.random();
	            }
	        },
	        removeNode: function (event) {
	            if (event.node.name == 'ship') {
	                var self = this;
	                if (!self.isAdd) {
	                    self.$refs['scene'].addNode(self.ship);
	                    self.isAdd = true;
	                    this.record = this.record + 1;
	                    if (this.record % 5 == 0) {
	                        modal.toast({ message: "You have been shoot " + this.record + ", great!" });
	                    }
	                }
	            }
	        }
	    }
	};

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('ar-scene', {
	    ref: "scene",
	    attrs: {
	      "planeDetection": "true"
	    },
	    on: {
	      "tap": _vm.tap,
	      "contact": _vm.contact,
	      "removeNode": _vm.removeNode
	    }
	  }, [_c('ar-box', {
	    staticStyle: {
	      x: "0.1",
	      y: "0.1",
	      z: "-0.5",
	      width: "0.1",
	      height: "0.1",
	      length: "0.1",
	      chamfererRadius: "0",
	      color: "red"
	    },
	    attrs: {
	      "texture": "https://github.com/kfeagle/firstdemo/blob/master/taobao.jpg?raw=true"
	    }
	  })], 1), _c('text', {
	    staticStyle: {
	      fontSize: "50px",
	      textAlign: "center",
	      color: "white",
	      backgroundColor: "#2cb4fe",
	      fontStyle: "bold",
	      padding: "10px"
	    },
	    on: {
	      "click": _vm.add
	    }
	  }, [_vm._v("Shooted: " + _vm._s(_vm.record))])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });