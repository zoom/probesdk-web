'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var uaParserJs = require('ua-parser-js');

function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}

/**
 * Enumeration of a collection of customized error codes defined and used by ProberSDK.
 * @enum {number}
 * @property {number} OK Indicates a successful operation. Default value is 0.
 * @property {number} INVALID_ARGS Indicates invalid arguments passed to a function. Default value is -1.
 * @property {number} API_NOT_SUPPORTED Indicates that a specific API is not supported. Default value is -2.
 * @constant
 */
var ERR_CODE = {
  OK: 0,
  INVALID_ARGS: -1,
  API_NOT_SUPPORTED: -2
};

/**
 * Enumeration of the rendering types supported by ProbeSDK.
 *
 * @enum {number}
 * @property {number} VIDEO_TAG a video stream will be rendered on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video|video} tag. Default value is 1.
 * @property {number} WEBGL a video stream will be rendered on a canvas with a {@link https://developer.mozilla.org/en-US/docs/Glossary/WebGL|WebGL} renderer. Default value is 2.
 * @property {number} WEBGL_2 a video stream will be rendered on a canvas with a {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API#webgl_2|WebGL2} renderer. Default value is 3.
 * @property {number} WEBGPU a video stream will be rendered on a canvas with a {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API|WebGPU} renderer. Default value is 4.
 * @constant
 */
var RENDERER_TYPE = {
  VIDEO_TAG: 1,
  WEBGL: 2,
  WEBGL_2: 3,
  WEBGPU: 4
};

/**
 * Enumeration of the data type of the network diagnostic.
 * It will be used to determine the type of data you received and how to handle them.
 *
 * @enum {number}
 * @property {number} STATS indicates the realtime statistics of the network diagnostic. Default value is 1.
 * @property {number} REPORT indicates the final report of diagnostic, basic information and supported features. Default value is 2.
 * @constant
 */
var NET_PROBING_DATA_TYPE = {
  STATS: 1,
  REPORT: 2
};

/**
 * Enumeration of the protocol type that ProbeSDK checks in a network diagnostic.
 *
 * @enum {number}
 * @property {number} HTTPS https(https://) protocol. Default value is 1.
 * @property {number} WEB_SOCKET WebSocket(wss:// ws://) protocol. Default value is 2.
 * @property {number} DATA_CHANNEL the data channel which is used for media communication. Default value is 3.
 * @property {number} WEB_TRANSPORT WebTransport protocol(not supported now). Default value is 4.
 * @constant
 */
var PROTOCOL_TYPE = {
  HTTPS: 1,
  WEB_SOCKET: 2,
  DATA_CHANNEL: 3,
  WEB_TRANSPORT: 4
};

/**
 * Enumeration of the network quality level.
 *
 * @enum {number}
 * @property {number} VERY_BAD network quality is very bad. Default value is 0.
 * @property {number} BAD network quality is bad. Default value is 1.
 * @property {number} NOT_GOOD network quality is not good enough. Default value is 2.
 * @property {number} FAIR network quality is fine. Default value is 3.
 * @property {number} GOOD network quality is good. Default value is 4.
 * @property {number} EXCELLENT network quality is excellent. Default value is 5.
 * @property {number} UNDEFINED network quality is unknown. If get this value, means the network diagnostic is not started yet or gets some exceptions. Default value is 255.
 * @constant
 */
var NETWORK_QUALITY_LEVEL = {
  VERY_BAD: 0,
  BAD: 1,
  NOT_GOOD: 2,
  FAIR: 3,
  GOOD: 4,
  EXCELLENT: 5,
  UNDEFINED: 255
};

/**
 * Enumeration of the bandwidth quality level.
 *
 * @enum {number}
 * @property {number} VERY_LOW bandwidth quality is very low. Default value is 0.
 * @property {number} LOW bandwidth quality is low. Default value is 1.
 * @property {number} NORMAL bandwidth quality is normal. Default value is 2.
 * @property {number} UNDEFINED bandwidth quality is unknown. If get this value, means the network diagnostic is not started yet or gets some exceptions. Default value is 255.
 * @constant
 */
var BANDWIDTH_QUALITY_LEVEL = {
  VERY_LOW: 0,
  LOW: 1,
  NORMAL: 2,
  UNDEFINED: 255
};

/**
 * Enumeration of attribute index of the basic information.
 *
 * @enum {number}
 * @property {number} BROWSER_NAME represents the name of the browser. Default value is 0.
 * @property {number} BROWSER_VERSION represents the version of the browser. Default value is 1.
 * @property {number} OS_NAME represents the name of the OS. Default value is 2.
 * @property {number} USER_AGENT represents the user agent. Default value is 3.
 * @property {number} HW_CONCURRENCY represents the hardware concurrency. Default value is 4.
 * @property {number} GPU_VENDOR represents the GPU vendor. Default value is 5.
 * @property {number} GPU_RENDERER represents the GPU renderer information. Default value is 6.
 * @property {number} VIDEOFRAME represents the VideoFrame API. Default value is 7.
 * @property {number} OFFSCREENCANVAS represents the OffscreenCanvas API. Default value is 8.
 * @property {number} SIMD represents the SIMD feature. Default value is 9.
 * @property {number} WEB_CODEC represents the web codec feature. Default value is 10.
 * @property {number} HW_ACC represents the hardware acceleration. Default value is 11.
 * @property {number} GRAPHICS_ACC represents the graphics acceleration in chromium system settings. Default value is 12.
 * @property {number} MIN_BROWSER_VERSION represents the minimum browser version. Default value is 13.
 * @constant
 */
var BASIC_INFO_ATTR_INDEX = {
  BROWSER_NAME: 0,
  BROWSER_VERSION: 1,
  OS_NAME: 2,
  OS_VERSION: 3,
  USER_AGENT: 4,
  HW_CONCURRENCY: 5,
  GPU_VENDOR: 6,
  GPU_RENDERER: 7,
  VIDEOFRAME: 8,
  OFFSCREENCANVAS: 9,
  SIMD: 10,
  WEB_CODEC: 11,
  HW_ACC: 12,
  GRAPHICS_ACC: 13,
  MIN_BROWSER_VERSION: 14
};

/**
 * Enumeration of index of the supported features.
 *
 * @enum {number}
 * @property {number} AUDIO_DENOISE feature index of audio denoise. Default value is 0.
 * @property {number} AEC feature index of audio echo cancellation. Default value is 1.
 * @property {number} AUDIO_STEREO feature index of audio stereo. Default value is 2.
 * @property {number} VIRTUAL_BACKGROUND feature index of video virtual background. Default value is 3.
 * @property {number} VIDEO_MASK feature index of video mask. Default value is 4.
 * @property {number} WEBGPU feature index of video WebGPU rendering. Default value is 5.
 * @property {number} VIDEO_SEND_HD feature index of video sending HD. Default value is 6.
 * @property {number} VIDEO_SEND_FULL_HD feature index of video sending full HD. Default value is 7.
 * @property {number} DT_GALLERY_VIEW_3x3 feature index of desktop supporting 3x3 gallery view. Default value is 8.
 * @property {number} DT_GALLERY_VIEW_5x5 feature index of desktop supporting 5x5 gallery view. Default value is 9.
 * @property {number} SCREEN_SHARING feature index of screen sharing. Default value is 10.
 * @constant
 */
var SUPPORTED_FEATURE_INDEX = {
  AUDIO_DENOISE: 0,
  AEC: 1,
  AUDIO_STEREO: 2,
  VIRTUAL_BACKGROUND: 3,
  VIDEO_MASK: 4,
  WEBGPU: 5,
  VIDEO_SEND_HD: 6,
  VIDEO_SEND_FULL_HD: 7,
  DT_GALLERY_VIEW_3x3: 8,
  DT_GALLERY_VIEW_5x5: 9,
  SCREEN_SHARING: 10
};

/**
 * The default probing duration, 120 seconds.
 */
var DEF_PROBE_DURATION = 2 * 60 * 1000;

/**
 * The default connection timeout, 20 seconds.
 */
var DEF_CONNECT_TIMEOUT = 2 * 10 * 1000;
var JWT_DOMAINS = {
  PROD: "zoom.us",
  GO: "go.zoom.us",
  DEV: "zoomdev.us",
  DEV_EP: "devep.zoomdev.us",
  DEV_INT: "dev-integration.zoomdev.us"
};

