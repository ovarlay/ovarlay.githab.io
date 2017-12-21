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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
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
	__vue_options__.__file = "/Users/aleksandr/NIR_AR/test/kubar/examples/bundles/ar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2688e64e"
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
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "ui-layer": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "change-button": {
	    "backgroundColor:active": "#888888"
	  },
	  "point-test": {
	    "position": "absolute",
	    "width": 50,
	    "height": 50,
	    "backgroundColor": "#0000FF",
	    "backgroundColor:active": "#ADD8E6"
	  },
	  "point-test-top": {
	    "top": 0
	  },
	  "point-test-bottom": {
	    "bottom": 0
	  },
	  "point-test-right": {
	    "right": 0
	  },
	  "point-test-center": {
	    "right": 300
	  },
	  "point-test-left": {
	    "left": 0
	  },
	  "text-test": {
	    "color": "#FFFFFF",
	    "padding": 10
	  }
	}

/***/ }),
/* 2 */
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

	module.exports = {
	  data: function () {
	    return {};
	  }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('ar-scene', {
	    ref: "scene",
	    attrs: {
	      "debug": "false",
	      "planeDetection": "false",
	      "lightEstimation": "true"
	    },
	    on: {
	      "tap": _vm.tap
	    }
	  }, [_c('ar-box', {
	    attrs: {
	      "position": "0.1 0.1 -0.5",
	      "rotation": "45 45 45",
	      "width": "0.1",
	      "height": "0.1",
	      "length": "0.1",
	      "chamferRadius": "0.01",
	      "color": "red",
	      "texture": "https://github.com/kfeagle/firstdemo/blob/master/taobao.jpg?raw=true"
	    }
	  }), _c('ar-sphere', {
	    attrs: {
	      "position": "0 0.1 -0.4",
	      "rotation": "45 45 45",
	      "radius": "0.025",
	      "texture": "https://github.com/kfeagle/firstdemo/blob/master/bullet.jpg?raw=true"
	    }
	  }), _c('ar-text3d', {
	    attrs: {
	      "position": "-0.1 -0.1 -0.5",
	      "scale": "0.01 0.01 0.01",
	      "text": "Hello World",
	      "font": "GeezaPro-Bold",
	      "fontSize": "8",
	      "flatness": "0.2",
	      "color": "white",
	      "chamferRadius": "0.1",
	      "texture": "https://github.com/kfeagle/firstdemo/blob/master/taobao.jpg?raw=true"
	    }
	  })], 1), _c('div', {
	    staticClass: ["ui-layer"]
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);