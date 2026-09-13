var e,
  t,
  r,
  s,
  n,
  a,
  i,
  o,
  u,
  c,
  l,
  f,
  h,
  d,
  g,
  m,
  p,
  y,
  w,
  b,
  _,
  v,
  k,
  C,
  S,
  U,
  D,
  O,
  x,
  K,
  A,
  I,
  P,
  M,
  T,
  R,
  E,
  B,
  L = Object.defineProperty,
  V = (arg22, arg3, arg12) => (((arg1, arg2, arg) => {
    if (arg2 in arg1) L(arg1, arg2, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: arg
    });else arg1[arg2] = arg;
  })(arg22, "symbol" != typeof arg3 ? arg3 + '' : arg3, arg12), arg12),
  F = (arg22, arg3, arg12) => (((arg, arg1, arg2) => {
    if (!arg1.has(arg)) throw TypeError("Cannot " + arg2);
  })(arg22, arg3, "access private method"), arg12);
import { d as a28_0x257a46, u as a28_0x1607c9, G as a28_0x1fdb20, c as a28_0x3ab4c6, a as a28_0x14ec8c, b as a28_0x4334ed, h as a28_0x1683e7, f as a28_0x11002d, j as a28_0x38922d, J, g as a28_0x41e27b, C as a28_0x1724c7, l as a28_0x3445d0, B as a28_0x3c8be1, _ as a28_0x14a649, Q as a28_0x22102e, r as a28_0x34ade5, t as a28_0x3cd23b, o as a28_0x417103, M as a28_0xc71455, A as a28_0x5164de, K as a28_0x243693, X as a28_0x4a0fbe, k as a28_0x27d2d4, at as a28_0x41d197, bO as a28_0x1fae92, n as a28_0x483ac4, z as a28_0x3ca890, aK as a28_0x4451a3, b6 as a28_0x24153a, x as a28_0x56e515, a4 as a28_0x46b033, bH as a28_0x5be947 } from './index-YgtSwnZj.js';
const _e = {
    key: 1,
    class: "flex-shrink-0"
  },
  ve = {
    key: 2
  },
  ke = {
    class: "animate-spin"
  },
  Ce = a28_0x14a649(a28_0x257a46({
    __name: "Button",
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      beforeIcon: String,
      beforeIconSize: {
        type: String,
        default: '15'
      },
      customClass: String,
      to: [String, Object],
      disabled: Boolean
    },
    emits: ['click'],
    'setup'(arg7, {
      emit: arg4
    }) {
      const value = a28_0x1607c9(),
        value2 = arg7,
        value5 = arg4,
        value1 = a28_0x1fdb20(),
        value3 = a28_0x3ab4c6(() => !!(null == value1 ? void 0 : value1.default));
      function fn6(arg) {
        if (!value2.loading) return value2.to ? value.push(value2.to) : void value5("click", arg);
      }
      return (arg1, arg) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        class: a28_0x11002d([{
          disabled: arg7.disabled
        }, 'select-none\x20px-[12px]\x20py-[6px]\x20rounded-[6px]\x20cursor-pointer\x20transition-all\x20hover:bg-opacity-70\x20active:bg-opacity-75\x20active:scale-[.98]']),
        onClick: a28_0x3c8be1(fn6, ["stop"])
      }, [a28_0x1683e7("div", {
        class: a28_0x11002d([arg7.customClass, "flex gap-[5px] items-center justify-center"])
      }, [arg7.beforeIcon && !arg7.loading ? (a28_0x14ec8c(), a28_0x4334ed('div', {
        key: 0,
        class: a28_0x11002d([['w-[' + arg7.beforeIconSize + "px]", 'h-[' + arg7.beforeIconSize + "px]"], "flex-shrink-0"])
      }, [arg7.beforeIcon ? (a28_0x14ec8c(), a28_0x38922d(J, {
        key: 0,
        name: arg7.beforeIcon,
        class: 'w-full\x20h-full\x20fill-current'
      }, null, 8, ["name"])) : a28_0x41e27b('', true)], 2)) : a28_0x41e27b('', true), value3.value && !arg7.loading ? (a28_0x14ec8c(), a28_0x4334ed("div", _e, [a28_0x1724c7(arg1.$slots, 'default', {}, void 0, true)])) : a28_0x41e27b('', true), arg7.loading ? (a28_0x14ec8c(), a28_0x4334ed("div", ve, [a28_0x1683e7("div", ke, [a28_0x3445d0(J, {
        class: "w-[25px] h-[25px] fill-current",
        name: "loading"
      })])])) : a28_0x41e27b('', true)], 2)], 2));
    }
  }), [['__scopeId', "data-v-74c99e97"]]),
  Se = a28_0x22102e('GlobalDeviceInfoStore', {
    state: () => ({
      meta: null,
      currentProfile: 0,
      cacheProfileCount: -1,
      deviceProfile: {},
      newVersion: '0.0'
    }),
    actions: {
      'setCacheProfileCount'(arg) {
        this.cacheProfileCount = arg;
      },
      'setMeta'(arg) {
        this.meta = arg;
      },
      'setCurrentProfile'(arg) {
        this.currentProfile = arg;
      },
      'setDeviceProfile'(arg1, arg) {
        this.deviceProfile = {
          ...this.deviceProfile,
          [arg1]: arg
        };
      },
      'setDeviceVersion'(arg) {
        this.newVersion = arg;
      },
      'reset'() {
        this.meta = null;
        this.newVersion = "0.0";
      }
    },
    persist: true
  });
function Ue() {
  return new Date().getTime();
}
function De(arg1) {
  const value = new Date(arg1);
  return value.getFullYear() + '-' + ('0' + (value.getMonth() + 1)).slice(-2) + '-' + ('0' + value.getDate()).slice(-2) + '\x20' + ('0' + value.getHours()).slice(-2) + ':' + ('0' + value.getMinutes()).slice(-2) + ':' + ('0' + value.getSeconds()).slice(-2);
}
function Oe(arg2, arg1, arg) {
  return '#' + ((arg2 = Math.round(arg2)) << 16 | (arg1 = Math.round(arg1)) << 8 | (arg = Math.round(arg))).toString(16).padStart(6, '0');
}
function xe(arg2) {
  if (!/^#?([a-f\d]{3}|[a-f\d]{6})$/i.test(arg2)) return [0, 0, 0];
  3 === (arg2 = arg2.replace('#', '').toLowerCase()).length && (arg2 = arg2.split('').map(function (arg) {
    return arg + arg;
  }).join(''));
  return [parseInt(arg2.substring(0, 2), 16), parseInt(arg2.substring(2, 4), 16), parseInt(arg2.substring(4, 6), 16)];
}
function Ke(arg) {
  const value1 = new DataView(new ArrayBuffer(4));
  value1.setUint32(0, arg, true);
  return value1.getUint8(0);
}
function Ae(arg1, arg2) {
  const value = localStorage.getItem(arg1);
  return value || arg2;
}
function Ie(arg, arg1) {
  localStorage.setItem(arg, arg1);
}
function Pe(arg1) {
  const value2 = arg1.toString();
  if (value2.includes('.')) {
    const value = value2.split('.')[1];
    return Math.max(value.length, 2);
  }
  return 2;
}
function Me(arg) {
  return arg.split('\x0a').join("<br>");
}
const Te = {
    class: "m-auto"
  },
  Re = {
    class: "relative transform overflow-hidden rounded-lg bg-light-bg4 dark:bg-dark-bg4 dark: text-left shadow-xl transition-all"
  },
  Ee = {
    class: ''
  },
  Be = {
    class: "mt-3 text-center"
  },
  Le = {
    class: "text-base font-semibold leading-6 text-light-text2 dark:text-dark-text2"
  },
  Ve = {
    class: "mt-2"
  },
  Fe = {
    class: "text-sm text-light-text2 dark:text-dark-text2 max-w-[300px] mx-auto"
  },
  Ne = {
    class: "bg-light-fill1 dark:bg-dark-fill1 px-4 py-3"
  },
  Ge = a28_0x257a46({
    __name: "prompt",
    props: {
      type: {
        type: String,
        default: "info"
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      okText: {
        type: String,
        default: "popover.confirm"
      },
      hideOk: {
        type: Boolean,
        default: false
      },
      hideCancel: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: "popover.cancel"
      },
      callback: {
        type: Function
      }
    },
    'setup'(arg4) {
      const value1 = arg4,
        value3 = a28_0x34ade5(null);
      async function fn22(arg) {
        value3.value.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: 'forwards'
        });
        setTimeout(() => {
          var value;
          null == (value = value1.callback) || value.call(value1, arg);
        }, 300);
      }
      function fn2() {
        value1.callback && fn22(true);
      }
      function fn5() {
        value1.callback && fn22(false);
      }
      return (arg, arg1) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        ref_key: "promptRef",
        ref: value3,
        class: 'flex\x20fixed\x20inset-0\x20z-[999]\x20select-none\x20opacity-0\x20animate-show'
      }, [a28_0x1683e7('div', {
        class: 'inset-0\x20fixed\x20bg-black/40\x20dark:bg-black/70',
        onClick: fn5
      }), a28_0x1683e7('div', Te, [a28_0x1683e7("div", Re, [a28_0x1683e7("div", {
        class: a28_0x11002d([{
          'pt-5': "info" != arg4.type
        }, 'bg-light-bg4\x20dark:bg-dark-bg4\x20px-4\x20pb-4\x20min-w-[320px]'])
      }, [a28_0x1683e7("div", Ee, ["info" != arg4.type ? (a28_0x14ec8c(), a28_0x4334ed("div", {
        key: 0,
        class: a28_0x11002d([['success' == arg4.type ? ["bg-[#dcfce7]", "text-[#16a34a]", "pt-[6px]"] : ["bg-red-100", 'text-orange-600']], "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"])
      }, [a28_0x3445d0(J, {
        name: 'prompt-' + arg4.type,
        class: "fill-current pb-[4px] px-[8px]"
      }, null, 8, ["name"])], 2)) : a28_0x41e27b('', true), a28_0x1683e7("div", Be, [a28_0x1683e7('h3', Le, a28_0x3cd23b(arg.$t(arg4.title)), 1), a28_0x1683e7("div", Ve, [a28_0x1683e7('p', Fe, a28_0x3cd23b(arg.$t(arg4.content)), 1)])])])], 2), a28_0x1683e7('div', Ne, [arg4.hideOk ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed("button", {
        key: 0,
        class: "inline-flex w-full justify-center rounded-md bg-light-primary6 dark:bg-dark-primary6 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all transform duration-300 active:scale-95",
        type: "button",
        onClick: fn2
      }, a28_0x3cd23b(arg.$t(arg4.okText)), 1)), arg4.hideCancel ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 1,
        class: "mt-3 inline-flex w-full justify-center rounded-md bg-light-fill3 dark:bg-dark-fill3 px-3 py-2 text-sm font-semibold text-light-text1 dark:text-dark-text1 shadow-sm transition-all transform duration-300 active:scale-95",
        type: "button",
        onClick: fn5
      }, a28_0x3cd23b(arg.$t(arg4.cancelText)), 1))])])])], 512));
    }
  }),
  ze = {
    class: "flex gap-[12px] justify-start items-start"
  },
  He = {
    class: "flex justify-center items-start flex-col"
  },
  We = {
    class: "text-lg font-semibold leading-6 text-light-text2 dark:text-dark-text2"
  },
  je = {
    class: 'mt-2'
  },
  Ye = {
    class: "text-sm text-light-text2 dark:text-dark-text2 max-w-[200px] mx-auto break-words"
  },
  $e = {
    class: "px-4 py-2 flex items-center justify-end gap-[20px]"
  },
  qe = a28_0x257a46({
    __name: "notification",
    props: {
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: "warn"
      },
      okText: {
        type: String,
        default: "popover.confirm"
      },
      hideOk: {
        type: Boolean,
        default: false
      },
      hideCancel: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: "popover.cancel"
      },
      callback: {
        type: Function
      },
      delay: {
        type: Number,
        default: 0
      }
    },
    'setup'(arg12) {
      const value4 = arg12,
        value2 = a28_0x34ade5(null);
      async function fn5(arg) {
        value2.value.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: "forwards"
        });
        setTimeout(() => {
          var value;
          null == (value = value4.callback) || value.call(value4, arg);
        }, 300);
      }
      function fn2() {
        value2.value && value4.callback && fn5(true);
      }
      function fn3() {
        value2.value && value4.callback && fn5(false);
      }
      a28_0x417103(() => {
        value4.delay && setTimeout(() => {
          fn3();
        }, value4.delay);
      });
      return (arg, arg1) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        ref_key: "promptRef",
        ref: value2,
        class: "flex fixed right-[24px] top-[100px] z-[999] select-none animate-show shadow-lg rounded-xl overflow-hidden flex-col bg-light-bg4 dark:bg-dark-bg4"
      }, [a28_0x1683e7('div', {
        class: a28_0x11002d([{
          'pt-5': "info" != arg12.type
        }, "px-4 pb-4 min-w-[320px]"])
      }, [a28_0x1683e7("div", ze, ["info" != arg12.type ? (a28_0x14ec8c(), a28_0x4334ed("div", {
        key: 0,
        class: a28_0x11002d([['success' == arg12.type ? ["bg-[#dcfce7]", "text-[#16a34a]", "pt-[6px]"] : ["bg-red-100", "text-orange-600"]], 'flex\x20h-[40px]\x20w-[40px]\x20items-center\x20justify-center\x20rounded-full'])
      }, [a28_0x3445d0(J, {
        name: "prompt-" + arg12.type,
        class: 'fill-current\x20w-full\x20h-full\x20pb-[4px]\x20px-[8px]'
      }, null, 8, ["name"])], 2)) : a28_0x41e27b('', true), a28_0x1683e7("div", He, [a28_0x1683e7('h3', We, a28_0x3cd23b(arg.$t(arg12.title)), 1), a28_0x1683e7("div", je, [a28_0x1683e7('p', Ye, a28_0x3cd23b(arg.$t(arg12.content)), 1)])])])], 2), a28_0x1683e7("div", $e, [arg12.hideCancel ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 0,
        class: "inline-flex w-fit justify-center rounded-md px-3 py-2 text-sm font-semibold text-light-text1 dark:text-dark-text1 transition-all transform duration-300 active:scale-95",
        type: "button",
        onClick: fn3
      }, a28_0x3cd23b(arg.$t(arg12.cancelText)), 1)), arg12.hideOk ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 1,
        class: "inline-flex w-fit justify-center rounded-md bg-light-primary6 dark:bg-dark-primary6 p-[4px_12px] text-sm font-semibold text-white shadow-sm transition-all transform duration-300 active:scale-95",
        type: "button",
        onClick: fn2
      }, a28_0x3cd23b(arg.$t(arg12.okText)), 1))])], 512));
    }
  });
var Je = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {};
function Xe(arg) {
  if (arg && arg.__esModule && Object.prototype.hasOwnProperty.call(arg, "default")) return arg.default;
  return arg;
}
function Ze(arg12) {
  if (arg12.__esModule) return arg12;
  var value22 = arg12.default;
  if ("function" == typeof value22) {
    var value2 = function value() {
      if (this instanceof value) return Reflect.construct(value22, arguments, this.constructor);
      return value22.apply(this, arguments);
    };
    value2.prototype = value22.prototype;
  } else value2 = {};
  Object.defineProperty(value2, '__esModule', {
    value: true
  });
  Object.keys(arg12).forEach(function (arg1) {
    var value = Object.getOwnPropertyDescriptor(arg12, arg1);
    Object.defineProperty(value2, arg1, value.get ? value : {
      enumerable: true,
      get: function () {
        return arg12[arg1];
      }
    });
  });
  return value2;
}
var Qe,
  et,
  tt = {
    exports: {}
  }; /**
     * @license
     * Lodash <https://lodash.com/>
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
Qe = tt;
et = tt.exports;
(function () {
  var value172,
    value169 = 'Expected\x20a\x20function',
    value143 = "__lodash_hash_undefined__",
    value170 = "__lodash_placeholder__",
    value1532 = 16,
    value832 = 32,
    value167 = 64,
    value28 = 128,
    value138 = 256,
    value54 = 1 / 0,
    value30 = 9007199254740991,
    value1652 = NaN,
    value1233 = 4294967295,
    value1032 = [["ary", value28], ["bind", 1], ["bindKey", 2], ['curry', 8], ["curryRight", value1532], ["flip", 512], ['partial', value832], ['partialRight', value167], ["rearg", value138]],
    value83 = "[object Arguments]",
    value923 = '[object\x20Array]',
    value1722 = '[object\x20Boolean]',
    value942 = "[object Date]",
    value722 = "[object Error]",
    value204 = "[object Function]",
    value55 = "[object GeneratorFunction]",
    value1122 = "[object Map]",
    value802 = "[object Number]",
    value124 = "[object Object]",
    value152 = "[object Promise]",
    value44 = "[object RegExp]",
    value46 = "[object Set]",
    value1042 = '[object\x20String]',
    value882 = "[object Symbol]",
    value243 = "[object WeakMap]",
    value842 = '[object\x20ArrayBuffer]',
    value117 = '[object\x20DataView]',
    value78 = "[object Float32Array]",
    value1412 = "[object Float64Array]",
    value164 = "[object Int8Array]",
    value642 = "[object Int16Array]",
    value59 = '[object\x20Int32Array]',
    value1562 = "[object Uint8Array]",
    value216 = '[object\x20Uint8ClampedArray]',
    value1132 = "[object Uint16Array]",
    value1332 = "[object Uint32Array]",
    value822 = /\b__p \+= '';/g,
    value125 = /\b(__p \+=) '' \+/g,
    value582 = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    value602 = /&(?:amp|lt|gt|quot|#39);/g,
    value712 = /[&<>"']/g,
    value352 = RegExp(value602.source),
    value742 = RegExp(value712.source),
    value103 = /<%-([\s\S]+?)%>/g,
    value166 = /<%([\s\S]+?)%>/g,
    value68 = /<%=([\s\S]+?)%>/g,
    value162 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    value1212 = /^\w*$/,
    value732 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    value36 = /[\\^$.*+?()[\]{}|]/g,
    value48 = RegExp(value36.source),
    value67 = /^\s+/,
    value99 = /\s/,
    value56 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    value1092 = /\{\n\/\* \[wrapped with (.+)\] \*/,
    value65 = /,? & /,
    value37 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    value402 = /[()=,{}\[\]\/\s]/,
    value145 = /\\(\\)?/g,
    value1322 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    value51 = /\w*$/,
    value335 = /^[-+]0x[0-9a-f]+$/i,
    value323 = /^0b[01]+$/i,
    value111 = /^\[object .+?Constructor\]$/,
    value110 = /^0o[0-7]+$/i,
    value1362 = /^(?:0|[1-9]\d*)$/,
    value782 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    value174 = /($^)/,
    value24 = /['\n\r\u2028\u2029\\]/g,
    value85 = "\\ud800-\\udfff",
    value342 = '\x5cu0300-\x5cu036f\x5cufe20-\x5cufe2f\x5cu20d0-\x5cu20ff',
    value972 = "\\u2700-\\u27bf",
    value66 = 'a-z\x5cxdf-\x5cxf6\x5cxf8-\x5cxff',
    value1422 = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    value1612 = "\\ufe0e\\ufe0f",
    value812 = '\x5cxac\x5cxb1\x5cxd7\x5cxf7\x5cx00-\x5cx2f\x5cx3a-\x5cx40\x5cx5b-\x5cx60\x5cx7b-\x5cxbf\x5cu2000-\x5cu206f\x20\x5ct\x5cx0b\x5cf\x5cxa0\x5cufeff\x5cn\x5cr\x5cu2028\x5cu2029\x5cu1680\x5cu180e\x5cu2000\x5cu2001\x5cu2002\x5cu2003\x5cu2004\x5cu2005\x5cu2006\x5cu2007\x5cu2008\x5cu2009\x5cu200a\x5cu202f\x5cu205f\x5cu3000',
    value772 = "['’]",
    value752 = '[' + value85 + ']',
    value119 = '[' + value812 + ']',
    value135 = '[' + value342 + ']',
    value95 = "\\d+",
    value148 = '[' + value972 + ']',
    value472 = '[' + value66 + ']',
    value39 = '[^' + value85 + value812 + value95 + value972 + value66 + value1422 + ']',
    value1372 = "\\ud83c[\\udffb-\\udfff]",
    value622 = '[^' + value85 + ']',
    value157 = '(?:\x5cud83c[\x5cudde6-\x5cuddff]){2}',
    value134 = '[\x5cud800-\x5cudbff][\x5cudc00-\x5cudfff]',
    value1512 = '[' + value1422 + ']',
    value126 = '\x5cu200d',
    value155 = "(?:" + value472 + '|' + value39 + ')',
    value1272 = "(?:" + value1512 + '|' + value39 + ')',
    value57 = "(?:['’](?:d|ll|m|re|s|t|ve))?",
    value26 = '(?:[\x27’](?:D|LL|M|RE|S|T|VE))?',
    value131 = "(?:" + value135 + '|' + value1372 + ')?',
    value173 = '[' + value1612 + ']?',
    value113 = value173 + value131 + "(?:" + value126 + "(?:" + [value622, value157, value134].join('|') + ')' + value173 + value131 + ')*',
    value1682 = "(?:" + [value148, value157, value134].join('|') + ')' + value113,
    value61 = "(?:" + [value622 + value135 + '?', value135, value157, value134, value752].join('|') + ')',
    value69 = RegExp(value772, 'g'),
    value140 = RegExp(value135, 'g'),
    value1392 = RegExp(value1372 + '(?=' + value1372 + ')|' + value61 + value113, 'g'),
    value101 = RegExp([value1512 + '?' + value472 + '+' + value57 + "(?=" + [value119, value1512, '$'].join('|') + ')', value1272 + '+' + value26 + "(?=" + [value119, value1512 + value155, '$'].join('|') + ')', value1512 + '?' + value155 + '+' + value57, value1512 + '+' + value26, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", '\x5cd*(?:1st|2nd|3rd|(?![123])\x5cdth)(?=\x5cb|[A-Z_])', value95, value1682].join('|'), 'g'),
    value1432 = RegExp('[' + value126 + value85 + value342 + value1612 + ']'),
    value87 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    value1002 = ["Array", 'Buffer', "DataView", 'Date', "Error", "Float32Array", 'Float64Array', "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", 'Object', "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", 'Uint8ClampedArray', "Uint16Array", 'Uint32Array', "WeakMap", '_', "clearTimeout", "isFinite", "parseInt", "setTimeout"],
    value1162 = -1,
    value129 = {};
  value129[value78] = value129[value1412] = value129[value164] = value129[value642] = value129[value59] = value129[value1562] = value129[value216] = value129[value1132] = value129[value1332] = true;
  value129[value83] = value129[value923] = value129[value842] = value129[value1722] = value129[value117] = value129[value942] = value129[value722] = value129[value204] = value129[value1122] = value129[value802] = value129[value124] = value129[value44] = value129[value46] = value129[value1042] = value129[value243] = false;
  var value106 = {};
  value106[value83] = value106[value923] = value106[value842] = value106[value117] = value106[value1722] = value106[value942] = value106[value78] = value106[value1412] = value106[value164] = value106[value642] = value106[value59] = value106[value1122] = value106[value802] = value106[value124] = value106[value44] = value106[value46] = value106[value1042] = value106[value882] = value106[value1562] = value106[value216] = value106[value1132] = value106[value1332] = true;
  value106[value722] = value106[value204] = value106[value243] = false;
  var value184 = {
      '\x5c': '\x5c',
      '\x27': '\x27',
      '\x0a': 'n',
      '\x0d': 'r',
      '\u2028': 'u2028',
      '\u2029': "u2029"
    },
    value1472 = parseFloat,
    value932 = parseInt,
    value1302 = "object" == typeof Je && Je && Je.Object === Object && Je,
    value132 = "object" == typeof self && self && self.Object === Object && self,
    value163 = value1302 || value132 || Function("return this")(),
    value1462 = et && !et.nodeType && et,
    value1082 = value1462 && Qe && !Qe.nodeType && Qe,
    value171 = value1082 && value1082.exports === value1462,
    value1242 = value171 && value1302.process,
    value107 = function () {
      try {
        var value2 = value1082 && value1082.require && value1082.require("util").types;
        return value2 || value1242 && value1242.binding && value1242.binding('util');
      } catch (value) {}
    }(),
    value96 = value107 && value107.isArrayBuffer,
    value25 = value107 && value107.isDate,
    value952 = value107 && value107.isMap,
    value49 = value107 && value107.isRegExp,
    value982 = value107 && value107.isSet,
    value120 = value107 && value107.isTypedArray;
  function fn90(arg, arg1, arg2) {
    switch (arg2.length) {
      case 0:
        return arg.call(arg1);
      case 1:
        return arg.call(arg1, arg2[0]);
      case 2:
        return arg.call(arg1, arg2[0], arg2[1]);
      case 3:
        return arg.call(arg1, arg2[0], arg2[1], arg2[2]);
    }
    return arg.apply(arg1, arg2);
  }
  function fn862(arg1, arg4, arg3, arg6) {
    for (var value5 = -1, value = null == arg1 ? 0 : arg1.length; ++value5 < value;) {
      var value2 = arg1[value5];
      arg4(arg6, value2, arg3(value2), arg1);
    }
    return arg6;
  }
  function fn118(arg1, arg2) {
    for (var value3 = -1, value = null == arg1 ? 0 : arg1.length; ++value3 < value && false !== arg2(arg1[value3], value3, arg1);) {}
    return arg1;
  }
  function fn1052(arg1, arg2) {
    for (var value = null == arg1 ? 0 : arg1.length; value-- && false !== arg2(arg1[value], value, arg1);) {}
    return arg1;
  }
  function fn6(arg, arg1) {
    for (var value2 = -1, value3 = null == arg ? 0 : arg.length; ++value2 < value3;) if (!arg1(arg[value2], value2, arg)) return false;
    return true;
  }
  function fn38(arg5, arg6) {
    for (var value = -1, value2 = null == arg5 ? 0 : arg5.length, value3 = 0, value4 = []; ++value < value2;) {
      var value1 = arg5[value];
      arg6(value1, value, arg5) && (value4[value3++] = value1);
    }
    return value4;
  }
  function fn150(arg, arg1) {
    return !(null == arg || !arg.length) && fn292(arg, arg1, 0) > -1;
  }
  function fn53(arg3, arg1, arg2) {
    for (var value4 = -1, value = null == arg3 ? 0 : arg3.length; ++value4 < value;) if (arg2(arg1, arg3[value4])) return true;
    return false;
  }
  function fn149(arg1, arg4) {
    for (var value3 = -1, value = null == arg1 ? 0 : arg1.length, value2 = Array(value); ++value3 < value;) value2[value3] = arg4(arg1[value3], value3, arg1);
    return value2;
  }
  function fn76(arg4, arg) {
    for (var value1 = -1, value2 = arg.length, value3 = arg4.length; ++value1 < value2;) arg4[value3 + value1] = arg[value1];
    return arg4;
  }
  function fn1142(arg5, arg3, arg, arg1) {
    var value2 = -1,
      value4 = null == arg5 ? 0 : arg5.length;
    for (arg1 && value4 && (arg = arg5[++value2]); ++value2 < value4;) arg = arg3(arg, arg5[value2], value2, arg5);
    return arg;
  }
  function fn89(arg1, arg3, arg, arg2) {
    var value4 = null == arg1 ? 0 : arg1.length;
    for (arg2 && value4 && (arg = arg1[--value4]); value4--;) arg = arg3(arg, arg1[value4], value4, arg1);
    return arg;
  }
  function fn31(arg3, arg) {
    for (var value2 = -1, value1 = null == arg3 ? 0 : arg3.length; ++value2 < value1;) if (arg(arg3[value2], value2, arg3)) return true;
    return false;
  }
  var value1602 = fn50("length");
  function fn1102(arg32, arg12, arg3) {
    var value2;
    arg3(arg32, function (arg, arg1, arg2) {
      if (arg12(arg, arg1, arg2)) {
        value2 = arg1;
        return false;
      }
    });
    return value2;
  }
  function fn70(arg1, arg4, arg5, arg2) {
    for (var value = arg1.length, value3 = arg5 + (arg2 ? 1 : -1); arg2 ? value3-- : ++value3 < value;) if (arg4(arg1[value3], value3, arg1)) return value3;
    return -1;
  }
  function fn292(arg2, arg12, arg) {
    if (arg12 == arg12) return function (arg4, arg1, arg3) {
      for (var value = arg3 - 1, value2 = arg4.length; ++value < value2;) if (arg4[value] === arg1) return value;
      return -1;
    }(arg2, arg12, arg);
    return fn70(arg2, fn27, arg);
  }
  function fn122(arg4, arg5, arg3, arg1) {
    for (var value2 = arg3 - 1, value = arg4.length; ++value2 < value;) if (arg1(arg4[value2], arg5)) return value2;
    return -1;
  }
  function fn27(arg) {
    return arg != arg;
  }
  function fn42(arg1, arg) {
    var value2 = null == arg1 ? 0 : arg1.length;
    if (value2) return fn158(arg1, arg) / value2;
    return value1652;
  }
  function fn50(arg2) {
    return function (arg) {
      if (null == arg) return value172;
      return arg[arg2];
    };
  }
  function fn23(arg2) {
    return function (arg) {
      if (null == arg2) return value172;
      return arg2[arg];
    };
  }
  function fn412(arg4, arg12, arg32, arg22, arg3) {
    arg3(arg4, function (arg, arg1, arg2) {
      arg32 = arg22 ? (arg22 = false, arg) : arg12(arg32, arg, arg1, arg2);
    });
    return arg32;
  }
  function fn158(arg3, arg4) {
    for (var value2, value = -1, value1 = arg3.length; ++value < value1;) {
      var value5 = arg4(arg3[value]);
      value5 !== value172 && (value2 = value2 === value172 ? value5 : value2 + value5);
    }
    return value2;
  }
  function fn63(arg1, arg3) {
    for (var value = -1, value2 = Array(arg1); ++value < arg1;) value2[value] = arg3(value);
    return value2;
  }
  function fn223(arg) {
    if (arg) return arg.slice(0, fn252(arg) + 1).replace(value67, '');
    return arg;
  }
  function fn1442(arg2) {
    return function (arg) {
      return arg2(arg);
    };
  }
  function fn19(arg2, arg1) {
    return fn149(arg1, function (arg) {
      return arg2[arg];
    });
  }
  function fn912(arg1, arg) {
    return arg1.has(arg);
  }
  function fn34(arg1, arg3) {
    for (var value = -1, value2 = arg1.length; ++value < value2 && fn292(arg3, arg1[value], 0) > -1;) {}
    return value;
  }
  function fn102(arg1, arg) {
    for (var value2 = arg1.length; value2-- && fn292(arg, arg1[value2], 0) > -1;) {}
    return value2;
  }
  var value532 = fn23({
      'À': 'A',
      'Á': 'A',
      'Â': 'A',
      'Ã': 'A',
      'Ä': 'A',
      'Å': 'A',
      'à': 'a',
      'á': 'a',
      'â': 'a',
      'ã': 'a',
      'ä': 'a',
      'å': 'a',
      'Ç': 'C',
      'ç': 'c',
      'Ð': 'D',
      'ð': 'd',
      'È': 'E',
      'É': 'E',
      'Ê': 'E',
      'Ë': 'E',
      'è': 'e',
      'é': 'e',
      'ê': 'e',
      'ë': 'e',
      'Ì': 'I',
      'Í': 'I',
      'Î': 'I',
      'Ï': 'I',
      'ì': 'i',
      'í': 'i',
      'î': 'i',
      'ï': 'i',
      'Ñ': 'N',
      'ñ': 'n',
      'Ò': 'O',
      'Ó': 'O',
      'Ô': 'O',
      'Õ': 'O',
      'Ö': 'O',
      'Ø': 'O',
      'ò': 'o',
      'ó': 'o',
      'ô': 'o',
      'õ': 'o',
      'ö': 'o',
      'ø': 'o',
      'Ù': 'U',
      'Ú': 'U',
      'Û': 'U',
      'Ü': 'U',
      'ù': 'u',
      'ú': 'u',
      'û': 'u',
      'ü': 'u',
      'Ý': 'Y',
      'ý': 'y',
      'ÿ': 'y',
      'Æ': 'Ae',
      'æ': 'ae',
      'Þ': 'Th',
      'þ': 'th',
      'ß': 'ss',
      'Ā': 'A',
      'Ă': 'A',
      'Ą': 'A',
      'ā': 'a',
      'ă': 'a',
      'ą': 'a',
      'Ć': 'C',
      'Ĉ': 'C',
      'Ċ': 'C',
      'Č': 'C',
      'ć': 'c',
      'ĉ': 'c',
      'ċ': 'c',
      'č': 'c',
      'Ď': 'D',
      'Đ': 'D',
      'ď': 'd',
      'đ': 'd',
      'Ē': 'E',
      'Ĕ': 'E',
      'Ė': 'E',
      'Ę': 'E',
      'Ě': 'E',
      'ē': 'e',
      'ĕ': 'e',
      'ė': 'e',
      'ę': 'e',
      'ě': 'e',
      'Ĝ': 'G',
      'Ğ': 'G',
      'Ġ': 'G',
      'Ģ': 'G',
      'ĝ': 'g',
      'ğ': 'g',
      'ġ': 'g',
      'ģ': 'g',
      'Ĥ': 'H',
      'Ħ': 'H',
      'ĥ': 'h',
      'ħ': 'h',
      'Ĩ': 'I',
      'Ī': 'I',
      'Ĭ': 'I',
      'Į': 'I',
      'İ': 'I',
      'ĩ': 'i',
      'ī': 'i',
      'ĭ': 'i',
      'į': 'i',
      'ı': 'i',
      'Ĵ': 'J',
      'ĵ': 'j',
      'Ķ': 'K',
      'ķ': 'k',
      'ĸ': 'k',
      'Ĺ': 'L',
      'Ļ': 'L',
      'Ľ': 'L',
      'Ŀ': 'L',
      'Ł': 'L',
      'ĺ': 'l',
      'ļ': 'l',
      'ľ': 'l',
      'ŀ': 'l',
      'ł': 'l',
      'Ń': 'N',
      'Ņ': 'N',
      'Ň': 'N',
      'Ŋ': 'N',
      'ń': 'n',
      'ņ': 'n',
      'ň': 'n',
      'ŋ': 'n',
      'Ō': 'O',
      'Ŏ': 'O',
      'Ő': 'O',
      'ō': 'o',
      'ŏ': 'o',
      'ő': 'o',
      'Ŕ': 'R',
      'Ŗ': 'R',
      'Ř': 'R',
      'ŕ': 'r',
      'ŗ': 'r',
      'ř': 'r',
      'Ś': 'S',
      'Ŝ': 'S',
      'Ş': 'S',
      'Š': 'S',
      'ś': 's',
      'ŝ': 's',
      'ş': 's',
      'š': 's',
      'Ţ': 'T',
      'Ť': 'T',
      'Ŧ': 'T',
      'ţ': 't',
      'ť': 't',
      'ŧ': 't',
      'Ũ': 'U',
      'Ū': 'U',
      'Ŭ': 'U',
      'Ů': 'U',
      'Ű': 'U',
      'Ų': 'U',
      'ũ': 'u',
      'ū': 'u',
      'ŭ': 'u',
      'ů': 'u',
      'ű': 'u',
      'ų': 'u',
      'Ŵ': 'W',
      'ŵ': 'w',
      'Ŷ': 'Y',
      'ŷ': 'y',
      'Ÿ': 'Y',
      'Ź': 'Z',
      'Ż': 'Z',
      'Ž': 'Z',
      'ź': 'z',
      'ż': 'z',
      'ž': 'z',
      'Ĳ': 'IJ',
      'ĳ': 'ij',
      'Œ': 'Oe',
      'œ': 'oe',
      'ŉ': '\x27n',
      'ſ': 's'
    }),
    value1542 = fn23({
      '&': "&amp;",
      '<': "&lt;",
      '>': '&gt;',
      '\x22': '&quot;',
      '\x27': "&#39;"
    });
  function fn1282(arg) {
    return '\x5c' + value184[arg];
  }
  function fn442(arg) {
    return value1432.test(arg);
  }
  function fn1592(arg2) {
    var value = -1,
      value1 = Array(arg2.size);
    arg2.forEach(function (arg, arg1) {
      value1[++value] = [arg1, arg];
    });
    return value1;
  }
  function fn432(arg1, arg2) {
    return function (arg) {
      return arg1(arg2(arg));
    };
  }
  function fn1623(arg1, arg) {
    for (var value5 = -1, value3 = arg1.length, value2 = 0, value6 = []; ++value5 < value3;) {
      var value4 = arg1[value5];
      value4 !== arg && value4 !== value170 || (arg1[value5] = value170, value6[value2++] = value5);
    }
    return value6;
  }
  function fn452(arg2) {
    var value1 = -1,
      value2 = Array(arg2.size);
    arg2.forEach(function (arg) {
      value2[++value1] = arg;
    });
    return value2;
  }
  function fn1522(arg2) {
    if (fn442(arg2)) return function (arg) {
      for (var value1 = value1392.lastIndex = 0; value1392.test(arg);) ++value1;
      return value1;
    }(arg2);
    return value1602(arg2);
  }
  function fn523(arg2) {
    if (fn442(arg2)) return function (arg) {
      return arg.match(value1392) || [];
    }(arg2);
    return function (arg) {
      return arg.split('');
    }(arg2);
  }
  function fn252(arg) {
    for (var value1 = arg.length; value1-- && value99.test(arg.charAt(value1));) {}
    return value1;
  }
  var value79 = fn23({
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '\x22',
      '&#39;': '\x27'
    }),
    value1152 = function value422(arg38) {
      var value1232,
        value156 = (arg38 = null == arg38 ? value163 : value1152.defaults(value163.Object(), arg38, value1152.pick(value163, value1002))).Array,
        value372 = arg38.Date,
        value221 = arg38.Error,
        value356 = arg38.Function,
        value238 = arg38.Math,
        value242 = arg38.Object,
        value268 = arg38.RegExp,
        value922 = arg38.String,
        value160 = arg38.TypeError,
        value194 = value156.prototype,
        value34 = value356.prototype,
        value298 = value242.prototype,
        value310 = arg38["__core-js_shared__"],
        value306 = value34.toString,
        value316 = value298.hasOwnProperty,
        value363 = 0,
        value43 = (value1232 = /[^.]+$/.exec(value310 && value310.keys && value310.keys.IE_PROTO || '')) ? "Symbol(src)_1." + value1232 : '',
        value202 = value298.toString,
        value147 = value306.call(value242),
        value154 = value163._,
        value195 = value268('^' + value306.call(value316).replace(value36, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'),
        value332 = value171 ? arg38.Buffer : value172,
        value149 = arg38.Symbol,
        value141 = arg38.Uint8Array,
        value21 = value332 ? value332.allocUnsafe : value172,
        value203 = fn432(value242.getPrototypeOf, value242),
        value89 = value242.create,
        value265 = value298.propertyIsEnumerable,
        value53 = value194.splice,
        value227 = value149 ? value149.isConcatSpreadable : value172,
        value139 = value149 ? value149.iterator : value172,
        value150 = value149 ? value149.toStringTag : value172,
        value176 = function () {
          try {
            var value2 = fn304(value242, "defineProperty");
            value2({}, '', {});
            return value2;
          } catch (value) {}
        }(),
        value100 = arg38.clearTimeout !== value163.clearTimeout && arg38.clearTimeout,
        value277 = value372 && value372.now !== value163.Date.now && value372.now,
        value321 = arg38.setTimeout !== value163.setTimeout && arg38.setTimeout,
        value314 = value238.ceil,
        value232 = value238.floor,
        value274 = value242.getOwnPropertySymbols,
        value251 = value332 ? value332.isBuffer : value172,
        value330 = arg38.isFinite,
        value90 = value194.join,
        value104 = fn432(value242.keys, value242),
        value215 = value238.max,
        value319 = value238.min,
        value333 = value372.now,
        value292 = arg38.parseInt,
        value50 = value238.random,
        value76 = value194.reverse,
        value211 = fn304(arg38, "DataView"),
        value240 = fn304(arg38, 'Map'),
        value317 = fn304(arg38, "Promise"),
        value94 = fn304(arg38, "Set"),
        value374 = fn304(arg38, "WeakMap"),
        value64 = fn304(value242, "create"),
        value212 = value374 && new value374(),
        value252 = {},
        value2322 = fn11(value211),
        value264 = fn11(value240),
        value283 = fn11(value317),
        value118 = fn11(value94),
        value70 = fn11(value374),
        value369 = value149 ? value149.prototype : value172,
        value354 = value369 ? value369.valueOf : value172,
        value262 = value369 ? value369.toString : value172;
      function fn270(arg) {
        if (fn13(arg) && !value222(arg) && !(arg instanceof fn281)) {
          if (arg instanceof fn225) return arg;
          if (value316.call(arg, "__wrapped__")) return fn177(arg);
        }
        return new fn225(arg);
      }
      var value2122 = function () {
        function fn2() {}
        return function (arg) {
          if (!fn349(arg)) return {};
          if (value89) return value89(arg);
          fn2.prototype = arg;
          var value1 = new fn2();
          fn2.prototype = value172;
          return value1;
        };
      }();
      function fn172() {}
      function fn225(arg1, arg) {
        this.__wrapped__ = arg1;
        this.__actions__ = [];
        this.__chain__ = !!arg;
        this.__index__ = 0;
        this.__values__ = value172;
      }
      function fn281(arg) {
        this.__wrapped__ = arg;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = value1233;
        this.__views__ = [];
      }
      function fn358(arg2) {
        var value1 = -1,
          value = null == arg2 ? 0 : arg2.length;
        for (this.clear(); ++value1 < value;) {
          var value3 = arg2[value1];
          this.set(value3[0], value3[1]);
        }
      }
      function fn336(arg3) {
        var value1 = -1,
          value2 = null == arg3 ? 0 : arg3.length;
        for (this.clear(); ++value1 < value2;) {
          var value = arg3[value1];
          this.set(value[0], value[1]);
        }
      }
      function fn205(arg1) {
        var value = -1,
          value2 = null == arg1 ? 0 : arg1.length;
        for (this.clear(); ++value < value2;) {
          var value3 = arg1[value];
          this.set(value3[0], value3[1]);
        }
      }
      function fn86(arg) {
        var value2 = -1,
          value1 = null == arg ? 0 : arg.length;
        for (this.__data__ = new fn205(); ++value2 < value1;) this.add(arg[value2]);
      }
      function fn1622(arg1) {
        var value = this.__data__ = new fn336(arg1);
        this.size = value.size;
      }
      function fn124(arg3, arg2) {
        var value7 = value222(arg3),
          value4 = !value7 && value357(arg3),
          value1 = !value7 && !value4 && value213(arg3),
          value6 = !value7 && !value4 && !value1 && value208(arg3),
          value = value7 || value4 || value1 || value6,
          value8 = value ? fn63(arg3.length, value922) : [],
          value5 = value8.length;
        for (var value9 in arg3) !arg2 && !value316.call(arg3, value9) || value && ("length" == value9 || value1 && ("offset" == value9 || "parent" == value9) || value6 && ("buffer" == value9 || "byteLength" == value9 || "byteOffset" == value9) || fn307(value9, value5)) || value8.push(value9);
        return value8;
      }
      function fn96(arg) {
        var value1 = arg.length;
        if (value1) return arg[fn343(0, value1 - 1)];
        return value172;
      }
      function fn125(arg1, arg) {
        return fn325(fn340(arg1), fn323(arg, 0, arg1.length));
      }
      function fn135(arg) {
        return fn325(fn340(arg));
      }
      function fn103(arg1, arg2, arg) {
        (arg !== value172 && !fn62(arg1[arg2], arg) || arg === value172 && !(arg2 in arg1)) && fn199(arg1, arg2, arg);
      }
      function fn110(arg2, arg, arg3) {
        var value1 = arg2[arg];
        value316.call(arg2, arg) && fn62(value1, arg3) && (arg3 !== value172 || arg in arg2) || fn199(arg2, arg, arg3);
      }
      function fn272(arg2, arg1) {
        for (var value = arg2.length; value--;) if (fn62(arg2[value][0], arg1)) return value;
        return -1;
      }
      function fn41(arg12, arg32, arg22, arg3) {
        value299(arg12, function (arg, arg2, arg1) {
          arg32(arg3, arg, arg22(arg), arg1);
        });
        return arg3;
      }
      function fn279(arg, arg1) {
        return arg && fn145(arg1, fn167(arg1), arg);
      }
      function fn199(arg, arg2, arg1) {
        if ("__proto__" == arg2 && value176) value176(arg, arg2, {
          configurable: true,
          enumerable: true,
          value: arg1,
          writable: true
        });else arg[arg2] = arg1;
      }
      function fn129(arg1, arg3) {
        for (var value4 = -1, value2 = arg3.length, value5 = value156(value2), value = null == arg1; ++value4 < value2;) value5[value4] = value ? value172 : fn192(arg1, arg3[value4]);
        return value5;
      }
      function fn323(arg, arg2, arg1) {
        arg == arg && (arg1 !== value172 && (arg = arg <= arg1 ? arg : arg1), arg2 !== value172 && (arg = arg >= arg2 ? arg : arg2));
        return arg;
      }
      function fn231(arg14, arg23, arg6, arg5, arg8, arg11) {
        var value12,
          value32 = 1 & arg23,
          value42 = 2 & arg23,
          value9 = 4 & arg23;
        arg6 && (value12 = arg8 ? arg6(arg14, arg5, arg8, arg11) : arg6(arg14));
        if (value12 !== value172) return value12;
        if (!fn349(arg14)) return arg14;
        var value4 = value222(arg14);
        if (value4) {
          value12 = function (arg2) {
            var value = arg2.length,
              value1 = new arg2.constructor(value);
            value && 'string' == typeof arg2[0] && value316.call(arg2, 'index') && (value1.index = arg2.index, value1.input = arg2.input);
            return value1;
          }(arg14);
          if (!value32) return fn340(arg14, value12);
        } else {
          var value122 = value220(arg14),
            value10 = value122 == value204 || value122 == value55;
          if (value213(arg14)) return fn45(arg14, value32);
          if (value122 == value124 || value122 == value83 || value10 && !arg8) {
            value12 = value42 || value10 ? {} : fn67(arg14);
            if (!value32) return value42 ? function (arg1, arg) {
              return fn145(arg1, value200(arg1), arg);
            }(arg14, function (arg1, arg) {
              return arg1 && fn145(arg, fn79(arg), arg1);
            }(value12, arg14)) : function (arg, arg1) {
              return fn145(arg, value226(arg), arg1);
            }(arg14, fn279(value12, arg14));
          } else {
            if (!value106[value122]) return arg8 ? arg14 : {};
            value12 = function (arg22, arg2, arg4) {
              var value3,
                value1 = arg22.constructor;
              switch (arg2) {
                case value842:
                  return fn341(arg22);
                case value1722:
                case value942:
                  return new value1(+arg22);
                case value117:
                  return function (arg, arg1) {
                    var value2 = arg1 ? fn341(arg.buffer) : arg.buffer;
                    return new arg.constructor(value2, arg.byteOffset, arg.byteLength);
                  }(arg22, arg4);
                case value78:
                case value1412:
                case value164:
                case value642:
                case value59:
                case value1562:
                case value216:
                case value1132:
                case value1332:
                  return fn360(arg22, arg4);
                case value1122:
                  return new value1();
                case value802:
                case value1042:
                  return new value1(arg22);
                case value44:
                  return function (arg1) {
                    var value = new arg1.constructor(arg1.source, value51.exec(arg1));
                    value.lastIndex = arg1.lastIndex;
                    return value;
                  }(arg22);
                case value46:
                  return new value1();
                case value882:
                  value3 = arg22;
                  return value354 ? value242(value354.call(value3)) : {};
              }
            }(arg14, value122, value32);
          }
        }
        arg11 || (arg11 = new fn1622());
        var value13 = arg11.get(arg14);
        if (value13) return value13;
        arg11.set(arg14, value12);
        if (value71(arg14)) arg14.forEach(function (arg) {
          value12.add(fn231(arg, arg23, arg6, arg, arg14, arg11));
        });else value182(arg14) && arg14.forEach(function (arg1, arg) {
          value12.set(arg, fn231(arg1, arg23, arg6, arg, arg14, arg11));
        });
        var value7 = value4 ? value172 : (value9 ? value42 ? fn373 : fn57 : value42 ? fn79 : fn167)(arg14);
        fn118(value7 || arg14, function (arg1, arg) {
          value7 && (arg1 = arg14[arg = arg1]);
          fn110(value12, arg, fn231(arg1, arg23, arg6, arg, arg14, arg11));
        });
        return value12;
      }
      function fn219(arg2, arg4, arg1) {
        var value3 = arg1.length;
        if (null == arg2) return !value3;
        for (arg2 = value242(arg2); value3--;) {
          var value5 = arg1[value3],
            value = arg4[value5],
            value6 = arg2[value5];
          if (value6 === value172 && !(value5 in arg2) || !value(value6)) return false;
        }
        return true;
      }
      function fn159(arg1, arg, arg2) {
        if ('function' != typeof arg1) throw new value160(value169);
        return value210(function () {
          arg1.apply(value172, arg2);
        }, arg);
      }
      function fn43(arg12, arg5, arg6, arg2) {
        var value8 = -1,
          value11 = fn150,
          value3 = true,
          value10 = arg12.length,
          value9 = [],
          value1 = arg5.length;
        if (!value10) return value9;
        arg6 && (arg5 = fn149(arg5, fn1442(arg6)));
        if (arg2) {
          value11 = fn53;
          value3 = false;
        } else arg5.length >= 200 && (value11 = fn912, value3 = false, arg5 = new fn86(arg5));
        _0x337cb5: for (; ++value8 < value10;) {
          var value = arg12[value8],
            value4 = null == arg6 ? value : arg6(value);
          value = arg2 || 0 !== value ? value : 0;
          if (value3 && value4 == value4) {
            for (var value7 = value1; value7--;) if (arg5[value7] === value4) continue _0x337cb5;
            value9.push(value);
          } else value11(arg5, value4, arg2) || value9.push(value);
        }
        return value9;
      }
      fn270.templateSettings = {
        escape: value103,
        evaluate: value166,
        interpolate: value68,
        variable: '',
        imports: {
          _: fn270
        }
      };
      fn270.prototype = fn172.prototype;
      fn270.prototype.constructor = fn270;
      fn225.prototype = value2122(fn172.prototype);
      fn225.prototype.constructor = fn225;
      fn281.prototype = value2122(fn172.prototype);
      fn281.prototype.constructor = fn281;
      fn358.prototype.clear = function () {
        this.__data__ = value64 ? value64(null) : {};
        this.size = 0;
      };
      fn358.prototype.delete = function (arg) {
        var value1 = this.has(arg) && delete this.__data__[arg];
        this.size -= value1 ? 1 : 0;
        return value1;
      };
      fn358.prototype.get = function (arg1) {
        var value2 = this.__data__;
        if (value64) {
          var value = value2[arg1];
          return value === value143 ? value172 : value;
        }
        if (value316.call(value2, arg1)) return value2[arg1];
        return value172;
      };
      fn358.prototype.has = function (arg) {
        var value1 = this.__data__;
        if (value64) return value1[arg] !== value172;
        return value316.call(value1, arg);
      };
      fn358.prototype.set = function (arg, arg1) {
        var value2 = this.__data__;
        this.size += this.has(arg) ? 0 : 1;
        value2[arg] = value64 && arg1 === value172 ? value143 : arg1;
        return this;
      };
      fn336.prototype.clear = function () {
        this.__data__ = [];
        this.size = 0;
      };
      fn336.prototype.delete = function (arg1) {
        var value = this.__data__,
          value2 = fn272(value, arg1);
        return !(value2 < 0 || (value2 == value.length - 1 ? value.pop() : value53.call(value, value2, 1), --this.size, 0));
      };
      fn336.prototype.get = function (arg1) {
        var value = this.__data__,
          value2 = fn272(value, arg1);
        if (value2 < 0) return value172;
        return value[value2][1];
      };
      fn336.prototype.has = function (arg) {
        return fn272(this.__data__, arg) > -1;
      };
      fn336.prototype.set = function (arg1, arg2) {
        var value3 = this.__data__,
          value = fn272(value3, arg1);
        if (value < 0) {
          ++this.size;
          value3.push([arg1, arg2]);
        } else value3[value][1] = arg2;
        return this;
      };
      fn205.prototype.clear = function () {
        this.size = 0;
        this.__data__ = {
          hash: new fn358(),
          map: new (value240 || fn336)(),
          string: new fn358()
        };
      };
      fn205.prototype.delete = function (arg) {
        var value1 = fn66(this, arg).delete(arg);
        this.size -= value1 ? 1 : 0;
        return value1;
      };
      fn205.prototype.get = function (arg) {
        return fn66(this, arg).get(arg);
      };
      fn205.prototype.has = function (arg) {
        return fn66(this, arg).has(arg);
      };
      fn205.prototype.set = function (arg2, arg3) {
        var value = fn66(this, arg2),
          value1 = value.size;
        value.set(arg2, arg3);
        this.size += value.size == value1 ? 0 : 1;
        return this;
      };
      fn86.prototype.add = fn86.prototype.push = function (arg) {
        this.__data__.set(arg, value143);
        return this;
      };
      fn86.prototype.has = function (arg) {
        return this.__data__.has(arg);
      };
      fn1622.prototype.clear = function () {
        this.__data__ = new fn336();
        this.size = 0;
      };
      fn1622.prototype.delete = function (arg1) {
        var value = this.__data__,
          value2 = value.delete(arg1);
        this.size = value.size;
        return value2;
      };
      fn1622.prototype.get = function (arg) {
        return this.__data__.get(arg);
      };
      fn1622.prototype.has = function (arg) {
        return this.__data__.has(arg);
      };
      fn1622.prototype.set = function (arg1, arg) {
        var value2 = this.__data__;
        if (value2 instanceof fn336) {
          var value3 = value2.__data__;
          if (!value240 || value3.length < 199) {
            value3.push([arg1, arg]);
            this.size = ++value2.size;
            return this;
          }
          value2 = this.__data__ = new fn205(value3);
        }
        value2.set(arg1, arg);
        this.size = value2.size;
        return this;
      };
      var value299 = fn114(fn93),
        value93 = fn114(fn25, true);
      function fn376(arg3, arg22) {
        var value1 = true;
        value299(arg3, function (arg2, arg1, arg) {
          return value1 = !!arg22(arg2, arg1, arg);
        });
        return value1;
      }
      function fn275(arg5, arg6, arg1) {
        for (var value8 = -1, value = arg5.length; ++value8 < value;) {
          var value2 = arg5[value8],
            value3 = arg6(value2);
          if (null != value3 && (value4 === value172 ? value3 == value3 && !fn8(value3) : arg1(value3, value4))) var value4 = value3,
            value7 = value2;
        }
        return value7;
      }
      function fn371(arg12, arg22) {
        var value = [];
        value299(arg12, function (arg, arg2, arg1) {
          arg22(arg, arg2, arg1) && value.push(arg);
        });
        return value;
      }
      function fn138(arg3, arg7, arg5, arg2, arg6) {
        var value1 = -1,
          value = arg3.length;
        arg5 || (arg5 = fn134);
        for (arg6 || (arg6 = []); ++value1 < value;) {
          var value4 = arg3[value1];
          if (arg7 > 0 && arg5(value4)) {
            if (arg7 > 1) fn138(value4, arg7 - 1, arg5, arg2, arg6);else fn76(arg6, value4);
          } else arg2 || (arg6[arg6.length] = value4);
        }
        return arg6;
      }
      var value136 = fn191(),
        value97 = fn191(true);
      function fn93(arg1, arg) {
        return arg1 && value136(arg1, arg, fn167);
      }
      function fn25(arg, arg1) {
        return arg && value97(arg, arg1, fn167);
      }
      function fn107(arg1, arg2) {
        return fn38(arg2, function (arg) {
          return fn276(arg1[arg]);
        });
      }
      function fn261(arg3, arg2) {
        for (var value = 0, value1 = (arg2 = fn286(arg2, arg3)).length; null != arg3 && value < value1;) arg3 = arg3[fn222(arg2[value++])];
        return value && value == value1 ? arg3 : value172;
      }
      function fn52(arg, arg1, arg3) {
        var value2 = arg1(arg);
        if (value222(arg)) return value2;
        return fn76(value2, arg3(arg));
      }
      function fn82(arg3) {
        if (null == arg3) return arg3 === value172 ? "[object Undefined]" : "[object Null]";
        if (value150 && value150 in value242(arg3)) return function (arg2) {
          var value1 = value316.call(arg2, value150),
            value3 = arg2[value150];
          try {
            arg2[value150] = value172;
            var value2 = true;
          } catch (value) {}
          var value4 = value202.call(arg2);
          value2 && (value1 ? arg2[value150] = value3 : delete arg2[value150]);
          return value4;
        }(arg3);
        return function (arg) {
          return value202.call(arg);
        }(arg3);
      }
      function fn302(arg1, arg) {
        return arg1 > arg;
      }
      function fn164(arg, arg1) {
        return null != arg && value316.call(arg, arg1);
      }
      function fn174(arg, arg1) {
        return null != arg && arg1 in value242(arg);
      }
      function fn113(arg11, arg6, arg2) {
        for (var value10 = arg2 ? fn53 : fn150, value = arg11[0].length, value3 = arg11.length, value12 = value3, value7 = value156(value3), value9 = 1 / 0, value13 = []; value12--;) {
          var value4 = arg11[value12];
          value12 && arg6 && (value4 = fn149(value4, fn1442(arg6)));
          value9 = value319(value4.length, value9);
          value7[value12] = !arg2 && (arg6 || value >= 120 && value4.length >= 120) ? new fn86(value12 && value4) : value172;
        }
        value4 = arg11[0];
        var value1 = -1,
          value14 = value7[0];
        _0x4698bd: for (; ++value1 < value && value13.length < value9;) {
          var value5 = value4[value1],
            value15 = arg6 ? arg6(value5) : value5;
          value5 = arg2 || 0 !== value5 ? value5 : 0;
          if (!(value14 ? fn912(value14, value15) : value10(value13, value15, arg2))) {
            for (value12 = value3; --value12;) {
              var value8 = value7[value12];
              if (!(value8 ? fn912(value8, value15) : value10(arg11[value12], value15, arg2))) continue _0x4698bd;
            }
            value14 && value14.push(value15);
            value13.push(value5);
          }
        }
        return value13;
      }
      function fn352(arg3, arg, arg1) {
        var value2 = null == (arg3 = fn229(arg3, arg = fn286(arg, arg3))) ? arg3 : arg3[fn222(fn362(arg))];
        if (null == value2) return value172;
        return fn90(value2, arg3, arg1);
      }
      function fn128(arg) {
        return fn13(arg) && fn82(arg) == value83;
      }
      function fn101(arg32, arg12, arg22, arg42, arg5) {
        return arg32 === arg12 || (null == arg32 || null == arg12 || !fn13(arg32) && !fn13(arg12) ? arg32 != arg32 && arg12 != arg12 : function (arg162, arg2, arg, arg62, arg132, arg82) {
          var value92 = value222(arg162),
            value10 = value222(arg2),
            value142 = value92 ? value923 : value220(arg162),
            value72 = value10 ? value923 : value220(arg2),
            value52 = (value142 = value142 == value83 ? value124 : value142) == value124,
            value42 = (value72 = value72 == value83 ? value124 : value72) == value124,
            value15 = value142 == value72;
          if (value15 && value213(arg162)) {
            if (!value213(arg2)) return false;
            value92 = true;
            value52 = false;
          }
          if (value15 && !value52) {
            arg82 || (arg82 = new fn1622());
            if (value92 || value208(arg162)) return fn162(arg162, arg2, arg, arg62, arg132, arg82);
            return function (arg6, arg3, arg7, arg1, arg8, arg4, arg10) {
              switch (arg7) {
                case value117:
                  if (arg6.byteLength != arg3.byteLength || arg6.byteOffset != arg3.byteOffset) return false;
                  arg6 = arg6.buffer;
                  arg3 = arg3.buffer;
                case value842:
                  return !(arg6.byteLength != arg3.byteLength || !arg4(new value141(arg6), new value141(arg3)));
                case value1722:
                case value942:
                case value802:
                  return fn62(+arg6, +arg3);
                case value722:
                  return arg6.name == arg3.name && arg6.message == arg3.message;
                case value44:
                case value1042:
                  return arg6 == arg3 + '';
                case value1122:
                  var value = fn1592;
                case value46:
                  var value9 = 1 & arg1;
                  value || (value = fn452);
                  if (arg6.size != arg3.size && !value9) return false;
                  var value5 = arg10.get(arg6);
                  if (value5) return value5 == arg3;
                  arg1 |= 2;
                  arg10.set(arg6, arg3);
                  var value2 = fn162(value(arg6), value(arg3), arg1, arg8, arg4, arg10);
                  arg10.delete(arg6);
                  return value2;
                case value882:
                  if (value354) return value354.call(arg6) == value354.call(arg3);
              }
              return false;
            }(arg162, arg2, value142, arg, arg62, arg132, arg82);
          }
          if (!(1 & arg)) {
            var value122 = value52 && value316.call(arg162, "__wrapped__"),
              value13 = value42 && value316.call(arg2, '__wrapped__');
            if (value122 || value13) {
              var value112 = value122 ? arg162.value() : arg162,
                value32 = value13 ? arg2.value() : arg2;
              arg82 || (arg82 = new fn1622());
              return arg132(value112, value32, arg, arg62, arg82);
            }
          }
          return !!value15 && (arg82 || (arg82 = new fn1622()), function (arg16, arg21, arg10, arg18, arg15, arg13) {
            var value20 = 1 & arg10,
              value1 = fn57(arg16),
              value19 = value1.length,
              value6 = fn57(arg21),
              value9 = value6.length;
            if (value19 != value9 && !value20) return false;
            for (var value7 = value19; value7--;) {
              var value11 = value1[value7];
              if (!(value20 ? value11 in arg21 : value316.call(arg21, value11))) return false;
            }
            var value = arg13.get(arg16),
              value4 = arg13.get(arg21);
            if (value && value4) return value == arg21 && value4 == arg16;
            var value2 = true;
            arg13.set(arg16, arg21);
            arg13.set(arg21, arg16);
            for (var value12 = value20; ++value7 < value19;) {
              var value17 = arg16[value11 = value1[value7]],
                value5 = arg21[value11];
              if (arg18) var value3 = value20 ? arg18(value5, value17, value11, arg21, arg16, arg13) : arg18(value17, value5, value11, arg16, arg21, arg13);
              if (!(value3 === value172 ? value17 === value5 || arg15(value17, value5, arg10, arg18, arg13) : value3)) {
                value2 = false;
                break;
              }
              value12 || (value12 = "constructor" == value11);
            }
            if (value2 && !value12) {
              var value8 = arg16.constructor,
                value14 = arg21.constructor;
              value8 == value14 || !('constructor' in arg16) || !("constructor" in arg21) || "function" == typeof value8 && value8 instanceof value8 && "function" == typeof value14 && value14 instanceof value14 || (value2 = false);
            }
            arg13.delete(arg16);
            arg13.delete(arg21);
            return value2;
          }(arg162, arg2, arg, arg62, arg132, arg82));
        }(arg32, arg12, arg22, arg42, fn101, arg5));
      }
      function fn350(arg9, arg12, arg6, arg5) {
        var value1 = arg6.length,
          value8 = value1,
          value7 = !arg5;
        if (null == arg9) return !value8;
        for (arg9 = value242(arg9); value1--;) {
          var value4 = arg6[value1];
          if (value7 && value4[2] ? value4[1] !== arg9[value4[0]] : !(value4[0] in arg9)) return false;
        }
        for (; ++value1 < value8;) {
          var value = (value4 = arg6[value1])[0],
            value10 = arg9[value],
            value11 = value4[1];
          if (value7 && value4[2]) {
            if (value10 === value172 && !(value in arg9)) return false;
          } else {
            var value2 = new fn1622();
            if (arg5) var value3 = arg5(value10, value11, value, arg9, arg12, value2);
            if (!(value3 === value172 ? fn101(value11, value10, 3, arg5, value2) : value3)) return false;
          }
        }
        return true;
      }
      function fn181(arg) {
        return !(!fn349(arg) || (value1 = arg, value43 && value43 in value1)) && (fn276(arg) ? value195 : value111).test(fn11(arg));
        var value1;
      }
      function fn28(arg) {
        if ("function" == typeof arg) return arg;
        if (null == arg) return fn293;
        if ("object" == typeof arg) return value222(arg) ? fn15(arg[0], arg[1]) : fn367(arg);
        return fn290(arg);
      }
      function fn22(arg2) {
        if (!fn112(arg2)) return value104(arg2);
        var value1 = [];
        for (var value in value242(arg2)) value316.call(arg2, value) && 'constructor' != value && value1.push(value);
        return value1;
      }
      function fn140(arg) {
        if (!fn349(arg)) return function (arg1) {
          var value = [];
          if (null != arg1) {
            for (var value2 in value242(arg1)) value.push(value2);
          }
          return value;
        }(arg);
        var value3 = fn112(arg),
          value1 = [];
        for (var value22 in arg) ("constructor" != value22 || !value3 && value316.call(arg, value22)) && value1.push(value22);
        return value1;
      }
      function fn106(arg, arg1) {
        return arg < arg1;
      }
      function fn303(arg32, arg3) {
        var value2 = -1,
          value1 = fn311(arg32) ? value156(arg32.length) : [];
        value299(arg32, function (arg2, arg, arg1) {
          value1[++value2] = arg3(arg2, arg, arg1);
        });
        return value1;
      }
      function fn367(arg1) {
        var value = fn335(arg1);
        if (1 == value.length && value[0][2]) return fn224(value[0][0], value[0][1]);
        return function (arg) {
          return arg === arg1 || fn350(arg, arg1, value);
        };
      }
      function fn15(arg12, arg) {
        if (fn273(arg12) && fn36(arg)) return fn224(fn222(arg12), arg);
        return function (arg1) {
          var value = fn192(arg1, arg12);
          if (value === value172 && value === arg) return fn178(arg1, arg12);
          return fn101(arg, value, 3);
        };
      }
      function fn152(arg2, arg22, arg42, arg3, arg13) {
        arg2 !== arg22 && value136(arg22, function (arg, arg12) {
          arg13 || (arg13 = new fn1622());
          if (fn349(arg)) !function (arg4, arg10, arg5, arg6, arg14, arg8, arg1) {
            var value = fn120(arg4, arg5),
              value13 = fn120(arg10, arg5),
              value3 = arg1.get(value13);
            if (value3) fn103(arg4, arg5, value3);else {
              var value9 = arg8 ? arg8(value, value13, arg5 + '', arg4, arg10, arg1) : value172,
                value2 = value9 === value172;
              if (value2) {
                var value11 = value222(value13),
                  value12 = !value11 && value213(value13),
                  value7 = !value11 && !value12 && value208(value13);
                value9 = value13;
                if (value11 || value12 || value7) {
                  if (value222(value)) value9 = value;else if (fn163(value)) value9 = fn340(value);else if (value12) {
                    value2 = false;
                    value9 = fn45(value13, true);
                  } else if (value7) {
                    value2 = false;
                    value9 = fn360(value13, true);
                  } else value9 = [];
                } else if (fn157(value13) || value357(value13)) {
                  value9 = value;
                  if (value357(value)) value9 = fn339(value);else fn349(value) && !fn276(value) || (value9 = fn67(value13));
                } else value2 = false;
              }
              value2 && (arg1.set(value13, value9), arg14(value9, value13, arg6, arg8, arg1), arg1.delete(value13));
              fn103(arg4, arg5, value9);
            }
          }(arg2, arg22, arg12, arg42, fn152, arg3, arg13);else {
            var value22 = arg3 ? arg3(fn120(arg2, arg12), arg, arg12 + '', arg2, arg22, arg13) : value172;
            value22 === value172 && (value22 = arg);
            fn103(arg2, arg12, value22);
          }
        }, fn79);
      }
      function fn119(arg, arg1) {
        var value2 = arg.length;
        if (value2) return fn307(arg1 += arg1 < 0 ? value2 : 0, value2) ? arg[arg1] : value172;
      }
      function fn61(arg23, arg4, arg12) {
        arg4 = arg4.length ? fn149(arg4, function (arg2) {
          if (value222(arg2)) return function (arg) {
            return fn261(arg, 1 === arg2.length ? arg2[0] : arg2);
          };
          return arg2;
        }) : [fn293];
        var value3 = -1;
        arg4 = fn149(arg4, fn1442(fn142()));
        return function (arg1, arg2) {
          var value = arg1.length;
          for (arg1.sort(arg2); value--;) arg1[value] = arg1[value].value;
          return arg1;
        }(fn303(arg23, function (arg1, arg22, arg2) {
          return {
            criteria: fn149(arg4, function (arg) {
              return arg(arg1);
            }),
            index: ++value3,
            value: arg1
          };
        }), function (arg, arg1) {
          return function (arg5, arg7, arg3) {
            for (var value2 = -1, value1 = arg5.criteria, value = arg7.criteria, value6 = value1.length, value8 = arg3.length; ++value2 < value6;) {
              var value4 = fn239(value1[value2], value[value2]);
              if (value4) return value2 >= value8 ? value4 : value4 * ("desc" == arg3[value2] ? -1 : 1);
            }
            return arg5.index - arg7.index;
          }(arg, arg1, arg12);
        });
      }
      function fn289(arg6, arg1, arg3) {
        for (var value5 = -1, value2 = arg1.length, value7 = {}; ++value5 < value2;) {
          var value = arg1[value5],
            value4 = fn261(arg6, value);
          arg3(value4, value) && fn180(value7, fn286(value, arg6), value4);
        }
        return value7;
      }
      function fn143(arg6, arg4, arg5, arg2) {
        var value9 = arg2 ? fn122 : fn292,
          value8 = -1,
          value = arg4.length,
          value1 = arg6;
        arg6 === arg4 && (arg4 = fn340(arg4));
        for (arg5 && (value1 = fn149(arg6, fn1442(arg5))); ++value8 < value;) for (var value3 = 0, value10 = arg4[value8], value7 = arg5 ? arg5(value10) : value10; (value3 = value9(value1, value7, value3, arg2)) > -1;) {
          value1 !== arg6 && value53.call(value1, value3, 1);
          value53.call(arg6, value3, 1);
        }
        return arg6;
      }
      function fn148(arg2, arg) {
        for (var value3 = arg2 ? arg.length : 0, value5 = value3 - 1; value3--;) {
          var value4 = arg[value3];
          if (value3 == value5 || value4 !== value1) {
            var value1 = value4;
            if (fn307(value4)) value53.call(arg2, value4, 1);else fn263(arg2, value4);
          }
        }
        return arg2;
      }
      function fn343(arg1, arg) {
        return arg1 + value232(value50() * (arg - arg1 + 1));
      }
      function fn46(arg2, arg) {
        var value1 = '';
        if (!arg2 || arg < 1 || arg > value30) return value1;
        do {
          arg % 2 && (value1 += arg2);
          (arg = value232(arg / 2)) && (arg2 += arg2);
        } while (arg);
        return value1;
      }
      function fn91(arg, arg1) {
        return value98(fn155(arg, arg1, fn293), arg + '');
      }
      function fn173(arg) {
        return fn96(fn269(arg));
      }
      function fn348(arg, arg1) {
        var value2 = fn269(arg);
        return fn325(value2, fn323(arg1, 0, value2.length));
      }
      function fn180(arg9, arg7, arg2, arg3) {
        if (!fn349(arg9)) return arg9;
        for (var value8 = -1, value5 = (arg7 = fn286(arg7, arg9)).length, value4 = value5 - 1, value6 = arg9; null != value6 && ++value8 < value5;) {
          var value = fn222(arg7[value8]),
            value1 = arg2;
          if ('__proto__' === value || "constructor" === value || "prototype" === value) return arg9;
          if (value8 != value4) {
            var value10 = value6[value];
            (value1 = arg3 ? arg3(value10, value, value6) : value172) === value172 && (value1 = fn349(value10) ? value10 : fn307(arg7[value8 + 1]) ? [] : {});
          }
          fn110(value6, value, value1);
          value6 = value6[value];
        }
        return arg9;
      }
      var value217 = value212 ? function (arg1, arg) {
          value212.set(arg1, arg);
          return arg1;
        } : fn293,
        value267 = value176 ? function (arg1, arg) {
          return value176(arg1, 'toString', {
            configurable: true,
            enumerable: false,
            value: fn271(arg),
            writable: true
          });
        } : fn293;
      function fn190(arg) {
        return fn325(fn269(arg));
      }
      function fn184(arg3, arg, arg5) {
        var value4 = -1,
          value2 = arg3.length;
        arg < 0 && (arg = -arg > value2 ? 0 : value2 + arg);
        (arg5 = arg5 > value2 ? value2 : arg5) < 0 && (arg5 += value2);
        value2 = arg > arg5 ? 0 : arg5 - arg >>> 0;
        arg >>>= 0;
        for (var value1 = value156(value2); ++value4 < value2;) value1[value4] = arg3[value4 + arg];
        return value1;
      }
      function fn1722(arg12, arg3) {
        var value2;
        value299(arg12, function (arg2, arg, arg1) {
          return !(value2 = arg3(arg2, arg, arg1));
        });
        return !!value2;
      }
      function fn365(arg5, arg6, arg) {
        var value3 = 0,
          value2 = null == arg5 ? value3 : arg5.length;
        if ("number" == typeof arg6 && arg6 == arg6 && value2 <= 2147483647) {
          for (; value3 < value2;) {
            var value4 = value3 + value2 >>> 1,
              value1 = arg5[value4];
            if (null !== value1 && !fn8(value1) && (arg ? value1 <= arg6 : value1 < arg6)) value3 = value4 + 1;else value2 = value4;
          }
          return value2;
        }
        return fn1(arg5, arg6, fn293, arg);
      }
      function fn1(arg2, arg1, arg5, arg15) {
        var value10 = 0,
          value = null == arg2 ? 0 : arg2.length;
        if (0 === value) return 0;
        for (var value9 = (arg1 = arg5(arg1)) != arg1, value6 = null === arg1, value13 = fn8(arg1), value3 = arg1 === value172; value10 < value;) {
          var value16 = value232((value10 + value) / 2),
            value7 = arg5(arg2[value16]),
            value14 = value7 !== value172,
            value12 = null === value7,
            value11 = value7 == value7,
            value4 = fn8(value7);
          if (value9) var value8 = arg15 || value11;else value8 = value3 ? value11 && (arg15 || value14) : value6 ? value11 && value14 && (arg15 || !value12) : value13 ? value11 && value14 && !value12 && (arg15 || !value4) : !value12 && !value4 && (arg15 ? value7 <= arg1 : value7 < arg1);
          if (value8) value10 = value16 + 1;else value = value16;
        }
        return value319(value, 4294967294);
      }
      function fn188(arg2, arg8) {
        for (var value = -1, value6 = arg2.length, value4 = 0, value7 = []; ++value < value6;) {
          var value3 = arg2[value],
            value5 = arg8 ? arg8(value3) : value3;
          if (!value || !fn62(value5, value1)) {
            var value1 = value5;
            value7[value4++] = 0 === value3 ? 0 : value3;
          }
        }
        return value7;
      }
      function fn355(arg) {
        if ('number' == typeof arg) return arg;
        if (fn8(arg)) return value1652;
        return +arg;
      }
      function fn24(arg) {
        if ('string' == typeof arg) return arg;
        if (value222(arg)) return fn149(arg, fn24) + '';
        if (fn8(arg)) return value262 ? value262.call(arg) : '';
        var value1 = arg + '';
        return '0' == value1 && 1 / arg == -1 / 0 ? '-0' : value1;
      }
      function fn344(arg5, arg6, arg9) {
        var value1 = -1,
          value11 = fn150,
          value3 = arg5.length,
          value7 = true,
          value4 = [],
          value10 = value4;
        if (arg9) {
          value7 = false;
          value11 = fn53;
        } else {
          if (value3 >= 200) {
            var value8 = arg6 ? null : value288(arg5);
            if (value8) return fn452(value8);
            value7 = false;
            value11 = fn912;
            value10 = new fn86();
          } else value10 = arg6 ? [] : value4;
        }
        _0x2a38cf: for (; ++value1 < value3;) {
          var value = arg5[value1],
            value2 = arg6 ? arg6(value) : value;
          value = arg9 || 0 !== value ? value : 0;
          if (value7 && value2 == value2) {
            for (var value12 = value10.length; value12--;) if (value10[value12] === value2) continue _0x2a38cf;
            arg6 && value10.push(value2);
            value4.push(value);
          } else value11(value10, value2, arg9) || (value10 !== value4 && value10.push(value2), value4.push(value));
        }
        return value4;
      }
      function fn263(arg1, arg) {
        return null == (arg1 = fn229(arg1, arg = fn286(arg, arg1))) || delete arg1[fn222(fn362(arg))];
      }
      function fn3(arg, arg3, arg2, arg1) {
        return fn180(arg, arg3, arg2(fn261(arg, arg3)), arg1);
      }
      function fn179(arg5, arg3, arg, arg4) {
        for (var value2 = arg5.length, value1 = arg4 ? value2 : -1; (arg4 ? value1-- : ++value1 < value2) && arg3(arg5[value1], value1, arg5);) {}
        if (arg) return fn184(arg5, arg4 ? 0 : value1, arg4 ? value1 + 1 : value2);
        return fn184(arg5, arg4 ? value1 + 1 : 0, arg4 ? value2 : value1);
      }
      function fn260(arg2, arg22) {
        var value1 = arg2;
        value1 instanceof fn281 && (value1 = value1.value());
        return fn1142(arg22, function (arg1, arg) {
          return arg.func.apply(arg.thisArg, fn76([arg1], arg.args));
        }, value1);
      }
      function fn338(arg3, arg6, arg) {
        var value5 = arg3.length;
        if (value5 < 2) return value5 ? fn344(arg3[0]) : [];
        for (var value1 = -1, value2 = value156(value5); ++value1 < value5;) for (var value7 = arg3[value1], value4 = -1; ++value4 < value5;) value4 != value1 && (value2[value1] = fn43(value2[value1] || value7, arg3[value4], arg6, arg));
        return fn344(fn138(value2, 1), arg6, arg);
      }
      function fn7(arg1, arg4, arg3) {
        for (var value7 = -1, value2 = arg1.length, value = arg4.length, value6 = {}; ++value7 < value2;) {
          var value5 = value7 < value ? arg4[value7] : value172;
          arg3(value6, arg1[value7], value5);
        }
        return value6;
      }
      function fn30(arg) {
        if (fn163(arg)) return arg;
        return [];
      }
      function fn327(arg) {
        return "function" == typeof arg ? arg : fn293;
      }
      function fn286(arg1, arg) {
        if (value222(arg1)) return arg1;
        if (fn273(arg1, arg)) return [arg1];
        return value123(fn305(arg1));
      }
      function fn171(arg, arg2, arg3) {
        var value1 = arg.length;
        arg3 = arg3 === value172 ? value1 : arg3;
        if (!arg2 && arg3 >= value1) return arg;
        return fn184(arg, arg2, arg3);
      }
      var value312 = value100 || function (arg) {
        return value163.clearTimeout(arg);
      };
      function fn45(arg2, arg) {
        if (arg) return arg2.slice();
        var value3 = arg2.length,
          value1 = value21 ? value21(value3) : new arg2.constructor(value3);
        arg2.copy(value1);
        return value1;
      }
      function fn341(arg1) {
        var value = new arg1.constructor(arg1.byteLength);
        new value141(value).set(new value141(arg1));
        return value;
      }
      function fn360(arg, arg2) {
        var value1 = arg2 ? fn341(arg.buffer) : arg.buffer;
        return new arg.constructor(value1, arg.byteOffset, arg.length);
      }
      function fn239(arg1, arg3) {
        if (arg1 !== arg3) {
          var value9 = arg1 !== value172,
            value7 = null === arg1,
            value2 = arg1 == arg1,
            value8 = fn8(arg1),
            value6 = arg3 !== value172,
            value5 = null === arg3,
            value4 = arg3 == arg3,
            value = fn8(arg3);
          if (!value5 && !value && !value8 && arg1 > arg3 || value8 && value6 && value4 && !value5 && !value || value7 && value6 && value4 || !value9 && value4 || !value2) return 1;
          if (!value7 && !value8 && !value && arg1 < arg3 || value && value9 && value2 && !value7 && !value8 || value5 && value9 && value2 || !value6 && value2 || !value4) return -1;
        }
        return 0;
      }
      function fn32(arg2, arg10, arg6, arg7) {
        for (var value8 = -1, value5 = arg2.length, value4 = arg6.length, value3 = -1, value11 = arg10.length, value = value215(value5 - value4, 0), value1 = value156(value11 + value), value9 = !arg7; ++value3 < value11;) value1[value3] = arg10[value3];
        for (; ++value8 < value4;) (value9 || value8 < value5) && (value1[arg6[value8]] = arg2[value8]);
        for (; value--;) value1[value3++] = arg2[value8++];
        return value1;
      }
      function fn309(arg1, arg10, arg13, arg9) {
        for (var value12 = -1, value6 = arg1.length, value4 = -1, value7 = arg13.length, value8 = -1, value3 = arg10.length, value11 = value215(value6 - value7, 0), value2 = value156(value11 + value3), value = !arg9; ++value12 < value11;) value2[value12] = arg1[value12];
        for (var value5 = value12; ++value8 < value3;) value2[value5 + value8] = arg10[value8];
        for (; ++value4 < value7;) (value || value12 < value6) && (value2[value5 + arg13[value4]] = arg1[value12++]);
        return value2;
      }
      function fn340(arg1, arg) {
        var value3 = -1,
          value2 = arg1.length;
        for (arg || (arg = value156(value2)); ++value3 < value2;) arg[value3] = arg1[value3];
        return arg;
      }
      function fn145(arg7, arg5, arg4, arg2) {
        var value3 = !arg4;
        arg4 || (arg4 = {});
        for (var value = -1, value1 = arg5.length; ++value < value1;) {
          var value6 = arg5[value],
            value8 = arg2 ? arg2(arg4[value6], arg7[value6], value6, arg4, arg7) : value172;
          value8 === value172 && (value8 = arg7[value6]);
          if (value3) fn199(arg4, value6, value8);else fn110(arg4, value6, value8);
        }
        return arg4;
      }
      function fn14(arg1, arg2) {
        return function (arg, arg3) {
          var value1 = value222(arg) ? fn862 : fn41,
            value2 = arg2 ? arg2() : {};
          return value1(arg, arg1, fn142(arg3, 2), value2);
        };
      }
      function fn266(arg2) {
        return fn91(function (arg, arg5) {
          var value6 = -1,
            value1 = arg5.length,
            value4 = value1 > 1 ? arg5[value1 - 1] : value172,
            value3 = value1 > 2 ? arg5[2] : value172;
          value4 = arg2.length > 3 && "function" == typeof value4 ? (value1--, value4) : value172;
          value3 && fn187(arg5[0], arg5[1], value3) && (value4 = value1 < 3 ? value172 : value4, value1 = 1);
          for (arg = value242(arg); ++value6 < value1;) {
            var value2 = arg5[value6];
            value2 && arg2(arg, value2, value6, value4);
          }
          return arg;
        });
      }
      function fn114(arg12, arg) {
        return function (arg1, arg2) {
          if (null == arg1) return arg1;
          if (!fn311(arg1)) return arg12(arg1, arg2);
          for (var value3 = arg1.length, value = arg ? value3 : -1, value4 = value242(arg1); (arg ? value-- : ++value < value3) && false !== arg2(value4[value], value, value4);) {}
          return arg1;
        };
      }
      function fn191(arg) {
        return function (arg4, arg7, arg3) {
          for (var value1 = -1, value5 = value242(arg4), value2 = arg3(arg4), value6 = value2.length; value6--;) {
            var value = value2[arg ? value6 : ++value1];
            if (false === arg7(value5[value], value, value5)) break;
          }
          return arg4;
        };
      }
      function fn144(arg) {
        return function (arg1) {
          var value2 = fn442(arg1 = fn305(arg1)) ? fn523(arg1) : value172,
            value = value2 ? value2[0] : arg1.charAt(0),
            value3 = value2 ? fn171(value2, 1).join('') : arg1.slice(1);
          return value[arg]() + value3;
        };
      }
      function fn280(arg2) {
        return function (arg) {
          return fn1142(fn55(fn33(arg).replace(value69, '')), arg2, '');
        };
      }
      function fn257(arg) {
        return function () {
          var value1 = arguments;
          switch (value1.length) {
            case 0:
              return new arg();
            case 1:
              return new arg(value1[0]);
            case 2:
              return new arg(value1[0], value1[1]);
            case 3:
              return new arg(value1[0], value1[1], value1[2]);
            case 4:
              return new arg(value1[0], value1[1], value1[2], value1[3]);
            case 5:
              return new arg(value1[0], value1[1], value1[2], value1[3], value1[4]);
            case 6:
              return new arg(value1[0], value1[1], value1[2], value1[3], value1[4], value1[5]);
            case 7:
              return new arg(value1[0], value1[1], value1[2], value1[3], value1[4], value1[5], value1[6]);
          }
          var value = value2122(arg.prototype),
            value2 = arg.apply(value, value1);
          return fn349(value2) ? value2 : value;
        };
      }
      function fn78(arg5) {
        return function (arg2, arg3, arg4) {
          var value = value242(arg2);
          if (!fn311(arg2)) {
            var value1 = fn142(arg3, 3);
            arg2 = fn167(arg2);
            arg3 = function (arg) {
              return value1(value[arg], arg, value);
            };
          }
          var value5 = arg5(arg2, arg3, arg4);
          if (value5 > -1) return value[value1 ? arg2[value5] : value5];
          return value172;
        };
      }
      function fn324(arg) {
        return fn216(function (arg3) {
          var value12 = arg3.length,
            value5 = value12,
            value4 = fn225.prototype.thru;
          for (arg && arg3.reverse(); value5--;) {
            var value42 = arg3[value5];
            if ("function" != typeof value42) throw new value160(value169);
            if (value4 && !value6 && 'wrapper' == fn170(value42)) var value6 = new fn225([], true);
          }
          for (value5 = value6 ? value5 : value12; ++value5 < value12;) {
            var value7 = fn170(value42 = arg3[value5]),
              value22 = 'wrapper' == value7 ? value80(value42) : value172;
            value6 = value22 && fn68(value22[0]) && 424 == value22[1] && !value22[4].length && 1 == value22[9] ? value6[fn170(value22[0])].apply(value6, value22[3]) : 1 == value42.length && fn68(value42) ? value6[value7]() : value6.thru(value42);
          }
          return function () {
            var value = arguments,
              value2 = value[0];
            if (value6 && 1 == value.length && value222(value2)) return value6.plant(value2).value();
            for (var value1 = 0, value3 = value12 ? arg3[value1].apply(this, value) : value2; ++value1 < value12;) value3 = arg3[value1].call(this, value3);
            return value3;
          };
        });
      }
      function fn301(arg11, arg1, arg42, arg13, arg7, arg14, arg12, arg2, arg32, arg52) {
        var value62 = arg1 & value28,
          value23 = 1 & arg1,
          value82 = 2 & arg1,
          value9 = 24 & arg1,
          value10 = 512 & arg1,
          value15 = value82 ? value172 : fn257(arg11);
        return function value42() {
          for (var value8 = arguments.length, value32 = value156(value8), value5 = value8; value5--;) value32[value5] = arguments[value5];
          if (value9) var value4 = fn44(value42),
            value7 = function (arg3, arg) {
              for (var value1 = arg3.length, value2 = 0; value1--;) arg3[value1] === arg && ++value2;
              return value2;
            }(value32, value4);
          arg13 && (value32 = fn32(value32, arg13, arg7, value9));
          arg14 && (value32 = fn309(value32, arg14, arg12, value9));
          value8 -= value7;
          if (value9 && value8 < arg52) {
            var value22 = fn1623(value32, value4);
            return fn26(arg11, arg1, fn301, value42.placeholder, arg42, value32, value22, arg2, arg32, arg52 - value8);
          }
          var value6 = value23 ? arg42 : this,
            value12 = value82 ? value6[arg11] : arg11;
          value8 = value32.length;
          if (arg2) value32 = function (arg5, arg4) {
            for (var value1 = arg5.length, value3 = value319(arg4.length, value1), value2 = fn340(arg5); value3--;) {
              var value = arg4[value3];
              arg5[value3] = fn307(value, value1) ? value2[value] : value172;
            }
            return arg5;
          }(value32, arg2);else value10 && value8 > 1 && value32.reverse();
          value62 && arg32 < value8 && (value32.length = arg32);
          this && this !== value163 && this instanceof value42 && (value12 = value15 || fn257(value12));
          return value12.apply(value6, value32);
        };
      }
      function fn206(arg14, arg5) {
        return function (arg13, arg4) {
          return function (arg12, arg22, arg3, arg32) {
            fn93(arg12, function (arg1, arg2, arg) {
              arg22(arg32, arg3(arg1), arg2, arg);
            });
            return arg32;
          }(arg13, arg14, arg5(arg4), {});
        };
      }
      function fn54(arg12, arg) {
        return function (arg2, arg1) {
          var value;
          if (arg2 === value172 && arg1 === value172) return arg;
          arg2 !== value172 && (value = arg2);
          if (arg1 !== value172) {
            if (value === value172) return arg1;
            if ("string" == typeof arg2 || "string" == typeof arg1) {
              arg2 = fn24(arg2);
              arg1 = fn24(arg1);
            } else {
              arg2 = fn355(arg2);
              arg1 = fn355(arg1);
            }
            value = arg12(arg2, arg1);
          }
          return value;
        };
      }
      function fn105(arg3) {
        return fn216(function (arg2) {
          arg2 = fn149(arg2, fn1442(fn142()));
          return fn91(function (arg1) {
            var value = this;
            return arg3(arg2, function (arg) {
              return fn90(arg, value, arg1);
            });
          });
        });
      }
      function fn37(arg2, arg) {
        var value3 = (arg = arg === value172 ? '\x20' : fn24(arg)).length;
        if (value3 < 2) return value3 ? fn46(arg, arg2) : arg;
        var value1 = fn46(arg, value314(arg2 / fn1522(arg)));
        if (fn442(arg)) return fn171(fn523(value1), 0, arg2).join('');
        return value1.slice(0, arg2);
      }
      function fn253(arg3) {
        return function (arg2, arg22, arg1) {
          arg1 && "number" != typeof arg1 && fn187(arg2, arg22, arg1) && (arg22 = arg1 = value172);
          arg2 = fn49(arg2);
          if (arg22 === value172) {
            arg22 = arg2;
            arg2 = 0;
          } else arg22 = fn49(arg22);
          return function (arg5, arg6, arg4, arg) {
            for (var value3 = -1, value1 = value215(value314((arg6 - arg5) / (arg4 || 1)), 0), value2 = value156(value1); value1--;) {
              value2[arg ? value1 : ++value3] = arg5;
              arg5 += arg4;
            }
            return value2;
          }(arg2, arg22, arg1 = arg1 === value172 ? arg2 < arg22 ? 1 : -1 : fn49(arg1), arg3);
        };
      }
      function fn209(arg2) {
        return function (arg, arg1) {
          'string' == typeof arg && "string" == typeof arg1 || (arg = fn48(arg), arg1 = fn48(arg1));
          return arg2(arg, arg1);
        };
      }
      function fn26(arg1, arg5, arg7, arg12, arg10, arg4, arg8, arg, arg9, arg2) {
        var value3 = 8 & arg5;
        arg5 |= value3 ? value832 : value167;
        4 & (arg5 &= ~(value3 ? value167 : value832)) || (arg5 &= -4);
        var value11 = [arg1, arg5, arg10, value3 ? arg4 : value172, value3 ? arg8 : value172, value3 ? value172 : arg4, value3 ? value172 : arg8, arg, arg9, arg2],
          value6 = arg7.apply(value172, value11);
        fn68(arg1) && value151(value6, value11);
        value6.placeholder = arg12;
        return fn99(value6, arg1, arg5);
      }
      function fn255(arg3) {
        var value12 = value238[arg3];
        return function (arg, arg2) {
          arg = fn48(arg);
          if ((arg2 = null == arg2 ? 0 : value319(fn287(arg2), 292)) && value330(arg)) {
            var value1 = (fn305(arg) + 'e').split('e');
            return +((value1 = (fn305(value12(value1[0] + 'e' + (+value1[1] + arg2))) + 'e').split('e'))[0] + 'e' + (+value1[1] - arg2));
          }
          return value12(arg);
        };
      }
      var value288 = value94 && 1 / fn452(new value94([, -0]))[1] == value54 ? function (arg) {
        return new value94(arg);
      } : fn256;
      function fn300(arg3) {
        return function (arg12) {
          var value = value220(arg12);
          if (value == value1122) return fn1592(arg12);
          if (value == value46) return function (arg2) {
            var value1 = -1,
              value2 = Array(arg2.size);
            arg2.forEach(function (arg) {
              value2[++value1] = [arg, arg];
            });
            return value2;
          }(arg12);
          return function (arg1, arg2) {
            return fn149(arg2, function (arg) {
              return [arg, arg1[arg]];
            });
          }(arg12, arg3(arg12));
        };
      }
      function fn117(arg62, arg8, arg22, arg6, arg7, arg42, arg14, arg10) {
        var value122 = 2 & arg8;
        if (!value122 && 'function' != typeof arg62) throw new value160(value169);
        var value11 = arg6 ? arg6.length : 0;
        value11 || (arg8 &= -97, arg6 = arg7 = value172);
        arg14 = arg14 === value172 ? arg14 : value215(fn287(arg14), 0);
        arg10 = arg10 === value172 ? arg10 : fn287(arg10);
        value11 -= arg7 ? arg7.length : 0;
        if (arg8 & value167) {
          var value52 = arg6,
            value9 = arg7;
          arg6 = arg7 = value172;
        }
        var value12 = value122 ? value172 : value80(arg62),
          value13 = [arg62, arg8, arg22, arg6, arg7, value52, value9, arg42, arg14, arg10];
        value12 && function (arg, arg3) {
          var value2 = arg[1],
            value7 = arg3[1],
            value1 = value2 | value7,
            value6 = value1 < 131,
            value4 = value7 == value28 && 8 == value2 || value7 == value28 && value2 == value138 && arg[7].length <= arg3[8] || 384 == value7 && arg3[7].length <= arg3[8] && 8 == value2;
          if (!value6 && !value4) return arg;
          1 & value7 && (arg[2] = arg3[2], value1 |= 1 & value2 ? 0 : 4);
          var value8 = arg3[3];
          if (value8) {
            var value5 = arg[3];
            arg[3] = value5 ? fn32(value5, value8, arg3[4]) : value8;
            arg[4] = value5 ? fn1623(arg[3], value170) : arg3[4];
          }
          (value8 = arg3[5]) && (value5 = arg[5], arg[5] = value5 ? fn309(value5, value8, arg3[6]) : value8, arg[6] = value5 ? fn1623(arg[5], value170) : arg3[6]);
          (value8 = arg3[7]) && (arg[7] = value8);
          value7 & value28 && (arg[8] = null == arg[8] ? arg3[8] : value319(arg[8], arg3[8]));
          null == arg[9] && (arg[9] = arg3[9]);
          arg[0] = arg3[0];
          arg[1] = value1;
        }(value13, value12);
        arg62 = value13[0];
        arg8 = value13[1];
        arg22 = value13[2];
        arg6 = value13[3];
        arg7 = value13[4];
        !(arg10 = value13[9] = value13[9] === value172 ? value122 ? 0 : arg62.length : value215(value13[9] - value11, 0)) && 24 & arg8 && (arg8 &= -25);
        if (arg8 && 1 != arg8) value33 = 8 == arg8 || arg8 == value1532 ? function (arg1, arg2, arg) {
          var value32 = fn257(arg1);
          return function value1() {
            for (var value4 = arguments.length, value5 = value156(value4), value3 = value4, value2 = fn44(value1); value3--;) value5[value3] = arguments[value3];
            var value = value4 < 3 && value5[0] !== value2 && value5[value4 - 1] !== value2 ? [] : fn1623(value5, value2);
            if ((value4 -= value.length) < arg) return fn26(arg1, arg2, fn301, value1.placeholder, value172, value5, value, value172, value172, arg - value4);
            return fn90(this && this !== value163 && this instanceof value1 ? value32 : arg1, this, value5);
          };
        }(arg62, arg8, arg10) : arg8 != value832 && 33 != arg8 || arg7.length ? fn301.apply(value172, value13) : function (arg5, arg1, arg3, arg2) {
          var value42 = 1 & arg1,
            value7 = fn257(arg5);
          return function value1() {
            for (var value4 = -1, value6 = arguments.length, value3 = -1, value5 = arg2.length, value2 = value156(value5 + value6), value = this && this !== value163 && this instanceof value1 ? value7 : arg5; ++value3 < value5;) value2[value3] = arg2[value3];
            for (; value6--;) value2[value3++] = arguments[++value4];
            return fn90(value, value42 ? arg3 : this, value2);
          };
        }(arg62, arg8, arg22, arg6);else var value33 = function (arg, arg2, arg4) {
          var value1 = 1 & arg2,
            value3 = fn257(arg);
          return function value() {
            return (this && this !== value163 && this instanceof value ? value3 : arg).apply(value1 ? arg4 : this, arguments);
          };
        }(arg62, arg8, arg22);
        return fn99((value12 ? value217 : value151)(value33, value13), arg62, arg8);
      }
      function fn236(arg, arg3, arg2, arg1) {
        return arg === value172 || fn62(arg, value298[arg2]) && !value316.call(arg1, arg2) ? arg3 : arg;
      }
      function fn126(arg1, arg4, arg3, arg5, arg, arg2) {
        fn349(arg1) && fn349(arg4) && (arg2.set(arg4, arg1), fn152(arg1, arg4, value172, fn126, arg2), arg2.delete(arg4));
        return arg1;
      }
      function fn246(arg) {
        return fn157(arg) ? value172 : arg;
      }
      function fn162(arg4, arg7, arg2, arg11, arg15, arg10) {
        var value6 = 1 & arg2,
          value1 = arg4.length,
          value12 = arg7.length;
        if (value1 != value12 && !(value6 && value12 > value1)) return false;
        var value13 = arg10.get(arg4),
          value16 = arg10.get(arg7);
        if (value13 && value16) return value13 == arg7 && value16 == arg4;
        var value3 = -1,
          value5 = true,
          value2 = 2 & arg2 ? new fn86() : value172;
        arg10.set(arg4, arg7);
        for (arg10.set(arg7, arg4); ++value3 < value1;) {
          var value8 = arg4[value3],
            value9 = arg7[value3];
          if (arg11) var value14 = value6 ? arg11(value9, value8, value3, arg7, arg4, arg10) : arg11(value8, value9, value3, arg4, arg7, arg10);
          if (value14 !== value172) {
            if (value14) continue;
            value5 = false;
            break;
          }
          if (value2) {
            if (!fn31(arg7, function (arg1, arg) {
              if (!fn912(value2, arg) && (value8 === arg1 || arg15(value8, arg1, arg2, arg11, arg10))) return value2.push(arg);
            })) {
              value5 = false;
              break;
            }
          } else {
            if (value8 !== value9 && !arg15(value8, value9, arg2, arg11, arg10)) {
              value5 = false;
              break;
            }
          }
        }
        arg10.delete(arg4);
        arg10.delete(arg7);
        return value5;
      }
      function fn216(arg) {
        return value98(fn155(arg, value172, fn83), arg + '');
      }
      function fn57(arg) {
        return fn52(arg, fn167, value226);
      }
      function fn373(arg) {
        return fn52(arg, fn79, value200);
      }
      var value80 = value212 ? function (arg) {
        return value212.get(arg);
      } : fn256;
      function fn170(arg2) {
        for (var value5 = arg2.name + '', value3 = value252[value5], value = value316.call(value252, value5) ? value3.length : 0; value--;) {
          var value1 = value3[value],
            value4 = value1.func;
          if (null == value4 || value4 == arg2) return value1.name;
        }
        return value5;
      }
      function fn44(arg) {
        return (value316.call(fn270, "placeholder") ? fn270 : arg).placeholder;
      }
      function fn142() {
        var value = fn270.iteratee || fn234;
        value = value === fn234 ? fn28 : value;
        if (arguments.length) return value(arguments[0], arguments[1]);
        return value;
      }
      function fn66(arg4, arg) {
        var value1,
          value2,
          value3 = arg4.__data__;
        if ("string" == (value2 = typeof (value1 = arg)) || 'number' == value2 || "symbol" == value2 || "boolean" == value2 ? "__proto__" !== value1 : null === value1) return value3['string' == typeof arg ? "string" : "hash"];
        return value3.map;
      }
      function fn335(arg3) {
        for (var value2 = fn167(arg3), value1 = value2.length; value1--;) {
          var value4 = value2[value1],
            value = arg3[value4];
          value2[value1] = [value4, value, fn36(value)];
        }
        return value2;
      }
      function fn304(arg22, arg2) {
        var value1 = function (arg1, arg) {
          if (null == arg1) return value172;
          return arg1[arg];
        }(arg22, arg2);
        return fn181(value1) ? value1 : value172;
      }
      var value226 = value274 ? function (arg2) {
          if (null == arg2) return [];
          arg2 = value242(arg2);
          return fn38(value274(arg2), function (arg) {
            return value265.call(arg2, arg);
          });
        } : fn85,
        value200 = value274 ? function (arg) {
          for (var value1 = []; arg;) {
            fn76(value1, value226(arg));
            arg = value203(arg);
          }
          return value1;
        } : fn85,
        value220 = fn82;
      function fn243(arg2, arg6, arg1) {
        for (var value4 = -1, value5 = (arg6 = fn286(arg6, arg2)).length, value = false; ++value4 < value5;) {
          var value3 = fn222(arg6[value4]);
          if (!(value = null != arg2 && arg1(arg2, value3))) break;
          arg2 = arg2[value3];
        }
        if (value || ++value4 != value5) return value;
        return !!(value5 = null == arg2 ? 0 : arg2.length) && fn72(value5) && fn307(value3, value5) && (value222(arg2) || value357(arg2));
      }
      function fn67(arg) {
        if ("function" != typeof arg.constructor || fn112(arg)) return {};
        return value2122(value203(arg));
      }
      function fn134(arg) {
        return value222(arg) || value357(arg) || !!(value227 && arg && arg[value227]);
      }
      function fn307(arg2, arg) {
        var value1 = typeof arg2;
        return !!(arg = null == arg ? value30 : arg) && ('number' == value1 || 'symbol' != value1 && value1362.test(arg2)) && arg2 > -1 && arg2 % 1 == 0 && arg2 < arg;
      }
      function fn187(arg, arg2, arg1) {
        if (!fn349(arg1)) return false;
        var value3 = typeof arg2;
        return !!('number' == value3 ? fn311(arg1) && fn307(arg2, arg1.length) : "string" == value3 && arg2 in arg1) && fn62(arg1[arg2], arg);
      }
      function fn273(arg1, arg2) {
        if (value222(arg1)) return false;
        var value = typeof arg1;
        return !('number' != value && "symbol" != value && 'boolean' != value && null != arg1 && !fn8(arg1)) || value1212.test(arg1) || !value162.test(arg1) || null != arg2 && arg1 in value242(arg2);
      }
      function fn68(arg1) {
        var value3 = fn170(arg1),
          value2 = fn270[value3];
        if ('function' != typeof value2 || !(value3 in fn281.prototype)) return false;
        if (arg1 === value2) return true;
        var value = value80(value2);
        return !!value && arg1 === value[0];
      }
      (value211 && value220(new value211(new ArrayBuffer(1))) != value117 || value240 && value220(new value240()) != value1122 || value317 && value220(value317.resolve()) != value152 || value94 && value220(new value94()) != value46 || value374 && value220(new value374()) != value243) && (value220 = function (arg1) {
        var value3 = fn82(arg1),
          value = value3 == value124 ? arg1.constructor : value172,
          value2 = value ? fn11(value) : '';
        if (value2) switch (value2) {
          case value2322:
            return value117;
          case value264:
            return value1122;
          case value283:
            return value152;
          case value118:
            return value46;
          case value70:
            return value243;
        }
        return value3;
      });
      var value318 = value310 ? fn276 : fn345;
      function fn112(arg1) {
        var value = arg1 && arg1.constructor;
        return arg1 === ('function' == typeof value && value.prototype || value298);
      }
      function fn36(arg) {
        return arg == arg && !fn349(arg);
      }
      function fn224(arg1, arg2) {
        return function (arg) {
          return null != arg && arg[arg1] === arg2 && (arg2 !== value172 || arg1 in value242(arg));
        };
      }
      function fn155(arg1, arg, arg2) {
        arg = value215(arg === value172 ? arg1.length - 1 : arg, 0);
        return function () {
          for (var value1 = arguments, value3 = -1, value2 = value215(value1.length - arg, 0), value = value156(value2); ++value3 < value2;) value[value3] = value1[arg + value3];
          value3 = -1;
          for (var value4 = value156(arg + 1); ++value3 < arg;) value4[value3] = value1[value3];
          value4[arg] = arg2(value);
          return fn90(arg1, this, value4);
        };
      }
      function fn229(arg, arg1) {
        if (arg1.length < 2) return arg;
        return fn261(arg, fn184(arg1, 0, -1));
      }
      function fn120(arg, arg1) {
        if (("constructor" !== arg1 || "function" != typeof arg[arg1]) && "__proto__" != arg1) return arg[arg1];
      }
      var value151 = fn51(value217),
        value210 = value321 || function (arg, arg1) {
          return value163.setTimeout(arg, arg1);
        },
        value98 = fn51(value267);
      function fn99(arg2, arg13, arg22) {
        var value32 = arg13 + '';
        return value98(arg2, function (arg, arg1) {
          var value2 = arg1.length;
          if (!value2) return arg;
          var value3 = value2 - 1;
          arg1[value3] = (value2 > 1 ? '&\x20' : '') + arg1[value3];
          arg1 = arg1.join(value2 > 2 ? ',\x20' : '\x20');
          return arg.replace(value56, "{\n/* [wrapped with " + arg1 + "] */\n");
        }(value32, function (arg, arg12) {
          fn118(value1032, function (arg1) {
            var value = '_.' + arg1[0];
            arg12 & arg1[1] && !fn150(arg, value) && arg.push(value);
          });
          return arg.sort();
        }(function (arg1) {
          var value = arg1.match(value1092);
          if (value) return value[1].split(value65);
          return [];
        }(value32), arg22)));
      }
      function fn51(arg2) {
        var value12 = 0,
          value2 = 0;
        return function () {
          var value = value333(),
            value1 = 16 - (value - value2);
          value2 = value;
          if (value1 > 0) {
            if (++value12 >= 800) return arguments[0];
          } else value12 = 0;
          return arg2.apply(value172, arguments);
        };
      }
      function fn325(arg4, arg3) {
        var value5 = -1,
          value6 = arg4.length,
          value = value6 - 1;
        for (arg3 = arg3 === value172 ? value6 : arg3; ++value5 < arg3;) {
          var value1 = fn343(value5, value),
            value2 = arg4[value1];
          arg4[value1] = arg4[value5];
          arg4[value5] = value2;
        }
        arg4.length = arg3;
        return arg4;
      }
      var value632,
        value146,
        value284,
        value123 = (value632 = function (arg12) {
          var value = [];
          46 === arg12.charCodeAt(0) && value.push('');
          arg12.replace(value732, function (arg1, arg3, arg, arg2) {
            value.push(arg ? arg2.replace(value145, '$1') : arg3 || arg1);
          });
          return value;
        }, value146 = fn56(value632, function (arg) {
          500 === value284.size && value284.clear();
          return arg;
        }), value284 = value146.cache, value146);
      function fn222(arg) {
        if ('string' == typeof arg || fn8(arg)) return arg;
        var value1 = arg + '';
        return '0' == value1 && 1 / arg == -1 / 0 ? '-0' : value1;
      }
      function fn11(arg) {
        if (null != arg) {
          try {
            return value306.call(arg);
          } catch (value) {}
          try {
            return arg + '';
          } catch (value) {}
        }
        return '';
      }
      function fn177(arg) {
        if (arg instanceof fn281) return arg.clone();
        var value1 = new fn225(arg.__wrapped__, arg.__chain__);
        value1.__actions__ = fn340(arg.__actions__);
        value1.__index__ = arg.__index__;
        value1.__values__ = arg.__values__;
        return value1;
      }
      var value364 = fn91(function (arg, arg1) {
          if (fn163(arg)) return fn43(arg, fn138(arg1, 1, fn163, true));
          return [];
        }),
        value158 = fn91(function (arg1, arg) {
          var value2 = fn362(arg);
          fn163(value2) && (value2 = value172);
          if (fn163(arg1)) return fn43(arg1, fn138(arg, 1, fn163, true), fn142(value2, 2));
          return [];
        }),
        value245 = fn91(function (arg, arg1) {
          var value2 = fn362(arg1);
          fn163(value2) && (value2 = value172);
          if (fn163(arg)) return fn43(arg, fn138(arg1, 1, fn163, true), value172, value2);
          return [];
        });
      function fn111(arg4, arg1, arg) {
        var value2 = null == arg4 ? 0 : arg4.length;
        if (!value2) return -1;
        var value3 = null == arg ? 0 : fn287(arg);
        value3 < 0 && (value3 = value215(value2 + value3, 0));
        return fn70(arg4, fn142(arg1, 3), value3);
      }
      function fn166(arg2, arg, arg1) {
        var value3 = null == arg2 ? 0 : arg2.length;
        if (!value3) return -1;
        var value4 = value3 - 1;
        arg1 !== value172 && (value4 = fn287(arg1), value4 = arg1 < 0 ? value215(value3 + value4, 0) : value319(value4, value3 - 1));
        return fn70(arg2, fn142(arg, 3), value4, true);
      }
      function fn83(arg) {
        if (null != arg && arg.length) return fn138(arg, 1);
        return [];
      }
      function fn131(arg) {
        if (arg && arg.length) return arg[0];
        return value172;
      }
      var value192 = fn91(function (arg1) {
          var value = fn149(arg1, fn30);
          if (value.length && value[0] === arg1[0]) return fn113(value);
          return [];
        }),
        value237 = fn91(function (arg) {
          var value1 = fn362(arg),
            value2 = fn149(arg, fn30);
          if (value1 === fn362(value2)) value1 = value172;else value2.pop();
          if (value2.length && value2[0] === arg[0]) return fn113(value2, fn142(value1, 2));
          return [];
        }),
        value375 = fn91(function (arg) {
          var value2 = fn362(arg),
            value1 = fn149(arg, fn30);
          (value2 = 'function' == typeof value2 ? value2 : value172) && value1.pop();
          if (value1.length && value1[0] === arg[0]) return fn113(value1, value172, value2);
          return [];
        });
      function fn362(arg1) {
        var value = null == arg1 ? 0 : arg1.length;
        if (value) return arg1[value - 1];
        return value172;
      }
      var value258 = fn91(fn20);
      function fn20(arg, arg1) {
        if (arg && arg.length && arg1 && arg1.length) return fn143(arg, arg1);
        return arg;
      }
      var value47 = fn216(function (arg3, arg2) {
        var value1 = null == arg3 ? 0 : arg3.length,
          value = fn129(arg3, arg2);
        fn148(arg3, fn149(arg2, function (arg) {
          if (fn307(arg, value1)) return +arg;
          return arg;
        }).sort(fn239));
        return value;
      });
      function fn204(arg) {
        if (null == arg) return arg;
        return value76.call(arg);
      }
      var value84 = fn91(function (arg) {
          return fn344(fn138(arg, 1, fn163, true));
        }),
        value320 = fn91(function (arg) {
          var value1 = fn362(arg);
          fn163(value1) && (value1 = value172);
          return fn344(fn138(arg, 1, fn163, true), fn142(value1, 2));
        }),
        value241 = fn91(function (arg1) {
          var value = fn362(arg1);
          value = "function" == typeof value ? value : value172;
          return fn344(fn138(arg1, 1, fn163, true), value172, value);
        });
      function fn366(arg2) {
        if (!arg2 || !arg2.length) return [];
        var value1 = 0;
        arg2 = fn38(arg2, function (arg) {
          if (fn163(arg)) {
            value1 = value215(arg.length, value1);
            return true;
          }
        });
        return fn63(value1, function (arg) {
          return fn149(arg2, fn50(arg));
        });
      }
      function fn65(arg22, arg2) {
        if (!arg22 || !arg22.length) return [];
        var value1 = fn366(arg22);
        if (null == arg2) return value1;
        return fn149(value1, function (arg) {
          return fn90(arg2, value172, arg);
        });
      }
      var value197 = fn91(function (arg1, arg) {
          if (fn163(arg1)) return fn43(arg1, arg);
          return [];
        }),
        value353 = fn91(function (arg) {
          return fn338(fn38(arg, fn163));
        }),
        value63 = fn91(function (arg) {
          var value1 = fn362(arg);
          fn163(value1) && (value1 = value172);
          return fn338(fn38(arg, fn163), fn142(value1, 2));
        }),
        value40 = fn91(function (arg) {
          var value1 = fn362(arg);
          value1 = "function" == typeof value1 ? value1 : value172;
          return fn338(fn38(arg, fn163), value172, value1);
        }),
        value218 = fn91(fn366),
        value228 = fn91(function (arg2) {
          var value = arg2.length,
            value1 = value > 1 ? arg2[value - 1] : value172;
          value1 = "function" == typeof value1 ? (arg2.pop(), value1) : value172;
          return fn65(arg2, value1);
        });
      function fn29(arg1) {
        var value = fn270(arg1);
        value.__chain__ = true;
        return value;
      }
      function fn193(arg, arg1) {
        return arg1(arg);
      }
      var value308 = fn216(function (arg3) {
          var value4 = arg3.length,
            value1 = value4 ? arg3[0] : 0,
            value2 = this.__wrapped__,
            value = function (arg) {
              return fn129(arg, arg3);
            };
          if (!(value4 > 1 || this.__actions__.length) && value2 instanceof fn281 && fn307(value1)) {
            (value2 = value2.slice(value1, +value1 + (value4 ? 1 : 0))).__actions__.push({
              func: fn193,
              args: [value],
              thisArg: value172
            });
            return new fn225(value2, this.__chain__).thru(function (arg) {
              value4 && !arg.length && arg.push(value172);
              return arg;
            });
          }
          return this.thru(value);
        }),
        value102 = fn14(function (arg1, arg2, arg) {
          if (value316.call(arg1, arg)) ++arg1[arg];else fn199(arg1, arg, 1);
        }),
        value58 = fn78(fn111),
        value201 = fn78(fn166);
      function fn522(arg1, arg) {
        return (value222(arg1) ? fn118 : value299)(arg1, fn142(arg, 3));
      }
      function fn169(arg1, arg) {
        return (value222(arg1) ? fn1052 : value93)(arg1, fn142(arg, 3));
      }
      var value186 = fn14(function (arg1, arg2, arg) {
          if (value316.call(arg1, arg)) arg1[arg].push(arg2);else fn199(arg1, arg, [arg2]);
        }),
        value334 = fn91(function (arg5, arg2, arg3) {
          var value2 = -1,
            value4 = "function" == typeof arg2,
            value1 = fn311(arg5) ? value156(arg5.length) : [];
          value299(arg5, function (arg) {
            value1[++value2] = value4 ? fn90(arg2, arg, arg3) : fn352(arg, arg2, arg3);
          });
          return value1;
        }),
        value109 = fn14(function (arg1, arg, arg2) {
          fn199(arg1, arg2, arg);
        });
      function fn235(arg, arg1) {
        return (value222(arg) ? fn149 : fn303)(arg, fn142(arg1, 3));
      }
      var value1022 = fn14(function (arg, arg1, arg2) {
          arg[arg2 ? 0 : 1].push(arg1);
        }, function () {
          return [[], []];
        }),
        value278 = fn91(function (arg2, arg1) {
          if (null == arg2) return [];
          var value = arg1.length;
          if (value > 1 && fn187(arg2, arg1[0], arg1[1])) arg1 = [];else value > 2 && fn187(arg1[0], arg1[1], arg1[2]) && (arg1 = [arg1[0]]);
          return fn61(arg2, fn138(arg1, 1), []);
        }),
        value370 = value277 || function () {
          return value163.Date.now();
        };
      function fn295(arg, arg1, arg2) {
        arg1 = arg2 ? value172 : arg1;
        arg1 = arg && null == arg1 ? arg.length : arg1;
        return fn117(arg, value28, value172, value172, value172, value172, arg1);
      }
      function fn294(arg1, arg) {
        var value2;
        if ("function" != typeof arg) throw new value160(value169);
        arg1 = fn287(arg1);
        return function () {
          --arg1 > 0 && (value2 = arg.apply(this, arguments));
          arg1 <= 1 && (arg = value172);
          return value2;
        };
      }
      var value35 = fn91(function (arg3, arg4, arg) {
          var value2 = 1;
          if (arg.length) {
            var value1 = fn1623(arg, fn44(value35));
            value2 |= value832;
          }
          return fn117(arg3, value2, arg4, arg, value1);
        }),
        value297 = fn91(function (arg2, arg, arg1) {
          var value3 = 3;
          if (arg1.length) {
            var value4 = fn1623(arg1, fn44(value297));
            value3 |= value832;
          }
          return fn117(arg, value3, arg2, arg1, value4);
        });
      function fn346(arg3, arg8, arg6) {
        var value7,
          value13,
          value12,
          value22,
          value4,
          value11,
          value9 = 0,
          value15 = false,
          value122 = false,
          value14 = true;
        if ('function' != typeof arg3) throw new value160(value169);
        function fn5(arg) {
          var value1 = value7,
            value2 = value13;
          value7 = value13 = value172;
          value9 = arg;
          return value22 = arg3.apply(value2, value1);
        }
        function fn16(arg1) {
          var value = arg1 - value11;
          return value11 === value172 || value >= arg8 || value < 0 || value122 && arg1 - value9 >= value12;
        }
        function fn2() {
          var value = value370();
          if (fn16(value)) return fn17(value);
          value4 = value210(fn2, function (arg) {
            var value1 = arg8 - (arg - value11);
            if (value122) return value319(value1, value12 - (arg - value9));
            return value1;
          }(value));
        }
        function fn17(arg) {
          value4 = value172;
          if (value14 && value7) return fn5(arg);
          value7 = value13 = value172;
          return value22;
        }
        function fn10() {
          var value1 = value370(),
            value = fn16(value1);
          value7 = arguments;
          value13 = this;
          value11 = value1;
          if (value) {
            if (value4 === value172) return function (arg) {
              value9 = arg;
              value4 = value210(fn2, arg8);
              if (value15) return fn5(arg);
              return value22;
            }(value11);
            if (value122) {
              value312(value4);
              value4 = value210(fn2, arg8);
              return fn5(value11);
            }
          }
          value4 === value172 && (value4 = value210(fn2, arg8));
          return value22;
        }
        arg8 = fn48(arg8) || 0;
        fn349(arg6) && (value15 = !!arg6.leading, value12 = (value122 = "maxWait" in arg6) ? value215(fn48(arg6.maxWait) || 0, arg8) : value12, value14 = "trailing" in arg6 ? !!arg6.trailing : value14);
        fn10.cancel = function () {
          value4 !== value172 && value312(value4);
          value9 = 0;
          value7 = value11 = value13 = value4 = value172;
        };
        fn10.flush = function () {
          if (value4 === value172) return value22;
          return fn17(value370());
        };
        return fn10;
      }
      var value75 = fn91(function (arg1, arg) {
          return fn159(arg1, 1, arg);
        }),
        value337 = fn91(function (arg2, arg1, arg) {
          return fn159(arg2, fn48(arg1) || 0, arg);
        });
      function fn56(arg, arg1) {
        if ("function" != typeof arg || null != arg1 && "function" != typeof arg1) throw new value160(value169);
        var value22 = function () {
          var value2 = arguments,
            value3 = arg1 ? arg1.apply(this, value2) : value2[0],
            value = value22.cache;
          if (value.has(value3)) return value.get(value3);
          var value1 = arg.apply(this, value2);
          value22.cache = value.set(value3, value1) || value;
          return value1;
        };
        value22.cache = new (fn56.Cache || fn205)();
        return value22;
      }
      function fn39(arg) {
        if ("function" != typeof arg) throw new value160(value169);
        return function () {
          var value = arguments;
          switch (value.length) {
            case 0:
              return !arg.call(this);
            case 1:
              return !arg.call(this, value[0]);
            case 2:
              return !arg.call(this, value[0], value[1]);
            case 3:
              return !arg.call(this, value[0], value[1], value[2]);
          }
          return !arg.apply(this, value);
        };
      }
      fn56.Cache = fn205;
      var value108 = fn91(function (arg, arg2) {
          var value1 = (arg2 = 1 == arg2.length && value222(arg2[0]) ? fn149(arg2[0], fn1442(fn142())) : fn149(fn138(arg2, 1), fn1442(fn142()))).length;
          return fn91(function (arg1) {
            for (var value2 = -1, value = value319(arg1.length, value1); ++value2 < value;) arg1[value2] = arg2[value2].call(this, arg1[value2]);
            return fn90(arg, this, arg1);
          });
        }),
        value1822 = fn91(function (arg, arg2) {
          var value1 = fn1623(arg2, fn44(value1822));
          return fn117(arg, value832, value172, arg2, value1);
        }),
        value133 = fn91(function (arg1, arg2) {
          var value = fn1623(arg2, fn44(value133));
          return fn117(arg1, value167, value172, arg2, value);
        }),
        value115 = fn216(function (arg1, arg) {
          return fn117(arg1, value138, value172, value172, value172, arg);
        });
      function fn62(arg1, arg) {
        return arg1 === arg || arg1 != arg1 && arg != arg;
      }
      var value116 = fn209(fn302),
        value254 = fn209(function (arg, arg1) {
          return arg >= arg1;
        }),
        value357 = fn128(function () {
          return arguments;
        }()) ? fn128 : function (arg) {
          return fn13(arg) && value316.call(arg, "callee") && !value265.call(arg, 'callee');
        },
        value222 = value156.isArray,
        value185 = value96 ? fn1442(value96) : function (arg) {
          return fn13(arg) && fn82(arg) == value842;
        };
      function fn311(arg) {
        return null != arg && fn72(arg.length) && !fn276(arg);
      }
      function fn163(arg) {
        return fn13(arg) && fn311(arg);
      }
      var value213 = value251 || fn345,
        value230 = value25 ? fn1442(value25) : function (arg) {
          return fn13(arg) && fn82(arg) == value942;
        };
      function fn69(arg) {
        if (!fn13(arg)) return false;
        var value1 = fn82(arg);
        return value1 == value722 || "[object DOMException]" == value1 || "string" == typeof arg.message && "string" == typeof arg.name && !fn157(arg);
      }
      function fn276(arg) {
        if (!fn349(arg)) return false;
        var value1 = fn82(arg);
        return value1 == value204 || value1 == value55 || "[object AsyncFunction]" == value1 || "[object Proxy]" == value1;
      }
      function fn59(arg) {
        return "number" == typeof arg && arg == fn287(arg);
      }
      function fn72(arg) {
        return "number" == typeof arg && arg > -1 && arg % 1 == 0 && arg <= value30;
      }
      function fn349(arg) {
        var value1 = typeof arg;
        return null != arg && ("object" == value1 || 'function' == value1);
      }
      function fn13(arg) {
        return null != arg && "object" == typeof arg;
      }
      var value182 = value952 ? fn1442(value952) : function (arg) {
        return fn13(arg) && value220(arg) == value1122;
      };
      function fn347(arg) {
        return "number" == typeof arg || fn13(arg) && fn82(arg) == value802;
      }
      function fn157(arg1) {
        if (!fn13(arg1) || fn82(arg1) != value124) return false;
        var value2 = value203(arg1);
        if (null === value2) return true;
        var value = value316.call(value2, "constructor") && value2.constructor;
        return "function" == typeof value && value instanceof value && value306.call(value) == value147;
      }
      var value1222 = value49 ? fn1442(value49) : function (arg) {
          return fn13(arg) && fn82(arg) == value44;
        },
        value71 = value982 ? fn1442(value982) : function (arg) {
          return fn13(arg) && value220(arg) == value46;
        };
      function fn282(arg) {
        return "string" == typeof arg || !value222(arg) && fn13(arg) && fn82(arg) == value1042;
      }
      function fn8(arg) {
        return "symbol" == typeof arg || fn13(arg) && fn82(arg) == value882;
      }
      var value208 = value120 ? fn1442(value120) : function (arg) {
          return fn13(arg) && fn72(arg.length) && !!value129[fn82(arg)];
        },
        value27 = fn209(fn106),
        value351 = fn209(function (arg1, arg) {
          return arg1 <= arg;
        });
      function fn342(arg1) {
        if (!arg1) return [];
        if (fn311(arg1)) return fn282(arg1) ? fn523(arg1) : fn340(arg1);
        if (value139 && arg1[value139]) return function (arg) {
          for (var value1, value2 = []; !(value1 = arg.next()).done;) value2.push(value1.value);
          return value2;
        }(arg1[value139]());
        var value = value220(arg1);
        return (value == value1122 ? fn1592 : value == value46 ? fn452 : fn269)(arg1);
      }
      function fn49(arg) {
        if (arg) return (arg = fn48(arg)) === value54 || arg === -1 / 0 ? 1.7976931348623157e+308 * (arg < 0 ? -1 : 1) : arg == arg ? arg : 0;
        return 0 === arg ? arg : 0;
      }
      function fn287(arg1) {
        var value = fn49(arg1),
          value2 = value % 1;
        if (value == value) return value2 ? value - value2 : value;
        return 0;
      }
      function fn95(arg) {
        if (arg) return fn323(fn287(arg), 0, value1233);
        return 0;
      }
      function fn48(arg2) {
        if ("number" == typeof arg2) return arg2;
        if (fn8(arg2)) return value1652;
        if (fn349(arg2)) {
          var value1 = "function" == typeof arg2.valueOf ? arg2.valueOf() : arg2;
          arg2 = fn349(value1) ? value1 + '' : value1;
        }
        if ("string" != typeof arg2) return 0 === arg2 ? arg2 : +arg2;
        arg2 = fn223(arg2);
        var value = value323.test(arg2);
        if (value || value110.test(arg2)) return value932(arg2.slice(2), value ? 2 : 8);
        if (value335.test(arg2)) return value1652;
        return +arg2;
      }
      function fn339(arg) {
        return fn145(arg, fn79(arg));
      }
      function fn305(arg) {
        if (null == arg) return '';
        return fn24(arg);
      }
      var value207 = fn266(function (arg1, arg2) {
          if (fn112(arg2) || fn311(arg2)) fn145(arg2, fn167(arg2), arg1);else {
            for (var value in arg2) value316.call(arg2, value) && fn110(arg1, value, arg2[value]);
          }
        }),
        value326 = fn266(function (arg1, arg) {
          fn145(arg, fn79(arg), arg1);
        }),
        value248 = fn266(function (arg3, arg2, arg1, arg) {
          fn145(arg2, fn79(arg2), arg3, arg);
        }),
        value322 = fn266(function (arg, arg2, arg3, arg1) {
          fn145(arg2, fn167(arg2), arg, arg1);
        }),
        value313 = fn216(fn129),
        value249 = fn91(function (arg5, arg2) {
          arg5 = value242(arg5);
          var value = -1,
            value7 = arg2.length,
            value6 = value7 > 2 ? arg2[2] : value172;
          for (value6 && fn187(arg2[0], arg2[1], value6) && (value7 = 1); ++value < value7;) for (var value8 = arg2[value], value3 = fn79(value8), value10 = -1, value4 = value3.length; ++value10 < value4;) {
            var value1 = value3[value10],
              value9 = arg5[value1];
            (value9 === value172 || fn62(value9, value298[value1]) && !value316.call(arg5, value1)) && (arg5[value1] = value8[value1]);
          }
          return arg5;
        }),
        value77 = fn91(function (arg) {
          arg.push(value172, fn126);
          return fn90(value121, value172, arg);
        });
      function fn192(arg3, arg1, arg2) {
        var value = null == arg3 ? value172 : fn261(arg3, arg1);
        return value === value172 ? arg2 : value;
      }
      function fn178(arg, arg1) {
        return null != arg && fn243(arg, arg1, fn174);
      }
      var value60 = fn206(function (arg1, arg2, arg) {
          null != arg2 && "function" != typeof arg2.toString && (arg2 = value202.call(arg2));
          arg1[arg2] = arg;
        }, fn271(fn293)),
        value328 = fn206(function (arg2, arg, arg1) {
          null != arg && 'function' != typeof arg.toString && (arg = value202.call(arg));
          if (value316.call(arg2, arg)) arg2[arg].push(arg1);else arg2[arg] = [arg1];
        }, fn142),
        value368 = fn91(fn352);
      function fn167(arg) {
        if (fn311(arg)) return fn124(arg);
        return fn22(arg);
      }
      function fn79(arg) {
        if (fn311(arg)) return fn124(arg, true);
        return fn140(arg);
      }
      var value74 = fn266(function (arg2, arg, arg1) {
          fn152(arg2, arg, arg1);
        }),
        value121 = fn266(function (arg, arg3, arg1, arg2) {
          fn152(arg, arg3, arg1, arg2);
        }),
        value189 = fn216(function (arg2, arg3) {
          var value1 = {};
          if (null == arg2) return value1;
          var value4 = false;
          arg3 = fn149(arg3, function (arg) {
            arg = fn286(arg, arg2);
            value4 || (value4 = arg.length > 1);
            return arg;
          });
          fn145(arg2, fn373(arg2), value1);
          value4 && (value1 = fn231(value1, 7, fn246));
          for (var value = arg3.length; value--;) fn263(value1, arg3[value]);
          return value1;
        }),
        value214 = fn216(function (arg3, arg13) {
          if (null == arg3) return {};
          return function (arg2, arg12) {
            return fn289(arg2, arg12, function (arg1, arg) {
              return fn178(arg2, arg);
            });
          }(arg3, arg13);
        });
      function fn132(arg2, arg22) {
        if (null == arg2) return {};
        var value1 = fn149(fn373(arg2), function (arg) {
          return [arg];
        });
        arg22 = fn142(arg22);
        return fn289(arg2, value1, function (arg1, arg) {
          return arg22(arg1, arg[0]);
        });
      }
      var value88 = fn300(fn167),
        value223 = fn300(fn79);
      function fn269(arg) {
        if (null == arg) return [];
        return fn19(arg, fn167(arg));
      }
      var value175 = fn280(function (arg, arg1, arg2) {
        arg1 = arg1.toLowerCase();
        return arg + (arg2 ? fn87(arg1) : arg1);
      });
      function fn87(arg) {
        return value153(fn305(arg).toLowerCase());
      }
      function fn33(arg) {
        return (arg = fn305(arg)) && arg.replace(value782, value532).replace(value140, '');
      }
      var value296 = fn280(function (arg2, arg, arg1) {
          return arg2 + (arg1 ? '-' : '') + arg.toLowerCase();
        }),
        value168 = fn280(function (arg, arg1, arg2) {
          return arg + (arg2 ? '\x20' : '') + arg1.toLowerCase();
        }),
        value73 = fn144('toLowerCase'),
        value247 = fn280(function (arg2, arg1, arg) {
          return arg2 + (arg ? '_' : '') + arg1.toLowerCase();
        }),
        value233 = fn280(function (arg1, arg2, arg) {
          return arg1 + (arg ? '\x20' : '') + value153(arg2);
        }),
        value377 = fn280(function (arg, arg2, arg1) {
          return arg + (arg1 ? '\x20' : '') + arg2.toUpperCase();
        }),
        value153 = fn144("toUpperCase");
      function fn55(arg1, arg2, arg22) {
        arg1 = fn305(arg1);
        if ((arg2 = arg22 ? value172 : arg2) === value172) return function (arg) {
          return value87.test(arg);
        }(arg1) ? function (arg) {
          return arg.match(value101) || [];
        }(arg1) : function (arg) {
          return arg.match(value37) || [];
        }(arg1);
        return arg1.match(arg2) || [];
      }
      var value315 = fn91(function (arg, arg1) {
          try {
            return fn90(arg, value172, arg1);
          } catch (value) {
            if (fn69(value)) return value;
            return new value221(value);
          }
        }),
        value259 = fn216(function (arg2, arg1) {
          fn118(arg1, function (arg) {
            arg = fn222(arg);
            fn199(arg2, arg, value35(arg2[arg], arg2));
          });
          return arg2;
        });
      function fn271(arg) {
        return function () {
          return arg;
        };
      }
      var value250 = fn324(),
        value81 = fn324(true);
      function fn293(arg) {
        return arg;
      }
      function fn234(arg) {
        return fn28("function" == typeof arg ? arg : fn231(arg, 1));
      }
      var value161 = fn91(function (arg2, arg1) {
          return function (arg) {
            return fn352(arg, arg2, arg1);
          };
        }),
        value198 = fn91(function (arg2, arg1) {
          return function (arg) {
            return fn352(arg2, arg, arg1);
          };
        });
      function fn285(arg1, arg5, arg6) {
        var value22 = fn167(arg5),
          value4 = fn107(arg5, value22);
        null != arg6 || fn349(arg5) && (value4.length || !value22.length) || (arg6 = arg5, arg5 = arg1, arg1 = this, value4 = fn107(arg5, fn167(arg5)));
        var value3 = !(fn349(arg6) && "chain" in arg6 && !arg6.chain),
          value2 = fn276(arg1);
        fn118(value4, function (arg) {
          var value12 = arg5[arg];
          arg1[arg] = value12;
          value2 && (arg1.prototype[arg] = function () {
            var value = this.__chain__;
            if (value3 || value) {
              var value1 = arg1(this.__wrapped__);
              (value1.__actions__ = fn340(this.__actions__)).push({
                func: value12,
                args: arguments,
                thisArg: arg1
              });
              value1.__chain__ = value;
              return value1;
            }
            return value12.apply(arg1, fn76([this.value()], arguments));
          });
        });
        return arg1;
      }
      function fn256() {}
      var value361 = fn105(fn149),
        value359 = fn105(fn6),
        value329 = fn105(fn31);
      function fn290(arg3) {
        if (fn273(arg3)) return fn50(fn222(arg3));
        return function (arg2) {
          return function (arg) {
            return fn261(arg, arg2);
          };
        }(arg3);
      }
      var value165 = fn253(),
        value31 = fn253(true);
      function fn85() {
        return [];
      }
      function fn345() {
        return false;
      }
      var value183,
        value196 = fn54(function (arg, arg1) {
          return arg + arg1;
        }, 0),
        value130 = fn255("ceil"),
        value137 = fn54(function (arg1, arg) {
          return arg1 / arg;
        }, 1),
        value331 = fn255("floor"),
        value244 = fn54(function (arg1, arg) {
          return arg1 * arg;
        }, 1),
        value127 = fn255("round"),
        value291 = fn54(function (arg, arg1) {
          return arg - arg1;
        }, 0);
      fn270.after = function (arg1, arg) {
        if ("function" != typeof arg) throw new value160(value169);
        arg1 = fn287(arg1);
        return function () {
          if (--arg1 < 1) return arg.apply(this, arguments);
        };
      };
      fn270.ary = fn295;
      fn270.assign = value207;
      fn270.assignIn = value326;
      fn270.assignInWith = value248;
      fn270.assignWith = value322;
      fn270.at = value313;
      fn270.before = fn294;
      fn270.bind = value35;
      fn270.bindAll = value259;
      fn270.bindKey = value297;
      fn270.castArray = function () {
        if (!arguments.length) return [];
        var value = arguments[0];
        if (value222(value)) return value;
        return [value];
      };
      fn270.chain = fn29;
      fn270.chunk = function (arg6, arg4, arg2) {
        arg4 = (arg2 ? fn187(arg6, arg4, arg2) : arg4 === value172) ? 1 : value215(fn287(arg4), 0);
        var value3 = null == arg6 ? 0 : arg6.length;
        if (!value3 || arg4 < 1) return [];
        for (var value5 = 0, value = 0, value1 = value156(value314(value3 / arg4)); value5 < value3;) value1[value++] = fn184(arg6, value5, value5 += arg4);
        return value1;
      };
      fn270.compact = function (arg3) {
        for (var value2 = -1, value5 = null == arg3 ? 0 : arg3.length, value = 0, value4 = []; ++value2 < value5;) {
          var value1 = arg3[value2];
          value1 && (value4[value++] = value1);
        }
        return value4;
      };
      fn270.concat = function () {
        var value1 = arguments.length;
        if (!value1) return [];
        for (var value = value156(value1 - 1), value2 = arguments[0], value3 = value1; value3--;) value[value3 - 1] = arguments[value3];
        return fn76(value222(value2) ? fn340(value2) : [value2], fn138(value, 1));
      };
      fn270.cond = function (arg1) {
        var value2 = null == arg1 ? 0 : arg1.length,
          value22 = fn142();
        arg1 = value2 ? fn149(arg1, function (arg) {
          if ("function" != typeof arg[1]) throw new value160(value169);
          return [value22(arg[0]), arg[1]];
        }) : [];
        return fn91(function (arg2) {
          for (var value1 = -1; ++value1 < value2;) {
            var value = arg1[value1];
            if (fn90(value[0], this, arg2)) return fn90(value[1], this, arg2);
          }
        });
      };
      fn270.conforms = function (arg3) {
        return function (arg2) {
          var value1 = fn167(arg2);
          return function (arg) {
            return fn219(arg, arg2, value1);
          };
        }(fn231(arg3, 1));
      };
      fn270.constant = fn271;
      fn270.countBy = value102;
      fn270.create = function (arg2, arg1) {
        var value = value2122(arg2);
        if (null == arg1) return value;
        return fn279(value, arg1);
      };
      fn270.curry = function value2(arg4, arg, arg3) {
        var value1 = fn117(arg4, 8, value172, value172, value172, value172, value172, arg = arg3 ? value172 : arg);
        value1.placeholder = value2.placeholder;
        return value1;
      };
      fn270.curryRight = function value1(arg4, arg2, arg) {
        var value3 = fn117(arg4, value1532, value172, value172, value172, value172, value172, arg2 = arg ? value172 : arg2);
        value3.placeholder = value1.placeholder;
        return value3;
      };
      fn270.debounce = fn346;
      fn270.defaults = value249;
      fn270.defaultsDeep = value77;
      fn270.defer = value75;
      fn270.delay = value337;
      fn270.difference = value364;
      fn270.differenceBy = value158;
      fn270.differenceWith = value245;
      fn270.drop = function (arg1, arg3, arg) {
        var value2 = null == arg1 ? 0 : arg1.length;
        if (value2) return fn184(arg1, (arg3 = arg || arg3 === value172 ? 1 : fn287(arg3)) < 0 ? 0 : arg3, value2);
        return [];
      };
      fn270.dropRight = function (arg, arg1, arg3) {
        var value2 = null == arg ? 0 : arg.length;
        if (value2) return fn184(arg, 0, (arg1 = value2 - (arg1 = arg3 || arg1 === value172 ? 1 : fn287(arg1))) < 0 ? 0 : arg1);
        return [];
      };
      fn270.dropRightWhile = function (arg, arg1) {
        if (arg && arg.length) return fn179(arg, fn142(arg1, 3), true, true);
        return [];
      };
      fn270.dropWhile = function (arg, arg1) {
        if (arg && arg.length) return fn179(arg, fn142(arg1, 3), true);
        return [];
      };
      fn270.fill = function (arg22, arg1, arg5, arg32) {
        var value4 = null == arg22 ? 0 : arg22.length;
        if (value4) {
          arg5 && "number" != typeof arg5 && fn187(arg22, arg1, arg5) && (arg5 = 0, arg32 = value4);
          return function (arg3, arg, arg2, arg4) {
            var value1 = arg3.length;
            (arg2 = fn287(arg2)) < 0 && (arg2 = -arg2 > value1 ? 0 : value1 + arg2);
            (arg4 = arg4 === value172 || arg4 > value1 ? value1 : fn287(arg4)) < 0 && (arg4 += value1);
            for (arg4 = arg2 > arg4 ? 0 : fn95(arg4); arg2 < arg4;) arg3[arg2++] = arg;
            return arg3;
          }(arg22, arg1, arg5, arg32);
        }
        return [];
      };
      fn270.filter = function (arg, arg1) {
        return (value222(arg) ? fn38 : fn371)(arg, fn142(arg1, 3));
      };
      fn270.flatMap = function (arg, arg1) {
        return fn138(fn235(arg, arg1), 1);
      };
      fn270.flatMapDeep = function (arg, arg1) {
        return fn138(fn235(arg, arg1), value54);
      };
      fn270.flatMapDepth = function (arg2, arg, arg1) {
        arg1 = arg1 === value172 ? 1 : fn287(arg1);
        return fn138(fn235(arg2, arg), arg1);
      };
      fn270.flatten = fn83;
      fn270.flattenDeep = function (arg) {
        if (null != arg && arg.length) return fn138(arg, value54);
        return [];
      };
      fn270.flattenDepth = function (arg, arg1) {
        if (null != arg && arg.length) return fn138(arg, arg1 = arg1 === value172 ? 1 : fn287(arg1));
        return [];
      };
      fn270.flip = function (arg) {
        return fn117(arg, 512);
      };
      fn270.flow = value250;
      fn270.flowRight = value81;
      fn270.fromPairs = function (arg1) {
        for (var value = -1, value4 = null == arg1 ? 0 : arg1.length, value2 = {}; ++value < value4;) {
          var value3 = arg1[value];
          value2[value3[0]] = value3[1];
        }
        return value2;
      };
      fn270.functions = function (arg) {
        if (null == arg) return [];
        return fn107(arg, fn167(arg));
      };
      fn270.functionsIn = function (arg) {
        if (null == arg) return [];
        return fn107(arg, fn79(arg));
      };
      fn270.groupBy = value186;
      fn270.initial = function (arg) {
        if (null != arg && arg.length) return fn184(arg, 0, -1);
        return [];
      };
      fn270.intersection = value192;
      fn270.intersectionBy = value237;
      fn270.intersectionWith = value375;
      fn270.invert = value60;
      fn270.invertBy = value328;
      fn270.invokeMap = value334;
      fn270.iteratee = fn234;
      fn270.keyBy = value109;
      fn270.keys = fn167;
      fn270.keysIn = fn79;
      fn270.map = fn235;
      fn270.mapKeys = function (arg3, arg22) {
        var value1 = {};
        arg22 = fn142(arg22, 3);
        fn93(arg3, function (arg, arg2, arg1) {
          fn199(value1, arg22(arg, arg2, arg1), arg);
        });
        return value1;
      };
      fn270.mapValues = function (arg3, arg22) {
        var value1 = {};
        arg22 = fn142(arg22, 3);
        fn93(arg3, function (arg2, arg, arg1) {
          fn199(value1, arg, arg22(arg2, arg, arg1));
        });
        return value1;
      };
      fn270.matches = function (arg) {
        return fn367(fn231(arg, 1));
      };
      fn270.matchesProperty = function (arg1, arg) {
        return fn15(arg1, fn231(arg, 1));
      };
      fn270.memoize = fn56;
      fn270.merge = value74;
      fn270.mergeWith = value121;
      fn270.method = value161;
      fn270.methodOf = value198;
      fn270.mixin = fn285;
      fn270.negate = fn39;
      fn270.nthArg = function (arg2) {
        arg2 = fn287(arg2);
        return fn91(function (arg) {
          return fn119(arg, arg2);
        });
      };
      fn270.omit = value189;
      fn270.omitBy = function (arg1, arg) {
        return fn132(arg1, fn39(fn142(arg)));
      };
      fn270.once = function (arg) {
        return fn294(2, arg);
      };
      fn270.orderBy = function (arg2, arg1, arg3, arg) {
        if (null == arg2) return [];
        value222(arg1) || (arg1 = null == arg1 ? [] : [arg1]);
        value222(arg3 = arg ? value172 : arg3) || (arg3 = null == arg3 ? [] : [arg3]);
        return fn61(arg2, arg1, arg3);
      };
      fn270.over = value361;
      fn270.overArgs = value108;
      fn270.overEvery = value359;
      fn270.overSome = value329;
      fn270.partial = value1822;
      fn270.partialRight = value133;
      fn270.partition = value1022;
      fn270.pick = value214;
      fn270.pickBy = fn132;
      fn270.property = fn290;
      fn270.propertyOf = function (arg2) {
        return function (arg) {
          if (null == arg2) return value172;
          return fn261(arg2, arg);
        };
      };
      fn270.pull = value258;
      fn270.pullAll = fn20;
      fn270.pullAllBy = function (arg2, arg, arg1) {
        if (arg2 && arg2.length && arg && arg.length) return fn143(arg2, arg, fn142(arg1, 2));
        return arg2;
      };
      fn270.pullAllWith = function (arg2, arg1, arg) {
        if (arg2 && arg2.length && arg1 && arg1.length) return fn143(arg2, arg1, value172, arg);
        return arg2;
      };
      fn270.pullAt = value47;
      fn270.range = value165;
      fn270.rangeRight = value31;
      fn270.rearg = value115;
      fn270.reject = function (arg, arg1) {
        return (value222(arg) ? fn38 : fn371)(arg, fn39(fn142(arg1, 3)));
      };
      fn270.remove = function (arg3, arg1) {
        var value4 = [];
        if (!arg3 || !arg3.length) return value4;
        var value = -1,
          value2 = [],
          value5 = arg3.length;
        for (arg1 = fn142(arg1, 3); ++value < value5;) {
          var value6 = arg3[value];
          arg1(value6, value, arg3) && (value4.push(value6), value2.push(value));
        }
        fn148(arg3, value2);
        return value4;
      };
      fn270.rest = function (arg1, arg) {
        if ('function' != typeof arg1) throw new value160(value169);
        return fn91(arg1, arg = arg === value172 ? arg : fn287(arg));
      };
      fn270.reverse = fn204;
      fn270.sampleSize = function (arg2, arg1, arg) {
        arg1 = (arg ? fn187(arg2, arg1, arg) : arg1 === value172) ? 1 : fn287(arg1);
        return (value222(arg2) ? fn125 : fn348)(arg2, arg1);
      };
      fn270.set = function (arg2, arg, arg1) {
        if (null == arg2) return arg2;
        return fn180(arg2, arg, arg1);
      };
      fn270.setWith = function (arg, arg1, arg3, arg2) {
        arg2 = "function" == typeof arg2 ? arg2 : value172;
        if (null == arg) return arg;
        return fn180(arg, arg1, arg3, arg2);
      };
      fn270.shuffle = function (arg) {
        return (value222(arg) ? fn135 : fn190)(arg);
      };
      fn270.slice = function (arg3, arg2, arg1) {
        var value = null == arg3 ? 0 : arg3.length;
        if (value) {
          if (arg1 && 'number' != typeof arg1 && fn187(arg3, arg2, arg1)) {
            arg2 = 0;
            arg1 = value;
          } else {
            arg2 = null == arg2 ? 0 : fn287(arg2);
            arg1 = arg1 === value172 ? value : fn287(arg1);
          }
          return fn184(arg3, arg2, arg1);
        }
        return [];
      };
      fn270.sortBy = value278;
      fn270.sortedUniq = function (arg) {
        if (arg && arg.length) return fn188(arg);
        return [];
      };
      fn270.sortedUniqBy = function (arg, arg1) {
        if (arg && arg.length) return fn188(arg, fn142(arg1, 2));
        return [];
      };
      fn270.split = function (arg2, arg1, arg) {
        arg && "number" != typeof arg && fn187(arg2, arg1, arg) && (arg1 = arg = value172);
        if (arg = arg === value172 ? value1233 : arg >>> 0) return (arg2 = fn305(arg2)) && ("string" == typeof arg1 || null != arg1 && !value1222(arg1)) && !(arg1 = fn24(arg1)) && fn442(arg2) ? fn171(fn523(arg2), 0, arg) : arg2.split(arg1, arg);
        return [];
      };
      fn270.spread = function (arg, arg1) {
        if ("function" != typeof arg) throw new value160(value169);
        arg1 = null == arg1 ? 0 : value215(fn287(arg1), 0);
        return fn91(function (arg2) {
          var value1 = arg2[arg1],
            value = fn171(arg2, 0, arg1);
          value1 && fn76(value, value1);
          return fn90(arg, this, value);
        });
      };
      fn270.tail = function (arg1) {
        var value = null == arg1 ? 0 : arg1.length;
        if (value) return fn184(arg1, 1, value);
        return [];
      };
      fn270.take = function (arg1, arg, arg2) {
        if (arg1 && arg1.length) return fn184(arg1, 0, (arg = arg2 || arg === value172 ? 1 : fn287(arg)) < 0 ? 0 : arg);
        return [];
      };
      fn270.takeRight = function (arg1, arg2, arg) {
        var value3 = null == arg1 ? 0 : arg1.length;
        if (value3) return fn184(arg1, (arg2 = value3 - (arg2 = arg || arg2 === value172 ? 1 : fn287(arg2))) < 0 ? 0 : arg2, value3);
        return [];
      };
      fn270.takeRightWhile = function (arg1, arg) {
        if (arg1 && arg1.length) return fn179(arg1, fn142(arg, 3), false, true);
        return [];
      };
      fn270.takeWhile = function (arg, arg1) {
        if (arg && arg.length) return fn179(arg, fn142(arg1, 3));
        return [];
      };
      fn270.tap = function (arg1, arg) {
        arg(arg1);
        return arg1;
      };
      fn270.throttle = function (arg1, arg3, arg2) {
        var value = true,
          value4 = true;
        if ('function' != typeof arg1) throw new value160(value169);
        fn349(arg2) && (value = "leading" in arg2 ? !!arg2.leading : value, value4 = 'trailing' in arg2 ? !!arg2.trailing : value4);
        return fn346(arg1, arg3, {
          leading: value,
          maxWait: arg3,
          trailing: value4
        });
      };
      fn270.thru = fn193;
      fn270.toArray = fn342;
      fn270.toPairs = value88;
      fn270.toPairsIn = value223;
      fn270.toPath = function (arg) {
        if (value222(arg)) return fn149(arg, fn222);
        if (fn8(arg)) return [arg];
        return fn340(value123(fn305(arg)));
      };
      fn270.toPlainObject = fn339;
      fn270.transform = function (arg12, arg22, arg3) {
        var value4 = value222(arg12),
          value = value4 || value213(arg12) || value208(arg12);
        arg22 = fn142(arg22, 4);
        if (null == arg3) {
          var value5 = arg12 && arg12.constructor;
          arg3 = value ? value4 ? new value5() : [] : fn349(arg12) && fn276(value5) ? value2122(value203(arg12)) : {};
        }
        (value ? fn118 : fn93)(arg12, function (arg2, arg1, arg) {
          return arg22(arg3, arg2, arg1, arg);
        });
        return arg3;
      };
      fn270.unary = function (arg) {
        return fn295(arg, 1);
      };
      fn270.union = value84;
      fn270.unionBy = value320;
      fn270.unionWith = value241;
      fn270.uniq = function (arg) {
        if (arg && arg.length) return fn344(arg);
        return [];
      };
      fn270.uniqBy = function (arg, arg1) {
        if (arg && arg.length) return fn344(arg, fn142(arg1, 2));
        return [];
      };
      fn270.uniqWith = function (arg1, arg) {
        arg = "function" == typeof arg ? arg : value172;
        if (arg1 && arg1.length) return fn344(arg1, value172, arg);
        return [];
      };
      fn270.unset = function (arg1, arg) {
        return null == arg1 || fn263(arg1, arg);
      };
      fn270.unzip = fn366;
      fn270.unzipWith = fn65;
      fn270.update = function (arg2, arg1, arg) {
        if (null == arg2) return arg2;
        return fn3(arg2, arg1, fn327(arg));
      };
      fn270.updateWith = function (arg, arg1, arg3, arg2) {
        arg2 = "function" == typeof arg2 ? arg2 : value172;
        if (null == arg) return arg;
        return fn3(arg, arg1, fn327(arg3), arg2);
      };
      fn270.values = fn269;
      fn270.valuesIn = function (arg) {
        if (null == arg) return [];
        return fn19(arg, fn79(arg));
      };
      fn270.without = value197;
      fn270.words = fn55;
      fn270.wrap = function (arg1, arg) {
        return value1822(fn327(arg), arg1);
      };
      fn270.xor = value353;
      fn270.xorBy = value63;
      fn270.xorWith = value40;
      fn270.zip = value218;
      fn270.zipObject = function (arg, arg1) {
        return fn7(arg || [], arg1 || [], fn110);
      };
      fn270.zipObjectDeep = function (arg1, arg) {
        return fn7(arg1 || [], arg || [], fn180);
      };
      fn270.zipWith = value228;
      fn270.entries = value88;
      fn270.entriesIn = value223;
      fn270.extend = value326;
      fn270.extendWith = value248;
      fn285(fn270, fn270);
      fn270.add = value196;
      fn270.attempt = value315;
      fn270.camelCase = value175;
      fn270.capitalize = fn87;
      fn270.ceil = value130;
      fn270.clamp = function (arg2, arg, arg1) {
        arg1 === value172 && (arg1 = arg, arg = value172);
        arg1 !== value172 && (arg1 = (arg1 = fn48(arg1)) == arg1 ? arg1 : 0);
        arg !== value172 && (arg = (arg = fn48(arg)) == arg ? arg : 0);
        return fn323(fn48(arg2), arg, arg1);
      };
      fn270.clone = function (arg) {
        return fn231(arg, 4);
      };
      fn270.cloneDeep = function (arg) {
        return fn231(arg, 5);
      };
      fn270.cloneDeepWith = function (arg1, arg) {
        return fn231(arg1, 5, arg = 'function' == typeof arg ? arg : value172);
      };
      fn270.cloneWith = function (arg1, arg) {
        return fn231(arg1, 4, arg = "function" == typeof arg ? arg : value172);
      };
      fn270.conformsTo = function (arg, arg1) {
        return null == arg1 || fn219(arg, arg1, fn167(arg1));
      };
      fn270.deburr = fn33;
      fn270.defaultTo = function (arg1, arg) {
        return null == arg1 || arg1 != arg1 ? arg : arg1;
      };
      fn270.divide = value137;
      fn270.endsWith = function (arg1, arg2, arg) {
        arg1 = fn305(arg1);
        arg2 = fn24(arg2);
        var value4 = arg1.length,
          value3 = arg = arg === value172 ? value4 : fn323(fn287(arg), 0, value4);
        return (arg -= arg2.length) >= 0 && arg1.slice(arg, value3) == arg2;
      };
      fn270.eq = fn62;
      fn270.escape = function (arg) {
        if ((arg = fn305(arg)) && value742.test(arg)) return arg.replace(value712, value1542);
        return arg;
      };
      fn270.escapeRegExp = function (arg) {
        if ((arg = fn305(arg)) && value48.test(arg)) return arg.replace(value36, "\\$&");
        return arg;
      };
      fn270.every = function (arg3, arg, arg2) {
        var value1 = value222(arg3) ? fn6 : fn376;
        arg2 && fn187(arg3, arg, arg2) && (arg = value172);
        return value1(arg3, fn142(arg, 3));
      };
      fn270.find = value58;
      fn270.findIndex = fn111;
      fn270.findKey = function (arg, arg1) {
        return fn1102(arg, fn142(arg1, 3), fn93);
      };
      fn270.findLast = value201;
      fn270.findLastIndex = fn166;
      fn270.findLastKey = function (arg1, arg) {
        return fn1102(arg1, fn142(arg, 3), fn25);
      };
      fn270.floor = value331;
      fn270.forEach = fn522;
      fn270.forEachRight = fn169;
      fn270.forIn = function (arg, arg1) {
        if (null == arg) return arg;
        return value136(arg, fn142(arg1, 3), fn79);
      };
      fn270.forInRight = function (arg, arg1) {
        if (null == arg) return arg;
        return value97(arg, fn142(arg1, 3), fn79);
      };
      fn270.forOwn = function (arg, arg1) {
        return arg && fn93(arg, fn142(arg1, 3));
      };
      fn270.forOwnRight = function (arg1, arg) {
        return arg1 && fn25(arg1, fn142(arg, 3));
      };
      fn270.get = fn192;
      fn270.gt = value116;
      fn270.gte = value254;
      fn270.has = function (arg, arg1) {
        return null != arg && fn243(arg, arg1, fn164);
      };
      fn270.hasIn = fn178;
      fn270.head = fn131;
      fn270.identity = fn293;
      fn270.includes = function (arg4, arg1, arg, arg3) {
        arg4 = fn311(arg4) ? arg4 : fn269(arg4);
        arg = arg && !arg3 ? fn287(arg) : 0;
        var value2 = arg4.length;
        arg < 0 && (arg = value215(value2 + arg, 0));
        if (fn282(arg4)) return arg <= value2 && arg4.indexOf(arg1, arg) > -1;
        return !!value2 && fn292(arg4, arg1, arg) > -1;
      };
      fn270.indexOf = function (arg2, arg, arg3) {
        var value4 = null == arg2 ? 0 : arg2.length;
        if (!value4) return -1;
        var value1 = null == arg3 ? 0 : fn287(arg3);
        value1 < 0 && (value1 = value215(value4 + value1, 0));
        return fn292(arg2, arg, value1);
      };
      fn270.inRange = function (arg12, arg22, arg3) {
        arg22 = fn49(arg22);
        if (arg3 === value172) {
          arg3 = arg22;
          arg22 = 0;
        } else arg3 = fn49(arg3);
        return function (arg, arg1, arg2) {
          return arg >= value319(arg1, arg2) && arg < value215(arg1, arg2);
        }(arg12 = fn48(arg12), arg22, arg3);
      };
      fn270.invoke = value368;
      fn270.isArguments = value357;
      fn270.isArray = value222;
      fn270.isArrayBuffer = value185;
      fn270.isArrayLike = fn311;
      fn270.isArrayLikeObject = fn163;
      fn270.isBoolean = function (arg) {
        return true === arg || false === arg || fn13(arg) && fn82(arg) == value1722;
      };
      fn270.isBuffer = value213;
      fn270.isDate = value230;
      fn270.isElement = function (arg) {
        return fn13(arg) && 1 === arg.nodeType && !fn157(arg);
      };
      fn270.isEmpty = function (arg1) {
        if (null == arg1) return true;
        if (fn311(arg1) && (value222(arg1) || "string" == typeof arg1 || "function" == typeof arg1.splice || value213(arg1) || value208(arg1) || value357(arg1))) return !arg1.length;
        var value = value220(arg1);
        if (value == value1122 || value == value46) return !arg1.size;
        if (fn112(arg1)) return !fn22(arg1).length;
        for (var value2 in arg1) if (value316.call(arg1, value2)) return false;
        return true;
      };
      fn270.isEqual = function (arg, arg1) {
        return fn101(arg, arg1);
      };
      fn270.isEqualWith = function (arg2, arg3, arg1) {
        var value = (arg1 = "function" == typeof arg1 ? arg1 : value172) ? arg1(arg2, arg3) : value172;
        if (value === value172) return fn101(arg2, arg3, value172, arg1);
        return !!value;
      };
      fn270.isError = fn69;
      fn270.isFinite = function (arg) {
        return "number" == typeof arg && value330(arg);
      };
      fn270.isFunction = fn276;
      fn270.isInteger = fn59;
      fn270.isLength = fn72;
      fn270.isMap = value182;
      fn270.isMatch = function (arg, arg1) {
        return arg === arg1 || fn350(arg, arg1, fn335(arg1));
      };
      fn270.isMatchWith = function (arg1, arg2, arg) {
        arg = "function" == typeof arg ? arg : value172;
        return fn350(arg1, arg2, fn335(arg2), arg);
      };
      fn270.isNaN = function (arg) {
        return fn347(arg) && arg != +arg;
      };
      fn270.isNative = function (arg) {
        if (value318(arg)) throw new value221("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return fn181(arg);
      };
      fn270.isNil = function (arg) {
        return null == arg;
      };
      fn270.isNull = function (arg) {
        return null === arg;
      };
      fn270.isNumber = fn347;
      fn270.isObject = fn349;
      fn270.isObjectLike = fn13;
      fn270.isPlainObject = fn157;
      fn270.isRegExp = value1222;
      fn270.isSafeInteger = function (arg) {
        return fn59(arg) && arg >= -9007199254740991 && arg <= value30;
      };
      fn270.isSet = value71;
      fn270.isString = fn282;
      fn270.isSymbol = fn8;
      fn270.isTypedArray = value208;
      fn270.isUndefined = function (arg) {
        return arg === value172;
      };
      fn270.isWeakMap = function (arg) {
        return fn13(arg) && value220(arg) == value243;
      };
      fn270.isWeakSet = function (arg) {
        return fn13(arg) && '[object\x20WeakSet]' == fn82(arg);
      };
      fn270.join = function (arg1, arg) {
        if (null == arg1) return '';
        return value90.call(arg1, arg);
      };
      fn270.kebabCase = value296;
      fn270.last = fn362;
      fn270.lastIndexOf = function (arg4, arg1, arg32) {
        var value2 = null == arg4 ? 0 : arg4.length;
        if (!value2) return -1;
        var value4 = value2;
        arg32 !== value172 && (value4 = (value4 = fn287(arg32)) < 0 ? value215(value2 + value4, 0) : value319(value4, value2 - 1));
        if (arg1 == arg1) return function (arg, arg2, arg3) {
          for (var value1 = arg3 + 1; value1--;) if (arg[value1] === arg2) return value1;
          return value1;
        }(arg4, arg1, value4);
        return fn70(arg4, fn27, value4, true);
      };
      fn270.lowerCase = value168;
      fn270.lowerFirst = value73;
      fn270.lt = value27;
      fn270.lte = value351;
      fn270.max = function (arg) {
        if (arg && arg.length) return fn275(arg, fn293, fn302);
        return value172;
      };
      fn270.maxBy = function (arg, arg1) {
        if (arg && arg.length) return fn275(arg, fn142(arg1, 2), fn302);
        return value172;
      };
      fn270.mean = function (arg) {
        return fn42(arg, fn293);
      };
      fn270.meanBy = function (arg1, arg) {
        return fn42(arg1, fn142(arg, 2));
      };
      fn270.min = function (arg) {
        if (arg && arg.length) return fn275(arg, fn293, fn106);
        return value172;
      };
      fn270.minBy = function (arg, arg1) {
        if (arg && arg.length) return fn275(arg, fn142(arg1, 2), fn106);
        return value172;
      };
      fn270.stubArray = fn85;
      fn270.stubFalse = fn345;
      fn270.stubObject = function () {
        return {};
      };
      fn270.stubString = function () {
        return '';
      };
      fn270.stubTrue = function () {
        return true;
      };
      fn270.multiply = value244;
      fn270.nth = function (arg1, arg) {
        if (arg1 && arg1.length) return fn119(arg1, fn287(arg));
        return value172;
      };
      fn270.noConflict = function () {
        value163._ === this && (value163._ = value154);
        return this;
      };
      fn270.noop = fn256;
      fn270.now = value370;
      fn270.pad = function (arg3, arg1, arg2) {
        arg3 = fn305(arg3);
        var value = (arg1 = fn287(arg1)) ? fn1522(arg3) : 0;
        if (!arg1 || value >= arg1) return arg3;
        var value4 = (arg1 - value) / 2;
        return fn37(value232(value4), arg2) + arg3 + fn37(value314(value4), arg2);
      };
      fn270.padEnd = function (arg1, arg2, arg) {
        arg1 = fn305(arg1);
        var value3 = (arg2 = fn287(arg2)) ? fn1522(arg1) : 0;
        if (arg2 && value3 < arg2) return arg1 + fn37(arg2 - value3, arg);
        return arg1;
      };
      fn270.padStart = function (arg1, arg2, arg) {
        arg1 = fn305(arg1);
        var value3 = (arg2 = fn287(arg2)) ? fn1522(arg1) : 0;
        if (arg2 && value3 < arg2) return fn37(arg2 - value3, arg) + arg1;
        return arg1;
      };
      fn270.parseInt = function (arg1, arg2, arg) {
        if (arg || null == arg2) arg2 = 0;else arg2 && (arg2 = +arg2);
        return value292(fn305(arg1).replace(value67, ''), arg2 || 0);
      };
      fn270.random = function (arg2, arg3, arg1) {
        arg1 && "boolean" != typeof arg1 && fn187(arg2, arg3, arg1) && (arg3 = arg1 = value172);
        arg1 === value172 && ("boolean" == typeof arg3 ? (arg1 = arg3, arg3 = value172) : "boolean" == typeof arg2 && (arg1 = arg2, arg2 = value172));
        if (arg2 === value172 && arg3 === value172) {
          arg2 = 0;
          arg3 = 1;
        } else {
          arg2 = fn49(arg2);
          if (arg3 === value172) {
            arg3 = arg2;
            arg2 = 0;
          } else arg3 = fn49(arg3);
        }
        if (arg2 > arg3) {
          var value = arg2;
          arg2 = arg3;
          arg3 = value;
        }
        if (arg1 || arg2 % 1 || arg3 % 1) {
          var value4 = value50();
          return value319(arg2 + value4 * (arg3 - arg2 + value1472("1e-" + ((value4 + '').length - 1))), arg3);
        }
        return fn343(arg2, arg3);
      };
      fn270.reduce = function (arg, arg4, arg2) {
        var value1 = value222(arg) ? fn1142 : fn412,
          value3 = arguments.length < 3;
        return value1(arg, fn142(arg4, 4), arg2, value3, value299);
      };
      fn270.reduceRight = function (arg2, arg1, arg4) {
        var value = value222(arg2) ? fn89 : fn412,
          value3 = arguments.length < 3;
        return value(arg2, fn142(arg1, 4), arg4, value3, value93);
      };
      fn270.repeat = function (arg1, arg, arg2) {
        arg = (arg2 ? fn187(arg1, arg, arg2) : arg === value172) ? 1 : fn287(arg);
        return fn46(fn305(arg1), arg);
      };
      fn270.replace = function () {
        var value1 = arguments,
          value = fn305(value1[0]);
        if (value1.length < 3) return value;
        return value.replace(value1[1], value1[2]);
      };
      fn270.result = function (arg5, arg4, arg2) {
        var value = -1,
          value3 = (arg4 = fn286(arg4, arg5)).length;
        for (value3 || (value3 = 1, arg5 = value172); ++value < value3;) {
          var value1 = null == arg5 ? value172 : arg5[fn222(arg4[value])];
          value1 === value172 && (value = value3, value1 = arg2);
          arg5 = fn276(value1) ? value1.call(arg5) : value1;
        }
        return arg5;
      };
      fn270.round = value127;
      fn270.runInContext = value422;
      fn270.sample = function (arg) {
        return (value222(arg) ? fn96 : fn173)(arg);
      };
      fn270.size = function (arg) {
        if (null == arg) return 0;
        if (fn311(arg)) return fn282(arg) ? fn1522(arg) : arg.length;
        var value1 = value220(arg);
        if (value1 == value1122 || value1 == value46) return arg.size;
        return fn22(arg).length;
      };
      fn270.snakeCase = value247;
      fn270.some = function (arg1, arg3, arg) {
        var value2 = value222(arg1) ? fn31 : fn1722;
        arg && fn187(arg1, arg3, arg) && (arg3 = value172);
        return value2(arg1, fn142(arg3, 3));
      };
      fn270.sortedIndex = function (arg, arg1) {
        return fn365(arg, arg1);
      };
      fn270.sortedIndexBy = function (arg, arg1, arg2) {
        return fn1(arg, arg1, fn142(arg2, 2));
      };
      fn270.sortedIndexOf = function (arg, arg3) {
        var value2 = null == arg ? 0 : arg.length;
        if (value2) {
          var value1 = fn365(arg, arg3);
          if (value1 < value2 && fn62(arg[value1], arg3)) return value1;
        }
        return -1;
      };
      fn270.sortedLastIndex = function (arg, arg1) {
        return fn365(arg, arg1, true);
      };
      fn270.sortedLastIndexBy = function (arg, arg2, arg1) {
        return fn1(arg, arg2, fn142(arg1, 2), true);
      };
      fn270.sortedLastIndexOf = function (arg, arg2) {
        if (null != arg && arg.length) {
          var value1 = fn365(arg, arg2, true) - 1;
          if (fn62(arg[value1], arg2)) return value1;
        }
        return -1;
      };
      fn270.startCase = value233;
      fn270.startsWith = function (arg2, arg, arg1) {
        arg2 = fn305(arg2);
        arg1 = null == arg1 ? 0 : fn323(fn287(arg1), 0, arg2.length);
        arg = fn24(arg);
        return arg2.slice(arg1, arg1 + arg.length) == arg;
      };
      fn270.subtract = value291;
      fn270.sum = function (arg) {
        if (arg && arg.length) return fn158(arg, fn293);
        return 0;
      };
      fn270.sumBy = function (arg, arg1) {
        if (arg && arg.length) return fn158(arg, fn142(arg1, 2));
        return 0;
      };
      fn270.template = function (arg11, arg12, arg52) {
        var value15 = fn270.templateSettings;
        arg52 && fn187(arg11, arg12, arg52) && (arg12 = value172);
        arg11 = fn305(arg11);
        arg12 = value248({}, arg12, value15, fn236);
        var value,
          value4,
          value10 = value248({}, arg12.imports, value15.imports, fn236),
          value6 = fn167(value10),
          value9 = fn19(value10, value6),
          value12 = 0,
          value13 = arg12.interpolate || value174,
          value2 = "__p += '",
          value3 = value268((arg12.escape || value174).source + '|' + value13.source + '|' + (value13 === value68 ? value1322 : value174).source + '|' + (arg12.evaluate || value174).source + '|$', 'g'),
          value7 = "//# sourceURL=" + (value316.call(arg12, 'sourceURL') ? (arg12.sourceURL + '').replace(/\s/g, '\x20') : "lodash.templateSources[" + ++value1162 + ']') + '\x0a';
        arg11.replace(value3, function (arg5, arg2, arg1, arg4, arg, arg3) {
          arg1 || (arg1 = arg4);
          value2 += arg11.slice(value12, arg3).replace(value24, fn1282);
          arg2 && (value = true, value2 += "' +\n__e(" + arg2 + ") +\n'");
          arg && (value4 = true, value2 += "';\n" + arg + ";\n__p += '");
          arg1 && (value2 += "' +\n((__t = (" + arg1 + ")) == null ? '' : __t) +\n'");
          value12 = arg3 + arg5.length;
          return arg5;
        });
        value2 += "';\n";
        var value14 = value316.call(arg12, "variable") && arg12.variable;
        if (value14) {
          if (value402.test(value14)) throw new value221("Invalid `variable` option passed into `_.template`");
        } else value2 = "with (obj) {\n" + value2 + "\n}\n";
        value2 = (value4 ? value2.replace(value822, '') : value2).replace(value125, '$1').replace(value582, "$1;");
        value2 = "function(" + (value14 || 'obj') + ") {\n" + (value14 ? '' : "obj || (obj = {});\n") + "var __t, __p = ''" + (value ? ", __e = _.escape" : '') + (value4 ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ';\x0a') + value2 + "return __p\n}";
        var value8 = value315(function () {
          return value356(value6, value7 + "return " + value2).apply(value172, value9);
        });
        value8.source = value2;
        if (fn69(value8)) throw value8;
        return value8;
      };
      fn270.times = function (arg1, arg2) {
        if ((arg1 = fn287(arg1)) < 1 || arg1 > value30) return [];
        var value3 = value1233,
          value4 = value319(arg1, value1233);
        arg2 = fn142(arg2);
        arg1 -= value1233;
        for (var value = fn63(value4, arg2); ++value3 < arg1;) arg2(value3);
        return value;
      };
      fn270.toFinite = fn49;
      fn270.toInteger = fn287;
      fn270.toLength = fn95;
      fn270.toLower = function (arg) {
        return fn305(arg).toLowerCase();
      };
      fn270.toNumber = fn48;
      fn270.toSafeInteger = function (arg) {
        if (arg) return fn323(fn287(arg), -9007199254740991, value30);
        return 0 === arg ? arg : 0;
      };
      fn270.toString = fn305;
      fn270.toUpper = function (arg) {
        return fn305(arg).toUpperCase();
      };
      fn270.trim = function (arg3, arg4, arg1) {
        if ((arg3 = fn305(arg3)) && (arg1 || arg4 === value172)) return fn223(arg3);
        if (!arg3 || !(arg4 = fn24(arg4))) return arg3;
        var value2 = fn523(arg3),
          value = fn523(arg4);
        return fn171(value2, fn34(value2, value), fn102(value2, value) + 1).join('');
      };
      fn270.trimEnd = function (arg1, arg3, arg) {
        if ((arg1 = fn305(arg1)) && (arg || arg3 === value172)) return arg1.slice(0, fn252(arg1) + 1);
        if (!arg1 || !(arg3 = fn24(arg3))) return arg1;
        var value2 = fn523(arg1);
        return fn171(value2, 0, fn102(value2, fn523(arg3)) + 1).join('');
      };
      fn270.trimStart = function (arg1, arg, arg3) {
        if ((arg1 = fn305(arg1)) && (arg3 || arg === value172)) return arg1.replace(value67, '');
        if (!arg1 || !(arg = fn24(arg))) return arg1;
        var value2 = fn523(arg1);
        return fn171(value2, fn34(value2, fn523(arg))).join('');
      };
      fn270.truncate = function (arg8, arg) {
        var value4 = 30,
          value9 = "...";
        if (fn349(arg)) {
          var value2 = "separator" in arg ? arg.separator : value2;
          value4 = "length" in arg ? fn287(arg.length) : value4;
          value9 = "omission" in arg ? fn24(arg.omission) : value9;
        }
        var value3 = (arg8 = fn305(arg8)).length;
        if (fn442(arg8)) {
          var value7 = fn523(arg8);
          value3 = value7.length;
        }
        if (value4 >= value3) return arg8;
        var value5 = value4 - fn1522(value9);
        if (value5 < 1) return value9;
        var value12 = value7 ? fn171(value7, 0, value5).join('') : arg8.slice(0, value5);
        if (value2 === value172) return value12 + value9;
        value7 && (value5 += value12.length - value5);
        if (value1222(value2)) {
          if (arg8.slice(value5).search(value2)) {
            var value10,
              value11 = value12;
            value2.global || (value2 = value268(value2.source, fn305(value51.exec(value2)) + 'g'));
            for (value2.lastIndex = 0; value10 = value2.exec(value11);) var value6 = value10.index;
            value12 = value12.slice(0, value6 === value172 ? value5 : value6);
          }
        } else {
          if (arg8.indexOf(fn24(value2), value5) != value5) {
            var value1 = value12.lastIndexOf(value2);
            value1 > -1 && (value12 = value12.slice(0, value1));
          }
        }
        return value12 + value9;
      };
      fn270.unescape = function (arg) {
        if ((arg = fn305(arg)) && value352.test(arg)) return arg.replace(value602, value79);
        return arg;
      };
      fn270.uniqueId = function (arg) {
        var value1 = ++value363;
        return fn305(arg) + value1;
      };
      fn270.upperCase = value377;
      fn270.upperFirst = value153;
      fn270.each = fn522;
      fn270.eachRight = fn169;
      fn270.first = fn131;
      fn285(fn270, (value183 = {}, fn93(fn270, function (arg, arg1) {
        value316.call(fn270.prototype, arg1) || (value183[arg1] = arg);
      }), value183), {
        chain: false
      });
      fn270.VERSION = "4.17.21";
      fn118(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (arg) {
        fn270[arg].placeholder = fn270;
      });
      fn118(["drop", "take"], function (arg2, arg12) {
        fn281.prototype[arg2] = function (arg1) {
          arg1 = arg1 === value172 ? 1 : value215(fn287(arg1), 0);
          var value = this.__filtered__ && !arg12 ? new fn281(this) : this.clone();
          if (value.__filtered__) value.__takeCount__ = value319(arg1, value.__takeCount__);else value.__views__.push({
            size: value319(arg1, value1233),
            type: arg2 + (value.__dir__ < 0 ? "Right" : '')
          });
          return value;
        };
        fn281.prototype[arg2 + "Right"] = function (arg) {
          return this.reverse()[arg2](arg).reverse();
        };
      });
      fn118(["filter", 'map', "takeWhile"], function (arg3, arg2) {
        var value2 = arg2 + 1,
          value12 = 1 == value2 || 3 == value2;
        fn281.prototype[arg3] = function (arg) {
          var value1 = this.clone();
          value1.__iteratees__.push({
            iteratee: fn142(arg, 3),
            type: value2
          });
          value1.__filtered__ = value1.__filtered__ || value12;
          return value1;
        };
      });
      fn118(["head", "last"], function (arg2, arg1) {
        var value = "take" + (arg1 ? 'Right' : '');
        fn281.prototype[arg2] = function () {
          return this[value](1).value()[0];
        };
      });
      fn118(["initial", "tail"], function (arg1, arg) {
        var value2 = "drop" + (arg ? '' : "Right");
        fn281.prototype[arg1] = function () {
          if (this.__filtered__) return new fn281(this);
          return this[value2](1);
        };
      });
      fn281.prototype.compact = function () {
        return this.filter(fn293);
      };
      fn281.prototype.find = function (arg) {
        return this.filter(arg).head();
      };
      fn281.prototype.findLast = function (arg) {
        return this.reverse().find(arg);
      };
      fn281.prototype.invokeMap = fn91(function (arg1, arg2) {
        if ("function" == typeof arg1) return new fn281(this);
        return this.map(function (arg) {
          return fn352(arg, arg1, arg2);
        });
      });
      fn281.prototype.reject = function (arg) {
        return this.filter(fn39(fn142(arg)));
      };
      fn281.prototype.slice = function (arg2, arg) {
        arg2 = fn287(arg2);
        var value1 = this;
        if (value1.__filtered__ && (arg2 > 0 || arg < 0)) return new fn281(value1);
        if (arg2 < 0) value1 = value1.takeRight(-arg2);else arg2 && (value1 = value1.drop(arg2));
        arg !== value172 && (value1 = (arg = fn287(arg)) < 0 ? value1.dropRight(-arg) : value1.take(arg - arg2));
        return value1;
      };
      fn281.prototype.takeRightWhile = function (arg) {
        return this.reverse().takeWhile(arg).reverse();
      };
      fn281.prototype.toArray = function () {
        return this.take(value1233);
      };
      fn93(fn281.prototype, function (arg4, arg2) {
        var value32 = /^(?:filter|find|map|reject)|While$/.test(arg2),
          value22 = /^(?:head|last)$/.test(arg2),
          value13 = fn270[value22 ? "take" + ("last" == arg2 ? 'Right' : '') : arg2],
          value52 = value22 || /^find/.test(arg2);
        value13 && (fn270.prototype[arg2] = function () {
          var value5 = this.__wrapped__,
            value12 = value22 ? [1] : arguments,
            value7 = value5 instanceof fn281,
            value2 = value12[0],
            value8 = value7 || value222(value5),
            value10 = function (arg) {
              var value1 = value13.apply(fn270, fn76([arg], value12));
              if (value22 && value) return value1[0];
              return value1;
            };
          value8 && value32 && 'function' == typeof value2 && 1 != value2.length && (value7 = value8 = false);
          var value = this.__chain__,
            value4 = !!this.__actions__.length,
            value3 = value52 && !value,
            value6 = value7 && !value4;
          if (!value52 && value8) {
            value5 = value6 ? value5 : new fn281(this);
            var value9 = arg4.apply(value5, value12);
            value9.__actions__.push({
              func: fn193,
              args: [value10],
              thisArg: value172
            });
            return new fn225(value9, value);
          }
          if (value3 && value6) return arg4.apply(this, value12);
          value9 = this.thru(value10);
          if (value3) return value22 ? value9.value()[0] : value9.value();
          return value9;
        });
      });
      fn118(["pop", "push", "shift", "sort", "splice", "unshift"], function (arg2) {
        var value2 = value194[arg2],
          value12 = /^(?:push|sort|unshift)$/.test(arg2) ? "tap" : "thru",
          value3 = /^(?:pop|shift)$/.test(arg2);
        fn270.prototype[arg2] = function () {
          var value1 = arguments;
          if (value3 && !this.__chain__) {
            var value = this.value();
            return value2.apply(value222(value) ? value : [], value1);
          }
          return this[value12](function (arg) {
            return value2.apply(value222(arg) ? arg : [], value1);
          });
        };
      });
      fn93(fn281.prototype, function (arg2, arg3) {
        var value1 = fn270[arg3];
        if (value1) {
          var value = value1.name + '';
          value316.call(value252, value) || (value252[value] = []);
          value252[value].push({
            name: arg3,
            func: value1
          });
        }
      });
      value252[fn301(value172, 2).name] = [{
        name: "wrapper",
        func: value172
      }];
      fn281.prototype.clone = function () {
        var value = new fn281(this.__wrapped__);
        value.__actions__ = fn340(this.__actions__);
        value.__dir__ = this.__dir__;
        value.__filtered__ = this.__filtered__;
        value.__iteratees__ = fn340(this.__iteratees__);
        value.__takeCount__ = this.__takeCount__;
        value.__views__ = fn340(this.__views__);
        return value;
      };
      fn281.prototype.reverse = function () {
        if (this.__filtered__) {
          var value = new fn281(this);
          value.__dir__ = -1;
          value.__filtered__ = true;
        } else (value = this.clone()).__dir__ *= -1;
        return value;
      };
      fn281.prototype.value = function () {
        var value = this.__wrapped__.value(),
          value6 = this.__dir__,
          value14 = value222(value),
          value8 = value6 < 0,
          value122 = value14 ? value.length : 0,
          value9 = function (arg3, arg6, arg) {
            for (var value2 = -1, value1 = arg.length; ++value2 < value1;) {
              var value4 = arg[value2],
                value5 = value4.size;
              switch (value4.type) {
                case "drop":
                  arg3 += value5;
                  break;
                case "dropRight":
                  arg6 -= value5;
                  break;
                case 'take':
                  arg6 = value319(arg6, arg3 + value5);
                  break;
                case 'takeRight':
                  arg3 = value215(arg3, arg6 - value5);
              }
            }
            return {
              start: arg3,
              end: arg6
            };
          }(0, value122, this.__views__),
          value10 = value9.start,
          value11 = value9.end,
          value3 = value11 - value10,
          value15 = value8 ? value11 : value10 - 1,
          value52 = this.__iteratees__,
          value13 = value52.length,
          value16 = 0,
          value12 = value319(value3, this.__takeCount__);
        if (!value14 || !value8 && value122 == value3 && value12 == value3) return fn260(value, this.__actions__);
        var value18 = [];
        _0x59465e: for (; value3-- && value16 < value12;) {
          for (var value42 = -1, value7 = value[value15 += value6]; ++value42 < value13;) {
            var value20 = value52[value42],
              value17 = value20.iteratee,
              value19 = value20.type,
              value22 = value17(value7);
            if (2 == value19) value7 = value22;else {
              if (!value22) {
                if (1 == value19) continue _0x59465e;
                break _0x59465e;
              }
            }
          }
          value18[value16++] = value7;
        }
        return value18;
      };
      fn270.prototype.at = value308;
      fn270.prototype.chain = function () {
        return fn29(this);
      };
      fn270.prototype.commit = function () {
        return new fn225(this.value(), this.__chain__);
      };
      fn270.prototype.next = function () {
        this.__values__ === value172 && (this.__values__ = fn342(this.value()));
        var value = this.__index__ >= this.__values__.length;
        return {
          done: value,
          value: value ? value172 : this.__values__[this.__index__++]
        };
      };
      fn270.prototype.plant = function (arg1) {
        for (var value3, value4 = this; value4 instanceof fn172;) {
          var value2 = fn177(value4);
          value2.__index__ = 0;
          value2.__values__ = value172;
          if (value3) value.__wrapped__ = value2;else value3 = value2;
          var value = value2;
          value4 = value4.__wrapped__;
        }
        value.__wrapped__ = arg1;
        return value3;
      };
      fn270.prototype.reverse = function () {
        var value1 = this.__wrapped__;
        if (value1 instanceof fn281) {
          var value = value1;
          this.__actions__.length && (value = new fn281(this));
          (value = value.reverse()).__actions__.push({
            func: fn193,
            args: [fn204],
            thisArg: value172
          });
          return new fn225(value, this.__chain__);
        }
        return this.thru(fn204);
      };
      fn270.prototype.toJSON = fn270.prototype.valueOf = fn270.prototype.value = function () {
        return fn260(this.__wrapped__, this.__actions__);
      };
      fn270.prototype.first = fn270.prototype.head;
      value139 && (fn270.prototype[value139] = function () {
        return this;
      });
      return fn270;
    }();
  if (value1082) {
    (value1082.exports = value1152)._ = value1152;
    value1462._ = value1152;
  } else value163._ = value1152;
}).call(Je);
var rt = tt.exports;
const st = a28_0x1683e7("div", {
    class: "inset-0 fixed bg-black/20 dark:bg-black/50"
  }, null, -1),
  nt = {
    class: "m-auto"
  },
  at = {
    class: "relative transform overflow-hidden rounded-lg w-[300px] bg-light-bg4 dark:bg-dark-bg4 dark: text-left shadow-xl transition-all"
  },
  it = {
    class: 'bg-light-bg4\x20dark:bg-dark-bg4\x20px-4\x20pb-4\x20pt-2'
  },
  ot = {
    class: "max-w-[300px] whitespace-nowrap overflow-x-hidden text-ellipsis"
  },
  ut = {
    class: "mt-3 text-center"
  },
  ct = {
    class: "text-base font-semibold leading-6 text-light-text1 dark:text-dark-text1"
  },
  lt = {
    class: "mt-4"
  },
  ft = {
    class: 'relative\x20overflow-hidden\x20shadow-inner\x20w-full\x20h-[20px]\x20bg-black/20\x20rounded-[20px]'
  },
  ht = {
    key: 0,
    class: "text-center mt-2"
  },
  dt = {
    class: "text-sm text-light-text2 dark:text-dark-text2 animate-pulse"
  },
  gt = a28_0x257a46({
    __name: "progress",
    props: {
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      progress: {
        type: Number,
        default: 0
      },
      callback: {
        type: Function
      },
      exposedSetProgress: {
        type: Function
      },
      exposedClose: {
        type: Function
      },
      exposedSetTitle: {
        type: Function
      }
    },
    'setup'(arg2) {
      const value8 = arg2,
        value1 = a28_0x34ade5(null),
        value5 = a28_0x34ade5(value8.progress),
        value3 = a28_0x34ade5(''),
        value6 = rt.throttle(arg => {
          arg > 100 && (arg = 100);
          value5.value = arg;
        }, 60);
      async function fn3(arg) {
        value6(arg);
      }
      async function fn7(arg) {
        value3.value = arg;
      }
      async function fn4() {
        var value2;
        null == (value2 = value1.value) || value2.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: "forwards"
        });
        setTimeout(() => {
          var value;
          null == (value = value8.callback) || value.call(value8);
        }, 300);
      }
      a28_0x417103(() => {
        value8.exposedSetProgress && value8.exposedSetProgress(fn3);
        value8.exposedClose && value8.exposedClose(fn4);
        value8.exposedSetTitle && value8.exposedSetTitle(fn7);
      });
      return (arg1, arg) => (a28_0x14ec8c(), a28_0x4334ed('div', {
        ref_key: "promptRef",
        ref: value1,
        class: "flex fixed inset-0 z-[999] select-none opacity-0 animate-show"
      }, [st, a28_0x1683e7('div', nt, [a28_0x1683e7("div", at, [a28_0x1683e7("div", it, [a28_0x1683e7("div", ot, [a28_0x1683e7("div", ut, [a28_0x1683e7('h3', ct, a28_0x3cd23b(arg1.$t(value3.value || arg2.title)), 1)]), a28_0x1683e7("div", lt, [a28_0x1683e7("div", ft, [a28_0x1683e7("div", {
        style: a28_0xc71455({
          width: value5.value + '%'
        }),
        class: "absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 max-w-[300px] rounded-r-[10px] transition-all duration-300"
      }, null, 4)])]), arg2.content ? (a28_0x14ec8c(), a28_0x4334ed("div", ht, [a28_0x1683e7('p', dt, a28_0x3cd23b(arg1.$t(arg2.content)), 1)])) : a28_0x41e27b('', true)])])])])], 512));
    }
  });
var mt = (arg => (arg[arg.KC_NO = 0] = "KC_NO", arg[arg.KC_ROLL_OVER = 1] = "KC_ROLL_OVER", arg[arg.KC_POST_FAIL = 2] = "KC_POST_FAIL", arg[arg.KC_UNDEFINED = 3] = "KC_UNDEFINED", arg[arg.KC_A = 4] = 'KC_A', arg[arg.KC_B = 5] = "KC_B", arg[arg.KC_C = 6] = "KC_C", arg[arg.KC_D = 7] = "KC_D", arg[arg.KC_E = 8] = "KC_E", arg[arg.KC_F = 9] = "KC_F", arg[arg.KC_G = 10] = "KC_G", arg[arg.KC_H = 11] = "KC_H", arg[arg.KC_I = 12] = "KC_I", arg[arg.KC_J = 13] = "KC_J", arg[arg.KC_K = 14] = "KC_K", arg[arg.KC_L = 15] = 'KC_L', arg[arg.KC_M = 16] = "KC_M", arg[arg.KC_N = 17] = "KC_N", arg[arg.KC_O = 18] = 'KC_O', arg[arg.KC_P = 19] = "KC_P", arg[arg.KC_Q = 20] = "KC_Q", arg[arg.KC_R = 21] = "KC_R", arg[arg.KC_S = 22] = "KC_S", arg[arg.KC_T = 23] = "KC_T", arg[arg.KC_U = 24] = "KC_U", arg[arg.KC_V = 25] = "KC_V", arg[arg.KC_W = 26] = 'KC_W', arg[arg.KC_X = 27] = "KC_X", arg[arg.KC_Y = 28] = "KC_Y", arg[arg.KC_Z = 29] = "KC_Z", arg[arg.KC_1 = 30] = "KC_1", arg[arg.KC_2 = 31] = 'KC_2', arg[arg.KC_3 = 32] = "KC_3", arg[arg.KC_4 = 33] = "KC_4", arg[arg.KC_5 = 34] = "KC_5", arg[arg.KC_6 = 35] = "KC_6", arg[arg.KC_7 = 36] = "KC_7", arg[arg.KC_8 = 37] = "KC_8", arg[arg.KC_9 = 38] = "KC_9", arg[arg.KC_0 = 39] = 'KC_0', arg[arg.KC_ENTER = 40] = 'KC_ENTER', arg[arg.KC_ESCAPE = 41] = 'KC_ESCAPE', arg[arg.KC_BSPACE = 42] = "KC_BSPACE", arg[arg.KC_TAB = 43] = 'KC_TAB', arg[arg.KC_SPACE = 44] = "KC_SPACE", arg[arg.KC_MINUS = 45] = 'KC_MINUS', arg[arg.KC_EQUAL = 46] = "KC_EQUAL", arg[arg.KC_LBRACKET = 47] = "KC_LBRACKET", arg[arg.KC_RBRACKET = 48] = "KC_RBRACKET", arg[arg.KC_BSLASH = 49] = "KC_BSLASH", arg[arg.KC_NONUS_HASH = 50] = "KC_NONUS_HASH", arg[arg.KC_SCOLON = 51] = 'KC_SCOLON', arg[arg.KC_QUOTE = 52] = 'KC_QUOTE', arg[arg.KC_GRAVE = 53] = 'KC_GRAVE', arg[arg.KC_COMMA = 54] = 'KC_COMMA', arg[arg.KC_DOT = 55] = 'KC_DOT', arg[arg.KC_SLASH = 56] = "KC_SLASH", arg[arg.KC_CAPSLOCK = 57] = "KC_CAPSLOCK", arg[arg.KC_F1 = 58] = "KC_F1", arg[arg.KC_F2 = 59] = "KC_F2", arg[arg.KC_F3 = 60] = "KC_F3", arg[arg.KC_F4 = 61] = "KC_F4", arg[arg.KC_F5 = 62] = "KC_F5", arg[arg.KC_F6 = 63] = "KC_F6", arg[arg.KC_F7 = 64] = 'KC_F7', arg[arg.KC_F8 = 65] = "KC_F8", arg[arg.KC_F9 = 66] = 'KC_F9', arg[arg.KC_F10 = 67] = "KC_F10", arg[arg.KC_F11 = 68] = 'KC_F11', arg[arg.KC_F12 = 69] = "KC_F12", arg[arg.KC_PSCREEN = 70] = "KC_PSCREEN", arg[arg.KC_SCROLLLOCK = 71] = 'KC_SCROLLLOCK', arg[arg.KC_PAUSE = 72] = "KC_PAUSE", arg[arg.KC_INSERT = 73] = 'KC_INSERT', arg[arg.KC_HOME = 74] = 'KC_HOME', arg[arg.KC_PGUP = 75] = 'KC_PGUP', arg[arg.KC_DELETE = 76] = "KC_DELETE", arg[arg.KC_END = 77] = "KC_END", arg[arg.KC_PGDOWN = 78] = "KC_PGDOWN", arg[arg.KC_RIGHT = 79] = 'KC_RIGHT', arg[arg.KC_LEFT = 80] = "KC_LEFT", arg[arg.KC_DOWN = 81] = "KC_DOWN", arg[arg.KC_UP = 82] = "KC_UP", arg[arg.KC_NUMLOCK = 83] = 'KC_NUMLOCK', arg[arg.KC_KP_SLASH = 84] = 'KC_KP_SLASH', arg[arg.KC_KP_ASTERISK = 85] = "KC_KP_ASTERISK", arg[arg.KC_KP_MINUS = 86] = "KC_KP_MINUS", arg[arg.KC_KP_PLUS = 87] = 'KC_KP_PLUS', arg[arg.KC_KP_ENTER = 88] = "KC_KP_ENTER", arg[arg.KC_KP_1 = 89] = "KC_KP_1", arg[arg.KC_KP_2 = 90] = "KC_KP_2", arg[arg.KC_KP_3 = 91] = "KC_KP_3", arg[arg.KC_KP_4 = 92] = "KC_KP_4", arg[arg.KC_KP_5 = 93] = 'KC_KP_5', arg[arg.KC_KP_6 = 94] = "KC_KP_6", arg[arg.KC_KP_7 = 95] = "KC_KP_7", arg[arg.KC_KP_8 = 96] = 'KC_KP_8', arg[arg.KC_KP_9 = 97] = 'KC_KP_9', arg[arg.KC_KP_0 = 98] = 'KC_KP_0', arg[arg.KC_KP_DOT = 99] = 'KC_KP_DOT', arg[arg.KC_NONUS_BSLASH = 100] = "KC_NONUS_BSLASH", arg[arg.KC_APPLICATION = 101] = 'KC_APPLICATION', arg[arg.KC_POWER = 102] = "KC_POWER", arg[arg.KC_KP_EQUAL = 103] = 'KC_KP_EQUAL', arg[arg.KC_F13 = 104] = "KC_F13", arg[arg.KC_F14 = 105] = "KC_F14", arg[arg.KC_F15 = 106] = "KC_F15", arg[arg.KC_F16 = 107] = "KC_F16", arg[arg.KC_F17 = 108] = "KC_F17", arg[arg.KC_F18 = 109] = "KC_F18", arg[arg.KC_F19 = 110] = "KC_F19", arg[arg.KC_F20 = 111] = "KC_F20", arg[arg.KC_F21 = 112] = "KC_F21", arg[arg.KC_F22 = 113] = 'KC_F22', arg[arg.KC_F23 = 114] = 'KC_F23', arg[arg.KC_F24 = 115] = "KC_F24", arg[arg.KC_EXECUTE = 116] = "KC_EXECUTE", arg[arg.KC_HELP = 117] = "KC_HELP", arg[arg.KC_MENU = 118] = "KC_MENU", arg[arg.KC_SELECT = 119] = "KC_SELECT", arg[arg.KC_STOP = 120] = "KC_STOP", arg[arg.KC_AGAIN = 121] = "KC_AGAIN", arg[arg.KC_UNDO = 122] = "KC_UNDO", arg[arg.KC_CUT = 123] = 'KC_CUT', arg[arg.KC_COPY = 124] = 'KC_COPY', arg[arg.KC_PASTE = 125] = 'KC_PASTE', arg[arg.KC_FIND = 126] = "KC_FIND", arg[arg.KC__MUTE = 127] = "KC__MUTE", arg[arg.KC__VOLUP = 128] = 'KC__VOLUP', arg[arg.KC__VOLDOWN = 129] = "KC__VOLDOWN", arg[arg.KC_LOCKING_CAPS = 130] = "KC_LOCKING_CAPS", arg[arg.KC_LOCKING_NUM = 131] = "KC_LOCKING_NUM", arg[arg.KC_LOCKING_SCROLL = 132] = 'KC_LOCKING_SCROLL', arg[arg.KC_KP_COMMA = 133] = "KC_KP_COMMA", arg[arg.KC_KP_EQUAL_AS400 = 134] = "KC_KP_EQUAL_AS400", arg[arg.KC_INT1 = 135] = 'KC_INT1', arg[arg.KC_INT2 = 136] = "KC_INT2", arg[arg.KC_INT3 = 137] = "KC_INT3", arg[arg.KC_INT4 = 138] = "KC_INT4", arg[arg.KC_INT5 = 139] = "KC_INT5", arg[arg.KC_INT6 = 140] = "KC_INT6", arg[arg.KC_INT7 = 141] = 'KC_INT7', arg[arg.KC_INT8 = 142] = "KC_INT8", arg[arg.KC_INT9 = 143] = "KC_INT9", arg[arg.KC_LANG1 = 144] = "KC_LANG1", arg[arg.KC_LANG2 = 145] = 'KC_LANG2', arg[arg.KC_LANG3 = 146] = "KC_LANG3", arg[arg.KC_LANG4 = 147] = 'KC_LANG4', arg[arg.KC_LANG5 = 148] = "KC_LANG5", arg[arg.KC_LANG6 = 149] = "KC_LANG6", arg[arg.KC_LANG7 = 150] = "KC_LANG7", arg[arg.KC_LANG8 = 151] = "KC_LANG8", arg[arg.KC_LANG9 = 152] = "KC_LANG9", arg[arg.KC_ALT_ERASE = 153] = "KC_ALT_ERASE", arg[arg.KC_SYSREQ = 154] = "KC_SYSREQ", arg[arg.KC_CANCEL = 155] = "KC_CANCEL", arg[arg.KC_CLEAR = 156] = 'KC_CLEAR', arg[arg.KC_PRIOR = 157] = "KC_PRIOR", arg[arg.KC_RETURN = 158] = "KC_RETURN", arg[arg.KC_SEPARATOR = 159] = 'KC_SEPARATOR', arg[arg.KC_OUT = 160] = 'KC_OUT', arg[arg.KC_OPER = 161] = 'KC_OPER', arg[arg.KC_CLEAR_AGAIN = 162] = "KC_CLEAR_AGAIN", arg[arg.KC_CRSEL = 163] = "KC_CRSEL", arg[arg.KC_EXSEL = 164] = 'KC_EXSEL', arg[arg.KC_KP_00 = 176] = "KC_KP_00", arg[arg.KC_KP_000 = 177] = 'KC_KP_000', arg[arg.KC_THOUSANDS_SEPARATOR = 178] = 'KC_THOUSANDS_SEPARATOR', arg[arg.KC_DECIMAL_SEPARATOR = 179] = "KC_DECIMAL_SEPARATOR", arg[arg.KC_CURRENCY_UNIT = 180] = "KC_CURRENCY_UNIT", arg[arg.KC_CURRENCY_SUB_UNIT = 181] = "KC_CURRENCY_SUB_UNIT", arg[arg.KC_KP_LPAREN = 182] = "KC_KP_LPAREN", arg[arg.KC_KP_RPAREN = 183] = 'KC_KP_RPAREN', arg[arg.KC_KP_LCBRACKET = 184] = 'KC_KP_LCBRACKET', arg[arg.KC_KP_RCBRACKET = 185] = "KC_KP_RCBRACKET", arg[arg.KC_KP_TAB = 186] = "KC_KP_TAB", arg[arg.KC_KP_BSPACE = 187] = "KC_KP_BSPACE", arg[arg.KC_KP_A = 188] = "KC_KP_A", arg[arg.KC_KP_B = 189] = "KC_KP_B", arg[arg.KC_KP_C = 190] = "KC_KP_C", arg[arg.KC_KP_D = 191] = 'KC_KP_D', arg[arg.KC_KP_E = 192] = "KC_KP_E", arg[arg.KC_KP_F = 193] = "KC_KP_F", arg[arg.KC_KP_XOR = 194] = "KC_KP_XOR", arg[arg.KC_KP_HAT = 195] = 'KC_KP_HAT', arg[arg.KC_KP_PERC = 196] = "KC_KP_PERC", arg[arg.KC_KP_LT = 197] = "KC_KP_LT", arg[arg.KC_KP_GT = 198] = "KC_KP_GT", arg[arg.KC_KP_AND = 199] = "KC_KP_AND", arg[arg.KC_KP_LAZYAND = 200] = 'KC_KP_LAZYAND', arg[arg.KC_KP_OR = 201] = "KC_KP_OR", arg[arg.KC_KP_LAZYOR = 202] = 'KC_KP_LAZYOR', arg[arg.KC_KP_COLON = 203] = "KC_KP_COLON", arg[arg.KC_KP_HASH = 204] = "KC_KP_HASH", arg[arg.KC_KP_SPACE = 205] = "KC_KP_SPACE", arg[arg.KC_KP_ATMARK = 206] = 'KC_KP_ATMARK', arg[arg.KC_KP_EXCLAMATION = 207] = 'KC_KP_EXCLAMATION', arg[arg.KC_KP_MEM_STORE = 208] = "KC_KP_MEM_STORE", arg[arg.KC_KP_MEM_RECALL = 209] = "KC_KP_MEM_RECALL", arg[arg.KC_KP_MEM_CLEAR = 210] = "KC_KP_MEM_CLEAR", arg[arg.KC_KP_MEM_ADD = 211] = "KC_KP_MEM_ADD", arg[arg.KC_KP_MEM_SUB = 212] = "KC_KP_MEM_SUB", arg[arg.KC_KP_MEM_MUL = 213] = 'KC_KP_MEM_MUL', arg[arg.KC_KP_MEM_DIV = 214] = "KC_KP_MEM_DIV", arg[arg.KC_KP_PLUS_MINUS = 215] = "KC_KP_PLUS_MINUS", arg[arg.KC_KP_CLEAR = 216] = "KC_KP_CLEAR", arg[arg.KC_KP_CLEAR_ENTRY = 217] = "KC_KP_CLEAR_ENTRY", arg[arg.KC_KP_BINARY = 218] = "KC_KP_BINARY", arg[arg.KC_KP_OCTAL = 219] = "KC_KP_OCTAL", arg[arg.KC_KP_DECIMAL = 220] = "KC_KP_DECIMAL", arg[arg.KC_KP_HEXADECIMAL = 221] = "KC_KP_HEXADECIMAL", arg[arg.KC_LCTRL = 224] = 'KC_LCTRL', arg[arg.KC_LSHIFT = 225] = "KC_LSHIFT", arg[arg.KC_LALT = 226] = "KC_LALT", arg[arg.KC_LGUI = 227] = 'KC_LGUI', arg[arg.KC_RCTRL = 228] = 'KC_RCTRL', arg[arg.KC_RSHIFT = 229] = "KC_RSHIFT", arg[arg.KC_RALT = 230] = "KC_RALT", arg[arg.KC_RGUI = 231] = "KC_RGUI", arg))(mt || {}),
  pt = (arg => (arg[arg.None = -1] = 'None', arg[arg.Modify_Key = 0] = 'Modify_Key', arg[arg.Normal_Key = 1] = 'Normal_Key', arg[arg.Media_Key = 2] = "Media_Key", arg[arg.Power_Key = 3] = "Power_Key", arg[arg.Mouse_Key = 4] = 'Mouse_Key', arg[arg.Move_XY = 5] = 'Move_XY', arg[arg.Scroll = 6] = "Scroll", arg))(pt || {}),
  yt = (arg => (arg[arg.left = 1] = "left", arg[arg.right = 2] = 'right', arg[arg.middle = 4] = "middle", arg[arg.forward = 16] = "forward", arg[arg.back = 8] = "back", arg))(yt || {}),
  wt = (arg => (arg[arg.KeyDown = 0] = 'KeyDown', arg[arg.KeyUp = 1] = "KeyUp", arg))(wt || {});
const bt = [{
    key_name: "KeyQ",
    key_code: mt.KC_Q,
    center: 'Q',
    x: 4,
    mouse_code: 20,
    keyType: 1
  }, {
    key_name: "KeyW",
    key_code: mt.KC_W,
    center: 'W',
    mouse_code: 26,
    keyType: 1
  }, {
    key_name: "KeyE",
    key_code: mt.KC_E,
    center: 'E',
    mouse_code: 8,
    keyType: 1
  }, {
    key_name: "KeyR",
    key_code: mt.KC_R,
    center: 'R',
    mouse_code: 21,
    keyType: 1
  }, {
    key_name: "KeyT",
    key_code: mt.KC_T,
    center: 'T',
    mouse_code: 23,
    keyType: 1
  }, {
    key_name: "KeyY",
    key_code: mt.KC_Y,
    center: 'Y',
    mouse_code: 28,
    keyType: 1
  }, {
    key_name: "KeyU",
    key_code: mt.KC_U,
    center: 'U',
    mouse_code: 24,
    keyType: 1
  }, {
    key_name: 'KeyI',
    key_code: mt.KC_I,
    center: 'I',
    mouse_code: 12,
    keyType: 1
  }, {
    key_name: "KeyO",
    key_code: mt.KC_O,
    center: 'O',
    mouse_code: 18,
    keyType: 1
  }, {
    key_name: "KeyP",
    key_code: mt.KC_P,
    center: 'P',
    mouse_code: 19,
    keyType: 1
  }, {
    key_name: 'KeyA',
    key_code: mt.KC_A,
    center: 'A',
    x: 6.8,
    mouse_code: 4,
    keyType: 1
  }, {
    key_name: 'KeyS',
    key_code: mt.KC_S,
    center: 'S',
    mouse_code: 22,
    keyType: 1
  }, {
    key_name: "KeyD",
    key_code: mt.KC_D,
    center: 'D',
    mouse_code: 7,
    keyType: 1
  }, {
    key_name: "KeyF",
    key_code: mt.KC_F,
    center: 'F',
    mouse_code: 9,
    keyType: 1
  }, {
    key_name: 'KeyG',
    key_code: mt.KC_G,
    center: 'G',
    mouse_code: 10,
    keyType: 1
  }, {
    key_name: "KeyH",
    key_code: mt.KC_H,
    center: 'H',
    mouse_code: 11,
    keyType: 1
  }, {
    key_name: "KeyJ",
    key_code: mt.KC_J,
    center: 'J',
    mouse_code: 13,
    keyType: 1
  }, {
    key_name: "KeyK",
    key_code: mt.KC_K,
    center: 'K',
    mouse_code: 14,
    keyType: 1
  }, {
    key_name: "KeyL",
    key_code: mt.KC_L,
    center: 'L',
    mouse_code: 15,
    keyType: 1
  }, {
    key_name: "KeyZ",
    key_code: mt.KC_Z,
    center: 'Z',
    x: 10.8,
    mouse_code: 29,
    keyType: 1
  }, {
    key_name: "KeyX",
    key_code: mt.KC_X,
    center: 'X',
    mouse_code: 27,
    keyType: 1
  }, {
    key_name: "KeyC",
    key_code: mt.KC_C,
    center: 'C',
    mouse_code: 6,
    keyType: 1
  }, {
    key_name: 'KeyV',
    key_code: mt.KC_V,
    center: 'V',
    mouse_code: 25,
    keyType: 1
  }, {
    key_name: 'KeyB',
    key_code: mt.KC_B,
    center: 'B',
    mouse_code: 5,
    keyType: 1
  }, {
    key_name: "KeyN",
    key_code: mt.KC_N,
    center: 'N',
    mouse_code: 17,
    keyType: 1
  }, {
    key_name: "KeyM",
    key_code: mt.KC_M,
    center: 'M',
    mouse_code: 16,
    keyType: 1
  }, {
    key_name: 'Digit1',
    key_code: mt.KC_1,
    top: '!',
    center: '1',
    mouse_code: 30,
    keyType: 1
  }, {
    key_name: "Digit2",
    key_code: mt.KC_2,
    top: '@',
    center: '2',
    mouse_code: 31,
    keyType: 1
  }, {
    key_name: "Digit3",
    key_code: mt.KC_3,
    top: '#',
    center: '3',
    mouse_code: 32,
    keyType: 1
  }, {
    key_name: "Digit4",
    key_code: mt.KC_4,
    top: '$',
    center: '4',
    mouse_code: 33,
    keyType: 1
  }, {
    key_name: "Digit5",
    key_code: mt.KC_5,
    top: '%',
    center: '5',
    mouse_code: 34,
    keyType: 1
  }, {
    key_name: "Digit6",
    key_code: mt.KC_6,
    top: '^',
    center: '6',
    mouse_code: 35,
    keyType: 1
  }, {
    key_name: 'Digit7',
    key_code: mt.KC_7,
    top: '&',
    center: '7',
    mouse_code: 36,
    keyType: 1
  }, {
    key_name: "Digit8",
    key_code: mt.KC_8,
    top: '*',
    center: '8',
    mouse_code: 37,
    keyType: 1
  }, {
    key_name: "Digit9",
    key_code: mt.KC_9,
    top: '(',
    center: '9',
    mouse_code: 38,
    keyType: 1
  }, {
    key_name: "Digit0",
    key_code: mt.KC_0,
    top: ')',
    center: '0',
    mouse_code: 39,
    keyType: 1
  }],
  _t = [{
    key_name: 'F1',
    key_code: mt.KC_F1,
    mouse_code: 58,
    keyType: 1,
    center: 'F1',
    x: 9.8
  }, {
    key_name: 'F2',
    key_code: mt.KC_F2,
    center: 'F2',
    mouse_code: 59,
    keyType: 1
  }, {
    key_name: 'F3',
    key_code: mt.KC_F3,
    center: 'F3',
    mouse_code: 60,
    keyType: 1
  }, {
    key_name: 'F4',
    key_code: mt.KC_F4,
    center: 'F4',
    mouse_code: 61,
    keyType: 1
  }, {
    key_name: 'F5',
    key_code: mt.KC_F5,
    center: 'F5',
    x: 5,
    mouse_code: 62,
    keyType: 1
  }, {
    key_name: 'F6',
    key_code: mt.KC_F6,
    center: 'F6',
    mouse_code: 63,
    keyType: 1
  }, {
    key_name: 'F7',
    key_code: mt.KC_F7,
    center: 'F7',
    mouse_code: 64,
    keyType: 1
  }, {
    key_name: 'F8',
    key_code: mt.KC_F8,
    center: 'F8',
    x: 5,
    mouse_code: 65,
    keyType: 1
  }, {
    key_name: 'F9',
    key_code: mt.KC_F9,
    center: 'F9',
    mouse_code: 66,
    keyType: 1
  }, {
    key_name: "F10",
    key_code: mt.KC_F10,
    center: "F10",
    mouse_code: 67,
    keyType: 1
  }, {
    key_name: "F11",
    key_code: mt.KC_F11,
    center: 'F11',
    mouse_code: 68,
    keyType: 1
  }, {
    key_name: 'F12',
    key_code: mt.KC_F12,
    center: 'F12',
    mouse_code: 69,
    keyType: 1
  }],
  vt = [{
    key_name: "NumpadDivide",
    key_code: mt.KC_KP_SLASH,
    center: '/',
    mouse_code: 84,
    keyType: 1
  }, {
    key_name: 'NumpadMultiply',
    key_code: mt.KC_KP_ASTERISK,
    center: '*',
    mouse_code: 85,
    keyType: 1
  }, {
    key_name: 'NumpadSubtract',
    key_code: mt.KC_KP_MINUS,
    center: '-',
    mouse_code: 86,
    keyType: 1
  }, {
    key_name: "NumpadAdd",
    key_code: mt.KC_KP_PLUS,
    center: '+',
    h: 2.15,
    mouse_code: 87,
    keyType: 1
  }, {
    key_name: 'Numpad1',
    key_code: mt.KC_KP_1,
    center: '1',
    x: 11.3,
    mouse_code: 89,
    keyType: 1
  }, {
    key_name: "Numpad2",
    key_code: mt.KC_KP_2,
    center: '2',
    mouse_code: 90,
    keyType: 1
  }, {
    key_name: "Numpad3",
    key_code: mt.KC_KP_3,
    center: '3',
    mouse_code: 91,
    keyType: 1
  }, {
    key_name: 'Numpad4',
    key_code: mt.KC_KP_4,
    center: '4',
    x: 40.25,
    mouse_code: 92,
    keyType: 1
  }, {
    key_name: "Numpad5",
    key_code: mt.KC_KP_5,
    center: '5',
    mouse_code: 93,
    keyType: 1
  }, {
    key_name: 'Numpad6',
    key_code: mt.KC_KP_6,
    center: '6',
    mouse_code: 94,
    keyType: 1
  }, {
    key_name: "Numpad7",
    key_code: mt.KC_KP_7,
    center: '7',
    x: 3.5,
    mouse_code: 95,
    keyType: 1
  }, {
    key_name: "Numpad8",
    key_code: mt.KC_KP_8,
    center: '8',
    mouse_code: 96,
    keyType: 1
  }, {
    key_name: "Numpad9",
    key_code: mt.KC_KP_9,
    center: '9',
    mouse_code: 97,
    keyType: 1
  }, {
    key_name: "Numpad0",
    key_code: mt.KC_KP_0,
    center: '0',
    x: 3.5,
    w: 2.15,
    mouse_code: 98,
    keyType: 1
  }, {
    key_name: "NumpadDecimal",
    key_code: mt.KC_KP_DOT,
    center: '.',
    x: 8.8,
    mouse_code: 99,
    keyType: 1
  }],
  kt = [{
    key_name: "Backquote",
    key_code: mt.KC_GRAVE,
    top: '~',
    center: '`',
    mouse_code: 53,
    keyType: 1
  }, {
    key_name: "Minus",
    key_code: mt.KC_MINUS,
    top: '-',
    center: '_',
    frCenter: '+?',
    mouse_code: 45,
    keyType: 1
  }, {
    key_name: 'Equal',
    key_code: mt.KC_EQUAL,
    top: '+',
    center: '=',
    frCenter: ":|\\",
    mouse_code: 46,
    keyType: 1
  }, {
    key_name: "BracketLeft",
    key_code: mt.KC_LBRACKET,
    top: '{',
    center: '[',
    frCenter: 'Å',
    mouse_code: 47,
    keyType: 1
  }, {
    key_name: "BracketRight",
    key_code: mt.KC_RBRACKET,
    top: '}',
    center: ']',
    frCenter: '^~',
    mouse_code: 48,
    keyType: 1
  }, {
    key_name: "Backslash",
    key_code: mt.KC_BSLASH,
    top: '|',
    center: '\x5c',
    frCenter: '|\x5c',
    w: 1.9,
    mouse_code: 49,
    keyType: 1
  }, {
    key_name: "Semicolon",
    key_code: mt.KC_SCOLON,
    top: ':',
    center: ';',
    frCenter: 'Ö',
    mouse_code: 51,
    keyType: 1
  }, {
    key_name: "Quote",
    key_code: mt.KC_QUOTE,
    top: '\x22',
    center: '\x27',
    frCenter: 'Ä',
    mouse_code: 52,
    keyType: 1
  }, {
    key_name: 'Comma',
    key_code: mt.KC_COMMA,
    top: '<',
    center: ',',
    frCenter: ',;',
    mouse_code: 54,
    keyType: 1
  }, {
    key_name: "Period",
    key_code: mt.KC_DOT,
    top: '>',
    center: '.',
    frCenter: '.:',
    mouse_code: 55,
    keyType: 1
  }, {
    key_name: "Slash",
    key_code: mt.KC_SLASH,
    top: '?',
    center: '/',
    frCenter: '--',
    mouse_code: 56,
    keyType: 1
  }, {
    key_name: 'Escape',
    key_code: mt.KC_ESCAPE,
    mouse_code: 41,
    keyType: 1,
    center: 'Esc',
    frCenter: "Echap",
    y: 3
  }, {
    key_name: "Tab",
    key_code: mt.KC_TAB,
    center: "Tab",
    w: 1.45,
    mouse_code: 43,
    keyType: 1
  }, {
    key_name: 'Backspace',
    key_code: mt.KC_BSPACE,
    center: "Back Space",
    w: 2.35,
    mouse_code: 42,
    keyType: 1
  }, {
    key_name: "Enter",
    key_code: mt.KC_ENTER,
    center: "Enter",
    w: 2.65,
    mouse_code: 40,
    keyType: 1
  }, {
    key_name: 'Space',
    key_code: mt.KC_SPACE,
    center: "Space",
    w: 7,
    x: 3,
    mouse_code: 44,
    keyType: 1
  }, {
    key_name: 'MetaLeft',
    key_code: mt.KC_LGUI,
    center: 'Left\x0aWin',
    w: 1.3,
    x: 3,
    mouse_code: 8,
    keyType: 0
  }, {
    key_name: "ControlLeft",
    key_code: mt.KC_LCTRL,
    center: "Left\nCtrl",
    w: 1.3,
    mouse_code: 1,
    keyType: 0
  }, {
    key_name: 'ControlRight',
    key_code: mt.KC_RCTRL,
    center: 'Right\x0aCtrl',
    w: 1.5,
    x: 3,
    mouse_code: 16,
    keyType: 0
  }, {
    key_name: "AltLeft",
    key_code: mt.KC_LALT,
    center: "Left\nAlt",
    w: 1.3,
    x: 3,
    mouse_code: 4,
    keyType: 0
  }, {
    key_name: "AltRight",
    key_code: mt.KC_RALT,
    center: "Right\nAlt",
    w: 1.3,
    x: 41.4,
    mouse_code: 64,
    keyType: 0
  }, {
    key_name: "ShiftLeft",
    key_code: mt.KC_LSHIFT,
    mouse_code: 2,
    center: "Left Shift",
    w: 2.45,
    keyType: 0
  }, {
    key_name: "ShiftRight",
    key_code: mt.KC_RSHIFT,
    center: 'Right\x20Shift',
    w: 3.21,
    mouse_code: 32,
    keyType: 0
  }, {
    key_name: "ArrowUp",
    key_code: mt.KC_UP,
    center: 'Up',
    x: 25.9,
    mouse_code: 82,
    keyType: 1
  }, {
    key_name: "ArrowLeft",
    key_code: mt.KC_LEFT,
    center: "Left",
    x: 6.6,
    mouse_code: 80,
    keyType: 1
  }, {
    key_name: "ArrowDown",
    key_code: mt.KC_DOWN,
    center: "Down",
    mouse_code: 81,
    keyType: 1
  }, {
    key_name: "ArrowRight",
    key_code: mt.KC_RIGHT,
    center: "Right",
    mouse_code: 79,
    keyType: 1
  }, {
    key_name: "PrintScreen",
    key_code: mt.KC_PSCREEN,
    center: "Print\nScreen",
    x: 3.5,
    mouse_code: 70,
    keyType: 1
  }, {
    key_name: "ScrollLock",
    key_code: mt.KC_SCROLLLOCK,
    center: 'Scroll\x0aLock',
    mouse_code: 71,
    keyType: 1
  }, {
    key_name: "Pause",
    key_code: mt.KC_PAUSE,
    center: "Pause",
    mouse_code: 72,
    keyType: 1
  }, {
    key_name: "Insert",
    key_code: mt.KC_INSERT,
    center: "Insert",
    x: 12.5,
    mouse_code: 73,
    keyType: 1
  }, {
    key_name: "Home",
    key_code: mt.KC_HOME,
    center: 'Home',
    mouse_code: 74,
    keyType: 1
  }, {
    key_name: "Delete",
    key_code: mt.KC_DELETE,
    center: 'Delete',
    frCenter: "Suppr",
    x: 9.5,
    mouse_code: 76,
    keyType: 1
  }, {
    key_name: "End",
    key_code: mt.KC_END,
    center: "End",
    mouse_code: 77,
    keyType: 1
  }, {
    key_name: 'PageUp',
    key_code: mt.KC_PGUP,
    center: 'Page\x0aUp',
    mouse_code: 75,
    keyType: 1
  }, {
    key_name: "PageDown",
    key_code: mt.KC_PGDOWN,
    center: "Page\nDown",
    mouse_code: 78,
    keyType: 1
  }, {
    key_name: "CapsLock",
    key_code: mt.KC_CAPSLOCK,
    center: 'Caps\x20Lock',
    w: 1.85,
    mouse_code: 57,
    keyType: 1
  }, {
    key_name: "NumLock",
    key_code: mt.KC_NUMLOCK,
    center: "Num\nLock",
    x: 3.5,
    mouse_code: 83,
    keyType: 1
  }],
  Ct = [{
    key_name: '左键',
    button: 0,
    key_code: 1,
    center: "key.leftButton",
    keyType: 4
  }, {
    key_name: '右键',
    button: 2,
    key_code: 2,
    center: "key.rightButton",
    keyType: 4
  }, {
    key_name: '中键',
    button: 1,
    key_code: 4,
    center: "key.middleButton",
    keyType: 4
  }, {
    key_name: '后退',
    button: 3,
    key_code: 8,
    center: "key.backward",
    keyType: 4
  }, {
    key_name: '前进',
    button: 4,
    key_code: 16,
    center: "key.forward",
    keyType: 4
  }, {
    key_name: '左键',
    button: 0,
    key_code: 240,
    center: "key.leftButton",
    keyType: 4
  }, {
    key_name: '右键',
    button: 2,
    key_code: 241,
    center: 'key.rightButton',
    keyType: 4
  }],
  St = [{
    key_name: "亮度+",
    key_code: 111,
    mouse_code: 111,
    center: 'key.brightnessUp',
    keyType: 2
  }, {
    key_name: "亮度-",
    key_code: 112,
    mouse_code: 112,
    center: 'key.brightnessDown',
    keyType: 2
  }, {
    key_name: "播放器",
    key_code: 387,
    mouse_code: 387,
    center: "key.mediaPlayer",
    keyType: 2
  }, {
    key_name: "停止播放",
    key_code: 183,
    center: "key.stopPlayback",
    mouse_code: 183,
    keyType: 2
  }, {
    key_name: "播放/暂停",
    key_code: 205,
    center: "key.playPause",
    mouse_code: 205,
    keyType: 2
  }, {
    key_name: '上一首',
    key_code: 182,
    mouse_code: 182,
    center: "key.previousTrack",
    keyType: 2
  }, {
    key_name: "下一首",
    key_code: 181,
    mouse_code: 181,
    center: "key.nextTrack",
    keyType: 2
  }, {
    key_name: '静音',
    key_code: 226,
    mouse_code: 226,
    center: "key.mute",
    keyType: 2
  }, {
    key_name: '音量-',
    key_code: 234,
    mouse_code: 234,
    center: 'key.volumeDown',
    keyType: 2
  }, {
    key_name: "音量+",
    key_code: 233,
    mouse_code: 233,
    center: 'key.volumeUp',
    keyType: 2
  }, {
    key_name: '邮件',
    key_code: 394,
    mouse_code: 394,
    center: 'key.mail',
    keyType: 2
  }, {
    key_name: '主页',
    key_code: 547,
    mouse_code: 547,
    center: "key.homepage",
    keyType: 2
  }, {
    key_name: '搜索',
    key_code: 545,
    mouse_code: 545,
    center: "key.search",
    keyType: 2
  }, {
    key_name: '刷新',
    key_code: 551,
    mouse_code: 551,
    center: "key.refresh",
    keyType: 2
  }, {
    key_name: "收藏夹",
    key_code: 554,
    mouse_code: 554,
    center: "key.favorites",
    keyType: 2
  }, {
    key_name: "网页停止",
    key_code: 550,
    mouse_code: 550,
    center: "key.stopLoading",
    keyType: 2
  }, {
    key_name: "网页前进",
    key_code: 549,
    mouse_code: 549,
    center: "key.webForward",
    keyType: 2
  }, {
    key_name: "网页后退",
    key_code: 548,
    mouse_code: 548,
    center: "key.webBackward",
    keyType: 2
  }, {
    key_name: '计算器',
    key_code: 402,
    mouse_code: 402,
    center: "key.computer",
    keyType: 2
  }, {
    key_name: "我的电脑",
    key_code: 404,
    mouse_code: 404,
    center: "key.myComputer",
    keyType: 2
  }],
  Ut = [bt, _t, vt, kt],
  Dt = [[{
    key_name: "KeyQ",
    key_code: mt.KC_Q,
    center: 'Q',
    frCenter: 'Q',
    x: 4,
    mouse_code: 20,
    keyType: 1
  }, {
    key_name: "KeyW",
    key_code: mt.KC_W,
    center: 'W',
    frCenter: 'W',
    mouse_code: 26,
    keyType: 1
  }, {
    key_name: "KeyE",
    key_code: mt.KC_E,
    center: 'E',
    frCenter: 'E€',
    mouse_code: 8,
    keyType: 1
  }, {
    key_name: "KeyR",
    key_code: mt.KC_R,
    center: 'R',
    mouse_code: 21,
    keyType: 1
  }, {
    key_name: "KeyT",
    key_code: mt.KC_T,
    center: 'T',
    mouse_code: 23,
    keyType: 1
  }, {
    key_name: 'KeyY',
    key_code: mt.KC_Y,
    center: 'Y',
    mouse_code: 28,
    keyType: 1
  }, {
    key_name: "KeyU",
    key_code: mt.KC_U,
    center: 'U',
    mouse_code: 24,
    keyType: 1
  }, {
    key_name: "KeyI",
    key_code: mt.KC_I,
    center: 'I',
    mouse_code: 12,
    keyType: 1
  }, {
    key_name: "KeyO",
    key_code: mt.KC_O,
    center: 'O',
    mouse_code: 18,
    keyType: 1
  }, {
    key_name: 'KeyP',
    key_code: mt.KC_P,
    center: 'P',
    mouse_code: 19,
    keyType: 1
  }, {
    key_name: "KeyA",
    key_code: mt.KC_A,
    center: 'A',
    frCenter: 'A',
    x: 6.8,
    mouse_code: 4,
    keyType: 1
  }, {
    key_name: "KeyS",
    key_code: mt.KC_S,
    center: 'S',
    mouse_code: 22,
    keyType: 1
  }, {
    key_name: "KeyD",
    key_code: mt.KC_D,
    center: 'D',
    mouse_code: 7,
    keyType: 1
  }, {
    key_name: "KeyF",
    key_code: mt.KC_F,
    center: 'F',
    mouse_code: 9,
    keyType: 1
  }, {
    key_name: "KeyG",
    key_code: mt.KC_G,
    center: 'G',
    mouse_code: 10,
    keyType: 1
  }, {
    key_name: 'KeyH',
    key_code: mt.KC_H,
    center: 'H',
    mouse_code: 11,
    keyType: 1
  }, {
    key_name: "KeyJ",
    key_code: mt.KC_J,
    center: 'J',
    mouse_code: 13,
    keyType: 1
  }, {
    key_name: 'KeyK',
    key_code: mt.KC_K,
    center: 'K',
    mouse_code: 14,
    keyType: 1
  }, {
    key_name: "KeyL",
    key_code: mt.KC_L,
    center: 'L',
    mouse_code: 15,
    keyType: 1
  }, {
    key_name: 'KeyZ',
    key_code: mt.KC_Z,
    center: 'Z',
    x: 10.8,
    mouse_code: 29,
    keyType: 1
  }, {
    key_name: "KeyX",
    key_code: mt.KC_X,
    center: 'X',
    mouse_code: 27,
    keyType: 1
  }, {
    key_name: "KeyC",
    key_code: mt.KC_C,
    center: 'C',
    mouse_code: 6,
    keyType: 1
  }, {
    key_name: 'KeyV',
    key_code: mt.KC_V,
    center: 'V',
    mouse_code: 25,
    keyType: 1
  }, {
    key_name: "KeyB",
    key_code: mt.KC_B,
    center: 'B',
    mouse_code: 5,
    keyType: 1
  }, {
    key_name: "KeyN",
    key_code: mt.KC_N,
    center: 'N',
    mouse_code: 17,
    keyType: 1
  }, {
    key_name: 'KeyM',
    key_code: mt.KC_M,
    center: 'M',
    mouse_code: 16,
    keyType: 1
  }, {
    key_name: "Digit1",
    key_code: mt.KC_1,
    center: '1!',
    mouse_code: 30,
    keyType: 1
  }, {
    key_name: 'Digit2',
    key_code: mt.KC_2,
    center: "2@\"",
    mouse_code: 31,
    keyType: 1
  }, {
    key_name: "Digit3",
    key_code: mt.KC_3,
    center: '3#',
    mouse_code: 32,
    keyType: 1
  }, {
    key_name: "Digit4",
    key_code: mt.KC_4,
    center: '4$',
    mouse_code: 33,
    keyType: 1
  }, {
    key_name: "Digit5",
    key_code: mt.KC_5,
    center: '5%',
    mouse_code: 34,
    keyType: 1
  }, {
    key_name: 'Digit6',
    key_code: mt.KC_6,
    center: '6&',
    mouse_code: 35,
    keyType: 1
  }, {
    key_name: "Digit7",
    key_code: mt.KC_7,
    center: "7/{",
    mouse_code: 36,
    keyType: 1
  }, {
    key_name: "Digit8",
    key_code: mt.KC_8,
    center: "8([",
    mouse_code: 37,
    keyType: 1
  }, {
    key_name: 'Digit9',
    key_code: mt.KC_9,
    center: "9)]",
    mouse_code: 38,
    keyType: 1
  }, {
    key_name: "Digit0",
    key_code: mt.KC_0,
    center: "0=}",
    mouse_code: 39,
    keyType: 1
  }], _t, vt, kt];
function Ot(arg) {
  switch (arg) {
    case "OSLeft":
      return "MetaLeft";
    case 'OSRight':
      return "MetaRight";
    case "Help":
      return "Insert";
    case "Shift":
      return "ShiftRight";
    default:
      return arg;
  }
}
function xt(arg2) {
  const {
    code: value,
    key: value1
  } = arg2;
  return value || 'Shift' !== value1 ? value : "ShiftRight";
}
function Kt(arg) {
  return ((null == arg ? void 0 : arg.top) || '') + ((null == arg ? void 0 : arg.center) || '') + ((null == arg ? void 0 : arg.bottom) || '');
}
const At = {
    class: 'm-auto'
  },
  It = {
    class: "relative transform overflow-hidden rounded-lg bg-light-bg4 dark:bg-dark-bg4 text-left shadow-xl transition-all"
  },
  Pt = {
    class: 'bg-light-bg4\x20dark:bg-dark-bg4\x20px-4\x20pb-4\x20min-w-[320px]\x20pt-2'
  },
  Mt = {
    class: ''
  },
  Tt = {
    class: 'mt-3\x20text-center'
  },
  Rt = {
    key: 0,
    class: 'text-base\x20font-semibold\x20leading-6\x20text-light-text1\x20dark:text-dark-text1'
  },
  Et = {
    key: 1,
    class: 'mt-2'
  },
  Bt = {
    class: "text-sm text-light-text2 dark:text-dark-text2"
  },
  Lt = {
    class: "mt-3 text-center"
  },
  Ft = ["placeholder"],
  Nt = {
    key: 1,
    class: "border-[1px] w-full rounded-[5px] text-center py-[8px] px-[5px] transition-all duration-300 outline-0 focus:border-black focus:dark:border-white"
  },
  Gt = {
    key: 0,
    class: "text-light-text2 dark:text-dark-text2 text-[14px]"
  },
  zt = {
    key: 1
  },
  Ht = {
    class: 'bg-light-fill1\x20dark:bg-dark-fill1\x20px-4\x20py-3'
  },
  Wt = a28_0x14a649(a28_0x257a46({
    __name: 'input',
    props: {
      type: {
        type: String,
        default: "text"
      },
      title: {
        type: String,
        default: ''
      },
      defaultValue: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      okText: {
        type: String,
        default: 'popover.confirm'
      },
      hideOk: {
        type: Boolean,
        default: false
      },
      hideCancel: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: "popover.cancel"
      },
      callback: {
        type: Function
      }
    },
    'setup'(arg9) {
      const value4 = arg9,
        value2 = a28_0x34ade5(null),
        value22 = a28_0x34ade5(value4.defaultValue),
        value6 = a28_0x34ade5(),
        value7 = a28_0x3ab4c6(() => {
          const value = "keyboard" === value4.type;
          return (!('text' === value4.type) || !value22.value) && !(value && value6.value);
        });
      function fn5(arg) {
        value6.value = Ot(arg.code) || xt(arg);
      }
      async function fn8(arg) {
        value2.value.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: 'forwards'
        });
        setTimeout(() => {
          var value;
          null == (value = value4.callback) || value.call(value4, arg);
        }, 300);
      }
      function fn1() {
        if (!value4.callback) return;
        if (value7.value) return;
        const value = "keyboard" === value4.type,
          value1 = "text" === value4.type;
        value && fn8(value6.value);
        value1 && fn8(value22.value);
      }
      function fn3() {
        value4.callback && fn8(void 0);
      }
      a28_0x417103(() => {
        "keyboard" === value4.type && window.addEventListener("keydown", fn5);
      });
      a28_0x5164de(() => {
        'keyboard' === value4.type && window.removeEventListener("keydown", fn5);
      });
      return (arg2, arg1) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        ref_key: "promptRef",
        ref: value2,
        class: "flex fixed inset-0 z-[999] select-none opacity-0 animate-show"
      }, [a28_0x1683e7("div", {
        class: "inset-0 fixed bg-black/10 dark:bg-black/50",
        onClick: fn3
      }), a28_0x1683e7("div", At, [a28_0x1683e7("div", It, [a28_0x1683e7("div", Pt, [a28_0x1683e7("div", Mt, [a28_0x1683e7("div", Tt, [arg9.title ? (a28_0x14ec8c(), a28_0x4334ed('h3', Rt, a28_0x3cd23b(arg2.$t(arg9.title)), 1)) : a28_0x41e27b('', true), arg9.content ? (a28_0x14ec8c(), a28_0x4334ed('div', Et, [a28_0x1683e7('p', Bt, a28_0x3cd23b(arg2.$t(arg9.content)), 1)])) : a28_0x41e27b('', true)]), a28_0x1683e7('div', Lt, ['text' === arg9.type ? a28_0x243693((a28_0x14ec8c(), a28_0x4334ed("input", {
        key: 0,
        'onUpdate:modelValue': arg1[0] || (arg1[0] = arg => value22.value = arg),
        placeholder: arg2.$t(arg9.placeholder),
        class: "border-[1px] bg-light-bg2 dark:bg-dark-bg2 border-light-border1 dark:border-dark-border1 w-full rounded-[5px] text-center py-[8px] px-[5px] transition-all duration-300 outline-0 focus:border-black focus:dark:border-dark-context1"
      }, null, 8, Ft)), [[a28_0x4a0fbe, value22.value]]) : a28_0x41e27b('', true), 'keyboard' === arg9.type ? (a28_0x14ec8c(), a28_0x4334ed("div", Nt, [value6.value ? (a28_0x14ec8c(), a28_0x4334ed("div", zt, a28_0x3cd23b(value6.value), 1)) : (a28_0x14ec8c(), a28_0x4334ed("div", Gt, a28_0x3cd23b(arg2.$t(arg9.placeholder)), 1))])) : a28_0x41e27b('', true)])])]), a28_0x1683e7("div", Ht, [arg9.hideOk ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed("button", {
        key: 0,
        class: a28_0x11002d([[value7.value ? ["opacity-55", "cursor-not-allowed"] : []], "inline-flex w-full justify-center rounded-md bg-light-primary6 dark:bg-dark-primary6 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all transform duration-300 active:scale-95"]),
        type: "button",
        onClick: fn1
      }, a28_0x3cd23b(arg2.$t(arg9.okText)), 3)), arg9.hideCancel ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 1,
        class: 'mt-3\x20inline-flex\x20w-full\x20justify-center\x20rounded-md\x20bg-light-fill3\x20dark:bg-dark-fill3\x20px-3\x20py-2\x20text-sm\x20font-semibold\x20text-light-text1\x20dark:text-dark-text1\x20shadow-sm\x20transition-all\x20transform\x20duration-300\x20active:scale-95',
        type: "button",
        onClick: fn3
      }, a28_0x3cd23b(arg2.$t(arg9.cancelText)), 1))])])])], 512));
    }
  }), [["__scopeId", 'data-v-b2e130e7']]),
  Yt = {
    key: 0,
    class: "font-bold"
  },
  $t = {
    class: "block sm:inline"
  },
  qt = a28_0x1683e7("span", {
    class: 'px-4\x20py-3'
  }, null, -1),
  Jt = [a28_0x1683e7("svg", {
    class: "fill-current h-6 w-6 text-red-500",
    role: "button",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: '0\x200\x2020\x2020'
  }, [a28_0x1683e7("title", null, "Close"), a28_0x1683e7("path", {
    d: 'M14.348\x2014.849a1.2\x201.2\x200\x200\x201-1.697\x200L10\x2011.819l-2.651\x203.029a1.2\x201.2\x200\x201\x201-1.697-1.697l2.758-3.15-2.759-3.152a1.2\x201.2\x200\x201\x201\x201.697-1.697L10\x208.183l2.651-3.031a1.2\x201.2\x200\x201\x201\x201.697\x201.697l-2.758\x203.152\x202.758\x203.15a1.2\x201.2\x200\x200\x201\x200\x201.698z'
  })], -1)],
  Xt = a28_0x257a46({
    __name: "alert",
    props: {
      type: {
        type: String,
        default: "info"
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      callback: {
        type: Function
      }
    },
    'setup'(arg2) {
      const value2 = a28_0x34ade5(null),
        value3 = arg2;
      async function fn1() {
        value2.value.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: "forwards"
        });
        setTimeout(() => {
          var value;
          null == (value = value3.callback) || value.call(value3);
        }, 300);
      }
      a28_0x417103(() => {
        const value = setTimeout(() => {
          clearTimeout(value);
          fn1();
        }, 3000);
      });
      return (arg, arg1) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        ref_key: 'promptRef',
        ref: value2,
        class: 'fixed\x20top-10\x20left-0\x20right-0\x20z-[99]\x20flex\x20items-center\x20justify-center'
      }, [a28_0x1683e7('div', {
        class: a28_0x11002d(["border border-red-400 text-red-700 px-4 py-3 rounded relative shadow", {
          'bg-red-100': "warn" === arg2.type,
          'bg-yellow-100': "info" === arg2.type,
          'bg-green-100': "success" === arg2.type
        }]),
        role: "alert"
      }, [arg2.title ? (a28_0x14ec8c(), a28_0x4334ed('strong', Yt, a28_0x3cd23b(arg.$t(arg2.title)), 1)) : a28_0x41e27b('', true), a28_0x1683e7("span", $t, a28_0x3cd23b(arg.$t(arg2.content)), 1), qt, a28_0x1683e7("span", {
        class: "absolute top-0 bottom-0 right-0 px-4 py-3",
        onClick: fn1
      }, Jt)], 2)], 512));
    }
  }),
  Zt = {
    class: 'm-auto'
  },
  Qt = {
    class: "relative transform overflow-hidden rounded-lg bg-light-bg2 dark:bg-dark-bg2 text-left shadow-xl transition-all"
  },
  er = {
    class: "bbg-light-bg2 dark:bg-dark-bg2 px-[80px] pb-4 min-w-[320px]"
  },
  tr = {
    class: ''
  },
  rr = {
    class: 'mt-6\x20text-center'
  },
  sr = {
    class: "text-lg font-semibold leading-6 text-light-text2 dark:text-dark-text2"
  },
  nr = {
    class: "mt-2"
  },
  ar = {
    class: "flex flex-col gap-[10px] justify-center items-center text-sm text-light-text2 dark:text-dark-text2 max-w-[600px] mx-auto"
  },
  ir = {
    class: 'mt-[24px]\x20max-w-[480px]\x20text-base'
  },
  or = {
    class: "flex flex-col mt-[16px] border-solid border border-light-border2 dark:border-dark-border2 rounded-[4px]"
  },
  ur = {
    class: "grid grid-cols-9 px-4"
  },
  cr = {
    class: "col-span-4 text-left py-4"
  },
  lr = a28_0x1683e7('div', {
    class: "col-span-1 flex items-center justify-center"
  }, [a28_0x1683e7('div', {
    class: 'w-[1px]\x20bg-light-fill3\x20dark:bg-dark-fill3\x20h-full'
  })], -1),
  fr = {
    class: "col-span-4 text-left py-4"
  },
  hr = a28_0x1683e7('div', {
    class: "h-[1px] bg-light-fill3 dark:bg-dark-fill3 w-full"
  }, null, -1),
  dr = {
    class: "m-2"
  },
  gr = {
    class: 'mt-[16px]\x20text-light-text3\x20dark:text-dark-text3'
  },
  mr = {
    class: "bg-light-fill1 dark:bg-dark-fill1 px-4 py-3"
  },
  pr = a28_0x257a46({
    __name: 'config',
    props: {
      content: {
        type: String,
        default: ''
      },
      okText: {
        type: String,
        default: "popover.confirm"
      },
      hideOk: {
        type: Boolean,
        default: false
      },
      hideCancel: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: "popover.cancel"
      },
      callback: {
        type: Function
      }
    },
    'setup'(arg12) {
      const value2 = arg12,
        value3 = a28_0x34ade5(null);
      async function fn2(arg) {
        value3.value.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: "forwards"
        });
        setTimeout(() => {
          var value;
          null == (value = value2.callback) || value.call(value2, arg);
        }, 300);
      }
      function fn4() {
        value2.callback && fn2(true);
      }
      function fn5() {
        value2.callback && fn2(false);
      }
      return (arg, arg1) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        ref_key: "promptRef",
        ref: value3,
        class: "flex fixed inset-0 z-[999] select-none opacity-0 animate-show"
      }, [a28_0x1683e7('div', {
        class: "inset-0 fixed bg-black/40 dark:bg-black/70",
        onClick: fn5
      }), a28_0x1683e7("div", Zt, [a28_0x1683e7("div", Qt, [a28_0x1683e7('div', er, [a28_0x1683e7("div", tr, [a28_0x1683e7('div', rr, [a28_0x1683e7("div", sr, a28_0x3cd23b(arg.$t("Officially recommended minimum computer configuration")), 1), a28_0x1683e7('div', nr, [a28_0x1683e7("div", ar, [a28_0x1683e7("div", ir, a28_0x3cd23b(arg.$t("To ensure a high return on investment user experience, please ensure that your computer configuration meets the following minimum recommended configuration requirements to maximize mouse performance.")), 1), a28_0x1683e7('div', or, [a28_0x1683e7("div", ur, [a28_0x1683e7('div', cr, [a28_0x1683e7('p', null, a28_0x3cd23b(arg.$t('Intel\x20platform')), 1), a28_0x1683e7('p', null, a28_0x3cd23b(arg.$t("CPU: i79700k and above")), 1), a28_0x1683e7('p', null, a28_0x3cd23b(arg.$t("Graphics card: NVIDIA RTX2060 and above")), 1), a28_0x1683e7('p', null, a28_0x3cd23b(arg.$t("Memory: 16GB or above")), 1)]), lr, a28_0x1683e7("div", fr, [a28_0x1683e7('p', null, a28_0x3cd23b(arg.$t('AMD\x20platform')), 1), a28_0x1683e7('p', null, a28_0x3cd23b(arg.$t("CPU: 3600X and above")), 1), a28_0x1683e7('p', null, a28_0x3cd23b(arg.$t('Graphics\x20card:\x20AMD\x20RX5700X\x20and\x20above')), 1), a28_0x1683e7('p', null, a28_0x3cd23b(arg.$t('Memory:\x2016GB\x20or\x20above')), 1)])]), hr, a28_0x1683e7('div', dr, a28_0x3cd23b(arg.$t("Monitor: Screen refresh rate above 240Hz")), 1)]), a28_0x1683e7("div", gr, [a28_0x27d2d4(a28_0x3cd23b(arg.$t("* If there is a dropout or disconnection during the use of 8K polling rate.")) + '\x20', 1), a28_0x1683e7('p', null, a28_0x3cd23b(arg.$t("You can consult customer service, and professional after-sales customer service will guide you in investigating the cause.")), 1)])])])])])]), a28_0x1683e7("div", mr, [arg12.hideOk ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 0,
        class: "inline-flex w-full justify-center rounded-md bg-light-primary6 dark:bg-dark-primary6 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all transform duration-300 active:scale-95",
        type: 'button',
        onClick: fn4
      }, a28_0x3cd23b(arg.$t(arg12.okText)), 1)), arg12.hideCancel ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 1,
        class: "mt-3 inline-flex w-full justify-center rounded-md bg-light-fill3 dark:bg-dark-fill3 px-3 py-2 text-sm font-semibold text-light-text1 dark:text-dark-text1 shadow-sm transition-all transform duration-300 active:scale-95",
        type: "button",
        onClick: fn5
      }, a28_0x3cd23b(arg.$t(arg12.cancelText)), 1))])])])], 512));
    }
  });
let yr;
const wr = new Uint8Array(16);
function br() {
  if (!yr && (yr = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !yr)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return yr(wr);
}
const _r = [];
for (let rm = 0; rm < 256; ++rm) _r.push((rm + 256).toString(16).slice(1));
const vr = {
  randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};
function kr(arg12, arg3, arg2) {
  if (vr.randomUUID && !arg3 && !arg12) return vr.randomUUID();
  const value2 = (arg12 = arg12 || {}).random || (arg12.rng || br)();
  value2[6] = 15 & value2[6] | 64;
  value2[8] = 63 & value2[8] | 128;
  if (arg3) {
    arg2 = arg2 || 0;
    for (let value = 0; value < 16; ++value) arg3[arg2 + value] = value2[value];
    return arg3;
  }
  return function (arg1, arg = 0) {
    return _r[arg1[arg + 0]] + _r[arg1[arg + 1]] + _r[arg1[arg + 2]] + _r[arg1[arg + 3]] + '-' + _r[arg1[arg + 4]] + _r[arg1[arg + 5]] + '-' + _r[arg1[arg + 6]] + _r[arg1[arg + 7]] + '-' + _r[arg1[arg + 8]] + _r[arg1[arg + 9]] + '-' + _r[arg1[arg + 10]] + _r[arg1[arg + 11]] + _r[arg1[arg + 12]] + _r[arg1[arg + 13]] + _r[arg1[arg + 14]] + _r[arg1[arg + 15]];
  }(value2);
}
class ViewHelp {
  constructor(arg, arg1) {
    V(this, "mountNode", null);
    V(this, 'id', kr().replace(/-/g, ''));
    V(this, "app");
    V(this, "component");
    V(this, "qualifiedName");
    this.component = arg;
    this.qualifiedName = arg1;
  }
  static ["isExist"](arg) {
    return null != document.querySelector('[' + arg + ']');
  }
  ['show'](arg) {
    this.app = a28_0x41d197(this.component, {
      ...arg
    });
    this.app.use(a28_0x1fae92);
    this.mountNode = document.createElement('div');
    this.mountNode.setAttribute(this.qualifiedName, '');
    this.mountNode.id = this.id;
    this.app.mount(this.mountNode);
    a28_0x1fae92.global.locale.value = localStorage.getItem("__locale") || '';
    document.body.appendChild(this.mountNode);
  }
  ["syncShow"](arg3) {
    arg3 || (arg3 = {});
    return new Promise(arg2 => {
      arg3.callback = arg => {
        this.close();
        arg2(arg);
      };
      this.show(arg3);
    });
  }
  ['close']() {
    var value, value1;
    null == (value = this.app) || value.unmount();
    null == (value1 = document.getElementById(this.id)) || value1.remove();
  }
}
class NotificationDialog extends ViewHelp {
  constructor() {
    super(qe, "prompt-dialog");
  }
  static ['create']() {
    return new NotificationDialog();
  }
  ["syncShow"](arg) {
    return super.syncShow(arg);
  }
}
class PromptDialog extends ViewHelp {
  constructor() {
    super(Ge, "prompt-dialog");
  }
  static ["create"]() {
    return new PromptDialog();
  }
  ["syncShow"](arg) {
    return super.syncShow(arg);
  }
}
class ProgressDialog extends ViewHelp {
  constructor() {
    super(gt, "progress-dialog");
    V(this, "exposedSetProgress", null);
    V(this, "exposedClose", null);
    V(this, 'exposedSetTitle', null);
    V(this, "exposedSetContent", null);
  }
  static ["create"]() {
    return new ProgressDialog();
  }
  ["setProgress"](arg) {
    this.exposedSetProgress(arg);
  }
  ['setTitle'](arg) {
    var value1;
    null == (value1 = this.exposedSetTitle) || value1.call(this, arg);
  }
  ['setContent'](arg1) {
    var value;
    null == (value = this.exposedSetContent) || value.call(this, arg1);
  }
  ["hidden"]() {
    this.exposedClose();
  }
  ['show'](arg2) {
    super.show({
      ...arg2,
      exposedSetTitle: arg => {
        this.exposedSetTitle = arg;
      },
      exposedSetProgress: arg => {
        this.exposedSetProgress = arg;
      },
      exposedClose: arg => {
        this.exposedClose = arg;
      },
      exposedSetContent: arg => {
        this.exposedSetContent = arg;
      },
      callback: () => {
        this.close();
      }
    });
    return this;
  }
}
class InputDialog extends ViewHelp {
  constructor() {
    super(Wt, "input-dialog");
  }
  static ["create"]() {
    return new InputDialog();
  }
  ["syncShow"](arg) {
    return super.syncShow(arg);
  }
}
class AdviceConfigDialog extends ViewHelp {
  constructor() {
    super(pr, 'config-dialog');
  }
  static ["create"]() {
    return new AdviceConfigDialog();
  }
  ["syncShow"](arg) {
    return super.syncShow(arg);
  }
}
class AlertDialog extends ViewHelp {
  constructor() {
    super(Xt, 'alert-dialog');
  }
  static ['create']() {
    return new AlertDialog();
  }
  ['syncShow'](arg) {
    return super.syncShow(arg);
  }
}
let Cr = (e = class {
  constructor(arg3, arg1, arg = 0) {
    V(this, "raw");
    let value2 = arg3 ? arg3.buffer : new ArrayBuffer(e.SIZE);
    this.raw = new DataView(value2);
    this.flag = 85;
    this.commandId = arg1;
  }
  static ['getData']() {
    return new DataView(new ArrayBuffer(e.SIZE));
  }
  get ["flag"]() {
    return this.raw.getUint8(0);
  }
  set ["flag"](arg) {
    this.raw.setUint8(0, arg);
  }
  get ["commandId"]() {
    return this.raw.getUint8(1);
  }
  set ["commandId"](arg) {
    this.raw.setUint8(1, arg);
  }
  get ["key"]() {
    return this.raw.getUint8(2);
  }
  set ["key"](arg) {
    this.raw.setUint8(2, arg);
  }
  get ["len"]() {
    return this.raw.getUint8(4);
  }
  set ['len'](arg) {
    this.raw.setUint8(4, arg);
  }
  get ["addr"]() {
    return this.raw.getUint16(5, true);
  }
  set ["addr"](arg) {
    this.raw.setUint16(5, arg, true);
  }
  ["toUint8Array"]() {
    const value = Array.from(new Uint8Array(this.raw.buffer.slice(3, e.SIZE))).reduce((arg1, arg) => arg1 + arg, 0);
    this.raw.setUint8(3, 255 & value);
    return new Uint8Array(this.raw.buffer);
  }
  get ["baseOffset"]() {
    return e.baseOffset;
  }
  ["setRaw"](arg) {
    this.raw = arg;
    return this;
  }
  ["toStringTx"]() {
    return "requestCode: " + this.commandId + ',\x20commandId:\x20' + this.commandId;
  }
  ['toStringRx']() {
    return "requestCode: " + this.commandId + ", commandId: " + this.commandId;
  }
}, V(e, "SIZE", 64), V(e, "baseOffset", 8), e);
var Sr = (arg => (arg[arg.ReplyId = 170] = "ReplyId", arg[arg.DebugId = 160] = "DebugId", arg[arg.SyncId = 161] = "SyncId", arg[arg.FastCommunicationStart = 1] = "FastCommunicationStart", arg[arg.FastCommunicationStop = 2] = "FastCommunicationStop", arg[arg.GetInfo = 3] = "GetInfo", arg[arg.GetBase = 4] = 'GetBase', arg[arg.GetFunc = 5] = "GetFunc", arg[arg.SetFunc = 6] = "SetFunc", arg[arg.GetDefaultKeyMatrix = 7] = 'GetDefaultKeyMatrix', arg[arg.GetUseKeyMatrix = 8] = "GetUseKeyMatrix", arg[arg.SetUseKeyMatrix = 9] = "SetUseKeyMatrix", arg[arg.GetLedDefine = 10] = "GetLedDefine", arg[arg.SetLedDefine = 11] = "SetLedDefine", arg[arg.GetMacro = 12] = "GetMacro", arg[arg.SetMacro = 13] = 'SetMacro', arg[arg.FactoryDataReset = 238] = "FactoryDataReset", arg[arg.GetKeyTriggerTravel = 160] = 'GetKeyTriggerTravel', arg[arg.SetKeyTriggerTravel = 161] = "SetKeyTriggerTravel", arg[arg.GetDskInfo = 162] = "GetDskInfo", arg[arg.SetDskInfo = 163] = 'SetDskInfo', arg[arg.GetMtKeyInfo = 164] = 'GetMtKeyInfo', arg[arg.SetMtKeyInfo = 165] = "SetMtKeyInfo", arg[arg.GetTglKeyInfo = 166] = "GetTglKeyInfo", arg[arg.SetTglKeyInfo = 167] = "SetTglKeyInfo", arg[arg.StartCalibration = 168] = "StartCalibration", arg[arg.EndCalibration = 169] = "EndCalibration", arg[arg.GetCalibration = 170] = 'GetCalibration', arg[arg.GetAppDefine = 241] = "GetAppDefine", arg[arg.SetAppDefine = 242] = "SetAppDefine", arg))(Sr || {}),
  Ur = (arg => (arg[arg.null = 0] = "null", arg[arg.general = 16] = 'general', arg[arg.oksRt = 20] = "oksRt", arg[arg.mouse = 32] = "mouse", arg[arg.mouseWheel = 33] = "mouseWheel", arg[arg.mouseSwing = 34] = 'mouseSwing', arg[arg.mouseXY = 35] = 'mouseXY', arg[arg.consumer = 48] = "consumer", arg[arg.system = 64] = "system", arg[arg.exe = 80] = "exe", arg[arg.web = 96] = "web", arg[arg.macro = 112] = "macro", arg[arg.keyboardWheel = 128] = "keyboardWheel", arg[arg.dsk = 144] = 'dsk', arg[arg.tgl = 145] = 'tgl', arg[arg.mtk = 146] = "mtk", arg[arg.rs = 147] = 'rs', arg[arg.socd = 148] = "socd", arg[arg.oks = 149] = "oks", arg[arg.function = 240] = "function", arg))(Ur || {}),
  Dr = (arg => (arg[arg.RWin = 128] = "RWin", arg[arg.RAlt = 64] = "RAlt", arg[arg.RShift = 32] = 'RShift', arg[arg.RCtrl = 16] = "RCtrl", arg[arg.LWin = 8] = "LWin", arg[arg.LAlt = 4] = "LAlt", arg[arg.LShift = 2] = 'LShift', arg[arg.LCtrl = 1] = 'LCtrl', arg))(Dr || {}),
  Or = (arg => (arg[arg.LastWin = 0] = 'LastWin', arg[arg.OwnWin = 16] = "OwnWin", arg[arg.BondWin = 32] = "BondWin", arg[arg.Nature = 48] = "Nature", arg))(Or || {}),
  xr = (arg => (arg[arg.MagneticWhite = 1] = 'MagneticWhite', arg[arg.MagneticJade = 2] = "MagneticJade", arg[arg.Magneto = 3] = "Magneto", arg[arg.MagneticAmber = 4] = 'MagneticAmber', arg[arg.MagneticJadePro = 5] = 'MagneticJadePro', arg[arg.Leviathan = 6] = 'Leviathan', arg[arg.Uranus = 7] = 'Uranus', arg[arg.MagneticKingGrainGold = 8] = "MagneticKingGrainGold", arg[arg.MagneticJadeEsports = 9] = 'MagneticJadeEsports', arg[arg.MagnetoGaming = 10] = "MagnetoGaming", arg[arg.MagnetoKing = 11] = 'MagnetoKing', arg[arg.MagneticGod = 12] = "MagneticGod", arg[arg.PhantomGod = 13] = 'PhantomGod', arg[arg.AuroraMagnetic = 14] = "AuroraMagnetic", arg))(xr || {});
const Kr = new Error('request\x20for\x20lock\x20canceled');
var Ar = function (arg32, arg12, arg22, arg3) {
  return new (arg22 || (arg22 = Promise))(function (arg2, arg4) {
    function fn1(arg) {
      try {
        fn2(arg3.next(arg));
      } catch (value) {
        arg4(value);
      }
    }
    function fn3(arg) {
      try {
        fn2(arg3.throw(arg));
      } catch (value) {
        arg4(value);
      }
    }
    function fn2(arg1) {
      var value;
      if (arg1.done) arg2(arg1.value);else (value = arg1.value, value instanceof arg22 ? value : new arg22(function (arg) {
        arg(value);
      })).then(fn1, fn3);
    }
    fn2((arg3 = arg3.apply(arg32, arg12 || [])).next());
  });
};
class Semaphore {
  constructor(arg1, arg = Kr) {
    this._value = arg1;
    this._cancelError = arg;
    this._weightedQueues = [];
    this._weightedWaiters = [];
  }
  ['acquire'](arg2 = 1) {
    if (arg2 <= 0) throw new Error('invalid\x20weight\x20' + arg2 + ": must be positive");
    return new Promise((arg1, arg) => {
      this._weightedQueues[arg2 - 1] || (this._weightedQueues[arg2 - 1] = []);
      this._weightedQueues[arg2 - 1].push({
        resolve: arg1,
        reject: arg
      });
      this._dispatch();
    });
  }
  ["runExclusive"](arg1, arg = 1) {
    return Ar(this, void 0, void 0, function* () {
      const [value, value1] = yield this.acquire(arg);
      try {
        return yield arg1(value);
      } finally {
        value1();
      }
    });
  }
  ['waitForUnlock'](arg2 = 1) {
    if (arg2 <= 0) throw new Error("invalid weight " + arg2 + ':\x20must\x20be\x20positive');
    return new Promise(arg => {
      this._weightedWaiters[arg2 - 1] || (this._weightedWaiters[arg2 - 1] = []);
      this._weightedWaiters[arg2 - 1].push(arg);
      this._dispatch();
    });
  }
  ["isLocked"]() {
    return this._value <= 0;
  }
  ["getValue"]() {
    return this._value;
  }
  ["setValue"](arg) {
    this._value = arg;
    this._dispatch();
  }
  ["release"](arg = 1) {
    if (arg <= 0) throw new Error("invalid weight " + arg + ": must be positive");
    this._value += arg;
    this._dispatch();
  }
  ["cancel"]() {
    this._weightedQueues.forEach(arg2 => arg2.forEach(arg => arg.reject(this._cancelError)));
    this._weightedQueues = [];
  }
  ["_dispatch"]() {
    var value4;
    for (let value3 = this._value; value3 > 0; value3--) {
      const value = null === (value4 = this._weightedQueues[value3 - 1]) || void 0 === value4 ? void 0 : value4.shift();
      if (!value) continue;
      const value1 = this._value,
        value2 = value3;
      this._value -= value3;
      value3 = this._value + 1;
      value.resolve([value1, this._newReleaser(value2)]);
    }
    this._drainUnlockWaiters();
  }
  ["_newReleaser"](arg) {
    let value1 = false;
    return () => {
      value1 || (value1 = true, this.release(arg));
    };
  }
  ['_drainUnlockWaiters']() {
    for (let value = this._value; value > 0; value--) this._weightedWaiters[value - 1] && (this._weightedWaiters[value - 1].forEach(arg => arg()), this._weightedWaiters[value - 1] = []);
  }
}
var Ir = function (arg12, arg32, arg4, arg22) {
  return new (arg4 || (arg4 = Promise))(function (arg1, arg3) {
    function fn4(arg) {
      try {
        fn22(arg22.next(arg));
      } catch (value) {
        arg3(value);
      }
    }
    function fn2(arg) {
      try {
        fn22(arg22.throw(arg));
      } catch (value) {
        arg3(value);
      }
    }
    function fn22(arg2) {
      var value1;
      if (arg2.done) arg1(arg2.value);else (value1 = arg2.value, value1 instanceof arg4 ? value1 : new arg4(function (arg) {
        arg(value1);
      })).then(fn4, fn2);
    }
    fn22((arg22 = arg22.apply(arg12, arg32 || [])).next());
  });
};
class Mutex {
  constructor(arg) {
    this._semaphore = new Semaphore(1, arg);
  }
  ["acquire"]() {
    return Ir(this, void 0, void 0, function* () {
      const [, value] = yield this._semaphore.acquire();
      return value;
    });
  }
  ['runExclusive'](arg) {
    return this._semaphore.runExclusive(() => arg());
  }
  ["isLocked"]() {
    return this._semaphore.isLocked();
  }
  ["waitForUnlock"]() {
    return this._semaphore.waitForUnlock();
  }
  ["release"]() {
    this._semaphore.isLocked() && this._semaphore.release();
  }
  ["cancel"]() {
    return this._semaphore.cancel();
  }
}
class WebHidGeneral {
  constructor(arg) {
    V(this, "endpointPath", kr());
    V(this, "customData", {});
    this.device = arg;
    arg.oninputreport = this.inputReportListener.bind(this);
  }
  get ["Device"]() {
    return this.device;
  }
  async ['connect']() {
    if (!this.device.opened) return this.device.open();
  }
  ["isConnected"]() {
    return this.device.opened;
  }
  async ["destroy"]() {
    this.device.oninputreport = null;
    await this.device.close();
  }
  ['setCustomData'](arg) {
    this.customData = arg;
  }
  ["getCustomData"]() {
    return this.customData;
  }
  ["inputReportListener"](arg) {}
}
class NoticeEvent extends Event {
  constructor() {
    super(...arguments);
    V(this, "notice");
  }
  set ["data"](arg) {
    this.notice = arg;
  }
  get ["data"]() {
    return this.notice;
  }
}
function Pr(arg1, arg2) {
  const value = new NoticeEvent(arg1, {
    bubbles: true
  });
  value.data = arg2;
  globalThis.dispatchEvent(value);
}
function Mr(arg, arg1) {
  globalThis.addEventListener(arg, arg1);
}
function Tr(arg, arg1) {
  globalThis.removeEventListener(arg, arg1);
}
let Rr = class KeyAction {
  constructor(arg, arg1) {
    V(this, 'dataView');
    V(this, "offset");
    this.dataView = arg;
    this.offset = arg1;
  }
  get ['i18nText']() {
    return "Unknown";
  }
  get ["original"]() {
    return {
      dataView: this.dataView,
      offset: this.offset
    };
  }
  get ["keyClass"]() {
    return this.dataView.getUint8(this.offset);
  }
  get ["code"]() {
    return this.dataView.getUint8(this.offset + 1);
  }
  get ["code1"]() {
    return this.dataView.getUint8(this.offset + 2);
  }
  static ["createDataView"](arg, arg3, arg1) {
    const value2 = new DataView(new ArrayBuffer(3));
    value2.setUint8(0, arg);
    value2.setUint8(1, arg3);
    value2.setUint8(2, arg1);
    return value2;
  }
  static ['fromDataView'](arg1, arg) {
    switch (arg1.getUint8(arg)) {
      case Ur.null:
        return new Br(arg1, arg);
      case Ur.general:
        return new Vr(arg1, arg);
      case Ur.mouse:
        return new Nr(arg1, arg);
      case Ur.mouseWheel:
        return new zr(arg1, arg);
      case Ur.mouseSwing:
        return new Wr(arg1, arg);
      case Ur.mouseXY:
        return new Yr(arg1, arg);
      case Ur.consumer:
        return new qr(arg1, arg);
      case Ur.system:
        return new Xr(arg1, arg);
      case Ur.exe:
        return new Qr(arg1, arg);
      case Ur.web:
        return new ts(arg1, arg);
      case Ur.macro:
        return new ss(arg1, arg);
      case Ur.keyboardWheel:
        return new as(arg1, arg);
      case Ur.dsk:
        return new os(arg1, arg);
      case Ur.tgl:
        return new cs(arg1, arg);
      case Ur.mtk:
        return new fs(arg1, arg);
      case Ur.function:
        return new bs(arg1, arg);
      case Ur.rs:
        return new ds(arg1, arg);
      case Ur.socd:
        return new ms(arg1, arg);
      case Ur.oks:
        return new ys(arg1, arg);
      default:
        return new KeyAction(arg1, arg);
    }
  }
  ["toNumArr"]() {
    return Array.from(new Uint8Array(this.dataView.buffer.slice(this.offset, this.offset + 3)));
  }
  ['toString']() {
    return Array.from([this.keyClass, this.code, this.code1]).map(arg => arg.toString().padStart(2, '0')).join('');
  }
  ["toString2"]() {
    return JSON.stringify({
      dataView: Array.from(new Uint8Array(this.dataView.buffer)),
      offset: this.offset
    });
  }
  ["toObject"]() {
    return {
      dataView: this.dataView,
      offset: this.offset
    };
  }
  ["toJSON"]() {
    return {
      keyClass: this.keyClass,
      code: this.code,
      code1: this.code1
    };
  }
};
const Er = class _KeyNullAction extends Rr {
  get ["i18nText"]() {
    return "Null";
  }
  static ['create']() {
    return new _KeyNullAction(Rr.createDataView(_KeyNullAction.TYPE, 0, 0), 0);
  }
};
V(Er, "TYPE", Ur.null);
let Br = Er;
const Lr = class _KeyGeneralAction extends Rr {
  get ['i18nText']() {
    return 'key.keyboardKey';
  }
  static ["create"](arg1, arg) {
    return new _KeyGeneralAction(Rr.createDataView(_KeyGeneralAction.TYPE, arg1, arg), 0);
  }
};
V(Lr, "TYPE", Ur.general);
let Vr = Lr;
const Fr = class _KeyMouseAction extends Rr {
  get ["i18nText"]() {
    return "key.mouseKeyboard";
  }
  static ["create"](arg, arg1) {
    return new _KeyMouseAction(Rr.createDataView(_KeyMouseAction.TYPE, arg, arg1), 0);
  }
};
V(Fr, 'TYPE', Ur.mouse);
let Nr = Fr;
const Gr = class _KeyMouseWheelAction extends Rr {
  get ["i18nText"]() {
    return "key.wheel";
  }
  static ["create"](arg1, arg) {
    return new _KeyMouseWheelAction(Rr.createDataView(_KeyMouseWheelAction.TYPE, arg1, arg), 0);
  }
};
V(Gr, "TYPE", Ur.mouseWheel);
let zr = Gr;
const Hr = class _KeyMouseSwingAction extends Rr {
  get ["i18nText"]() {
    return "key.swing";
  }
  static ["create"](arg1, arg) {
    return new _KeyMouseSwingAction(Rr.createDataView(_KeyMouseSwingAction.TYPE, arg1, arg), 0);
  }
};
V(Hr, "TYPE", Ur.mouseSwing);
let Wr = Hr;
const jr = class _KeyMouseXYAction extends Rr {
  get ["i18nText"]() {
    return "key.mouseXY";
  }
  static ["create"](arg1, arg) {
    return new _KeyMouseXYAction(Rr.createDataView(_KeyMouseXYAction.TYPE, arg1, arg), 0);
  }
};
V(jr, "TYPE", Ur.mouseXY);
let Yr = jr;
const $r = class _KeyConsumerAction extends Rr {
  get ['i18nText']() {
    return "key.consumer";
  }
  static ["create"](arg, arg1) {
    return new _KeyConsumerAction(Rr.createDataView(_KeyConsumerAction.TYPE, arg, arg1), 0);
  }
};
V($r, "TYPE", Ur.consumer);
let qr = $r;
const Jr = class _KeySystemAction extends Rr {
  get ["i18nText"]() {
    return "key.system";
  }
  static ["create"](arg, arg1) {
    return new _KeySystemAction(Rr.createDataView(_KeySystemAction.TYPE, arg, arg1), 0);
  }
};
V(Jr, 'TYPE', Ur.system);
let Xr = Jr;
const Zr = class _KeyExeAction extends Rr {
  get ["i18nText"]() {
    return "key.exe";
  }
  static ["create"](arg1, arg) {
    return new _KeyExeAction(Rr.createDataView(_KeyExeAction.TYPE, arg1, arg), 0);
  }
};
V(Zr, "TYPE", Ur.exe);
let Qr = Zr;
const es = class _KeyWebAction extends Rr {
  get ["i18nText"]() {
    return "key.web";
  }
  static ["create"](arg1, arg) {
    return new _KeyWebAction(Rr.createDataView(_KeyWebAction.TYPE, arg1, arg), 0);
  }
};
V(es, "TYPE", Ur.web);
let ts = es;
const rs = class _KeyMacroAction extends Rr {
  get ['i18nText']() {
    return "key.macro";
  }
  static ["create"](arg, arg1) {
    return new _KeyMacroAction(Rr.createDataView(_KeyMacroAction.TYPE, arg, arg1), 0);
  }
};
V(rs, "TYPE", Ur.macro);
let ss = rs;
const ns = class _KeyKeyboardWheelAction extends Rr {
  get ["i18nText"]() {
    return "key.keyboardWheel";
  }
  static ['create'](arg1, arg) {
    return new _KeyKeyboardWheelAction(Rr.createDataView(_KeyKeyboardWheelAction.TYPE, arg1, arg), 0);
  }
};
V(ns, 'TYPE', Ur.keyboardWheel);
let as = ns;
const is = class _KeyDskAction extends Rr {
  get ["i18nText"]() {
    return "key.dsk";
  }
  get ["index"]() {
    return super.code;
  }
  static ["create"](arg) {
    return new _KeyDskAction(Rr.createDataView(_KeyDskAction.TYPE, arg, 0), 0);
  }
};
V(is, "TYPE", Ur.dsk);
let os = is;
const us = class _KeyTglAction extends Rr {
  get ["i18nText"]() {
    return "key.tgl";
  }
  get ["index"]() {
    return super.code;
  }
  static ["create"](arg) {
    return new _KeyTglAction(Rr.createDataView(_KeyTglAction.TYPE, arg, 0), 0);
  }
};
V(us, 'TYPE', Ur.tgl);
let cs = us;
const ls = class _KeyMtkAction extends Rr {
  get ["i18nText"]() {
    return 'Change\x20Key\x20Menu.mt.title';
  }
  get ["index"]() {
    return super.code;
  }
  get ["delay"]() {
    return super.code1;
  }
  static ["create"](arg, arg1) {
    return new _KeyMtkAction(Rr.createDataView(_KeyMtkAction.TYPE, arg, arg1), 0);
  }
};
V(ls, "TYPE", Ur.mtk);
let fs = ls;
const hs = class _KeyRsAction extends Rr {
  get ['i18nText']() {
    return "Change Key Menu.mt.title";
  }
  get ['index']() {
    return super.code;
  }
  get ["bindIndex"]() {
    return super.code1;
  }
  static ["create"](arg, arg1) {
    return new _KeyRsAction(Rr.createDataView(_KeyRsAction.TYPE, arg, arg1), 0);
  }
};
V(hs, "TYPE", Ur.rs);
let ds = hs;
const gs = class _KeySocdAction extends Rr {
  get ["i18nText"]() {
    return "Change Key Menu.mt.title";
  }
  get ["index"]() {
    return super.code;
  }
  get ["bindIndex"]() {
    return super.code1;
  }
  static ["create"](arg1, arg) {
    return new _KeySocdAction(Rr.createDataView(_KeySocdAction.TYPE, arg1, arg), 0);
  }
};
V(gs, "TYPE", Ur.socd);
let ms = gs;
const ps = class _KeyOksAction extends Rr {
  get ["i18nText"]() {
    return 'Change\x20Key\x20Menu.mt.title';
  }
  get ["index"]() {
    return super.code;
  }
  get ["bindIndex"]() {
    return super.code1;
  }
  static ["create"](arg, arg1) {
    return new _KeyOksAction(Rr.createDataView(_KeyOksAction.TYPE, arg, arg1), 0);
  }
};
V(ps, "TYPE", Ur.oks);
let ys = ps;
const ws = class _KeyFunctionAction extends Rr {
  get ["i18nText"]() {
    return 'key.function';
  }
  static ['create'](arg, arg1 = 0) {
    return new _KeyFunctionAction(Rr.createDataView(_KeyFunctionAction.TYPE, arg, arg1), 0);
  }
};
V(ws, 'TYPE', Ur.function);
let bs = ws,
  _s = (t = class {
    constructor(arg, arg1) {
      V(this, "raw");
      V(this, 'offset');
      this.raw = arg;
      this.offset = arg1;
    }
    static ["create"]() {
      return new t(new DataView(new ArrayBuffer(t.size)), 0);
    }
    static ["fromDataView"](arg1, arg) {
      return new t(arg1, arg);
    }
    get ["delay"]() {
      return this.raw.getUint16(this.offset, true);
    }
    set ["delay"](arg) {
      this.raw.setUint16(this.offset, arg, true);
    }
    get ["type"]() {
      return 31 & this.raw.getUint8(this.offset + 2);
    }
    set ["type"](arg1) {
      const value = 248 & this.raw.getUint8(this.offset + 2) | 31 & arg1;
      this.raw.setUint8(this.offset + 2, value);
    }
    get ["keyStatus"]() {
      return this.raw.getUint8(this.offset + 2) >> 6 & 1;
    }
    set ['keyStatus'](arg1) {
      const value = this.raw.getUint8(this.offset + 2);
      this.raw.setUint8(this.offset + 2, 63 & value | (1 & arg1) << 6);
      this.type = arg1 >= 224 && arg1 <= 231 ? 1 : 2;
    }
    get ["end"]() {
      return this.raw.getUint8(this.offset + 2) >> 7 & 1;
    }
    set ["end"](arg) {
      const value1 = this.raw.getUint8(this.offset + 2);
      this.raw.setUint8(this.offset + 2, 127 & value1 | (1 & arg) << 7);
    }
    get ["keyCode"]() {
      return this.raw.getUint8(this.offset + 3);
    }
    set ['keyCode'](arg) {
      this.raw.setUint8(this.offset + 3, arg);
    }
    get ["buffer"]() {
      return this.raw.buffer.slice(this.offset, this.offset + t.size);
    }
    ["toJSON"]() {
      return {
        delay: this.delay,
        type: this.type,
        keyStatus: this.keyStatus,
        end: this.end,
        keyCode: this.keyCode
      };
    }
  }, V(t, "size", 4), t);
const vs = class _DynamicStrokeAction {
  constructor(arg1, arg) {
    V(this, "raw");
    V(this, "offset");
    this.raw = arg1;
    this.offset = arg;
  }
  get ["point1"]() {
    return this.raw.getUint8(this.offset);
  }
  set ["point1"](arg) {
    this.raw.setUint8(this.offset, arg);
  }
  get ["point2"]() {
    return this.raw.getUint8(this.offset + 1);
  }
  set ["point2"](arg) {
    this.raw.setUint8(this.offset + 1, arg);
  }
  get ["point3"]() {
    return this.raw.getUint8(this.offset + 2);
  }
  set ['point3'](arg) {
    this.raw.setUint8(this.offset + 2, arg);
  }
  get ['point4']() {
    return this.raw.getUint8(this.offset + 3);
  }
  set ["point4"](arg) {
    this.raw.setUint8(this.offset + 3, arg);
  }
  get ["subset"]() {
    return Array.from({
      length: 4
    }, (arg1, arg) => Ss.fromDataView(this.raw, this.offset + 4 + 5 * arg));
  }
  set ["subset"](arg) {
    for (let value3 = 0; value3 < arg.length; value3++) {
      const value2 = arg[value3].buffer;
      for (let value = 0; value < value2.byteLength; value++) this.raw.setUint8(this.offset + 4 + 5 * value3 + value, value2.getUint8(value));
    }
  }
  static ['fromDataView'](arg, arg1) {
    return new _DynamicStrokeAction(arg, arg1);
  }
  static ["create"](arg, arg6) {
    const value2 = new _DynamicStrokeAction(new DataView(new ArrayBuffer(_DynamicStrokeAction.size)), 0),
      [value3, value1, value5, value4] = arg;
    value2.subset = arg6;
    value2.point1 = value3;
    value2.point2 = value1;
    value2.point3 = value5;
    value2.point4 = value4;
    return value2;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.offset, this.offset + _DynamicStrokeAction.size));
  }
  ['toNumArr']() {
    return Array.from(new Uint8Array(this.raw.buffer.slice(this.offset, this.offset + _DynamicStrokeAction.size)));
  }
  ['toJSON']() {
    return {
      point1: this.point1,
      point2: this.point2,
      point3: this.point3,
      point4: this.point4,
      subset: this.subset.map(arg => arg.toJSON())
    };
  }
};
V(vs, 'size', 24);
let ks = vs;
const Cs = class _DynamicStrokeActionSubset {
  constructor(arg, arg1) {
    V(this, 'raw');
    V(this, "offset");
    this.raw = arg;
    this.offset = arg1;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.offset, this.offset + _DynamicStrokeActionSubset.size));
  }
  static ['fromDataView'](arg1, arg) {
    return new _DynamicStrokeActionSubset(arg1, arg);
  }
  get ['statusArray']() {
    const value = this.raw.getUint16(this.offset + 3, true);
    return [value >> 0 & 1, value >> 1 & 1, value >> 2 & 1, value >> 3 & 1, value >> 4 & 1, value >> 5 & 1, value >> 6 & 1, value >> 7 & 1, value >> 8 & 1, value >> 9 & 1];
  }
  get ["status"]() {
    const value = this.raw.getUint16(this.offset + 3, true);
    return {
      bit0: value >> 0 & 1,
      bit1: value >> 1 & 1,
      bit2: value >> 2 & 1,
      bit3: value >> 3 & 1,
      bit4: value >> 4 & 1,
      bit5: value >> 5 & 1,
      bit6: value >> 6 & 1,
      bit7: value >> 7 & 1,
      bit8: value >> 8 & 1,
      bit9: value >> 9 & 1
    };
  }
  set ["status"](arg) {
    this.raw.setUint16(this.offset + 3, (arg.bit0 || 0) << 0 | (arg.bit1 || 0) << 1 | (arg.bit2 || 0) << 2 | (arg.bit3 || 0) << 3 | (arg.bit4 || 0) << 4 | (arg.bit5 || 0) << 5 | (arg.bit6 || 0) << 6 | (arg.bit7 || 0) << 7 | (arg.bit8 || 0) << 8 | (arg.bit9 || 0) << 9, true);
  }
  get ['keyCode']() {
    return Rr.fromDataView(this.raw, this.offset);
  }
  set ['keyCode'](arg) {
    this.raw.setUint8(0, arg.keyClass);
    this.raw.setUint8(1, arg.code);
    this.raw.setUint8(2, arg.code1);
  }
  static ['create'](arg2, arg1) {
    const value = new _DynamicStrokeActionSubset(new DataView(new ArrayBuffer(_DynamicStrokeActionSubset.size)), 0);
    value.status = arg2;
    value.keyCode = arg1;
    return value;
  }
  ['toJSON']() {
    return {
      status: this.status,
      keyCode: this.keyCode.toJSON()
    };
  }
};
V(Cs, 'size', 5);
let Ss = Cs;
const Us = class _KeyTriggerTravelAction {
  constructor(arg1, arg) {
    V(this, "raw");
    V(this, 'offset');
    this.raw = arg1;
    this.offset = arg;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelAction.size));
  }
  get ["magneticShaftType"]() {
    return this.raw.getUint8(this.offset);
  }
  set ["magneticShaftType"](arg) {
    this.raw.setUint8(this.offset, arg);
  }
  get ["triggerType"]() {
    return this.raw.getUint8(this.offset + 1);
  }
  set ["triggerType"](arg) {
    this.raw.setUint8(this.offset + 1, arg);
  }
  get ['point']() {
    return 511 & this.raw.getUint16(this.offset + 2, true);
  }
  set ["point"](arg1) {
    const value = this.raw.getUint16(this.offset + 2, true);
    this.raw.setUint16(this.offset + 2, -512 & value | 511 & arg1, true);
  }
  get ["pressRT"]() {
    return 511 & this.raw.getUint16(this.offset + 4, true);
  }
  set ["pressRT"](arg1) {
    const value = this.raw.getUint16(this.offset + 4, true);
    this.raw.setUint16(this.offset + 4, -512 & value | 511 & arg1, true);
  }
  get ["pressTheDeadZone"]() {
    return (65024 & this.raw.getUint16(this.offset + 4, true)) >> 9;
  }
  set ["pressTheDeadZone"](arg1) {
    const value = this.raw.getUint16(this.offset + 4, true);
    this.raw.setUint16(this.offset + 4, -65025 & value | arg1 << 9 & 65024, true);
  }
  get ["releaseRT"]() {
    return 511 & this.raw.getUint16(this.offset + 6, true);
  }
  set ["releaseRT"](arg1) {
    const value = this.raw.getUint16(this.offset + 6, true);
    this.raw.setUint16(this.offset + 6, -512 & value | 511 & arg1, true);
  }
  get ["releaseTheDeadZone"]() {
    return (65024 & this.raw.getUint16(this.offset + 6, true)) >> 9;
  }
  set ["releaseTheDeadZone"](arg1) {
    const value = this.raw.getUint16(this.offset + 6, true);
    this.raw.setUint16(this.offset + 6, -65025 & value | arg1 << 9 & 65024, true);
  }
  static ["create"]() {
    return new _KeyTriggerTravelAction(new DataView(new ArrayBuffer(_KeyTriggerTravelAction.size)), 0);
  }
  static ['fromDataView'](arg, arg1) {
    return new _KeyTriggerTravelAction(arg, arg1);
  }
  ['toNumArr']() {
    return Array.from(new Uint8Array(this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelAction.size)));
  }
  ["toString"]() {
    const value = this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelAction.size);
    return Array.from(new Uint8Array(value)).join(':');
  }
  ['toJSON']() {
    return {
      magneticShaftType: this.magneticShaftType,
      triggerType: this.triggerType,
      point: this.point,
      pressRT: this.pressRT,
      pressTheDeadZone: this.pressTheDeadZone,
      releaseRT: this.releaseRT,
      releaseTheDeadZone: this.releaseTheDeadZone
    };
  }
};
V(Us, "size", 8);
V(Us, "DEFAULT_STR", Array.from({
  length: Us.size
}, () => 0).join(':'));
let Ds = Us;
const Os = class _KeyTriggerTravelActionV2 {
  constructor(arg1, arg) {
    V(this, "raw");
    V(this, 'offset');
    this.raw = arg1;
    this.offset = arg;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelActionV2.size));
  }
  get ["magneticShaftType"]() {
    return 31 & this.raw.getUint8(this.offset);
  }
  set ["magneticShaftType"](arg1) {
    const value = this.raw.getUint8(this.offset);
    this.raw.setUint8(this.offset, -32 & value | 31 & arg1);
  }
  get ["magneticShaftDefaultType"]() {
    return (224 & this.raw.getUint8(this.offset)) >> 5;
  }
  set ['magneticShaftDefaultType'](arg) {
    const value1 = this.raw.getUint8(this.offset);
    this.raw.setUint8(this.offset, -225 & value1 | arg << 5 & 224);
  }
  get ['triggerType']() {
    return 15 & this.raw.getUint8(this.offset + 1);
  }
  set ["triggerType"](arg) {
    const value1 = this.raw.getUint8(this.offset + 1);
    this.raw.setUint8(this.offset + 1, -16 & value1 | 15 & arg);
  }
  get ["socdPriority"]() {
    return 240 & this.raw.getUint8(this.offset + 1);
  }
  set ["socdPriority"](arg) {
    const value1 = this.raw.getUint8(this.offset + 1);
    this.raw.setUint8(this.offset + 1, -241 & value1 | 240 & arg);
  }
  get ["point"]() {
    return 511 & this.raw.getUint16(this.offset + 2, true);
  }
  set ["point"](arg) {
    const value1 = this.raw.getUint16(this.offset + 2, true);
    this.raw.setUint16(this.offset + 2, -512 & value1 | 511 & arg, true);
  }
  get ['pressRT']() {
    return 511 & this.raw.getUint16(this.offset + 4, true);
  }
  set ["pressRT"](arg1) {
    const value = this.raw.getUint16(this.offset + 4, true);
    this.raw.setUint16(this.offset + 4, -512 & value | 511 & arg1, true);
  }
  get ["pressTheDeadZone"]() {
    return (65024 & this.raw.getUint16(this.offset + 4, true)) >> 9;
  }
  set ["pressTheDeadZone"](arg1) {
    const value = this.raw.getUint16(this.offset + 4, true);
    this.raw.setUint16(this.offset + 4, -65025 & value | arg1 << 9 & 65024, true);
  }
  get ["releaseRT"]() {
    return 511 & this.raw.getUint16(this.offset + 6, true);
  }
  set ["releaseRT"](arg1) {
    const value = this.raw.getUint16(this.offset + 6, true);
    this.raw.setUint16(this.offset + 6, -512 & value | 511 & arg1, true);
  }
  get ["releaseTheDeadZone"]() {
    return (65024 & this.raw.getUint16(this.offset + 6, true)) >> 9;
  }
  set ['releaseTheDeadZone'](arg1) {
    const value = this.raw.getUint16(this.offset + 6, true);
    this.raw.setUint16(this.offset + 6, -65025 & value | arg1 << 9 & 65024, true);
  }
  static ['create']() {
    return new _KeyTriggerTravelActionV2(new DataView(new ArrayBuffer(_KeyTriggerTravelActionV2.size)), 0);
  }
  static ['fromDataView'](arg1, arg) {
    return new _KeyTriggerTravelActionV2(arg1, arg);
  }
  ["toNumArr"]() {
    return Array.from(new Uint8Array(this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelActionV2.size)));
  }
  ['toString']() {
    const value = this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelActionV2.size);
    return Array.from(new Uint8Array(value)).join(':');
  }
  ["toJSON"]() {
    return {
      magneticShaftType: this.magneticShaftType,
      magneticShaftDefaultType: this.magneticShaftDefaultType,
      triggerType: this.triggerType,
      socdPriority: this.socdPriority,
      point: this.point,
      pressRT: this.pressRT,
      pressTheDeadZone: this.pressTheDeadZone,
      releaseRT: this.releaseRT,
      releaseTheDeadZone: this.releaseTheDeadZone
    };
  }
};
V(Os, "size", 8);
V(Os, "DEFAULT_STR", Array.from({
  length: Os.size
}, () => 0).join(':'));
let xs = Os;
class DeviceInfo extends Cr {
  get ["version"]() {
    return [this.raw.getUint8(this.baseOffset + 1).toString(16), this.raw.getUint8(this.baseOffset).toString(16).padStart(2, '0')].join('.');
  }
  static ["get"]() {
    return new DeviceInfo(this.getData(), Sr.GetInfo);
  }
  ["toJSON"]() {
    return {
      version: this.version
    };
  }
}
class GetDeviceBase extends Cr {
  get ["configIndex"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["configIndex"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  get ['configNum']() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  static ["get"]() {
    return new GetDeviceBase(this.getData(), Sr.GetBase);
  }
  ["toJSON"]() {
    return {
      configIndex: this.configIndex,
      configNum: this.configNum
    };
  }
}
const Ks = class _FunctionVariableArea extends Cr {
  get ["reportRates"]() {
    return 15 & this.raw.getUint8(this.baseOffset + 4);
  }
  set ["reportRates"](arg) {
    const value1 = this.raw.getUint8(this.baseOffset + 4);
    this.raw.setUint8(this.baseOffset + 4, 240 & value1 | 15 & arg);
  }
  get ["tickRate"]() {
    return (240 & this.raw.getUint8(this.baseOffset + 4)) >> 4;
  }
  set ['tickRate'](arg) {
    const value1 = this.raw.getUint8(this.baseOffset + 4);
    this.raw.setUint8(this.baseOffset + 4, 15 & value1 | (15 & arg) << 4);
  }
  get ['winLock']() {
    return this.raw.getUint8(this.baseOffset + 6) >> 0 & 1;
  }
  set ["winLock"](arg1) {
    const value = this.raw.getUint8(this.baseOffset + 6);
    this.raw.setUint8(this.baseOffset + 6, -2 & value | 1 & arg1);
  }
  get ["altTabLock"]() {
    return this.raw.getUint8(this.baseOffset + 6) >> 1 & 1;
  }
  set ["altTabLock"](arg) {
    const value1 = this.raw.getUint8(this.baseOffset + 6);
    this.raw.setUint8(this.baseOffset + 6, 253 & value1 | (1 & arg) << 1);
  }
  get ["altF4Lock"]() {
    return this.raw.getUint8(this.baseOffset + 6) >> 2 & 1;
  }
  set ["altF4Lock"](arg) {
    const value1 = this.raw.getUint8(this.baseOffset + 6);
    this.raw.setUint8(this.baseOffset + 6, 251 & value1 | (1 & arg) << 2);
  }
  get ["appLock"]() {
    return this.raw.getUint8(this.baseOffset + 6) >> 3 & 1;
  }
  set ["appLock"](arg) {
    const value1 = this.raw.getUint8(this.baseOffset + 6);
    this.raw.setUint8(this.baseOffset + 6, 247 & value1 | (1 & arg) << 3);
  }
  get ["alwaysTriggeredWhenItHitsBottom"]() {
    return this.raw.getUint8(this.baseOffset + 7) >> 1 & 1;
  }
  set ["alwaysTriggeredWhenItHitsBottom"](arg) {
    const value1 = this.raw.getUint8(this.baseOffset + 7);
    this.raw.setUint8(this.baseOffset + 7, 253 & value1 | (1 & arg) << 1);
  }
  get ["debugMode"]() {
    return this.raw.getUint8(this.baseOffset + 7) >> 3 & 1;
  }
  set ["debugMode"](arg1) {
    const value = this.raw.getUint8(this.baseOffset + 7);
    this.raw.setUint8(this.baseOffset + 7, arg1 ? 8 | value : -9 & value);
  }
  get ["antiShakeRating"]() {
    return (224 & this.raw.getUint8(this.baseOffset + 7)) >> 5;
  }
  set ["antiShakeRating"](arg) {
    const value1 = 31 & this.raw.getUint8(this.baseOffset + 7);
    this.raw.setUint8(this.baseOffset + 7, value1 | arg << 5);
  }
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset + 8);
  }
  set ["mode"](arg) {
    this.raw.setUint8(this.baseOffset + 8, arg);
  }
  get ["brightness"]() {
    return this.raw.getUint8(this.baseOffset + 9);
  }
  set ['brightness'](arg) {
    this.raw.setUint8(this.baseOffset + 9, arg);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 10);
  }
  set ["speed"](arg) {
    this.raw.setUint8(this.baseOffset + 10, arg);
  }
  get ["direction"]() {
    return this.raw.getUint8(this.baseOffset + 11);
  }
  set ["direction"](arg) {
    this.raw.setUint8(this.baseOffset + 11, arg);
  }
  get ["colorMark"]() {
    return this.raw.getUint8(this.baseOffset + 12);
  }
  set ["colorMark"](arg) {
    this.raw.setUint8(this.baseOffset + 12, arg);
  }
  get ["monochromaticIndex"]() {
    return this.raw.getUint8(this.baseOffset + 13);
  }
  set ['monochromaticIndex'](arg) {
    this.raw.setUint8(this.baseOffset + 13, arg);
  }
  get ['color']() {
    return [this.raw.getUint8(this.baseOffset + 14), this.raw.getUint8(this.baseOffset + 15), this.raw.getUint8(this.baseOffset + 16)];
  }
  set ["color"]([arg2, arg1, arg]) {
    this.raw.setUint8(this.baseOffset + 14, arg2);
    this.raw.setUint8(this.baseOffset + 15, arg1);
    this.raw.setUint8(this.baseOffset + 16, arg);
  }
  get ['sidelightMode']() {
    return this.raw.getUint8(this.baseOffset + 24);
  }
  set ["sidelightMode"](arg) {
    this.raw.setUint8(this.baseOffset + 24, arg);
  }
  get ["sidelightBrightness"]() {
    return this.raw.getUint8(this.baseOffset + 25);
  }
  set ["sidelightBrightness"](arg) {
    this.raw.setUint8(this.baseOffset + 25, arg);
  }
  get ['sidelightSpeed']() {
    return this.raw.getUint8(this.baseOffset + 26);
  }
  set ["sidelightSpeed"](arg) {
    this.raw.setUint8(this.baseOffset + 26, arg);
  }
  get ['sidelightColorMark']() {
    return this.raw.getUint8(this.baseOffset + 27);
  }
  set ['sidelightColorMark'](arg) {
    this.raw.setUint8(this.baseOffset + 27, arg);
  }
  get ["sidelightColorIndex"]() {
    return this.raw.getUint8(this.baseOffset + 28);
  }
  set ["sidelightColorIndex"](arg) {
    this.raw.setUint8(this.baseOffset + 28, arg);
  }
  get ["sidelightColor"]() {
    return [this.raw.getUint8(this.baseOffset + 29), this.raw.getUint8(this.baseOffset + 30), this.raw.getUint8(this.baseOffset + 31)];
  }
  set ["sidelightColor"]([arg1, arg2, arg]) {
    this.raw.setUint8(this.baseOffset + 29, arg1);
    this.raw.setUint8(this.baseOffset + 30, arg2);
    this.raw.setUint8(this.baseOffset + 31, arg);
  }
  static ["get"](arg = 0) {
    const value1 = new _FunctionVariableArea(this.getData(), Sr.GetFunc);
    value1.len = 56;
    value1.addr = arg;
    return value1;
  }
  static ["create"](arg1, arg = 0) {
    const value2 = new _FunctionVariableArea(this.getData(), Sr.SetFunc);
    value2.len = 56;
    value2.addr = arg;
    value2.raw.setUint8(this.baseOffset, 80);
    value2.raw.setUint8(this.baseOffset + 2, 170);
    value2.raw.setUint8(this.baseOffset + 3, 187);
    if (arg1) {
      for (const value of _FunctionVariableArea.getterName) value2[value] = arg1[value];
    }
    return value2;
  }
  static ['fromDataView'](arg1, arg) {
    return new _FunctionVariableArea(arg1, arg);
  }
  ["toJSON"]() {
    return {
      reportRates: this.reportRates,
      tickRate: this.tickRate,
      winLock: this.winLock,
      altTabLock: this.altTabLock,
      altF4Lock: this.altF4Lock,
      appLock: this.appLock,
      alwaysTriggeredWhenItHitsBottom: this.alwaysTriggeredWhenItHitsBottom,
      debugMode: this.debugMode,
      antiShakeRating: this.antiShakeRating,
      mode: this.mode,
      brightness: this.brightness,
      speed: this.speed,
      direction: this.direction,
      colorMark: this.colorMark,
      monochromaticIndex: this.monochromaticIndex,
      color: this.color,
      sidelightMode: this.sidelightMode,
      sidelightBrightness: this.sidelightBrightness,
      sidelightSpeed: this.sidelightSpeed,
      sidelightColorMark: this.sidelightColorMark,
      sidelightColorIndex: this.sidelightColorIndex,
      sidelightColor: this.sidelightColor
    };
  }
};
V(Ks, "getterName", ['reportRates', 'tickRate', "winLock", "altTabLock", "altF4Lock", "appLock", 'alwaysTriggeredWhenItHitsBottom', "debugMode", "antiShakeRating", "mode", "brightness", "speed", 'direction', "colorMark", "monochromaticIndex", "color", "sidelightMode", "sidelightBrightness", "sidelightSpeed", "sidelightColorMark", "sidelightColorIndex", "sidelightColor"]);
let As = Ks;
class Communication extends Cr {
  static ["start"]() {
    return new Communication(this.getData(), Sr.FastCommunicationStart);
  }
  static ["stop"]() {
    return new Communication(this.getData(), Sr.FastCommunicationStop);
  }
}
class FactoryDataReset extends Cr {
  static ['reset']() {
    return new FactoryDataReset(this.getData(), Sr.FactoryDataReset);
  }
}
class CustomLighting extends Cr {
  static ["get"](arg, arg1 = 55) {
    const value2 = new CustomLighting(this.getData(), Sr.GetLedDefine);
    value2.len = arg1;
    value2.addr = arg;
    return value2;
  }
  static ["create"](arg2, arg1 = 55) {
    const value = new CustomLighting(this.getData(), Sr.SetLedDefine);
    value.len = arg1;
    value.addr = arg2;
    return value;
  }
  get ['buffer']() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ['buffer'](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + value, arg.getUint8(value));
  }
}
class KeyMatrix extends Cr {
  static ['get'](arg2, arg1 = 55, arg = false) {
    const value3 = new KeyMatrix(this.getData(), arg ? Sr.GetDefaultKeyMatrix : Sr.GetUseKeyMatrix);
    value3.len = arg1;
    value3.addr = arg2;
    return value3;
  }
  static ["create"](arg, arg1 = 55) {
    const value2 = new KeyMatrix(this.getData(), Sr.SetUseKeyMatrix);
    value2.len = arg1;
    value2.addr = arg;
    return value2;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ["buffer"](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + value, arg.getUint8(value));
  }
}
class DynamicStroke extends Cr {
  static ["get"](arg, arg1 = 56) {
    const value2 = new DynamicStroke(this.getData(), Sr.GetDskInfo);
    value2.addr = arg;
    value2.len = arg1;
    return value2;
  }
  static ['create'](arg, arg2 = 56) {
    const value1 = new DynamicStroke(this.getData(), Sr.SetDskInfo);
    value1.addr = arg;
    value1.len = arg2;
    return value1;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ['buffer'](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + value, arg.getUint8(value));
  }
}
class DoubleClick extends Cr {
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ["buffer"](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + value, arg.getUint8(value));
  }
  static ["get"](arg1, arg = 56) {
    const value2 = new DoubleClick(this.getData(), Sr.GetMtKeyInfo);
    value2.len = arg;
    value2.addr = arg1;
    return value2;
  }
  static ['create'](arg2, arg1 = 56) {
    const value = new DoubleClick(this.getData(), Sr.SetMtKeyInfo);
    value.len = arg1;
    value.addr = arg2;
    return value;
  }
}
class ToggleSwitch extends Cr {
  static ['get'](arg, arg2 = 56) {
    const value1 = new ToggleSwitch(this.getData(), Sr.GetTglKeyInfo);
    value1.addr = arg;
    value1.len = arg2;
    return value1;
  }
  static ["create"](arg1, arg2 = 56) {
    const value = new ToggleSwitch(this.getData(), Sr.SetTglKeyInfo);
    value.addr = arg1;
    value.len = arg2;
    return value;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ["buffer"](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + value, arg.getUint8(value));
  }
}
class Macro extends Cr {
  static ["get"](arg2, arg = 56) {
    const value1 = new Macro(this.getData(), Sr.GetMacro);
    value1.len = arg;
    value1.addr = arg2;
    return value1;
  }
  static ["create"](arg2, arg1 = 56) {
    const value = new Macro(this.getData(), Sr.SetMacro);
    value.len = arg1;
    value.addr = arg2;
    return value;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ["buffer"](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + value, arg.getUint8(value));
  }
}
class KeyTriggerTravel extends Cr {
  static ['get'](arg1, arg = 56) {
    const value2 = new KeyTriggerTravel(this.getData(), Sr.GetKeyTriggerTravel);
    value2.addr = arg1;
    value2.len = arg;
    return value2;
  }
  static ["create"](arg, arg2 = 56) {
    const value1 = new KeyTriggerTravel(this.getData(), Sr.SetKeyTriggerTravel);
    value1.addr = arg;
    value1.len = arg2;
    return value1;
  }
  get ['buffer']() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ['buffer'](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + value, arg.getUint8(value));
  }
}
class CustomInfo extends Cr {
  get ["globalKeyTriggerTravel"]() {
    return Ds.fromDataView(this.raw, this.baseOffset + 16);
  }
  set ['globalKeyTriggerTravel'](arg) {
    const value1 = arg.buffer;
    for (let value = 0; value < value1.byteLength; value++) this.raw.setUint8(this.baseOffset + 16 + value, value1.getUint8(value));
  }
  get ["competitiveMode"]() {
    return this.raw.getUint8(this.baseOffset + 24);
  }
  set ["competitiveMode"](arg) {
    this.raw.setUint8(this.baseOffset + 24, arg);
  }
  static ["get"]() {
    const value = new CustomInfo(this.getData(), Sr.GetAppDefine);
    value.addr = 500;
    value.len = 56;
    return value;
  }
  static ["create"]() {
    const value = new CustomInfo(this.getData(), Sr.SetAppDefine);
    value.addr = 500;
    value.len = 56;
    return value;
  }
  static ["fromDataView"](arg1, arg) {
    return new CustomInfo(arg1, arg);
  }
  ['toJSON']() {
    return {
      globalKeyTriggerTravel: this.globalKeyTriggerTravel.toJSON(),
      competitiveMode: this.competitiveMode
    };
  }
}
class CustomInfoV2 extends Cr {
  get ["globalKeyTriggerTravel"]() {
    return xs.fromDataView(this.raw, this.baseOffset + 16);
  }
  set ['globalKeyTriggerTravel'](arg1) {
    const value2 = arg1.buffer;
    for (let value = 0; value < value2.byteLength; value++) this.raw.setUint8(this.baseOffset + 16 + value, value2.getUint8(value));
  }
  get ["competitiveMode"]() {
    return this.raw.getUint8(this.baseOffset + 24);
  }
  set ["competitiveMode"](arg) {
    this.raw.setUint8(this.baseOffset + 24, arg);
  }
  static ["get"]() {
    const value = new CustomInfoV2(this.getData(), Sr.GetAppDefine);
    value.addr = 500;
    value.len = 56;
    return value;
  }
  static ['create']() {
    const value = new CustomInfoV2(this.getData(), Sr.SetAppDefine);
    value.addr = 500;
    value.len = 56;
    return value;
  }
  static ["fromDataView"](arg1, arg) {
    return new CustomInfoV2(arg1, arg);
  }
  ["toJSON"]() {
    return {
      globalKeyTriggerTravel: this.globalKeyTriggerTravel.toJSON(),
      competitiveMode: this.competitiveMode
    };
  }
}
const Is = class _DebugInfo {
  constructor(arg) {
    V(this, 'raw');
    let value1 = arg ? arg.buffer : new ArrayBuffer(Cr.SIZE);
    this.raw = new DataView(value1);
  }
  get ["baseOffset"]() {
    return _DebugInfo.baseOffset;
  }
  static ["fromDataView"](arg) {
    return new _DebugInfo(arg);
  }
  get ["keyInfo"]() {
    return Rr.fromDataView(this.raw, this.baseOffset);
  }
  get ['mm']() {
    return this.raw.getUint16(this.baseOffset + 5);
  }
  get ["calibraCnt"]() {
    return this.raw.getUint8(this.baseOffset + 9);
  }
};
V(Is, "COMMAND_ID", Sr.DebugId);
V(Is, 'baseOffset', 1);
let Ps = Is;
const Ms = class _SynchronousInfo {
  constructor(arg) {
    V(this, "raw");
    let value1 = arg ? arg.buffer : new ArrayBuffer(Cr.SIZE);
    this.raw = new DataView(value1);
  }
  get ["baseOffset"]() {
    return _SynchronousInfo.baseOffset;
  }
  static ["fromDataView"](arg) {
    return new _SynchronousInfo(arg);
  }
};
V(Ms, "COMMAND_ID", Sr.SyncId);
V(Ms, 'baseOffset', 1);
let Ts = Ms,
  Rs = class Calibration extends Cr {
    static ["start"]() {
      return new Calibration(this.getData(), Sr.StartCalibration);
    }
    static ["stop"]() {
      return new Calibration(this.getData(), Sr.EndCalibration);
    }
    static ["get"](arg1, arg = 56) {
      const value2 = new Calibration(this.getData(), Sr.GetCalibration);
      value2.len = arg;
      value2.addr = arg1;
      return value2;
    }
    get ["buffer"]() {
      return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
    }
    set ["buffer"](arg) {
      for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + value, arg.getUint8(value));
    }
  },
  Es = class HidDevice extends WebHidGeneral {
    constructor() {
      super(...arguments);
      V(this, 'mutex', new Mutex());
      V(this, "pendingTransfers", []);
    }
    ["onDeviceToHostReportReceived"](arg) {}
    async ["transferForResultAsync"](arg5) {
      var value12;
      const value2 = new DataView(arg5.buffer).getUint8(1);
      let value4;
      const value = new Promise(arg => {
          value4 = arg;
        }),
        value3 = {
          requestCode: value2,
          data: arg5,
          promiseResolve: value4
        };
      await new Promise(arg => {
        const value1 = setInterval(() => {
          0 === this.pendingTransfers.length && (arg(), clearInterval(value1));
        }, 1);
      });
      this.pendingTransfers.push(value3);
      await (null == (value12 = this.device) ? void 0 : value12.sendReport(0, arg5));
      return value;
    }
    ["inputReportListener"](arg) {
      super.inputReportListener(arg);
      this.handleInputReport(arg.data);
    }
    ["handleInputReport"](arg) {
      this.mutex.runExclusive(() => {
        let value22 = false;
        const value1 = arg.getUint8(0);
        if (value1 === Ps.COMMAND_ID) return void Pr("debug-reporting", Ps.fromDataView(arg));
        if (value1 === Ts.COMMAND_ID) return void Pr("synchronous-reporting", Ts.fromDataView(arg));
        const value2 = arg.getUint8(1);
        if (0 != value2) {
          for (const value of this.pendingTransfers) if (value.requestCode === value2) {
            value.promiseResolve(arg);
            this.pendingTransfers.splice(this.pendingTransfers.indexOf(value), 1);
            value22 = true;
            break;
          }
          value22 || new Uint8Array(arg.buffer).toString();
        } else this.onDeviceToHostReportReceived(arg);
      });
    }
  };
class HidDeviceUpgrade extends WebHidGeneral {
  constructor() {
    super(...arguments);
    V(this, "mutex", new Mutex());
    V(this, 'pendingTransfers', []);
  }
  ["onDeviceToHostReportReceived"](arg) {}
  async ["transferForResultAsync"](arg3, arg6 = false) {
    var value4, value1;
    if (arg6) return void (await (null == (value4 = this.device) ? void 0 : value4.sendReport(0, arg3)));
    let value;
    const value2 = new Promise(arg => {
        value = arg;
      }),
      value5 = {
        requestCode: 0,
        data: arg3,
        promiseResolve: value
      };
    this.pendingTransfers.push(value5);
    await (null == (value1 = this.device) ? void 0 : value1.sendReport(0, arg3));
    return value2;
  }
  ["inputReportListener"](arg) {
    super.inputReportListener(arg);
    this.handleInputReport(arg.data);
  }
  ['handleInputReport'](arg) {
    this.mutex.runExclusive(() => {
      let value2 = false;
      for (const value of this.pendingTransfers) if (0 === value.requestCode) {
        value.promiseResolve(arg);
        this.pendingTransfers.splice(this.pendingTransfers.indexOf(value), 1);
        value2 = true;
        break;
      }
      value2 || new Uint8Array(arg.buffer).toString();
    });
  }
}
const Bs = class _Fire extends Es {
  constructor() {
    super(...arguments);
    V(this, "configIndex", 0);
    V(this, 'version', '');
  }
  get ["isV2"]() {
    const {
      custom: value
    } = this.getCustomData();
    return !value.firmwareVersion || Number(this.version) >= Number(value.firmwareVersion);
  }
  get ["hasAdvancedKey"]() {
    const {
      custom: value
    } = this.getCustomData();
    return !value.advancedKeyVersion || Number(this.version) >= Number(value.advancedKeyVersion);
  }
  get ["deviceVersion"]() {
    return this.version;
  }
  async ["getDeviceInfo"]() {
    const value = await this.transferForResult(DeviceInfo.get());
    this.version = value.version;
    return value;
  }
  async ['startCommunication']() {
    return this.transferForResult(Communication.start());
  }
  async ["stopCommunication"]() {
    return this.transferForResult(Communication.stop());
  }
  async ['getBaseInfo']() {
    const value = await this.transferForResult(GetDeviceBase.get());
    this.configIndex = value.configIndex || 0;
    return value;
  }
  async ["getFunctionVariableArea"]() {
    return this.transferForResult(As.get(this.configIndex * _Fire.FunctionVariableAreaOffset));
  }
  async ["setFunctionVariableArea"](arg) {
    return this.transferForResult(As.create(arg, this.configIndex * _Fire.FunctionVariableAreaOffset));
  }
  async ['getKeyActions'](arg2, arg1 = false) {
    const value42 = Math.ceil(6.9818181818181815);
    let value4 = 512 * arg2 + this.configIndex * _Fire.KeyActionsOffset;
    const value32 = [];
    for (let value3 = 0; value3 < value42; value3++) {
      const value1 = 384 - value32.length,
        value = KeyMatrix.get(value4, value1 >= 55 ? 55 : value1, arg1),
        value2 = await this.transferForResult(value);
      value4 += value2.buffer.byteLength;
      value32.push(...Array.from(new Uint8Array(value2.buffer.buffer)));
    }
    return rt.map(rt.chunk(value32, 3), arg => Rr.fromDataView(new DataView(new Uint8Array(arg).buffer), 0));
  }
  async ['setKeyActionLayer'](arg22, arg2) {
    let value4 = 512 * arg22 + this.configIndex * _Fire.KeyActionsOffset;
    const value3 = arg2.map(arg => arg.toObject().dataView).map(arg => Array.from(new Uint8Array(arg.buffer))).flat(),
      value12 = rt.chunk(value3, 55),
      value5 = value12.length;
    for (let value2 = 0; value2 < value5; value2++) {
      const value = value12[value2],
        value1 = KeyMatrix.create(value4, value.length);
      value1.buffer = new DataView(new Uint8Array(value).buffer);
      await this.transferForResult(value1);
      value4 += value.length;
    }
  }
  async ["setKeyActions"](arg) {
    for (let value = 0; value < arg.length; value++) await this.setKeyActionLayer(value, arg[value]);
  }
  async ["setOneKeyAction"](arg2, arg1, arg) {
    const value3 = KeyMatrix.create(512 * arg2 + 3 * arg1 + this.configIndex * _Fire.KeyActionsOffset, 3);
    value3.buffer = arg.toObject().dataView;
    await this.transferForResult(value3);
  }
  async ["getCustomLighting"]() {
    const value12 = Math.ceil(6.9818181818181815);
    let value22 = this.configIndex * _Fire.CustomLightingOffset;
    const value4 = [];
    for (let value3 = 0; value3 < value12; value3++) {
      const value = 384 - value4.length,
        value2 = CustomLighting.get(value22, value >= 55 ? 55 : value),
        value1 = await this.transferForResult(value2);
      value22 += value1.buffer.byteLength;
      value4.push(...Array.from(new Uint8Array(value1.buffer.buffer)));
    }
    return rt.map(rt.chunk(value4, 3));
  }
  async ['setCustomLighting'](arg2) {
    const value3 = rt.chunk(arg2.flat(), 56);
    let value12 = this.configIndex * _Fire.CustomLightingOffset;
    for (let value2 = 0; value2 < value3.length; value2++) {
      const value = value3[value2],
        value1 = CustomLighting.create(value12, value.length);
      value1.buffer = new DataView(new Uint8Array(value).buffer);
      await this.transferForResult(value1);
      value12 += value1.buffer.byteLength;
    }
  }
  async ["setCustomLightingOne"](arg1, arg2) {
    const value3 = 3 * arg1 + this.configIndex * _Fire.CustomLightingOffset,
      value = CustomLighting.create(value3, 3);
    value.buffer = new DataView(new Uint8Array(arg2).buffer);
    await this.transferForResult(value);
  }
  async ["getDynamicStroke"]() {
    const value5 = Math.ceil(13.714285714285714);
    let value12 = this.configIndex * _Fire.DynamicStrokeOffset;
    const value22 = [];
    for (let value4 = 0; value4 < value5; value4++) {
      const value1 = 768 - value22.length,
        value2 = DynamicStroke.get(value12, value1 >= 56 ? 56 : value1),
        value3 = await this.transferForResult(value2);
      value12 += value3.buffer.byteLength;
      const value = Array.from(new Uint8Array(value3.buffer.buffer));
      value22.push(...value);
    }
    return rt.chunk(value22, 24).filter(arg2 => arg2.reduce((arg1, arg) => arg1 + arg) > 0).map(arg => ks.fromDataView(new DataView(new Uint8Array(arg).buffer), 0));
  }
  async ["setDynamicStroke"](arg3) {
    const value22 = arg3.map(arg => arg.toNumArr()).flat(),
      value3 = rt.chunk(value22, 56);
    let value12 = this.configIndex * _Fire.DynamicStrokeOffset;
    for (let value2 = 0; value2 < value3.length; value2++) {
      const value1 = value3[value2],
        value = DynamicStroke.create(value12, value1.length);
      value.buffer = new DataView(new Uint8Array(value1).buffer);
      await this.transferForResult(value);
      value12 += value.buffer.byteLength;
    }
  }
  async ["setDynamicStrokeOne"](arg, arg2) {
    const value1 = 24 * arg + this.configIndex * _Fire.DynamicStrokeOffset,
      value3 = DynamicStroke.create(value1, 24);
    value3.buffer = arg2.buffer;
    await this.transferForResult(value3);
  }
  async ["getDoubleClick"]() {
    const value12 = Math.ceil(3.4285714285714284);
    let value5 = this.configIndex * _Fire.DoubleClickOffset;
    const value22 = [];
    for (let value4 = 0; value4 < value12; value4++) {
      const value2 = 192 - value22.length,
        value1 = DoubleClick.get(value5, value2 >= 56 ? 56 : value2),
        value = await this.transferForResult(value1);
      value5 += value.buffer.byteLength;
      const value3 = Array.from(new Uint8Array(value.buffer.buffer));
      value22.push(...value3);
    }
    return rt.chunk(value22, 6).filter(arg2 => arg2.reduce((arg, arg1) => arg + arg1) > 0).map(arg2 => rt.chunk(arg2, 3).map(arg => Rr.fromDataView(new DataView(new Uint8Array(arg).buffer), 0)));
  }
  async ['setDoubleClick'](arg3) {
    const value12 = rt.chunk(arg3.map(arg2 => arg2.map(arg => arg.toNumArr()).flat()).flat(), 56);
    let value22 = this.configIndex * _Fire.DoubleClickOffset;
    for (let value2 = 0; value2 < value12.length; value2++) {
      const value1 = value12[value2],
        value = DoubleClick.create(value22, value1.length);
      value.buffer = new DataView(new Uint8Array(value1).buffer);
      await this.transferForResult(value);
      value22 += value.buffer.byteLength;
    }
  }
  async ["setDoubleClickOne"](arg1, arg22, arg2 = false) {
    const value3 = 6 * arg1 + this.configIndex * _Fire.DoubleClickOffset,
      value4 = DoubleClick.create(value3, arg2 ? 12 : 6),
      value5 = arg22.map(arg => Array.from(new Uint8Array(arg.toObject().dataView.buffer))).flat();
    value4.buffer = new DataView(new Uint8Array(value5).buffer);
    await this.transferForResult(value4);
  }
  async ["getToggleSwitch"]() {
    const value22 = Math.ceil(1.7142857142857142);
    let value12 = this.configIndex * _Fire.ToggleSwitchOffset;
    const value5 = [];
    for (let value4 = 0; value4 < value22; value4++) {
      const value2 = 96 - value5.length,
        value = ToggleSwitch.get(value12, value2 >= 56 ? 56 : value2),
        value3 = await this.transferForResult(value);
      value12 += value3.buffer.byteLength;
      const value1 = Array.from(new Uint8Array(value3.buffer.buffer));
      value5.push(...value1);
    }
    return rt.chunk(value5, 3).filter(arg2 => arg2.reduce((arg, arg1) => arg + arg1) > 0).map(arg => Rr.fromDataView(new DataView(new Uint8Array(arg).buffer), 0));
  }
  async ["setToggleSwitch"](arg1) {
    const value3 = arg1.map(arg => arg.toNumArr()).flat(),
      value32 = rt.chunk(value3, 56);
    let value22 = this.configIndex * _Fire.ToggleSwitchOffset;
    for (let value2 = 0; value2 < value32.length; value2++) {
      const value = value32[value2],
        value1 = ToggleSwitch.create(value22, value.length);
      value1.buffer = new DataView(new Uint8Array(value).buffer);
      await this.transferForResult(value1);
      value22 += value1.buffer.byteLength;
    }
  }
  async ['setToggleSwitchOne'](arg1, arg3) {
    const value = 3 * arg1 + this.configIndex * _Fire.ToggleSwitchOffset,
      value2 = ToggleSwitch.create(value, 3);
    value2.buffer = arg3.toObject().dataView;
    await this.transferForResult(value2);
  }
  async ["getMacroList"]() {
    const value32 = Math.ceil(36.57142857142857),
      value22 = [];
    let value13 = this.configIndex * _Fire.MacroListOffset;
    for (let value4 = 0; value4 < value32; value4++) {
      const value2 = 2048 - value22.length,
        value3 = Macro.get(value13, value2 >= 56 ? 56 : value2),
        value1 = await this.transferForResult(value3);
      value13 += value1.buffer.byteLength;
      const value = Array.from(new Uint8Array(value1.buffer.buffer));
      value22.push(...value);
    }
    const value5 = rt.chunk(value22.slice(0, 64), 2).map(arg => new DataView(new Uint8Array(arg).buffer).getUint16(0, true)).slice(0, 11);
    return value5.map((arg3, arg22) => {
      let value12 = (null == value5 ? void 0 : value5[arg22 + 1]) ? value5[arg22 + 1] - arg3 : 0;
      if (0 === value12 && arg22 + 1 === value5.length) {
        const value1 = value22.slice(arg3, -1),
          value = rt.chunk(value1, 4).findIndex(arg2 => 0 === arg2.reduce((arg, arg1) => arg + arg1));
        value12 = -1 === value ? value22.length : 4 * value;
      }
      return rt.chunk(value22.slice(arg3, arg3 + value12), 4).map(arg2 => {
        if (0 !== arg2.reduce((arg, arg1) => arg + arg1)) return _s.fromDataView(new DataView(new Uint8Array(arg2).buffer), 0);
      }).filter(Boolean);
    }).slice(0, 10);
  }
  async ['setMacroList'](arg2) {
    const value4 = (arg2 = arg2.map(arg => arg.length ? arg : [_s.create(), _s.create()])).map(arg => 4 * arg.length),
      value5 = [64];
    value4.forEach((arg, arg1) => value5.push(arg + value5[arg1]));
    const value12 = new DataView(new ArrayBuffer(2 * value5.length)),
      value6 = Macro.create(this.configIndex * _Fire.MacroListOffset, value12.byteLength);
    value5.map((arg, arg1) => value12.setUint16(2 * arg1, 11 == arg1 ? 0 : arg, true));
    value6.buffer = value12;
    await this.transferForResult(value6);
    const value3 = arg2.flat().map(arg => Array.from(new Uint8Array(arg.buffer))).flat(),
      value7 = rt.chunk(value3, 56).map(arg => new DataView(new Uint8Array(arg).buffer)),
      value32 = value7.length;
    let value8 = 64;
    for (let value2 = 0; value2 < value32; value2++) {
      const value = value7[value2],
        value1 = Macro.create(value8, value.byteLength);
      value1.buffer = value;
      await this.transferForResult(value1);
      value8 += value.byteLength;
    }
  }
  async ["getKeyTriggerTravel"]() {
    if (this.isV2) return this.getKeyTriggerTravelV2();
    const value12 = Math.ceil(18.285714285714285),
      value5 = [];
    let value22 = this.configIndex * _Fire.KeyTriggerTravelOffset;
    for (let value4 = 0; value4 < value12; value4++) {
      const value1 = 1024 - value5.length,
        value2 = KeyTriggerTravel.get(value22, value1 >= 56 ? 56 : value1),
        value = await this.transferForResult(value2);
      value22 += value.buffer.byteLength;
      const value3 = new Uint8Array(value.buffer.buffer);
      value5.push(...Array.from(value3));
    }
    return rt.chunk(value5, 8).map(arg => Ds.fromDataView(new DataView(new Uint8Array(arg).buffer), 0));
  }
  async ["getKeyTriggerTravelV2"]() {
    const value22 = Math.ceil(18.285714285714285),
      value5 = [];
    let value12 = this.configIndex * _Fire.KeyTriggerTravelOffset;
    for (let value4 = 0; value4 < value22; value4++) {
      const value3 = 1024 - value5.length,
        value2 = KeyTriggerTravel.get(value12, value3 >= 56 ? 56 : value3),
        value = await this.transferForResult(value2);
      value12 += value.buffer.byteLength;
      const value1 = new Uint8Array(value.buffer.buffer);
      value5.push(...Array.from(value1));
    }
    return rt.chunk(value5, 8).map(arg => xs.fromDataView(new DataView(new Uint8Array(arg).buffer), 0));
  }
  async ['setKeyTriggerTravel'](arg2) {
    if (this.isV2) return this.setKeyTriggerTravelV2(arg2);
    const value3 = rt.chunk(arg2.map(arg => arg.toNumArr()).flat(), 56),
      value12 = value3.length;
    let value32 = this.configIndex * _Fire.KeyTriggerTravelOffset;
    for (let value2 = 0; value2 < value12; value2++) {
      const value = value3[value2],
        value1 = KeyTriggerTravel.create(value32, value.length);
      value1.buffer = new DataView(new Uint8Array(value).buffer);
      await this.transferForResult(value1);
      value32 += value.length;
    }
  }
  async ['setKeyTriggerTravelV2'](arg2) {
    const value32 = rt.chunk(arg2.map(arg => arg.toNumArr()).flat(), 56),
      value12 = value32.length;
    let value3 = this.configIndex * _Fire.KeyTriggerTravelOffset;
    for (let value2 = 0; value2 < value12; value2++) {
      const value = value32[value2],
        value1 = KeyTriggerTravel.create(value3, value.length);
      value1.buffer = new DataView(new Uint8Array(value).buffer);
      await this.transferForResult(value1);
      value3 += value.length;
    }
  }
  async ["getOneKeyTriggerTravel"](arg1) {
    const value2 = KeyTriggerTravel.get(8 * arg1, 8),
      value = await this.transferForResult(value2);
    if (this.isV2) return xs.fromDataView(value.buffer, 0);
    return Ds.fromDataView(value.buffer, 0);
  }
  async ["setOneKeyTriggerTravel"](arg, arg1) {
    const value2 = KeyTriggerTravel.create(8 * arg, 8);
    value2.buffer = arg1.buffer;
    await this.transferForResult(value2);
  }
  async ['getCustomInfo']() {
    if (this.isV2) return this.transferForResult(CustomInfoV2.get());
    return this.transferForResult(CustomInfo.get());
  }
  async ["setCustomInfo"](arg2, arg) {
    if (this.isV2) return this.setCustomInfoV2(arg2, arg);
    const value1 = CustomInfo.create();
    value1.globalKeyTriggerTravel = arg2;
    value1.competitiveMode = arg ?? value1.competitiveMode;
    await this.transferForResult(value1);
  }
  async ['setCustomInfoV2'](arg2, arg1) {
    const value = CustomInfoV2.create();
    value.globalKeyTriggerTravel = arg2;
    value.competitiveMode = arg1 ?? value.competitiveMode;
    await this.transferForResult(value);
  }
  async ["startCalibration"]() {
    return this.transferForResult(Rs.start());
  }
  async ["stopCalibration"]() {
    return this.transferForResult(Rs.stop());
  }
  async ["factoryDataReset"]() {
    return this.transferForResult(FactoryDataReset.reset());
  }
  async ['getCalibration']() {
    const value12 = Math.ceil(9.142857142857142),
      value5 = [];
    let value22 = 0;
    for (let value4 = 0; value4 < value12; value4++) {
      const value = 512 - value5.length,
        value3 = Rs.get(value22, value >= 56 ? 56 : value),
        value2 = await this.transferForResult(value3);
      value22 += value2.buffer.byteLength;
      const value1 = Array.from(new Uint8Array(value2.buffer.buffer));
      value5.push(...value1);
    }
    rt.chunk(value5, 4).map(arg => new DataView(new Uint8Array(arg).buffer).getFloat32(0, true).toFixed(2));
  }
  async ["transferForResult"](arg) {
    arg.raw = await this.transferForResultAsync(arg.toUint8Array());
    return arg;
  }
};
V(Bs, "FunctionVariableAreaOffset", 64);
V(Bs, 'KeyActionsOffset', 2048);
V(Bs, "CustomLightingOffset", 512);
V(Bs, 'DynamicStrokeOffset', 768);
V(Bs, "DoubleClickOffset", 256);
V(Bs, "ToggleSwitchOffset", 128);
V(Bs, "MacroListOffset", 2048);
V(Bs, "KeyTriggerTravelOffset", 1024);
let Ls = Bs;
const Vs = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : 'undefined' != typeof window ? window : global,
  Fs = Object.keys,
  Ns = Array.isArray;
function Gs(arg2, arg1) {
  "object" != typeof arg1 || Fs(arg1).forEach(function (arg) {
    arg2[arg] = arg1[arg];
  });
  return arg2;
}
"undefined" == typeof Promise || Vs.Promise || (Vs.Promise = Promise);
const zs = Object.getPrototypeOf,
  Hs = {}.hasOwnProperty;
function Ws(arg, arg1) {
  return Hs.call(arg, arg1);
}
function js(arg1, arg2) {
  'function' == typeof arg2 && (arg2 = arg2(zs(arg1)));
  ('undefined' == typeof Reflect ? Fs : Reflect.ownKeys)(arg2).forEach(arg => {
    $s(arg1, arg, arg2[arg]);
  });
}
const Ys = Object.defineProperty;
function $s(arg2, arg1, arg3, arg) {
  Ys(arg2, arg1, Gs(arg3 && Ws(arg3, 'get') && "function" == typeof arg3.get ? {
    get: arg3.get,
    set: arg3.set,
    configurable: true
  } : {
    value: arg3,
    configurable: true,
    writable: true
  }, arg));
}
function qs(arg2) {
  return {
    from: function (arg) {
      arg2.prototype = Object.create(arg.prototype);
      $s(arg2.prototype, "constructor", arg2);
      return {
        extend: js.bind(null, arg2.prototype)
      };
    }
  };
}
const Js = Object.getOwnPropertyDescriptor;
function Xs(arg2, arg1) {
  let value;
  return Js(arg2, arg1) || (value = zs(arg2)) && Xs(value, arg1);
}
const Zs = [].slice;
function Qs(arg1, arg2, arg) {
  return Zs.call(arg1, arg2, arg);
}
function tn(arg1, arg) {
  return arg(arg1);
}
function rn(arg) {
  if (!arg) throw new Error("Assertion Failed");
}
function sn(arg) {
  if (Vs.setImmediate) setImmediate(arg);else setTimeout(arg, 0);
}
function nn(arg1, arg4) {
  return arg1.reduce((arg3, arg2, arg) => {
    var value1 = arg4(arg2, arg);
    value1 && (arg3[value1[0]] = value1[1]);
    return arg3;
  }, {});
}
function on(arg7, arg6) {
  if (Ws(arg7, arg6)) return arg7[arg6];
  if (!arg6) return arg7;
  if ("string" != typeof arg6) {
    for (var value1 = [], value5 = 0, value = arg6.length; value5 < value; ++value5) {
      var value4 = on(arg7, arg6[value5]);
      value1.push(value4);
    }
    return value1;
  }
  var value3 = arg6.indexOf('.');
  if (-1 !== value3) {
    var value2 = arg7[arg6.substr(0, value3)];
    if (void 0 === value2) return void 0;
    return on(value2, arg6.substr(value3 + 1));
  }
}
function un(arg7, arg6, arg5) {
  if (arg7 && void 0 !== arg6 && (!("isFrozen" in Object) || !Object.isFrozen(arg7))) {
    if ("string" != typeof arg6 && "length" in arg6) {
      rn("string" != typeof arg5 && "length" in arg5);
      for (var value2 = 0, value = arg6.length; value2 < value; ++value2) un(arg7, arg6[value2], arg5[value2]);
    } else {
      var value4 = arg6.indexOf('.');
      if (-1 !== value4) {
        var value8 = arg6.substr(0, value4),
          value3 = arg6.substr(value4 + 1);
        if ('' === value3) {
          if (void 0 === arg5) {
            if (Ns(arg7) && !isNaN(parseInt(value8))) arg7.splice(value8, 1);else delete arg7[value8];
          } else arg7[value8] = arg5;
        } else {
          var value1 = arg7[value8];
          value1 && Ws(arg7, value8) || (value1 = arg7[value8] = {});
          un(value1, value3, arg5);
        }
      } else if (void 0 === arg5) {
        if (Ns(arg7) && !isNaN(parseInt(arg6))) arg7.splice(arg6, 1);else delete arg7[arg6];
      } else arg7[arg6] = arg5;
    }
  }
}
function cn(arg2) {
  var value = {};
  for (var value1 in arg2) Ws(arg2, value1) && (value[value1] = arg2[value1]);
  return value;
}
const ln = [].concat;
function fn(arg) {
  return ln.apply([], arg);
}
const hn = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(',').concat(fn([8, 16, 32, 64].map(arg2 => ["Int", 'Uint', "Float"].map(arg => arg + arg2 + 'Array')))).filter(arg => Vs[arg]),
  dn = hn.map(arg => Vs[arg]);
nn(hn, arg => [arg, true]);
let gn = null;
function mn(arg) {
  gn = 'undefined' != typeof WeakMap && new WeakMap();
  const value1 = pn(arg);
  gn = null;
  return value1;
}
function pn(arg4) {
  if (!arg4 || 'object' != typeof arg4) return arg4;
  let value22 = gn && gn.get(arg4);
  if (value22) return value22;
  if (Ns(arg4)) {
    value22 = [];
    gn && gn.set(arg4, value22);
    for (var value1 = 0, value2 = arg4.length; value1 < value2; ++value1) value22.push(pn(arg4[value1]));
  } else {
    if (dn.indexOf(arg4.constructor) >= 0) value22 = arg4;else {
      const value = zs(arg4);
      for (var value3 in value22 = value === Object.prototype ? {} : Object.create(value), gn && gn.set(arg4, value22), arg4) Ws(arg4, value3) && (value22[value3] = pn(arg4[value3]));
    }
  }
  return value22;
}
const {
  toString: yn
} = {};
function wn(arg) {
  return yn.call(arg).slice(8, -1);
}
const bn = 'undefined' != typeof Symbol ? Symbol.iterator : "@@iterator",
  _n = "symbol" == typeof bn ? function (arg) {
    var value1;
    return null != arg && (value1 = arg[bn]) && value1.apply(arg);
  } : function () {
    return null;
  },
  vn = {};
function kn(arg4) {
  var value3, value, value1, value2;
  if (1 === arguments.length) {
    if (Ns(arg4)) return arg4.slice();
    if (this === vn && "string" == typeof arg4) return [arg4];
    if (value2 = _n(arg4)) {
      for (value = []; !(value1 = value2.next()).done;) value.push(value1.value);
      return value;
    }
    if (null == arg4) return [arg4];
    if ('number' == typeof (value3 = arg4.length)) {
      for (value = new Array(value3); value3--;) value[value3] = arg4[value3];
      return value;
    }
    return [arg4];
  }
  value3 = arguments.length;
  for (value = new Array(value3); value3--;) value[value3] = arguments[value3];
  return value;
}
const Cn = "undefined" != typeof Symbol ? arg => 'AsyncFunction' === arg[Symbol.toStringTag] : () => false;
var Sn = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function Un(arg, arg1) {
  Sn = arg;
  Dn = arg1;
}
var Dn = () => true;
const xn = !new Error('').stack;
function Kn() {
  if (xn) try {
    Kn.arguments;
    throw new Error();
  } catch (value) {
    return value;
  }
  return new Error();
}
function An(arg22, arg2) {
  var value1 = arg22.stack;
  if (value1) {
    arg2 = arg2 || 0;
    0 === value1.indexOf(arg22.name) && (arg2 += (arg22.name + arg22.message).split('\x0a').length);
    return value1.split('\x0a').slice(arg2).filter(Dn).map(arg => '\x0a' + arg).join('');
  }
  return '';
}
var In = ["Unknown", "Constraint", 'Data', 'TransactionInactive', 'ReadOnly', 'Version', "NotFound", "InvalidState", "InvalidAccess", 'Abort', "Timeout", "QuotaExceeded", "Syntax", "DataClone"],
  Pn = ["Modify", "Bulk", "OpenFailed", 'VersionChange', "Schema", 'Upgrade', "InvalidTable", 'MissingAPI', "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", 'PrematureCommit', "ForeignAwait"].concat(In),
  Mn = {
    VersionChanged: 'Database\x20version\x20changed\x20by\x20other\x20database\x20connection',
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: 'Transaction\x20has\x20already\x20completed\x20or\x20failed',
    MissingAPI: 'IndexedDB\x20API\x20missing.\x20Please\x20visit\x20https://tinyurl.com/y2uuvskb'
  };
function Tn(arg1, arg) {
  this._e = Kn();
  this.name = arg1;
  this.message = arg;
}
function Rn(arg3, arg12) {
  return arg3 + ". Errors: " + Object.keys(arg12).map(arg => arg12[arg].toString()).filter((arg1, arg2, arg) => arg.indexOf(arg1) === arg2).join('\x0a');
}
function En(arg1, arg3, arg, arg2) {
  this._e = Kn();
  this.failures = arg3;
  this.failedKeys = arg2;
  this.successCount = arg;
  this.message = Rn(arg1, arg3);
}
function Bn(arg2, arg1) {
  this._e = Kn();
  this.name = "BulkError";
  this.failures = Object.keys(arg1).map(arg => arg1[arg]);
  this.failuresByPos = arg1;
  this.message = Rn(arg2, arg1);
}
qs(Tn).from(Error).extend({
  stack: {
    get: function () {
      return this._stack || (this._stack = this.name + ':\x20' + this.message + An(this._e, 2));
    }
  },
  toString: function () {
    return this.name + ':\x20' + this.message;
  }
});
qs(En).from(Tn);
qs(Bn).from(Tn);
var Ln = Pn.reduce((arg1, arg) => (arg1[arg] = arg + "Error", arg1), {});
const Vn = Tn;
var Fn = Pn.reduce((arg3, arg12) => {
  var value2 = arg12 + 'Error';
  function fn2(arg, arg1) {
    this._e = Kn();
    this.name = value2;
    if (arg) {
      if ("string" == typeof arg) {
        this.message = '' + arg + (arg1 ? '\x0a\x20' + arg1 : '');
        this.inner = arg1 || null;
      } else "object" == typeof arg && (this.message = arg.name + '\x20' + arg.message, this.inner = arg);
    } else {
      this.message = Mn[arg12] || value2;
      this.inner = null;
    }
  }
  qs(fn2).from(Vn);
  arg3[arg12] = fn2;
  return arg3;
}, {});
Fn.Syntax = SyntaxError;
Fn.Type = TypeError;
Fn.Range = RangeError;
var Nn = In.reduce((arg, arg1) => (arg[arg1 + "Error"] = Fn[arg1], arg), {}),
  Gn = Pn.reduce((arg1, arg) => (-1 === ["Syntax", "Type", "Range"].indexOf(arg) && (arg1[arg + "Error"] = Fn[arg]), arg1), {});
function zn() {}
function Hn(arg) {
  return arg;
}
function Wn(arg2, arg1) {
  if (null == arg2 || arg2 === Hn) return arg1;
  return function (arg) {
    return arg1(arg2(arg));
  };
}
function jn(arg1, arg) {
  return function () {
    arg1.apply(this, arguments);
    arg.apply(this, arguments);
  };
}
function Yn(arg, arg1) {
  if (arg === zn) return arg1;
  return function () {
    var value1 = arg.apply(this, arguments);
    void 0 !== value1 && (arguments[0] = value1);
    var value3 = this.onsuccess,
      value2 = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var value = arg1.apply(this, arguments);
    value3 && (this.onsuccess = this.onsuccess ? jn(value3, this.onsuccess) : value3);
    value2 && (this.onerror = this.onerror ? jn(value2, this.onerror) : value2);
    return void 0 !== value ? value : value1;
  };
}
function $n(arg1, arg) {
  if (arg1 === zn) return arg;
  return function () {
    arg1.apply(this, arguments);
    var value = this.onsuccess,
      value1 = this.onerror;
    this.onsuccess = this.onerror = null;
    arg.apply(this, arguments);
    value && (this.onsuccess = this.onsuccess ? jn(value, this.onsuccess) : value);
    value1 && (this.onerror = this.onerror ? jn(value1, this.onerror) : value1);
  };
}
function qn(arg, arg1) {
  if (arg === zn) return arg1;
  return function (arg4) {
    var value3 = arg.apply(this, arguments);
    Gs(arg4, value3);
    var value2 = this.onsuccess,
      value1 = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var value = arg1.apply(this, arguments);
    value2 && (this.onsuccess = this.onsuccess ? jn(value2, this.onsuccess) : value2);
    value1 && (this.onerror = this.onerror ? jn(value1, this.onerror) : value1);
    if (void 0 === value3) return void 0 === value ? void 0 : value;
    return Gs(value3, value);
  };
}
function Jn(arg1, arg) {
  if (arg1 === zn) return arg;
  return function () {
    return false !== arg.apply(this, arguments) && arg1.apply(this, arguments);
  };
}
function Qn(arg, arg1) {
  if (arg === zn) return arg1;
  return function () {
    var value3 = arg.apply(this, arguments);
    if (value3 && "function" == typeof value3.then) {
      for (var value = this, value1 = arguments.length, value2 = new Array(value1); value1--;) value2[value1] = arguments[value1];
      return value3.then(function () {
        return arg1.apply(value, value2);
      });
    }
    return arg1.apply(this, arguments);
  };
}
Gn.ModifyError = En;
Gn.DexieError = Tn;
Gn.BulkError = Bn;
var ea = {};
const ta = 100,
  [ra, sa, na] = "undefined" == typeof Promise ? [] : (() => {
    let value1 = Promise.resolve();
    if ("undefined" == typeof crypto || !crypto.subtle) return [value1, zs(value1), value1];
    const value = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
    return [value, zs(value), value1];
  })(),
  aa = sa && sa.then,
  ia = ra && ra.constructor,
  oa = !!na;
var ua = false,
  ca = na ? () => {
    na.then(Pa);
  } : Vs.setImmediate ? setImmediate.bind(null, Pa) : Vs.MutationObserver ? () => {
    var value = document.createElement('div');
    new MutationObserver(() => {
      Pa();
      value = null;
    }).observe(value, {
      attributes: true
    });
    value.setAttribute('i', '1');
  } : () => {
    setTimeout(Pa, 0);
  },
  la = function (arg, arg1) {
    ba.push([arg, arg1]);
    ha && (ca(), ha = false);
  },
  fa = true,
  ha = true,
  da = [],
  ga = [],
  ma = null,
  pa = Hn,
  ya = {
    id: "global",
    global: true,
    ref: 0,
    unhandleds: [],
    onunhandled: si,
    pgp: false,
    env: {},
    finalize: function () {
      this.unhandleds.forEach(arg => {
        try {
          si(arg[0], arg[1]);
        } catch (value) {}
      });
    }
  },
  wa = ya,
  ba = [],
  _a = 0,
  va = [];
function ka(arg1) {
  if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
  this._listeners = [];
  this.onuncatched = zn;
  this._lib = false;
  var value = this._PSD = wa;
  Sn && (this._stackHolder = Kn(), this._prev = null, this._numPrev = 0);
  if ('function' != typeof arg1) {
    if (arg1 !== ea) throw new TypeError("Not a function");
    this._state = arguments[1];
    this._value = arguments[2];
    return void (false === this._state && Da(this, this._value));
  }
  this._state = null;
  this._value = null;
  ++value.ref;
  Ua(this, arg1);
}
const Ca = {
  get: function () {
    var value12 = wa,
      value2 = Ga;
    function fn2(arg2, arg4) {
      var value1 = !value12.global && (value12 !== wa || value2 !== Ga);
      const value3 = value1 && !ja();
      var value = new ka((arg, arg1) => {
        xa(this, new Sa(ei(arg2, value12, value1, value3), ei(arg4, value12, value1, value3), arg, arg1, value12));
      });
      Sn && Ia(value, this);
      return value;
    }
    fn2.prototype = ea;
    return fn2;
  },
  set: function (arg) {
    $s(this, "then", arg && arg.prototype === ea ? Ca : {
      get: function () {
        return arg;
      },
      set: Ca.set
    });
  }
};
function Sa(arg4, arg, arg2, arg3, arg1) {
  this.onFulfilled = "function" == typeof arg4 ? arg4 : null;
  this.onRejected = "function" == typeof arg ? arg : null;
  this.resolve = arg2;
  this.reject = arg3;
  this.psd = arg1;
}
function Ua(arg12, arg3) {
  try {
    arg3(arg2 => {
      if (null === arg12._state) {
        if (arg2 === arg12) throw new TypeError("A promise cannot be resolved with itself.");
        var value1 = arg12._lib && Ma();
        if (arg2 && 'function' == typeof arg2.then) Ua(arg12, (arg1, arg) => {
          if (arg2 instanceof ka) arg2._then(arg1, arg);else arg2.then(arg1, arg);
        });else {
          arg12._state = true;
          arg12._value = arg2;
          Oa(arg12);
        }
        value1 && Ta();
      }
    }, Da.bind(null, arg12));
  } catch (value) {
    Da(arg12, value);
  }
}
function Da(arg3, arg12) {
  ga.push(arg12);
  if (null === arg3._state) {
    var value3 = arg3._lib && Ma();
    arg12 = pa(arg12);
    arg3._state = false;
    arg3._value = arg12;
    Sn && null !== arg12 && 'object' == typeof arg12 && !arg12._promise && function (arg1, arg2, arg) {
      try {
        (() => {
          var value = Xs(arg12, "stack");
          arg12._promise = arg3;
          $s(arg12, "stack", {
            get: () => ua ? value && (value.get ? value.get.apply(arg12) : value.value) : arg3.stack
          });
        }).apply(null, void 0);
      } catch (value) {}
    }();
    value2 = arg3;
    da.some(arg => arg._value === value2._value) || da.push(value2);
    Oa(arg3);
    value3 && Ta();
  }
  var value2;
}
function Oa(arg3) {
  var value4 = arg3._listeners;
  arg3._listeners = [];
  for (var value2 = 0, value1 = value4.length; value2 < value1; ++value2) xa(arg3, value4[value2]);
  var value = arg3._PSD;
  --value.ref || value.finalize();
  0 === _a && (++_a, la(() => {
    0 == --_a && Ra();
  }, []));
}
function xa(arg, arg2) {
  if (null !== arg._state) {
    var value1 = arg._state ? arg2.onFulfilled : arg2.onRejected;
    if (null === value1) return (arg._state ? arg2.resolve : arg2.reject)(arg._value);
    ++arg2.psd.ref;
    ++_a;
    la(Ka, [value1, arg, arg2]);
  } else arg._listeners.push(arg2);
}
function Ka(arg2, arg4, arg1) {
  try {
    ma = arg4;
    var value2,
      value3 = arg4._value;
    if (arg4._state) value2 = arg2(value3);else {
      ga.length && (ga = []);
      value2 = arg2(value3);
      -1 === ga.indexOf(value3) && function (arg) {
        for (var value1 = da.length; value1;) if (da[--value1]._value === arg._value) return void da.splice(value1, 1);
      }(arg4);
    }
    arg1.resolve(value2);
  } catch (value) {
    arg1.reject(value);
  } finally {
    ma = null;
    0 == --_a && Ra();
    --arg1.psd.ref || arg1.psd.finalize();
  }
}
function Aa(arg5, arg4, arg) {
  if (arg4.length === arg) return arg4;
  var value6 = '';
  if (false === arg5._state) {
    var value3,
      value1,
      value2 = arg5._value;
    if (null != value2) {
      value3 = value2.name || "Error";
      value1 = value2.message || value2;
      value6 = An(value2, 0);
    } else {
      value3 = value2;
      value1 = '';
    }
    arg4.push(value3 + (value1 ? ':\x20' + value1 : '') + value6);
  }
  Sn && ((value6 = An(arg5._stackHolder, 2)) && -1 === arg4.indexOf(value6) && arg4.push(value6), arg5._prev && Aa(arg5._prev, arg4, arg));
  return arg4;
}
function Ia(arg2, arg1) {
  var value = arg1 ? arg1._numPrev + 1 : 0;
  value < 100 && (arg2._prev = arg1, arg2._numPrev = value);
}
function Pa() {
  Ma() && Ta();
}
function Ma() {
  var value = fa;
  fa = false;
  ha = false;
  return value;
}
function Ta() {
  var value1, value2, value3;
  do {
    for (; ba.length > 0;) {
      value1 = ba;
      ba = [];
      value3 = value1.length;
      for (value2 = 0; value2 < value3; ++value2) {
        var value = value1[value2];
        value[0].apply(null, value[1]);
      }
    }
  } while (ba.length > 0);
  fa = true;
  ha = true;
}
function Ra() {
  var value1 = da;
  da = [];
  value1.forEach(arg => {
    arg._PSD.onunhandled.call(null, arg._value, arg);
  });
  for (var value2 = va.slice(0), value = value2.length; value;) value2[--value]();
}
function Ea(arg) {
  return new ka(ea, false, arg);
}
function Ba(arg1, arg2) {
  var value3 = wa;
  return function () {
    var value2 = Ma(),
      value1 = wa;
    try {
      Ja(value3, true);
      return arg1.apply(this, arguments);
    } catch (value) {
      arg2 && arg2(value);
    } finally {
      Ja(value1, false);
      value2 && Ta();
    }
  };
}
js(ka.prototype, {
  then: Ca,
  _then: function (arg, arg1) {
    xa(this, new Sa(null, null, arg, arg1, wa));
  },
  catch: function (arg2) {
    if (1 === arguments.length) return this.then(null, arg2);
    var value1 = arguments[0],
      value2 = arguments[1];
    if ("function" == typeof value1) return this.then(null, arg => arg instanceof value1 ? value2(arg) : Ea(arg));
    return this.then(null, arg => arg && arg.name === value1 ? value2(arg) : Ea(arg));
  },
  finally: function (arg2) {
    return this.then(arg => (arg2(), arg), arg => (arg2(), Ea(arg)));
  },
  stack: {
    get: function () {
      if (this._stack) return this._stack;
      try {
        ua = true;
        var value = Aa(this, [], 20).join("\nFrom previous: ");
        null !== this._state && (this._stack = value);
        return value;
      } finally {
        ua = false;
      }
    }
  },
  timeout: function (arg12, arg) {
    if (arg12 < 1 / 0) return new ka((arg2, arg1) => {
      var value = setTimeout(() => arg1(new Fn.Timeout(arg)), arg12);
      this.then(arg2, arg1).finally(clearTimeout.bind(null, value));
    });
    return this;
  }
});
"undefined" != typeof Symbol && Symbol.toStringTag && $s(ka.prototype, Symbol.toStringTag, 'Dexie.Promise');
ya.env = Xa();
js(ka, {
  all: function () {
    var value = kn.apply(null, arguments).map(Ya);
    return new ka(function (arg3, arg22) {
      0 === value.length && arg3([]);
      var value1 = value.length;
      value.forEach((arg1, arg2) => ka.resolve(arg1).then(arg => {
        value[arg2] = arg;
        --value1 || arg3(value);
      }, arg22));
    });
  },
  resolve: arg2 => {
    if (arg2 instanceof ka) return arg2;
    if (arg2 && "function" == typeof arg2.then) return new ka((arg1, arg) => {
      arg2.then(arg1, arg);
    });
    var value1 = new ka(ea, true, arg2);
    Ia(value1, ma);
    return value1;
  },
  reject: Ea,
  race: function () {
    var value = kn.apply(null, arguments).map(Ya);
    return new ka((arg2, arg1) => {
      value.map(arg => ka.resolve(arg).then(arg2, arg1));
    });
  },
  PSD: {
    get: () => wa,
    set: arg => wa = arg
  },
  totalEchoes: {
    get: () => Ga
  },
  newPSD: Ha,
  usePSD: Za,
  scheduler: {
    get: () => la,
    set: arg => {
      la = arg;
    }
  },
  rejectionMapper: {
    get: () => pa,
    set: arg => {
      pa = arg;
    }
  },
  follow: (arg3, arg13) => new ka((arg2, arg12) => Ha((arg1, arg) => {
    var value22 = wa;
    value22.unhandleds = [];
    value22.onunhandled = arg;
    value22.finalize = jn(function () {
      var value2;
      value2 = () => {
        if (0 === this.unhandleds.length) arg1();else arg(this.unhandleds[0]);
      };
      va.push(function value() {
        value2();
        va.splice(va.indexOf(value), 1);
      });
      ++_a;
      la(() => {
        0 == --_a && Ra();
      }, []);
    }, value22.finalize);
    arg3();
  }, arg13, arg2, arg12))
});
ia && (ia.allSettled && $s(ka, 'allSettled', function () {
  const value3 = kn.apply(null, arguments).map(Ya);
  return new ka(arg12 => {
    0 === value3.length && arg12([]);
    let value2 = value3.length;
    const value = new Array(value2);
    value3.forEach((arg2, arg1) => ka.resolve(arg2).then(arg => value[arg1] = {
      status: 'fulfilled',
      value: arg
    }, arg => value[arg1] = {
      status: "rejected",
      reason: arg
    }).then(() => --value2 || arg12(value)));
  });
}), ia.any && "undefined" != typeof AggregateError && $s(ka, 'any', function () {
  const value2 = kn.apply(null, arguments).map(Ya);
  return new ka((arg22, arg3) => {
    0 === value2.length && arg3(new AggregateError([]));
    let value1 = value2.length;
    const value = new Array(value1);
    value2.forEach((arg1, arg2) => ka.resolve(arg1).then(arg => arg22(arg), arg => {
      value[arg2] = arg;
      --value1 || arg3(new AggregateError(value));
    }));
  });
}));
const La = {
  awaits: 0,
  echoes: 0,
  id: 0
};
var Va = 0,
  Fa = [],
  Na = 0,
  Ga = 0,
  za = 0;
function Ha(arg4, arg7, arg, arg5) {
  var value1 = wa,
    value3 = Object.create(value1);
  value3.parent = value1;
  value3.ref = 0;
  value3.global = false;
  value3.id = ++za;
  var value6 = ya.env;
  value3.env = oa ? {
    Promise: ka,
    PromiseProp: {
      value: ka,
      configurable: true,
      writable: true
    },
    all: ka.all,
    race: ka.race,
    allSettled: ka.allSettled,
    any: ka.any,
    resolve: ka.resolve,
    reject: ka.reject,
    nthen: ti(value6.nthen, value3),
    gthen: ti(value6.gthen, value3)
  } : {};
  arg7 && Gs(value3, arg7);
  ++value1.ref;
  value3.finalize = function () {
    --this.parent.ref || this.parent.finalize();
  };
  var value2 = Za(value3, arg4, arg, arg5);
  0 === value3.ref && value3.finalize();
  return value2;
}
function Wa() {
  La.id || (La.id = ++Va);
  ++La.awaits;
  La.echoes += ta;
  return La.id;
}
function ja() {
  return !!La.awaits && (0 == --La.awaits && (La.id = 0), La.echoes = La.awaits * ta, true);
}
function Ya(arg2) {
  if (La.echoes && arg2 && arg2.constructor === ia) {
    Wa();
    return arg2.then(arg => (ja(), arg), arg => (ja(), ni(arg)));
  }
  return arg2;
}
function $a(arg) {
  ++Ga;
  La.echoes && 0 != --La.echoes || (La.echoes = La.id = 0);
  Fa.push(wa);
  Ja(arg, true);
}
function qa() {
  var value = Fa[Fa.length - 1];
  Fa.pop();
  Ja(value, false);
}
function Ja(arg2, arg) {
  var value1 = wa;
  (arg ? !La.echoes || Na++ && arg2 === wa : !Na || --Na && arg2 === wa) || Qa(arg ? $a.bind(null, arg2) : qa);
  if (arg2 !== wa && (wa = arg2, value1 === ya && (ya.env = Xa()), oa)) {
    var value3 = ya.env.Promise,
      value4 = arg2.env;
    sa.then = value4.nthen;
    value3.prototype.then = value4.gthen;
    (value1.global || arg2.global) && (Object.defineProperty(Vs, "Promise", value4.PromiseProp), value3.all = value4.all, value3.race = value4.race, value3.resolve = value4.resolve, value3.reject = value4.reject, value4.allSettled && (value3.allSettled = value4.allSettled), value4.any && (value3.any = value4.any));
  }
}
function Xa() {
  var value = Vs.Promise;
  if (oa) return {
    Promise: value,
    PromiseProp: Object.getOwnPropertyDescriptor(Vs, "Promise"),
    all: value.all,
    race: value.race,
    allSettled: value.allSettled,
    any: value.any,
    resolve: value.resolve,
    reject: value.reject,
    nthen: sa.then,
    gthen: value.prototype.then
  };
  return {};
}
function Za(arg, arg4, arg3, arg1, arg5) {
  var value2 = wa;
  try {
    Ja(arg, true);
    return arg4(arg3, arg1, arg5);
  } finally {
    Ja(value2, false);
  }
}
function Qa(arg) {
  aa.call(ra, arg);
}
function ei(arg3, arg, arg2, arg1) {
  if ("function" != typeof arg3) return arg3;
  return function () {
    var value = wa;
    arg2 && Wa();
    Ja(arg, true);
    try {
      return arg3.apply(this, arguments);
    } finally {
      Ja(value, false);
      arg1 && Qa(ja);
    }
  };
}
function ti(arg12, arg2) {
  return function (arg1, arg) {
    return arg12.call(this, ei(arg1, arg2), ei(arg, arg2));
  };
}
-1 === ('' + aa).indexOf("[native code]") && (Wa = ja = zn);
const ri = 'unhandledrejection';
function si(arg2, arg3) {
  var value1;
  try {
    value1 = arg3.onuncatched(arg2);
  } catch (value) {}
  if (false !== value1) try {
    var value4,
      value2 = {
        promise: arg3,
        reason: arg2
      };
    if (Vs.document && document.createEvent) {
      (value4 = document.createEvent("Event")).initEvent(ri, true, true);
      Gs(value4, value2);
    } else Vs.CustomEvent && Gs(value4 = new CustomEvent(ri, {
      detail: value2
    }), value2);
    if (value4 && Vs.dispatchEvent && (dispatchEvent(value4), !Vs.PromiseRejectionEvent && Vs.onunhandledrejection)) try {
      Vs.onunhandledrejection(value4);
    } catch (value) {}
    Sn && value4 && !value4.defaultPrevented && arg2.stack;
  } catch (value) {}
}
var ni = ka.reject;
function ai(arg2, arg4, arg3, arg12) {
  if (arg2.idbdb && (arg2._state.openComplete || wa.letThrough || arg2._vip)) {
    var value2 = arg2._createTransaction(arg4, arg3, arg2._dbSchema);
    try {
      value2.create();
      arg2._state.PR1398_maxLoop = 3;
    } catch (value) {
      if (value.name === Ln.InvalidState && arg2.isOpen() && --arg2._state.PR1398_maxLoop > 0) {
        arg2._close();
        return arg2.open().then(() => ai(arg2, arg4, arg3, arg12));
      }
      return ni(value);
    }
    return value2._promise(arg4, (arg1, arg) => Ha(() => (wa.trans = value2, arg12(arg1, arg, value2)))).then(arg => value2._completion.then(() => arg));
  }
  if (arg2._state.openComplete) return ni(new Fn.DatabaseClosed(arg2._state.dbOpenError));
  if (!arg2._state.isBeingOpened) {
    if (!arg2._options.autoOpen) return ni(new Fn.DatabaseClosed());
    arg2.open().catch(zn);
  }
  return arg2._state.dbReadyPromise.then(() => ai(arg2, arg4, arg3, arg12));
}
const ii = '3.2.4',
  oi = String.fromCharCode(65535),
  ui = -1 / 0,
  ci = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
  li = "String expected.",
  fi = [],
  hi = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
  di = hi,
  gi = hi,
  mi = arg => !/(dexie\.js|dexie\.min\.js)/.test(arg),
  pi = "__dbnames",
  yi = 'readonly',
  wi = "readwrite";
function bi(arg, arg1) {
  if (arg) return arg1 ? function () {
    return arg.apply(this, arguments) && arg1.apply(this, arguments);
  } : arg;
  return arg1;
}
const _i = {
  type: 3,
  lower: -1 / 0,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function vi(arg2) {
  if ('string' != typeof arg2 || /\./.test(arg2)) return arg => arg;
  return arg => (void 0 === arg[arg2] && arg2 in arg && delete (arg = mn(arg))[arg2], arg);
}
class jt {
  ["_trans"](arg22, arg6, arg3) {
    const value1 = this._tx || wa.trans,
      value5 = this.name;
    function fn4(arg, arg2, arg1) {
      if (!arg1.schema[value5]) throw new Fn.NotFound("Table " + value5 + " not part of transaction");
      return arg6(arg1.idbtrans, arg1);
    }
    const value3 = Ma();
    try {
      if (value1 && value1.db === this.db) return value1 === wa.trans ? value1._promise(arg22, fn4, arg3) : Ha(() => value1._promise(arg22, fn4, arg3), {
        trans: value1,
        transless: wa.transless || wa
      });
      return ai(this.db, arg22, [this.name], fn4);
    } finally {
      value3 && Ta();
    }
  }
  ['get'](arg1, arg3) {
    if (arg1 && arg1.constructor === Object) return this.where(arg1).first(arg3);
    return this._trans("readonly", arg2 => this.core.get({
      trans: arg2,
      key: arg1
    }).then(arg => this.hook.reading.fire(arg))).then(arg3);
  }
  ["where"](arg42) {
    if ('string' == typeof arg42) return new this.db.WhereClause(this, arg42);
    if (Ns(arg42)) return new this.db.WhereClause(this, '[' + arg42.join('+') + ']');
    const value5 = Fs(arg42);
    if (1 === value5.length) return this.where(value5[0]).equals(arg42[value5[0]]);
    const value7 = this.schema.indexes.concat(this.schema.primKey).filter(arg2 => arg2.compound && value5.every(arg => arg2.keyPath.indexOf(arg) >= 0) && arg2.keyPath.every(arg => value5.indexOf(arg) >= 0))[0];
    if (value7 && this.db._maxKey !== oi) return this.where(value7.name).equals(value7.keyPath.map(arg => arg42[arg]));
    !value7 && Sn && (JSON.stringify(arg42), this.name, value5.join('+'));
    const {
        idxByName: value32
      } = this.schema,
      value4 = this.db._deps.indexedDB;
    function fn2(arg1, arg) {
      try {
        return 0 === value4.cmp(arg1, arg);
      } catch (value) {
        return false;
      }
    }
    const [value6, value1] = value5.reduce(([arg2, arg4], arg12) => {
      const value2 = value32[arg12],
        value3 = arg42[arg12];
      return [arg2 || value2, arg2 || !value2 ? bi(arg4, value2 && value2.multi ? arg1 => {
        const value = on(arg1, arg12);
        return Ns(value) && value.some(arg => fn2(value3, arg));
      } : arg => fn2(value3, on(arg, arg12))) : arg4];
    }, [null, null]);
    if (value6) return this.where(value6.name).equals(arg42[value6.keyPath]).filter(value1);
    if (value7) return this.filter(value1);
    return this.where(value5).equals('');
  }
  ["filter"](arg) {
    return this.toCollection().and(arg);
  }
  ["count"](arg) {
    return this.toCollection().count(arg);
  }
  ["offset"](arg) {
    return this.toCollection().offset(arg);
  }
  ['limit'](arg) {
    return this.toCollection().limit(arg);
  }
  ["each"](arg) {
    return this.toCollection().each(arg);
  }
  ['toArray'](arg) {
    return this.toCollection().toArray(arg);
  }
  ['toCollection']() {
    return new this.db.Collection(new this.db.WhereClause(this));
  }
  ['orderBy'](arg) {
    return new this.db.Collection(new this.db.WhereClause(this, Ns(arg) ? '[' + arg.join('+') + ']' : arg));
  }
  ["reverse"]() {
    return this.toCollection().reverse();
  }
  ["mapToClass"](arg1) {
    this.schema.mappedClass = arg1;
    const value3 = arg2 => {
      if (!arg2) return arg2;
      const value1 = Object.create(arg1.prototype);
      for (var value2 in arg2) if (Ws(arg2, value2)) try {
        value1[value2] = arg2[value2];
      } catch (value) {}
      return value1;
    };
    this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook);
    this.schema.readHook = value3;
    this.hook("reading", value3);
    return arg1;
  }
  ["defineClass"]() {
    return this.mapToClass(function (arg) {
      Gs(this, arg);
    });
  }
  ["add"](arg2, arg3) {
    const {
      auto: value4,
      keyPath: value2
    } = this.schema.primKey;
    let value1 = arg2;
    value2 && value4 && (value1 = vi(value2)(arg2));
    return this._trans("readwrite", arg => this.core.mutate({
      trans: arg,
      type: "add",
      keys: null != arg3 ? [arg3] : null,
      values: [value1]
    })).then(arg => arg.numFailures ? ka.reject(arg.failures[0]) : arg.lastResult).then(arg => {
      if (value2) try {
        un(arg2, value2, arg);
      } catch (value) {}
      return arg;
    });
  }
  ["update"](arg1, arg2) {
    if ("object" != typeof arg1 || Ns(arg1)) return this.where(":id").equals(arg1).modify(arg2);
    {
      const value2 = on(arg1, this.schema.primKey.keyPath);
      if (void 0 === value2) return ni(new Fn.InvalidArgument('Given\x20object\x20does\x20not\x20contain\x20its\x20primary\x20key'));
      try {
        if ('function' != typeof arg2) Fs(arg2).forEach(arg => {
          un(arg1, arg, arg2[arg]);
        });else arg2(arg1, {
          value: arg1,
          primKey: value2
        });
      } catch (value) {}
      return this.where(":id").equals(value2).modify(arg2);
    }
  }
  ["put"](arg2, arg1) {
    const {
      auto: value3,
      keyPath: value2
    } = this.schema.primKey;
    let value4 = arg2;
    value2 && value3 && (value4 = vi(value2)(arg2));
    return this._trans('readwrite', arg => this.core.mutate({
      trans: arg,
      type: "put",
      values: [value4],
      keys: null != arg1 ? [arg1] : null
    })).then(arg => arg.numFailures ? ka.reject(arg.failures[0]) : arg.lastResult).then(arg => {
      if (value2) try {
        un(arg2, value2, arg);
      } catch (value) {}
      return arg;
    });
  }
  ["delete"](arg2) {
    return this._trans("readwrite", arg => this.core.mutate({
      trans: arg,
      type: "delete",
      keys: [arg2]
    })).then(arg => arg.numFailures ? ka.reject(arg.failures[0]) : void 0);
  }
  ["clear"]() {
    return this._trans('readwrite', arg => this.core.mutate({
      trans: arg,
      type: "deleteRange",
      range: _i
    })).then(arg => arg.numFailures ? ka.reject(arg.failures[0]) : void 0);
  }
  ["bulkGet"](arg4) {
    return this._trans("readonly", arg3 => this.core.getMany({
      keys: arg4,
      trans: arg3
    }).then(arg2 => arg2.map(arg => this.hook.reading.fire(arg))));
  }
  ['bulkAdd'](arg4, arg22, arg32) {
    const value1 = Array.isArray(arg22) ? arg22 : void 0,
      value42 = (arg32 = arg32 || (value1 ? void 0 : arg22)) ? arg32.allKeys : void 0;
    return this._trans("readwrite", arg12 => {
      const {
        auto: value3,
        keyPath: value2
      } = this.schema.primKey;
      if (value2 && value1) throw new Fn.InvalidArgument('bulkAdd():\x20keys\x20argument\x20invalid\x20on\x20tables\x20with\x20inbound\x20keys');
      if (value1 && value1.length !== arg4.length) throw new Fn.InvalidArgument("Arguments objects and keys must have the same length");
      const value4 = arg4.length;
      let value = value2 && value3 ? arg4.map(vi(value2)) : arg4;
      return this.core.mutate({
        trans: arg12,
        type: 'add',
        keys: value1,
        values: value,
        wantResults: value42
      }).then(({
        numFailures: arg3,
        results: arg,
        lastResult: arg2,
        failures: arg1
      }) => {
        if (0 === arg3) return value42 ? arg : arg2;
        throw new Bn(this.name + ".bulkAdd(): " + arg3 + '\x20of\x20' + value4 + '\x20operations\x20failed', arg1);
      });
    });
  }
  ['bulkPut'](arg32, arg4, arg42) {
    const value2 = Array.isArray(arg4) ? arg4 : void 0,
      value12 = (arg42 = arg42 || (value2 ? void 0 : arg4)) ? arg42.allKeys : void 0;
    return this._trans("readwrite", arg22 => {
      const {
        auto: value,
        keyPath: value1
      } = this.schema.primKey;
      if (value1 && value2) throw new Fn.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (value2 && value2.length !== arg32.length) throw new Fn.InvalidArgument("Arguments objects and keys must have the same length");
      const value4 = arg32.length;
      let value3 = value1 && value ? arg32.map(vi(value1)) : arg32;
      return this.core.mutate({
        trans: arg22,
        type: "put",
        keys: value2,
        values: value3,
        wantResults: value12
      }).then(({
        numFailures: arg2,
        results: arg1,
        lastResult: arg,
        failures: arg3
      }) => {
        if (0 === arg2) return value12 ? arg1 : arg;
        throw new Bn(this.name + ".bulkPut(): " + arg2 + '\x20of\x20' + value4 + " operations failed", arg3);
      });
    });
  }
  ["bulkDelete"](arg3) {
    const value1 = arg3.length;
    return this._trans('readwrite', arg => this.core.mutate({
      trans: arg,
      type: "delete",
      keys: arg3
    })).then(({
      numFailures: arg2,
      lastResult: arg1,
      failures: arg
    }) => {
      if (0 === arg2) return arg1;
      throw new Bn(this.name + ".bulkDelete(): " + arg2 + " of " + value1 + " operations failed", arg);
    });
  }
}
function ki(arg4) {
  var value3 = {},
    value12 = function (arg3, arg) {
      if (arg) {
        for (var value2 = arguments.length, value1 = new Array(value2 - 1); --value2;) value1[value2 - 1] = arguments[value2];
        value3[arg3].subscribe.apply(null, value1);
        return arg4;
      }
      if ("string" == typeof arg3) return value3[arg3];
    };
  value12.addEventType = fn4;
  for (var value24 = 1, value5 = arguments.length; value24 < value5; ++value24) fn4(arguments[value24]);
  return value12;
  function fn4(arg32, arg3, arg12) {
    if ('object' != typeof arg32) {
      var value4;
      arg3 || (arg3 = Jn);
      arg12 || (arg12 = zn);
      var value23 = {
        subscribers: [],
        fire: arg12,
        subscribe: function (arg) {
          -1 === value23.subscribers.indexOf(arg) && (value23.subscribers.push(arg), value23.fire = arg3(value23.fire, arg));
        },
        unsubscribe: function (arg2) {
          value23.subscribers = value23.subscribers.filter(function (arg) {
            return arg !== arg2;
          });
          value23.fire = value23.subscribers.reduce(arg3, arg12);
        }
      };
      value3[arg32] = value12[arg32] = value23;
      return value23;
    }
    Fs(value4 = arg32).forEach(function (arg1) {
      var value2 = value4[arg1];
      if (Ns(value2)) fn4(arg1, value4[arg1][0], value4[arg1][1]);else {
        if ("asap" !== value2) throw new Fn.InvalidArgument("Invalid event config");
        var value22 = fn4(arg1, Hn, function () {
          for (var value = arguments.length, value1 = new Array(value); value--;) value1[value] = arguments[value];
          value22.subscribers.forEach(function (arg) {
            sn(function () {
              arg.apply(null, value1);
            });
          });
        });
      }
    });
  }
}
function Ci(arg1, arg) {
  qs(arg).from({
    prototype: arg1
  });
  return arg;
}
function Si(arg, arg1) {
  return !(arg.filter || arg.algorithm || arg.or) && (arg1 ? arg.justLimit : !arg.replayFilter);
}
function Ui(arg1, arg) {
  arg1.filter = bi(arg1.filter, arg);
}
function Di(arg, arg2, arg3) {
  var value1 = arg.replayFilter;
  arg.replayFilter = value1 ? () => bi(value1(), arg2()) : arg2;
  arg.justLimit = arg3 && !value1;
}
function Oi(arg, arg2) {
  if (arg.isPrimKey) return arg2.primaryKey;
  const value1 = arg2.getIndexByKeyPath(arg.index);
  if (!value1) throw new Fn.Schema("KeyPath " + arg.index + " on object store " + arg2.name + '\x20is\x20not\x20indexed');
  return value1;
}
function xi(arg, arg3, arg1) {
  const value2 = Oi(arg, arg3.schema);
  return arg3.openCursor({
    trans: arg1,
    values: !arg.keysOnly,
    reverse: "prev" === arg.dir,
    unique: !!arg.unique,
    query: {
      index: value2,
      range: arg.range
    }
  });
}
function Ki(arg32, arg5, arg22, arg1) {
  const value4 = arg32.replayFilter ? bi(arg32.filter, arg32.replayFilter()) : arg32.filter;
  if (arg32.or) {
    const value12 = {},
      value2 = (arg3, arg2, arg4) => {
        if (!value4 || value4(arg2, arg4, arg => arg2.stop(arg), arg => arg2.fail(arg))) {
          var value1 = arg2.primaryKey,
            value = '' + value1;
          "[object ArrayBuffer]" === value && (value = '' + new Uint8Array(value1));
          Ws(value12, value) || (value12[value] = true, arg5(arg3, arg2, arg4));
        }
      };
    return Promise.all([arg32.or._iterate(value2, arg22), Ai(xi(arg32, arg1, arg22), arg32.algorithm, value2, !arg32.keysOnly && arg32.valueMapper)]);
  }
  return Ai(xi(arg32, arg1, arg22), bi(arg32.algorithm, value4), arg5, !arg32.keysOnly && arg32.valueMapper);
}
function Ai(arg4, arg32, arg3, arg12) {
  var value2 = Ba(arg12 ? (arg1, arg, arg2) => arg3(arg12(arg1), arg, arg2) : arg3);
  return arg4.then(arg2 => {
    if (arg2) return arg2.start(() => {
      var value = () => arg2.continue();
      arg32 && !arg32(arg2, arg => value = arg, arg => {
        arg2.stop(arg);
        value = zn;
      }, arg => {
        arg2.fail(arg);
        value = zn;
      }) || value2(arg2.value, arg2, arg => value = arg);
      value();
    });
  });
}
function Ii(arg2, arg12) {
  try {
    const value5 = Pi(arg2),
      value12 = Pi(arg12);
    if (value5 !== value12) return "Array" === value5 ? 1 : "Array" === value12 ? -1 : "binary" === value5 ? 1 : "binary" === value12 ? -1 : "string" === value5 ? 1 : "string" === value12 ? -1 : "Date" === value5 ? 1 : "Date" !== value12 ? NaN : -1;
    switch (value5) {
      case "number":
      case "Date":
      case "string":
        return arg2 > arg12 ? 1 : arg2 < arg12 ? -1 : 0;
      case "binary":
        return function (arg3, arg) {
          const value2 = arg3.length,
            value1 = arg.length,
            value4 = value2 < value1 ? value2 : value1;
          for (let value = 0; value < value4; ++value) if (arg3[value] !== arg[value]) return arg3[value] < arg[value] ? -1 : 1;
          if (value2 === value1) return 0;
          if (value2 < value1) return -1;
          return 1;
        }(Mi(arg2), Mi(arg12));
      case "Array":
        return function (arg1, arg3) {
          const value22 = arg1.length,
            value4 = arg3.length,
            value3 = value22 < value4 ? value22 : value4;
          for (let value2 = 0; value2 < value3; ++value2) {
            const value = Ii(arg1[value2], arg3[value2]);
            if (0 !== value) return value;
          }
          if (value22 === value4) return 0;
          if (value22 < value4) return -1;
          return 1;
        }(arg2, arg12);
    }
  } catch (value) {}
  return NaN;
}
function Pi(arg) {
  const value2 = typeof arg;
  if ("object" !== value2) return value2;
  if (ArrayBuffer.isView(arg)) return 'binary';
  const value1 = wn(arg);
  return "ArrayBuffer" === value1 ? 'binary' : value1;
}
function Mi(arg) {
  if (arg instanceof Uint8Array) return arg;
  if (ArrayBuffer.isView(arg)) return new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
  return new Uint8Array(arg);
}
class Vt {
  ["_read"](arg, arg1) {
    var value2 = this._ctx;
    if (value2.error) return value2.table._trans(null, ni.bind(null, value2.error));
    return value2.table._trans("readonly", arg).then(arg1);
  }
  ["_write"](arg) {
    var value1 = this._ctx;
    if (value1.error) return value1.table._trans(null, ni.bind(null, value1.error));
    return value1.table._trans('readwrite', arg, "locked");
  }
  ["_addAlgorithm"](arg) {
    var value1 = this._ctx;
    value1.algorithm = bi(value1.algorithm, arg);
  }
  ['_iterate'](arg1, arg) {
    return Ki(this._ctx, arg1, arg, this._ctx.table.core);
  }
  ['clone'](arg2) {
    var value = Object.create(this.constructor.prototype),
      value1 = Object.create(this._ctx);
    arg2 && Gs(value1, arg2);
    value._ctx = value1;
    return value;
  }
  ['raw']() {
    this._ctx.valueMapper = null;
    return this;
  }
  ["each"](arg2) {
    var value1 = this._ctx;
    return this._read(arg => Ki(value1, arg2, arg, value1.table.core));
  }
  ['count'](arg3) {
    return this._read(arg2 => {
      const value3 = this._ctx,
        value = value3.table.core;
      if (Si(value3, true)) return value.count({
        trans: arg2,
        query: {
          index: Oi(value3, value.schema),
          range: value3.range
        }
      }).then(arg => Math.min(arg, value3.limit));
      var value1 = 0;
      return Ki(value3, () => (++value1, false), arg2, value).then(() => value1);
    }).then(arg3);
  }
  ['sortBy'](arg22, arg5) {
    const value2 = arg22.split('.').reverse(),
      value32 = value2[0],
      value7 = value2.length - 1;
    function fn1(arg, arg1) {
      if (arg1) return fn1(arg[value2[arg1]], arg1 - 1);
      return arg[value32];
    }
    var value6 = "next" === this._ctx.dir ? 1 : -1;
    function fn4(arg1, arg2) {
      var value = fn1(arg1, value7),
        value3 = fn1(arg2, value7);
      if (value < value3) return -value6;
      return value > value3 ? value6 : 0;
    }
    return this.toArray(function (arg) {
      return arg.sort(fn4);
    }).then(arg5);
  }
  ['toArray'](arg2) {
    return this._read(arg1 => {
      var value2 = this._ctx;
      if ("next" === value2.dir && Si(value2, true) && value2.limit > 0) {
        const {
            valueMapper: value1
          } = value2,
          value = Oi(value2, value2.table.core.schema);
        return value2.table.core.query({
          trans: arg1,
          limit: value2.limit,
          values: true,
          query: {
            index: value,
            range: value2.range
          }
        }).then(({
          result: arg
        }) => value1 ? arg.map(value1) : arg);
      }
      {
        const value = [];
        return Ki(value2, arg => value.push(arg), arg1, value2.table.core).then(() => value);
      }
    }, arg2);
  }
  ["offset"](arg2) {
    var value1 = this._ctx;
    arg2 <= 0 || (value1.offset += arg2, Si(value1) ? Di(value1, () => {
      var value = arg2;
      return (arg1, arg) => 0 === value || (1 === value ? (--value, false) : (arg(() => {
        arg1.advance(value);
        value = 0;
      }), false));
    }) : Di(value1, () => {
      var value = arg2;
      return () => --value < 0;
    }));
    return this;
  }
  ['limit'](arg3) {
    this._ctx.limit = Math.min(this._ctx.limit, arg3);
    Di(this._ctx, () => {
      var value = arg3;
      return function (arg1, arg2, arg) {
        --value <= 0 && arg2(arg);
        return value >= 0;
      };
    }, true);
    return this;
  }
  ["until"](arg3, arg12) {
    Ui(this._ctx, function (arg, arg2, arg1) {
      return !arg3(arg.value) || (arg2(arg1), arg12);
    });
    return this;
  }
  ['first'](arg2) {
    return this.limit(1).toArray(function (arg) {
      return arg[0];
    }).then(arg2);
  }
  ['last'](arg) {
    return this.reverse().first(arg);
  }
  ["filter"](arg2) {
    var value, value1;
    Ui(this._ctx, function (arg) {
      return arg2(arg.value);
    });
    value = this._ctx;
    value1 = arg2;
    value.isMatch = bi(value.isMatch, value1);
    return this;
  }
  ["and"](arg) {
    return this.filter(arg);
  }
  ['or'](arg) {
    return new this.db.WhereClause(this._ctx.table, arg, this);
  }
  ['reverse']() {
    this._ctx.dir = "prev" === this._ctx.dir ? 'next' : "prev";
    this._ondirectionchange && this._ondirectionchange(this._ctx.dir);
    return this;
  }
  ["desc"]() {
    return this.reverse();
  }
  ["eachKey"](arg2) {
    var value1 = this._ctx;
    value1.keysOnly = !value1.isMatch;
    return this.each(function (arg, arg1) {
      arg2(arg1.key, arg1);
    });
  }
  ['eachUniqueKey'](arg) {
    this._ctx.unique = 'unique';
    return this.eachKey(arg);
  }
  ["eachPrimaryKey"](arg2) {
    var value1 = this._ctx;
    value1.keysOnly = !value1.isMatch;
    return this.each(function (arg1, arg) {
      arg2(arg.primaryKey, arg);
    });
  }
  ["keys"](arg2) {
    var value1 = this._ctx;
    value1.keysOnly = !value1.isMatch;
    var value = [];
    return this.each(function (arg1, arg) {
      value.push(arg.key);
    }).then(function () {
      return value;
    }).then(arg2);
  }
  ["primaryKeys"](arg12) {
    var value2 = this._ctx;
    if ("next" === value2.dir && Si(value2, true) && value2.limit > 0) return this._read(arg1 => {
      var value = Oi(value2, value2.table.core.schema);
      return value2.table.core.query({
        trans: arg1,
        values: false,
        limit: value2.limit,
        query: {
          index: value,
          range: value2.range
        }
      });
    }).then(({
      result: arg
    }) => arg).then(arg12);
    value2.keysOnly = !value2.isMatch;
    var value22 = [];
    return this.each(function (arg, arg1) {
      value22.push(arg1.primaryKey);
    }).then(function () {
      return value22;
    }).then(arg12);
  }
  ['uniqueKeys'](arg) {
    this._ctx.unique = 'unique';
    return this.keys(arg);
  }
  ["firstKey"](arg2) {
    return this.limit(1).keys(function (arg) {
      return arg[0];
    }).then(arg2);
  }
  ["lastKey"](arg) {
    return this.reverse().firstKey(arg);
  }
  ["distinct"]() {
    var value1 = this._ctx,
      value22 = value1.index && value1.table.schema.idxByName[value1.index];
    if (!value22 || !value22.multi) return this;
    var value3 = {};
    Ui(this._ctx, function (arg1) {
      var value2 = arg1.primaryKey.toString(),
        value = Ws(value3, value2);
      value3[value2] = true;
      return !value;
    });
    return this;
  }
  ['modify'](arg4) {
    var value14 = this._ctx;
    return this._write(arg8 => {
      var value9;
      if ('function' == typeof arg4) value9 = arg4;else {
        var value62 = Fs(arg4),
          value42 = value62.length;
        value9 = function (arg1) {
          for (var value4 = false, value3 = 0; value3 < value42; ++value3) {
            var value = value62[value3],
              value2 = arg4[value];
            on(arg1, value) !== value2 && (un(arg1, value, value2), value4 = true);
          }
          return value4;
        };
      }
      const value13 = value14.table.core,
        {
          outbound: value72,
          extractKey: value10
        } = value13.schema.primaryKey,
        value32 = this.db._options.modifyChunkSize || 200,
        value52 = [];
      let value11 = 0;
      const value8 = [],
        value23 = (arg2, arg) => {
          const {
            failures: value3,
            numFailures: value1
          } = arg;
          value11 += arg2 - value1;
          for (let value of Fs(value3)) value52.push(value3[value]);
        };
      return this.clone().primaryKeys().then(arg12 => {
        const value7 = arg1 => {
          const value6 = Math.min(value32, arg12.length - arg1);
          return value13.getMany({
            trans: arg8,
            keys: arg12.slice(arg1, arg1 + value6),
            cache: "immutable"
          }).then(arg3 => {
            const value12 = [],
              value5 = [],
              value4 = value72 ? [] : null,
              value3 = [];
            for (let value2 = 0; value2 < value6; ++value2) {
              const value1 = arg3[value2],
                value = {
                  value: mn(value1),
                  primKey: arg12[arg1 + value2]
                };
              false !== value9.call(value, value.value, value) && (null == value.value ? value3.push(arg12[arg1 + value2]) : value72 || 0 === Ii(value10(value1), value10(value.value)) ? (value5.push(value.value), value72 && value4.push(arg12[arg1 + value2])) : (value3.push(arg12[arg1 + value2]), value12.push(value.value)));
            }
            const value22 = Si(value14) && value14.limit === 1 / 0 && ("function" != typeof arg4 || arg4 === Ti) && {
              index: value14.index,
              range: value14.range
            };
            return Promise.resolve(value12.length > 0 && value13.mutate({
              trans: arg8,
              type: 'add',
              values: value12
            }).then(arg => {
              for (let value in arg.failures) value3.splice(parseInt(value), 1);
              value23(value12.length, arg);
            })).then(() => (value5.length > 0 || value22 && "object" == typeof arg4) && value13.mutate({
              trans: arg8,
              type: 'put',
              keys: value4,
              values: value5,
              criteria: value22,
              changeSpec: "function" != typeof arg4 && arg4
            }).then(arg => value23(value5.length, arg))).then(() => (value3.length > 0 || value22 && arg4 === Ti) && value13.mutate({
              trans: arg8,
              type: 'delete',
              keys: value3,
              criteria: value22
            }).then(arg => value23(value3.length, arg))).then(() => arg12.length > arg1 + value6 && value7(arg1 + value32));
          });
        };
        return value7(0).then(() => {
          if (value52.length > 0) throw new En("Error modifying one or more objects", value52, value11, value8);
          return arg12.length;
        });
      });
    });
  }
  ["delete"]() {
    var value3 = this._ctx,
      value1 = value3.range;
    if (Si(value3) && (value3.isPrimKey && !gi || 3 === value1.type)) return this._write(arg12 => {
      const {
          primaryKey: value2
        } = value3.table.core.schema,
        value = value1;
      return value3.table.core.count({
        trans: arg12,
        query: {
          index: value2,
          range: value
        }
      }).then(arg4 => value3.table.core.mutate({
        trans: arg12,
        type: "deleteRange",
        range: value
      }).then(({
        failures: arg22,
        lastResult: arg3,
        results: arg1,
        numFailures: arg2
      }) => {
        if (arg2) throw new En("Could not delete some values", Object.keys(arg22).map(arg => arg22[arg]), arg4 - arg2);
        return arg4 - arg2;
      }));
    });
    return this.modify(Ti);
  }
}
const Ti = (arg1, arg) => arg.value = null;
function Ri(arg1, arg) {
  if (arg1 < arg) return -1;
  return arg1 === arg ? 0 : 1;
}
function Ei(arg1, arg) {
  if (arg1 > arg) return -1;
  return arg1 === arg ? 0 : 1;
}
function Bi(arg2, arg1, arg) {
  var value3 = arg2 instanceof en ? new arg2.Collection(arg2) : arg2;
  value3._ctx.error = arg ? new arg(arg1) : new TypeError(arg1);
  return value3;
}
function Li(arg) {
  return new arg.Collection(arg, () => Gi('')).limit(0);
}
function Vi(arg1, arg2, arg6, arg5, arg9, arg) {
  for (var value4 = Math.min(arg1.length, arg5.length), value8 = -1, value3 = 0; value3 < value4; ++value3) {
    var value7 = arg2[value3];
    if (value7 !== arg5[value3]) return arg9(arg1[value3], arg6[value3]) < 0 ? arg1.substr(0, value3) + arg6[value3] + arg6.substr(value3 + 1) : arg9(arg1[value3], arg5[value3]) < 0 ? arg1.substr(0, value3) + arg5[value3] + arg6.substr(value3 + 1) : value8 >= 0 ? arg1.substr(0, value8) + arg2[value8] + arg6.substr(value8 + 1) : null;
    arg9(arg1[value3], value7) < 0 && (value8 = value3);
  }
  if (value4 < arg5.length && 'next' === arg) return arg1 + arg6.substr(arg1.length);
  if (value4 < arg1.length && "prev" === arg) return arg1.substr(0, arg6.length);
  if (value8 < 0) return null;
  return arg1.substr(0, value8) + arg5[value8] + arg6.substr(value8 + 1);
}
function Fi(arg3, arg72, arg122, arg10) {
  var value9,
    value6,
    value8,
    value13,
    value12,
    value2,
    value32,
    value14 = arg122.length;
  if (!arg122.every(arg => "string" == typeof arg)) return Bi(arg3, li);
  function fn4(arg12) {
    value9 = function (arg2) {
      if ("next" === arg2) return arg => arg.toUpperCase();
      return arg => arg.toLowerCase();
    }(arg12);
    value6 = function (arg2) {
      if ('next' === arg2) return arg => arg.toLowerCase();
      return arg => arg.toUpperCase();
    }(arg12);
    value8 = "next" === arg12 ? Ri : Ei;
    var value = arg122.map(function (arg) {
      return {
        lower: value6(arg),
        upper: value9(arg)
      };
    }).sort(function (arg, arg1) {
      return value8(arg.lower, arg1.lower);
    });
    value13 = value.map(function (arg) {
      return arg.upper;
    });
    value12 = value.map(function (arg) {
      return arg.lower;
    });
    value2 = arg12;
    value32 = 'next' === arg12 ? '' : arg10;
  }
  fn4("next");
  var value11 = new arg3.Collection(arg3, () => Ni(value13[0], value12[value14 - 1] + arg10));
  value11._ondirectionchange = function (arg) {
    fn4(arg);
  };
  var value52 = 0;
  value11._addAlgorithm(function (arg6, arg2, arg7) {
    var value1 = arg6.key;
    if ("string" != typeof value1) return false;
    var value3 = value6(value1);
    if (arg72(value3, value12, value52)) return true;
    for (var value5 = null, value4 = value52; value4 < value14; ++value4) {
      var value = Vi(value1, value3, value13[value4], value12[value4], value8, value2);
      if (null === value && null === value5) value52 = value4 + 1;else (null === value5 || value8(value5, value) > 0) && (value5 = value);
    }
    arg2(null !== value5 ? function () {
      arg6.continue(value5 + value32);
    } : arg7);
    return false;
  });
  return value11;
}
function Ni(arg2, arg, arg1, arg3) {
  return {
    type: 2,
    lower: arg2,
    upper: arg,
    lowerOpen: arg1,
    upperOpen: arg3
  };
}
function Gi(arg) {
  return {
    type: 1,
    lower: arg,
    upper: arg
  };
}
class en {
  get ["Collection"]() {
    return this._ctx.table.db.Collection;
  }
  ['between'](arg3, arg2, arg, arg1) {
    arg = false !== arg;
    arg1 = true === arg1;
    try {
      if (this._cmp(arg3, arg2) > 0 || 0 === this._cmp(arg3, arg2) && (arg || arg1) && (!arg || !arg1)) return Li(this);
      return new this.Collection(this, () => Ni(arg3, arg2, !arg, !arg1));
    } catch (value) {
      return Bi(this, ci);
    }
  }
  ["equals"](arg) {
    if (null == arg) return Bi(this, ci);
    return new this.Collection(this, () => Gi(arg));
  }
  ["above"](arg) {
    if (null == arg) return Bi(this, ci);
    return new this.Collection(this, () => Ni(arg, void 0, true));
  }
  ["aboveOrEqual"](arg) {
    if (null == arg) return Bi(this, ci);
    return new this.Collection(this, () => Ni(arg, void 0, false));
  }
  ["below"](arg) {
    if (null == arg) return Bi(this, ci);
    return new this.Collection(this, () => Ni(void 0, arg, false, true));
  }
  ['belowOrEqual'](arg) {
    if (null == arg) return Bi(this, ci);
    return new this.Collection(this, () => Ni(void 0, arg));
  }
  ['startsWith'](arg) {
    if ("string" != typeof arg) return Bi(this, li);
    return this.between(arg, arg + oi, true, true);
  }
  ['startsWithIgnoreCase'](arg2) {
    if ('' === arg2) return this.startsWith(arg2);
    return Fi(this, (arg, arg1) => 0 === arg.indexOf(arg1[0]), [arg2], oi);
  }
  ["equalsIgnoreCase"](arg2) {
    return Fi(this, (arg, arg1) => arg === arg1[0], [arg2], '');
  }
  ["anyOfIgnoreCase"]() {
    var value = kn.apply(vn, arguments);
    if (0 === value.length) return Li(this);
    return Fi(this, (arg1, arg) => -1 !== arg.indexOf(arg1), value, '');
  }
  ["startsWithAnyOfIgnoreCase"]() {
    var value = kn.apply(vn, arguments);
    if (0 === value.length) return Li(this);
    return Fi(this, (arg1, arg2) => arg2.some(arg => 0 === arg1.indexOf(arg)), value, oi);
  }
  ["anyOf"]() {
    const value22 = kn.apply(vn, arguments);
    let value1 = this._cmp;
    try {
      value22.sort(value1);
    } catch (value) {
      return Bi(this, ci);
    }
    if (0 === value22.length) return Li(this);
    const value2 = new this.Collection(this, () => Ni(value22[0], value22[value22.length - 1]));
    value2._ondirectionchange = arg => {
      value1 = "next" === arg ? this._ascending : this._descending;
      value22.sort(value1);
    };
    let value32 = 0;
    value2._addAlgorithm((arg2, arg, arg1) => {
      const value3 = arg2.key;
      for (; value1(value3, value22[value32]) > 0;) {
        ++value32;
        if (value32 === value22.length) {
          arg(arg1);
          return false;
        }
      }
      return 0 === value1(value3, value22[value32]) || (arg(() => {
        arg2.continue(value22[value32]);
      }), false);
    });
    return value2;
  }
  ["notEqual"](arg) {
    return this.inAnyRange([[ui, arg], [arg, this.db._maxKey]], {
      includeLowers: false,
      includeUppers: false
    });
  }
  ["noneOf"]() {
    const value1 = kn.apply(vn, arguments);
    if (0 === value1.length) return new this.Collection(this);
    try {
      value1.sort(this._ascending);
    } catch (value) {
      return Bi(this, ci);
    }
    const value2 = value1.reduce((arg, arg1) => arg ? arg.concat([[arg[arg.length - 1][1], arg1]]) : [[ui, arg1]], null);
    value2.push([value1[value1.length - 1], this.db._maxKey]);
    return this.inAnyRange(value2, {
      includeLowers: false,
      includeUppers: false
    });
  }
  ["inAnyRange"](arg12, arg16) {
    const value4 = this._cmp,
      value10 = this._ascending,
      value13 = this._descending,
      value32 = this._min,
      value22 = this._max;
    if (0 === arg12.length) return Li(this);
    if (!arg12.every(arg => void 0 !== arg[0] && void 0 !== arg[1] && value10(arg[0], arg[1]) <= 0)) return Bi(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Fn.InvalidArgument);
    const value8 = !arg16 || false !== arg16.includeLowers,
      value5 = arg16 && true === arg16.includeUppers;
    let value12,
      value7 = value10;
    function fn6(arg, arg1) {
      return value7(arg[0], arg1[0]);
    }
    try {
      value12 = arg12.reduce(function (arg3, arg) {
        let value2 = 0,
          value1 = arg3.length;
        for (; value2 < value1; ++value2) {
          const value = arg3[value2];
          if (value4(arg[0], value[1]) < 0 && value4(arg[1], value[0]) > 0) {
            value[0] = value32(value[0], arg[0]);
            value[1] = value22(value[1], arg[1]);
            break;
          }
        }
        value2 === value1 && arg3.push(arg);
        return arg3;
      }, []);
      value12.sort(fn6);
    } catch (value) {
      return Bi(this, ci);
    }
    let value9 = 0;
    const value11 = value5 ? arg => value10(arg, value12[value9][1]) > 0 : arg => value10(arg, value12[value9][1]) >= 0,
      value42 = value8 ? arg => value13(arg, value12[value9][0]) > 0 : arg => value13(arg, value12[value9][0]) >= 0;
    let value14 = value11;
    const value15 = new this.Collection(this, () => Ni(value12[0][0], value12[value12.length - 1][1], !value8, !value5));
    value15._ondirectionchange = arg => {
      if ("next" === arg) {
        value14 = value11;
        value7 = value10;
      } else {
        value14 = value42;
        value7 = value13;
      }
      value12.sort(fn6);
    };
    value15._addAlgorithm((arg2, arg4, arg1) => {
      for (var value = arg2.key; value14(value);) {
        ++value9;
        if (value9 === value12.length) {
          arg4(arg1);
          return false;
        }
      }
      return !(value3 = value, (value11(value3) || value42(value3)) && (0 === this._cmp(value, value12[value9][1]) || 0 === this._cmp(value, value12[value9][0]) || arg4(() => {
        if (value7 === value10) arg2.continue(value12[value9][0]);else arg2.continue(value12[value9][1]);
      }), 1));
      var value3;
    });
    return value15;
  }
  ["startsWithAnyOf"]() {
    const value = kn.apply(vn, arguments);
    if (value.every(arg => "string" == typeof arg)) return 0 === value.length ? Li(this) : this.inAnyRange(value.map(arg => [arg, arg + oi]));
    return Bi(this, 'startsWithAnyOf()\x20only\x20works\x20with\x20strings');
  }
}
function zi(arg2) {
  return Ba(function (arg) {
    Hi(arg);
    arg2(arg.target.error);
    return false;
  });
}
function Hi(arg) {
  arg.stopPropagation && arg.stopPropagation();
  arg.preventDefault && arg.preventDefault();
}
const Wi = "storagemutated",
  ji = "x-storagemutated-1",
  Yi = ki(null, Wi);
class an {
  ["_lock"]() {
    rn(!wa.global);
    ++this._reculock;
    1 !== this._reculock || wa.global || (wa.lockOwnerFor = this);
    return this;
  }
  ["_unlock"]() {
    rn(!wa.global);
    if (0 == --this._reculock) for (wa.global || (wa.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();) {
      var value2 = this._blockedFuncs.shift();
      try {
        Za(value2[1], value2[0]);
      } catch (value) {}
    }
    return this;
  }
  ["_locked"]() {
    return this._reculock && wa.lockOwnerFor !== this;
  }
  ["create"](arg1) {
    if (!this.mode) return this;
    const value2 = this.db.idbdb,
      value = this.db._state.dbOpenError;
    rn(!this.idbtrans);
    if (!arg1 && !value2) switch (value && value.name) {
      case "DatabaseClosedError":
        throw new Fn.DatabaseClosed(value);
      case "MissingAPIError":
        throw new Fn.MissingAPI(value.message, value);
      default:
        throw new Fn.OpenFailed(value);
    }
    if (!this.active) throw new Fn.TransactionInactive();
    rn(null === this._completion._state);
    (arg1 = this.idbtrans = arg1 || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }) : value2.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }))).onerror = Ba(arg => {
      Hi(arg);
      this._reject(arg1.error);
    });
    arg1.onabort = Ba(arg => {
      Hi(arg);
      this.active && this._reject(new Fn.Abort(arg1.error));
      this.active = false;
      this.on('abort').fire(arg);
    });
    arg1.oncomplete = Ba(() => {
      this.active = false;
      this._resolve();
      "mutatedParts" in arg1 && Yi.storagemutated.fire(arg1.mutatedParts);
    });
    return this;
  }
  ['_promise'](arg22, arg3, arg32) {
    if ("readwrite" === arg22 && 'readwrite' !== this.mode) return ni(new Fn.ReadOnly("Transaction is readonly"));
    if (!this.active) return ni(new Fn.TransactionInactive());
    if (this._locked()) return new ka((arg, arg1) => {
      this._blockedFuncs.push([() => {
        this._promise(arg22, arg3, arg32).then(arg, arg1);
      }, wa]);
    });
    if (arg32) return Ha(() => {
      var value2 = new ka((arg2, arg1) => {
        this._lock();
        const value = arg3(arg2, arg1, this);
        value && value.then && value.then(arg2, arg1);
      });
      value2.finally(() => this._unlock());
      value2._lib = true;
      return value2;
    });
    var value1 = new ka((arg, arg1) => {
      var value2 = arg3(arg, arg1, this);
      value2 && value2.then && value2.then(arg, arg1);
    });
    value1._lib = true;
    return value1;
  }
  ["_root"]() {
    if (this.parent) return this.parent._root();
    return this;
  }
  ["waitFor"](arg4) {
    var value22 = this._root();
    const value3 = ka.resolve(arg4);
    if (value22._waitingFor) value22._waitingFor = value22._waitingFor.then(() => value3);else {
      value22._waitingFor = value3;
      value22._waitingQueue = [];
      var value2 = value22.idbtrans.objectStore(value22.storeNames[0]);
      !function value() {
        for (++value22._spinCount; value22._waitingQueue.length;) value22._waitingQueue.shift()();
        value22._waitingFor && (value2.get(-1 / 0).onsuccess = value);
      }();
    }
    var value1 = value22._waitingFor;
    return new ka((arg2, arg1) => {
      value3.then(arg => value22._waitingQueue.push(Ba(arg2.bind(null, arg))), arg => value22._waitingQueue.push(Ba(arg1.bind(null, arg)))).finally(() => {
        value22._waitingFor === value1 && (value22._waitingFor = null);
      });
    });
  }
  ["abort"]() {
    this.active && (this.active = false, this.idbtrans && this.idbtrans.abort(), this._reject(new Fn.Abort()));
  }
  ["table"](arg) {
    const value3 = this._memoizedTables || (this._memoizedTables = {});
    if (Ws(value3, arg)) return value3[arg];
    const value2 = this.schema[arg];
    if (!value2) throw new Fn.NotFound("Table " + arg + '\x20not\x20part\x20of\x20transaction');
    const value1 = new this.db.Table(arg, value2, this);
    value1.core = this.db.core.table(arg);
    value3[arg] = value1;
    return value1;
  }
}
function $i(arg4, arg3, arg2, arg5, arg6, arg, arg1) {
  return {
    name: arg4,
    keyPath: arg3,
    unique: arg2,
    multi: arg5,
    auto: arg6,
    compound: arg,
    src: (arg2 && !arg1 ? '&' : '') + (arg5 ? '*' : '') + (arg6 ? '++' : '') + qi(arg3)
  };
}
function qi(arg) {
  if ("string" == typeof arg) return arg;
  if (arg) return '[' + [].join.call(arg, '+') + ']';
  return '';
}
function Ji(arg22, arg1, arg2) {
  return {
    name: arg22,
    primKey: arg1,
    indexes: arg2,
    mappedClass: null,
    idxByName: nn(arg2, arg => [arg.name, arg])
  };
}
let Xi = arg => {
  try {
    arg.only([[]]);
    Xi = () => [[]];
    return [[]];
  } catch (value) {
    Xi = () => oi;
    return oi;
  }
};
function Zi(arg2) {
  if (null == arg2) return () => {};
  if ('string' == typeof arg2) return 1 === (value1 = arg2).split('.').length ? arg => arg[value1] : arg => on(arg, value1);
  return arg => on(arg, arg2);
  var value1;
}
function Qi(arg) {
  return [].slice.call(arg);
}
let eo = 0;
function to(arg) {
  if (null == arg) return ":id";
  if ('string' == typeof arg) return arg;
  return '[' + arg.join('+') + ']';
}
function ro({
  _novip: arg8
}, arg26) {
  const value16 = arg26.db,
    value36 = function (arg25, arg43, {
      IDBKeyRange: arg16,
      indexedDB: arg52
    }, arg63) {
      const value15 = (value35 = function (arg15, arg24, arg62) {
        function fn2(arg4) {
          if (3 === arg4.type) return null;
          if (4 === arg4.type) throw new Error("Cannot convert never type to IDBKeyRange");
          const {
            lower: value3,
            upper: value2,
            lowerOpen: value,
            upperOpen: value1
          } = arg4;
          if (void 0 === value3) return void 0 === value2 ? null : arg24.upperBound(value2, !!value1);
          if (void 0 === value2) return arg24.lowerBound(value3, !!value);
          return arg24.bound(value3, value2, !!value, !!value1);
        }
        const {
            schema: value53,
            hasGetAll: value43
          } = function (arg4, arg22) {
            const value13 = Qi(arg4.objectStoreNames);
            return {
              schema: {
                name: arg4.name,
                tables: value13.map(arg => arg22.objectStore(arg)).map(arg3 => {
                  const {
                      keyPath: value6,
                      autoIncrement: value52
                    } = arg3,
                    value2 = Ns(value6),
                    value12 = null == value6,
                    value42 = {},
                    value32 = {
                      name: arg3.name,
                      primaryKey: {
                        name: null,
                        isPrimaryKey: true,
                        outbound: value12,
                        compound: value2,
                        keyPath: value6,
                        autoIncrement: value52,
                        unique: true,
                        extractKey: Zi(value6)
                      },
                      indexes: Qi(arg3.indexNames).map(arg => arg3.index(arg)).map(arg2 => {
                        const {
                            name: value,
                            unique: value5,
                            multiEntry: value1,
                            keyPath: value4
                          } = arg2,
                          value3 = {
                            name: value,
                            compound: Ns(value4),
                            keyPath: value4,
                            unique: value5,
                            multiEntry: value1,
                            extractKey: Zi(value4)
                          };
                        value42[to(value4)] = value3;
                        return value3;
                      }),
                      getIndexByKeyPath: arg => value42[to(arg)]
                    };
                  value42[":id"] = value32.primaryKey;
                  null != value6 && (value42[to(value6)] = value32.primaryKey);
                  return value32;
                })
              },
              hasGetAll: value13.length > 0 && "getAll" in arg22.objectStore(value13[0]) && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
            };
          }(arg15, arg62),
          value34 = value53.tables.map(arg5 => function (arg14) {
            const value14 = arg14.name;
            return {
              name: value14,
              schema: arg14,
              mutate: function ({
                trans: arg32,
                type: arg12,
                keys: arg42,
                values: arg4,
                range: arg22
              }) {
                return new Promise((arg6, arg3) => {
                  arg6 = Ba(arg6);
                  const value7 = arg32.objectStore(value14),
                    value5 = null == value7.keyPath,
                    value8 = "put" === arg12 || 'add' === arg12;
                  if (!value8 && "delete" !== arg12 && "deleteRange" !== arg12) throw new Error("Invalid operation type: " + arg12);
                  const {
                    length: value22
                  } = arg42 || arg4 || {
                    length: 1
                  };
                  if (arg42 && arg4 && arg42.length !== arg4.length) throw new Error("Given keys array must have same length as given values array.");
                  if (0 === value22) return arg6({
                    numFailures: 0,
                    failures: {},
                    results: [],
                    lastResult: void 0
                  });
                  let value4;
                  const value12 = [],
                    value3 = [];
                  let value10 = 0;
                  const value11 = arg => {
                    ++value10;
                    Hi(arg);
                  };
                  if ("deleteRange" === arg12) {
                    if (4 === arg22.type) return arg6({
                      numFailures: value10,
                      failures: value3,
                      results: [],
                      lastResult: void 0
                    });
                    if (3 === arg22.type) value12.push(value4 = value7.clear());else value12.push(value4 = value7.delete(fn2(arg22)));
                  } else {
                    const [value2, value1] = value8 ? value5 ? [arg4, arg42] : [arg4, null] : [arg42, null];
                    if (value8) {
                      for (let value = 0; value < value22; ++value) {
                        value12.push(value4 = value1 && void 0 !== value1[value] ? value7[arg12](value2[value], value1[value]) : value7[arg12](value2[value]));
                        value4.onerror = value11;
                      }
                    } else {
                      for (let value = 0; value < value22; ++value) {
                        value12.push(value4 = value7[arg12](value2[value]));
                        value4.onerror = value11;
                      }
                    }
                  }
                  const value9 = arg2 => {
                    const value1 = arg2.target.result;
                    value12.forEach((arg, arg1) => null != arg.error && (value3[arg1] = arg.error));
                    arg6({
                      numFailures: value10,
                      failures: value3,
                      results: 'delete' === arg12 ? arg42 : value12.map(arg => arg.result),
                      lastResult: value1
                    });
                  };
                  value4.onerror = arg => {
                    value11(arg);
                    value9(arg);
                  };
                  value4.onsuccess = value9;
                });
              },
              getMany: ({
                trans: arg,
                keys: arg13
              }) => new Promise((arg9, arg12) => {
                arg9 = Ba(arg9);
                const value6 = arg.objectStore(value14),
                  value8 = arg13.length,
                  value5 = new Array(value8);
                let value3,
                  value4 = 0,
                  value7 = 0;
                const value22 = arg1 => {
                    const value = arg1.target;
                    value5[value._pos] = value.result;
                    ++value7 === value4 && arg9(value5);
                  },
                  value2 = zi(arg12);
                for (let value = 0; value < value8; ++value) null != arg13[value] && (value3 = value6.get(arg13[value]), value3._pos = value, value3.onsuccess = value22, value3.onerror = value2, ++value4);
                0 === value4 && arg9(value5);
              }),
              get: ({
                trans: arg3,
                key: arg1
              }) => new Promise((arg2, arg22) => {
                arg2 = Ba(arg2);
                const value1 = arg3.objectStore(value14).get(arg1);
                value1.onsuccess = arg => arg2(arg.target.result);
                value1.onerror = zi(arg22);
              }),
              query: function (arg3) {
                return arg2 => new Promise((arg4, arg7) => {
                  arg4 = Ba(arg4);
                  const {
                      trans: value12,
                      values: value8,
                      limit: value6,
                      query: value11
                    } = arg2,
                    value10 = value6 === 1 / 0 ? void 0 : value6,
                    {
                      index: value5,
                      range: value32
                    } = value11,
                    value23 = value12.objectStore(value14),
                    value9 = value5.isPrimaryKey ? value23 : value23.index(value5.name),
                    value3 = fn2(value32);
                  if (0 === value6) return arg4({
                    result: []
                  });
                  if (arg3) {
                    const value = value8 ? value9.getAll(value3, value10) : value9.getAllKeys(value3, value10);
                    value.onsuccess = arg => arg4({
                      result: arg.target.result
                    });
                    value.onerror = zi(arg7);
                  } else {
                    let value22 = 0;
                    const value2 = value8 || !("openKeyCursor" in value9) ? value9.openCursor(value3) : value9.openKeyCursor(value3),
                      value1 = [];
                    value2.onsuccess = arg1 => {
                      const value = value2.result;
                      if (value) {
                        value1.push(value8 ? value.value : value.primaryKey);
                        if (++value22 === value6) return arg4({
                          result: value1
                        });
                        return void value.continue();
                      }
                      return arg4({
                        result: value1
                      });
                    };
                    value2.onerror = zi(arg7);
                  }
                });
              }(value43),
              openCursor: function ({
                trans: arg32,
                values: arg12,
                query: arg4,
                reverse: arg42,
                unique: arg23
              }) {
                return new Promise((arg7, arg6) => {
                  arg7 = Ba(arg7);
                  const {
                      index: value13,
                      range: value22
                    } = arg4,
                    value42 = arg32.objectStore(value14),
                    value6 = value13.isPrimaryKey ? value42 : value42.index(value13.name),
                    value52 = arg42 ? arg23 ? "prevunique" : "prev" : arg23 ? "nextunique" : "next",
                    value33 = arg12 || !('openKeyCursor' in value6) ? value6.openCursor(fn2(value22), value52) : value6.openKeyCursor(fn2(value22), value52);
                  value33.onerror = zi(arg6);
                  value33.onsuccess = Ba(arg22 => {
                    const value32 = value33.result;
                    if (!value32) return void arg7(null);
                    value32.___id = ++eo;
                    value32.done = false;
                    const value5 = value32.continue.bind(value32);
                    let value4 = value32.continuePrimaryKey;
                    value4 && (value4 = value4.bind(value32));
                    const value12 = value32.advance.bind(value32),
                      value3 = () => {
                        throw new Error('Cursor\x20not\x20stopped');
                      };
                    value32.trans = arg32;
                    value32.stop = value32.continue = value32.continuePrimaryKey = value32.advance = () => {
                      throw new Error("Cursor not started");
                    };
                    value32.fail = Ba(arg6);
                    value32.next = function () {
                      let value = 1;
                      return this.start(() => value-- ? this.continue() : this.stop()).then(() => this);
                    };
                    value32.start = arg3 => {
                      const value1 = new Promise((arg2, arg1) => {
                          arg2 = Ba(arg2);
                          value33.onerror = zi(arg1);
                          value32.fail = arg1;
                          value32.stop = arg => {
                            value32.stop = value32.continue = value32.continuePrimaryKey = value32.advance = value3;
                            arg2(arg);
                          };
                        }),
                        value2 = () => {
                          if (value33.result) try {
                            arg3();
                          } catch (value) {
                            value32.fail(value);
                          } else {
                            value32.done = true;
                            value32.start = () => {
                              throw new Error("Cursor behind last entry");
                            };
                            value32.stop();
                          }
                        };
                      value33.onsuccess = Ba(arg => {
                        value33.onsuccess = value2;
                        value2();
                      });
                      value32.continue = value5;
                      value32.continuePrimaryKey = value4;
                      value32.advance = value12;
                      value2();
                      return value1;
                    };
                    arg7(value32);
                  }, arg6);
                });
              },
              'count'({
                query: arg3,
                trans: arg12
              }) {
                const {
                  index: value22,
                  range: value32
                } = arg3;
                return new Promise((arg2, arg1) => {
                  const value5 = arg12.objectStore(value14),
                    value2 = value22.isPrimaryKey ? value5 : value5.index(value22.name),
                    value4 = fn2(value32),
                    value3 = value4 ? value2.count(value4) : value2.count();
                  value3.onsuccess = Ba(arg => arg2(arg.target.result));
                  value3.onerror = zi(arg1);
                });
              }
            };
          }(arg5)),
          value72 = {};
        value34.forEach(arg => value72[arg.name] = arg);
        return {
          stack: 'dbcore',
          transaction: arg15.transaction.bind(arg15),
          'table'(arg) {
            if (!value72[arg]) throw new Error("Table '" + arg + "' not found");
            return value72[arg];
          },
          MIN_KEY: -1 / 0,
          MAX_KEY: Xi(arg24),
          schema: value53
        };
      }(arg43, arg16, arg63), arg25.dbcore.reduce((arg1, {
        create: arg
      }) => ({
        ...arg1,
        ...arg(arg1)
      }), value35));
      var value35;
      return {
        dbcore: value15
      };
    }(arg8._middlewares, value16, arg8._deps, arg26);
  arg8.core = value36.dbcore;
  arg8.tables.forEach(arg2 => {
    const value1 = arg2.name;
    arg8.core.schema.tables.some(arg => arg.name === value1) && (arg2.core = arg8.core.table(value1), arg8[value1] instanceof arg8.Table && (arg8[value1].core = arg2.core));
  });
}
function so({
  _novip: arg13
}, arg3, arg2, arg22) {
  arg2.forEach(arg12 => {
    const value2 = arg22[arg12];
    arg3.forEach(arg1 => {
      const value = Xs(arg1, arg12);
      (!value || "value" in value && void 0 === value.value) && (arg1 === arg13.Transaction.prototype || arg1 instanceof arg13.Transaction ? $s(arg1, arg12, {
        'get'() {
          return this.table(arg12);
        },
        'set'(arg) {
          Ys(this, arg12, {
            value: arg,
            writable: true,
            configurable: true,
            enumerable: true
          });
        }
      }) : arg1[arg12] = new arg13.Table(arg12, value2));
    });
  });
}
function no({
  _novip: arg1
}, arg2) {
  arg2.forEach(arg => {
    for (let value in arg) arg[value] instanceof arg1.Table && delete arg[value];
  });
}
function ao(arg, arg1) {
  return arg._cfg.version - arg1._cfg.version;
}
function io(arg, arg2) {
  const value32 = {
    del: [],
    add: [],
    change: []
  };
  let value14;
  for (value14 in arg) arg2[value14] || value32.del.push(value14);
  for (value14 in arg2) {
    const value4 = arg[value14],
      value13 = arg2[value14];
    if (value4) {
      const value3 = {
        name: value14,
        def: value13,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ('' + (value4.primKey.keyPath || '') != '' + (value13.primKey.keyPath || '') || value4.primKey.auto !== value13.primKey.auto && !hi) {
        value3.recreate = true;
        value32.change.push(value3);
      } else {
        const value12 = value4.idxByName,
          value22 = value13.idxByName;
        let value2;
        for (value2 in value12) value22[value2] || value3.del.push(value2);
        for (value2 in value22) {
          const value = value12[value2],
            value1 = value22[value2];
          if (value) value.src !== value1.src && value3.change.push(value1);else value3.add.push(value1);
        }
        (value3.del.length > 0 || value3.add.length > 0 || value3.change.length > 0) && value32.change.push(value3);
      }
    } else value32.add.push([value14, value13]);
  }
  return value32;
}
function oo(arg2, arg4, arg1, arg3) {
  const value = arg2.db.createObjectStore(arg4, arg1.keyPath ? {
    keyPath: arg1.keyPath,
    autoIncrement: arg1.auto
  } : {
    autoIncrement: arg1.auto
  });
  arg3.forEach(arg => uo(value, arg));
  return value;
}
function uo(arg1, arg) {
  arg1.createIndex(arg.name, arg.keyPath, {
    unique: arg.unique,
    multiEntry: arg.multi
  });
}
function co(arg1, arg2, arg) {
  const value32 = {};
  Qs(arg2.objectStoreNames, 0).forEach(arg3 => {
    const value4 = arg.objectStore(arg3);
    let value1 = value4.keyPath;
    const value22 = $i(qi(value1), value1 || '', false, false, !!value4.autoIncrement, value1 && 'string' != typeof value1, true),
      value3 = [];
    for (let value2 = 0; value2 < value4.indexNames.length; ++value2) {
      const value = value4.index(value4.indexNames[value2]);
      value1 = value.keyPath;
      var value5 = $i(value.name, value1, !!value.unique, !!value.multiEntry, false, value1 && "string" != typeof value1, false);
      value3.push(value5);
    }
    value32[arg3] = Ji(arg3, value22, value3);
  });
  return value32;
}
function lo({
  _novip: arg3
}, arg1, arg) {
  const value23 = arg.db.objectStoreNames;
  for (let value5 = 0; value5 < value23.length; ++value5) {
    const value12 = value23[value5],
      value4 = arg.objectStore(value12);
    arg3._hasGetAll = "getAll" in value4;
    for (let value3 = 0; value3 < value4.indexNames.length; ++value3) {
      const value1 = value4.indexNames[value3],
        value2 = value4.index(value1).keyPath,
        value22 = "string" == typeof value2 ? value2 : '[' + Qs(value2).join('+') + ']';
      if (arg1[value12]) {
        const value = arg1[value12].idxByName[value22];
        value && (value.name = value1, delete arg1[value12].idxByName[value22], arg1[value12].idxByName[value1] = value);
      }
    }
  }
  'undefined' != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && Vs.WorkerGlobalScope && Vs instanceof Vs.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (arg3._hasGetAll = false);
}
class On {
  ['_parseStoresSpec'](arg4, arg12) {
    Fs(arg4).forEach(arg2 => {
      if (null !== arg4[arg2]) {
        var value22 = arg4[arg2].split(',').map((arg1, arg3) => {
            const value = (arg1 = arg1.trim()).replace(/([&*]|\+\+)/g, ''),
              value2 = /^\[/.test(value) ? value.match(/^\[(.*)\]$/)[1].split('+') : value;
            return $i(value, value2 || null, /\&/.test(arg1), /\*/.test(arg1), /\+\+/.test(arg1), Ns(value2), 0 === arg3);
          }),
          value1 = value22.shift();
        if (value1.multi) throw new Fn.Schema("Primary key cannot be multi-valued");
        value22.forEach(arg => {
          if (arg.auto) throw new Fn.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!arg.keyPath) throw new Fn.Schema("Index must have a name and cannot be an empty string");
        });
        arg12[arg2] = Ji(arg2, value1, value22);
      }
    });
  }
  ["stores"](arg2) {
    const value = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? Gs(this._cfg.storesSource, arg2) : arg2;
    const value3 = value._versions,
      value4 = {};
    let value1 = {};
    value3.forEach(arg => {
      Gs(value4, arg._cfg.storesSource);
      value1 = arg._cfg.dbschema = {};
      arg._parseStoresSpec(value4, value1);
    });
    value._dbSchema = value1;
    no(value, [value._allTables, value, value.Transaction.prototype]);
    so(value, [value._allTables, value, value.Transaction.prototype, this._cfg.tables], Fs(value1), value1);
    value._storeNames = Fs(value1);
    return this;
  }
  ["upgrade"](arg) {
    this._cfg.contentUpgrade = Qn(this._cfg.contentUpgrade || zn, arg);
    return this;
  }
}
function fo(arg, arg2) {
  let value1 = arg._dbNamesDB;
  value1 || (value1 = arg._dbNamesDB = new Xn(pi, {
    addons: [],
    indexedDB: arg,
    IDBKeyRange: arg2
  }), value1.version(1).stores({
    dbnames: "name"
  }));
  return value1.table("dbnames");
}
function ho(arg) {
  return arg && "function" == typeof arg.databases;
}
function go(arg) {
  return Ha(function () {
    wa.letThrough = true;
    return arg();
  });
}
function mo() {
  var value2;
  if (!navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases) return new Promise(function (arg1) {
    var value = function () {
      return indexedDB.databases().finally(arg1);
    };
    value2 = setInterval(value, 100);
    value();
  }).finally(function () {
    return clearInterval(value2);
  });
  return Promise.resolve();
}
function po(arg63) {
  const value54 = arg63._state,
    {
      indexedDB: value35
    } = arg63._deps;
  if (value54.isBeingOpened || arg63.idbdb) return value54.dbReadyPromise.then(() => value54.dbOpenError ? ni(value54.dbOpenError) : arg63);
  Sn && (value54.openCanceller._stackHolder = Kn());
  value54.isBeingOpened = true;
  value54.dbOpenError = null;
  value54.openComplete = false;
  const value44 = value54.openCanceller;
  function fn7() {
    if (value54.openCanceller !== value44) throw new Fn.DatabaseClosed("db.open() was cancelled");
  }
  let value6 = value54.dbReadyResolve,
    value15 = null,
    value26 = false;
  return ka.race([value44, ('undefined' == typeof navigator ? ka.resolve() : mo()).then(() => new ka((arg8, arg32) => {
    fn7();
    if (!value35) throw new Fn.MissingAPI();
    const value14 = arg63.name,
      value25 = value54.autoSchema ? value35.open(value14) : value35.open(value14, Math.round(10 * arg63.verno));
    if (!value25) throw new Fn.MissingAPI();
    value25.onerror = zi(arg32);
    value25.onblocked = Ba(arg63._fireOnBlocked);
    value25.onupgradeneeded = Ba(arg5 => {
      value15 = value25.transaction;
      if (value54.autoSchema && !arg63._options.allowEmptyDB) {
        value25.onerror = Hi;
        value15.abort();
        value25.result.close();
        const value = value35.deleteDatabase(value14);
        value.onsuccess = value.onerror = Ba(() => {
          arg32(new Fn.NoSuchDatabase("Database " + value14 + " doesnt exist"));
        });
      } else {
        value15.onerror = zi(arg32);
        var value13 = arg5.oldVersion > Math.pow(2, 62) ? 0 : arg5.oldVersion;
        value26 = value13 < 1;
        arg63._novip.idbdb = value25.result;
        (function (arg4, arg12, arg72, arg62) {
          const value34 = arg4._dbSchema,
            value53 = arg4._createTransaction("readwrite", arg4._storeNames, value34);
          value53.create(arg72);
          value53._completion.catch(arg62);
          const value43 = value53._reject.bind(value53),
            value24 = wa.transless || wa;
          Ha(() => {
            wa.trans = value53;
            wa.transless = value24;
            if (0 === arg12) {
              Fs(value34).forEach(arg => {
                oo(arg72, arg, value34[arg].primKey, value34[arg].indexes);
              });
              ro(arg4, arg72);
              ka.follow(() => arg4.on.populate.fire(value53)).catch(value43);
            } else (function ({
              _novip: arg7
            }, arg1, arg6, arg22) {
              const value33 = [],
                value52 = arg7._versions;
              let value42 = arg7._dbSchema = co(0, arg7.idbdb, arg22),
                value5 = false;
              value52.filter(arg => arg._cfg.version >= arg1).forEach(arg3 => {
                value33.push(() => {
                  const value12 = value42,
                    value4 = arg3._cfg.dbschema;
                  lo(arg7, value12, arg22);
                  lo(arg7, value4, arg22);
                  value42 = arg7._dbSchema = value4;
                  const value32 = io(value12, value4);
                  value32.add.forEach(arg => {
                    oo(arg22, arg[0], arg[1].primKey, arg[1].indexes);
                  });
                  value32.change.forEach(arg2 => {
                    if (arg2.recreate) throw new Fn.Upgrade("Not yet support for changing primary key");
                    {
                      const value = arg22.objectStore(arg2.name);
                      arg2.add.forEach(arg => uo(value, arg));
                      arg2.change.forEach(arg => {
                        value.deleteIndex(arg.name);
                        uo(value, arg);
                      });
                      arg2.del.forEach(arg => value.deleteIndex(arg));
                    }
                  });
                  const value23 = arg3._cfg.contentUpgrade;
                  if (value23 && arg3._cfg.version > arg1) {
                    ro(arg7, arg22);
                    arg6._memoizedTables = {};
                    value5 = true;
                    let value2 = cn(value4);
                    value32.del.forEach(arg => {
                      value2[arg] = value12[arg];
                    });
                    no(arg7, [arg7.Transaction.prototype]);
                    so(arg7, [arg7.Transaction.prototype], Fs(value2), value2);
                    arg6.schema = value2;
                    const value1 = Cn(value23);
                    let value22;
                    value1 && Wa();
                    const value3 = ka.follow(() => {
                      value22 = value23(arg6);
                      if (value22 && value1) {
                        var value = ja.bind(null, null);
                        value22.then(value, value);
                      }
                    });
                    if (value22 && "function" == typeof value22.then) return ka.resolve(value22);
                    return value3.then(() => value22);
                  }
                });
                value33.push(arg2 => {
                  var value2, value1;
                  value5 && di || (value2 = arg3._cfg.dbschema, value1 = arg2, [].slice.call(value1.db.objectStoreNames).forEach(arg => null == value2[arg] && value1.db.deleteObjectStore(arg)));
                  no(arg7, [arg7.Transaction.prototype]);
                  so(arg7, [arg7.Transaction.prototype], arg7._storeNames, arg7._dbSchema);
                  arg6.schema = arg7._dbSchema;
                });
              });
              return function value() {
                if (value33.length) return ka.resolve(value33.shift()(arg6.idbtrans)).then(value);
                return ka.resolve();
              }().then(() => {
                var value, value1;
                value1 = arg22;
                Fs(value = value42).forEach(arg => {
                  value1.db.objectStoreNames.contains(arg) || oo(value1, arg, value[arg].primKey, value[arg].indexes);
                });
              });
            })(arg4, arg12, value53, arg72).catch(value43);
          });
        })(arg63, value13 / 10, value15, arg32);
      }
    }, arg32);
    value25.onsuccess = Ba(() => {
      value15 = null;
      const value1 = arg63._novip.idbdb = value25.result,
        value22 = Qs(value1.objectStoreNames);
      if (value22.length > 0) try {
        const value3 = value1.transaction(1 === (value4 = value22).length ? value4[0] : value4, "readonly");
        if (value54.autoSchema) (function ({
          _novip: arg1
        }, arg3, arg2) {
          arg1.verno = arg3.version / 10;
          const value = arg1._dbSchema = co(0, arg3, arg2);
          arg1._storeNames = Qs(arg3.objectStoreNames, 0);
          so(arg1, [arg1._allTables], Fs(value), value);
        })(arg63, value1, value3);else {
          lo(arg63, arg63._dbSchema, value3);
          (function (arg2, arg1) {
            const value2 = io(co(0, arg2.idbdb, arg1), arg2._dbSchema);
            value2.add.length || value2.change.some(arg => arg.add.length || arg.change.length);
          })(arg63, value3);
        }
        ro(arg63, value3);
      } catch (value) {}
      var value4;
      fi.push(arg63);
      value1.onversionchange = Ba(arg => {
        value54.vcFired = true;
        arg63.on('versionchange').fire(arg);
      });
      value1.onclose = Ba(arg => {
        arg63.on("close").fire(arg);
      });
      value26 && function ({
        indexedDB: arg,
        IDBKeyRange: arg2
      }, arg1) {
        !ho(arg) && arg1 !== pi && fo(arg, arg2).put({
          name: arg1
        }).catch(zn);
      }(arg63._deps, value14);
      arg8();
    }, arg32);
  }))]).then(() => (fn7(), value54.onReadyBeingFired = [], ka.resolve(go(() => arg63.on.ready.fire(arg63.vip))).then(function value2() {
    if (value54.onReadyBeingFired.length > 0) {
      let value = value54.onReadyBeingFired.reduce(Qn, zn);
      value54.onReadyBeingFired = [];
      return ka.resolve(go(() => value(arg63.vip))).then(value2);
    }
  }))).finally(() => {
    value54.onReadyBeingFired = null;
    value54.isBeingOpened = false;
  }).then(() => arg63).catch(arg => {
    value54.dbOpenError = arg;
    try {
      value15 && value15.abort();
    } catch (value) {}
    value44 === value54.openCanceller && arg63._close();
    return ni(arg);
  }).finally(() => {
    value54.openComplete = true;
    value6();
  });
}
function yo(arg3) {
  var value = arg => arg3.next(arg),
    value12 = fn2(value),
    value4 = fn2(arg => arg3.throw(arg));
  function fn2(arg2) {
    return arg => {
      var value2 = arg2(arg),
        value1 = value2.value;
      if (value2.done) return value1;
      if (value1 && 'function' == typeof value1.then) return value1.then(value12, value4);
      if (Ns(value1)) return Promise.all(value1).then(value12, value4);
      return value12(value1);
    };
  }
  return fn2(value)();
}
function wo(arg2, arg1, arg) {
  var value3 = arguments.length;
  if (value3 < 2) throw new Fn.InvalidArgument("Too few arguments");
  for (var value4 = new Array(value3 - 1); --value3;) value4[value3 - 1] = arguments[value3];
  arg = value4.pop();
  return [arg2, fn(value4), arg];
}
function bo(arg4, arg22, arg3, arg1, arg2) {
  return ka.resolve().then(() => {
    const value2 = wa.transless || wa,
      value5 = arg4._createTransaction(arg22, arg3, arg4._dbSchema, arg1),
      value1 = {
        trans: value5,
        transless: value2
      };
    if (arg1) value5.idbtrans = arg1.idbtrans;else try {
      value5.create();
      arg4._state.PR1398_maxLoop = 3;
    } catch (value) {
      if (value.name === Ln.InvalidState && arg4.isOpen() && --arg4._state.PR1398_maxLoop > 0) {
        arg4._close();
        return arg4.open().then(() => bo(arg4, arg22, arg3, null, arg2));
      }
      return ni(value);
    }
    const value3 = Cn(arg2);
    let value4;
    value3 && Wa();
    const value22 = ka.follow(() => {
      value4 = arg2.call(value5, value5);
      if (value4) {
        if (value3) {
          var value = ja.bind(null, null);
          value4.then(value, value);
        } else "function" == typeof value4.next && "function" == typeof value4.throw && (value4 = yo(value4));
      }
    }, value1);
    return (value4 && "function" == typeof value4.then ? ka.resolve(value4).then(arg => value5.active ? arg : ni(new Fn.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : value22.then(() => value4)).then(arg => (arg1 && value5._resolve(), value5._completion.then(() => arg))).catch(arg => (value5._reject(arg), ni(arg)));
  });
}
function _o(arg1, arg, arg2) {
  const value3 = Ns(arg1) ? arg1.slice() : [arg1];
  for (let value = 0; value < arg2; ++value) value3.push(arg);
  return value3;
}
const vo = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: function (arg4) {
    return {
      ...arg4,
      'table'(arg3) {
        const value42 = arg4.table(arg3),
          {
            schema: value33
          } = value42,
          value5 = {},
          value7 = [];
        function fn6(arg5, arg6, arg7) {
          const value4 = to(arg5),
            value1 = value5[value4] = value5[value4] || [],
            value2 = null == arg5 ? 0 : "string" == typeof arg5 ? 1 : arg5.length,
            value3 = arg6 > 0,
            value = {
              ...arg7,
              isVirtual: value3,
              keyTail: arg6,
              keyLength: value2,
              extractKey: Zi(arg5),
              unique: !value3 && arg7.unique
            };
          value1.push(value);
          value.isPrimaryKey || value7.push(value);
          value2 > 1 && fn6(2 === value2 ? arg5[0] : arg5.slice(0, value2 - 1), arg6 + 1, arg7);
          value1.sort((arg, arg1) => arg.keyTail - arg1.keyTail);
          return value;
        }
        const value22 = fn6(value33.primaryKey.keyPath, 0, value33.primaryKey);
        value5[":id"] = [value22];
        for (const value of value33.indexes) fn6(value.keyPath, 0, value);
        function fn1(arg1) {
          const value3 = arg1.query.index;
          if (value3.isVirtual) return {
            ...arg1,
            query: {
              index: value3,
              range: (value2 = arg1.query.range, value = value3.keyTail, {
                type: 1 === value2.type ? 2 : value2.type,
                lower: _o(value2.lower, value2.lowerOpen ? arg4.MAX_KEY : arg4.MIN_KEY, value),
                lowerOpen: true,
                upper: _o(value2.upper, value2.upperOpen ? arg4.MIN_KEY : arg4.MAX_KEY, value),
                upperOpen: true
              })
            }
          };
          return arg1;
          var value2, value;
        }
        return {
          ...value42,
          schema: {
            ...value33,
            primaryKey: value22,
            indexes: value7,
            getIndexByKeyPath: function (arg1) {
              const value = value5[to(arg1)];
              return value && value[0];
            }
          },
          count: arg => value42.count(fn1(arg)),
          query: arg => value42.query(fn1(arg)),
          'openCursor'(arg2) {
            const {
              keyTail: value32,
              isVirtual: value1,
              keyLength: value3
            } = arg2.query.index;
            if (value1) return value42.openCursor(fn1(arg2)).then(arg12 => {
              return arg12 && (value2 = arg12, Object.create(value2, {
                continue: {
                  value: function (arg) {
                    if (null != arg) value2.continue(_o(arg, arg2.reverse ? arg4.MAX_KEY : arg4.MIN_KEY, value32));else if (arg2.unique) value2.continue(value2.key.slice(0, value3).concat(arg2.reverse ? arg4.MIN_KEY : arg4.MAX_KEY, value32));else value2.continue();
                  }
                },
                continuePrimaryKey: {
                  'value'(arg, arg1) {
                    value2.continuePrimaryKey(_o(arg, arg4.MAX_KEY, value32), arg1);
                  }
                },
                primaryKey: {
                  get: () => value2.primaryKey
                },
                key: {
                  'get'() {
                    const value = value2.key;
                    if (1 === value3) return value[0];
                    return value.slice(0, value3);
                  }
                },
                value: {
                  get: () => value2.value
                }
              }));
              var value2;
            });
            return value42.openCursor(arg2);
          }
        };
      }
    };
  }
};
function ko(arg2, arg22, arg3, arg12) {
  arg3 = arg3 || {};
  arg12 = arg12 || '';
  Fs(arg2).forEach(arg1 => {
    if (Ws(arg22, arg1)) {
      var value22 = arg2[arg1],
        value2 = arg22[arg1];
      if ('object' == typeof value22 && "object" == typeof value2 && value22 && value2) {
        const value = wn(value22);
        if (value !== wn(value2)) arg3[arg12 + arg1] = arg22[arg1];else if ("Object" === value) ko(value22, value2, arg3, arg12 + arg1 + '.');else value22 !== value2 && (arg3[arg12 + arg1] = arg22[arg1]);
      } else value22 !== value2 && (arg3[arg12 + arg1] = arg22[arg1]);
    } else arg3[arg12 + arg1] = void 0;
  });
  Fs(arg22).forEach(arg => {
    Ws(arg2, arg) || (arg3[arg12 + arg] = arg22[arg]);
  });
  return arg3;
}
const Co = {
  stack: "dbcore",
  name: 'HooksMiddleware',
  level: 2,
  create: arg6 => ({
    ...arg6,
    'table'(arg5) {
      const value13 = arg6.table(arg5),
        {
          primaryKey: value25
        } = value13.schema;
      return {
        ...value13,
        'mutate'(arg42) {
          const value52 = wa.trans,
            {
              deleting: value5,
              creating: value33,
              updating: value24
            } = value52.table(arg5).hook;
          switch (arg42.type) {
            case "add":
              if (value33.fire === zn) break;
              return value52._promise("readwrite", () => fn1(arg42), true);
            case 'put':
              if (value33.fire === zn && value24.fire === zn) break;
              return value52._promise("readwrite", () => fn1(arg42), true);
            case "delete":
              if (value5.fire === zn) break;
              return value52._promise('readwrite', () => fn1(arg42), true);
            case 'deleteRange':
              if (value5.fire === zn) break;
              return value52._promise('readwrite', () => {
                return fn6((value = arg42).trans, value.range, 10000);
                var value;
              }, true);
          }
          return value13.mutate(arg42);
          function fn1(arg12) {
            const value23 = wa.trans,
              value4 = arg12.keys || (value32 = value25, "delete" === (value42 = arg12).type ? value42.keys : value42.keys || value42.values.map(value32.extractKey));
            var value32, value42;
            if (!value4) throw new Error("Keys missing");
            "delete" !== (arg12 = 'add' === arg12.type || "put" === arg12.type ? {
              ...arg12,
              keys: value4
            } : {
              ...arg12
            }).type && (arg12.values = [...arg12.values]);
            arg12.keys && (arg12.keys = [...arg12.keys]);
            return function (arg1, arg, arg2) {
              if ("add" === arg.type) return Promise.resolve([]);
              return arg1.getMany({
                trans: arg.trans,
                keys: arg2,
                cache: 'immutable'
              });
            }(value13, arg12, value4).then(arg4 => {
              const value12 = value4.map((arg1, arg3) => {
                const value3 = arg4[arg3],
                  value22 = {
                    onerror: null,
                    onsuccess: null
                  };
                if ('delete' === arg12.type) value5.fire.call(value22, arg1, value3, value23);else {
                  if ("add" === arg12.type || void 0 === value3) {
                    const value = value33.fire.call(value22, arg1, arg12.values[arg3], value23);
                    null == arg1 && null != value && (arg1 = value, arg12.keys[arg3] = arg1, value25.outbound || un(arg12.values[arg3], value25.keyPath, arg1));
                  } else {
                    const value1 = ko(value3, arg12.values[arg3]),
                      value2 = value24.fire.call(value22, value1, arg1, value3, value23);
                    if (value2) {
                      const value = arg12.values[arg3];
                      Object.keys(value2).forEach(arg => {
                        if (Ws(value, arg)) value[arg] = value2[arg];else un(value, arg, value2[arg]);
                      });
                    }
                  }
                }
                return value22;
              });
              return value13.mutate(arg12).then(({
                failures: arg2,
                results: arg3,
                numFailures: arg1,
                lastResult: arg
              }) => {
                for (let value2 = 0; value2 < value4.length; ++value2) {
                  const value1 = arg3 ? arg3[value2] : value4[value2],
                    value = value12[value2];
                  if (null == value1) value.onerror && value.onerror(arg2[value2]);else value.onsuccess && value.onsuccess("put" === arg12.type && arg4[value2] ? arg12.values[value2] : value1);
                }
                return {
                  failures: arg2,
                  results: arg3,
                  numFailures: arg1,
                  lastResult: arg
                };
              }).catch(arg2 => (value12.forEach(arg => arg.onerror && arg.onerror(arg2)), Promise.reject(arg2)));
            });
          }
          function fn6(arg3, arg22, arg1) {
            return value13.query({
              trans: arg3,
              values: false,
              query: {
                index: value25,
                range: arg22
              },
              limit: arg1
            }).then(({
              result: arg2
            }) => fn1({
              type: 'delete',
              keys: arg2,
              trans: arg3
            }).then(arg => arg.numFailures > 0 ? Promise.reject(arg.failures[0]) : arg2.length < arg1 ? {
              failures: [],
              numFailures: 0,
              lastResult: void 0
            } : fn6(arg3, {
              ...arg22,
              lower: arg2[arg2.length - 1],
              lowerOpen: true
            }, arg1)));
          }
        }
      };
    }
  })
};
function So(arg1, arg2, arg) {
  try {
    if (!arg2) return null;
    if (arg2.keys.length < arg1.length) return null;
    const value2 = [];
    for (let value1 = 0, value = 0; value1 < arg2.keys.length && value < arg1.length; ++value1) 0 === Ii(arg2.keys[value1], arg1[value]) && (value2.push(arg ? mn(arg2.values[value1]) : arg2.values[value1]), ++value);
    return value2.length === arg1.length ? value2 : null;
  } catch (value) {
    return null;
  }
}
const Uo = {
  stack: "dbcore",
  level: -1,
  create: arg3 => ({
    table: arg2 => {
      const value1 = arg3.table(arg2);
      return {
        ...value1,
        getMany: arg1 => {
          if (!arg1.cache) return value1.getMany(arg1);
          const value = So(arg1.keys, arg1.trans._cache, "clone" === arg1.cache);
          if (value) return ka.resolve(value);
          return value1.getMany(arg1).then(arg => (arg1.trans._cache = {
            keys: arg1.keys,
            values: "clone" === arg1.cache ? mn(arg) : arg
          }, arg));
        },
        mutate: arg => ("add" !== arg.type && (arg.trans._cache = null), value1.mutate(arg))
      };
    }
  })
};
function Do(arg) {
  return !("from" in arg);
}
const Oo = function (arg, arg1) {
  if (!this) {
    const value = new Oo();
    arg && 'd' in arg && Gs(value, arg);
    return value;
  }
  Gs(this, arguments.length ? {
    d: 1,
    from: arg,
    to: arguments.length > 1 ? arg1 : arg
  } : {
    d: 0
  });
};
function xo(arg3, arg4, arg6) {
  const value5 = Ii(arg4, arg6);
  if (isNaN(value5)) return;
  if (value5 > 0) throw RangeError();
  if (Do(arg3)) return Gs(arg3, {
    from: arg4,
    to: arg6,
    d: 1
  });
  const value1 = arg3.l,
    value = arg3.r;
  if (Ii(arg6, arg3.from) < 0) {
    if (value1) xo(value1, arg4, arg6);else arg3.l = {
      from: arg4,
      to: arg6,
      d: 1,
      l: null,
      r: null
    };
    return Io(arg3);
  }
  if (Ii(arg4, arg3.to) > 0) {
    if (value) xo(value, arg4, arg6);else arg3.r = {
      from: arg4,
      to: arg6,
      d: 1,
      l: null,
      r: null
    };
    return Io(arg3);
  }
  Ii(arg4, arg3.from) < 0 && (arg3.from = arg4, arg3.l = null, arg3.d = value ? value.d + 1 : 1);
  Ii(arg6, arg3.to) > 0 && (arg3.to = arg6, arg3.r = null, arg3.d = arg3.l ? arg3.l.d + 1 : 1);
  const value2 = !arg3.r;
  value1 && !arg3.l && Ko(arg3, value1);
  value && value2 && Ko(arg3, value);
}
function Ko(arg12, arg) {
  Do(arg) || function value(arg5, {
    from: arg2,
    to: arg3,
    l: arg1,
    r: arg4
  }) {
    xo(arg5, arg2, arg3);
    arg1 && value(arg5, arg1);
    arg4 && value(arg5, arg4);
  }(arg12, arg);
}
function Ao(arg1) {
  let value = Do(arg1) ? null : {
    s: 0,
    n: arg1
  };
  return {
    'next'(arg) {
      const value1 = arguments.length > 0;
      for (; value;) switch (value.s) {
        case 0:
          value.s = 1;
          if (value1) {
            for (; value.n.l && Ii(arg, value.n.from) < 0;) value = {
              up: value,
              n: value.n.l,
              s: 1
            };
          } else {
            for (; value.n.l;) value = {
              up: value,
              n: value.n.l,
              s: 1
            };
          }
        case 1:
          value.s = 2;
          if (!value1 || Ii(arg, value.n.to) <= 0) return {
            value: value.n,
            done: false
          };
        case 2:
          if (value.n.r) {
            value.s = 3;
            value = {
              up: value,
              n: value.n.r,
              s: 0
            };
            continue;
          }
        case 3:
          value = value.up;
      }
      return {
        done: true
      };
    }
  };
}
function Io(arg) {
  var value3, value4;
  const value12 = ((null === (value3 = arg.r) || void 0 === value3 ? void 0 : value3.d) || 0) - ((null === (value4 = arg.l) || void 0 === value4 ? void 0 : value4.d) || 0),
    value22 = value12 > 1 ? 'r' : value12 < -1 ? 'l' : '';
  if (value22) {
    const value2 = 'r' === value22 ? 'l' : 'r',
      value1 = {
        ...arg
      },
      value = arg[value22];
    arg.from = value.from;
    arg.to = value.to;
    arg[value22] = value[value22];
    value1[value22] = value[value2];
    arg[value2] = value1;
    value1.d = Po(value1);
  }
  arg.d = Po(arg);
}
function Po({
  r: arg1,
  l: arg
}) {
  return (arg1 ? arg ? Math.max(arg1.d, arg.d) : arg1.d : arg ? arg.d : 0) + 1;
}
js(Oo.prototype, {
  'add'(arg) {
    Ko(this, arg);
    return this;
  },
  'addKey'(arg) {
    xo(this, arg, arg);
    return this;
  },
  'addKeys'(arg2) {
    arg2.forEach(arg => xo(this, arg, arg));
    return this;
  },
  [bn]() {
    return Ao(this);
  }
});
const Mo = {
  stack: "dbcore",
  level: 0,
  create: arg4 => {
    const value24 = arg4.schema.name,
      value15 = new Oo(arg4.MIN_KEY, arg4.MAX_KEY);
    return {
      ...arg4,
      table: arg22 => {
        const value7 = arg4.table(arg22),
          {
            schema: value34
          } = value7,
          {
            primaryKey: value14
          } = value34,
          {
            extractKey: value62,
            outbound: value43
          } = value14,
          value53 = {
            ...value7,
            mutate: arg7 => {
              const value5 = arg7.trans,
                value8 = value5.mutatedParts || (value5.mutatedParts = {}),
                value9 = arg => {
                  const value1 = "idb://" + value24 + '/' + arg22 + '/' + arg;
                  return value8[value1] || (value8[value1] = new Oo());
                },
                value23 = value9(''),
                value42 = value9(":dels"),
                {
                  type: value13
                } = arg7;
              let [value33, value52] = "deleteRange" === arg7.type ? [arg7.range] : "delete" === arg7.type ? [arg7.keys] : arg7.values.length < 50 ? [[], arg7.values] : [];
              const value6 = arg7.trans._cache;
              return value7.mutate(arg7).then(arg1 => {
                if (Ns(value33)) {
                  'delete' !== value13 && (value33 = arg1.results);
                  value23.addKeys(value33);
                  const value = So(value33, value6);
                  value || 'add' === value13 || value42.addKeys(value33);
                  (value || value52) && (value22 = value9, value32 = value, value4 = value52, value34.indexes.forEach(function (arg3) {
                    const value2 = value22(arg3.name || '');
                    function fn2(arg) {
                      if (null != arg) return arg3.extractKey(arg);
                      return null;
                    }
                    const value12 = arg2 => arg3.multiEntry && Ns(arg2) ? arg2.forEach(arg => value2.addKey(arg)) : value2.addKey(arg2);
                    (value32 || value4).forEach((arg, arg2) => {
                      const value3 = value32 && fn2(value32[arg2]),
                        value1 = value4 && fn2(value4[arg2]);
                      0 !== Ii(value3, value1) && (null != value3 && value12(value3), null != value1 && value12(value1));
                    });
                  }));
                } else {
                  if (value33) {
                    const value = {
                      from: value33.lower,
                      to: value33.upper
                    };
                    value42.add(value);
                    value23.add(value);
                  } else {
                    value23.add(value15);
                    value42.add(value15);
                    value34.indexes.forEach(arg => value9(arg.name).add(value15));
                  }
                }
                var value22, value32, value4;
                return arg1;
              });
            }
          },
          value72 = ({
            query: {
              index: arg3,
              range: arg1
            }
          }) => {
            var value2, value;
            return [arg3, new Oo(null !== (value2 = arg1.lower) && void 0 !== value2 ? value2 : arg4.MIN_KEY, null !== (value = arg1.upper) && void 0 !== value ? value : arg4.MAX_KEY)];
          },
          value82 = {
            get: arg => [value14, new Oo(arg.key)],
            getMany: arg => [value14, new Oo().addKeys(arg.keys)],
            count: value72,
            query: value72,
            openCursor: value72
          };
        Fs(value82).forEach(arg3 => {
          value53[arg3] = function (arg1) {
            const {
              subscr: value5
            } = wa;
            if (value5) {
              const value42 = arg => {
                  const value1 = "idb://" + value24 + '/' + arg22 + '/' + arg;
                  return value5[value1] || (value5[value1] = new Oo());
                },
                value22 = value42(''),
                value32 = value42(":dels"),
                [value4, value12] = value82[arg3](arg1);
              value42(value4.name || '').add(value12);
              if (!value4.isPrimaryKey) {
                if ("count" !== arg3) {
                  const value3 = 'query' === arg3 && value43 && arg1.values && value7.query({
                    ...arg1,
                    values: false
                  });
                  return value7[arg3].apply(this, arguments).then(arg2 => {
                    if ('query' === arg3) {
                      if (value43 && arg1.values) return value3.then(({
                        result: arg
                      }) => (value22.addKeys(arg), arg2));
                      const value = arg1.values ? arg2.result.map(value62) : arg2.result;
                      if (arg1.values) value22.addKeys(value);else value32.addKeys(value);
                    } else {
                      if ("openCursor" === arg3) {
                        const value1 = arg2,
                          value2 = arg1.values;
                        return value1 && Object.create(value1, {
                          key: {
                            get: () => (value32.addKey(value1.primaryKey), value1.key)
                          },
                          primaryKey: {
                            'get'() {
                              const value = value1.primaryKey;
                              value32.addKey(value);
                              return value;
                            }
                          },
                          value: {
                            get: () => (value2 && value22.addKey(value1.primaryKey), value1.value)
                          }
                        });
                      }
                    }
                    return arg2;
                  });
                }
                value32.add(value15);
              }
            }
            return value7[arg3].apply(this, arguments);
          };
        });
        return value53;
      }
    };
  }
};
class Xn {
  constructor(arg32, arg6) {
    this._middlewares = {};
    this.verno = 0;
    const value22 = Xn.dependencies;
    this._options = arg6 = {
      addons: Xn.addons,
      autoOpen: true,
      indexedDB: value22.indexedDB,
      IDBKeyRange: value22.IDBKeyRange,
      ...arg6
    };
    this._deps = {
      indexedDB: arg6.indexedDB,
      IDBKeyRange: arg6.IDBKeyRange
    };
    const {
      addons: value42
    } = arg6;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    const value12 = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: zn,
      dbReadyPromise: null,
      cancelOpen: zn,
      openCanceller: null,
      autoSchema: true,
      PR1398_maxLoop: 3
    };
    var value62, value52;
    value12.dbReadyPromise = new ka(arg => {
      value12.dbReadyResolve = arg;
    });
    value12.openCanceller = new ka((arg1, arg) => {
      value12.cancelOpen = arg;
    });
    this._state = value12;
    this.name = arg32;
    this.on = ki(this, "populate", "blocked", "versionchange", "close", {
      ready: [Qn, zn]
    });
    this.on.ready.subscribe = tn(this.on.ready.subscribe, arg2 => (arg, arg1) => {
      Xn.vip(() => {
        const value3 = this._state;
        if (value3.openComplete) {
          value3.dbOpenError || ka.resolve().then(arg);
          arg1 && arg2(arg);
        } else {
          if (value3.onReadyBeingFired) {
            value3.onReadyBeingFired.push(arg);
            arg1 && arg2(arg);
          } else {
            arg2(arg);
            const value2 = this;
            arg1 || arg2(function value() {
              value2.on.ready.unsubscribe(arg);
              value2.on.ready.unsubscribe(value);
            });
          }
        }
      });
    });
    this.Collection = (value62 = this, Ci(Vt.prototype, function (arg2, arg1) {
      this.db = value62;
      let value5 = _i,
        value2 = null;
      if (arg1) try {
        value5 = arg1();
      } catch (value) {
        value2 = value;
      }
      const value3 = arg2._ctx,
        value6 = value3.table,
        value4 = value6.hook.reading.fire;
      this._ctx = {
        table: value6,
        index: value3.index,
        isPrimKey: !value3.index || value6.schema.primKey.keyPath && value3.index === value6.schema.primKey.name,
        range: value5,
        keysOnly: false,
        dir: "next",
        unique: '',
        algorithm: null,
        filter: null,
        replayFilter: null,
        justLimit: true,
        isMatch: null,
        offset: 0,
        limit: 1 / 0,
        error: value2,
        or: value3.or,
        valueMapper: value4 !== Hn ? value4 : null
      };
    }));
    this.Table = (value52 = this, Ci(jt.prototype, function (arg1, arg2, arg) {
      this.db = value52;
      this._tx = arg;
      this.name = arg1;
      this.schema = arg2;
      this.hook = value52._allTables[arg1] ? value52._allTables[arg1].hook : ki(null, {
        creating: [Yn, zn],
        reading: [Wn, Hn],
        updating: [qn, zn],
        deleting: [$n, zn]
      });
    }));
    this.Transaction = function (arg5) {
      return Ci(an.prototype, function (arg22, arg12, arg4, arg3, arg2) {
        this.db = arg5;
        this.mode = arg22;
        this.storeNames = arg12;
        this.schema = arg4;
        this.chromeTransactionDurability = arg3;
        this.idbtrans = null;
        this.on = ki(this, "complete", "error", "abort");
        this.parent = arg2 || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0;
        this._completion = new ka((arg, arg1) => {
          this._resolve = arg;
          this._reject = arg1;
        });
        this._completion.then(() => {
          this.active = false;
          this.on.complete.fire();
        }, arg => {
          var value1 = this.active;
          this.active = false;
          this.on.error.fire(arg);
          if (this.parent) this.parent._reject(arg);else value1 && this.idbtrans && this.idbtrans.abort();
          return ni(arg);
        });
      });
    }(this);
    this.Version = function (arg2) {
      return Ci(On.prototype, function (arg) {
        this.db = arg2;
        this._cfg = {
          version: arg,
          storesSource: null,
          dbschema: {},
          tables: {},
          contentUpgrade: null
        };
      });
    }(this);
    this.WhereClause = function (arg4) {
      return Ci(en.prototype, function (arg2, arg3, arg12) {
        this.db = arg4;
        this._ctx = {
          table: arg2,
          index: ":id" === arg3 ? null : arg3,
          or: arg12
        };
        const value2 = arg4._deps.indexedDB;
        if (!value2) throw new Fn.MissingAPI();
        this._cmp = this._ascending = value2.cmp.bind(value2);
        this._descending = (arg1, arg) => value2.cmp(arg, arg1);
        this._max = (arg1, arg) => value2.cmp(arg1, arg) > 0 ? arg1 : arg;
        this._min = (arg, arg1) => value2.cmp(arg, arg1) < 0 ? arg : arg1;
        this._IDBKeyRange = arg4._deps.IDBKeyRange;
      });
    }(this);
    this.on('versionchange', arg => {
      if (arg.newVersion > 0) this.name;else this.name;
      this.close();
    });
    this.on("blocked", arg => {
      if (!arg.newVersion || arg.newVersion < arg.oldVersion) this.name;else {
        this.name;
        arg.oldVersion;
      }
    });
    this._maxKey = Xi(arg6.IDBKeyRange);
    this._createTransaction = (arg, arg2, arg1, arg3) => new this.Transaction(arg, arg2, arg1, this._options.chromeTransactionDurability, arg3);
    this._fireOnBlocked = arg2 => {
      this.on("blocked").fire(arg2);
      fi.filter(arg => arg.name === this.name && arg !== this && !arg._state.vcFired).map(arg => arg.on("versionchange").fire(arg2));
    };
    this.use(vo);
    this.use(Co);
    this.use(Mo);
    this.use(Uo);
    this.vip = Object.create(this, {
      _vip: {
        value: true
      }
    });
    value42.forEach(arg => arg(this));
  }
  ['version'](arg2) {
    if (isNaN(arg2) || arg2 < 0.1) throw new Fn.Type('Given\x20version\x20is\x20not\x20a\x20positive\x20number');
    arg2 = Math.round(10 * arg2) / 10;
    if (this.idbdb || this._state.isBeingOpened) throw new Fn.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, arg2);
    const value2 = this._versions;
    var value1 = value2.filter(arg => arg._cfg.version === arg2)[0];
    return value1 || (value1 = new this.Version(arg2), value2.push(value1), value2.sort(ao), value1.stores({}), this._state.autoSchema = false, value1);
  }
  ['_whenReady'](arg2) {
    if (this.idbdb && (this._state.openComplete || wa.letThrough || this._vip)) return arg2();
    return new ka((arg, arg1) => {
      if (this._state.openComplete) return arg1(new Fn.DatabaseClosed(this._state.dbOpenError));
      if (!this._state.isBeingOpened) {
        if (!this._options.autoOpen) return void arg1(new Fn.DatabaseClosed());
        this.open().catch(zn);
      }
      this._state.dbReadyPromise.then(arg, arg1);
    }).then(arg2);
  }
  ['use']({
    stack: arg2,
    create: arg22,
    level: arg4,
    name: arg12
  }) {
    arg12 && this.unuse({
      stack: arg2,
      name: arg12
    });
    const value3 = this._middlewares[arg2] || (this._middlewares[arg2] = []);
    value3.push({
      stack: arg2,
      create: arg22,
      level: null == arg4 ? 10 : arg4,
      name: arg12
    });
    value3.sort((arg, arg1) => arg.level - arg1.level);
    return this;
  }
  ['unuse']({
    stack: arg1,
    name: arg22,
    create: arg2
  }) {
    arg1 && this._middlewares[arg1] && (this._middlewares[arg1] = this._middlewares[arg1].filter(arg => arg2 ? arg.create !== arg2 : !!arg22 && arg.name !== arg22));
    return this;
  }
  ["open"]() {
    return po(this);
  }
  ["_close"]() {
    const value1 = this._state,
      value2 = fi.indexOf(this);
    value2 >= 0 && fi.splice(value2, 1);
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (value) {}
      this._novip.idbdb = null;
    }
    value1.dbReadyPromise = new ka(arg => {
      value1.dbReadyResolve = arg;
    });
    value1.openCanceller = new ka((arg1, arg) => {
      value1.cancelOpen = arg;
    });
  }
  ['close']() {
    this._close();
    const value = this._state;
    this._options.autoOpen = false;
    value.dbOpenError = new Fn.DatabaseClosed();
    value.isBeingOpened && value.cancelOpen(value.dbOpenError);
  }
  ['delete']() {
    const value2 = arguments.length > 0,
      value12 = this._state;
    return new ka((arg22, arg3) => {
      const value1 = () => {
        this.close();
        var value = this._deps.indexedDB.deleteDatabase(this.name);
        value.onsuccess = Ba(() => {
          !function ({
            indexedDB: arg,
            IDBKeyRange: arg1
          }, arg2) {
            !ho(arg) && arg2 !== pi && fo(arg, arg1).delete(arg2).catch(zn);
          }(this._deps, this.name);
          arg22();
        });
        value.onerror = zi(arg3);
        value.onblocked = this._fireOnBlocked;
      };
      if (value2) throw new Fn.InvalidArgument("Arguments not allowed in db.delete()");
      if (value12.isBeingOpened) value12.dbReadyPromise.then(value1);else value1();
    });
  }
  ["backendDB"]() {
    return this.idbdb;
  }
  ['isOpen']() {
    return null !== this.idbdb;
  }
  ["hasBeenClosed"]() {
    const value = this._state.dbOpenError;
    return value && "DatabaseClosed" === value.name;
  }
  ["hasFailed"]() {
    return null !== this._state.dbOpenError;
  }
  ["dynamicallyOpened"]() {
    return this._state.autoSchema;
  }
  get ['tables']() {
    return Fs(this._allTables).map(arg => this._allTables[arg]);
  }
  ["transaction"]() {
    const value = wo.apply(this, arguments);
    return this._transaction.apply(this, value);
  }
  ["_transaction"](arg7, arg2, arg6) {
    let value4 = wa.trans;
    value4 && value4.db === this && -1 === arg7.indexOf('!') || (value4 = null);
    const value2 = -1 !== arg7.indexOf('?');
    let value3, value5;
    arg7 = arg7.replace('!', '').replace('?', '');
    try {
      value5 = arg2.map(arg => {
        var value1 = arg instanceof this.Table ? arg.name : arg;
        if ("string" != typeof value1) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return value1;
      });
      if ('r' == arg7 || arg7 === yi) value3 = yi;else {
        if ('rw' != arg7 && arg7 != wi) throw new Fn.InvalidArgument("Invalid transaction mode: " + arg7);
        value3 = wi;
      }
      if (value4) {
        if (value4.mode === yi && value3 === wi) {
          if (!value2) throw new Fn.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
          value4 = null;
        }
        value4 && value5.forEach(arg => {
          if (value4 && -1 === value4.storeNames.indexOf(arg)) {
            if (!value2) throw new Fn.SubTransaction("Table " + arg + " not included in parent transaction.");
            value4 = null;
          }
        });
        value2 && value4 && !value4.active && (value4 = null);
      }
    } catch (value) {
      if (value4) return value4._promise(null, (arg, arg1) => {
        arg1(value);
      });
      return ni(value);
    }
    const value12 = bo.bind(null, this, value3, value5, value4, arg6);
    if (value4) return value4._promise(value3, value12, "lock");
    if (wa.trans) return Za(wa.transless, () => this._whenReady(value12));
    return this._whenReady(value12);
  }
  ["table"](arg) {
    if (!Ws(this._allTables, arg)) throw new Fn.InvalidTable("Table " + arg + '\x20does\x20not\x20exist');
    return this._allTables[arg];
  }
}
const To = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable";
class Zn {
  constructor(arg) {
    this._subscribe = arg;
  }
  ["subscribe"](arg1, arg2, arg) {
    return this._subscribe(arg1 && "function" != typeof arg1 ? arg1 : {
      next: arg1,
      error: arg2,
      complete: arg
    });
  }
  [To]() {
    return this;
  }
}
function Ro(arg1, arg2) {
  Fs(arg2).forEach(arg => {
    Ko(arg1[arg] || (arg1[arg] = new Oo()), arg2[arg]);
  });
  return arg1;
}
let Eo;
try {
  Eo = {
    indexedDB: Vs.indexedDB || Vs.mozIndexedDB || Vs.webkitIndexedDB || Vs.msIndexedDB,
    IDBKeyRange: Vs.IDBKeyRange || Vs.webkitIDBKeyRange
  };
} catch (a28_0x314e0b) {
  Eo = {
    indexedDB: null,
    IDBKeyRange: null
  };
}
const Bo = Xn;
function Lo(arg) {
  let value1 = Vo;
  try {
    Vo = true;
    Yi.storagemutated.fire(arg);
  } finally {
    Vo = value1;
  }
}
js(Bo, {
  ...Gn,
  delete: arg => new Bo(arg, {
    addons: []
  }).delete(),
  exists: arg2 => new Bo(arg2, {
    addons: []
  }).open().then(arg => (arg.close(), true)).catch("NoSuchDatabaseError", () => false),
  'getDatabaseNames'(arg4) {
    try {
      return function ({
        indexedDB: arg1,
        IDBKeyRange: arg3
      }) {
        if (ho(arg1)) return Promise.resolve(arg1.databases()).then(arg2 => arg2.map(arg => arg.name).filter(arg => arg !== pi));
        return fo(arg1, arg3).toCollection().primaryKeys();
      }(Bo.dependencies).then(arg4);
    } catch (value) {
      return ni(new Fn.MissingAPI());
    }
  },
  defineClass: () => function (arg) {
    Gs(this, arg);
  },
  ignoreTransaction: arg => wa.trans ? Za(wa.transless, arg) : arg(),
  vip: go,
  async: function (arg) {
    return function () {
      try {
        var value2 = yo(arg.apply(this, arguments));
        if (value2 && "function" == typeof value2.then) return value2;
        return ka.resolve(value2);
      } catch (value) {
        return ni(value);
      }
    };
  },
  spawn: function (arg1, arg2, arg) {
    try {
      var value3 = yo(arg1.apply(arg, arg2 || []));
      if (value3 && "function" == typeof value3.then) return value3;
      return ka.resolve(value3);
    } catch (value) {
      return ni(value);
    }
  },
  currentTransaction: {
    get: () => wa.trans || null
  },
  waitFor: function (arg, arg2) {
    const value1 = ka.resolve("function" == typeof arg ? Bo.ignoreTransaction(arg) : arg).timeout(arg2 || 60000);
    if (wa.trans) return wa.trans.waitFor(value1);
    return value1;
  },
  Promise: ka,
  debug: {
    get: () => Sn,
    set: arg => {
      Un(arg, "dexie" === arg ? () => true : mi);
    }
  },
  derive: qs,
  extend: Gs,
  props: js,
  override: tn,
  Events: ki,
  on: Yi,
  liveQuery: function (arg3) {
    let value23,
      value14 = false;
    const value9 = new Zn(arg9 => {
      const value52 = Cn(arg3);
      let value32 = false,
        value10 = {},
        value4 = {};
      const value8 = {
        get 'closed'() {
          return value32;
        },
        unsubscribe: () => {
          value32 = true;
          Yi.storagemutated.unsubscribe(value72);
        }
      };
      arg9.start && arg9.start(value8);
      let value42 = false,
        value22 = false;
      function fn6() {
        return Fs(value4).some(arg => value10[arg] && function (arg1, arg4) {
          const value = Ao(arg4);
          let value2 = value.next();
          if (value2.done) return false;
          let value6 = value2.value;
          const value5 = Ao(arg1);
          let value7 = value5.next(value6.from),
            value3 = value7.value;
          for (; !value2.done && !value7.done;) {
            if (Ii(value3.from, value6.to) <= 0 && Ii(value3.to, value6.from) >= 0) return true;
            if (Ii(value6.from, value3.from) < 0) value6 = (value2 = value.next(value3.from)).value;else value3 = (value7 = value5.next(value6.from)).value;
          }
          return false;
        }(value10[arg], value4[arg]));
      }
      const value72 = arg => {
          Ro(value10, arg);
          fn6() && value13();
        },
        value13 = () => {
          if (value42 || value32) return;
          value10 = {};
          const value12 = {},
            value2 = function (arg2) {
              value52 && Wa();
              const value = () => Ha(arg3, {
                  subscr: arg2,
                  trans: null
                }),
                value1 = wa.trans ? Za(wa.transless, value) : value();
              value52 && value1.then(ja, ja);
              return value1;
            }(value12);
          value22 || (Yi(Wi, value72), value22 = true);
          value42 = true;
          Promise.resolve(value2).then(arg => {
            value14 = true;
            value23 = arg;
            value42 = false;
            value32 || (fn6() ? value13() : (value10 = {}, value4 = value12, arg9.next && arg9.next(arg)));
          }, arg => {
            value42 = false;
            value14 = false;
            arg9.error && arg9.error(arg);
            value8.unsubscribe();
          });
        };
      value13();
      return value8;
    });
    value9.hasValue = () => value14;
    value9.getValue = () => value23;
    return value9;
  },
  extendObservabilitySet: Ro,
  getByKeyPath: on,
  setByKeyPath: un,
  delByKeyPath: function (arg2, arg1) {
    if ('string' == typeof arg1) un(arg2, arg1, void 0);else 'length' in arg1 && [].map.call(arg1, function (arg) {
      un(arg2, arg, void 0);
    });
  },
  shallowClone: cn,
  deepClone: mn,
  getObjectDiff: ko,
  cmp: Ii,
  asap: sn,
  minKey: ui,
  addons: [],
  connections: fi,
  errnames: Ln,
  dependencies: Eo,
  semVer: ii,
  version: ii.split('.').map(arg => parseInt(arg)).reduce((arg, arg1, arg2) => arg + arg1 / Math.pow(10, 2 * arg2))
});
Bo.maxKey = Xi(Bo.dependencies.IDBKeyRange);
'undefined' != typeof dispatchEvent && "undefined" != typeof addEventListener && (Yi(Wi, arg => {
  if (!Vo) {
    let value;
    if (hi) {
      value = document.createEvent("CustomEvent");
      value.initCustomEvent(ji, true, true, arg);
    } else value = new CustomEvent(ji, {
      detail: arg
    });
    Vo = true;
    dispatchEvent(value);
    Vo = false;
  }
}), addEventListener(ji, ({
  detail: arg
}) => {
  Vo || Lo(arg);
}));
let Vo = false;
if ("undefined" != typeof BroadcastChannel) {
  const value = new BroadcastChannel(ji);
  "function" == typeof value.unref && value.unref();
  Yi(Wi, arg => {
    Vo || value.postMessage(arg);
  });
  value.onmessage = arg => {
    arg.data && Lo(arg.data);
  };
} else {
  if ("undefined" != typeof self && "undefined" != typeof navigator) {
    Yi(Wi, arg2 => {
      try {
        Vo || ("undefined" != typeof localStorage && localStorage.setItem(ji, JSON.stringify({
          trig: Math.random(),
          changedParts: arg2
        })), "object" == typeof self.clients && [...self.clients.matchAll({
          includeUncontrolled: true
        })].forEach(arg => arg.postMessage({
          type: ji,
          changedParts: arg2
        })));
      } catch (value) {}
    });
    "undefined" != typeof addEventListener && addEventListener('storage', arg => {
      if (arg.key === ji) {
        const value = JSON.parse(arg.newValue);
        value && Lo(value.changedParts);
      }
    });
    const value2 = self.document && navigator.serviceWorker;
    value2 && value2.addEventListener('message', function ({
      data: arg
    }) {
      arg && arg.type === ji && Lo(arg.changedParts);
    });
  }
}
ka.rejectionMapper = function (arg, arg1) {
  if (!arg || arg instanceof Tn || arg instanceof TypeError || arg instanceof SyntaxError || !arg.name || !Nn[arg.name]) return arg;
  var value2 = new Nn[arg.name](arg1 || arg.message, arg);
  "stack" in arg && $s(value2, "stack", {
    get: function () {
      return this.inner.stack;
    }
  });
  return value2;
};
Un(Sn, mi);
class Digital {
  constructor(arg3, arg1, arg4, arg2, arg) {
    V(this, "saveName", 'digital');
    V(this, "defaultProfileCount", 1);
    V(this, "customProfileIndex", 0);
    V(this, "showCustomProfile", false);
    V(this, "banToggleProfile", false);
    V(this, 'defaultConfig', {});
    V(this, 'db');
    this.saveName = arg3;
    this.defaultProfileCount = arg1;
    this.customProfileIndex = arg4;
    this.showCustomProfile = arg2;
    this.banToggleProfile = arg;
    this.db = new DigitalDexie(this.saveName);
  }
  get ["isBanToggleProfile"]() {
    return this.banToggleProfile;
  }
  get ['isShowCustomProfile']() {
    return this.showCustomProfile;
  }
  get ['onboardCount']() {
    return this.defaultProfileCount;
  }
  get ['customIndex']() {
    return this.customProfileIndex;
  }
  get ["lastSelectId"]() {
    const value = localStorage.getItem(this.saveName + "-selectId");
    if (value) return +value;
  }
  set ["lastSelectId"](arg) {
    localStorage.setItem(this.saveName + "-selectId", arg + '');
  }
  async ['delCacheProfileById'](arg) {
    await this.db.friends.delete(arg);
  }
  async ["getCacheProfile"]() {
    return this.db.friends.toArray();
  }
  async ['getCacheProfileById'](arg) {
    return this.db.friends.get({
      id: arg
    });
  }
  async ["setCacheProfileById"](arg2, arg1, arg) {
    await this.db.friends.update(arg2, {
      name: arg1,
      data: arg
    });
  }
  async ["setCacheProfileList"](arg1) {
    for (const value of arg1) await this.db.friends.add({
      name: value.name,
      data: value.data
    });
    const value2 = Se();
    value2.setCacheProfileCount(value2.cacheProfileCount + 1);
  }
  async ['setCacheProfile'](arg2, arg1) {
    await this.db.friends.add({
      name: arg2,
      data: arg1
    });
    const value = Se();
    value.setCacheProfileCount(value.cacheProfileCount + 1);
  }
}
class DigitalDexie extends Xn {
  constructor(arg) {
    super(arg);
    V(this, "friends");
    this.version(1).stores({
      friends: "++id, name, data"
    });
  }
}
const Fo = class _FireLightlessProfile extends Digital {
  constructor() {
    super(_FireLightlessProfile.saveName, _FireLightlessProfile.defaultProfileCount, _FireLightlessProfile.customProfileIndex, _FireLightlessProfile.showCustomProfile);
  }
};
V(Fo, 'saveName', "fire-lightless-profile");
V(Fo, "defaultProfileCount", 1);
V(Fo, "customProfileIndex", 0);
V(Fo, 'showCustomProfile', true);
let No = Fo;
const Go = class _FireProfile extends Digital {
  constructor() {
    super(_FireProfile.saveName, _FireProfile.defaultProfileCount, _FireProfile.customProfileIndex, _FireProfile.showCustomProfile);
  }
};
V(Go, "saveName", 'fire-profile');
V(Go, "defaultProfileCount", 1);
V(Go, "customProfileIndex", 0);
V(Go, 'showCustomProfile', true);
let zo = Go;
const Ho = class _FireProfilePro extends Digital {
  constructor() {
    super(_FireProfilePro.saveName, _FireProfilePro.defaultProfileCount, _FireProfilePro.customProfileIndex, _FireProfilePro.showCustomProfile);
  }
};
V(Ho, "saveName", "fire-profile-pro");
V(Ho, 'defaultProfileCount', 1);
V(Ho, 'customProfileIndex', 0);
V(Ho, "showCustomProfile", true);
let Wo = Ho;
const jo = class _FireProfileAir extends Digital {
  constructor() {
    super(_FireProfileAir.saveName, _FireProfileAir.defaultProfileCount, _FireProfileAir.customProfileIndex, _FireProfileAir.showCustomProfile);
  }
};
V(jo, 'saveName', "fire-profile-air");
V(jo, "defaultProfileCount", 1);
V(jo, "customProfileIndex", 0);
V(jo, "showCustomProfile", true);
let Yo = jo;
const $o = class _FireProfileUltra extends Digital {
  constructor() {
    super(_FireProfileUltra.saveName, _FireProfileUltra.defaultProfileCount, _FireProfileUltra.customProfileIndex, _FireProfileUltra.showCustomProfile);
  }
};
V($o, "saveName", "fire-profile-ultra");
V($o, "defaultProfileCount", 1);
V($o, "customProfileIndex", 0);
V($o, 'showCustomProfile', true);
let qo = $o;
const Jo = class _FireProfileUltraV2 extends Digital {
  constructor() {
    super(_FireProfileUltraV2.saveName, _FireProfileUltraV2.defaultProfileCount, _FireProfileUltraV2.customProfileIndex, _FireProfileUltraV2.showCustomProfile);
  }
};
V(Jo, "saveName", "fire-profile-ultra-v2");
V(Jo, "defaultProfileCount", 1);
V(Jo, "customProfileIndex", 0);
V(Jo, "showCustomProfile", true);
let Xo = Jo;
const Zo = class _Nano68Profile extends Digital {
  constructor() {
    super(_Nano68Profile.saveName, _Nano68Profile.defaultProfileCount, _Nano68Profile.customProfileIndex, _Nano68Profile.showCustomProfile);
  }
};
V(Zo, "saveName", "arbiter-nano68-profile");
V(Zo, 'defaultProfileCount', 1);
V(Zo, "customProfileIndex", 0);
V(Zo, "showCustomProfile", true);
let Qo = Zo;
const eu = class _Mad68Profile extends Digital {
  constructor() {
    super(_Mad68Profile.saveName, _Mad68Profile.defaultProfileCount, _Mad68Profile.customProfileIndex, _Mad68Profile.showCustomProfile);
  }
};
V(eu, "saveName", 'ab-mad68pro-profile');
V(eu, "defaultProfileCount", 1);
V(eu, "customProfileIndex", 0);
V(eu, "showCustomProfile", true);
let tu = eu;
const ru = class _ArbiterFile68UltraLimit extends Digital {
  constructor() {
    super(_ArbiterFile68UltraLimit.saveName, _ArbiterFile68UltraLimit.defaultProfileCount, _ArbiterFile68UltraLimit.customProfileIndex, _ArbiterFile68UltraLimit.showCustomProfile);
  }
};
V(ru, 'saveName', 'ab-fire68-ultra-limit');
V(ru, "defaultProfileCount", 1);
V(ru, "customProfileIndex", 0);
V(ru, "showCustomProfile", true);
let su = ru;
const nu = class _ArbiterFile68V2 extends Digital {
  constructor() {
    super(_ArbiterFile68V2.saveName, _ArbiterFile68V2.defaultProfileCount, _ArbiterFile68V2.customProfileIndex, _ArbiterFile68V2.showCustomProfile);
  }
};
V(nu, "saveName", "ab-fire68-v2");
V(nu, "defaultProfileCount", 1);
V(nu, 'customProfileIndex', 0);
V(nu, "showCustomProfile", true);
let au = nu;
const iu = class _ArbiterFile68ProV2 extends Digital {
  constructor() {
    super(_ArbiterFile68ProV2.saveName, _ArbiterFile68ProV2.defaultProfileCount, _ArbiterFile68ProV2.customProfileIndex, _ArbiterFile68ProV2.showCustomProfile);
  }
};
V(iu, 'saveName', "ab-fire68-pro-v2");
V(iu, "defaultProfileCount", 1);
V(iu, "customProfileIndex", 0);
V(iu, "showCustomProfile", true);
let ou = iu;
const uu = class _CompxMadProfile extends Digital {
  constructor() {
    super(_CompxMadProfile.saveName, _CompxMadProfile.defaultProfileCount, _CompxMadProfile.customProfileIndex, _CompxMadProfile.showCustomProfile);
  }
};
V(uu, "saveName", 'compx-mad-profile');
V(uu, "defaultProfileCount", 3);
V(uu, "customProfileIndex", 3);
V(uu, "showCustomProfile", true);
let cu = uu;
const lu = class _CompxMadDongleProfile extends Digital {
  constructor() {
    super(_CompxMadDongleProfile.saveName, _CompxMadDongleProfile.defaultProfileCount, _CompxMadDongleProfile.customProfileIndex, _CompxMadDongleProfile.showCustomProfile);
  }
};
V(lu, "saveName", "mad-dongle-profile");
V(lu, 'defaultProfileCount', 3);
V(lu, "customProfileIndex", 3);
V(lu, 'showCustomProfile', true);
let fu = lu;
const hu = class _Compx3311Profile extends Digital {
  constructor() {
    super(_Compx3311Profile.saveName, _Compx3311Profile.defaultProfileCount, _Compx3311Profile.customProfileIndex, _Compx3311Profile.showCustomProfile);
  }
};
V(hu, "saveName", "fgg-cx-3311-profile");
V(hu, "defaultProfileCount", 3);
V(hu, "customProfileIndex", 3);
V(hu, "showCustomProfile", true);
let du = hu;
const gu = class _Compx3395SEProfile extends Digital {
  constructor() {
    super(_Compx3395SEProfile.saveName, _Compx3395SEProfile.defaultProfileCount, _Compx3395SEProfile.customProfileIndex, _Compx3395SEProfile.showCustomProfile);
  }
};
V(gu, 'saveName', "fgg-cx-3395se-profile");
V(gu, 'defaultProfileCount', 3);
V(gu, "customProfileIndex", 3);
V(gu, 'showCustomProfile', true);
let mu = gu;
const pu = class _HoltekProfile extends Digital {
  constructor() {
    super(_HoltekProfile.saveName, _HoltekProfile.defaultProfileCount, _HoltekProfile.customProfileIndex, _HoltekProfile.showCustomProfile);
  }
};
V(pu, "saveName", "holtek-profile");
V(pu, 'defaultProfileCount', 3);
V(pu, "customProfileIndex", 3);
V(pu, "showCustomProfile", true);
let yu = pu;
const wu = class _BitMouseProfile extends Digital {
  constructor() {
    super(_BitMouseProfile.saveName, _BitMouseProfile.defaultProfileCount, _BitMouseProfile.customProfileIndex, _BitMouseProfile.showCustomProfile);
  }
};
V(wu, "saveName", 'bit-mouse-profile');
V(wu, "defaultProfileCount", 1);
V(wu, 'customProfileIndex', 0);
V(wu, "showCustomProfile", true);
let bu = wu;
const _u = [{
    controller: Ls,
    digital: zo,
    meta: {
      deviceName: "Keyboard",
      component: "fire-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4206,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "MAD 68 R",
        shaft: "magnetic-jade",
        firmwareMark: "Mad68R",
        title: "MAD68 R",
        cover: "mad68r",
        themeConfigName: "mad68r-1063",
        theme: [{
          label: "Skin.Black",
          value: "black-light"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8239,
        firmwareMark: "Mad68R"
      }
    }, {
      vendorId: 14139,
      productId: 4264,
      usage: 0,
      usagePage: 1,
      custom: {
        name: 'MAD\x2068\x20R',
        shaft: 'magnetic-jade',
        firmwareMark: "Mad68R",
        title: "MAD68 R",
        cover: "mad68r",
        themeConfigName: "mad68r-10a8",
        theme: [{
          label: "Skin.Black",
          value: "black-light"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8271,
        firmwareMark: "Mad68R"
      }
    }]
  }, {
    controller: Ls,
    digital: tu,
    meta: {
      deviceName: "Keyboard",
      component: "fire-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4307,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "MAD 68 Pro",
        shaft: "uranus",
        shafts: [xr.MagneticJade, xr.Uranus, xr.MagneticJadeEsports, xr.MagnetoGaming],
        title: "MAD68 Pro R",
        cover: "mad68",
        themeConfigName: "mad68-pro-10d3",
        theme: [{
          label: "Skin.Black Contour",
          value: "black-contour"
        }, {
          label: "Skin.White Contour",
          value: "white-contour"
        }, {
          label: 'Skin.Pink\x20Side',
          value: "pink-side"
        }],
        firmwareMark: "mad68pro"
      },
      boot: {
        vendorId: 14139,
        productId: 8306,
        firmwareMark: "mad68pro"
      }
    }, {
      vendorId: 14139,
      productId: 4308,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "MAD 68 Pro",
        shaft: "magnetic-jade",
        shafts: [xr.MagneticJade, xr.Uranus, xr.MagneticJadeEsports, xr.MagnetoGaming],
        firmwareMark: "mad68pro",
        title: 'MAD68\x20Pro\x20R',
        cover: "mad68",
        themeConfigName: 'mad68-pro-10d4',
        theme: [{
          label: 'Skin.Black\x20Contour',
          value: 'black-contour',
          icon: "#000"
        }, {
          label: "Skin.White Contour",
          value: "white-contour",
          icon: "#fff"
        }, {
          label: "Skin.Pink Side",
          value: "pink-side"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8307,
        firmwareMark: 'mad68pro'
      }
    }, {
      vendorId: 14139,
      productId: 4354,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "MAD 68 Pro",
        shaft: "magneto-gaming",
        shafts: [xr.MagneticJade, xr.Uranus, xr.MagneticJadeEsports, xr.MagnetoGaming],
        firmwareMark: "mad68pro",
        title: "MAD68 Pro R",
        cover: "mad68",
        themeConfigName: 'mad68-pro-1102',
        theme: [{
          label: "Skin.Black Contour",
          value: "black-contour"
        }, {
          label: "Skin.White Contour",
          value: 'white-contour'
        }, {
          label: 'Skin.Pink\x20Side',
          value: 'pink-side'
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8333,
        firmwareMark: "mad68pro"
      }
    }, {
      vendorId: 14139,
      productId: 4361,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "MAD 68 Pro",
        shaft: "magnetic-jade-esports-pro",
        shafts: [xr.MagneticJade, xr.Uranus, xr.MagneticJadeEsports, xr.MagnetoGaming],
        firmwareMark: "mad68pro",
        title: "MAD68 Pro R",
        cover: "mad68",
        themeConfigName: "mad68-pro-1109",
        theme: [{
          label: 'Skin.Black\x20Contour',
          value: "black-contour"
        }, {
          label: "Skin.White Contour",
          value: "white-contour"
        }, {
          label: "Skin.Pink Side",
          value: "pink-side"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8448,
        firmwareMark: "mad68pro"
      }
    }, {
      vendorId: 14139,
      productId: 4401,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "MAD 68 Pro",
        shaft: "aurora-magnetic",
        shafts: [xr.MagneticJade, xr.Uranus, xr.MagneticJadeEsports, xr.MagnetoGaming, xr.AuroraMagnetic],
        firmwareMark: 'mad68pro',
        title: "MAD68 Pro R",
        cover: "mad68",
        themeConfigName: "mad68-pro-1131",
        theme: [{
          label: 'Skin.Black\x20Contour',
          value: 'black-contour'
        }, {
          label: 'Skin.White\x20Contour',
          value: "white-contour"
        }, {
          label: "Skin.Pink Side",
          value: "pink-side"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8476,
        firmwareMark: "mad68pro"
      }
    }]
  }],
  vu = _u.map(arg => arg.filters).flat().map(arg => {
    const {
      boot: value1
    } = arg;
    return {
      ...arg,
      ...value1,
      usage: 1,
      usagePage: 65280
    };
  }),
  ku = [xr.MagneticJade, xr.MagneticAmber, xr.Leviathan, xr.Uranus, xr.MagneticJadeEsports, xr.MagnetoGaming, xr.MagnetoKing, xr.AuroraMagnetic],
  Cu = [{
    label: 'Skin.Spinel\x20White',
    value: "white"
  }, {
    label: 'Skin.Peach',
    value: 'peach'
  }, {
    label: 'Skin.Mocha\x20Brown',
    value: "brown"
  }],
  Su = [{
    controller: Ls,
    digital: Qo,
    meta: {
      deviceName: "Keyboard",
      component: 'fire-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4196,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Nano 68",
        shaft: "magnetic-amber-pro",
        shafts: [...ku],
        firmwareMark: "Nano68",
        title: "NANO68",
        cover: "nano68",
        themeConfigName: "nano68-1064",
        theme: [{
          label: "Skin.Spinel White",
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8235,
        firmwareMark: "Nano68"
      }
    }, {
      vendorId: 14139,
      productId: 4203,
      usage: 0,
      usagePage: 1,
      custom: {
        name: 'Nano\x2068\x20Pro',
        shaft: 'uranus-esport',
        shafts: [...ku],
        firmwareMark: "Nano68",
        title: "NANO68 Pro",
        cover: 'nano68',
        themeConfigName: 'nano68-106b',
        theme: [...Cu]
      },
      boot: {
        vendorId: 14139,
        productId: 8236,
        firmwareMark: "Nano68"
      }
    }, {
      vendorId: 14139,
      productId: 4205,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Nano 68 Pro",
        shaft: "magnetic-emperor-esports",
        shafts: [...ku],
        firmwareMark: "Nano68",
        title: "NANO68 Pro",
        cover: 'nano68',
        themeConfigName: "nano68-106d",
        theme: [{
          label: "Skin.Spinel White",
          value: 'white'
        }, {
          label: 'Skin.Peach',
          value: 'peach'
        }, {
          label: 'Skin.Mocha\x20Brown',
          value: 'brown'
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8238,
        firmwareMark: "Nano68"
      }
    }, {
      vendorId: 14139,
      productId: 4351,
      usage: 0,
      usagePage: 1,
      custom: {
        name: 'Nano\x2068\x20Pro',
        shaft: "magnetic-jade",
        shafts: [...ku],
        firmwareMark: "Nano68",
        title: "NANO68 Pro",
        cover: "nano68",
        themeConfigName: 'nano68-10ff',
        theme: [...Cu]
      },
      boot: {
        vendorId: 14139,
        productId: 8331,
        firmwareMark: "Nano68"
      }
    }, {
      vendorId: 14139,
      productId: 4352,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Nano 68 Pro",
        shaft: "magneto-gaming",
        shafts: [...ku],
        firmwareMark: 'Nano68',
        title: "NANO68 Pro",
        cover: "nano68",
        themeConfigName: "nano68-1100",
        theme: [...Cu]
      },
      boot: {
        vendorId: 14139,
        productId: 8332,
        firmwareMark: "Nano68"
      }
    }, {
      vendorId: 14139,
      productId: 4410,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Nano 68 Pro",
        shaft: 'phantom-god',
        shafts: [...ku, xr.PhantomGod],
        firmwareMark: 'Nano68',
        title: "NANO68 Pro",
        cover: "nano68",
        themeConfigName: 'nano68-113a',
        theme: [...Cu]
      },
      boot: {
        vendorId: 14139,
        productId: 8485,
        firmwareMark: "Nano68"
      }
    }, {
      vendorId: 14139,
      productId: 4364,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Nano 68 Pro",
        shaft: "magnetic-jade-esports-pro",
        shafts: [...ku],
        firmwareMark: "Nano68",
        title: "NANO68 Pro",
        cover: "nano68",
        themeConfigName: 'nano68-110c',
        theme: [...Cu]
      },
      boot: {
        vendorId: 14139,
        productId: 8451,
        firmwareMark: "Nano68"
      }
    }, {
      vendorId: 14139,
      productId: 4419,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Nano 68 Pro",
        shaft: "aurora-magnetic",
        shafts: [...ku],
        firmwareMark: "Nano68",
        title: "NANO68 Pro",
        cover: "nano68",
        themeConfigName: "nano68-1143",
        theme: [...Cu]
      },
      boot: {
        vendorId: 14139,
        productId: 8492,
        firmwareMark: "Nano68"
      }
    }, {
      vendorId: 14139,
      productId: 4353,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Nano 68 Plus",
        shaft: "magneto-king",
        shafts: [...ku],
        firmwareMark: "Nano68",
        title: 'NANO68\x20Plus',
        cover: "nano68",
        themeConfigName: "nano68-1101",
        theme: [{
          label: "Skin.Violet",
          value: "violet"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8332,
        firmwareMark: "Nano68"
      }
    }, {
      vendorId: 14139,
      productId: 4513,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Nano 68 Ultra",
        shaft: "magnetic-jade",
        shafts: [...ku],
        firmwareMark: "Nano68",
        title: "NANO68 Ultra",
        cover: 'nano68',
        themeConfigName: "nano68-11a1",
        theme: [{
          label: 'Skin.Violet',
          value: "violet"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8549,
        firmwareMark: "Nano68"
      }
    }]
  }],
  Uu = Su.map(arg => arg.filters).flat().map(arg => {
    const {
      boot: value1
    } = arg;
    return {
      ...arg,
      ...value1,
      usage: 1,
      usagePage: 65280
    };
  }),
  Du = [{
    controller: Ls,
    digital: No,
    meta: {
      deviceName: "Keyboard",
      component: "fire-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4167,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Fire 68",
        type: "fire-lightless-68",
        shaft: 'magnetic-white',
        firmwareVersion: "1.07",
        shafts: [xr.MagneticWhite, xr.MagneticJade, xr.Magneto],
        firmwareMark: 'Fire68',
        title: "FIRE68",
        cover: "fire68",
        themeConfigName: "fire68-1047",
        theme: [{
          label: "Skin.Black",
          value: 'black'
        }, {
          label: 'Skin.White',
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8215,
        firmwareMark: "Fire68"
      }
    }]
  }, {
    controller: Ls,
    digital: zo,
    meta: {
      deviceName: "Keyboard",
      component: 'fire-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4152,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Fire 68",
        shaft: "magnetic-white",
        firmwareVersion: "1.07",
        shafts: [xr.MagneticWhite, xr.MagneticJade, xr.Magneto],
        firmwareMark: 'Fire68',
        title: "FIRE68",
        cover: "fire68",
        themeConfigName: 'fire68-1038',
        theme: [{
          label: "Skin.Black",
          value: "black"
        }, {
          label: "Skin.White",
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8207,
        firmwareMark: "Fire68"
      }
    }, {
      vendorId: 14139,
      productId: 4174,
      usage: 0,
      usagePage: 1,
      custom: {
        name: 'Fire\x2068',
        shaft: "magnetic-white",
        firmwareVersion: "1.07",
        shafts: [xr.MagneticWhite, xr.MagneticJade, xr.Magneto],
        firmwareMark: 'Fire68',
        title: "FIRE68",
        cover: 'fire68',
        themeConfigName: "fire68-1043",
        theme: [{
          label: "Skin.Black",
          value: "black"
        }, {
          label: "Skin.White",
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8218,
        firmwareMark: "Fire68"
      }
    }, {
      vendorId: 14139,
      productId: 4176,
      usage: 0,
      usagePage: 1,
      custom: {
        name: 'Fire\x2068\x20LL',
        shaft: "magnetic-white",
        firmwareVersion: "1.07",
        shafts: [xr.MagneticWhite, xr.MagneticJade, xr.Magneto],
        firmwareMark: "Fire68",
        title: "FIRE68 (LL)",
        cover: "fire68",
        themeConfigName: "fire68-1050",
        theme: [{
          label: "Skin.Black",
          value: "black-berry"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8220,
        firmwareMark: "Fire68"
      }
    }]
  }, {
    controller: Ls,
    digital: Wo,
    meta: {
      deviceName: "Keyboard",
      component: 'fire-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4155,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Fire 68 Pro",
        shaft: "magnetic-jade",
        firmwareVersion: "1.07",
        shafts: [xr.MagneticWhite, xr.MagneticJade, xr.Magneto],
        firmwareMark: "Fire68Pro",
        title: "FIRE68 Pro",
        cover: "fire68",
        themeConfigName: "fire68-103b",
        theme: [{
          label: "Skin.Black",
          value: "black"
        }, {
          label: "Skin.White",
          value: 'white'
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8212,
        firmwareMark: "Fire68Pro"
      }
    }, {
      vendorId: 14139,
      productId: 4177,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Fire 68 Pro LL",
        shaft: "magnetic-jade",
        firmwareVersion: "1.07",
        shafts: [xr.MagneticWhite, xr.MagneticJade, xr.Magneto],
        firmwareMark: "Fire68Pro",
        title: "FIRE68 Pro (LL)",
        cover: "fire68",
        themeConfigName: "fire68-1051",
        theme: [{
          label: "Skin.Black",
          value: 'black-berry'
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8221,
        firmwareMark: "Fire68Pro"
      }
    }]
  }, {
    controller: Ls,
    digital: Yo,
    meta: {
      deviceName: "Keyboard",
      component: "fire-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4178,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Fire 68",
        shaft: "magnetic-white",
        firmwareVersion: '1.07',
        shafts: [xr.MagneticWhite, xr.MagneticJade, xr.Magneto],
        title: "FIRE68",
        cover: "fire68",
        themeConfigName: "fire68-1052",
        theme: [{
          label: "Skin.Black",
          value: "black"
        }],
        firmwareMark: "fire68"
      },
      boot: {
        vendorId: 14139,
        productId: 8222,
        firmwareMark: "fire68"
      }
    }]
  }, {
    controller: Ls,
    digital: qo,
    meta: {
      deviceName: "Keyboard",
      component: 'fire-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4193,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "Fire 68 Ultra",
        shaft: "magnetic-jade",
        firmwareVersion: "1.07",
        shafts: [xr.MagneticWhite, xr.MagneticJade, xr.Magneto],
        firmwareMark: "Fire68Ultra",
        title: "FIRE68 Ultra",
        cover: "fire68-ultra",
        themeConfigName: "fire68-1061",
        theme: [{
          label: 'Skin.Black',
          value: "black"
        }, {
          label: 'Skin.White',
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8234,
        firmwareMark: "Fire68Ultra"
      }
    }]
  }, {
    controller: Ls,
    digital: Xo,
    meta: {
      deviceName: "Keyboard",
      component: "fire-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4289,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "FIRE 68 Ultra V2",
        shaft: "magnetic-jade",
        shafts: [xr.MagneticWhite, xr.MagneticJade, xr.Magneto],
        firmwareMark: 'Fire68Ultra',
        title: "FIRE68 Ultra V2",
        cover: "fire68-ultra",
        themeConfigName: "fire68-10c1",
        theme: [{
          label: 'Skin.Black',
          value: "black"
        }, {
          label: "Skin.White",
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8294,
        firmwareMark: "Fire68Ultra"
      }
    }, {
      vendorId: 14139,
      productId: 4331,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "FIRE 68 Ultra V2",
        shaft: "magnetic-jade",
        shafts: [xr.MagneticWhite, xr.MagneticJade, xr.Magneto],
        firmwareMark: "Fire68Ultra",
        title: 'FIRE68\x20Ultra\x20V2',
        cover: "fire68-ultra",
        themeConfigName: "fire68-10eb",
        theme: [{
          label: "Skin.Black",
          value: 'black'
        }, {
          label: "Skin.White",
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8314,
        firmwareMark: "Fire68Ultra"
      }
    }]
  }, {
    controller: Ls,
    digital: su,
    meta: {
      deviceName: "Keyboard",
      component: 'fire-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4309,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "FIRE 68 Ultra Limit",
        shaft: "magnetic-jade",
        shafts: [xr.MagneticJadePro, xr.Uranus],
        firmwareMark: 'fire68',
        title: "FIRE68 Ultra Limited",
        cover: "fire68-ultra",
        themeConfigName: "fire68-10eb",
        theme: [{
          label: "Skin.Spear of Fate",
          value: 'fate'
        }, {
          label: "Skin.Love Story",
          value: 'love'
        }, {
          label: "Hallo Rose",
          value: "rose"
        }, {
          label: "Skin.Scientific Bubble",
          value: "science"
        }, {
          label: "Skin.Qi Sky",
          value: "sky"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8308,
        firmwareMark: "fire68"
      }
    }]
  }, {
    controller: Ls,
    digital: au,
    meta: {
      deviceName: 'Keyboard',
      component: "fire-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4338,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "FIRE 68 V2",
        shaft: "magnetic-white",
        shafts: [xr.MagneticJadePro, xr.Magneto],
        firmwareMark: "fire68-v2",
        title: "FIRE68 V2",
        cover: "fire68",
        themeConfigName: "fire68-10f2",
        theme: [{
          label: 'Skin.Black',
          value: "black"
        }, {
          label: "Skin.White",
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8321,
        firmwareMark: "fire68-v2"
      }
    }, {
      vendorId: 14139,
      productId: 4339,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "FIRE 68 V2",
        shaft: "magnetic-white",
        shafts: [xr.MagneticJadePro, xr.Magneto],
        firmwareMark: 'fire68-v2',
        title: 'FIRE68\x20V2',
        cover: "fire68",
        themeConfigName: "fire68-10f3",
        theme: [{
          label: 'Skin.Black',
          value: 'black'
        }, {
          label: 'Skin.White',
          value: 'white'
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8322,
        firmwareMark: 'fire68-v2'
      }
    }]
  }, {
    controller: Ls,
    digital: ou,
    meta: {
      deviceName: "Keyboard",
      component: "fire-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4340,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "FIRE 68 PRO V2",
        shaft: 'magnetic-jade',
        shafts: [xr.MagneticJadePro, xr.Magneto],
        firmwareMark: 'fire68-v2',
        title: "FIRE68 Pro V2",
        cover: "fire68",
        themeConfigName: "fire68-10f4",
        theme: [{
          label: "Skin.Black",
          value: "black"
        }, {
          label: "Skin.White",
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8323,
        firmwareMark: "fire68-v2"
      }
    }, {
      vendorId: 14139,
      productId: 4341,
      usage: 0,
      usagePage: 1,
      custom: {
        name: "FIRE 68 PRO V2",
        shaft: "magnetic-jade",
        shafts: [xr.MagneticJadePro, xr.Magneto],
        firmwareMark: "fire68-v2",
        title: "FIRE68 Pro",
        cover: "fire68",
        themeConfigName: "fire68-10f5",
        theme: [{
          label: "Skin.Black",
          value: "black"
        }, {
          label: 'Skin.White',
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8324,
        firmwareMark: "fire68-v2"
      }
    }]
  }],
  Ou = Du.map(arg => arg.filters).flat().map(arg => {
    const {
      boot: value1
    } = arg;
    return {
      ...arg,
      ...value1,
      usage: 1,
      usagePage: 65280
    };
  }),
  xu = [...Du, ..._u, ...Su],
  Ku = [{
    controller: Ls,
    digital: zo,
    meta: {
      deviceName: "RecoveryMode",
      component: "recovery-mode"
    },
    filters: [...Ou]
  }, {
    controller: Ls,
    digital: zo,
    meta: {
      deviceName: "RecoveryMode",
      component: 'recovery-mode'
    },
    filters: [...vu]
  }, {
    controller: Ls,
    digital: zo,
    meta: {
      deviceName: "RecoveryMode",
      component: "recovery-mode"
    },
    filters: [...Uu]
  }],
  Au = [...xu, ...Ku],
  Iu = xu.map(arg => arg.filters).flat().map(arg => null == arg ? void 0 : arg.boot).filter(Boolean);
let Pu = (r = class {
  constructor(arg, arg2) {
    V(this, "raw");
    let value1 = arg ? arg.buffer : new ArrayBuffer(r.SIZE);
    this.raw = new DataView(value1);
    this.commandId = arg2;
  }
  static ["getData"]() {
    return new DataView(new ArrayBuffer(r.SIZE));
  }
  ["toUint8Array"]() {
    return new Uint8Array(this.raw.buffer);
  }
  get ['baseOffset']() {
    return r.baseOffset;
  }
  get ["commandId"]() {
    return this.raw.getUint8(0);
  }
  set ['commandId'](arg) {
    this.raw.setUint8(0, arg);
  }
  ["setRaw"](arg) {
    this.raw = arg;
    return this;
  }
  ["toStringTx"]() {
    return "requestCode: " + this.commandId + ',\x20commandId:\x20' + this.commandId;
  }
  ["toStringRx"]() {
    return "requestCode: " + this.commandId + ", commandId: " + this.commandId;
  }
}, V(r, "SIZE", 32), V(r, "baseOffset", 1), r);
var Mu = (arg => (arg[arg.id_get_protocol_version = 1] = "id_get_protocol_version", arg[arg.id_get_keyboard_value = 2] = "id_get_keyboard_value", arg[arg.id_set_keyboard_value = 3] = "id_set_keyboard_value", arg[arg.id_dynamic_keymap_get_keycode = 4] = "id_dynamic_keymap_get_keycode", arg[arg.id_dynamic_keymap_set_keycode = 5] = "id_dynamic_keymap_set_keycode", arg[arg.id_dynamic_keymap_reset = 6] = 'id_dynamic_keymap_reset', arg[arg.id_custom_set_value = 7] = "id_custom_set_value", arg[arg.id_custom_get_value = 8] = "id_custom_get_value", arg[arg.id_custom_save = 9] = 'id_custom_save', arg[arg.id_lighting_set_value = 7] = "id_lighting_set_value", arg[arg.id_lighting_get_value = 8] = "id_lighting_get_value", arg[arg.id_lighting_save = 9] = "id_lighting_save", arg[arg.id_eeprom_reset = 10] = "id_eeprom_reset", arg[arg.id_bootloader_jump = 11] = "id_bootloader_jump", arg[arg.id_dynamic_keymap_macro_get_count = 12] = 'id_dynamic_keymap_macro_get_count', arg[arg.id_dynamic_keymap_macro_get_buffer_size = 13] = "id_dynamic_keymap_macro_get_buffer_size", arg[arg.id_dynamic_keymap_macro_get_buffer = 14] = "id_dynamic_keymap_macro_get_buffer", arg[arg.id_dynamic_keymap_macro_set_buffer = 15] = "id_dynamic_keymap_macro_set_buffer", arg[arg.id_dynamic_keymap_macro_reset = 16] = "id_dynamic_keymap_macro_reset", arg[arg.id_dynamic_keymap_get_layer_count = 17] = "id_dynamic_keymap_get_layer_count", arg[arg.id_dynamic_keymap_get_buffer = 18] = "id_dynamic_keymap_get_buffer", arg[arg.id_dynamic_keymap_set_buffer = 19] = 'id_dynamic_keymap_set_buffer', arg[arg.id_vial_prefix = 254] = "id_vial_prefix", arg[arg.id_unhandled = 255] = "id_unhandled", arg))(Mu || {}),
  Tu = (arg => (arg[arg.general = 0] = "general", arg[arg.lt0 = 64] = 'lt0', arg[arg.lt1 = 65] = "lt1", arg[arg.lt2 = 66] = "lt2", arg[arg.lt3 = 67] = 'lt3', arg[arg.layer = 82] = "layer", arg[arg.swap = 86] = "swap", arg[arg.tapDance = 87] = "tapDance", arg[arg.magic = 112] = 'magic', arg[arg.midi = 113] = "midi", arg[arg.sequencer = 114] = "sequencer", arg[arg.programming = 116] = 'programming', arg[arg.macro = 119] = "macro", arg[arg.light = 120] = 'light', arg[arg.system = 124] = 'system', arg[arg.kbAndUser = 126] = "kbAndUser", arg))(Tu || {}),
  Ru = (arg => (arg[arg.SS_TAP_CODE = 1] = "SS_TAP_CODE", arg[arg.SS_DOWN_CODE = 2] = 'SS_DOWN_CODE', arg[arg.SS_UP_CODE = 3] = "SS_UP_CODE", arg[arg.SS_DELAY_CODE = 4] = 'SS_DELAY_CODE', arg[arg.VIAL_MACRO_EXT_TAP = 5] = "VIAL_MACRO_EXT_TAP", arg[arg.VIAL_MACRO_EXT_DOWN = 6] = "VIAL_MACRO_EXT_DOWN", arg[arg.VIAL_MACRO_EXT_UP = 7] = "VIAL_MACRO_EXT_UP", arg))(Ru || {}),
  Eu = (arg => (arg[arg.normal = 0] = "normal", arg[arg.erase = 1] = "erase", arg[arg.write = 2] = "write", arg[arg.eraseAndWrite = 3] = "eraseAndWrite", arg))(Eu || {}),
  Bu = (arg => (arg[arg.customId = 150] = "customId", arg[arg.oneTogTh = 3] = "oneTogTh", arg[arg.bufferTogTh = 13] = "bufferTogTh", arg[arg.oneRt = 7] = "oneRt", arg[arg.bufferRt = 14] = "bufferRt", arg[arg.deadBand = 11] = "deadBand", arg[arg.lightInfo = 65] = "lightInfo", arg[arg.mixAxle = 16] = "mixAxle", arg[arg.iap = 152] = "iap", arg[arg.calibrate = 8] = "calibrate", arg[arg.feature = 17] = 'feature', arg[arg.dks = 15] = "dks", arg[arg.setCustomLamplight = 66] = 'setCustomLamplight', arg[arg.getCustomLamplight = 69] = "getCustomLamplight", arg[arg.saveLamplight = 18] = "saveLamplight", arg[arg.entryOp = 13] = "entryOp", arg[arg.tapDanceGet = 1] = "tapDanceGet", arg[arg.tapDanceSet = 2] = "tapDanceSet", arg[arg.layer = 19] = "layer", arg[arg.dataReporting = 20] = 'dataReporting', arg[arg.resetAll = 21] = 'resetAll', arg[arg.realTimeAdcAxle = 9] = "realTimeAdcAxle", arg[arg.realTimeTripAxle = 10] = "realTimeTripAxle", arg[arg.realTimeAdcAxleBuffer = 22] = "realTimeAdcAxleBuffer", arg[arg.realTimeTripAxleBuffer = 23] = "realTimeTripAxleBuffer", arg[arg.calibrationStart = 24] = 'calibrationStart', arg[arg.calibrationFinish = 25] = "calibrationFinish", arg[arg.completeStatusBuffer = 27] = "completeStatusBuffer", arg[arg.adcTripCompStatusBuffer = 28] = "adcTripCompStatusBuffer", arg[arg.bottomOptimizeSwitch = 29] = "bottomOptimizeSwitch", arg[arg.gameMode = 30] = "gameMode", arg[arg.calibration = 31] = "calibration", arg[arg.rs = 32] = 'rs', arg[arg.boxLight = 33] = "boxLight", arg))(Bu || {}),
  Lu = (arg => (arg[arg.START_CFG = 1] = 'START_CFG', arg[arg.SAVE_CFG = 2] = 'SAVE_CFG', arg[arg.GET_KEY = 3] = 'GET_KEY', arg[arg.GET_KEY_BUFFER = 4] = "GET_KEY_BUFFER", arg[arg.SET_KEY = 5] = "SET_KEY", arg[arg.SET_KEY_BUFFER = 6] = 'SET_KEY_BUFFER', arg[arg.SET_KEY_ALL = 7] = "SET_KEY_ALL", arg))(Lu || {}),
  Vu = (arg => (arg[arg.NONE = 0] = 'NONE', arg[arg.RS = 1] = 'RS', arg[arg.SOCD = 2] = "SOCD", arg[arg.SOCD_KEY1 = 3] = "SOCD_KEY1", arg[arg.SOCD_KEY2 = 4] = "SOCD_KEY2", arg[arg.SOCD_BALANCE = 5] = "SOCD_BALANCE", arg[arg.OKS = 6] = "OKS", arg))(Vu || {}),
  Fu = (arg => (arg[arg.get = 1] = "get", arg[arg.getBuffer = 2] = "getBuffer", arg[arg.set = 3] = 'set', arg[arg.setBuffer = 4] = 'setBuffer', arg))(Fu || {}),
  Nu = (arg => (arg[arg.get = 1] = "get", arg[arg.getBuffer = 2] = "getBuffer", arg[arg.set = 3] = "set", arg[arg.setBuffer = 4] = "setBuffer", arg))(Nu || {}),
  Gu = (arg => (arg[arg.noneSt = 0] = 'noneSt', arg[arg.defaultLayerSt = 1] = "defaultLayerSt", arg[arg.swapWasdSt = 2] = "swapWasdSt", arg[arg.macosSt = 3] = 'macosSt', arg[arg.winLockSt = 4] = "winLockSt", arg[arg.nKroSt = 5] = "nKroSt", arg))(Gu || {});
let zu = class KeyAction2 {
    constructor(arg, arg1) {
      V(this, "dataView");
      V(this, "offset");
      this.dataView = arg;
      this.offset = arg1;
    }
    get ["i18nText"]() {
      return "Unknown";
    }
    get ['original']() {
      return {
        dataView: this.dataView,
        offset: this.offset
      };
    }
    static ['createDataView'](arg, arg1) {
      const value2 = new DataView(new ArrayBuffer(2));
      value2.setUint8(0, arg);
      value2.setUint8(1, arg1);
      return value2;
    }
    get ["keyClass"]() {
      return this.dataView.getUint8(this.offset);
    }
    get ["keyId"]() {
      return this.dataView.getUint8(this.offset + 1);
    }
    ["toJSON"]() {
      return {
        keyClass: this.keyClass,
        keyId: this.keyId
      };
    }
    ["toString"]() {
      return Array.from([this.keyClass, this.keyId]).map(arg => arg.toString().padStart(2, '0')).join('');
    }
    ["toString2"]() {
      return JSON.stringify({
        dataView: Array.from(new Uint8Array(this.dataView.buffer)),
        offset: this.offset
      });
    }
    ["toObject"]() {
      return {
        dataView: this.dataView,
        offset: this.offset
      };
    }
    static ["fromDataView"](arg1, arg) {
      switch (arg1.getUint8(arg)) {
        case Tu.lt0:
        case Tu.lt1:
        case Tu.lt2:
        case Tu.lt3:
          return new rc(arg1, arg);
        case Tu.layer:
          return new ju(arg1, arg);
        case Tu.swap:
          return new Yu(arg1, arg);
        case Tu.magic:
          return new $u(arg1, arg);
        case Tu.midi:
          return new qu(arg1, arg);
        case Tu.sequencer:
          return new Ju(arg1, arg);
        case Tu.programming:
          return new Xu(arg1, arg);
        case Tu.macro:
          return new Zu(arg1, arg);
        case Tu.light:
          return new Qu(arg1, arg);
        case Tu.system:
          return new ec(arg1, arg);
        case Tu.kbAndUser:
          return new tc(arg1, arg);
        case Tu.general:
          return 1 === arg1.getUint8(arg + 1) ? new Hu(arg1, arg) : new Wu(arg1, arg);
        case Tu.tapDance:
          return new sc(arg1, arg);
        default:
          return new KeyAction2(arg1, arg);
      }
    }
  },
  Hu = (V(s = class extends zu {
    get ['i18nText']() {
      return "Use the next lowest non-transparent key";
    }
    static ["create"]() {
      return new Wu(super.createDataView(this.TYPE, 1), 0);
    }
  }, "TYPE", Tu.general), s),
  Wu = (V(n = class extends zu {
    get ['i18nText']() {
      return 'key.keyboardKey';
    }
    static ["create"](arg) {
      return new n(super.createDataView(this.TYPE, arg), 0);
    }
  }, 'TYPE', Tu.general), n),
  ju = (V(a = class extends zu {
    get ['i18nText']() {
      return "key.layer";
    }
    static ["create"](arg) {
      return new a(super.createDataView(this.TYPE, arg), 0);
    }
  }, "TYPE", Tu.layer), a),
  Yu = (V(i = class extends zu {
    get ["i18nText"]() {
      return "key.swap";
    }
    static ['create'](arg) {
      return new i(super.createDataView(this.TYPE, arg), 0);
    }
  }, "TYPE", Tu.swap), i),
  $u = (V(o = class extends zu {
    get ["i18nText"]() {
      return "key.magic";
    }
    static ["create"](arg) {
      return new o(super.createDataView(this.TYPE, arg), 0);
    }
  }, "TYPE", Tu.magic), o),
  qu = (V(u = class extends zu {
    get ['i18nText']() {
      return "key.midi";
    }
    static ["create"](arg) {
      return new u(super.createDataView(this.TYPE, arg), 0);
    }
  }, 'TYPE', Tu.midi), u),
  Ju = (V(c = class extends zu {
    get ["i18nText"]() {
      return "key.midi";
    }
    static ['create'](arg) {
      return new c(super.createDataView(this.TYPE, arg), 0);
    }
  }, "TYPE", Tu.sequencer), c),
  Xu = (V(l = class extends zu {
    get ["i18nText"]() {
      return "key.programming";
    }
    static ["create"](arg) {
      return new l(super.createDataView(this.TYPE, arg), 0);
    }
  }, "TYPE", Tu.programming), l),
  Zu = (V(f = class extends zu {
    get ['i18nText']() {
      return "key.macroKey";
    }
    static ["create"](arg) {
      return new f(super.createDataView(this.TYPE, arg), 0);
    }
  }, 'TYPE', Tu.macro), f),
  Qu = (V(h = class extends zu {
    get ["i18nText"]() {
      return "key.light";
    }
    static ['create'](arg) {
      return new h(super.createDataView(this.TYPE, arg), 0);
    }
  }, "TYPE", Tu.light), h),
  ec = (V(d = class extends zu {
    get ["i18nText"]() {
      return "key.system";
    }
    static ["create"](arg) {
      return new d(super.createDataView(this.TYPE, arg), 0);
    }
  }, "TYPE", Tu.system), d),
  tc = (V(g = class extends zu {
    get ["i18nText"]() {
      return "key.kbAndUser";
    }
    static ['create'](arg) {
      return new g(super.createDataView(this.TYPE, arg), 0);
    }
  }, "TYPE", Tu.kbAndUser), g),
  rc = class LTKeyAction extends zu {
    get ["i18nText"]() {
      return "key.lt";
    }
    static ["create"](arg) {
      return new LTKeyAction(super.createDataView(arg, 0), 0);
    }
  },
  sc = (V(m = class extends zu {
    get ['i18nText']() {
      return "Change Key Menu." + (this.keyId <= 19 ? "mt.title" : 'tgl.title');
    }
    static ['create'](arg) {
      return new m(super.createDataView(m.TYPE, arg), 0);
    }
  }, 'TYPE', Tu.tapDance), m);
const nc = class _DeLangKeyAction extends zu {
  get ["i18nText"]() {
    return ">\n<";
  }
  static ["create"](arg) {
    return new _DeLangKeyAction(super.createDataView(sc.TYPE, arg), 0);
  }
};
V(nc, "TYPE", Tu.general);
let ac = (p = class {
    constructor(arg1, arg, arg2) {
      V(this, "raw");
      V(this, "offset");
      V(this, 'length');
      this.raw = arg1;
      this.offset = arg;
      this.length = arg2;
    }
    get ["count"]() {
      return this.length;
    }
    get ["dataView"]() {
      return new DataView(this.raw.buffer.slice(this.offset, this.offset + this.length));
    }
    static ["fromDataView"](arg1, arg) {
      switch (arg1.getUint8(arg + 1)) {
        case Ru.SS_TAP_CODE:
          return new ic(arg1, arg, 3);
        case Ru.SS_DOWN_CODE:
          return new oc(arg1, arg, 3);
        case Ru.SS_UP_CODE:
          return new uc(arg1, arg, 3);
        case Ru.SS_DELAY_CODE:
          return new hc(arg1, arg, 4);
        case Ru.VIAL_MACRO_EXT_TAP:
          return new cc(arg1, arg, 4);
        case Ru.VIAL_MACRO_EXT_DOWN:
          return new lc(arg1, arg, 4);
        case Ru.VIAL_MACRO_EXT_UP:
          return new fc(arg1, arg, 4);
      }
    }
    ['toJSON']() {
      return {
        length: this.length,
        data: Array.from(new Uint8Array(this.dataView.buffer))
      };
    }
  }, V(p, 'size', 3), p),
  ic = (V(y = class extends ac {
    get ['keycode']() {
      return Wu.create(this.raw.getUint8(this.offset + 2));
    }
    static ["create"](arg1) {
      const value = new DataView(new ArrayBuffer(this.size));
      value.setUint8(0, 1);
      value.setUint8(1, this.TYPE);
      value.setUint8(2, arg1.keyId);
      return new y(value, 0, this.size);
    }
  }, "TYPE", Ru.SS_TAP_CODE), y),
  oc = (V(w = class extends ac {
    get ["keycode"]() {
      return Wu.create(this.raw.getUint8(this.offset + 2));
    }
    static ["create"](arg1) {
      const value = new DataView(new ArrayBuffer(this.size));
      value.setUint8(0, 1);
      value.setUint8(1, this.TYPE);
      value.setUint8(2, arg1.keyId);
      return new w(value, 0, this.size);
    }
  }, "TYPE", Ru.SS_DOWN_CODE), w),
  uc = (V(b = class extends ac {
    get ["keycode"]() {
      return Wu.create(this.raw.getUint8(this.offset + 2));
    }
    static ['create'](arg1) {
      const value = new DataView(new ArrayBuffer(this.size));
      value.setUint8(0, 1);
      value.setUint8(1, this.TYPE);
      value.setUint8(2, arg1.keyId);
      return new b(value, 0, this.size);
    }
  }, "TYPE", Ru.SS_UP_CODE), b),
  cc = (V(_ = class extends ac {
    get ["keycode"]() {
      const value = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
      return zu.fromDataView(value, 0);
    }
    static ["create"](arg) {
      const value1 = new DataView(new ArrayBuffer(this.size));
      value1.setUint8(0, 1);
      value1.setUint8(1, this.TYPE);
      value1.setUint8(2, arg.keyId);
      value1.setUint8(3, arg.keyClass);
      return new _(value1, 0, this.size);
    }
  }, "size", 4), V(_, "TYPE", Ru.VIAL_MACRO_EXT_TAP), _),
  lc = (V(v = class extends ac {
    get ['keycode']() {
      const value = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
      return zu.fromDataView(value, 0);
    }
    static ["create"](arg1) {
      const value = new DataView(new ArrayBuffer(this.size));
      value.setUint8(0, 1);
      value.setUint8(1, this.TYPE);
      value.setUint8(2, arg1.keyId);
      value.setUint8(3, arg1.keyClass);
      return new v(value, 0, this.size);
    }
  }, "size", 4), V(v, "TYPE", Ru.VIAL_MACRO_EXT_DOWN), v),
  fc = (V(k = class extends ac {
    get ['keycode']() {
      const value = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
      return zu.fromDataView(value, 0);
    }
    static ["create"](arg1) {
      const value = new DataView(new ArrayBuffer(this.size));
      value.setUint8(0, 1);
      value.setUint8(1, this.TYPE);
      value.setUint8(2, arg1.keyId);
      value.setUint8(3, arg1.keyClass);
      return new k(value, 0, this.size);
    }
  }, "size", 4), V(k, "TYPE", Ru.VIAL_MACRO_EXT_UP), k),
  hc = (V(C = class extends ac {
    get ["delay"]() {
      const value = new DataView(new ArrayBuffer(2));
      value.setUint8(0, this.raw.getUint8(this.offset + 2) - 1);
      value.setUint8(1, this.raw.getUint8(this.offset + 3) - 1);
      return value.getUint16(0, true);
    }
    static ["create"](arg4) {
      const value3 = new DataView(new ArrayBuffer(2));
      value3.setUint16(0, arg4, true);
      const value1 = value3.getUint8(0) + 1,
        value = value3.getUint8(1) + 1,
        value2 = new DataView(new ArrayBuffer(this.size));
      value2.setUint8(0, 1);
      value2.setUint8(1, this.TYPE);
      value2.setUint8(2, value1 > 255 ? 255 : value1);
      value2.setUint8(3, value > 255 ? 255 : value);
      return new C(value2, 0, this.size);
    }
  }, "size", 4), V(C, 'TYPE', Ru.SS_DELAY_CODE), C),
  dc = (S = class {
    constructor(arg, arg1) {
      V(this, "raw");
      V(this, "offset");
      this.raw = arg;
      this.offset = arg1;
    }
    static ["fromDataView"](arg1, arg) {
      return new S(arg1, arg);
    }
    static ["create"](arg2, arg1) {
      const value = new S(new DataView(new ArrayBuffer(S.size)), 0);
      value.status = arg2;
      value.keyCode = arg1;
      return value;
    }
    get ["dataView"]() {
      const value = new DataView(new ArrayBuffer(S.size), 0);
      value.setUint8(0, this.raw.getUint8(this.offset));
      value.setUint8(1, this.raw.getUint8(this.offset + 1));
      value.setUint8(2, this.raw.getUint8(this.offset + 2));
      value.setUint8(3, this.raw.getUint8(this.offset + 3));
      return value;
    }
    get ["statusArray"]() {
      const value = this.raw.getUint16(this.offset);
      return [value >> 0 & 1, value >> 1 & 1, value >> 2 & 1, value >> 3 & 1, value >> 4 & 1, value >> 5 & 1, value >> 6 & 1, value >> 7 & 1, value >> 8 & 1, value >> 9 & 1];
    }
    get ["status"]() {
      const value = this.raw.getUint16(this.offset);
      return {
        bit0: value >> 0 & 1,
        bit1: value >> 1 & 1,
        bit2: value >> 2 & 1,
        bit3: value >> 3 & 1,
        bit4: value >> 4 & 1,
        bit5: value >> 5 & 1,
        bit6: value >> 6 & 1,
        bit7: value >> 7 & 1,
        bit8: value >> 8 & 1,
        bit9: value >> 9 & 1
      };
    }
    set ["status"](arg) {
      this.raw.setUint16(this.offset, (arg.bit0 || 0) << 0 | (arg.bit1 || 0) << 1 | (arg.bit2 || 0) << 2 | (arg.bit3 || 0) << 3 | (arg.bit4 || 0) << 4 | (arg.bit5 || 0) << 5 | (arg.bit6 || 0) << 6 | (arg.bit7 || 0) << 7 | (arg.bit8 || 0) << 8 | (arg.bit9 || 0) << 9);
    }
    get ['keyCode']() {
      return zu.fromDataView(this.raw, this.offset + 2);
    }
    set ["keyCode"](arg) {
      this.raw.setUint8(this.offset + 2, arg.keyClass);
      this.raw.setUint8(this.offset + 3, arg.keyId);
    }
  }, V(S, "size", 4), S),
  gc = class OneKeyAction extends Pu {
    get ["layer"]() {
      return this.raw.getUint8(this.baseOffset);
    }
    set ["layer"](arg) {
      this.raw.setUint8(this.baseOffset, arg);
    }
    get ["row"]() {
      return this.raw.getUint8(this.baseOffset + 1);
    }
    set ['row'](arg) {
      this.raw.setUint8(this.baseOffset + 1, arg);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["col"](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ['keyAction']() {
      return zu.fromDataView(this.raw, this.baseOffset + 3);
    }
    set ["keyAction"](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg.keyClass);
      this.raw.setUint8(this.baseOffset + 4, arg.keyId);
    }
    static ["get"](arg3, arg1, arg) {
      const value2 = new OneKeyAction(this.getData(), Mu.id_dynamic_keymap_get_keycode);
      value2.layer = arg3;
      value2.row = arg1;
      value2.col = arg;
      return value2;
    }
    static ["create"](arg1, arg3, arg2, arg4) {
      const value = new OneKeyAction(this.getData(), Mu.id_dynamic_keymap_set_keycode);
      value.layer = arg1;
      value.row = arg3;
      value.col = arg2;
      value.keyAction = arg4;
      return value;
    }
  },
  mc = class BufferKeyAction extends Pu {
    get ["offset"]() {
      return this.raw.getUint16(this.baseOffset);
    }
    set ["offset"](arg) {
      this.raw.setUint16(this.baseOffset, arg);
    }
    get ['length']() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ['length'](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ["keyActionList"]() {
      return Array.from({
        length: this.length / 2
      }).map((arg1, arg) => zu.fromDataView(this.raw, this.baseOffset + 3 + 2 * arg));
    }
    set ["keyActionList"](arg) {
      for (let value = 0; value < arg.length; value++) {
        this.raw.setUint8(this.baseOffset + 3 + 2 * value, arg[value].keyClass);
        this.raw.setUint8(this.baseOffset + 4 + 2 * value, arg[value].keyId);
      }
    }
    static ['get'](arg2, arg1) {
      const value = new BufferKeyAction(this.getData(), Mu.id_dynamic_keymap_get_buffer);
      value.offset = arg2;
      value.length = arg1;
      return value;
    }
    static ['create'](arg3, arg, arg2) {
      const value1 = new BufferKeyAction(this.getData(), Mu.id_dynamic_keymap_set_buffer);
      value1.offset = arg3;
      value1.length = arg;
      value1.keyActionList = arg2;
      return value1;
    }
  },
  pc = class MacroCount extends Pu {
    get ["count"]() {
      return this.raw.getUint8(1);
    }
    static ["get"]() {
      return new MacroCount(this.getData(), Mu.id_dynamic_keymap_macro_get_count);
    }
  },
  yc = class MacroBufferSize extends Pu {
    get ["size"]() {
      return this.raw.getUint16(1);
    }
    static ["get"]() {
      return new MacroBufferSize(this.getData(), Mu.id_dynamic_keymap_macro_get_buffer_size);
    }
  },
  wc = class MacroBuffer extends Pu {
    get ['sz']() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ['sz'](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ["offset"]() {
      return this.raw.getUint16(this.baseOffset);
    }
    set ["offset"](arg) {
      this.raw.setUint16(this.baseOffset, arg);
    }
    get ["buffer"]() {
      const value = this.raw.buffer.slice(this.baseOffset + 3, this.baseOffset + 3 + this.sz);
      return new DataView(value);
    }
    set ["buffer"](arg) {
      for (let value = 0; value < this.sz; value++) this.raw.setUint8(this.baseOffset + 3 + value, arg.getUint8(value));
    }
    static ["get"](arg2, arg) {
      const value1 = new MacroBuffer(this.getData(), Mu.id_dynamic_keymap_macro_get_buffer);
      value1.offset = arg2;
      value1.sz = arg;
      return value1;
    }
    static ["create"](arg1, arg3, arg) {
      const value2 = new MacroBuffer(this.getData(), Mu.id_dynamic_keymap_macro_set_buffer);
      value2.offset = arg1;
      value2.sz = arg;
      value2.buffer = arg3;
      return value2;
    }
  },
  bc = class OneTogTh extends Pu {
    get ["row"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ['row'](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ['col']() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ["col"](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg);
    }
    get ["apc"]() {
      return 0.02 * this.raw.getUint8(this.baseOffset + 4);
    }
    set ['apc'](arg) {
      this.raw.setUint8(this.baseOffset + 4, arg / 0.02);
    }
    static ["get"](arg1, arg2) {
      const value = new OneTogTh(this.getData(), Mu.id_get_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.oneTogTh);
      value.row = arg1;
      value.col = arg2;
      return value;
    }
    static ["create"](arg, arg3, arg2) {
      const value1 = new OneTogTh(this.getData(), Mu.id_set_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.oneTogTh);
      value1.row = arg;
      value1.col = arg3;
      value1.apc = arg2;
      return value1;
    }
    static ["fromDataView"](arg) {
      return new OneTogTh(this.getData(), Mu.id_set_keyboard_value).setRaw(arg);
    }
    ["toJSON"]() {
      return {
        row: this.row,
        col: this.col,
        apc: this.apc
      };
    }
  },
  _c = class OneTogThV2 extends Pu {
    get ["row"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["row"](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ["col"](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg);
    }
    get ["apc"]() {
      return Number((0.01 * this.raw.getUint16(this.baseOffset + 4)).toFixed(2));
    }
    set ["apc"](arg) {
      this.raw.setUint16(this.baseOffset + 4, 100 * arg);
    }
    get ["apcArr"]() {
      return [this.raw.getUint8(this.baseOffset + 4), this.raw.getUint8(this.baseOffset + 5)];
    }
    static ['get'](arg2, arg) {
      const value1 = new OneTogThV2(this.getData(), Mu.id_get_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.oneTogTh);
      value1.row = arg2;
      value1.col = arg;
      return value1;
    }
    static ["create"](arg1, arg2, arg3) {
      const value = new OneTogThV2(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.oneTogTh);
      value.row = arg1;
      value.col = arg2;
      value.apc = arg3;
      return value;
    }
    static ["fromDataView"](arg) {
      return new bc(this.getData(), Mu.id_set_keyboard_value).setRaw(arg);
    }
    ["toJSON"]() {
      return {
        row: this.row,
        col: this.col,
        apc: this.apc
      };
    }
  },
  vc = class BufferTogTh extends Pu {
    get ["offset"]() {
      return this.raw.getUint16(this.baseOffset + 4);
    }
    set ['offset'](arg) {
      this.raw.setUint16(this.baseOffset + 4, arg);
    }
    get ["size"]() {
      return this.raw.getUint8(this.baseOffset + 6);
    }
    set ["size"](arg) {
      this.raw.setUint8(this.baseOffset + 6, arg);
    }
    set ['flashOp'](arg) {
      this.raw.setUint8(this.baseOffset + 7, arg);
    }
    set ["togThsFlash"](arg) {
      for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + 8 + value, arg.getUint8(value));
    }
    get ["togThs"]() {
      const value = this.size,
        value1 = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + value);
      return new DataView(value1);
    }
    set ["togThs"](arg) {
      for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + 7 + value, arg.getUint8(value));
    }
    get ["togThsV2"]() {
      const value1 = 2 * this.size,
        value = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + value1);
      return new DataView(value);
    }
    static ["get"](arg, arg2) {
      const value1 = new BufferTogTh(this.getData(), Mu.id_get_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.bufferTogTh);
      value1.offset = arg;
      value1.size = arg2;
      return value1;
    }
    static ["create"](arg4, arg, arg2, arg1) {
      const value3 = new BufferTogTh(this.getData(), Mu.id_set_keyboard_value);
      value3.raw.setUint8(this.baseOffset, Bu.customId);
      value3.raw.setUint8(this.baseOffset + 1, Bu.bufferTogTh);
      value3.offset = arg4;
      value3.size = arg;
      value3.flashOp = arg2;
      value3.togThsFlash = arg1;
      return value3;
    }
  },
  kc = class OneRTKeyInfo extends Pu {
    get ['row']() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ['row'](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ['col'](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg);
    }
    get ['on']() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ['on'](arg) {
      this.raw.setUint8(this.baseOffset + 4, arg);
    }
    get ["release"]() {
      return 0.02 * this.raw.getUint8(this.baseOffset + 5);
    }
    set ["release"](arg) {
      this.raw.setUint8(this.baseOffset + 5, arg / 0.02);
    }
    get ["press"]() {
      return 0.02 * this.raw.getUint8(this.baseOffset + 6);
    }
    set ["press"](arg) {
      this.raw.setUint8(this.baseOffset + 6, arg / 0.02);
    }
    static ["get"](arg1, arg) {
      const value2 = new OneRTKeyInfo(this.getData(), Mu.id_get_keyboard_value);
      value2.raw.setUint8(this.baseOffset, Bu.customId);
      value2.raw.setUint8(this.baseOffset + 1, Bu.oneRt);
      value2.row = arg1;
      value2.col = arg;
      return value2;
    }
    static ['create'](arg1) {
      const value = new OneRTKeyInfo(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.oneRt);
      value.row = arg1.row;
      value.col = arg1.col;
      value.on = arg1.on;
      value.release = arg1.release;
      value.press = arg1.press;
      return value;
    }
    ["toJSON"]() {
      return {
        row: this.row,
        col: this.col,
        on: this.on,
        release: this.release,
        press: this.press
      };
    }
  },
  Cc = class OneRTKeyInfoV2 extends Pu {
    get ["row"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["row"](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ['col'](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg);
    }
    get ['on']() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ['on'](arg) {
      this.raw.setUint8(this.baseOffset + 4, arg);
    }
    get ["release"]() {
      return Number((0.01 * this.raw.getUint16(this.baseOffset + 5)).toFixed(2));
    }
    set ["release"](arg) {
      this.raw.setUint16(this.baseOffset + 5, 100 * arg);
    }
    get ["releaseArr"]() {
      return [this.raw.getUint8(this.baseOffset + 5), this.raw.getUint8(this.baseOffset + 6)];
    }
    get ["press"]() {
      return Number((0.01 * this.raw.getUint16(this.baseOffset + 7)).toFixed(2));
    }
    set ["press"](arg) {
      this.raw.setUint16(this.baseOffset + 7, 100 * arg);
    }
    get ["pressArr"]() {
      return [this.raw.getUint8(this.baseOffset + 7), this.raw.getUint8(this.baseOffset + 8)];
    }
    static ['get'](arg, arg1) {
      const value2 = new OneRTKeyInfoV2(this.getData(), Mu.id_get_keyboard_value);
      value2.raw.setUint8(this.baseOffset, Bu.customId);
      value2.raw.setUint8(this.baseOffset + 1, Bu.oneRt);
      value2.row = arg;
      value2.col = arg1;
      return value2;
    }
    static ['create'](arg1) {
      const value = new OneRTKeyInfoV2(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.oneRt);
      value.row = arg1.row;
      value.col = arg1.col;
      value.on = arg1.on;
      value.release = arg1.release;
      value.press = arg1.press;
      return value;
    }
    ["toJSON"]() {
      return {
        row: this.row,
        col: this.col,
        on: this.on,
        release: this.release,
        press: this.press
      };
    }
  },
  Sc = class BufferRTKeyInfo extends Pu {
    get ["offset"]() {
      return this.raw.getUint16(this.baseOffset + 4);
    }
    set ["offset"](arg) {
      this.raw.setUint16(this.baseOffset + 4, arg);
    }
    get ["size"]() {
      return this.raw.getUint8(this.baseOffset + 6);
    }
    set ['size'](arg) {
      this.raw.setUint8(this.baseOffset + 6, arg);
    }
    get ['rt']() {
      const value = 3 * this.size,
        value1 = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + value);
      return new DataView(value1);
    }
    set ['rt'](arg) {
      for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + 7 + value, arg.getUint8(value));
    }
    get ["rtV2"]() {
      const value = 5 * this.size,
        value1 = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + value);
      return new DataView(value1);
    }
    set ["flashOp"](arg) {
      this.raw.setUint8(this.baseOffset + 7, arg);
    }
    set ["rtFlash"](arg) {
      for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + 8 + value, arg.getUint8(value));
    }
    static ["get"](arg2, arg) {
      const value1 = new BufferRTKeyInfo(this.getData(), Mu.id_get_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.bufferRt);
      value1.offset = arg2;
      value1.size = arg;
      return value1;
    }
    static ["create"](arg, arg3, arg2, arg1) {
      const value4 = new BufferRTKeyInfo(this.getData(), Mu.id_set_keyboard_value);
      value4.raw.setUint8(this.baseOffset, Bu.customId);
      value4.raw.setUint8(this.baseOffset + 1, Bu.bufferRt);
      value4.offset = arg;
      value4.size = arg3;
      value4.flashOp = arg2;
      value4.rtFlash = arg1;
      return value4;
    }
  },
  Uc = class DeadBand extends Pu {
    get ['top']() {
      return 0.02 * this.raw.getUint8(this.baseOffset + 2);
    }
    set ["top"](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg / 0.02);
    }
    get ["bottom"]() {
      return 0.02 * this.raw.getUint8(this.baseOffset + 3);
    }
    set ['bottom'](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg / 0.02);
    }
    static ["get"]() {
      const value = new DeadBand(this.getData(), Mu.id_get_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.deadBand);
      return value;
    }
    static ["create"](arg2, arg) {
      const value1 = new DeadBand(this.getData(), Mu.id_set_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.deadBand);
      value1.top = arg2;
      value1.bottom = arg;
      return value1;
    }
    ["toJSON"]() {
      return {
        top: this.top,
        bottom: this.bottom
      };
    }
  },
  Dc = class DeadBandV2 extends Pu {
    get ["top"]() {
      return 0.01 * this.raw.getUint16(this.baseOffset + 2);
    }
    set ['top'](arg) {
      this.raw.setUint16(this.baseOffset + 2, arg / 0.01);
    }
    get ["bottom"]() {
      return 0.01 * this.raw.getUint16(this.baseOffset + 4);
    }
    set ['bottom'](arg) {
      this.raw.setUint16(this.baseOffset + 4, arg / 0.01);
    }
    static ["get"]() {
      const value = new DeadBandV2(this.getData(), Mu.id_get_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.deadBand);
      return value;
    }
    static ["create"](arg, arg2) {
      const value1 = new DeadBandV2(this.getData(), Mu.id_set_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.deadBand);
      value1.top = arg;
      value1.bottom = arg2;
      return value1;
    }
    ['toJSON']() {
      return {
        top: this.top,
        bottom: this.bottom
      };
    }
  },
  Oc = class LightInfo extends Pu {
    get ["effect"]() {
      return this.raw.getUint8(this.baseOffset + 1);
    }
    set ['effect'](arg) {
      this.raw.setUint8(this.baseOffset + 1, arg);
    }
    get ['speed']() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ["speed"](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg);
    }
    get ['color']() {
      const [value1, value, value2] = [this.raw.getUint8(this.baseOffset + 4), this.raw.getUint8(this.baseOffset + 5), this.raw.getUint8(this.baseOffset + 6)];
      return {
        r: value1,
        g: value,
        b: value2
      };
    }
    set ["color"](arg) {
      this.raw.setUint8(this.baseOffset + 4, arg.r);
      this.raw.setUint8(this.baseOffset + 5, arg.g);
      this.raw.setUint8(this.baseOffset + 6, arg.b);
    }
    get ["brightness"]() {
      return this.raw.getUint8(this.baseOffset + 7);
    }
    set ["brightness"](arg) {
      this.raw.setUint8(this.baseOffset + 7, arg);
    }
    static ["get"]() {
      const value = new LightInfo(this.getData(), Mu.id_lighting_get_value);
      value.raw.setUint8(this.baseOffset, Bu.lightInfo);
      return value;
    }
    static ["create"](arg) {
      const value1 = new LightInfo(this.getData(), Mu.id_lighting_set_value);
      value1.raw.setUint8(this.baseOffset, Bu.lightInfo);
      value1.effect = arg.effect;
      value1.speed = arg.speed;
      value1.color = arg.color;
      value1.brightness = arg.brightness;
      return value1;
    }
    ['toJSON']() {
      return {
        effect: this.effect,
        speed: this.speed,
        color: this.color,
        brightness: this.brightness
      };
    }
  },
  xc = class ProtocolVersion extends Pu {
    get ['version']() {
      return [this.raw.getUint8(this.baseOffset + 4).toString(16), this.raw.getUint8(this.baseOffset + 5).toString(16).padStart(2, '0')].join('.');
    }
    static ["get"]() {
      const value = new ProtocolVersion(this.getData(), Mu.id_get_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      return value;
    }
    ['toJSON']() {
      return {
        version: this.version
      };
    }
  },
  Kc = class KeyboardFeature extends Pu {
    get ["rgbArea"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["rgbArea"](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ["wasdSwitch"]() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ['wasdSwitch'](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg);
    }
    get ['macSwitch']() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ["macSwitch"](arg) {
      this.raw.setUint8(this.baseOffset + 4, arg);
    }
    get ['winLock']() {
      return this.raw.getUint8(this.baseOffset + 5);
    }
    set ["winLock"](arg) {
      this.raw.setUint8(this.baseOffset + 5, arg);
    }
    get ['nKroSwitch']() {
      return this.raw.getUint8(this.baseOffset + 6);
    }
    set ["nKroSwitch"](arg) {
      this.raw.setUint8(this.baseOffset + 6, arg);
    }
    static ["get"]() {
      const value = new KeyboardFeature(this.getData(), Mu.id_get_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.feature);
      return value;
    }
    static ['create'](arg1) {
      const value = new KeyboardFeature(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.feature);
      value.rgbArea = arg1.rgbArea;
      value.wasdSwitch = arg1.wasdSwitch;
      value.macSwitch = arg1.macSwitch;
      value.winLock = arg1.winLock;
      value.nKroSwitch = arg1.nKroSwitch;
      return value;
    }
    ["toJSON"]() {
      return {
        rgbArea: this.rgbArea,
        wasdSwitch: this.wasdSwitch,
        macSwitch: this.macSwitch,
        winLock: this.winLock,
        nKroSwitch: this.nKroSwitch
      };
    }
  },
  Ac = class ResetKeyboardDefault extends Pu {
    static ['getAll']() {
      const value = new ResetKeyboardDefault(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.resetAll);
      return value;
    }
    static ["getKeyAction"]() {
      return new ResetKeyboardDefault(this.getData(), Mu.id_dynamic_keymap_reset);
    }
  },
  Ic = (V(U = class extends Pu {
    get ["layer"]() {
      return U.layerMap[this.raw.getUint8(this.baseOffset + 2)];
    }
    set ['layer'](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    static ["get"]() {
      const value = new U(this.getData(), Mu.id_get_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.layer);
      return value;
    }
  }, "layerMap", {
    1: 0,
    2: 0,
    4: 2,
    8: 2
  }), U),
  Pc = class BottomOptimizeSwitch extends Pu {
    get ["opt"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ['opt'](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    static ["get"]() {
      const value = new BottomOptimizeSwitch(this.getData(), Mu.id_get_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.bottomOptimizeSwitch);
      return value;
    }
    static ["create"](arg1) {
      const value = new BottomOptimizeSwitch(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.bottomOptimizeSwitch);
      value.opt = arg1;
      return value;
    }
  },
  Mc = class GameModeSwitch extends Pu {
    get ["mode"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["mode"](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    static ['get']() {
      const value = new GameModeSwitch(this.getData(), Mu.id_get_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.gameMode);
      return value;
    }
    static ["create"](arg) {
      const value1 = new GameModeSwitch(this.getData(), Mu.id_set_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.gameMode);
      value1.mode = arg;
      return value1;
    }
    ["toJSON"]() {
      return {
        mode: this.mode
      };
    }
  };
class BoxLightInfo extends Pu {
  get ["mode"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["mode"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ['colorful']() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["colorful"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ["brightness"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["brightness"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ['speed'](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  get ["color"]() {
    const [value2, value, value1] = [this.raw.getUint8(this.baseOffset + 6), this.raw.getUint8(this.baseOffset + 7), this.raw.getUint8(this.baseOffset + 8)];
    return {
      r: value2,
      g: value,
      b: value1
    };
  }
  set ["color"](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg.r);
    this.raw.setUint8(this.baseOffset + 7, arg.g);
    this.raw.setUint8(this.baseOffset + 8, arg.b);
  }
  static ['get']() {
    const value = new BoxLightInfo(this.getData(), Mu.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Bu.customId);
    value.raw.setUint8(this.baseOffset + 1, Bu.boxLight);
    return value;
  }
  static ["create"](arg) {
    const value1 = new BoxLightInfo(this.getData(), Mu.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Bu.customId);
    value1.raw.setUint8(this.baseOffset + 1, Bu.boxLight);
    value1.mode = arg.mode;
    value1.colorful = arg.colorful;
    value1.speed = arg.speed;
    value1.brightness = arg.brightness;
    value1.color = arg.color;
    return value1;
  }
  ["toJSON"]() {
    return {
      mode: this.mode
    };
  }
}
let Tc = class MixAxle extends Pu {
    get ["row"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["row"](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ['col'](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg);
    }
    get ["subField"]() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ["subField"](arg) {
      this.raw.setUint8(this.baseOffset + 4, arg);
    }
  },
  Rc = class OneMixAxle extends Tc {
    static ["get"](arg1, arg) {
      const value2 = new OneMixAxle(this.getData(), Mu.id_get_keyboard_value);
      value2.raw.setUint8(this.baseOffset, Bu.customId);
      value2.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      value2.row = arg1;
      value2.col = arg;
      value2.subField = Lu.GET_KEY;
      return value2;
    }
    static ["create"](arg, arg2, arg3) {
      const value1 = new OneMixAxle(this.getData(), Mu.id_set_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      value1.subField = Lu.SET_KEY;
      value1.row = arg;
      value1.col = arg2;
      value1.keyType = arg3;
      return value1;
    }
    static ["createAll"](arg1) {
      const value = new OneMixAxle(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      value.subField = Lu.SET_KEY_ALL;
      value.keyType = arg1;
      return value;
    }
    get ["keyType"]() {
      return this.raw.getUint8(this.baseOffset + 5);
    }
    set ['keyType'](arg) {
      this.raw.setUint8(this.baseOffset + 5, arg);
    }
    ['toJSON']() {
      return {
        row: this.row,
        col: this.col,
        keyType: this.keyType
      };
    }
  },
  Ec = class OptionMixAxle extends Tc {
    static ["start"]() {
      const value = new OptionMixAxle(this.getData(), Mu.id_get_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      value.subField = Lu.START_CFG;
      return value;
    }
    static ["save"]() {
      const value = new OptionMixAxle(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      value.subField = Lu.SAVE_CFG;
      return value;
    }
  },
  Bc = class BufferMixAxle extends Tc {
    static ["get"](arg, arg2) {
      const value1 = new BufferMixAxle(this.getData(), Mu.id_get_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      value1.subField = Lu.GET_KEY_BUFFER;
      value1.offset = arg;
      value1.size = arg2;
      return value1;
    }
    static ["create"](arg2, arg3, arg1) {
      const value = new BufferMixAxle(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      value.subField = Lu.SET_KEY_BUFFER;
      value.offset = arg2;
      value.size = arg3;
      value.keyTypes = arg1;
      return value;
    }
    get ['offset']() {
      return this.raw.getUint16(this.baseOffset + 5);
    }
    set ["offset"](arg) {
      this.raw.setUint16(this.baseOffset + 5, arg);
    }
    get ['size']() {
      return this.raw.getUint8(this.baseOffset + 7);
    }
    set ["size"](arg) {
      this.raw.setUint8(this.baseOffset + 7, arg);
    }
    get ["keyTypes"]() {
      const value = this.raw.buffer.slice(this.baseOffset + 8, this.baseOffset + 8 + this.size);
      return new DataView(value);
    }
    set ["keyTypes"](arg) {
      for (let value = 0; value < this.size; value++) this.raw.setUint8(this.baseOffset + 8 + value, arg.getUint8(value));
    }
  },
  Lc = class AxleCalibrate extends Pu {
    static ['start']() {
      const value = new AxleCalibrate(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.calibrate);
      return value;
    }
  },
  Vc = class DynamicKeyStroke extends Pu {
    static ['get'](arg) {
      const value1 = new DynamicKeyStroke(this.getData(), Mu.id_get_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.dks);
      value1.subField = Nu.get;
      value1.index = arg;
      return value1;
    }
    static ["create"](arg, arg1) {
      const value2 = new DynamicKeyStroke(this.getData(), Mu.id_set_keyboard_value);
      value2.raw.setUint8(this.baseOffset, Bu.customId);
      value2.raw.setUint8(this.baseOffset + 1, Bu.dks);
      value2.subField = Nu.set;
      value2.index = arg;
      value2.actions = arg1;
      return value2;
    }
    get ['subField']() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ["subField"](arg) {
      this.raw.setUint8(this.baseOffset + 4, arg);
    }
    get ['index']() {
      return this.raw.getUint8(this.baseOffset + 5);
    }
    set ['index'](arg) {
      this.raw.setUint8(this.baseOffset + 5, arg);
    }
    get ["actions"]() {
      const value22 = this.raw.buffer.slice(this.baseOffset + 6, this.baseOffset + 6 + 16),
        value4 = value22.byteLength / 4,
        value12 = [];
      for (let value3 = 0; value3 < value4; value3++) {
        const value2 = value22.slice(4 * value3, 4 * value3 + 4),
          value1 = new DataView(value2),
          value = new dc(value1, 0);
        value12.push(value);
      }
      return value12;
    }
    set ["actions"](arg) {
      for (let value3 = 0; value3 < arg.length; value3++) {
        const value2 = arg[value3].dataView;
        for (let value = 0; value < value2.byteLength; value++) this.raw.setUint8(this.baseOffset + 6 + 4 * value3 + value, value2.getUint8(value));
      }
    }
  },
  Fc = class CustomLamplight extends Pu {
    static ["save"]() {
      const value = new CustomLamplight(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.saveLamplight);
      return value;
    }
    static ["get"](arg2, arg3, arg) {
      const value1 = new CustomLamplight(this.getData(), Mu.id_custom_get_value);
      value1.raw.setUint8(this.baseOffset, Bu.getCustomLamplight);
      value1.row = arg2;
      value1.col = arg3;
      value1.num = arg;
      return value1;
    }
    static ['create'](arg3, arg1, arg2, arg) {
      const value4 = new CustomLamplight(this.getData(), Mu.id_custom_set_value);
      value4.raw.setUint8(this.baseOffset, Bu.setCustomLamplight);
      value4.row = arg3;
      value4.col = arg1;
      value4.num = arg2;
      value4.colors = arg;
      return value4;
    }
    ['toJSON']() {
      return {
        row: this.row,
        col: this.col,
        num: this.num,
        colors: this.colors
      };
    }
    get ["row"]() {
      return this.raw.getUint8(this.baseOffset + 1);
    }
    set ['row'](arg) {
      this.raw.setUint8(this.baseOffset + 1, arg);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["col"](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ['num']() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ["num"](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg);
    }
    get ["colors"]() {
      const value = this.raw.buffer.slice(this.baseOffset + 4, this.baseOffset + 4 + 3 * this.num);
      return rt.chunk(Array.from(new Uint8Array(value)), 3);
    }
    set ['colors'](arg) {
      const value1 = arg.flat();
      for (let value = 0; value < value1.length; value++) this.raw.setUint8(this.baseOffset + 4 + value, value1[value]);
    }
  },
  Nc = class TapDance extends Pu {
    static ["get"](arg) {
      const value1 = new TapDance(this.getData(), Mu.id_vial_prefix);
      value1.raw.setUint8(this.baseOffset, Bu.entryOp);
      value1.raw.setUint8(this.baseOffset + 1, Bu.tapDanceGet);
      value1.index = arg;
      return value1;
    }
    static ['create'](arg1, arg) {
      const value2 = new TapDance(this.getData(), Mu.id_vial_prefix);
      value2.raw.setUint8(this.baseOffset, Bu.entryOp);
      value2.raw.setUint8(this.baseOffset + 1, Bu.tapDanceSet);
      value2.index = arg1;
      (null == arg ? void 0 : arg.tap) && (value2.tap = arg.tap);
      (null == arg ? void 0 : arg.hold) && (value2.hold = arg.hold);
      (null == arg ? void 0 : arg.timer) && (value2.timer = arg.timer);
      return value2;
    }
    get ["index"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["index"](arg) {
      this.raw.setUint8(this.baseOffset + 2, arg);
    }
    get ['tap']() {
      const value = this.raw.buffer.slice(this.baseOffset + 3, this.baseOffset + 3 + 2);
      return zu.fromDataView(new DataView(value), 0);
    }
    set ["tap"](arg) {
      this.raw.setUint8(this.baseOffset + 3, arg.keyClass);
      this.raw.setUint8(this.baseOffset + 4, arg.keyId);
    }
    get ["hold"]() {
      const value = this.raw.buffer.slice(this.baseOffset + 5, this.baseOffset + 5 + 2);
      return zu.fromDataView(new DataView(value), 0);
    }
    set ["hold"](arg) {
      this.raw.setUint8(this.baseOffset + 5, arg.keyClass);
      this.raw.setUint8(this.baseOffset + 6, arg.keyId);
    }
    get ["timer"]() {
      return this.raw.getUint16(this.baseOffset + 7);
    }
    set ['timer'](arg) {
      this.raw.setUint16(this.baseOffset + 7, arg);
    }
  },
  Gc = (V(D = class extends Pu {
    static ["get"]() {
      const [value3, value2, value] = D.dataReporting,
        value1 = new D(D.getData(), value3);
      value1.raw.setUint8(this.baseOffset, value2);
      value1.raw.setUint8(this.baseOffset + 1, value);
      return value1;
    }
    static ["fromDataView"](arg) {
      return new D(arg, rt.first(D.dataReporting));
    }
    get ["baseOffset"]() {
      return D.baseOffset;
    }
    get ["type"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
  }, "baseOffset", 1), V(D, "dataReporting", [Mu.id_get_keyboard_value, Bu.customId, Bu.dataReporting]), D),
  zc = class Calibration2 extends Pu {
    static ["start"]() {
      const value = new Calibration2(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.calibrationStart);
      return value;
    }
    static ['finish']() {
      const value = new Calibration2(this.getData(), Mu.id_set_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.calibrationFinish);
      return value;
    }
    static ["getCompleteStatusBuffer"](arg1, arg) {
      const value2 = new Calibration2(this.getData(), Mu.id_get_keyboard_value);
      value2.raw.setUint8(this.baseOffset, Bu.customId);
      value2.raw.setUint8(this.baseOffset + 1, Bu.completeStatusBuffer);
      value2.offset = arg1;
      value2.size = arg;
      return value2;
    }
    static ['getAdcTripCompStatusBuffer'](arg, arg1) {
      const value2 = new Calibration2(this.getData(), Mu.id_get_keyboard_value);
      value2.raw.setUint8(this.baseOffset, Bu.customId);
      value2.raw.setUint8(this.baseOffset + 1, Bu.adcTripCompStatusBuffer);
      value2.offset = arg;
      value2.size = arg1;
      return value2;
    }
    static ["getInitStatusBuffer"](arg, arg2) {
      const value1 = new Calibration2(this.getData(), Mu.id_get_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.calibration);
      value1.offset = arg;
      value1.size = arg2;
      return value1;
    }
    get ['size']() {
      return this.raw.getUint8(this.baseOffset + 6);
    }
    set ["size"](arg) {
      this.raw.setUint8(this.baseOffset + 6, arg);
    }
    get ["offset"]() {
      return this.raw.getUint16(this.baseOffset + 4);
    }
    set ['offset'](arg) {
      this.raw.setUint16(this.baseOffset + 4, arg);
    }
    get ["completeStatusList"]() {
      const value2 = [];
      for (let value = 0; value < this.size; value++) value2.push(this.raw.getUint8(this.baseOffset + 7 + value));
      return value2;
    }
    get ["initStatusList"]() {
      const value2 = [];
      for (let value = 0; value < this.size; value++) value2.push(this.raw.getUint8(this.baseOffset + 7 + value));
      return value2;
    }
    get ["adcTripCompStatusList"]() {
      const value2 = [];
      for (let value = 0; value < this.size; value++) value2.push([this.raw.getUint16(this.baseOffset + 7 + 4 * value), 0.02 * this.raw.getUint8(this.baseOffset + 7 + 4 * value + 2), this.raw.getUint8(this.baseOffset + 7 + 4 * value + 3)]);
      return value2;
    }
    get ["adcTripCompStatusListV2"]() {
      const value2 = [];
      for (let value = 0; value < this.size; value++) value2.push([this.raw.getUint16(this.baseOffset + 7 + 5 * value), 0.01 * this.raw.getUint16(this.baseOffset + 7 + 5 * value + 2), this.raw.getUint8(this.baseOffset + 7 + 5 * value + 4)]);
      return value2;
    }
  },
  Hc = class RappySnappy extends Pu {
    get ["subField"]() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ['subField'](arg) {
      this.raw.setUint8(this.baseOffset + 4, arg);
    }
    get ['index']() {
      return this.raw.getUint8(this.baseOffset + 5);
    }
    set ['index'](arg) {
      this.raw.setUint8(this.baseOffset + 5, arg);
    }
    get ["mode"]() {
      return this.raw.getUint8(this.baseOffset + 6);
    }
    set ["mode"](arg) {
      this.raw.setUint8(this.baseOffset + 6, arg);
    }
    get ['id']() {
      return this.raw.getUint8(this.baseOffset + 7);
    }
    set ['id'](arg) {
      arg >= 26 && (arg -= 26);
      this.raw.setUint8(this.baseOffset + 7, arg);
    }
    get ['rsApcLv']() {
      return this.raw.getUint16(this.baseOffset + 8);
    }
    set ['rsApcLv'](arg) {
      this.raw.setUint16(this.baseOffset + 8, arg);
    }
    get ["gapcSw"]() {
      return this.raw.getUint8(this.baseOffset + 10);
    }
    set ['gapcSw'](arg) {
      this.raw.setUint8(this.baseOffset + 10, arg);
    }
    get ['rtSw']() {
      return this.raw.getUint8(this.baseOffset + 11);
    }
    set ["rtSw"](arg) {
      this.raw.setUint8(this.baseOffset + 11, arg);
    }
    get ["key1Row"]() {
      return this.raw.getUint8(this.baseOffset + 12);
    }
    set ['key1Row'](arg) {
      this.raw.setUint8(this.baseOffset + 12, arg);
    }
    get ["key1Col"]() {
      return this.raw.getUint8(this.baseOffset + 13);
    }
    set ["key1Col"](arg) {
      this.raw.setUint8(this.baseOffset + 13, arg);
    }
    get ["key2Row"]() {
      return this.raw.getUint8(this.baseOffset + 14);
    }
    set ['key2Row'](arg) {
      this.raw.setUint8(this.baseOffset + 14, arg);
    }
    get ["key2Col"]() {
      return this.raw.getUint8(this.baseOffset + 15);
    }
    set ["key2Col"](arg) {
      this.raw.setUint8(this.baseOffset + 15, arg);
    }
    get ["layer"]() {
      return this.raw.getUint8(this.baseOffset + 16);
    }
    set ['layer'](arg) {
      this.raw.setUint8(this.baseOffset + 16, arg);
    }
    static ["get"](arg1) {
      const value = new RappySnappy(this.getData(), Mu.id_get_keyboard_value);
      value.raw.setUint8(this.baseOffset, Bu.customId);
      value.raw.setUint8(this.baseOffset + 1, Bu.rs);
      value.subField = Fu.get;
      value.index = arg1;
      value.id = arg1;
      return value;
    }
    static ["create"](arg, arg3, arg2) {
      const value1 = new RappySnappy(this.getData(), Mu.id_set_keyboard_value);
      value1.raw.setUint8(this.baseOffset, Bu.customId);
      value1.raw.setUint8(this.baseOffset + 1, Bu.rs);
      value1.raw.setUint8(this.baseOffset + 2, 0);
      value1.raw.setUint8(this.baseOffset + 3, 0);
      value1.subField = Fu.set;
      value1.index = arg;
      value1.id = arg3;
      (null == arg2 ? void 0 : arg2.mode) && (value1.mode = arg2.mode);
      (null == arg2 ? void 0 : arg2.rsApcLv) && (value1.rsApcLv = arg2.rsApcLv);
      (null == arg2 ? void 0 : arg2.gapcSw) && (value1.gapcSw = arg2.gapcSw);
      (null == arg2 ? void 0 : arg2.rtSw) && (value1.rtSw = arg2.rtSw);
      (null == arg2 ? void 0 : arg2.key1Row) && (value1.key1Row = arg2.key1Row);
      (null == arg2 ? void 0 : arg2.key1Col) && (value1.key1Col = arg2.key1Col);
      (null == arg2 ? void 0 : arg2.key2Row) && (value1.key2Row = arg2.key2Row);
      (null == arg2 ? void 0 : arg2.key2Col) && (value1.key2Col = arg2.key2Col);
      (null == arg2 ? void 0 : arg2.layer) && (value1.layer = arg2.layer);
      return value1;
    }
  },
  Wc = class HidDevice2 extends WebHidGeneral {
    constructor() {
      super(...arguments);
      V(this, 'mutex', new Mutex());
      V(this, "pendingTransfers", []);
    }
    ["onDeviceToHostReportReceived"](arg) {}
    async ["transferForResultAsync"](arg2) {
      var value4;
      const value5 = new DataView(arg2.buffer).getUint8(0);
      let value1;
      const value2 = new Promise(arg => {
          value1 = arg;
        }),
        value3 = {
          requestCode: value5,
          data: arg2,
          promiseResolve: value1
        };
      this.pendingTransfers.push(value3);
      await (null == (value4 = this.device) ? void 0 : value4.sendReport(0, arg2));
      return value2;
    }
    ["inputReportListener"](arg) {
      super.inputReportListener(arg);
      this.handleInputReport(arg.data);
    }
    ["handleInputReport"](arg) {
      this.mutex.runExclusive(() => {
        const value1 = arg.getUint8(0);
        if (0 == value1) return void this.onDeviceToHostReportReceived(arg);
        let value2 = false;
        Array.from(new Uint8Array(arg.buffer.slice(0, 3))).join('') === Gc.dataReporting.join('') && (Pr("data-reporting", Gc.fromDataView(arg)), value2 = true);
        if (!value2) {
          for (const value of this.pendingTransfers) if (value.requestCode === value1) {
            value.promiseResolve(arg);
            this.pendingTransfers.splice(this.pendingTransfers.indexOf(value), 1);
            value2 = true;
            break;
          }
        }
        value2 || new Uint8Array(arg.buffer).toString();
      });
    }
  };
class DuckBread extends Wc {
  constructor() {
    super(...arguments);
    V(this, "version", '');
  }
  get ["isV2"]() {
    return true;
  }
  get ["hasAdvancedKey"]() {
    const {
      custom: value
    } = this.getCustomData();
    return !('advancedKeyVersion' in value) || Number(this.version) >= Number(value.advancedKeyVersion);
  }
  get ["deviceVersion"]() {
    return this.version;
  }
  async ["getAllKeyAction"](arg4, arg, arg3) {
    const value22 = arg4 * arg * arg3 * 2 / 28,
      value1 = [];
    for (let value2 = 0; value2 < value22; value2++) {
      const value = await this.transferForResult(mc.get(28 * value2, 28));
      value1.push(...value.keyActionList);
    }
    return value1;
  }
  async ["setAllKeyAction"](arg22) {
    const value3 = arg22.map(arg2 => arg2.map(arg => arg.flat()).flat()).flat(),
      value1 = value3.length / 14;
    for (let value2 = 0; value2 < value1; value2++) {
      const value = value3.slice(14 * value2, 14 * (value2 + 1));
      await this.transferForResult(mc.create(28 * value2, 28, value));
    }
  }
  async ['getOneKeyAction'](arg1, arg, arg2) {
    return this.transferForResult(gc.get(arg1, arg, arg2));
  }
  async ["setOneKeyAction"](arg3, arg2, arg, arg1) {
    return this.transferForResult(gc.create(arg3, arg2, arg, arg1));
  }
  async ["getMacroCount"]() {
    return this.transferForResult(pc.get());
  }
  async ["getMacroBufferSize"]() {
    return this.transferForResult(yc.get());
  }
  async ["getMacroBuffer"]() {
    const {
        count: value4
      } = await this.getMacroCount(),
      {
        size: value32
      } = await this.getMacroBufferSize(),
      value5 = [],
      value23 = Math.ceil(value32 / 28);
    for (let value2 = 0; value2 < value23; value2++) {
      const value = 28 * value2,
        value1 = await this.transferForResult(wc.get(value, 28));
      value5.push(...Array.from(new Uint8Array(value1.buffer.buffer)));
      if (value5.filter(arg => 0 === arg).length > value4) break;
    }
    const value13 = [];
    let value6 = [];
    for (const value of value5) {
      if (0 != value) value6.push(value);else {
        value13.push(value6);
        value6 = [];
      }
      if (value13.length >= value4) break;
    }
    const value42 = [];
    for (let value3 = 0; value3 < value13.length; value3++) {
      const value22 = value13[value3];
      if (0 === value22.length) {
        value42.push([]);
        continue;
      }
      let value12 = 0;
      const value2 = [];
      for (; value12 < value22.length;) {
        const value = new DataView(new Uint8Array(value22).buffer),
          value1 = ac.fromDataView(value, value12);
        value12 += value1.count;
        value2.push(value1);
      }
      value42.push(value2);
    }
    return value42;
  }
  async ["setMacroBuffer"](arg4, arg5) {
    const value3 = await this.getMacroBuffer();
    value3[arg4] = arg5;
    const value12 = [];
    for (let value2 = 0; value2 < value3.length; value2++) {
      const value = value3[value2].map(arg => Array.from(new Uint8Array(arg.dataView.buffer))).flat();
      value12.push(value);
    }
    const value22 = value12.map(arg => arg.length ? [...arg, 0] : 0).flat(),
      value32 = rt.chunk(value22, 28);
    for (let value2 = 0; value2 < value32.length; value2++) {
      const value = 28 * value2,
        value1 = new DataView(new Uint8Array(value32[value2]).buffer);
      await this.transferForResult(wc.create(value, value1, value1.byteLength));
    }
  }
  async ["getOneTogTh"](arg, arg1) {
    if (this.isV2) return this.transferForResult(_c.get(arg, arg1));
    return this.transferForResult(bc.get(arg, arg1));
  }
  async ["setOneTogTh"](arg2, arg1, arg) {
    if (this.isV2) return this.transferForResult(_c.create(arg2, arg1, arg));
    return this.transferForResult(bc.create(arg2, arg1, arg));
  }
  async ["getTogThAll"](arg13, arg3) {
    if (this.isV2) return this.getTogThAllV2(arg13, arg3);
    const value3 = Math.ceil(arg13 * arg3 / 24),
      value22 = [];
    for (let value2 = 0; value2 < value3; value2++) {
      const value = await this.transferForResult(vc.get(24 * value2, 24));
      value22.push(...new Uint8Array(value.togThs.buffer));
    }
    return rt.chunk(value22, arg3).map((arg2, arg12) => arg2.map((arg, arg1) => bc.create(arg12, arg1, 0.02 * arg)));
  }
  async ["setTogThAll"](arg3) {
    if (this.isV2) return this.setTogThAllV2(arg3);
    const value12 = arg3.map(arg2 => arg2.map(arg => arg.apc / 0.02)).flat(),
      value22 = rt.chunk(value12, 23);
    for (let value2 = 0; value2 < value22.length; value2++) {
      const value = value22[value2];
      let value1 = Eu.normal;
      0 === value2 && (value1 = Eu.erase);
      value2 === value22.length - 1 && (value1 = Eu.write);
      await this.transferForResult(vc.create(23 * value2, 23, value1, new DataView(new Uint8Array(value).buffer)));
      0 !== value2 && value2 !== value22.length - 1 || (await Ng(200));
    }
  }
  async ["setTogThAllV2"](arg1) {
    const value4 = arg1.map(arg2 => arg2.map(arg => arg.apcArr).flat()).flat(),
      value22 = rt.chunk(value4, 22);
    for (let value3 = 0; value3 < value22.length; value3++) {
      const value = value22[value3];
      let value1 = Eu.normal;
      0 === value3 && (value1 = Eu.erase);
      value3 === value22.length - 1 && (value1 = Eu.write);
      const value2 = vc.create(11 * value3, 11, value1, new DataView(new Uint8Array(value).buffer));
      await this.transferForResult(value2);
      0 !== value3 && value3 !== value22.length - 1 || (await Ng(200));
    }
  }
  async ["getOneRTKeyInfo"](arg, arg1) {
    if (this.isV2) return this.transferForResult(Cc.get(arg, arg1));
    return this.transferForResult(kc.get(arg, arg1));
  }
  async ['getRTKeyInfoAll'](arg22, arg3) {
    if (this.isV2) return this.getRTKeyInfoAllV2(arg22, arg3);
    const value32 = Math.ceil(arg22 * arg3 / 8),
      value12 = [];
    for (let value2 = 0; value2 < value32; value2++) {
      const value = await this.transferForResult(Sc.get(8 * value2, 8));
      value12.push(...new Uint8Array(value.rt.buffer));
    }
    return rt.chunk(rt.chunk(value12, 3), arg3).map((arg1, arg) => arg1.map((arg2, arg4) => {
      const value = kc.get(arg, arg4),
        [value5, value3, value1] = arg2;
      value.on = value5;
      value.release = 0.02 * value3;
      value.press = 0.02 * value1;
      return value;
    }));
  }
  async ["setRTKeyInfoAll"](arg3) {
    if (this.isV2) return this.setRTKeyInfoAllV2(arg3);
    const value12 = arg3.map(arg2 => arg2.map(arg => [arg.on, arg.release / 0.02, arg.press / 0.02]).flat()).flat(),
      value22 = rt.chunk(value12, 18);
    for (let value2 = 0; value2 < value22.length; value2++) {
      const value1 = value22[value2];
      let value = Eu.normal;
      0 === value2 && (value = Eu.erase);
      value2 === value22.length - 1 && (value = Eu.write);
      await this.transferForResult(Sc.create(6 * value2, 6, value, new DataView(new Uint8Array(value1).buffer)));
      0 !== value2 && value2 !== value22.length - 1 || (await Ng(200));
    }
  }
  async ["setOneRTKeyInfo"](arg) {
    if (arg instanceof Cc) return this.transferForResult(Cc.create(arg));
    return this.transferForResult(kc.create(arg));
  }
  async ['getDeadBand']() {
    if (this.isV2) return this.getDeadBandV2();
    return this.transferForResult(Uc.get());
  }
  async ["setDeadBand"](arg, arg1) {
    if (this.isV2) return this.setDeadBandV2(arg, arg1);
    return this.transferForResult(Uc.create(arg, arg1));
  }
  async ["getLightInfo"]() {
    return this.transferForResult(Oc.get());
  }
  async ["setLightInfo"](arg) {
    return this.transferForResult(Oc.create(arg));
  }
  async ['getOneMixAxle'](arg1, arg) {
    return this.transferForResult(Rc.get(arg1, arg));
  }
  async ['getMixAxleAll'](arg3, arg13) {
    const value22 = Math.ceil(arg3 * arg13 / 23),
      value3 = [];
    for (let value2 = 0; value2 < value22; value2++) {
      const value = await this.transferForResult(Bc.get(23 * value2, 23));
      value3.push(...new Uint8Array(value.keyTypes.buffer));
    }
    return rt.chunk(value3, arg13).map((arg2, arg12) => arg2.map((arg, arg1) => Rc.create(arg12, arg1, arg)));
  }
  async ['setMixAxleAll'](arg22) {
    const value3 = arg22.map(arg2 => arg2.map(arg => arg.keyType).flat()).flat(),
      value1 = rt.chunk(value3, 23);
    for (let value2 = 0; value2 < value1.length; value2++) {
      const value = value1[value2];
      await this.transferForResult(Bc.create(23 * value2, 23, new DataView(new Uint8Array(value).buffer)));
    }
  }
  async ["setOneMixAxle"](arg, arg1, arg2) {
    return this.transferForResult(Rc.create(arg, arg1, arg2));
  }
  async ["setUnifyMixAxle"](arg) {
    return this.transferForResult(Rc.createAll(arg));
  }
  async ["startMixAxle"]() {
    return this.transferForResult(Ec.start());
  }
  async ['saveMixAxle']() {
    return this.transferForResult(Ec.save());
  }
  async ['startAxleCalibrate']() {
    await this.transferForResult(Lc.start());
    await Ng(200);
  }
  async ['getProtocolVersion']() {
    const value = await this.transferForResult(xc.get());
    this.version = value.version;
    return value;
  }
  async ['getKeyboardFeature']() {
    return this.transferForResult(Kc.get());
  }
  async ["setKeyboardFeature"](arg) {
    return this.transferForResult(Kc.create(arg));
  }
  async ['resetDefault'](arg = "keyAction") {
    return this.transferForResult("All" === arg ? Ac.getAll() : Ac.getKeyAction());
  }
  async ["getCustomLamplight"](arg1, arg) {
    const value22 = Math.ceil(arg / 8),
      value32 = Array.from({
        length: arg1
      }, () => []);
    for (let value4 = 0; value4 < arg1; value4++) {
      const value3 = [];
      for (let value2 = 0; value2 < value22; value2++) {
        const value = await this.transferForResult(Fc.get(value4, 8 * value2, 8));
        value3.push(...value.colors);
      }
      value32[value4] = value3;
    }
    return value32;
  }
  async ['setCustomLamplightOne'](arg, arg1, arg2) {
    return this.transferForResult(Fc.create(arg, arg1, 1, [arg2]));
  }
  async ["setCustomLamplight"](arg) {
    const value3 = arg.length,
      value22 = rt.first(arg).length,
      value1 = Math.ceil(value22 / 8);
    for (let value2 = 0; value2 < value3; value2++) for (let value = 0; value < value1; value++) await this.transferForResult(Fc.create(value2, 8 * value, 8, arg[value2].slice(8 * value, 8 * (value + 1))));
  }
  async ["saveCustomLamplight"]() {
    const value = await this.transferForResult(Fc.save());
    await Ng(100);
    return value;
  }
  async ["getTapDance"](arg) {
    return this.transferForResult(Nc.get(arg));
  }
  async ["setTapDance"](arg, arg1) {
    return this.transferForResult(Nc.create(arg, arg1));
  }
  async ["getLayer"]() {
    return this.transferForResult(Ic.get());
  }
  async ["getDynamicKeyStroke"](arg) {
    return this.transferForResult(Vc.get(arg));
  }
  async ["setDynamicKeyStroke"](arg, arg1) {
    return this.transferForResult(Vc.create(arg, arg1));
  }
  async ["getRappySnappy"](arg) {
    return this.transferForResult(Hc.get(arg));
  }
  async ["setRappySnappy"](arg1, arg) {
    return this.transferForResult(Hc.create(arg1, arg1, arg));
  }
  async ["startCalibration"]() {
    return this.transferForResult(zc.start());
  }
  async ["finishCalibration"]() {
    return this.transferForResult(zc.finish());
  }
  async ["getCalibrationAdcTripCompStatusBuffer"](arg, arg2) {
    if (this.isV2) return this.getCalibrationAdcTripCompStatusBufferV2(arg, arg2);
    const value1 = Math.ceil(arg * arg2 / 6),
      value3 = [];
    for (let value2 = 0; value2 < value1; value2++) {
      const value = await this.transferForResult(zc.getAdcTripCompStatusBuffer(6 * value2, 6));
      value3.push(...value.adcTripCompStatusList);
    }
    return rt.chunk(value3, arg2);
  }
  async ['getCalibrationAdcTripInitStatusBuffer'](arg1, arg2) {
    const value3 = Math.ceil(arg1 * arg2 / 24),
      value32 = [];
    for (let value2 = 0; value2 < value3; value2++) {
      const value = await this.transferForResult(zc.getInitStatusBuffer(24 * value2, 24));
      value32.push(...value.initStatusList);
    }
    return rt.chunk(value32, arg2);
  }
  async ['getCalibrationAdcTripCompStatusBufferV2'](arg2, arg) {
    const value3 = Math.ceil(arg2 * arg / 4),
      value1 = [];
    for (let value2 = 0; value2 < value3; value2++) {
      const value = await this.transferForResult(zc.getAdcTripCompStatusBuffer(4 * value2, 4));
      value1.push(...value.adcTripCompStatusListV2);
    }
    return rt.chunk(value1, arg);
  }
  async ["getBottomOptimizeSwitch"]() {
    return this.transferForResult(Pc.get());
  }
  async ["setBottomOptimizeSwitch"](arg) {
    return this.transferForResult(Pc.create(arg));
  }
  async ["getGameModeSwitch"]() {
    if (this.isV2) return this.transferForResult(Mc.get());
    return Mc.create(0);
  }
  async ['setGameModeSwitch'](arg) {
    return this.transferForResult(Mc.create(arg));
  }
  async ["getBoxLightInfo"]() {
    return this.transferForResult(BoxLightInfo.get());
  }
  async ["setBoxLightInfo"](arg) {
    return this.transferForResult(BoxLightInfo.create(arg));
  }
  async ["transferForResult"](arg) {
    arg.raw = await this.transferForResultAsync(arg.toUint8Array());
    return arg;
  }
  async ['getTogThAllV2'](arg13, arg22) {
    const value32 = Math.ceil(arg13 * arg22 / 12),
      value3 = [];
    for (let value2 = 0; value2 < value32; value2++) {
      const value1 = vc.get(12 * value2, 12),
        value = await this.transferForResult(value1);
      value3.push(...new Uint8Array(value.togThsV2.buffer));
    }
    return rt.chunk(rt.chunk(value3, 2), arg22).map((arg2, arg12) => arg2.map((arg, arg1) => _c.create(arg12, arg1, 0.01 * new DataView(new Uint8Array(arg).buffer).getUint16(0))));
  }
  async ['getRTKeyInfoAllV2'](arg3, arg2) {
    const value12 = Math.ceil(arg3 * arg2 / 4),
      value22 = [];
    for (let value2 = 0; value2 < value12; value2++) {
      const value1 = Sc.get(4 * value2, 4),
        value = await this.transferForResult(value1);
      value22.push(...new Uint8Array(value.rtV2.buffer));
    }
    return rt.chunk(rt.chunk(value22, 5), arg2).map((arg1, arg) => arg1.map((arg7, arg5) => {
      const value = Cc.get(arg, arg5),
        [value1, value3, value2, value6, value4] = arg7;
      value.on = value1;
      value.release = 0.01 * new DataView(new Uint8Array([value3, value2]).buffer).getUint16(0);
      value.press = 0.01 * new DataView(new Uint8Array([value6, value4]).buffer).getUint16(0);
      return value;
    }));
  }
  async ["setRTKeyInfoAllV2"](arg1) {
    const value4 = arg1.map(arg2 => arg2.map(arg => [arg.on, ...arg.releaseArr, ...arg.pressArr]).flat()).flat(),
      value22 = rt.chunk(value4, 20);
    for (let value3 = 0; value3 < value22.length; value3++) {
      const value = value22[value3];
      let value1 = Eu.normal;
      0 === value3 && (value1 = Eu.erase);
      value3 === value22.length - 1 && (value1 = Eu.write);
      const value2 = Sc.create(4 * value3, 4, value1, new DataView(new Uint8Array(value).buffer));
      await this.transferForResult(value2);
      0 !== value3 && value3 !== value22.length - 1 || (await Ng(200));
    }
  }
  async ["getDeadBandV2"]() {
    return this.transferForResult(Dc.get());
  }
  async ['setDeadBandV2'](arg, arg1) {
    return this.transferForResult(Dc.create(arg, arg1));
  }
}
const jc = class _DuckBreadMad60HE extends Digital {
  constructor() {
    super(_DuckBreadMad60HE.saveName, _DuckBreadMad60HE.defaultProfileCount, _DuckBreadMad60HE.customProfileIndex, _DuckBreadMad60HE.showCustomProfile);
  }
};
V(jc, 'saveName', 'duck-bread-mad60-profile');
V(jc, 'defaultProfileCount', 1);
V(jc, "customProfileIndex", 0);
V(jc, "showCustomProfile", true);
let Yc = jc;
const $c = class _DuckBreadMad68HE extends Digital {
  constructor() {
    super(_DuckBreadMad68HE.saveName, _DuckBreadMad68HE.defaultProfileCount, _DuckBreadMad68HE.customProfileIndex, _DuckBreadMad68HE.showCustomProfile);
  }
};
V($c, 'saveName', "duck-bread-mad68-profile");
V($c, 'defaultProfileCount', 1);
V($c, "customProfileIndex", 0);
V($c, 'showCustomProfile', true);
let qc = $c;
const Jc = class _DuckBreadMad60HERgb extends Digital {
  constructor() {
    super(_DuckBreadMad60HERgb.saveName, _DuckBreadMad60HERgb.defaultProfileCount, _DuckBreadMad60HERgb.customProfileIndex, _DuckBreadMad60HERgb.showCustomProfile);
  }
};
V(Jc, "saveName", "duck-bread-mad60-profile-rgb");
V(Jc, "defaultProfileCount", 1);
V(Jc, 'customProfileIndex', 0);
V(Jc, "showCustomProfile", true);
let Xc = Jc;
const Zc = class _DuckBreadMad68HERgb extends Digital {
  constructor() {
    super(_DuckBreadMad68HERgb.saveName, _DuckBreadMad68HERgb.defaultProfileCount, _DuckBreadMad68HERgb.customProfileIndex, _DuckBreadMad68HERgb.showCustomProfile);
  }
};
V(Zc, "saveName", "duck-bread-mad68-profile-rgb");
V(Zc, 'defaultProfileCount', 1);
V(Zc, "customProfileIndex", 0);
V(Zc, "showCustomProfile", true);
let Qc = Zc;
const el = class _DuckBreadMad60HEUltra extends Digital {
  constructor() {
    super(_DuckBreadMad60HEUltra.saveName, _DuckBreadMad60HEUltra.defaultProfileCount, _DuckBreadMad60HEUltra.customProfileIndex, _DuckBreadMad60HEUltra.showCustomProfile);
  }
};
V(el, 'saveName', 'duck-bread-mad60-profile-ultra');
V(el, "defaultProfileCount", 1);
V(el, "customProfileIndex", 0);
V(el, "showCustomProfile", true);
let tl = el;
const rl = class _DuckBreadMad68HEUltra extends Digital {
  constructor() {
    super(_DuckBreadMad68HEUltra.saveName, _DuckBreadMad68HEUltra.defaultProfileCount, _DuckBreadMad68HEUltra.customProfileIndex, _DuckBreadMad68HEUltra.showCustomProfile);
  }
};
V(rl, "saveName", "duck-bread-mad68-profile-ultra");
V(rl, "defaultProfileCount", 1);
V(rl, "customProfileIndex", 0);
V(rl, "showCustomProfile", true);
let sl = rl;
const nl = class _DuckBreadMad60HELimited extends Digital {
  constructor() {
    super(_DuckBreadMad60HELimited.saveName, _DuckBreadMad60HELimited.defaultProfileCount, _DuckBreadMad60HELimited.customProfileIndex, _DuckBreadMad60HELimited.showCustomProfile);
  }
};
V(nl, "saveName", "duck-bread-mad60-profile-limited");
V(nl, "defaultProfileCount", 1);
V(nl, "customProfileIndex", 0);
V(nl, 'showCustomProfile', true);
let al = nl;
const il = class _DuckBreadMad68HELimited extends Digital {
  constructor() {
    super(_DuckBreadMad68HELimited.saveName, _DuckBreadMad68HELimited.defaultProfileCount, _DuckBreadMad68HELimited.customProfileIndex, _DuckBreadMad68HELimited.showCustomProfile);
  }
};
V(il, "saveName", "duck-bread-mad68-profile-limited");
V(il, "defaultProfileCount", 1);
V(il, "customProfileIndex", 0);
V(il, "showCustomProfile", true);
let ol = il;
const ul = class _DuckBreadMad68R extends Digital {
  constructor() {
    super(_DuckBreadMad68R.saveName, _DuckBreadMad68R.defaultProfileCount, _DuckBreadMad68R.customProfileIndex, _DuckBreadMad68R.showCustomProfile);
  }
};
V(ul, "saveName", "db-mad68r-profile");
V(ul, "defaultProfileCount", 1);
V(ul, "customProfileIndex", 0);
V(ul, "showCustomProfile", true);
let cl = ul;
const ll = class _DuckBreadMad60Pro extends Digital {
  constructor() {
    super(_DuckBreadMad60Pro.saveName, _DuckBreadMad60Pro.defaultProfileCount, _DuckBreadMad60Pro.customProfileIndex, _DuckBreadMad60Pro.showCustomProfile);
  }
};
V(ll, "saveName", 'db-mad60pro-profile');
V(ll, "defaultProfileCount", 1);
V(ll, "customProfileIndex", 0);
V(ll, "showCustomProfile", true);
let fl = ll;
const hl = class _DuckBreadMad68Pro extends Digital {
  constructor() {
    super(_DuckBreadMad68Pro.saveName, _DuckBreadMad68Pro.defaultProfileCount, _DuckBreadMad68Pro.customProfileIndex, _DuckBreadMad68Pro.showCustomProfile);
  }
};
V(hl, "saveName", "db-mad68pro-profile");
V(hl, "defaultProfileCount", 1);
V(hl, 'customProfileIndex', 0);
V(hl, "showCustomProfile", true);
let dl = hl;
const gl = class _DuckBreadMadSmart extends Digital {
  constructor() {
    super(_DuckBreadMadSmart.saveName, _DuckBreadMadSmart.defaultProfileCount, _DuckBreadMadSmart.customProfileIndex, _DuckBreadMadSmart.showCustomProfile);
  }
};
V(gl, "saveName", 'db-mad-smart-profile');
V(gl, "defaultProfileCount", 1);
V(gl, "customProfileIndex", 0);
V(gl, 'showCustomProfile', true);
let ml = gl;
const pl = class _DuckBreadFire68 extends Digital {
  constructor() {
    super(_DuckBreadFire68.saveName, _DuckBreadFire68.defaultProfileCount, _DuckBreadFire68.customProfileIndex, _DuckBreadFire68.showCustomProfile);
  }
};
V(pl, 'saveName', "db-fire68");
V(pl, "defaultProfileCount", 1);
V(pl, "customProfileIndex", 0);
V(pl, "showCustomProfile", true);
let yl = pl;
const wl = class _DuckBreadFire68Pro extends Digital {
  constructor() {
    super(_DuckBreadFire68Pro.saveName, _DuckBreadFire68Pro.defaultProfileCount, _DuckBreadFire68Pro.customProfileIndex, _DuckBreadFire68Pro.showCustomProfile);
  }
};
V(wl, "saveName", "db-fire68-pro");
V(wl, 'defaultProfileCount', 1);
V(wl, "customProfileIndex", 0);
V(wl, "showCustomProfile", true);
let bl = wl;
const _l = class _DuckBreadFire68Ultra extends Digital {
  constructor() {
    super(_DuckBreadFire68Ultra.saveName, _DuckBreadFire68Ultra.defaultProfileCount, _DuckBreadFire68Ultra.customProfileIndex, _DuckBreadFire68Ultra.showCustomProfile);
  }
};
V(_l, "saveName", "db-fire68-ultra");
V(_l, "defaultProfileCount", 1);
V(_l, "customProfileIndex", 0);
V(_l, "showCustomProfile", true);
let vl = _l;
const kl = class _DuckBreadMad63HE extends Digital {
  constructor() {
    super(_DuckBreadMad63HE.saveName, _DuckBreadMad63HE.defaultProfileCount, _DuckBreadMad63HE.customProfileIndex, _DuckBreadMad63HE.showCustomProfile);
  }
};
V(kl, "saveName", "db-mad63-profile");
V(kl, 'defaultProfileCount', 1);
V(kl, 'customProfileIndex', 0);
V(kl, "showCustomProfile", true);
let Cl = kl;
const Sl = class _DuckBreadMad60HEV2 extends Digital {
  constructor() {
    super(_DuckBreadMad60HEV2.saveName, _DuckBreadMad60HEV2.defaultProfileCount, _DuckBreadMad60HEV2.customProfileIndex, _DuckBreadMad60HEV2.showCustomProfile);
  }
};
V(Sl, 'saveName', "db-mad60-v2-profile");
V(Sl, 'defaultProfileCount', 1);
V(Sl, "customProfileIndex", 0);
V(Sl, "showCustomProfile", true);
let Ul = Sl;
const Dl = class _DuckBreadMad68HEV2 extends Digital {
  constructor() {
    super(_DuckBreadMad68HEV2.saveName, _DuckBreadMad68HEV2.defaultProfileCount, _DuckBreadMad68HEV2.customProfileIndex, _DuckBreadMad68HEV2.showCustomProfile);
  }
};
V(Dl, "saveName", "db-mad68-v2-profile");
V(Dl, "defaultProfileCount", 1);
V(Dl, "customProfileIndex", 0);
V(Dl, "showCustomProfile", true);
let Ol = Dl;
const xl = class _DuckBreadMadLight60HE extends Digital {
  constructor() {
    super(_DuckBreadMadLight60HE.saveName, _DuckBreadMadLight60HE.defaultProfileCount, _DuckBreadMadLight60HE.customProfileIndex, _DuckBreadMadLight60HE.showCustomProfile);
  }
};
V(xl, 'saveName', "db-mad-light-60-profile");
V(xl, "defaultProfileCount", 1);
V(xl, 'customProfileIndex', 0);
V(xl, 'showCustomProfile', true);
let Kl = xl;
const Al = class _DuckBreadMadLight68HE extends Digital {
  constructor() {
    super(_DuckBreadMadLight68HE.saveName, _DuckBreadMadLight68HE.defaultProfileCount, _DuckBreadMadLight68HE.customProfileIndex, _DuckBreadMadLight68HE.showCustomProfile);
  }
};
V(Al, "saveName", "db-mad-light-68-profile");
V(Al, "defaultProfileCount", 1);
V(Al, "customProfileIndex", 0);
V(Al, "showCustomProfile", true);
let Il = Al;
const Pl = class _DuckBreadMag68 extends Digital {
  constructor() {
    super(_DuckBreadMag68.saveName, _DuckBreadMag68.defaultProfileCount, _DuckBreadMag68.customProfileIndex, _DuckBreadMag68.showCustomProfile);
  }
};
V(Pl, "saveName", "db-mag-68-profile");
V(Pl, "defaultProfileCount", 1);
V(Pl, "customProfileIndex", 0);
V(Pl, "showCustomProfile", true);
let Ml = Pl;
const Tl = class _DuckBreadZ60 extends Digital {
  constructor() {
    super(_DuckBreadZ60.saveName, _DuckBreadZ60.defaultProfileCount, _DuckBreadZ60.customProfileIndex, _DuckBreadZ60.showCustomProfile);
  }
};
V(Tl, 'saveName', "db-z-60-profile");
V(Tl, "defaultProfileCount", 1);
V(Tl, "customProfileIndex", 0);
V(Tl, "showCustomProfile", true);
let Rl = Tl;
const El = class _DuckBreadZ68 extends Digital {
  constructor() {
    super(_DuckBreadZ68.saveName, _DuckBreadZ68.defaultProfileCount, _DuckBreadZ68.customProfileIndex, _DuckBreadZ68.showCustomProfile);
  }
};
V(El, "saveName", 'db-z-68-profile');
V(El, 'defaultProfileCount', 1);
V(El, "customProfileIndex", 0);
V(El, "showCustomProfile", true);
const Bl = [{
    controller: DuckBread,
    digital: Yc,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4179,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 Lightless",
        shaft: "magnetic-perovskite",
        advancedKeyVersion: "1.03",
        axosome: 5,
        title: 'MAD60\x20HE',
        cover: "mad60",
        themeConfigName: "mad60-1053",
        theme: [{
          label: 'Skin.White',
          value: 'white'
        }, {
          label: "Skin.Black",
          value: "black"
        }],
        firmwareMark: "Mad60"
      },
      boot: {
        vendorId: 14139,
        productId: 8223,
        usagePage: 255,
        usage: 1,
        firmwareMark: "Mad60"
      }
    }]
  }, {
    controller: DuckBread,
    digital: Xc,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4180,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 RGB",
        shaft: 'magnetic-amber-pro',
        advancedKeyVersion: "1.03",
        axosome: 7,
        title: "MAD60 HE",
        cover: "mad60",
        themeConfigName: "mad60-1054",
        theme: [{
          label: 'Skin.White',
          value: "white-side"
        }, {
          label: "Skin.Black",
          value: "black"
        }],
        firmwareMark: "Mad60"
      },
      boot: {
        vendorId: 14139,
        productId: 8224,
        usagePage: 255,
        usage: 1,
        firmwareMark: 'Mad60'
      }
    }, {
      vendorId: 14139,
      productId: 4546,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 RGB V2",
        shaft: "magnetic-amber-pro",
        advancedKeyVersion: "1.00",
        axosome: 7,
        title: "MAD 60 HE",
        cover: 'mad60',
        themeConfigName: 'mad60-1054',
        theme: [{
          label: "Skin.White",
          value: "white-side"
        }, {
          label: "Skin.Black",
          value: 'black'
        }],
        firmwareMark: "Mad60"
      },
      boot: {
        vendorId: 14139,
        productId: 8569,
        usagePage: 255,
        usage: 1,
        firmwareMark: 'Mad60'
      }
    }, {
      vendorId: 14139,
      productId: 4610,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 RGB",
        shaft: "magnetic-amber-pro",
        advancedKeyVersion: '1.00',
        axosome: 7,
        title: "MAD60 He",
        cover: "mad60",
        themeConfigName: 'mad60-1054',
        theme: [{
          label: "Skin.White",
          value: "white-side"
        }, {
          label: "Skin.Black",
          value: "black"
        }],
        firmwareMark: "Mad60"
      },
      boot: {
        vendorId: 14139,
        productId: 8597,
        usagePage: 255,
        usage: 1,
        firmwareMark: "Mad60"
      }
    }]
  }, {
    controller: DuckBread,
    digital: tl,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4181,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 Ultra",
        shaft: "magneto",
        advancedKeyVersion: "1.03",
        axosome: 4,
        title: "MAD60 HE",
        cover: 'mad60',
        themeConfigName: 'mad60-1055',
        theme: [{
          label: 'Skin.White',
          value: 'white-side'
        }, {
          label: "Skin.Black",
          value: 'black'
        }],
        firmwareMark: "Mad60"
      },
      boot: {
        vendorId: 14139,
        productId: 8225,
        usagePage: 255,
        usage: 1,
        firmwareMark: 'Mad60'
      }
    }]
  }, {
    controller: DuckBread,
    digital: al,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4182,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: 'MAD\x2060\x20Limit',
        shaft: "magneto",
        advancedKeyVersion: "1.03",
        axosome: 4,
        title: "MAD60 HE",
        cover: "mad60",
        themeConfigName: "mad60-1056",
        theme: [{
          label: "Skin.White",
          value: "yellow"
        }],
        firmwareMark: "Mad60"
      },
      boot: {
        vendorId: 14139,
        productId: 8226,
        usagePage: 255,
        usage: 1,
        firmwareMark: "Mad60"
      }
    }, {
      vendorId: 14139,
      productId: 4189,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 Limit",
        shaft: "magnetic-amber-pro",
        advancedKeyVersion: "1.03",
        axosome: 6,
        title: "MAD60 HE",
        cover: "mad60",
        themeConfigName: "mad60-105d",
        theme: [{
          label: 'Skin.White',
          value: 'yellow'
        }],
        firmwareMark: "Mad60"
      },
      boot: {
        vendorId: 14139,
        productId: 8232,
        usagePage: 255,
        usage: 1,
        firmwareMark: 'Mad60'
      }
    }]
  }, {
    controller: DuckBread,
    digital: qc,
    meta: {
      deviceName: 'Keyboard',
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4183,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD 68 Lightless",
        shaft: "magnetic-amber",
        advancedKeyVersion: "1.03",
        axosome: 5,
        title: "MAD68 HE",
        cover: "mad68",
        themeConfigName: "mad60-1057",
        theme: [{
          label: "Skin.White",
          value: 'white'
        }, {
          label: 'Skin.Black',
          value: 'black'
        }],
        firmwareMark: "Mad68"
      },
      boot: {
        vendorId: 14139,
        productId: 8227,
        usagePage: 255,
        usage: 1,
        firmwareMark: "Mad68"
      }
    }]
  }, {
    controller: DuckBread,
    digital: Qc,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4184,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: 'MAD\x2068\x20RGB',
        shaft: 'magnetic-amber-pro',
        advancedKeyVersion: "1.03",
        axosome: 7,
        title: "MAD68 HE",
        cover: "mad68",
        themeConfigName: "mad60-1058",
        theme: [{
          label: 'Skin.White',
          value: 'white-side'
        }, {
          label: 'Skin.Black',
          value: "black"
        }],
        firmwareMark: 'Mad68'
      },
      boot: {
        vendorId: 14139,
        productId: 8228,
        usagePage: 255,
        usage: 1,
        firmwareMark: "Mad68"
      }
    }]
  }, {
    controller: DuckBread,
    digital: sl,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4185,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD 68 Ultra",
        shaft: "magneto",
        advancedKeyVersion: "1.03",
        axosome: 4,
        title: "MAD68 HE",
        cover: "mad68",
        themeConfigName: "mad60-1059",
        theme: [{
          label: 'Skin.White',
          value: "white-side"
        }, {
          label: 'Skin.Black',
          value: "black"
        }],
        firmwareMark: "Mad68"
      },
      boot: {
        vendorId: 14139,
        productId: 8229,
        usagePage: 255,
        usage: 1,
        firmwareMark: "Mad68"
      }
    }]
  }, {
    controller: DuckBread,
    digital: ol,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4186,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD 68 Limit",
        shaft: "magneto",
        advancedKeyVersion: "1.03",
        axosome: 4,
        title: "MAD68 HE",
        cover: "mad68",
        themeConfigName: "mad60-105a",
        theme: [{
          label: "Skin.White",
          value: "yellow"
        }],
        firmwareMark: "Mad68"
      },
      boot: {
        vendorId: 14139,
        productId: 8230,
        usagePage: 255,
        usage: 1,
        firmwareMark: "Mad68"
      }
    }, {
      vendorId: 14139,
      productId: 4188,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD 68 Limit",
        shaft: "magnetic-amber-pro",
        advancedKeyVersion: '1.03',
        axosome: 6,
        title: "MAD68 HE",
        cover: 'mad68',
        themeConfigName: "mad60-105c",
        theme: [{
          label: 'Skin.White',
          value: "yellow"
        }],
        firmwareMark: "Mad68"
      },
      boot: {
        vendorId: 14139,
        productId: 8231,
        usagePage: 255,
        usage: 1,
        firmwareMark: "Mad68"
      }
    }]
  }, {
    controller: DuckBread,
    digital: fl,
    meta: {
      deviceName: "Keyboard",
      component: 'duck-bread-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4269,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 Pro",
        shaft: "magnetic-jade-esports-pro",
        axosome: 3,
        title: "MAD60 PRO",
        cover: "mad60",
        themeConfigName: "mad60-10ad",
        theme: [{
          label: "Skin.White Contour",
          value: 'white-contour'
        }, {
          label: "Skin.Black Contour",
          value: "black-contour"
        }, {
          label: "Skin.Black Berry Contour",
          value: "black-berry-contour"
        }, {
          label: "Skin.Black Side",
          value: "black-side"
        }, {
          label: "Skin.Pink Side",
          value: "pink-side"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8275,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4355,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 Pro",
        shaft: "magnetic-jade",
        axosome: 3,
        title: "MAD60 PRO",
        cover: "mad60",
        themeConfigName: "mad60-1103",
        theme: [{
          label: "Skin.White Contour",
          value: 'white-contour'
        }, {
          label: 'Skin.Black\x20Contour',
          value: "black-contour"
        }, {
          label: 'Skin.Black\x20Berry\x20Contour',
          value: "black-berry-contour"
        }, {
          label: 'Skin.Black\x20Side',
          value: "black-side"
        }, {
          label: "Skin.Pink Side",
          value: "pink-side"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8334,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4356,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: 'MAD\x2060\x20Pro',
        shaft: "magneto",
        axosome: 4,
        title: "MAD60 PRO",
        cover: "mad60",
        themeConfigName: "mad60-1104",
        theme: [{
          label: "Skin.White Contour",
          value: "white-contour"
        }, {
          label: 'Skin.Black\x20Contour',
          value: "black-contour"
        }, {
          label: 'Skin.Black\x20Berry\x20Contour',
          value: "black-berry-contour"
        }, {
          label: 'Skin.Black\x20Side',
          value: "black-side"
        }, {
          label: "Skin.Pink Side",
          value: "pink-side"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8335,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4357,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 Pro",
        shaft: "magneto",
        axosome: 6,
        title: "MAD60 PRO",
        cover: "mad60",
        themeConfigName: "mad60-1105",
        theme: [{
          label: "Skin.White Contour",
          value: "white-contour"
        }, {
          label: "Skin.Black Contour",
          value: "black-contour"
        }, {
          label: "Skin.Black Berry Contour",
          value: "black-berry-contour"
        }, {
          label: 'Skin.Black\x20Side',
          value: "black-side"
        }, {
          label: 'Skin.Pink\x20Side',
          value: "pink-side"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8336,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4362,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 Pro",
        shaft: "magneto",
        axosome: 7,
        title: "MAD60 PRO",
        cover: "mad60",
        themeConfigName: "mad60-110a",
        theme: [{
          label: 'Skin.White\x20Contour',
          value: "white-contour"
        }, {
          label: "Skin.Black Contour",
          value: "black-contour"
        }, {
          label: "Skin.Black Berry Contour",
          value: "black-berry-contour"
        }, {
          label: "Skin.Black Side",
          value: "black-side"
        }, {
          label: 'Skin.Pink\x20Side',
          value: "pink-side"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8449,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4284,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: 'MAD\x2060\x20Pro',
        shaft: "magneto",
        axosome: 7,
        title: 'MAD60\x20PRO',
        cover: 'mad60',
        themeConfigName: "mad60-10bc",
        theme: [{
          label: "Skin.White Contour",
          value: 'white-contour'
        }, {
          label: "Skin.Black Contour",
          value: "black-contour"
        }, {
          label: "Skin.Black Berry Contour",
          value: 'black-berry-contour'
        }, {
          label: 'Skin.Black\x20Side',
          value: "black-side"
        }, {
          label: "Skin.Pink Side",
          value: "pink-side"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8291,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4282,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 LIGH",
        shaft: "magneto",
        axosome: 6,
        title: "MAD60 LIGH",
        cover: "mad60",
        themeConfigName: "mad60-10ba",
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: "Skin.Black",
          value: "black"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8286,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4283,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 60 LIGH",
        shaft: "magneto",
        axosome: 6,
        title: "MAD60 LIGH",
        cover: "mad60",
        themeConfigName: "mad60-10bb",
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: "Skin.Black",
          value: 'black'
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8288,
        usagePage: 255,
        usage: 1
      }
    }]
  }, {
    controller: DuckBread,
    digital: dl,
    meta: {
      deviceName: "Keyboard",
      component: 'duck-bread-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4310,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: 'MAD\x2068\x20Pro',
        shaft: "magneto",
        axosome: 3,
        title: "MAD68 Pro",
        cover: "mad68",
        themeConfigName: "mad68-pro-10d6",
        theme: [{
          label: 'Skin.White\x20Side',
          value: "white-side"
        }, {
          label: "Skin.Black Side",
          value: "black-side"
        }],
        firmwareMark: "mad68pro"
      },
      boot: {
        vendorId: 14139,
        productId: 8309,
        usagePage: 255,
        usage: 1,
        firmwareMark: "mad68pro"
      }
    }, {
      vendorId: 14139,
      productId: 4311,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD 68 Pro",
        shaft: 'magneto',
        axosome: 6,
        title: "MAD68 Pro",
        cover: "mad68",
        themeConfigName: 'mad68-pro-10d7',
        theme: [{
          label: "Skin.White Side",
          value: "white-side"
        }, {
          label: "Skin.Black Side",
          value: "black-side"
        }],
        firmwareMark: 'mad68pro'
      },
      boot: {
        vendorId: 14139,
        productId: 8310,
        usagePage: 255,
        usage: 1,
        firmwareMark: "mad68pro"
      }
    }, {
      vendorId: 14139,
      productId: 4270,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: 'MAD\x2068\x20Pro',
        shaft: 'magneto',
        axosome: 7,
        title: "MAD68 Pro",
        cover: 'mad68',
        themeConfigName: "mad68-pro-10ae",
        theme: [{
          label: "Skin.White Side",
          value: "white-side"
        }, {
          label: 'Skin.Black\x20Side',
          value: "black-side"
        }],
        firmwareMark: "mad68pro"
      },
      boot: {
        vendorId: 14139,
        productId: 8276,
        usagePage: 255,
        usage: 1,
        firmwareMark: 'mad68pro'
      }
    }, {
      vendorId: 14139,
      productId: 4285,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD 68 Pro",
        shaft: "magneto",
        axosome: 7,
        title: "MAD68 Pro",
        cover: "mad68",
        themeConfigName: "mad68-pro-10bd",
        theme: [{
          label: "Skin.White Side",
          value: "white-side"
        }, {
          label: "Skin.Black Side",
          value: "black-side"
        }],
        firmwareMark: 'mad68pro'
      },
      boot: {
        vendorId: 14139,
        productId: 8292,
        usagePage: 255,
        usage: 1,
        firmwareMark: "mad68pro"
      }
    }, {
      vendorId: 14139,
      productId: 4360,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD 68 Pro",
        shaft: "magneto",
        axosome: 4,
        title: "MAD68 Pro",
        cover: "mad68",
        themeConfigName: "mad68-pro-1108",
        theme: [{
          label: 'Skin.White\x20Side',
          value: "white-side"
        }, {
          label: "Skin.Black Side",
          value: "black-side"
        }],
        firmwareMark: "mad68pro"
      },
      boot: {
        vendorId: 14139,
        productId: 8337,
        usagePage: 255,
        usage: 1,
        firmwareMark: "mad68pro"
      }
    }, {
      vendorId: 14139,
      productId: 4280,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD 68 LIGH",
        shaft: 'magneto',
        title: "MAD68 LIGH",
        cover: "mad68",
        themeConfigName: "mad60-10b9",
        theme: [{
          label: "Skin.White Side",
          value: "white-side"
        }, {
          label: "Skin.Black Side",
          value: 'black-side'
        }],
        axosome: 6
      },
      boot: {
        vendorId: 14139,
        productId: 8289,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4281,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: 'MAD\x2068\x20LIGH',
        shaft: "magneto",
        title: "MAD68 LIGH",
        cover: "mad68",
        themeConfigName: "mad60-10b9",
        theme: [{
          label: "Skin.White Side",
          value: "white-side"
        }, {
          label: "Skin.Black Side",
          value: "black-side"
        }],
        axosome: 6
      },
      boot: {
        vendorId: 14139,
        productId: 8290,
        usagePage: 255,
        usage: 1
      }
    }]
  }, {
    controller: DuckBread,
    digital: cl,
    meta: {
      deviceName: 'Keyboard',
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4263,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD 68 R",
        shaft: "magneto",
        axosome: 6,
        title: "MAD68 R (LL)",
        cover: "mad68r",
        themeConfigName: "mad68-r-10a7",
        theme: [{
          label: 'Skin.White',
          value: "white"
        }, {
          label: "Skin.Black",
          value: "black"
        }],
        firmwareMark: "mad68r"
      },
      boot: {
        vendorId: 14139,
        productId: 8270,
        usagePage: 255,
        usage: 1,
        firmwareMark: "mad68r"
      }
    }]
  }, {
    controller: DuckBread,
    digital: ml,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4221,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 6,
        name: "MAD SMART",
        shaft: 'magnetic-amber-pro',
        axosome: 6
      },
      boot: {
        vendorId: 14139,
        productId: 8245,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4222,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 6,
        name: "MAD SMART",
        shaft: "magnetic-amber-pro",
        axosome: 6
      },
      boot: {
        vendorId: 14139,
        productId: 8246,
        usagePage: 255,
        usage: 1
      }
    }]
  }, {
    controller: DuckBread,
    digital: Cl,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4363,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD 63 HE",
        shaft: "magnetic-amber-pro",
        axosome: 6,
        title: "MAD63 HE",
        cover: "mad63",
        themeConfigName: "mad63-110b",
        theme: [{
          label: 'Skin.White\x20Side',
          value: "white-side"
        }, {
          label: "Skin.Black Side",
          value: "black-side"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8450,
        usagePage: 255,
        usage: 1
      }
    }]
  }, {
    controller: DuckBread,
    digital: Ul,
    meta: {
      deviceName: 'Keyboard',
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4384,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD60 HE V2",
        shaft: "magnetic-amber",
        title: "MAD60 HE V2",
        cover: "mad60",
        themeConfigName: "mad60-1120",
        theme: [{
          label: 'Skin.White',
          value: "white"
        }, {
          label: "Skin.Black",
          value: "black"
        }],
        axosome: 5
      },
      boot: {
        vendorId: 14139,
        productId: 8459,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4385,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD60 HE V2 RGB",
        shaft: 'magnetic-amber-pro',
        title: 'MAD60\x20HE\x20V2',
        cover: "mad60",
        themeConfigName: 'mad60-1121',
        theme: [{
          label: "Skin.White",
          value: 'white'
        }, {
          label: "Skin.Black",
          value: 'black'
        }],
        axosome: 6
      },
      boot: {
        vendorId: 14139,
        productId: 8459,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4386,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD60 HE V2 Ultra",
        shaft: "magneto-gaming",
        firmwareMark: "mad60",
        title: "MAD60 HE V2",
        cover: "mad60",
        themeConfigName: "mad60-1122",
        theme: [{
          label: "Skin.White Contour",
          value: 'white-contour'
        }],
        axosome: 4
      },
      boot: {
        vendorId: 14139,
        productId: 8459,
        usagePage: 255,
        usage: 1,
        firmwareMark: "mad60"
      }
    }]
  }, {
    controller: DuckBread,
    digital: Ol,
    meta: {
      deviceName: 'Keyboard',
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4387,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD68 HE V2",
        shaft: "magnetic-amber",
        title: "MAD68 HE V2",
        cover: "mad68",
        themeConfigName: 'mad68-1120',
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: "Skin.Black",
          value: "black"
        }],
        axosome: 5
      },
      boot: {
        vendorId: 14139,
        productId: 8462,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4388,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD68 HE V2 RGB",
        shaft: "magnetic-amber-pro",
        title: 'MAD68\x20HE\x20V2',
        cover: "mad68",
        themeConfigName: 'mad68-1124',
        theme: [{
          label: 'Skin.White',
          value: 'white'
        }, {
          label: 'Skin.Black',
          value: 'black'
        }],
        axosome: 6
      },
      boot: {
        vendorId: 14139,
        productId: 8463,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4389,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD68 HE V2 Ultra",
        shaft: "magneto-gaming",
        firmwareMark: 'mad68',
        title: "MAD68 HE V2",
        cover: "mad68",
        themeConfigName: 'mad68-1125',
        theme: [{
          label: 'Skin.Black\x20Through',
          value: "black-through"
        }, {
          label: 'Skin.White\x20Contour',
          value: "white-contour"
        }],
        axosome: 4
      },
      boot: {
        vendorId: 14139,
        productId: 8464,
        usagePage: 255,
        usage: 1,
        firmwareMark: "mad68"
      }
    }]
  }, {
    controller: DuckBread,
    digital: Kl,
    meta: {
      deviceName: 'Keyboard',
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4342,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "MAD LIGHT 60HE",
        shaft: 'magneto',
        title: "MAD LIGHT 60HE",
        cover: 'mad60-light',
        themeConfigName: "mad60-10f6",
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: 'Skin.Black',
          value: "black"
        }, {
          label: "Skin.Red",
          value: "red"
        }],
        axosome: 6,
        firmwareMark: 'mad60-light'
      },
      boot: {
        vendorId: 14139,
        productId: 8325,
        usagePage: 255,
        usage: 1,
        firmwareMark: "mad60-light"
      }
    }]
  }, {
    controller: DuckBread,
    digital: Il,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4420,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAD LIGHT 68HE",
        shaft: "magneto",
        title: 'MAD\x20LIGHT\x2068HE',
        cover: "mad60-light",
        themeConfigName: "mad68-1144",
        theme: [{
          label: 'Skin.White',
          value: "white"
        }, {
          label: 'Skin.Black',
          value: "black"
        }, {
          label: "Skin.Red",
          value: "red"
        }],
        axosome: 6
      },
      boot: {
        vendorId: 14139,
        productId: 8493,
        usagePage: 255,
        usage: 1
      }
    }]
  }, {
    controller: DuckBread,
    digital: Ml,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4409,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "MAG 68",
        shaft: 'magnetic-jade',
        title: "MAG 68",
        cover: "mag68",
        themeConfigName: "mag68-1139",
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: "Skin.Black",
          value: 'black'
        }],
        axosome: 11
      },
      boot: {
        vendorId: 14139,
        productId: 8484,
        usagePage: 255,
        usage: 1
      }
    }]
  }, {
    controller: DuckBread,
    digital: Rl,
    meta: {
      deviceName: "Keyboard",
      component: 'duck-bread-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4394,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "Z60 Ultra",
        shaft: "magneto",
        title: "FGG Z60",
        cover: "z60",
        themeConfigName: "z60-112a",
        theme: [{
          label: "Skin.Blue",
          value: "blue-ultra"
        }, {
          label: 'Skin.Pink',
          value: "pink-ultra"
        }],
        axosome: 6
      },
      boot: {
        vendorId: 14139,
        productId: 8469,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4395,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "Z60 Ultra",
        shaft: "magneto-gaming",
        title: 'FGG\x20Z60',
        cover: "z60",
        themeConfigName: "z60-112b",
        theme: [{
          label: "Skin.Blue",
          value: 'blue-ultra'
        }, {
          label: "Skin.Pink",
          value: "pink-ultra"
        }],
        axosome: 4
      },
      boot: {
        vendorId: 14139,
        productId: 8470,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4396,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 14,
        name: "Z60 Ultra",
        shaft: 'aurora-magnetic',
        title: "FGG Z60",
        cover: 'z60',
        themeConfigName: 'z60-112c',
        theme: [{
          label: 'Skin.Blue',
          value: "blue-ultra"
        }, {
          label: "Skin.Pink",
          value: "pink-ultra"
        }],
        axosome: 11
      },
      boot: {
        vendorId: 14139,
        productId: 8471,
        usagePage: 255,
        usage: 1
      }
    }]
  }, {
    controller: DuckBread,
    digital: El,
    meta: {
      deviceName: "Keyboard",
      component: 'duck-bread-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4406,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "Z60 Ultra",
        shaft: "magneto",
        title: 'FGG\x20Z68',
        cover: "z68",
        themeConfigName: 'z68-1136',
        theme: [{
          label: "Skin.Blue",
          value: 'blue-ultra'
        }, {
          label: 'Skin.Pink',
          value: "pink-ultra"
        }],
        axosome: 6
      },
      boot: {
        vendorId: 14139,
        productId: 8481,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4407,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "Z68 Ultra",
        shaft: 'magneto-gaming',
        title: "FGG Z68",
        cover: "z68",
        themeConfigName: "z68-1137",
        theme: [{
          label: 'Skin.Blue',
          value: "blue-ultra"
        }, {
          label: 'Skin.Pink',
          value: "pink-ultra"
        }],
        axosome: 4
      },
      boot: {
        vendorId: 14139,
        productId: 8482,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4408,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "Z68 Ultra",
        shaft: "aurora-magnetic",
        title: "FGG Z68",
        cover: "z68",
        themeConfigName: "z68-1138",
        theme: [{
          label: 'Skin.Blue',
          value: "blue-ultra"
        }, {
          label: 'Skin.Pink',
          value: "pink-ultra"
        }],
        axosome: 11
      },
      boot: {
        vendorId: 14139,
        productId: 8483,
        usagePage: 255,
        usage: 1
      }
    }]
  }],
  Ll = Bl.map(arg => arg.filters).flat().map(arg1 => {
    const {
      boot: value
    } = arg1;
    return {
      ...arg1,
      ...value
    };
  }),
  Vl = [{
    controller: DuckBread,
    digital: yl,
    meta: {
      deviceName: "Keyboard",
      component: 'duck-bread-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4265,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FIRE 68",
        shaft: 'magnetic-amber-pro',
        axosome: 4,
        title: "FIRE68",
        cover: "fire68-ultra",
        themeConfigName: "fire68-ultra-10a9",
        theme: [{
          label: "Skin.White",
          value: "answer"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8272,
        usagePage: 255,
        usage: 1
      }
    }]
  }, {
    controller: DuckBread,
    digital: bl,
    meta: {
      deviceName: 'Keyboard',
      component: 'duck-bread-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4266,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FIRE 68 Pro",
        shaft: "magnetic-amber-pro",
        axosome: 3,
        title: "FIRE68 Pro",
        cover: "fire68-ultra",
        themeConfigName: "fire68-ultra-10a9",
        theme: [{
          label: "Skin.White",
          value: "answer"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8273,
        usagePage: 255,
        usage: 1
      }
    }]
  }, {
    controller: DuckBread,
    digital: vl,
    meta: {
      deviceName: 'Keyboard',
      component: 'duck-bread-keyboard'
    },
    filters: [{
      vendorId: 14139,
      productId: 4267,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FIRE 68 Ultra",
        shaft: 'magnetic-amber-pro',
        axosome: 3,
        title: 'FIRE68\x20Ultra',
        cover: "fire68-ultra",
        themeConfigName: "fire68-ultra-10a9",
        theme: [{
          label: 'Skin.Spear\x20of\x20Fate',
          value: "fate"
        }, {
          label: "Hallo Rose",
          value: "rose"
        }, {
          label: 'Skin.Scientific\x20Bubble',
          value: 'science'
        }, {
          label: "Skin.Qi Sky",
          value: "sky"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8274,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4215,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FIRE 68 Ultra Limit",
        shaft: "magnetic-amber-pro",
        axosome: 3,
        title: "FIRE68 Ultra",
        cover: "fire68-ultra",
        themeConfigName: 'fire68-ultra-10a9',
        theme: [{
          label: "Don't answer",
          value: "answer"
        }, {
          label: "Spear of Fate",
          value: "fate"
        }, {
          label: "Love Story",
          value: "love"
        }, {
          label: "Hallo Rose",
          value: "rose"
        }, {
          label: "Scientific Bubble",
          value: "science"
        }, {
          label: "Qi Sky",
          value: "sky"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8241,
        usagePage: 255,
        usage: 1
      }
    }]
  }],
  Fl = [{
    controller: DuckBread,
    digital: yl,
    meta: {
      deviceName: "Keyboard",
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4259,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "NANO 68",
        shaft: 'magnetic-amber-pro',
        axosome: 6,
        firmwareMark: "nano68",
        title: 'NANO68\x20(LL)',
        cover: "nano68",
        themeConfigName: "nano68-10a3",
        theme: [{
          label: 'Skin.White',
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8266,
        usagePage: 255,
        usage: 1,
        firmwareMark: "nano68"
      }
    }, {
      vendorId: 14139,
      productId: 4293,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "NANO 68",
        shaft: "magnetic-amber-pro",
        axosome: 6,
        title: "NANO68 (LL)",
        cover: "nano68",
        themeConfigName: "nano68-10c5",
        theme: [{
          label: "Skin.White",
          value: "white"
        }],
        firmwareMark: "nano68"
      },
      boot: {
        vendorId: 14139,
        productId: 8298,
        usagePage: 255,
        usage: 1,
        firmwareMark: "nano68"
      }
    }]
  }, {
    controller: DuckBread,
    digital: vl,
    meta: {
      deviceName: 'Keyboard',
      component: "duck-bread-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4260,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "NANO 68 Pro",
        shaft: "magnetic-amber-pro",
        axosome: 7,
        title: 'NANO68\x20Pro(LL)',
        cover: "nano68",
        themeConfigName: 'nano68-10a4',
        theme: [{
          label: "Skin.White",
          value: "white"
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8267,
        usagePage: 255,
        usage: 1
      }
    }, {
      vendorId: 14139,
      productId: 4261,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "NANO 68 Pro",
        shaft: 'magnetic-amber-pro',
        axosome: 3,
        title: "NANO 68 Pro(LL)",
        cover: "nano68",
        themeConfigName: "nano68-10a5",
        theme: [{
          label: "Skin.White",
          value: 'white'
        }]
      },
      boot: {
        vendorId: 14139,
        productId: 8268,
        usagePage: 255,
        usage: 1
      }
    }]
  }],
  Nl = [{
    controller: DuckBread,
    meta: {
      deviceName: "RecoveryMode",
      component: "recovery-mode"
    },
    filters: [...Vl.map(arg => arg.filters).flat().map(arg => {
      const {
        boot: value1
      } = arg;
      return {
        ...arg,
        ...value1
      };
    })]
  }, {
    controller: DuckBread,
    meta: {
      deviceName: "RecoveryMode",
      component: 'recovery-mode'
    },
    filters: [...Ll]
  }, {
    controller: DuckBread,
    meta: {
      deviceName: "RecoveryMode",
      component: "recovery-mode"
    },
    filters: [...Fl.map(arg => arg.filters).flat().map(arg1 => {
      const {
        boot: value
      } = arg1;
      return {
        ...arg1,
        ...value
      };
    })]
  }],
  Gl = [...Bl, ...Vl, ...Fl],
  zl = Gl.map(arg => arg.filters).flat().map(arg => null == arg ? void 0 : arg.boot).filter(Boolean),
  Hl = [...Gl, ...Nl],
  Wl = [{
    vendorId: 14139,
    productId: 8597,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8569,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8481,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8482,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8483,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8469,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8470,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8471,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8325,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8493,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8270,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8266,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8267,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8268,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8298,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8272,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8273,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8274,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8241,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8450,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8275,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8334,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8291,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8335,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8449,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8336,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8276,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8292,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8310,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8309,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8337,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8289,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8288,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8484,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8459,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8460,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8461,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8462,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8463,
    usagePage: 255,
    usage: 1
  }, {
    vendorId: 14139,
    productId: 8464,
    usagePage: 255,
    usage: 1
  }],
  jl = {
    mad60: [{
      vendorId: 14139,
      productId: 4181,
      usagePage: 65376,
      usage: 97
    }, {
      vendorId: 14139,
      productId: 4182,
      usagePage: 65376,
      usage: 97
    }, {
      vendorId: 14139,
      productId: 4189,
      usagePage: 65376,
      usage: 97
    }],
    mad68: [{
      vendorId: 14139,
      productId: 4185,
      usagePage: 65376,
      usage: 97
    }, {
      vendorId: 14139,
      productId: 4186,
      usagePage: 65376,
      usage: 97
    }, {
      vendorId: 14139,
      productId: 4188,
      usagePage: 65376,
      usage: 97
    }]
  },
  Yl = {
    mad60: [{
      vendorId: 14139,
      productId: 8225,
      usagePage: 255,
      usage: 1
    }, {
      vendorId: 14139,
      productId: 8226,
      usagePage: 255,
      usage: 1
    }, {
      vendorId: 14139,
      productId: 8232,
      usagePage: 255,
      usage: 1
    }],
    mad68: [{
      vendorId: 14139,
      productId: 8229,
      usagePage: 255,
      usage: 1
    }, {
      vendorId: 14139,
      productId: 8230,
      usagePage: 255,
      usage: 1
    }, {
      vendorId: 14139,
      productId: 8231,
      usagePage: 255,
      usage: 1
    }]
  };
let $l = (O = class {
  constructor(arg, arg1) {
    V(this, "raw");
    let value2 = arg ? arg.buffer : new ArrayBuffer(O.SIZE);
    this.raw = new DataView(value2);
    this.commandId = arg1;
  }
  static ["getData"]() {
    return new DataView(new ArrayBuffer(O.SIZE));
  }
  ["toUint8Array"]() {
    return new Uint8Array(this.raw.buffer);
  }
  get ['baseOffset']() {
    return O.baseOffset;
  }
  get ["commandId"]() {
    return this.raw.getUint8(0);
  }
  set ["commandId"](arg) {
    this.raw.setUint8(0, arg);
  }
  ["toStringTx"]() {
    return "requestCode: " + this.commandId + ", commandId: " + this.commandId;
  }
  ["toStringRx"]() {
    return 'requestCode:\x20' + this.commandId + ", commandId: " + this.commandId;
  }
}, V(O, "SIZE", 64), V(O, "baseOffset", 1), O);
var ql = (arg => (arg[arg.GetFirmwareVersion = 128] = 'GetFirmwareVersion', arg[arg.GetMouseInfo = 129] = "GetMouseInfo", arg[arg.SetMouseInfo = 1] = "SetMouseInfo", arg[arg.SetReportRate = 32] = "SetReportRate", arg[arg.SetDpiStage = 33] = "SetDpiStage", arg[arg.SetRGB = 34] = "SetRGB", arg[arg.GetConfigData = 130] = "GetConfigData", arg[arg.SetRGBColor = 35] = 'SetRGBColor', arg[arg.GetRGBColor = 163] = "GetRGBColor", arg[arg.SetKeyMatrix = 36] = 'SetKeyMatrix', arg[arg.GetKeyMatrix = 164] = 'GetKeyMatrix', arg[arg.SetDpiConfig = 37] = "SetDpiConfig", arg[arg.GetDpiConfig = 165] = 'GetDpiConfig', arg[arg.SetDpiValue = 38] = 'SetDpiValue', arg[arg.GetDpiValue = 166] = 'GetDpiValue', arg[arg.SetDpiColor = 39] = "SetDpiColor", arg[arg.GetDpiColor = 167] = "GetDpiColor", arg[arg.SetSensorLift = 40] = "SetSensorLift", arg[arg.GetSensorLift = 168] = "GetSensorLift", arg[arg.SetMouseSpecialOption = 42] = "SetMouseSpecialOption", arg[arg.GetMouseSpecialOption = 170] = "GetMouseSpecialOption", arg[arg.SetMotionLessSleepTime = 43] = "SetMotionLessSleepTime", arg[arg.GetMotionLessSleepTime = 171] = "GetMotionLessSleepTime", arg[arg.SetKeyDebounce = 44] = "SetKeyDebounce", arg[arg.GetKeyDebounce = 172] = "GetKeyDebounce", arg[arg.SetMacroKey = 4] = "SetMacroKey", arg[arg.GetMacroKey = 132] = "GetMacroKey", arg[arg.ResetDefaultSettings = 10] = "ResetDefaultSettings", arg[arg.Pair = 3] = 'Pair', arg[arg.Set8KDongleRgb = 48] = 'Set8KDongleRgb', arg[arg.Get8KDongleRgb = 176] = 'Get8KDongleRgb', arg[arg.CheckPairStatus = 50] = "CheckPairStatus", arg[arg.ClearPairPipe = 53] = "ClearPairPipe", arg[arg.GetScPairMode = 56] = "GetScPairMode", arg[arg.SetPairMode = 30] = 'SetPairMode', arg[arg.GetPairStatus = 158] = "GetPairStatus", arg[arg.ReportMouseStatus = 250] = "ReportMouseStatus", arg))(ql || {}),
  Jl = (arg => (arg[arg.Start = 1] = "Start", arg[arg.Exit = 15] = "Exit", arg))(Jl || {}),
  Xl = (arg => (arg[arg.Success = 1] = "Success", arg[arg.Waiting = 0] = "Waiting", arg))(Xl || {}),
  Zl = (arg => (arg[arg.dongle_1k = 0] = "dongle_1k", arg[arg.dongle_8k = 1] = "dongle_8k", arg[arg.wired = 2] = "wired", arg))(Zl || {}),
  Ql = (arg => (arg[arg.GeneralKey = 1] = "GeneralKey", arg[arg.MouseKey = 2] = 'MouseKey', arg[arg.SystemKey = 4] = 'SystemKey', arg[arg.MediaKey = 3] = "MediaKey", arg[arg.MacroKey = 5] = "MacroKey", arg[arg.DpiKey = 11] = "DpiKey", arg[arg.SpecialKey = 240] = 'SpecialKey', arg[arg.FireKey = 12] = "FireKey", arg[arg.RGBKey = 10] = "RGBKey", arg))(Ql || {}),
  ef = (arg => (arg[arg.Power = 1] = 'Power', arg[arg.Sleep = 2] = "Sleep", arg[arg.Wake = 4] = "Wake", arg))(ef || {}),
  tf = (arg => (arg[arg.Left = 240] = "Left", arg[arg.Right = 241] = "Right", arg[arg.Middle = 242] = "Middle", arg[arg.Back = 243] = 'Back', arg[arg.Forward = 244] = 'Forward', arg[arg.WheelUp = 245] = "WheelUp", arg[arg.WheelDown = 246] = "WheelDown", arg[arg.AcPanLeft = 247] = 'AcPanLeft', arg[arg.AcPanRight = 248] = "AcPanRight", arg))(tf || {}),
  rf = (arg => (arg[arg.DPICycle = 3] = "DPICycle", arg[arg.DPIPlus = 1] = "DPIPlus", arg[arg.DPIMinus = 2] = "DPIMinus", arg[arg.DPIValue = 4] = "DPIValue", arg))(rf || {}),
  sf = (arg => (arg[arg.Fn = 0] = 'Fn', arg[arg.Profile = 1] = "Profile", arg[arg.Report = 2] = 'Report', arg[arg.Snipe = 3] = 'Snipe', arg[arg.TabFunction = 4] = "TabFunction", arg))(sf || {}),
  nf = (arg => (arg[arg.ProfilePlus = 1] = 'ProfilePlus', arg[arg.ProfileMinus = 2] = "ProfileMinus", arg[arg.ProfileLoop = 3] = "ProfileLoop", arg[arg.ProfileValue = 4] = "ProfileValue", arg))(nf || {}),
  af = (arg => (arg[arg.ReportPlus = 1] = 'ReportPlus', arg[arg.ReportMinus = 2] = 'ReportMinus', arg[arg.ReportLoop = 3] = 'ReportLoop', arg[arg.ReportValue = 4] = 'ReportValue', arg))(af || {}),
  of = (arg => (arg[arg.MacroType_Cycle = 1] = "MacroType_Cycle", arg[arg.MacroType_CycleUntilPressed = 2] = "MacroType_CycleUntilPressed", arg[arg.MacroType_CycleUntilReleased = 3] = 'MacroType_CycleUntilReleased', arg))(of || {}),
  uf = (arg => (arg[arg.Hz1000 = 1] = 'Hz1000', arg[arg.Hz500 = 2] = "Hz500", arg[arg.Hz250 = 4] = "Hz250", arg[arg.Hz125 = 8] = "Hz125", arg[arg.Hz2000 = 33] = "Hz2000", arg[arg.Hz4000 = 65] = "Hz4000", arg[arg.Hz8000 = 129] = 'Hz8000', arg))(uf || {}),
  cf = (arg => (arg[arg.Down = 0] = "Down", arg[arg.Up = 1] = 'Up', arg))(cf || {}),
  lf = (arg => (arg[arg.MotionSync = 1] = "MotionSync", arg[arg.LinearCorrection = 2] = "LinearCorrection", arg[arg.Ripple = 4] = "Ripple", arg[arg.CorderMode = 8] = "CorderMode", arg[arg.DpiRgb = 16] = "DpiRgb", arg[arg.LongDistance = 32] = "LongDistance", arg))(lf || {}),
  ff = (arg => (arg[arg.All = 255] = "All", arg[arg.Key = 1] = 'Key', arg[arg.Dpi = 2] = 'Dpi', arg[arg.Rgb = 4] = "Rgb", arg))(ff || {}),
  hf = (arg => (arg[arg.Off = 0] = "Off", arg[arg.Static = 1] = 'Static', arg[arg.Breath = 2] = "Breath", arg[arg.Neon = 3] = "Neon", arg[arg.ClickLight = 4] = "ClickLight", arg[arg.WithBattery = 5] = 'WithBattery', arg[arg.DPIBreath = 10] = "DPIBreath", arg))(hf || {});
let df = class ButtonAction {
    constructor(arg1, arg) {
      V(this, "dataView");
      V(this, 'offset');
      this.dataView = arg1;
      this.offset = arg;
    }
    get ["i18nText"]() {
      return "Unknown";
    }
    static ["createDataView"](arg2, arg1, arg, arg3) {
      const value4 = new DataView(new ArrayBuffer(4));
      value4.setUint8(3, arg2);
      value4.setUint8(2, arg1);
      value4.setUint8(1, arg);
      value4.setUint8(0, arg3);
      return value4;
    }
    get ["keyClass"]() {
      return this.dataView.getUint8(this.offset + 3);
    }
    get ["keyValue1"]() {
      return this.dataView.getUint8(this.offset + 2);
    }
    get ["keyValue2"]() {
      return this.dataView.getUint8(this.offset + 1);
    }
    get ["keyValue3"]() {
      return this.dataView.getUint8(this.offset);
    }
    static ["fromDataView"](arg1, arg) {
      switch (arg1.getUint8(arg + 3)) {
        case Ql.GeneralKey:
          return new gf(arg1, arg);
        case Ql.MouseKey:
          return new pf(arg1, arg);
        case Ql.SystemKey:
          return new yf(arg1, arg);
        case Ql.MediaKey:
          return new bf(arg1, arg);
        case Ql.MacroKey:
          return new _f(arg1, arg);
        case Ql.DpiKey:
          return new kf(arg1, arg);
        case Ql.SpecialKey:
          return new Sf(arg1, arg);
        case Ql.FireKey:
          return new Df(arg1, arg);
        case Ql.RGBKey:
          return new RGBKeyAction(arg1, arg);
        default:
          return new ButtonAction(arg1, arg);
      }
    }
    ['toString']() {
      return Array.from([this.keyValue1, this.keyValue2, this.keyValue3, this.keyClass]).map(arg => arg.toString().padStart(2, '0')).join('');
    }
  },
  gf = (V(x = class extends df {
    get ["keyCode"]() {
      return this.keyValue1;
    }
    static ["create"](arg1, arg = 0) {
      return new x(super.createDataView(this.TYPE, 0, arg, arg1), 0);
    }
  }, "TYPE", Ql.GeneralKey), x);
const mf = class _MouseKeyAction extends df {
  get ["i18nText"]() {
    switch (this.keyValue3) {
      case tf.Left:
        return "key.leftButton";
      case tf.Right:
        return "key.rightButton";
      case tf.Middle:
        return "key.middleButton";
      case tf.Back:
        return "key.backward";
      case tf.Forward:
        return "key.forward";
      case tf.WheelUp:
        return "key.wheelUp";
      case tf.WheelDown:
        return "key.wheelDown";
      case tf.AcPanLeft:
        return 'key.acPanLeft';
      case tf.AcPanRight:
        return 'key.acPanRight';
      default:
        return "Unknown";
    }
  }
  get ["keyValue3"]() {
    return super.keyValue3;
  }
  static ["create"](arg, arg1 = 0) {
    return new _MouseKeyAction(super.createDataView(this.TYPE, 0, arg1, arg), 0);
  }
};
V(mf, 'TYPE', Ql.MouseKey);
let pf = mf,
  yf = (V(K = class extends df {
    get ["keyValue3"]() {
      return super.keyValue3;
    }
    get ["i18nText"]() {
      switch (this.keyValue3) {
        case ef.Power:
          return "key.systemPower";
        case ef.Sleep:
          return "key.systemSleep";
        case ef.Wake:
          return "key.systemWake";
        default:
          return "Unknown";
      }
    }
    static ["create"](arg) {
      return new K(super.createDataView(this.TYPE, 0, 0, arg), 0);
    }
  }, "TYPE", Ql.SystemKey), K);
const wf = class _MediaKeyAction extends df {
  get ["keyValue2"]() {
    return super.keyValue2;
  }
  get ["keyValue3"]() {
    return super.keyValue3;
  }
  get ["i18nText"]() {
    return "key.mediaKey";
  }
  static ['create'](arg1, arg = 0) {
    return new _MediaKeyAction(super.createDataView(this.TYPE, 0, arg, arg1), 0);
  }
};
V(wf, "TYPE", Ql.MediaKey);
let bf = wf,
  _f = (V(A = class extends df {
    get ["macroType"]() {
      return super.keyValue1;
    }
    get ["macroIndex"]() {
      return super.keyValue3;
    }
    get ["i18nText"]() {
      return 'key.macroKey';
    }
    static ["create"](arg, arg1) {
      return new A(super.createDataView(this.TYPE, arg, 0, arg1), 0);
    }
  }, "TYPE", Ql.MacroKey), A);
const vf = class _DpiKeyAction extends df {
  get ["keyValue3"]() {
    return super.keyValue3;
  }
  get ["i18nText"]() {
    switch (this.keyValue3) {
      case rf.DPICycle:
        return "key.DPICycle";
      case rf.DPIPlus:
        return "key.DPIPlus";
      case rf.DPIMinus:
        return "key.DPIMinus";
    }
  }
  static ["create"](arg) {
    return new _DpiKeyAction(super.createDataView(this.TYPE, 0, 0, arg), 0);
  }
};
V(vf, 'TYPE', Ql.DpiKey);
let kf = vf;
const Cf = class _SpecialKeyAction extends df {
  get ["keyValue1"]() {
    return super.keyValue1;
  }
  get ["keyValue3"]() {
    return super.keyValue3;
  }
  get ["i18nText"]() {
    switch (this.keyValue1) {
      case sf.Fn:
        return "key.fn";
      case sf.Profile:
        switch (this.keyValue3) {
          case nf.ProfilePlus:
            return 'key.configFilePlus';
          case nf.ProfileMinus:
            return "key.configFileMinus";
          case nf.ProfileLoop:
            return "key.configFileCycle";
          case nf.ProfileValue:
            return "key.configFileMap";
          default:
            return 'Unknown';
        }
      case sf.Report:
        switch (this.keyValue3) {
          case af.ReportPlus:
            return "key.reportRatePlus";
          case af.ReportMinus:
            return "key.reportRateMinus";
          case af.ReportLoop:
            return 'key.reportRateLoop';
          case af.ReportValue:
            return "key.reportRateMap";
          default:
            return "Unknown";
        }
      case sf.Snipe:
        return "key.snipe";
      case sf.TabFunction:
        return 'key.tabFunction';
    }
  }
  static ["createProfile"](arg1, arg = 0) {
    return new _SpecialKeyAction(super.createDataView(this.TYPE, sf.Profile, arg, arg1), 0);
  }
  static ["createReport"](arg1, arg = 0) {
    return new _SpecialKeyAction(super.createDataView(this.TYPE, sf.Report, arg, arg1), 0);
  }
  static ["createSnipe"](arg1) {
    const value = new DataView(new ArrayBuffer(2));
    value.setUint16(0, arg1);
    return new _SpecialKeyAction(super.createDataView(this.TYPE, sf.Snipe, value.getUint8(0), value.getUint8(1)), 0);
  }
  static ["createTabFunction"](arg, arg1 = 0) {
    return new _SpecialKeyAction(super.createDataView(this.TYPE, sf.TabFunction, arg, arg1), 0);
  }
  static ['create'](arg) {
    return new _SpecialKeyAction(super.createDataView(this.TYPE, arg, 0, 0), 0);
  }
};
V(Cf, "TYPE", Ql.SpecialKey);
let Sf = Cf;
const Uf = class _FireKeyAction extends df {
  get ["i18nText"]() {
    return "key.flameKey";
  }
  static ['create'](arg = 0, arg1 = 0, arg2) {
    return new _FireKeyAction(super.createDataView(this.TYPE, arg, arg1, arg2), 0);
  }
};
V(Uf, "TYPE", Ql.FireKey);
let Df = Uf;
class RGBKeyAction extends df {}
V(RGBKeyAction, "TYPE", Ql.RGBKey);
class GetFirmwareVersion extends $l {
  get ['version']() {
    return [this.raw.getUint8(this.baseOffset).toString(16), this.raw.getUint8(0).toString(16).padStart(2, '0')].join('.');
  }
  get ["deviceType"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  static ["get"]() {
    return new GetFirmwareVersion(this.getData(), ql.GetFirmwareVersion);
  }
}
class GetMouseInfo extends $l {
  get ['version']() {
    return this.raw.getUint8(this.baseOffset + 1) + '.' + this.raw.getUint8(this.baseOffset);
  }
  get ["profile"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  get ['mouseId']() {
    return {
      cid: this.raw.getUint8(this.baseOffset + 3),
      mid: this.raw.getUint8(this.baseOffset + 4)
    };
  }
  static ["get"]() {
    return new GetMouseInfo(this.getData(), ql.GetMouseInfo);
  }
}
class SetMouseInfo extends $l {
  set ["type"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  set ["profile"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["create"](arg1) {
    const value = new SetMouseInfo(this.getData(), ql.SetMouseInfo);
    value.type = 0;
    value.profile = arg1;
    return value;
  }
}
let Of = class SetReportRate extends $l {
  set ["reportRate"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["create"](arg1) {
    const value = new SetReportRate(this.getData(), ql.SetReportRate);
    value.reportRate = arg1;
    return value;
  }
};
class GetDpiConfig extends $l {
  get ["dpiCount"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['dpiCount'](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  get ["dpiEnable"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  static ["get"]() {
    return new GetDpiConfig(this.getData(), ql.GetDpiConfig);
  }
}
class SetDpiConfig extends $l {
  set ["dpiCount"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  set ["dpiEnable"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  static ["create"](arg1, arg) {
    const value2 = new SetDpiConfig(this.getData(), ql.SetDpiConfig);
    value2.dpiCount = arg1;
    value2.dpiEnable = arg;
    return value2;
  }
}
class SetDpiStage extends $l {
  set ['dpi'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ['create'](arg1) {
    const value = new SetDpiStage(this.getData(), ql.SetDpiStage);
    value.dpi = arg1;
    return value;
  }
}
class SetRGB extends $l {
  set ["rgbEffect"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  set ["rgbBrightness"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  set ["rgbSpeed"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  set ["rgbColor"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  static ['create'](arg) {
    const value1 = new SetRGB(this.getData(), ql.SetRGB);
    value1.rgbEffect = arg.rgbEffect;
    value1.rgbBrightness = arg.rgbBrightness;
    value1.rgbSpeed = arg.rgbSpeed;
    value1.rgbColor = arg.rgbColor;
    return value1;
  }
}
class GetConfigData extends $l {
  get ['reportRate']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['reportRate'](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  get ["currentDpiStage"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ["currentDpiStage"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  get ["rgbEffect"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["rgbEffect"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["rgbBrightness"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ['rgbBrightness'](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ["rgbSpeed"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["rgbSpeed"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ["rgbColor"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["rgbColor"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  get ["reserved"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  get ["batteryLevel"]() {
    return this.raw.getUint8(this.baseOffset + 7);
  }
  get ["linkStatus"]() {
    return this.raw.getUint8(this.baseOffset + 8);
  }
  static ['get']() {
    return new GetConfigData(this.getData(), ql.GetConfigData);
  }
}
class GetRGBColor extends $l {
  get ['RGBColorList']() {
    return Array.from({
      length: 8
    }, (arg, arg1) => ({
      colorId: arg1,
      r: this.raw.getUint8(this.baseOffset + 3 * arg1),
      g: this.raw.getUint8(this.baseOffset + 1 + 3 * arg1),
      b: this.raw.getUint8(this.baseOffset + 2 + 3 * arg1)
    }));
  }
  static ["get"](arg = 255) {
    const value1 = this.getData();
    value1.setUint8(this.baseOffset + 1, arg);
    return new GetRGBColor(value1, ql.GetRGBColor);
  }
}
class SetDpiValue extends $l {
  set ["dpiId"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  set ["value"](arg2) {
    let value1 = 255 & arg2,
      value = arg2 >>> 8;
    this.raw.setUint8(this.baseOffset + 2, value1);
    this.raw.setUint8(this.baseOffset + 3, value);
  }
  static ["create"](arg2, arg1) {
    const value = new SetDpiValue(this.getData(), ql.SetDpiValue);
    value.dpiId = arg2;
    value.value = arg1;
    return value;
  }
}
class GetDpiValue extends $l {
  get ["dpiValues"]() {
    return Array.from({
      length: 8
    }, (arg1, arg) => ({
      dpiId: arg,
      value: this.raw.getUint8(this.baseOffset + 2 * arg) + (this.raw.getUint8(this.baseOffset + 2 * arg + 1) << 8)
    }));
  }
  set ['dpiValues'](arg) {
    for (let value3 = 0; value3 < 8; value3++) {
      const {
        value: value2
      } = arg[value3];
      let value = 255 & value2,
        value1 = value2 >> 8;
      this.raw.setUint8(this.baseOffset + 2 * value3, value);
      this.raw.setUint8(this.baseOffset + 2 * value3 + 1, value1);
    }
  }
  static ["get"](arg = 255) {
    const value1 = this.getData();
    value1.setUint8(this.baseOffset + 1, arg);
    return new GetDpiValue(value1, ql.GetDpiValue);
  }
}
class SetDpiColor extends $l {
  set ['dpiId'](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  set ['r'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  set ['g'](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  set ['b'](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  static ['create'](arg1, arg4, arg2, arg3) {
    const value = new SetDpiColor(this.getData(), ql.SetDpiColor);
    value.dpiId = arg1;
    value.r = arg4;
    value.g = arg2;
    value.b = arg3;
    return value;
  }
}
class GetDpiColor extends $l {
  get ["dpiColors"]() {
    return Array.from({
      length: 8
    }, (arg, arg1) => ({
      dpiId: arg1,
      r: this.raw.getUint8(this.baseOffset + 3 * arg1),
      g: this.raw.getUint8(this.baseOffset + 1 + 3 * arg1),
      b: this.raw.getUint8(this.baseOffset + 2 + 3 * arg1)
    }));
  }
  set ["dpiColors"](arg) {
    for (let value = 0; value < 8; value++) {
      this.raw.setUint8(this.baseOffset + 3 * value, arg[value].r);
      this.raw.setUint8(this.baseOffset + 1 + 3 * value, arg[value].g);
      this.raw.setUint8(this.baseOffset + 2 + 3 * value, arg[value].b);
    }
  }
  static ["get"](arg = 255) {
    const value1 = this.getData();
    value1.setUint8(this.baseOffset + 1, arg);
    return new GetDpiColor(value1, ql.GetDpiColor);
  }
}
class SetMouseSpecialOption extends $l {
  set ["specialOption"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["create"](arg) {
    const value1 = new SetMouseSpecialOption(this.getData(), ql.SetMouseSpecialOption);
    value1.specialOption = arg;
    return value1;
  }
}
class GetMouseSpecialOption extends $l {
  get ['specialOption']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["specialOption"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  static ["get"]() {
    return new GetMouseSpecialOption(this.getData(), ql.GetMouseSpecialOption);
  }
}
class SetMotionLessSleepTime extends $l {
  set ["time"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["create"](arg1) {
    const value = new SetMotionLessSleepTime(this.getData(), ql.SetMotionLessSleepTime);
    value.time = arg1;
    return value;
  }
}
class GetKeyDebounce extends $l {
  get ["debounce"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["debounce"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  static ["get"]() {
    return new GetKeyDebounce(this.getData(), ql.GetKeyDebounce);
  }
}
class SetKeyDebounce extends $l {
  set ["debounce"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["create"](arg) {
    const value1 = new SetKeyDebounce(this.getData(), ql.SetKeyDebounce);
    value1.debounce = arg;
    return value1;
  }
}
class GetMotionLessSleepTime extends $l {
  get ["motionLessSleepTime"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["motionLessSleepTime"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  static ["get"]() {
    return new GetMotionLessSleepTime(this.getData(), ql.GetMotionLessSleepTime);
  }
}
class SetSensorLift extends $l {
  set ['lift'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["create"](arg) {
    const value1 = new SetSensorLift(this.getData(), ql.SetSensorLift);
    value1.lift = arg;
    return value1;
  }
}
class GetSensorLift extends $l {
  get ['lift']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["lift"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  static ['get']() {
    return new GetSensorLift(this.getData(), ql.GetSensorLift);
  }
}
class SetMouseMatrix extends $l {
  get ['key']() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ["key"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  get ["button"]() {
    return df.fromDataView(this.raw, this.baseOffset + 2);
  }
  set ["button"](arg1) {
    const {
      keyClass: value4,
      keyValue1: value3,
      keyValue2: value2,
      keyValue3: value
    } = arg1;
    this.raw.setUint8(this.baseOffset + 2, value);
    this.raw.setUint8(this.baseOffset + 3, value2);
    this.raw.setUint8(this.baseOffset + 4, value3);
    this.raw.setUint8(this.baseOffset + 5, value4);
  }
  static ['create'](arg2, arg) {
    const value1 = new SetMouseMatrix(this.getData(), ql.SetKeyMatrix);
    value1.key = arg2;
    value1.button = arg;
    return value1;
  }
}
class MouseMatrix extends $l {
  get ["matrixList"]() {
    if (this.commandId !== ql.GetKeyMatrix) return [];
    return Array.from({
      length: 10
    }, (arg1, arg) => df.fromDataView(this.raw, this.baseOffset + 4 * arg));
  }
  set ["keyId"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  set ["keyCode"](arg) {
    for (let value = 0; value < 4; value++) this.raw.setUint8(this.baseOffset + 2 + value, arg[value]);
  }
  static ["create"](arg, arg2) {
    const value1 = new MouseMatrix(this.getData(), ql.SetKeyMatrix);
    value1.keyCode = arg2;
    value1.keyId = arg;
    return value1;
  }
  static ['get'](arg = 255) {
    const value1 = this.getData();
    value1.setUint8(this.baseOffset + 1, arg);
    return new MouseMatrix(value1, ql.GetKeyMatrix);
  }
}
let xf = class SetMacroKey extends $l {
  set ['macroIndex'](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  set ["length"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  static ["create"](arg1, arg2) {
    const value = new SetMacroKey(this.getData(), ql.SetMacroKey);
    value.macroIndex = arg1;
    value.length = arg2;
    return value;
  }
};
const Kf = class _SetMacroDetail extends $l {
  get ["count"]() {
    const value = this.raw.getUint8(0);
    return this.raw.getUint8(_SetMacroDetail.baseOffset) << 8 | value;
  }
  set ["count"](arg1) {
    let value = 255 & arg1,
      value2 = arg1 >>> 8;
    this.raw.setUint8(0, value);
    this.raw.setUint8(_SetMacroDetail.baseOffset, value2);
  }
  set ['macro'](arg) {
    let value12 = 2;
    for (const value8 of arg) {
      let {
        value: value1,
        keyStatus: value22,
        delay: value2,
        keyType: value4
      } = value8;
      value2 /= 10;
      const value6 = value2 >= 128,
        value7 = value22 === cf.Down ? 127 : 255,
        value3 = value22 === cf.Down ? 1 : 129;
      let value5 = 255 & value2;
      if (value22 === cf.Up && value5) {
        let value = value5.toString(2).padStart(8, '0');
        '1' !== value[0] && (value = '1' + value.slice(1));
        value5 = rt.parseInt(rt.parseInt(value, 2).toString(16), 16);
      }
      if (value4 === pt.Mouse_Key) switch (value1) {
        case 1:
          value1 = 240;
          break;
        case 2:
          value1 = 241;
          break;
        case 4:
          value1 = 242;
          break;
        case 8:
          value1 = 243;
          break;
        case 16:
          value1 = 244;
      }
      if (value6) {
        const value = value2 >>> 8 & 255;
        this.raw.setUint8(value12, value7);
        this.raw.setUint8(value12 + 1, value1);
        this.raw.setUint8(value12 + 2, value5);
        this.raw.setUint8(value12 + 3, value);
        value12 += 4;
      } else {
        this.raw.setUint8(value12, value5 || value3);
        this.raw.setUint8(value12 + 1, value1);
        value12 += 2;
      }
    }
    this.raw.setUint8(value12, 0);
    this.raw.setUint8(value12 + 1, 0);
  }
  static ["create"](arg) {
    const {
        count: value1,
        actions: value2
      } = arg,
      value5 = 4 * (null == value2 ? void 0 : value2.length) + 4,
      value3 = Math.max(value5, _SetMacroDetail.SIZE),
      value4 = new _SetMacroDetail(new DataView(new ArrayBuffer(value3)));
    value4.count = value1;
    value4.macro = value2;
    return value4;
  }
};
V(Kf, "SIZE", 64);
V(Kf, 'baseOffset', 1);
let Af = Kf;
class GetPairStatus extends $l {
  get ['status']() {
    return this.raw.getUint8(0);
  }
  set ["status"](arg) {
    this.raw.setUint8(0, arg);
  }
  static ["get"]() {
    return new GetPairStatus(this.getData(), ql.GetPairStatus);
  }
}
class SetPairMode extends $l {
  set ["status"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ['create'](arg) {
    const value1 = new SetPairMode(this.getData(), ql.SetPairMode);
    value1.status = arg;
    return value1;
  }
}
class ResetDefaultSettings extends $l {
  set ["type"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  static ['create'](arg1) {
    const value = new ResetDefaultSettings(this.getData(), ql.ResetDefaultSettings);
    value.type = arg1;
    return value;
  }
}
class Get8KDongleRgb extends $l {
  get ["effect"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['effect'](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  get ["brightness"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ['brightness'](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["speed"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["color"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["color"](arg) {
    this.raw.result(this.baseOffset + 3, arg);
  }
  static ["get"]() {
    return new Get8KDongleRgb(this.getData(), ql.Get8KDongleRgb);
  }
}
class Set8KDongleRgb extends $l {
  set ["effect"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  set ["brightness"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  set ["speed"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  set ["color"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  static ['create'](arg) {
    const value1 = new Set8KDongleRgb(this.getData(), ql.Set8KDongleRgb);
    value1.effect = arg.effect;
    value1.brightness = arg.brightness;
    value1.speed = arg.speed;
    value1.color = arg.color;
    return value1;
  }
}
var If = (arg => (arg[arg.Power = 17] = 'Power', arg[arg.Led = 10] = 'Led', arg[arg.Dpi = 11] = "Dpi", arg[arg.ReportRate_Profile = 240] = "ReportRate_Profile", arg[arg.LinkStatus = 15] = "LinkStatus", arg))(If || {}),
  Pf = (arg => (arg[arg.Led_Effect = 0] = "Led_Effect", arg[arg.Led_Color = 3] = 'Led_Color', arg[arg.ReportRate = 2] = "ReportRate", arg[arg.Profile = 1] = 'Profile', arg))(Pf || {});
let Mf = (V(I = class extends $l {
    static ["get"]() {
      return new I(I.getData(), I.dataReporting);
    }
    static ["fromDataView"](arg) {
      return new I(arg, I.dataReporting);
    }
    get ["dataType"]() {
      return this.raw.getUint8(this.baseOffset);
    }
    get ["dataFlag"]() {
      return this.raw.getUint8(this.baseOffset + 1);
    }
  }, 'dataReporting', ql.ReportMouseStatus), I),
  Tf = class HidDevice3 extends WebHidGeneral {
    constructor() {
      super(...arguments);
      V(this, 'mutex', new Mutex());
      V(this, "pendingTransfers", []);
    }
    ["onDeviceToHostReportReceived"](arg) {}
    async ["transferForResultAsync"](arg7, arg1) {
      var value32, value3, value22;
      const value5 = (null == arg1 ? void 0 : arg1.sendReport) ? null == (value32 = this.device) ? void 0 : value32.sendReport : null == (value3 = this.device) ? void 0 : value3.sendFeatureReport;
      if ((null == arg1 ? void 0 : arg1.sendReport) && arg7.length > 64) {
        const value2 = this.handleSliceReportData(arg7);
        for (const value of value2) await value5.bind(this.device)(0, value);
        if (null == arg1 ? void 0 : arg1.noResponse) return;
      }
      if (null == arg1 ? void 0 : arg1.noResponse) return value5.bind(this.device)(0, arg7);
      if (null == arg1 ? void 0 : arg1.synchronous) {
        value5.bind(this.device)(0, arg7);
        const value = await (null == (value22 = this.device) ? void 0 : value22.receiveFeatureReport(0));
        return new DataView(value.buffer.slice(1, value.byteLength));
      }
      const value8 = new DataView(arg7.buffer).getUint8(0);
      let value9;
      const value4 = new Promise(arg => {
          value9 = arg;
        }),
        value6 = {
          requestCode: value8,
          data: arg7,
          promiseResolve: value9
        };
      this.pendingTransfers.push(value6);
      value5.bind(this.device)(0, arg7);
      return value4;
    }
    ["handleSliceReportData"](arg, arg1 = 64) {
      if (arg.length <= arg1) return [arg];
      {
        const value3 = [];
        for (let value2 = 0; value2 < arg.length; value2 += arg1) {
          const value = arg.slice(value2, value2 + arg1);
          this.isAllZeroesOptimized(value) || value3.push(value);
        }
        return value3;
      }
    }
    ["isAllZeroesOptimized"](arg2) {
      return arg2.every(arg => 0 === arg);
    }
    ["inputReportListener"](arg) {
      super.inputReportListener(arg);
      this.handleInputReport(arg.data);
    }
    ["handleInputReport"](arg) {
      this.mutex.runExclusive(() => {
        const value2 = arg.getUint8(0);
        if (0 == value2) return void this.onDeviceToHostReportReceived(arg);
        let value1 = false;
        value2 === Mf.dataReporting && (Pr('data-reporting', Mf.fromDataView(arg)), value1 = true);
        for (const value of this.pendingTransfers) if (value.requestCode === value2) {
          value.promiseResolve(arg);
          this.pendingTransfers.splice(this.pendingTransfers.indexOf(value), 1);
          value1 = true;
          break;
        }
        value1 || new Uint8Array(arg.buffer).toString();
      });
    }
  };
class Holtek extends Tf {
  async ["getFirmwareVersion"]() {
    return this.transferForResult(GetFirmwareVersion.get(), false, true);
  }
  async ["resetDefaultSettings"](arg = ff.All) {
    return this.transferForResult(ResetDefaultSettings.create(arg), false, true);
  }
  async ["getConfigData"]() {
    return this.transferForResult(GetConfigData.get());
  }
  async ['getRgbColor']() {
    return this.transferForResult(GetRGBColor.get());
  }
  async ["getMouseButton"]() {
    return this.transferForResult(MouseMatrix.get());
  }
  async ["getDpiConfig"]() {
    return this.transferForResult(GetDpiConfig.get());
  }
  async ["getDpiValue"]() {
    return this.transferForResult(GetDpiValue.get());
  }
  async ['getDpiColor']() {
    return this.transferForResult(GetDpiColor.get());
  }
  async ["getMouseInfo"]() {
    return this.transferForResult(GetMouseInfo.get());
  }
  async ["setCurrentProfile"](arg) {
    return this.transferForResult(SetMouseInfo.create(arg), false, true);
  }
  async ["getMotionLessSleepTime"]() {
    return this.transferForResult(GetMotionLessSleepTime.get());
  }
  async ['setMotionLessSleepTime'](arg) {
    return this.transferForResult(SetMotionLessSleepTime.create(arg), false, true);
  }
  async ['getKeyDebounce']() {
    return this.transferForResult(GetKeyDebounce.get());
  }
  async ["setKeyDebounce"](arg) {
    return this.transferForResult(SetKeyDebounce.create(arg), false, true);
  }
  async ['getSensorLift']() {
    return this.transferForResult(GetSensorLift.get());
  }
  async ['setSensorLift'](arg) {
    return this.transferForResult(SetSensorLift.create(arg), false, true);
  }
  async ["getMouseSpecialOption"]() {
    return this.transferForResult(GetMouseSpecialOption.get());
  }
  async ["setMouseSpecialOption"](arg) {
    return this.transferForResult(SetMouseSpecialOption.create(arg), false, true);
  }
  async ['setReportRate'](arg) {
    return this.transferForResult(Of.create(arg), false, true);
  }
  async ['setRGB'](arg) {
    return this.transferForResult(SetRGB.create(arg), false, true);
  }
  async ["setDpiStage"](arg) {
    return this.transferForResult(SetDpiStage.create(arg), false, true);
  }
  async ["setDpiValue"](arg, arg1) {
    return await this.transferForResult(SetDpiValue.create(arg, arg1), false, true);
  }
  async ["setDpiValues"](arg2) {
    for (const value2 of arg2) {
      const {
        dpiId: value1,
        value: value
      } = value2;
      await this.setDpiValue(value1, value);
      await new Promise(arg => {
        setTimeout(arg, 20);
      });
    }
  }
  async ['setDpiColor'](arg3, arg2, arg1, arg) {
    return await this.transferForResult(SetDpiColor.create(arg3, arg2, arg1, arg), false, true);
  }
  async ['setDpiColors'](arg2) {
    for (const value4 of arg2) {
      const {
        dpiId: value3,
        r: value,
        g: value1,
        b: value2
      } = value4;
      await this.setDpiColor(value3, value, value1, value2);
      await new Promise(arg => {
        setTimeout(arg, 20);
      });
    }
  }
  async ['setDpiConfig'](arg, arg1 = 255) {
    return await this.transferForResult(SetDpiConfig.create(arg, arg1), false, true);
  }
  async ["setMouseButtonOne"](arg, arg1) {
    return this.transferForResult(SetMouseMatrix.create(arg, arg1), true, true);
  }
  async ["setMouseButtons"](arg1) {
    let value2 = 0;
    for (const value of arg1) {
      await this.setMouseButtonOne(value2, value);
      await new Promise(arg => {
        setTimeout(arg, 20);
      });
      value2++;
    }
  }
  async ['setMacroConfig'](arg, arg1) {
    return this.transferForResult(xf.create(arg, arg1), true, true);
  }
  async ["setMacroDetail"](arg) {
    return this.transferForResult(Af.create(arg), true, true, true);
  }
  async ["setPairMode"](arg) {
    return this.transferForResult(SetPairMode.create(arg), false, true);
  }
  async ["getPairStatus"]() {
    return this.transferForResult(GetPairStatus.get(), false, true);
  }
  async ["get8KDongleRgb"]() {
    return this.transferForResult(Get8KDongleRgb.get());
  }
  async ["set8KDongleRgb"](arg) {
    return this.transferForResult(Set8KDongleRgb.create(arg), false, true);
  }
  async ["transferForResult"](arg1, arg3 = false, arg, arg4) {
    await Ng(20);
    const value2 = await this.transferForResultAsync(arg1.toUint8Array(), {
      noResponse: arg3,
      synchronous: arg,
      sendReport: arg4
    });
    if (!arg3) {
      arg1.raw = value2;
      return arg1;
    }
  }
}
var Rf = (arg => (arg[arg.StopImmediately = 0] = "StopImmediately", arg[arg.RepeatUntilNextKeyPress = 1] = 'RepeatUntilNextKeyPress', arg[arg.RepeatUntilNextAnyKeyPress = 2] = "RepeatUntilNextAnyKeyPress", arg[arg.LoopCount = 3] = "LoopCount", arg))(Rf || {});
class MacroDexie extends Xn {
  constructor(arg) {
    super(arg);
    V(this, 'friends');
    this.version(1).stores({
      friends: "&id, name, startType,loopNumber,macroList,createdAt,updateAt"
    });
  }
}
class AutoIncreaseMacroDexie extends Xn {
  constructor(arg) {
    super(arg);
    V(this, 'friends');
    this.version(1).stores({
      friends: "&id++ , name, startType,loopNumber,macroList,createdAt,updateAt"
    });
  }
}
class MacroStore {
  constructor(arg2, arg, arg1) {
    V(this, "maxMacroId", 12);
    V(this, "saveName", "macro");
    V(this, "isAutoIncrease", false);
    V(this, 'db');
    this.saveName = arg2 || this.saveName;
    this.maxMacroId = arg || this.maxMacroId;
    this.isAutoIncrease = arg1 || this.isAutoIncrease;
    this.db = arg1 ? new AutoIncreaseMacroDexie(this.saveName) : new MacroDexie(this.saveName);
  }
  async ["getMacroList"]() {
    return this.db.friends.orderBy("createdAt").toArray();
  }
  async ["getMacroById"](arg) {
    return this.db.friends.get({
      id: arg
    });
  }
  async ["createMacro"](arg) {
    const value2 = De(Date.now());
    if (this.isAutoIncrease) return this.db.friends.add({
      ...arg,
      createdAt: value2,
      updatedAt: value2
    });
    const value3 = await this.db.friends.toCollection().primaryKeys();
    if (value3.length > this.maxMacroId + 1) throw new Error("Macro limit reached");
    let value1 = 0;
    for (; value1 <= this.maxMacroId && value3.includes(value1);) value1++;
    if (value1 > this.maxMacroId) throw new Error("Internal error: No available ID found");
    return this.db.friends.add({
      ...arg,
      id: value1,
      createdAt: value2,
      updatedAt: value2
    });
  }
  async ['createMacroById'](arg2, arg) {
    const value1 = De(Date.now());
    return this.db.friends.add({
      ...arg,
      id: arg2,
      createdAt: value1,
      updatedAt: value1
    });
  }
  async ["updateMacro"](arg1, arg) {
    const value2 = De(Date.now());
    await this.db.friends.update(arg1, {
      ...arg,
      updatedAt: value2
    });
  }
  async ["removeMacro"](arg) {
    await this.db.friends.delete(arg);
  }
  async ['clearMacro']() {
    await this.db.friends.clear();
  }
}
const Ef = class _HoltekMacro extends MacroStore {
  constructor() {
    super(_HoltekMacro.saveName, _HoltekMacro.maxMacroId);
  }
};
V(Ef, "saveName", "holtek-mouse-macro");
V(Ef, "maxMacroId", 9);
let Bf = Ef;
const Lf = [{
    controller: Holtek,
    digital: yu,
    macro: Bf,
    meta: {
      deviceName: "Mouse",
      component: 'holtek-mouse'
    },
    filters: [{
      vendorId: 14139,
      productId: 4109,
      usagePage: 65296,
      usage: 1,
      custom: {
        name: 'MAD\x20G',
        cover: "mad-g",
        themeConfigName: "mad-g-100d",
        theme: [{
          label: 'Skin.White',
          value: "white"
        }, {
          label: "Skin.Black",
          value: "black"
        }],
        ic: 'PAW3395',
        mouseCidMid: '1,1'
      }
    }, {
      vendorId: 14139,
      productId: 4294,
      usagePage: 65296,
      usage: 1,
      custom: {
        name: "MAD G Pro",
        cover: "mad-g",
        themeConfigName: "mad-g-10c6",
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: "Skin.Black",
          value: 'black'
        }, {
          label: "Skin.Red",
          value: 'red'
        }],
        ic: "PAW3395",
        mouseCidMid: "1,2"
      }
    }, {
      vendorId: 14139,
      productId: 4111,
      usagePage: 65296,
      usage: 1,
      receiver: true,
      custom: {
        name: "MAD G Dongle"
      }
    }, {
      vendorId: 14139,
      productId: 4112,
      usagePage: 65296,
      usage: 1,
      receiver: true,
      custom: {
        name: "MAD G Dongle"
      }
    }]
  }],
  Vf = Lf.map(arg => arg.filters).flat().filter(arg => !(null == arg ? void 0 : arg.receiver)).map(arg => null == arg ? void 0 : arg.custom).filter(Boolean).reduce((arg, arg1) => (arg[arg1.mouseCidMid] = arg1, arg), {});
let Ff = (P = class {
  constructor(arg1, arg2) {
    V(this, "raw");
    let value = arg1 ? arg1.buffer : new ArrayBuffer(P.SIZE);
    this.raw = new DataView(value);
    this.commandId = arg2;
  }
  static ["getData"]() {
    return new DataView(new ArrayBuffer(P.SIZE));
  }
  get ['commandId']() {
    return this.raw.getUint8(0);
  }
  set ["commandId"](arg) {
    this.raw.setUint8(0, arg);
  }
  get ["commandStatus"]() {
    return this.raw.getUint8(1);
  }
  set ['commandStatus'](arg) {
    this.raw.setUint8(1, arg);
  }
  get ['eepromAddress']() {
    return this.raw.getUint16(2);
  }
  set ["eepromAddress"](arg) {
    this.raw.setUint16(2, arg);
  }
  get ['dataValidLen']() {
    return this.raw.getUint8(4);
  }
  set ['dataValidLen'](arg) {
    this.raw.setUint8(4, arg);
  }
  get ["checkSum"]() {
    return this.raw.getUint8(15);
  }
  set ["checkSum"](arg) {
    this.raw.setUint8(15, arg);
  }
  ["toUint8Array"]() {
    const value = new Uint8Array(this.raw.buffer);
    this.checkSum = 85 - (255 & rt.sum([8, ...value.slice(0, 15)]));
    return new Uint8Array(this.raw.buffer);
  }
  get ["baseOffset"]() {
    return P.baseOffset;
  }
  ["toStringTx"]() {
    return 'requestCode:\x20' + this.commandId + ',\x20commandId:\x20' + this.commandId;
  }
  ["toStringRx"]() {
    return "requestCode: " + this.commandId + ", commandId: " + this.commandId + ',\x20commandStatus:\x20' + this.commandStatus;
  }
}, V(P, "SIZE", 16), V(P, "baseOffset", 5), P);
var Nf,
  Gf,
  zf,
  Hf,
  Wf,
  jf,
  Yf,
  $f,
  qf,
  Jf,
  Xf,
  Zf,
  Qf,
  eh = (arg => (arg[arg.DownLoadData = 1] = "DownLoadData", arg[arg.DownLoadDriverStatus = 2] = "DownLoadDriverStatus", arg[arg.GetWirelessMouseOnline = 3] = "GetWirelessMouseOnline", arg[arg.GetBatteryLevel = 4] = "GetBatteryLevel", arg[arg.SetWirelessDonglePair = 5] = 'SetWirelessDonglePair', arg[arg.GetWirelessDonglePairResult = 6] = "GetWirelessDonglePairResult", arg[arg.SetEEPROM = 7] = "SetEEPROM", arg[arg.GetEEPROM = 8] = "GetEEPROM", arg[arg.RestoreFactory = 9] = "RestoreFactory", arg[arg.ReportMouseStatus = 10] = "ReportMouseStatus", arg[arg.Reserved1 = 11] = "Reserved1", arg[arg.Reserved2 = 12] = "Reserved2", arg[arg.EnterUSBUpgradeMode = 13] = "EnterUSBUpgradeMode", arg[arg.GetCurrentConfig = 14] = "GetCurrentConfig", arg[arg.SetCurrentConfig = 15] = 'SetCurrentConfig', arg[arg.GetMouseCIDMID = 16] = "GetMouseCIDMID", arg[arg.Reserved3 = 17] = "Reserved3", arg[arg.GetMouseVersion = 18] = "GetMouseVersion", arg[arg.DongleExitPair = 19] = "DongleExitPair", arg[arg.Set4KRGBMode = 20] = 'Set4KRGBMode', arg[arg.Get4KRGBMode = 21] = "Get4KRGBMode", arg[arg.SetFarDistanceMode = 22] = "SetFarDistanceMode", arg[arg.GetFarDistanceMode = 23] = 'GetFarDistanceMode', arg[arg.SetDongleLightMode = 24] = "SetDongleLightMode", arg[arg.GetDongleLightMode = 25] = "GetDongleLightMode", arg[arg.ReportMouseUpgradeStatus = 91] = "ReportMouseUpgradeStatus", arg[arg.ReportMouseUpgradeErrorStatus = 90] = 'ReportMouseUpgradeErrorStatus', arg))(eh || {}),
  th = (arg => (arg[arg.dongle1K = 0] = 'dongle1K', arg[arg.dongle4K = 1] = "dongle4K", arg[arg.wired1K = 2] = "wired1K", arg[arg.wired8K = 3] = "wired8K", arg[arg.dongle2K = 4] = "dongle2K", arg[arg.dongle8K = 5] = "dongle8K", arg))(th || {});
Gf = Nf || (Nf = {});
(zf = Gf.Address || (Gf.Address = {}))[zf.reportRate = 0] = "reportRate";
zf[zf.reportRateCRC = 1] = "reportRateCRC";
zf[zf.maxDpi = 2] = 'maxDpi';
zf[zf.maxDpiCRC = 3] = "maxDpiCRC";
zf[zf.currentDpi = 4] = 'currentDpi';
zf[zf.currentDpiCRC = 5] = "currentDpiCRC";
zf[zf.silentHeight = 10] = "silentHeight";
zf[zf.silentHeightCRC = 11] = "silentHeightCRC";
zf[zf.dpi1 = 12] = "dpi1";
zf[zf.dpi3 = 20] = "dpi3";
zf[zf.dpi5 = 28] = "dpi5";
zf[zf.dpi7 = 36] = 'dpi7';
zf[zf.dpi1Color = 44] = "dpi1Color";
zf[zf.dpi3Color = 52] = "dpi3Color";
zf[zf.dpi5Color = 60] = "dpi5Color";
zf[zf.dpi7Color = 68] = "dpi7Color";
zf[zf.dpiRGBLightingEffects = 76] = "dpiRGBLightingEffects";
zf[zf.dpiRGBLightingEffectsCRC = 77] = "dpiRGBLightingEffectsCRC";
zf[zf.dpiRGBLongBrightBrightness = 78] = "dpiRGBLongBrightBrightness";
zf[zf.dpiRGBLongBrightBrightnessCRC = 79] = "dpiRGBLongBrightBrightnessCRC";
zf[zf.dpiRGBLongBrightSpeed = 80] = "dpiRGBLongBrightSpeed";
zf[zf.dpiRGBLongBrightSpeedCRC = 81] = 'dpiRGBLongBrightSpeedCRC';
zf[zf.dpiRGBEnable = 82] = 'dpiRGBEnable';
zf[zf.dpiRGBEnableCRC = 83] = "dpiRGBEnableCRC";
zf[zf.articleLampR = 84] = "articleLampR";
zf[zf.articleLampG = 85] = "articleLampG";
zf[zf.articleLampB = 86] = "articleLampB";
zf[zf.articleLampCRC = 87] = "articleLampCRC";
zf[zf.articleLampEffects = 88] = "articleLampEffects";
zf[zf.articleLampEffectsCRC = 89] = "articleLampEffectsCRC";
zf[zf.articleLampLongBrightness = 90] = 'articleLampLongBrightness';
zf[zf.articleLampLongBrightnessCRC = 91] = "articleLampLongBrightnessCRC";
zf[zf.articleLampBreathingSpeed = 92] = "articleLampBreathingSpeed";
zf[zf.articleLampBreathingSpeedCRC = 93] = "articleLampBreathingSpeedCRC";
zf[zf.articleLampEnergySaving = 94] = "articleLampEnergySaving";
zf[zf.articleLampEnergySavingCRC = 95] = "articleLampEnergySavingCRC";
zf[zf.stabilizationTime = 169] = "stabilizationTime";
zf[zf.stabilizationTimeCRC = 170] = "stabilizationTimeCRC";
zf[zf.motionSync = 171] = 'motionSync';
zf[zf.motionSyncCRC = 172] = 'motionSyncCRC';
zf[zf.closeLedTime = 173] = 'closeLedTime';
zf[zf.closeLedTimeCRC = 174] = "closeLedTimeCRC";
zf[zf.linearCorrection = 175] = 'linearCorrection';
zf[zf.linearCorrectionCRC = 176] = "linearCorrectionCRC";
zf[zf.rippleControl = 177] = "rippleControl";
zf[zf.rippleControlCRC = 178] = 'rippleControlCRC';
zf[zf.moveCloseLights = 179] = "moveCloseLights";
zf[zf.moveCloseLightsCRC = 180] = 'moveCloseLightsCRC';
zf[zf.sensorEnable = 181] = "sensorEnable";
zf[zf.sensorEnableCRC = 182] = "sensorEnableCRC";
zf[zf.sensorTime = 183] = "sensorTime";
zf[zf.sensorTimeCRC = 184] = "sensorTimeCRC";
zf[zf.sensorMode = 185] = "sensorMode";
zf[zf.sensorModeCRC = 186] = 'sensorModeCRC';
zf[zf.rfTxTime = 187] = "rfTxTime";
zf[zf.rfTxTimeCRC = 188] = "rfTxTimeCRC";
zf[zf.key0 = 96] = "key0";
zf[zf.key1 = 100] = "key1";
zf[zf.key2 = 104] = "key2";
zf[zf.key3 = 108] = 'key3';
zf[zf.key4 = 112] = "key4";
zf[zf.key5 = 116] = 'key5';
zf[zf.key6 = 120] = "key6";
zf[zf.key7 = 124] = "key7";
zf[zf.key8 = 128] = "key8";
zf[zf.key9 = 132] = "key9";
zf[zf.key10 = 136] = "key10";
zf[zf.key11 = 140] = "key11";
zf[zf.key12 = 144] = "key12";
zf[zf.key13 = 148] = "key13";
zf[zf.key14 = 152] = 'key14';
zf[zf.key15 = 156] = "key15";
zf[zf.keyShortcuts0 = 256] = "keyShortcuts0";
zf[zf.keyShortcuts1 = 288] = "keyShortcuts1";
zf[zf.keyShortcuts2 = 320] = "keyShortcuts2";
zf[zf.keyShortcuts3 = 352] = 'keyShortcuts3';
zf[zf.keyShortcuts4 = 384] = "keyShortcuts4";
zf[zf.keyShortcuts5 = 416] = 'keyShortcuts5';
zf[zf.keyShortcuts6 = 448] = "keyShortcuts6";
zf[zf.keyShortcuts7 = 480] = "keyShortcuts7";
zf[zf.keyShortcuts8 = 512] = "keyShortcuts8";
zf[zf.keyShortcuts9 = 544] = "keyShortcuts9";
zf[zf.keyShortcuts10 = 576] = "keyShortcuts10";
zf[zf.keyShortcuts11 = 608] = "keyShortcuts11";
zf[zf.keyShortcuts12 = 640] = "keyShortcuts12";
zf[zf.keyShortcuts13 = 672] = "keyShortcuts13";
zf[zf.keyShortcuts14 = 704] = "keyShortcuts14";
zf[zf.keyShortcuts15 = 736] = "keyShortcuts15";
zf[zf.macro0 = 768] = "macro0";
zf[zf.macro1 = 1152] = "macro1";
zf[zf.macro2 = 1536] = "macro2";
zf[zf.macro3 = 1920] = "macro3";
zf[zf.macro4 = 2304] = 'macro4';
zf[zf.macro5 = 2688] = 'macro5';
zf[zf.macro6 = 3072] = 'macro6';
zf[zf.macro7 = 3456] = "macro7";
zf[zf.macro8 = 3840] = "macro8";
zf[zf.macro9 = 4224] = "macro9";
zf[zf.macro10 = 4608] = 'macro10';
zf[zf.macro11 = 4992] = "macro11";
zf[zf.macro12 = 5376] = "macro12";
zf[zf.macro13 = 5760] = "macro13";
zf[zf.macro14 = 6144] = "macro14";
zf[zf.macro15 = 6528] = "macro15";
(Hf = Gf.ReportRate || (Gf.ReportRate = {}))[Hf.Hz1000 = 1] = "Hz1000";
Hf[Hf.Hz500 = 2] = "Hz500";
Hf[Hf.Hz250 = 4] = "Hz250";
Hf[Hf.Hz125 = 8] = "Hz125";
Hf[Hf.Hz2000 = 16] = 'Hz2000';
Hf[Hf.Hz4000 = 32] = 'Hz4000';
Hf[Hf.Hz8000 = 64] = "Hz8000";
(Wf = Gf.RGBLightingEffects || (Gf.RGBLightingEffects = {}))[Wf.longBright = 1] = "longBright";
Wf[Wf.breathing = 2] = "breathing";
(jf = Gf.ButtonKeyClass || (Gf.ButtonKeyClass = {}))[jf.Close = 0] = 'Close';
jf[jf.Mouse = 1] = "Mouse";
jf[jf.Dpi = 2] = "Dpi";
jf[jf.RollSideToSide = 3] = "RollSideToSide";
jf[jf.FirepowerKey = 4] = 'FirepowerKey';
jf[jf.ShortcutKey = 5] = "ShortcutKey";
jf[jf.Macro = 6] = 'Macro';
jf[jf.ReportRate = 7] = "ReportRate";
jf[jf.Chandeliers = 8] = 'Chandeliers';
jf[jf.ConfigFile = 9] = "ConfigFile";
jf[jf.DpiLock = 10] = "DpiLock";
jf[jf.Wheel = 11] = "Wheel";
(Yf = Gf.ButtonKeyValue1Mouse || (Gf.ButtonKeyValue1Mouse = {}))[Yf.Disable = 0] = 'Disable';
Yf[Yf.Left = 1] = "Left";
Yf[Yf.Right = 2] = "Right";
Yf[Yf.Middle = 4] = "Middle";
Yf[Yf.Side1 = 8] = 'Side1';
Yf[Yf.Side2 = 16] = 'Side2';
($f = Gf.ButtonKeyValue1Dpi || (Gf.ButtonKeyValue1Dpi = {}))[$f.Zero = 1] = "Zero";
$f[$f.Plus = 2] = "Plus";
$f[$f.Minus = 3] = 'Minus';
(qf = Gf.ButtonKeyValue1RollSideToSide || (Gf.ButtonKeyValue1RollSideToSide = {}))[qf.Left = 1] = "Left";
qf[qf.Right = 2] = "Right";
(Jf = Gf.ButtonKeyValue2Macro || (Gf.ButtonKeyValue2Macro = {}))[Jf.StopImmediately = 254] = "StopImmediately";
Jf[Jf.RepeatUntilNextKeyPress = 253] = 'RepeatUntilNextKeyPress';
Jf[Jf.RepeatUntilNextAnyKeyPress = 255] = 'RepeatUntilNextAnyKeyPress';
(Xf = Gf.ButtonKeyValue1Wheel || (Gf.ButtonKeyValue1Wheel = {}))[Xf.Top = 1] = "Top";
Xf[Xf.Bottom = 2] = "Bottom";
(Zf = Gf.KeyState || (Gf.KeyState = {}))[Zf.Down = 0] = 'Down';
Zf[Zf.Up = 1] = 'Up';
(Qf = Gf.KeyType || (Gf.KeyType = {})).Modify = "000";
Qf.GeneralKey = "001";
Qf.MediaKey = "010";
Qf.PowerKey = "011";
Qf.MouseKey = "100";
Qf.MoveXY = "101";
Qf.Scroll = "110";
var rh = (arg => (arg[arg.eraseBackupArea = 1] = "eraseBackupArea", arg[arg.eraseRunArea = 2] = "eraseRunArea", arg[arg.checkRunArea = 5] = "checkRunArea", arg[arg.success = 136] = 'success', arg))(rh || {}),
  sh = (arg => (arg[arg.erase = 0] = "erase", arg[arg.success = 1] = 'success', arg))(sh || {});
class DownLoadData extends Ff {
  static ["get"](arg) {
    const value1 = new DownLoadData(Ff.getData(), eh.DownLoadData);
    value1.dataValidLen = 8;
    value1.encryptedData = arg;
    return value1;
  }
  get ['encryptedData']() {
    return [this.raw.getUint8(this.baseOffset), this.raw.getUint8(this.baseOffset + 1), this.raw.getUint8(this.baseOffset + 2), this.raw.getUint8(this.baseOffset + 3)];
  }
  set ["encryptedData"](arg) {
    for (let value = 0; value < 4; value++) this.raw.setUint8(this.baseOffset + value, (null == arg ? void 0 : arg[value]) ?? 0);
  }
  get ["cid"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  get ["mid"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  get ["deviceType"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
}
class DownLoadDriverStatus extends Ff {
  static ["get"](arg) {
    const value1 = new DownLoadDriverStatus(Ff.getData(), eh.DownLoadDriverStatus);
    value1.driverStatus = arg;
    return value1;
  }
  get ['driverStatus']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["driverStatus"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
}
class WirelessMouseOnline extends Ff {
  static ['get']() {
    return new WirelessMouseOnline(WirelessMouseOnline.getData(), eh.GetWirelessMouseOnline);
  }
  get ["mouseStatus"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  get ['rfId3']() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  get ["rfId2"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  get ["rfId1"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
}
let nh = class Battery extends Ff {
  static ['get']() {
    return new Battery(Battery.getData(), eh.GetBatteryLevel);
  }
  get ['batteryLevel']() {
    return this.raw.getUint8(this.baseOffset);
  }
  get ['batteryCharge']() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  get ["batteryVoltage"]() {
    return this.raw.getUint16(this.baseOffset + 2);
  }
};
class StartPairing extends Ff {
  static ["get"](arg1, arg) {
    const value2 = new StartPairing(StartPairing.getData(), eh.SetWirelessDonglePair);
    value2.dataValidLen = 2;
    value2.cid = arg1;
    value2.mid = arg;
    return value2;
  }
  set ["cid"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  set ["mid"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
}
class GetPairingStatus extends Ff {
  static ["get"]() {
    return new GetPairingStatus(GetPairingStatus.getData(), eh.GetWirelessDonglePairResult);
  }
  get ["pairStatus"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  get ["pairLeftTime"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
}
class ExitPairing extends Ff {
  static ['get']() {
    return new ExitPairing(ExitPairing.getData(), eh.DongleExitPair);
  }
}
class RestoreFactory extends Ff {
  static ['get']() {
    return new Ff(RestoreFactory.getData(), eh.RestoreFactory);
  }
}
class CurrentConfigFile extends Ff {
  get ["currentConfigFile"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["currentConfigFile"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  static ["get"]() {
    return new CurrentConfigFile(CurrentConfigFile.getData(), eh.GetCurrentConfig);
  }
  static ['create'](arg1) {
    const value = new CurrentConfigFile(CurrentConfigFile.getData(), eh.SetCurrentConfig);
    value.dataValidLen = 1;
    value.currentConfigFile = arg1;
    return value;
  }
}
class MouseCIDMID extends Ff {
  get ["cid"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  get ['mid']() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  static ["get"]() {
    return new MouseCIDMID(MouseCIDMID.getData(), eh.GetMouseCIDMID);
  }
}
class MouseVersion extends Ff {
  get ["version"]() {
    return [this.raw.getUint8(this.baseOffset).toString(16), this.raw.getUint8(this.baseOffset + 1).toString(16).padStart(2, '0')].join('.');
  }
  static ["get"]() {
    return new MouseVersion(MouseVersion.getData(), eh.GetMouseVersion);
  }
}
class RGBModeBy4K extends Ff {
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["mode"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  get ['colors']() {
    return [{
      r: this.raw.getUint8(this.baseOffset + 1),
      g: this.raw.getUint8(this.baseOffset + 2),
      b: this.raw.getUint8(this.baseOffset + 3)
    }, {
      r: this.raw.getUint8(this.baseOffset + 4),
      g: this.raw.getUint8(this.baseOffset + 5),
      b: this.raw.getUint8(this.baseOffset + 6)
    }, {
      r: this.raw.getUint8(this.baseOffset + 7),
      g: this.raw.getUint8(this.baseOffset + 8),
      b: this.raw.getUint8(this.baseOffset + 9)
    }];
  }
  set ["colors"](arg) {
    for (let value3 = 0; value3 < 3; value3++) {
      const {
        r: value2,
        g: value1,
        b: value
      } = arg[value3];
      this.raw.setUint8(this.baseOffset + 3 * value3 + 1, value2);
      this.raw.setUint8(this.baseOffset + 3 * value3 + 2, value1);
      this.raw.setUint8(this.baseOffset + 3 * value3 + 3, value);
    }
  }
  static ['get']() {
    return new RGBModeBy4K(RGBModeBy4K.getData(), eh.Get4KRGBMode);
  }
  static ['create'](arg1) {
    const value = new RGBModeBy4K(RGBModeBy4K.getData(), eh.Set4KRGBMode);
    value.dataValidLen = 10;
    value.colors = arg1.colors;
    value.mode = arg1.mode;
    return value;
  }
}
class FarDistance extends Ff {
  get ["farDistanceMode"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['farDistanceMode'](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  static ["get"]() {
    return new FarDistance(FarDistance.getData(), eh.GetFarDistanceMode);
  }
  static ['createRaw'](arg) {
    return new FarDistance(arg, eh.SetFarDistanceMode);
  }
  static ["create"](arg1) {
    const value = new FarDistance(FarDistance.getData(), eh.SetFarDistanceMode);
    value.dataValidLen = 10;
    value.farDistanceMode = arg1;
    return value;
  }
}
class DongleLight extends Ff {
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['mode'](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  get ["color"]() {
    return {
      r: this.raw.getUint8(this.baseOffset + 1),
      g: this.raw.getUint8(this.baseOffset + 2),
      b: this.raw.getUint8(this.baseOffset + 3)
    };
  }
  set ["color"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg.r);
    this.raw.setUint8(this.baseOffset + 2, arg.g);
    this.raw.setUint8(this.baseOffset + 3, arg.b);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['speed'](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ["brightness"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["brightness"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  get ["sleepTime"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ["sleepTime"](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg);
  }
  static ["get"]() {
    return new DongleLight(DongleLight.getData(), eh.GetDongleLightMode);
  }
  static ["create"](arg1) {
    const value = new DongleLight(DongleLight.getData(), eh.SetDongleLightMode);
    value.dataValidLen = 10;
    value.mode = arg1.mode;
    value.color = arg1.color;
    value.brightness = arg1.brightness;
    value.speed = arg1.speed;
    value.sleepTime = arg1.sleepTime;
    return value;
  }
}
let ah = (V(M = class extends Ff {
  static ["get"]() {
    return new M(M.getData(), M.dataReporting);
  }
  static ["fromDataView"](arg) {
    return new M(arg, M.dataReporting);
  }
  get ["mouseStatusChanged"]() {
    const value = this.raw.getUint8(this.baseOffset);
    return {
      dpi: 1 & value,
      report: 2 & value,
      configFile: 4 & value,
      dpiIndicatorLight: 8 & value,
      logoIndicatorLight: 16 & value,
      lampWithIndicatorLight: 32 & value,
      batteryLevel: 64 & value
    };
  }
}, "dataReporting", eh.ReportMouseStatus), M);
class MouseReportRateDpi extends Ff {
  static ["get"]() {
    const value = new MouseReportRateDpi(MouseReportRateDpi.getData(), eh.GetEEPROM);
    value.eepromAddress = Nf.Address.reportRate;
    value.dataValidLen = 6;
    return value;
  }
  static ["createRaw"](arg) {
    return new MouseReportRateDpi(arg, eh.SetEEPROM);
  }
  static ["create"](arg) {
    const value1 = new MouseReportRateDpi(MouseReportRateDpi.getData(), eh.SetEEPROM);
    value1.eepromAddress = Nf.Address.reportRate;
    value1.dataValidLen = 6;
    value1.reportRate = arg.reportRate;
    value1.maxDpi = arg.maxDpi;
    value1.currentDpi = arg.currentDpi;
    return value1;
  }
  get ["reportRate"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["reportRate"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
    this.raw.setUint8(this.baseOffset + 1, 85 - arg);
  }
  get ["maxDpi"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['maxDpi'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
    this.raw.setUint8(this.baseOffset + 3, 85 - arg);
  }
  get ['currentDpi']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["currentDpi"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
    this.raw.setUint8(this.baseOffset + 5, 85 - arg);
  }
}
class MouseSilentHeight extends Ff {
  static ["get"]() {
    const value = new MouseSilentHeight(MouseSilentHeight.getData(), eh.GetEEPROM);
    value.eepromAddress = Nf.Address.silentHeight;
    value.dataValidLen = 2;
    return value;
  }
  static ["createRaw"](arg) {
    return new MouseSilentHeight(arg, eh.SetEEPROM);
  }
  static ["create"](arg1) {
    const value = new MouseSilentHeight(MouseSilentHeight.getData(), eh.SetEEPROM);
    value.eepromAddress = Nf.Address.silentHeight;
    value.dataValidLen = 2;
    value.silentHeight = arg1.silentHeight;
    return value;
  }
  get ["silentHeight"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["silentHeight"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
    this.raw.setUint8(this.baseOffset + 1, 85 - arg);
  }
}
class MouseDpi {
  constructor(arg1, arg) {
    V(this, "raw");
    V(this, "offset");
    this.raw = arg1;
    this.offset = arg;
  }
  static ["get"]() {
    return new MouseDpi(new DataView(new ArrayBuffer(4)), 0);
  }
  static ["fromDataView"](arg, arg1) {
    return new MouseDpi(arg, arg1);
  }
  static ["create"](arg1) {
    const value = MouseDpi.get();
    value.dpi = arg1;
    return value;
  }
  get ['dpi']() {
    return {
      xDpi: this.raw.getUint8(this.offset),
      yDpi: this.raw.getUint8(this.offset + 1),
      dpiEx: this.raw.getUint8(this.offset + 2)
    };
  }
  set ["dpi"](arg) {
    this.raw.setUint8(this.offset, arg.xDpi);
    this.raw.setUint8(this.offset + 1, arg.yDpi);
    this.raw.setUint8(this.offset + 2, arg.dpiEx);
    this.raw.setUint8(this.offset + 3, 85 - (arg.xDpi + arg.yDpi + arg.dpiEx) & 255);
  }
}
class MouseDpiColor {
  constructor(arg, arg1) {
    V(this, "raw");
    V(this, 'offset');
    this.raw = arg;
    this.offset = arg1;
  }
  static ["get"]() {
    return new MouseDpiColor(new DataView(new ArrayBuffer(4)), 0);
  }
  static ["fromDataView"](arg, arg1) {
    return new MouseDpiColor(arg, arg1);
  }
  get ["color"]() {
    return {
      r: this.raw.getUint8(this.offset),
      g: this.raw.getUint8(this.offset + 1),
      b: this.raw.getUint8(this.offset + 2)
    };
  }
  set ["color"](arg1) {
    const {
      r: value3,
      g: value,
      b: value2
    } = arg1;
    this.raw.setUint8(this.offset, value3);
    this.raw.setUint8(this.offset + 1, value);
    this.raw.setUint8(this.offset + 2, value2);
    this.raw.setUint8(this.offset + 3, 85 - (value3 + value + value2) & 255);
  }
}
class MouseDpiConfig extends Ff {
  static ['get'](arg1) {
    const value = new MouseDpiConfig(MouseDpiConfig.getData(), eh.GetEEPROM);
    value.eepromAddress = arg1;
    value.dataValidLen = 8;
    return value;
  }
  static ['create'](arg, arg2) {
    const value1 = new MouseDpiConfig(MouseDpiConfig.getData(), eh.SetEEPROM);
    value1.eepromAddress = arg;
    value1.dataValidLen = 8;
    value1.dpiList = arg2;
    return value1;
  }
  get ["dpiList"]() {
    return Array.from({
      length: 2
    }, (arg1, arg) => MouseDpi.fromDataView(this.raw, this.baseOffset + 4 * arg));
  }
  set ['dpiList'](arg) {
    if (arg.length > 2) throw new Error("DpiList length must be 2");
    for (let value3 = 0; value3 < 2; value3++) {
      const {
        dpi: value,
        raw: value2,
        offset: value1
      } = arg[value3];
      this.raw.setUint8(this.baseOffset + 4 * value3, value.xDpi);
      this.raw.setUint8(this.baseOffset + 4 * value3 + 1, value.yDpi);
      this.raw.setUint8(this.baseOffset + 4 * value3 + 2, value.dpiEx);
      this.raw.setUint8(this.baseOffset + 4 * value3 + 3, value2.getUint8(value1 + 3));
    }
  }
}
class MouseDpiColorConfig extends Ff {
  static ["get"](arg1) {
    const value = new MouseDpiColorConfig(MouseDpiColorConfig.getData(), eh.GetEEPROM);
    value.eepromAddress = arg1;
    value.dataValidLen = 8;
    return value;
  }
  static ["create"](arg1, arg) {
    const value2 = new MouseDpiColorConfig(MouseDpiColorConfig.getData(), eh.SetEEPROM);
    value2.eepromAddress = arg1;
    value2.dataValidLen = 8;
    value2.dpiColorList = arg;
    return value2;
  }
  get ["dpiColorList"]() {
    return Array.from({
      length: 2
    }, (arg1, arg) => MouseDpiColor.fromDataView(this.raw, this.baseOffset + 4 * arg));
  }
  set ["dpiColorList"](arg) {
    if (arg.length > 2) throw new Error("MouseDpiColor length must be 2");
    for (let value5 = 0; value5 < 2; value5++) {
      const {
        color: {
          r: value1,
          g: value,
          b: value4
        },
        raw: value3,
        offset: value2
      } = arg[value5];
      this.raw.setUint8(this.baseOffset + 4 * value5, value1);
      this.raw.setUint8(this.baseOffset + 4 * value5 + 1, value);
      this.raw.setUint8(this.baseOffset + 4 * value5 + 2, value4);
      this.raw.setUint8(this.baseOffset + 4 * value5 + 3, value3.getUint8(value2 + 3));
    }
  }
}
class MouseDpiRGBEffects extends Ff {
  static ["get"]() {
    const value = new MouseDpiRGBEffects(MouseDpiRGBEffects.getData(), eh.GetEEPROM);
    value.eepromAddress = Nf.Address.dpiRGBLightingEffects;
    value.dataValidLen = 8;
    return value;
  }
  static ["createRaw"](arg) {
    return new MouseDpiRGBEffects(arg, eh.SetEEPROM);
  }
  static ["create"](arg1) {
    const value = new MouseDpiRGBEffects(MouseDpiRGBEffects.getData(), eh.SetEEPROM);
    value.eepromAddress = Nf.Address.dpiRGBLightingEffects;
    value.dataValidLen = 8;
    value.rgbLightingEffects = arg1.rgbLightingEffects;
    value.longBrightBrightness = arg1.longBrightBrightness;
    value.breathingSpeed = arg1.breathingSpeed;
    value.dpiRGBEnabled = arg1.dpiRGBEnabled;
    return value;
  }
  get ["rgbLightingEffects"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['rgbLightingEffects'](arg) {
    this.raw.setUint8(this.baseOffset, arg);
    this.raw.setUint8(this.baseOffset + 1, 85 - arg);
  }
  get ["longBrightBrightness"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["longBrightBrightness"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
    this.raw.setUint8(this.baseOffset + 3, 85 - arg);
  }
  get ["breathingSpeed"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["breathingSpeed"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
    this.raw.setUint8(this.baseOffset + 5, 85 - arg);
  }
  get ["dpiRGBEnabled"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ["dpiRGBEnabled"](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg);
    this.raw.setUint8(this.baseOffset + 7, 85 - arg);
  }
}
class MouseBeforePerformanceSetting extends Ff {
  static ["get"]() {
    const value = new MouseBeforePerformanceSetting(MouseBeforePerformanceSetting.getData(), eh.GetEEPROM);
    value.eepromAddress = Nf.Address.stabilizationTime;
    value.dataValidLen = 10;
    return value;
  }
  static ['createRaw'](arg) {
    return new MouseBeforePerformanceSetting(arg, eh.SetEEPROM);
  }
  static ['create'](arg1) {
    const value = new MouseBeforePerformanceSetting(MouseBeforePerformanceSetting.getData(), eh.SetEEPROM);
    value.eepromAddress = Nf.Address.stabilizationTime;
    value.dataValidLen = 10;
    value.stabilizationTime = arg1.stabilizationTime;
    value.motionSync = arg1.motionSync;
    value.closeLedTime = arg1.closeLedTime;
    value.linearCorrection = arg1.linearCorrection;
    value.rippleControl = arg1.rippleControl;
    return value;
  }
  get ["stabilizationTime"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['stabilizationTime'](arg) {
    this.raw.setUint8(this.baseOffset, arg);
    this.raw.setUint8(this.baseOffset + 1, 85 - arg);
  }
  get ["motionSync"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["motionSync"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
    this.raw.setUint8(this.baseOffset + 3, 85 - arg);
  }
  get ["closeLedTime"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["closeLedTime"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
    this.raw.setUint8(this.baseOffset + 5, 85 - arg);
  }
  get ["linearCorrection"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['linearCorrection'](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg);
    this.raw.setUint8(this.baseOffset + 7, 85 - arg);
  }
  get ["rippleControl"]() {
    return this.raw.getUint8(this.baseOffset + 8);
  }
  set ["rippleControl"](arg) {
    this.raw.setUint8(this.baseOffset + 8, arg);
    this.raw.setUint8(this.baseOffset + 9, 85 - arg);
  }
}
class MouseAfterPerformanceSetting extends Ff {
  static ['get']() {
    const value = new MouseAfterPerformanceSetting(MouseAfterPerformanceSetting.getData(), eh.GetEEPROM);
    value.eepromAddress = Nf.Address.moveCloseLights;
    value.dataValidLen = 10;
    return value;
  }
  static ["createRaw"](arg) {
    return new MouseAfterPerformanceSetting(arg, eh.SetEEPROM);
  }
  static ['create'](arg) {
    const value1 = new MouseAfterPerformanceSetting(MouseAfterPerformanceSetting.getData(), eh.SetEEPROM);
    value1.eepromAddress = Nf.Address.moveCloseLights;
    value1.dataValidLen = 10;
    value1.moveCloseLed = arg.moveCloseLed;
    value1.sensorSleepEnabled = arg.sensorSleepEnabled;
    value1.sensorSleepTime = arg.sensorSleepTime;
    value1.sensorModel = arg.sensorModel;
    value1.rfTxTime = arg.rfTxTime;
    return value1;
  }
  get ["moveCloseLed"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["moveCloseLed"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
    this.raw.setUint8(this.baseOffset + 1, 85 - arg);
  }
  get ["sensorSleepEnabled"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["sensorSleepEnabled"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
    this.raw.setUint8(this.baseOffset + 3, 85 - arg);
  }
  get ["sensorSleepTime"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['sensorSleepTime'](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
    this.raw.setUint8(this.baseOffset + 5, 85 - arg);
  }
  get ["sensorModel"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['sensorModel'](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg);
    this.raw.setUint8(this.baseOffset + 7, 85 - arg);
  }
  get ["rfTxTime"]() {
    return this.raw.getUint8(this.baseOffset + 8);
  }
  set ["rfTxTime"](arg) {
    this.raw.setUint8(this.baseOffset + 8, arg);
    this.raw.setUint8(this.baseOffset + 9, 85 - arg);
  }
}
class MouseButton extends Ff {
  static ['get'](arg1) {
    const value = new MouseButton(MouseButton.getData(), eh.GetEEPROM);
    value.eepromAddress = arg1;
    value.dataValidLen = 8;
    return value;
  }
  static ['createOne'](arg, arg1) {
    const value2 = new MouseButton(MouseButton.getData(), eh.SetEEPROM);
    value2.eepromAddress = arg;
    value2.dataValidLen = 4;
    value2.button = arg1;
    return value2;
  }
  static ["create"](arg2, arg1) {
    const value = new MouseButton(MouseButton.getData(), eh.SetEEPROM);
    value.eepromAddress = arg2;
    value.dataValidLen = 8;
    value.buttonList = arg1;
    return value;
  }
  get ["button"]() {
    return ih.fromDataView(this.raw, this.baseOffset);
  }
  set ["button"](arg2) {
    const {
      keyClass: value3,
      getKeyValue1: value1,
      getKeyValue2: value
    } = arg2;
    this.raw.setUint8(this.baseOffset, arg2.keyClass);
    this.raw.setUint8(this.baseOffset + 1, arg2.getKeyValue1);
    this.raw.setUint8(this.baseOffset + 2, arg2.getKeyValue2);
    this.raw.setUint8(this.baseOffset + 3, 85 - (value3 + value1 + value) & 255);
  }
  get ["buttonList"]() {
    const value2 = [];
    for (let value = 0; value < 2; value++) value2.push(ih.fromDataView(this.raw, this.baseOffset + 4 * value));
    return value2;
  }
  set ['buttonList'](arg) {
    for (let value3 = 0; value3 < 2; value3++) {
      const {
        keyClass: value1,
        getKeyValue1: value,
        getKeyValue2: value2
      } = arg[value3];
      this.raw.setUint8(this.baseOffset + 4 * value3, arg[value3].keyClass);
      this.raw.setUint8(this.baseOffset + 4 * value3 + 1, arg[value3].getKeyValue1);
      this.raw.setUint8(this.baseOffset + 4 * value3 + 2, arg[value3].getKeyValue2);
      this.raw.setUint8(this.baseOffset + 4 * value3 + 3, 85 - (value1 + value + value2) & 255);
    }
  }
}
class MouseShortcutAction extends Ff {
  static ["get"](arg) {
    const value1 = new MouseShortcutAction(MouseShortcutAction.getData(), eh.GetEEPROM);
    value1.eepromAddress = arg;
    value1.dataValidLen = 10;
    return value1;
  }
  static ['create'](arg) {
    const value1 = new MouseShortcutAction(MouseShortcutAction.getData(), eh.SetEEPROM);
    value1.eepromAddress = arg;
    value1.dataValidLen = 10;
    return value1;
  }
  get ["shortcutCount"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["shortcutCount"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  ['getDataView'](arg) {
    const value1 = MouseShortcutAction.SIZE - this.baseOffset - arg - 1;
    return new DataView(this.raw.buffer.slice(this.baseOffset + arg, this.baseOffset + arg + value1), 0, value1);
  }
  ['setDataView'](arg, arg1) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + arg1 + value, arg.getUint8(value));
  }
}
class MouseMacroAction extends Ff {
  static ["get"](arg1, arg2 = 10) {
    const value = new MouseMacroAction(MouseMacroAction.getData(), eh.GetEEPROM);
    value.eepromAddress = arg1;
    value.dataValidLen = arg2;
    return value;
  }
  static ["create"](arg1, arg2 = 10) {
    const value = new MouseMacroAction(MouseMacroAction.getData(), eh.SetEEPROM);
    value.eepromAddress = arg1;
    value.dataValidLen = arg2;
    return value;
  }
  get ["macroCount"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["macroCount"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  ["getDataView"](arg) {
    const value1 = MouseMacroAction.SIZE - this.baseOffset - arg - 1;
    return new DataView(this.raw.buffer.slice(this.baseOffset + arg, this.baseOffset + arg + value1), 0, value1);
  }
  ["setDataView"](arg, arg1) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + arg1 + value, arg.getUint8(value));
  }
}
let ih = class ButtonAction2 {
  constructor(arg, arg1) {
    V(this, "dataView");
    V(this, "offset");
    this.dataView = arg;
    this.offset = arg1;
  }
  get ["i18nText"]() {
    return "Unknown";
  }
  get ["getKeyValue1"]() {
    return this.dataView.getUint8(this.offset + 1);
  }
  get ["getKeyValue2"]() {
    return this.dataView.getUint8(this.offset + 2);
  }
  get ["keyClass"]() {
    return this.dataView.getUint8(this.offset);
  }
  get ['data']() {
    return new DataView(this.dataView.buffer.slice(this.offset, this.offset + 4));
  }
  static ['createDataView'](arg2, arg, arg1) {
    const value3 = new DataView(new ArrayBuffer(4));
    value3.setUint8(0, arg2);
    value3.setUint8(1, arg);
    value3.setUint8(2, arg1);
    value3.setUint8(3, 85 - (arg2 + arg + arg1) & 255);
    return value3;
  }
  static ['fromDataView'](arg, arg1) {
    switch (arg.getUint8(arg1)) {
      case Nf.ButtonKeyClass.Close:
        return new uh(arg, arg1);
      case Nf.ButtonKeyClass.Mouse:
        return new lh(arg, arg1);
      case Nf.ButtonKeyClass.Dpi:
        return new hh(arg, arg1);
      case Nf.ButtonKeyClass.RollSideToSide:
        return new gh(arg, arg1);
      case Nf.ButtonKeyClass.FirepowerKey:
        return new ph(arg, arg1);
      case Nf.ButtonKeyClass.ShortcutKey:
        return new wh(arg, arg1);
      case Nf.ButtonKeyClass.Macro:
        return new _h(arg, arg1);
      case Nf.ButtonKeyClass.ReportRate:
        return new kh(arg, arg1);
      case Nf.ButtonKeyClass.ConfigFile:
        return new Sh(arg, arg1);
      case Nf.ButtonKeyClass.Wheel:
        return new Dh(arg, arg1);
      default:
        return new uh(arg, arg1);
    }
  }
  ["toString"]() {
    return Array.from([this.keyClass, this.getKeyValue1, this.getKeyValue2]).map(arg => arg.toString().padStart(2, '0')).join('');
  }
};
const oh = class _ButtonDisable extends ih {
  get ["i18nText"]() {
    return 'key.disable';
  }
  static ["create"]() {
    return new _ButtonDisable(super.createDataView(_ButtonDisable.TYPE, 0, 0), 0);
  }
};
V(oh, 'TYPE', Nf.ButtonKeyClass.Close);
let uh = oh;
const ch = class _ButtonMouse extends ih {
  get ["i18nText"]() {
    switch (this.getKeyValue1) {
      case Nf.ButtonKeyValue1Mouse.Disable:
        return "key.disable";
      case Nf.ButtonKeyValue1Mouse.Left:
        return "key.leftButton";
      case Nf.ButtonKeyValue1Mouse.Right:
        return "key.rightButton";
      case Nf.ButtonKeyValue1Mouse.Middle:
        return "key.middleButton";
      case Nf.ButtonKeyValue1Mouse.Side1:
        return "key.backward";
      case Nf.ButtonKeyValue1Mouse.Side2:
        return "key.forward";
      default:
        return "Unknown";
    }
  }
  get ['getKeyValue1']() {
    return super.getKeyValue1;
  }
  static ["create"](arg) {
    return new _ButtonMouse(super.createDataView(_ButtonMouse.TYPE, arg, 0), 0);
  }
};
V(ch, "TYPE", Nf.ButtonKeyClass.Mouse);
let lh = ch;
const fh = class _ButtonDpi extends ih {
  get ['i18nText']() {
    switch (this.getKeyValue1) {
      case Nf.ButtonKeyValue1Dpi.Zero:
        return 'key.DPICycle';
      case Nf.ButtonKeyValue1Dpi.Plus:
        return "key.DPIPlus";
      case Nf.ButtonKeyValue1Dpi.Minus:
        return "key.DPIMinus";
      default:
        return "Unknown";
    }
  }
  get ['getKeyValue1']() {
    return super.getKeyValue1;
  }
  static ["create"](arg) {
    return new _ButtonDpi(super.createDataView(_ButtonDpi.TYPE, arg, 0), 0);
  }
};
V(fh, "TYPE", Nf.ButtonKeyClass.Dpi);
let hh = fh;
const dh = class _ButtonRollSideToSide extends ih {
  get ["i18nText"]() {
    switch (this.getKeyValue1) {
      case Nf.ButtonKeyValue1RollSideToSide.Left:
        return 'key.rollLeft';
      case Nf.ButtonKeyValue1RollSideToSide.Right:
        return "key.rollRight";
      default:
        return "Unknown";
    }
  }
  get ["getKeyValue1"]() {
    return super.getKeyValue1;
  }
  static ['create'](arg) {
    return new _ButtonRollSideToSide(super.createDataView(_ButtonRollSideToSide.TYPE, arg, 0), 0);
  }
};
V(dh, 'TYPE', Nf.ButtonKeyClass.RollSideToSide);
let gh = dh;
const mh = class _ButtonFirepowerKey extends ih {
  get ["i18nText"]() {
    return "key.flameKey";
  }
  static ["create"](arg1, arg) {
    return new _ButtonFirepowerKey(super.createDataView(_ButtonFirepowerKey.TYPE, arg1, arg), 0);
  }
  get ["interval"]() {
    return super.getKeyValue1;
  }
  get ["num"]() {
    return super.getKeyValue2;
  }
};
V(mh, "TYPE", Nf.ButtonKeyClass.FirepowerKey);
let ph = mh;
const yh = class _ButtonShortcutKey extends ih {
  get ["i18nText"]() {
    return "key.combinationKey";
  }
  static ['create']() {
    return new _ButtonShortcutKey(super.createDataView(_ButtonShortcutKey.TYPE, 0, 0), 0);
  }
};
V(yh, "TYPE", Nf.ButtonKeyClass.ShortcutKey);
let wh = yh;
const bh = class _ButtonMacro extends ih {
  get ["i18nText"]() {
    return 'key.macroKey';
  }
  get ["macroType"]() {
    return super.getKeyValue2;
  }
  get ["macroId"]() {
    return super.getKeyValue1;
  }
  static ["create"](arg1, arg) {
    return new _ButtonMacro(super.createDataView(_ButtonMacro.TYPE, arg1, arg), 0);
  }
};
V(bh, 'TYPE', Nf.ButtonKeyClass.Macro);
let _h = bh;
const vh = class _ButtonReportRate extends ih {
  get ['i18nText']() {
    return "key.reportRate";
  }
  get ['getKeyValue1']() {
    return super.getKeyValue1;
  }
  static ["create"]() {
    return new _ButtonReportRate(super.createDataView(_ButtonReportRate.TYPE, 0, 0), 0);
  }
};
V(vh, "TYPE", Nf.ButtonKeyClass.ReportRate);
let kh = vh;
const Ch = class _ButtonConfigFile extends ih {
  get ["i18nText"]() {
    return "key.toggleConfigFile";
  }
  get ["getKeyValue1"]() {
    return super.getKeyValue1;
  }
  static ["create"](arg) {
    return new _ButtonConfigFile(super.createDataView(_ButtonConfigFile.TYPE, arg, 0), 0);
  }
};
V(Ch, "TYPE", Nf.ButtonKeyClass.ConfigFile);
let Sh = Ch;
const Uh = class _ButtonWheel extends ih {
  get ["i18nText"]() {
    switch (this.getKeyValue1) {
      case Nf.ButtonKeyValue1Wheel.Top:
        return "key.wheelUp";
      case Nf.ButtonKeyValue1Wheel.Bottom:
        return "key.wheelDown";
      default:
        return "Unknown";
    }
  }
  get ["getKeyValue1"]() {
    return super.getKeyValue1;
  }
  static ['create'](arg) {
    return new _ButtonWheel(super.createDataView(_ButtonWheel.TYPE, arg, 0), 0);
  }
};
V(Uh, "TYPE", Nf.ButtonKeyClass.Wheel);
let Dh = Uh;
const Oh = class _ShortcutAction {
  constructor(arg1, arg) {
    V(this, "raw");
    V(this, 'offset');
    this.raw = arg1;
    this.offset = arg;
  }
  static ["create"](arg1) {
    const value = new _ShortcutAction(new DataView(new ArrayBuffer(_ShortcutAction.size)), 0);
    value.keyStatus = arg1.keyState;
    value.keyType = arg1.keyType;
    value.value1 = arg1.value1;
    value.value2 = arg1.value2;
    return value;
  }
  static ['fromDataView'](arg, arg1) {
    return new _ShortcutAction(arg, arg1);
  }
  get ["dataView"]() {
    const value = new DataView(new ArrayBuffer(_ShortcutAction.size), 0);
    value.setUint8(0, this.raw.getUint8(this.offset));
    value.setUint8(1, this.raw.getUint8(this.offset + 1));
    value.setUint8(2, this.raw.getUint8(this.offset + 2));
    return value;
  }
  get ['keyStatus']() {
    if (128 & this.raw.getUint8(this.offset)) return Nf.KeyState.Down;
    return Nf.KeyState.Up;
  }
  set ["keyStatus"](arg) {
    let value1 = this.raw.getUint8(this.offset);
    value1 = arg === Nf.KeyState.Down ? -65 & (128 | value1) : -129 & (64 | value1);
    this.raw.setUint8(this.offset, value1);
  }
  get ['keyType']() {
    const value = this.raw.getUint8(this.offset);
    return [Number(!!(4 & value)), Number(!!(2 & value)), Number(!!(1 & value))].join('');
  }
  set ["keyType"](arg1) {
    let value = this.raw.getUint8(this.offset);
    arg1 == Nf.KeyType.Modify && (value |= 0);
    arg1 == Nf.KeyType.GeneralKey && (value |= 1);
    arg1 == Nf.KeyType.MediaKey && (value |= 2);
    arg1 == Nf.KeyType.PowerKey && (value |= 3);
    arg1 == Nf.KeyType.MouseKey && (value |= 4);
    this.raw.setUint8(this.offset, value);
  }
  get ["value1"]() {
    return this.raw.getUint8(this.offset + 1);
  }
  set ["value1"](arg) {
    this.raw.setUint8(this.offset + 1, arg);
  }
  get ["value2"]() {
    return this.raw.getUint8(this.offset + 2);
  }
  set ["value2"](arg) {
    this.raw.setUint8(this.offset + 2, arg);
  }
  ["toString"]() {
    return Array.from([this.keyType, this.keyStatus, this.value1, this.value2]).map(arg => arg.toString().padStart(2, '0')).join('');
  }
};
V(Oh, "size", 3);
let xh = Oh,
  Kh = (T = class {
    constructor(arg, arg1) {
      V(this, "raw");
      V(this, "offset");
      this.raw = arg;
      this.offset = arg1;
    }
    static ['create'](arg) {
      const value1 = new T(new DataView(new ArrayBuffer(T.size)), 0);
      value1.keyStatus = arg.keyState;
      value1.keyType = arg.keyType;
      value1.value1 = arg.value1;
      value1.value2 = arg.value2;
      value1.delay = arg.delay;
      return value1;
    }
    static ["fromDataView"](arg, arg1) {
      return new T(arg, arg1);
    }
    get ["dataView"]() {
      const value = new DataView(new ArrayBuffer(T.size), 0);
      value.setUint8(0, this.raw.getUint8(this.offset));
      value.setUint8(1, this.raw.getUint8(this.offset + 1));
      value.setUint8(2, this.raw.getUint8(this.offset + 2));
      value.setUint16(3, this.raw.getUint16(this.offset + 3));
      return value;
    }
    get ['keyStatus']() {
      if (128 & this.raw.getUint8(this.offset)) return Nf.KeyState.Down;
      return Nf.KeyState.Up;
    }
    set ["keyStatus"](arg1) {
      let value = this.raw.getUint8(this.offset);
      value = arg1 === Nf.KeyState.Down ? -65 & (128 | value) : -129 & (64 | value);
      this.raw.setUint8(this.offset, value);
    }
    get ["keyType"]() {
      const value = this.raw.getUint8(this.offset);
      return [Number(!!(4 & value)), Number(!!(2 & value)), Number(!!(1 & value))].join('');
    }
    set ["keyType"](arg) {
      let value1 = this.raw.getUint8(this.offset);
      arg == Nf.KeyType.Modify && (value1 |= 0);
      arg == Nf.KeyType.GeneralKey && (value1 |= 1);
      arg == Nf.KeyType.MediaKey && (value1 |= 2);
      arg == Nf.KeyType.PowerKey && (value1 |= 3);
      arg == Nf.KeyType.MouseKey && (value1 |= 4);
      arg == Nf.KeyType.MoveXY && (value1 |= 5);
      arg == Nf.KeyType.Scroll && (value1 |= 6);
      this.raw.setUint8(this.offset, value1);
    }
    get ["value1"]() {
      return this.raw.getUint8(this.offset + 1);
    }
    set ["value1"](arg) {
      this.raw.setUint8(this.offset + 1, arg);
    }
    get ['value2']() {
      return this.raw.getUint8(this.offset + 2);
    }
    set ["value2"](arg) {
      this.raw.setUint8(this.offset + 2, arg);
    }
    get ['delay']() {
      return this.raw.getUint16(this.offset + 3);
    }
    set ["delay"](arg) {
      this.raw.setUint16(this.offset + 3, arg);
    }
    ["toString"]() {
      return Array.from([this.keyType, this.keyStatus, this.value1, this.value2, this.delay]).map(arg => arg.toString().padStart(2, '0')).join('');
    }
  }, V(T, 'size', 5), T);
const Ah = class _UpgradeFile {
  constructor(arg, arg1) {
    V(this, 'SIZE', 0);
    V(this, "raw");
    this.SIZE = arg1;
    this.raw = arg;
  }
  get ["headCRC"]() {
    return this.raw.getUint32(0, true);
  }
  get ["headLength"]() {
    return this.raw.getUint32(4, true);
  }
  get ['fwLength']() {
    return this.raw.getUint32(8, true);
  }
  get ['nextFileAddress']() {
    return this.raw.getUint32(12, true);
  }
  get ["version"]() {
    return this.raw.getUint32(16, true).toString(16);
  }
  get ["deviceType"]() {
    return this.raw.getUint8(20);
  }
  get ["cid"]() {
    return this.raw.getUint8(21);
  }
  get ["mid"]() {
    return this.raw.getUint8(22);
  }
  get ["fileId"]() {
    return this.raw.buffer.slice(23, 23 + _UpgradeFile.MaxCmdLength);
  }
  get ['icName']() {
    const value1 = 23 + _UpgradeFile.MaxCmdLength,
      value = this.raw.buffer.slice(value1, value1 + _UpgradeFile.MaxCmdLength);
    return this.arrayBufferToCharString(value);
  }
  ["arrayBufferToCharString"](arg2) {
    return Array.from(new Uint8Array(arg2)).map(arg => String.fromCharCode(arg)).filter(arg => '\x00' != arg).join('');
  }
  ["pointPathToObject"](arg3) {
    const value2 = this.arrayBufferToCharString(arg3).split('&'),
      value13 = {
        vendorId: "vid_(.*?)$",
        productId: "pid_(.*?)$"
      };
    return Object.assign({}, ...Object.keys(value13).map(arg2 => {
      const value12 = value13[arg2];
      return {
        [arg2]: parseInt(value2.map(arg => {
          var value1;
          if (null == (value1 = arg.match(value12))) return void 0;
          return value1[1];
        }).find(Boolean), 16)
      };
    }).flat());
  }
  get ['bootInputEndPoint']() {
    const value1 = 23 + 2 * _UpgradeFile.MaxCmdLength,
      value = this.raw.buffer.slice(value1, value1 + _UpgradeFile.MaxCmdLength);
    return {
      usagePage: 65282,
      usage: 2,
      ...this.pointPathToObject(value)
    };
  }
  get ["bootOutputEndPoint"]() {
    const value = 23 + 3 * _UpgradeFile.MaxCmdLength,
      value1 = this.raw.buffer.slice(value, value + _UpgradeFile.MaxCmdLength);
    return {
      usagePage: 65282,
      usage: 2,
      ...this.pointPathToObject(value1)
    };
  }
  get ["normalInputEndPoint"]() {
    const value1 = 23 + 4 * _UpgradeFile.MaxCmdLength,
      value = this.raw.buffer.slice(value1, value1 + _UpgradeFile.MaxCmdLength);
    return {
      usagePage: 65282,
      usage: 2,
      ...this.pointPathToObject(value)
    };
  }
  get ["normalOutputEndPoint"]() {
    const value = 23 + 5 * _UpgradeFile.MaxCmdLength,
      value1 = this.raw.buffer.slice(value, value + _UpgradeFile.MaxCmdLength);
    return {
      usagePage: 65282,
      usage: 2,
      ...this.pointPathToObject(value1)
    };
  }
  get ["resetToUpdateModeCmd"]() {
    const value = 23 + 6 * _UpgradeFile.MaxCmdLength;
    return new DataView(this.raw.buffer.slice(value, value + _UpgradeFile.MaxCmdLength));
  }
  get ['prepareDownLoadCmd']() {
    const value = 23 + 7 * _UpgradeFile.MaxCmdLength;
    return new DataView(this.raw.buffer.slice(value, value + _UpgradeFile.MaxCmdLength));
  }
  get ["dataDownLoadCmd"]() {
    const value = 23 + 8 * _UpgradeFile.MaxCmdLength;
    return new DataView(this.raw.buffer.slice(value, value + _UpgradeFile.MaxCmdLength));
  }
  get ["sensorName"]() {
    const value = 23 + 9 * _UpgradeFile.MaxCmdLength,
      value1 = this.raw.buffer.slice(value, value + _UpgradeFile.MaxCmdLength);
    return this.arrayBufferToCharString(value1);
  }
  get ["productName"]() {
    const value = 23 + 10 * _UpgradeFile.MaxCmdLength,
      value1 = this.raw.buffer.slice(value, value + _UpgradeFile.MaxCmdLength);
    return this.arrayBufferToCharString(value1);
  }
  ['getDataView'](arg1, arg) {
    return new DataView(this.raw.buffer.slice(arg1, arg1 + arg));
  }
};
V(Ah, "baseOffset", 0);
V(Ah, "MaxCmdLength", 64);
let Ih = Ah;
const Ph = class _UpgradeDataReporting extends Ff {
  get ["baseOffset"]() {
    return _UpgradeDataReporting.baseOffset;
  }
  get ["task"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  get ["status"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  static ["fromDataView"](arg) {
    return new _UpgradeDataReporting(arg, eh.ReportMouseUpgradeStatus);
  }
};
V(Ph, "SIZE", 3);
V(Ph, "baseOffset", 2);
V(Ph, "dataReporting", eh.ReportMouseUpgradeStatus);
let Mh = Ph;
const Th = class _UpgradeDataErrorReporting extends Ff {
  get ["baseOffset"]() {
    return _UpgradeDataErrorReporting.baseOffset;
  }
  get ["message"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  static ['fromDataView'](arg) {
    return new _UpgradeDataErrorReporting(arg, eh.ReportMouseUpgradeErrorStatus);
  }
};
V(Th, "SIZE", 3);
V(Th, "baseOffset", 2);
V(Th, "dataReporting", eh.ReportMouseUpgradeErrorStatus);
let Rh = Th,
  Eh = class HidDevice4 extends WebHidGeneral {
    constructor() {
      super(...arguments);
      V(this, "mutex", new Mutex());
      V(this, 'pendingTransfers', []);
    }
    ["inputReportListener"](arg) {
      super.inputReportListener(arg);
      this.handleInputReport(arg.data);
    }
    ['onDeviceToHostReportReceived'](arg) {}
    ["handleInputReport"](arg) {
      this.mutex.runExclusive(() => {
        const value1 = arg.getUint8(0);
        if (0 == value1) return void this.onDeviceToHostReportReceived(arg);
        let value2 = false;
        for (const value of this.pendingTransfers) if (value.requestCode === value1) {
          value.promiseResolve(arg);
          this.pendingTransfers.splice(this.pendingTransfers.indexOf(value), 1);
          value2 = true;
          break;
        }
        value1 === ah.dataReporting && (Pr("data-reporting", ah.fromDataView(arg)), value2 = true);
        value1 === Mh.dataReporting && (Pr("compx-upgrade-reporting", Mh.fromDataView(arg)), value2 = true);
        value1 === Rh.dataReporting && (Pr("compx-upgrade-reporting", Rh.fromDataView(arg)), value2 = true);
        value2 || new Uint8Array(arg.buffer).toString();
      });
    }
    async ["transferForResultAsync"](arg3, arg12 = false, arg7 = 8) {
      var value5, value8;
      const value6 = new DataView(arg3.buffer).getUint8(0);
      let value4;
      const value2 = new Promise(arg => {
          value4 = arg;
        }),
        value22 = {
          requestCode: value6,
          data: arg3,
          promiseResolve: value4
        };
      await new Promise(arg1 => {
        const value = setInterval(() => {
          0 === this.pendingTransfers.length && (arg1(), clearInterval(value));
        }, 1);
      });
      this.pendingTransfers.push(value22);
      if (arg12) await (null == (value8 = this.device) ? void 0 : value8.sendFeatureReport(arg7, arg3));else await (null == (value5 = this.device) ? void 0 : value5.sendReport(arg7, arg3));
      return value2;
    }
  };
class Compx extends Eh {
  async ['downLoadData']() {
    return this.transferForResult(DownLoadData.get([Math.floor(255 * Math.random()), Math.floor(255 * Math.random()), Math.floor(255 * Math.random()), Math.floor(255 * Math.random())]));
  }
  async ["downLoadDriverStatus"](arg) {
    return this.transferForResult(DownLoadDriverStatus.get(arg));
  }
  async ["getWirelessMouseOnline"]() {
    return this.transferForResult(WirelessMouseOnline.get());
  }
  async ["getBatteryLevel"]() {
    return this.transferForResult(nh.get());
  }
  async ["startPairing"](arg, arg1) {
    return this.transferForResult(StartPairing.get(arg, arg1));
  }
  async ["exitPairing"]() {
    return this.transferForResult(ExitPairing.get());
  }
  async ["getPairingStatus"]() {
    return this.transferForResult(GetPairingStatus.get());
  }
  async ['restoreFactory']() {
    return this.transferForResult(RestoreFactory.get());
  }
  async ["getCurrentConfigFile"]() {
    return this.transferForResult(CurrentConfigFile.get());
  }
  async ["setCurrentConfigFile"](arg) {
    return this.transferForResult(CurrentConfigFile.create(arg));
  }
  async ["getMouseCIDMID"]() {
    return this.transferForResult(MouseCIDMID.get());
  }
  async ['getMouseVersion']() {
    return this.transferForResult(MouseVersion.get());
  }
  async ["getRGBModeBy4K"]() {
    return this.transferForResult(RGBModeBy4K.get());
  }
  async ['setRGBModeBy4K'](arg) {
    return this.transferForResult(RGBModeBy4K.create(arg));
  }
  async ["getFarDistanceMode"]() {
    return this.transferForResult(FarDistance.get());
  }
  async ["setFarDistanceMode"](arg) {
    return this.transferForResult(FarDistance.create(arg));
  }
  async ["getDongleLightMode"]() {
    return this.transferForResult(DongleLight.get());
  }
  async ["setDongleLightMode"](arg) {
    return this.transferForResult(DongleLight.create(arg));
  }
  async ["getMouseReportRateDpi"]() {
    return this.transferForResult(MouseReportRateDpi.get());
  }
  async ["setMouseReportRateDpi"](arg) {
    return this.transferForResult(MouseReportRateDpi.create(arg));
  }
  async ['getMouseDpiConfig']() {
    const value3 = [Nf.Address.dpi1, Nf.Address.dpi3, Nf.Address.dpi5, Nf.Address.dpi7],
      value1 = [];
    for (const value2 of value3) {
      const value = await this.transferForResult(MouseDpiConfig.get(value2));
      value1.push(...value.dpiList);
    }
    return value1;
  }
  async ["setMouseDpiConfigOne"](arg, arg2) {
    const value4 = [Nf.Address.dpi1, Nf.Address.dpi3, Nf.Address.dpi5, Nf.Address.dpi7],
      value1 = rt.chunk(arg, 2),
      value3 = Math.floor(arg2 / 2);
    return await this.transferForResult(MouseDpiConfig.create(value4[value3], value1[value3]));
  }
  async ["setMouseDpiConfig"](arg) {
    const value4 = [Nf.Address.dpi1, Nf.Address.dpi3, Nf.Address.dpi5, Nf.Address.dpi7],
      value22 = rt.chunk(arg, 2);
    let value1 = 0,
      value3 = 0;
    for (const value2 of value4) {
      const value = await this.transferForResult(MouseDpiConfig.create(value2, value22[value1]));
      value1++;
      value3 += value.commandStatus;
    }
    return value3;
  }
  async ["getMouseDpiColorConfig"]() {
    const value1 = [Nf.Address.dpi1Color, Nf.Address.dpi3Color, Nf.Address.dpi5Color, Nf.Address.dpi7Color],
      value3 = [];
    for (const value2 of value1) {
      const value = await this.transferForResult(MouseDpiColorConfig.get(value2));
      value3.push(...value.dpiColorList);
    }
    return value3;
  }
  async ["setMouseDpiColorConfigOne"](arg4, arg) {
    const value3 = [Nf.Address.dpi1Color, Nf.Address.dpi3Color, Nf.Address.dpi5Color, Nf.Address.dpi7Color],
      value1 = Math.floor(arg / 2),
      value2 = rt.chunk(arg4, 2);
    return await this.transferForResult(MouseDpiColorConfig.create(value3[value1], value2[value1]));
  }
  async ["setMouseDpiColorConfig"](arg) {
    const value1 = [Nf.Address.dpi1Color, Nf.Address.dpi3Color, Nf.Address.dpi5Color, Nf.Address.dpi7Color],
      value2 = rt.chunk(arg, 2);
    let value4 = 0,
      value3 = 0;
    for (const value of value1) {
      value3 += (await this.transferForResult(MouseDpiColorConfig.create(value, value2[value4]))).commandStatus;
      value4++;
    }
    return value3;
  }
  async ['getMouseDpiRGBEffects']() {
    return this.transferForResult(MouseDpiRGBEffects.get());
  }
  async ["setMouseDpiRGBEffects"](arg) {
    return await this.transferForResult(MouseDpiRGBEffects.create(arg));
  }
  async ['getMouseBeforePerformanceSetting']() {
    return await this.transferForResult(MouseBeforePerformanceSetting.get());
  }
  async ["setMouseBeforePerformanceSetting"](arg) {
    return await this.transferForResult(MouseBeforePerformanceSetting.create(arg));
  }
  async ['getMouseAfterPerformanceSetting']() {
    return await this.transferForResult(MouseAfterPerformanceSetting.get());
  }
  async ["setMouseAfterPerformanceSetting"](arg) {
    return await this.transferForResult(MouseAfterPerformanceSetting.create(arg));
  }
  async ["getMouseButton"]() {
    const value1 = [Nf.Address.key0, Nf.Address.key2, Nf.Address.key4],
      value3 = [];
    for (const value2 of value1) {
      const value = await this.transferForResult(MouseButton.get(value2));
      value3.push(...value.buttonList);
    }
    return value3;
  }
  async ["setMouseButtonOne"](arg2, arg) {
    const {
      commandStatus: value1
    } = await this.transferForResult(MouseButton.createOne(arg2, arg));
    return value1;
  }
  async ["setMouseButton"](arg2) {
    const value1 = [Nf.Address.key0, Nf.Address.key2, Nf.Address.key4];
    let value3 = 0;
    for (let value2 = 0; value2 < value1.length; value2++) {
      const value = arg2.splice(0, 2);
      value3 += (await this.transferForResult(MouseButton.create(value1[value2], value))).commandStatus;
    }
    return value3;
  }
  async ["getShortcutAction"](arg5) {
    const value32 = [Nf.Address.keyShortcuts0, Nf.Address.keyShortcuts1, Nf.Address.keyShortcuts2, Nf.Address.keyShortcuts3, Nf.Address.keyShortcuts4, Nf.Address.keyShortcuts5][arg5];
    let value1 = 0;
    const value4 = [];
    for (let value2 = 0; value2 < 2; value2++) {
      const value = await this.transferForResult(MouseShortcutAction.get(value32 + 10 * value2));
      0 == value2 && (value1 = value.shortcutCount);
      value4.push(...Array.from(new Uint8Array(value.getDataView(Number(0 == value2)).buffer)));
    }
    if (0 == value1 || value1 > 6) return [];
    const value22 = 3 * value1,
      value3 = new DataView(new Uint8Array(value4.slice(0, value22)).buffer);
    return Array.from({
      length: value1
    }, (arg1, arg) => xh.fromDataView(value3, 3 * arg));
  }
  async ["setShortcutAction"](arg3, arg6) {
    const value22 = [Nf.Address.keyShortcuts0, Nf.Address.keyShortcuts1, Nf.Address.keyShortcuts2, Nf.Address.keyShortcuts3, Nf.Address.keyShortcuts4, Nf.Address.keyShortcuts5][arg3],
      value3 = [];
    for (const value of arg6) value3.push(...new Uint8Array(value.dataView.buffer));
    const value7 = 85 - rt.sum([arg6.length, ...value3]) & 255;
    value3.push(value7);
    const value5 = new DataView(new Uint8Array(value3).buffer),
      value12 = value5.byteLength <= 9 ? 1 : 2;
    let value4 = 0;
    for (let value2 = 0; value2 < value12; value2++) {
      const value = MouseShortcutAction.create(value22 + 10 * value2);
      0 == value2 && (value.shortcutCount = arg6.length);
      const value1 = value5.buffer.slice(9 * value2, (value2 + 1) * (0 == value2 ? 9 : 10));
      value.setDataView(new DataView(value1), Number(0 == value2));
      value4 += (await this.transferForResult(value)).commandStatus;
    }
    return value4;
  }
  async ["getMouseSilentHeight"]() {
    return this.transferForResult(MouseSilentHeight.get());
  }
  async ['setMouseSilentHeight'](arg) {
    return this.transferForResult(MouseSilentHeight.create(arg));
  }
  async ['getMouseMacroList'](arg) {
    const value4 = [Nf.Address.macro0, Nf.Address.macro1, Nf.Address.macro2, Nf.Address.macro3, Nf.Address.macro4, Nf.Address.macro5, Nf.Address.macro6][arg] + 31,
      value32 = await this.transferForResult(MouseMacroAction.get(value4, 1));
    if (value32.macroCount <= 0 || value32.macroCount > 70) return [];
    const value22 = 5 * value32.macroCount / 10,
      value12 = [];
    for (let value3 = 0; value3 < value22; value3++) {
      const value1 = value4 + 1 + 10 * value3,
        value2 = await this.transferForResult(MouseMacroAction.get(value1));
      for (let value = 0; value < 2; value++) value12.push(Kh.fromDataView(value2.getDataView(0), 5 * value));
    }
    return value12;
  }
  async ["setMouseMacroList"](arg8, arg2) {
    if (arg2.length > 70) return 1;
    const value3 = [Nf.Address.macro0, Nf.Address.macro1, Nf.Address.macro2, Nf.Address.macro3, Nf.Address.macro4, Nf.Address.macro5, Nf.Address.macro6, Nf.Address.macro7, Nf.Address.macro8, Nf.Address.macro9, Nf.Address.macro10, Nf.Address.macro11, Nf.Address.macro12, Nf.Address.macro13, Nf.Address.macro14, Nf.Address.macro15][arg8],
      value7 = [8, ...Array.from({
        length: 8
      }, () => 2), ...Array.from({
        length: 22
      }, () => 255)],
      value6 = [arg2.length];
    for (const value of arg2) value6.push(...new Uint8Array(value.dataView.buffer));
    const value5 = 85 - rt.sum(value6) & 255;
    value6.push(value5);
    let value12 = 0;
    const value32 = new DataView(new Uint8Array([...value7, ...value6]).buffer),
      value4 = value32.byteLength / 10;
    for (let value2 = 0; value2 < value4; value2++) {
      const value1 = MouseMacroAction.create(value3 + 10 * value2),
        value = value32.buffer.slice(10 * value2, 10 * (value2 + 1));
      value1.setDataView(new DataView(value), 0);
      value12 += (await this.transferForResult(value1)).commandStatus;
    }
    return value12;
  }
  async ["transferForResult"](arg) {
    arg.raw = await this.transferForResultAsync(arg.toUint8Array());
    return arg;
  }
}
const Bh = class _CompxMacro extends MacroStore {
  constructor() {
    super(_CompxMacro.saveName, _CompxMacro.maxMacroId);
  }
};
V(Bh, 'saveName', "compx-mouse-macro");
V(Bh, "maxMacroId", 12);
const Lh = [...[{
    controller: Compx,
    macro: Bh,
    digital: fu,
    meta: {
      deviceName: "Mouse",
      component: "compx-mouse"
    },
    filters: [{
      vendorId: 14139,
      productId: 4422,
      usagePage: 65284,
      usage: 2,
      receiver: true,
      custom: {
        name: 'MAD\x20Mouse\x20Dongle',
        firmwareMark: 'mad-dongle',
        noLamp: true
      }
    }, {
      vendorId: 14139,
      productId: 4324,
      usagePage: 65284,
      usage: 2,
      receiver: true,
      custom: {
        name: "MAD Mouse Dongle",
        firmwareMark: "mad-dongle"
      }
    }, {
      vendorId: 14139,
      productId: 4297,
      usagePage: 65284,
      usage: 2,
      receiver: true,
      custom: {
        name: "MAD Mouse Dongle",
        firmwareMark: "mad-dongle"
      }
    }, {
      vendorId: 14139,
      productId: 4160,
      usagePage: 65284,
      usage: 2,
      receiver: true,
      custom: {
        name: "MAD Mouse Dongle",
        firmwareMark: "mad-dongle",
        noLamp: true
      }
    }, {
      vendorId: 14139,
      productId: 4173,
      usagePage: 65284,
      usage: 2,
      receiver: true,
      custom: {
        name: "MAD Mouse Dongle",
        firmwareMark: "mad-dongle"
      }
    }, {
      vendorId: 14139,
      productId: 4379,
      usagePage: 65284,
      usage: 2,
      receiver: true,
      custom: {
        name: "Wireless mouse -8K NANO dongle",
        noLamp: true
      }
    }, {
      vendorId: 14139,
      productId: 4229,
      usagePage: 65284,
      usage: 2,
      receiver: true,
      custom: {
        name: 'Wireless\x20mouse\x20-1K\x20dongle',
        noLamp: true
      }
    }, {
      vendorId: 14139,
      productId: 4446,
      usagePage: 65284,
      usage: 2,
      receiver: true,
      custom: {
        name: "Wireless mouse 8k dongle"
      }
    }]
  }], ...[{
    controller: Compx,
    digital: du,
    macro: Bh,
    meta: {
      deviceName: "Mouse",
      component: 'compx-mouse'
    },
    filters: [{
      vendorId: 14139,
      productId: 4325,
      usagePage: 65284,
      usage: 2,
      custom: {
        name: "MAD S Nearlink",
        ic: "PAW3311",
        cover: "mad-s",
        themeConfigName: "mad-s-10e5",
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: "Skin.Black",
          value: "black"
        }],
        mouseCidMid: "2,69",
        latest: true,
        athletics: true,
        firmwareMark: 'mad-s',
        receiver8k: "/firmware/14139/4160/mad-8k-dongle"
      }
    }]
  }], ...[{
    controller: Compx,
    digital: mu,
    macro: Bh,
    meta: {
      deviceName: "Mouse",
      component: "compx-mouse"
    },
    filters: [{
      vendorId: 14139,
      productId: 4323,
      usagePage: 65284,
      usage: 2,
      custom: {
        name: "MAD S",
        ic: "PAW3395SE",
        cover: "mad-s",
        themeConfigName: 'mad-s-10e3',
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: "Skin.Black",
          value: "black"
        }, {
          label: 'Skin.Red',
          value: "red"
        }],
        mouseCidMid: '2,68',
        latest: true,
        firmwareMark: "mad-s",
        receiver8k: "/firmware/14139/4160/mad-8k-dongle"
      }
    }]
  }], ...[{
    controller: Compx,
    digital: cu,
    macro: Bh,
    meta: {
      deviceName: "Mouse",
      component: "compx-mouse"
    },
    filters: [{
      vendorId: 14139,
      productId: 4498,
      usagePage: 65284,
      usage: 2,
      custom: {
        name: "MAD S PRO",
        ic: "PAW3395",
        cover: "mad-s",
        themeConfigName: "mad-s-1192",
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: "Skin.Black",
          value: "black"
        }, {
          label: 'Skin.Red',
          value: "red"
        }],
        mouseCidMid: "2,101",
        latest: true,
        firmwareMark: "mad-s"
      }
    }, {
      vendorId: 14139,
      productId: 4421,
      usagePage: 65284,
      usage: 2,
      custom: {
        name: "MAD S PRO MAX",
        ic: "PAW3395",
        cover: "mad-s",
        themeConfigName: "mad-s-1145",
        theme: [{
          label: 'Skin.White',
          value: "white"
        }, {
          label: "Skin.Black",
          value: "black"
        }, {
          label: "Skin.Red",
          value: "red"
        }],
        mouseCidMid: "2,91",
        latest: true,
        firmwareMark: "mad-s",
        receiver8k: "/firmware/14139/4160/mad-8k-dongle"
      }
    }, {
      vendorId: 14139,
      productId: 4166,
      usagePage: 65284,
      usage: 2,
      custom: {
        name: 'MAD\x20G\x20MAX',
        ic: 'PAW3395',
        cover: "mad-g",
        themeConfigName: 'mad-g-1046',
        theme: [{
          label: 'Skin.White',
          value: "white"
        }, {
          label: 'Skin.Black',
          value: "black"
        }, {
          label: "Skin.Red",
          value: 'red'
        }],
        mouseCidMid: "2,51",
        latest: true,
        athletics: true,
        firmwareMark: 'mad-g',
        receiver8k: "/firmware/14139/4160/mad-8k-dongle"
      }
    }]
  }]],
  Vh = [{
    controller: Compx,
    digital: cu,
    meta: {
      deviceName: 'RecoveryMode',
      component: 'recovery-mode'
    },
    filters: [{
      vendorId: 13652,
      productId: 62470,
      usagePage: 65282,
      usage: 2,
      custom: {
        name: 'Upgrade\x20Mouse',
        cover: "/devices/mad-g/black.webp"
      }
    }]
  }],
  Fh = [...Lh, ...Vh],
  Nh = Lh.map(arg => arg.filters).flat().map(arg => null == arg ? void 0 : arg.boot).filter(Boolean),
  Gh = Lh.map(arg => arg.filters).flat().filter(arg => !(null == arg ? void 0 : arg.receiver)).map(arg => null == arg ? void 0 : arg.custom).filter(Boolean).reduce((arg, arg1) => (arg[arg1.mouseCidMid] = arg1, arg), {});
var zh = (arg => (arg[arg.usbMouse = 0] = 'usbMouse', arg[arg.dongleMouse = 1] = 'dongleMouse', arg[arg.dongle = 0] = "dongle", arg))(zh || {}),
  Hh = (arg => (arg[arg.GetDongleConnectStatus = 1] = "GetDongleConnectStatus", arg[arg.SetDonglePairMode = 2] = 'SetDonglePairMode', arg[arg.ClearDonglePairInfo = 3] = 'ClearDonglePairInfo', arg[arg.GetDonglePairStatus = 4] = "GetDonglePairStatus", arg[arg.SetReportRate = 1] = "SetReportRate", arg[arg.SetDpi = 2] = "SetDpi", arg[arg.SetSilentHeight = 3] = "SetSilentHeight", arg[arg.SetButtonKey = 5] = "SetButtonKey", arg[arg.SetMacroKey = 6] = "SetMacroKey", arg[arg.GetBatteryLevel = 7] = "GetBatteryLevel", arg[arg.GetCurrentWorkerMode = 8] = "GetCurrentWorkerMode", arg[arg.GetCurrentMouseConfig = 9] = "GetCurrentMouseConfig", arg[arg.SetCurrentMouseConfig = 10] = "SetCurrentMouseConfig", arg[arg.SetLinearCorrection = 11] = "SetLinearCorrection", arg[arg.SetRippleControl = 12] = "SetRippleControl", arg[arg.SetMotionSync = 13] = 'SetMotionSync', arg[arg.SetLEDLightEffect = 20] = 'SetLEDLightEffect', arg[arg.SetSensorSleepTime = 21] = "SetSensorSleepTime", arg[arg.SetStabilizationTime = 22] = "SetStabilizationTime", arg[arg.GetBatteryChargingStatus = 15] = 'GetBatteryChargingStatus', arg[arg.Reset = 19] = "Reset", arg[arg.GetAddressData = 23] = "GetAddressData", arg[arg.SetAddressData = 24] = "SetAddressData", arg[arg.GetDeviceType = 26] = "GetDeviceType", arg[arg.GetDeviceVersion = 28] = "GetDeviceVersion", arg))(Hh || {}),
  Wh = (arg => (arg[arg.Hz1000 = 0] = "Hz1000", arg[arg.Hz500 = 1] = "Hz500", arg[arg.Hz250 = 2] = "Hz250", arg[arg.Hz125 = 3] = "Hz125", arg[arg.Hz8000 = 4] = "Hz8000", arg[arg.Hz4000 = 5] = "Hz4000", arg[arg.Hz2000 = 6] = "Hz2000", arg))(Wh || {}),
  jh = (arg => (arg[arg.None = 0] = "None", arg[arg.Mouse = 1] = 'Mouse', arg[arg.SystemKey = 2] = "SystemKey", arg[arg.Keyboard = 3] = "Keyboard", arg[arg.Macro = 4] = "Macro", arg[arg.FireKey = 5] = "FireKey", arg[arg.DpiCycle = 10] = 'DpiCycle', arg[arg.DpiAdd = 11] = 'DpiAdd', arg[arg.DpiSub = 12] = 'DpiSub', arg[arg.ScrollUp = 13] = "ScrollUp", arg[arg.ScrollDown = 14] = "ScrollDown", arg[arg.ScrollLeft = 15] = 'ScrollLeft', arg[arg.ScrollRight = 16] = 'ScrollRight', arg))(jh || {}),
  Yh = (arg => (arg[arg.Left = 0] = 'Left', arg[arg.Right = 1] = "Right", arg[arg.Middle = 2] = "Middle", arg[arg.Center = 2] = "Center", arg[arg.Back = 3] = "Back", arg[arg.Forward = 4] = "Forward", arg[arg.Side1 = 4] = "Side1", arg[arg.Side2 = 3] = "Side2", arg))(Yh || {}),
  $h = (arg => (arg[arg.None = 0] = "None", arg[arg.LeftCtrl = 1] = "LeftCtrl", arg[arg.LeftShift = 2] = 'LeftShift', arg[arg.LeftAlt = 4] = "LeftAlt", arg[arg.LeftWin = 8] = "LeftWin", arg[arg.RightCtrl = 16] = "RightCtrl", arg[arg.RightShift = 32] = "RightShift", arg[arg.RightAlt = 64] = "RightAlt", arg[arg.RightWin = 128] = "RightWin", arg))($h || {}),
  qh = (arg => (arg[arg.dongle1K = 0] = "dongle1K", arg[arg.dongle4K = 1] = "dongle4K", arg[arg.wired1K = 2] = "wired1K", arg[arg.wired8K = 3] = "wired8K", arg[arg.dongle2K = 4] = "dongle2K", arg[arg.dongle8K = 5] = "dongle8K", arg[arg.wired2K = 6] = "wired2K", arg[arg.wired4K = 7] = "wired4K", arg))(qh || {});
let Jh = (R = class {
  constructor(arg2, arg, arg1 = 114) {
    V(this, "dongleInstructions", false);
    V(this, 'raw');
    let value3 = arg2 ? arg2.buffer : new ArrayBuffer(R.SIZE);
    this.raw = new DataView(value3);
    this.commandId = arg;
    this.cmdCode = arg1;
  }
  static ["getData"]() {
    return new DataView(new ArrayBuffer(R.SIZE));
  }
  get ["cmdCode"]() {
    return this.raw.getUint8(1);
  }
  set ["cmdCode"](arg) {
    this.raw.setUint8(1, arg);
  }
  get ["commandId"]() {
    return this.raw.getUint8(5);
  }
  set ["commandId"](arg) {
    this.raw.setUint8(5, arg);
  }
  get ['paramLen']() {
    return this.raw.getUint8(2);
  }
  set ["paramLen"](arg) {
    this.raw.setUint8(2, arg);
  }
  get ["returnStatus"]() {
    return this.raw.getUint8(2);
  }
  get ["cmdSn"]() {
    return this.raw.getUint8(3);
  }
  set ['cmdSn'](arg) {
    this.raw.setUint8(3, arg);
  }
  get ["target"]() {
    return this.raw.getUint8(4);
  }
  set ['target'](arg) {
    this.raw.setUint8(4, arg);
  }
  get ["checkSum"]() {
    return this.raw.getUint8(0);
  }
  set ['checkSum'](arg) {
    this.raw.setUint8(0, arg);
  }
  get ["cmdLen"]() {
    return this.raw.getUint8(6);
  }
  set ["cmdLen"](arg) {
    this.raw.setUint8(6, arg);
  }
  ["toUint8Array"]() {
    const value = new Uint8Array(this.raw.buffer);
    this.checkSum = 255 & rt.sum(value.slice(1, value.length));
    return new Uint8Array(this.raw.buffer);
  }
  get ["baseOffset"]() {
    return R.baseOffset;
  }
  ["toStringTx"]() {
    return "requestCode: " + this.commandId + ", commandId: " + this.commandId;
  }
  ["toStringRx"]() {
    return 'requestCode:\x20' + this.commandId + ", commandId: " + this.commandId;
  }
}, V(R, 'SIZE', 63), V(R, "baseOffset", 7), R);
class ButtonKeysAction {
  constructor(arg1, arg = 0) {
    this.dataView = arg1;
    this.offset = arg;
  }
  get ['left']() {
    const value = ButtonAction3.fromDataView(this.dataView, this.offset);
    if (value instanceof Zh) return ed.create(Yh.Left);
    return value;
  }
  get ["right"]() {
    const value = ButtonAction3.fromDataView(this.dataView, this.offset + 5);
    if (value instanceof Zh) return ed.create(Yh.Right);
    return value;
  }
  get ["center"]() {
    const value = ButtonAction3.fromDataView(this.dataView, this.offset + 10);
    if (value instanceof Zh) return ed.create(Yh.Center);
    return value;
  }
  get ["side1"]() {
    const value = ButtonAction3.fromDataView(this.dataView, this.offset + 15);
    if (value instanceof Zh) return ed.create(Yh.Forward);
    return value;
  }
  get ['side2']() {
    const value = ButtonAction3.fromDataView(this.dataView, this.offset + 20);
    if (value instanceof Zh) return ed.create(Yh.Back);
    return value;
  }
}
class ButtonAction3 {
  constructor(arg1, arg) {
    V(this, "dataView");
    V(this, "offset");
    this.dataView = arg1;
    this.offset = arg;
  }
  get ['i18nText']() {
    return "Unknown";
  }
  get ["keyClass"]() {
    return this.dataView.getUint8(this.offset);
  }
  static ["createDataView"](arg3, arg1, arg2, arg4) {
    const value = new DataView(new ArrayBuffer(5));
    value.setUint8(0, arg3);
    value.setUint8(1, arg1);
    value.setUint8(2, arg2);
    value.setUint8(3, arg4[0]);
    value.setUint8(4, arg4[1]);
    return value;
  }
  static ["fromJSON"](arg) {
    const value1 = new DataView(new Uint8Array([arg.keyClass, arg.modifierKeys, arg.buttonKeyMouse, ...arg.keycode]).buffer);
    return ButtonAction3.fromDataView(value1, 0);
  }
  static ["fromDataView"](arg, arg1) {
    switch (arg.getUint8(arg1)) {
      case jh.None:
        return new Zh(arg, arg1);
      case jh.Mouse:
        return new ed(arg, arg1);
      case jh.SystemKey:
        return new rd(arg, arg1);
      case jh.Keyboard:
        return new nd(arg, arg1);
      case jh.Macro:
        return new id(arg, arg1);
      case jh.FireKey:
        return new ud(arg, arg1);
      case jh.DpiCycle:
        return new ld(arg, arg1);
      case jh.DpiAdd:
        return new hd(arg, arg1);
      case jh.DpiSub:
        return new gd(arg, arg1);
      case jh.ScrollUp:
        return new pd(arg, arg1);
      case jh.ScrollDown:
        return new wd(arg, arg1);
      case jh.ScrollLeft:
        return new _d(arg, arg1);
      case jh.ScrollRight:
        return new kd(arg, arg1);
      default:
        return new ButtonAction3(arg, arg1);
    }
  }
  ["toString"]() {
    return Array.from(new Uint8Array(this.dataView.buffer)).map(arg => arg.toString().padStart(2, '0')).join('');
  }
  ['toJSON']() {
    return {
      keyClass: this.dataView.getUint8(this.offset),
      modifierKeys: this.dataView.getUint8(this.offset + 1),
      buttonKeyMouse: this.dataView.getUint8(this.offset + 2),
      keycode: [this.dataView.getUint8(this.offset + 3), this.dataView.getUint8(this.offset + 4)]
    };
  }
}
const Xh = class _ButtonNoneAction extends ButtonAction3 {
  get ["i18nText"]() {
    return "None";
  }
  static ["create"]() {
    return new _ButtonNoneAction(super.createDataView(_ButtonNoneAction.TYPE, $h.None, Yh.Left, [0, 0]), 0);
  }
};
V(Xh, "TYPE", jh.None);
let Zh = Xh;
const Qh = class _ButtonMouseAction extends ButtonAction3 {
  get ["i18nText"]() {
    switch (this.mouseValue) {
      case Yh.Left:
        return "key.leftButton";
      case Yh.Right:
        return "key.rightButton";
      case Yh.Middle:
        return "key.middleButton";
      case Yh.Back:
        return "key.backward";
      case Yh.Forward:
        return "key.forward";
      default:
        return super.i18nText;
    }
  }
  get ['mouseValue']() {
    return this.dataView.getUint8(this.offset + 2);
  }
  static ["create"](arg) {
    return new _ButtonMouseAction(super.createDataView(_ButtonMouseAction.TYPE, $h.None, arg, [0, 0]), 0);
  }
};
V(Qh, 'TYPE', jh.Mouse);
let ed = Qh;
const td = class _ButtonSystemKeyAction extends ButtonAction3 {
  get ["i18nText"]() {
    return "Keyboard";
  }
  get ["keycode"]() {
    return [this.dataView.getUint8(this.offset + 3), this.dataView.getUint8(this.offset + 4)];
  }
  static ["create"](arg) {
    return new _ButtonSystemKeyAction(super.createDataView(_ButtonSystemKeyAction.TYPE, $h.None, Yh.Left, arg), 0);
  }
};
V(td, 'TYPE', jh.SystemKey);
let rd = td;
const sd = class _ButtonKeyboardAction extends ButtonAction3 {
  get ["i18nText"]() {
    return "Keyboard";
  }
  get ["modifierKeys"]() {
    return this.dataView.getUint8(this.offset + 1);
  }
  get ["keycode"]() {
    return [this.dataView.getUint8(this.offset + 3), this.dataView.getUint8(this.offset + 4)];
  }
  static ['create'](arg, arg1 = [0, 0]) {
    return new _ButtonKeyboardAction(super.createDataView(_ButtonKeyboardAction.TYPE, arg, Yh.Left, arg1), 0);
  }
};
V(sd, 'TYPE', jh.Keyboard);
let nd = sd;
const ad = class _ButtonMacroAction extends ButtonAction3 {
  get ["i18nText"]() {
    return "Macro";
  }
  get ['macroId']() {
    return this.dataView.getUint8(this.offset + 3);
  }
  static ["create"](arg) {
    return new _ButtonMacroAction(super.createDataView(_ButtonMacroAction.TYPE, $h.None, Yh.Left, [arg, 0]), 0);
  }
};
V(ad, 'TYPE', jh.Macro);
let id = ad;
const od = class _ButtonFireKeyAction extends ButtonAction3 {
  get ['i18nText']() {
    return "key.flameKey";
  }
  get ["clicks"]() {
    return this.dataView.getUint8(this.offset + 2);
  }
  get ['clickInterval']() {
    return this.dataView.getUint16(this.offset + 3, true);
  }
  static ['create'](arg2 = 1, arg1 = 0) {
    const value = new DataView(new ArrayBuffer(2));
    value.setUint16(0, arg1, true);
    return new _ButtonFireKeyAction(super.createDataView(_ButtonFireKeyAction.TYPE, $h.None, arg2, [value.getUint8(0), value.getUint8(1)]), 0);
  }
};
V(od, "TYPE", jh.FireKey);
let ud = od;
const cd = class _ButtonDpiCycleAction extends ButtonAction3 {
  get ["i18nText"]() {
    return "key.DpiCycle";
  }
  static ["create"]() {
    return new _ButtonDpiCycleAction(super.createDataView(_ButtonDpiCycleAction.TYPE, $h.None, Yh.Left, [0, 0]), 0);
  }
};
V(cd, "TYPE", jh.DpiCycle);
let ld = cd;
const fd = class _ButtonDpiAddAction extends ButtonAction3 {
  get ["i18nText"]() {
    return "key.DPIPlus";
  }
  static ["create"]() {
    return new _ButtonDpiAddAction(super.createDataView(_ButtonDpiAddAction.TYPE, $h.None, Yh.Left, [0, 0]), 0);
  }
};
V(fd, 'TYPE', jh.DpiAdd);
let hd = fd;
const dd = class _ButtonDpiSubAction extends ButtonAction3 {
  get ["i18nText"]() {
    return "key.DPIMinus";
  }
  static ["create"]() {
    return new _ButtonDpiSubAction(super.createDataView(_ButtonDpiSubAction.TYPE, $h.None, Yh.Left, [0, 0]), 0);
  }
};
V(dd, "TYPE", jh.DpiSub);
let gd = dd;
const md = class _ButtonScrollUpAction extends ButtonAction3 {
  get ['i18nText']() {
    return "key.wheelUp";
  }
  static ["create"]() {
    return new _ButtonScrollUpAction(super.createDataView(_ButtonScrollUpAction.TYPE, $h.None, Yh.Left, [0, 0]), 0);
  }
};
V(md, 'TYPE', jh.ScrollUp);
let pd = md;
const yd = class _ButtonScrollDownAction extends ButtonAction3 {
  get ["i18nText"]() {
    return "key.wheelDown";
  }
  static ["create"]() {
    return new _ButtonScrollDownAction(super.createDataView(_ButtonScrollDownAction.TYPE, $h.None, Yh.Left, [0, 0]), 0);
  }
};
V(yd, "TYPE", jh.ScrollDown);
let wd = yd;
const bd = class _ButtonScrollLeftAction extends ButtonAction3 {
  get ["i18nText"]() {
    return "key.rollLeft";
  }
  static ['create']() {
    return new _ButtonScrollLeftAction(super.createDataView(_ButtonScrollLeftAction.TYPE, $h.None, Yh.Left, [0, 0]), 0);
  }
};
V(bd, "TYPE", jh.ScrollLeft);
let _d = bd;
const vd = class _ButtonScrollRightAction extends ButtonAction3 {
  get ['i18nText']() {
    return "key.rollRight";
  }
  static ["create"]() {
    return new _ButtonScrollRightAction(super.createDataView(_ButtonScrollRightAction.TYPE, $h.None, Yh.Left, [0, 0]), 0);
  }
};
V(vd, "TYPE", jh.ScrollRight);
let kd = vd;
class DpiAction {
  constructor(arg, arg1 = 0) {
    V(this, "dataView");
    V(this, "offset");
    this.dataView = arg;
    this.offset = arg1;
  }
  get ["currentIndex"]() {
    return this.dataView.getUint8(this.offset);
  }
  set ["currentIndex"](arg) {
    this.dataView.setUint8(this.offset, arg);
  }
  get ["max"]() {
    return this.dataView.getUint8(this.offset + 1);
  }
  set ["max"](arg) {
    this.dataView.setUint8(this.offset + 1, arg);
  }
  get ["dpiValues"]() {
    return Array.from({
      length: 8
    }, (arg2, arg) => {
      let value1 = this.offset + 2 + 6 * arg;
      return {
        dpiValue: this.dataView.getUint16(value1, true),
        dpiColor: [this.dataView.getUint8(value1 + 4), this.dataView.getUint8(value1 + 3), this.dataView.getUint8(value1 + 2), this.dataView.getUint8(value1 + 5)]
      };
    });
  }
  set ['dpiValues'](arg2) {
    arg2.forEach((arg1, arg) => {
      let value2 = this.offset + 2 + 6 * arg;
      this.dataView.setUint16(value2, arg1.dpiValue, true);
      this.dataView.setUint8(value2 + 4, arg1.dpiColor[0]);
      this.dataView.setUint8(value2 + 3, arg1.dpiColor[1]);
      this.dataView.setUint8(value2 + 2, arg1.dpiColor[2]);
      this.dataView.setUint8(value2 + 5, arg1.dpiColor[3]);
    });
  }
  static ['formatting'](arg1) {
    const value = new DpiAction(new DataView(new ArrayBuffer(50)));
    value.currentIndex = arg1.currentIndex;
    value.max = arg1.max;
    value.dpiValues = arg1.dpiValues;
    return value;
  }
  ["toJSON"]() {
    return {
      currentIndex: this.currentIndex,
      max: this.max,
      dpiValues: this.dpiValues
    };
  }
}
class DpiLightEffectAction {
  constructor(arg1, arg = 0) {
    V(this, "dataView");
    V(this, "offset");
    this.dataView = arg1;
    this.offset = arg;
  }
  get ["style"]() {
    return this.dataView.getUint8(this.offset);
  }
  set ["style"](arg) {
    this.dataView.setUint8(this.offset, arg);
  }
  get ['brightness']() {
    return this.dataView.getUint8(this.offset + 1);
  }
  set ["brightness"](arg) {
    this.dataView.setUint8(this.offset + 1, arg);
  }
  get ["speed"]() {
    return this.dataView.getUint8(this.offset + 2);
  }
  set ["speed"](arg) {
    this.dataView.setUint8(this.offset + 2, arg);
  }
  static ["formatting"](arg1) {
    const value = new DpiLightEffectAction(new DataView(new ArrayBuffer(3)));
    value.style = arg1.style;
    value.brightness = arg1.brightness;
    value.speed = arg1.speed;
    return value;
  }
  ['toJSON']() {
    return {
      style: this.style,
      brightness: this.brightness,
      speed: this.speed
    };
  }
}
class Battery2 extends Jh {
  static ['get']() {
    let value = new Battery2(Battery2.getData(), Hh.GetBatteryLevel);
    value.paramLen = 2;
    value.cmdLen = 1;
    return value;
  }
  get ["batteryLevel"]() {
    return this.raw.getUint8(this.baseOffset);
  }
}
class BatteryChargingStatus extends Jh {
  static ["get"]() {
    let value = new BatteryChargingStatus(BatteryChargingStatus.getData(), Hh.GetBatteryChargingStatus);
    value.paramLen = 2;
    value.cmdLen = 1;
    return value;
  }
  get ['chargingStatus']() {
    return !!this.raw.getUint8(this.baseOffset);
  }
}
class SetReportRate2 extends Jh {
  static ["set"](arg1) {
    const value = new SetReportRate2(SetReportRate2.getData(), Hh.SetReportRate);
    value.paramLen = 3;
    value.cmdLen = 1;
    value.reportRate = arg1;
    return value;
  }
  set ["reportRate"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
}
class SetDPI extends Jh {
  static ['set'](arg) {
    const value1 = new SetDPI(SetDPI.getData(), Hh.SetDpi);
    value1.paramLen = 10;
    value1.cmdLen = 8;
    value1.currentIndex = arg.currentIndex;
    value1.dpiValue = arg.dpiValue;
    value1.color = [arg.color.r, arg.color.g, arg.color.b];
    value1.enable = arg.enable;
    return value1;
  }
  set ["currentIndex"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  get ["currentIndex"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['dpiValue'](arg) {
    this.raw.setUint16(this.baseOffset + 1, arg, true);
  }
  set ["color"](arg3) {
    const [value1, value, value2] = arg3;
    this.raw.setUint8(this.baseOffset + 3, value2);
    this.raw.setUint8(this.baseOffset + 4, value);
    this.raw.setUint8(this.baseOffset + 5, value1);
    this.raw.setUint8(this.baseOffset + 6, 0);
  }
  set ['enable'](arg) {
    this.raw.setUint8(this.baseOffset + 7, Number(arg));
  }
}
class SetSilentHeight extends Jh {
  static ["set"](arg1) {
    const value = new SetSilentHeight(SetSilentHeight.getData(), Hh.SetSilentHeight);
    value.paramLen = 3;
    value.cmdLen = 1;
    value.height = arg1;
    return value;
  }
  set ["height"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
}
class SetButtonKey extends Jh {
  static ['set'](arg, arg2) {
    const value1 = new SetButtonKey(SetButtonKey.getData(), Hh.SetButtonKey);
    value1.paramLen = 8;
    value1.cmdLen = 5;
    value1.keyIndex = arg;
    value1.key = arg2;
    return value1;
  }
  set ["keyIndex"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  set ["key"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg.keyClass);
    if (arg instanceof ud) {
      this.raw.setUint8(this.baseOffset + 2, arg.clicks);
      return void this.raw.setUint16(this.baseOffset + 3, arg.clickInterval, true);
    }
    if (arg instanceof ed) {
      this.raw.setUint8(this.baseOffset + 2, 0);
      this.raw.setUint8(this.baseOffset + 3, arg.mouseValue);
      return void this.raw.setUint8(this.baseOffset + 4, 0);
    }
    if (arg instanceof nd) {
      this.raw.setUint8(this.baseOffset + 2, arg.modifierKeys);
      const [value1, value] = arg.keycode;
      this.raw.setUint8(this.baseOffset + 3, value1);
      return void this.raw.setUint8(this.baseOffset + 4, value);
    }
    if (arg instanceof rd) {
      const [value1, value] = arg.keycode;
      this.raw.setUint8(this.baseOffset + 2, 0);
      this.raw.setUint8(this.baseOffset + 3, value1);
      return void this.raw.setUint8(this.baseOffset + 4, value);
    }
    this.raw.setUint8(this.baseOffset + 2, 0);
    this.raw.setUint8(this.baseOffset + 3, 0);
    this.raw.setUint8(this.baseOffset + 4, 0);
  }
}
class SetMacroKey2 extends Jh {
  static ['set'](arg2, arg1) {
    const value = new SetMacroKey2(SetMacroKey2.getData(), Hh.SetMacroKey);
    value.paramLen = 14;
    value.cmdLen = 11;
    value.keyIndex = arg2;
    value.macro = arg1;
    return value;
  }
  set ["keyIndex"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  set ["macro"](arg) {
    const value1 = arg.dataView.byteLength;
    for (let value = 0; value < value1; value++) this.raw.setUint8(this.baseOffset + 1 + value, arg.dataView.getUint8(value));
  }
}
class GetDongleConnectStatus extends Jh {
  static ["get"]() {
    const value = new GetDongleConnectStatus(GetDongleConnectStatus.getData(), Hh.GetDongleConnectStatus);
    value.paramLen = 3;
    value.cmdLen = 1;
    value.dongleInstructions = true;
    return value;
  }
  get ["status"]() {
    return !!this.raw.getUint8(this.baseOffset);
  }
}
class GetCurrentWorkerMode extends Jh {
  static ["get"]() {
    const value = new GetCurrentWorkerMode(GetCurrentWorkerMode.getData(), Hh.GetCurrentWorkerMode);
    value.paramLen = 3;
    value.cmdLen = 1;
    return value;
  }
  get ["workerMode"]() {
    return this.raw.getUint8(this.baseOffset);
  }
}
class GetCurrentMouseConfig extends Jh {
  static ["get"]() {
    const value = new GetCurrentMouseConfig(GetCurrentMouseConfig.getData(), Hh.GetCurrentMouseConfig);
    value.paramLen = 19;
    value.cmdLen = 17;
    return value;
  }
  get ["configIndex"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  get ["version"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  get ['reportRate']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  get ["dpiValue"]() {
    return this.raw.getUint16(this.baseOffset + 3, true);
  }
  get ["silentHeight"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  get ["motionSync"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  get ["linearCorrection"]() {
    return this.raw.getUint8(this.baseOffset + 7);
  }
  get ["rippleControl"]() {
    return this.raw.getUint8(this.baseOffset + 8);
  }
  get ["sensorSleepTime"]() {
    return this.raw.getUint16(this.baseOffset + 9, true);
  }
  get ['stabilizationTime']() {
    return this.raw.getUint8(this.baseOffset + 11);
  }
  get ["buttonLeftType"]() {
    return this.raw.getUint8(this.baseOffset + 12);
  }
  get ["buttonRightType"]() {
    return this.raw.getUint8(this.baseOffset + 13);
  }
  get ['buttonMiddleType']() {
    return this.raw.getUint8(this.baseOffset + 14);
  }
  get ["buttonBackType"]() {
    return this.raw.getUint8(this.baseOffset + 15);
  }
  get ["buttonForwardType"]() {
    return this.raw.getUint8(this.baseOffset + 16);
  }
}
class SetCurrentMouseConfig extends Jh {
  static ["set"](arg1) {
    const value = new SetCurrentMouseConfig(SetCurrentMouseConfig.getData(), Hh.SetCurrentMouseConfig);
    value.paramLen = 3;
    value.cmdLen = 1;
    value.configIndex = arg1;
    return value;
  }
  set ["configIndex"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
}
class SetLinearCorrection extends Jh {
  static ["set"](arg1) {
    const value = new SetLinearCorrection(SetLinearCorrection.getData(), Hh.SetLinearCorrection);
    value.paramLen = 3;
    value.cmdLen = 1;
    value.straightLineCorrection = arg1;
    return value;
  }
  set ["straightLineCorrection"](arg) {
    this.raw.setUint8(this.baseOffset, +arg);
  }
}
class SetRippleControl extends Jh {
  static ["set"](arg) {
    const value1 = new SetRippleControl(SetRippleControl.getData(), Hh.SetRippleControl);
    value1.paramLen = 3;
    value1.cmdLen = 1;
    value1.jitterCorrection = arg;
    return value1;
  }
  set ["jitterCorrection"](arg) {
    this.raw.setUint8(this.baseOffset, +arg);
  }
}
class SetMotionSync extends Jh {
  static ['set'](arg1) {
    const value = new SetMotionSync(SetMotionSync.getData(), Hh.SetMotionSync);
    value.paramLen = 3;
    value.cmdLen = 1;
    value.mobileSynchronization = arg1;
    return value;
  }
  set ["mobileSynchronization"](arg) {
    this.raw.setUint8(this.baseOffset, +arg);
  }
}
class SetLEDLightEffect extends Jh {
  static ["set"](arg1) {
    const value = new SetLEDLightEffect(SetLEDLightEffect.getData(), Hh.SetLEDLightEffect);
    value.paramLen = 6;
    value.cmdLen = 3;
    value.mode = arg1.style;
    value.brightness = arg1.brightness;
    value.speed = arg1.speed;
    return value;
  }
  set ["mode"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  set ["brightness"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  set ["speed"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
}
class SetSensorSleepTime extends Jh {
  static ["set"](arg) {
    const value1 = new SetSensorSleepTime(SetSensorSleepTime.getData(), Hh.SetSensorSleepTime);
    value1.paramLen = 5;
    value1.cmdLen = 2;
    value1.sleepTime = arg;
    return value1;
  }
  set ["sleepTime"](arg) {
    this.raw.setUint16(this.baseOffset, arg, true);
  }
}
class SetStabilizationTime extends Jh {
  static ["set"](arg1) {
    const value = new SetStabilizationTime(SetStabilizationTime.getData(), Hh.SetStabilizationTime);
    value.paramLen = 3;
    value.cmdLen = 1;
    value.keyShakeEliminationTime = arg1;
    return value;
  }
  set ["keyShakeEliminationTime"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
}
class GetAddressData extends Jh {
  static ["get"](arg, arg2) {
    const value1 = new GetAddressData(GetAddressData.getData(), Hh.GetAddressData);
    value1.paramLen = 10;
    value1.cmdLen = 13;
    value1.address = arg;
    value1.len = arg2;
    return value1;
  }
  set ["address"](arg) {
    this.raw.setUint16(this.baseOffset, arg, true);
  }
  get ["len"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["len"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["data"]() {
    const value = this.raw.buffer.slice(this.baseOffset + 3, this.baseOffset + 3 + this.len);
    return new DataView(value);
  }
}
class SetAddressData extends Jh {
  static ['save'](arg1, arg2) {
    const value = new SetAddressData(SetAddressData.getData(), Hh.SetAddressData);
    value.paramLen = 5 + arg2.byteLength;
    value.cmdLen = 3 + arg2.byteLength;
    value.len = 0;
    value.address = arg1;
    value.data = arg2;
    return value;
  }
  static ['set'](arg1, arg) {
    const value2 = new SetAddressData(SetAddressData.getData(), Hh.SetAddressData);
    value2.paramLen = 5 + arg.byteLength;
    value2.cmdLen = 3 + arg.byteLength;
    value2.len = arg.byteLength;
    value2.address = arg1;
    value2.data = arg;
    return value2;
  }
  set ["address"](arg) {
    this.raw.setUint16(this.baseOffset, arg, true);
  }
  get ['len']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['len'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  set ['data'](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + 3 + value, arg.getUint8(value));
  }
}
class GetDeviceType extends Jh {
  static ["get"]() {
    const value = new GetDeviceType(GetDeviceType.getData(), Hh.GetDeviceType);
    value.dongleInstructions = true;
    value.paramLen = 2;
    value.cmdLen = 1;
    return value;
  }
  get ["type"]() {
    return this.raw.getUint8(this.baseOffset);
  }
}
class GetDeviceVersion extends Jh {
  static ['get']() {
    const value = new GetDeviceVersion(GetDeviceVersion.getData(), Hh.GetDeviceVersion);
    value.paramLen = 5;
    value.cmdLen = 3;
    return value;
  }
  get ["version"]() {
    return [this.raw.getUint8(this.baseOffset), this.raw.getUint8(this.baseOffset + 1), this.raw.getUint8(this.baseOffset + 2)].join('.');
  }
}
class Pair extends Jh {
  static ["start"]() {
    const value = new Pair(Pair.getData(), Hh.SetDonglePairMode);
    value.paramLen = 3;
    value.cmdLen = 0;
    value.dongleInstructions = true;
    return value;
  }
  static ["clearPair"]() {
    const value = new Pair(Pair.getData(), Hh.ClearDonglePairInfo);
    value.paramLen = 3;
    value.cmdLen = 0;
    value.dongleInstructions = true;
    return value;
  }
  static ["getStatus"]() {
    const value = new Pair(Pair.getData(), Hh.GetDonglePairStatus);
    value.paramLen = 3;
    value.cmdLen = 1;
    value.dongleInstructions = true;
    return value;
  }
  get ["pairStatus"]() {
    return this.raw.getUint8(this.baseOffset);
  }
}
class Reset extends Jh {
  static ["reset"]() {
    const value = new Reset(Reset.getData(), Hh.Reset);
    value.paramLen = 2;
    value.cmdLen = 1;
    return value;
  }
}
let Cd = class HidDevice5 extends WebHidGeneral {
  constructor() {
    super(...arguments);
    V(this, 'mutex', new Mutex());
    V(this, "pendingTransfers", []);
  }
  ["inputReportListener"](arg) {
    super.inputReportListener(arg);
    this.handleInputReport(arg.data);
  }
  ["onDeviceToHostReportReceived"](arg) {}
  ["handleInputReport"](arg) {
    this.mutex.runExclusive(() => {
      const value22 = arg.getUint8(4),
        value12 = arg.getUint8(1);
      if (0 == value22) return void this.onDeviceToHostReportReceived(arg);
      if (2 == value12) return;
      let value3 = false;
      for (const value2 of this.pendingTransfers) if (value2.requestCode === value22) {
        let value1 = Array.from(new Uint8Array(arg.buffer));
        const value = new DataView(new Uint8Array([0, ...value1]).slice(0, 64).buffer);
        value2.promiseResolve(value);
        this.pendingTransfers.splice(this.pendingTransfers.indexOf(value2), 1);
        value3 = true;
        break;
      }
      if (!value3 && value22 === Hh.SetDpi) {
        let value = Array.from(new Uint8Array(arg.buffer));
        const value2 = new DataView(new Uint8Array([0, ...value]).slice(0, 64).buffer),
          value1 = new SetDPI(SetDPI.getData(), Hh.SetDpi);
        value1.raw = value2;
        Pr('data-reporting', value1);
        value3 = true;
      }
    });
  }
  async ["transferForResultAsync"](arg8, arg4 = false, arg5 = 8) {
    var value22, value6;
    const value2 = new DataView(arg8.buffer).getUint8(5);
    let value3;
    const value7 = new Promise(arg => {
        value3 = arg;
      }),
      value1 = {
        requestCode: value2,
        data: arg8,
        promiseResolve: value3
      };
    await new Promise(arg1 => {
      const value = setInterval(() => {
        0 === this.pendingTransfers.length && (arg1(), clearInterval(value));
      }, 1);
    });
    this.pendingTransfers.push(value1);
    if (arg4) await (null == (value6 = this.device) ? void 0 : value6.sendFeatureReport(arg5, arg8));else await (null == (value22 = this.device) ? void 0 : value22.sendReport(arg5, arg8));
    return value7;
  }
};
class BitMouse extends Cd {
  async ['transferForResult'](arg) {
    let {
      receiver: value1
    } = this.getCustomData();
    true === value1 && (arg.target = zh.dongleMouse);
    true === value1 && arg.dongleInstructions && (arg.target = zh.dongle);
    arg.raw = await this.transferForResultAsync(arg.toUint8Array());
    if (1 == arg.returnStatus) throw new Error("指令执行失败");
    return arg;
  }
  async ["getFlashDataMap"]() {
    const value4 = await this.getDeviceType(),
      value2 = await this.getDpiConfig(),
      value3 = await this.getMouseConfig(),
      value5 = await this.getDpiLightEffectStyle(),
      value = await this.getDeviceVersion(),
      value1 = await this.getButtonKeys();
    return {
      deviceType: value4,
      dpi: value2.toJSON(),
      reportRate: value3.reportRate,
      silentHeight: value3.silentHeight,
      sensorSleepTime: value3.sensorSleepTime,
      stabilizationTime: value3.stabilizationTime,
      dpiLightEffect: value5.toJSON(),
      motionSync: value3.motionSync,
      linearCorrection: value3.linearCorrection,
      rippleControl: value3.rippleControl,
      ...value,
      btnKeys: {
        left: value1.left.toJSON(),
        right: value1.right.toJSON(),
        center: value1.center.toJSON(),
        side1: value1.side1.toJSON(),
        side2: value1.side2.toJSON(),
        bottom: value1.side2.toJSON()
      },
      currentConfigFile: value3.configIndex
    };
  }
  async ['getWorkerMode']() {
    return this.transferForResult(GetCurrentWorkerMode.get());
  }
  async ["getMouseConnectStatus"]() {
    let {
      receiver: value
    } = this.getCustomData();
    if (!value) return true;
    const {
      status: value1
    } = await this.transferForResult(GetDongleConnectStatus.get());
    return value1;
  }
  async ["getBattery"]() {
    const {
        batteryLevel: value1
      } = await this.transferForResult(Battery2.get()),
      {
        chargingStatus: value
      } = await this.transferForResult(BatteryChargingStatus.get());
    return {
      batteryLevel: value1,
      chargingStatus: value
    };
  }
  async ["getMouseConfig"]() {
    return this.transferForResult(GetCurrentMouseConfig.get());
  }
  async ['getDpiConfig']() {
    const value3 = [];
    for (let value2 = 0; value2 < 5; value2++) {
      const value = await this.transferForResult(GetAddressData.get(10 * value2 + 1, 10));
      value3.push(...new Uint8Array(value.data.buffer));
    }
    return new DpiAction(new DataView(Uint8Array.from(value3).buffer));
  }
  async ["setDpiConfig"](arg) {
    const value12 = DpiAction.formatting(arg);
    for (let value2 = 0; value2 < 5; value2++) {
      const value = value12.dataView.buffer.slice(10 * value2, 10 * value2 + 10),
        value1 = SetAddressData.set(10 * value2 + 1, new DataView(value));
      await this.transferForResult(value1);
    }
  }
  async ["updateDPI"](arg) {
    return this.transferForResult(SetDPI.set(arg));
  }
  async ['getDeviceType']() {
    const {
      type: value
    } = await this.transferForResult(GetDeviceType.get());
    return value;
  }
  async ['setReportRate'](arg) {
    return this.transferForResult(SetReportRate2.set(arg));
  }
  async ["setMouseSilentHeight"](arg) {
    return this.transferForResult(SetSilentHeight.set(arg));
  }
  async ["setSensorSleepTime"](arg) {
    return this.transferForResult(SetSensorSleepTime.set(arg));
  }
  async ["setStabilizationTime"](arg) {
    return this.transferForResult(SetStabilizationTime.set(arg));
  }
  async ["getDpiLightEffectStyle"]() {
    const value1 = GetAddressData.get(59, 3),
      value = await this.transferForResult(value1);
    return new DpiLightEffectAction(value.data);
  }
  async ['setMouseDpiRGBEffects'](arg) {
    return this.transferForResult(SetLEDLightEffect.set(arg));
  }
  async ["setMotionSync"](arg) {
    return this.transferForResult(SetMotionSync.set(!!arg));
  }
  async ['setLinearCorrection'](arg) {
    return this.transferForResult(SetLinearCorrection.set(!!arg));
  }
  async ['setRippleControl'](arg) {
    return this.transferForResult(SetRippleControl.set(!!arg));
  }
  async ["setPairMode"]() {
    await this.transferForResult(Pair.clearPair());
    await this.transferForResult(Pair.start());
  }
  async ["clearPair"]() {
    return this.transferForResult(Pair.clearPair());
  }
  async ['getPairStatus']() {
    const {
      pairStatus: value
    } = await this.transferForResult(Pair.getStatus());
    return !!value;
  }
  async ["getDeviceVersion"]() {
    const value2 = GetDeviceVersion.get();
    value2.dongleInstructions = true;
    const {
        version: value
      } = await this.transferForResult(value2),
      {
        version: value1
      } = await this.transferForResult(GetDeviceVersion.get());
    return {
      dongleVersion: value,
      mouseVersion: value1
    };
  }
  async ["getButtonKeys"]() {
    const value3 = [];
    for (let value2 = 0; value2 < 3; value2++) {
      const {
        data: value
      } = await this.transferForResult(GetAddressData.get(65 + 10 * value2, 10));
      value3.push(...new Uint8Array(value.buffer));
    }
    const value1 = new DataView(new Uint8Array(value3.slice(0, 25)).buffer);
    return new ButtonKeysAction(value1);
  }
  async ["setButtonKey"](arg, arg1) {
    return this.transferForResult(SetButtonKey.set(arg, arg1));
  }
  async ['setButtonKeyToMacro'](arg, arg1) {
    for (let value = 0; value < arg1.length; value++) await this.transferForResult(SetMacroKey2.set(arg, arg1[value]));
  }
  async ["setCurrentMouseConfig"](arg) {
    return this.transferForResult(SetCurrentMouseConfig.set(arg));
  }
  async ['reset']() {
    return this.transferForResult(Reset.reset());
  }
}
const Sd = [{
    controller: BitMouse,
    macro: class BitMacro extends MacroStore {
      constructor() {
        super("bit-mouse-macro", 10);
      }
    },
    digital: bu,
    meta: {
      deviceName: "Mouse",
      component: "bit-mouse"
    },
    filters: [{
      vendorId: 14139,
      productId: 4194,
      usagePage: 65285,
      usage: 1,
      custom: {
        name: "VXE MAD R",
        cover: "mad-r",
        themeConfigName: "mad-r-skin",
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: 'Skin.Black',
          value: "black"
        }],
        dpiMin: 200,
        dpiMax: 28000,
        dpiStep: 50
      }
    }, {
      vendorId: 14139,
      productId: 4195,
      usagePage: 65285,
      receiver: true,
      usage: 1,
      custom: {
        name: "MAD R 2.4G",
        cover: "mad-r",
        themeConfigName: "mad-r-skin",
        theme: [{
          label: "Skin.White",
          value: "white"
        }, {
          label: "Skin.Black",
          value: "black"
        }],
        dpiMin: 200,
        dpiMax: 28000,
        dpiStep: 50
      }
    }]
  }],
  Ud = class _ConfiguratorReport {
    constructor(arg2, arg) {
      V(this, "raw");
      let value1 = arg2 ? arg2.buffer : new ArrayBuffer(_ConfiguratorReport.SIZE);
      this.raw = new DataView(value1);
      this.commandId = arg;
    }
    static ["getData"]() {
      return new DataView(new ArrayBuffer(_ConfiguratorReport.SIZE));
    }
    ["toUint8Array"]() {
      return new Uint8Array(this.raw.buffer);
    }
    get ['baseOffset']() {
      return _ConfiguratorReport.baseOffset;
    }
    get ["commandId"]() {
      return this.raw.getUint8(0);
    }
    set ["commandId"](arg) {
      this.raw.setUint8(0, arg);
    }
    ["setRaw"](arg) {
      this.raw = arg;
      return this;
    }
    ["toStringTx"]() {
      return 'requestCode:\x20' + this.commandId + ", commandId: " + this.commandId;
    }
    ["toStringRx"]() {
      return "requestCode: " + this.commandId + ", commandId: " + this.commandId;
    }
  };
V(Ud, 'SIZE', 32);
V(Ud, 'baseOffset', 1);
let Dd = Ud;
var Od = (arg => (arg[arg.id_get_protocol_version = 1] = 'id_get_protocol_version', arg[arg.id_get_keyboard_value = 2] = "id_get_keyboard_value", arg[arg.id_set_keyboard_value = 3] = "id_set_keyboard_value", arg[arg.id_dynamic_keymap_get_keycode = 4] = "id_dynamic_keymap_get_keycode", arg[arg.id_dynamic_keymap_set_keycode = 5] = 'id_dynamic_keymap_set_keycode', arg[arg.id_dynamic_keymap_reset = 6] = "id_dynamic_keymap_reset", arg[arg.id_custom_set_value = 7] = "id_custom_set_value", arg[arg.id_custom_get_value = 8] = 'id_custom_get_value', arg[arg.id_custom_save = 9] = 'id_custom_save', arg[arg.id_lighting_set_value = 7] = 'id_lighting_set_value', arg[arg.id_lighting_get_value = 8] = 'id_lighting_get_value', arg[arg.id_lighting_save = 9] = "id_lighting_save", arg[arg.id_eeprom_reset = 10] = 'id_eeprom_reset', arg[arg.id_bootloader_jump = 11] = "id_bootloader_jump", arg[arg.id_dynamic_keymap_macro_get_count = 12] = "id_dynamic_keymap_macro_get_count", arg[arg.id_dynamic_keymap_macro_get_buffer_size = 13] = "id_dynamic_keymap_macro_get_buffer_size", arg[arg.id_dynamic_keymap_macro_get_buffer = 14] = "id_dynamic_keymap_macro_get_buffer", arg[arg.id_dynamic_keymap_macro_set_buffer = 15] = 'id_dynamic_keymap_macro_set_buffer', arg[arg.id_dynamic_keymap_macro_reset = 16] = "id_dynamic_keymap_macro_reset", arg[arg.id_dynamic_keymap_get_layer_count = 17] = "id_dynamic_keymap_get_layer_count", arg[arg.id_dynamic_keymap_get_buffer = 18] = "id_dynamic_keymap_get_buffer", arg[arg.id_dynamic_keymap_set_buffer = 19] = "id_dynamic_keymap_set_buffer", arg[arg.id_vial_prefix = 254] = "id_vial_prefix", arg[arg.id_unhandled = 255] = 'id_unhandled', arg))(Od || {}),
  xd = (arg => (arg[arg.general = 0] = "general", arg[arg.lt0 = 64] = "lt0", arg[arg.lt1 = 65] = "lt1", arg[arg.lt2 = 66] = "lt2", arg[arg.lt3 = 67] = "lt3", arg[arg.layer = 82] = "layer", arg[arg.swap = 86] = "swap", arg[arg.tapDance = 87] = "tapDance", arg[arg.magic = 112] = "magic", arg[arg.midi = 113] = "midi", arg[arg.sequencer = 114] = "sequencer", arg[arg.programming = 116] = "programming", arg[arg.macro = 119] = 'macro', arg[arg.light = 120] = 'light', arg[arg.system = 124] = "system", arg[arg.kbAndUser = 126] = "kbAndUser", arg))(xd || {}),
  Kd = (arg => (arg[arg.SS_TAP_CODE = 1] = "SS_TAP_CODE", arg[arg.SS_DOWN_CODE = 2] = "SS_DOWN_CODE", arg[arg.SS_UP_CODE = 3] = "SS_UP_CODE", arg[arg.SS_DELAY_CODE = 4] = "SS_DELAY_CODE", arg[arg.VIAL_MACRO_EXT_TAP = 5] = "VIAL_MACRO_EXT_TAP", arg[arg.VIAL_MACRO_EXT_DOWN = 6] = 'VIAL_MACRO_EXT_DOWN', arg[arg.VIAL_MACRO_EXT_UP = 7] = "VIAL_MACRO_EXT_UP", arg))(Kd || {}),
  Ad = (arg => (arg[arg.normal = 0] = 'normal', arg[arg.erase = 1] = "erase", arg[arg.write = 2] = "write", arg[arg.eraseAndWrite = 3] = "eraseAndWrite", arg))(Ad || {}),
  Id = (arg => (arg[arg.customId = 150] = "customId", arg[arg.oneTogTh = 3] = 'oneTogTh', arg[arg.bufferTogTh = 13] = "bufferTogTh", arg[arg.oneRt = 7] = "oneRt", arg[arg.bufferRt = 14] = "bufferRt", arg[arg.deadBand = 11] = "deadBand", arg[arg.lightInfo = 65] = "lightInfo", arg[arg.mixAxle = 16] = "mixAxle", arg[arg.iap = 152] = "iap", arg[arg.calibrate = 8] = 'calibrate', arg[arg.feature = 17] = "feature", arg[arg.dks = 15] = "dks", arg[arg.setCustomLamplight = 66] = "setCustomLamplight", arg[arg.getCustomLamplight = 69] = "getCustomLamplight", arg[arg.saveLamplight = 18] = "saveLamplight", arg[arg.entryOp = 13] = 'entryOp', arg[arg.tapDanceGet = 1] = 'tapDanceGet', arg[arg.tapDanceSet = 2] = "tapDanceSet", arg[arg.layer = 19] = 'layer', arg[arg.dataReporting = 20] = "dataReporting", arg[arg.resetAll = 21] = 'resetAll', arg[arg.realTimeAdcAxle = 9] = "realTimeAdcAxle", arg[arg.realTimeTripAxle = 10] = "realTimeTripAxle", arg[arg.realTimeAdcAxleBuffer = 22] = "realTimeAdcAxleBuffer", arg[arg.realTimeTripAxleBuffer = 23] = "realTimeTripAxleBuffer", arg[arg.calibrationStart = 24] = "calibrationStart", arg[arg.calibrationFinish = 25] = 'calibrationFinish', arg[arg.completeStatusBuffer = 27] = "completeStatusBuffer", arg[arg.adcTripCompStatusBuffer = 28] = "adcTripCompStatusBuffer", arg[arg.bottomOptimizeSwitch = 29] = "bottomOptimizeSwitch", arg[arg.gameMode = 30] = "gameMode", arg[arg.calibration = 31] = "calibration", arg[arg.rs = 32] = 'rs', arg[arg.extraLight = 33] = "extraLight", arg[arg.physical = 34] = 'physical', arg[arg.profile = 35] = "profile", arg[arg.travel = 36] = 'travel', arg[arg.aiMatch = 37] = 'aiMatch', arg[arg.lightOff = 38] = "lightOff", arg))(Id || {}),
  Pd = (arg => (arg[arg.START_CFG = 1] = "START_CFG", arg[arg.SAVE_CFG = 2] = "SAVE_CFG", arg[arg.GET_KEY = 3] = "GET_KEY", arg[arg.GET_KEY_BUFFER = 4] = 'GET_KEY_BUFFER', arg[arg.SET_KEY = 5] = "SET_KEY", arg[arg.SET_KEY_BUFFER = 6] = "SET_KEY_BUFFER", arg[arg.SET_KEY_ALL = 7] = "SET_KEY_ALL", arg))(Pd || {}),
  Md = (arg => (arg[arg.RT = 0] = 'RT', arg[arg.COMPETITIVE = 1] = 'COMPETITIVE', arg[arg.ADVANCED_KEY = 2] = "ADVANCED_KEY", arg[arg.BAN = 3] = "BAN", arg[arg.PROFILE = 10] = "PROFILE", arg))(Md || {}),
  Td = (arg => (arg[arg.NONE = 0] = 'NONE', arg[arg.RS = 1] = 'RS', arg[arg.SOCD = 2] = 'SOCD', arg[arg.SOCD_KEY1 = 3] = 'SOCD_KEY1', arg[arg.SOCD_KEY2 = 4] = "SOCD_KEY2", arg[arg.SOCD_BALANCE = 5] = "SOCD_BALANCE", arg[arg.OKS = 6] = "OKS", arg))(Td || {}),
  Rd = (arg => (arg[arg.get = 1] = "get", arg[arg.getBuffer = 2] = "getBuffer", arg[arg.set = 3] = "set", arg[arg.setBuffer = 4] = "setBuffer", arg))(Rd || {}),
  Ed = (arg => (arg[arg.get = 1] = "get", arg[arg.getBuffer = 2] = "getBuffer", arg[arg.set = 3] = "set", arg[arg.setBuffer = 4] = 'setBuffer', arg))(Ed || {}),
  Bd = (arg => (arg[arg.noneSt = 0] = "noneSt", arg[arg.defaultLayerSt = 1] = 'defaultLayerSt', arg[arg.swapWasdSt = 2] = "swapWasdSt", arg[arg.macosSt = 3] = "macosSt", arg[arg.winLockSt = 4] = 'winLockSt', arg[arg.nKroSt = 5] = "nKroSt", arg[arg.physical = 7] = 'physical', arg[arg.light = 8] = "light", arg))(Bd || {});
class KeyAction3 {
  constructor(arg1, arg) {
    V(this, "dataView");
    V(this, "offset");
    this.dataView = arg1;
    this.offset = arg;
  }
  get ["i18nText"]() {
    return "Unknown";
  }
  get ['original']() {
    return {
      dataView: this.dataView,
      offset: this.offset
    };
  }
  get ["keyClass"]() {
    return this.dataView.getUint8(this.offset);
  }
  get ["keyId"]() {
    return this.dataView.getUint8(this.offset + 1);
  }
  static ["createDataView"](arg2, arg1) {
    const value = new DataView(new ArrayBuffer(2));
    value.setUint8(0, arg2);
    value.setUint8(1, arg1);
    return value;
  }
  static ["fromDataView"](arg, arg1) {
    switch (arg.getUint8(arg1)) {
      case xd.lt0:
      case xd.lt1:
      case xd.lt2:
      case xd.lt3:
        return new LTKeyAction2(arg, arg1);
      case xd.layer:
        return new Nd(arg, arg1);
      case xd.swap:
        return new zd(arg, arg1);
      case xd.magic:
        return new Wd(arg, arg1);
      case xd.midi:
        return new Yd(arg, arg1);
      case xd.sequencer:
        return new qd(arg, arg1);
      case xd.programming:
        return new Xd(arg, arg1);
      case xd.macro:
        return new Qd(arg, arg1);
      case xd.light:
        return new tg(arg, arg1);
      case xd.system:
        return new sg(arg, arg1);
      case xd.kbAndUser:
        return new ag(arg, arg1);
      case xd.general:
        return 1 === arg.getUint8(arg1 + 1) ? new GeneralNextKeyAction(arg, arg1) : new Vd(arg, arg1);
      case xd.tapDance:
        return new og(arg, arg1);
      default:
        return new KeyAction3(arg, arg1);
    }
  }
  ['toJSON']() {
    return {
      keyClass: this.keyClass,
      keyId: this.keyId
    };
  }
  ["toString"]() {
    return Array.from([this.keyClass, this.keyId]).map(arg => arg.toString().padStart(2, '0')).join('');
  }
  ['toString2']() {
    return JSON.stringify({
      dataView: Array.from(new Uint8Array(this.dataView.buffer)),
      offset: this.offset
    });
  }
  ["toObject"]() {
    return {
      dataView: this.dataView,
      offset: this.offset
    };
  }
}
class GeneralNextKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "Use the next lowest non-transparent key";
  }
  static ["create"]() {
    return new Vd(super.createDataView(this.TYPE, 1), 0);
  }
}
V(GeneralNextKeyAction, "TYPE", xd.general);
const Ld = class _GeneralKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.keyboardKey";
  }
  static ["create"](arg) {
    return new _GeneralKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V(Ld, "TYPE", xd.general);
let Vd = Ld;
const Fd = class _LayerKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.layer";
  }
  static ["create"](arg) {
    return new _LayerKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V(Fd, "TYPE", xd.layer);
let Nd = Fd;
const Gd = class _SwapKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.swap";
  }
  static ["create"](arg) {
    return new _SwapKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V(Gd, "TYPE", xd.swap);
let zd = Gd;
const Hd = class _MagicKeyAction extends KeyAction3 {
  get ['i18nText']() {
    return "key.magic";
  }
  static ['create'](arg) {
    return new _MagicKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V(Hd, 'TYPE', xd.magic);
let Wd = Hd;
const jd = class _MIDIKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return 'key.midi';
  }
  static ["create"](arg) {
    return new _MIDIKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V(jd, "TYPE", xd.midi);
let Yd = jd;
const $d = class _SequencerKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return 'key.midi';
  }
  static ["create"](arg) {
    return new _SequencerKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V($d, "TYPE", xd.sequencer);
let qd = $d;
const Jd = class _ProgrammingKeyAction extends KeyAction3 {
  get ['i18nText']() {
    return "key.programming";
  }
  static ["create"](arg) {
    return new _ProgrammingKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V(Jd, "TYPE", xd.programming);
let Xd = Jd;
const Zd = class _MacroKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.macroKey";
  }
  static ['create'](arg) {
    return new _MacroKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V(Zd, "TYPE", xd.macro);
let Qd = Zd;
const eg = class _LightKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.light";
  }
  static ["create"](arg) {
    return new _LightKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V(eg, "TYPE", xd.light);
let tg = eg;
const rg = class _SystemKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.system";
  }
  static ["create"](arg) {
    return new _SystemKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V(rg, "TYPE", xd.system);
let sg = rg;
const ng = class _KbAndUserKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return 'key.kbAndUser';
  }
  static ["create"](arg) {
    return new _KbAndUserKeyAction(super.createDataView(this.TYPE, arg), 0);
  }
};
V(ng, "TYPE", xd.kbAndUser);
let ag = ng;
class LTKeyAction2 extends KeyAction3 {
  get ["i18nText"]() {
    return 'key.lt';
  }
  static ["create"](arg) {
    return new LTKeyAction2(super.createDataView(arg, 0), 0);
  }
}
const ig = class _TapDanceKeyAction extends KeyAction3 {
  get ['i18nText']() {
    return "Change Key Menu." + (this.keyId <= 19 ? 'mt.title' : "tgl.title");
  }
  static ['create'](arg) {
    return new _TapDanceKeyAction(super.createDataView(_TapDanceKeyAction.TYPE, arg), 0);
  }
};
V(ig, "TYPE", xd.tapDance);
let og = ig;
class MacroAction {
  constructor(arg2, arg1, arg) {
    V(this, "raw");
    V(this, "offset");
    V(this, "length");
    this.raw = arg2;
    this.offset = arg1;
    this.length = arg;
  }
  get ["count"]() {
    return this.length;
  }
  get ['dataView']() {
    return new DataView(this.raw.buffer.slice(this.offset, this.offset + this.length));
  }
  static ["fromDataView"](arg1, arg) {
    switch (arg1.getUint8(arg + 1)) {
      case Kd.SS_TAP_CODE:
        return new cg(arg1, arg, 3);
      case Kd.SS_DOWN_CODE:
        return new fg(arg1, arg, 3);
      case Kd.SS_UP_CODE:
        return new dg(arg1, arg, 3);
      case Kd.SS_DELAY_CODE:
        return new vg(arg1, arg, 4);
      case Kd.VIAL_MACRO_EXT_TAP:
        return new mg(arg1, arg, 4);
      case Kd.VIAL_MACRO_EXT_DOWN:
        return new yg(arg1, arg, 4);
      case Kd.VIAL_MACRO_EXT_UP:
        return new bg(arg1, arg, 4);
    }
  }
  ['toJSON']() {
    return {
      length: this.length,
      data: Array.from(new Uint8Array(this.dataView.buffer))
    };
  }
}
V(MacroAction, "size", 3);
const ug = class _MacroTapKeyAction extends MacroAction {
  get ["keycode"]() {
    return Vd.create(this.raw.getUint8(this.offset + 2));
  }
  static ['create'](arg1) {
    const value = new DataView(new ArrayBuffer(this.size));
    value.setUint8(0, 1);
    value.setUint8(1, this.TYPE);
    value.setUint8(2, arg1.keyId);
    return new _MacroTapKeyAction(value, 0, this.size);
  }
};
V(ug, "TYPE", Kd.SS_TAP_CODE);
let cg = ug;
const lg = class _MacroDownKeyAction extends MacroAction {
  get ['keycode']() {
    return Vd.create(this.raw.getUint8(this.offset + 2));
  }
  static ['create'](arg1) {
    const value = new DataView(new ArrayBuffer(this.size));
    value.setUint8(0, 1);
    value.setUint8(1, this.TYPE);
    value.setUint8(2, arg1.keyId);
    return new _MacroDownKeyAction(value, 0, this.size);
  }
};
V(lg, "TYPE", Kd.SS_DOWN_CODE);
let fg = lg;
const hg = class _MacroUpKeyAction extends MacroAction {
  get ['keycode']() {
    return Vd.create(this.raw.getUint8(this.offset + 2));
  }
  static ["create"](arg) {
    const value1 = new DataView(new ArrayBuffer(this.size));
    value1.setUint8(0, 1);
    value1.setUint8(1, this.TYPE);
    value1.setUint8(2, arg.keyId);
    return new _MacroUpKeyAction(value1, 0, this.size);
  }
};
V(hg, 'TYPE', Kd.SS_UP_CODE);
let dg = hg;
const gg = class _MacroTapExtKeyAction extends MacroAction {
  get ["keycode"]() {
    const value = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
    return KeyAction3.fromDataView(value, 0);
  }
  static ["create"](arg) {
    const value1 = new DataView(new ArrayBuffer(this.size));
    value1.setUint8(0, 1);
    value1.setUint8(1, this.TYPE);
    value1.setUint8(2, arg.keyId);
    value1.setUint8(3, arg.keyClass);
    return new _MacroTapExtKeyAction(value1, 0, this.size);
  }
};
V(gg, "size", 4);
V(gg, "TYPE", Kd.VIAL_MACRO_EXT_TAP);
let mg = gg;
const pg = class _MacroDownExtKeyAction extends MacroAction {
  get ["keycode"]() {
    const value = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
    return KeyAction3.fromDataView(value, 0);
  }
  static ["create"](arg) {
    const value1 = new DataView(new ArrayBuffer(this.size));
    value1.setUint8(0, 1);
    value1.setUint8(1, this.TYPE);
    value1.setUint8(2, arg.keyId);
    value1.setUint8(3, arg.keyClass);
    return new _MacroDownExtKeyAction(value1, 0, this.size);
  }
};
V(pg, "size", 4);
V(pg, "TYPE", Kd.VIAL_MACRO_EXT_DOWN);
let yg = pg;
const wg = class _MacroUpExtKeyAction extends MacroAction {
  get ["keycode"]() {
    const value = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
    return KeyAction3.fromDataView(value, 0);
  }
  static ["create"](arg) {
    const value1 = new DataView(new ArrayBuffer(this.size));
    value1.setUint8(0, 1);
    value1.setUint8(1, this.TYPE);
    value1.setUint8(2, arg.keyId);
    value1.setUint8(3, arg.keyClass);
    return new _MacroUpExtKeyAction(value1, 0, this.size);
  }
};
V(wg, "size", 4);
V(wg, 'TYPE', Kd.VIAL_MACRO_EXT_UP);
let bg = wg;
const _g = class _MacroDelayAction extends MacroAction {
  get ["delay"]() {
    const value = new DataView(new ArrayBuffer(2));
    value.setUint8(0, this.raw.getUint8(this.offset + 2) - 1);
    value.setUint8(1, this.raw.getUint8(this.offset + 3) - 1);
    return value.getUint16(0, true);
  }
  static ['create'](arg1) {
    const value = new DataView(new ArrayBuffer(2));
    value.setUint16(0, arg1, true);
    const value3 = value.getUint8(0) + 1,
      value2 = value.getUint8(1) + 1,
      value4 = new DataView(new ArrayBuffer(this.size));
    value4.setUint8(0, 1);
    value4.setUint8(1, this.TYPE);
    value4.setUint8(2, value3 > 255 ? 255 : value3);
    value4.setUint8(3, value2 > 255 ? 255 : value2);
    return new _MacroDelayAction(value4, 0, this.size);
  }
};
V(_g, "size", 4);
V(_g, "TYPE", Kd.SS_DELAY_CODE);
let vg = _g;
const kg = class _DynamicKeyStrokeAction {
  constructor(arg1, arg) {
    V(this, "raw");
    V(this, "offset");
    this.raw = arg1;
    this.offset = arg;
  }
  get ["dataView"]() {
    const value = new DataView(new ArrayBuffer(_DynamicKeyStrokeAction.size), 0);
    value.setUint8(0, this.raw.getUint8(this.offset));
    value.setUint8(1, this.raw.getUint8(this.offset + 1));
    value.setUint8(2, this.raw.getUint8(this.offset + 2));
    value.setUint8(3, this.raw.getUint8(this.offset + 3));
    return value;
  }
  get ["statusArray"]() {
    const value = this.raw.getUint16(this.offset);
    return [value >> 0 & 1, value >> 1 & 1, value >> 2 & 1, value >> 3 & 1, value >> 4 & 1, value >> 5 & 1, value >> 6 & 1, value >> 7 & 1, value >> 8 & 1, value >> 9 & 1];
  }
  get ["status"]() {
    const value = this.raw.getUint16(this.offset);
    return {
      bit0: value >> 0 & 1,
      bit1: value >> 1 & 1,
      bit2: value >> 2 & 1,
      bit3: value >> 3 & 1,
      bit4: value >> 4 & 1,
      bit5: value >> 5 & 1,
      bit6: value >> 6 & 1,
      bit7: value >> 7 & 1,
      bit8: value >> 8 & 1,
      bit9: value >> 9 & 1
    };
  }
  set ["status"](arg) {
    this.raw.setUint16(this.offset, (arg.bit0 || 0) << 0 | (arg.bit1 || 0) << 1 | (arg.bit2 || 0) << 2 | (arg.bit3 || 0) << 3 | (arg.bit4 || 0) << 4 | (arg.bit5 || 0) << 5 | (arg.bit6 || 0) << 6 | (arg.bit7 || 0) << 7 | (arg.bit8 || 0) << 8 | (arg.bit9 || 0) << 9);
  }
  get ['keyCode']() {
    return KeyAction3.fromDataView(this.raw, this.offset + 2);
  }
  set ["keyCode"](arg) {
    this.raw.setUint8(this.offset + 2, arg.keyClass);
    this.raw.setUint8(this.offset + 3, arg.keyId);
  }
  static ['fromDataView'](arg, arg1) {
    return new _DynamicKeyStrokeAction(arg, arg1);
  }
  static ["create"](arg, arg2) {
    const value1 = new _DynamicKeyStrokeAction(new DataView(new ArrayBuffer(_DynamicKeyStrokeAction.size)), 0);
    value1.status = arg;
    value1.keyCode = arg2;
    return value1;
  }
};
V(kg, "size", 4);
let Cg = kg;
class OneKeyAction2 extends Dd {
  get ['layer']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["layer"](arg) {
    this.raw.setUint8(this.baseOffset, arg);
  }
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ["row"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  get ['col']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["col"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["keyAction"]() {
    return KeyAction3.fromDataView(this.raw, this.baseOffset + 3);
  }
  set ['keyAction'](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg.keyClass);
    this.raw.setUint8(this.baseOffset + 4, arg.keyId);
  }
  static ["get"](arg3, arg2, arg1) {
    const value = new OneKeyAction2(this.getData(), Od.id_dynamic_keymap_get_keycode);
    value.layer = arg3;
    value.row = arg2;
    value.col = arg1;
    return value;
  }
  static ["create"](arg3, arg1, arg, arg4) {
    const value2 = new OneKeyAction2(this.getData(), Od.id_dynamic_keymap_set_keycode);
    value2.layer = arg3;
    value2.row = arg1;
    value2.col = arg;
    value2.keyAction = arg4;
    return value2;
  }
}
class BufferKeyAction2 extends Dd {
  get ["offset"]() {
    return this.raw.getUint16(this.baseOffset);
  }
  set ['offset'](arg) {
    this.raw.setUint16(this.baseOffset, arg);
  }
  get ["length"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["length"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["keyActionList"]() {
    return Array.from({
      length: this.length / 2
    }).map((arg, arg1) => KeyAction3.fromDataView(this.raw, this.baseOffset + 3 + 2 * arg1));
  }
  set ["keyActionList"](arg) {
    for (let value = 0; value < arg.length; value++) {
      this.raw.setUint8(this.baseOffset + 3 + 2 * value, arg[value].keyClass);
      this.raw.setUint8(this.baseOffset + 4 + 2 * value, arg[value].keyId);
    }
  }
  static ['get'](arg1, arg2) {
    const value = new BufferKeyAction2(this.getData(), Od.id_dynamic_keymap_get_buffer);
    value.offset = arg1;
    value.length = arg2;
    return value;
  }
  static ['create'](arg3, arg1, arg2) {
    const value = new BufferKeyAction2(this.getData(), Od.id_dynamic_keymap_set_buffer);
    value.offset = arg3;
    value.length = arg1;
    value.keyActionList = arg2;
    return value;
  }
}
class MacroCount2 extends Dd {
  get ["count"]() {
    return this.raw.getUint8(1);
  }
  static ['get']() {
    return new MacroCount2(this.getData(), Od.id_dynamic_keymap_macro_get_count);
  }
}
class MacroBufferSize2 extends Dd {
  get ["size"]() {
    return this.raw.getUint16(1);
  }
  static ["get"]() {
    return new MacroBufferSize2(this.getData(), Od.id_dynamic_keymap_macro_get_buffer_size);
  }
}
class MacroBuffer2 extends Dd {
  get ['sz']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['sz'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ['offset']() {
    return this.raw.getUint16(this.baseOffset);
  }
  set ["offset"](arg) {
    this.raw.setUint16(this.baseOffset, arg);
  }
  get ['buffer']() {
    const value = this.raw.buffer.slice(this.baseOffset + 3, this.baseOffset + 3 + this.sz);
    return new DataView(value);
  }
  set ["buffer"](arg) {
    for (let value = 0; value < this.sz; value++) this.raw.setUint8(this.baseOffset + 3 + value, arg.getUint8(value));
  }
  static ["get"](arg2, arg) {
    const value1 = new MacroBuffer2(this.getData(), Od.id_dynamic_keymap_macro_get_buffer);
    value1.offset = arg2;
    value1.sz = arg;
    return value1;
  }
  static ["create"](arg1, arg2, arg3) {
    const value = new MacroBuffer2(this.getData(), Od.id_dynamic_keymap_macro_set_buffer);
    value.offset = arg1;
    value.sz = arg3;
    value.buffer = arg2;
    return value;
  }
}
class OneTogTh2 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["row"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["col"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ['col'](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ["apc"]() {
    return 0.02 * this.raw.getUint8(this.baseOffset + 4);
  }
  set ["apc"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg / 0.02);
  }
  static ["get"](arg2, arg1) {
    const value = new OneTogTh2(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    value.row = arg2;
    value.col = arg1;
    return value;
  }
  static ["create"](arg3, arg, arg1) {
    const value2 = new OneTogTh2(this.getData(), Od.id_set_keyboard_value);
    value2.raw.setUint8(this.baseOffset, Id.customId);
    value2.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    value2.row = arg3;
    value2.col = arg;
    value2.apc = arg1;
    return value2;
  }
  static ["fromDataView"](arg) {
    return new OneTogTh2(this.getData(), Od.id_set_keyboard_value).setRaw(arg);
  }
  ["toJSON"]() {
    return {
      row: this.row,
      col: this.col,
      apc: this.apc
    };
  }
}
class OneTogThV22 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['row'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ['col']() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ['col'](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ["apc"]() {
    return Number((0.01 * this.raw.getUint16(this.baseOffset + 4)).toFixed(2));
  }
  set ['apc'](arg) {
    this.raw.setUint16(this.baseOffset + 4, 100 * arg);
  }
  get ["apcArr"]() {
    return [this.raw.getUint8(this.baseOffset + 4), this.raw.getUint8(this.baseOffset + 5)];
  }
  static ['get'](arg1, arg) {
    const value2 = new OneTogThV22(this.getData(), Od.id_get_keyboard_value);
    value2.raw.setUint8(this.baseOffset, Id.customId);
    value2.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    value2.row = arg1;
    value2.col = arg;
    return value2;
  }
  static ['create'](arg2, arg, arg1) {
    const value3 = new OneTogThV22(this.getData(), Od.id_set_keyboard_value);
    value3.raw.setUint8(this.baseOffset, Id.customId);
    value3.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    value3.row = arg2;
    value3.col = arg;
    value3.apc = arg1;
    return value3;
  }
  static ["fromDataView"](arg) {
    return new OneTogTh2(this.getData(), Od.id_set_keyboard_value).setRaw(arg);
  }
  ["toJSON"]() {
    return {
      row: this.row,
      col: this.col,
      apc: this.apc
    };
  }
}
class OneTogThV3 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['row'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ['col']() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["col"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ["apc"]() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 4)).toFixed(3));
  }
  set ["apc"](arg) {
    this.raw.setUint16(this.baseOffset + 4, 1000 * arg);
  }
  get ["apcArr"]() {
    return [this.raw.getUint8(this.baseOffset + 4), this.raw.getUint8(this.baseOffset + 5)];
  }
  static ["get"](arg2, arg) {
    const value1 = new OneTogThV3(this.getData(), Od.id_get_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    value1.row = arg2;
    value1.col = arg;
    return value1;
  }
  static ["create"](arg3, arg1, arg2) {
    const value = new OneTogThV3(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    value.row = arg3;
    value.col = arg1;
    value.apc = arg2;
    return value;
  }
  static ["fromDataView"](arg) {
    return new OneTogTh2(this.getData(), Od.id_set_keyboard_value).setRaw(arg);
  }
  ["toJSON"]() {
    return {
      row: this.row,
      col: this.col,
      apc: this.apc
    };
  }
}
class BufferTogTh2 extends Dd {
  get ["offset"]() {
    return this.raw.getUint16(this.baseOffset + 4);
  }
  set ["offset"](arg) {
    this.raw.setUint16(this.baseOffset + 4, arg);
  }
  get ["size"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['size'](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg);
  }
  set ["flashOp"](arg) {
    this.raw.setUint8(this.baseOffset + 7, arg);
  }
  set ["togThsFlash"](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + 8 + value, arg.getUint8(value));
  }
  get ["togThs"]() {
    const value1 = this.size,
      value = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + value1);
    return new DataView(value);
  }
  set ['togThs'](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + 7 + value, arg.getUint8(value));
  }
  get ['togThsV2']() {
    const value1 = 2 * this.size,
      value = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + value1);
    return new DataView(value);
  }
  static ["get"](arg, arg2) {
    const value1 = new BufferTogTh2(this.getData(), Od.id_get_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.bufferTogTh);
    value1.offset = arg;
    value1.size = arg2;
    return value1;
  }
  static ["create"](arg1, arg3, arg4, arg2) {
    const value = new BufferTogTh2(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.bufferTogTh);
    value.offset = arg1;
    value.size = arg3;
    value.flashOp = arg4;
    value.togThsFlash = arg2;
    return value;
  }
}
class OneRTKeyInfo2 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["row"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["col"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["col"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ['on']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['on'](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ["release"]() {
    return 0.02 * this.raw.getUint8(this.baseOffset + 5);
  }
  set ["release"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg / 0.02);
  }
  get ['press']() {
    return 0.02 * this.raw.getUint8(this.baseOffset + 6);
  }
  set ["press"](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg / 0.02);
  }
  static ["get"](arg2, arg) {
    const value1 = new OneRTKeyInfo2(this.getData(), Od.id_get_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    value1.row = arg2;
    value1.col = arg;
    return value1;
  }
  static ['create'](arg1) {
    const value = new OneRTKeyInfo2(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    value.row = arg1.row;
    value.col = arg1.col;
    value.on = arg1.on;
    value.release = arg1.release;
    value.press = arg1.press;
    return value;
  }
  ["toJSON"]() {
    return {
      row: this.row,
      col: this.col,
      on: this.on,
      release: this.release,
      press: this.press
    };
  }
}
class OneRTKeyInfoV22 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['row'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ['col']() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["col"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ['on']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['on'](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ['release']() {
    return Number((0.01 * this.raw.getUint16(this.baseOffset + 5)).toFixed(2));
  }
  set ["release"](arg) {
    this.raw.setUint16(this.baseOffset + 5, 100 * arg);
  }
  get ["releaseArr"]() {
    return [this.raw.getUint8(this.baseOffset + 5), this.raw.getUint8(this.baseOffset + 6)];
  }
  get ["press"]() {
    return Number((0.01 * this.raw.getUint16(this.baseOffset + 7)).toFixed(2));
  }
  set ["press"](arg) {
    this.raw.setUint16(this.baseOffset + 7, 100 * arg);
  }
  get ["pressArr"]() {
    return [this.raw.getUint8(this.baseOffset + 7), this.raw.getUint8(this.baseOffset + 8)];
  }
  static ['get'](arg, arg1) {
    const value2 = new OneRTKeyInfoV22(this.getData(), Od.id_get_keyboard_value);
    value2.raw.setUint8(this.baseOffset, Id.customId);
    value2.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    value2.row = arg;
    value2.col = arg1;
    return value2;
  }
  static ["create"](arg) {
    const value1 = new OneRTKeyInfoV22(this.getData(), Od.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    value1.row = arg.row;
    value1.col = arg.col;
    value1.on = arg.on;
    value1.release = arg.release;
    value1.press = arg.press;
    return value1;
  }
  ["toJSON"]() {
    return {
      row: this.row,
      col: this.col,
      on: this.on,
      release: this.release,
      press: this.press
    };
  }
}
class OneRTKeyInfoV3 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["row"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["col"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["col"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ['on']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['on'](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ["release"]() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 5)).toFixed(3));
  }
  set ["release"](arg) {
    this.raw.setUint16(this.baseOffset + 5, 1000 * arg);
  }
  get ["releaseArr"]() {
    return [this.raw.getUint8(this.baseOffset + 5), this.raw.getUint8(this.baseOffset + 6)];
  }
  get ["press"]() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 7)).toFixed(3));
  }
  set ["press"](arg) {
    this.raw.setUint16(this.baseOffset + 7, 1000 * arg);
  }
  get ['pressArr']() {
    return [this.raw.getUint8(this.baseOffset + 7), this.raw.getUint8(this.baseOffset + 8)];
  }
  static ["get"](arg2, arg1) {
    const value = new OneRTKeyInfoV3(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    value.row = arg2;
    value.col = arg1;
    return value;
  }
  static ["create"](arg1) {
    const value = new OneRTKeyInfoV3(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    value.row = arg1.row;
    value.col = arg1.col;
    value.on = arg1.on;
    value.release = arg1.release;
    value.press = arg1.press;
    return value;
  }
  ['toJSON']() {
    return {
      row: this.row,
      col: this.col,
      on: this.on,
      release: this.release,
      press: this.press
    };
  }
}
class BufferRTKeyInfo2 extends Dd {
  get ["offset"]() {
    return this.raw.getUint16(this.baseOffset + 4);
  }
  set ["offset"](arg) {
    this.raw.setUint16(this.baseOffset + 4, arg);
  }
  get ["size"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['size'](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg);
  }
  get ['rt']() {
    const value1 = 3 * this.size,
      value = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + value1);
    return new DataView(value);
  }
  set ['rt'](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + 7 + value, arg.getUint8(value));
  }
  get ["rtV2"]() {
    const value1 = 5 * this.size,
      value = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + value1);
    return new DataView(value);
  }
  set ["flashOp"](arg) {
    this.raw.setUint8(this.baseOffset + 7, arg);
  }
  set ["rtFlash"](arg) {
    for (let value = 0; value < arg.byteLength; value++) this.raw.setUint8(this.baseOffset + 8 + value, arg.getUint8(value));
  }
  static ["get"](arg2, arg1) {
    const value = new BufferRTKeyInfo2(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.bufferRt);
    value.offset = arg2;
    value.size = arg1;
    return value;
  }
  static ["create"](arg, arg1, arg2, arg4) {
    const value3 = new BufferRTKeyInfo2(this.getData(), Od.id_set_keyboard_value);
    value3.raw.setUint8(this.baseOffset, Id.customId);
    value3.raw.setUint8(this.baseOffset + 1, Id.bufferRt);
    value3.offset = arg;
    value3.size = arg1;
    value3.flashOp = arg2;
    value3.rtFlash = arg4;
    return value3;
  }
}
class DeadBand2 extends Dd {
  get ["top"]() {
    return 0.02 * this.raw.getUint8(this.baseOffset + 2);
  }
  set ["top"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg / 0.02);
  }
  get ["bottom"]() {
    return 0.02 * this.raw.getUint8(this.baseOffset + 3);
  }
  set ["bottom"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg / 0.02);
  }
  static ['get']() {
    const value = new DeadBand2(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    return value;
  }
  static ['create'](arg1, arg2) {
    const value = new DeadBand2(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    value.top = arg1;
    value.bottom = arg2;
    return value;
  }
  ["toJSON"]() {
    return {
      top: this.top,
      bottom: this.bottom
    };
  }
}
class DeadBandV22 extends Dd {
  get ["top"]() {
    return 0.01 * this.raw.getUint16(this.baseOffset + 2);
  }
  set ["top"](arg) {
    this.raw.setUint16(this.baseOffset + 2, arg / 0.01);
  }
  get ["bottom"]() {
    return 0.01 * this.raw.getUint16(this.baseOffset + 4);
  }
  set ["bottom"](arg) {
    this.raw.setUint16(this.baseOffset + 4, arg / 0.01);
  }
  static ["get"]() {
    const value = new DeadBandV22(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    return value;
  }
  static ["create"](arg1, arg2) {
    const value = new DeadBandV22(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    value.top = arg1;
    value.bottom = arg2;
    return value;
  }
  ["toJSON"]() {
    return {
      top: this.top,
      bottom: this.bottom
    };
  }
}
class DeadBandV3 extends Dd {
  get ["top"]() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 2)).toFixed(3));
  }
  set ["top"](arg) {
    this.raw.setUint16(this.baseOffset + 2, 1000 * arg);
  }
  get ['bottom']() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 4)).toFixed(3));
  }
  set ["bottom"](arg) {
    this.raw.setUint16(this.baseOffset + 4, 1000 * arg);
  }
  static ["get"]() {
    const value = new DeadBandV3(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    return value;
  }
  static ["create"](arg, arg2) {
    const value1 = new DeadBandV3(this.getData(), Od.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    value1.top = arg;
    value1.bottom = arg2;
    return value1;
  }
  ["toJSON"]() {
    return {
      top: this.top,
      bottom: this.bottom
    };
  }
}
class LightInfo2 extends Dd {
  get ["effect"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ["effect"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["speed"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ["color"]() {
    const [value2, value1, value] = [this.raw.getUint8(this.baseOffset + 4), this.raw.getUint8(this.baseOffset + 5), this.raw.getUint8(this.baseOffset + 6)];
    return {
      r: value2,
      g: value1,
      b: value
    };
  }
  set ['color'](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg.r);
    this.raw.setUint8(this.baseOffset + 5, arg.g);
    this.raw.setUint8(this.baseOffset + 6, arg.b);
  }
  get ["brightness"]() {
    return this.raw.getUint8(this.baseOffset + 7);
  }
  set ["brightness"](arg) {
    this.raw.setUint8(this.baseOffset + 7, arg);
  }
  static ["get"]() {
    const value = new LightInfo2(this.getData(), Od.id_lighting_get_value);
    value.raw.setUint8(this.baseOffset, Id.lightInfo);
    return value;
  }
  static ["create"](arg) {
    const value1 = new LightInfo2(this.getData(), Od.id_lighting_set_value);
    value1.raw.setUint8(this.baseOffset, Id.lightInfo);
    value1.effect = arg.effect;
    value1.speed = arg.speed;
    value1.color = arg.color;
    value1.brightness = arg.brightness;
    return value1;
  }
  ["toJSON"]() {
    return {
      effect: this.effect,
      speed: this.speed,
      color: this.color,
      brightness: this.brightness
    };
  }
}
class ProtocolVersion2 extends Dd {
  get ["version"]() {
    return [this.raw.getUint8(this.baseOffset + 4).toString(16), this.raw.getUint8(this.baseOffset + 5).toString(16).padStart(2, '0')].join('.');
  }
  static ["get"]() {
    const value = new ProtocolVersion2(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    return value;
  }
  ["toJSON"]() {
    return {
      version: this.version
    };
  }
}
class KeyboardFeature2 extends Dd {
  get ["rgbArea"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["rgbArea"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["wasdSwitch"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["wasdSwitch"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ["macSwitch"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['macSwitch'](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ["winLock"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["winLock"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  get ["nKroSwitch"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ["nKroSwitch"](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg);
  }
  static ["get"]() {
    const value = new KeyboardFeature2(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.feature);
    return value;
  }
  static ["create"](arg) {
    const value1 = new KeyboardFeature2(this.getData(), Od.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.feature);
    value1.rgbArea = arg.rgbArea;
    value1.wasdSwitch = arg.wasdSwitch;
    value1.macSwitch = arg.macSwitch;
    value1.winLock = arg.winLock;
    value1.nKroSwitch = arg.nKroSwitch;
    return value1;
  }
  ["toJSON"]() {
    return {
      rgbArea: this.rgbArea,
      wasdSwitch: this.wasdSwitch,
      macSwitch: this.macSwitch,
      winLock: this.winLock,
      nKroSwitch: this.nKroSwitch
    };
  }
}
class ResetKeyboardDefault2 extends Dd {
  static ["getAll"]() {
    const value = new ResetKeyboardDefault2(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.resetAll);
    return value;
  }
  static ['getKeyAction']() {
    return new ResetKeyboardDefault2(this.getData(), Od.id_dynamic_keymap_reset);
  }
}
const Sg = class _Layer extends Dd {
  get ['layer']() {
    return _Layer.layerMap[this.raw.getUint8(this.baseOffset + 2)];
  }
  set ["layer"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["get"]() {
    const value = new _Layer(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.layer);
    return value;
  }
};
V(Sg, "layerMap", {
  1: 0,
  2: 0,
  4: 2,
  8: 2
});
let Ug = Sg;
class BottomOptimizeSwitch2 extends Dd {
  get ["opt"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['opt'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["get"]() {
    const value = new BottomOptimizeSwitch2(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.bottomOptimizeSwitch);
    return value;
  }
  static ["create"](arg) {
    const value1 = new BottomOptimizeSwitch2(this.getData(), Od.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.bottomOptimizeSwitch);
    value1.opt = arg;
    return value1;
  }
}
class GameModeSwitch2 extends Dd {
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["mode"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ['get']() {
    const value = new GameModeSwitch2(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.gameMode);
    return value;
  }
  static ["create"](arg) {
    const value1 = new GameModeSwitch2(this.getData(), Od.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.gameMode);
    value1.mode = arg;
    return value1;
  }
  ["toJSON"]() {
    return {
      mode: this.mode
    };
  }
}
class PhysicalKeysSwitch extends Dd {
  get ["type"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["type"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["mode"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  static ["get"]() {
    const value = new PhysicalKeysSwitch(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.physical);
    return value;
  }
  static ["create"](arg) {
    const value1 = new PhysicalKeysSwitch(this.getData(), Od.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.physical);
    value1.mode = arg.mode;
    value1.type = arg.type;
    return value1;
  }
  ["toJSON"]() {
    return {
      mode: this.mode,
      type: this.type
    };
  }
}
class ExtraLightInfo extends Dd {
  get ["mode"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["mode"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["colorful"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ['colorful'](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ['brightness']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["brightness"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["speed"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  get ["color"]() {
    const [value1, value2, value] = [this.raw.getUint8(this.baseOffset + 6), this.raw.getUint8(this.baseOffset + 7), this.raw.getUint8(this.baseOffset + 8)];
    return {
      r: value1,
      g: value2,
      b: value
    };
  }
  set ["color"](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg.r);
    this.raw.setUint8(this.baseOffset + 7, arg.g);
    this.raw.setUint8(this.baseOffset + 8, arg.b);
  }
  static ["get"]() {
    const value = new ExtraLightInfo(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.extraLight);
    return value;
  }
  static ["create"](arg) {
    const value1 = new ExtraLightInfo(this.getData(), Od.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.extraLight);
    value1.mode = arg.mode;
    value1.colorful = arg.colorful;
    value1.speed = arg.speed;
    value1.brightness = arg.brightness;
    value1.color = arg.color;
    return value1;
  }
  ["toJSON"]() {
    return {
      mode: this.mode
    };
  }
}
class ProfileInfo extends Dd {
  get ['profile']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['profile'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["get"]() {
    const value = new ProfileInfo(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.profile);
    return value;
  }
  static ["create"](arg1) {
    const value = new ProfileInfo(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.profile);
    value.profile = arg1.profile;
    return value;
  }
  ["toJSON"]() {
    return {
      mode: this.profile
    };
  }
}
class TravelInfo extends Dd {
  get ["travelMax"]() {
    const value = this.raw.getUint16(this.baseOffset + 2);
    return Number((0.001 * value).toFixed(3));
  }
  get ["travelMin"]() {
    const value = this.raw.getUint16(this.baseOffset + 4);
    return Number((0.001 * value).toFixed(3));
  }
  get ["travelStep"]() {
    const value = this.raw.getUint16(this.baseOffset + 6);
    return Number((0.001 * value).toFixed(3));
  }
  get ["rtMax"]() {
    const value = this.raw.getUint16(this.baseOffset + 8);
    return Number((0.001 * value).toFixed(3));
  }
  get ["rtMin"]() {
    const value = this.raw.getUint16(this.baseOffset + 10);
    return Number((0.001 * value).toFixed(3));
  }
  get ["rtStep"]() {
    const value = this.raw.getUint16(this.baseOffset + 12);
    return Number((0.001 * value).toFixed(3));
  }
  static ["get"]() {
    const value = new TravelInfo(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.travel);
    return value;
  }
}
class AiMatchSwitch extends Dd {
  get ["mode"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["mode"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["get"]() {
    const value = new AiMatchSwitch(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.aiMatch);
    return value;
  }
  static ["create"](arg) {
    const value1 = new AiMatchSwitch(this.getData(), Od.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.aiMatch);
    value1.mode = arg.mode;
    return value1;
  }
  ["toJSON"]() {
    return {
      mode: this.mode
    };
  }
}
class LightSleepTime extends Dd {
  get ['time']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['time'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  static ["get"]() {
    const value = new LightSleepTime(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.lightOff);
    return value;
  }
  static ['create'](arg) {
    const value1 = new LightSleepTime(this.getData(), Od.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.lightOff);
    value1.time = arg.time;
    return value1;
  }
  ['toJSON']() {
    return {
      time: this.time
    };
  }
}
class MixedAxisInfo extends Dd {
  get ["count"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  static ["get"]() {
    const value = new MixedAxisInfo(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    value.raw.setUint8(this.baseOffset + 4, 8);
    return value;
  }
}
class MixAxle2 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['row'](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["col"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["col"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ["subField"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["subField"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
}
class OneMixAxle2 extends MixAxle2 {
  get ['keyType']() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["keyType"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  static ["get"](arg, arg1) {
    const value2 = new OneMixAxle2(this.getData(), Od.id_get_keyboard_value);
    value2.raw.setUint8(this.baseOffset, Id.customId);
    value2.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    value2.row = arg;
    value2.col = arg1;
    value2.subField = Pd.GET_KEY;
    return value2;
  }
  static ["create"](arg3, arg2, arg1) {
    const value = new OneMixAxle2(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    value.subField = Pd.SET_KEY;
    value.row = arg3;
    value.col = arg2;
    value.keyType = arg1;
    return value;
  }
  static ["createAll"](arg1) {
    const value = new OneMixAxle2(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    value.subField = Pd.SET_KEY_ALL;
    value.keyType = arg1;
    return value;
  }
  ["toJSON"]() {
    return {
      row: this.row,
      col: this.col,
      keyType: this.keyType
    };
  }
}
class OptionMixAxle2 extends MixAxle2 {
  static ["start"]() {
    const value = new OptionMixAxle2(this.getData(), Od.id_get_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    value.subField = Pd.START_CFG;
    return value;
  }
  static ["save"]() {
    const value = new OptionMixAxle2(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    value.subField = Pd.SAVE_CFG;
    return value;
  }
}
class BufferMixAxle2 extends MixAxle2 {
  get ["offset"]() {
    return this.raw.getUint16(this.baseOffset + 5);
  }
  set ["offset"](arg) {
    this.raw.setUint16(this.baseOffset + 5, arg);
  }
  get ["size"]() {
    return this.raw.getUint8(this.baseOffset + 7);
  }
  set ["size"](arg) {
    this.raw.setUint8(this.baseOffset + 7, arg);
  }
  get ["keyTypes"]() {
    const value = this.raw.buffer.slice(this.baseOffset + 8, this.baseOffset + 8 + this.size);
    return new DataView(value);
  }
  set ["keyTypes"](arg) {
    for (let value = 0; value < this.size; value++) this.raw.setUint8(this.baseOffset + 8 + value, arg.getUint8(value));
  }
  static ["get"](arg2, arg) {
    const value1 = new BufferMixAxle2(this.getData(), Od.id_get_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    value1.subField = Pd.GET_KEY_BUFFER;
    value1.offset = arg2;
    value1.size = arg;
    return value1;
  }
  static ["create"](arg3, arg1, arg) {
    const value2 = new BufferMixAxle2(this.getData(), Od.id_set_keyboard_value);
    value2.raw.setUint8(this.baseOffset, Id.customId);
    value2.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    value2.subField = Pd.SET_KEY_BUFFER;
    value2.offset = arg3;
    value2.size = arg1;
    value2.keyTypes = arg;
    return value2;
  }
}
class AxleCalibrate2 extends Dd {
  static ["start"]() {
    const value = new AxleCalibrate2(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.calibrate);
    return value;
  }
}
class DynamicKeyStroke2 extends Dd {
  get ["subField"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["subField"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ['index']() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["index"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  get ["actions"]() {
    const value12 = this.raw.buffer.slice(this.baseOffset + 6, this.baseOffset + 6 + 16),
      value22 = value12.byteLength / 4,
      value4 = [];
    for (let value3 = 0; value3 < value22; value3++) {
      const value2 = value12.slice(4 * value3, 4 * value3 + 4),
        value = new DataView(value2),
        value1 = new Cg(value, 0);
      value4.push(value1);
    }
    return value4;
  }
  set ["actions"](arg) {
    for (let value3 = 0; value3 < arg.length; value3++) {
      const value2 = arg[value3].dataView;
      for (let value = 0; value < value2.byteLength; value++) this.raw.setUint8(this.baseOffset + 6 + 4 * value3 + value, value2.getUint8(value));
    }
  }
  static ["get"](arg) {
    const value1 = new DynamicKeyStroke2(this.getData(), Od.id_get_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.dks);
    value1.subField = Ed.get;
    value1.index = arg;
    return value1;
  }
  static ["create"](arg1, arg2) {
    const value = new DynamicKeyStroke2(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.dks);
    value.subField = Ed.set;
    value.index = arg1;
    value.actions = arg2;
    return value;
  }
}
class CustomLamplight2 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ["row"](arg) {
    this.raw.setUint8(this.baseOffset + 1, arg);
  }
  get ['col']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["col"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ["num"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["num"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg);
  }
  get ['colors']() {
    const value = this.raw.buffer.slice(this.baseOffset + 4, this.baseOffset + 4 + 3 * this.num);
    return rt.chunk(Array.from(new Uint8Array(value)), 3);
  }
  set ["colors"](arg) {
    const value1 = arg.flat();
    for (let value = 0; value < value1.length; value++) this.raw.setUint8(this.baseOffset + 4 + value, value1[value]);
  }
  static ["save"]() {
    const value = new CustomLamplight2(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.saveLamplight);
    return value;
  }
  static ["get"](arg, arg1, arg3) {
    const value2 = new CustomLamplight2(this.getData(), Od.id_custom_get_value);
    value2.raw.setUint8(this.baseOffset, Id.getCustomLamplight);
    value2.row = arg;
    value2.col = arg1;
    value2.num = arg3;
    return value2;
  }
  static ["create"](arg2, arg, arg1, arg4) {
    const value3 = new CustomLamplight2(this.getData(), Od.id_custom_set_value);
    value3.raw.setUint8(this.baseOffset, Id.setCustomLamplight);
    value3.row = arg2;
    value3.col = arg;
    value3.num = arg1;
    value3.colors = arg4;
    return value3;
  }
  ["toJSON"]() {
    return {
      row: this.row,
      col: this.col,
      num: this.num,
      colors: this.colors
    };
  }
}
class TapDance2 extends Dd {
  get ["index"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["index"](arg) {
    this.raw.setUint8(this.baseOffset + 2, arg);
  }
  get ['tap']() {
    const value = this.raw.buffer.slice(this.baseOffset + 3, this.baseOffset + 3 + 2);
    return KeyAction3.fromDataView(new DataView(value), 0);
  }
  set ["tap"](arg) {
    this.raw.setUint8(this.baseOffset + 3, arg.keyClass);
    this.raw.setUint8(this.baseOffset + 4, arg.keyId);
  }
  get ["hold"]() {
    const value = this.raw.buffer.slice(this.baseOffset + 5, this.baseOffset + 5 + 2);
    return KeyAction3.fromDataView(new DataView(value), 0);
  }
  set ["hold"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg.keyClass);
    this.raw.setUint8(this.baseOffset + 6, arg.keyId);
  }
  get ["timer"]() {
    return this.raw.getUint16(this.baseOffset + 7);
  }
  set ["timer"](arg) {
    this.raw.setUint16(this.baseOffset + 7, arg);
  }
  static ["get"](arg1) {
    const value = new TapDance2(this.getData(), Od.id_vial_prefix);
    value.raw.setUint8(this.baseOffset, Id.entryOp);
    value.raw.setUint8(this.baseOffset + 1, Id.tapDanceGet);
    value.index = arg1;
    return value;
  }
  static ['create'](arg2, arg) {
    const value1 = new TapDance2(this.getData(), Od.id_vial_prefix);
    value1.raw.setUint8(this.baseOffset, Id.entryOp);
    value1.raw.setUint8(this.baseOffset + 1, Id.tapDanceSet);
    value1.index = arg2;
    (null == arg ? void 0 : arg.tap) && (value1.tap = arg.tap);
    (null == arg ? void 0 : arg.hold) && (value1.hold = arg.hold);
    (null == arg ? void 0 : arg.timer) && (value1.timer = arg.timer);
    return value1;
  }
}
const Dg = class _DataReporting extends Dd {
  get ["baseOffset"]() {
    return _DataReporting.baseOffset;
  }
  get ["type"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  static ["get"]() {
    const [value2, value3, value] = _DataReporting.dataReporting,
      value1 = new _DataReporting(_DataReporting.getData(), value2);
    value1.raw.setUint8(this.baseOffset, value3);
    value1.raw.setUint8(this.baseOffset + 1, value);
    return value1;
  }
  static ["fromDataView"](arg) {
    return new _DataReporting(arg, rt.first(_DataReporting.dataReporting));
  }
};
V(Dg, 'baseOffset', 1);
V(Dg, "dataReporting", [Od.id_get_keyboard_value, Id.customId, Id.dataReporting]);
let Og = Dg;
class Calibration3 extends Dd {
  get ["size"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ["size"](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg);
  }
  get ['offset']() {
    return this.raw.getUint16(this.baseOffset + 4);
  }
  set ['offset'](arg) {
    this.raw.setUint16(this.baseOffset + 4, arg);
  }
  get ["completeStatusList"]() {
    const value2 = [];
    for (let value = 0; value < this.size; value++) value2.push(this.raw.getUint8(this.baseOffset + 7 + value));
    return value2;
  }
  get ['initStatusList']() {
    const value2 = [];
    for (let value = 0; value < this.size; value++) value2.push(this.raw.getUint8(this.baseOffset + 7 + value));
    return value2;
  }
  get ["adcTripCompStatusList"]() {
    const value2 = [];
    for (let value = 0; value < this.size; value++) value2.push([this.raw.getUint16(this.baseOffset + 7 + 4 * value), 0.02 * this.raw.getUint8(this.baseOffset + 7 + 4 * value + 2), this.raw.getUint8(this.baseOffset + 7 + 4 * value + 3)]);
    return value2;
  }
  get ["adcTripCompStatusListV2"]() {
    const value2 = [];
    for (let value = 0; value < this.size; value++) value2.push([this.raw.getUint16(this.baseOffset + 7 + 5 * value), 0.01 * this.raw.getUint16(this.baseOffset + 7 + 5 * value + 2), this.raw.getUint8(this.baseOffset + 7 + 5 * value + 4)]);
    return value2;
  }
  get ["adcTripCompStatusListV3"]() {
    const value2 = [];
    for (let value = 0; value < this.size; value++) value2.push([this.raw.getUint16(this.baseOffset + 7 + 5 * value), 0.001 * this.raw.getUint16(this.baseOffset + 7 + 5 * value + 2), this.raw.getUint8(this.baseOffset + 7 + 5 * value + 4)]);
    return value2;
  }
  static ["start"]() {
    const value = new Calibration3(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.calibrationStart);
    return value;
  }
  static ["finish"]() {
    const value = new Calibration3(this.getData(), Od.id_set_keyboard_value);
    value.raw.setUint8(this.baseOffset, Id.customId);
    value.raw.setUint8(this.baseOffset + 1, Id.calibrationFinish);
    return value;
  }
  static ["getCompleteStatusBuffer"](arg, arg1) {
    const value2 = new Calibration3(this.getData(), Od.id_get_keyboard_value);
    value2.raw.setUint8(this.baseOffset, Id.customId);
    value2.raw.setUint8(this.baseOffset + 1, Id.completeStatusBuffer);
    value2.offset = arg;
    value2.size = arg1;
    return value2;
  }
  static ["getAdcTripCompStatusBuffer"](arg2, arg) {
    const value1 = new Calibration3(this.getData(), Od.id_get_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.adcTripCompStatusBuffer);
    value1.offset = arg2;
    value1.size = arg;
    return value1;
  }
  static ["getInitStatusBuffer"](arg1, arg) {
    const value2 = new Calibration3(this.getData(), Od.id_get_keyboard_value);
    value2.raw.setUint8(this.baseOffset, Id.customId);
    value2.raw.setUint8(this.baseOffset + 1, Id.calibration);
    value2.offset = arg1;
    value2.size = arg;
    return value2;
  }
}
class RappySnappy2 extends Dd {
  get ['subField']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["subField"](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ["index"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ['index'](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  get ["mode"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['mode'](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg);
  }
  get ['id']() {
    return this.raw.getUint8(this.baseOffset + 7);
  }
  set ['id'](arg) {
    arg >= 26 && (arg -= 26);
    this.raw.setUint8(this.baseOffset + 7, arg);
  }
  get ["rsApcLv"]() {
    return Number((0.01 * this.raw.getUint16(this.baseOffset + 8)).toFixed(3));
  }
  set ['rsApcLv'](arg) {
    this.raw.setUint16(this.baseOffset + 8, 100 * arg);
  }
  get ["gapcSw"]() {
    return this.raw.getUint8(this.baseOffset + 10);
  }
  set ["gapcSw"](arg) {
    this.raw.setUint8(this.baseOffset + 10, arg);
  }
  get ["rtSw"]() {
    return this.raw.getUint8(this.baseOffset + 11);
  }
  set ['rtSw'](arg) {
    this.raw.setUint8(this.baseOffset + 11, arg);
  }
  get ["key1Row"]() {
    return this.raw.getUint8(this.baseOffset + 12);
  }
  set ["key1Row"](arg) {
    this.raw.setUint8(this.baseOffset + 12, arg);
  }
  get ["key1Col"]() {
    return this.raw.getUint8(this.baseOffset + 13);
  }
  set ['key1Col'](arg) {
    this.raw.setUint8(this.baseOffset + 13, arg);
  }
  get ["key2Row"]() {
    return this.raw.getUint8(this.baseOffset + 14);
  }
  set ["key2Row"](arg) {
    this.raw.setUint8(this.baseOffset + 14, arg);
  }
  get ["key2Col"]() {
    return this.raw.getUint8(this.baseOffset + 15);
  }
  set ['key2Col'](arg) {
    this.raw.setUint8(this.baseOffset + 15, arg);
  }
  get ["layer"]() {
    return this.raw.getUint8(this.baseOffset + 16);
  }
  set ["layer"](arg) {
    this.raw.setUint8(this.baseOffset + 16, arg);
  }
  static ['get'](arg) {
    const value1 = new RappySnappy2(this.getData(), Od.id_get_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.rs);
    value1.subField = Rd.get;
    value1.index = arg;
    value1.id = arg;
    return value1;
  }
  static ['create'](arg3, arg2, arg) {
    const value1 = new RappySnappy2(this.getData(), Od.id_set_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.rs);
    value1.raw.setUint8(this.baseOffset + 2, 0);
    value1.raw.setUint8(this.baseOffset + 3, 0);
    value1.subField = Rd.set;
    value1.index = arg3;
    value1.id = arg2;
    (null == arg ? void 0 : arg.mode) && (value1.mode = arg.mode);
    (null == arg ? void 0 : arg.rsApcLv) && (value1.rsApcLv = arg.rsApcLv);
    (null == arg ? void 0 : arg.gapcSw) && (value1.gapcSw = arg.gapcSw);
    (null == arg ? void 0 : arg.rtSw) && (value1.rtSw = arg.rtSw);
    (null == arg ? void 0 : arg.key1Row) && (value1.key1Row = arg.key1Row);
    (null == arg ? void 0 : arg.key1Col) && (value1.key1Col = arg.key1Col);
    (null == arg ? void 0 : arg.key2Row) && (value1.key2Row = arg.key2Row);
    (null == arg ? void 0 : arg.key2Col) && (value1.key2Col = arg.key2Col);
    (null == arg ? void 0 : arg.layer) && (value1.layer = arg.layer);
    return value1;
  }
}
class RappySnappyV3 extends Dd {
  get ["subField"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['subField'](arg) {
    this.raw.setUint8(this.baseOffset + 4, arg);
  }
  get ["index"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["index"](arg) {
    this.raw.setUint8(this.baseOffset + 5, arg);
  }
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['mode'](arg) {
    this.raw.setUint8(this.baseOffset + 6, arg);
  }
  get ['id']() {
    return this.raw.getUint8(this.baseOffset + 7);
  }
  set ['id'](arg) {
    arg >= 26 && (arg -= 26);
    this.raw.setUint8(this.baseOffset + 7, arg);
  }
  get ['rsApcLv']() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 8)).toFixed(3));
  }
  set ["rsApcLv"](arg) {
    this.raw.setUint16(this.baseOffset + 8, 1000 * arg);
  }
  get ["gapcSw"]() {
    return this.raw.getUint8(this.baseOffset + 10);
  }
  set ["gapcSw"](arg) {
    this.raw.setUint8(this.baseOffset + 10, arg);
  }
  get ["rtSw"]() {
    return this.raw.getUint8(this.baseOffset + 11);
  }
  set ["rtSw"](arg) {
    this.raw.setUint8(this.baseOffset + 11, arg);
  }
  get ["key1Row"]() {
    return this.raw.getUint8(this.baseOffset + 12);
  }
  set ['key1Row'](arg) {
    this.raw.setUint8(this.baseOffset + 12, arg);
  }
  get ["key1Col"]() {
    return this.raw.getUint8(this.baseOffset + 13);
  }
  set ["key1Col"](arg) {
    this.raw.setUint8(this.baseOffset + 13, arg);
  }
  get ["key2Row"]() {
    return this.raw.getUint8(this.baseOffset + 14);
  }
  set ["key2Row"](arg) {
    this.raw.setUint8(this.baseOffset + 14, arg);
  }
  get ["key2Col"]() {
    return this.raw.getUint8(this.baseOffset + 15);
  }
  set ["key2Col"](arg) {
    this.raw.setUint8(this.baseOffset + 15, arg);
  }
  get ['layer']() {
    return this.raw.getUint8(this.baseOffset + 16);
  }
  set ["layer"](arg) {
    this.raw.setUint8(this.baseOffset + 16, arg);
  }
  static ['get'](arg) {
    const value1 = new RappySnappyV3(this.getData(), Od.id_get_keyboard_value);
    value1.raw.setUint8(this.baseOffset, Id.customId);
    value1.raw.setUint8(this.baseOffset + 1, Id.rs);
    value1.subField = Rd.get;
    value1.index = arg;
    value1.id = arg;
    return value1;
  }
  static ['create'](arg1, arg, arg2) {
    const value3 = new RappySnappyV3(this.getData(), Od.id_set_keyboard_value);
    value3.raw.setUint8(this.baseOffset, Id.customId);
    value3.raw.setUint8(this.baseOffset + 1, Id.rs);
    value3.raw.setUint8(this.baseOffset + 2, 0);
    value3.raw.setUint8(this.baseOffset + 3, 0);
    value3.subField = Rd.set;
    value3.index = arg1;
    value3.id = arg;
    (null == arg2 ? void 0 : arg2.mode) && (value3.mode = arg2.mode);
    (null == arg2 ? void 0 : arg2.rsApcLv) && (value3.rsApcLv = arg2.rsApcLv);
    (null == arg2 ? void 0 : arg2.gapcSw) && (value3.gapcSw = arg2.gapcSw);
    (null == arg2 ? void 0 : arg2.rtSw) && (value3.rtSw = arg2.rtSw);
    (null == arg2 ? void 0 : arg2.key1Row) && (value3.key1Row = arg2.key1Row);
    (null == arg2 ? void 0 : arg2.key1Col) && (value3.key1Col = arg2.key1Col);
    (null == arg2 ? void 0 : arg2.key2Row) && (value3.key2Row = arg2.key2Row);
    (null == arg2 ? void 0 : arg2.key2Col) && (value3.key2Col = arg2.key2Col);
    (null == arg2 ? void 0 : arg2.layer) && (value3.layer = arg2.layer);
    return value3;
  }
}
class HidDevice6 extends WebHidGeneral {
  constructor() {
    super(...arguments);
    V(this, "mutex", new Mutex());
    V(this, "pendingTransfers", []);
  }
  ["onDeviceToHostReportReceived"](arg) {}
  async ["transferForResultAsync"](arg2) {
    var value1;
    const value3 = new DataView(arg2.buffer).getUint8(0);
    let value4;
    const value5 = new Promise(arg => {
        value4 = arg;
      }),
      value = {
        requestCode: value3,
        data: arg2,
        promiseResolve: value4
      };
    this.pendingTransfers.push(value);
    await (null == (value1 = this.device) ? void 0 : value1.sendReport(0, arg2));
    return value5;
  }
  async ["transferAsync"](arg1) {
    var value;
    await (null == (value = this.device) ? void 0 : value.sendReport(0, arg1));
  }
  ["inputReportListener"](arg) {
    super.inputReportListener(arg);
    this.handleInputReport(arg.data);
  }
  ['handleInputReport'](arg) {
    this.mutex.runExclusive(() => {
      const value1 = arg.getUint8(0);
      if (0 == value1) return void this.onDeviceToHostReportReceived(arg);
      let value2 = false;
      Array.from(new Uint8Array(arg.buffer.slice(0, 3))).join('') === Og.dataReporting.join('') && (Pr("data-reporting", Og.fromDataView(arg)), value2 = true);
      if (!value2) {
        for (const value of this.pendingTransfers) if (value.requestCode === value1) {
          value.promiseResolve(arg);
          this.pendingTransfers.splice(this.pendingTransfers.indexOf(value), 1);
          value2 = true;
          break;
        }
      }
      value2 || new Uint8Array(arg.buffer).toString();
    });
  }
}
const xg = class _BitKeyboard extends HidDevice6 {
  constructor() {
    super(...arguments);
    V(this, "version", '');
  }
  get ["isV2"]() {
    return true;
  }
  get ["isV3"]() {
    return true;
  }
  get ['hasAdvancedKey']() {
    const {
      custom: value
    } = this.getCustomData();
    return !value.advancedKeyVersion || Number(this.version) >= Number(value.advancedKeyVersion);
  }
  get ["deviceVersion"]() {
    return this.version;
  }
  async ['getAllKeyAction'](arg1, arg2, arg3) {
    const value4 = arg1 * arg2 * arg3 * 2 / 28,
      value3 = [];
    for (let value2 = 0; value2 < value4; value2++) {
      const value = await this.transferForResult(BufferKeyAction2.get(28 * value2, 28));
      value3.push(...value.keyActionList);
    }
    return value3;
  }
  async ["setAllKeyAction"](arg22) {
    const value1 = arg22.map(arg2 => arg2.map(arg => arg.flat()).flat()).flat(),
      value3 = value1.length / 14;
    for (let value2 = 0; value2 < value3; value2++) {
      const value = value1.slice(14 * value2, 14 * (value2 + 1));
      await this.transferForResult(BufferKeyAction2.create(28 * value2, 28, value));
    }
  }
  async ['getOneKeyAction'](arg, arg1, arg2) {
    return this.transferForResult(OneKeyAction2.get(arg, arg1, arg2));
  }
  async ["setOneKeyAction"](arg, arg2, arg1, arg3) {
    return this.transferForResult(OneKeyAction2.create(arg, arg2, arg1, arg3));
  }
  async ["getMacroCount"]() {
    return this.transferForResult(MacroCount2.get());
  }
  async ["getMacroBufferSize"]() {
    return this.transferForResult(MacroBufferSize2.get());
  }
  async ["getMacroBuffer"]() {
    const {
        count: value23
      } = await this.getMacroCount(),
      {
        size: value42
      } = await this.getMacroBufferSize(),
      value13 = [],
      value6 = Math.ceil(value42 / 28);
    for (let value2 = 0; value2 < value6; value2++) {
      const value = 28 * value2,
        value1 = await this.transferForResult(MacroBuffer2.get(value, 28));
      value13.push(...Array.from(new Uint8Array(value1.buffer.buffer)));
      if (value13.filter(arg => 0 === arg).length > value23) break;
    }
    const value4 = [];
    let value5 = [];
    for (const value of value13) {
      if (0 != value) value5.push(value);else {
        value4.push(value5);
        value5 = [];
      }
      if (value4.length >= value23) break;
    }
    const value32 = [];
    for (let value3 = 0; value3 < value4.length; value3++) {
      const value12 = value4[value3];
      if (0 === value12.length) {
        value32.push([]);
        continue;
      }
      let value2 = 0;
      const value22 = [];
      for (; value2 < value12.length;) {
        const value = new DataView(new Uint8Array(value12).buffer),
          value1 = MacroAction.fromDataView(value, value2);
        value2 += value1.count;
        value22.push(value1);
      }
      value32.push(value22);
    }
    return value32;
  }
  async ["setMacroBuffer"](arg4, arg5) {
    const value22 = await this.getMacroBuffer();
    value22[arg4] = arg5;
    const value12 = [];
    for (let value2 = 0; value2 < value22.length; value2++) {
      const value = value22[value2].map(arg => Array.from(new Uint8Array(arg.dataView.buffer))).flat();
      value12.push(value);
    }
    const value32 = value12.map(arg => arg.length ? [...arg, 0] : 0).flat(),
      value3 = rt.chunk(value32, 28);
    for (let value2 = 0; value2 < value3.length; value2++) {
      const value1 = 28 * value2,
        value = new DataView(new Uint8Array(value3[value2]).buffer);
      await this.transferForResult(MacroBuffer2.create(value1, value, value.byteLength));
    }
  }
  async ["getOneTogTh"](arg, arg1) {
    if (this.isV2) return this.transferForResult(OneTogThV22.get(arg, arg1));
    return this.transferForResult(OneTogTh2.get(arg, arg1));
  }
  async ['setOneTogTh'](arg1, arg2, arg) {
    if (this.isV2) return this.transferForResult(OneTogThV22.create(arg1, arg2, arg));
    return this.transferForResult(OneTogTh2.create(arg1, arg2, arg));
  }
  async ['getTogThAll'](arg13, arg22) {
    if (this.isV3) return this.getTogThAllV3(arg13, arg22);
    if (this.isV2) return this.getTogThAllV2(arg13, arg22);
    const value3 = Math.ceil(arg13 * arg22 / 24),
      value32 = [];
    for (let value2 = 0; value2 < value3; value2++) {
      const value = await this.transferForResult(BufferTogTh2.get(24 * value2, 24));
      value32.push(...new Uint8Array(value.togThs.buffer));
    }
    return rt.chunk(value32, arg22).map((arg2, arg12) => arg2.map((arg, arg1) => OneTogTh2.create(arg12, arg1, 0.02 * arg)));
  }
  async ["setTogThAll"](arg22) {
    if (this.isV3) return this.setTogThAllV3(arg22);
    if (this.isV2) return this.setTogThAllV2(arg22);
    const value3 = arg22.map(arg2 => arg2.map(arg => arg.apc / 0.02)).flat(),
      value12 = rt.chunk(value3, 23);
    for (let value2 = 0; value2 < value12.length; value2++) {
      const value = value12[value2];
      let value1 = Ad.normal;
      0 === value2 && (value1 = Ad.erase);
      value2 === value12.length - 1 && (value1 = Ad.write);
      await this.transferForResult(BufferTogTh2.create(23 * value2, 23, value1, new DataView(new Uint8Array(value).buffer)));
      0 !== value2 && value2 !== value12.length - 1 || (await Ng(200));
    }
  }
  async ['setTogThAllV2'](arg22) {
    const value4 = arg22.map(arg2 => arg2.map(arg => arg.apcArr).flat()).flat(),
      value12 = rt.chunk(value4, 22);
    for (let value3 = 0; value3 < value12.length; value3++) {
      const value2 = value12[value3];
      let value = Ad.normal;
      0 === value3 && (value = Ad.erase);
      value3 === value12.length - 1 && (value = Ad.write);
      const value1 = BufferTogTh2.create(11 * value3, 11, value, new DataView(new Uint8Array(value2).buffer));
      await this.transferForResult(value1);
      0 !== value3 && value3 !== value12.length - 1 || (await Ng(200));
    }
  }
  async ["setTogThAllV3"](arg3) {
    const value22 = arg3.map(arg2 => arg2.map(arg => arg.apcArr).flat()).flat(),
      value12 = rt.chunk(value22, 22);
    for (let value3 = 0; value3 < value12.length; value3++) {
      const value1 = value12[value3];
      let value2 = Ad.normal;
      0 === value3 && (value2 = Ad.erase);
      value3 === value12.length - 1 && (value2 = Ad.write);
      const value = BufferTogTh2.create(11 * value3, 11, value2, new DataView(new Uint8Array(value1).buffer));
      await this.transferForResult(value);
      0 !== value3 && value3 !== value12.length - 1 || (await Ng(200));
    }
  }
  async ["getOneRTKeyInfo"](arg, arg1) {
    if (this.isV2) return this.transferForResult(OneRTKeyInfoV22.get(arg, arg1));
    return this.transferForResult(OneRTKeyInfo2.get(arg, arg1));
  }
  async ["getRTKeyInfoAll"](arg3, arg22) {
    if (this.isV3) return this.getRTKeyInfoAllV3(arg3, arg22);
    if (this.isV2) return this.getRTKeyInfoAllV2(arg3, arg22);
    const value6 = Math.ceil(arg3 * arg22 / 8),
      value1 = [];
    for (let value2 = 0; value2 < value6; value2++) {
      const value = await this.transferForResult(BufferRTKeyInfo2.get(8 * value2, 8));
      value1.push(...new Uint8Array(value.rt.buffer));
    }
    return rt.chunk(rt.chunk(value1, 3), arg22).map((arg2, arg12) => arg2.map((arg, arg1) => {
      const value3 = OneRTKeyInfo2.get(arg12, arg1),
        [value2, value4, value5] = arg;
      value3.on = value2;
      value3.release = 0.02 * value4;
      value3.press = 0.02 * value5;
      return value3;
    }));
  }
  async ["setRTKeyInfoAll"](arg1) {
    if (this.isV3) return this.setRTKeyInfoAllV3(arg1);
    if (this.isV2) return this.setRTKeyInfoAllV2(arg1);
    const value22 = arg1.map(arg2 => arg2.map(arg => [arg.on, arg.release / 0.02, arg.press / 0.02]).flat()).flat(),
      value3 = rt.chunk(value22, 18);
    for (let value2 = 0; value2 < value3.length; value2++) {
      const value = value3[value2];
      let value1 = Ad.normal;
      0 === value2 && (value1 = Ad.erase);
      value2 === value3.length - 1 && (value1 = Ad.write);
      await this.transferForResult(BufferRTKeyInfo2.create(6 * value2, 6, value1, new DataView(new Uint8Array(value).buffer)));
      0 !== value2 && value2 !== value3.length - 1 || (await Ng(200));
    }
  }
  async ["setOneRTKeyInfo"](arg) {
    if (arg instanceof OneRTKeyInfoV22) return this.transferForResult(OneRTKeyInfoV22.create(arg));
    return this.transferForResult(OneRTKeyInfo2.create(arg));
  }
  async ["getDeadBand"]() {
    if (this.isV3) return this.getDeadBandV3();
    if (this.isV2) return this.getDeadBandV2();
    return this.transferForResult(DeadBand2.get());
  }
  async ["setDeadBand"](arg, arg1) {
    if (this.isV3) return this.setDeadBandV3(arg, arg1);
    if (this.isV2) return this.setDeadBandV2(arg, arg1);
    return this.transferForResult(DeadBand2.create(arg, arg1));
  }
  async ['getLightInfo']() {
    return this.transferForResult(LightInfo2.get());
  }
  async ["setLightInfo"](arg) {
    return this.transferForResult(LightInfo2.create(arg));
  }
  async ["getOneMixAxle"](arg, arg1) {
    return this.transferForResult(OneMixAxle2.get(arg, arg1));
  }
  async ["getMixAxleAll"](arg32, arg3) {
    const value22 = Math.ceil(arg32 * arg3 / 23),
      value1 = [];
    for (let value2 = 0; value2 < value22; value2++) {
      const value = await this.transferForResult(BufferMixAxle2.get(23 * value2, 23));
      value1.push(...new Uint8Array(value.keyTypes.buffer));
    }
    return rt.chunk(value1, arg3).map((arg2, arg12) => arg2.map((arg1, arg) => OneMixAxle2.create(arg12, arg, arg1)));
  }
  async ["setMixAxleAll"](arg1) {
    const value3 = arg1.map(arg2 => arg2.map(arg => arg.keyType).flat()).flat(),
      value22 = rt.chunk(value3, 23);
    for (let value2 = 0; value2 < value22.length; value2++) {
      const value = value22[value2];
      await this.transferForResult(BufferMixAxle2.create(23 * value2, 23, new DataView(new Uint8Array(value).buffer)));
    }
  }
  async ["setOneMixAxle"](arg, arg1, arg2) {
    return this.transferForResult(OneMixAxle2.create(arg, arg1, arg2));
  }
  async ["setUnifyMixAxle"](arg) {
    return this.transferForResult(OneMixAxle2.createAll(arg));
  }
  async ["startMixAxle"]() {
    return this.transferForResult(OptionMixAxle2.start());
  }
  async ["saveMixAxle"]() {
    return this.transferForResult(OptionMixAxle2.save());
  }
  async ['startAxleCalibrate']() {
    await this.transferForResult(AxleCalibrate2.start());
    await Ng(200);
  }
  async ["getProtocolVersion"]() {
    const value = await this.transferForResult(ProtocolVersion2.get());
    this.version = value.version;
    return value;
  }
  async ["getKeyboardFeature"]() {
    return this.transferForResult(KeyboardFeature2.get());
  }
  async ["setKeyboardFeature"](arg) {
    return this.transferForResult(KeyboardFeature2.create(arg));
  }
  async ["resetDefault"](arg = "keyAction") {
    return this.transferForResult("All" === arg ? ResetKeyboardDefault2.getAll() : ResetKeyboardDefault2.getKeyAction());
  }
  async ["getCustomLamplight"](arg1, arg3) {
    const value22 = Math.ceil(arg3 / 8),
      value5 = Array.from({
        length: arg1
      }, () => []);
    for (let value4 = 0; value4 < arg1; value4++) {
      const value3 = [];
      for (let value2 = 0; value2 < value22; value2++) {
        const value = await this.transferForResult(CustomLamplight2.get(value4, 8 * value2, 8));
        value3.push(...value.colors);
      }
      value5[value4] = value3;
    }
    return value5;
  }
  async ["setCustomLamplightOne"](arg, arg2, arg1) {
    return this.transferForResult(CustomLamplight2.create(arg, arg2, 1, [arg1]));
  }
  async ['setCustomLamplight'](arg3) {
    const value3 = arg3.length,
      value22 = rt.first(arg3).length,
      value1 = Math.ceil(value22 / 8);
    for (let value2 = 0; value2 < value3; value2++) for (let value = 0; value < value1; value++) await this.transferForResult(CustomLamplight2.create(value2, 8 * value, 8, arg3[value2].slice(8 * value, 8 * (value + 1))));
  }
  async ['saveCustomLamplight']() {
    const value = await this.transferForResult(CustomLamplight2.save());
    await Ng(100);
    return value;
  }
  async ["getTapDance"](arg) {
    return this.transferForResult(TapDance2.get(arg));
  }
  async ["setTapDance"](arg1, arg) {
    return this.transferForResult(TapDance2.create(arg1, arg));
  }
  async ["getLayer"]() {
    return this.transferForResult(Ug.get());
  }
  async ["getDynamicKeyStroke"](arg) {
    return this.transferForResult(DynamicKeyStroke2.get(arg));
  }
  async ['setDynamicKeyStroke'](arg, arg1) {
    return this.transferForResult(DynamicKeyStroke2.create(arg, arg1));
  }
  async ['getRappySnappy'](arg) {
    if (this.isV3) return this.getRappySnappyV3(arg);
    return this.transferForResult(RappySnappy2.get(arg));
  }
  async ["getRappySnappyV3"](arg) {
    return this.transferForResult(RappySnappyV3.get(arg));
  }
  async ["setRappySnappy"](arg1, arg) {
    if (this.isV3) return this.setRappySnappyV3(arg1, arg);
    return this.transferForResult(RappySnappy2.create(arg1, arg1, arg));
  }
  async ["setRappySnappyV3"](arg1, arg) {
    return this.transferForResult(RappySnappyV3.create(arg1, arg1, arg));
  }
  async ['startCalibration']() {
    return this.transferForResult(Calibration3.start());
  }
  async ['finishCalibration']() {
    return this.transferForResult(Calibration3.finish());
  }
  async ['getCalibrationAdcTripCompStatusBuffer'](arg, arg2) {
    if (this.isV3) return this.getCalibrationAdcTripCompStatusBufferV3(arg, arg2);
    if (this.isV2) return this.getCalibrationAdcTripCompStatusBufferV2(arg, arg2);
    const value1 = Math.ceil(arg * arg2 / 6),
      value3 = [];
    for (let value2 = 0; value2 < value1; value2++) {
      const value = await this.transferForResult(Calibration3.getAdcTripCompStatusBuffer(6 * value2, 6));
      value3.push(...value.adcTripCompStatusList);
    }
    return rt.chunk(value3, arg2);
  }
  async ["getCalibrationAdcTripInitStatusBuffer"](arg3, arg2) {
    const value1 = Math.ceil(arg3 * arg2 / 24),
      value3 = [];
    for (let value2 = 0; value2 < value1; value2++) {
      const value = await this.transferForResult(Calibration3.getInitStatusBuffer(24 * value2, 24));
      value3.push(...value.initStatusList);
    }
    return rt.chunk(value3, arg2);
  }
  async ["getCalibrationAdcTripCompStatusBufferV2"](arg3, arg2) {
    const value1 = Math.ceil(arg3 * arg2 / 4),
      value3 = [];
    for (let value2 = 0; value2 < value1; value2++) {
      const value = await this.transferForResult(Calibration3.getAdcTripCompStatusBuffer(4 * value2, 4));
      value3.push(...value.adcTripCompStatusListV2);
    }
    return rt.chunk(value3, arg2);
  }
  async ["getCalibrationAdcTripCompStatusBufferV3"](arg, arg2) {
    const value3 = Math.ceil(arg * arg2 / 4),
      value1 = [];
    for (let value2 = 0; value2 < value3; value2++) {
      const value = await this.transferForResult(Calibration3.getAdcTripCompStatusBuffer(4 * value2, 4));
      value1.push(...value.adcTripCompStatusListV3);
    }
    return rt.chunk(value1, arg2);
  }
  async ["getBottomOptimizeSwitch"]() {
    return this.transferForResult(BottomOptimizeSwitch2.get());
  }
  async ['setBottomOptimizeSwitch'](arg) {
    return this.transferForResult(BottomOptimizeSwitch2.create(arg));
  }
  async ['getGameModeSwitch']() {
    if (this.isV2) return this.transferForResult(GameModeSwitch2.get());
    return GameModeSwitch2.create(0);
  }
  async ['getTravelInfo']() {
    return this.transferForResult(TravelInfo.get());
  }
  async ["setGameModeSwitch"](arg) {
    return this.transferForResult(GameModeSwitch2.create(arg));
  }
  async ["getPhysicalKeysSwitch"]() {
    return this.transferForResult(PhysicalKeysSwitch.get());
  }
  async ["setPhysicalKeysSwitch"](arg) {
    return this.transferForResult(PhysicalKeysSwitch.create(arg));
  }
  async ["getAiMatchSwitchSwitch"]() {
    return this.transferForResult(AiMatchSwitch.get());
  }
  async ["setAiMatchSwitchSwitch"](arg) {
    return this.transferForResult(AiMatchSwitch.create(arg));
  }
  async ["getLightSleepTime"]() {
    return this.transferForResult(LightSleepTime.get());
  }
  async ["setLightSleepTime"](arg) {
    return this.transferForResult(LightSleepTime.create(arg));
  }
  async ["getExtraLightInfo"]() {
    return this.transferForResult(ExtraLightInfo.get());
  }
  async ['setExtraLightInfo'](arg) {
    return this.transferForResult(ExtraLightInfo.create(arg));
  }
  async ["getProfileInfo"]() {
    return this.transferForResult(ProfileInfo.get());
  }
  async ["setProfileInfo"](arg) {
    return this.transferForResult(ProfileInfo.create(arg));
  }
  async ["getMixedAxisInfo"]() {
    return this.transferForResult(MixedAxisInfo.get());
  }
  async ["transferForResult"](arg) {
    arg.raw = await this.transferForResultAsync(arg.toUint8Array());
    return arg;
  }
  async ["getTogThAllV2"](arg3, arg32) {
    const value22 = Math.ceil(arg3 * arg32 / 12),
      value12 = [];
    for (let value2 = 0; value2 < value22; value2++) {
      const value = BufferTogTh2.get(12 * value2, 12),
        value1 = await this.transferForResult(value);
      value12.push(...new Uint8Array(value1.togThsV2.buffer));
    }
    return rt.chunk(rt.chunk(value12, 2), arg32).map((arg12, arg2) => arg12.map((arg1, arg) => OneTogThV22.create(arg2, arg, new DataView(new Uint8Array(arg1).buffer).getUint16(0) * _BitKeyboard.AccuracyV2)));
  }
  async ["getTogThAllV3"](arg22, arg3) {
    const value3 = Math.ceil(arg22 * arg3 / 12),
      value12 = [];
    for (let value2 = 0; value2 < value3; value2++) {
      const value = BufferTogTh2.get(12 * value2, 12),
        value1 = await this.transferForResult(value);
      value12.push(...new Uint8Array(value1.togThsV2.buffer));
    }
    return rt.chunk(rt.chunk(value12, 2), arg3).map((arg2, arg12) => arg2.map((arg1, arg) => OneTogThV3.create(arg12, arg, new DataView(new Uint8Array(arg1).buffer).getUint16(0) * _BitKeyboard.AccuracyV3)));
  }
  async ["getRTKeyInfoAllV2"](arg12, arg3) {
    const value22 = Math.ceil(arg12 * arg3 / 4),
      value5 = [];
    for (let value2 = 0; value2 < value22; value2++) {
      const value1 = BufferRTKeyInfo2.get(4 * value2, 4),
        value = await this.transferForResult(value1);
      value5.push(...new Uint8Array(value.rtV2.buffer));
    }
    return rt.chunk(rt.chunk(value5, 5), arg3).map((arg, arg1) => arg.map((arg5, arg2) => {
      const value7 = OneRTKeyInfoV22.get(arg1, arg2),
        [value1, value, value6, value4, value3] = arg5;
      value7.on = value1;
      value7.release = new DataView(new Uint8Array([value, value6]).buffer).getUint16(0) * _BitKeyboard.AccuracyV2;
      value7.press = new DataView(new Uint8Array([value4, value3]).buffer).getUint16(0) * _BitKeyboard.AccuracyV2;
      return value7;
    }));
  }
  async ["getRTKeyInfoAllV3"](arg2, arg3) {
    const value12 = Math.ceil(arg2 * arg3 / 4),
      value22 = [];
    for (let value2 = 0; value2 < value12; value2++) {
      const value = BufferRTKeyInfo2.get(4 * value2, 4),
        value1 = await this.transferForResult(value);
      value22.push(...new Uint8Array(value1.rtV2.buffer));
    }
    return rt.chunk(rt.chunk(value22, 5), arg3).map((arg12, arg) => arg12.map((arg6, arg1) => {
      const value4 = OneRTKeyInfoV3.get(arg, arg1),
        [value, value5, value3, value2, value7] = arg6;
      value4.on = value;
      value4.release = new DataView(new Uint8Array([value5, value3]).buffer).getUint16(0) * _BitKeyboard.AccuracyV3;
      value4.press = new DataView(new Uint8Array([value2, value7]).buffer).getUint16(0) * _BitKeyboard.AccuracyV3;
      return value4;
    }));
  }
  async ['setRTKeyInfoAllV2'](arg3) {
    const value12 = arg3.map(arg2 => arg2.map(arg => [arg.on, ...arg.releaseArr, ...arg.pressArr]).flat()).flat(),
      value22 = rt.chunk(value12, 20);
    for (let value3 = 0; value3 < value22.length; value3++) {
      const value2 = value22[value3];
      let value = Ad.normal;
      0 === value3 && (value = Ad.erase);
      value3 === value22.length - 1 && (value = Ad.write);
      const value1 = BufferRTKeyInfo2.create(4 * value3, 4, value, new DataView(new Uint8Array(value2).buffer));
      await this.transferForResult(value1);
      0 !== value3 && value3 !== value22.length - 1 || (await Ng(200));
    }
  }
  async ["setRTKeyInfoAllV3"](arg1) {
    const value22 = arg1.map(arg2 => arg2.map(arg => [arg.on, ...arg.releaseArr, ...arg.pressArr]).flat()).flat(),
      value4 = rt.chunk(value22, 20);
    for (let value3 = 0; value3 < value4.length; value3++) {
      const value = value4[value3];
      let value1 = Ad.normal;
      0 === value3 && (value1 = Ad.erase);
      value3 === value4.length - 1 && (value1 = Ad.write);
      const value2 = BufferRTKeyInfo2.create(4 * value3, 4, value1, new DataView(new Uint8Array(value).buffer));
      await this.transferForResult(value2);
      0 !== value3 && value3 !== value4.length - 1 || (await Ng(200));
    }
  }
  async ["getDeadBandV3"]() {
    return this.transferForResult(DeadBandV3.get());
  }
  async ["getDeadBandV2"]() {
    return this.transferForResult(DeadBandV22.get());
  }
  async ["setDeadBandV2"](arg1, arg) {
    return this.transferForResult(DeadBandV22.create(arg1, arg));
  }
  async ["setDeadBandV3"](arg1, arg) {
    return this.transferForResult(DeadBandV3.create(arg1, arg));
  }
};
V(xg, "AccuracyV2", 0.01);
V(xg, "AccuracyV3", 0.001);
let Kg = xg;
const Ag = class _BkMix68Profile extends Digital {
  constructor() {
    super(_BkMix68Profile.saveName, _BkMix68Profile.defaultProfileCount, _BkMix68Profile.customProfileIndex, _BkMix68Profile.showCustomProfile, _BkMix68Profile.banToggleProfile);
  }
};
V(Ag, "saveName", "bk-mix68-profile");
V(Ag, "defaultProfileCount", 3);
V(Ag, "customProfileIndex", 0);
V(Ag, "showCustomProfile", false);
V(Ag, 'banToggleProfile', true);
const Ig = [{
    label: 'Skin.Black',
    value: "black"
  }, {
    label: "Skin.White",
    value: "white"
  }, {
    label: "Skin.Pink",
    value: 'pink'
  }],
  Pg = [{
    controller: Kg,
    digital: Ag,
    meta: {
      deviceName: "Keyboard",
      component: "bit-keyboard"
    },
    filters: [{
      vendorId: 14139,
      productId: 4402,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FGG MIX 68 HE",
        axosome: 0,
        firmwareMark: "mix68",
        shaft: 'aurora-magnetic',
        title: "FGG MIX 68 HE",
        cover: "mix68",
        themeConfigName: "mix68-1132",
        theme: Ig
      },
      boot: {
        vendorId: 14139,
        productId: 8478,
        usagePage: 65280,
        usage: 1,
        firmwareMark: "mix68"
      }
    }, {
      vendorId: 14139,
      productId: 4403,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FGG MIX 68 HE",
        axosome: 0,
        firmwareMark: "mix68",
        shaft: "uranus-esport",
        title: 'FGG\x20MIX\x2068\x20HE',
        cover: "mix68",
        themeConfigName: 'mix68-1133',
        theme: Ig
      },
      boot: {
        vendorId: 14139,
        productId: 8479,
        usagePage: 65280,
        usage: 1,
        firmwareMark: 'mix68'
      }
    }, {
      vendorId: 14139,
      productId: 4404,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FGG MIX 68 HE",
        axosome: 0,
        firmwareMark: "mix68",
        shaft: "magnetic-jade-gaming",
        title: 'FGG\x20MIX\x2068\x20HE',
        cover: 'mix68',
        themeConfigName: "mix68-1134",
        theme: Ig
      },
      boot: {
        vendorId: 14139,
        productId: 8480,
        usagePage: 65280,
        usage: 1,
        firmwareMark: "mix68"
      }
    }, {
      vendorId: 14139,
      productId: 4435,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: 'FGG\x20MIX\x2068\x20HE',
        axosome: 0,
        firmwareMark: "mix68",
        shaft: "magnetic-jade-gaming",
        title: 'FGG\x20MIX\x2068\x20HE',
        cover: "mix68",
        themeConfigName: "mix68-1153",
        theme: Ig
      },
      boot: {
        vendorId: 14139,
        productId: 8500,
        usagePage: 65280,
        usage: 1,
        firmwareMark: "mix68"
      }
    }, {
      vendorId: 14139,
      productId: 4460,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FGG MIX 68 HE",
        axosome: 0,
        firmwareMark: "mix68",
        shaft: "aurora-magnetic",
        title: 'FGG\x20MIX\x2068\x20HE',
        cover: "mix68",
        themeConfigName: 'mix68-116c',
        theme: Ig
      },
      boot: {
        vendorId: 14139,
        productId: 8515,
        usagePage: 65280,
        usage: 1,
        firmwareMark: "mix68"
      }
    }, {
      vendorId: 14139,
      productId: 4461,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FGG MIX 68 HE",
        axosome: 0,
        firmwareMark: "mix68",
        shaft: "uranus-esport",
        title: "FGG MIX 68 HE",
        cover: "mix68",
        themeConfigName: "mix68-116d",
        theme: Ig
      },
      boot: {
        vendorId: 14139,
        productId: 8516,
        usagePage: 65280,
        usage: 1,
        firmwareMark: "mix68"
      }
    }, {
      vendorId: 14139,
      productId: 4462,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: 'FGG\x20MIX\x2068\x20HE',
        axosome: 0,
        firmwareMark: "mix68",
        shaft: 'magnetic-jade-gaming',
        title: "FGG MIX 68 HE",
        cover: "mix68",
        themeConfigName: "mix68-116e",
        theme: Ig
      },
      boot: {
        vendorId: 14139,
        productId: 8517,
        usagePage: 65280,
        usage: 1,
        firmwareMark: 'mix68'
      }
    }, {
      vendorId: 14139,
      productId: 4463,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FGG MIX 68 HE",
        axosome: 0,
        firmwareMark: "mix68",
        shaft: "magnetic-jade-gaming",
        title: "FGG MIX 68 HE",
        cover: "mix68",
        themeConfigName: 'mix68-116f',
        theme: Ig
      },
      boot: {
        vendorId: 14139,
        productId: 8518,
        usagePage: 65280,
        usage: 1,
        firmwareMark: "mix68"
      }
    }, {
      vendorId: 14139,
      productId: 4480,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FGG MIX 68 HE",
        axosome: 0,
        firmwareMark: "mix68",
        shaft: "magnetic-jade-gaming",
        title: "FGG MIX 68 HE",
        cover: "mix68",
        themeConfigName: 'mix68-116f',
        theme: Ig
      },
      boot: {
        vendorId: 14139,
        productId: 8537,
        usagePage: 65280,
        usage: 1,
        firmwareMark: "mix68"
      }
    }, {
      vendorId: 14139,
      productId: 4481,
      usagePage: 65376,
      usage: 97,
      custom: {
        layer: 4,
        row: 5,
        col: 15,
        name: "FGG MIX 68 HE",
        axosome: 0,
        firmwareMark: 'mix68',
        shaft: 'magnetic-jade-gaming',
        title: "FGG MIX 68 HE",
        cover: "mix68",
        themeConfigName: 'mix68-116f',
        theme: Ig
      },
      boot: {
        vendorId: 14139,
        productId: 8538,
        usagePage: 65280,
        usage: 1,
        firmwareMark: "mix68"
      }
    }]
  }],
  Mg = [{
    controller: Kg,
    meta: {
      deviceName: "RecoveryMode",
      component: "recovery-mode"
    },
    filters: Pg.map(arg => arg.filters).flat().map(arg1 => {
      const {
        boot: value
      } = arg1;
      return {
        ...arg1,
        ...value
      };
    })
  }],
  Tg = [...Pg, ...Mg],
  Rg = Pg.map(arg => arg.filters).flat().map(arg => null == arg ? void 0 : arg.boot).filter(Boolean),
  Eg = {
    edge63: [{
      vendorId: 14139,
      productId: 4411,
      usagePage: 65376,
      usage: 97
    }, {
      vendorId: 14139,
      productId: 4412,
      usagePage: 65376,
      usage: 97
    }, {
      vendorId: 14139,
      productId: 4413,
      usagePage: 65376,
      usage: 97
    }]
  },
  Bg = {
    edge63: [{
      vendorId: 14139,
      productId: 8486,
      usagePage: 65280,
      usage: 1
    }, {
      vendorId: 14139,
      productId: 8487,
      usagePage: 65280,
      usage: 1
    }, {
      vendorId: 14139,
      productId: 8488,
      usagePage: 65280,
      usage: 1
    }]
  },
  Lg = [...Tg, ...Au, ...Fh, ...Lf, ...Hl, ...Sd];
E = new WeakSet();
B = async function (arg2) {
  const value3 = null == arg2 ? void 0 : arg2.controller;
  if (!value3) throw new Error('No\x20controller\x20found');
  this.api = new value3(this.device);
  arg2.digital && (this.digital = new arg2.digital());
  if (arg2.macro) this.macro = new arg2.macro();else this.macro = null;
  await this.api.connect();
  const value4 = Se(),
    value1 = (null == arg2 ? void 0 : arg2.meta) || null;
  this.curDeviceFilter = arg2.filters.find(arg => rt.some([rt.pick(arg, ["productId", "vendorId"])], {
    productId: this.device.productId,
    vendorId: this.device.vendorId
  }));
  const {
      custom: value6,
      productId: value
    } = this.curDeviceFilter,
    value5 = (null == value6 ? void 0 : value6.name) + '-' + value;
  value4.setMeta({
    ...value1,
    deviceName: value5
  });
  this.api.setCustomData(this.curDeviceFilter);
  return this.api;
};
const Vg = new class WebHid {
  constructor() {
    var value2;
    ((arg, arg1, arg2) => {
      if (arg1.has(arg)) throw TypeError("Cannot add the same private member more than once");
      if (arg1 instanceof WeakSet) arg1.add(arg);else arg1.set(arg, arg2);
    })(this, E);
    V(this, "device", null);
    V(this, "curDeviceFilter", null);
    V(this, "filters", Lg);
    V(this, "api", null);
    V(this, "digital", null);
    V(this, "macro", null);
    null == (value2 = null == navigator ? void 0 : navigator.hid) || value2.addEventListener("disconnect", arg1 => {
      var value;
      arg1.device === this.device && (Pr("device-disconnect", arg1.device), null == (value = this.api) || value.destroy(), this.device = null, this.api = null);
    });
  }
  get ["historyConnect"]() {
    try {
      return JSON.parse(localStorage.getItem("history-connect"));
    } catch (value) {
      return;
    }
  }
  set ['historyConnect'](arg) {
    localStorage.setItem("history-connect", JSON.stringify({
      vendorId: arg.vendorId,
      productId: arg.productId
    }));
  }
  get ["getFilters"]() {
    return this.filters.map(arg => arg.filters).flat();
  }
  ['getDevices']() {
    var value;
    if (null == (value = null == navigator ? void 0 : navigator.hid)) return void 0;
    return value.getDevices();
  }
  ["getFilter"](arg4) {
    return rt.find(this.filters, arg3 => -1 !== arg3.filters.findIndex(arg2 => {
      if (!rt.some([arg2], {
        vendorId: arg4.vendorId,
        productId: arg4.productId
      })) return false;
      return -1 !== Fg(arg4).findIndex(arg => rt.some([arg], {
        usage: arg2.usage,
        usagePage: arg2.usagePage
      }));
    }));
  }
  ["getController"]() {
    return this.api;
  }
  ["getDigital"]() {
    return this.digital;
  }
  ["getMacro"]() {
    return this.macro;
  }
  ['getDeviceFilter']() {
    return this.curDeviceFilter;
  }
  async ["getCurrentDevices"]() {
    const value12 = await navigator.hid.getDevices();
    if (!value12.length) return [];
    const value3 = value12.map(arg => ({
      device: arg,
      filter: this.getFilter(arg)
    })).filter(arg => !!arg.filter);
    for (const value2 of value3) {
      const {
        device: value,
        filter: value1
      } = value2;
      value.opened || (await value2.device.open());
      value2.customInfo = value1.filters.find(arg => rt.some([rt.pick(arg, ['productId', "vendorId"])], {
        productId: value.productId,
        vendorId: value.vendorId
      }));
    }
    return value3;
  }
  async ["testConnection"]() {
    var value3;
    const value22 = await navigator.hid.getDevices();
    if (!value22.length) return;
    const {
      device: value12,
      filter: value2
    } = (null == (value3 = value22.map(arg => ({
      device: arg,
      filter: this.getFilter(arg)
    })).filter(arg2 => {
      if (!this.historyConnect) return false;
      const {
        vendorId: value1,
        productId: value
      } = this.historyConnect;
      return arg2.device.vendorId === value1 && arg2.device.productId === value;
    })) ? void 0 : value3.find(arg => !!arg.filter)) || {};
    if (value12) return {
      device: value12,
      filter: value2
    };
    return void 0;
  }
  async ["autoConnect"]() {
    if (this.api) return;
    const value = await this.testConnection();
    if (!value || !(null == value ? void 0 : value.device)) return;
    const {
      device: value1,
      filter: value2
    } = value;
    this.device = value1;
    return F(this, E, B).call(this, value2);
  }
  async ["connect"]() {
    var value1;
    this.api && (await this.api.destroy());
    const value2 = await navigator.hid.requestDevice({
      filters: this.getFilters
    });
    if (!value2.length) throw new Error('No\x20device\x20found');
    this.device = rt.last(value2);
    const value = this.getFilter(this.device);
    "recovery-mode" !== (null == (value1 = null == value ? void 0 : value.meta) ? void 0 : value1.component) && localStorage.setItem('history-connect', JSON.stringify({
      vendorId: this.device.vendorId,
      productId: this.device.productId
    }));
    return F(this, E, B).call(this, value);
  }
  async ["equipmentConnect"](arg1) {
    var value;
    this.device = arg1;
    const value2 = this.getFilter(this.device);
    "recovery-mode" !== (null == (value = null == value2 ? void 0 : value2.meta) ? void 0 : value.component) && localStorage.setItem("history-connect", JSON.stringify({
      vendorId: this.device.vendorId,
      productId: this.device.productId
    }));
    return F(this, E, B).call(this, value2);
  }
  async ["getReceiverList"](arg12) {
    const value3 = await navigator.hid.requestDevice({
      filters: this.filters.filter(arg => arg.meta.deviceName === arg12).map(arg => arg.filters).flat().filter(arg => arg.receiver)
    });
    if (!value3.length) throw new Error('No\x20device\x20found');
    return value3.map(arg1 => {
      const value = this.getFilter(arg1),
        value2 = null == value ? void 0 : value.controller;
      if (!value2) throw new Error("No controller found");
      return new value2(arg1);
    });
  }
}();
function Fg(arg2) {
  return arg2.collections.map(arg => rt.pick(arg, ["usage", "usagePage"]));
}
function Ng(arg2) {
  return new Promise(arg => {
    setTimeout(() => {
      arg();
    }, arg2);
  });
}
function Gg(arg) {
  return !!a28_0x4451a3() && (a28_0x24153a(arg), true);
}
function zg(arg) {
  if ("function" == typeof arg) return arg();
  return a28_0x56e515(arg);
}
const Hg = "undefined" != typeof window && "undefined" != typeof document;
"undefined" != typeof WorkerGlobalScope && (globalThis, WorkerGlobalScope);
const Wg = Object.prototype.toString,
  jg = arg => '[object\x20Object]' === Wg.call(arg),
  Yg = () => {};
function $g(arg2, arg1 = true, arg22) {
  const value3 = function (arg) {
    return arg || a28_0x46b033();
  }();
  if (value3) a28_0x417103(arg2, arg22);else if (arg1) arg2();else a28_0x483ac4(arg2);
}
function qg(arg32, arg2, arg13) {
  let value23 = (null == arg13 ? void 0 : arg13.immediate) ? [] : [...(arg32 instanceof Function ? arg32() : Array.isArray(arg32) ? arg32 : zg(arg32))];
  return a28_0x3ca890(arg32, (arg12, arg5, arg3) => {
    const value22 = Array.from({
        length: value23.length
      }),
      value42 = [];
    for (const value3 of arg12) {
      let value2 = false;
      for (let value = 0; value < value23.length; value++) if (!value22[value] && value3 === value23[value]) {
        value22[value] = true;
        value2 = true;
        break;
      }
      value2 || value42.push(value3);
    }
    const value4 = value23.filter((arg, arg1) => !value22[arg1]);
    arg2(arg12, value23, value42, value4, arg3);
    value23 = [...arg12];
  }, arg13);
}
function Jg(arg2) {
  var value;
  const value1 = zg(arg2);
  return null != (value = null == value1 ? void 0 : value1.$el) ? value : value1;
}
const Xg = Hg ? window : void 0;
function Zg(arg1) {
  const value2 = function () {
    const value1 = a28_0x34ade5(false),
      value = a28_0x46b033();
    value && a28_0x417103(() => {
      value1.value = true;
    }, value);
    return value1;
  }();
  return a28_0x3ab4c6(() => (value2.value, Boolean(arg1())));
}
function Qg(arg8, arg5 = {
  width: 0,
  height: 0
}, arg9 = {}) {
  const {
      window: value11 = Xg,
      box: value12 = "content-box"
    } = arg9,
    value42 = a28_0x3ab4c6(() => {
      var value, value1;
      if (null == (value1 = null == (value = Jg(arg8)) ? void 0 : value.namespaceURI)) return void 0;
      return value1.includes("svg");
    }),
    value72 = a28_0x34ade5(arg5.width),
    value62 = a28_0x34ade5(arg5.height),
    {
      stop: value22
    } = function (arg1, arg22, arg2 = {}) {
      const {
        window: value10 = Xg,
        ...value6
      } = arg2;
      let value9;
      const value8 = Zg(() => value10 && "ResizeObserver" in value10),
        value7 = () => {
          value9 && (value9.disconnect(), value9 = void 0);
        },
        value5 = a28_0x3ab4c6(() => Array.isArray(arg1) ? arg1.map(arg => Jg(arg)) : [Jg(arg1)]),
        value4 = a28_0x3ca890(value5, arg => {
          value7();
          if (value8.value && value10) {
            value9 = new ResizeObserver(arg22);
            for (const value of arg) value && value9.observe(value, value6);
          }
        }, {
          immediate: true,
          flush: "post"
        }),
        value3 = () => {
          value7();
          value4();
        };
      Gg(value3);
      return {
        isSupported: value8,
        stop: value3
      };
    }(arg8, ([arg2]) => {
      const value1 = "border-box" === value12 ? arg2.borderBoxSize : "content-box" === value12 ? arg2.contentBoxSize : arg2.devicePixelContentBoxSize;
      if (value11 && value42.value) {
        const value2 = Jg(arg8);
        if (value2) {
          const value = value11.getComputedStyle(value2);
          value72.value = Number.parseFloat(value.width);
          value62.value = Number.parseFloat(value.height);
        }
      } else {
        if (value1) {
          const value = Array.isArray(value1) ? value1 : [value1];
          value72.value = value.reduce((arg, {
            inlineSize: arg1
          }) => arg + arg1, 0);
          value62.value = value.reduce((arg1, {
            blockSize: arg
          }) => arg1 + arg, 0);
        } else {
          value72.value = arg2.contentRect.width;
          value62.value = arg2.contentRect.height;
        }
      }
    }, arg9);
  $g(() => {
    const value = Jg(arg8);
    value && (value72.value = 'offsetWidth' in value ? value.offsetWidth : arg5.width, value62.value = "offsetHeight" in value ? value.offsetHeight : arg5.height);
  });
  const value32 = a28_0x3ca890(() => Jg(arg8), arg => {
    value72.value = arg ? arg5.width : 0;
    value62.value = arg ? arg5.height : 0;
  });
  return {
    width: value72,
    height: value62,
    stop: function () {
      value22();
      value32();
    }
  };
}
function em(arg8 = {}) {
  const {
      window: value23 = Xg,
      initialWidth: value42 = Number.POSITIVE_INFINITY,
      initialHeight: value72 = Number.POSITIVE_INFINITY,
      listenOrientation: value82 = true,
      includeScrollbar: value52 = true
    } = arg8,
    value12 = a28_0x34ade5(value42),
    value32 = a28_0x34ade5(value72),
    value62 = () => {
      value23 && (value52 ? (value12.value = value23.innerWidth, value32.value = value23.innerHeight) : (value12.value = value23.document.documentElement.clientWidth, value32.value = value23.document.documentElement.clientHeight));
    };
  value62();
  $g(value62);
  (function (...arg7) {
    let value8, value7, value1, value3;
    if ('string' == typeof arg7[0] || Array.isArray(arg7[0])) {
      [value7, value1, value3] = arg7;
      value8 = Xg;
    } else [value8, value7, value1, value3] = arg7;
    if (!value8) return Yg;
    Array.isArray(value7) || (value7 = [value7]);
    Array.isArray(value1) || (value1 = [value1]);
    const value4 = [],
      value6 = () => {
        value4.forEach(arg => arg());
        value4.length = 0;
      },
      value5 = a28_0x3ca890(() => [Jg(value8), zg(value3)], ([arg12, arg6]) => {
        value6();
        if (!arg12) return;
        const value2 = jg(arg6) ? {
          ...arg6
        } : arg6;
        value4.push(...value7.flatMap(arg5 => value1.map(arg4 => ((arg2, arg, arg1, arg3) => (arg2.addEventListener(arg, arg1, arg3), () => arg2.removeEventListener(arg, arg1, arg3)))(arg12, arg5, arg4, value2))));
      }, {
        immediate: true,
        flush: 'post'
      }),
      value22 = () => {
        value5();
        value6();
      };
    Gg(value22);
  })("resize", value62, {
    passive: true
  });
  if (value82) {
    const value6 = function (arg1, arg6 = {}) {
      const {
          window: value7 = Xg
        } = arg6,
        value8 = Zg(() => value7 && "matchMedia" in value7 && "function" == typeof value7.matchMedia);
      let value;
      const value2 = a28_0x34ade5(false),
        value3 = arg => {
          value2.value = arg.matches;
        },
        value4 = () => {
          value && ("removeEventListener" in value ? value.removeEventListener('change', value3) : value.removeListener(value3));
        },
        value5 = a28_0x5be947(() => {
          value8.value && (value4(), value = value7.matchMedia(zg(arg1)), 'addEventListener' in value ? value.addEventListener("change", value3) : value.addListener(value3), value2.value = value.matches);
        });
      Gg(() => {
        value5();
        value4();
        value = void 0;
      });
      return value2;
    }('(orientation:\x20portrait)');
    a28_0x3ca890(value6, () => value62());
  }
  return {
    width: value12,
    height: value32
  };
}
export { Vu as $, KeyAction3 as A, Ce as B, Compx as C, DuckBread as D, Md as E, Ot as F, Vd as G, Holtek as H, InputDialog as I, qg as J, ag as K, tg as L, Qd as M, Pe as N, AlertDialog as O, ProgressDialog as P, OneTogThV3 as Q, xt as R, OneTogThV22 as S, og as T, OneRTKeyInfoV3 as U, OneRTKeyInfoV22 as V, Me as W, Pg as X, Rg as Y, ViewHelp as Z, Ie as _, Ls as a, Qu as a$, Cg as a0, TapDance2 as a1, RappySnappyV3 as a2, RappySnappy2 as a3, wt as a4, vg as a5, fg as a6, yt as a7, dg as a8, Ue as a9, Wh as aA, AdviceConfigDialog as aB, SetDPI as aC, Nf as aD, ph as aE, ih as aF, xh as aG, lh as aH, hh as aI, gh as aJ, Dh as aK, Sh as aL, uh as aM, wh as aN, _h as aO, Kh as aP, Ke as aQ, th as aR, MouseAfterPerformanceSetting as aS, MouseBeforePerformanceSetting as aT, FarDistance as aU, MouseDpi as aV, MouseDpiColor as aW, MouseDpiRGBEffects as aX, MouseReportRateDpi as aY, MouseSilentHeight as aZ, Wu as a_, Mr as aa, NotificationDialog as ab, DeadBandV3 as ac, DeadBandV22 as ad, LightInfo2 as ae, KeyboardFeature2 as af, GameModeSwitch2 as ag, Og as ah, Bd as ai, ed as aj, Yh as ak, ld as al, hd as am, gd as an, _d as ao, kd as ap, pd as aq, wd as ar, rd as as, nd as at, ButtonAction3 as au, id as av, ud as aw, Oe as ax, xe as ay, qh as az, Kg as b, of as b$, tc as b0, ju as b1, Hu as b2, Zu as b3, Dt as b4, rc as b5, sc as b6, dc as b7, zu as b8, Nc as b9, Ur as bA, Ss as bB, ks as bC, Dr as bD, Ds as bE, xs as bF, As as bG, bs as bH, qr as bI, xr as bJ, Ze as bK, Xe as bL, Je as bM, Rf as bN, Df as bO, gf as bP, pf as bQ, tf as bR, kf as bS, rf as bT, Sf as bU, af as bV, bf as bW, _f as bX, df as bY, Ql as bZ, Bf as b_, Hc as ba, MacroStore as bb, oc as bc, uc as bd, hc as be, Qg as bf, Gl as bg, _c as bh, Cc as bi, Dc as bj, Oc as bk, Kc as bl, Mc as bm, Gc as bn, Gu as bo, Vr as bp, ys as bq, ds as br, ms as bs, Rr as bt, ss as bu, _s as bv, Or as bw, os as bx, fs as by, cs as bz, Pr as c, Zl as c0, uf as c1, lf as c2, hf as c3, If as c4, Pf as c5, Kt as c6, St as c7, Ct as c8, kr as c9, Jl as ca, Xl as cb, Eh as cc, Ih as cd, Rh as ce, rh as cf, sh as cg, Fh as ch, Nh as ci, Pu as cj, Bu as ck, Wc as cl, jl as cm, Yl as cn, Wl as co, zl as cp, Iu as cq, HidDeviceUpgrade as cr, xu as cs, Xn as ct, Gh as d, Vf as e, BitMouse as f, Ae as g, Ng as h, PromptDialog as i, em as j, Dd as k, rt as l, HidDevice6 as m, Fg as n, Eg as o, Bg as p, mt as q, Tr as r, pt as s, GeneralNextKeyAction as t, Se as u, Nd as v, Vg as w, Ut as x, LTKeyAction2 as y, Td as z };