function checkType(obj, targetType) {
  return !!(obj instanceof targetType);
}
function isDebugMode() {
  return process.env.NODE_ENV === "development";
}
function getJWTPayload(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(window.atob(base64).split("").map(function (c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
  return JSON.parse(jsonPayload);
}
function isInUserAgent(userAgent) {
  for (var _len = arguments.length, tags = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    tags[_key - 1] = arguments[_key];
  }
  if (!userAgent || userAgent === "") {
    console.error("isInUserAgent() userAgent is invalid! userAgent: ".concat(userAgent));
    return false;
  }
  if (!tags || tags.length <= 0) {
    console.error("isInUserAgent() tag is invalid! tags: ".concat(tags));
    return false;
  }
  return tags.some(function (tag) {
    return userAgent.includes(tag);
  });
}
function saveKvToLocalStorage(key, value) {
  if (isDebugMode()) {
    console.log("saveKvToLocalStorage() key: ".concat(key, ", val:").concat(value));
  }
  localStorage.setItem(key, value);
}
function readValueFromLocalStorage(key) {
  return localStorage.getItem(key);
}

var GLOBAL_SEQ = 1;
var KEY_RID = "probing_rid";
function base64ToBytes(base64) {
  var binString = atob(base64);
  return Uint8Array.from(binString, function (m) {
    return m.codePointAt(0);
  });
}
function bytesToBase64(bytes) {
  var binString = String.fromCodePoint.apply(String, _toConsumableArray(bytes));
  return btoa(binString);
}
function getCommandMessage(evt, body) {
  var msg = {};
  msg["evt"] = evt;
  msg["seq"] = GLOBAL_SEQ;
  GLOBAL_SEQ += 1;
  msg["body"] = body;
  return JSON.stringify(msg);
}
function connectWebSocket(_x) {
  return _connectWebSocket.apply(this, arguments);
}
function _connectWebSocket() {
  _connectWebSocket = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(url) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          if (isDebugMode()) {
            console.log("connectWebSocket() url=".concat(url));
          }
          return _context11.abrupt("return", new Promise(function (resolve, reject) {
            var socket = new WebSocket(url);
            socket.onopen = function () {
              resolve({
                socket: socket,
                result: true,
                error: undefined
              });
            };
            socket.onerror = function (error) {
              resolve({
                socket: socket,
                result: false,
                error: error
              });
            };
          }));
        case 2:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _connectWebSocket.apply(this, arguments);
}
function js_send_data(prober_instance, buffer, len, send_by_data) {
  if (prober_instance) {
    var data = new Uint8Array(Module.HEAP8.buffer, buffer, len);
    if (send_by_data) {
      if (prober_instance.writer !== null && prober_instance.writer !== undefined) {
        prober_instance.writer.write(data);
      } else if (prober_instance.dataChannelOpened) {
        prober_instance.videoDataChannel.send(data);
      } else if (prober_instance.mediaSocket !== null && prober_instance.mediaSocket !== undefined) {
        prober_instance.mediaSocket.send(data);
      }
    } else {
      var binString = bytesToBase64(data);
      var body = {};
      body["data"] = binString;
      prober_instance.socket.send(getCommandMessage(4106, body));
    }
  }
}
function js_report_qos_info(prober_instance, bandwidth, rate, loss_rate, max_continuous_loss_num, rtt, max_owdelay, jitter, app_score, bw_level) {
  // uplink
  var uplink_bandwidth = bandwidth / 1024 / 1024;
  var uplink_rtt = rtt;
  var uplink_lossratio = loss_rate / 10;
  var uplink_max_continuous_loss_num = max_continuous_loss_num;
  var uplink_rate = rate / 1024 / 1024;
  var uplink_owdelay = max_owdelay;
  var uplink_jitter = jitter;
  if (prober_instance) {
    prober_instance.on_uplink_report({
      bandwidth: uplink_bandwidth,
      rtt: uplink_rtt,
      loss_rate: uplink_lossratio,
      max_continuous_loss_num: uplink_max_continuous_loss_num,
      rate: uplink_rate,
      max_owdelay: uplink_owdelay,
      jitter: uplink_jitter,
      network_level: app_score,
      bw_level: bw_level
    });
    prober_instance.uplink_count += 1;
    prober_instance.total_ul_rtt += uplink_rtt;
    prober_instance.total_ul_loss += uplink_lossratio;
    prober_instance.total_ul_jitter += uplink_jitter;
    prober_instance.last_ul_bw = uplink_bandwidth;
    prober_instance.last_ul_bw_level = bw_level;
    prober_instance.last_ul_network_level = app_score;
  }
}
function wcl_trace_log(a, b) {
  var n = new Uint8Array(b + 1);
  var s = Module.HEAP8.subarray(a + 0, a + b);
  n.set(s, 0, b);
  n[b] = 10;
}
var _NetworkProberInst_brand = /*#__PURE__*/new WeakSet();
var NetworkProberInst = /*#__PURE__*/function () {
  function NetworkProberInst(params) {
    _classCallCheck(this, NetworkProberInst);
    _classPrivateMethodInitSpec(this, _NetworkProberInst_brand);
    this.dc = "No available service zone.";
    this.jwtDomain = params.domain;
    this.probeServerDomain = "";
    this.geoProbeConnectionList = [];
    this.on_uplink_report = params.on_uplink_report;
    this.on_downlink_report = params.on_downlink_report;
    this.socket = null;
    this.connectionId = "";
    this.index = -1;
    this.worker = null;
    this.rid = null;
    var Module = params.Module;
    this.api = {
      create_prober: Module.cwrap("create_prober", "number", []),
      destroy_prober: Module.cwrap("destroy_prober", "", ["number"]),
      on_prober_timer: Module.cwrap("on_prober_timer", "", ["number"]),
      prober_start_send: Module.cwrap("prober_start_send", "", ["number"]),
      prober_stop_send: Module.cwrap("prober_stop_send", "", ["number"]),
      readPackets: Module.cwrap("readPackets", "number", ["number", "array", "number", "number"])
    };
    this.prober = null;
    this.mediaSocket = null;
    this.keepAliveTimer = null;
    this.videoPeer = new RTCPeerConnection({
      iceCandidatePoolSize: 1
    });
    this.videoDataChannel = this.videoPeer.createDataChannel("prober_datachannel", {
      ordered: false,
      maxRetransmits: 0,
      reliable: false
    });
    this.dataChannelOpened = false;
    this.dc_recv_packets = 0;
    this.transport = null;
    this.writer = null;
    var prober_instance = this;
    window.wcl_trace_log = wcl_trace_log;
    window.js_send_data = function (buffer, len, send_by_data) {
      js_send_data(prober_instance, buffer, len, send_by_data);
    };
    window.js_report_qos_info = function (bandwidth, rate, loss_rate, max_continuous_loss_num, rtt, max_owdelay, jitter, app_score, bw_level) {
      js_report_qos_info(prober_instance, bandwidth, rate, loss_rate, max_continuous_loss_num, rtt, max_owdelay, jitter, app_score, bw_level);
    };
    this.downlink_count = 0;
    this.total_dl_rtt = 0;
    this.total_dl_loss = 0;
    this.total_dl_jitter = 0;
    this.last_dl_bw = 0;
    this.last_dl_bw_level = 255;
    this.last_dl_network_level = 255;
    this.uplink_count = 0;
    this.total_ul_rtt = 0;
    this.total_ul_loss = 0;
    this.total_ul_jitter = 0;
    this.last_ul_bw = 0;
    this.last_ul_bw_level = 255;
    this.last_ul_network_level = 255;
    this.httpsProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.HTTPS, false);
    this.wssProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.WEB_SOCKET, true, "", "unchecked");
    this.dataChannelProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.DATA_CHANNEL, true, "", "unchecked");
  }
  return _createClass(NetworkProberInst, [{
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(timeout) {
        var _this = this;
        var _data$result, jwtTokenUrl, tokenRsp, ridPart, rid, data, token, payload, hasGeoProbeConnected, geoProbeList, cmdChannelResult, _iterator, _step, geoProbe, cmdChannelUrl, _yield$this$getConnec, connectionId, index, mediaUrl, mediaChannelResult, isDataChannelEstablished;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              jwtTokenUrl = "https://".concat(this.jwtDomain, "/probe/network/monitor/auth/info");
              _context.next = 4;
              return fetch(jwtTokenUrl, {
                method: "POST",
                mode: "cors",
                headers: {}
              });
            case 4:
              tokenRsp = _context.sent;
              if (tokenRsp.ok) {
                _context.next = 8;
                break;
              }
              this.wssProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.HTTPS, true);
              return _context.abrupt("return", false);
            case 8:
              // get rsp headers
              ridPart = "";
              if (tokenRsp.headers.has("X-Zm-Trackingid")) {
                rid = _assertClassBrand(_NetworkProberInst_brand, this, _extractRid).call(this, tokenRsp.headers.get("X-Zm-Trackingid"));
                if (rid !== "") {
                  this.rid = rid.slice(4, rid.length);
                  saveKvToLocalStorage(KEY_RID, this.rid);
                  ridPart = "&".concat(rid);
                }
                if (isDebugMode()) {
                  console.log("trackingId: ".concat(tokenRsp.headers.get("X-Zm-Trackingid"), ", finalRid:").concat(ridPart));
                }
              } else {
                console.log("connect() no tid header.");
              }
              _context.next = 12;
              return tokenRsp.json();
            case 12:
              data = _context.sent;
              token = data === null || data === void 0 || (_data$result = data.result) === null || _data$result === void 0 ? void 0 : _data$result.probeToken;
              if (token) {
                _context.next = 17;
                break;
              }
              this.wssProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.HTTPS, true, "", "", {
                message: "cannot retrieve token from server response!"
              });
              return _context.abrupt("return", false);
            case 17:
              payload = getJWTPayload(token);
              if (isDebugMode()) {
                console.log("jwtToken payload:".concat(JSON.stringify(payload)));
              }
              hasGeoProbeConnected = false;
              geoProbeList = JSON.parse(payload.geoProbeList);
              cmdChannelResult = null;
              _iterator = _createForOfIteratorHelper(geoProbeList);
              _context.prev = 23;
              _iterator.s();
            case 25:
              if ((_step = _iterator.n()).done) {
                _context.next = 48;
                break;
              }
              geoProbe = _step.value;
              if (isDebugMode()) {
                console.log("geoProbeEntry: dc=".concat(geoProbe.dc, ", probe=").concat(geoProbe.probe));
              }
              this.dc = geoProbe.dc;
              this.probeServerDomain = geoProbe.probe;
              // this.domain = '10.100.212.157:810';

              // 1. Check the command channel whether the connection is established or not.
              cmdChannelUrl = "wss://".concat(this.probeServerDomain, "/probe/?token=").concat(token).concat(ridPart);
              _context.next = 33;
              return connectWebSocket(cmdChannelUrl);
            case 33:
              cmdChannelResult = _context.sent;
              if (cmdChannelResult.result) {
                _context.next = 42;
                break;
              }
              if (isDebugMode()) {
                console.warn("failed to connect! geoProbeEntry: dc=".concat(geoProbe.dc, ", probe=").concat(geoProbe.probe));
              }

              // record the failed connection
              this.geoProbeConnectionList.push({
                dc: geoProbe.dc,
                probe: geoProbe.probe,
                connected: false
              });
              if (cmdChannelResult.socket) {
                cmdChannelResult.socket.close();
              }
              this.wssProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.WEB_SOCKET, true, "", "", cmdChannelResult.error);
              return _context.abrupt("continue", 46);
            case 42:
              hasGeoProbeConnected = true;

              // record the successful connection
              this.geoProbeConnectionList.push({
                dc: geoProbe.dc,
                probe: geoProbe.probe,
                connected: true
              });
              this.wssProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.WEB_SOCKET, false);
              return _context.abrupt("break", 48);
            case 46:
              _context.next = 25;
              break;
            case 48:
              _context.next = 53;
              break;
            case 50:
              _context.prev = 50;
              _context.t0 = _context["catch"](23);
              _iterator.e(_context.t0);
            case 53:
              _context.prev = 53;
              _iterator.f();
              return _context.finish(53);
            case 56:
              if (!(!hasGeoProbeConnected || !cmdChannelResult)) {
                _context.next = 61;
                break;
              }
              if (isDebugMode()) {
                console.error("no available geolocation connected!");
              }
              this.dc = "No available service zone.";
              this.killKeepAliveTimer();
              return _context.abrupt("return", false);
            case 61:
              // if goes here, means the command channel is connected
              // we need to start a timer with 5 seconds interval to send keep alive message to server
              if (!this.keepAliveTimer) {
                this.keepAliveTimer = setInterval(function () {
                  _this.sendKeepAliveMessage();
                }, 5000);
              }
              this.socket = cmdChannelResult.socket;
              _context.next = 65;
              return this.getConnectionId();
            case 65:
              _yield$this$getConnec = _context.sent;
              connectionId = _yield$this$getConnec.connectionId;
              index = _yield$this$getConnec.index;
              this.connectionId = connectionId;
              this.index = index;
              this.cmdMessageRegister();
              this.prober = this.api.create_prober();

              // 2. Media websocket works as the backup of the data channel if fails
              mediaUrl = "wss://".concat(this.probeServerDomain, "/media/?cid=").concat(this.connectionId, "&index=").concat(this.index);
              _context.next = 75;
              return connectWebSocket(mediaUrl);
            case 75:
              mediaChannelResult = _context.sent;
              if (mediaChannelResult.result) {
                _context.next = 82;
                break;
              }
              if (mediaChannelResult.socket) {
                mediaChannelResult.socket.close();
              }
              this.wssProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.WEB_SOCKET, true, "", "", mediaChannelResult.error);
              return _context.abrupt("return", false);
            case 82:
              if (this.wssProtocol == undefined || this.wssProtocol.isBlocked) {
                this.wssProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.WEB_SOCKET, false);
              }
            case 83:
              this.mediaSocket = mediaChannelResult.socket;
              this.mediaMessageRegister();

              // 3. Try to connect data channel
              _context.next = 87;
              return this.connectDataChannel(timeout);
            case 87:
              isDataChannelEstablished = _context.sent;
              if (!isDataChannelEstablished) {
                this.dataChannelProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.DATA_CHANNEL, true, "8801", "Please check the network connectivity and the port which might be blocked", cmdChannelResult.error);
              } else {
                if (this.dataChannelProtocol == undefined || this.dataChannelProtocol.isBlocked) {
                  this.dataChannelProtocol = this.assembleProtocolResult(PROTOCOL_TYPE.DATA_CHANNEL, false, "8801");
                }
              }
              return _context.abrupt("return", true);
            case 92:
              _context.prev = 92;
              _context.t1 = _context["catch"](0);
              console.error("Error connecting:", _context.t1);
              return _context.abrupt("return", false);
            case 96:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 92], [23, 50, 53, 56]]);
      }));
      function connect(_x2) {
        return _connect.apply(this, arguments);
      }
      return connect;
    }()
  }, {
    key: "startUplinkProbe",
    value: function () {
      var _startUplinkProbe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var workerScript, blob, count, interval, probeTime, prober_instance;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log("startUplinkProbe");
              if (!this.worker) {
                workerScript = "\n        var worker_active = false;\n\n        setInterval(() => {\n          if (worker_active) {\n            postMessage(worker_active);\n          }\n        }, 10);\n\n        onmessage = (e) => {\n          worker_active = e.data;\n        };\n      ";
                blob = new Blob([workerScript], {
                  type: "application/javascript"
                });
                this.worker = new Worker(URL.createObjectURL(blob), {
                  type: "module"
                });
              }
              this.worker.postMessage(true);
              this.api.prober_start_send(this.prober);
              count = 0;
              interval = 0;
              probeTime = 300 * 1000;
              prober_instance = this;
              this.worker.onmessage = function (event) {
                if (count < probeTime / interval) {
                  prober_instance.api.on_prober_timer(prober_instance.prober);
                  count += 1;
                }
              };
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function startUplinkProbe() {
        return _startUplinkProbe.apply(this, arguments);
      }
      return startUplinkProbe;
    }()
  }, {
    key: "stopUplinkProbe",
    value: function () {
      var _stopUplinkProbe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.api.prober_stop_send(this.prober);
              if (this.worker) {
                this.worker.postMessage(false);
              }
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function stopUplinkProbe() {
        return _stopUplinkProbe.apply(this, arguments);
      }
      return stopUplinkProbe;
    }()
  }, {
    key: "startDownlinkProbe",
    value: function () {
      var _startDownlinkProbe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              console.log("startDownlinkProbe");
              _context4.next = 3;
              return this.socket.send(getCommandMessage(4107, {}));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function startDownlinkProbe() {
        return _startDownlinkProbe.apply(this, arguments);
      }
      return startDownlinkProbe;
    }()
  }, {
    key: "stopDownlinkProbe",
    value: function () {
      var _stopDownlinkProbe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var commandMessage;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              commandMessage = getCommandMessage(4108, {});
              _context5.next = 3;
              return this.socket.send(commandMessage);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function stopDownlinkProbe() {
        return _stopDownlinkProbe.apply(this, arguments);
      }
      return stopDownlinkProbe;
    }()
  }, {
    key: "connectWebTransport",
    value: function () {
      var _connectWebTransport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var url, transport, writer, reader;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              url = "https://" + this.probeServerDomain + ":8802?cid=" + this.connectionId;
              transport = new WebTransport(url);
              this.transport = transport;
              _context6.next = 5;
              return transport.ready;
            case 5:
              transport.datagrams.incomingMaxAge = 30000;
              transport.datagrams.outgoingMaxAge = 30000;
              transport.datagrams.incomingHighWaterMark = 10000;
              transport.datagrams.outgoingHighWaterMark = 10000;
              transport.datagrams.writable.maxAge = 30000;
              transport.datagrams.readable.maxAge = 30000;
              writer = transport.datagrams.writable.getWriter();
              reader = transport.datagrams.readable.getReader();
              _context6.next = 15;
              return writer.ready;
            case 15:
              this.writer = writer;
              this.webTransportRead(reader);
            case 17:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function connectWebTransport() {
        return _connectWebTransport.apply(this, arguments);
      }
      return connectWebTransport;
    }()
  }, {
    key: "webTransportRead",
    value: function () {
      var _webTransportRead = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(reader) {
        var _yield$reader$read, value, done, probeData;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 3;
              return reader.read();
            case 3:
              _yield$reader$read = _context7.sent;
              value = _yield$reader$read.value;
              done = _yield$reader$read.done;
              if (!done) {
                _context7.next = 8;
                break;
              }
              return _context7.abrupt("break", 12);
            case 8:
              probeData = new Uint8Array(value);
              this.api.readPackets(this.prober, probeData, value.byteLength, true);
              _context7.next = 0;
              break;
            case 12:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function webTransportRead(_x3) {
        return _webTransportRead.apply(this, arguments);
      }
      return webTransportRead;
    }()
  }, {
    key: "mediaMessageRegister",
    value: function mediaMessageRegister() {
      this.mediaSocket.binaryType = "arraybuffer";
      var proberInstance = this;
      this.mediaSocket.onmessage = function (e) {
        var probeData = new Uint8Array(e.data);

        // if the data is an ArrayBuffer, extract the first element and send it back to the server
        if (e.data instanceof ArrayBuffer) {
          var dataArrayBuffer = new Uint8Array(e.data);
          var firstElement = new Uint8Array(dataArrayBuffer.slice(0, 1));
          this.send(firstElement);
        }
        proberInstance.api.readPackets(proberInstance.prober, probeData, e.data.byteLength, true);
      };
    }
  }, {
    key: "cmdMessageRegister",
    value: function cmdMessageRegister() {
      var proberInstance = this;
      this.socket.onmessage = function (e) {
        var data = JSON.parse(e.data);
        if (isDebugMode()) {
          console.log("command channel messages are received: data=".concat(JSON.stringify(data), ", evt=").concat(data.evt));
        }
        if (data.evt == 4106) {
          var qosCmdData = base64ToBytes(data.body.data);
          proberInstance.api.readPackets(proberInstance.prober, qosCmdData, qosCmdData.byteLength, false);
        } else if (data.evt == 4117) {
          var bandwidth = data.body.bandwidth;
          var rtt = data.body.rtt;
          var loss_rate = data.body.loss_rate;

          // downlink
          var downlink_bandwidth = bandwidth / 1024 / 1024;
          var downlink_rtt = rtt;
          var downlink_lossratio = loss_rate / 10;
          var downlink_max_continuous_loss_num = data.body.max_continuous_loss_num;
          var downlink_rate = data.body.rate / 1024 / 1024;
          var downlink_owdelay = data.body.max_owdelay;
          var downlink_jitter = data.body.jitter;
          var downlink_bw_level = data.body.bw_level;
          var downlink_network_level = data.body.network_level;
          proberInstance.on_downlink_report({
            bandwidth: downlink_bandwidth,
            rtt: downlink_rtt,
            loss_rate: downlink_lossratio,
            max_continuous_loss_num: downlink_max_continuous_loss_num,
            rate: downlink_rate,
            max_owdelay: downlink_owdelay,
            jitter: downlink_jitter,
            bw_level: downlink_bw_level,
            network_level: downlink_network_level
          });

          // increment rtt/loss/jitter for avg calculation
          proberInstance.downlink_count += 1;
          proberInstance.total_dl_rtt += downlink_rtt;
          proberInstance.total_dl_loss += downlink_lossratio;
          proberInstance.total_dl_jitter += downlink_jitter;
          proberInstance.last_dl_bw = downlink_bandwidth;
          proberInstance.last_dl_bw_level = downlink_bw_level;
          proberInstance.last_dl_network_level = downlink_network_level;
        } else if (data.evt == 24322) {
          console.log("get sdp answer");
          var sdp = data.answer.sdp;
          var sdp_candidate = sdp.match(/a=candidate:.+/)[0];
          sdp_candidate = sdp_candidate.replace(/^a=/, "");
          if (data.answer.type == 2) {
            proberInstance.videoPeer.setRemoteDescription(new RTCSessionDescription({
              type: "answer",
              sdp: sdp
            })).then(function () {
              var candidate = new RTCIceCandidate({
                sdp_candidate: sdp_candidate,
                sdpMLineIndex: 0,
                sdpMid: "0"
              });
              proberInstance.videoPeer.addIceCandidate(candidate).then(function () {
                console.log("videoPeer add ICE candidate successfully");
              }).catch(function (error) {
                console.log("videoPeer add ICE candidate failed", error);
              });
            }).catch(function (e) {
              console.log("videoPeer set remote description fail", e);
            });
          }
        }
      };
    }
  }, {
    key: "connectDataChannel",
    value: function () {
      var _connectDataChannel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(timeout) {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              this.videoDataChannel.binaryType = "arraybuffer";
              this.videoDataChannel.addEventListener("message", function (ev) {
                var probeData = new Uint8Array(ev.data);
                _this2.api.readPackets(_this2.prober, probeData, ev.data.byteLength, true);
              });
              _context9.next = 4;
              return this.videoPeer.createOffer().then( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(offer) {
                  var msg, data;
                  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                      case 0:
                        console.log("createOffer() connectionId=", _this2.connectionId);
                        offer.sdp = offer.sdp.replace(/a=ice-ufrag:.+/g, "a=ice-ufrag:".concat(_this2.connectionId));
                        _context8.next = 4;
                        return _this2.videoPeer.setLocalDescription(offer);
                      case 4:
                        console.log("videoPeer=".concat(offer.sdp));
                        msg = {};
                        msg["seq"] = 10;
                        msg["evt"] = 24321;
                        offer = {};
                        offer["type"] = 2;
                        offer["sdp"] = _this2.videoPeer.localDescription.sdp;
                        msg["offer"] = offer;
                        data = JSON.stringify(msg);
                        _context8.next = 15;
                        return _this2.socket.send(data);
                      case 15:
                      case "end":
                        return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function (_x5) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 4:
              return _context9.abrupt("return", new Promise(function (resolve, reject) {
                var timeoutId = setTimeout(function () {
                  clearTimeout(timeoutId);
                  console.log("dataChannel timeout");
                  _this2.closeConnectingDataChannel();
                  resolve(false);
                }, timeout);
                _this2.videoDataChannel.addEventListener("open", function (ev) {
                  console.log("videoDataChannel open() ev=".concat(ev));
                  clearTimeout(timeoutId);
                  _this2.dataChannelOpened = true;
                  resolve(true);
                });
                _this2.videoDataChannel.addEventListener("error", function (ev) {
                  console.log("videoDataChannel open() ev=".concat(ev));
                  clearTimeout(timeoutId);
                  _this2.closeConnectingDataChannel();
                  _this2.dataChannelOpened = false;
                  resolve(false);
                });
              }));
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function connectDataChannel(_x4) {
        return _connectDataChannel.apply(this, arguments);
      }
      return connectDataChannel;
    }()
  }, {
    key: "getConnectionId",
    value: function () {
      var _getConnectionId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", new Promise(function (resolve) {
                _this3.socket.onmessage = function (event) {
                  var data = JSON.parse(event.data);
                  if (isDebugMode()) {
                    console.log("getConnectionId() data: ".concat(JSON.stringify(data)));
                  }
                  if (data.evt == 4098) {
                    var connectionId = data.body.conID;
                    var index = data.body.index;
                    resolve({
                      connectionId: connectionId,
                      index: index
                    });
                  }
                };
              }));
            case 1:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function getConnectionId() {
        return _getConnectionId.apply(this, arguments);
      }
      return getConnectionId;
    }()
  }, {
    key: "evalNetworkDiagnosticStatistics",
    value: function evalNetworkDiagnosticStatistics() {
      var uplink_avg_rtt = 0;
      var uplink_avg_loss = 0;
      var uplink_avg_jitter = 0;
      var downlink_avg_rtt = 0;
      var downlink_avg_loss = 0;
      var downlink_avg_jitter = 0;
      if (this.uplink_count > 0) {
        uplink_avg_rtt = this.total_ul_rtt / this.uplink_count;
        uplink_avg_loss = this.total_ul_loss / this.uplink_count;
        uplink_avg_jitter = this.total_ul_jitter / this.uplink_count;
      }
      if (this.downlink_count > 0) {
        downlink_avg_rtt = this.total_dl_rtt / this.downlink_count;
        downlink_avg_loss = this.total_dl_loss / this.downlink_count;
        downlink_avg_jitter = this.total_dl_jitter / this.downlink_count;
      }
      return {
        uplink_avg_rtt: uplink_avg_rtt,
        uplink_avg_loss: uplink_avg_loss,
        uplink_avg_jitter: uplink_avg_jitter,
        uplink_bandwidth: this.last_ul_bw,
        uplink_bw_level: this.last_ul_bw_level,
        uplink_network_level: this.last_ul_network_level,
        downlink_avg_rtt: downlink_avg_rtt,
        downlink_avg_loss: downlink_avg_loss,
        downlink_avg_jitter: downlink_avg_jitter,
        downlink_bandwidth: this.last_dl_bw,
        downlink_bw_level: this.last_dl_bw_level,
        downlink_network_level: this.last_dl_network_level
      };
    }
  }, {
    key: "closeConnectingDataChannel",
    value: function closeConnectingDataChannel() {
      if (this.videoDataChannel && this.videoDataChannel.readyState === "connecting") {
        this.videoDataChannel.close();
        console.log("the connecting data channel is closed.");
      }
    }
  }, {
    key: "cleanupConnections",
    value: function cleanupConnections() {
      if (this.socket) {
        this.socket.close();
      }
      if (this.mediaSocket) {
        this.mediaSocket.close();
      }
      if (this.videoDataChannel) {
        this.videoDataChannel.close();
      }
    }
  }, {
    key: "getNetworkDiagnosticReport",
    value: function getNetworkDiagnosticReport() {
      return {
        serviceZone: this.dc,
        protocols: [this.httpsProtocol, this.wssProtocol, this.dataChannelProtocol],
        statistics: this.evalNetworkDiagnosticStatistics(),
        rid: this.rid
      };
    }
  }, {
    key: "getRid",
    value: function getRid() {
      return readValueFromLocalStorage(KEY_RID);
    }
  }, {
    key: "assembleProtocolResult",
    value: function assembleProtocolResult(type, isBlocked) {
      var port = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var tip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var error = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      return {
        type: type,
        isBlocked: isBlocked,
        port: port,
        tip: tip,
        error: error
      };
    }
  }, {
    key: "sendKeepAliveMessage",
    value: function sendKeepAliveMessage() {
      if (this.socket) {
        if (this.socket.readyState == WebSocket.OPEN) {
          var keepAliveMsg = getCommandMessage(0, {});
          this.socket.send(keepAliveMsg);
        } else {
          console.log("WebSocket is not open: current state is " + this.socket.readyState);
        }
      } else {
        console.warn("sendKeepAliveMessage() cannot send keep-alive message due to nullable socket!");
      }
    }
  }, {
    key: "killKeepAliveTimer",
    value: function killKeepAliveTimer() {
      if (this.keepAliveTimer) {
        clearInterval(this.keepAliveTimer);
        this.keepAliveTimer = null;
      }
    }
  }]);
}();
function _extractRid(input) {
  var regex = /rid=([^;]+)/;
  var match = input.match(regex);
  if (match && match[0]) {
    return match[0];
  } else {
    return "";
  }
}

var ERR_NO = {
  ANY_TEMPLATE: 0,
  OS_REQUIRED: 1,
  BROWSER_VERSION_REQUIRED: 2,
  HW_CONCURRENCY_REQUIRED: 3,
  HARDWARE_REQUIRED: 4,
  API_REQUIRED: 5
};
function GEN_OS_REQ(matched) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return {
    index: ERR_NO.OS_REQUIRED,
    label: "OS Requirement",
    matched: matched,
    tip: formatTip.apply(void 0, ["OS(%s) is required. (os:%s)"].concat(args))
  };
}
function GEN_BROWSER_VERSION_REQ(matched) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  return {
    index: ERR_NO.BROWSER_VERSION_REQUIRED,
    label: "Browser Version Requirement",
    matched: matched,
    tip: formatTip.apply(void 0, ["Please use the suggested browsers and versions(%s). (browser: %s version:%s)"].concat(args))
  };
}
function GEN_HW_CONCURRENCY_REQ(matched) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }
  return {
    index: ERR_NO.HW_CONCURRENCY_REQUIRED,
    label: "Hardware Concurrency Requirement",
    matched: matched,
    tip: formatTip.apply(void 0, ["More than %s logical processors are required. (count: %s)"].concat(args))
  };
}
function GEN_HARDWARE_REQ(matched) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }
  return {
    index: ERR_NO.HARDWARE_REQUIRED,
    label: "Special Hardware Requirement",
    matched: matched,
    tip: formatTip.apply(void 0, ["%s(spec:%s) is required. %s(spec:%s)"].concat(args))
  };
}
function GEN_API_REQUIRED(matched) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }
  return {
    index: ERR_NO.API_REQUIRED,
    label: "API Requirement",
    matched: matched,
    tip: formatTip.apply(void 0, ["API(name:%s) is required. Is supported?(%s)"].concat(args))
  };
}
function formatTip(tipTemplate) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }
  var placeholderRegex = /%[sd]/g;
  return tipTemplate.replace(placeholderRegex, function () {
    var arg = args.shift();
    if (typeof arg === "string") {
      return arg;
    } else if (typeof arg === "number") {
      return arg.toString();
    }
    return "";
  });
}

