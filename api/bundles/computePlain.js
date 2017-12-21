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
	__vue_styles__.push(__webpack_require__(10)
	)

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
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
	__vue_options__.__file = "/Users/aleksandr/NIR_AR/test/kubar/examples/bundles/computePlain.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2e33a2b0"
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

	module.exports = {
	  "ui-layer": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "function-switch": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "position": "absolute",
	    "padding": 10,
	    "right": 10,
	    "bottom": 8,
	    "backgroundColor": "#aaaaaa",
	    "borderRadius": 15,
	    "paddingLeft": 15,
	    "paddingRight": 15
	  },
	  "label": {
	    "paddingTop": 15,
	    "fontWeight": "600",
	    "fontSize": 35,
	    "color": "#222222",
	    "marginRight": 10
	  }
	}

/***/ }),
/* 11 */
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

	const strings = {
	  'Hyperbolic': 'Гиперболический'
	};
	module.exports = {
	  data: function () {
	    return {
	      flag: false
	    };
	  },
	  beforeCreate() {
	    this.langCode = weex.requireModule('localization').getLocalLanguage();
	    this.langCode = this.langCode == 'ru' || this.langCode == 'ru-RU' ? 'ru' : 'en';
	    this.__t = text => {
	      if (this.langCode == 'ru') {
	        return strings[text];
	      }
	      return text;
	    };
	  },
	  methods: {
	    recompute(event) {
	      this.flag = event.value;
	      this.$refs.plane.setAttr('compute', this.flag ? 'function(x,z){return x * x - z * z;}' : 'function(x,z){return x * x + z * z;}', false);
	    }
	  }
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('ar-scene', {
	    ref: "scene",
	    attrs: {
	      "debug": "false",
	      "planeDetection": "false",
	      "lightEstimation": "false"
	    }
	  }, [_c('compute-plane', {
	    ref: "plane",
	    attrs: {
	      "scale": "0.05 0.05 0.05",
	      "compute": "function(x,z){return x * x + z * z;}"
	    }
	  })], 1), _c('div', {
	    staticClass: ["ui-layer"]
	  }, [_c('div', {
	    staticClass: ["function-switch"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v(_vm._s(_vm.__t('Hyperbolic')) + ":")]), _c('switch', {
	    staticClass: ["switcher"],
	    on: {
	      "change": _vm.recompute
	    }
	  })])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);