var _uaParser$3 = /*#__PURE__*/new WeakMap();
var Browser$1 = /*#__PURE__*/function () {
  function Browser(uaParser) {
    _classCallCheck(this, Browser);
    _classPrivateFieldInitSpec(this, _uaParser$3, null);
    _classPrivateFieldSet2(_uaParser$3, this, uaParser);
  }
  return _createClass(Browser, [{
    key: "getBrowserName",
    value: function getBrowserName() {
      return _classPrivateFieldGet2(_uaParser$3, this).getBrowser().name.toLowerCase();
    }
  }, {
    key: "getBrowserVersion",
    value: function getBrowserVersion() {
      return _classPrivateFieldGet2(_uaParser$3, this).getBrowser().version;
    }
  }, {
    key: "getBrowserMajorVersion",
    value: function getBrowserMajorVersion() {
      return _classPrivateFieldGet2(_uaParser$3, this).getBrowser().major;
    }
  }, {
    key: "isChrome",
    value: function isChrome() {
      return this.getBrowserName().includes("chrome");
    }
  }, {
    key: "isEdge",
    value: function isEdge() {
      return this.getBrowserName().includes("edge");
    }
  }, {
    key: "isOpera",
    value: function isOpera() {
      return this.getBrowserName().includes("opera");
    }
  }, {
    key: "isFirefox",
    value: function isFirefox() {
      return this.getBrowserName().includes("firefox");
    }
  }, {
    key: "isChromium",
    value: function isChromium() {
      if (this.getBrowserName() === "chrome") {
        var _navigator$userAgentD;
        if ((_navigator$userAgentD = navigator.userAgentData) !== null && _navigator$userAgentD !== void 0 && _navigator$userAgentD.brands) {
          var isChromium = navigator.userAgentData.brands.some(function (brand) {
            return brand.brand === "Chromium";
          });
          return isChromium;
        }
      }
      return false;
    }
  }, {
    key: "isSafari",
    value: function isSafari() {
      return this.getBrowserName().includes("safari");
    }
  }, {
    key: "isChromiumBasedBrowser",
    value: function isChromiumBasedBrowser() {
      return this.isChrome() || this.isChromium() || this.isEdge() || this.isOpera();
    }
  }, {
    key: "isChromeVersionHigherThan",
    value: function isChromeVersionHigherThan(version) {
      if (this.isChrome()) {
        return Browser.compareBrowserVersion(this.getBrowserVersion(), version);
      }
      return false;
    }
  }, {
    key: "isChromiumBasedBrowserVersionHigherThan",
    value: function isChromiumBasedBrowserVersionHigherThan(version) {
      if (this.isChromiumBasedBrowser()) {
        return Browser.compareBrowserVersion(this.getBrowserVersion(), version);
      }
      return false;
    }
  }, {
    key: "isFirefoxVersionHigherThan",
    value: function isFirefoxVersionHigherThan(version) {
      if (this.isFirefox()) {
        return Browser.compareBrowserVersion(this.getBrowserVersion(), version);
      }
      return false;
    }
  }, {
    key: "isSafariVersionHigherThan",
    value: function isSafariVersionHigherThan(version) {
      if (this.isSafari()) {
        return Browser.compareBrowserVersion(this.getBrowserVersion(), version);
      }
      return false;
    }
  }], [{
    key: "compareBrowserVersion",
    value: function compareBrowserVersion(browserVersion, comparedVersion) {
      if (!browserVersion || !comparedVersion) {
        throw new Error("compareBrowserVersion() invalid parameters!");
      }
      var browserVersionArray = browserVersion.toString().split(".").map(Number);
      var comparedVersionArray = comparedVersion.toString().split(".").map(Number);
      var maxLength = Math.max(browserVersionArray.length, comparedVersionArray.length);
      for (var i = 0; i < maxLength; i++) {
        var _browser = browserVersionArray[i] || 0;
        var _compared = comparedVersionArray[i] || 0;
        if (_browser !== _compared) {
          return _browser > _compared;
        }
      }
      return browserVersion >= comparedVersion;
    }
  }]);
}();

var _uaParser$2 = /*#__PURE__*/new WeakMap();
var _detector = /*#__PURE__*/new WeakMap();
var OS$1 = /*#__PURE__*/function () {
  function OS(uaParser) {
    _classCallCheck(this, OS);
    _classPrivateFieldInitSpec(this, _uaParser$2, null);
    _classPrivateFieldInitSpec(this, _detector, null);
    _classPrivateFieldSet2(_uaParser$2, this, uaParser);
  }
  return _createClass(OS, [{
    key: "setDetector",
    value: function setDetector(detector) {
      _classPrivateFieldSet2(_detector, this, detector);
    }
  }, {
    key: "getOSName",
    value: function getOSName() {
      return _classPrivateFieldGet2(_uaParser$2, this).getOS().name;
    }
  }, {
    key: "getOSVersion",
    value: function getOSVersion() {
      return _classPrivateFieldGet2(_uaParser$2, this).getOS().version;
    }
  }, {
    key: "isChromeOS",
    value: function isChromeOS() {
      var _os = this.getOSName().toLowerCase();
      return _os === "chromium os" || _os === "chrome os";
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      var _os = this.getOSName().toLowerCase();
      if (_os === "android") {
        return true;
      } else {
        if (_os.includes("linux")) {
          var isTablet = _classPrivateFieldGet2(_detector, this).getDevice().isTablet(navigator);
          var isMobileDevice = _classPrivateFieldGet2(_detector, this).getDevice().isMobileDevice(navigator);
          if (isTablet || isMobileDevice) {
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: "is_iOS",
    value: function is_iOS() {
      var _os = this.getOSName().toLowerCase();
      if (_os === "ios") {
        return true;
      } else {
        if (_os.includes("mac")) {
          var isTablet = _classPrivateFieldGet2(_detector, this).getDevice().isTablet(navigator);
          var isMobileDevice = _classPrivateFieldGet2(_detector, this).getDevice().isMobileDevice(navigator);
          if (isTablet || isMobileDevice) {
            return true;
          }
        }
      }
      return false;
    }
  }]);
}();

var _uaParser$1 = /*#__PURE__*/new WeakMap();
var _deviceHighEntropyValues = /*#__PURE__*/new WeakMap();
var Device = /*#__PURE__*/function () {
  function Device(uaParser) {
    var _this = this;
    _classCallCheck(this, Device);
    _classPrivateFieldInitSpec(this, _uaParser$1, null);
    _classPrivateFieldInitSpec(this, _deviceHighEntropyValues, null);
    _classPrivateFieldSet2(_uaParser$1, this, uaParser);
    if (navigator && navigator.userAgentData) {
      navigator.userAgentData.getHighEntropyValues(["model"]).then(function (values) {
        _classPrivateFieldSet2(_deviceHighEntropyValues, _this, values);
      });
    }
  }
  return _createClass(Device, [{
    key: "getDeviceModel",
    value: function getDeviceModel() {
      var deviceModel = "";
      if (_classPrivateFieldGet2(_deviceHighEntropyValues, this)) {
        if (_classPrivateFieldGet2(_deviceHighEntropyValues, this).model && _classPrivateFieldGet2(_deviceHighEntropyValues, this).model !== "") {
          deviceModel = _classPrivateFieldGet2(_deviceHighEntropyValues, this).model;
        }
      } else {
        var _classPrivateFieldGet2$1;
        deviceModel = ((_classPrivateFieldGet2$1 = _classPrivateFieldGet2(_uaParser$1, this).device) === null || _classPrivateFieldGet2$1 === void 0 ? void 0 : _classPrivateFieldGet2$1.model) || "";
      }
      return deviceModel;
    }
  }, {
    key: "getDeviceType",
    value: function getDeviceType() {
      return _classPrivateFieldGet2(_uaParser$1, this).getDevice().type || "";
    }
  }, {
    key: "getDeviceVendor",
    value: function getDeviceVendor() {
      return _classPrivateFieldGet2(_uaParser$1, this).getDevice().vendor || "";
    }
  }, {
    key: "getCPUArch",
    value: function getCPUArch() {
      var _classPrivateFieldGet3;
      return ((_classPrivateFieldGet3 = _classPrivateFieldGet2(_uaParser$1, this).getCPU()) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.architecture) || "";
    }
  }, {
    key: "isTablet",
    value: function isTablet() {
      var _window, _window2;
      if (this.getDeviceType() === "tablet") {
        return true;
      }
      if (!navigator) {
        return false;
      }
      var userAgent = (navigator.userAgent || "").toLowerCase();
      var tabletRegex = /ipad|android(?!.*mobile)|tablet/i;
      if (tabletRegex.test(userAgent)) {
        return true;
      }
      var minTabletWidth = 600;
      var maxTabletWidth = 1280;
      var screenWidth = Math.min(((_window = window) === null || _window === void 0 || (_window = _window.screen) === null || _window === void 0 ? void 0 : _window.width) || 0, ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.screen) === null || _window2 === void 0 ? void 0 : _window2.height) || 0);
      var hasTouchSupport = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      return screenWidth >= minTabletWidth && screenWidth <= maxTabletWidth && hasTouchSupport;
    }
  }, {
    key: "isMobileDevice",
    value: function isMobileDevice() {
      var _window3, _window4;
      if (this.getDeviceType() === "mobile") {
        return true;
      }
      if (!navigator || !navigator.userAgent || navigator.userAgent.length < 1) {
        return false;
      }
      if (navigator.userAgentData) {
        if (!!navigator.userAgentData.mobile) {
          return true;
        }
      }
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      }
      var minMobileWidth = 200;
      var maxMobileWidth = 600;
      var screenWidth = Math.min(((_window3 = window) === null || _window3 === void 0 || (_window3 = _window3.screen) === null || _window3 === void 0 ? void 0 : _window3.width) || 0, ((_window4 = window) === null || _window4 === void 0 || (_window4 = _window4.screen) === null || _window4 === void 0 ? void 0 : _window4.height) || 0);
      var hasTouchSupport = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      return screenWidth >= minMobileWidth && screenWidth < maxMobileWidth && hasTouchSupport;
    }
  }]);
}();

var _uaParser = /*#__PURE__*/new WeakMap();
var _browser = /*#__PURE__*/new WeakMap();
var _os = /*#__PURE__*/new WeakMap();
var _device = /*#__PURE__*/new WeakMap();
var Detector = /*#__PURE__*/function () {
  function Detector() {
    _classCallCheck(this, Detector);
    _classPrivateFieldInitSpec(this, _uaParser, null);
    _classPrivateFieldInitSpec(this, _browser, null);
    _classPrivateFieldInitSpec(this, _os, null);
    _classPrivateFieldInitSpec(this, _device, null);
    if (Detector.instance) {
      return Detector.instance;
    }
    _classPrivateFieldSet2(_uaParser, this, new uaParserJs.UAParser(navigator.userAgent));
    _classPrivateFieldSet2(_browser, this, new Browser$1(_classPrivateFieldGet2(_uaParser, this)));
    _classPrivateFieldSet2(_os, this, new OS$1(_classPrivateFieldGet2(_uaParser, this)));
    _classPrivateFieldGet2(_os, this).setDetector(this);
    _classPrivateFieldSet2(_device, this, new Device(_classPrivateFieldGet2(_uaParser, this)));
    Detector.instance = this;
  }
  return _createClass(Detector, [{
    key: "getBrowser",
    value: function getBrowser() {
      return _classPrivateFieldGet2(_browser, this);
    }
  }, {
    key: "getOS",
    value: function getOS() {
      return _classPrivateFieldGet2(_os, this);
    }
  }, {
    key: "getDevice",
    value: function getDevice() {
      return _classPrivateFieldGet2(_device, this);
    }
  }]);
}();
var DETECTOR = new Detector();

var Browser = /*#__PURE__*/function () {
  function Browser() {
    _classCallCheck(this, Browser);
  }
  return _createClass(Browser, null, [{
    key: "getUserAgent",
    value: function getUserAgent(navigator) {
      return navigator.userAgent;
    }
  }, {
    key: "isChrome",
    value: function isChrome(navigator) {
      var result = {
        matched: false,
        version: undefined
      };
      var uaData = navigator.userAgentData;
      if (uaData && uaData.brands && uaData.brands.length > 0) {
        var chromeTextPattern = /Chrome|Chromium/gi;
        uaData.brands.forEach(function (entry) {
          if (!result.matched) {
            result.matched = chromeTextPattern.test(entry.brand);
            result.version = parseInt(entry.version);
          }
        });
      } else {
        if (navigator && navigator.webkitGetUserMedia) {
          result.matched = true;
          result.version = _assertClassBrand(Browser, this, _parseBrowserVersion).call(this, navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
        }
      }
      return result;
    }
  }, {
    key: "getChromeVersion",
    value: function getChromeVersion() {
      return Browser.isChrome().version;
    }
  }, {
    key: "getBrowserName",
    value: function getBrowserName(navigator) {
      var name = DETECTOR.getBrowser().getBrowserName();
      if (!name) {
        var ua = navigator.userAgent.toLowerCase();
        if (isInUserAgent(ua, "edge", "edg", "edgios")) {
          name = "Edge";
        } else if (isInUserAgent(ua, "opera", "opr") && !!window.opr) {
          name = "Opera";
        } else if (isInUserAgent(ua, "chrome", "crios", "crmo") && !!window.chrome) {
          name = "Chrome";
        } else if (isInUserAgent(ua, "trident", "msie")) {
          name = "IE";
        } else if (isInUserAgent(ua, "firefox", "iceweasel", "fxios")) {
          name = "Firefox";
        } else if (isInUserAgent(ua, "safari")) {
          name = "Safari";
        } else {
          name = "Unknown";
        }
      }
      return name;
    }
  }, {
    key: "isEdge",
    value: function isEdge(navigator) {
      var result = {
        matched: false,
        version: undefined
      };
      var uaData = navigator.userAgentData;
      if (uaData && uaData.brands && uaData.brands.length > 0) {
        var edgeTextPattern = /Edge/gi;
        uaData.brands.forEach(function (entry) {
          if (!result.matched) {
            result.matched = edgeTextPattern.test(entry.brand);
            result.version = parseInt(entry.version);
          }
        });
      } else {
        if (navigator.userAgent && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
          result.matched = true;
          result.version = _parseBrowserVersion.call(Browser, navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
        }
      }
      return result;
    }
  }, {
    key: "isFirefox",
    value: function isFirefox(navigator) {
      return {
        matched: !!navigator.mozGetUserMedia,
        version: _parseBrowserVersion.call(Browser, navigator.userAgent, /Firefox\/(\d+)\./, 1)
      };
    }
  }, {
    key: "isSafari",
    value: function isSafari(navigator) {
      return {
        matched: !!window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./) && !this.isChrome(navigator).matched,
        version: _parseBrowserVersion.call(Browser, navigator.userAgent, /AppleWebKit\/(\d+)\./, 1)
      };
    }
  }, {
    key: "isOpera",
    value: function isOpera(navigator) {
      return /opera|opr\/[\d]+/i.test(navigator.userAgent);
    }
  }, {
    key: "getOperaChromiumVersion",
    value: function getOperaChromiumVersion(navigator) {
      if (Browser.isOpera(navigator)) {
        var isChrome = Browser.isChrome();
        if (isChrome.matched) {
          return isChrome.version;
        }
      }
      return 0;
    }
  }, {
    key: "getOperaVersion",
    value: function getOperaVersion(navigator) {
      return Browser.getBrowserVersion(navigator).opera;
    }
  }, {
    key: "isMobileSafari",
    value: function isMobileSafari(navigator) {
      return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);
    }
  }, {
    key: "isAndroidBrowser",
    value: function isAndroidBrowser(navigator) {
      if (navigator.userAgentData && navigator.userAgentData.platform) {
        return navigator.userAgentData.platform === "Android";
      } else {
        return _legacyIsAndroidBrowser.call(Browser, navigator);
      }
    }
  }, {
    key: "isiPhoneOriPadBrowser",
    value: function isiPhoneOriPadBrowser(navigator) {
      return _legacyIsiPhoneOriPadBrowser.call(Browser, navigator);
    }
  }, {
    key: "isMTRAndroidWithSharedArrayBuffer",
    value: function isMTRAndroidWithSharedArrayBuffer(navigator) {
      return navigator.userAgent.indexOf("MSFT Teams Android Room") !== -1 && typeof SharedArrayBuffer !== "undefined";
    }
  }, {
    key: "isTeslaMode",
    value: function isTeslaMode(navigator) {
      return /TESLA/.test(navigator.userAgent);
    }
  }, {
    key: "getBrowserVersion",
    value: function getBrowserVersion(navigator) {
      var version = DETECTOR.getBrowser().getBrowserVersion();
      if (!version) {
        var browserVersion = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? browserVersion.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? browserVersion.ie = s[1] : (s = ua.match(/(?:edge|edgios)\/([\d\.]+)/)) ? browserVersion.edge = s[1] : (s = ua.match(/(?:firefox|iceweasel|fxios)\/([\d\.]+)/)) ? browserVersion.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? browserVersion.opera = s[1] : (s = ua.match(/(?:chrome|crios|crmo)\/([\d\.]+)/)) ? browserVersion.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? browserVersion.safari = s[1] : 0;
        version = s[1];
      }
      return version;
    }
  }]);
}();
function _parseBrowserVersion(ua, exp, pos) {
  var match = ua.match(exp);
  return match && match.length >= pos && parseInt(match[pos], 10);
}
function _legacyIsAndroidBrowser(navigator) {
  try {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}
function _legacyIsiPhoneOriPadBrowser(navigator) {
  try {
    if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

var OS = /*#__PURE__*/function () {
  function OS() {
    _classCallCheck(this, OS);
  }
  return _createClass(OS, null, [{
    key: "isWindowsOS",
    value: function isWindowsOS(navigator) {
      return navigator.platform.indexOf("Win") > -1;
    }
  }, {
    key: "isMacOS",
    value: function isMacOS(navigator) {
      return navigator.platform.indexOf("Mac") > -1;
    }
  }, {
    key: "isLinuxOS",
    value: function isLinuxOS(navigator) {
      return navigator.platform.indexOf("Linux") > -1 && !OS.isChromeOS(navigator) && !OS.isAndroid(navigator);
    }
  }, {
    key: "isChromeOS",
    value: function isChromeOS(navigator) {
      return /\bCrOS\b/.test(navigator.userAgent);
    }
  }, {
    key: "isAndroid",
    value: function isAndroid(navigator) {
      return navigator.userAgent.toLowerCase().indexOf("android") > -1;
    }
  }, {
    key: "isiPadOS",
    value: function isiPadOS(navigator) {
      return !!navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && (/iPad/.test(navigator.platform) || /MacIntel/.test(navigator.platform));
    }
  }, {
    key: "isIPad",
    value: function isIPad(navigator) {
      var ua = navigator.userAgent.toLowerCase();
      var portraitWidth = 0;
      var portraitHeight = 0;

      // iPad height, resolution table width // same width Note that there is 1668px
      var screens = {
        1024: 768,
        // iPad mini 4, iPad Air 2, iPad Pro 9.7,
        1112: 834,
        // iPad Pro 10.5
        1194: 834,
        // iPad Pro 11
        1366: 1024 // iPad Pro 12.9 2nd
      };
      // held vertically held horizontally (portrait mode, landscape mode)
      // determines in portrait position either case an
      if (window.screen.width < window.screen.height) {
        portraitWidth = window.screen.width;
        portraitHeight = window.screen.height;
      } else {
        portraitWidth = window.screen.height;
        portraitHeight = window.screen.width;
      }

      // iOS and iPadOS return true if the iPad either case return
      return ua.indexOf("ipad") > -1 || ua.indexOf("macintosh") > -1 && screens[portraitHeight] === portraitWidth;
    }
  }, {
    key: "is_iOS",
    value: function is_iOS(navigator) {
      return /iPad|iPhone|iPod/i.test(navigator.userAgent);
    }
  }, {
    key: "isMobileDevice",
    value: function isMobileDevice(navigator) {
      return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || OS.isIPad(navigator) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
    }
  }, {
    key: "getOSName",
    value: function getOSName(navigator) {
      var name = DETECTOR.getOS().getOSName();
      if (!name) {
        if (OS.isWindowsOS(navigator)) {
          name = "Windows";
        } else if (OS.isMacOS(navigator)) {
          name = "Mac";
        } else if (OS.isAndroid(navigator)) {
          name = "Android";
        } else if (OS.isChromeOS(navigator)) {
          name = "ChromeOS";
        } else if (OS.isLinuxOS(navigator)) {
          name = "Linux";
        } else if (OS.isiPadOS(navigator)) {
          name = "iPad";
        } else if (OS.is_iOS(navigator)) {
          name = "iOS";
        } else {
          name = "Unknown";
        }
      }
      return name;
    }
  }, {
    key: "getOSVersion",
    value: function getOSVersion() {
      var version = DETECTOR.getOS().getOSVersion();
      if (!version) {
        version = "unknown";
      }
      return version;
    }
  }]);
}();

var Feature = /*#__PURE__*/function () {
  function Feature() {
    _classCallCheck(this, Feature);
  }
  return _createClass(Feature, null, [{
    key: "isEchoCancellationSupported",
    value: function isEchoCancellationSupported(navigator) {
      return navigator.mediaDevices.getSupportedConstraints().echoCancellation != undefined;
    }
  }, {
    key: "isSIMDSupported",
    value: function isSIMDSupported() {
      var isSupported = WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]));
      return isSupported === true;
    }
  }, {
    key: "isVideoFrameSupported",
    value: function isVideoFrameSupported() {
      return typeof VideoFrame != "undefined";
    }
  }, {
    key: "isStereoSupported",
    value: function isStereoSupported(navigator) {
      return !Browser.isSafari(navigator).matched;
    }
  }, {
    key: "isSharedArrayBufferSupported",
    value: function isSharedArrayBufferSupported() {
      return typeof SharedArrayBuffer !== "undefined";
    }
  }, {
    key: "isVideoFrameSupportedOnMobileSafari",
    value: function isVideoFrameSupportedOnMobileSafari(navigator) {
      return Browser.isMobileSafari(navigator) && Feature.isVideoFrameSupported();
    }
  }, {
    key: "isWebGLSupported",
    value: function isWebGLSupported() {
      var canvas = null;
      if (Feature.isOffscreenCanvasSupported()) {
        canvas = new OffscreenCanvas(1, 1);
      } else {
        canvas = document.createElement("canvas");
      }
      try {
        var glCtx = canvas.getContext("webgl");
        return !!glCtx;
      } catch (e) {
        return false;
      } finally {
        canvas = null;
      }
    }
  }, {
    key: "isWebGL2Supported",
    value: function isWebGL2Supported() {
      var canvas = null;
      if (Feature.isOffscreenCanvasSupported()) {
        canvas = new OffscreenCanvas(1, 1);
      } else {
        canvas = document.createElement("canvas");
      }
      try {
        var glCtx = canvas.getContext("webgl2");
        return !!glCtx;
      } catch (e) {
        return false;
      } finally {
        canvas = null;
      }
    }
  }, {
    key: "isWebGPUSupported",
    value: function () {
      var _isWebGPUSupported = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var isWebGPUAllowedOnTargetPlatforms, isChrome, isEdge, isOpera, isWebGPUAllowedOnTargetBrowsers, adapter, gpuDevice, adapterInfo, GPU_VENDOR_WHITELIST, index, canvas, gpuContext;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (Feature.isVideoFrameSupported()) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", false);
            case 2:
              isWebGPUAllowedOnTargetPlatforms = OS.isMacOS(navigator) || OS.isWindowsOS(navigator) || OS.isChromeOS(navigator) || OS.isLinuxOS(navigator);
              if (isWebGPUAllowedOnTargetPlatforms) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", false);
            case 5:
              isChrome = Browser.isChrome(navigator);
              isEdge = Browser.isEdge(navigator);
              isOpera = Browser.isOpera(navigator);
              isWebGPUAllowedOnTargetBrowsers = isChrome.matched && isChrome.version >= 119 || isEdge.matched && isEdge.version >= 119 || isOpera.matched && Browser.getOperaChromiumVersion(navigator) >= 119 || isChrome.matched && (OS.isLinuxOS(navigator) || Browser.isAndroidBrowser(navigator)) && isChrome.version >= 121;
              if (isWebGPUAllowedOnTargetBrowsers) {
                _context.next = 11;
                break;
              }
              return _context.abrupt("return", false);
            case 11:
              if (navigator.gpu) {
                _context.next = 13;
                break;
              }
              return _context.abrupt("return", false);
            case 13:
              _context.next = 15;
              return navigator.gpu.requestAdapter();
            case 15:
              adapter = _context.sent;
              if (adapter) {
                _context.next = 18;
                break;
              }
              return _context.abrupt("return", false);
            case 18:
              _context.next = 20;
              return adapter.requestDevice();
            case 20:
              gpuDevice = _context.sent;
              if (gpuDevice) {
                _context.next = 23;
                break;
              }
              return _context.abrupt("return", false);
            case 23:
              _context.next = 25;
              return adapter.requestAdapterInfo();
            case 25:
              adapterInfo = _context.sent;
              if (adapterInfo) {
                _context.next = 28;
                break;
              }
              return _context.abrupt("return", false);
            case 28:
              GPU_VENDOR_WHITELIST = ["intel", "nvidia", "apple", "amd", "qualcomm"];
              index = GPU_VENDOR_WHITELIST.indexOf(adapterInfo.vendor);
              if (!(index === -1)) {
                _context.next = 32;
                break;
              }
              return _context.abrupt("return", false);
            case 32:
              canvas = null;
              if (Feature.isOffscreenCanvasSupported()) {
                canvas = new OffscreenCanvas(1, 1);
              } else {
                canvas = document.createElement("canvas");
              }
              gpuContext = canvas.getContext("webgpu");
              if (gpuContext) {
                _context.next = 38;
                break;
              }
              canvas = null;
              return _context.abrupt("return", false);
            case 38:
              canvas = null;
              return _context.abrupt("return", true);
            case 40:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function isWebGPUSupported() {
        return _isWebGPUSupported.apply(this, arguments);
      }
      return isWebGPUSupported;
    }()
  }, {
    key: "isOffscreenCanvasSupported",
    value: function isOffscreenCanvasSupported() {
      return typeof OffscreenCanvas === "function";
    }
  }, {
    key: "isScreenSharingSupported",
    value: function isScreenSharingSupported() {
      if (OS.isMobileDevice(navigator)) {
        return false;
      }
      var isSafari = Browser.isSafari(navigator);
      if (isSafari.matched && isSafari.version < 17) {
        return false;
      }
      return true;
    }
  }, {
    key: "isVideoEncoderSupported",
    value: function isVideoEncoderSupported() {
      return typeof VideoEncoder === "function";
    }
  }, {
    key: "isVideoEncodingConfigSupported",
    value: function () {
      var _isVideoEncodingConfigSupported = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(config) {
        var isSupported;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (Feature.isVideoEncoderSupported()) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", null);
            case 2:
              _context2.next = 4;
              return VideoEncoder.isConfigSupported(config);
            case 4:
              isSupported = _context2.sent;
              return _context2.abrupt("return", isSupported);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function isVideoEncodingConfigSupported(_x) {
        return _isVideoEncodingConfigSupported.apply(this, arguments);
      }
      return isVideoEncodingConfigSupported;
    }()
  }, {
    key: "isVideoDecodingConfigSupported",
    value: function () {
      var _isVideoDecodingConfigSupported = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(config) {
        var isSupported;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (Feature.isVideoEncoderSupported()) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return", null);
            case 2:
              _context3.next = 4;
              return VideoDecoder.isConfigSupported(config);
            case 4:
              isSupported = _context3.sent;
              return _context3.abrupt("return", isSupported);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function isVideoDecodingConfigSupported(_x2) {
        return _isVideoDecodingConfigSupported.apply(this, arguments);
      }
      return isVideoDecodingConfigSupported;
    }()
  }, {
    key: "isHardwareAccelerationEnabled",
    value: function isHardwareAccelerationEnabled() {
      try {
        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl');
        if (!gl) {
          return false;
        }
        var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (!debugInfo) {
          return false;
        }
        var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        console.log("Renderer: ".concat(renderer));
        console.log("Vendor: ".concat(vendor));
        var isSoftwareRenderer = /software/i.test(renderer);
        return !isSoftwareRenderer;
      } catch (e) {
        console.error(e);
        return false;
      }
    }
  }, {
    key: "isGraphicsAccelerationEnabled",
    value: function isGraphicsAccelerationEnabled() {
      try {
        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl');
        if (!gl) {
          return false;
        }
        var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (!debugInfo) {
          return false;
        }
        var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        console.log("Vendor: ".concat(vendor));
        var isSwiftShader = /swiftshader/i.test(renderer);
        return !isSwiftShader;
      } catch (e) {
        console.error(e);
        return false;
      }
    }
  }]);
}();

var Hardware = /*#__PURE__*/function () {
  function Hardware() {
    _classCallCheck(this, Hardware);
  }
  return _createClass(Hardware, null, [{
    key: "getHardwareConcurrency",
    value: function getHardwareConcurrency(navigator) {
      return navigator.hardwareConcurrency;
    }
  }, {
    key: "getGPUInfo",
    value: function getGPUInfo() {
      var canvas = null;
      if (Feature.isOffscreenCanvasSupported()) {
        canvas = new OffscreenCanvas(1, 1);
      } else {
        canvas = document.createElement("canvas");
      }
      if (!canvas) {
        return {
          renderer: "",
          vendor: ""
        };
      }
      try {
        var glCtx = canvas.getContext("webgl");
        if (glCtx) {
          var debugInfo = glCtx.getExtension("WEBGL_debug_renderer_info");
          var renderer = glCtx.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          var vendor = glCtx.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
          return {
            renderer: renderer.toLowerCase(),
            vendor: vendor
          };
        } else {
          // webgl context can't be retrieved
          return {
            renderer: "",
            vendor: ""
          };
        }
      } catch (e) {
        console.error(e);
        return null;
      } finally {
        if (canvas) {
          canvas = null;
        }
      }
    }
  }, {
    key: "isAMDGraphic",
    value: function isAMDGraphic() {
      var gpuInfo = Hardware.getGPUInfo();
      if (gpuInfo) {
        var _gpuInfo$renderer;
        return (_gpuInfo$renderer = gpuInfo.renderer) === null || _gpuInfo$renderer === void 0 ? void 0 : _gpuInfo$renderer.includes("amd");
      }
      return false;
    }
  }, {
    key: "isShouldUseHardwareAccelerationDecode",
    value: function isShouldUseHardwareAccelerationDecode(navigator) {
      if (Hardware.isAMDGraphic() && OS.isChromeOS(navigator)) {
        return true;
      } else if (Hardware.isAMDGraphic() && !OS.isChromeOS(navigator)) {
        return false;
      }
      return true;
    }
  }, {
    key: "isVp9Codec",
    value: function isVp9Codec(navigator) {
      var config = {
        type: "webrtc",
        video: {
          contentType: "video/vp9",
          bitrate: 10000000,
          framerate: 25,
          height: 1920,
          width: 1080
        }
      };
      var promise = navigator.mediaCapabilities.decodingInfo(config);
      return new Promise(function (resolve, reject) {
        promise.then(function (info) {
          // if we don't even have software support - chrome may not support the codec -
          // throw an error
          if (!info.supported) {
            resolve(false);
          }
          resolve(info.powerEfficient);
        }).catch(function (err) {
          resolve(false);
        });
      });
    }
  }, {
    key: "isMimeTypeSupported",
    value: function isMimeTypeSupported(mimeType) {
      return MediaRecorder.isTypeSupported(mimeType);
    }
  }]);
}();

/**
 * In video conferencing, we provide a lot of basic and advanced features for the conference service,
 * these features depend on the participant's hardware condition, system condition and browser condition.
 * Therefore, Reporter provides detection services for when these features are supported on the target device
 * to provide a better experience. At the same time, the diagnosis of the basic information of the device
 * can also help us better solve the user's problem more quickly.
 *
 * @since 1.0.0
 * @author clever.su@zoom.us
 *
 * @example
 * import { Reporter } from "@zoom/probesdk";
 * const reporter = new Reporter();
 * reporter.reportFeatures().then((features) => {
 *  console.log(JSON.stringify(features));
 * });
 */
var _Reporter_brand = /*#__PURE__*/new WeakSet();
var Reporter = /*#__PURE__*/function () {
  function Reporter() {
    _classCallCheck(this, Reporter);
    _classPrivateMethodInitSpec(this, _Reporter_brand);
  }

  /**
   * An object describes an entry of an affected feature.
   *
   * @typedef {object} AffectedFeatureEntry
   * @property {string} featureName the name of an affected feature.
   */

  /**
   * An object describes an entry of basic information.
   *
   * @typedef {object} BasicInfoEntry
   * @property {number} index index of an attribute added to the basic information, refer to {@link BASIC_INFO_ATTR_INDEX}.
   * @property {string} attr name/label of an attribute.
   * @property {string} val value of an attribute.
   * @property {boolean} critical whether the attribute is critical or not. If true, the attribute is critical and a list of affected features will be attached to the affectedFeatures field.
   * @property {Array<AffectedFeatureEntry>} affectedFeatures an array of affected features if the {@link critical} value is true, that is, a group of features might be affected if this attribute is not matched.
   */

  /**
   * An object describes an entry of a supported feature checking.
   *
   * @typedef {object} CheckItem
   * @property {number} index indicates a classification of the requirement, sometimes this field can be ignored.
   * @property {string} label the label of a requirement.
   * @property {boolean} matched indicates whether a condition of the requirement is matched or not.
   * @property {string} tip a tip will help if the condition is not {@link matched}.
   */

  /**
   * An object describes a piece of supported feature.
   *
   * @typedef {object} FeatureEntry
   * @property {number} index the index of a supported feature, refer to {@link SUPPORTED_FEATURE_INDEX}.
   * @property {string} featureName the name of a supported feature.
   * @property {boolean} isSupported whether the feature is supported or not.
   * @property {Array<CheckItem>} checkList an array of {@link CheckItem} which are used to judge whether the conditions of a supported features are matched or not.
   */

  /**
   * Report whether the advanced features are supported or not on the target device.
   *
   * @async
   * @function reportFeatures
   * @returns {Promise<{Array<FeatureEntry>}>} A promise that resolves to an array of advanced media features.
   *
   * @example
   * const reporter = new Reporter();
   * reporter.reportFeatures().then((features) => {
   *  console.log(JSON.stringify(features));
   * });
   */
  return _createClass(Reporter, [{
    key: "reportFeatures",
    value: (function () {
      var _reportFeatures = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var features, audioDenoiseFeature, audioEchoCancellationFeature, audioStereoFeature, virtualBgFeature, videoMaskFeature, webgpuFeature, videoSendHDFeature, videoSendFullHDFeature, video3x3GalleryViewFeature, video5x5GalleryViewFeature, screenSharingFeature;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              features = []; // audio part
              audioDenoiseFeature = _assertClassBrand(_Reporter_brand, this, _reportAudioDenoise).call(this);
              audioEchoCancellationFeature = _assertClassBrand(_Reporter_brand, this, _reportAudioEchoCancellation).call(this);
              audioStereoFeature = _assertClassBrand(_Reporter_brand, this, _reportAudioStereo).call(this); // video part
              virtualBgFeature = _assertClassBrand(_Reporter_brand, this, _reportVirtualBackgroundSupported).call(this);
              videoMaskFeature = _assertClassBrand(_Reporter_brand, this, _reportVideoMaskSupported).call(this);
              webgpuFeature = _assertClassBrand(_Reporter_brand, this, _reportWebGPURenderingSupported).call(this);
              _context.next = 9;
              return _assertClassBrand(_Reporter_brand, this, _reportVideoSendHDSupported).call(this);
            case 9:
              videoSendHDFeature = _context.sent;
              videoSendFullHDFeature = _assertClassBrand(_Reporter_brand, this, _reportVideoSendFullHDSupported).call(this);
              video3x3GalleryViewFeature = _assertClassBrand(_Reporter_brand, this, _report3x3DesktopGalleryViewSupported).call(this);
              video5x5GalleryViewFeature = _assertClassBrand(_Reporter_brand, this, _report5x5DesktopGalleryViewSupported).call(this);
              screenSharingFeature = _assertClassBrand(_Reporter_brand, this, _reportScreenSharingSupported).call(this);
              features.push(audioDenoiseFeature);
              features.push(audioEchoCancellationFeature);
              features.push(audioStereoFeature);
              features.push(virtualBgFeature);
              features.push(videoMaskFeature);
              features.push(webgpuFeature);
              features.push(videoSendHDFeature);
              features.push(videoSendFullHDFeature);
              features.push(video3x3GalleryViewFeature);
              features.push(video5x5GalleryViewFeature);
              features.push(screenSharingFeature);
              return _context.abrupt("return", features);
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function reportFeatures() {
        return _reportFeatures.apply(this, arguments);
      }
      return reportFeatures;
    }()
    /**
     * Report basic information of the target device, like browser information, OS, etc.
     *
     * @async
     * @function reportBasicInfo
     * @param {object} navigator the state and the identity of the user agent.
     * @returns {Promise<{Array<BasicInfoEntry>}>} A promise that resolves to an array of basic information entries.
     *
     * @example
     * const reporter = new Reporter();
     * reporter.reportBasicInfo(navigator).then((info) => {
     *  console.log(JSON.stringify(info));
     * });
     */
    )
  }, {
    key: "reportBasicInfo",
    value: (function () {
      var _reportBasicInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(navigator) {
        var userAgent, browserName, browserVersion, osName, osVersion, minVersion, hardwareConcurrency, gpuInfo, gpuVendor, gpuRender, isVideoFrameSupported, isOffscreenCanvasSupported, isSimdSupported, avcConfig, encoding_config, encodingResult, isEncodingSupported, extradata_info, decoding_config, decodingResult, isDecodingSupported, basicInfoEntries;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // browser name & version
              userAgent = Browser.getUserAgent(navigator);
              browserName = Browser.getBrowserName(navigator);
              browserVersion = Browser.getBrowserVersion(navigator); // OS information
              osName = OS.getOSName(navigator);
              osVersion = OS.getOSVersion(); // Min browser version for a better experience
              minVersion = _assertClassBrand(_Reporter_brand, this, _getMiniumBrowserVersion).call(this, osName, browserName); // Hardware information
              hardwareConcurrency = Hardware.getHardwareConcurrency(navigator);
              gpuInfo = Hardware.getGPUInfo();
              gpuVendor = gpuInfo.vendor;
              gpuRender = gpuInfo.renderer; // API requirements
              isVideoFrameSupported = Feature.isVideoFrameSupported(navigator); // feature requirements
              isOffscreenCanvasSupported = Feature.isOffscreenCanvasSupported();
              isSimdSupported = Feature.isSIMDSupported();
              avcConfig = {
                format: "annexb"
              };
              encoding_config = {
                codec: "avc1.640028",
                bitrate: 1500000,
                width: 1280,
                height: 720,
                avc: avcConfig,
                framerate: 25,
                hardwareAcceleration: "no-preference",
                latencyMode: "realtime",
                bitrateMode: "constant",
                scalabilityMode: "L1T2"
              };
              _context2.next = 17;
              return Feature.isVideoEncodingConfigSupported(encoding_config);
            case 17:
              encodingResult = _context2.sent;
              isEncodingSupported = false;
              if (encodingResult) {
                isEncodingSupported = encodingResult.supported;
              }
              extradata_info = new Uint8Array([1, 100, 0, 31, 255, 225, 0, 14, 103, 100, 0, 51, 172, 27, 26, 17, 129, 64, 22, 201, 160, 16, 7, 0, 5, 104, 200, 66, 60, 48, 0, 5, 104, 82, 16, 207, 12, 0, 25, 104, 114, 16, 143, 24, 67, 17, 132, 56, 140, 84, 81, 8, 18, 22, 41, 3, 194, 98, 3, 5, 32, 122, 9, 140, 0, 5, 104, 36, 132, 51, 203, 0, 5, 104, 46, 132, 51, 195, 0, 25, 104, 54, 132, 35, 198, 16, 196, 97, 14, 35, 21, 20, 66, 4, 133, 138, 64, 240, 152, 128, 193, 72, 30, 130, 99, 0, 5, 104, 62, 132, 51, 203]);
              decoding_config = {
                codec: "avc1.640028",
                description: extradata_info,
                codedWidth: 1280,
                codedHeight: 720,
                hardwareAcceleration: "prefer-hardware"
              };
              _context2.next = 24;
              return Feature.isVideoDecodingConfigSupported(decoding_config);
            case 24:
              decodingResult = _context2.sent;
              isDecodingSupported = false;
              if (decodingResult) {
                isDecodingSupported = decodingResult.supported;
              }
              basicInfoEntries = [{
                index: BASIC_INFO_ATTR_INDEX.BROWSER_NAME,
                attr: "Browser Name",
                val: browserName,
                critical: false,
                affectedFeatures: []
              }, {
                index: BASIC_INFO_ATTR_INDEX.BROWSER_VERSION,
                attr: "Browser Version",
                val: browserVersion,
                critical: false,
                affectedFeatures: []
              }, {
                index: BASIC_INFO_ATTR_INDEX.OS_NAME,
                attr: "OS",
                val: osName,
                critical: false,
                affectedFeatures: []
              }, {
                index: BASIC_INFO_ATTR_INDEX.OS_VERSION,
                attr: "OS Version",
                val: osVersion,
                critical: false,
                affectedFeatures: []
              }, {
                index: BASIC_INFO_ATTR_INDEX.USER_AGENT,
                attr: "User Agent",
                val: userAgent,
                critical: false,
                affectedFeatures: []
              }, {
                index: BASIC_INFO_ATTR_INDEX.HW_CONCURRENCY,
                attr: "Hardware Concurrency",
                val: hardwareConcurrency,
                critical: true,
                affectedFeatures: [{
                  featureName: "Audio Denoise"
                }, {
                  featureName: "Virtual Background"
                }, {
                  featureName: "WebGPU Rendering"
                }, {
                  featureName: "Send HD Video"
                }, {
                  featureName: "Send FullHD Video"
                }]
              }, {
                index: BASIC_INFO_ATTR_INDEX.GPU_VENDOR,
                attr: "GPU Vendor",
                val: gpuVendor,
                critical: true,
                affectedFeatures: [{
                  featureName: "WebGPU Rendering"
                }, {
                  featureName: "Send HD Video"
                }]
              }, {
                index: BASIC_INFO_ATTR_INDEX.GPU_RENDERER,
                attr: "GPU Renderer",
                val: gpuRender,
                critical: false,
                affectedFeatures: []
              }, {
                index: BASIC_INFO_ATTR_INDEX.VIDEOFRAME,
                attr: "VideoFrame API",
                val: isVideoFrameSupported,
                critical: true,
                affectedFeatures: [{
                  featureName: "WebGPU Rendering"
                }, {
                  featureName: "Send HD Video"
                }]
              }, {
                index: BASIC_INFO_ATTR_INDEX.OFFSCREENCANVAS,
                attr: "OffscreenCanvas API",
                val: isOffscreenCanvasSupported,
                critical: true,
                affectedFeatures: [{
                  featureName: "WebGL Rendering"
                }, {
                  featureName: "WebGL2 Rendering"
                }, {
                  featureName: "WebGPU Rendering"
                }, {
                  featureName: "Virtual Background"
                }]
              }, {
                index: BASIC_INFO_ATTR_INDEX.SIMD,
                attr: "SIMD",
                val: isSimdSupported,
                critical: true,
                affectedFeatures: [{
                  featureName: "Audio Denoise"
                }, {
                  featureName: "Audio Echo Cancellation"
                }]
              }, {
                index: BASIC_INFO_ATTR_INDEX.WEB_CODEC,
                attr: "WebCodec",
                val: isEncodingSupported || isDecodingSupported,
                critical: true,
                affectedFeatures: [{
                  featureName: "Send HD Video"
                }]
              }, {
                index: BASIC_INFO_ATTR_INDEX.HW_ACC,
                attr: "Hardware Acceleration",
                val: Feature.isHardwareAccelerationEnabled(),
                critical: true,
                affectedFeatures: [{
                  featureName: "WebCodec"
                }, {
                  featureName: "Video Rendering"
                }]
              }, {
                index: BASIC_INFO_ATTR_INDEX.GRAPHICS_ACC,
                attr: "Graphics Acceleration",
                val: Feature.isGraphicsAccelerationEnabled(),
                critical: true,
                affectedFeatures: [{
                  featureName: "Video Rendering"
                }]
              }, {
                index: BASIC_INFO_ATTR_INDEX.MIN_BROWSER_VERSION,
                attr: "Suggested Minimum Browser Version",
                val: minVersion,
                critical: true,
                affectedFeatures: [{
                  featureName: "advised to upgrade to the version above the minimum version"
                }]
              }];
              return _context2.abrupt("return", basicInfoEntries);
            case 29:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function reportBasicInfo(_x) {
        return _reportBasicInfo.apply(this, arguments);
      }
      return reportBasicInfo;
    }())
  }]);
}();
function _genReportEntry(index) {
  var featureName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var isSupported = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var checkList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return {
    index: index,
    featureName: featureName,
    isSupported: isSupported,
    checkList: checkList
  };
}
function _reportAudioDenoise() {
  var checkList = [];
  var hwConcurrency = Hardware.getHardwareConcurrency(navigator);
  var isHwConcurrencySupported = hwConcurrency >= 2;
  var hwConcurrencyEntry = GEN_HW_CONCURRENCY_REQ(isHwConcurrencySupported, "2", hwConcurrency);
  checkList.push(hwConcurrencyEntry);
  var isMobileDevice = OS.isMobileDevice(navigator);
  var osReqEntry = GEN_OS_REQ(!isMobileDevice, "non-mobile", OS.getOSName(navigator));
  checkList.push(osReqEntry);
  var isSimdSupported = Feature.isSIMDSupported();
  var apiReqEntry = GEN_API_REQUIRED(isSimdSupported, "SIMD", "".concat(isSimdSupported));
  checkList.push(apiReqEntry);
  var isChrome = Browser.isChrome(navigator);
  var isFirefox = Browser.isFirefox(navigator);
  var isSafari = Browser.isSafari(navigator);
  var isBrowserSupported = isChrome.matched && isChrome.version >= 101 || isFirefox.matched && isFirefox.version >= 89 || isSafari.matched && isSafari.version >= 16;
  var browserVersionReqEntry = GEN_BROWSER_VERSION_REQ(isBrowserSupported, "Chrome >= 101; Firefox >= 89; Safari >= 16.4", Browser.getBrowserName(navigator), Browser.getBrowserVersion(navigator));
  checkList.push(browserVersionReqEntry);
  var reportEntry = _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.AUDIO_DENOISE, "Audio Denoise", isHwConcurrencySupported && !isMobileDevice && isSimdSupported && isBrowserSupported, checkList);
  return reportEntry;
}
function _reportAudioEchoCancellation() {
  var checkList = [];
  var isOsSupported = OS.isWindowsOS(navigator) || OS.isMacOS(navigator) || OS.isLinuxOS(navigator) || OS.isChromeOS(navigator) && Browser.getBrowserVersion(navigator) >= 116;
  var osReqEntry = GEN_OS_REQ(isOsSupported, "Windows/Mac/Linux/ChromeOS(116+)", OS.getOSName(navigator));
  checkList.push(osReqEntry);
  var isChrome = Browser.isChrome(navigator);
  var isFirefox = Browser.isFirefox(navigator);
  var isSafari = Browser.isSafari(navigator);
  var isBrowserSupported = isChrome.matched && isChrome.version >= 111 || isFirefox.matched || isSafari.matched;
  var browserVersionReqEntry = GEN_BROWSER_VERSION_REQ(isBrowserSupported, "supported browsers: Chrome >= 111; all Firefox; all Safari", Browser.getBrowserName(navigator), Browser.getBrowserVersion(navigator));
  checkList.push(browserVersionReqEntry);
  var isSimdSupported = Feature.isSIMDSupported();
  var apiReqEntry = GEN_API_REQUIRED(isSimdSupported, "SIMD", "".concat(isSimdSupported));
  checkList.push(apiReqEntry);
  var reportEntry = _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.AEC, "Audio Echo Cancellation", isOsSupported && isSimdSupported && isBrowserSupported, checkList);
  return reportEntry;
}
function _reportAudioStereo() {
  var checkList = [];
  var isOsSupported = OS.isWindowsOS(navigator) || OS.isMacOS(navigator) || OS.isLinuxOS(navigator) || OS.isChromeOS(navigator) && Browser.getBrowserVersion(navigator) >= 116;
  var osReqEntry = GEN_OS_REQ(isOsSupported, "Windows/Mac/Linux/ChromeOS(116+)", OS.getOSName(navigator));
  checkList.push(osReqEntry);
  var isChrome = Browser.isChrome(navigator);
  var isFirefox = Browser.isFirefox(navigator);
  var isSafari = Browser.isSafari(navigator);
  var isBrowserSupported = isChrome.matched && isChrome.version >= 111 || isFirefox.matched || isSafari.matched;
  var browserVersionReqEntry = GEN_BROWSER_VERSION_REQ(isBrowserSupported, "Chrome >= 111; all Firefox; all Safari", Browser.getBrowserName(navigator), Browser.getBrowserVersion(navigator));
  checkList.push(browserVersionReqEntry);
  var isStereoSupported = Feature.isStereoSupported(navigator);
  checkList.push(GEN_API_REQUIRED(isStereoSupported, "AudioStereo", "Stereo is not supported on Safari browser."));
  return _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.AUDIO_STEREO, "Audio Stereo", isOsSupported && isBrowserSupported && isStereoSupported, checkList);
}
function _reportVirtualBackgroundSupported() {
  var checkList = [];
  var hwConcurrency = Hardware.getHardwareConcurrency(navigator);
  var isHwConcurrencySupported = hwConcurrency > 2;
  var hwConcurrencyEntry = GEN_HW_CONCURRENCY_REQ(isHwConcurrencySupported, "2", "".concat(hwConcurrency));
  checkList.push(hwConcurrencyEntry);
  var isMobileDevice = OS.isMobileDevice(navigator);
  var osReqEntry = GEN_OS_REQ(!isMobileDevice, "non-mobile", OS.getOSName(navigator));
  checkList.push(osReqEntry);
  var isChrome = Browser.isChrome(navigator);
  var isEdge = Browser.isEdge(navigator);
  var isFirefox = Browser.isFirefox(navigator);
  var isSafari = Browser.isSafari(navigator);
  var isBrowserSupported = isChrome.matched && isChrome.version >= 91 || isEdge.matched && isEdge.version >= 91 || isFirefox.matched && isFirefox.version >= 89 || isSafari.matched && isSafari.version >= 17;
  var browserVersionReqEntry = GEN_BROWSER_VERSION_REQ(isBrowserSupported, "supported browsers: Chrome/Edge >= 91; Firefox >= 89; Safari >= 17", Browser.getBrowserName(navigator), Browser.getBrowserVersion(navigator));
  checkList.push(browserVersionReqEntry);
  var isOffscreenCanvasSupported = Feature.isOffscreenCanvasSupported();
  var apiReqEntry = GEN_API_REQUIRED(isOffscreenCanvasSupported, "OffscreenCanvas", "".concat(isOffscreenCanvasSupported));
  checkList.push(apiReqEntry);
  return _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.VIRTUAL_BACKGROUND, "Virtual Background", isHwConcurrencySupported && !isMobileDevice && isBrowserSupported && isOffscreenCanvasSupported, checkList);
}
function _reportVideoMaskSupported() {
  var checkList = [];
  var isMobileDevice = OS.isMobileDevice(navigator);
  var osReqEntry = GEN_OS_REQ(!isMobileDevice, "non-mobile", OS.getOSName(navigator));
  checkList.push(osReqEntry);
  return _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.VIDEO_MASK, "Video Mask", !isMobileDevice, checkList);
}
function _reportWebGPURenderingSupported() {
  var checkList = [];
  var isChrome = Browser.isChrome(navigator);
  var isOpera = Browser.isOpera(navigator);
  var isAndroidBrowser = Browser.isAndroidBrowser(navigator);
  var isBrowserSupported = isChrome.matched && isChrome.version >= 119 || isOpera && Browser.getOperaVersion(navigator) || isAndroidBrowser && isChrome.version >= 121;
  var browserVersionReqEntry = GEN_BROWSER_VERSION_REQ(isBrowserSupported, "supported browsers: Chrome/Edge >= 119; Opera >= 108; Android Chrome/Edge/Opera > 108", Browser.getBrowserName(navigator), Browser.getBrowserVersion(navigator));
  checkList.push(browserVersionReqEntry);
  var isOsSupported = OS.isMacOS(navigator) || OS.isWindowsOS(navigator) || OS.isChromeOS(navigator) || OS.isLinuxOS(navigator) || OS.isAndroid(navigator);
  var osReqEntry = GEN_OS_REQ(isOsSupported, "Mac/Windows/Linux/ChromeOS/Android", OS.getOSName(navigator));
  checkList.push(osReqEntry);
  return _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.WEBGPU, "WebGPU Feature", isBrowserSupported && isOsSupported, checkList);
}
function _reportVideoSendFullHDSupported() {
  var checkList = [];
  var hwConcurrency = Hardware.getHardwareConcurrency(navigator);
  var isHwConcurrencySupported = hwConcurrency >= 8;
  var hwConcurrencyEntry = GEN_HW_CONCURRENCY_REQ(isHwConcurrencySupported, "8", hwConcurrency);
  checkList.push(hwConcurrencyEntry);
  var isChrome = Browser.isChrome(navigator);
  var isEdge = Browser.isEdge(navigator);
  var isBrowserVersionMatched = isChrome.matched && isChrome.version >= 102 || isEdge.matched && isEdge.version >= 102;
  var browserVersionEntry = GEN_BROWSER_VERSION_REQ(isBrowserVersionMatched, "supported browsers: Chrome/Edge, version: >= 102", Browser.getBrowserName(navigator), Browser.getBrowserVersion(navigator));
  checkList.push(browserVersionEntry);
  return _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.VIDEO_SEND_FULL_HD, "Video Send FullHD", isHwConcurrencySupported && isBrowserVersionMatched, checkList);
}
function _reportVideoSendHDSupported() {
  return _reportVideoSendHDSupported2.apply(this, arguments);
}
function _reportVideoSendHDSupported2() {
  _reportVideoSendHDSupported2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var checkList, hwConcurrency, isHwConcurrencySupported, hwConcurrencyEntry, isIPhoneOrIPadOS, isIPadOS, osReqEntry, isAmdGraphic, isVp9Codec, isAmdHwConcurrencySupported, hwReqEntry, isVideoFrameSupported, vfApiReqEntry;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          checkList = [];
          hwConcurrency = Hardware.getHardwareConcurrency(navigator);
          isHwConcurrencySupported = hwConcurrency >= 8;
          hwConcurrencyEntry = GEN_HW_CONCURRENCY_REQ(isHwConcurrencySupported, "8", hwConcurrency);
          checkList.push(hwConcurrencyEntry);
          isIPhoneOrIPadOS = Browser.isiPhoneOriPadBrowser(navigator);
          isIPadOS = OS.isiPadOS(navigator);
          osReqEntry = GEN_OS_REQ(isIPhoneOrIPadOS || isIPadOS, "HD is supported on iPhone or iPad", "".concat(isIPhoneOrIPadOS || isIPadOS));
          checkList.push(osReqEntry);
          isAmdGraphic = Hardware.isAMDGraphic();
          _context3.next = 12;
          return Hardware.isVp9Codec(navigator);
        case 12:
          isVp9Codec = _context3.sent;
          isAmdHwConcurrencySupported = hwConcurrency >= 4;
          hwReqEntry = GEN_HARDWARE_REQ(isAmdGraphic && isVp9Codec && isAmdHwConcurrencySupported, "Graphics and Codec", "is AMD Graphics: ".concat(isAmdGraphic ? "yes" : "no", "\nis VP9 codec supported: ").concat(isVp9Codec ? "yes" : "no", "\nhas more 4 cores:").concat(isAmdHwConcurrencySupported ? "yes" : "no"), "Graphics and Codec", "Video HD is supported on AMD Graphics(with more than 4 cores and VP9 codec supported.");
          checkList.push(hwReqEntry);
          isVideoFrameSupported = Feature.isVideoFrameSupported();
          vfApiReqEntry = GEN_API_REQUIRED(isVideoFrameSupported, "VideoFrame", "".concat(isVideoFrameSupported));
          checkList.push(vfApiReqEntry);
          return _context3.abrupt("return", _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.VIDEO_SEND_HD, "Video Send HD", (isIPhoneOrIPadOS || isIPadOS) && isVideoFrameSupported || isHwConcurrencySupported || isAmdGraphic && isVp9Codec && isAmdHwConcurrencySupported, checkList));
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, this);
  }));
  return _reportVideoSendHDSupported2.apply(this, arguments);
}
function _report3x3DesktopGalleryViewSupported() {
  var checkList = [];
  var isOffscreenCanvasSupported = Feature.isOffscreenCanvasSupported();
  var offscreenCanvasReqEntry = GEN_API_REQUIRED(isOffscreenCanvasSupported, "OffscreenCanvas", "".concat(isOffscreenCanvasSupported));
  checkList.push(offscreenCanvasReqEntry);
  var isSabSupported = Feature.isSharedArrayBufferSupported();
  var sabReqEntry = GEN_API_REQUIRED(isSabSupported, "SharedArrayBuffer", "".concat(isSabSupported));
  checkList.push(sabReqEntry);
  return _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.DT_GALLERY_VIEW_3x3, "3x3 Desktop Gallery View", isOffscreenCanvasSupported && isSabSupported, checkList);
}
function _report5x5DesktopGalleryViewSupported() {
  var checkList = [];
  var hwConcurrency = Hardware.getHardwareConcurrency(navigator);
  var isHwConcurrencySupported = hwConcurrency >= 4;
  var hwConcurrencyEntry = GEN_HW_CONCURRENCY_REQ(isHwConcurrencySupported, "4", hwConcurrency);
  checkList.push(hwConcurrencyEntry);
  var isOffscreenCanvasSupported = Feature.isOffscreenCanvasSupported();
  var offscreenCanvasReqEntry = GEN_API_REQUIRED(isOffscreenCanvasSupported, "OffscreenCanvas", "".concat(isOffscreenCanvasSupported));
  checkList.push(offscreenCanvasReqEntry);
  var isSabSupported = Feature.isSharedArrayBufferSupported();
  var sabReqEntry = GEN_API_REQUIRED(isSabSupported, "SharedArrayBuffer", "".concat(isSabSupported));
  checkList.push(sabReqEntry);
  return _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.DT_GALLERY_VIEW_5x5, "5x5 Desktop Gallery View", isHwConcurrencySupported && isOffscreenCanvasSupported && isSabSupported, checkList);
}
function _reportScreenSharingSupported() {
  var checkList = [];
  var isMobileDevice = OS.isMobileDevice(navigator);
  var osReqEntry = GEN_OS_REQ(!isMobileDevice, "non-mobile OS required", OS.getOSName(navigator));
  checkList.push(osReqEntry);
  var isChrome = Browser.isChrome(navigator);
  var isFirefox = Browser.isFirefox(navigator);
  var isEdge = Browser.isEdge(navigator);
  var isOpera = Browser.isOpera(navigator);
  var isSafari = Browser.isSafari(navigator);
  var isBrowserSupported = isChrome.matched || isFirefox.matched || isEdge.matched || isOpera || isSafari.matched && isSafari.version >= 17;
  var browserVersionReqEntry = GEN_BROWSER_VERSION_REQ(isBrowserSupported, "supported browsers: Chrome/Edge/Opera/Firefox/Safari(>= 17)", Browser.getBrowserName(navigator), Browser.getBrowserVersion(navigator));
  checkList.push(browserVersionReqEntry);
  var isGdmApiSupported = !!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia);
  var getDisplayMediaApiReqEntry = GEN_API_REQUIRED(isGdmApiSupported, "getDisplayMedia", "".concat(isGdmApiSupported));
  checkList.push(getDisplayMediaApiReqEntry);
  var isOffscreenCanvasSupported = Feature.isOffscreenCanvasSupported();
  var offscreenCanvasApiReqEntry = GEN_API_REQUIRED(isOffscreenCanvasSupported, "OffscreenCanvas", "".concat(isOffscreenCanvasSupported));
  checkList.push(offscreenCanvasApiReqEntry);
  var _isBrowserSupported = isChrome.matched || isFirefox.matched || isEdge.matched || isOpera || isSafari.matched && isSafari.version >= 17 && isOffscreenCanvasSupported;
  return _assertClassBrand(_Reporter_brand, this, _genReportEntry).call(this, SUPPORTED_FEATURE_INDEX.SCREEN_SHARING, "Screen Sharing", !isMobileDevice && _isBrowserSupported && isGdmApiSupported, checkList);
}
function _getMiniumBrowserVersion(osName, browserName) {
  if (osName === "" || browserName === "") {
    return "0";
  }
  if (osName.toLowerCase().includes("windows")) {
    if (browserName === "chrome" || browserName === "edge" || browserName === "chromium based edge (dev or canary)") {
      return "102";
    } else if (browserName === "firefox") {
      return "105";
    }
  } else if (osName.toLowerCase().includes("mac")) {
    if (browserName === "chrome" || browserName === "edge" || browserName === "chromium based edge (dev or canary)") {
      return "102";
    } else if (browserName === "firefox") {
      return "105";
    } else if (browserName === "safari") {
      return "16.4";
    }
  } else if (osName.toLowerCase().includes("linux") || osName.toLowerCase().includes("ubuntu")) {
    if (browserName === "chrome" || browserName === "edge" || browserName === "chromium based edge (dev or canary)") {
      return "102";
    } else if (browserName === "firefox") {
      return "105";
    }
  } else if (osName.toLowerCase().includes("chrome os") || osName.toLowerCase().includes("chromium os")) {
    return "102";
  } else if (osName.toLowerCase().includes("android")) {
    if (browserName === "chrome" || browserName === "edge" || browserName === "chromium based edge (dev or canary)") {
      return "102";
    }
  } else if (osName.toLowerCase().includes("ios")) {
    if (browserName === "chrome" || browserName === "edge" || browserName === "chromium based edge (dev or canary)") {
      return "15.0";
    } else if (browserName === "safari") {
      return "15.0";
    }
  }
  return "0";
}

var _networkProberInst = /*#__PURE__*/new WeakMap();
var _diagnosticStatsListener = /*#__PURE__*/new WeakMap();
var _diagnosticResultListener = /*#__PURE__*/new WeakMap();
var _reporter = /*#__PURE__*/new WeakMap();
var _NetworkAgent_brand = /*#__PURE__*/new WeakSet();
var NetworkAgent = /*#__PURE__*/function () {
  function NetworkAgent() {
    _classCallCheck(this, NetworkAgent);
    _classPrivateMethodInitSpec(this, _NetworkAgent_brand);
    // an instance of the NetworkProberInst
    _classPrivateFieldInitSpec(this, _networkProberInst, null);
    _classPrivateFieldInitSpec(this, _diagnosticStatsListener, null);
    _classPrivateFieldInitSpec(this, _diagnosticResultListener, null);
    _classPrivateFieldInitSpec(this, _reporter, null);
    _classPrivateFieldSet2(_reporter, this, new Reporter());
  }
  return _createClass(NetworkAgent, [{
    key: "diagnose",
    value: function diagnose(jsUrl, wasmUrl, config, proberObserverProxy) {
      var domain = JWT_DOMAINS.PROD;
      if ('domain' in config) {
        if (_assertClassBrand(_NetworkAgent_brand, this, _isValidJWTDomain).call(this, config.domain)) {
          domain = config.domain;
        } else {
          console.error("Invalid jwt domain: ".concat(config.domain));
        }
      } else {
        console.warn("jwt domain is not configured in config, so use production domain.");
      }
      if (isDebugMode()) {
        console.log("jwt domain: ".concat(domain));
      }

      // save the new domain to config object again and start loading
      config.domain = domain;
      _assertClassBrand(_NetworkAgent_brand, this, _load).call(this, jsUrl, wasmUrl, config, proberObserverProxy);
    }
  }, {
    key: "setNetworkDiagnosticStatisticsListener",
    value: function setNetworkDiagnosticStatisticsListener(onReceivedListener, onErrorListener) {
      if (!_classPrivateFieldGet2(_diagnosticStatsListener, this)) {
        _classPrivateFieldSet2(_diagnosticStatsListener, this, listener);
      }
    }
  }, {
    key: "setNetworkDiagnosticResultListener",
    value: function setNetworkDiagnosticResultListener(listener) {
      if (!_classPrivateFieldGet2(_diagnosticResultListener, this)) {
        _classPrivateFieldSet2(_diagnosticResultListener, this, listener);
      }
    }
  }, {
    key: "queryRid",
    value: function queryRid() {
      return _classPrivateFieldGet2(_networkProberInst, this).getRid();
    }
  }]);
}();
function _load(jsUrl, wasmUrl, config, proberObserverProxy) {
  var _this = this;
  if (isDebugMode()) {
    console.log("[NetworkAgent#load()] jsUrl=".concat(jsUrl, " wasmUrl=").concat(wasmUrl, ", config=").concat(JSON.stringify(config)));
  }
  var script = document.createElement("script");
  script.src = jsUrl;
  script.onload = function () {
    console.log(Module);
    var probingDuration = DEF_PROBE_DURATION; // 2 mins
    if (config != undefined && config.probeDuration != undefined) {
      probingDuration = Math.max(DEF_PROBE_DURATION, config.probeDuration);
    }
    var connectTimeout = DEF_CONNECT_TIMEOUT;
    if (config != undefined && config.connectTimeout != undefined) {
      connectTimeout = config.connectTimeout;
    }
    var downlink_bandwidth = 0;
    var downlink_rtt = 0;
    var downlink_lossratio = 0;
    var downlink_max_continuous_loss_num = 0;
    var downlink_owdelay = 0;
    var downlink_jitter = 0;
    var downlink_bw_level = 255;
    var downlink_network_level = 255;
    var uplink_bandwidth = 0;
    var uplink_rtt = 0;
    var uplink_lossratio = 0;
    var uplink_max_continuous_loss_num = 0;
    var uplink_owdelay = 0;
    var uplink_jitter = 0;
    var uplink_bw_level = 255;
    var uplink_network_level = 255;
    var on_downlink_report = function on_downlink_report(params) {
      downlink_bandwidth = params.bandwidth;
      downlink_rtt = params.rtt;
      downlink_lossratio = params.loss_rate;
      downlink_max_continuous_loss_num = params.max_continuous_loss_num;
      params.rate;
      downlink_owdelay = params.max_owdelay;
      downlink_jitter = params.jitter;
      downlink_bw_level = params.bw_level;
      downlink_network_level = params.network_level;
      if (proberObserverProxy && proberObserverProxy.onStatsObserver) {
        proberObserverProxy.onStatsObserver(_assertClassBrand(_NetworkAgent_brand, _this, _genNetworkStatsEntry).call(_this, "downlink", downlink_bandwidth, downlink_rtt, downlink_lossratio, downlink_jitter, downlink_max_continuous_loss_num, downlink_owdelay, downlink_bw_level, downlink_network_level));
      }
    };
    var on_uplink_report = function on_uplink_report(params) {
      uplink_bandwidth = params.bandwidth;
      uplink_rtt = params.rtt;
      uplink_lossratio = params.loss_rate;
      uplink_max_continuous_loss_num = params.max_continuous_loss_num;
      params.rate;
      uplink_owdelay = params.max_owdelay;
      uplink_jitter = params.jitter;
      uplink_bw_level = params.bw_level;
      uplink_network_level = params.network_level;
      if (proberObserverProxy && proberObserverProxy.onStatsObserver) {
        proberObserverProxy.onStatsObserver(_assertClassBrand(_NetworkAgent_brand, _this, _genNetworkStatsEntry).call(_this, "uplink", uplink_bandwidth, uplink_rtt, uplink_lossratio, uplink_jitter, uplink_max_continuous_loss_num, uplink_owdelay, uplink_bw_level, uplink_network_level));
      }
    };
    if (!_classPrivateFieldGet2(_networkProberInst, _this)) {
      _classPrivateFieldSet2(_networkProberInst, _this, new NetworkProberInst({
        domain: config.domain,
        on_uplink_report: on_uplink_report,
        on_downlink_report: on_downlink_report,
        Module: Module
      }));
    }
    Module.onRuntimeInitialized = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            console.log("Module.onRuntimeInitialized!");

            // if set wasmUrl, need to locate it.
            if (wasmUrl != undefined && wasmUrl != "") {
              locateFile(wasmUrl);
            }
            _classPrivateFieldGet2(_networkProberInst, _this).connect(connectTimeout).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(isConnected) {
                var sendStopProbe, diagnosticReport;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!isConnected) {
                        _context2.next = 9;
                        break;
                      }
                      _context2.next = 3;
                      return _classPrivateFieldGet2(_networkProberInst, _this).startUplinkProbe();
                    case 3:
                      _context2.next = 5;
                      return _classPrivateFieldGet2(_networkProberInst, _this).startDownlinkProbe();
                    case 5:
                      sendStopProbe = /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                          var diagnosticReport;
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                console.log("stop probing...");
                                _context.next = 3;
                                return _classPrivateFieldGet2(_networkProberInst, _this).stopUplinkProbe();
                              case 3:
                                _context.next = 5;
                                return _classPrivateFieldGet2(_networkProberInst, _this).stopDownlinkProbe();
                              case 5:
                                if (!(proberObserverProxy && proberObserverProxy.onReportObserver)) {
                                  _context.next = 10;
                                  break;
                                }
                                _context.next = 8;
                                return _assertClassBrand(_NetworkAgent_brand, _this, _genDiagnosticReport).call(_this);
                              case 8:
                                diagnosticReport = _context.sent;
                                proberObserverProxy.onReportObserver(diagnosticReport);
                              case 10:
                                _classPrivateFieldGet2(_networkProberInst, _this).cleanupConnections();
                                _classPrivateFieldGet2(_networkProberInst, _this).killKeepAliveTimer();
                              case 12:
                              case "end":
                                return _context.stop();
                            }
                          }, _callee);
                        }));
                        return function sendStopProbe() {
                          return _ref3.apply(this, arguments);
                        };
                      }();
                      setTimeout(sendStopProbe, probingDuration);
                      _context2.next = 16;
                      break;
                    case 9:
                      if (!(proberObserverProxy && proberObserverProxy.onReportObserver)) {
                        _context2.next = 14;
                        break;
                      }
                      _context2.next = 12;
                      return _assertClassBrand(_NetworkAgent_brand, _this, _genDiagnosticReport).call(_this);
                    case 12:
                      diagnosticReport = _context2.sent;
                      proberObserverProxy.onReportObserver(diagnosticReport);
                    case 14:
                      _classPrivateFieldGet2(_networkProberInst, _this).cleanupConnections();
                      _classPrivateFieldGet2(_networkProberInst, _this).killKeepAliveTimer();
                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
  };
  document.body.appendChild(script);
}
function _genNetworkStatsEntry(path, bw, rtt, lossRate, jitter, max_continuous_loss_num, owdelay, bw_level, network_level) {
  return {
    type: NET_PROBING_DATA_TYPE.STATS,
    content: {
      path: path,
      statistics: {
        bandwidth: bw,
        rtt: rtt,
        lossRate: lossRate,
        jitter: jitter,
        max_continuous_loss_num: max_continuous_loss_num,
        owdelay: owdelay,
        bw_level: bw_level,
        network_level: network_level
      }
    }
  };
}
function _genDiagnosticReport() {
  return _genDiagnosticReport2.apply(this, arguments);
}
function _genDiagnosticReport2() {
  _genDiagnosticReport2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!_classPrivateFieldGet2(_networkProberInst, this)) {
            _context4.next = 11;
            break;
          }
          _context4.t0 = NET_PROBING_DATA_TYPE.REPORT;
          _context4.t1 = _classPrivateFieldGet2(_networkProberInst, this).getNetworkDiagnosticReport();
          _context4.next = 5;
          return _classPrivateFieldGet2(_reporter, this).reportBasicInfo(navigator);
        case 5:
          _context4.t2 = _context4.sent;
          _context4.next = 8;
          return _classPrivateFieldGet2(_reporter, this).reportFeatures();
        case 8:
          _context4.t3 = _context4.sent;
          _context4.t4 = {
            networkDiagnosticReport: _context4.t1,
            basicInfo: _context4.t2,
            supportedFeatures: _context4.t3
          };
          return _context4.abrupt("return", {
            type: _context4.t0,
            content: _context4.t4
          });
        case 11:
          return _context4.abrupt("return", null);
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this);
  }));
  return _genDiagnosticReport2.apply(this, arguments);
}
function _isValidJWTDomain(domain) {
  return domain === JWT_DOMAINS.PROD || domain === JWT_DOMAINS.GO || domain === JWT_DOMAINS.DEV || domain === JWT_DOMAINS.DEV_EP || domain === JWT_DOMAINS.DEV_INT;
}

var _handle$2 = /*#__PURE__*/new WeakMap();
var _isPreviewStarted = /*#__PURE__*/new WeakMap();
var _WebGLRenderer_brand = /*#__PURE__*/new WeakSet();
var WebGLRenderer = /*#__PURE__*/function () {
  function WebGLRenderer() {
    _classCallCheck(this, WebGLRenderer);
    _classPrivateMethodInitSpec(this, _WebGLRenderer_brand);
    _classPrivateFieldInitSpec(this, _handle$2, -1);
    _classPrivateFieldInitSpec(this, _isPreviewStarted, false);
  }
  return _createClass(WebGLRenderer, [{
    key: "preview",
    value: function preview(source, target, viewport) {
      var glContext = target.getContext("webgl");
      var program = _assertClassBrand(_WebGLRenderer_brand, this, _createShaderProgram$1).call(this, glContext, WebGLRenderer.VERTEX_SHADER, WebGLRenderer.FRAGMENT_SHADER);
      var positionAttributeLocation = glContext.getAttribLocation(program, "position");
      var videoTextureLocation = glContext.getUniformLocation(program, "videoTexture");
      glContext.useProgram(program);
      var positionBuffer = _assertClassBrand(_WebGLRenderer_brand, this, _createBuffer$1).call(this, glContext);
      glContext.bindBuffer(glContext.ARRAY_BUFFER, positionBuffer);
      glContext.enableVertexAttribArray(positionAttributeLocation);
      glContext.vertexAttribPointer(positionAttributeLocation, 2, glContext.FLOAT, false, 0, 0);
      this.frame({
        glContext: glContext,
        program: program,
        positionAttributeLocation: positionAttributeLocation,
        textureLocation: videoTextureLocation,
        positionBuffer: positionBuffer,
        viewport: viewport,
        source: source
      });
      _classPrivateFieldSet2(_isPreviewStarted, this, true);
    }
  }, {
    key: "stopPreview",
    value: function stopPreview() {
      _classPrivateFieldSet2(_isPreviewStarted, this, false);
      if (_classPrivateFieldGet2(_handle$2, this) != -1) {
        cancelAnimationFrame(_classPrivateFieldGet2(_handle$2, this));
      }
    }
  }, {
    key: "frame",
    value: function frame(resBundle) {
      var _this = this;
      var gl = resBundle.glContext;
      resBundle.glContext.clearColor(0.0, 0.0, 0.0, 1.0);
      resBundle.glContext.clear(resBundle.glContext.COLOR_BUFFER_BIT);
      resBundle.glContext.viewport(resBundle.viewport.x, resBundle.viewport.y, resBundle.viewport.w, resBundle.viewport.h);
      resBundle.glContext.enable(resBundle.glContext.DEPTH_TEST);
      var texture = resBundle.glContext.createTexture();
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(resBundle.textureLocation, 0);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, resBundle.source);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      resBundle.glContext.drawArrays(resBundle.glContext.TRIANGLE_STRIP, 0, 4);
      _classPrivateFieldSet2(_handle$2, this, requestAnimationFrame(function () {
        return _this.frame(resBundle);
      }));
    }
  }]);
}();
function _createShaderProgram$1(gl, vertexShaderSource, fragmentShaderSource) {
  var vertexShader = _assertClassBrand(_WebGLRenderer_brand, this, _createShader$1).call(this, gl, gl.VERTEX_SHADER, vertexShaderSource);
  var fragmentShader = _assertClassBrand(_WebGLRenderer_brand, this, _createShader$1).call(this, gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  return program;
}
function _createShader$1(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}
function _createBuffer$1(gl) {
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return buffer;
}
_defineProperty(WebGLRenderer, "VERTEX_SHADER", /* glsl */"\n    attribute vec2 position;\n    varying vec2 texCoord;\n\n    void main() {\n      texCoord = (position + 1.0) * 0.5;\n      // gl_Position = vec4(position, 0.0, 1.0);\n      gl_Position = vec4(position.x, -position.y, 0.0, 1.0);\n    }\n  ");
_defineProperty(WebGLRenderer, "FRAGMENT_SHADER", /* glsl */"\n    precision mediump float;\n    varying vec2 texCoord;\n    uniform sampler2D videoTexture;\n\n    void main() {\n      gl_FragColor = texture2D(videoTexture, texCoord);\n    }\n  ");

var _handle$1 = /*#__PURE__*/new WeakMap();
var _WebGL2Renderer_brand = /*#__PURE__*/new WeakSet();
var WebGL2Renderer = /*#__PURE__*/function () {
  function WebGL2Renderer() {
    _classCallCheck(this, WebGL2Renderer);
    _classPrivateMethodInitSpec(this, _WebGL2Renderer_brand);
    _classPrivateFieldInitSpec(this, _handle$1, -1);
  }
  return _createClass(WebGL2Renderer, [{
    key: "preview",
    value: function preview(source, target, viewport) {
      var glContext = target.getContext("webgl2");
      var program = _assertClassBrand(_WebGL2Renderer_brand, this, _createShaderProgram).call(this, glContext, WebGL2Renderer.VERTEX_SHADER, WebGL2Renderer.FRAGMENT_SHADER);
      var positionAttributeLocation = glContext.getAttribLocation(program, "position");
      var videoTextureLocation = glContext.getUniformLocation(program, "videoTexture");
      glContext.useProgram(program);
      var positionBuffer = _assertClassBrand(_WebGL2Renderer_brand, this, _createBuffer).call(this, glContext);
      glContext.bindBuffer(glContext.ARRAY_BUFFER, positionBuffer);
      glContext.enableVertexAttribArray(positionAttributeLocation);
      glContext.vertexAttribPointer(positionAttributeLocation, 2, glContext.FLOAT, false, 0, 0);
      this.frame({
        glContext: glContext,
        program: program,
        positionAttributeLocation: positionAttributeLocation,
        textureLocation: videoTextureLocation,
        positionBuffer: positionBuffer,
        viewport: viewport,
        source: source
      });
    }
  }, {
    key: "stopPreview",
    value: function stopPreview() {
      if (_classPrivateFieldGet2(_handle$1, this) != -1) {
        cancelAnimationFrame(_classPrivateFieldGet2(_handle$1, this));
      }
    }
  }, {
    key: "frame",
    value: function frame(resBundle) {
      var _this = this;
      var gl = resBundle.glContext;
      resBundle.glContext.clearColor(0.0, 0.0, 0.0, 1.0);
      resBundle.glContext.clear(resBundle.glContext.COLOR_BUFFER_BIT);
      resBundle.glContext.viewport(resBundle.viewport.x, resBundle.viewport.y, resBundle.viewport.w, resBundle.viewport.h);
      resBundle.glContext.enable(resBundle.glContext.DEPTH_TEST);
      var texture = resBundle.glContext.createTexture();
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(resBundle.textureLocation, 0);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, resBundle.source);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      resBundle.glContext.drawArrays(resBundle.glContext.TRIANGLE_STRIP, 0, 4);
      _classPrivateFieldSet2(_handle$1, this, requestAnimationFrame(function () {
        return _this.frame(resBundle);
      }));
    }
  }]);
}();
function _createShaderProgram(gl, vertexShaderSource, fragmentShaderSource) {
  var vertexShader = _assertClassBrand(_WebGL2Renderer_brand, this, _createShader).call(this, gl, gl.VERTEX_SHADER, vertexShaderSource);
  var fragmentShader = _assertClassBrand(_WebGL2Renderer_brand, this, _createShader).call(this, gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  return program;
}
function _createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}
function _createBuffer(gl) {
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return buffer;
}
_defineProperty(WebGL2Renderer, "VERTEX_SHADER", /* glsl */"#version 300 es\n    in vec2 position;\n    out vec2 texCoord;\n\n    void main() {\n      texCoord = (position + 1.0) * 0.5;\n      gl_Position = vec4(position.x, -position.y, 0.0, 1.0);\n    }\n  ");
_defineProperty(WebGL2Renderer, "FRAGMENT_SHADER", /* glsl */"#version 300 es\n    precision mediump float;\n    in vec2 texCoord;\n    uniform sampler2D videoTexture;\n    out vec4 fragColor;\n\n    void main() {\n      fragColor = texture(videoTexture, texCoord);\n    }\n  ");

var _handle = /*#__PURE__*/new WeakMap();
var WebGPURenderer = /*#__PURE__*/function () {
  function WebGPURenderer() {
    _classCallCheck(this, WebGPURenderer);
    _classPrivateFieldInitSpec(this, _handle, -1);
  }
  return _createClass(WebGPURenderer, [{
    key: "preview",
    value: function () {
      var _preview = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(source, target, viewport) {
        var adapter, device, format, ctx, sampler, pipeline, resBundle;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!source || !target || !viewport)) {
                _context.next = 2;
                break;
              }
              throw new Error("Invalid arguments: source, target, or viewport is missing");
            case 2:
              _context.next = 4;
              return navigator.gpu.requestAdapter();
            case 4:
              adapter = _context.sent;
              _context.next = 7;
              return adapter.requestDevice();
            case 7:
              device = _context.sent;
              format = navigator.gpu.getPreferredCanvasFormat();
              ctx = target.getContext("webgpu");
              ctx.configure({
                device: device,
                format: format,
                alphaMode: "opaque"
              });
              sampler = device.createSampler({});
              pipeline = device.createRenderPipeline({
                layout: "auto",
                vertex: {
                  module: device.createShaderModule({
                    code: WebGPURenderer.VERTEX_SHADER
                  }),
                  entryPoint: "vert_main"
                },
                fragment: {
                  module: device.createShaderModule({
                    code: WebGPURenderer.FRAG_SHADER_VF
                  }),
                  entryPoint: "frag_main",
                  targets: [{
                    format: format
                  }]
                },
                primitive: {
                  topology: "triangle-list"
                }
              });
              resBundle = {
                device: device,
                context: ctx,
                pipeline: pipeline,
                sampler: sampler,
                source: source,
                viewport: viewport
              };
              this.frame(resBundle);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function preview(_x, _x2, _x3) {
        return _preview.apply(this, arguments);
      }
      return preview;
    }()
  }, {
    key: "stopPreview",
    value: function stopPreview() {
      if (_classPrivateFieldGet2(_handle, this) != -1) {
        cancelAnimationFrame(_classPrivateFieldGet2(_handle, this));
      }
    }
  }, {
    key: "frame",
    value: function frame(resBundle) {
      var _this = this;
      var commandEncoder = resBundle.device.createCommandEncoder();
      var textureView = resBundle.context.getCurrentTexture().createView();
      var renderPassDescriptor = {
        colorAttachments: [{
          view: textureView,
          loadOp: "clear",
          storeOp: "store"
        }]
      };
      var passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
      passEncoder.setPipeline(resBundle.pipeline);
      var uniformBindGroup = resBundle.device.createBindGroup({
        layout: resBundle.pipeline.getBindGroupLayout(0),
        entries: [{
          binding: 0,
          resource: resBundle.sampler
        }, {
          binding: 1,
          resource: resBundle.device.importExternalTexture({
            source: resBundle.source
          })
        }]
      });
      passEncoder.setBindGroup(0, uniformBindGroup);
      passEncoder.setViewport(resBundle.viewport.x, resBundle.viewport.y, resBundle.viewport.w, resBundle.viewport.h, 0, 1);
      passEncoder.draw(6);
      passEncoder.end();
      resBundle.device.queue.submit([commandEncoder.finish()]);
      _classPrivateFieldSet2(_handle, this, requestAnimationFrame(function () {
        return _this.frame(resBundle);
      }));
    }
  }]);
}();
// Generates two triangles covering the whole canvas.
_defineProperty(WebGPURenderer, "VERTEX_SHADER", /* wgsl */"\n    struct VertexOutput {\n      @builtin(position) Position: vec4<f32>,\n      @location(0) uv: vec2<f32>,\n    }\n\n    @vertex\n    fn vert_main(@builtin(vertex_index) VertexIndex: u32) -> VertexOutput {\n      var pos = array<vec2<f32>, 6>(\n        vec2<f32>( 1.0,  1.0),\n        vec2<f32>( 1.0, -1.0),\n        vec2<f32>(-1.0, -1.0),\n        vec2<f32>( 1.0,  1.0),\n        vec2<f32>(-1.0, -1.0),\n        vec2<f32>(-1.0,  1.0)\n      );\n\n      var uv = array<vec2<f32>, 6>(\n        vec2<f32>(1.0, 0.0),\n        vec2<f32>(1.0, 1.0),\n        vec2<f32>(0.0, 1.0),\n        vec2<f32>(1.0, 0.0),\n        vec2<f32>(0.0, 1.0),\n        vec2<f32>(0.0, 0.0)\n      );\n\n      var output : VertexOutput;\n      output.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n      output.uv = uv[VertexIndex];\n      return output;\n    }\n  ");
// Samples the external texture using generated UVs.
_defineProperty(WebGPURenderer, "FRAG_SHADER_VF", /* wgsl */"\n    @group(0) @binding(0) var mySampler: sampler;\n    @group(0) @binding(1) var vfTexture: texture_external;\n\n    @fragment\n    fn frag_main(@location(0) uv : vec2<f32>) -> @location(0) vec4<f32> {\n      var color0: vec4<f32> = textureSampleBaseClampToEdge(vfTexture, mySampler, uv);\n      return color0;\n    }\n  ");

var _mRenderer = /*#__PURE__*/new WeakMap();
var RenderersProxy = /*#__PURE__*/function () {
  function RenderersProxy() {
    _classCallCheck(this, RenderersProxy);
    _classPrivateFieldInitSpec(this, _mRenderer, null);
  }
  return _createClass(RenderersProxy, [{
    key: "preview",
    value: function preview(type, source, target, viewport) {
      var renderer = null;
      if (type == 1) {
        // video-tag
        target.srcObject = source;
      } else if (type == 2) {
        // webgl
        renderer = new WebGLRenderer();
        renderer.preview(source, target, viewport);
      } else if (type == 3) {
        // webgl2
        renderer = new WebGL2Renderer();
        renderer.preview(source, target, viewport);
      } else if (type == 4) {
        // webgpu
        renderer = new WebGPURenderer();
        renderer.preview(source, target, viewport);
      }

      // save renderer
      _classPrivateFieldSet2(_mRenderer, this, renderer);
    }
  }, {
    key: "stopPreview",
    value: function stopPreview(options) {
      if (!options || !options.stream) {
        console.error("stopPreview() options is invalid: ".concat(options));
        return false;
      }
      var tracks = options.stream.getTracks();
      if (!tracks || tracks.length === 0) {
        console.error("stopPreview() no available tracks to stop.");
        return false;
      }
      tracks.forEach(function (track) {
        track.stop();
        options.stream.removeTrack(track);
      });
      if (_classPrivateFieldGet2(_mRenderer, this)) {
        _classPrivateFieldGet2(_mRenderer, this).stopPreview();
      }
      _classPrivateFieldSet2(_mRenderer, this, null);
      options.stream = null;
      return true;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!RenderersProxy.instance) {
        RenderersProxy.instance = new RenderersProxy();
      }
      return RenderersProxy.instance;
    }
  }]);
}();

/**
 * Prober provides the capabilities of requesting the media permissions and devices,
 * diagnosing the devices and network, and reporting the diagnostic result, etc. It's easy
 * to create an instance of Prober class and use it to implement your own probing requirements.
 *
 * @since 1.0.0
 * @author clever.su@zoom.us
 *
 * @example
 * import { Prober } from "@zoom/probesdk";
 * const prober = new Prober();
 * prober.diagnoseVideo(constraints, options);
 */
var _networkAgent = /*#__PURE__*/new WeakMap();
var _Prober_brand = /*#__PURE__*/new WeakSet();
var Prober = /*#__PURE__*/function () {
  function Prober() {
    _classCallCheck(this, Prober);
    _classPrivateMethodInitSpec(this, _Prober_brand);
    // the agent of network prober
    _classPrivateFieldInitSpec(this, _networkAgent, new NetworkAgent());
  }

  /**
   * Requests media device permission asynchronously.
   *
   * @async
   * @function requestMediaDevicePermission
   * @param {MediaStreamConstraints} constraints The constraints for the requested media stream.
   * @returns {Promise<{stream: MediaStream, error: Error}>} A promise that resolves to an object containing either the requested media stream or an error object.
   * The error object may be an instance of {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException|DOMException} or other standard system exceptions.
   * @throws {Error} If the constraint argument is undefined.
   *
   * @example
   * import { Prober } from "@zoom/probesdk";
   * const prober = new Prober();
   * function getMediaDevices() {
   *  prober.requestMediaDevices().then((result) => {
   *    console.log(`error:${result.error}, devices=${result.devices}`);
   *  });
   * }
   */
  return _createClass(Prober, [{
    key: "requestMediaDevicePermission",
    value: (function () {
      var _requestMediaDevicePermission = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(constraints) {
        var mediaPmsResult;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(constraints == undefined)) {
                _context.next = 2;
                break;
              }
              throw new Error("Invalid argument");
            case 2:
              mediaPmsResult = {};
              _context.prev = 3;
              _context.next = 6;
              return navigator.mediaDevices.getUserMedia(constraints);
            case 6:
              mediaPmsResult.stream = _context.sent;
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](3);
              mediaPmsResult.error = _context.t0;
            case 12:
              return _context.abrupt("return", mediaPmsResult);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 9]]);
      }));
      function requestMediaDevicePermission(_x) {
        return _requestMediaDevicePermission.apply(this, arguments);
      }
      return requestMediaDevicePermission;
    }()
    /**
     * Releases the resources associated with a given MediaStream.
     *
     * This function stops all tracks in the provided MediaStream to release
     * the hardware resources (e.g., camera, microphone) and removes them
     * from the stream. It ensures that no resources are left in use after
     * the MediaStream is no longer needed.
     *
     * Note that ProbeSDK is not responsible for setting the {@link stream} you pass to null.
     * So, the caller should maintain its lifecycle.
     *
     * @function releaseMediaStream
     * @param {MediaStream} stream - The MediaStream object to release.
     * @returns {boolean} - Returns `true` if the stream was successfully released,
     *                      or `false` if the input was invalid (e.g., null or undefined).
     *
     * @example
     * const stream = await navigator.mediaDevices.getUserMedia({ video: true });
     * let result = releaseMediaStream(stream);
     * console.log(result);
     */
    )
  }, {
    key: "releaseMediaStream",
    value: function releaseMediaStream(stream) {
      if (!stream) {
        return false; // Return false if the input stream is null or undefined
      }
      var tracks = stream.getTracks(); // Get all tracks from the MediaStream
      if (!tracks || tracks.length === 0) {
        console.error("releaseMediaStream() no available tracks to stop."); // Log an error if there are no tracks
      }
      tracks.forEach(function (track) {
        track.stop(); // Stop each track to release hardware resources
        stream.removeTrack(track); // Remove the track from the MediaStream
      });
      return true; // Indicate successful release of the stream
    }

    /**
     * An object, indicates an error generated by ProberSDK.
     *
     * @typedef {object} PSDKError
     * @property {number} code an error code defined by {@link ERR_CODE}.
     * @property {string} message the error message.
     */

    /**
     * Requests the media devices asynchronously.
     *
     * This function checks if the `enumerateDevices` method is supported the browser's `navigator.mediaDevices` object.
     * If supported, it retrieves a list of available media devices. If not, it returns an object of {@link PSDKError}
     * indicating the lack of support.
     *
     * @async
     * @function requestMediaDevices
     * @returns {Promise<{devices: MediaDeviceInfo[], error: {code: number, message: string}}>} a promise that resolves to an object containing an array of available media devices or an error object.
     * The error object may be an instance of {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException|DOMException} or other standard system exceptions.
     * @example
     * prober.requestMediaDevices().then((result) => {
     *  console.log(`error:${result.error}, devices=${result.devices}`);
     * });
     */
  }, {
    key: "requestMediaDevices",
    value: (function () {
      var _requestMediaDevices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _navigator$mediaDevic;
        var mdResult, devices;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              mdResult = {};
              if ((_navigator$mediaDevic = navigator.mediaDevices) !== null && _navigator$mediaDevic !== void 0 && _navigator$mediaDevic.enumerateDevices) {
                _context2.next = 5;
                break;
              }
              mdResult.error = {
                code: ERR_CODE.API_NOT_SUPPORTED,
                message: "enumerateDevices not supported"
              };
              _context2.next = 15;
              break;
            case 5:
              _context2.prev = 5;
              _context2.next = 8;
              return navigator.mediaDevices.enumerateDevices();
            case 8:
              devices = _context2.sent;
              mdResult.devices = devices;
              _context2.next = 15;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](5);
              mdResult.error = _context2.t0;
            case 15:
              return _context2.abrupt("return", mdResult);
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[5, 12]]);
      }));
      function requestMediaDevices() {
        return _requestMediaDevices.apply(this, arguments);
      }
      return requestMediaDevices;
    }()
    /**
     * An object represents the result of diagnostics.
     *
     * @typedef {object} DiagnosticResult
     * @property {number} code an error code defined by {@link ERR_CODE}.
     * @property {string} message an error message.
     */
    /**
     * Performs audio diagnostic by recording audio from an input device and playing it through an output device.
     * Diagnose any audio input/output devices by passing the constraints of the selected devices.
     * Adjust how long you record the audio by setting the {@link duration} parameter. Specify the mime type of how
     * to record the audio by setting the {@link mimeType} parameter.
     *
     * @function diagnoseAudio
     * @param {MediaStreamConstraints} inputConstraints The constraints for capturing audio from input devices.
     * @param {MediaStreamConstraints} outputConstraints The constraints for playing audio through output devices.
     * @param {number} [duration=0] The duration of the recording in milliseconds. If 0, 5000 milliseconds is used as default value.
     * @param {string|undefined} [mimeType=''] The MIME type of the recorded audio. Default is an empty string. If pass an empty string or undefined,
     * the mime type 'audio/webm;codecs=opus' will be used as the default value.
     * @returns {DiagnosticResult} An object indicating the result of the audio diagnostic.
     * @throws {Error} If any parameters are invalid, a customized Error will be thrown.
     * The standard exceptions, like {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException|DOMException}, will be thrown if are captured while recording and playing.
     *
     * @example
     * const audioInputConstraint = {
     *  audio: { deviceId: 'default' },
     *  video: false,
     * };
     *
     * const audioOutputConstraint = {
     *  audio: { deviceId: 'xxxxxxxxxxxxxxxx' },
     *  video: false,
     * };
     *
     * try {
     *  const diagnoseResult = prober.diagnoseAudio(audioInputConstraint, audioOutputConstraint, 0, '');
     *  console.log(diagnoseResult);
     * } catch (e) {
     *  console.error(e);
     * }
     */
    )
  }, {
    key: "diagnoseAudio",
    value: function diagnoseAudio(inputConstraints, outputConstraints) {
      var _this = this;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var mimeType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      if (inputConstraints == undefined || outputConstraints == undefined || duration < 0) {
        throw new Error("Invalid arguments. inputConstraint:".concat(inputConstraints, ", outputConstraint:").concat(outputConstraints, ", duration:").concat(duration));
      }
      var _mimeType = mimeType;
      if (_mimeType == "" || _mimeType == undefined) {
        _mimeType = "audio/webm;codecs=opus";
        var isMimeTypeSupported = Hardware.isMimeTypeSupported(_mimeType);
        if (!isMimeTypeSupported) {
          console.log("diagnoseAudio() mimeType(".concat(_mimeType, ") is not supported."));
          _mimeType = "audio/mp4";
          isMimeTypeSupported = Hardware.isMimeTypeSupported(_mimeType);
          if (!isMimeTypeSupported) {
            console.log("diagnoseAudio() mimeType(".concat(_mimeType, ") is not supported."));
            _mimeType = "audio/mp3";
            isMimeTypeSupported = Hardware.isMimeTypeSupported(_mimeType);
            if (!isMimeTypeSupported) {
              console.log("diagnoseAudio() mimeType(".concat(_mimeType, ") is not supported."));
              throw new Error("diagnoseAudio() no supported mimeType available!");
            }
          }
        }
      }
      navigator.mediaDevices.getUserMedia(inputConstraints).then(function (stream) {
        var mediaRecorder = new MediaRecorder(stream, {
          mimeType: _mimeType
        });
        var audioOutputDeviceId = outputConstraints.audio.deviceId;
        var audioContext = new AudioContext({
          sinkId: audioOutputDeviceId
        });
        var recordedBlobs = [];
        mediaRecorder.ondataavailable = function (e) {
          if (e.data.size > 0) {
            recordedBlobs.push(e.data);
          }
        };
        mediaRecorder.start();
        setTimeout(function () {
          mediaRecorder.stop();
        }, duration);
        mediaRecorder.addEventListener("stop", function () {
          var blob = new Blob(recordedBlobs, {
            type: _mimeType
          });
          if (Browser.isSafari(navigator).matched) {
            _assertClassBrand(_Prober_brand, _this, _playAudioWithAudioContext).call(_this, audioContext, blob).then(function () {
              console.log("audio recording is playing on Safari.");
            }).catch(function (e) {
              console.error("error in playing on Safari. error: ".concat(e));
            });
          } else {
            var url = URL.createObjectURL(blob);
            var audio = new Audio(url);
            var source = audioContext.createMediaElementSource(audio);
            source.connect(audioContext.destination);
            audio.play();
          }
        });
      }).catch(function (e) {
        throw e; // external caller handles the errors
      });
      return {
        code: ERR_CODE.OK,
        message: "audio diagnostic is started!"
      };
    }

    /**
     * An object represents the configuration of network diagnostic.
     *
     * @typedef {object}  NetworkDiagnosticConfig
     * @property {number} connectTimeout the timeout of the connections established in a network diagnostic. If not set, the default value is {@link DEF_CONNECT_TIMEOUT}.
     * @property {number} probeDuration the duration of how long a round of a network diagnostic. If not set, the default value is {@link DEF_PROBE_DURATION}. If set, the maximum value between {@link DEF_PROBE_DURATION} and {@link probeDuration} is used as the final probing duration.
     * @property {string} domain the domain of the prober server. Provide your own domain or use the default domain provided by Zoom if not set.
     */

    /**
     * An object describes how to render video streams.
     *
     * @typedef {object} RendererOptions
     * @property {number} rendererType the renderer type, refer to the values of {@link RENDERER_TYPE}.
     * @property {HTMLMediaElement|HTMLCanvasElement|OffscreenCanvas} target where to render a video stream.
     * @property {MediaStream} stream a stream that contains a specified list of tracks of video. It's optional but necessary when stopping to diagnose a video device.
     */

    /**
     * Diagnose video device like camera and show the result on a renderable object.
     * You can select a camera by setting {@link constraints} and different renderer type by setting the parameter {@link options}.
     * Four renderer types are supported by ProbeSDK. Please refer to the documentation of {@link RENDERER_TYPE}.
     *
     * Once the video diagnostic is launched, a {@link MediaStream} object is created and appended to the {@link RendererOptions} as an extended field `stream`.
     * It is optional but necessary when you want to stop the video diagnostic, if not stopping it, the camera capturing currently is always working.
     *
     * Different renderer types require different {@link RendererOptions}:
     * - VIDEO_TAG requires a video element({@link HTMLMediaElement})
     * - WebGL/WebGL2/WebGPU requires a canvas({@link HTMLCanvasElement}) or an OffscreenCanvas({@link OffscreenCanvas})
     *
     * @async
     * @function diagnoseVideo
     * @param {MediaStreamConstraints} constraints A camera constraints which is diagnosed.
     * @param {RendererOptions} options The options of how to render a video stream, includes the a renderer type and a target where to render.
     * @returns {DiagnosticResult} Indicates the result of the video diagnostic.
     * @throws {Error} If any parameters are invalid, a customized Error will be thrown, or some standard exceptions like {@link DOMException} will be thrown during the diagnostic
     *
     * @example
     * // for video tag case, you can:
     * // in your html file, to define a video tag
     * <video id="local_preview_video" width="640" height="480" style="background: gainsboro;" autoplay hidden></video>
     *
     * const preview_video = document.getElementById('local_preview_video');
     * const constraints = {
     *  video: {
     *    width: preview_video.width,
     *    height: preview_video.height,
     *    deviceId: document.getElementById("camera_list").value, // need a deviceId of a camera
     *  },
     * };
     *
     * const options = {
     *   rendererType: 1, // 1 for video_tag
     *   target: preview_video,
     * };
     *
     * const diagnosticResult = await prober.diagnoseVideo(constraints, options);
     * console.log(diagnosticResult);
     *
     * // for WebGL/WebGL2/WebGPU case, you can:
     * // in your html file, to define a canvas
     * <canvas id="local_preview_canvas" width="640" height="480"></canvas></br>
     *
     * const preview_canvas = document.getElementById('local_preview_canvas');
     * const constraints = {
     *   video: {
     *     width: preview_canvas.width,
     *     height: preview_canvas.height,
     *     deviceId: document.getElementById("camera_list").value, // need a deviceId of a camera
     *   },
     * };
     *
     * const options = {
     *   rendererType: 2, // WebGL
     *   target: preview_canvas,
     * };
     *
     * const diagnosticResult = await prober.diagnoseVideo(constraints, options);
     * console.log(diagnosticResult);
     */
  }, {
    key: "diagnoseVideo",
    value: (function () {
      var _diagnoseVideo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(constraints, options) {
        var diagnosticResult, isRendererTypeSupported, isTypeCheckPass, areTypesCheckPass, rendersProxy;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(constraints == undefined || options == undefined)) {
                _context4.next = 2;
                break;
              }
              throw new Error("Invalid arguments. constraints:".concat(constraints, ", options:").concat(options));
            case 2:
              diagnosticResult = {
                code: ERR_CODE.OK,
                message: "video diagnostic is started!"
              };
              _context4.next = 5;
              return _assertClassBrand(_Prober_brand, this, _isRendererTypeSupported).call(this, options.rendererType);
            case 5:
              isRendererTypeSupported = _context4.sent;
              if (isRendererTypeSupported) {
                _context4.next = 10;
                break;
              }
              diagnosticResult.code = ERR_CODE.API_NOT_SUPPORTED;
              diagnosticResult.message = "Not Supported renderer type. (arg)options.rendererType:".concat(options.rendererType);
              return _context4.abrupt("return", diagnosticResult);
            case 10:
              if (!(options.rendererType === RENDERER_TYPE.VIDEO_TAG)) {
                _context4.next = 18;
                break;
              }
              isTypeCheckPass = _assertClassBrand(_Prober_brand, this, _checkArgTypes).call(this, options.target, [HTMLMediaElement]);
              if (isTypeCheckPass) {
                _context4.next = 16;
                break;
              }
              diagnosticResult.code = ERR_CODE.INVALID_ARGS;
              diagnosticResult.message = "Invalid target type. (arg)options.target:".concat(options.target);
              return _context4.abrupt("return", diagnosticResult);
            case 16:
              _context4.next = 29;
              break;
            case 18:
              if (!(options.rendererType === RENDERER_TYPE.WEBGL || options.rendererType === RENDERER_TYPE.WEBGL_2 || options.rendererType === RENDERER_TYPE.WEBGPU)) {
                _context4.next = 26;
                break;
              }
              areTypesCheckPass = _assertClassBrand(_Prober_brand, this, _checkArgTypes).call(this, options.target, [HTMLCanvasElement, OffscreenCanvas]);
              if (areTypesCheckPass) {
                _context4.next = 24;
                break;
              }
              diagnosticResult.code = ERR_CODE.INVALID_ARGS;
              diagnosticResult.message = "Invalid target type. (arg)options.target:".concat(options.target);
              return _context4.abrupt("return", diagnosticResult);
            case 24:
              _context4.next = 29;
              break;
            case 26:
              diagnosticResult.code = ERR_CODE.INVALID_ARGS;
              diagnosticResult.message = "Invalid renderer type. (arg)type:".concat(options.rendererType);
              return _context4.abrupt("return", diagnosticResult);
            case 29:
              rendersProxy = RenderersProxy.getInstance();
              navigator.mediaDevices.getUserMedia(constraints).then( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(stream) {
                  var video, viewport;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(options.rendererType == RENDERER_TYPE.VIDEO_TAG)) {
                          _context3.next = 5;
                          break;
                        }
                        // render stream to a video element
                        options.target.srcObject = stream;
                        options.stream = stream;
                        _context3.next = 18;
                        break;
                      case 5:
                        if (!(options.rendererType == RENDERER_TYPE.WEBGL || options.rendererType == RENDERER_TYPE.WEBGL_2 || options.rendererType == RENDERER_TYPE.WEBGPU)) {
                          _context3.next = 18;
                          break;
                        }
                        // create a video element as the source seeding to a canvas for rendering
                        options.stream = stream;
                        video = document.createElement("video");
                        video.width = options.target.width;
                        video.height = options.target.height;
                        video.loop = true;
                        video.autoplay = true;
                        video.muted = true;
                        video.srcObject = stream;
                        _context3.next = 16;
                        return video.play();
                      case 16:
                        // use canvas as the viewport
                        viewport = {
                          x: 0,
                          y: 0,
                          w: options.target.width,
                          h: options.target.height
                        };
                        rendersProxy.preview(options.rendererType, video, options.target, viewport);
                      case 18:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x4) {
                  return _ref.apply(this, arguments);
                };
              }()).catch(function (e) {
                throw e;
              });
              return _context4.abrupt("return", diagnosticResult);
            case 32:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function diagnoseVideo(_x2, _x3) {
        return _diagnoseVideo.apply(this, arguments);
      }
      return diagnoseVideo;
    }()
    /**
     * Stops the video diagnostic that was started by the {@link diagnoseVideo} method.
     *
     * Once the video diagnostic is launched, an object of {@link RendererOptions} is passed to the function {@link diagnoseVideo}.
     * A {@link MediaStream} object is set to the object of {@link RendererOptions} that is used to stop the video diagnostic here.
     * Each {@link MediaStreamTrack} will be stopped and removed from the stream.
     *
     * The frontend or any caller should pass the same object of {@link RendererOptions} and do extra work after the video diagnostic is stopped,
     * like removing the video element or the canvas on the screen.
     *
     * @function stopToDiagnoseVideo
     * @param {RendererOptions} options The options of how to render a video stream, includes the a renderer type and a target where to render.
     * @returns {boolean} Returns true if the video diagnostic is stopped successfully, otherwise returns false.
     *
     * @example
     * document.getElementById("btn_stop_preview").addEventListener("click", () =>{
     *  let result = prober.stopToDiagnoseVideo(diagnoseVideoOptions);
     *  diagnoseVideoOptions = null;
     *  console.log(`stopToDiagnoseVideo() result: ${result}`);
     * });
     */
    )
  }, {
    key: "stopToDiagnoseVideo",
    value: function stopToDiagnoseVideo(options) {
      if (!options) {
        console.error("stopToDiagnoseVideo() options is null! Cannot stop to diagnose video.");
        return false;
      }
      var rendersProxy = RenderersProxy.getInstance();
      return rendersProxy.stopPreview(options);
    }

    /**
     * An object describes the statistics of a network diagnostic.
     *
     * @typedef {object} NetworkDiagnosticStatsData
     * @property {number} bandwidth bandwidth(kb/s).
     * @property {number} bw_level the quality level of the bandwidth, refer to {@link BANDWIDTH_QUALITY_LEVEL}.
     * @property {number} jitter jitter(ms).
     * @property {number} lossRate the rate of package loss(%).
     * @property {number} rtt the round-trip time(ms).
     * @property {number} network_level the quality level of the network, refer to {@link NETWORK_QUALITY_LEVEL}.
     */

    /**
     * An object describes the report of the final and average statistics of a network diagnostic.
     *
     * @typedef {object} NetworkDiagnosticStatsReport
     * @property {number} uplink_bandwidth the last uplink bandwidth, kb/s.
     * @property {number} uplink_avg_loss the average value of uplink package loss(%).
     * @property {number} uplink_avg_rtt the average value of uplink round-trip time(ms).
     * @property {number} uplink_avg_jitter the average value of uplink jitter(ms).
     * @property {number} uplink_bw_level the last uplink bandwidth quality level, refer to {@link BANDWIDTH_QUALITY_LEVEL}.
     * @property {number} uplink_network_level the last uplink network quality level, refer to {@link NETWORK_QUALITY_LEVEL}.
     * @property {number} downlink_bandwidth the last downlink bandwidth, kb/s.
     * @property {number} downlink_avg_loss the average value of downlink package loss(%).
     * @property {number} downlink_avg_rtt the average value of downlink round-trip time(ms).
     * @property {number} downlink_avg_jitter the average value of downlink jitter(ms).
     * @property {number} downlink_bw_level the last downlink bandwidth quality level, refer to {@link BANDWIDTH_QUALITY_LEVEL}.
     * @property {number} downlink_network_level the last downlink network quality level, refer to {@link NETWORK_QUALITY_LEVEL}.
     */

    /**
     * An object describes the content/data part of the real-time network diagnostic statistics.
     *
     * @typedef {object} NetworkDiagnosticStatsContent
     * @property {string} path indicates the statistics coming from uplink or downlink.
     * @property {NetworkDiagnosticStatsData} statistics the statistics of uplink or downlink.
     */

    /**
     * An object describes the real-time network diagnostic statistics.
     *
     * @typedef {object} NetworkDiagnosticStats
     * @property {number} type indicates whether the data is a real-time statistics or the final report. Refer to {@link NET_PROBING_DATA_TYPE} for details.
     * @property {NetworkDiagnosticStatsContent} content indicates the content of the real-time statistics.
     */

    /**
     * A function object is used as a listener to listen the network diagnostic statistics.
     *
     * @typedef {object} NetworkStatsListener
     * @property {function} onStatsReceived callback function which receives an instance of {@link NetworkDiagnosticStats}.
     */

    /**
     * An object represents the details of protocols which are used in the network diagnostics.
     *
     * @typedef {object} ProtocolEntry
     * @property {number} type the type of the protocols, refer to {@link PROTOCOL_TYPE}.
     * @property {boolean} isBlocked indicates whether the protocol is blocked or not.
     * @property {string} port the port that a protocol uses.
     * @property {string} tip a tip will help if the protocol or port is blocked or not.
     * @property {*} error some customized errors or standard errors, like {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException|DOMException}, will be thrown if any. If no exceptions, it is undefined.
     */

    /**
     * An object describes the report of the network diagnostic.
     *
     * @typedef {object} NetworkDiagnosticResult
     * @property {string} serviceZone indicates the service zone, it is a constant currently.
     * @property {Array<ProtocolEntry>} protocols an array of protocols used in a network diagnostic.
     * @property {NetworkDiagnosticStatsReport} statistics the final report of the network diagnostic statistics.
     * @property {string} rid a string is used to track this round of network diagnosis.
     */

    /**
     * An object describes an entry of an affected feature.
     *
     * @typedef {object} AffectedFeatureEntry
     * @property {string} featureName the name of an affected feature.
     */

    /**
     * An object describes an entry of basic information.
     *
     * @typedef {object} BasicInfoEntry
     * @property {number} index index of an attribute added to the basic information, refer to {@link BASIC_INFO_ATTR_INDEX}.
     * @property {string} attr name/label of an attribute.
     * @property {string} val value of an attribute.
     * @property {boolean} critical whether the attribute is critical or not. If true, the attribute is critical and a list of affected features will be attached to the affectedFeatures field.
     * @property {Array<AffectedFeatureEntry>} affectedFeatures an array of affected features if the {@link critical} value is true, that is, a group of features might be affected if this attribute is not matched.
     */

    /**
     * An object describes an entry of a supported feature checking.
     *
     * @typedef {object} CheckItem
     * @property {number} index indicates a classification of the requirement, sometimes this field can be ignored.
     * @property {string} label the label of a requirement.
     * @property {boolean} matched indicates whether a condition of the requirement is matched or not.
     * @property {string} tip a tip will help if the condition is not {@link matched}.
     */

    /**
     * An object describes a piece of supported feature.
     *
     * @typedef {object} FeatureEntry
     * @property {number} index the index of a supported feature, refer to {@link SUPPORTED_FEATURE_INDEX}.
     * @property {string} featureName the name of a supported feature.
     * @property {boolean} isSupported whether the feature is supported or not.
     * @property {Array<CheckItem>} checkList an array of {@link CheckItem} which are used to judge whether the conditions of a supported features are matched or not.
     */

    /**
     * An object describes a report of the entire diagnostic.
     *
     * @typedef {object} DiagnosticReport
     * @property {NetworkDiagnosticResult} networkDiagnosticResult the report of the network diagnostic part.
     * @property {Array<BasicInfoEntry>} basicInfo a set of basic information, like browser, OS, hardware, etc.
     * @property {Array<FeatureEntry>} supportedFeatures a set of features that are important to the user.
     */

    /**
     * Start a full diagnostic that includes the network diagnostic, basic information, and supported features report .
     * It depends on the network diagnostic. Once it is called, the network diagnostic begins, and a report will be generated automatically after it ends.
     *
     * Before the diagnosis starts, you need to specify the detection time, connection timeout time and other parameters.
     * For the detection time, we recommend setting it at more than 2 minutes. This is because in network diagnosis, if a server is not connected,
     * we will try to connect to an alternative server, which will lead to a connection timeout wait.
     * It takes up most of the detection time, resulting in less detection time after the connection, resulting in inaccurate data.
     * Therefore, we recommend that the detection time be set relatively large, more than 2 minutes, such as 3-5 minutes is OK.
     * If you set the time too short, the results of the network diagnosis will not be very accurate and will not help you diagnose the problem.
     *
     * @function startToDiagnose
     * @param {string} [jsUrl=prober.js] a URL of javascript file used for a network diagnostic.
     * @param {string} [wasmUrl=prober.wasm] a URL of WebAssembly file used for a network diagnostic.
     * @param {NetworkDiagnosticConfig} config indicates the configuration of a network diagnostic.
     * @param {NetworkStatsListener|undefined} [networkStatsListener=undefined] the listener to receive network diagnostic statistics, the listener can be set to undefined if you only care about the final network diagnostic.
     * @returns {Promise<DiagnosticReport>} a diagnostic report in a promise which includes a set of basic information, supported features, and a final network diagnostic report.
     *
     * @example
     * const jsUrl = 'prober.js';
     * const wasmUrl = 'prober.wasm';
     * const config = { probeDuration: 120 * 1000, connectTimeout: 20 * 1000, domain: 'zoomdev.us' };
     * prober.startToDiagnose(jsUrl, wasmUrl, config, (stats) => {
     *  console.log(stats);
     * }).then((report) => {
     *  console.log(report);
     * });
     */
  }, {
    key: "startToDiagnose",
    value: function startToDiagnose() {
      var _this2 = this;
      var jsUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "prober.js";
      var wasmUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "prober.wasm";
      var config = arguments.length > 2 ? arguments[2] : undefined;
      var networkStatsListener = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      if (!jsUrl) jsUrl = "prober.js";
      if (!wasmUrl) wasmUrl = "prober.wasm";
      return new Promise(function (resolve) {
        var proberObserverProxy = {
          onStatsObserver: function onStatsObserver(stats) {
            if (networkStatsListener != undefined) {
              networkStatsListener(stats);
            }
          },
          onReportObserver: function onReportObserver(report) {
            resolve(report);
          }
        };
        _classPrivateFieldGet2(_networkAgent, _this2).diagnose(jsUrl, wasmUrl, config, proberObserverProxy);
      });
    }

    /**
     * Query the trackingId(rid) of last round of probing.
     *
     * @function queryRid
     * @return {string} rid a string is used to track the last round of network diagnosis. If the result is an empty string or undefined, it means that the last round of network diagnosis fails.
     *
     * @example
     * const rid = prober.queryRid();
     * console.log(rid);
     */
  }, {
    key: "queryRid",
    value: function queryRid() {
      return _classPrivateFieldGet2(_networkAgent, this).queryRid();
    }
  }]);
}();
function _checkArgTypes(arg, types) {
  var hasOneTypePassCheck = false;
  for (var i = 0; i < types.length; i++) {
    var type = types[i];
    if (checkType(arg, type)) {
      hasOneTypePassCheck = true;
    }
  }
  return hasOneTypePassCheck;
}
function _isRendererTypeSupported(_x5) {
  return _isRendererTypeSupported2.apply(this, arguments);
}
function _isRendererTypeSupported2() {
  _isRendererTypeSupported2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(rendererType) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve) {
              var isWebGLSupported, isWebGL2Supported, isWebGPUSupported;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(rendererType === RENDERER_TYPE.VIDEO_TAG)) {
                      _context5.next = 4;
                      break;
                    }
                    resolve(true);
                    _context5.next = 22;
                    break;
                  case 4:
                    if (!(rendererType === RENDERER_TYPE.WEBGL)) {
                      _context5.next = 9;
                      break;
                    }
                    isWebGLSupported = Feature.isWebGLSupported();
                    resolve(isWebGLSupported);
                    _context5.next = 22;
                    break;
                  case 9:
                    if (!(rendererType === RENDERER_TYPE.WEBGL_2)) {
                      _context5.next = 14;
                      break;
                    }
                    isWebGL2Supported = Feature.isWebGL2Supported();
                    resolve(isWebGL2Supported);
                    _context5.next = 22;
                    break;
                  case 14:
                    if (!(rendererType === RENDERER_TYPE.WEBGPU)) {
                      _context5.next = 21;
                      break;
                    }
                    _context5.next = 17;
                    return Feature.isWebGPUSupported();
                  case 17:
                    isWebGPUSupported = _context5.sent;
                    resolve(isWebGPUSupported);
                    _context5.next = 22;
                    break;
                  case 21:
                    resolve(false);
                  case 22:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x6) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _isRendererTypeSupported2.apply(this, arguments);
}
function _playAudioWithAudioContext(audioContext, blob) {
  return _assertClassBrand(_Prober_brand, this, _blobToArrayBuffer).call(this, blob).then(function (arrayBuffer) {
    return audioContext.decodeAudioData(arrayBuffer);
  }).then(function (audioBuffer) {
    var source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start(0);
  });
}
function _blobToArrayBuffer(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onloadend = function () {
      return resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
}

exports.BANDWIDTH_QUALITY_LEVEL = BANDWIDTH_QUALITY_LEVEL;
exports.BASIC_INFO_ATTR_INDEX = BASIC_INFO_ATTR_INDEX;
exports.ERR_CODE = ERR_CODE;
exports.NETWORK_QUALITY_LEVEL = NETWORK_QUALITY_LEVEL;
exports.NET_PROBING_DATA_TYPE = NET_PROBING_DATA_TYPE;
exports.PROTOCOL_TYPE = PROTOCOL_TYPE;
exports.Prober = Prober;
exports.RENDERER_TYPE = RENDERER_TYPE;
exports.Reporter = Reporter;
exports.SUPPORTED_FEATURE_INDEX = SUPPORTED_FEATURE_INDEX;
