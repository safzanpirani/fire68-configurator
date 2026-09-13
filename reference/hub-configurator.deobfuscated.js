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
  V = (_0x4ac1ac, _0x131a11, _0x1ae5ac) => (((_0x304807, _0xaddf7d, _0x28fab9) => {
    if (_0xaddf7d in _0x304807) L(_0x304807, _0xaddf7d, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _0x28fab9
    });else _0x304807[_0xaddf7d] = _0x28fab9;
  })(_0x4ac1ac, "symbol" != typeof _0x131a11 ? _0x131a11 + '' : _0x131a11, _0x1ae5ac), _0x1ae5ac),
  F = (_0x58f1d4, _0x396990, _0x4f2230) => (((_0x18818b, _0x4e27ea, _0x57db6f) => {
    if (!_0x4e27ea.has(_0x18818b)) throw TypeError("Cannot " + _0x57db6f);
  })(_0x58f1d4, _0x396990, "access private method"), _0x4f2230);
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
    'setup'(_0xbbd4c7, {
      emit: _0x3c22aa
    }) {
      const _0x163083 = a28_0x1607c9(),
        _0x2078d2 = _0xbbd4c7,
        _0x4587e2 = _0x3c22aa,
        _0x202f8f = a28_0x1fdb20(),
        _0x2b79fb = a28_0x3ab4c6(() => !!(null == _0x202f8f ? void 0 : _0x202f8f.default));
      function _0x5a5004(_0x2dda0a) {
        if (!_0x2078d2.loading) return _0x2078d2.to ? _0x163083.push(_0x2078d2.to) : void _0x4587e2("click", _0x2dda0a);
      }
      return (_0x7f6d64, _0x5918fb) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        class: a28_0x11002d([{
          disabled: _0xbbd4c7.disabled
        }, 'select-none\x20px-[12px]\x20py-[6px]\x20rounded-[6px]\x20cursor-pointer\x20transition-all\x20hover:bg-opacity-70\x20active:bg-opacity-75\x20active:scale-[.98]']),
        onClick: a28_0x3c8be1(_0x5a5004, ["stop"])
      }, [a28_0x1683e7("div", {
        class: a28_0x11002d([_0xbbd4c7.customClass, "flex gap-[5px] items-center justify-center"])
      }, [_0xbbd4c7.beforeIcon && !_0xbbd4c7.loading ? (a28_0x14ec8c(), a28_0x4334ed('div', {
        key: 0,
        class: a28_0x11002d([['w-[' + _0xbbd4c7.beforeIconSize + "px]", 'h-[' + _0xbbd4c7.beforeIconSize + "px]"], "flex-shrink-0"])
      }, [_0xbbd4c7.beforeIcon ? (a28_0x14ec8c(), a28_0x38922d(J, {
        key: 0,
        name: _0xbbd4c7.beforeIcon,
        class: 'w-full\x20h-full\x20fill-current'
      }, null, 8, ["name"])) : a28_0x41e27b('', true)], 2)) : a28_0x41e27b('', true), _0x2b79fb.value && !_0xbbd4c7.loading ? (a28_0x14ec8c(), a28_0x4334ed("div", _e, [a28_0x1724c7(_0x7f6d64.$slots, 'default', {}, void 0, true)])) : a28_0x41e27b('', true), _0xbbd4c7.loading ? (a28_0x14ec8c(), a28_0x4334ed("div", ve, [a28_0x1683e7("div", ke, [a28_0x3445d0(J, {
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
      'setCacheProfileCount'(_0x1bbcec) {
        this.cacheProfileCount = _0x1bbcec;
      },
      'setMeta'(_0x4569ee) {
        this.meta = _0x4569ee;
      },
      'setCurrentProfile'(_0x54b0ee) {
        this.currentProfile = _0x54b0ee;
      },
      'setDeviceProfile'(_0x3a32f0, _0x17a5ff) {
        this.deviceProfile = {
          ...this.deviceProfile,
          [_0x3a32f0]: _0x17a5ff
        };
      },
      'setDeviceVersion'(_0x55e960) {
        this.newVersion = _0x55e960;
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
function De(_0x3fe19f) {
  const _0x276d0d = new Date(_0x3fe19f);
  return _0x276d0d.getFullYear() + '-' + ('0' + (_0x276d0d.getMonth() + 1)).slice(-2) + '-' + ('0' + _0x276d0d.getDate()).slice(-2) + '\x20' + ('0' + _0x276d0d.getHours()).slice(-2) + ':' + ('0' + _0x276d0d.getMinutes()).slice(-2) + ':' + ('0' + _0x276d0d.getSeconds()).slice(-2);
}
function Oe(_0x813246, _0x5620ec, _0x38ac45) {
  return '#' + ((_0x813246 = Math.round(_0x813246)) << 16 | (_0x5620ec = Math.round(_0x5620ec)) << 8 | (_0x38ac45 = Math.round(_0x38ac45))).toString(16).padStart(6, '0');
}
function xe(_0x257735) {
  if (!/^#?([a-f\d]{3}|[a-f\d]{6})$/i.test(_0x257735)) return [0, 0, 0];
  3 === (_0x257735 = _0x257735.replace('#', '').toLowerCase()).length && (_0x257735 = _0x257735.split('').map(function (_0x2286b) {
    return _0x2286b + _0x2286b;
  }).join(''));
  return [parseInt(_0x257735.substring(0, 2), 16), parseInt(_0x257735.substring(2, 4), 16), parseInt(_0x257735.substring(4, 6), 16)];
}
function Ke(_0x160023) {
  const _0x5aeeef = new DataView(new ArrayBuffer(4));
  _0x5aeeef.setUint32(0, _0x160023, true);
  return _0x5aeeef.getUint8(0);
}
function Ae(_0x25d31f, _0x32668e) {
  const _0x215414 = localStorage.getItem(_0x25d31f);
  return _0x215414 || _0x32668e;
}
function Ie(_0x4ae9e3, _0xd467ac) {
  localStorage.setItem(_0x4ae9e3, _0xd467ac);
}
function Pe(_0x40ea7c) {
  const _0x3eab94 = _0x40ea7c.toString();
  if (_0x3eab94.includes('.')) {
    const _0x58f670 = _0x3eab94.split('.')[1];
    return Math.max(_0x58f670.length, 2);
  }
  return 2;
}
function Me(_0x292295) {
  return _0x292295.split('\x0a').join("<br>");
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
    'setup'(_0x4eaf1e) {
      const _0x32b024 = _0x4eaf1e,
        _0x4834c1 = a28_0x34ade5(null);
      async function _0x3c0365(_0x140a0a) {
        _0x4834c1.value.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: 'forwards'
        });
        setTimeout(() => {
          var _0x5a17f4;
          null == (_0x5a17f4 = _0x32b024.callback) || _0x5a17f4.call(_0x32b024, _0x140a0a);
        }, 300);
      }
      function _0x1b9c7d() {
        _0x32b024.callback && _0x3c0365(true);
      }
      function _0x7f6416() {
        _0x32b024.callback && _0x3c0365(false);
      }
      return (_0x41c3f2, _0x4cd4d0) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        ref_key: "promptRef",
        ref: _0x4834c1,
        class: 'flex\x20fixed\x20inset-0\x20z-[999]\x20select-none\x20opacity-0\x20animate-show'
      }, [a28_0x1683e7('div', {
        class: 'inset-0\x20fixed\x20bg-black/40\x20dark:bg-black/70',
        onClick: _0x7f6416
      }), a28_0x1683e7('div', Te, [a28_0x1683e7("div", Re, [a28_0x1683e7("div", {
        class: a28_0x11002d([{
          'pt-5': "info" != _0x4eaf1e.type
        }, 'bg-light-bg4\x20dark:bg-dark-bg4\x20px-4\x20pb-4\x20min-w-[320px]'])
      }, [a28_0x1683e7("div", Ee, ["info" != _0x4eaf1e.type ? (a28_0x14ec8c(), a28_0x4334ed("div", {
        key: 0,
        class: a28_0x11002d([['success' == _0x4eaf1e.type ? ["bg-[#dcfce7]", "text-[#16a34a]", "pt-[6px]"] : ["bg-red-100", 'text-orange-600']], "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"])
      }, [a28_0x3445d0(J, {
        name: 'prompt-' + _0x4eaf1e.type,
        class: "fill-current pb-[4px] px-[8px]"
      }, null, 8, ["name"])], 2)) : a28_0x41e27b('', true), a28_0x1683e7("div", Be, [a28_0x1683e7('h3', Le, a28_0x3cd23b(_0x41c3f2.$t(_0x4eaf1e.title)), 1), a28_0x1683e7("div", Ve, [a28_0x1683e7('p', Fe, a28_0x3cd23b(_0x41c3f2.$t(_0x4eaf1e.content)), 1)])])])], 2), a28_0x1683e7('div', Ne, [_0x4eaf1e.hideOk ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed("button", {
        key: 0,
        class: "inline-flex w-full justify-center rounded-md bg-light-primary6 dark:bg-dark-primary6 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all transform duration-300 active:scale-95",
        type: "button",
        onClick: _0x1b9c7d
      }, a28_0x3cd23b(_0x41c3f2.$t(_0x4eaf1e.okText)), 1)), _0x4eaf1e.hideCancel ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 1,
        class: "mt-3 inline-flex w-full justify-center rounded-md bg-light-fill3 dark:bg-dark-fill3 px-3 py-2 text-sm font-semibold text-light-text1 dark:text-dark-text1 shadow-sm transition-all transform duration-300 active:scale-95",
        type: "button",
        onClick: _0x7f6416
      }, a28_0x3cd23b(_0x41c3f2.$t(_0x4eaf1e.cancelText)), 1))])])])], 512));
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
    'setup'(_0x32f534) {
      const _0x4ea4c0 = _0x32f534,
        _0x284701 = a28_0x34ade5(null);
      async function _0x573e75(_0x2b436e) {
        _0x284701.value.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: "forwards"
        });
        setTimeout(() => {
          var _0x51b701;
          null == (_0x51b701 = _0x4ea4c0.callback) || _0x51b701.call(_0x4ea4c0, _0x2b436e);
        }, 300);
      }
      function _0x48e76e() {
        _0x284701.value && _0x4ea4c0.callback && _0x573e75(true);
      }
      function _0x496e89() {
        _0x284701.value && _0x4ea4c0.callback && _0x573e75(false);
      }
      a28_0x417103(() => {
        _0x4ea4c0.delay && setTimeout(() => {
          _0x496e89();
        }, _0x4ea4c0.delay);
      });
      return (_0x291bca, _0x5be808) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        ref_key: "promptRef",
        ref: _0x284701,
        class: "flex fixed right-[24px] top-[100px] z-[999] select-none animate-show shadow-lg rounded-xl overflow-hidden flex-col bg-light-bg4 dark:bg-dark-bg4"
      }, [a28_0x1683e7('div', {
        class: a28_0x11002d([{
          'pt-5': "info" != _0x32f534.type
        }, "px-4 pb-4 min-w-[320px]"])
      }, [a28_0x1683e7("div", ze, ["info" != _0x32f534.type ? (a28_0x14ec8c(), a28_0x4334ed("div", {
        key: 0,
        class: a28_0x11002d([['success' == _0x32f534.type ? ["bg-[#dcfce7]", "text-[#16a34a]", "pt-[6px]"] : ["bg-red-100", "text-orange-600"]], 'flex\x20h-[40px]\x20w-[40px]\x20items-center\x20justify-center\x20rounded-full'])
      }, [a28_0x3445d0(J, {
        name: "prompt-" + _0x32f534.type,
        class: 'fill-current\x20w-full\x20h-full\x20pb-[4px]\x20px-[8px]'
      }, null, 8, ["name"])], 2)) : a28_0x41e27b('', true), a28_0x1683e7("div", He, [a28_0x1683e7('h3', We, a28_0x3cd23b(_0x291bca.$t(_0x32f534.title)), 1), a28_0x1683e7("div", je, [a28_0x1683e7('p', Ye, a28_0x3cd23b(_0x291bca.$t(_0x32f534.content)), 1)])])])], 2), a28_0x1683e7("div", $e, [_0x32f534.hideCancel ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 0,
        class: "inline-flex w-fit justify-center rounded-md px-3 py-2 text-sm font-semibold text-light-text1 dark:text-dark-text1 transition-all transform duration-300 active:scale-95",
        type: "button",
        onClick: _0x496e89
      }, a28_0x3cd23b(_0x291bca.$t(_0x32f534.cancelText)), 1)), _0x32f534.hideOk ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 1,
        class: "inline-flex w-fit justify-center rounded-md bg-light-primary6 dark:bg-dark-primary6 p-[4px_12px] text-sm font-semibold text-white shadow-sm transition-all transform duration-300 active:scale-95",
        type: "button",
        onClick: _0x48e76e
      }, a28_0x3cd23b(_0x291bca.$t(_0x32f534.okText)), 1))])], 512));
    }
  });
var Je = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {};
function Xe(_0x5dc2ae) {
  if (_0x5dc2ae && _0x5dc2ae.__esModule && Object.prototype.hasOwnProperty.call(_0x5dc2ae, "default")) return _0x5dc2ae.default;
  return _0x5dc2ae;
}
function Ze(_0x428b95) {
  if (_0x428b95.__esModule) return _0x428b95;
  var _0x5646bd = _0x428b95.default;
  if ("function" == typeof _0x5646bd) {
    var _0x293a4f = function _0x4cc957() {
      if (this instanceof _0x4cc957) return Reflect.construct(_0x5646bd, arguments, this.constructor);
      return _0x5646bd.apply(this, arguments);
    };
    _0x293a4f.prototype = _0x5646bd.prototype;
  } else _0x293a4f = {};
  Object.defineProperty(_0x293a4f, '__esModule', {
    value: true
  });
  Object.keys(_0x428b95).forEach(function (_0x676aab) {
    var _0x25a265 = Object.getOwnPropertyDescriptor(_0x428b95, _0x676aab);
    Object.defineProperty(_0x293a4f, _0x676aab, _0x25a265.get ? _0x25a265 : {
      enumerable: true,
      get: function () {
        return _0x428b95[_0x676aab];
      }
    });
  });
  return _0x293a4f;
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
  var _0x18a104,
    _0xe7d2d9 = 'Expected\x20a\x20function',
    _0x183b18 = "__lodash_hash_undefined__",
    _0xe857cf = "__lodash_placeholder__",
    _0x5e9d40 = 16,
    _0x3c6d29 = 32,
    _0xd4c6fc = 64,
    _0x1d8dce = 128,
    _0x567b15 = 256,
    _0x286c23 = 1 / 0,
    _0x1dad18 = 9007199254740991,
    _0xcfc3b8 = NaN,
    _0x4f310a = 4294967295,
    _0x465b61 = [["ary", _0x1d8dce], ["bind", 1], ["bindKey", 2], ['curry', 8], ["curryRight", _0x5e9d40], ["flip", 512], ['partial', _0x3c6d29], ['partialRight', _0xd4c6fc], ["rearg", _0x567b15]],
    _0x15a192 = "[object Arguments]",
    _0x416322 = '[object\x20Array]',
    _0xf2bfb8 = '[object\x20Boolean]',
    _0x41b8a3 = "[object Date]",
    _0x352b83 = "[object Error]",
    _0x1ae195 = "[object Function]",
    _0x298d65 = "[object GeneratorFunction]",
    _0x4c0bc9 = "[object Map]",
    _0x37f0a1 = "[object Number]",
    _0x17902e = "[object Object]",
    _0x188a11 = "[object Promise]",
    _0x13669b = "[object RegExp]",
    _0x2443d3 = "[object Set]",
    _0x465ee6 = '[object\x20String]',
    _0x3f07d1 = "[object Symbol]",
    _0x1bb5ae = "[object WeakMap]",
    _0x3cf36a = '[object\x20ArrayBuffer]',
    _0x4d1fad = '[object\x20DataView]',
    _0x155a99 = "[object Float32Array]",
    _0x57ae72 = "[object Float64Array]",
    _0xb55656 = "[object Int8Array]",
    _0x304f3c = "[object Int16Array]",
    _0x2cef51 = '[object\x20Int32Array]',
    _0x81f439 = "[object Uint8Array]",
    _0x1b4471 = '[object\x20Uint8ClampedArray]',
    _0x4c0c1f = "[object Uint16Array]",
    _0x53e4ca = "[object Uint32Array]",
    _0x3c55b5 = /\b__p \+= '';/g,
    _0x501dd6 = /\b(__p \+=) '' \+/g,
    _0x2bbb42 = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    _0x2e87d1 = /&(?:amp|lt|gt|quot|#39);/g,
    _0x3509e3 = /[&<>"']/g,
    _0x1fa02a = RegExp(_0x2e87d1.source),
    _0x3571b6 = RegExp(_0x3509e3.source),
    _0x162951 = /<%-([\s\S]+?)%>/g,
    _0xd360c0 = /<%([\s\S]+?)%>/g,
    _0x3455f3 = /<%=([\s\S]+?)%>/g,
    _0x18900f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    _0x4ec301 = /^\w*$/,
    _0x35488e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    _0x1faf09 = /[\\^$.*+?()[\]{}|]/g,
    _0x258630 = RegExp(_0x1faf09.source),
    _0x337710 = /^\s+/,
    _0x454301 = /\s/,
    _0x2acef5 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    _0x4b92db = /\{\n\/\* \[wrapped with (.+)\] \*/,
    _0x3069b0 = /,? & /,
    _0x1fe092 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    _0x21528f = /[()=,{}\[\]\/\s]/,
    _0x5951ba = /\\(\\)?/g,
    _0x53d1af = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    _0x26a18e = /\w*$/,
    _0x1eab95 = /^[-+]0x[0-9a-f]+$/i,
    _0x1e68bb = /^0b[01]+$/i,
    _0x4bedae = /^\[object .+?Constructor\]$/,
    _0x120af3 = /^0o[0-7]+$/i,
    _0x565da4 = /^(?:0|[1-9]\d*)$/,
    _0x37643f = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    _0xfcd318 = /($^)/,
    _0x11295b = /['\n\r\u2028\u2029\\]/g,
    _0x3d93de = "\\ud800-\\udfff",
    _0x1f8bfb = '\x5cu0300-\x5cu036f\x5cufe20-\x5cufe2f\x5cu20d0-\x5cu20ff',
    _0x451f0f = "\\u2700-\\u27bf",
    _0x30c49c = 'a-z\x5cxdf-\x5cxf6\x5cxf8-\x5cxff',
    _0x57dfc7 = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    _0xa4b3f5 = "\\ufe0e\\ufe0f",
    _0x39f7e7 = '\x5cxac\x5cxb1\x5cxd7\x5cxf7\x5cx00-\x5cx2f\x5cx3a-\x5cx40\x5cx5b-\x5cx60\x5cx7b-\x5cxbf\x5cu2000-\x5cu206f\x20\x5ct\x5cx0b\x5cf\x5cxa0\x5cufeff\x5cn\x5cr\x5cu2028\x5cu2029\x5cu1680\x5cu180e\x5cu2000\x5cu2001\x5cu2002\x5cu2003\x5cu2004\x5cu2005\x5cu2006\x5cu2007\x5cu2008\x5cu2009\x5cu200a\x5cu202f\x5cu205f\x5cu3000',
    _0x3721d3 = "['’]",
    _0x35e2bb = '[' + _0x3d93de + ']',
    _0x4e6186 = '[' + _0x39f7e7 + ']',
    _0x55882e = '[' + _0x1f8bfb + ']',
    _0x15e2fe = "\\d+",
    _0x5a049b = '[' + _0x451f0f + ']',
    _0x24e4dd = '[' + _0x30c49c + ']',
    _0x20ecfc = '[^' + _0x3d93de + _0x39f7e7 + _0x15e2fe + _0x451f0f + _0x30c49c + _0x57dfc7 + ']',
    _0x566a5e = "\\ud83c[\\udffb-\\udfff]",
    _0x2f2ed2 = '[^' + _0x3d93de + ']',
    _0x853fa = '(?:\x5cud83c[\x5cudde6-\x5cuddff]){2}',
    _0x54dc2d = '[\x5cud800-\x5cudbff][\x5cudc00-\x5cudfff]',
    _0x5e1928 = '[' + _0x57dfc7 + ']',
    _0x50ea7c = '\x5cu200d',
    _0x6b03ac = "(?:" + _0x24e4dd + '|' + _0x20ecfc + ')',
    _0x50f332 = "(?:" + _0x5e1928 + '|' + _0x20ecfc + ')',
    _0x2b9e13 = "(?:['’](?:d|ll|m|re|s|t|ve))?",
    _0x1bf9f6 = '(?:[\x27’](?:D|LL|M|RE|S|T|VE))?',
    _0x526504 = "(?:" + _0x55882e + '|' + _0x566a5e + ')?',
    _0xf96355 = '[' + _0xa4b3f5 + ']?',
    _0x16f6f5 = _0xf96355 + _0x526504 + "(?:" + _0x50ea7c + "(?:" + [_0x2f2ed2, _0x853fa, _0x54dc2d].join('|') + ')' + _0xf96355 + _0x526504 + ')*',
    _0xe04996 = "(?:" + [_0x5a049b, _0x853fa, _0x54dc2d].join('|') + ')' + _0x16f6f5,
    _0x2e8b2a = "(?:" + [_0x2f2ed2 + _0x55882e + '?', _0x55882e, _0x853fa, _0x54dc2d, _0x35e2bb].join('|') + ')',
    _0x3478ec = RegExp(_0x3721d3, 'g'),
    _0x5731fd = RegExp(_0x55882e, 'g'),
    _0x56d5f8 = RegExp(_0x566a5e + '(?=' + _0x566a5e + ')|' + _0x2e8b2a + _0x16f6f5, 'g'),
    _0x46188c = RegExp([_0x5e1928 + '?' + _0x24e4dd + '+' + _0x2b9e13 + "(?=" + [_0x4e6186, _0x5e1928, '$'].join('|') + ')', _0x50f332 + '+' + _0x1bf9f6 + "(?=" + [_0x4e6186, _0x5e1928 + _0x6b03ac, '$'].join('|') + ')', _0x5e1928 + '?' + _0x6b03ac + '+' + _0x2b9e13, _0x5e1928 + '+' + _0x1bf9f6, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", '\x5cd*(?:1st|2nd|3rd|(?![123])\x5cdth)(?=\x5cb|[A-Z_])', _0x15e2fe, _0xe04996].join('|'), 'g'),
    _0x580c59 = RegExp('[' + _0x50ea7c + _0x3d93de + _0x1f8bfb + _0xa4b3f5 + ']'),
    _0x3ed215 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    _0x456c07 = ["Array", 'Buffer', "DataView", 'Date', "Error", "Float32Array", 'Float64Array', "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", 'Object', "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", 'Uint8ClampedArray', "Uint16Array", 'Uint32Array', "WeakMap", '_', "clearTimeout", "isFinite", "parseInt", "setTimeout"],
    _0x4c9af5 = -1,
    _0x52317c = {};
  _0x52317c[_0x155a99] = _0x52317c[_0x57ae72] = _0x52317c[_0xb55656] = _0x52317c[_0x304f3c] = _0x52317c[_0x2cef51] = _0x52317c[_0x81f439] = _0x52317c[_0x1b4471] = _0x52317c[_0x4c0c1f] = _0x52317c[_0x53e4ca] = true;
  _0x52317c[_0x15a192] = _0x52317c[_0x416322] = _0x52317c[_0x3cf36a] = _0x52317c[_0xf2bfb8] = _0x52317c[_0x4d1fad] = _0x52317c[_0x41b8a3] = _0x52317c[_0x352b83] = _0x52317c[_0x1ae195] = _0x52317c[_0x4c0bc9] = _0x52317c[_0x37f0a1] = _0x52317c[_0x17902e] = _0x52317c[_0x13669b] = _0x52317c[_0x2443d3] = _0x52317c[_0x465ee6] = _0x52317c[_0x1bb5ae] = false;
  var _0x48f884 = {};
  _0x48f884[_0x15a192] = _0x48f884[_0x416322] = _0x48f884[_0x3cf36a] = _0x48f884[_0x4d1fad] = _0x48f884[_0xf2bfb8] = _0x48f884[_0x41b8a3] = _0x48f884[_0x155a99] = _0x48f884[_0x57ae72] = _0x48f884[_0xb55656] = _0x48f884[_0x304f3c] = _0x48f884[_0x2cef51] = _0x48f884[_0x4c0bc9] = _0x48f884[_0x37f0a1] = _0x48f884[_0x17902e] = _0x48f884[_0x13669b] = _0x48f884[_0x2443d3] = _0x48f884[_0x465ee6] = _0x48f884[_0x3f07d1] = _0x48f884[_0x81f439] = _0x48f884[_0x1b4471] = _0x48f884[_0x4c0c1f] = _0x48f884[_0x53e4ca] = true;
  _0x48f884[_0x352b83] = _0x48f884[_0x1ae195] = _0x48f884[_0x1bb5ae] = false;
  var _0x196f9e = {
      '\x5c': '\x5c',
      '\x27': '\x27',
      '\x0a': 'n',
      '\x0d': 'r',
      '\u2028': 'u2028',
      '\u2029': "u2029"
    },
    _0x59bbd9 = parseFloat,
    _0x419ce9 = parseInt,
    _0x525696 = "object" == typeof Je && Je && Je.Object === Object && Je,
    _0x17e5b6 = "object" == typeof self && self && self.Object === Object && self,
    _0xac24cc = _0x525696 || _0x17e5b6 || Function("return this")(),
    _0x59ab55 = et && !et.nodeType && et,
    _0x4b8835 = _0x59ab55 && Qe && !Qe.nodeType && Qe,
    _0xe8b3f3 = _0x4b8835 && _0x4b8835.exports === _0x59ab55,
    _0x4ffe9a = _0xe8b3f3 && _0x525696.process,
    _0x495788 = function () {
      try {
        var _0x37cece = _0x4b8835 && _0x4b8835.require && _0x4b8835.require("util").types;
        return _0x37cece || _0x4ffe9a && _0x4ffe9a.binding && _0x4ffe9a.binding('util');
      } catch (_0x501680) {}
    }(),
    _0x433d6b = _0x495788 && _0x495788.isArrayBuffer,
    _0x12578a = _0x495788 && _0x495788.isDate,
    _0x424f66 = _0x495788 && _0x495788.isMap,
    _0x2591f5 = _0x495788 && _0x495788.isRegExp,
    _0x452eaf = _0x495788 && _0x495788.isSet,
    _0x4eb623 = _0x495788 && _0x495788.isTypedArray;
  function _0x408cf2(_0x2e205d, _0x2e63e2, _0x357e1c) {
    switch (_0x357e1c.length) {
      case 0:
        return _0x2e205d.call(_0x2e63e2);
      case 1:
        return _0x2e205d.call(_0x2e63e2, _0x357e1c[0]);
      case 2:
        return _0x2e205d.call(_0x2e63e2, _0x357e1c[0], _0x357e1c[1]);
      case 3:
        return _0x2e205d.call(_0x2e63e2, _0x357e1c[0], _0x357e1c[1], _0x357e1c[2]);
    }
    return _0x2e205d.apply(_0x2e63e2, _0x357e1c);
  }
  function _0x3dfdc4(_0x297278, _0x4829f3, _0x40d4fc, _0xe3479) {
    for (var _0x59b01a = -1, _0x12dad9 = null == _0x297278 ? 0 : _0x297278.length; ++_0x59b01a < _0x12dad9;) {
      var _0x351135 = _0x297278[_0x59b01a];
      _0x4829f3(_0xe3479, _0x351135, _0x40d4fc(_0x351135), _0x297278);
    }
    return _0xe3479;
  }
  function _0x4e0041(_0x1502fc, _0x3b1063) {
    for (var _0x419c1d = -1, _0x138f0f = null == _0x1502fc ? 0 : _0x1502fc.length; ++_0x419c1d < _0x138f0f && false !== _0x3b1063(_0x1502fc[_0x419c1d], _0x419c1d, _0x1502fc);) {}
    return _0x1502fc;
  }
  function _0x4756f5(_0x2043e7, _0x3de499) {
    for (var _0x12086a = null == _0x2043e7 ? 0 : _0x2043e7.length; _0x12086a-- && false !== _0x3de499(_0x2043e7[_0x12086a], _0x12086a, _0x2043e7);) {}
    return _0x2043e7;
  }
  function _0x155787(_0x3ee0d5, _0x515cb5) {
    for (var _0x5d7997 = -1, _0xd74016 = null == _0x3ee0d5 ? 0 : _0x3ee0d5.length; ++_0x5d7997 < _0xd74016;) if (!_0x515cb5(_0x3ee0d5[_0x5d7997], _0x5d7997, _0x3ee0d5)) return false;
    return true;
  }
  function _0x200b15(_0xb01638, _0xfac55) {
    for (var _0x4214b = -1, _0x51d028 = null == _0xb01638 ? 0 : _0xb01638.length, _0x75205e = 0, _0xa2dc03 = []; ++_0x4214b < _0x51d028;) {
      var _0x4d73ff = _0xb01638[_0x4214b];
      _0xfac55(_0x4d73ff, _0x4214b, _0xb01638) && (_0xa2dc03[_0x75205e++] = _0x4d73ff);
    }
    return _0xa2dc03;
  }
  function _0x5d45ce(_0x39b5fb, _0x4d0ebd) {
    return !(null == _0x39b5fb || !_0x39b5fb.length) && _0x1da7c9(_0x39b5fb, _0x4d0ebd, 0) > -1;
  }
  function _0x14f625(_0x42b7db, _0x30864b, _0x3b606f) {
    for (var _0x5dd539 = -1, _0x261028 = null == _0x42b7db ? 0 : _0x42b7db.length; ++_0x5dd539 < _0x261028;) if (_0x3b606f(_0x30864b, _0x42b7db[_0x5dd539])) return true;
    return false;
  }
  function _0x5b4a4e(_0x397801, _0xa5721d) {
    for (var _0x4ffd67 = -1, _0x353276 = null == _0x397801 ? 0 : _0x397801.length, _0x425931 = Array(_0x353276); ++_0x4ffd67 < _0x353276;) _0x425931[_0x4ffd67] = _0xa5721d(_0x397801[_0x4ffd67], _0x4ffd67, _0x397801);
    return _0x425931;
  }
  function _0x363a38(_0x4cb999, _0x20ad07) {
    for (var _0x232a40 = -1, _0x253e38 = _0x20ad07.length, _0x324f81 = _0x4cb999.length; ++_0x232a40 < _0x253e38;) _0x4cb999[_0x324f81 + _0x232a40] = _0x20ad07[_0x232a40];
    return _0x4cb999;
  }
  function _0x4c289a(_0x4e6563, _0x44c7b9, _0x137f49, _0x379df7) {
    var _0x39e83 = -1,
      _0x469e51 = null == _0x4e6563 ? 0 : _0x4e6563.length;
    for (_0x379df7 && _0x469e51 && (_0x137f49 = _0x4e6563[++_0x39e83]); ++_0x39e83 < _0x469e51;) _0x137f49 = _0x44c7b9(_0x137f49, _0x4e6563[_0x39e83], _0x39e83, _0x4e6563);
    return _0x137f49;
  }
  function _0x404cbe(_0x2fd2a2, _0x4a1978, _0x2500d7, _0x385b1d) {
    var _0xed91da = null == _0x2fd2a2 ? 0 : _0x2fd2a2.length;
    for (_0x385b1d && _0xed91da && (_0x2500d7 = _0x2fd2a2[--_0xed91da]); _0xed91da--;) _0x2500d7 = _0x4a1978(_0x2500d7, _0x2fd2a2[_0xed91da], _0xed91da, _0x2fd2a2);
    return _0x2500d7;
  }
  function _0x1e13f1(_0x4fe3da, _0x2c2b59) {
    for (var _0x4e1ab3 = -1, _0x2ea814 = null == _0x4fe3da ? 0 : _0x4fe3da.length; ++_0x4e1ab3 < _0x2ea814;) if (_0x2c2b59(_0x4fe3da[_0x4e1ab3], _0x4e1ab3, _0x4fe3da)) return true;
    return false;
  }
  var _0xa2efea = _0x26919b("length");
  function _0x4bc7ac(_0x5137b2, _0x391b77, _0x1c5a0a) {
    var _0x391f7f;
    _0x1c5a0a(_0x5137b2, function (_0x1d5d20, _0x31b0ea, _0x5ef759) {
      if (_0x391b77(_0x1d5d20, _0x31b0ea, _0x5ef759)) {
        _0x391f7f = _0x31b0ea;
        return false;
      }
    });
    return _0x391f7f;
  }
  function _0x34c743(_0x142d90, _0xb908b8, _0xef641d, _0x4eb8ce) {
    for (var _0x13470c = _0x142d90.length, _0x60c65c = _0xef641d + (_0x4eb8ce ? 1 : -1); _0x4eb8ce ? _0x60c65c-- : ++_0x60c65c < _0x13470c;) if (_0xb908b8(_0x142d90[_0x60c65c], _0x60c65c, _0x142d90)) return _0x60c65c;
    return -1;
  }
  function _0x1da7c9(_0x54d5c1, _0x4fc640, _0x2cf97e) {
    if (_0x4fc640 == _0x4fc640) return function (_0x59e8b0, _0x35f046, _0x593aed) {
      for (var _0x202efc = _0x593aed - 1, _0x376804 = _0x59e8b0.length; ++_0x202efc < _0x376804;) if (_0x59e8b0[_0x202efc] === _0x35f046) return _0x202efc;
      return -1;
    }(_0x54d5c1, _0x4fc640, _0x2cf97e);
    return _0x34c743(_0x54d5c1, _0x1cbed3, _0x2cf97e);
  }
  function _0x4eec90(_0x5bc1fb, _0xedc0a6, _0x431190, _0x1fcbd5) {
    for (var _0x3df540 = _0x431190 - 1, _0x1d8dba = _0x5bc1fb.length; ++_0x3df540 < _0x1d8dba;) if (_0x1fcbd5(_0x5bc1fb[_0x3df540], _0xedc0a6)) return _0x3df540;
    return -1;
  }
  function _0x1cbed3(_0x2fe814) {
    return _0x2fe814 != _0x2fe814;
  }
  function _0x224b3d(_0x486755, _0x11c5ae) {
    var _0xb8cd77 = null == _0x486755 ? 0 : _0x486755.length;
    if (_0xb8cd77) return _0x8d9a5(_0x486755, _0x11c5ae) / _0xb8cd77;
    return _0xcfc3b8;
  }
  function _0x26919b(_0x4976ea) {
    return function (_0x4714b0) {
      if (null == _0x4714b0) return _0x18a104;
      return _0x4714b0[_0x4976ea];
    };
  }
  function _0x1b8f88(_0x5d3d5c) {
    return function (_0x26d66c) {
      if (null == _0x5d3d5c) return _0x18a104;
      return _0x5d3d5c[_0x26d66c];
    };
  }
  function _0x2207d1(_0xb6d259, _0x5a6927, _0x94428, _0x5bc96f, _0x2f31b8) {
    _0x2f31b8(_0xb6d259, function (_0x29cc58, _0x3c745b, _0x5a0fa4) {
      _0x94428 = _0x5bc96f ? (_0x5bc96f = false, _0x29cc58) : _0x5a6927(_0x94428, _0x29cc58, _0x3c745b, _0x5a0fa4);
    });
    return _0x94428;
  }
  function _0x8d9a5(_0x499d1c, _0x57b8a7) {
    for (var _0x43497e, _0x1cd694 = -1, _0x3390b3 = _0x499d1c.length; ++_0x1cd694 < _0x3390b3;) {
      var _0x5a784a = _0x57b8a7(_0x499d1c[_0x1cd694]);
      _0x5a784a !== _0x18a104 && (_0x43497e = _0x43497e === _0x18a104 ? _0x5a784a : _0x43497e + _0x5a784a);
    }
    return _0x43497e;
  }
  function _0x3004b6(_0x1a3d69, _0x52d2fe) {
    for (var _0x10868e = -1, _0x248d4c = Array(_0x1a3d69); ++_0x10868e < _0x1a3d69;) _0x248d4c[_0x10868e] = _0x52d2fe(_0x10868e);
    return _0x248d4c;
  }
  function _0x1b693b(_0x470089) {
    if (_0x470089) return _0x470089.slice(0, _0x1bccd2(_0x470089) + 1).replace(_0x337710, '');
    return _0x470089;
  }
  function _0x589c7a(_0x556a19) {
    return function (_0xa67c75) {
      return _0x556a19(_0xa67c75);
    };
  }
  function _0x1a53cb(_0x32e66d, _0x3e4965) {
    return _0x5b4a4e(_0x3e4965, function (_0x1d8b11) {
      return _0x32e66d[_0x1d8b11];
    });
  }
  function _0x4154d0(_0x5b531b, _0x5aa00a) {
    return _0x5b531b.has(_0x5aa00a);
  }
  function _0x12e5d5(_0x3235ef, _0x5e7314) {
    for (var _0x1e23f6 = -1, _0x45546c = _0x3235ef.length; ++_0x1e23f6 < _0x45546c && _0x1da7c9(_0x5e7314, _0x3235ef[_0x1e23f6], 0) > -1;) {}
    return _0x1e23f6;
  }
  function _0x4640f3(_0x2a577f, _0x13d5ff) {
    for (var _0x498178 = _0x2a577f.length; _0x498178-- && _0x1da7c9(_0x13d5ff, _0x2a577f[_0x498178], 0) > -1;) {}
    return _0x498178;
  }
  var _0x28484c = _0x1b8f88({
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
    _0x5f39a5 = _0x1b8f88({
      '&': "&amp;",
      '<': "&lt;",
      '>': '&gt;',
      '\x22': '&quot;',
      '\x27': "&#39;"
    });
  function _0x513aac(_0x5c1294) {
    return '\x5c' + _0x196f9e[_0x5c1294];
  }
  function _0x232bc1(_0x451979) {
    return _0x580c59.test(_0x451979);
  }
  function _0x9009ed(_0x567128) {
    var _0x320d88 = -1,
      _0x3b8da7 = Array(_0x567128.size);
    _0x567128.forEach(function (_0x4381c4, _0x5e58b5) {
      _0x3b8da7[++_0x320d88] = [_0x5e58b5, _0x4381c4];
    });
    return _0x3b8da7;
  }
  function _0x22b183(_0x417e6c, _0x22a944) {
    return function (_0x5d8dc7) {
      return _0x417e6c(_0x22a944(_0x5d8dc7));
    };
  }
  function _0xa90a46(_0x2ec5d1, _0x202617) {
    for (var _0x571e94 = -1, _0x3716e6 = _0x2ec5d1.length, _0x2ffc0b = 0, _0x586f76 = []; ++_0x571e94 < _0x3716e6;) {
      var _0x384487 = _0x2ec5d1[_0x571e94];
      _0x384487 !== _0x202617 && _0x384487 !== _0xe857cf || (_0x2ec5d1[_0x571e94] = _0xe857cf, _0x586f76[_0x2ffc0b++] = _0x571e94);
    }
    return _0x586f76;
  }
  function _0x2391fa(_0x18875f) {
    var _0x3cccc4 = -1,
      _0x56eb81 = Array(_0x18875f.size);
    _0x18875f.forEach(function (_0x20588a) {
      _0x56eb81[++_0x3cccc4] = _0x20588a;
    });
    return _0x56eb81;
  }
  function _0x5e3d40(_0x1091ba) {
    if (_0x232bc1(_0x1091ba)) return function (_0x15df30) {
      for (var _0x3170c5 = _0x56d5f8.lastIndex = 0; _0x56d5f8.test(_0x15df30);) ++_0x3170c5;
      return _0x3170c5;
    }(_0x1091ba);
    return _0xa2efea(_0x1091ba);
  }
  function _0x27f9f1(_0x208ba2) {
    if (_0x232bc1(_0x208ba2)) return function (_0x59635b) {
      return _0x59635b.match(_0x56d5f8) || [];
    }(_0x208ba2);
    return function (_0x2d2527) {
      return _0x2d2527.split('');
    }(_0x208ba2);
  }
  function _0x1bccd2(_0x197048) {
    for (var _0x223a0c = _0x197048.length; _0x223a0c-- && _0x454301.test(_0x197048.charAt(_0x223a0c));) {}
    return _0x223a0c;
  }
  var _0x3772f6 = _0x1b8f88({
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '\x22',
      '&#39;': '\x27'
    }),
    _0x4c8b64 = function _0x198231(_0x194581) {
      var _0x2a8180,
        _0x30943d = (_0x194581 = null == _0x194581 ? _0xac24cc : _0x4c8b64.defaults(_0xac24cc.Object(), _0x194581, _0x4c8b64.pick(_0xac24cc, _0x456c07))).Array,
        _0xf08f47 = _0x194581.Date,
        _0x448be0 = _0x194581.Error,
        _0xa8b240 = _0x194581.Function,
        _0x479305 = _0x194581.Math,
        _0x48fa9a = _0x194581.Object,
        _0x4efd08 = _0x194581.RegExp,
        _0x24cbed = _0x194581.String,
        _0x31211a = _0x194581.TypeError,
        _0x3bb250 = _0x30943d.prototype,
        _0x18b994 = _0xa8b240.prototype,
        _0x5713ec = _0x48fa9a.prototype,
        _0x58a179 = _0x194581["__core-js_shared__"],
        _0x583aae = _0x18b994.toString,
        _0x5a55dd = _0x5713ec.hasOwnProperty,
        _0xc5bb17 = 0,
        _0x112fb9 = (_0x2a8180 = /[^.]+$/.exec(_0x58a179 && _0x58a179.keys && _0x58a179.keys.IE_PROTO || '')) ? "Symbol(src)_1." + _0x2a8180 : '',
        _0x3d2036 = _0x5713ec.toString,
        _0x2eacbf = _0x583aae.call(_0x48fa9a),
        _0x305a00 = _0xac24cc._,
        _0x3bbdf9 = _0x4efd08('^' + _0x583aae.call(_0x5a55dd).replace(_0x1faf09, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'),
        _0x5e9b47 = _0xe8b3f3 ? _0x194581.Buffer : _0x18a104,
        _0x2f7d6c = _0x194581.Symbol,
        _0x2e08e2 = _0x194581.Uint8Array,
        _0x10a6ff = _0x5e9b47 ? _0x5e9b47.allocUnsafe : _0x18a104,
        _0x3d2c1a = _0x22b183(_0x48fa9a.getPrototypeOf, _0x48fa9a),
        _0x246baf = _0x48fa9a.create,
        _0x4e8c1d = _0x5713ec.propertyIsEnumerable,
        _0x1dc33b = _0x3bb250.splice,
        _0x453d96 = _0x2f7d6c ? _0x2f7d6c.isConcatSpreadable : _0x18a104,
        _0x2d66b9 = _0x2f7d6c ? _0x2f7d6c.iterator : _0x18a104,
        _0x2f9563 = _0x2f7d6c ? _0x2f7d6c.toStringTag : _0x18a104,
        _0x3674ac = function () {
          try {
            var _0x217dec = _0x57f9ec(_0x48fa9a, "defineProperty");
            _0x217dec({}, '', {});
            return _0x217dec;
          } catch (_0x2a4d03) {}
        }(),
        _0x26cd08 = _0x194581.clearTimeout !== _0xac24cc.clearTimeout && _0x194581.clearTimeout,
        _0x51b9fe = _0xf08f47 && _0xf08f47.now !== _0xac24cc.Date.now && _0xf08f47.now,
        _0x5baa34 = _0x194581.setTimeout !== _0xac24cc.setTimeout && _0x194581.setTimeout,
        _0x5904f9 = _0x479305.ceil,
        _0x1546b7 = _0x479305.floor,
        _0x50e664 = _0x48fa9a.getOwnPropertySymbols,
        _0x4ac897 = _0x5e9b47 ? _0x5e9b47.isBuffer : _0x18a104,
        _0x5e0be3 = _0x194581.isFinite,
        _0x246bf3 = _0x3bb250.join,
        _0x275b04 = _0x22b183(_0x48fa9a.keys, _0x48fa9a),
        _0x42358d = _0x479305.max,
        _0x5b234e = _0x479305.min,
        _0x5ebb01 = _0xf08f47.now,
        _0x54bda2 = _0x194581.parseInt,
        _0x1c53a3 = _0x479305.random,
        _0x2142ed = _0x3bb250.reverse,
        _0x4195a8 = _0x57f9ec(_0x194581, "DataView"),
        _0x488194 = _0x57f9ec(_0x194581, 'Map'),
        _0x5a8df2 = _0x57f9ec(_0x194581, "Promise"),
        _0x259617 = _0x57f9ec(_0x194581, "Set"),
        _0xf26413 = _0x57f9ec(_0x194581, "WeakMap"),
        _0x1f2420 = _0x57f9ec(_0x48fa9a, "create"),
        _0x148a4a = _0xf26413 && new _0xf26413(),
        _0x4aec69 = {},
        _0x467c73 = _0x1298eb(_0x4195a8),
        _0x4e740a = _0x1298eb(_0x488194),
        _0x532e7a = _0x1298eb(_0x5a8df2),
        _0x29ae98 = _0x1298eb(_0x259617),
        _0x204e97 = _0x1298eb(_0xf26413),
        _0xd51ccc = _0x2f7d6c ? _0x2f7d6c.prototype : _0x18a104,
        _0xa3dc22 = _0xd51ccc ? _0xd51ccc.valueOf : _0x18a104,
        _0x4dafde = _0xd51ccc ? _0xd51ccc.toString : _0x18a104;
      function _0x4fb193(_0x258204) {
        if (_0x12dbae(_0x258204) && !_0x14dbd1(_0x258204) && !(_0x258204 instanceof _0x52cb1f)) {
          if (_0x258204 instanceof _0x44e077) return _0x258204;
          if (_0x5a55dd.call(_0x258204, "__wrapped__")) return _0x368288(_0x258204);
        }
        return new _0x44e077(_0x258204);
      }
      var _0x41abc3 = function () {
        function _0x2ad334() {}
        return function (_0x2def50) {
          if (!_0x95df83(_0x2def50)) return {};
          if (_0x246baf) return _0x246baf(_0x2def50);
          _0x2ad334.prototype = _0x2def50;
          var _0x551c6b = new _0x2ad334();
          _0x2ad334.prototype = _0x18a104;
          return _0x551c6b;
        };
      }();
      function _0x136a34() {}
      function _0x44e077(_0x333cd1, _0x2ba786) {
        this.__wrapped__ = _0x333cd1;
        this.__actions__ = [];
        this.__chain__ = !!_0x2ba786;
        this.__index__ = 0;
        this.__values__ = _0x18a104;
      }
      function _0x52cb1f(_0x38390) {
        this.__wrapped__ = _0x38390;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = _0x4f310a;
        this.__views__ = [];
      }
      function _0xb7b4ca(_0x5eb306) {
        var _0x35b1e0 = -1,
          _0x22ca5f = null == _0x5eb306 ? 0 : _0x5eb306.length;
        for (this.clear(); ++_0x35b1e0 < _0x22ca5f;) {
          var _0x976f42 = _0x5eb306[_0x35b1e0];
          this.set(_0x976f42[0], _0x976f42[1]);
        }
      }
      function _0x63e927(_0x3d42b6) {
        var _0x2e4454 = -1,
          _0x3918fa = null == _0x3d42b6 ? 0 : _0x3d42b6.length;
        for (this.clear(); ++_0x2e4454 < _0x3918fa;) {
          var _0x27fbac = _0x3d42b6[_0x2e4454];
          this.set(_0x27fbac[0], _0x27fbac[1]);
        }
      }
      function _0x3d489a(_0x285ff1) {
        var _0x10d37f = -1,
          _0x41e947 = null == _0x285ff1 ? 0 : _0x285ff1.length;
        for (this.clear(); ++_0x10d37f < _0x41e947;) {
          var _0x473665 = _0x285ff1[_0x10d37f];
          this.set(_0x473665[0], _0x473665[1]);
        }
      }
      function _0x2401ff(_0x2f993c) {
        var _0x3c7705 = -1,
          _0x31ae2b = null == _0x2f993c ? 0 : _0x2f993c.length;
        for (this.__data__ = new _0x3d489a(); ++_0x3c7705 < _0x31ae2b;) this.add(_0x2f993c[_0x3c7705]);
      }
      function _0x31d98f(_0x56b558) {
        var _0x2a70d1 = this.__data__ = new _0x63e927(_0x56b558);
        this.size = _0x2a70d1.size;
      }
      function _0x2a8dbb(_0x1d572b, _0x188cb4) {
        var _0x595779 = _0x14dbd1(_0x1d572b),
          _0x30cde2 = !_0x595779 && _0xb4fb1b(_0x1d572b),
          _0x16d928 = !_0x595779 && !_0x30cde2 && _0x41f27f(_0x1d572b),
          _0x49dbc8 = !_0x595779 && !_0x30cde2 && !_0x16d928 && _0x3ed7c9(_0x1d572b),
          _0x153dd4 = _0x595779 || _0x30cde2 || _0x16d928 || _0x49dbc8,
          _0x5c2f03 = _0x153dd4 ? _0x3004b6(_0x1d572b.length, _0x24cbed) : [],
          _0x43443f = _0x5c2f03.length;
        for (var _0xd8117e in _0x1d572b) !_0x188cb4 && !_0x5a55dd.call(_0x1d572b, _0xd8117e) || _0x153dd4 && ("length" == _0xd8117e || _0x16d928 && ("offset" == _0xd8117e || "parent" == _0xd8117e) || _0x49dbc8 && ("buffer" == _0xd8117e || "byteLength" == _0xd8117e || "byteOffset" == _0xd8117e) || _0x583b31(_0xd8117e, _0x43443f)) || _0x5c2f03.push(_0xd8117e);
        return _0x5c2f03;
      }
      function _0x260746(_0x2db7b8) {
        var _0x55d686 = _0x2db7b8.length;
        if (_0x55d686) return _0x2db7b8[_0x7ee911(0, _0x55d686 - 1)];
        return _0x18a104;
      }
      function _0x2ac6ec(_0x5bf290, _0x3df57b) {
        return _0x5d22ea(_0x73a637(_0x5bf290), _0x5d0eea(_0x3df57b, 0, _0x5bf290.length));
      }
      function _0x2cf08a(_0x3ec275) {
        return _0x5d22ea(_0x73a637(_0x3ec275));
      }
      function _0x274b99(_0x5998e5, _0x5c2fe8, _0x58cb28) {
        (_0x58cb28 !== _0x18a104 && !_0x1eed1e(_0x5998e5[_0x5c2fe8], _0x58cb28) || _0x58cb28 === _0x18a104 && !(_0x5c2fe8 in _0x5998e5)) && _0x3cac09(_0x5998e5, _0x5c2fe8, _0x58cb28);
      }
      function _0x28d3c2(_0x55a75e, _0x1a70a2, _0xd49699) {
        var _0x4914ca = _0x55a75e[_0x1a70a2];
        _0x5a55dd.call(_0x55a75e, _0x1a70a2) && _0x1eed1e(_0x4914ca, _0xd49699) && (_0xd49699 !== _0x18a104 || _0x1a70a2 in _0x55a75e) || _0x3cac09(_0x55a75e, _0x1a70a2, _0xd49699);
      }
      function _0x504e8c(_0xae98b0, _0x312027) {
        for (var _0x246b75 = _0xae98b0.length; _0x246b75--;) if (_0x1eed1e(_0xae98b0[_0x246b75][0], _0x312027)) return _0x246b75;
        return -1;
      }
      function _0x19799e(_0x120167, _0x3ccd0a, _0x24014b, _0x119b0a) {
        _0x571673(_0x120167, function (_0x20eeeb, _0x7120f3, _0x49118a) {
          _0x3ccd0a(_0x119b0a, _0x20eeeb, _0x24014b(_0x20eeeb), _0x49118a);
        });
        return _0x119b0a;
      }
      function _0x524437(_0x1a3983, _0x2df24a) {
        return _0x1a3983 && _0x2e32c7(_0x2df24a, _0x33c583(_0x2df24a), _0x1a3983);
      }
      function _0x3cac09(_0x2c9dec, _0x46e6c9, _0x4426db) {
        if ("__proto__" == _0x46e6c9 && _0x3674ac) _0x3674ac(_0x2c9dec, _0x46e6c9, {
          configurable: true,
          enumerable: true,
          value: _0x4426db,
          writable: true
        });else _0x2c9dec[_0x46e6c9] = _0x4426db;
      }
      function _0x2b737b(_0x17e1b2, _0x4b284c) {
        for (var _0x4e7c53 = -1, _0x434a55 = _0x4b284c.length, _0x5e386b = _0x30943d(_0x434a55), _0x14167f = null == _0x17e1b2; ++_0x4e7c53 < _0x434a55;) _0x5e386b[_0x4e7c53] = _0x14167f ? _0x18a104 : _0x3b1dd3(_0x17e1b2, _0x4b284c[_0x4e7c53]);
        return _0x5e386b;
      }
      function _0x5d0eea(_0x1230b4, _0x65f51f, _0x5382f5) {
        _0x1230b4 == _0x1230b4 && (_0x5382f5 !== _0x18a104 && (_0x1230b4 = _0x1230b4 <= _0x5382f5 ? _0x1230b4 : _0x5382f5), _0x65f51f !== _0x18a104 && (_0x1230b4 = _0x1230b4 >= _0x65f51f ? _0x1230b4 : _0x65f51f));
        return _0x1230b4;
      }
      function _0x464d05(_0xfe12fa, _0x231e41, _0x3c6408, _0x3c0bfe, _0x4e4c67, _0x5d9577) {
        var _0x1193cf,
          _0x28de88 = 1 & _0x231e41,
          _0x30d953 = 2 & _0x231e41,
          _0x598358 = 4 & _0x231e41;
        _0x3c6408 && (_0x1193cf = _0x4e4c67 ? _0x3c6408(_0xfe12fa, _0x3c0bfe, _0x4e4c67, _0x5d9577) : _0x3c6408(_0xfe12fa));
        if (_0x1193cf !== _0x18a104) return _0x1193cf;
        if (!_0x95df83(_0xfe12fa)) return _0xfe12fa;
        var _0x101755 = _0x14dbd1(_0xfe12fa);
        if (_0x101755) {
          _0x1193cf = function (_0x7577fa) {
            var _0x1ae787 = _0x7577fa.length,
              _0x4e58a5 = new _0x7577fa.constructor(_0x1ae787);
            _0x1ae787 && 'string' == typeof _0x7577fa[0] && _0x5a55dd.call(_0x7577fa, 'index') && (_0x4e58a5.index = _0x7577fa.index, _0x4e58a5.input = _0x7577fa.input);
            return _0x4e58a5;
          }(_0xfe12fa);
          if (!_0x28de88) return _0x73a637(_0xfe12fa, _0x1193cf);
        } else {
          var _0x5d9953 = _0x444f77(_0xfe12fa),
            _0x5a54ce = _0x5d9953 == _0x1ae195 || _0x5d9953 == _0x298d65;
          if (_0x41f27f(_0xfe12fa)) return _0x1abb36(_0xfe12fa, _0x28de88);
          if (_0x5d9953 == _0x17902e || _0x5d9953 == _0x15a192 || _0x5a54ce && !_0x4e4c67) {
            _0x1193cf = _0x30d953 || _0x5a54ce ? {} : _0x1fd5e5(_0xfe12fa);
            if (!_0x28de88) return _0x30d953 ? function (_0x516386, _0x269ec9) {
              return _0x2e32c7(_0x516386, _0x3cc5bd(_0x516386), _0x269ec9);
            }(_0xfe12fa, function (_0x7a2914, _0x10c758) {
              return _0x7a2914 && _0x2e32c7(_0x10c758, _0x2247a8(_0x10c758), _0x7a2914);
            }(_0x1193cf, _0xfe12fa)) : function (_0x4da5e9, _0x5c5d07) {
              return _0x2e32c7(_0x4da5e9, _0x44f473(_0x4da5e9), _0x5c5d07);
            }(_0xfe12fa, _0x524437(_0x1193cf, _0xfe12fa));
          } else {
            if (!_0x48f884[_0x5d9953]) return _0x4e4c67 ? _0xfe12fa : {};
            _0x1193cf = function (_0x4b8075, _0x3a7191, _0x55bdef) {
              var _0x545011,
                _0x4527cc = _0x4b8075.constructor;
              switch (_0x3a7191) {
                case _0x3cf36a:
                  return _0x790845(_0x4b8075);
                case _0xf2bfb8:
                case _0x41b8a3:
                  return new _0x4527cc(+_0x4b8075);
                case _0x4d1fad:
                  return function (_0x136dce, _0x14ab7f) {
                    var _0x52d642 = _0x14ab7f ? _0x790845(_0x136dce.buffer) : _0x136dce.buffer;
                    return new _0x136dce.constructor(_0x52d642, _0x136dce.byteOffset, _0x136dce.byteLength);
                  }(_0x4b8075, _0x55bdef);
                case _0x155a99:
                case _0x57ae72:
                case _0xb55656:
                case _0x304f3c:
                case _0x2cef51:
                case _0x81f439:
                case _0x1b4471:
                case _0x4c0c1f:
                case _0x53e4ca:
                  return _0xc18cce(_0x4b8075, _0x55bdef);
                case _0x4c0bc9:
                  return new _0x4527cc();
                case _0x37f0a1:
                case _0x465ee6:
                  return new _0x4527cc(_0x4b8075);
                case _0x13669b:
                  return function (_0x57fd8e) {
                    var _0x550f20 = new _0x57fd8e.constructor(_0x57fd8e.source, _0x26a18e.exec(_0x57fd8e));
                    _0x550f20.lastIndex = _0x57fd8e.lastIndex;
                    return _0x550f20;
                  }(_0x4b8075);
                case _0x2443d3:
                  return new _0x4527cc();
                case _0x3f07d1:
                  _0x545011 = _0x4b8075;
                  return _0xa3dc22 ? _0x48fa9a(_0xa3dc22.call(_0x545011)) : {};
              }
            }(_0xfe12fa, _0x5d9953, _0x28de88);
          }
        }
        _0x5d9577 || (_0x5d9577 = new _0x31d98f());
        var _0x899434 = _0x5d9577.get(_0xfe12fa);
        if (_0x899434) return _0x899434;
        _0x5d9577.set(_0xfe12fa, _0x1193cf);
        if (_0x20594e(_0xfe12fa)) _0xfe12fa.forEach(function (_0x3bade2) {
          _0x1193cf.add(_0x464d05(_0x3bade2, _0x231e41, _0x3c6408, _0x3bade2, _0xfe12fa, _0x5d9577));
        });else _0x138140(_0xfe12fa) && _0xfe12fa.forEach(function (_0xf36369, _0x55bb96) {
          _0x1193cf.set(_0x55bb96, _0x464d05(_0xf36369, _0x231e41, _0x3c6408, _0x55bb96, _0xfe12fa, _0x5d9577));
        });
        var _0x3f1de9 = _0x101755 ? _0x18a104 : (_0x598358 ? _0x30d953 ? _0xf19315 : _0x1e3255 : _0x30d953 ? _0x2247a8 : _0x33c583)(_0xfe12fa);
        _0x4e0041(_0x3f1de9 || _0xfe12fa, function (_0x578909, _0x24307f) {
          _0x3f1de9 && (_0x578909 = _0xfe12fa[_0x24307f = _0x578909]);
          _0x28d3c2(_0x1193cf, _0x24307f, _0x464d05(_0x578909, _0x231e41, _0x3c6408, _0x24307f, _0xfe12fa, _0x5d9577));
        });
        return _0x1193cf;
      }
      function _0x43f8ab(_0x3bd464, _0x440812, _0x24e5b0) {
        var _0x40d40a = _0x24e5b0.length;
        if (null == _0x3bd464) return !_0x40d40a;
        for (_0x3bd464 = _0x48fa9a(_0x3bd464); _0x40d40a--;) {
          var _0x4c510a = _0x24e5b0[_0x40d40a],
            _0x1d725c = _0x440812[_0x4c510a],
            _0x4cdef9 = _0x3bd464[_0x4c510a];
          if (_0x4cdef9 === _0x18a104 && !(_0x4c510a in _0x3bd464) || !_0x1d725c(_0x4cdef9)) return false;
        }
        return true;
      }
      function _0x310dcc(_0x2f3380, _0x247d46, _0x389304) {
        if ('function' != typeof _0x2f3380) throw new _0x31211a(_0xe7d2d9);
        return _0x41921e(function () {
          _0x2f3380.apply(_0x18a104, _0x389304);
        }, _0x247d46);
      }
      function _0x19ed70(_0xe962ce, _0x345572, _0x3e2cc4, _0x21854d) {
        var _0x433ed1 = -1,
          _0x5df8e2 = _0x5d45ce,
          _0x287b52 = true,
          _0x572f8 = _0xe962ce.length,
          _0x438a88 = [],
          _0x1b9593 = _0x345572.length;
        if (!_0x572f8) return _0x438a88;
        _0x3e2cc4 && (_0x345572 = _0x5b4a4e(_0x345572, _0x589c7a(_0x3e2cc4)));
        if (_0x21854d) {
          _0x5df8e2 = _0x14f625;
          _0x287b52 = false;
        } else _0x345572.length >= 200 && (_0x5df8e2 = _0x4154d0, _0x287b52 = false, _0x345572 = new _0x2401ff(_0x345572));
        _0x337cb5: for (; ++_0x433ed1 < _0x572f8;) {
          var _0x102ef9 = _0xe962ce[_0x433ed1],
            _0x302558 = null == _0x3e2cc4 ? _0x102ef9 : _0x3e2cc4(_0x102ef9);
          _0x102ef9 = _0x21854d || 0 !== _0x102ef9 ? _0x102ef9 : 0;
          if (_0x287b52 && _0x302558 == _0x302558) {
            for (var _0x4056b4 = _0x1b9593; _0x4056b4--;) if (_0x345572[_0x4056b4] === _0x302558) continue _0x337cb5;
            _0x438a88.push(_0x102ef9);
          } else _0x5df8e2(_0x345572, _0x302558, _0x21854d) || _0x438a88.push(_0x102ef9);
        }
        return _0x438a88;
      }
      _0x4fb193.templateSettings = {
        escape: _0x162951,
        evaluate: _0xd360c0,
        interpolate: _0x3455f3,
        variable: '',
        imports: {
          _: _0x4fb193
        }
      };
      _0x4fb193.prototype = _0x136a34.prototype;
      _0x4fb193.prototype.constructor = _0x4fb193;
      _0x44e077.prototype = _0x41abc3(_0x136a34.prototype);
      _0x44e077.prototype.constructor = _0x44e077;
      _0x52cb1f.prototype = _0x41abc3(_0x136a34.prototype);
      _0x52cb1f.prototype.constructor = _0x52cb1f;
      _0xb7b4ca.prototype.clear = function () {
        this.__data__ = _0x1f2420 ? _0x1f2420(null) : {};
        this.size = 0;
      };
      _0xb7b4ca.prototype.delete = function (_0x370fd2) {
        var _0x3fadc8 = this.has(_0x370fd2) && delete this.__data__[_0x370fd2];
        this.size -= _0x3fadc8 ? 1 : 0;
        return _0x3fadc8;
      };
      _0xb7b4ca.prototype.get = function (_0x3b322c) {
        var _0x3db707 = this.__data__;
        if (_0x1f2420) {
          var _0x263ebd = _0x3db707[_0x3b322c];
          return _0x263ebd === _0x183b18 ? _0x18a104 : _0x263ebd;
        }
        if (_0x5a55dd.call(_0x3db707, _0x3b322c)) return _0x3db707[_0x3b322c];
        return _0x18a104;
      };
      _0xb7b4ca.prototype.has = function (_0x127348) {
        var _0x1f9357 = this.__data__;
        if (_0x1f2420) return _0x1f9357[_0x127348] !== _0x18a104;
        return _0x5a55dd.call(_0x1f9357, _0x127348);
      };
      _0xb7b4ca.prototype.set = function (_0x206ec8, _0x3548c8) {
        var _0x4207c4 = this.__data__;
        this.size += this.has(_0x206ec8) ? 0 : 1;
        _0x4207c4[_0x206ec8] = _0x1f2420 && _0x3548c8 === _0x18a104 ? _0x183b18 : _0x3548c8;
        return this;
      };
      _0x63e927.prototype.clear = function () {
        this.__data__ = [];
        this.size = 0;
      };
      _0x63e927.prototype.delete = function (_0x40ee37) {
        var _0x215c3f = this.__data__,
          _0x41b032 = _0x504e8c(_0x215c3f, _0x40ee37);
        return !(_0x41b032 < 0 || (_0x41b032 == _0x215c3f.length - 1 ? _0x215c3f.pop() : _0x1dc33b.call(_0x215c3f, _0x41b032, 1), --this.size, 0));
      };
      _0x63e927.prototype.get = function (_0x25d285) {
        var _0x193759 = this.__data__,
          _0x2ec740 = _0x504e8c(_0x193759, _0x25d285);
        if (_0x2ec740 < 0) return _0x18a104;
        return _0x193759[_0x2ec740][1];
      };
      _0x63e927.prototype.has = function (_0x5bee0b) {
        return _0x504e8c(this.__data__, _0x5bee0b) > -1;
      };
      _0x63e927.prototype.set = function (_0x4b7e6f, _0x52d1f3) {
        var _0x5d9648 = this.__data__,
          _0x2adac9 = _0x504e8c(_0x5d9648, _0x4b7e6f);
        if (_0x2adac9 < 0) {
          ++this.size;
          _0x5d9648.push([_0x4b7e6f, _0x52d1f3]);
        } else _0x5d9648[_0x2adac9][1] = _0x52d1f3;
        return this;
      };
      _0x3d489a.prototype.clear = function () {
        this.size = 0;
        this.__data__ = {
          hash: new _0xb7b4ca(),
          map: new (_0x488194 || _0x63e927)(),
          string: new _0xb7b4ca()
        };
      };
      _0x3d489a.prototype.delete = function (_0x212c6e) {
        var _0x3efae6 = _0x1f6c8b(this, _0x212c6e).delete(_0x212c6e);
        this.size -= _0x3efae6 ? 1 : 0;
        return _0x3efae6;
      };
      _0x3d489a.prototype.get = function (_0x1d763c) {
        return _0x1f6c8b(this, _0x1d763c).get(_0x1d763c);
      };
      _0x3d489a.prototype.has = function (_0x13d084) {
        return _0x1f6c8b(this, _0x13d084).has(_0x13d084);
      };
      _0x3d489a.prototype.set = function (_0x41f187, _0x4d2fc7) {
        var _0x251e34 = _0x1f6c8b(this, _0x41f187),
          _0x343b5d = _0x251e34.size;
        _0x251e34.set(_0x41f187, _0x4d2fc7);
        this.size += _0x251e34.size == _0x343b5d ? 0 : 1;
        return this;
      };
      _0x2401ff.prototype.add = _0x2401ff.prototype.push = function (_0x3a7839) {
        this.__data__.set(_0x3a7839, _0x183b18);
        return this;
      };
      _0x2401ff.prototype.has = function (_0x3d198d) {
        return this.__data__.has(_0x3d198d);
      };
      _0x31d98f.prototype.clear = function () {
        this.__data__ = new _0x63e927();
        this.size = 0;
      };
      _0x31d98f.prototype.delete = function (_0x4f81c5) {
        var _0x27c808 = this.__data__,
          _0x5b0a9e = _0x27c808.delete(_0x4f81c5);
        this.size = _0x27c808.size;
        return _0x5b0a9e;
      };
      _0x31d98f.prototype.get = function (_0xec8d8b) {
        return this.__data__.get(_0xec8d8b);
      };
      _0x31d98f.prototype.has = function (_0x3ceaf1) {
        return this.__data__.has(_0x3ceaf1);
      };
      _0x31d98f.prototype.set = function (_0x36c369, _0x22b4e9) {
        var _0x47eada = this.__data__;
        if (_0x47eada instanceof _0x63e927) {
          var _0x52202c = _0x47eada.__data__;
          if (!_0x488194 || _0x52202c.length < 199) {
            _0x52202c.push([_0x36c369, _0x22b4e9]);
            this.size = ++_0x47eada.size;
            return this;
          }
          _0x47eada = this.__data__ = new _0x3d489a(_0x52202c);
        }
        _0x47eada.set(_0x36c369, _0x22b4e9);
        this.size = _0x47eada.size;
        return this;
      };
      var _0x571673 = _0x297ac7(_0x253c4e),
        _0x1265d8 = _0x297ac7(_0x15e238, true);
      function _0xf996a(_0x1bd8a5, _0x4788c3) {
        var _0x3c875f = true;
        _0x571673(_0x1bd8a5, function (_0x3aaef4, _0x2d48f3, _0x16e89a) {
          return _0x3c875f = !!_0x4788c3(_0x3aaef4, _0x2d48f3, _0x16e89a);
        });
        return _0x3c875f;
      }
      function _0x510f3c(_0x4e235c, _0x58e823, _0x18fed3) {
        for (var _0xa471fd = -1, _0x10693f = _0x4e235c.length; ++_0xa471fd < _0x10693f;) {
          var _0x30a048 = _0x4e235c[_0xa471fd],
            _0x35a4c3 = _0x58e823(_0x30a048);
          if (null != _0x35a4c3 && (_0x410f48 === _0x18a104 ? _0x35a4c3 == _0x35a4c3 && !_0x12638b(_0x35a4c3) : _0x18fed3(_0x35a4c3, _0x410f48))) var _0x410f48 = _0x35a4c3,
            _0x81b7fd = _0x30a048;
        }
        return _0x81b7fd;
      }
      function _0xeb6ae8(_0x49c523, _0x559a45) {
        var _0x22328a = [];
        _0x571673(_0x49c523, function (_0x3cd16e, _0x5152aa, _0x4689db) {
          _0x559a45(_0x3cd16e, _0x5152aa, _0x4689db) && _0x22328a.push(_0x3cd16e);
        });
        return _0x22328a;
      }
      function _0x2d66a0(_0x3ddf35, _0xbb3c0b, _0x49fe1d, _0x2e3c4e, _0x4c2a88) {
        var _0x2a13e4 = -1,
          _0x26ff06 = _0x3ddf35.length;
        _0x49fe1d || (_0x49fe1d = _0x2c9c69);
        for (_0x4c2a88 || (_0x4c2a88 = []); ++_0x2a13e4 < _0x26ff06;) {
          var _0x3df002 = _0x3ddf35[_0x2a13e4];
          if (_0xbb3c0b > 0 && _0x49fe1d(_0x3df002)) {
            if (_0xbb3c0b > 1) _0x2d66a0(_0x3df002, _0xbb3c0b - 1, _0x49fe1d, _0x2e3c4e, _0x4c2a88);else _0x363a38(_0x4c2a88, _0x3df002);
          } else _0x2e3c4e || (_0x4c2a88[_0x4c2a88.length] = _0x3df002);
        }
        return _0x4c2a88;
      }
      var _0x2d2c26 = _0x3ac8f4(),
        _0x26133f = _0x3ac8f4(true);
      function _0x253c4e(_0x4cfb7e, _0x295aae) {
        return _0x4cfb7e && _0x2d2c26(_0x4cfb7e, _0x295aae, _0x33c583);
      }
      function _0x15e238(_0x36b92c, _0x4d8d66) {
        return _0x36b92c && _0x26133f(_0x36b92c, _0x4d8d66, _0x33c583);
      }
      function _0x286842(_0x30f2d5, _0x114d7f) {
        return _0x200b15(_0x114d7f, function (_0x10a814) {
          return _0x511334(_0x30f2d5[_0x10a814]);
        });
      }
      function _0x4d632a(_0xe656d3, _0x6a61f2) {
        for (var _0x50ee0b = 0, _0x587fe0 = (_0x6a61f2 = _0x5357b7(_0x6a61f2, _0xe656d3)).length; null != _0xe656d3 && _0x50ee0b < _0x587fe0;) _0xe656d3 = _0xe656d3[_0x448eca(_0x6a61f2[_0x50ee0b++])];
        return _0x50ee0b && _0x50ee0b == _0x587fe0 ? _0xe656d3 : _0x18a104;
      }
      function _0x116933(_0x320f1a, _0x3df4e0, _0x59b167) {
        var _0x49af40 = _0x3df4e0(_0x320f1a);
        if (_0x14dbd1(_0x320f1a)) return _0x49af40;
        return _0x363a38(_0x49af40, _0x59b167(_0x320f1a));
      }
      function _0x22eff8(_0x55097c) {
        if (null == _0x55097c) return _0x55097c === _0x18a104 ? "[object Undefined]" : "[object Null]";
        if (_0x2f9563 && _0x2f9563 in _0x48fa9a(_0x55097c)) return function (_0x355796) {
          var _0x2d2003 = _0x5a55dd.call(_0x355796, _0x2f9563),
            _0x49a3d0 = _0x355796[_0x2f9563];
          try {
            _0x355796[_0x2f9563] = _0x18a104;
            var _0x1057b8 = true;
          } catch (_0x504006) {}
          var _0x548c2b = _0x3d2036.call(_0x355796);
          _0x1057b8 && (_0x2d2003 ? _0x355796[_0x2f9563] = _0x49a3d0 : delete _0x355796[_0x2f9563]);
          return _0x548c2b;
        }(_0x55097c);
        return function (_0x22b5d9) {
          return _0x3d2036.call(_0x22b5d9);
        }(_0x55097c);
      }
      function _0x578146(_0x4791f7, _0x2143e1) {
        return _0x4791f7 > _0x2143e1;
      }
      function _0x323190(_0x498eaf, _0x5164fb) {
        return null != _0x498eaf && _0x5a55dd.call(_0x498eaf, _0x5164fb);
      }
      function _0x360053(_0x1cefb4, _0x312f60) {
        return null != _0x1cefb4 && _0x312f60 in _0x48fa9a(_0x1cefb4);
      }
      function _0x295e23(_0x5390b6, _0x2dfac8, _0x183d00) {
        for (var _0x4fbd15 = _0x183d00 ? _0x14f625 : _0x5d45ce, _0x119835 = _0x5390b6[0].length, _0x1d0643 = _0x5390b6.length, _0x5e65a7 = _0x1d0643, _0x3616b9 = _0x30943d(_0x1d0643), _0x4beff9 = 1 / 0, _0x72afee = []; _0x5e65a7--;) {
          var _0x272acb = _0x5390b6[_0x5e65a7];
          _0x5e65a7 && _0x2dfac8 && (_0x272acb = _0x5b4a4e(_0x272acb, _0x589c7a(_0x2dfac8)));
          _0x4beff9 = _0x5b234e(_0x272acb.length, _0x4beff9);
          _0x3616b9[_0x5e65a7] = !_0x183d00 && (_0x2dfac8 || _0x119835 >= 120 && _0x272acb.length >= 120) ? new _0x2401ff(_0x5e65a7 && _0x272acb) : _0x18a104;
        }
        _0x272acb = _0x5390b6[0];
        var _0x141bbe = -1,
          _0x84c736 = _0x3616b9[0];
        _0x4698bd: for (; ++_0x141bbe < _0x119835 && _0x72afee.length < _0x4beff9;) {
          var _0x2d7c73 = _0x272acb[_0x141bbe],
            _0x9f30ff = _0x2dfac8 ? _0x2dfac8(_0x2d7c73) : _0x2d7c73;
          _0x2d7c73 = _0x183d00 || 0 !== _0x2d7c73 ? _0x2d7c73 : 0;
          if (!(_0x84c736 ? _0x4154d0(_0x84c736, _0x9f30ff) : _0x4fbd15(_0x72afee, _0x9f30ff, _0x183d00))) {
            for (_0x5e65a7 = _0x1d0643; --_0x5e65a7;) {
              var _0x369f79 = _0x3616b9[_0x5e65a7];
              if (!(_0x369f79 ? _0x4154d0(_0x369f79, _0x9f30ff) : _0x4fbd15(_0x5390b6[_0x5e65a7], _0x9f30ff, _0x183d00))) continue _0x4698bd;
            }
            _0x84c736 && _0x84c736.push(_0x9f30ff);
            _0x72afee.push(_0x2d7c73);
          }
        }
        return _0x72afee;
      }
      function _0x9ca3e2(_0xf5ac21, _0x352fa0, _0x3e93c1) {
        var _0x5da830 = null == (_0xf5ac21 = _0x460865(_0xf5ac21, _0x352fa0 = _0x5357b7(_0x352fa0, _0xf5ac21))) ? _0xf5ac21 : _0xf5ac21[_0x448eca(_0xc58f7(_0x352fa0))];
        if (null == _0x5da830) return _0x18a104;
        return _0x408cf2(_0x5da830, _0xf5ac21, _0x3e93c1);
      }
      function _0x2b41ac(_0x3d3f12) {
        return _0x12dbae(_0x3d3f12) && _0x22eff8(_0x3d3f12) == _0x15a192;
      }
      function _0x26e50d(_0x52e504, _0x1fb63f, _0x45b52c, _0xc4a33e, _0x1c7b48) {
        return _0x52e504 === _0x1fb63f || (null == _0x52e504 || null == _0x1fb63f || !_0x12dbae(_0x52e504) && !_0x12dbae(_0x1fb63f) ? _0x52e504 != _0x52e504 && _0x1fb63f != _0x1fb63f : function (_0xf5703a, _0x253b75, _0x1762c6, _0x36255b, _0x5a9611, _0x3a3255) {
          var _0x449ba8 = _0x14dbd1(_0xf5703a),
            _0x467a81 = _0x14dbd1(_0x253b75),
            _0x8773cb = _0x449ba8 ? _0x416322 : _0x444f77(_0xf5703a),
            _0x371d90 = _0x467a81 ? _0x416322 : _0x444f77(_0x253b75),
            _0x2dc1fe = (_0x8773cb = _0x8773cb == _0x15a192 ? _0x17902e : _0x8773cb) == _0x17902e,
            _0x2c3212 = (_0x371d90 = _0x371d90 == _0x15a192 ? _0x17902e : _0x371d90) == _0x17902e,
            _0xa2090c = _0x8773cb == _0x371d90;
          if (_0xa2090c && _0x41f27f(_0xf5703a)) {
            if (!_0x41f27f(_0x253b75)) return false;
            _0x449ba8 = true;
            _0x2dc1fe = false;
          }
          if (_0xa2090c && !_0x2dc1fe) {
            _0x3a3255 || (_0x3a3255 = new _0x31d98f());
            if (_0x449ba8 || _0x3ed7c9(_0xf5703a)) return _0x135da5(_0xf5703a, _0x253b75, _0x1762c6, _0x36255b, _0x5a9611, _0x3a3255);
            return function (_0x44169e, _0x2544a8, _0x4fc2be, _0x1ccffa, _0x52303b, _0x2b2a45, _0x5c34f4) {
              switch (_0x4fc2be) {
                case _0x4d1fad:
                  if (_0x44169e.byteLength != _0x2544a8.byteLength || _0x44169e.byteOffset != _0x2544a8.byteOffset) return false;
                  _0x44169e = _0x44169e.buffer;
                  _0x2544a8 = _0x2544a8.buffer;
                case _0x3cf36a:
                  return !(_0x44169e.byteLength != _0x2544a8.byteLength || !_0x2b2a45(new _0x2e08e2(_0x44169e), new _0x2e08e2(_0x2544a8)));
                case _0xf2bfb8:
                case _0x41b8a3:
                case _0x37f0a1:
                  return _0x1eed1e(+_0x44169e, +_0x2544a8);
                case _0x352b83:
                  return _0x44169e.name == _0x2544a8.name && _0x44169e.message == _0x2544a8.message;
                case _0x13669b:
                case _0x465ee6:
                  return _0x44169e == _0x2544a8 + '';
                case _0x4c0bc9:
                  var _0x19cd9f = _0x9009ed;
                case _0x2443d3:
                  var _0x59acff = 1 & _0x1ccffa;
                  _0x19cd9f || (_0x19cd9f = _0x2391fa);
                  if (_0x44169e.size != _0x2544a8.size && !_0x59acff) return false;
                  var _0x3ff0f6 = _0x5c34f4.get(_0x44169e);
                  if (_0x3ff0f6) return _0x3ff0f6 == _0x2544a8;
                  _0x1ccffa |= 2;
                  _0x5c34f4.set(_0x44169e, _0x2544a8);
                  var _0x24e4f9 = _0x135da5(_0x19cd9f(_0x44169e), _0x19cd9f(_0x2544a8), _0x1ccffa, _0x52303b, _0x2b2a45, _0x5c34f4);
                  _0x5c34f4.delete(_0x44169e);
                  return _0x24e4f9;
                case _0x3f07d1:
                  if (_0xa3dc22) return _0xa3dc22.call(_0x44169e) == _0xa3dc22.call(_0x2544a8);
              }
              return false;
            }(_0xf5703a, _0x253b75, _0x8773cb, _0x1762c6, _0x36255b, _0x5a9611, _0x3a3255);
          }
          if (!(1 & _0x1762c6)) {
            var _0x4b2d35 = _0x2dc1fe && _0x5a55dd.call(_0xf5703a, "__wrapped__"),
              _0x1919f9 = _0x2c3212 && _0x5a55dd.call(_0x253b75, '__wrapped__');
            if (_0x4b2d35 || _0x1919f9) {
              var _0x489af4 = _0x4b2d35 ? _0xf5703a.value() : _0xf5703a,
                _0x267375 = _0x1919f9 ? _0x253b75.value() : _0x253b75;
              _0x3a3255 || (_0x3a3255 = new _0x31d98f());
              return _0x5a9611(_0x489af4, _0x267375, _0x1762c6, _0x36255b, _0x3a3255);
            }
          }
          return !!_0xa2090c && (_0x3a3255 || (_0x3a3255 = new _0x31d98f()), function (_0x59f4cf, _0xd5c889, _0x3cbc5c, _0x5c7cff, _0x501ba5, _0x412435) {
            var _0xc4bebf = 1 & _0x3cbc5c,
              _0x196e3d = _0x1e3255(_0x59f4cf),
              _0x5c8a98 = _0x196e3d.length,
              _0x293cdb = _0x1e3255(_0xd5c889),
              _0x2fadf9 = _0x293cdb.length;
            if (_0x5c8a98 != _0x2fadf9 && !_0xc4bebf) return false;
            for (var _0x29973c = _0x5c8a98; _0x29973c--;) {
              var _0x3e6724 = _0x196e3d[_0x29973c];
              if (!(_0xc4bebf ? _0x3e6724 in _0xd5c889 : _0x5a55dd.call(_0xd5c889, _0x3e6724))) return false;
            }
            var _0x11f049 = _0x412435.get(_0x59f4cf),
              _0x279ff6 = _0x412435.get(_0xd5c889);
            if (_0x11f049 && _0x279ff6) return _0x11f049 == _0xd5c889 && _0x279ff6 == _0x59f4cf;
            var _0x1cd58b = true;
            _0x412435.set(_0x59f4cf, _0xd5c889);
            _0x412435.set(_0xd5c889, _0x59f4cf);
            for (var _0x3ec3b7 = _0xc4bebf; ++_0x29973c < _0x5c8a98;) {
              var _0x5bd090 = _0x59f4cf[_0x3e6724 = _0x196e3d[_0x29973c]],
                _0x280be3 = _0xd5c889[_0x3e6724];
              if (_0x5c7cff) var _0x250b4a = _0xc4bebf ? _0x5c7cff(_0x280be3, _0x5bd090, _0x3e6724, _0xd5c889, _0x59f4cf, _0x412435) : _0x5c7cff(_0x5bd090, _0x280be3, _0x3e6724, _0x59f4cf, _0xd5c889, _0x412435);
              if (!(_0x250b4a === _0x18a104 ? _0x5bd090 === _0x280be3 || _0x501ba5(_0x5bd090, _0x280be3, _0x3cbc5c, _0x5c7cff, _0x412435) : _0x250b4a)) {
                _0x1cd58b = false;
                break;
              }
              _0x3ec3b7 || (_0x3ec3b7 = "constructor" == _0x3e6724);
            }
            if (_0x1cd58b && !_0x3ec3b7) {
              var _0x2bf6dd = _0x59f4cf.constructor,
                _0x4549df = _0xd5c889.constructor;
              _0x2bf6dd == _0x4549df || !('constructor' in _0x59f4cf) || !("constructor" in _0xd5c889) || "function" == typeof _0x2bf6dd && _0x2bf6dd instanceof _0x2bf6dd && "function" == typeof _0x4549df && _0x4549df instanceof _0x4549df || (_0x1cd58b = false);
            }
            _0x412435.delete(_0x59f4cf);
            _0x412435.delete(_0xd5c889);
            return _0x1cd58b;
          }(_0xf5703a, _0x253b75, _0x1762c6, _0x36255b, _0x5a9611, _0x3a3255));
        }(_0x52e504, _0x1fb63f, _0x45b52c, _0xc4a33e, _0x26e50d, _0x1c7b48));
      }
      function _0x9693df(_0x57fd5a, _0xe17e84, _0x4999d9, _0x412814) {
        var _0x20cc0f = _0x4999d9.length,
          _0x54d003 = _0x20cc0f,
          _0x535554 = !_0x412814;
        if (null == _0x57fd5a) return !_0x54d003;
        for (_0x57fd5a = _0x48fa9a(_0x57fd5a); _0x20cc0f--;) {
          var _0x39a020 = _0x4999d9[_0x20cc0f];
          if (_0x535554 && _0x39a020[2] ? _0x39a020[1] !== _0x57fd5a[_0x39a020[0]] : !(_0x39a020[0] in _0x57fd5a)) return false;
        }
        for (; ++_0x20cc0f < _0x54d003;) {
          var _0x1d9f19 = (_0x39a020 = _0x4999d9[_0x20cc0f])[0],
            _0x5c5c93 = _0x57fd5a[_0x1d9f19],
            _0xa3bdc6 = _0x39a020[1];
          if (_0x535554 && _0x39a020[2]) {
            if (_0x5c5c93 === _0x18a104 && !(_0x1d9f19 in _0x57fd5a)) return false;
          } else {
            var _0x331822 = new _0x31d98f();
            if (_0x412814) var _0x378fb7 = _0x412814(_0x5c5c93, _0xa3bdc6, _0x1d9f19, _0x57fd5a, _0xe17e84, _0x331822);
            if (!(_0x378fb7 === _0x18a104 ? _0x26e50d(_0xa3bdc6, _0x5c5c93, 3, _0x412814, _0x331822) : _0x378fb7)) return false;
          }
        }
        return true;
      }
      function _0x37eef3(_0x323249) {
        return !(!_0x95df83(_0x323249) || (_0x5953f0 = _0x323249, _0x112fb9 && _0x112fb9 in _0x5953f0)) && (_0x511334(_0x323249) ? _0x3bbdf9 : _0x4bedae).test(_0x1298eb(_0x323249));
        var _0x5953f0;
      }
      function _0x166820(_0x6f93ba) {
        if ("function" == typeof _0x6f93ba) return _0x6f93ba;
        if (null == _0x6f93ba) return _0x5529b6;
        if ("object" == typeof _0x6f93ba) return _0x14dbd1(_0x6f93ba) ? _0x133d57(_0x6f93ba[0], _0x6f93ba[1]) : _0xcec1b1(_0x6f93ba);
        return _0x544494(_0x6f93ba);
      }
      function _0x10cfab(_0x58aa1e) {
        if (!_0x2946c0(_0x58aa1e)) return _0x275b04(_0x58aa1e);
        var _0x48dd68 = [];
        for (var _0x2a6cd0 in _0x48fa9a(_0x58aa1e)) _0x5a55dd.call(_0x58aa1e, _0x2a6cd0) && 'constructor' != _0x2a6cd0 && _0x48dd68.push(_0x2a6cd0);
        return _0x48dd68;
      }
      function _0x2e0629(_0x18ae9f) {
        if (!_0x95df83(_0x18ae9f)) return function (_0x37d8cd) {
          var _0x2df818 = [];
          if (null != _0x37d8cd) {
            for (var _0x95d34c in _0x48fa9a(_0x37d8cd)) _0x2df818.push(_0x95d34c);
          }
          return _0x2df818;
        }(_0x18ae9f);
        var _0xdd127e = _0x2946c0(_0x18ae9f),
          _0x1a64f5 = [];
        for (var _0x28c835 in _0x18ae9f) ("constructor" != _0x28c835 || !_0xdd127e && _0x5a55dd.call(_0x18ae9f, _0x28c835)) && _0x1a64f5.push(_0x28c835);
        return _0x1a64f5;
      }
      function _0x27f942(_0x12864d, _0xd4b905) {
        return _0x12864d < _0xd4b905;
      }
      function _0x57ea90(_0x4146e0, _0x1cc13b) {
        var _0x300f59 = -1,
          _0x1d7cfb = _0x58ad0d(_0x4146e0) ? _0x30943d(_0x4146e0.length) : [];
        _0x571673(_0x4146e0, function (_0x29cb87, _0x1282b7, _0x28422d) {
          _0x1d7cfb[++_0x300f59] = _0x1cc13b(_0x29cb87, _0x1282b7, _0x28422d);
        });
        return _0x1d7cfb;
      }
      function _0xcec1b1(_0x24d359) {
        var _0x188606 = _0x5eeb8a(_0x24d359);
        if (1 == _0x188606.length && _0x188606[0][2]) return _0x44bb65(_0x188606[0][0], _0x188606[0][1]);
        return function (_0xaebf6b) {
          return _0xaebf6b === _0x24d359 || _0x9693df(_0xaebf6b, _0x24d359, _0x188606);
        };
      }
      function _0x133d57(_0x58897e, _0x3d3911) {
        if (_0x5075cb(_0x58897e) && _0x190a3a(_0x3d3911)) return _0x44bb65(_0x448eca(_0x58897e), _0x3d3911);
        return function (_0xbff212) {
          var _0x16b811 = _0x3b1dd3(_0xbff212, _0x58897e);
          if (_0x16b811 === _0x18a104 && _0x16b811 === _0x3d3911) return _0x36e820(_0xbff212, _0x58897e);
          return _0x26e50d(_0x3d3911, _0x16b811, 3);
        };
      }
      function _0x2fcef7(_0x1a7132, _0x4a7003, _0x56541a, _0x5546ed, _0x43161d) {
        _0x1a7132 !== _0x4a7003 && _0x2d2c26(_0x4a7003, function (_0x2b1a57, _0x5cb909) {
          _0x43161d || (_0x43161d = new _0x31d98f());
          if (_0x95df83(_0x2b1a57)) !function (_0x251142, _0x7ab404, _0x29671b, _0x2ba2d4, _0xef6063, _0x3d65e4, _0x176929) {
            var _0x11ede3 = _0x2a00ba(_0x251142, _0x29671b),
              _0xeb4786 = _0x2a00ba(_0x7ab404, _0x29671b),
              _0x1dc12c = _0x176929.get(_0xeb4786);
            if (_0x1dc12c) _0x274b99(_0x251142, _0x29671b, _0x1dc12c);else {
              var _0x719963 = _0x3d65e4 ? _0x3d65e4(_0x11ede3, _0xeb4786, _0x29671b + '', _0x251142, _0x7ab404, _0x176929) : _0x18a104,
                _0x1b9085 = _0x719963 === _0x18a104;
              if (_0x1b9085) {
                var _0x9f012f = _0x14dbd1(_0xeb4786),
                  _0xae4e5a = !_0x9f012f && _0x41f27f(_0xeb4786),
                  _0x3993d1 = !_0x9f012f && !_0xae4e5a && _0x3ed7c9(_0xeb4786);
                _0x719963 = _0xeb4786;
                if (_0x9f012f || _0xae4e5a || _0x3993d1) {
                  if (_0x14dbd1(_0x11ede3)) _0x719963 = _0x11ede3;else if (_0x31f2f7(_0x11ede3)) _0x719963 = _0x73a637(_0x11ede3);else if (_0xae4e5a) {
                    _0x1b9085 = false;
                    _0x719963 = _0x1abb36(_0xeb4786, true);
                  } else if (_0x3993d1) {
                    _0x1b9085 = false;
                    _0x719963 = _0xc18cce(_0xeb4786, true);
                  } else _0x719963 = [];
                } else if (_0x30a8e6(_0xeb4786) || _0xb4fb1b(_0xeb4786)) {
                  _0x719963 = _0x11ede3;
                  if (_0xb4fb1b(_0x11ede3)) _0x719963 = _0x716ec4(_0x11ede3);else _0x95df83(_0x11ede3) && !_0x511334(_0x11ede3) || (_0x719963 = _0x1fd5e5(_0xeb4786));
                } else _0x1b9085 = false;
              }
              _0x1b9085 && (_0x176929.set(_0xeb4786, _0x719963), _0xef6063(_0x719963, _0xeb4786, _0x2ba2d4, _0x3d65e4, _0x176929), _0x176929.delete(_0xeb4786));
              _0x274b99(_0x251142, _0x29671b, _0x719963);
            }
          }(_0x1a7132, _0x4a7003, _0x5cb909, _0x56541a, _0x2fcef7, _0x5546ed, _0x43161d);else {
            var _0x9c5119 = _0x5546ed ? _0x5546ed(_0x2a00ba(_0x1a7132, _0x5cb909), _0x2b1a57, _0x5cb909 + '', _0x1a7132, _0x4a7003, _0x43161d) : _0x18a104;
            _0x9c5119 === _0x18a104 && (_0x9c5119 = _0x2b1a57);
            _0x274b99(_0x1a7132, _0x5cb909, _0x9c5119);
          }
        }, _0x2247a8);
      }
      function _0x29e053(_0x313551, _0x445f70) {
        var _0x599d24 = _0x313551.length;
        if (_0x599d24) return _0x583b31(_0x445f70 += _0x445f70 < 0 ? _0x599d24 : 0, _0x599d24) ? _0x313551[_0x445f70] : _0x18a104;
      }
      function _0x1edb82(_0x346f76, _0x25ee23, _0x28fb2f) {
        _0x25ee23 = _0x25ee23.length ? _0x5b4a4e(_0x25ee23, function (_0x3a4856) {
          if (_0x14dbd1(_0x3a4856)) return function (_0x4ea97e) {
            return _0x4d632a(_0x4ea97e, 1 === _0x3a4856.length ? _0x3a4856[0] : _0x3a4856);
          };
          return _0x3a4856;
        }) : [_0x5529b6];
        var _0x57def7 = -1;
        _0x25ee23 = _0x5b4a4e(_0x25ee23, _0x589c7a(_0x2e11c8()));
        return function (_0x414f19, _0xd03ccf) {
          var _0x26b1ff = _0x414f19.length;
          for (_0x414f19.sort(_0xd03ccf); _0x26b1ff--;) _0x414f19[_0x26b1ff] = _0x414f19[_0x26b1ff].value;
          return _0x414f19;
        }(_0x57ea90(_0x346f76, function (_0x46db36, _0x79e6cc, _0x1de1cb) {
          return {
            criteria: _0x5b4a4e(_0x25ee23, function (_0x3f0f84) {
              return _0x3f0f84(_0x46db36);
            }),
            index: ++_0x57def7,
            value: _0x46db36
          };
        }), function (_0x43b065, _0x499576) {
          return function (_0x54932c, _0x5eab65, _0x3152aa) {
            for (var _0x1a287f = -1, _0x189f51 = _0x54932c.criteria, _0x155915 = _0x5eab65.criteria, _0x553da7 = _0x189f51.length, _0x984860 = _0x3152aa.length; ++_0x1a287f < _0x553da7;) {
              var _0x47e3c1 = _0x47ca41(_0x189f51[_0x1a287f], _0x155915[_0x1a287f]);
              if (_0x47e3c1) return _0x1a287f >= _0x984860 ? _0x47e3c1 : _0x47e3c1 * ("desc" == _0x3152aa[_0x1a287f] ? -1 : 1);
            }
            return _0x54932c.index - _0x5eab65.index;
          }(_0x43b065, _0x499576, _0x28fb2f);
        });
      }
      function _0x5441b3(_0x4c040c, _0x2afbbd, _0x3a29eb) {
        for (var _0x4b1de9 = -1, _0x31bd40 = _0x2afbbd.length, _0x571240 = {}; ++_0x4b1de9 < _0x31bd40;) {
          var _0x2054a5 = _0x2afbbd[_0x4b1de9],
            _0x4254c0 = _0x4d632a(_0x4c040c, _0x2054a5);
          _0x3a29eb(_0x4254c0, _0x2054a5) && _0x37cbe5(_0x571240, _0x5357b7(_0x2054a5, _0x4c040c), _0x4254c0);
        }
        return _0x571240;
      }
      function _0x2e1fc6(_0x36c55a, _0x296869, _0x34fa54, _0x22858f) {
        var _0x8c53f9 = _0x22858f ? _0x4eec90 : _0x1da7c9,
          _0x5ad6fe = -1,
          _0x10e11f = _0x296869.length,
          _0x15289f = _0x36c55a;
        _0x36c55a === _0x296869 && (_0x296869 = _0x73a637(_0x296869));
        for (_0x34fa54 && (_0x15289f = _0x5b4a4e(_0x36c55a, _0x589c7a(_0x34fa54))); ++_0x5ad6fe < _0x10e11f;) for (var _0x272f80 = 0, _0xfcf18a = _0x296869[_0x5ad6fe], _0x36c8d2 = _0x34fa54 ? _0x34fa54(_0xfcf18a) : _0xfcf18a; (_0x272f80 = _0x8c53f9(_0x15289f, _0x36c8d2, _0x272f80, _0x22858f)) > -1;) {
          _0x15289f !== _0x36c55a && _0x1dc33b.call(_0x15289f, _0x272f80, 1);
          _0x1dc33b.call(_0x36c55a, _0x272f80, 1);
        }
        return _0x36c55a;
      }
      function _0x2ebae1(_0x3b8780, _0x1f3246) {
        for (var _0x4e7df2 = _0x3b8780 ? _0x1f3246.length : 0, _0xbc4ac = _0x4e7df2 - 1; _0x4e7df2--;) {
          var _0x592799 = _0x1f3246[_0x4e7df2];
          if (_0x4e7df2 == _0xbc4ac || _0x592799 !== _0x2365ac) {
            var _0x2365ac = _0x592799;
            if (_0x583b31(_0x592799)) _0x1dc33b.call(_0x3b8780, _0x592799, 1);else _0x4e07fa(_0x3b8780, _0x592799);
          }
        }
        return _0x3b8780;
      }
      function _0x7ee911(_0xdc1f83, _0xb0bd61) {
        return _0xdc1f83 + _0x1546b7(_0x1c53a3() * (_0xb0bd61 - _0xdc1f83 + 1));
      }
      function _0x1b1192(_0xfc42eb, _0x3e1b45) {
        var _0x3f2817 = '';
        if (!_0xfc42eb || _0x3e1b45 < 1 || _0x3e1b45 > _0x1dad18) return _0x3f2817;
        do {
          _0x3e1b45 % 2 && (_0x3f2817 += _0xfc42eb);
          (_0x3e1b45 = _0x1546b7(_0x3e1b45 / 2)) && (_0xfc42eb += _0xfc42eb);
        } while (_0x3e1b45);
        return _0x3f2817;
      }
      function _0x24cab9(_0x18e964, _0x21fc4a) {
        return _0x2639e7(_0x307172(_0x18e964, _0x21fc4a, _0x5529b6), _0x18e964 + '');
      }
      function _0x35a98b(_0x48b6da) {
        return _0x260746(_0x4fa8ff(_0x48b6da));
      }
      function _0x945e8a(_0x35ea97, _0x3b2ee1) {
        var _0x490d73 = _0x4fa8ff(_0x35ea97);
        return _0x5d22ea(_0x490d73, _0x5d0eea(_0x3b2ee1, 0, _0x490d73.length));
      }
      function _0x37cbe5(_0x55dc19, _0x52047c, _0x2eff19, _0x3c7b70) {
        if (!_0x95df83(_0x55dc19)) return _0x55dc19;
        for (var _0x5533a9 = -1, _0x4705c0 = (_0x52047c = _0x5357b7(_0x52047c, _0x55dc19)).length, _0x3eaf2a = _0x4705c0 - 1, _0x49f245 = _0x55dc19; null != _0x49f245 && ++_0x5533a9 < _0x4705c0;) {
          var _0x211008 = _0x448eca(_0x52047c[_0x5533a9]),
            _0x2dc523 = _0x2eff19;
          if ('__proto__' === _0x211008 || "constructor" === _0x211008 || "prototype" === _0x211008) return _0x55dc19;
          if (_0x5533a9 != _0x3eaf2a) {
            var _0x5b2200 = _0x49f245[_0x211008];
            (_0x2dc523 = _0x3c7b70 ? _0x3c7b70(_0x5b2200, _0x211008, _0x49f245) : _0x18a104) === _0x18a104 && (_0x2dc523 = _0x95df83(_0x5b2200) ? _0x5b2200 : _0x583b31(_0x52047c[_0x5533a9 + 1]) ? [] : {});
          }
          _0x28d3c2(_0x49f245, _0x211008, _0x2dc523);
          _0x49f245 = _0x49f245[_0x211008];
        }
        return _0x55dc19;
      }
      var _0x436c4c = _0x148a4a ? function (_0xdf3231, _0xc753bd) {
          _0x148a4a.set(_0xdf3231, _0xc753bd);
          return _0xdf3231;
        } : _0x5529b6,
        _0x4ef132 = _0x3674ac ? function (_0x4dcb03, _0x4b0e48) {
          return _0x3674ac(_0x4dcb03, 'toString', {
            configurable: true,
            enumerable: false,
            value: _0x5007f0(_0x4b0e48),
            writable: true
          });
        } : _0x5529b6;
      function _0x3ac6f9(_0x1d5321) {
        return _0x5d22ea(_0x4fa8ff(_0x1d5321));
      }
      function _0x38834a(_0x4ff0a6, _0x1f6eda, _0xa6b623) {
        var _0x56c3e9 = -1,
          _0x466191 = _0x4ff0a6.length;
        _0x1f6eda < 0 && (_0x1f6eda = -_0x1f6eda > _0x466191 ? 0 : _0x466191 + _0x1f6eda);
        (_0xa6b623 = _0xa6b623 > _0x466191 ? _0x466191 : _0xa6b623) < 0 && (_0xa6b623 += _0x466191);
        _0x466191 = _0x1f6eda > _0xa6b623 ? 0 : _0xa6b623 - _0x1f6eda >>> 0;
        _0x1f6eda >>>= 0;
        for (var _0x445594 = _0x30943d(_0x466191); ++_0x56c3e9 < _0x466191;) _0x445594[_0x56c3e9] = _0x4ff0a6[_0x56c3e9 + _0x1f6eda];
        return _0x445594;
      }
      function _0x3575aa(_0x2c3b9c, _0x1a2895) {
        var _0x31d5b6;
        _0x571673(_0x2c3b9c, function (_0x2d2014, _0x13a4a2, _0x1e91bc) {
          return !(_0x31d5b6 = _0x1a2895(_0x2d2014, _0x13a4a2, _0x1e91bc));
        });
        return !!_0x31d5b6;
      }
      function _0xc76dc(_0x5ef8ed, _0xb1ab5e, _0x2d3f70) {
        var _0x43b72b = 0,
          _0x3d0ba4 = null == _0x5ef8ed ? _0x43b72b : _0x5ef8ed.length;
        if ("number" == typeof _0xb1ab5e && _0xb1ab5e == _0xb1ab5e && _0x3d0ba4 <= 2147483647) {
          for (; _0x43b72b < _0x3d0ba4;) {
            var _0x52a7fc = _0x43b72b + _0x3d0ba4 >>> 1,
              _0x2fd1e9 = _0x5ef8ed[_0x52a7fc];
            if (null !== _0x2fd1e9 && !_0x12638b(_0x2fd1e9) && (_0x2d3f70 ? _0x2fd1e9 <= _0xb1ab5e : _0x2fd1e9 < _0xb1ab5e)) _0x43b72b = _0x52a7fc + 1;else _0x3d0ba4 = _0x52a7fc;
          }
          return _0x3d0ba4;
        }
        return _0x10bcc4(_0x5ef8ed, _0xb1ab5e, _0x5529b6, _0x2d3f70);
      }
      function _0x10bcc4(_0x3272f4, _0x19a038, _0x420568, _0xb582ad) {
        var _0x5192c0 = 0,
          _0x170cf2 = null == _0x3272f4 ? 0 : _0x3272f4.length;
        if (0 === _0x170cf2) return 0;
        for (var _0x4a9905 = (_0x19a038 = _0x420568(_0x19a038)) != _0x19a038, _0x42cd11 = null === _0x19a038, _0x7dccda = _0x12638b(_0x19a038), _0x352bb2 = _0x19a038 === _0x18a104; _0x5192c0 < _0x170cf2;) {
          var _0xe3d018 = _0x1546b7((_0x5192c0 + _0x170cf2) / 2),
            _0x45e484 = _0x420568(_0x3272f4[_0xe3d018]),
            _0x894efe = _0x45e484 !== _0x18a104,
            _0x69ddb3 = null === _0x45e484,
            _0x588f0b = _0x45e484 == _0x45e484,
            _0x3da591 = _0x12638b(_0x45e484);
          if (_0x4a9905) var _0x48fe07 = _0xb582ad || _0x588f0b;else _0x48fe07 = _0x352bb2 ? _0x588f0b && (_0xb582ad || _0x894efe) : _0x42cd11 ? _0x588f0b && _0x894efe && (_0xb582ad || !_0x69ddb3) : _0x7dccda ? _0x588f0b && _0x894efe && !_0x69ddb3 && (_0xb582ad || !_0x3da591) : !_0x69ddb3 && !_0x3da591 && (_0xb582ad ? _0x45e484 <= _0x19a038 : _0x45e484 < _0x19a038);
          if (_0x48fe07) _0x5192c0 = _0xe3d018 + 1;else _0x170cf2 = _0xe3d018;
        }
        return _0x5b234e(_0x170cf2, 4294967294);
      }
      function _0x3a4ca8(_0x1dba11, _0x51e7e7) {
        for (var _0x111853 = -1, _0x436a80 = _0x1dba11.length, _0x39c7f4 = 0, _0x4d37e1 = []; ++_0x111853 < _0x436a80;) {
          var _0x2ba694 = _0x1dba11[_0x111853],
            _0x41e05c = _0x51e7e7 ? _0x51e7e7(_0x2ba694) : _0x2ba694;
          if (!_0x111853 || !_0x1eed1e(_0x41e05c, _0x1200c9)) {
            var _0x1200c9 = _0x41e05c;
            _0x4d37e1[_0x39c7f4++] = 0 === _0x2ba694 ? 0 : _0x2ba694;
          }
        }
        return _0x4d37e1;
      }
      function _0xa888b2(_0x1492f7) {
        if ('number' == typeof _0x1492f7) return _0x1492f7;
        if (_0x12638b(_0x1492f7)) return _0xcfc3b8;
        return +_0x1492f7;
      }
      function _0x156ed6(_0x1bf039) {
        if ('string' == typeof _0x1bf039) return _0x1bf039;
        if (_0x14dbd1(_0x1bf039)) return _0x5b4a4e(_0x1bf039, _0x156ed6) + '';
        if (_0x12638b(_0x1bf039)) return _0x4dafde ? _0x4dafde.call(_0x1bf039) : '';
        var _0x424b91 = _0x1bf039 + '';
        return '0' == _0x424b91 && 1 / _0x1bf039 == -1 / 0 ? '-0' : _0x424b91;
      }
      function _0x89549d(_0x32b28c, _0x38bc06, _0x50b1ab) {
        var _0x1a0aba = -1,
          _0xa3f8f6 = _0x5d45ce,
          _0x28c0a9 = _0x32b28c.length,
          _0x3c663d = true,
          _0x29ee46 = [],
          _0x59682b = _0x29ee46;
        if (_0x50b1ab) {
          _0x3c663d = false;
          _0xa3f8f6 = _0x14f625;
        } else {
          if (_0x28c0a9 >= 200) {
            var _0x4e9b79 = _0x38bc06 ? null : _0x53e584(_0x32b28c);
            if (_0x4e9b79) return _0x2391fa(_0x4e9b79);
            _0x3c663d = false;
            _0xa3f8f6 = _0x4154d0;
            _0x59682b = new _0x2401ff();
          } else _0x59682b = _0x38bc06 ? [] : _0x29ee46;
        }
        _0x2a38cf: for (; ++_0x1a0aba < _0x28c0a9;) {
          var _0x19481e = _0x32b28c[_0x1a0aba],
            _0x1ef0eb = _0x38bc06 ? _0x38bc06(_0x19481e) : _0x19481e;
          _0x19481e = _0x50b1ab || 0 !== _0x19481e ? _0x19481e : 0;
          if (_0x3c663d && _0x1ef0eb == _0x1ef0eb) {
            for (var _0xcb8795 = _0x59682b.length; _0xcb8795--;) if (_0x59682b[_0xcb8795] === _0x1ef0eb) continue _0x2a38cf;
            _0x38bc06 && _0x59682b.push(_0x1ef0eb);
            _0x29ee46.push(_0x19481e);
          } else _0xa3f8f6(_0x59682b, _0x1ef0eb, _0x50b1ab) || (_0x59682b !== _0x29ee46 && _0x59682b.push(_0x1ef0eb), _0x29ee46.push(_0x19481e));
        }
        return _0x29ee46;
      }
      function _0x4e07fa(_0xbb6400, _0x23fcda) {
        return null == (_0xbb6400 = _0x460865(_0xbb6400, _0x23fcda = _0x5357b7(_0x23fcda, _0xbb6400))) || delete _0xbb6400[_0x448eca(_0xc58f7(_0x23fcda))];
      }
      function _0x111a33(_0x161efb, _0xa92ff0, _0x4976b4, _0x2b87ea) {
        return _0x37cbe5(_0x161efb, _0xa92ff0, _0x4976b4(_0x4d632a(_0x161efb, _0xa92ff0)), _0x2b87ea);
      }
      function _0x3799ec(_0x8b1fd9, _0x57d653, _0x24a2cf, _0x61be96) {
        for (var _0x3bdba2 = _0x8b1fd9.length, _0x2f57b7 = _0x61be96 ? _0x3bdba2 : -1; (_0x61be96 ? _0x2f57b7-- : ++_0x2f57b7 < _0x3bdba2) && _0x57d653(_0x8b1fd9[_0x2f57b7], _0x2f57b7, _0x8b1fd9);) {}
        if (_0x24a2cf) return _0x38834a(_0x8b1fd9, _0x61be96 ? 0 : _0x2f57b7, _0x61be96 ? _0x2f57b7 + 1 : _0x3bdba2);
        return _0x38834a(_0x8b1fd9, _0x61be96 ? _0x2f57b7 + 1 : 0, _0x61be96 ? _0x3bdba2 : _0x2f57b7);
      }
      function _0x4cf955(_0x2e8676, _0x46f97f) {
        var _0x2f7db7 = _0x2e8676;
        _0x2f7db7 instanceof _0x52cb1f && (_0x2f7db7 = _0x2f7db7.value());
        return _0x4c289a(_0x46f97f, function (_0x18f025, _0x1797b0) {
          return _0x1797b0.func.apply(_0x1797b0.thisArg, _0x363a38([_0x18f025], _0x1797b0.args));
        }, _0x2f7db7);
      }
      function _0x664e74(_0x3965e4, _0x456ba2, _0x1a022e) {
        var _0x3fef25 = _0x3965e4.length;
        if (_0x3fef25 < 2) return _0x3fef25 ? _0x89549d(_0x3965e4[0]) : [];
        for (var _0x258de7 = -1, _0x2c3762 = _0x30943d(_0x3fef25); ++_0x258de7 < _0x3fef25;) for (var _0x58ece1 = _0x3965e4[_0x258de7], _0x3f5e0f = -1; ++_0x3f5e0f < _0x3fef25;) _0x3f5e0f != _0x258de7 && (_0x2c3762[_0x258de7] = _0x19ed70(_0x2c3762[_0x258de7] || _0x58ece1, _0x3965e4[_0x3f5e0f], _0x456ba2, _0x1a022e));
        return _0x89549d(_0x2d66a0(_0x2c3762, 1), _0x456ba2, _0x1a022e);
      }
      function _0x12434f(_0x1cff8d, _0x5c4860, _0x264747) {
        for (var _0xf71c18 = -1, _0x1ea082 = _0x1cff8d.length, _0x189cb7 = _0x5c4860.length, _0xefa541 = {}; ++_0xf71c18 < _0x1ea082;) {
          var _0x5d8aba = _0xf71c18 < _0x189cb7 ? _0x5c4860[_0xf71c18] : _0x18a104;
          _0x264747(_0xefa541, _0x1cff8d[_0xf71c18], _0x5d8aba);
        }
        return _0xefa541;
      }
      function _0x1748b4(_0x27c049) {
        if (_0x31f2f7(_0x27c049)) return _0x27c049;
        return [];
      }
      function _0x5d4d53(_0x22f82f) {
        return "function" == typeof _0x22f82f ? _0x22f82f : _0x5529b6;
      }
      function _0x5357b7(_0x2a9065, _0x10aeab) {
        if (_0x14dbd1(_0x2a9065)) return _0x2a9065;
        if (_0x5075cb(_0x2a9065, _0x10aeab)) return [_0x2a9065];
        return _0x12abd5(_0x5812e2(_0x2a9065));
      }
      function _0x354ad9(_0x1acc45, _0x5c9075, _0x94cfb9) {
        var _0x413a53 = _0x1acc45.length;
        _0x94cfb9 = _0x94cfb9 === _0x18a104 ? _0x413a53 : _0x94cfb9;
        if (!_0x5c9075 && _0x94cfb9 >= _0x413a53) return _0x1acc45;
        return _0x38834a(_0x1acc45, _0x5c9075, _0x94cfb9);
      }
      var _0x58c5c8 = _0x26cd08 || function (_0x225fb7) {
        return _0xac24cc.clearTimeout(_0x225fb7);
      };
      function _0x1abb36(_0x5104e4, _0x1497a8) {
        if (_0x1497a8) return _0x5104e4.slice();
        var _0x806f31 = _0x5104e4.length,
          _0x2a78cb = _0x10a6ff ? _0x10a6ff(_0x806f31) : new _0x5104e4.constructor(_0x806f31);
        _0x5104e4.copy(_0x2a78cb);
        return _0x2a78cb;
      }
      function _0x790845(_0x56bc9f) {
        var _0x51d9df = new _0x56bc9f.constructor(_0x56bc9f.byteLength);
        new _0x2e08e2(_0x51d9df).set(new _0x2e08e2(_0x56bc9f));
        return _0x51d9df;
      }
      function _0xc18cce(_0x1754f8, _0x359693) {
        var _0x314192 = _0x359693 ? _0x790845(_0x1754f8.buffer) : _0x1754f8.buffer;
        return new _0x1754f8.constructor(_0x314192, _0x1754f8.byteOffset, _0x1754f8.length);
      }
      function _0x47ca41(_0x24e809, _0x28ed32) {
        if (_0x24e809 !== _0x28ed32) {
          var _0xb81e8b = _0x24e809 !== _0x18a104,
            _0x5cbd01 = null === _0x24e809,
            _0x26cca4 = _0x24e809 == _0x24e809,
            _0xae82a6 = _0x12638b(_0x24e809),
            _0x50e37a = _0x28ed32 !== _0x18a104,
            _0x425dc6 = null === _0x28ed32,
            _0x36ae3c = _0x28ed32 == _0x28ed32,
            _0x1631a0 = _0x12638b(_0x28ed32);
          if (!_0x425dc6 && !_0x1631a0 && !_0xae82a6 && _0x24e809 > _0x28ed32 || _0xae82a6 && _0x50e37a && _0x36ae3c && !_0x425dc6 && !_0x1631a0 || _0x5cbd01 && _0x50e37a && _0x36ae3c || !_0xb81e8b && _0x36ae3c || !_0x26cca4) return 1;
          if (!_0x5cbd01 && !_0xae82a6 && !_0x1631a0 && _0x24e809 < _0x28ed32 || _0x1631a0 && _0xb81e8b && _0x26cca4 && !_0x5cbd01 && !_0xae82a6 || _0x425dc6 && _0xb81e8b && _0x26cca4 || !_0x50e37a && _0x26cca4 || !_0x36ae3c) return -1;
        }
        return 0;
      }
      function _0x17e54b(_0x2f58d7, _0xda8eee, _0x3fe9b3, _0x524e59) {
        for (var _0x59bcfd = -1, _0x37b5ea = _0x2f58d7.length, _0x3775f6 = _0x3fe9b3.length, _0x32d1ee = -1, _0xe6f350 = _0xda8eee.length, _0x175ecb = _0x42358d(_0x37b5ea - _0x3775f6, 0), _0x24b163 = _0x30943d(_0xe6f350 + _0x175ecb), _0x8f615e = !_0x524e59; ++_0x32d1ee < _0xe6f350;) _0x24b163[_0x32d1ee] = _0xda8eee[_0x32d1ee];
        for (; ++_0x59bcfd < _0x3775f6;) (_0x8f615e || _0x59bcfd < _0x37b5ea) && (_0x24b163[_0x3fe9b3[_0x59bcfd]] = _0x2f58d7[_0x59bcfd]);
        for (; _0x175ecb--;) _0x24b163[_0x32d1ee++] = _0x2f58d7[_0x59bcfd++];
        return _0x24b163;
      }
      function _0x588c53(_0x1bf7fb, _0x5a5a3c, _0x9bc11, _0x4b66e2) {
        for (var _0x5bfad2 = -1, _0x4491c9 = _0x1bf7fb.length, _0x2b77d5 = -1, _0x465869 = _0x9bc11.length, _0x4a0dd2 = -1, _0x218395 = _0x5a5a3c.length, _0x5a96fc = _0x42358d(_0x4491c9 - _0x465869, 0), _0x1d4b0b = _0x30943d(_0x5a96fc + _0x218395), _0x15a618 = !_0x4b66e2; ++_0x5bfad2 < _0x5a96fc;) _0x1d4b0b[_0x5bfad2] = _0x1bf7fb[_0x5bfad2];
        for (var _0x3d5cc5 = _0x5bfad2; ++_0x4a0dd2 < _0x218395;) _0x1d4b0b[_0x3d5cc5 + _0x4a0dd2] = _0x5a5a3c[_0x4a0dd2];
        for (; ++_0x2b77d5 < _0x465869;) (_0x15a618 || _0x5bfad2 < _0x4491c9) && (_0x1d4b0b[_0x3d5cc5 + _0x9bc11[_0x2b77d5]] = _0x1bf7fb[_0x5bfad2++]);
        return _0x1d4b0b;
      }
      function _0x73a637(_0x3a8d0b, _0x182f80) {
        var _0x572157 = -1,
          _0x4049bf = _0x3a8d0b.length;
        for (_0x182f80 || (_0x182f80 = _0x30943d(_0x4049bf)); ++_0x572157 < _0x4049bf;) _0x182f80[_0x572157] = _0x3a8d0b[_0x572157];
        return _0x182f80;
      }
      function _0x2e32c7(_0x5081f8, _0x469fbb, _0x40cb30, _0x18e9a5) {
        var _0x29ba8e = !_0x40cb30;
        _0x40cb30 || (_0x40cb30 = {});
        for (var _0x1637c8 = -1, _0x17ce8b = _0x469fbb.length; ++_0x1637c8 < _0x17ce8b;) {
          var _0x4757be = _0x469fbb[_0x1637c8],
            _0x54cc51 = _0x18e9a5 ? _0x18e9a5(_0x40cb30[_0x4757be], _0x5081f8[_0x4757be], _0x4757be, _0x40cb30, _0x5081f8) : _0x18a104;
          _0x54cc51 === _0x18a104 && (_0x54cc51 = _0x5081f8[_0x4757be]);
          if (_0x29ba8e) _0x3cac09(_0x40cb30, _0x4757be, _0x54cc51);else _0x28d3c2(_0x40cb30, _0x4757be, _0x54cc51);
        }
        return _0x40cb30;
      }
      function _0x12f28e(_0x4ca062, _0x175d55) {
        return function (_0x13c7ca, _0x1a699f) {
          var _0x14b65b = _0x14dbd1(_0x13c7ca) ? _0x3dfdc4 : _0x19799e,
            _0x1807e3 = _0x175d55 ? _0x175d55() : {};
          return _0x14b65b(_0x13c7ca, _0x4ca062, _0x2e11c8(_0x1a699f, 2), _0x1807e3);
        };
      }
      function _0x4edced(_0x54aeca) {
        return _0x24cab9(function (_0x1ca1f9, _0x5394a4) {
          var _0xb2594c = -1,
            _0x28645e = _0x5394a4.length,
            _0x3854cc = _0x28645e > 1 ? _0x5394a4[_0x28645e - 1] : _0x18a104,
            _0x34cb46 = _0x28645e > 2 ? _0x5394a4[2] : _0x18a104;
          _0x3854cc = _0x54aeca.length > 3 && "function" == typeof _0x3854cc ? (_0x28645e--, _0x3854cc) : _0x18a104;
          _0x34cb46 && _0x3a0a4c(_0x5394a4[0], _0x5394a4[1], _0x34cb46) && (_0x3854cc = _0x28645e < 3 ? _0x18a104 : _0x3854cc, _0x28645e = 1);
          for (_0x1ca1f9 = _0x48fa9a(_0x1ca1f9); ++_0xb2594c < _0x28645e;) {
            var _0x2e0410 = _0x5394a4[_0xb2594c];
            _0x2e0410 && _0x54aeca(_0x1ca1f9, _0x2e0410, _0xb2594c, _0x3854cc);
          }
          return _0x1ca1f9;
        });
      }
      function _0x297ac7(_0x8fb58d, _0x3d90ff) {
        return function (_0x379d91, _0x3c97ad) {
          if (null == _0x379d91) return _0x379d91;
          if (!_0x58ad0d(_0x379d91)) return _0x8fb58d(_0x379d91, _0x3c97ad);
          for (var _0x3dd246 = _0x379d91.length, _0x1163cc = _0x3d90ff ? _0x3dd246 : -1, _0x43c990 = _0x48fa9a(_0x379d91); (_0x3d90ff ? _0x1163cc-- : ++_0x1163cc < _0x3dd246) && false !== _0x3c97ad(_0x43c990[_0x1163cc], _0x1163cc, _0x43c990);) {}
          return _0x379d91;
        };
      }
      function _0x3ac8f4(_0x4c6622) {
        return function (_0x3f620c, _0x5a573a, _0x26f82d) {
          for (var _0x1bf03e = -1, _0x41f962 = _0x48fa9a(_0x3f620c), _0x1c51b5 = _0x26f82d(_0x3f620c), _0x4b346c = _0x1c51b5.length; _0x4b346c--;) {
            var _0x19f460 = _0x1c51b5[_0x4c6622 ? _0x4b346c : ++_0x1bf03e];
            if (false === _0x5a573a(_0x41f962[_0x19f460], _0x19f460, _0x41f962)) break;
          }
          return _0x3f620c;
        };
      }
      function _0x2e2bf5(_0x97961a) {
        return function (_0x3205e5) {
          var _0x342b5f = _0x232bc1(_0x3205e5 = _0x5812e2(_0x3205e5)) ? _0x27f9f1(_0x3205e5) : _0x18a104,
            _0x1af677 = _0x342b5f ? _0x342b5f[0] : _0x3205e5.charAt(0),
            _0x34c5a5 = _0x342b5f ? _0x354ad9(_0x342b5f, 1).join('') : _0x3205e5.slice(1);
          return _0x1af677[_0x97961a]() + _0x34c5a5;
        };
      }
      function _0x527cd5(_0x550e17) {
        return function (_0x6d0d15) {
          return _0x4c289a(_0x1e1e5d(_0x1809cd(_0x6d0d15).replace(_0x3478ec, '')), _0x550e17, '');
        };
      }
      function _0x4c8030(_0x2fd2b3) {
        return function () {
          var _0x316592 = arguments;
          switch (_0x316592.length) {
            case 0:
              return new _0x2fd2b3();
            case 1:
              return new _0x2fd2b3(_0x316592[0]);
            case 2:
              return new _0x2fd2b3(_0x316592[0], _0x316592[1]);
            case 3:
              return new _0x2fd2b3(_0x316592[0], _0x316592[1], _0x316592[2]);
            case 4:
              return new _0x2fd2b3(_0x316592[0], _0x316592[1], _0x316592[2], _0x316592[3]);
            case 5:
              return new _0x2fd2b3(_0x316592[0], _0x316592[1], _0x316592[2], _0x316592[3], _0x316592[4]);
            case 6:
              return new _0x2fd2b3(_0x316592[0], _0x316592[1], _0x316592[2], _0x316592[3], _0x316592[4], _0x316592[5]);
            case 7:
              return new _0x2fd2b3(_0x316592[0], _0x316592[1], _0x316592[2], _0x316592[3], _0x316592[4], _0x316592[5], _0x316592[6]);
          }
          var _0x2149ed = _0x41abc3(_0x2fd2b3.prototype),
            _0x4437de = _0x2fd2b3.apply(_0x2149ed, _0x316592);
          return _0x95df83(_0x4437de) ? _0x4437de : _0x2149ed;
        };
      }
      function _0x21f5d6(_0x511c87) {
        return function (_0x34eed6, _0x4a259f, _0x542fdb) {
          var _0x1afa84 = _0x48fa9a(_0x34eed6);
          if (!_0x58ad0d(_0x34eed6)) {
            var _0x33f8fd = _0x2e11c8(_0x4a259f, 3);
            _0x34eed6 = _0x33c583(_0x34eed6);
            _0x4a259f = function (_0x297521) {
              return _0x33f8fd(_0x1afa84[_0x297521], _0x297521, _0x1afa84);
            };
          }
          var _0x8d6f39 = _0x511c87(_0x34eed6, _0x4a259f, _0x542fdb);
          if (_0x8d6f39 > -1) return _0x1afa84[_0x33f8fd ? _0x34eed6[_0x8d6f39] : _0x8d6f39];
          return _0x18a104;
        };
      }
      function _0x5d1937(_0x383a1e) {
        return _0x42e0a7(function (_0x2e844e) {
          var _0x205f97 = _0x2e844e.length,
            _0x3aaca8 = _0x205f97,
            _0x1e3f97 = _0x44e077.prototype.thru;
          for (_0x383a1e && _0x2e844e.reverse(); _0x3aaca8--;) {
            var _0x3422f9 = _0x2e844e[_0x3aaca8];
            if ("function" != typeof _0x3422f9) throw new _0x31211a(_0xe7d2d9);
            if (_0x1e3f97 && !_0x475f25 && 'wrapper' == _0x3500db(_0x3422f9)) var _0x475f25 = new _0x44e077([], true);
          }
          for (_0x3aaca8 = _0x475f25 ? _0x3aaca8 : _0x205f97; ++_0x3aaca8 < _0x205f97;) {
            var _0xf47e25 = _0x3500db(_0x3422f9 = _0x2e844e[_0x3aaca8]),
              _0x28ac19 = 'wrapper' == _0xf47e25 ? _0x22d9ef(_0x3422f9) : _0x18a104;
            _0x475f25 = _0x28ac19 && _0x200ad4(_0x28ac19[0]) && 424 == _0x28ac19[1] && !_0x28ac19[4].length && 1 == _0x28ac19[9] ? _0x475f25[_0x3500db(_0x28ac19[0])].apply(_0x475f25, _0x28ac19[3]) : 1 == _0x3422f9.length && _0x200ad4(_0x3422f9) ? _0x475f25[_0xf47e25]() : _0x475f25.thru(_0x3422f9);
          }
          return function () {
            var _0x3ba257 = arguments,
              _0x5014c1 = _0x3ba257[0];
            if (_0x475f25 && 1 == _0x3ba257.length && _0x14dbd1(_0x5014c1)) return _0x475f25.plant(_0x5014c1).value();
            for (var _0x3f7e3c = 0, _0x5e3a7e = _0x205f97 ? _0x2e844e[_0x3f7e3c].apply(this, _0x3ba257) : _0x5014c1; ++_0x3f7e3c < _0x205f97;) _0x5e3a7e = _0x2e844e[_0x3f7e3c].call(this, _0x5e3a7e);
            return _0x5e3a7e;
          };
        });
      }
      function _0x57772e(_0x3f9f18, _0x1ae64f, _0x26b142, _0x47a033, _0x2a6721, _0x4e2e47, _0x463534, _0x18e840, _0x249278, _0x272649) {
        var _0x2763ad = _0x1ae64f & _0x1d8dce,
          _0x1ed51a = 1 & _0x1ae64f,
          _0x2ae1f5 = 2 & _0x1ae64f,
          _0x335a90 = 24 & _0x1ae64f,
          _0x3d1ae1 = 512 & _0x1ae64f,
          _0x532ced = _0x2ae1f5 ? _0x18a104 : _0x4c8030(_0x3f9f18);
        return function _0x423f50() {
          for (var _0x6ca682 = arguments.length, _0x2c0b8f = _0x30943d(_0x6ca682), _0x4c5e55 = _0x6ca682; _0x4c5e55--;) _0x2c0b8f[_0x4c5e55] = arguments[_0x4c5e55];
          if (_0x335a90) var _0x1604a7 = _0x19f2a9(_0x423f50),
            _0x5d85b8 = function (_0x49555c, _0x3801ea) {
              for (var _0x3c5efd = _0x49555c.length, _0x47c4c5 = 0; _0x3c5efd--;) _0x49555c[_0x3c5efd] === _0x3801ea && ++_0x47c4c5;
              return _0x47c4c5;
            }(_0x2c0b8f, _0x1604a7);
          _0x47a033 && (_0x2c0b8f = _0x17e54b(_0x2c0b8f, _0x47a033, _0x2a6721, _0x335a90));
          _0x4e2e47 && (_0x2c0b8f = _0x588c53(_0x2c0b8f, _0x4e2e47, _0x463534, _0x335a90));
          _0x6ca682 -= _0x5d85b8;
          if (_0x335a90 && _0x6ca682 < _0x272649) {
            var _0x1bddde = _0xa90a46(_0x2c0b8f, _0x1604a7);
            return _0x161e72(_0x3f9f18, _0x1ae64f, _0x57772e, _0x423f50.placeholder, _0x26b142, _0x2c0b8f, _0x1bddde, _0x18e840, _0x249278, _0x272649 - _0x6ca682);
          }
          var _0x4ec295 = _0x1ed51a ? _0x26b142 : this,
            _0x184a04 = _0x2ae1f5 ? _0x4ec295[_0x3f9f18] : _0x3f9f18;
          _0x6ca682 = _0x2c0b8f.length;
          if (_0x18e840) _0x2c0b8f = function (_0xf8147f, _0x56ae15) {
            for (var _0x1b8e1a = _0xf8147f.length, _0x373584 = _0x5b234e(_0x56ae15.length, _0x1b8e1a), _0x25b3a1 = _0x73a637(_0xf8147f); _0x373584--;) {
              var _0x18116d = _0x56ae15[_0x373584];
              _0xf8147f[_0x373584] = _0x583b31(_0x18116d, _0x1b8e1a) ? _0x25b3a1[_0x18116d] : _0x18a104;
            }
            return _0xf8147f;
          }(_0x2c0b8f, _0x18e840);else _0x3d1ae1 && _0x6ca682 > 1 && _0x2c0b8f.reverse();
          _0x2763ad && _0x249278 < _0x6ca682 && (_0x2c0b8f.length = _0x249278);
          this && this !== _0xac24cc && this instanceof _0x423f50 && (_0x184a04 = _0x532ced || _0x4c8030(_0x184a04));
          return _0x184a04.apply(_0x4ec295, _0x2c0b8f);
        };
      }
      function _0x3e1c05(_0x3ecffc, _0x370bde) {
        return function (_0x5e09e1, _0x559d70) {
          return function (_0x47aa46, _0x5280f9, _0x342499, _0x5390ec) {
            _0x253c4e(_0x47aa46, function (_0x565faa, _0x65fe8a, _0x3d7d54) {
              _0x5280f9(_0x5390ec, _0x342499(_0x565faa), _0x65fe8a, _0x3d7d54);
            });
            return _0x5390ec;
          }(_0x5e09e1, _0x3ecffc, _0x370bde(_0x559d70), {});
        };
      }
      function _0x1e1776(_0xdc7125, _0x8da840) {
        return function (_0x786657, _0x4652e1) {
          var _0x2c34c5;
          if (_0x786657 === _0x18a104 && _0x4652e1 === _0x18a104) return _0x8da840;
          _0x786657 !== _0x18a104 && (_0x2c34c5 = _0x786657);
          if (_0x4652e1 !== _0x18a104) {
            if (_0x2c34c5 === _0x18a104) return _0x4652e1;
            if ("string" == typeof _0x786657 || "string" == typeof _0x4652e1) {
              _0x786657 = _0x156ed6(_0x786657);
              _0x4652e1 = _0x156ed6(_0x4652e1);
            } else {
              _0x786657 = _0xa888b2(_0x786657);
              _0x4652e1 = _0xa888b2(_0x4652e1);
            }
            _0x2c34c5 = _0xdc7125(_0x786657, _0x4652e1);
          }
          return _0x2c34c5;
        };
      }
      function _0x275ded(_0x5795b3) {
        return _0x42e0a7(function (_0x3fc05b) {
          _0x3fc05b = _0x5b4a4e(_0x3fc05b, _0x589c7a(_0x2e11c8()));
          return _0x24cab9(function (_0xc1073c) {
            var _0x18abf8 = this;
            return _0x5795b3(_0x3fc05b, function (_0x5b7f51) {
              return _0x408cf2(_0x5b7f51, _0x18abf8, _0xc1073c);
            });
          });
        });
      }
      function _0x191ec3(_0xed247f, _0x47af44) {
        var _0xef4372 = (_0x47af44 = _0x47af44 === _0x18a104 ? '\x20' : _0x156ed6(_0x47af44)).length;
        if (_0xef4372 < 2) return _0xef4372 ? _0x1b1192(_0x47af44, _0xed247f) : _0x47af44;
        var _0x5e1b38 = _0x1b1192(_0x47af44, _0x5904f9(_0xed247f / _0x5e3d40(_0x47af44)));
        if (_0x232bc1(_0x47af44)) return _0x354ad9(_0x27f9f1(_0x5e1b38), 0, _0xed247f).join('');
        return _0x5e1b38.slice(0, _0xed247f);
      }
      function _0x4b5cb8(_0x5838c9) {
        return function (_0x29a5c2, _0xb180c0, _0x463026) {
          _0x463026 && "number" != typeof _0x463026 && _0x3a0a4c(_0x29a5c2, _0xb180c0, _0x463026) && (_0xb180c0 = _0x463026 = _0x18a104);
          _0x29a5c2 = _0x1c17cf(_0x29a5c2);
          if (_0xb180c0 === _0x18a104) {
            _0xb180c0 = _0x29a5c2;
            _0x29a5c2 = 0;
          } else _0xb180c0 = _0x1c17cf(_0xb180c0);
          return function (_0x5b56a5, _0x9095ee, _0x539427, _0x152252) {
            for (var _0x2d9289 = -1, _0x1e8a0e = _0x42358d(_0x5904f9((_0x9095ee - _0x5b56a5) / (_0x539427 || 1)), 0), _0x2c1256 = _0x30943d(_0x1e8a0e); _0x1e8a0e--;) {
              _0x2c1256[_0x152252 ? _0x1e8a0e : ++_0x2d9289] = _0x5b56a5;
              _0x5b56a5 += _0x539427;
            }
            return _0x2c1256;
          }(_0x29a5c2, _0xb180c0, _0x463026 = _0x463026 === _0x18a104 ? _0x29a5c2 < _0xb180c0 ? 1 : -1 : _0x1c17cf(_0x463026), _0x5838c9);
        };
      }
      function _0x40ea33(_0x49f9f7) {
        return function (_0x151c52, _0x185687) {
          'string' == typeof _0x151c52 && "string" == typeof _0x185687 || (_0x151c52 = _0x1b8c8f(_0x151c52), _0x185687 = _0x1b8c8f(_0x185687));
          return _0x49f9f7(_0x151c52, _0x185687);
        };
      }
      function _0x161e72(_0x14c758, _0x40656f, _0x54a777, _0xeb0bba, _0x5c4a9b, _0x3f0d94, _0x5754f1, _0x10d3fb, _0x5b2f48, _0x37885d) {
        var _0x3a5884 = 8 & _0x40656f;
        _0x40656f |= _0x3a5884 ? _0x3c6d29 : _0xd4c6fc;
        4 & (_0x40656f &= ~(_0x3a5884 ? _0xd4c6fc : _0x3c6d29)) || (_0x40656f &= -4);
        var _0xabb399 = [_0x14c758, _0x40656f, _0x5c4a9b, _0x3a5884 ? _0x3f0d94 : _0x18a104, _0x3a5884 ? _0x5754f1 : _0x18a104, _0x3a5884 ? _0x18a104 : _0x3f0d94, _0x3a5884 ? _0x18a104 : _0x5754f1, _0x10d3fb, _0x5b2f48, _0x37885d],
          _0x45be2b = _0x54a777.apply(_0x18a104, _0xabb399);
        _0x200ad4(_0x14c758) && _0x2f98d9(_0x45be2b, _0xabb399);
        _0x45be2b.placeholder = _0xeb0bba;
        return _0x26455d(_0x45be2b, _0x14c758, _0x40656f);
      }
      function _0x4bd8da(_0x2de2a7) {
        var _0x853cc2 = _0x479305[_0x2de2a7];
        return function (_0x12c1ce, _0x221408) {
          _0x12c1ce = _0x1b8c8f(_0x12c1ce);
          if ((_0x221408 = null == _0x221408 ? 0 : _0x5b234e(_0x53832b(_0x221408), 292)) && _0x5e0be3(_0x12c1ce)) {
            var _0x18973c = (_0x5812e2(_0x12c1ce) + 'e').split('e');
            return +((_0x18973c = (_0x5812e2(_0x853cc2(_0x18973c[0] + 'e' + (+_0x18973c[1] + _0x221408))) + 'e').split('e'))[0] + 'e' + (+_0x18973c[1] - _0x221408));
          }
          return _0x853cc2(_0x12c1ce);
        };
      }
      var _0x53e584 = _0x259617 && 1 / _0x2391fa(new _0x259617([, -0]))[1] == _0x286c23 ? function (_0x44e084) {
        return new _0x259617(_0x44e084);
      } : _0x4c7a96;
      function _0x57300a(_0x5554be) {
        return function (_0xd1d028) {
          var _0x475fce = _0x444f77(_0xd1d028);
          if (_0x475fce == _0x4c0bc9) return _0x9009ed(_0xd1d028);
          if (_0x475fce == _0x2443d3) return function (_0x16f0ea) {
            var _0x4e9bce = -1,
              _0x5a9d62 = Array(_0x16f0ea.size);
            _0x16f0ea.forEach(function (_0x4db87c) {
              _0x5a9d62[++_0x4e9bce] = [_0x4db87c, _0x4db87c];
            });
            return _0x5a9d62;
          }(_0xd1d028);
          return function (_0x1909d7, _0x10cda8) {
            return _0x5b4a4e(_0x10cda8, function (_0x219af0) {
              return [_0x219af0, _0x1909d7[_0x219af0]];
            });
          }(_0xd1d028, _0x5554be(_0xd1d028));
        };
      }
      function _0x2997b4(_0x265fe3, _0x2c862b, _0x18daa7, _0x104e10, _0x27735f, _0x1bf0eb, _0x62d6b0, _0x4d08cc) {
        var _0x58a927 = 2 & _0x2c862b;
        if (!_0x58a927 && 'function' != typeof _0x265fe3) throw new _0x31211a(_0xe7d2d9);
        var _0x4d1a42 = _0x104e10 ? _0x104e10.length : 0;
        _0x4d1a42 || (_0x2c862b &= -97, _0x104e10 = _0x27735f = _0x18a104);
        _0x62d6b0 = _0x62d6b0 === _0x18a104 ? _0x62d6b0 : _0x42358d(_0x53832b(_0x62d6b0), 0);
        _0x4d08cc = _0x4d08cc === _0x18a104 ? _0x4d08cc : _0x53832b(_0x4d08cc);
        _0x4d1a42 -= _0x27735f ? _0x27735f.length : 0;
        if (_0x2c862b & _0xd4c6fc) {
          var _0x262fd4 = _0x104e10,
            _0x2cab7c = _0x27735f;
          _0x104e10 = _0x27735f = _0x18a104;
        }
        var _0x11e79f = _0x58a927 ? _0x18a104 : _0x22d9ef(_0x265fe3),
          _0x5f2c7e = [_0x265fe3, _0x2c862b, _0x18daa7, _0x104e10, _0x27735f, _0x262fd4, _0x2cab7c, _0x1bf0eb, _0x62d6b0, _0x4d08cc];
        _0x11e79f && function (_0x14a363, _0x2085a0) {
          var _0x1db06e = _0x14a363[1],
            _0x592ce7 = _0x2085a0[1],
            _0x1bfe55 = _0x1db06e | _0x592ce7,
            _0x42c982 = _0x1bfe55 < 131,
            _0x26b566 = _0x592ce7 == _0x1d8dce && 8 == _0x1db06e || _0x592ce7 == _0x1d8dce && _0x1db06e == _0x567b15 && _0x14a363[7].length <= _0x2085a0[8] || 384 == _0x592ce7 && _0x2085a0[7].length <= _0x2085a0[8] && 8 == _0x1db06e;
          if (!_0x42c982 && !_0x26b566) return _0x14a363;
          1 & _0x592ce7 && (_0x14a363[2] = _0x2085a0[2], _0x1bfe55 |= 1 & _0x1db06e ? 0 : 4);
          var _0x5e122b = _0x2085a0[3];
          if (_0x5e122b) {
            var _0x3fcebb = _0x14a363[3];
            _0x14a363[3] = _0x3fcebb ? _0x17e54b(_0x3fcebb, _0x5e122b, _0x2085a0[4]) : _0x5e122b;
            _0x14a363[4] = _0x3fcebb ? _0xa90a46(_0x14a363[3], _0xe857cf) : _0x2085a0[4];
          }
          (_0x5e122b = _0x2085a0[5]) && (_0x3fcebb = _0x14a363[5], _0x14a363[5] = _0x3fcebb ? _0x588c53(_0x3fcebb, _0x5e122b, _0x2085a0[6]) : _0x5e122b, _0x14a363[6] = _0x3fcebb ? _0xa90a46(_0x14a363[5], _0xe857cf) : _0x2085a0[6]);
          (_0x5e122b = _0x2085a0[7]) && (_0x14a363[7] = _0x5e122b);
          _0x592ce7 & _0x1d8dce && (_0x14a363[8] = null == _0x14a363[8] ? _0x2085a0[8] : _0x5b234e(_0x14a363[8], _0x2085a0[8]));
          null == _0x14a363[9] && (_0x14a363[9] = _0x2085a0[9]);
          _0x14a363[0] = _0x2085a0[0];
          _0x14a363[1] = _0x1bfe55;
        }(_0x5f2c7e, _0x11e79f);
        _0x265fe3 = _0x5f2c7e[0];
        _0x2c862b = _0x5f2c7e[1];
        _0x18daa7 = _0x5f2c7e[2];
        _0x104e10 = _0x5f2c7e[3];
        _0x27735f = _0x5f2c7e[4];
        !(_0x4d08cc = _0x5f2c7e[9] = _0x5f2c7e[9] === _0x18a104 ? _0x58a927 ? 0 : _0x265fe3.length : _0x42358d(_0x5f2c7e[9] - _0x4d1a42, 0)) && 24 & _0x2c862b && (_0x2c862b &= -25);
        if (_0x2c862b && 1 != _0x2c862b) _0x19ba2f = 8 == _0x2c862b || _0x2c862b == _0x5e9d40 ? function (_0x563c22, _0x5c01c3, _0x329f1d) {
          var _0x5ee37e = _0x4c8030(_0x563c22);
          return function _0x18cd71() {
            for (var _0x388103 = arguments.length, _0x40ce98 = _0x30943d(_0x388103), _0x31a98c = _0x388103, _0x2031f4 = _0x19f2a9(_0x18cd71); _0x31a98c--;) _0x40ce98[_0x31a98c] = arguments[_0x31a98c];
            var _0x1598f2 = _0x388103 < 3 && _0x40ce98[0] !== _0x2031f4 && _0x40ce98[_0x388103 - 1] !== _0x2031f4 ? [] : _0xa90a46(_0x40ce98, _0x2031f4);
            if ((_0x388103 -= _0x1598f2.length) < _0x329f1d) return _0x161e72(_0x563c22, _0x5c01c3, _0x57772e, _0x18cd71.placeholder, _0x18a104, _0x40ce98, _0x1598f2, _0x18a104, _0x18a104, _0x329f1d - _0x388103);
            return _0x408cf2(this && this !== _0xac24cc && this instanceof _0x18cd71 ? _0x5ee37e : _0x563c22, this, _0x40ce98);
          };
        }(_0x265fe3, _0x2c862b, _0x4d08cc) : _0x2c862b != _0x3c6d29 && 33 != _0x2c862b || _0x27735f.length ? _0x57772e.apply(_0x18a104, _0x5f2c7e) : function (_0xd3e2bf, _0x2834e8, _0x37deba, _0x34c33c) {
          var _0x48f41b = 1 & _0x2834e8,
            _0x1acb70 = _0x4c8030(_0xd3e2bf);
          return function _0x3b33df() {
            for (var _0x5ca20b = -1, _0xbc385c = arguments.length, _0x429657 = -1, _0x82ee33 = _0x34c33c.length, _0x422a87 = _0x30943d(_0x82ee33 + _0xbc385c), _0x1ac1c2 = this && this !== _0xac24cc && this instanceof _0x3b33df ? _0x1acb70 : _0xd3e2bf; ++_0x429657 < _0x82ee33;) _0x422a87[_0x429657] = _0x34c33c[_0x429657];
            for (; _0xbc385c--;) _0x422a87[_0x429657++] = arguments[++_0x5ca20b];
            return _0x408cf2(_0x1ac1c2, _0x48f41b ? _0x37deba : this, _0x422a87);
          };
        }(_0x265fe3, _0x2c862b, _0x18daa7, _0x104e10);else var _0x19ba2f = function (_0x2e4a2b, _0x4c9401, _0xbd0902) {
          var _0x3ce09d = 1 & _0x4c9401,
            _0x6fdf91 = _0x4c8030(_0x2e4a2b);
          return function _0x149f85() {
            return (this && this !== _0xac24cc && this instanceof _0x149f85 ? _0x6fdf91 : _0x2e4a2b).apply(_0x3ce09d ? _0xbd0902 : this, arguments);
          };
        }(_0x265fe3, _0x2c862b, _0x18daa7);
        return _0x26455d((_0x11e79f ? _0x436c4c : _0x2f98d9)(_0x19ba2f, _0x5f2c7e), _0x265fe3, _0x2c862b);
      }
      function _0x4760cf(_0x1a8e92, _0xb101e6, _0x4c37eb, _0x284a9c) {
        return _0x1a8e92 === _0x18a104 || _0x1eed1e(_0x1a8e92, _0x5713ec[_0x4c37eb]) && !_0x5a55dd.call(_0x284a9c, _0x4c37eb) ? _0xb101e6 : _0x1a8e92;
      }
      function _0x2ad315(_0x1eaeb5, _0x470e3b, _0x3dab0d, _0xbfa856, _0x19ee04, _0x2646ac) {
        _0x95df83(_0x1eaeb5) && _0x95df83(_0x470e3b) && (_0x2646ac.set(_0x470e3b, _0x1eaeb5), _0x2fcef7(_0x1eaeb5, _0x470e3b, _0x18a104, _0x2ad315, _0x2646ac), _0x2646ac.delete(_0x470e3b));
        return _0x1eaeb5;
      }
      function _0x49b94a(_0x5834c6) {
        return _0x30a8e6(_0x5834c6) ? _0x18a104 : _0x5834c6;
      }
      function _0x135da5(_0x26a7a0, _0x371cf8, _0x142859, _0x4f5db9, _0x7511b0, _0x4a80de) {
        var _0x306e9d = 1 & _0x142859,
          _0x1b0792 = _0x26a7a0.length,
          _0x4fbffa = _0x371cf8.length;
        if (_0x1b0792 != _0x4fbffa && !(_0x306e9d && _0x4fbffa > _0x1b0792)) return false;
        var _0x532fe1 = _0x4a80de.get(_0x26a7a0),
          _0xaf6a7b = _0x4a80de.get(_0x371cf8);
        if (_0x532fe1 && _0xaf6a7b) return _0x532fe1 == _0x371cf8 && _0xaf6a7b == _0x26a7a0;
        var _0x2177d3 = -1,
          _0x2f180f = true,
          _0x1c3f65 = 2 & _0x142859 ? new _0x2401ff() : _0x18a104;
        _0x4a80de.set(_0x26a7a0, _0x371cf8);
        for (_0x4a80de.set(_0x371cf8, _0x26a7a0); ++_0x2177d3 < _0x1b0792;) {
          var _0x3e9285 = _0x26a7a0[_0x2177d3],
            _0x454910 = _0x371cf8[_0x2177d3];
          if (_0x4f5db9) var _0x5c40c0 = _0x306e9d ? _0x4f5db9(_0x454910, _0x3e9285, _0x2177d3, _0x371cf8, _0x26a7a0, _0x4a80de) : _0x4f5db9(_0x3e9285, _0x454910, _0x2177d3, _0x26a7a0, _0x371cf8, _0x4a80de);
          if (_0x5c40c0 !== _0x18a104) {
            if (_0x5c40c0) continue;
            _0x2f180f = false;
            break;
          }
          if (_0x1c3f65) {
            if (!_0x1e13f1(_0x371cf8, function (_0x3dcb01, _0x1ad9ee) {
              if (!_0x4154d0(_0x1c3f65, _0x1ad9ee) && (_0x3e9285 === _0x3dcb01 || _0x7511b0(_0x3e9285, _0x3dcb01, _0x142859, _0x4f5db9, _0x4a80de))) return _0x1c3f65.push(_0x1ad9ee);
            })) {
              _0x2f180f = false;
              break;
            }
          } else {
            if (_0x3e9285 !== _0x454910 && !_0x7511b0(_0x3e9285, _0x454910, _0x142859, _0x4f5db9, _0x4a80de)) {
              _0x2f180f = false;
              break;
            }
          }
        }
        _0x4a80de.delete(_0x26a7a0);
        _0x4a80de.delete(_0x371cf8);
        return _0x2f180f;
      }
      function _0x42e0a7(_0x1d3f57) {
        return _0x2639e7(_0x307172(_0x1d3f57, _0x18a104, _0x235524), _0x1d3f57 + '');
      }
      function _0x1e3255(_0x227605) {
        return _0x116933(_0x227605, _0x33c583, _0x44f473);
      }
      function _0xf19315(_0x48766d) {
        return _0x116933(_0x48766d, _0x2247a8, _0x3cc5bd);
      }
      var _0x22d9ef = _0x148a4a ? function (_0x16215f) {
        return _0x148a4a.get(_0x16215f);
      } : _0x4c7a96;
      function _0x3500db(_0x427fbc) {
        for (var _0x65800d = _0x427fbc.name + '', _0x4a29e5 = _0x4aec69[_0x65800d], _0x220f5b = _0x5a55dd.call(_0x4aec69, _0x65800d) ? _0x4a29e5.length : 0; _0x220f5b--;) {
          var _0x3f1949 = _0x4a29e5[_0x220f5b],
            _0x5f33d6 = _0x3f1949.func;
          if (null == _0x5f33d6 || _0x5f33d6 == _0x427fbc) return _0x3f1949.name;
        }
        return _0x65800d;
      }
      function _0x19f2a9(_0x1bbcc6) {
        return (_0x5a55dd.call(_0x4fb193, "placeholder") ? _0x4fb193 : _0x1bbcc6).placeholder;
      }
      function _0x2e11c8() {
        var _0x4b5a7d = _0x4fb193.iteratee || _0x472e32;
        _0x4b5a7d = _0x4b5a7d === _0x472e32 ? _0x166820 : _0x4b5a7d;
        if (arguments.length) return _0x4b5a7d(arguments[0], arguments[1]);
        return _0x4b5a7d;
      }
      function _0x1f6c8b(_0xdfbc3, _0x12e639) {
        var _0x2676cb,
          _0x312c31,
          _0x3b8822 = _0xdfbc3.__data__;
        if ("string" == (_0x312c31 = typeof (_0x2676cb = _0x12e639)) || 'number' == _0x312c31 || "symbol" == _0x312c31 || "boolean" == _0x312c31 ? "__proto__" !== _0x2676cb : null === _0x2676cb) return _0x3b8822['string' == typeof _0x12e639 ? "string" : "hash"];
        return _0x3b8822.map;
      }
      function _0x5eeb8a(_0x46a646) {
        for (var _0x31094e = _0x33c583(_0x46a646), _0x1ff581 = _0x31094e.length; _0x1ff581--;) {
          var _0x56afb4 = _0x31094e[_0x1ff581],
            _0x12d82c = _0x46a646[_0x56afb4];
          _0x31094e[_0x1ff581] = [_0x56afb4, _0x12d82c, _0x190a3a(_0x12d82c)];
        }
        return _0x31094e;
      }
      function _0x57f9ec(_0x92ab96, _0x1fd25f) {
        var _0x2a4629 = function (_0x819c2a, _0x38a760) {
          if (null == _0x819c2a) return _0x18a104;
          return _0x819c2a[_0x38a760];
        }(_0x92ab96, _0x1fd25f);
        return _0x37eef3(_0x2a4629) ? _0x2a4629 : _0x18a104;
      }
      var _0x44f473 = _0x50e664 ? function (_0x4e5b1a) {
          if (null == _0x4e5b1a) return [];
          _0x4e5b1a = _0x48fa9a(_0x4e5b1a);
          return _0x200b15(_0x50e664(_0x4e5b1a), function (_0x2fa932) {
            return _0x4e8c1d.call(_0x4e5b1a, _0x2fa932);
          });
        } : _0x239a2f,
        _0x3cc5bd = _0x50e664 ? function (_0x172d3a) {
          for (var _0x490cb5 = []; _0x172d3a;) {
            _0x363a38(_0x490cb5, _0x44f473(_0x172d3a));
            _0x172d3a = _0x3d2c1a(_0x172d3a);
          }
          return _0x490cb5;
        } : _0x239a2f,
        _0x444f77 = _0x22eff8;
      function _0x490828(_0x370131, _0x5dd023, _0x25eddb) {
        for (var _0x51da81 = -1, _0x58bc15 = (_0x5dd023 = _0x5357b7(_0x5dd023, _0x370131)).length, _0x2202b1 = false; ++_0x51da81 < _0x58bc15;) {
          var _0x3b4403 = _0x448eca(_0x5dd023[_0x51da81]);
          if (!(_0x2202b1 = null != _0x370131 && _0x25eddb(_0x370131, _0x3b4403))) break;
          _0x370131 = _0x370131[_0x3b4403];
        }
        if (_0x2202b1 || ++_0x51da81 != _0x58bc15) return _0x2202b1;
        return !!(_0x58bc15 = null == _0x370131 ? 0 : _0x370131.length) && _0x20aa0f(_0x58bc15) && _0x583b31(_0x3b4403, _0x58bc15) && (_0x14dbd1(_0x370131) || _0xb4fb1b(_0x370131));
      }
      function _0x1fd5e5(_0xb571fc) {
        if ("function" != typeof _0xb571fc.constructor || _0x2946c0(_0xb571fc)) return {};
        return _0x41abc3(_0x3d2c1a(_0xb571fc));
      }
      function _0x2c9c69(_0x13b3a8) {
        return _0x14dbd1(_0x13b3a8) || _0xb4fb1b(_0x13b3a8) || !!(_0x453d96 && _0x13b3a8 && _0x13b3a8[_0x453d96]);
      }
      function _0x583b31(_0x819180, _0x160357) {
        var _0x180c51 = typeof _0x819180;
        return !!(_0x160357 = null == _0x160357 ? _0x1dad18 : _0x160357) && ('number' == _0x180c51 || 'symbol' != _0x180c51 && _0x565da4.test(_0x819180)) && _0x819180 > -1 && _0x819180 % 1 == 0 && _0x819180 < _0x160357;
      }
      function _0x3a0a4c(_0x27dce2, _0x502be6, _0x3b12c4) {
        if (!_0x95df83(_0x3b12c4)) return false;
        var _0xc0b241 = typeof _0x502be6;
        return !!('number' == _0xc0b241 ? _0x58ad0d(_0x3b12c4) && _0x583b31(_0x502be6, _0x3b12c4.length) : "string" == _0xc0b241 && _0x502be6 in _0x3b12c4) && _0x1eed1e(_0x3b12c4[_0x502be6], _0x27dce2);
      }
      function _0x5075cb(_0x43870a, _0x4f6392) {
        if (_0x14dbd1(_0x43870a)) return false;
        var _0x1e601f = typeof _0x43870a;
        return !('number' != _0x1e601f && "symbol" != _0x1e601f && 'boolean' != _0x1e601f && null != _0x43870a && !_0x12638b(_0x43870a)) || _0x4ec301.test(_0x43870a) || !_0x18900f.test(_0x43870a) || null != _0x4f6392 && _0x43870a in _0x48fa9a(_0x4f6392);
      }
      function _0x200ad4(_0x3a76ff) {
        var _0xc09d65 = _0x3500db(_0x3a76ff),
          _0x5b0104 = _0x4fb193[_0xc09d65];
        if ('function' != typeof _0x5b0104 || !(_0xc09d65 in _0x52cb1f.prototype)) return false;
        if (_0x3a76ff === _0x5b0104) return true;
        var _0x27086c = _0x22d9ef(_0x5b0104);
        return !!_0x27086c && _0x3a76ff === _0x27086c[0];
      }
      (_0x4195a8 && _0x444f77(new _0x4195a8(new ArrayBuffer(1))) != _0x4d1fad || _0x488194 && _0x444f77(new _0x488194()) != _0x4c0bc9 || _0x5a8df2 && _0x444f77(_0x5a8df2.resolve()) != _0x188a11 || _0x259617 && _0x444f77(new _0x259617()) != _0x2443d3 || _0xf26413 && _0x444f77(new _0xf26413()) != _0x1bb5ae) && (_0x444f77 = function (_0x28e8fe) {
        var _0xa52f17 = _0x22eff8(_0x28e8fe),
          _0x186d73 = _0xa52f17 == _0x17902e ? _0x28e8fe.constructor : _0x18a104,
          _0x33bc31 = _0x186d73 ? _0x1298eb(_0x186d73) : '';
        if (_0x33bc31) switch (_0x33bc31) {
          case _0x467c73:
            return _0x4d1fad;
          case _0x4e740a:
            return _0x4c0bc9;
          case _0x532e7a:
            return _0x188a11;
          case _0x29ae98:
            return _0x2443d3;
          case _0x204e97:
            return _0x1bb5ae;
        }
        return _0xa52f17;
      });
      var _0x5af059 = _0x58a179 ? _0x511334 : _0x900f9e;
      function _0x2946c0(_0x3f3a54) {
        var _0x3b3346 = _0x3f3a54 && _0x3f3a54.constructor;
        return _0x3f3a54 === ('function' == typeof _0x3b3346 && _0x3b3346.prototype || _0x5713ec);
      }
      function _0x190a3a(_0x14dbf4) {
        return _0x14dbf4 == _0x14dbf4 && !_0x95df83(_0x14dbf4);
      }
      function _0x44bb65(_0x8933b9, _0x3b012b) {
        return function (_0x4fda26) {
          return null != _0x4fda26 && _0x4fda26[_0x8933b9] === _0x3b012b && (_0x3b012b !== _0x18a104 || _0x8933b9 in _0x48fa9a(_0x4fda26));
        };
      }
      function _0x307172(_0x1fb21d, _0x179960, _0x5f3527) {
        _0x179960 = _0x42358d(_0x179960 === _0x18a104 ? _0x1fb21d.length - 1 : _0x179960, 0);
        return function () {
          for (var _0x162fa2 = arguments, _0x418a53 = -1, _0x3562f9 = _0x42358d(_0x162fa2.length - _0x179960, 0), _0x141788 = _0x30943d(_0x3562f9); ++_0x418a53 < _0x3562f9;) _0x141788[_0x418a53] = _0x162fa2[_0x179960 + _0x418a53];
          _0x418a53 = -1;
          for (var _0x5b3567 = _0x30943d(_0x179960 + 1); ++_0x418a53 < _0x179960;) _0x5b3567[_0x418a53] = _0x162fa2[_0x418a53];
          _0x5b3567[_0x179960] = _0x5f3527(_0x141788);
          return _0x408cf2(_0x1fb21d, this, _0x5b3567);
        };
      }
      function _0x460865(_0x14ce70, _0x561223) {
        if (_0x561223.length < 2) return _0x14ce70;
        return _0x4d632a(_0x14ce70, _0x38834a(_0x561223, 0, -1));
      }
      function _0x2a00ba(_0x35f381, _0x59560f) {
        if (("constructor" !== _0x59560f || "function" != typeof _0x35f381[_0x59560f]) && "__proto__" != _0x59560f) return _0x35f381[_0x59560f];
      }
      var _0x2f98d9 = _0x1cc16b(_0x436c4c),
        _0x41921e = _0x5baa34 || function (_0x2fe652, _0x91e221) {
          return _0xac24cc.setTimeout(_0x2fe652, _0x91e221);
        },
        _0x2639e7 = _0x1cc16b(_0x4ef132);
      function _0x26455d(_0x12788c, _0x351601, _0x355122) {
        var _0x59056a = _0x351601 + '';
        return _0x2639e7(_0x12788c, function (_0x145590, _0x2e844c) {
          var _0x3ce2cb = _0x2e844c.length;
          if (!_0x3ce2cb) return _0x145590;
          var _0x4598c8 = _0x3ce2cb - 1;
          _0x2e844c[_0x4598c8] = (_0x3ce2cb > 1 ? '&\x20' : '') + _0x2e844c[_0x4598c8];
          _0x2e844c = _0x2e844c.join(_0x3ce2cb > 2 ? ',\x20' : '\x20');
          return _0x145590.replace(_0x2acef5, "{\n/* [wrapped with " + _0x2e844c + "] */\n");
        }(_0x59056a, function (_0x1444ac, _0x2b0f1d) {
          _0x4e0041(_0x465b61, function (_0x2818c1) {
            var _0x1a6902 = '_.' + _0x2818c1[0];
            _0x2b0f1d & _0x2818c1[1] && !_0x5d45ce(_0x1444ac, _0x1a6902) && _0x1444ac.push(_0x1a6902);
          });
          return _0x1444ac.sort();
        }(function (_0x507a3e) {
          var _0x486094 = _0x507a3e.match(_0x4b92db);
          if (_0x486094) return _0x486094[1].split(_0x3069b0);
          return [];
        }(_0x59056a), _0x355122)));
      }
      function _0x1cc16b(_0x8f6e24) {
        var _0x2cc2d5 = 0,
          _0x14f4b4 = 0;
        return function () {
          var _0x4b81e1 = _0x5ebb01(),
            _0x581ae3 = 16 - (_0x4b81e1 - _0x14f4b4);
          _0x14f4b4 = _0x4b81e1;
          if (_0x581ae3 > 0) {
            if (++_0x2cc2d5 >= 800) return arguments[0];
          } else _0x2cc2d5 = 0;
          return _0x8f6e24.apply(_0x18a104, arguments);
        };
      }
      function _0x5d22ea(_0x5a4566, _0x584d48) {
        var _0x5bdafe = -1,
          _0x5efffc = _0x5a4566.length,
          _0x221d79 = _0x5efffc - 1;
        for (_0x584d48 = _0x584d48 === _0x18a104 ? _0x5efffc : _0x584d48; ++_0x5bdafe < _0x584d48;) {
          var _0x3cea15 = _0x7ee911(_0x5bdafe, _0x221d79),
            _0x42b671 = _0x5a4566[_0x3cea15];
          _0x5a4566[_0x3cea15] = _0x5a4566[_0x5bdafe];
          _0x5a4566[_0x5bdafe] = _0x42b671;
        }
        _0x5a4566.length = _0x584d48;
        return _0x5a4566;
      }
      var _0x1f2031,
        _0x2e3c6b,
        _0x5330f8,
        _0x12abd5 = (_0x1f2031 = function (_0x7c80be) {
          var _0x44f4e0 = [];
          46 === _0x7c80be.charCodeAt(0) && _0x44f4e0.push('');
          _0x7c80be.replace(_0x35488e, function (_0x4833ee, _0x6fc8a1, _0x3c1f32, _0x5d6249) {
            _0x44f4e0.push(_0x3c1f32 ? _0x5d6249.replace(_0x5951ba, '$1') : _0x6fc8a1 || _0x4833ee);
          });
          return _0x44f4e0;
        }, _0x2e3c6b = _0x1e280d(_0x1f2031, function (_0x21d2dd) {
          500 === _0x5330f8.size && _0x5330f8.clear();
          return _0x21d2dd;
        }), _0x5330f8 = _0x2e3c6b.cache, _0x2e3c6b);
      function _0x448eca(_0x214d12) {
        if ('string' == typeof _0x214d12 || _0x12638b(_0x214d12)) return _0x214d12;
        var _0x31543d = _0x214d12 + '';
        return '0' == _0x31543d && 1 / _0x214d12 == -1 / 0 ? '-0' : _0x31543d;
      }
      function _0x1298eb(_0xe353e0) {
        if (null != _0xe353e0) {
          try {
            return _0x583aae.call(_0xe353e0);
          } catch (_0x5ae6de) {}
          try {
            return _0xe353e0 + '';
          } catch (_0x523d98) {}
        }
        return '';
      }
      function _0x368288(_0x17a715) {
        if (_0x17a715 instanceof _0x52cb1f) return _0x17a715.clone();
        var _0x26448b = new _0x44e077(_0x17a715.__wrapped__, _0x17a715.__chain__);
        _0x26448b.__actions__ = _0x73a637(_0x17a715.__actions__);
        _0x26448b.__index__ = _0x17a715.__index__;
        _0x26448b.__values__ = _0x17a715.__values__;
        return _0x26448b;
      }
      var _0xc67ad5 = _0x24cab9(function (_0x51800c, _0x727dfa) {
          if (_0x31f2f7(_0x51800c)) return _0x19ed70(_0x51800c, _0x2d66a0(_0x727dfa, 1, _0x31f2f7, true));
          return [];
        }),
        _0x310c5e = _0x24cab9(function (_0x59a2ae, _0x20ea6a) {
          var _0x9d6e6c = _0xc58f7(_0x20ea6a);
          _0x31f2f7(_0x9d6e6c) && (_0x9d6e6c = _0x18a104);
          if (_0x31f2f7(_0x59a2ae)) return _0x19ed70(_0x59a2ae, _0x2d66a0(_0x20ea6a, 1, _0x31f2f7, true), _0x2e11c8(_0x9d6e6c, 2));
          return [];
        }),
        _0x493a33 = _0x24cab9(function (_0x2c514a, _0x48ec51) {
          var _0x56a9a2 = _0xc58f7(_0x48ec51);
          _0x31f2f7(_0x56a9a2) && (_0x56a9a2 = _0x18a104);
          if (_0x31f2f7(_0x2c514a)) return _0x19ed70(_0x2c514a, _0x2d66a0(_0x48ec51, 1, _0x31f2f7, true), _0x18a104, _0x56a9a2);
          return [];
        });
      function _0x28e152(_0xc542c9, _0x5175fe, _0x205b95) {
        var _0x6a80bb = null == _0xc542c9 ? 0 : _0xc542c9.length;
        if (!_0x6a80bb) return -1;
        var _0xac1d46 = null == _0x205b95 ? 0 : _0x53832b(_0x205b95);
        _0xac1d46 < 0 && (_0xac1d46 = _0x42358d(_0x6a80bb + _0xac1d46, 0));
        return _0x34c743(_0xc542c9, _0x2e11c8(_0x5175fe, 3), _0xac1d46);
      }
      function _0x33541c(_0x38ea71, _0x266bef, _0x2df58b) {
        var _0x3d85a8 = null == _0x38ea71 ? 0 : _0x38ea71.length;
        if (!_0x3d85a8) return -1;
        var _0x4a3b9d = _0x3d85a8 - 1;
        _0x2df58b !== _0x18a104 && (_0x4a3b9d = _0x53832b(_0x2df58b), _0x4a3b9d = _0x2df58b < 0 ? _0x42358d(_0x3d85a8 + _0x4a3b9d, 0) : _0x5b234e(_0x4a3b9d, _0x3d85a8 - 1));
        return _0x34c743(_0x38ea71, _0x2e11c8(_0x266bef, 3), _0x4a3b9d, true);
      }
      function _0x235524(_0x1f968b) {
        if (null != _0x1f968b && _0x1f968b.length) return _0x2d66a0(_0x1f968b, 1);
        return [];
      }
      function _0x2ba92a(_0x4799eb) {
        if (_0x4799eb && _0x4799eb.length) return _0x4799eb[0];
        return _0x18a104;
      }
      var _0x13e1d0 = _0x24cab9(function (_0x4c30cb) {
          var _0x2757ab = _0x5b4a4e(_0x4c30cb, _0x1748b4);
          if (_0x2757ab.length && _0x2757ab[0] === _0x4c30cb[0]) return _0x295e23(_0x2757ab);
          return [];
        }),
        _0x478dcd = _0x24cab9(function (_0x2a7d96) {
          var _0x32e798 = _0xc58f7(_0x2a7d96),
            _0x35091a = _0x5b4a4e(_0x2a7d96, _0x1748b4);
          if (_0x32e798 === _0xc58f7(_0x35091a)) _0x32e798 = _0x18a104;else _0x35091a.pop();
          if (_0x35091a.length && _0x35091a[0] === _0x2a7d96[0]) return _0x295e23(_0x35091a, _0x2e11c8(_0x32e798, 2));
          return [];
        }),
        _0xf26861 = _0x24cab9(function (_0x36d5e6) {
          var _0x4adfde = _0xc58f7(_0x36d5e6),
            _0x459a9c = _0x5b4a4e(_0x36d5e6, _0x1748b4);
          (_0x4adfde = 'function' == typeof _0x4adfde ? _0x4adfde : _0x18a104) && _0x459a9c.pop();
          if (_0x459a9c.length && _0x459a9c[0] === _0x36d5e6[0]) return _0x295e23(_0x459a9c, _0x18a104, _0x4adfde);
          return [];
        });
      function _0xc58f7(_0x1fd3e9) {
        var _0x165ef3 = null == _0x1fd3e9 ? 0 : _0x1fd3e9.length;
        if (_0x165ef3) return _0x1fd3e9[_0x165ef3 - 1];
        return _0x18a104;
      }
      var _0x4caaff = _0x24cab9(_0x13ef18);
      function _0x13ef18(_0x10356e, _0x4d267a) {
        if (_0x10356e && _0x10356e.length && _0x4d267a && _0x4d267a.length) return _0x2e1fc6(_0x10356e, _0x4d267a);
        return _0x10356e;
      }
      var _0x1b28dc = _0x42e0a7(function (_0x3be4e5, _0x34a64e) {
        var _0x1176fb = null == _0x3be4e5 ? 0 : _0x3be4e5.length,
          _0x10ab07 = _0x2b737b(_0x3be4e5, _0x34a64e);
        _0x2ebae1(_0x3be4e5, _0x5b4a4e(_0x34a64e, function (_0x405dcb) {
          if (_0x583b31(_0x405dcb, _0x1176fb)) return +_0x405dcb;
          return _0x405dcb;
        }).sort(_0x47ca41));
        return _0x10ab07;
      });
      function _0x3d3ca1(_0x12b01) {
        if (null == _0x12b01) return _0x12b01;
        return _0x2142ed.call(_0x12b01);
      }
      var _0x239223 = _0x24cab9(function (_0x2aca9a) {
          return _0x89549d(_0x2d66a0(_0x2aca9a, 1, _0x31f2f7, true));
        }),
        _0x5b8b89 = _0x24cab9(function (_0x3682ff) {
          var _0x50cba9 = _0xc58f7(_0x3682ff);
          _0x31f2f7(_0x50cba9) && (_0x50cba9 = _0x18a104);
          return _0x89549d(_0x2d66a0(_0x3682ff, 1, _0x31f2f7, true), _0x2e11c8(_0x50cba9, 2));
        }),
        _0x48f0f6 = _0x24cab9(function (_0x3db86a) {
          var _0x27972d = _0xc58f7(_0x3db86a);
          _0x27972d = "function" == typeof _0x27972d ? _0x27972d : _0x18a104;
          return _0x89549d(_0x2d66a0(_0x3db86a, 1, _0x31f2f7, true), _0x18a104, _0x27972d);
        });
      function _0xce11f6(_0x3cf1f6) {
        if (!_0x3cf1f6 || !_0x3cf1f6.length) return [];
        var _0x56d6eb = 0;
        _0x3cf1f6 = _0x200b15(_0x3cf1f6, function (_0x382628) {
          if (_0x31f2f7(_0x382628)) {
            _0x56d6eb = _0x42358d(_0x382628.length, _0x56d6eb);
            return true;
          }
        });
        return _0x3004b6(_0x56d6eb, function (_0x124255) {
          return _0x5b4a4e(_0x3cf1f6, _0x26919b(_0x124255));
        });
      }
      function _0x1f3bc9(_0x571ac7, _0x15e68b) {
        if (!_0x571ac7 || !_0x571ac7.length) return [];
        var _0x2f4a4e = _0xce11f6(_0x571ac7);
        if (null == _0x15e68b) return _0x2f4a4e;
        return _0x5b4a4e(_0x2f4a4e, function (_0x21f0a1) {
          return _0x408cf2(_0x15e68b, _0x18a104, _0x21f0a1);
        });
      }
      var _0x3bf87d = _0x24cab9(function (_0x39060b, _0x1cbb60) {
          if (_0x31f2f7(_0x39060b)) return _0x19ed70(_0x39060b, _0x1cbb60);
          return [];
        }),
        _0x9e058f = _0x24cab9(function (_0x3c6b22) {
          return _0x664e74(_0x200b15(_0x3c6b22, _0x31f2f7));
        }),
        _0x1224af = _0x24cab9(function (_0x43fba8) {
          var _0x5c27f2 = _0xc58f7(_0x43fba8);
          _0x31f2f7(_0x5c27f2) && (_0x5c27f2 = _0x18a104);
          return _0x664e74(_0x200b15(_0x43fba8, _0x31f2f7), _0x2e11c8(_0x5c27f2, 2));
        }),
        _0x196dbf = _0x24cab9(function (_0x138139) {
          var _0x5d7cb0 = _0xc58f7(_0x138139);
          _0x5d7cb0 = "function" == typeof _0x5d7cb0 ? _0x5d7cb0 : _0x18a104;
          return _0x664e74(_0x200b15(_0x138139, _0x31f2f7), _0x18a104, _0x5d7cb0);
        }),
        _0x43aebe = _0x24cab9(_0xce11f6),
        _0x45b80f = _0x24cab9(function (_0x40d080) {
          var _0x20a9d2 = _0x40d080.length,
            _0x2acb43 = _0x20a9d2 > 1 ? _0x40d080[_0x20a9d2 - 1] : _0x18a104;
          _0x2acb43 = "function" == typeof _0x2acb43 ? (_0x40d080.pop(), _0x2acb43) : _0x18a104;
          return _0x1f3bc9(_0x40d080, _0x2acb43);
        });
      function _0x172e9f(_0x559d7a) {
        var _0x3fd3e6 = _0x4fb193(_0x559d7a);
        _0x3fd3e6.__chain__ = true;
        return _0x3fd3e6;
      }
      function _0x3b2d4d(_0x3b6767, _0x5dfe84) {
        return _0x5dfe84(_0x3b6767);
      }
      var _0x5864d8 = _0x42e0a7(function (_0x4cf28a) {
          var _0x4f573b = _0x4cf28a.length,
            _0x45dca0 = _0x4f573b ? _0x4cf28a[0] : 0,
            _0x48bfae = this.__wrapped__,
            _0x136d16 = function (_0x4fabbb) {
              return _0x2b737b(_0x4fabbb, _0x4cf28a);
            };
          if (!(_0x4f573b > 1 || this.__actions__.length) && _0x48bfae instanceof _0x52cb1f && _0x583b31(_0x45dca0)) {
            (_0x48bfae = _0x48bfae.slice(_0x45dca0, +_0x45dca0 + (_0x4f573b ? 1 : 0))).__actions__.push({
              func: _0x3b2d4d,
              args: [_0x136d16],
              thisArg: _0x18a104
            });
            return new _0x44e077(_0x48bfae, this.__chain__).thru(function (_0x1ad0f4) {
              _0x4f573b && !_0x1ad0f4.length && _0x1ad0f4.push(_0x18a104);
              return _0x1ad0f4;
            });
          }
          return this.thru(_0x136d16);
        }),
        _0x128e19 = _0x12f28e(function (_0x2b7f9b, _0x4f8514, _0x1c881d) {
          if (_0x5a55dd.call(_0x2b7f9b, _0x1c881d)) ++_0x2b7f9b[_0x1c881d];else _0x3cac09(_0x2b7f9b, _0x1c881d, 1);
        }),
        _0x1e66ba = _0x21f5d6(_0x28e152),
        _0x3cd451 = _0x21f5d6(_0x33541c);
      function _0x1d2980(_0x5d74b5, _0x312d16) {
        return (_0x14dbd1(_0x5d74b5) ? _0x4e0041 : _0x571673)(_0x5d74b5, _0x2e11c8(_0x312d16, 3));
      }
      function _0x34d309(_0x547e51, _0x437b74) {
        return (_0x14dbd1(_0x547e51) ? _0x4756f5 : _0x1265d8)(_0x547e51, _0x2e11c8(_0x437b74, 3));
      }
      var _0x39794e = _0x12f28e(function (_0x2cb6af, _0x56fe1c, _0x292109) {
          if (_0x5a55dd.call(_0x2cb6af, _0x292109)) _0x2cb6af[_0x292109].push(_0x56fe1c);else _0x3cac09(_0x2cb6af, _0x292109, [_0x56fe1c]);
        }),
        _0x5ec071 = _0x24cab9(function (_0xc8023c, _0x103e3d, _0x36675a) {
          var _0x24d448 = -1,
            _0x5d654b = "function" == typeof _0x103e3d,
            _0x22596a = _0x58ad0d(_0xc8023c) ? _0x30943d(_0xc8023c.length) : [];
          _0x571673(_0xc8023c, function (_0x4a0726) {
            _0x22596a[++_0x24d448] = _0x5d654b ? _0x408cf2(_0x103e3d, _0x4a0726, _0x36675a) : _0x9ca3e2(_0x4a0726, _0x103e3d, _0x36675a);
          });
          return _0x22596a;
        }),
        _0x28c81b = _0x12f28e(function (_0x4837f8, _0x3b0021, _0x4abe8a) {
          _0x3cac09(_0x4837f8, _0x4abe8a, _0x3b0021);
        });
      function _0x473905(_0x1033ca, _0x583608) {
        return (_0x14dbd1(_0x1033ca) ? _0x5b4a4e : _0x57ea90)(_0x1033ca, _0x2e11c8(_0x583608, 3));
      }
      var _0x270e92 = _0x12f28e(function (_0x49774f, _0x59b9e1, _0x5c68d2) {
          _0x49774f[_0x5c68d2 ? 0 : 1].push(_0x59b9e1);
        }, function () {
          return [[], []];
        }),
        _0x51dc25 = _0x24cab9(function (_0x4d9dac, _0x364841) {
          if (null == _0x4d9dac) return [];
          var _0x16df50 = _0x364841.length;
          if (_0x16df50 > 1 && _0x3a0a4c(_0x4d9dac, _0x364841[0], _0x364841[1])) _0x364841 = [];else _0x16df50 > 2 && _0x3a0a4c(_0x364841[0], _0x364841[1], _0x364841[2]) && (_0x364841 = [_0x364841[0]]);
          return _0x1edb82(_0x4d9dac, _0x2d66a0(_0x364841, 1), []);
        }),
        _0xe574be = _0x51b9fe || function () {
          return _0xac24cc.Date.now();
        };
      function _0x55d014(_0x1dde02, _0x31aaf2, _0x5c0711) {
        _0x31aaf2 = _0x5c0711 ? _0x18a104 : _0x31aaf2;
        _0x31aaf2 = _0x1dde02 && null == _0x31aaf2 ? _0x1dde02.length : _0x31aaf2;
        return _0x2997b4(_0x1dde02, _0x1d8dce, _0x18a104, _0x18a104, _0x18a104, _0x18a104, _0x31aaf2);
      }
      function _0x55b1d2(_0x2d8221, _0x234d92) {
        var _0x399b82;
        if ("function" != typeof _0x234d92) throw new _0x31211a(_0xe7d2d9);
        _0x2d8221 = _0x53832b(_0x2d8221);
        return function () {
          --_0x2d8221 > 0 && (_0x399b82 = _0x234d92.apply(this, arguments));
          _0x2d8221 <= 1 && (_0x234d92 = _0x18a104);
          return _0x399b82;
        };
      }
      var _0x18db9a = _0x24cab9(function (_0x718d0c, _0x935cdf, _0x3545bb) {
          var _0x4fa935 = 1;
          if (_0x3545bb.length) {
            var _0x493098 = _0xa90a46(_0x3545bb, _0x19f2a9(_0x18db9a));
            _0x4fa935 |= _0x3c6d29;
          }
          return _0x2997b4(_0x718d0c, _0x4fa935, _0x935cdf, _0x3545bb, _0x493098);
        }),
        _0x56a3ab = _0x24cab9(function (_0x296569, _0x15a2c4, _0x2680db) {
          var _0x41d717 = 3;
          if (_0x2680db.length) {
            var _0x55417e = _0xa90a46(_0x2680db, _0x19f2a9(_0x56a3ab));
            _0x41d717 |= _0x3c6d29;
          }
          return _0x2997b4(_0x15a2c4, _0x41d717, _0x296569, _0x2680db, _0x55417e);
        });
      function _0x90467d(_0x2e66cd, _0x3e4041, _0x3b5b3c) {
        var _0x3c3b01,
          _0x4bf497,
          _0x25d932,
          _0x26538c,
          _0x346b11,
          _0x45e426,
          _0x40af52 = 0,
          _0x5524eb = false,
          _0x4a86f6 = false,
          _0x50f41d = true;
        if ('function' != typeof _0x2e66cd) throw new _0x31211a(_0xe7d2d9);
        function _0x36025f(_0x139eda) {
          var _0x411de4 = _0x3c3b01,
            _0x538bb4 = _0x4bf497;
          _0x3c3b01 = _0x4bf497 = _0x18a104;
          _0x40af52 = _0x139eda;
          return _0x26538c = _0x2e66cd.apply(_0x538bb4, _0x411de4);
        }
        function _0x5a3729(_0xdb6932) {
          var _0x48c431 = _0xdb6932 - _0x45e426;
          return _0x45e426 === _0x18a104 || _0x48c431 >= _0x3e4041 || _0x48c431 < 0 || _0x4a86f6 && _0xdb6932 - _0x40af52 >= _0x25d932;
        }
        function _0x10652() {
          var _0x5c364f = _0xe574be();
          if (_0x5a3729(_0x5c364f)) return _0x5b496c(_0x5c364f);
          _0x346b11 = _0x41921e(_0x10652, function (_0x5a3b18) {
            var _0x71ea2 = _0x3e4041 - (_0x5a3b18 - _0x45e426);
            if (_0x4a86f6) return _0x5b234e(_0x71ea2, _0x25d932 - (_0x5a3b18 - _0x40af52));
            return _0x71ea2;
          }(_0x5c364f));
        }
        function _0x5b496c(_0x828e26) {
          _0x346b11 = _0x18a104;
          if (_0x50f41d && _0x3c3b01) return _0x36025f(_0x828e26);
          _0x3c3b01 = _0x4bf497 = _0x18a104;
          return _0x26538c;
        }
        function _0x42be2f() {
          var _0x5a7d0f = _0xe574be(),
            _0x451547 = _0x5a3729(_0x5a7d0f);
          _0x3c3b01 = arguments;
          _0x4bf497 = this;
          _0x45e426 = _0x5a7d0f;
          if (_0x451547) {
            if (_0x346b11 === _0x18a104) return function (_0x1b6b9f) {
              _0x40af52 = _0x1b6b9f;
              _0x346b11 = _0x41921e(_0x10652, _0x3e4041);
              if (_0x5524eb) return _0x36025f(_0x1b6b9f);
              return _0x26538c;
            }(_0x45e426);
            if (_0x4a86f6) {
              _0x58c5c8(_0x346b11);
              _0x346b11 = _0x41921e(_0x10652, _0x3e4041);
              return _0x36025f(_0x45e426);
            }
          }
          _0x346b11 === _0x18a104 && (_0x346b11 = _0x41921e(_0x10652, _0x3e4041));
          return _0x26538c;
        }
        _0x3e4041 = _0x1b8c8f(_0x3e4041) || 0;
        _0x95df83(_0x3b5b3c) && (_0x5524eb = !!_0x3b5b3c.leading, _0x25d932 = (_0x4a86f6 = "maxWait" in _0x3b5b3c) ? _0x42358d(_0x1b8c8f(_0x3b5b3c.maxWait) || 0, _0x3e4041) : _0x25d932, _0x50f41d = "trailing" in _0x3b5b3c ? !!_0x3b5b3c.trailing : _0x50f41d);
        _0x42be2f.cancel = function () {
          _0x346b11 !== _0x18a104 && _0x58c5c8(_0x346b11);
          _0x40af52 = 0;
          _0x3c3b01 = _0x45e426 = _0x4bf497 = _0x346b11 = _0x18a104;
        };
        _0x42be2f.flush = function () {
          if (_0x346b11 === _0x18a104) return _0x26538c;
          return _0x5b496c(_0xe574be());
        };
        return _0x42be2f;
      }
      var _0x212468 = _0x24cab9(function (_0x5d42ae, _0x31f2a6) {
          return _0x310dcc(_0x5d42ae, 1, _0x31f2a6);
        }),
        _0x64b86c = _0x24cab9(function (_0x5847bd, _0x44de3a, _0x18b9a0) {
          return _0x310dcc(_0x5847bd, _0x1b8c8f(_0x44de3a) || 0, _0x18b9a0);
        });
      function _0x1e280d(_0x181450, _0x217670) {
        if ("function" != typeof _0x181450 || null != _0x217670 && "function" != typeof _0x217670) throw new _0x31211a(_0xe7d2d9);
        var _0x30ac3f = function () {
          var _0x4e24cf = arguments,
            _0x5c36f8 = _0x217670 ? _0x217670.apply(this, _0x4e24cf) : _0x4e24cf[0],
            _0x25b606 = _0x30ac3f.cache;
          if (_0x25b606.has(_0x5c36f8)) return _0x25b606.get(_0x5c36f8);
          var _0x4afb62 = _0x181450.apply(this, _0x4e24cf);
          _0x30ac3f.cache = _0x25b606.set(_0x5c36f8, _0x4afb62) || _0x25b606;
          return _0x4afb62;
        };
        _0x30ac3f.cache = new (_0x1e280d.Cache || _0x3d489a)();
        return _0x30ac3f;
      }
      function _0x196a07(_0x89be54) {
        if ("function" != typeof _0x89be54) throw new _0x31211a(_0xe7d2d9);
        return function () {
          var _0x7be80c = arguments;
          switch (_0x7be80c.length) {
            case 0:
              return !_0x89be54.call(this);
            case 1:
              return !_0x89be54.call(this, _0x7be80c[0]);
            case 2:
              return !_0x89be54.call(this, _0x7be80c[0], _0x7be80c[1]);
            case 3:
              return !_0x89be54.call(this, _0x7be80c[0], _0x7be80c[1], _0x7be80c[2]);
          }
          return !_0x89be54.apply(this, _0x7be80c);
        };
      }
      _0x1e280d.Cache = _0x3d489a;
      var _0x287bef = _0x24cab9(function (_0x1f4c52, _0x352dd9) {
          var _0x2d891c = (_0x352dd9 = 1 == _0x352dd9.length && _0x14dbd1(_0x352dd9[0]) ? _0x5b4a4e(_0x352dd9[0], _0x589c7a(_0x2e11c8())) : _0x5b4a4e(_0x2d66a0(_0x352dd9, 1), _0x589c7a(_0x2e11c8()))).length;
          return _0x24cab9(function (_0x1e9109) {
            for (var _0x5cbf11 = -1, _0x1045fe = _0x5b234e(_0x1e9109.length, _0x2d891c); ++_0x5cbf11 < _0x1045fe;) _0x1e9109[_0x5cbf11] = _0x352dd9[_0x5cbf11].call(this, _0x1e9109[_0x5cbf11]);
            return _0x408cf2(_0x1f4c52, this, _0x1e9109);
          });
        }),
        _0x37fcd7 = _0x24cab9(function (_0x220edb, _0x3494a0) {
          var _0x2e3818 = _0xa90a46(_0x3494a0, _0x19f2a9(_0x37fcd7));
          return _0x2997b4(_0x220edb, _0x3c6d29, _0x18a104, _0x3494a0, _0x2e3818);
        }),
        _0x2c86dd = _0x24cab9(function (_0x57b635, _0x5f47ae) {
          var _0x199b05 = _0xa90a46(_0x5f47ae, _0x19f2a9(_0x2c86dd));
          return _0x2997b4(_0x57b635, _0xd4c6fc, _0x18a104, _0x5f47ae, _0x199b05);
        }),
        _0x29853f = _0x42e0a7(function (_0x3c9622, _0x160252) {
          return _0x2997b4(_0x3c9622, _0x567b15, _0x18a104, _0x18a104, _0x18a104, _0x160252);
        });
      function _0x1eed1e(_0x56671f, _0x1d490d) {
        return _0x56671f === _0x1d490d || _0x56671f != _0x56671f && _0x1d490d != _0x1d490d;
      }
      var _0x2986ca = _0x40ea33(_0x578146),
        _0x4bb57e = _0x40ea33(function (_0x37c666, _0x4a1aab) {
          return _0x37c666 >= _0x4a1aab;
        }),
        _0xb4fb1b = _0x2b41ac(function () {
          return arguments;
        }()) ? _0x2b41ac : function (_0xbc24f1) {
          return _0x12dbae(_0xbc24f1) && _0x5a55dd.call(_0xbc24f1, "callee") && !_0x4e8c1d.call(_0xbc24f1, 'callee');
        },
        _0x14dbd1 = _0x30943d.isArray,
        _0x393977 = _0x433d6b ? _0x589c7a(_0x433d6b) : function (_0x709fa) {
          return _0x12dbae(_0x709fa) && _0x22eff8(_0x709fa) == _0x3cf36a;
        };
      function _0x58ad0d(_0x2955e4) {
        return null != _0x2955e4 && _0x20aa0f(_0x2955e4.length) && !_0x511334(_0x2955e4);
      }
      function _0x31f2f7(_0x37022a) {
        return _0x12dbae(_0x37022a) && _0x58ad0d(_0x37022a);
      }
      var _0x41f27f = _0x4ac897 || _0x900f9e,
        _0x4626d1 = _0x12578a ? _0x589c7a(_0x12578a) : function (_0xe80f4c) {
          return _0x12dbae(_0xe80f4c) && _0x22eff8(_0xe80f4c) == _0x41b8a3;
        };
      function _0x20226e(_0x28d62c) {
        if (!_0x12dbae(_0x28d62c)) return false;
        var _0x58903f = _0x22eff8(_0x28d62c);
        return _0x58903f == _0x352b83 || "[object DOMException]" == _0x58903f || "string" == typeof _0x28d62c.message && "string" == typeof _0x28d62c.name && !_0x30a8e6(_0x28d62c);
      }
      function _0x511334(_0x365149) {
        if (!_0x95df83(_0x365149)) return false;
        var _0x5326bd = _0x22eff8(_0x365149);
        return _0x5326bd == _0x1ae195 || _0x5326bd == _0x298d65 || "[object AsyncFunction]" == _0x5326bd || "[object Proxy]" == _0x5326bd;
      }
      function _0x1e7f71(_0x2dc8e0) {
        return "number" == typeof _0x2dc8e0 && _0x2dc8e0 == _0x53832b(_0x2dc8e0);
      }
      function _0x20aa0f(_0x35d0d1) {
        return "number" == typeof _0x35d0d1 && _0x35d0d1 > -1 && _0x35d0d1 % 1 == 0 && _0x35d0d1 <= _0x1dad18;
      }
      function _0x95df83(_0x2f9547) {
        var _0x565df7 = typeof _0x2f9547;
        return null != _0x2f9547 && ("object" == _0x565df7 || 'function' == _0x565df7);
      }
      function _0x12dbae(_0x1f065a) {
        return null != _0x1f065a && "object" == typeof _0x1f065a;
      }
      var _0x138140 = _0x424f66 ? _0x589c7a(_0x424f66) : function (_0x2d84d7) {
        return _0x12dbae(_0x2d84d7) && _0x444f77(_0x2d84d7) == _0x4c0bc9;
      };
      function _0x90b901(_0x3bf41d) {
        return "number" == typeof _0x3bf41d || _0x12dbae(_0x3bf41d) && _0x22eff8(_0x3bf41d) == _0x37f0a1;
      }
      function _0x30a8e6(_0x491917) {
        if (!_0x12dbae(_0x491917) || _0x22eff8(_0x491917) != _0x17902e) return false;
        var _0xa9d78f = _0x3d2c1a(_0x491917);
        if (null === _0xa9d78f) return true;
        var _0x22c84a = _0x5a55dd.call(_0xa9d78f, "constructor") && _0xa9d78f.constructor;
        return "function" == typeof _0x22c84a && _0x22c84a instanceof _0x22c84a && _0x583aae.call(_0x22c84a) == _0x2eacbf;
      }
      var _0x2a6ba7 = _0x2591f5 ? _0x589c7a(_0x2591f5) : function (_0x32ecae) {
          return _0x12dbae(_0x32ecae) && _0x22eff8(_0x32ecae) == _0x13669b;
        },
        _0x20594e = _0x452eaf ? _0x589c7a(_0x452eaf) : function (_0xc6b92e) {
          return _0x12dbae(_0xc6b92e) && _0x444f77(_0xc6b92e) == _0x2443d3;
        };
      function _0x531ad1(_0x39da53) {
        return "string" == typeof _0x39da53 || !_0x14dbd1(_0x39da53) && _0x12dbae(_0x39da53) && _0x22eff8(_0x39da53) == _0x465ee6;
      }
      function _0x12638b(_0x24c33b) {
        return "symbol" == typeof _0x24c33b || _0x12dbae(_0x24c33b) && _0x22eff8(_0x24c33b) == _0x3f07d1;
      }
      var _0x3ed7c9 = _0x4eb623 ? _0x589c7a(_0x4eb623) : function (_0x42b2ee) {
          return _0x12dbae(_0x42b2ee) && _0x20aa0f(_0x42b2ee.length) && !!_0x52317c[_0x22eff8(_0x42b2ee)];
        },
        _0x16562b = _0x40ea33(_0x27f942),
        _0x9a9b9 = _0x40ea33(function (_0x425747, _0x34ef46) {
          return _0x425747 <= _0x34ef46;
        });
      function _0x7ad040(_0x81a854) {
        if (!_0x81a854) return [];
        if (_0x58ad0d(_0x81a854)) return _0x531ad1(_0x81a854) ? _0x27f9f1(_0x81a854) : _0x73a637(_0x81a854);
        if (_0x2d66b9 && _0x81a854[_0x2d66b9]) return function (_0x1e793c) {
          for (var _0x33fdd1, _0x5a6be1 = []; !(_0x33fdd1 = _0x1e793c.next()).done;) _0x5a6be1.push(_0x33fdd1.value);
          return _0x5a6be1;
        }(_0x81a854[_0x2d66b9]());
        var _0x4c0083 = _0x444f77(_0x81a854);
        return (_0x4c0083 == _0x4c0bc9 ? _0x9009ed : _0x4c0083 == _0x2443d3 ? _0x2391fa : _0x4fa8ff)(_0x81a854);
      }
      function _0x1c17cf(_0x12e5ed) {
        if (_0x12e5ed) return (_0x12e5ed = _0x1b8c8f(_0x12e5ed)) === _0x286c23 || _0x12e5ed === -1 / 0 ? 1.7976931348623157e+308 * (_0x12e5ed < 0 ? -1 : 1) : _0x12e5ed == _0x12e5ed ? _0x12e5ed : 0;
        return 0 === _0x12e5ed ? _0x12e5ed : 0;
      }
      function _0x53832b(_0x384bdf) {
        var _0x2e8426 = _0x1c17cf(_0x384bdf),
          _0x3a8358 = _0x2e8426 % 1;
        if (_0x2e8426 == _0x2e8426) return _0x3a8358 ? _0x2e8426 - _0x3a8358 : _0x2e8426;
        return 0;
      }
      function _0x25e4e4(_0x15708b) {
        if (_0x15708b) return _0x5d0eea(_0x53832b(_0x15708b), 0, _0x4f310a);
        return 0;
      }
      function _0x1b8c8f(_0x53c614) {
        if ("number" == typeof _0x53c614) return _0x53c614;
        if (_0x12638b(_0x53c614)) return _0xcfc3b8;
        if (_0x95df83(_0x53c614)) {
          var _0x3e08a5 = "function" == typeof _0x53c614.valueOf ? _0x53c614.valueOf() : _0x53c614;
          _0x53c614 = _0x95df83(_0x3e08a5) ? _0x3e08a5 + '' : _0x3e08a5;
        }
        if ("string" != typeof _0x53c614) return 0 === _0x53c614 ? _0x53c614 : +_0x53c614;
        _0x53c614 = _0x1b693b(_0x53c614);
        var _0x3a0aba = _0x1e68bb.test(_0x53c614);
        if (_0x3a0aba || _0x120af3.test(_0x53c614)) return _0x419ce9(_0x53c614.slice(2), _0x3a0aba ? 2 : 8);
        if (_0x1eab95.test(_0x53c614)) return _0xcfc3b8;
        return +_0x53c614;
      }
      function _0x716ec4(_0x29ac15) {
        return _0x2e32c7(_0x29ac15, _0x2247a8(_0x29ac15));
      }
      function _0x5812e2(_0x471450) {
        if (null == _0x471450) return '';
        return _0x156ed6(_0x471450);
      }
      var _0x3e38fd = _0x4edced(function (_0x3018a9, _0xa1bee) {
          if (_0x2946c0(_0xa1bee) || _0x58ad0d(_0xa1bee)) _0x2e32c7(_0xa1bee, _0x33c583(_0xa1bee), _0x3018a9);else {
            for (var _0x16ca38 in _0xa1bee) _0x5a55dd.call(_0xa1bee, _0x16ca38) && _0x28d3c2(_0x3018a9, _0x16ca38, _0xa1bee[_0x16ca38]);
          }
        }),
        _0x5d4a04 = _0x4edced(function (_0x42115a, _0x1c61eb) {
          _0x2e32c7(_0x1c61eb, _0x2247a8(_0x1c61eb), _0x42115a);
        }),
        _0x49d437 = _0x4edced(function (_0xda5cae, _0x8a72f1, _0x7e21b4, _0x46eeaf) {
          _0x2e32c7(_0x8a72f1, _0x2247a8(_0x8a72f1), _0xda5cae, _0x46eeaf);
        }),
        _0x5bbaaa = _0x4edced(function (_0x16a5ff, _0x5247d8, _0xb819ac, _0x2c09ac) {
          _0x2e32c7(_0x5247d8, _0x33c583(_0x5247d8), _0x16a5ff, _0x2c09ac);
        }),
        _0x58de1c = _0x42e0a7(_0x2b737b),
        _0x49df56 = _0x24cab9(function (_0x4463f2, _0x221f33) {
          _0x4463f2 = _0x48fa9a(_0x4463f2);
          var _0x16730e = -1,
            _0x4fdaf4 = _0x221f33.length,
            _0x463e73 = _0x4fdaf4 > 2 ? _0x221f33[2] : _0x18a104;
          for (_0x463e73 && _0x3a0a4c(_0x221f33[0], _0x221f33[1], _0x463e73) && (_0x4fdaf4 = 1); ++_0x16730e < _0x4fdaf4;) for (var _0x510b7b = _0x221f33[_0x16730e], _0x2c2ee9 = _0x2247a8(_0x510b7b), _0xb4a326 = -1, _0x4047e0 = _0x2c2ee9.length; ++_0xb4a326 < _0x4047e0;) {
            var _0x20e7a6 = _0x2c2ee9[_0xb4a326],
              _0x53890b = _0x4463f2[_0x20e7a6];
            (_0x53890b === _0x18a104 || _0x1eed1e(_0x53890b, _0x5713ec[_0x20e7a6]) && !_0x5a55dd.call(_0x4463f2, _0x20e7a6)) && (_0x4463f2[_0x20e7a6] = _0x510b7b[_0x20e7a6]);
          }
          return _0x4463f2;
        }),
        _0x21f111 = _0x24cab9(function (_0x24a834) {
          _0x24a834.push(_0x18a104, _0x2ad315);
          return _0x408cf2(_0x2a109f, _0x18a104, _0x24a834);
        });
      function _0x3b1dd3(_0x55b0dc, _0x4d59c1, _0x4eaffc) {
        var _0x291082 = null == _0x55b0dc ? _0x18a104 : _0x4d632a(_0x55b0dc, _0x4d59c1);
        return _0x291082 === _0x18a104 ? _0x4eaffc : _0x291082;
      }
      function _0x36e820(_0x273e01, _0x406259) {
        return null != _0x273e01 && _0x490828(_0x273e01, _0x406259, _0x360053);
      }
      var _0x1ea6ca = _0x3e1c05(function (_0x35c8ad, _0x385893, _0x297066) {
          null != _0x385893 && "function" != typeof _0x385893.toString && (_0x385893 = _0x3d2036.call(_0x385893));
          _0x35c8ad[_0x385893] = _0x297066;
        }, _0x5007f0(_0x5529b6)),
        _0x5d5b4a = _0x3e1c05(function (_0x4eb69a, _0x358f69, _0x429249) {
          null != _0x358f69 && 'function' != typeof _0x358f69.toString && (_0x358f69 = _0x3d2036.call(_0x358f69));
          if (_0x5a55dd.call(_0x4eb69a, _0x358f69)) _0x4eb69a[_0x358f69].push(_0x429249);else _0x4eb69a[_0x358f69] = [_0x429249];
        }, _0x2e11c8),
        _0xcf4d1b = _0x24cab9(_0x9ca3e2);
      function _0x33c583(_0x244f46) {
        if (_0x58ad0d(_0x244f46)) return _0x2a8dbb(_0x244f46);
        return _0x10cfab(_0x244f46);
      }
      function _0x2247a8(_0x5453f3) {
        if (_0x58ad0d(_0x5453f3)) return _0x2a8dbb(_0x5453f3, true);
        return _0x2e0629(_0x5453f3);
      }
      var _0x20c5ff = _0x4edced(function (_0xf2d382, _0x2ac4b2, _0x45f828) {
          _0x2fcef7(_0xf2d382, _0x2ac4b2, _0x45f828);
        }),
        _0x2a109f = _0x4edced(function (_0x1e20e2, _0xb3ca38, _0x2b467f, _0x4987e5) {
          _0x2fcef7(_0x1e20e2, _0xb3ca38, _0x2b467f, _0x4987e5);
        }),
        _0x3ab045 = _0x42e0a7(function (_0x371fac, _0x4bdc3d) {
          var _0x316332 = {};
          if (null == _0x371fac) return _0x316332;
          var _0x861f4a = false;
          _0x4bdc3d = _0x5b4a4e(_0x4bdc3d, function (_0x814f3b) {
            _0x814f3b = _0x5357b7(_0x814f3b, _0x371fac);
            _0x861f4a || (_0x861f4a = _0x814f3b.length > 1);
            return _0x814f3b;
          });
          _0x2e32c7(_0x371fac, _0xf19315(_0x371fac), _0x316332);
          _0x861f4a && (_0x316332 = _0x464d05(_0x316332, 7, _0x49b94a));
          for (var _0x1f495c = _0x4bdc3d.length; _0x1f495c--;) _0x4e07fa(_0x316332, _0x4bdc3d[_0x1f495c]);
          return _0x316332;
        }),
        _0x4233db = _0x42e0a7(function (_0x3dda46, _0x50389a) {
          if (null == _0x3dda46) return {};
          return function (_0x236e30, _0xa74693) {
            return _0x5441b3(_0x236e30, _0xa74693, function (_0x5a5e83, _0x24e66c) {
              return _0x36e820(_0x236e30, _0x24e66c);
            });
          }(_0x3dda46, _0x50389a);
        });
      function _0x2c175e(_0x4dd9e1, _0xdea1e3) {
        if (null == _0x4dd9e1) return {};
        var _0x7dc502 = _0x5b4a4e(_0xf19315(_0x4dd9e1), function (_0x2cb631) {
          return [_0x2cb631];
        });
        _0xdea1e3 = _0x2e11c8(_0xdea1e3);
        return _0x5441b3(_0x4dd9e1, _0x7dc502, function (_0x33d575, _0x1eb5a5) {
          return _0xdea1e3(_0x33d575, _0x1eb5a5[0]);
        });
      }
      var _0x243ea9 = _0x57300a(_0x33c583),
        _0x44a367 = _0x57300a(_0x2247a8);
      function _0x4fa8ff(_0x5944ba) {
        if (null == _0x5944ba) return [];
        return _0x1a53cb(_0x5944ba, _0x33c583(_0x5944ba));
      }
      var _0x3612f0 = _0x527cd5(function (_0x2805b8, _0x5a6ae3, _0x619387) {
        _0x5a6ae3 = _0x5a6ae3.toLowerCase();
        return _0x2805b8 + (_0x619387 ? _0x243a98(_0x5a6ae3) : _0x5a6ae3);
      });
      function _0x243a98(_0x511f45) {
        return _0x301f92(_0x5812e2(_0x511f45).toLowerCase());
      }
      function _0x1809cd(_0x56d7b3) {
        return (_0x56d7b3 = _0x5812e2(_0x56d7b3)) && _0x56d7b3.replace(_0x37643f, _0x28484c).replace(_0x5731fd, '');
      }
      var _0x55e97b = _0x527cd5(function (_0xb4284d, _0x47a435, _0x5b87d4) {
          return _0xb4284d + (_0x5b87d4 ? '-' : '') + _0x47a435.toLowerCase();
        }),
        _0x348efc = _0x527cd5(function (_0x30849e, _0x373790, _0x43cba9) {
          return _0x30849e + (_0x43cba9 ? '\x20' : '') + _0x373790.toLowerCase();
        }),
        _0x20bdb0 = _0x2e2bf5('toLowerCase'),
        _0x49c543 = _0x527cd5(function (_0x4beec2, _0x300ce9, _0x210ebe) {
          return _0x4beec2 + (_0x210ebe ? '_' : '') + _0x300ce9.toLowerCase();
        }),
        _0x46cfdb = _0x527cd5(function (_0x189783, _0x493368, _0x1007af) {
          return _0x189783 + (_0x1007af ? '\x20' : '') + _0x301f92(_0x493368);
        }),
        _0xfde9d7 = _0x527cd5(function (_0x44d04a, _0xa4da8d, _0x457f6e) {
          return _0x44d04a + (_0x457f6e ? '\x20' : '') + _0xa4da8d.toUpperCase();
        }),
        _0x301f92 = _0x2e2bf5("toUpperCase");
      function _0x1e1e5d(_0x4e9f43, _0x2a354c, _0xc64df9) {
        _0x4e9f43 = _0x5812e2(_0x4e9f43);
        if ((_0x2a354c = _0xc64df9 ? _0x18a104 : _0x2a354c) === _0x18a104) return function (_0x5e6895) {
          return _0x3ed215.test(_0x5e6895);
        }(_0x4e9f43) ? function (_0x4d2207) {
          return _0x4d2207.match(_0x46188c) || [];
        }(_0x4e9f43) : function (_0x3ba78e) {
          return _0x3ba78e.match(_0x1fe092) || [];
        }(_0x4e9f43);
        return _0x4e9f43.match(_0x2a354c) || [];
      }
      var _0x59b0b0 = _0x24cab9(function (_0x2085f0, _0x2504ef) {
          try {
            return _0x408cf2(_0x2085f0, _0x18a104, _0x2504ef);
          } catch (_0x26030c) {
            if (_0x20226e(_0x26030c)) return _0x26030c;
            return new _0x448be0(_0x26030c);
          }
        }),
        _0x4cc50b = _0x42e0a7(function (_0x133bba, _0x196c66) {
          _0x4e0041(_0x196c66, function (_0x3081ba) {
            _0x3081ba = _0x448eca(_0x3081ba);
            _0x3cac09(_0x133bba, _0x3081ba, _0x18db9a(_0x133bba[_0x3081ba], _0x133bba));
          });
          return _0x133bba;
        });
      function _0x5007f0(_0x3b03b4) {
        return function () {
          return _0x3b03b4;
        };
      }
      var _0x4a1346 = _0x5d1937(),
        _0x22dc07 = _0x5d1937(true);
      function _0x5529b6(_0xef440a) {
        return _0xef440a;
      }
      function _0x472e32(_0x215ab8) {
        return _0x166820("function" == typeof _0x215ab8 ? _0x215ab8 : _0x464d05(_0x215ab8, 1));
      }
      var _0x315c15 = _0x24cab9(function (_0x22ed19, _0x498710) {
          return function (_0x390655) {
            return _0x9ca3e2(_0x390655, _0x22ed19, _0x498710);
          };
        }),
        _0x3c6088 = _0x24cab9(function (_0x293a55, _0x3da643) {
          return function (_0x5b5802) {
            return _0x9ca3e2(_0x293a55, _0x5b5802, _0x3da643);
          };
        });
      function _0x533d16(_0x1dbdeb, _0x500350, _0x53bf3d) {
        var _0x2eb8c0 = _0x33c583(_0x500350),
          _0x3f9c63 = _0x286842(_0x500350, _0x2eb8c0);
        null != _0x53bf3d || _0x95df83(_0x500350) && (_0x3f9c63.length || !_0x2eb8c0.length) || (_0x53bf3d = _0x500350, _0x500350 = _0x1dbdeb, _0x1dbdeb = this, _0x3f9c63 = _0x286842(_0x500350, _0x33c583(_0x500350)));
        var _0x351dfe = !(_0x95df83(_0x53bf3d) && "chain" in _0x53bf3d && !_0x53bf3d.chain),
          _0x155921 = _0x511334(_0x1dbdeb);
        _0x4e0041(_0x3f9c63, function (_0x40e6b6) {
          var _0xd39b2e = _0x500350[_0x40e6b6];
          _0x1dbdeb[_0x40e6b6] = _0xd39b2e;
          _0x155921 && (_0x1dbdeb.prototype[_0x40e6b6] = function () {
            var _0x1fa12a = this.__chain__;
            if (_0x351dfe || _0x1fa12a) {
              var _0x22c567 = _0x1dbdeb(this.__wrapped__);
              (_0x22c567.__actions__ = _0x73a637(this.__actions__)).push({
                func: _0xd39b2e,
                args: arguments,
                thisArg: _0x1dbdeb
              });
              _0x22c567.__chain__ = _0x1fa12a;
              return _0x22c567;
            }
            return _0xd39b2e.apply(_0x1dbdeb, _0x363a38([this.value()], arguments));
          });
        });
        return _0x1dbdeb;
      }
      function _0x4c7a96() {}
      var _0xc49164 = _0x275ded(_0x5b4a4e),
        _0xbb00aa = _0x275ded(_0x155787),
        _0x5dc720 = _0x275ded(_0x1e13f1);
      function _0x544494(_0x20cdae) {
        if (_0x5075cb(_0x20cdae)) return _0x26919b(_0x448eca(_0x20cdae));
        return function (_0x1a859d) {
          return function (_0x496163) {
            return _0x4d632a(_0x496163, _0x1a859d);
          };
        }(_0x20cdae);
      }
      var _0x3348e9 = _0x4b5cb8(),
        _0x17d92f = _0x4b5cb8(true);
      function _0x239a2f() {
        return [];
      }
      function _0x900f9e() {
        return false;
      }
      var _0x380616,
        _0x3be04f = _0x1e1776(function (_0x2e26e3, _0x3b4b9b) {
          return _0x2e26e3 + _0x3b4b9b;
        }, 0),
        _0x2b8051 = _0x4bd8da("ceil"),
        _0x2d5b15 = _0x1e1776(function (_0x4c2634, _0x495908) {
          return _0x4c2634 / _0x495908;
        }, 1),
        _0x5e87cb = _0x4bd8da("floor"),
        _0x49134c = _0x1e1776(function (_0x55c53e, _0x31ac70) {
          return _0x55c53e * _0x31ac70;
        }, 1),
        _0x2aed13 = _0x4bd8da("round"),
        _0x544e17 = _0x1e1776(function (_0x3ffc01, _0x4bf61a) {
          return _0x3ffc01 - _0x4bf61a;
        }, 0);
      _0x4fb193.after = function (_0xf843e, _0xc0af20) {
        if ("function" != typeof _0xc0af20) throw new _0x31211a(_0xe7d2d9);
        _0xf843e = _0x53832b(_0xf843e);
        return function () {
          if (--_0xf843e < 1) return _0xc0af20.apply(this, arguments);
        };
      };
      _0x4fb193.ary = _0x55d014;
      _0x4fb193.assign = _0x3e38fd;
      _0x4fb193.assignIn = _0x5d4a04;
      _0x4fb193.assignInWith = _0x49d437;
      _0x4fb193.assignWith = _0x5bbaaa;
      _0x4fb193.at = _0x58de1c;
      _0x4fb193.before = _0x55b1d2;
      _0x4fb193.bind = _0x18db9a;
      _0x4fb193.bindAll = _0x4cc50b;
      _0x4fb193.bindKey = _0x56a3ab;
      _0x4fb193.castArray = function () {
        if (!arguments.length) return [];
        var _0x1fff68 = arguments[0];
        if (_0x14dbd1(_0x1fff68)) return _0x1fff68;
        return [_0x1fff68];
      };
      _0x4fb193.chain = _0x172e9f;
      _0x4fb193.chunk = function (_0xcc9dec, _0x4167db, _0x39fec7) {
        _0x4167db = (_0x39fec7 ? _0x3a0a4c(_0xcc9dec, _0x4167db, _0x39fec7) : _0x4167db === _0x18a104) ? 1 : _0x42358d(_0x53832b(_0x4167db), 0);
        var _0x4088b5 = null == _0xcc9dec ? 0 : _0xcc9dec.length;
        if (!_0x4088b5 || _0x4167db < 1) return [];
        for (var _0x849e17 = 0, _0x23e313 = 0, _0x2f07a3 = _0x30943d(_0x5904f9(_0x4088b5 / _0x4167db)); _0x849e17 < _0x4088b5;) _0x2f07a3[_0x23e313++] = _0x38834a(_0xcc9dec, _0x849e17, _0x849e17 += _0x4167db);
        return _0x2f07a3;
      };
      _0x4fb193.compact = function (_0x40806f) {
        for (var _0x3b90e7 = -1, _0x73ac17 = null == _0x40806f ? 0 : _0x40806f.length, _0x26d610 = 0, _0x43c094 = []; ++_0x3b90e7 < _0x73ac17;) {
          var _0x34deec = _0x40806f[_0x3b90e7];
          _0x34deec && (_0x43c094[_0x26d610++] = _0x34deec);
        }
        return _0x43c094;
      };
      _0x4fb193.concat = function () {
        var _0x48ba70 = arguments.length;
        if (!_0x48ba70) return [];
        for (var _0x208ceb = _0x30943d(_0x48ba70 - 1), _0x5d83d7 = arguments[0], _0x7d381 = _0x48ba70; _0x7d381--;) _0x208ceb[_0x7d381 - 1] = arguments[_0x7d381];
        return _0x363a38(_0x14dbd1(_0x5d83d7) ? _0x73a637(_0x5d83d7) : [_0x5d83d7], _0x2d66a0(_0x208ceb, 1));
      };
      _0x4fb193.cond = function (_0x39ef3a) {
        var _0x38c6f = null == _0x39ef3a ? 0 : _0x39ef3a.length,
          _0x534462 = _0x2e11c8();
        _0x39ef3a = _0x38c6f ? _0x5b4a4e(_0x39ef3a, function (_0x48d809) {
          if ("function" != typeof _0x48d809[1]) throw new _0x31211a(_0xe7d2d9);
          return [_0x534462(_0x48d809[0]), _0x48d809[1]];
        }) : [];
        return _0x24cab9(function (_0x5c7179) {
          for (var _0x4396c0 = -1; ++_0x4396c0 < _0x38c6f;) {
            var _0x1f838c = _0x39ef3a[_0x4396c0];
            if (_0x408cf2(_0x1f838c[0], this, _0x5c7179)) return _0x408cf2(_0x1f838c[1], this, _0x5c7179);
          }
        });
      };
      _0x4fb193.conforms = function (_0x4b4727) {
        return function (_0x2fb40f) {
          var _0x93a118 = _0x33c583(_0x2fb40f);
          return function (_0x5617a5) {
            return _0x43f8ab(_0x5617a5, _0x2fb40f, _0x93a118);
          };
        }(_0x464d05(_0x4b4727, 1));
      };
      _0x4fb193.constant = _0x5007f0;
      _0x4fb193.countBy = _0x128e19;
      _0x4fb193.create = function (_0x6a6b5e, _0x27eef0) {
        var _0x216034 = _0x41abc3(_0x6a6b5e);
        if (null == _0x27eef0) return _0x216034;
        return _0x524437(_0x216034, _0x27eef0);
      };
      _0x4fb193.curry = function _0x3ad44b(_0x988d07, _0x184d90, _0x424e01) {
        var _0x22e696 = _0x2997b4(_0x988d07, 8, _0x18a104, _0x18a104, _0x18a104, _0x18a104, _0x18a104, _0x184d90 = _0x424e01 ? _0x18a104 : _0x184d90);
        _0x22e696.placeholder = _0x3ad44b.placeholder;
        return _0x22e696;
      };
      _0x4fb193.curryRight = function _0x325199(_0xa2fec1, _0x4e5af6, _0x237f83) {
        var _0x56a90b = _0x2997b4(_0xa2fec1, _0x5e9d40, _0x18a104, _0x18a104, _0x18a104, _0x18a104, _0x18a104, _0x4e5af6 = _0x237f83 ? _0x18a104 : _0x4e5af6);
        _0x56a90b.placeholder = _0x325199.placeholder;
        return _0x56a90b;
      };
      _0x4fb193.debounce = _0x90467d;
      _0x4fb193.defaults = _0x49df56;
      _0x4fb193.defaultsDeep = _0x21f111;
      _0x4fb193.defer = _0x212468;
      _0x4fb193.delay = _0x64b86c;
      _0x4fb193.difference = _0xc67ad5;
      _0x4fb193.differenceBy = _0x310c5e;
      _0x4fb193.differenceWith = _0x493a33;
      _0x4fb193.drop = function (_0x323857, _0x5b4fdc, _0x232dd2) {
        var _0x43596e = null == _0x323857 ? 0 : _0x323857.length;
        if (_0x43596e) return _0x38834a(_0x323857, (_0x5b4fdc = _0x232dd2 || _0x5b4fdc === _0x18a104 ? 1 : _0x53832b(_0x5b4fdc)) < 0 ? 0 : _0x5b4fdc, _0x43596e);
        return [];
      };
      _0x4fb193.dropRight = function (_0x128837, _0x162822, _0x34e12f) {
        var _0x2481dd = null == _0x128837 ? 0 : _0x128837.length;
        if (_0x2481dd) return _0x38834a(_0x128837, 0, (_0x162822 = _0x2481dd - (_0x162822 = _0x34e12f || _0x162822 === _0x18a104 ? 1 : _0x53832b(_0x162822))) < 0 ? 0 : _0x162822);
        return [];
      };
      _0x4fb193.dropRightWhile = function (_0x2b13b4, _0x40c0dc) {
        if (_0x2b13b4 && _0x2b13b4.length) return _0x3799ec(_0x2b13b4, _0x2e11c8(_0x40c0dc, 3), true, true);
        return [];
      };
      _0x4fb193.dropWhile = function (_0x2b0a27, _0x5a6a0a) {
        if (_0x2b0a27 && _0x2b0a27.length) return _0x3799ec(_0x2b0a27, _0x2e11c8(_0x5a6a0a, 3), true);
        return [];
      };
      _0x4fb193.fill = function (_0x3737f5, _0x317c41, _0x28f84d, _0x413ed3) {
        var _0x530d38 = null == _0x3737f5 ? 0 : _0x3737f5.length;
        if (_0x530d38) {
          _0x28f84d && "number" != typeof _0x28f84d && _0x3a0a4c(_0x3737f5, _0x317c41, _0x28f84d) && (_0x28f84d = 0, _0x413ed3 = _0x530d38);
          return function (_0x521f12, _0x11e0ab, _0x2d4db8, _0xa9b8d1) {
            var _0x2c8d84 = _0x521f12.length;
            (_0x2d4db8 = _0x53832b(_0x2d4db8)) < 0 && (_0x2d4db8 = -_0x2d4db8 > _0x2c8d84 ? 0 : _0x2c8d84 + _0x2d4db8);
            (_0xa9b8d1 = _0xa9b8d1 === _0x18a104 || _0xa9b8d1 > _0x2c8d84 ? _0x2c8d84 : _0x53832b(_0xa9b8d1)) < 0 && (_0xa9b8d1 += _0x2c8d84);
            for (_0xa9b8d1 = _0x2d4db8 > _0xa9b8d1 ? 0 : _0x25e4e4(_0xa9b8d1); _0x2d4db8 < _0xa9b8d1;) _0x521f12[_0x2d4db8++] = _0x11e0ab;
            return _0x521f12;
          }(_0x3737f5, _0x317c41, _0x28f84d, _0x413ed3);
        }
        return [];
      };
      _0x4fb193.filter = function (_0x4137d1, _0x426ec1) {
        return (_0x14dbd1(_0x4137d1) ? _0x200b15 : _0xeb6ae8)(_0x4137d1, _0x2e11c8(_0x426ec1, 3));
      };
      _0x4fb193.flatMap = function (_0x38e9e6, _0x5f0b26) {
        return _0x2d66a0(_0x473905(_0x38e9e6, _0x5f0b26), 1);
      };
      _0x4fb193.flatMapDeep = function (_0x227952, _0x29fc1f) {
        return _0x2d66a0(_0x473905(_0x227952, _0x29fc1f), _0x286c23);
      };
      _0x4fb193.flatMapDepth = function (_0x62aeca, _0x423eae, _0x58f2b2) {
        _0x58f2b2 = _0x58f2b2 === _0x18a104 ? 1 : _0x53832b(_0x58f2b2);
        return _0x2d66a0(_0x473905(_0x62aeca, _0x423eae), _0x58f2b2);
      };
      _0x4fb193.flatten = _0x235524;
      _0x4fb193.flattenDeep = function (_0x33888a) {
        if (null != _0x33888a && _0x33888a.length) return _0x2d66a0(_0x33888a, _0x286c23);
        return [];
      };
      _0x4fb193.flattenDepth = function (_0x3fa5a5, _0x415bf0) {
        if (null != _0x3fa5a5 && _0x3fa5a5.length) return _0x2d66a0(_0x3fa5a5, _0x415bf0 = _0x415bf0 === _0x18a104 ? 1 : _0x53832b(_0x415bf0));
        return [];
      };
      _0x4fb193.flip = function (_0x2e13a0) {
        return _0x2997b4(_0x2e13a0, 512);
      };
      _0x4fb193.flow = _0x4a1346;
      _0x4fb193.flowRight = _0x22dc07;
      _0x4fb193.fromPairs = function (_0x1a6088) {
        for (var _0x1778f7 = -1, _0x5e6ee1 = null == _0x1a6088 ? 0 : _0x1a6088.length, _0x284036 = {}; ++_0x1778f7 < _0x5e6ee1;) {
          var _0x476d90 = _0x1a6088[_0x1778f7];
          _0x284036[_0x476d90[0]] = _0x476d90[1];
        }
        return _0x284036;
      };
      _0x4fb193.functions = function (_0x48010a) {
        if (null == _0x48010a) return [];
        return _0x286842(_0x48010a, _0x33c583(_0x48010a));
      };
      _0x4fb193.functionsIn = function (_0x182abe) {
        if (null == _0x182abe) return [];
        return _0x286842(_0x182abe, _0x2247a8(_0x182abe));
      };
      _0x4fb193.groupBy = _0x39794e;
      _0x4fb193.initial = function (_0x1b0d1b) {
        if (null != _0x1b0d1b && _0x1b0d1b.length) return _0x38834a(_0x1b0d1b, 0, -1);
        return [];
      };
      _0x4fb193.intersection = _0x13e1d0;
      _0x4fb193.intersectionBy = _0x478dcd;
      _0x4fb193.intersectionWith = _0xf26861;
      _0x4fb193.invert = _0x1ea6ca;
      _0x4fb193.invertBy = _0x5d5b4a;
      _0x4fb193.invokeMap = _0x5ec071;
      _0x4fb193.iteratee = _0x472e32;
      _0x4fb193.keyBy = _0x28c81b;
      _0x4fb193.keys = _0x33c583;
      _0x4fb193.keysIn = _0x2247a8;
      _0x4fb193.map = _0x473905;
      _0x4fb193.mapKeys = function (_0x364e39, _0x55092c) {
        var _0x536f49 = {};
        _0x55092c = _0x2e11c8(_0x55092c, 3);
        _0x253c4e(_0x364e39, function (_0x105b04, _0x1c5c76, _0x11933f) {
          _0x3cac09(_0x536f49, _0x55092c(_0x105b04, _0x1c5c76, _0x11933f), _0x105b04);
        });
        return _0x536f49;
      };
      _0x4fb193.mapValues = function (_0x46a803, _0x92090d) {
        var _0x4af41b = {};
        _0x92090d = _0x2e11c8(_0x92090d, 3);
        _0x253c4e(_0x46a803, function (_0xed27e8, _0x10eda5, _0x4f626c) {
          _0x3cac09(_0x4af41b, _0x10eda5, _0x92090d(_0xed27e8, _0x10eda5, _0x4f626c));
        });
        return _0x4af41b;
      };
      _0x4fb193.matches = function (_0x377516) {
        return _0xcec1b1(_0x464d05(_0x377516, 1));
      };
      _0x4fb193.matchesProperty = function (_0x3c1260, _0x2ab31c) {
        return _0x133d57(_0x3c1260, _0x464d05(_0x2ab31c, 1));
      };
      _0x4fb193.memoize = _0x1e280d;
      _0x4fb193.merge = _0x20c5ff;
      _0x4fb193.mergeWith = _0x2a109f;
      _0x4fb193.method = _0x315c15;
      _0x4fb193.methodOf = _0x3c6088;
      _0x4fb193.mixin = _0x533d16;
      _0x4fb193.negate = _0x196a07;
      _0x4fb193.nthArg = function (_0x4669c0) {
        _0x4669c0 = _0x53832b(_0x4669c0);
        return _0x24cab9(function (_0x2a324d) {
          return _0x29e053(_0x2a324d, _0x4669c0);
        });
      };
      _0x4fb193.omit = _0x3ab045;
      _0x4fb193.omitBy = function (_0x2f8ad5, _0x11816c) {
        return _0x2c175e(_0x2f8ad5, _0x196a07(_0x2e11c8(_0x11816c)));
      };
      _0x4fb193.once = function (_0x40afe1) {
        return _0x55b1d2(2, _0x40afe1);
      };
      _0x4fb193.orderBy = function (_0x4e9eab, _0x470a71, _0x83f8a9, _0x4601b1) {
        if (null == _0x4e9eab) return [];
        _0x14dbd1(_0x470a71) || (_0x470a71 = null == _0x470a71 ? [] : [_0x470a71]);
        _0x14dbd1(_0x83f8a9 = _0x4601b1 ? _0x18a104 : _0x83f8a9) || (_0x83f8a9 = null == _0x83f8a9 ? [] : [_0x83f8a9]);
        return _0x1edb82(_0x4e9eab, _0x470a71, _0x83f8a9);
      };
      _0x4fb193.over = _0xc49164;
      _0x4fb193.overArgs = _0x287bef;
      _0x4fb193.overEvery = _0xbb00aa;
      _0x4fb193.overSome = _0x5dc720;
      _0x4fb193.partial = _0x37fcd7;
      _0x4fb193.partialRight = _0x2c86dd;
      _0x4fb193.partition = _0x270e92;
      _0x4fb193.pick = _0x4233db;
      _0x4fb193.pickBy = _0x2c175e;
      _0x4fb193.property = _0x544494;
      _0x4fb193.propertyOf = function (_0x4593f6) {
        return function (_0x5d2879) {
          if (null == _0x4593f6) return _0x18a104;
          return _0x4d632a(_0x4593f6, _0x5d2879);
        };
      };
      _0x4fb193.pull = _0x4caaff;
      _0x4fb193.pullAll = _0x13ef18;
      _0x4fb193.pullAllBy = function (_0x37b046, _0x2a8750, _0x361d64) {
        if (_0x37b046 && _0x37b046.length && _0x2a8750 && _0x2a8750.length) return _0x2e1fc6(_0x37b046, _0x2a8750, _0x2e11c8(_0x361d64, 2));
        return _0x37b046;
      };
      _0x4fb193.pullAllWith = function (_0x239625, _0x20458f, _0x174f76) {
        if (_0x239625 && _0x239625.length && _0x20458f && _0x20458f.length) return _0x2e1fc6(_0x239625, _0x20458f, _0x18a104, _0x174f76);
        return _0x239625;
      };
      _0x4fb193.pullAt = _0x1b28dc;
      _0x4fb193.range = _0x3348e9;
      _0x4fb193.rangeRight = _0x17d92f;
      _0x4fb193.rearg = _0x29853f;
      _0x4fb193.reject = function (_0x41f479, _0x576f91) {
        return (_0x14dbd1(_0x41f479) ? _0x200b15 : _0xeb6ae8)(_0x41f479, _0x196a07(_0x2e11c8(_0x576f91, 3)));
      };
      _0x4fb193.remove = function (_0x34492d, _0x189f10) {
        var _0x34e9f5 = [];
        if (!_0x34492d || !_0x34492d.length) return _0x34e9f5;
        var _0x1705dc = -1,
          _0x2ade83 = [],
          _0x34f718 = _0x34492d.length;
        for (_0x189f10 = _0x2e11c8(_0x189f10, 3); ++_0x1705dc < _0x34f718;) {
          var _0x3e5852 = _0x34492d[_0x1705dc];
          _0x189f10(_0x3e5852, _0x1705dc, _0x34492d) && (_0x34e9f5.push(_0x3e5852), _0x2ade83.push(_0x1705dc));
        }
        _0x2ebae1(_0x34492d, _0x2ade83);
        return _0x34e9f5;
      };
      _0x4fb193.rest = function (_0x457f33, _0x419836) {
        if ('function' != typeof _0x457f33) throw new _0x31211a(_0xe7d2d9);
        return _0x24cab9(_0x457f33, _0x419836 = _0x419836 === _0x18a104 ? _0x419836 : _0x53832b(_0x419836));
      };
      _0x4fb193.reverse = _0x3d3ca1;
      _0x4fb193.sampleSize = function (_0xb9670a, _0x82a679, _0x291e52) {
        _0x82a679 = (_0x291e52 ? _0x3a0a4c(_0xb9670a, _0x82a679, _0x291e52) : _0x82a679 === _0x18a104) ? 1 : _0x53832b(_0x82a679);
        return (_0x14dbd1(_0xb9670a) ? _0x2ac6ec : _0x945e8a)(_0xb9670a, _0x82a679);
      };
      _0x4fb193.set = function (_0x99cbf6, _0x1296ba, _0x469c9b) {
        if (null == _0x99cbf6) return _0x99cbf6;
        return _0x37cbe5(_0x99cbf6, _0x1296ba, _0x469c9b);
      };
      _0x4fb193.setWith = function (_0x22eab2, _0x280036, _0x5ba2a3, _0x56d84d) {
        _0x56d84d = "function" == typeof _0x56d84d ? _0x56d84d : _0x18a104;
        if (null == _0x22eab2) return _0x22eab2;
        return _0x37cbe5(_0x22eab2, _0x280036, _0x5ba2a3, _0x56d84d);
      };
      _0x4fb193.shuffle = function (_0xc7a09d) {
        return (_0x14dbd1(_0xc7a09d) ? _0x2cf08a : _0x3ac6f9)(_0xc7a09d);
      };
      _0x4fb193.slice = function (_0x4d188d, _0x4c54ff, _0x2df26b) {
        var _0x12d3ce = null == _0x4d188d ? 0 : _0x4d188d.length;
        if (_0x12d3ce) {
          if (_0x2df26b && 'number' != typeof _0x2df26b && _0x3a0a4c(_0x4d188d, _0x4c54ff, _0x2df26b)) {
            _0x4c54ff = 0;
            _0x2df26b = _0x12d3ce;
          } else {
            _0x4c54ff = null == _0x4c54ff ? 0 : _0x53832b(_0x4c54ff);
            _0x2df26b = _0x2df26b === _0x18a104 ? _0x12d3ce : _0x53832b(_0x2df26b);
          }
          return _0x38834a(_0x4d188d, _0x4c54ff, _0x2df26b);
        }
        return [];
      };
      _0x4fb193.sortBy = _0x51dc25;
      _0x4fb193.sortedUniq = function (_0x32bb0c) {
        if (_0x32bb0c && _0x32bb0c.length) return _0x3a4ca8(_0x32bb0c);
        return [];
      };
      _0x4fb193.sortedUniqBy = function (_0x2ee169, _0x4dbf3a) {
        if (_0x2ee169 && _0x2ee169.length) return _0x3a4ca8(_0x2ee169, _0x2e11c8(_0x4dbf3a, 2));
        return [];
      };
      _0x4fb193.split = function (_0x501a4c, _0x44e338, _0x102aa5) {
        _0x102aa5 && "number" != typeof _0x102aa5 && _0x3a0a4c(_0x501a4c, _0x44e338, _0x102aa5) && (_0x44e338 = _0x102aa5 = _0x18a104);
        if (_0x102aa5 = _0x102aa5 === _0x18a104 ? _0x4f310a : _0x102aa5 >>> 0) return (_0x501a4c = _0x5812e2(_0x501a4c)) && ("string" == typeof _0x44e338 || null != _0x44e338 && !_0x2a6ba7(_0x44e338)) && !(_0x44e338 = _0x156ed6(_0x44e338)) && _0x232bc1(_0x501a4c) ? _0x354ad9(_0x27f9f1(_0x501a4c), 0, _0x102aa5) : _0x501a4c.split(_0x44e338, _0x102aa5);
        return [];
      };
      _0x4fb193.spread = function (_0x5698ad, _0x6fd0d) {
        if ("function" != typeof _0x5698ad) throw new _0x31211a(_0xe7d2d9);
        _0x6fd0d = null == _0x6fd0d ? 0 : _0x42358d(_0x53832b(_0x6fd0d), 0);
        return _0x24cab9(function (_0x3dad9a) {
          var _0x1e5ef7 = _0x3dad9a[_0x6fd0d],
            _0x1449c6 = _0x354ad9(_0x3dad9a, 0, _0x6fd0d);
          _0x1e5ef7 && _0x363a38(_0x1449c6, _0x1e5ef7);
          return _0x408cf2(_0x5698ad, this, _0x1449c6);
        });
      };
      _0x4fb193.tail = function (_0x5a4348) {
        var _0x3ec056 = null == _0x5a4348 ? 0 : _0x5a4348.length;
        if (_0x3ec056) return _0x38834a(_0x5a4348, 1, _0x3ec056);
        return [];
      };
      _0x4fb193.take = function (_0x4fa09c, _0x1f0abd, _0xe5bbea) {
        if (_0x4fa09c && _0x4fa09c.length) return _0x38834a(_0x4fa09c, 0, (_0x1f0abd = _0xe5bbea || _0x1f0abd === _0x18a104 ? 1 : _0x53832b(_0x1f0abd)) < 0 ? 0 : _0x1f0abd);
        return [];
      };
      _0x4fb193.takeRight = function (_0x33e25f, _0x46b489, _0x136f87) {
        var _0x54d064 = null == _0x33e25f ? 0 : _0x33e25f.length;
        if (_0x54d064) return _0x38834a(_0x33e25f, (_0x46b489 = _0x54d064 - (_0x46b489 = _0x136f87 || _0x46b489 === _0x18a104 ? 1 : _0x53832b(_0x46b489))) < 0 ? 0 : _0x46b489, _0x54d064);
        return [];
      };
      _0x4fb193.takeRightWhile = function (_0x81a0a7, _0x38ee7a) {
        if (_0x81a0a7 && _0x81a0a7.length) return _0x3799ec(_0x81a0a7, _0x2e11c8(_0x38ee7a, 3), false, true);
        return [];
      };
      _0x4fb193.takeWhile = function (_0x1dfe0b, _0x5ea629) {
        if (_0x1dfe0b && _0x1dfe0b.length) return _0x3799ec(_0x1dfe0b, _0x2e11c8(_0x5ea629, 3));
        return [];
      };
      _0x4fb193.tap = function (_0x5a4c74, _0x264eaf) {
        _0x264eaf(_0x5a4c74);
        return _0x5a4c74;
      };
      _0x4fb193.throttle = function (_0x335215, _0x43dd1f, _0x42bb5d) {
        var _0x29f293 = true,
          _0x5c9685 = true;
        if ('function' != typeof _0x335215) throw new _0x31211a(_0xe7d2d9);
        _0x95df83(_0x42bb5d) && (_0x29f293 = "leading" in _0x42bb5d ? !!_0x42bb5d.leading : _0x29f293, _0x5c9685 = 'trailing' in _0x42bb5d ? !!_0x42bb5d.trailing : _0x5c9685);
        return _0x90467d(_0x335215, _0x43dd1f, {
          leading: _0x29f293,
          maxWait: _0x43dd1f,
          trailing: _0x5c9685
        });
      };
      _0x4fb193.thru = _0x3b2d4d;
      _0x4fb193.toArray = _0x7ad040;
      _0x4fb193.toPairs = _0x243ea9;
      _0x4fb193.toPairsIn = _0x44a367;
      _0x4fb193.toPath = function (_0xdf3551) {
        if (_0x14dbd1(_0xdf3551)) return _0x5b4a4e(_0xdf3551, _0x448eca);
        if (_0x12638b(_0xdf3551)) return [_0xdf3551];
        return _0x73a637(_0x12abd5(_0x5812e2(_0xdf3551)));
      };
      _0x4fb193.toPlainObject = _0x716ec4;
      _0x4fb193.transform = function (_0x2a5c3a, _0x2d148c, _0x454ef1) {
        var _0x55d4a4 = _0x14dbd1(_0x2a5c3a),
          _0x127745 = _0x55d4a4 || _0x41f27f(_0x2a5c3a) || _0x3ed7c9(_0x2a5c3a);
        _0x2d148c = _0x2e11c8(_0x2d148c, 4);
        if (null == _0x454ef1) {
          var _0xe9344d = _0x2a5c3a && _0x2a5c3a.constructor;
          _0x454ef1 = _0x127745 ? _0x55d4a4 ? new _0xe9344d() : [] : _0x95df83(_0x2a5c3a) && _0x511334(_0xe9344d) ? _0x41abc3(_0x3d2c1a(_0x2a5c3a)) : {};
        }
        (_0x127745 ? _0x4e0041 : _0x253c4e)(_0x2a5c3a, function (_0x36b472, _0x3506b8, _0x2c9029) {
          return _0x2d148c(_0x454ef1, _0x36b472, _0x3506b8, _0x2c9029);
        });
        return _0x454ef1;
      };
      _0x4fb193.unary = function (_0x7746ae) {
        return _0x55d014(_0x7746ae, 1);
      };
      _0x4fb193.union = _0x239223;
      _0x4fb193.unionBy = _0x5b8b89;
      _0x4fb193.unionWith = _0x48f0f6;
      _0x4fb193.uniq = function (_0x207f6d) {
        if (_0x207f6d && _0x207f6d.length) return _0x89549d(_0x207f6d);
        return [];
      };
      _0x4fb193.uniqBy = function (_0x19b7e0, _0x4fa03e) {
        if (_0x19b7e0 && _0x19b7e0.length) return _0x89549d(_0x19b7e0, _0x2e11c8(_0x4fa03e, 2));
        return [];
      };
      _0x4fb193.uniqWith = function (_0xf7eeb7, _0x2542f4) {
        _0x2542f4 = "function" == typeof _0x2542f4 ? _0x2542f4 : _0x18a104;
        if (_0xf7eeb7 && _0xf7eeb7.length) return _0x89549d(_0xf7eeb7, _0x18a104, _0x2542f4);
        return [];
      };
      _0x4fb193.unset = function (_0x40d6f3, _0x178e6b) {
        return null == _0x40d6f3 || _0x4e07fa(_0x40d6f3, _0x178e6b);
      };
      _0x4fb193.unzip = _0xce11f6;
      _0x4fb193.unzipWith = _0x1f3bc9;
      _0x4fb193.update = function (_0x58abc3, _0x565a19, _0x2972e5) {
        if (null == _0x58abc3) return _0x58abc3;
        return _0x111a33(_0x58abc3, _0x565a19, _0x5d4d53(_0x2972e5));
      };
      _0x4fb193.updateWith = function (_0x307f1e, _0x3de19f, _0xd05dd8, _0x7e636e) {
        _0x7e636e = "function" == typeof _0x7e636e ? _0x7e636e : _0x18a104;
        if (null == _0x307f1e) return _0x307f1e;
        return _0x111a33(_0x307f1e, _0x3de19f, _0x5d4d53(_0xd05dd8), _0x7e636e);
      };
      _0x4fb193.values = _0x4fa8ff;
      _0x4fb193.valuesIn = function (_0x1e5f4d) {
        if (null == _0x1e5f4d) return [];
        return _0x1a53cb(_0x1e5f4d, _0x2247a8(_0x1e5f4d));
      };
      _0x4fb193.without = _0x3bf87d;
      _0x4fb193.words = _0x1e1e5d;
      _0x4fb193.wrap = function (_0x3a4edf, _0x330a1d) {
        return _0x37fcd7(_0x5d4d53(_0x330a1d), _0x3a4edf);
      };
      _0x4fb193.xor = _0x9e058f;
      _0x4fb193.xorBy = _0x1224af;
      _0x4fb193.xorWith = _0x196dbf;
      _0x4fb193.zip = _0x43aebe;
      _0x4fb193.zipObject = function (_0x464cc0, _0xacadcb) {
        return _0x12434f(_0x464cc0 || [], _0xacadcb || [], _0x28d3c2);
      };
      _0x4fb193.zipObjectDeep = function (_0x76c62b, _0x1c60f2) {
        return _0x12434f(_0x76c62b || [], _0x1c60f2 || [], _0x37cbe5);
      };
      _0x4fb193.zipWith = _0x45b80f;
      _0x4fb193.entries = _0x243ea9;
      _0x4fb193.entriesIn = _0x44a367;
      _0x4fb193.extend = _0x5d4a04;
      _0x4fb193.extendWith = _0x49d437;
      _0x533d16(_0x4fb193, _0x4fb193);
      _0x4fb193.add = _0x3be04f;
      _0x4fb193.attempt = _0x59b0b0;
      _0x4fb193.camelCase = _0x3612f0;
      _0x4fb193.capitalize = _0x243a98;
      _0x4fb193.ceil = _0x2b8051;
      _0x4fb193.clamp = function (_0xcd2a60, _0x24438e, _0x46010c) {
        _0x46010c === _0x18a104 && (_0x46010c = _0x24438e, _0x24438e = _0x18a104);
        _0x46010c !== _0x18a104 && (_0x46010c = (_0x46010c = _0x1b8c8f(_0x46010c)) == _0x46010c ? _0x46010c : 0);
        _0x24438e !== _0x18a104 && (_0x24438e = (_0x24438e = _0x1b8c8f(_0x24438e)) == _0x24438e ? _0x24438e : 0);
        return _0x5d0eea(_0x1b8c8f(_0xcd2a60), _0x24438e, _0x46010c);
      };
      _0x4fb193.clone = function (_0x18a6de) {
        return _0x464d05(_0x18a6de, 4);
      };
      _0x4fb193.cloneDeep = function (_0x4be5cf) {
        return _0x464d05(_0x4be5cf, 5);
      };
      _0x4fb193.cloneDeepWith = function (_0x1b9d78, _0x192711) {
        return _0x464d05(_0x1b9d78, 5, _0x192711 = 'function' == typeof _0x192711 ? _0x192711 : _0x18a104);
      };
      _0x4fb193.cloneWith = function (_0x384a6a, _0x246c14) {
        return _0x464d05(_0x384a6a, 4, _0x246c14 = "function" == typeof _0x246c14 ? _0x246c14 : _0x18a104);
      };
      _0x4fb193.conformsTo = function (_0x206dac, _0x4137a4) {
        return null == _0x4137a4 || _0x43f8ab(_0x206dac, _0x4137a4, _0x33c583(_0x4137a4));
      };
      _0x4fb193.deburr = _0x1809cd;
      _0x4fb193.defaultTo = function (_0x76f612, _0x4963d7) {
        return null == _0x76f612 || _0x76f612 != _0x76f612 ? _0x4963d7 : _0x76f612;
      };
      _0x4fb193.divide = _0x2d5b15;
      _0x4fb193.endsWith = function (_0x54c81c, _0x8a3d6, _0x448144) {
        _0x54c81c = _0x5812e2(_0x54c81c);
        _0x8a3d6 = _0x156ed6(_0x8a3d6);
        var _0xe7491 = _0x54c81c.length,
          _0xbc3c57 = _0x448144 = _0x448144 === _0x18a104 ? _0xe7491 : _0x5d0eea(_0x53832b(_0x448144), 0, _0xe7491);
        return (_0x448144 -= _0x8a3d6.length) >= 0 && _0x54c81c.slice(_0x448144, _0xbc3c57) == _0x8a3d6;
      };
      _0x4fb193.eq = _0x1eed1e;
      _0x4fb193.escape = function (_0x190d1b) {
        if ((_0x190d1b = _0x5812e2(_0x190d1b)) && _0x3571b6.test(_0x190d1b)) return _0x190d1b.replace(_0x3509e3, _0x5f39a5);
        return _0x190d1b;
      };
      _0x4fb193.escapeRegExp = function (_0x1eb25d) {
        if ((_0x1eb25d = _0x5812e2(_0x1eb25d)) && _0x258630.test(_0x1eb25d)) return _0x1eb25d.replace(_0x1faf09, "\\$&");
        return _0x1eb25d;
      };
      _0x4fb193.every = function (_0x3ddb04, _0x203f50, _0x35d5ee) {
        var _0x29edb4 = _0x14dbd1(_0x3ddb04) ? _0x155787 : _0xf996a;
        _0x35d5ee && _0x3a0a4c(_0x3ddb04, _0x203f50, _0x35d5ee) && (_0x203f50 = _0x18a104);
        return _0x29edb4(_0x3ddb04, _0x2e11c8(_0x203f50, 3));
      };
      _0x4fb193.find = _0x1e66ba;
      _0x4fb193.findIndex = _0x28e152;
      _0x4fb193.findKey = function (_0x245c77, _0x3c9faa) {
        return _0x4bc7ac(_0x245c77, _0x2e11c8(_0x3c9faa, 3), _0x253c4e);
      };
      _0x4fb193.findLast = _0x3cd451;
      _0x4fb193.findLastIndex = _0x33541c;
      _0x4fb193.findLastKey = function (_0xe93e2c, _0xe27ad8) {
        return _0x4bc7ac(_0xe93e2c, _0x2e11c8(_0xe27ad8, 3), _0x15e238);
      };
      _0x4fb193.floor = _0x5e87cb;
      _0x4fb193.forEach = _0x1d2980;
      _0x4fb193.forEachRight = _0x34d309;
      _0x4fb193.forIn = function (_0x12fbc9, _0x2858f5) {
        if (null == _0x12fbc9) return _0x12fbc9;
        return _0x2d2c26(_0x12fbc9, _0x2e11c8(_0x2858f5, 3), _0x2247a8);
      };
      _0x4fb193.forInRight = function (_0x1689d6, _0x17bd13) {
        if (null == _0x1689d6) return _0x1689d6;
        return _0x26133f(_0x1689d6, _0x2e11c8(_0x17bd13, 3), _0x2247a8);
      };
      _0x4fb193.forOwn = function (_0x1c24ef, _0x71acff) {
        return _0x1c24ef && _0x253c4e(_0x1c24ef, _0x2e11c8(_0x71acff, 3));
      };
      _0x4fb193.forOwnRight = function (_0x48b608, _0x267d2a) {
        return _0x48b608 && _0x15e238(_0x48b608, _0x2e11c8(_0x267d2a, 3));
      };
      _0x4fb193.get = _0x3b1dd3;
      _0x4fb193.gt = _0x2986ca;
      _0x4fb193.gte = _0x4bb57e;
      _0x4fb193.has = function (_0x1660df, _0x2579bf) {
        return null != _0x1660df && _0x490828(_0x1660df, _0x2579bf, _0x323190);
      };
      _0x4fb193.hasIn = _0x36e820;
      _0x4fb193.head = _0x2ba92a;
      _0x4fb193.identity = _0x5529b6;
      _0x4fb193.includes = function (_0x583f7e, _0x1c8439, _0x18071c, _0x29402c) {
        _0x583f7e = _0x58ad0d(_0x583f7e) ? _0x583f7e : _0x4fa8ff(_0x583f7e);
        _0x18071c = _0x18071c && !_0x29402c ? _0x53832b(_0x18071c) : 0;
        var _0x220232 = _0x583f7e.length;
        _0x18071c < 0 && (_0x18071c = _0x42358d(_0x220232 + _0x18071c, 0));
        if (_0x531ad1(_0x583f7e)) return _0x18071c <= _0x220232 && _0x583f7e.indexOf(_0x1c8439, _0x18071c) > -1;
        return !!_0x220232 && _0x1da7c9(_0x583f7e, _0x1c8439, _0x18071c) > -1;
      };
      _0x4fb193.indexOf = function (_0x44a96d, _0x2a00a2, _0x483c6c) {
        var _0x57b98c = null == _0x44a96d ? 0 : _0x44a96d.length;
        if (!_0x57b98c) return -1;
        var _0x3ab1e5 = null == _0x483c6c ? 0 : _0x53832b(_0x483c6c);
        _0x3ab1e5 < 0 && (_0x3ab1e5 = _0x42358d(_0x57b98c + _0x3ab1e5, 0));
        return _0x1da7c9(_0x44a96d, _0x2a00a2, _0x3ab1e5);
      };
      _0x4fb193.inRange = function (_0x51fc2c, _0xca8019, _0x1ab8c5) {
        _0xca8019 = _0x1c17cf(_0xca8019);
        if (_0x1ab8c5 === _0x18a104) {
          _0x1ab8c5 = _0xca8019;
          _0xca8019 = 0;
        } else _0x1ab8c5 = _0x1c17cf(_0x1ab8c5);
        return function (_0x39b391, _0x4ef8e9, _0x5a85e0) {
          return _0x39b391 >= _0x5b234e(_0x4ef8e9, _0x5a85e0) && _0x39b391 < _0x42358d(_0x4ef8e9, _0x5a85e0);
        }(_0x51fc2c = _0x1b8c8f(_0x51fc2c), _0xca8019, _0x1ab8c5);
      };
      _0x4fb193.invoke = _0xcf4d1b;
      _0x4fb193.isArguments = _0xb4fb1b;
      _0x4fb193.isArray = _0x14dbd1;
      _0x4fb193.isArrayBuffer = _0x393977;
      _0x4fb193.isArrayLike = _0x58ad0d;
      _0x4fb193.isArrayLikeObject = _0x31f2f7;
      _0x4fb193.isBoolean = function (_0x4edd23) {
        return true === _0x4edd23 || false === _0x4edd23 || _0x12dbae(_0x4edd23) && _0x22eff8(_0x4edd23) == _0xf2bfb8;
      };
      _0x4fb193.isBuffer = _0x41f27f;
      _0x4fb193.isDate = _0x4626d1;
      _0x4fb193.isElement = function (_0x24dacc) {
        return _0x12dbae(_0x24dacc) && 1 === _0x24dacc.nodeType && !_0x30a8e6(_0x24dacc);
      };
      _0x4fb193.isEmpty = function (_0x24fa17) {
        if (null == _0x24fa17) return true;
        if (_0x58ad0d(_0x24fa17) && (_0x14dbd1(_0x24fa17) || "string" == typeof _0x24fa17 || "function" == typeof _0x24fa17.splice || _0x41f27f(_0x24fa17) || _0x3ed7c9(_0x24fa17) || _0xb4fb1b(_0x24fa17))) return !_0x24fa17.length;
        var _0x1eb202 = _0x444f77(_0x24fa17);
        if (_0x1eb202 == _0x4c0bc9 || _0x1eb202 == _0x2443d3) return !_0x24fa17.size;
        if (_0x2946c0(_0x24fa17)) return !_0x10cfab(_0x24fa17).length;
        for (var _0xff1a0f in _0x24fa17) if (_0x5a55dd.call(_0x24fa17, _0xff1a0f)) return false;
        return true;
      };
      _0x4fb193.isEqual = function (_0x4a26f7, _0x4cb68c) {
        return _0x26e50d(_0x4a26f7, _0x4cb68c);
      };
      _0x4fb193.isEqualWith = function (_0x4e1635, _0x57b89e, _0x3da4a4) {
        var _0x2ef006 = (_0x3da4a4 = "function" == typeof _0x3da4a4 ? _0x3da4a4 : _0x18a104) ? _0x3da4a4(_0x4e1635, _0x57b89e) : _0x18a104;
        if (_0x2ef006 === _0x18a104) return _0x26e50d(_0x4e1635, _0x57b89e, _0x18a104, _0x3da4a4);
        return !!_0x2ef006;
      };
      _0x4fb193.isError = _0x20226e;
      _0x4fb193.isFinite = function (_0x1b921c) {
        return "number" == typeof _0x1b921c && _0x5e0be3(_0x1b921c);
      };
      _0x4fb193.isFunction = _0x511334;
      _0x4fb193.isInteger = _0x1e7f71;
      _0x4fb193.isLength = _0x20aa0f;
      _0x4fb193.isMap = _0x138140;
      _0x4fb193.isMatch = function (_0x279efc, _0x38c0d3) {
        return _0x279efc === _0x38c0d3 || _0x9693df(_0x279efc, _0x38c0d3, _0x5eeb8a(_0x38c0d3));
      };
      _0x4fb193.isMatchWith = function (_0x42728c, _0x5250b4, _0x2428a6) {
        _0x2428a6 = "function" == typeof _0x2428a6 ? _0x2428a6 : _0x18a104;
        return _0x9693df(_0x42728c, _0x5250b4, _0x5eeb8a(_0x5250b4), _0x2428a6);
      };
      _0x4fb193.isNaN = function (_0x1f2a22) {
        return _0x90b901(_0x1f2a22) && _0x1f2a22 != +_0x1f2a22;
      };
      _0x4fb193.isNative = function (_0x108a6b) {
        if (_0x5af059(_0x108a6b)) throw new _0x448be0("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return _0x37eef3(_0x108a6b);
      };
      _0x4fb193.isNil = function (_0x14e117) {
        return null == _0x14e117;
      };
      _0x4fb193.isNull = function (_0x1bb88d) {
        return null === _0x1bb88d;
      };
      _0x4fb193.isNumber = _0x90b901;
      _0x4fb193.isObject = _0x95df83;
      _0x4fb193.isObjectLike = _0x12dbae;
      _0x4fb193.isPlainObject = _0x30a8e6;
      _0x4fb193.isRegExp = _0x2a6ba7;
      _0x4fb193.isSafeInteger = function (_0x46f458) {
        return _0x1e7f71(_0x46f458) && _0x46f458 >= -9007199254740991 && _0x46f458 <= _0x1dad18;
      };
      _0x4fb193.isSet = _0x20594e;
      _0x4fb193.isString = _0x531ad1;
      _0x4fb193.isSymbol = _0x12638b;
      _0x4fb193.isTypedArray = _0x3ed7c9;
      _0x4fb193.isUndefined = function (_0x4b0651) {
        return _0x4b0651 === _0x18a104;
      };
      _0x4fb193.isWeakMap = function (_0x2d67d1) {
        return _0x12dbae(_0x2d67d1) && _0x444f77(_0x2d67d1) == _0x1bb5ae;
      };
      _0x4fb193.isWeakSet = function (_0x5ea439) {
        return _0x12dbae(_0x5ea439) && '[object\x20WeakSet]' == _0x22eff8(_0x5ea439);
      };
      _0x4fb193.join = function (_0x4ea8aa, _0x305b03) {
        if (null == _0x4ea8aa) return '';
        return _0x246bf3.call(_0x4ea8aa, _0x305b03);
      };
      _0x4fb193.kebabCase = _0x55e97b;
      _0x4fb193.last = _0xc58f7;
      _0x4fb193.lastIndexOf = function (_0x26a8e5, _0x46ace1, _0x965303) {
        var _0x7e5eb8 = null == _0x26a8e5 ? 0 : _0x26a8e5.length;
        if (!_0x7e5eb8) return -1;
        var _0x9a0d01 = _0x7e5eb8;
        _0x965303 !== _0x18a104 && (_0x9a0d01 = (_0x9a0d01 = _0x53832b(_0x965303)) < 0 ? _0x42358d(_0x7e5eb8 + _0x9a0d01, 0) : _0x5b234e(_0x9a0d01, _0x7e5eb8 - 1));
        if (_0x46ace1 == _0x46ace1) return function (_0x27e694, _0x392cac, _0x5ae7b3) {
          for (var _0x354339 = _0x5ae7b3 + 1; _0x354339--;) if (_0x27e694[_0x354339] === _0x392cac) return _0x354339;
          return _0x354339;
        }(_0x26a8e5, _0x46ace1, _0x9a0d01);
        return _0x34c743(_0x26a8e5, _0x1cbed3, _0x9a0d01, true);
      };
      _0x4fb193.lowerCase = _0x348efc;
      _0x4fb193.lowerFirst = _0x20bdb0;
      _0x4fb193.lt = _0x16562b;
      _0x4fb193.lte = _0x9a9b9;
      _0x4fb193.max = function (_0x17f4d3) {
        if (_0x17f4d3 && _0x17f4d3.length) return _0x510f3c(_0x17f4d3, _0x5529b6, _0x578146);
        return _0x18a104;
      };
      _0x4fb193.maxBy = function (_0x296240, _0x2bfae1) {
        if (_0x296240 && _0x296240.length) return _0x510f3c(_0x296240, _0x2e11c8(_0x2bfae1, 2), _0x578146);
        return _0x18a104;
      };
      _0x4fb193.mean = function (_0x25cf8f) {
        return _0x224b3d(_0x25cf8f, _0x5529b6);
      };
      _0x4fb193.meanBy = function (_0x4d45dc, _0x12a09a) {
        return _0x224b3d(_0x4d45dc, _0x2e11c8(_0x12a09a, 2));
      };
      _0x4fb193.min = function (_0x31f768) {
        if (_0x31f768 && _0x31f768.length) return _0x510f3c(_0x31f768, _0x5529b6, _0x27f942);
        return _0x18a104;
      };
      _0x4fb193.minBy = function (_0x2f8772, _0x32b884) {
        if (_0x2f8772 && _0x2f8772.length) return _0x510f3c(_0x2f8772, _0x2e11c8(_0x32b884, 2), _0x27f942);
        return _0x18a104;
      };
      _0x4fb193.stubArray = _0x239a2f;
      _0x4fb193.stubFalse = _0x900f9e;
      _0x4fb193.stubObject = function () {
        return {};
      };
      _0x4fb193.stubString = function () {
        return '';
      };
      _0x4fb193.stubTrue = function () {
        return true;
      };
      _0x4fb193.multiply = _0x49134c;
      _0x4fb193.nth = function (_0x504d3d, _0x306bfc) {
        if (_0x504d3d && _0x504d3d.length) return _0x29e053(_0x504d3d, _0x53832b(_0x306bfc));
        return _0x18a104;
      };
      _0x4fb193.noConflict = function () {
        _0xac24cc._ === this && (_0xac24cc._ = _0x305a00);
        return this;
      };
      _0x4fb193.noop = _0x4c7a96;
      _0x4fb193.now = _0xe574be;
      _0x4fb193.pad = function (_0x4222e5, _0x246e01, _0x2889a5) {
        _0x4222e5 = _0x5812e2(_0x4222e5);
        var _0x13799e = (_0x246e01 = _0x53832b(_0x246e01)) ? _0x5e3d40(_0x4222e5) : 0;
        if (!_0x246e01 || _0x13799e >= _0x246e01) return _0x4222e5;
        var _0x5f21cc = (_0x246e01 - _0x13799e) / 2;
        return _0x191ec3(_0x1546b7(_0x5f21cc), _0x2889a5) + _0x4222e5 + _0x191ec3(_0x5904f9(_0x5f21cc), _0x2889a5);
      };
      _0x4fb193.padEnd = function (_0x32dae8, _0x3cc498, _0x19c1dd) {
        _0x32dae8 = _0x5812e2(_0x32dae8);
        var _0x522d51 = (_0x3cc498 = _0x53832b(_0x3cc498)) ? _0x5e3d40(_0x32dae8) : 0;
        if (_0x3cc498 && _0x522d51 < _0x3cc498) return _0x32dae8 + _0x191ec3(_0x3cc498 - _0x522d51, _0x19c1dd);
        return _0x32dae8;
      };
      _0x4fb193.padStart = function (_0x2cbd2d, _0x4b9588, _0x209917) {
        _0x2cbd2d = _0x5812e2(_0x2cbd2d);
        var _0x52e58d = (_0x4b9588 = _0x53832b(_0x4b9588)) ? _0x5e3d40(_0x2cbd2d) : 0;
        if (_0x4b9588 && _0x52e58d < _0x4b9588) return _0x191ec3(_0x4b9588 - _0x52e58d, _0x209917) + _0x2cbd2d;
        return _0x2cbd2d;
      };
      _0x4fb193.parseInt = function (_0x41b1df, _0xccb75c, _0x2d2162) {
        if (_0x2d2162 || null == _0xccb75c) _0xccb75c = 0;else _0xccb75c && (_0xccb75c = +_0xccb75c);
        return _0x54bda2(_0x5812e2(_0x41b1df).replace(_0x337710, ''), _0xccb75c || 0);
      };
      _0x4fb193.random = function (_0x37d2e3, _0x387759, _0x185b0e) {
        _0x185b0e && "boolean" != typeof _0x185b0e && _0x3a0a4c(_0x37d2e3, _0x387759, _0x185b0e) && (_0x387759 = _0x185b0e = _0x18a104);
        _0x185b0e === _0x18a104 && ("boolean" == typeof _0x387759 ? (_0x185b0e = _0x387759, _0x387759 = _0x18a104) : "boolean" == typeof _0x37d2e3 && (_0x185b0e = _0x37d2e3, _0x37d2e3 = _0x18a104));
        if (_0x37d2e3 === _0x18a104 && _0x387759 === _0x18a104) {
          _0x37d2e3 = 0;
          _0x387759 = 1;
        } else {
          _0x37d2e3 = _0x1c17cf(_0x37d2e3);
          if (_0x387759 === _0x18a104) {
            _0x387759 = _0x37d2e3;
            _0x37d2e3 = 0;
          } else _0x387759 = _0x1c17cf(_0x387759);
        }
        if (_0x37d2e3 > _0x387759) {
          var _0x12f079 = _0x37d2e3;
          _0x37d2e3 = _0x387759;
          _0x387759 = _0x12f079;
        }
        if (_0x185b0e || _0x37d2e3 % 1 || _0x387759 % 1) {
          var _0x4fe932 = _0x1c53a3();
          return _0x5b234e(_0x37d2e3 + _0x4fe932 * (_0x387759 - _0x37d2e3 + _0x59bbd9("1e-" + ((_0x4fe932 + '').length - 1))), _0x387759);
        }
        return _0x7ee911(_0x37d2e3, _0x387759);
      };
      _0x4fb193.reduce = function (_0x11fa4f, _0xb9cf8d, _0x4f5446) {
        var _0x2c5e27 = _0x14dbd1(_0x11fa4f) ? _0x4c289a : _0x2207d1,
          _0x51c572 = arguments.length < 3;
        return _0x2c5e27(_0x11fa4f, _0x2e11c8(_0xb9cf8d, 4), _0x4f5446, _0x51c572, _0x571673);
      };
      _0x4fb193.reduceRight = function (_0x3e7634, _0x311515, _0x5c3e1a) {
        var _0x109b8a = _0x14dbd1(_0x3e7634) ? _0x404cbe : _0x2207d1,
          _0x435d60 = arguments.length < 3;
        return _0x109b8a(_0x3e7634, _0x2e11c8(_0x311515, 4), _0x5c3e1a, _0x435d60, _0x1265d8);
      };
      _0x4fb193.repeat = function (_0x4e40e8, _0x1b4735, _0x54785b) {
        _0x1b4735 = (_0x54785b ? _0x3a0a4c(_0x4e40e8, _0x1b4735, _0x54785b) : _0x1b4735 === _0x18a104) ? 1 : _0x53832b(_0x1b4735);
        return _0x1b1192(_0x5812e2(_0x4e40e8), _0x1b4735);
      };
      _0x4fb193.replace = function () {
        var _0xacef14 = arguments,
          _0x5205e6 = _0x5812e2(_0xacef14[0]);
        if (_0xacef14.length < 3) return _0x5205e6;
        return _0x5205e6.replace(_0xacef14[1], _0xacef14[2]);
      };
      _0x4fb193.result = function (_0x4b0522, _0x37457b, _0x2815c3) {
        var _0x11470d = -1,
          _0x2aa072 = (_0x37457b = _0x5357b7(_0x37457b, _0x4b0522)).length;
        for (_0x2aa072 || (_0x2aa072 = 1, _0x4b0522 = _0x18a104); ++_0x11470d < _0x2aa072;) {
          var _0x182e17 = null == _0x4b0522 ? _0x18a104 : _0x4b0522[_0x448eca(_0x37457b[_0x11470d])];
          _0x182e17 === _0x18a104 && (_0x11470d = _0x2aa072, _0x182e17 = _0x2815c3);
          _0x4b0522 = _0x511334(_0x182e17) ? _0x182e17.call(_0x4b0522) : _0x182e17;
        }
        return _0x4b0522;
      };
      _0x4fb193.round = _0x2aed13;
      _0x4fb193.runInContext = _0x198231;
      _0x4fb193.sample = function (_0x21efdc) {
        return (_0x14dbd1(_0x21efdc) ? _0x260746 : _0x35a98b)(_0x21efdc);
      };
      _0x4fb193.size = function (_0x43c119) {
        if (null == _0x43c119) return 0;
        if (_0x58ad0d(_0x43c119)) return _0x531ad1(_0x43c119) ? _0x5e3d40(_0x43c119) : _0x43c119.length;
        var _0x9036ba = _0x444f77(_0x43c119);
        if (_0x9036ba == _0x4c0bc9 || _0x9036ba == _0x2443d3) return _0x43c119.size;
        return _0x10cfab(_0x43c119).length;
      };
      _0x4fb193.snakeCase = _0x49c543;
      _0x4fb193.some = function (_0x17a65d, _0x523963, _0x168234) {
        var _0x192f81 = _0x14dbd1(_0x17a65d) ? _0x1e13f1 : _0x3575aa;
        _0x168234 && _0x3a0a4c(_0x17a65d, _0x523963, _0x168234) && (_0x523963 = _0x18a104);
        return _0x192f81(_0x17a65d, _0x2e11c8(_0x523963, 3));
      };
      _0x4fb193.sortedIndex = function (_0x5567bb, _0x561679) {
        return _0xc76dc(_0x5567bb, _0x561679);
      };
      _0x4fb193.sortedIndexBy = function (_0x391b6f, _0x3f3a63, _0x52af18) {
        return _0x10bcc4(_0x391b6f, _0x3f3a63, _0x2e11c8(_0x52af18, 2));
      };
      _0x4fb193.sortedIndexOf = function (_0x35f8b7, _0x5e1f2d) {
        var _0x488904 = null == _0x35f8b7 ? 0 : _0x35f8b7.length;
        if (_0x488904) {
          var _0x4733d0 = _0xc76dc(_0x35f8b7, _0x5e1f2d);
          if (_0x4733d0 < _0x488904 && _0x1eed1e(_0x35f8b7[_0x4733d0], _0x5e1f2d)) return _0x4733d0;
        }
        return -1;
      };
      _0x4fb193.sortedLastIndex = function (_0x15a1f6, _0x2b90b3) {
        return _0xc76dc(_0x15a1f6, _0x2b90b3, true);
      };
      _0x4fb193.sortedLastIndexBy = function (_0x33bff4, _0x53ab3e, _0x3d1287) {
        return _0x10bcc4(_0x33bff4, _0x53ab3e, _0x2e11c8(_0x3d1287, 2), true);
      };
      _0x4fb193.sortedLastIndexOf = function (_0x2864de, _0xd2d386) {
        if (null != _0x2864de && _0x2864de.length) {
          var _0x4276f9 = _0xc76dc(_0x2864de, _0xd2d386, true) - 1;
          if (_0x1eed1e(_0x2864de[_0x4276f9], _0xd2d386)) return _0x4276f9;
        }
        return -1;
      };
      _0x4fb193.startCase = _0x46cfdb;
      _0x4fb193.startsWith = function (_0x5b00d8, _0x244d00, _0x329efd) {
        _0x5b00d8 = _0x5812e2(_0x5b00d8);
        _0x329efd = null == _0x329efd ? 0 : _0x5d0eea(_0x53832b(_0x329efd), 0, _0x5b00d8.length);
        _0x244d00 = _0x156ed6(_0x244d00);
        return _0x5b00d8.slice(_0x329efd, _0x329efd + _0x244d00.length) == _0x244d00;
      };
      _0x4fb193.subtract = _0x544e17;
      _0x4fb193.sum = function (_0x2a46c1) {
        if (_0x2a46c1 && _0x2a46c1.length) return _0x8d9a5(_0x2a46c1, _0x5529b6);
        return 0;
      };
      _0x4fb193.sumBy = function (_0x1afc78, _0x5f11b9) {
        if (_0x1afc78 && _0x1afc78.length) return _0x8d9a5(_0x1afc78, _0x2e11c8(_0x5f11b9, 2));
        return 0;
      };
      _0x4fb193.template = function (_0x53ec08, _0x233319, _0x42afcd) {
        var _0x67ed8f = _0x4fb193.templateSettings;
        _0x42afcd && _0x3a0a4c(_0x53ec08, _0x233319, _0x42afcd) && (_0x233319 = _0x18a104);
        _0x53ec08 = _0x5812e2(_0x53ec08);
        _0x233319 = _0x49d437({}, _0x233319, _0x67ed8f, _0x4760cf);
        var _0x17956c,
          _0x32ad91,
          _0x529ae6 = _0x49d437({}, _0x233319.imports, _0x67ed8f.imports, _0x4760cf),
          _0x47a3c9 = _0x33c583(_0x529ae6),
          _0x51d15f = _0x1a53cb(_0x529ae6, _0x47a3c9),
          _0x5731ba = 0,
          _0x59cff2 = _0x233319.interpolate || _0xfcd318,
          _0x2bae50 = "__p += '",
          _0x301f01 = _0x4efd08((_0x233319.escape || _0xfcd318).source + '|' + _0x59cff2.source + '|' + (_0x59cff2 === _0x3455f3 ? _0x53d1af : _0xfcd318).source + '|' + (_0x233319.evaluate || _0xfcd318).source + '|$', 'g'),
          _0x4d172f = "//# sourceURL=" + (_0x5a55dd.call(_0x233319, 'sourceURL') ? (_0x233319.sourceURL + '').replace(/\s/g, '\x20') : "lodash.templateSources[" + ++_0x4c9af5 + ']') + '\x0a';
        _0x53ec08.replace(_0x301f01, function (_0xceb87b, _0x4f2834, _0x139087, _0x5b3696, _0x11301f, _0x58d173) {
          _0x139087 || (_0x139087 = _0x5b3696);
          _0x2bae50 += _0x53ec08.slice(_0x5731ba, _0x58d173).replace(_0x11295b, _0x513aac);
          _0x4f2834 && (_0x17956c = true, _0x2bae50 += "' +\n__e(" + _0x4f2834 + ") +\n'");
          _0x11301f && (_0x32ad91 = true, _0x2bae50 += "';\n" + _0x11301f + ";\n__p += '");
          _0x139087 && (_0x2bae50 += "' +\n((__t = (" + _0x139087 + ")) == null ? '' : __t) +\n'");
          _0x5731ba = _0x58d173 + _0xceb87b.length;
          return _0xceb87b;
        });
        _0x2bae50 += "';\n";
        var _0x670d3d = _0x5a55dd.call(_0x233319, "variable") && _0x233319.variable;
        if (_0x670d3d) {
          if (_0x21528f.test(_0x670d3d)) throw new _0x448be0("Invalid `variable` option passed into `_.template`");
        } else _0x2bae50 = "with (obj) {\n" + _0x2bae50 + "\n}\n";
        _0x2bae50 = (_0x32ad91 ? _0x2bae50.replace(_0x3c55b5, '') : _0x2bae50).replace(_0x501dd6, '$1').replace(_0x2bbb42, "$1;");
        _0x2bae50 = "function(" + (_0x670d3d || 'obj') + ") {\n" + (_0x670d3d ? '' : "obj || (obj = {});\n") + "var __t, __p = ''" + (_0x17956c ? ", __e = _.escape" : '') + (_0x32ad91 ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ';\x0a') + _0x2bae50 + "return __p\n}";
        var _0x51a284 = _0x59b0b0(function () {
          return _0xa8b240(_0x47a3c9, _0x4d172f + "return " + _0x2bae50).apply(_0x18a104, _0x51d15f);
        });
        _0x51a284.source = _0x2bae50;
        if (_0x20226e(_0x51a284)) throw _0x51a284;
        return _0x51a284;
      };
      _0x4fb193.times = function (_0x43bc2f, _0x46da8d) {
        if ((_0x43bc2f = _0x53832b(_0x43bc2f)) < 1 || _0x43bc2f > _0x1dad18) return [];
        var _0x49aeda = _0x4f310a,
          _0x91408d = _0x5b234e(_0x43bc2f, _0x4f310a);
        _0x46da8d = _0x2e11c8(_0x46da8d);
        _0x43bc2f -= _0x4f310a;
        for (var _0x2e7de2 = _0x3004b6(_0x91408d, _0x46da8d); ++_0x49aeda < _0x43bc2f;) _0x46da8d(_0x49aeda);
        return _0x2e7de2;
      };
      _0x4fb193.toFinite = _0x1c17cf;
      _0x4fb193.toInteger = _0x53832b;
      _0x4fb193.toLength = _0x25e4e4;
      _0x4fb193.toLower = function (_0x41ba96) {
        return _0x5812e2(_0x41ba96).toLowerCase();
      };
      _0x4fb193.toNumber = _0x1b8c8f;
      _0x4fb193.toSafeInteger = function (_0x3dfb2e) {
        if (_0x3dfb2e) return _0x5d0eea(_0x53832b(_0x3dfb2e), -9007199254740991, _0x1dad18);
        return 0 === _0x3dfb2e ? _0x3dfb2e : 0;
      };
      _0x4fb193.toString = _0x5812e2;
      _0x4fb193.toUpper = function (_0x3b9956) {
        return _0x5812e2(_0x3b9956).toUpperCase();
      };
      _0x4fb193.trim = function (_0x460fa3, _0x4c88cb, _0x2c61c3) {
        if ((_0x460fa3 = _0x5812e2(_0x460fa3)) && (_0x2c61c3 || _0x4c88cb === _0x18a104)) return _0x1b693b(_0x460fa3);
        if (!_0x460fa3 || !(_0x4c88cb = _0x156ed6(_0x4c88cb))) return _0x460fa3;
        var _0x387c97 = _0x27f9f1(_0x460fa3),
          _0x16ce4d = _0x27f9f1(_0x4c88cb);
        return _0x354ad9(_0x387c97, _0x12e5d5(_0x387c97, _0x16ce4d), _0x4640f3(_0x387c97, _0x16ce4d) + 1).join('');
      };
      _0x4fb193.trimEnd = function (_0x254d0c, _0x3d239b, _0x187bd2) {
        if ((_0x254d0c = _0x5812e2(_0x254d0c)) && (_0x187bd2 || _0x3d239b === _0x18a104)) return _0x254d0c.slice(0, _0x1bccd2(_0x254d0c) + 1);
        if (!_0x254d0c || !(_0x3d239b = _0x156ed6(_0x3d239b))) return _0x254d0c;
        var _0x2833e8 = _0x27f9f1(_0x254d0c);
        return _0x354ad9(_0x2833e8, 0, _0x4640f3(_0x2833e8, _0x27f9f1(_0x3d239b)) + 1).join('');
      };
      _0x4fb193.trimStart = function (_0x491bcb, _0x297f8c, _0x5a2496) {
        if ((_0x491bcb = _0x5812e2(_0x491bcb)) && (_0x5a2496 || _0x297f8c === _0x18a104)) return _0x491bcb.replace(_0x337710, '');
        if (!_0x491bcb || !(_0x297f8c = _0x156ed6(_0x297f8c))) return _0x491bcb;
        var _0x526d63 = _0x27f9f1(_0x491bcb);
        return _0x354ad9(_0x526d63, _0x12e5d5(_0x526d63, _0x27f9f1(_0x297f8c))).join('');
      };
      _0x4fb193.truncate = function (_0x5bec7b, _0x136226) {
        var _0x3ca000 = 30,
          _0x6a1af3 = "...";
        if (_0x95df83(_0x136226)) {
          var _0x353d98 = "separator" in _0x136226 ? _0x136226.separator : _0x353d98;
          _0x3ca000 = "length" in _0x136226 ? _0x53832b(_0x136226.length) : _0x3ca000;
          _0x6a1af3 = "omission" in _0x136226 ? _0x156ed6(_0x136226.omission) : _0x6a1af3;
        }
        var _0x377e5a = (_0x5bec7b = _0x5812e2(_0x5bec7b)).length;
        if (_0x232bc1(_0x5bec7b)) {
          var _0x5536ef = _0x27f9f1(_0x5bec7b);
          _0x377e5a = _0x5536ef.length;
        }
        if (_0x3ca000 >= _0x377e5a) return _0x5bec7b;
        var _0x47f178 = _0x3ca000 - _0x5e3d40(_0x6a1af3);
        if (_0x47f178 < 1) return _0x6a1af3;
        var _0xbec17 = _0x5536ef ? _0x354ad9(_0x5536ef, 0, _0x47f178).join('') : _0x5bec7b.slice(0, _0x47f178);
        if (_0x353d98 === _0x18a104) return _0xbec17 + _0x6a1af3;
        _0x5536ef && (_0x47f178 += _0xbec17.length - _0x47f178);
        if (_0x2a6ba7(_0x353d98)) {
          if (_0x5bec7b.slice(_0x47f178).search(_0x353d98)) {
            var _0x75f09e,
              _0xb33521 = _0xbec17;
            _0x353d98.global || (_0x353d98 = _0x4efd08(_0x353d98.source, _0x5812e2(_0x26a18e.exec(_0x353d98)) + 'g'));
            for (_0x353d98.lastIndex = 0; _0x75f09e = _0x353d98.exec(_0xb33521);) var _0x4eeea7 = _0x75f09e.index;
            _0xbec17 = _0xbec17.slice(0, _0x4eeea7 === _0x18a104 ? _0x47f178 : _0x4eeea7);
          }
        } else {
          if (_0x5bec7b.indexOf(_0x156ed6(_0x353d98), _0x47f178) != _0x47f178) {
            var _0x2f596a = _0xbec17.lastIndexOf(_0x353d98);
            _0x2f596a > -1 && (_0xbec17 = _0xbec17.slice(0, _0x2f596a));
          }
        }
        return _0xbec17 + _0x6a1af3;
      };
      _0x4fb193.unescape = function (_0x24c76d) {
        if ((_0x24c76d = _0x5812e2(_0x24c76d)) && _0x1fa02a.test(_0x24c76d)) return _0x24c76d.replace(_0x2e87d1, _0x3772f6);
        return _0x24c76d;
      };
      _0x4fb193.uniqueId = function (_0x43fded) {
        var _0xcbb160 = ++_0xc5bb17;
        return _0x5812e2(_0x43fded) + _0xcbb160;
      };
      _0x4fb193.upperCase = _0xfde9d7;
      _0x4fb193.upperFirst = _0x301f92;
      _0x4fb193.each = _0x1d2980;
      _0x4fb193.eachRight = _0x34d309;
      _0x4fb193.first = _0x2ba92a;
      _0x533d16(_0x4fb193, (_0x380616 = {}, _0x253c4e(_0x4fb193, function (_0x30c791, _0xd69f46) {
        _0x5a55dd.call(_0x4fb193.prototype, _0xd69f46) || (_0x380616[_0xd69f46] = _0x30c791);
      }), _0x380616), {
        chain: false
      });
      _0x4fb193.VERSION = "4.17.21";
      _0x4e0041(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (_0x2432bc) {
        _0x4fb193[_0x2432bc].placeholder = _0x4fb193;
      });
      _0x4e0041(["drop", "take"], function (_0x26ed5b, _0x5e219b) {
        _0x52cb1f.prototype[_0x26ed5b] = function (_0x2c6784) {
          _0x2c6784 = _0x2c6784 === _0x18a104 ? 1 : _0x42358d(_0x53832b(_0x2c6784), 0);
          var _0x11c12b = this.__filtered__ && !_0x5e219b ? new _0x52cb1f(this) : this.clone();
          if (_0x11c12b.__filtered__) _0x11c12b.__takeCount__ = _0x5b234e(_0x2c6784, _0x11c12b.__takeCount__);else _0x11c12b.__views__.push({
            size: _0x5b234e(_0x2c6784, _0x4f310a),
            type: _0x26ed5b + (_0x11c12b.__dir__ < 0 ? "Right" : '')
          });
          return _0x11c12b;
        };
        _0x52cb1f.prototype[_0x26ed5b + "Right"] = function (_0x3621cb) {
          return this.reverse()[_0x26ed5b](_0x3621cb).reverse();
        };
      });
      _0x4e0041(["filter", 'map', "takeWhile"], function (_0x57d77a, _0x48d495) {
        var _0x56c4ba = _0x48d495 + 1,
          _0x4a0e62 = 1 == _0x56c4ba || 3 == _0x56c4ba;
        _0x52cb1f.prototype[_0x57d77a] = function (_0x108605) {
          var _0x307ed8 = this.clone();
          _0x307ed8.__iteratees__.push({
            iteratee: _0x2e11c8(_0x108605, 3),
            type: _0x56c4ba
          });
          _0x307ed8.__filtered__ = _0x307ed8.__filtered__ || _0x4a0e62;
          return _0x307ed8;
        };
      });
      _0x4e0041(["head", "last"], function (_0x51acbe, _0x4bec0a) {
        var _0x2d6d16 = "take" + (_0x4bec0a ? 'Right' : '');
        _0x52cb1f.prototype[_0x51acbe] = function () {
          return this[_0x2d6d16](1).value()[0];
        };
      });
      _0x4e0041(["initial", "tail"], function (_0x4713ea, _0x17de41) {
        var _0x56ca42 = "drop" + (_0x17de41 ? '' : "Right");
        _0x52cb1f.prototype[_0x4713ea] = function () {
          if (this.__filtered__) return new _0x52cb1f(this);
          return this[_0x56ca42](1);
        };
      });
      _0x52cb1f.prototype.compact = function () {
        return this.filter(_0x5529b6);
      };
      _0x52cb1f.prototype.find = function (_0x44e103) {
        return this.filter(_0x44e103).head();
      };
      _0x52cb1f.prototype.findLast = function (_0x51e47c) {
        return this.reverse().find(_0x51e47c);
      };
      _0x52cb1f.prototype.invokeMap = _0x24cab9(function (_0x444466, _0x145159) {
        if ("function" == typeof _0x444466) return new _0x52cb1f(this);
        return this.map(function (_0xce08eb) {
          return _0x9ca3e2(_0xce08eb, _0x444466, _0x145159);
        });
      });
      _0x52cb1f.prototype.reject = function (_0x1bb1b3) {
        return this.filter(_0x196a07(_0x2e11c8(_0x1bb1b3)));
      };
      _0x52cb1f.prototype.slice = function (_0x53ff58, _0x3b9faa) {
        _0x53ff58 = _0x53832b(_0x53ff58);
        var _0x4ec28d = this;
        if (_0x4ec28d.__filtered__ && (_0x53ff58 > 0 || _0x3b9faa < 0)) return new _0x52cb1f(_0x4ec28d);
        if (_0x53ff58 < 0) _0x4ec28d = _0x4ec28d.takeRight(-_0x53ff58);else _0x53ff58 && (_0x4ec28d = _0x4ec28d.drop(_0x53ff58));
        _0x3b9faa !== _0x18a104 && (_0x4ec28d = (_0x3b9faa = _0x53832b(_0x3b9faa)) < 0 ? _0x4ec28d.dropRight(-_0x3b9faa) : _0x4ec28d.take(_0x3b9faa - _0x53ff58));
        return _0x4ec28d;
      };
      _0x52cb1f.prototype.takeRightWhile = function (_0x293604) {
        return this.reverse().takeWhile(_0x293604).reverse();
      };
      _0x52cb1f.prototype.toArray = function () {
        return this.take(_0x4f310a);
      };
      _0x253c4e(_0x52cb1f.prototype, function (_0x56fd1e, _0x107cf1) {
        var _0x43b524 = /^(?:filter|find|map|reject)|While$/.test(_0x107cf1),
          _0x2ba9c1 = /^(?:head|last)$/.test(_0x107cf1),
          _0x221d18 = _0x4fb193[_0x2ba9c1 ? "take" + ("last" == _0x107cf1 ? 'Right' : '') : _0x107cf1],
          _0x5e2014 = _0x2ba9c1 || /^find/.test(_0x107cf1);
        _0x221d18 && (_0x4fb193.prototype[_0x107cf1] = function () {
          var _0x4ee2b0 = this.__wrapped__,
            _0x22512f = _0x2ba9c1 ? [1] : arguments,
            _0x568504 = _0x4ee2b0 instanceof _0x52cb1f,
            _0x3774d1 = _0x22512f[0],
            _0x5d0e61 = _0x568504 || _0x14dbd1(_0x4ee2b0),
            _0x922367 = function (_0x2f7a55) {
              var _0x4d0275 = _0x221d18.apply(_0x4fb193, _0x363a38([_0x2f7a55], _0x22512f));
              if (_0x2ba9c1 && _0x1eed49) return _0x4d0275[0];
              return _0x4d0275;
            };
          _0x5d0e61 && _0x43b524 && 'function' == typeof _0x3774d1 && 1 != _0x3774d1.length && (_0x568504 = _0x5d0e61 = false);
          var _0x1eed49 = this.__chain__,
            _0x3b3a9f = !!this.__actions__.length,
            _0x3a60eb = _0x5e2014 && !_0x1eed49,
            _0x55b043 = _0x568504 && !_0x3b3a9f;
          if (!_0x5e2014 && _0x5d0e61) {
            _0x4ee2b0 = _0x55b043 ? _0x4ee2b0 : new _0x52cb1f(this);
            var _0x8b7671 = _0x56fd1e.apply(_0x4ee2b0, _0x22512f);
            _0x8b7671.__actions__.push({
              func: _0x3b2d4d,
              args: [_0x922367],
              thisArg: _0x18a104
            });
            return new _0x44e077(_0x8b7671, _0x1eed49);
          }
          if (_0x3a60eb && _0x55b043) return _0x56fd1e.apply(this, _0x22512f);
          _0x8b7671 = this.thru(_0x922367);
          if (_0x3a60eb) return _0x2ba9c1 ? _0x8b7671.value()[0] : _0x8b7671.value();
          return _0x8b7671;
        });
      });
      _0x4e0041(["pop", "push", "shift", "sort", "splice", "unshift"], function (_0x16074d) {
        var _0x58fa20 = _0x3bb250[_0x16074d],
          _0x1dcf62 = /^(?:push|sort|unshift)$/.test(_0x16074d) ? "tap" : "thru",
          _0xbced7e = /^(?:pop|shift)$/.test(_0x16074d);
        _0x4fb193.prototype[_0x16074d] = function () {
          var _0x5d7862 = arguments;
          if (_0xbced7e && !this.__chain__) {
            var _0x4660c6 = this.value();
            return _0x58fa20.apply(_0x14dbd1(_0x4660c6) ? _0x4660c6 : [], _0x5d7862);
          }
          return this[_0x1dcf62](function (_0x6ff850) {
            return _0x58fa20.apply(_0x14dbd1(_0x6ff850) ? _0x6ff850 : [], _0x5d7862);
          });
        };
      });
      _0x253c4e(_0x52cb1f.prototype, function (_0x410062, _0x563fa9) {
        var _0x2b7d73 = _0x4fb193[_0x563fa9];
        if (_0x2b7d73) {
          var _0x272db7 = _0x2b7d73.name + '';
          _0x5a55dd.call(_0x4aec69, _0x272db7) || (_0x4aec69[_0x272db7] = []);
          _0x4aec69[_0x272db7].push({
            name: _0x563fa9,
            func: _0x2b7d73
          });
        }
      });
      _0x4aec69[_0x57772e(_0x18a104, 2).name] = [{
        name: "wrapper",
        func: _0x18a104
      }];
      _0x52cb1f.prototype.clone = function () {
        var _0xe19f50 = new _0x52cb1f(this.__wrapped__);
        _0xe19f50.__actions__ = _0x73a637(this.__actions__);
        _0xe19f50.__dir__ = this.__dir__;
        _0xe19f50.__filtered__ = this.__filtered__;
        _0xe19f50.__iteratees__ = _0x73a637(this.__iteratees__);
        _0xe19f50.__takeCount__ = this.__takeCount__;
        _0xe19f50.__views__ = _0x73a637(this.__views__);
        return _0xe19f50;
      };
      _0x52cb1f.prototype.reverse = function () {
        if (this.__filtered__) {
          var _0x906235 = new _0x52cb1f(this);
          _0x906235.__dir__ = -1;
          _0x906235.__filtered__ = true;
        } else (_0x906235 = this.clone()).__dir__ *= -1;
        return _0x906235;
      };
      _0x52cb1f.prototype.value = function () {
        var _0x145126 = this.__wrapped__.value(),
          _0x3230b9 = this.__dir__,
          _0x513cf7 = _0x14dbd1(_0x145126),
          _0x36a010 = _0x3230b9 < 0,
          _0x47a824 = _0x513cf7 ? _0x145126.length : 0,
          _0x3a9a1e = function (_0x2b5e5e, _0x5e38d0, _0x178536) {
            for (var _0x1fe4a1 = -1, _0x184e19 = _0x178536.length; ++_0x1fe4a1 < _0x184e19;) {
              var _0x397e44 = _0x178536[_0x1fe4a1],
                _0x409976 = _0x397e44.size;
              switch (_0x397e44.type) {
                case "drop":
                  _0x2b5e5e += _0x409976;
                  break;
                case "dropRight":
                  _0x5e38d0 -= _0x409976;
                  break;
                case 'take':
                  _0x5e38d0 = _0x5b234e(_0x5e38d0, _0x2b5e5e + _0x409976);
                  break;
                case 'takeRight':
                  _0x2b5e5e = _0x42358d(_0x2b5e5e, _0x5e38d0 - _0x409976);
              }
            }
            return {
              start: _0x2b5e5e,
              end: _0x5e38d0
            };
          }(0, _0x47a824, this.__views__),
          _0x412301 = _0x3a9a1e.start,
          _0x4407ba = _0x3a9a1e.end,
          _0x291ae8 = _0x4407ba - _0x412301,
          _0x51d1b4 = _0x36a010 ? _0x4407ba : _0x412301 - 1,
          _0x322fb7 = this.__iteratees__,
          _0x50d623 = _0x322fb7.length,
          _0x55d110 = 0,
          _0x1b34f3 = _0x5b234e(_0x291ae8, this.__takeCount__);
        if (!_0x513cf7 || !_0x36a010 && _0x47a824 == _0x291ae8 && _0x1b34f3 == _0x291ae8) return _0x4cf955(_0x145126, this.__actions__);
        var _0x5d91c7 = [];
        _0x59465e: for (; _0x291ae8-- && _0x55d110 < _0x1b34f3;) {
          for (var _0x2e0a39 = -1, _0x33fbbf = _0x145126[_0x51d1b4 += _0x3230b9]; ++_0x2e0a39 < _0x50d623;) {
            var _0xff7811 = _0x322fb7[_0x2e0a39],
              _0x566fb0 = _0xff7811.iteratee,
              _0xb9c3d6 = _0xff7811.type,
              _0x233ce4 = _0x566fb0(_0x33fbbf);
            if (2 == _0xb9c3d6) _0x33fbbf = _0x233ce4;else {
              if (!_0x233ce4) {
                if (1 == _0xb9c3d6) continue _0x59465e;
                break _0x59465e;
              }
            }
          }
          _0x5d91c7[_0x55d110++] = _0x33fbbf;
        }
        return _0x5d91c7;
      };
      _0x4fb193.prototype.at = _0x5864d8;
      _0x4fb193.prototype.chain = function () {
        return _0x172e9f(this);
      };
      _0x4fb193.prototype.commit = function () {
        return new _0x44e077(this.value(), this.__chain__);
      };
      _0x4fb193.prototype.next = function () {
        this.__values__ === _0x18a104 && (this.__values__ = _0x7ad040(this.value()));
        var _0xb3bdac = this.__index__ >= this.__values__.length;
        return {
          done: _0xb3bdac,
          value: _0xb3bdac ? _0x18a104 : this.__values__[this.__index__++]
        };
      };
      _0x4fb193.prototype.plant = function (_0x38acdf) {
        for (var _0x476a0e, _0x4d3fb4 = this; _0x4d3fb4 instanceof _0x136a34;) {
          var _0x3b1046 = _0x368288(_0x4d3fb4);
          _0x3b1046.__index__ = 0;
          _0x3b1046.__values__ = _0x18a104;
          if (_0x476a0e) _0x378dfb.__wrapped__ = _0x3b1046;else _0x476a0e = _0x3b1046;
          var _0x378dfb = _0x3b1046;
          _0x4d3fb4 = _0x4d3fb4.__wrapped__;
        }
        _0x378dfb.__wrapped__ = _0x38acdf;
        return _0x476a0e;
      };
      _0x4fb193.prototype.reverse = function () {
        var _0xde8cc6 = this.__wrapped__;
        if (_0xde8cc6 instanceof _0x52cb1f) {
          var _0xddf815 = _0xde8cc6;
          this.__actions__.length && (_0xddf815 = new _0x52cb1f(this));
          (_0xddf815 = _0xddf815.reverse()).__actions__.push({
            func: _0x3b2d4d,
            args: [_0x3d3ca1],
            thisArg: _0x18a104
          });
          return new _0x44e077(_0xddf815, this.__chain__);
        }
        return this.thru(_0x3d3ca1);
      };
      _0x4fb193.prototype.toJSON = _0x4fb193.prototype.valueOf = _0x4fb193.prototype.value = function () {
        return _0x4cf955(this.__wrapped__, this.__actions__);
      };
      _0x4fb193.prototype.first = _0x4fb193.prototype.head;
      _0x2d66b9 && (_0x4fb193.prototype[_0x2d66b9] = function () {
        return this;
      });
      return _0x4fb193;
    }();
  if (_0x4b8835) {
    (_0x4b8835.exports = _0x4c8b64)._ = _0x4c8b64;
    _0x59ab55._ = _0x4c8b64;
  } else _0xac24cc._ = _0x4c8b64;
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
    'setup'(_0x45c82e) {
      const _0xfdd71c = _0x45c82e,
        _0x280b06 = a28_0x34ade5(null),
        _0x5d4e87 = a28_0x34ade5(_0xfdd71c.progress),
        _0x1df636 = a28_0x34ade5(''),
        _0xa94afe = rt.throttle(_0x4aa98d => {
          _0x4aa98d > 100 && (_0x4aa98d = 100);
          _0x5d4e87.value = _0x4aa98d;
        }, 60);
      async function _0x4dac81(_0x5409a5) {
        _0xa94afe(_0x5409a5);
      }
      async function _0xcb1a20(_0xab2f9f) {
        _0x1df636.value = _0xab2f9f;
      }
      async function _0x57f6a9() {
        var _0x162e5c;
        null == (_0x162e5c = _0x280b06.value) || _0x162e5c.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: "forwards"
        });
        setTimeout(() => {
          var _0x2611ac;
          null == (_0x2611ac = _0xfdd71c.callback) || _0x2611ac.call(_0xfdd71c);
        }, 300);
      }
      a28_0x417103(() => {
        _0xfdd71c.exposedSetProgress && _0xfdd71c.exposedSetProgress(_0x4dac81);
        _0xfdd71c.exposedClose && _0xfdd71c.exposedClose(_0x57f6a9);
        _0xfdd71c.exposedSetTitle && _0xfdd71c.exposedSetTitle(_0xcb1a20);
      });
      return (_0x43650a, _0x1a4a77) => (a28_0x14ec8c(), a28_0x4334ed('div', {
        ref_key: "promptRef",
        ref: _0x280b06,
        class: "flex fixed inset-0 z-[999] select-none opacity-0 animate-show"
      }, [st, a28_0x1683e7('div', nt, [a28_0x1683e7("div", at, [a28_0x1683e7("div", it, [a28_0x1683e7("div", ot, [a28_0x1683e7("div", ut, [a28_0x1683e7('h3', ct, a28_0x3cd23b(_0x43650a.$t(_0x1df636.value || _0x45c82e.title)), 1)]), a28_0x1683e7("div", lt, [a28_0x1683e7("div", ft, [a28_0x1683e7("div", {
        style: a28_0xc71455({
          width: _0x5d4e87.value + '%'
        }),
        class: "absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 max-w-[300px] rounded-r-[10px] transition-all duration-300"
      }, null, 4)])]), _0x45c82e.content ? (a28_0x14ec8c(), a28_0x4334ed("div", ht, [a28_0x1683e7('p', dt, a28_0x3cd23b(_0x43650a.$t(_0x45c82e.content)), 1)])) : a28_0x41e27b('', true)])])])])], 512));
    }
  });
var mt = (_0x1b06e2 => (_0x1b06e2[_0x1b06e2.KC_NO = 0] = "KC_NO", _0x1b06e2[_0x1b06e2.KC_ROLL_OVER = 1] = "KC_ROLL_OVER", _0x1b06e2[_0x1b06e2.KC_POST_FAIL = 2] = "KC_POST_FAIL", _0x1b06e2[_0x1b06e2.KC_UNDEFINED = 3] = "KC_UNDEFINED", _0x1b06e2[_0x1b06e2.KC_A = 4] = 'KC_A', _0x1b06e2[_0x1b06e2.KC_B = 5] = "KC_B", _0x1b06e2[_0x1b06e2.KC_C = 6] = "KC_C", _0x1b06e2[_0x1b06e2.KC_D = 7] = "KC_D", _0x1b06e2[_0x1b06e2.KC_E = 8] = "KC_E", _0x1b06e2[_0x1b06e2.KC_F = 9] = "KC_F", _0x1b06e2[_0x1b06e2.KC_G = 10] = "KC_G", _0x1b06e2[_0x1b06e2.KC_H = 11] = "KC_H", _0x1b06e2[_0x1b06e2.KC_I = 12] = "KC_I", _0x1b06e2[_0x1b06e2.KC_J = 13] = "KC_J", _0x1b06e2[_0x1b06e2.KC_K = 14] = "KC_K", _0x1b06e2[_0x1b06e2.KC_L = 15] = 'KC_L', _0x1b06e2[_0x1b06e2.KC_M = 16] = "KC_M", _0x1b06e2[_0x1b06e2.KC_N = 17] = "KC_N", _0x1b06e2[_0x1b06e2.KC_O = 18] = 'KC_O', _0x1b06e2[_0x1b06e2.KC_P = 19] = "KC_P", _0x1b06e2[_0x1b06e2.KC_Q = 20] = "KC_Q", _0x1b06e2[_0x1b06e2.KC_R = 21] = "KC_R", _0x1b06e2[_0x1b06e2.KC_S = 22] = "KC_S", _0x1b06e2[_0x1b06e2.KC_T = 23] = "KC_T", _0x1b06e2[_0x1b06e2.KC_U = 24] = "KC_U", _0x1b06e2[_0x1b06e2.KC_V = 25] = "KC_V", _0x1b06e2[_0x1b06e2.KC_W = 26] = 'KC_W', _0x1b06e2[_0x1b06e2.KC_X = 27] = "KC_X", _0x1b06e2[_0x1b06e2.KC_Y = 28] = "KC_Y", _0x1b06e2[_0x1b06e2.KC_Z = 29] = "KC_Z", _0x1b06e2[_0x1b06e2.KC_1 = 30] = "KC_1", _0x1b06e2[_0x1b06e2.KC_2 = 31] = 'KC_2', _0x1b06e2[_0x1b06e2.KC_3 = 32] = "KC_3", _0x1b06e2[_0x1b06e2.KC_4 = 33] = "KC_4", _0x1b06e2[_0x1b06e2.KC_5 = 34] = "KC_5", _0x1b06e2[_0x1b06e2.KC_6 = 35] = "KC_6", _0x1b06e2[_0x1b06e2.KC_7 = 36] = "KC_7", _0x1b06e2[_0x1b06e2.KC_8 = 37] = "KC_8", _0x1b06e2[_0x1b06e2.KC_9 = 38] = "KC_9", _0x1b06e2[_0x1b06e2.KC_0 = 39] = 'KC_0', _0x1b06e2[_0x1b06e2.KC_ENTER = 40] = 'KC_ENTER', _0x1b06e2[_0x1b06e2.KC_ESCAPE = 41] = 'KC_ESCAPE', _0x1b06e2[_0x1b06e2.KC_BSPACE = 42] = "KC_BSPACE", _0x1b06e2[_0x1b06e2.KC_TAB = 43] = 'KC_TAB', _0x1b06e2[_0x1b06e2.KC_SPACE = 44] = "KC_SPACE", _0x1b06e2[_0x1b06e2.KC_MINUS = 45] = 'KC_MINUS', _0x1b06e2[_0x1b06e2.KC_EQUAL = 46] = "KC_EQUAL", _0x1b06e2[_0x1b06e2.KC_LBRACKET = 47] = "KC_LBRACKET", _0x1b06e2[_0x1b06e2.KC_RBRACKET = 48] = "KC_RBRACKET", _0x1b06e2[_0x1b06e2.KC_BSLASH = 49] = "KC_BSLASH", _0x1b06e2[_0x1b06e2.KC_NONUS_HASH = 50] = "KC_NONUS_HASH", _0x1b06e2[_0x1b06e2.KC_SCOLON = 51] = 'KC_SCOLON', _0x1b06e2[_0x1b06e2.KC_QUOTE = 52] = 'KC_QUOTE', _0x1b06e2[_0x1b06e2.KC_GRAVE = 53] = 'KC_GRAVE', _0x1b06e2[_0x1b06e2.KC_COMMA = 54] = 'KC_COMMA', _0x1b06e2[_0x1b06e2.KC_DOT = 55] = 'KC_DOT', _0x1b06e2[_0x1b06e2.KC_SLASH = 56] = "KC_SLASH", _0x1b06e2[_0x1b06e2.KC_CAPSLOCK = 57] = "KC_CAPSLOCK", _0x1b06e2[_0x1b06e2.KC_F1 = 58] = "KC_F1", _0x1b06e2[_0x1b06e2.KC_F2 = 59] = "KC_F2", _0x1b06e2[_0x1b06e2.KC_F3 = 60] = "KC_F3", _0x1b06e2[_0x1b06e2.KC_F4 = 61] = "KC_F4", _0x1b06e2[_0x1b06e2.KC_F5 = 62] = "KC_F5", _0x1b06e2[_0x1b06e2.KC_F6 = 63] = "KC_F6", _0x1b06e2[_0x1b06e2.KC_F7 = 64] = 'KC_F7', _0x1b06e2[_0x1b06e2.KC_F8 = 65] = "KC_F8", _0x1b06e2[_0x1b06e2.KC_F9 = 66] = 'KC_F9', _0x1b06e2[_0x1b06e2.KC_F10 = 67] = "KC_F10", _0x1b06e2[_0x1b06e2.KC_F11 = 68] = 'KC_F11', _0x1b06e2[_0x1b06e2.KC_F12 = 69] = "KC_F12", _0x1b06e2[_0x1b06e2.KC_PSCREEN = 70] = "KC_PSCREEN", _0x1b06e2[_0x1b06e2.KC_SCROLLLOCK = 71] = 'KC_SCROLLLOCK', _0x1b06e2[_0x1b06e2.KC_PAUSE = 72] = "KC_PAUSE", _0x1b06e2[_0x1b06e2.KC_INSERT = 73] = 'KC_INSERT', _0x1b06e2[_0x1b06e2.KC_HOME = 74] = 'KC_HOME', _0x1b06e2[_0x1b06e2.KC_PGUP = 75] = 'KC_PGUP', _0x1b06e2[_0x1b06e2.KC_DELETE = 76] = "KC_DELETE", _0x1b06e2[_0x1b06e2.KC_END = 77] = "KC_END", _0x1b06e2[_0x1b06e2.KC_PGDOWN = 78] = "KC_PGDOWN", _0x1b06e2[_0x1b06e2.KC_RIGHT = 79] = 'KC_RIGHT', _0x1b06e2[_0x1b06e2.KC_LEFT = 80] = "KC_LEFT", _0x1b06e2[_0x1b06e2.KC_DOWN = 81] = "KC_DOWN", _0x1b06e2[_0x1b06e2.KC_UP = 82] = "KC_UP", _0x1b06e2[_0x1b06e2.KC_NUMLOCK = 83] = 'KC_NUMLOCK', _0x1b06e2[_0x1b06e2.KC_KP_SLASH = 84] = 'KC_KP_SLASH', _0x1b06e2[_0x1b06e2.KC_KP_ASTERISK = 85] = "KC_KP_ASTERISK", _0x1b06e2[_0x1b06e2.KC_KP_MINUS = 86] = "KC_KP_MINUS", _0x1b06e2[_0x1b06e2.KC_KP_PLUS = 87] = 'KC_KP_PLUS', _0x1b06e2[_0x1b06e2.KC_KP_ENTER = 88] = "KC_KP_ENTER", _0x1b06e2[_0x1b06e2.KC_KP_1 = 89] = "KC_KP_1", _0x1b06e2[_0x1b06e2.KC_KP_2 = 90] = "KC_KP_2", _0x1b06e2[_0x1b06e2.KC_KP_3 = 91] = "KC_KP_3", _0x1b06e2[_0x1b06e2.KC_KP_4 = 92] = "KC_KP_4", _0x1b06e2[_0x1b06e2.KC_KP_5 = 93] = 'KC_KP_5', _0x1b06e2[_0x1b06e2.KC_KP_6 = 94] = "KC_KP_6", _0x1b06e2[_0x1b06e2.KC_KP_7 = 95] = "KC_KP_7", _0x1b06e2[_0x1b06e2.KC_KP_8 = 96] = 'KC_KP_8', _0x1b06e2[_0x1b06e2.KC_KP_9 = 97] = 'KC_KP_9', _0x1b06e2[_0x1b06e2.KC_KP_0 = 98] = 'KC_KP_0', _0x1b06e2[_0x1b06e2.KC_KP_DOT = 99] = 'KC_KP_DOT', _0x1b06e2[_0x1b06e2.KC_NONUS_BSLASH = 100] = "KC_NONUS_BSLASH", _0x1b06e2[_0x1b06e2.KC_APPLICATION = 101] = 'KC_APPLICATION', _0x1b06e2[_0x1b06e2.KC_POWER = 102] = "KC_POWER", _0x1b06e2[_0x1b06e2.KC_KP_EQUAL = 103] = 'KC_KP_EQUAL', _0x1b06e2[_0x1b06e2.KC_F13 = 104] = "KC_F13", _0x1b06e2[_0x1b06e2.KC_F14 = 105] = "KC_F14", _0x1b06e2[_0x1b06e2.KC_F15 = 106] = "KC_F15", _0x1b06e2[_0x1b06e2.KC_F16 = 107] = "KC_F16", _0x1b06e2[_0x1b06e2.KC_F17 = 108] = "KC_F17", _0x1b06e2[_0x1b06e2.KC_F18 = 109] = "KC_F18", _0x1b06e2[_0x1b06e2.KC_F19 = 110] = "KC_F19", _0x1b06e2[_0x1b06e2.KC_F20 = 111] = "KC_F20", _0x1b06e2[_0x1b06e2.KC_F21 = 112] = "KC_F21", _0x1b06e2[_0x1b06e2.KC_F22 = 113] = 'KC_F22', _0x1b06e2[_0x1b06e2.KC_F23 = 114] = 'KC_F23', _0x1b06e2[_0x1b06e2.KC_F24 = 115] = "KC_F24", _0x1b06e2[_0x1b06e2.KC_EXECUTE = 116] = "KC_EXECUTE", _0x1b06e2[_0x1b06e2.KC_HELP = 117] = "KC_HELP", _0x1b06e2[_0x1b06e2.KC_MENU = 118] = "KC_MENU", _0x1b06e2[_0x1b06e2.KC_SELECT = 119] = "KC_SELECT", _0x1b06e2[_0x1b06e2.KC_STOP = 120] = "KC_STOP", _0x1b06e2[_0x1b06e2.KC_AGAIN = 121] = "KC_AGAIN", _0x1b06e2[_0x1b06e2.KC_UNDO = 122] = "KC_UNDO", _0x1b06e2[_0x1b06e2.KC_CUT = 123] = 'KC_CUT', _0x1b06e2[_0x1b06e2.KC_COPY = 124] = 'KC_COPY', _0x1b06e2[_0x1b06e2.KC_PASTE = 125] = 'KC_PASTE', _0x1b06e2[_0x1b06e2.KC_FIND = 126] = "KC_FIND", _0x1b06e2[_0x1b06e2.KC__MUTE = 127] = "KC__MUTE", _0x1b06e2[_0x1b06e2.KC__VOLUP = 128] = 'KC__VOLUP', _0x1b06e2[_0x1b06e2.KC__VOLDOWN = 129] = "KC__VOLDOWN", _0x1b06e2[_0x1b06e2.KC_LOCKING_CAPS = 130] = "KC_LOCKING_CAPS", _0x1b06e2[_0x1b06e2.KC_LOCKING_NUM = 131] = "KC_LOCKING_NUM", _0x1b06e2[_0x1b06e2.KC_LOCKING_SCROLL = 132] = 'KC_LOCKING_SCROLL', _0x1b06e2[_0x1b06e2.KC_KP_COMMA = 133] = "KC_KP_COMMA", _0x1b06e2[_0x1b06e2.KC_KP_EQUAL_AS400 = 134] = "KC_KP_EQUAL_AS400", _0x1b06e2[_0x1b06e2.KC_INT1 = 135] = 'KC_INT1', _0x1b06e2[_0x1b06e2.KC_INT2 = 136] = "KC_INT2", _0x1b06e2[_0x1b06e2.KC_INT3 = 137] = "KC_INT3", _0x1b06e2[_0x1b06e2.KC_INT4 = 138] = "KC_INT4", _0x1b06e2[_0x1b06e2.KC_INT5 = 139] = "KC_INT5", _0x1b06e2[_0x1b06e2.KC_INT6 = 140] = "KC_INT6", _0x1b06e2[_0x1b06e2.KC_INT7 = 141] = 'KC_INT7', _0x1b06e2[_0x1b06e2.KC_INT8 = 142] = "KC_INT8", _0x1b06e2[_0x1b06e2.KC_INT9 = 143] = "KC_INT9", _0x1b06e2[_0x1b06e2.KC_LANG1 = 144] = "KC_LANG1", _0x1b06e2[_0x1b06e2.KC_LANG2 = 145] = 'KC_LANG2', _0x1b06e2[_0x1b06e2.KC_LANG3 = 146] = "KC_LANG3", _0x1b06e2[_0x1b06e2.KC_LANG4 = 147] = 'KC_LANG4', _0x1b06e2[_0x1b06e2.KC_LANG5 = 148] = "KC_LANG5", _0x1b06e2[_0x1b06e2.KC_LANG6 = 149] = "KC_LANG6", _0x1b06e2[_0x1b06e2.KC_LANG7 = 150] = "KC_LANG7", _0x1b06e2[_0x1b06e2.KC_LANG8 = 151] = "KC_LANG8", _0x1b06e2[_0x1b06e2.KC_LANG9 = 152] = "KC_LANG9", _0x1b06e2[_0x1b06e2.KC_ALT_ERASE = 153] = "KC_ALT_ERASE", _0x1b06e2[_0x1b06e2.KC_SYSREQ = 154] = "KC_SYSREQ", _0x1b06e2[_0x1b06e2.KC_CANCEL = 155] = "KC_CANCEL", _0x1b06e2[_0x1b06e2.KC_CLEAR = 156] = 'KC_CLEAR', _0x1b06e2[_0x1b06e2.KC_PRIOR = 157] = "KC_PRIOR", _0x1b06e2[_0x1b06e2.KC_RETURN = 158] = "KC_RETURN", _0x1b06e2[_0x1b06e2.KC_SEPARATOR = 159] = 'KC_SEPARATOR', _0x1b06e2[_0x1b06e2.KC_OUT = 160] = 'KC_OUT', _0x1b06e2[_0x1b06e2.KC_OPER = 161] = 'KC_OPER', _0x1b06e2[_0x1b06e2.KC_CLEAR_AGAIN = 162] = "KC_CLEAR_AGAIN", _0x1b06e2[_0x1b06e2.KC_CRSEL = 163] = "KC_CRSEL", _0x1b06e2[_0x1b06e2.KC_EXSEL = 164] = 'KC_EXSEL', _0x1b06e2[_0x1b06e2.KC_KP_00 = 176] = "KC_KP_00", _0x1b06e2[_0x1b06e2.KC_KP_000 = 177] = 'KC_KP_000', _0x1b06e2[_0x1b06e2.KC_THOUSANDS_SEPARATOR = 178] = 'KC_THOUSANDS_SEPARATOR', _0x1b06e2[_0x1b06e2.KC_DECIMAL_SEPARATOR = 179] = "KC_DECIMAL_SEPARATOR", _0x1b06e2[_0x1b06e2.KC_CURRENCY_UNIT = 180] = "KC_CURRENCY_UNIT", _0x1b06e2[_0x1b06e2.KC_CURRENCY_SUB_UNIT = 181] = "KC_CURRENCY_SUB_UNIT", _0x1b06e2[_0x1b06e2.KC_KP_LPAREN = 182] = "KC_KP_LPAREN", _0x1b06e2[_0x1b06e2.KC_KP_RPAREN = 183] = 'KC_KP_RPAREN', _0x1b06e2[_0x1b06e2.KC_KP_LCBRACKET = 184] = 'KC_KP_LCBRACKET', _0x1b06e2[_0x1b06e2.KC_KP_RCBRACKET = 185] = "KC_KP_RCBRACKET", _0x1b06e2[_0x1b06e2.KC_KP_TAB = 186] = "KC_KP_TAB", _0x1b06e2[_0x1b06e2.KC_KP_BSPACE = 187] = "KC_KP_BSPACE", _0x1b06e2[_0x1b06e2.KC_KP_A = 188] = "KC_KP_A", _0x1b06e2[_0x1b06e2.KC_KP_B = 189] = "KC_KP_B", _0x1b06e2[_0x1b06e2.KC_KP_C = 190] = "KC_KP_C", _0x1b06e2[_0x1b06e2.KC_KP_D = 191] = 'KC_KP_D', _0x1b06e2[_0x1b06e2.KC_KP_E = 192] = "KC_KP_E", _0x1b06e2[_0x1b06e2.KC_KP_F = 193] = "KC_KP_F", _0x1b06e2[_0x1b06e2.KC_KP_XOR = 194] = "KC_KP_XOR", _0x1b06e2[_0x1b06e2.KC_KP_HAT = 195] = 'KC_KP_HAT', _0x1b06e2[_0x1b06e2.KC_KP_PERC = 196] = "KC_KP_PERC", _0x1b06e2[_0x1b06e2.KC_KP_LT = 197] = "KC_KP_LT", _0x1b06e2[_0x1b06e2.KC_KP_GT = 198] = "KC_KP_GT", _0x1b06e2[_0x1b06e2.KC_KP_AND = 199] = "KC_KP_AND", _0x1b06e2[_0x1b06e2.KC_KP_LAZYAND = 200] = 'KC_KP_LAZYAND', _0x1b06e2[_0x1b06e2.KC_KP_OR = 201] = "KC_KP_OR", _0x1b06e2[_0x1b06e2.KC_KP_LAZYOR = 202] = 'KC_KP_LAZYOR', _0x1b06e2[_0x1b06e2.KC_KP_COLON = 203] = "KC_KP_COLON", _0x1b06e2[_0x1b06e2.KC_KP_HASH = 204] = "KC_KP_HASH", _0x1b06e2[_0x1b06e2.KC_KP_SPACE = 205] = "KC_KP_SPACE", _0x1b06e2[_0x1b06e2.KC_KP_ATMARK = 206] = 'KC_KP_ATMARK', _0x1b06e2[_0x1b06e2.KC_KP_EXCLAMATION = 207] = 'KC_KP_EXCLAMATION', _0x1b06e2[_0x1b06e2.KC_KP_MEM_STORE = 208] = "KC_KP_MEM_STORE", _0x1b06e2[_0x1b06e2.KC_KP_MEM_RECALL = 209] = "KC_KP_MEM_RECALL", _0x1b06e2[_0x1b06e2.KC_KP_MEM_CLEAR = 210] = "KC_KP_MEM_CLEAR", _0x1b06e2[_0x1b06e2.KC_KP_MEM_ADD = 211] = "KC_KP_MEM_ADD", _0x1b06e2[_0x1b06e2.KC_KP_MEM_SUB = 212] = "KC_KP_MEM_SUB", _0x1b06e2[_0x1b06e2.KC_KP_MEM_MUL = 213] = 'KC_KP_MEM_MUL', _0x1b06e2[_0x1b06e2.KC_KP_MEM_DIV = 214] = "KC_KP_MEM_DIV", _0x1b06e2[_0x1b06e2.KC_KP_PLUS_MINUS = 215] = "KC_KP_PLUS_MINUS", _0x1b06e2[_0x1b06e2.KC_KP_CLEAR = 216] = "KC_KP_CLEAR", _0x1b06e2[_0x1b06e2.KC_KP_CLEAR_ENTRY = 217] = "KC_KP_CLEAR_ENTRY", _0x1b06e2[_0x1b06e2.KC_KP_BINARY = 218] = "KC_KP_BINARY", _0x1b06e2[_0x1b06e2.KC_KP_OCTAL = 219] = "KC_KP_OCTAL", _0x1b06e2[_0x1b06e2.KC_KP_DECIMAL = 220] = "KC_KP_DECIMAL", _0x1b06e2[_0x1b06e2.KC_KP_HEXADECIMAL = 221] = "KC_KP_HEXADECIMAL", _0x1b06e2[_0x1b06e2.KC_LCTRL = 224] = 'KC_LCTRL', _0x1b06e2[_0x1b06e2.KC_LSHIFT = 225] = "KC_LSHIFT", _0x1b06e2[_0x1b06e2.KC_LALT = 226] = "KC_LALT", _0x1b06e2[_0x1b06e2.KC_LGUI = 227] = 'KC_LGUI', _0x1b06e2[_0x1b06e2.KC_RCTRL = 228] = 'KC_RCTRL', _0x1b06e2[_0x1b06e2.KC_RSHIFT = 229] = "KC_RSHIFT", _0x1b06e2[_0x1b06e2.KC_RALT = 230] = "KC_RALT", _0x1b06e2[_0x1b06e2.KC_RGUI = 231] = "KC_RGUI", _0x1b06e2))(mt || {}),
  pt = (_0x298f09 => (_0x298f09[_0x298f09.None = -1] = 'None', _0x298f09[_0x298f09.Modify_Key = 0] = 'Modify_Key', _0x298f09[_0x298f09.Normal_Key = 1] = 'Normal_Key', _0x298f09[_0x298f09.Media_Key = 2] = "Media_Key", _0x298f09[_0x298f09.Power_Key = 3] = "Power_Key", _0x298f09[_0x298f09.Mouse_Key = 4] = 'Mouse_Key', _0x298f09[_0x298f09.Move_XY = 5] = 'Move_XY', _0x298f09[_0x298f09.Scroll = 6] = "Scroll", _0x298f09))(pt || {}),
  yt = (_0x142f2f => (_0x142f2f[_0x142f2f.left = 1] = "left", _0x142f2f[_0x142f2f.right = 2] = 'right', _0x142f2f[_0x142f2f.middle = 4] = "middle", _0x142f2f[_0x142f2f.forward = 16] = "forward", _0x142f2f[_0x142f2f.back = 8] = "back", _0x142f2f))(yt || {}),
  wt = (_0x1c230a => (_0x1c230a[_0x1c230a.KeyDown = 0] = 'KeyDown', _0x1c230a[_0x1c230a.KeyUp = 1] = "KeyUp", _0x1c230a))(wt || {});
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
function Ot(_0x1ee509) {
  switch (_0x1ee509) {
    case "OSLeft":
      return "MetaLeft";
    case 'OSRight':
      return "MetaRight";
    case "Help":
      return "Insert";
    case "Shift":
      return "ShiftRight";
    default:
      return _0x1ee509;
  }
}
function xt(_0xe8ff5c) {
  const {
    code: _0x2ef60b,
    key: _0x564a32
  } = _0xe8ff5c;
  return _0x2ef60b || 'Shift' !== _0x564a32 ? _0x2ef60b : "ShiftRight";
}
function Kt(_0x2c59b3) {
  return ((null == _0x2c59b3 ? void 0 : _0x2c59b3.top) || '') + ((null == _0x2c59b3 ? void 0 : _0x2c59b3.center) || '') + ((null == _0x2c59b3 ? void 0 : _0x2c59b3.bottom) || '');
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
    'setup'(_0x4fd0ab) {
      const _0x363208 = _0x4fd0ab,
        _0x14d1f2 = a28_0x34ade5(null),
        _0x251f58 = a28_0x34ade5(_0x363208.defaultValue),
        _0x4774b9 = a28_0x34ade5(),
        _0x4850ad = a28_0x3ab4c6(() => {
          const _0x5a7739 = "keyboard" === _0x363208.type;
          return (!('text' === _0x363208.type) || !_0x251f58.value) && !(_0x5a7739 && _0x4774b9.value);
        });
      function _0x44d25f(_0x576f66) {
        _0x4774b9.value = Ot(_0x576f66.code) || xt(_0x576f66);
      }
      async function _0x4d2343(_0x5d676a) {
        _0x14d1f2.value.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: 'forwards'
        });
        setTimeout(() => {
          var _0x3e3708;
          null == (_0x3e3708 = _0x363208.callback) || _0x3e3708.call(_0x363208, _0x5d676a);
        }, 300);
      }
      function _0x182055() {
        if (!_0x363208.callback) return;
        if (_0x4850ad.value) return;
        const _0x23d862 = "keyboard" === _0x363208.type,
          _0x57470e = "text" === _0x363208.type;
        _0x23d862 && _0x4d2343(_0x4774b9.value);
        _0x57470e && _0x4d2343(_0x251f58.value);
      }
      function _0x362a79() {
        _0x363208.callback && _0x4d2343(void 0);
      }
      a28_0x417103(() => {
        "keyboard" === _0x363208.type && window.addEventListener("keydown", _0x44d25f);
      });
      a28_0x5164de(() => {
        'keyboard' === _0x363208.type && window.removeEventListener("keydown", _0x44d25f);
      });
      return (_0x332955, _0x37697d) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        ref_key: "promptRef",
        ref: _0x14d1f2,
        class: "flex fixed inset-0 z-[999] select-none opacity-0 animate-show"
      }, [a28_0x1683e7("div", {
        class: "inset-0 fixed bg-black/10 dark:bg-black/50",
        onClick: _0x362a79
      }), a28_0x1683e7("div", At, [a28_0x1683e7("div", It, [a28_0x1683e7("div", Pt, [a28_0x1683e7("div", Mt, [a28_0x1683e7("div", Tt, [_0x4fd0ab.title ? (a28_0x14ec8c(), a28_0x4334ed('h3', Rt, a28_0x3cd23b(_0x332955.$t(_0x4fd0ab.title)), 1)) : a28_0x41e27b('', true), _0x4fd0ab.content ? (a28_0x14ec8c(), a28_0x4334ed('div', Et, [a28_0x1683e7('p', Bt, a28_0x3cd23b(_0x332955.$t(_0x4fd0ab.content)), 1)])) : a28_0x41e27b('', true)]), a28_0x1683e7('div', Lt, ['text' === _0x4fd0ab.type ? a28_0x243693((a28_0x14ec8c(), a28_0x4334ed("input", {
        key: 0,
        'onUpdate:modelValue': _0x37697d[0] || (_0x37697d[0] = _0x5ba95c => _0x251f58.value = _0x5ba95c),
        placeholder: _0x332955.$t(_0x4fd0ab.placeholder),
        class: "border-[1px] bg-light-bg2 dark:bg-dark-bg2 border-light-border1 dark:border-dark-border1 w-full rounded-[5px] text-center py-[8px] px-[5px] transition-all duration-300 outline-0 focus:border-black focus:dark:border-dark-context1"
      }, null, 8, Ft)), [[a28_0x4a0fbe, _0x251f58.value]]) : a28_0x41e27b('', true), 'keyboard' === _0x4fd0ab.type ? (a28_0x14ec8c(), a28_0x4334ed("div", Nt, [_0x4774b9.value ? (a28_0x14ec8c(), a28_0x4334ed("div", zt, a28_0x3cd23b(_0x4774b9.value), 1)) : (a28_0x14ec8c(), a28_0x4334ed("div", Gt, a28_0x3cd23b(_0x332955.$t(_0x4fd0ab.placeholder)), 1))])) : a28_0x41e27b('', true)])])]), a28_0x1683e7("div", Ht, [_0x4fd0ab.hideOk ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed("button", {
        key: 0,
        class: a28_0x11002d([[_0x4850ad.value ? ["opacity-55", "cursor-not-allowed"] : []], "inline-flex w-full justify-center rounded-md bg-light-primary6 dark:bg-dark-primary6 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all transform duration-300 active:scale-95"]),
        type: "button",
        onClick: _0x182055
      }, a28_0x3cd23b(_0x332955.$t(_0x4fd0ab.okText)), 3)), _0x4fd0ab.hideCancel ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 1,
        class: 'mt-3\x20inline-flex\x20w-full\x20justify-center\x20rounded-md\x20bg-light-fill3\x20dark:bg-dark-fill3\x20px-3\x20py-2\x20text-sm\x20font-semibold\x20text-light-text1\x20dark:text-dark-text1\x20shadow-sm\x20transition-all\x20transform\x20duration-300\x20active:scale-95',
        type: "button",
        onClick: _0x362a79
      }, a28_0x3cd23b(_0x332955.$t(_0x4fd0ab.cancelText)), 1))])])])], 512));
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
    'setup'(_0x24fa20) {
      const _0x13cd87 = a28_0x34ade5(null),
        _0x6c43ff = _0x24fa20;
      async function _0x20b3c4() {
        _0x13cd87.value.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: "forwards"
        });
        setTimeout(() => {
          var _0x338997;
          null == (_0x338997 = _0x6c43ff.callback) || _0x338997.call(_0x6c43ff);
        }, 300);
      }
      a28_0x417103(() => {
        const _0x876658 = setTimeout(() => {
          clearTimeout(_0x876658);
          _0x20b3c4();
        }, 3000);
      });
      return (_0x27fa69, _0x326591) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        ref_key: 'promptRef',
        ref: _0x13cd87,
        class: 'fixed\x20top-10\x20left-0\x20right-0\x20z-[99]\x20flex\x20items-center\x20justify-center'
      }, [a28_0x1683e7('div', {
        class: a28_0x11002d(["border border-red-400 text-red-700 px-4 py-3 rounded relative shadow", {
          'bg-red-100': "warn" === _0x24fa20.type,
          'bg-yellow-100': "info" === _0x24fa20.type,
          'bg-green-100': "success" === _0x24fa20.type
        }]),
        role: "alert"
      }, [_0x24fa20.title ? (a28_0x14ec8c(), a28_0x4334ed('strong', Yt, a28_0x3cd23b(_0x27fa69.$t(_0x24fa20.title)), 1)) : a28_0x41e27b('', true), a28_0x1683e7("span", $t, a28_0x3cd23b(_0x27fa69.$t(_0x24fa20.content)), 1), qt, a28_0x1683e7("span", {
        class: "absolute top-0 bottom-0 right-0 px-4 py-3",
        onClick: _0x20b3c4
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
    'setup'(_0x131f8d) {
      const _0x12ff9c = _0x131f8d,
        _0x296b87 = a28_0x34ade5(null);
      async function _0x13977a(_0x4bb185) {
        _0x296b87.value.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 200,
          iterations: 1,
          fill: "forwards"
        });
        setTimeout(() => {
          var _0x1faab1;
          null == (_0x1faab1 = _0x12ff9c.callback) || _0x1faab1.call(_0x12ff9c, _0x4bb185);
        }, 300);
      }
      function _0x29a8fb() {
        _0x12ff9c.callback && _0x13977a(true);
      }
      function _0x49be0d() {
        _0x12ff9c.callback && _0x13977a(false);
      }
      return (_0x1ddcb7, _0x243685) => (a28_0x14ec8c(), a28_0x4334ed("div", {
        ref_key: "promptRef",
        ref: _0x296b87,
        class: "flex fixed inset-0 z-[999] select-none opacity-0 animate-show"
      }, [a28_0x1683e7('div', {
        class: "inset-0 fixed bg-black/40 dark:bg-black/70",
        onClick: _0x49be0d
      }), a28_0x1683e7("div", Zt, [a28_0x1683e7("div", Qt, [a28_0x1683e7('div', er, [a28_0x1683e7("div", tr, [a28_0x1683e7('div', rr, [a28_0x1683e7("div", sr, a28_0x3cd23b(_0x1ddcb7.$t("Officially recommended minimum computer configuration")), 1), a28_0x1683e7('div', nr, [a28_0x1683e7("div", ar, [a28_0x1683e7("div", ir, a28_0x3cd23b(_0x1ddcb7.$t("To ensure a high return on investment user experience, please ensure that your computer configuration meets the following minimum recommended configuration requirements to maximize mouse performance.")), 1), a28_0x1683e7('div', or, [a28_0x1683e7("div", ur, [a28_0x1683e7('div', cr, [a28_0x1683e7('p', null, a28_0x3cd23b(_0x1ddcb7.$t('Intel\x20platform')), 1), a28_0x1683e7('p', null, a28_0x3cd23b(_0x1ddcb7.$t("CPU: i79700k and above")), 1), a28_0x1683e7('p', null, a28_0x3cd23b(_0x1ddcb7.$t("Graphics card: NVIDIA RTX2060 and above")), 1), a28_0x1683e7('p', null, a28_0x3cd23b(_0x1ddcb7.$t("Memory: 16GB or above")), 1)]), lr, a28_0x1683e7("div", fr, [a28_0x1683e7('p', null, a28_0x3cd23b(_0x1ddcb7.$t('AMD\x20platform')), 1), a28_0x1683e7('p', null, a28_0x3cd23b(_0x1ddcb7.$t("CPU: 3600X and above")), 1), a28_0x1683e7('p', null, a28_0x3cd23b(_0x1ddcb7.$t('Graphics\x20card:\x20AMD\x20RX5700X\x20and\x20above')), 1), a28_0x1683e7('p', null, a28_0x3cd23b(_0x1ddcb7.$t('Memory:\x2016GB\x20or\x20above')), 1)])]), hr, a28_0x1683e7('div', dr, a28_0x3cd23b(_0x1ddcb7.$t("Monitor: Screen refresh rate above 240Hz")), 1)]), a28_0x1683e7("div", gr, [a28_0x27d2d4(a28_0x3cd23b(_0x1ddcb7.$t("* If there is a dropout or disconnection during the use of 8K polling rate.")) + '\x20', 1), a28_0x1683e7('p', null, a28_0x3cd23b(_0x1ddcb7.$t("You can consult customer service, and professional after-sales customer service will guide you in investigating the cause.")), 1)])])])])])]), a28_0x1683e7("div", mr, [_0x131f8d.hideOk ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 0,
        class: "inline-flex w-full justify-center rounded-md bg-light-primary6 dark:bg-dark-primary6 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all transform duration-300 active:scale-95",
        type: 'button',
        onClick: _0x29a8fb
      }, a28_0x3cd23b(_0x1ddcb7.$t(_0x131f8d.okText)), 1)), _0x131f8d.hideCancel ? a28_0x41e27b('', true) : (a28_0x14ec8c(), a28_0x4334ed('button', {
        key: 1,
        class: "mt-3 inline-flex w-full justify-center rounded-md bg-light-fill3 dark:bg-dark-fill3 px-3 py-2 text-sm font-semibold text-light-text1 dark:text-dark-text1 shadow-sm transition-all transform duration-300 active:scale-95",
        type: "button",
        onClick: _0x49be0d
      }, a28_0x3cd23b(_0x1ddcb7.$t(_0x131f8d.cancelText)), 1))])])])], 512));
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
function kr(_0x3a32c3, _0x5c400d, _0x3a3d6d) {
  if (vr.randomUUID && !_0x5c400d && !_0x3a32c3) return vr.randomUUID();
  const _0x2289a6 = (_0x3a32c3 = _0x3a32c3 || {}).random || (_0x3a32c3.rng || br)();
  _0x2289a6[6] = 15 & _0x2289a6[6] | 64;
  _0x2289a6[8] = 63 & _0x2289a6[8] | 128;
  if (_0x5c400d) {
    _0x3a3d6d = _0x3a3d6d || 0;
    for (let _0x5c86a6 = 0; _0x5c86a6 < 16; ++_0x5c86a6) _0x5c400d[_0x3a3d6d + _0x5c86a6] = _0x2289a6[_0x5c86a6];
    return _0x5c400d;
  }
  return function (_0x5c7494, _0x5269ce = 0) {
    return _r[_0x5c7494[_0x5269ce + 0]] + _r[_0x5c7494[_0x5269ce + 1]] + _r[_0x5c7494[_0x5269ce + 2]] + _r[_0x5c7494[_0x5269ce + 3]] + '-' + _r[_0x5c7494[_0x5269ce + 4]] + _r[_0x5c7494[_0x5269ce + 5]] + '-' + _r[_0x5c7494[_0x5269ce + 6]] + _r[_0x5c7494[_0x5269ce + 7]] + '-' + _r[_0x5c7494[_0x5269ce + 8]] + _r[_0x5c7494[_0x5269ce + 9]] + '-' + _r[_0x5c7494[_0x5269ce + 10]] + _r[_0x5c7494[_0x5269ce + 11]] + _r[_0x5c7494[_0x5269ce + 12]] + _r[_0x5c7494[_0x5269ce + 13]] + _r[_0x5c7494[_0x5269ce + 14]] + _r[_0x5c7494[_0x5269ce + 15]];
  }(_0x2289a6);
}
class ViewHelp {
  constructor(_0x274874, _0xda9b9a) {
    V(this, "mountNode", null);
    V(this, 'id', kr().replace(/-/g, ''));
    V(this, "app");
    V(this, "component");
    V(this, "qualifiedName");
    this.component = _0x274874;
    this.qualifiedName = _0xda9b9a;
  }
  static ["isExist"](_0x2d95fb) {
    return null != document.querySelector('[' + _0x2d95fb + ']');
  }
  ['show'](_0x4912ab) {
    this.app = a28_0x41d197(this.component, {
      ..._0x4912ab
    });
    this.app.use(a28_0x1fae92);
    this.mountNode = document.createElement('div');
    this.mountNode.setAttribute(this.qualifiedName, '');
    this.mountNode.id = this.id;
    this.app.mount(this.mountNode);
    a28_0x1fae92.global.locale.value = localStorage.getItem("__locale") || '';
    document.body.appendChild(this.mountNode);
  }
  ["syncShow"](_0x5aa6a8) {
    _0x5aa6a8 || (_0x5aa6a8 = {});
    return new Promise(_0x24e2d2 => {
      _0x5aa6a8.callback = _0x3a18d0 => {
        this.close();
        _0x24e2d2(_0x3a18d0);
      };
      this.show(_0x5aa6a8);
    });
  }
  ['close']() {
    var _0x107981, _0x31770e;
    null == (_0x107981 = this.app) || _0x107981.unmount();
    null == (_0x31770e = document.getElementById(this.id)) || _0x31770e.remove();
  }
}
class NotificationDialog extends ViewHelp {
  constructor() {
    super(qe, "prompt-dialog");
  }
  static ['create']() {
    return new NotificationDialog();
  }
  ["syncShow"](_0x59e03d) {
    return super.syncShow(_0x59e03d);
  }
}
class PromptDialog extends ViewHelp {
  constructor() {
    super(Ge, "prompt-dialog");
  }
  static ["create"]() {
    return new PromptDialog();
  }
  ["syncShow"](_0x16e596) {
    return super.syncShow(_0x16e596);
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
  ["setProgress"](_0x45a824) {
    this.exposedSetProgress(_0x45a824);
  }
  ['setTitle'](_0x8cb38f) {
    var _0xd4cae3;
    null == (_0xd4cae3 = this.exposedSetTitle) || _0xd4cae3.call(this, _0x8cb38f);
  }
  ['setContent'](_0x397032) {
    var _0x1a446c;
    null == (_0x1a446c = this.exposedSetContent) || _0x1a446c.call(this, _0x397032);
  }
  ["hidden"]() {
    this.exposedClose();
  }
  ['show'](_0xfe109f) {
    super.show({
      ..._0xfe109f,
      exposedSetTitle: _0x31bf0d => {
        this.exposedSetTitle = _0x31bf0d;
      },
      exposedSetProgress: _0x1bfe27 => {
        this.exposedSetProgress = _0x1bfe27;
      },
      exposedClose: _0x1e83d7 => {
        this.exposedClose = _0x1e83d7;
      },
      exposedSetContent: _0x4e5ee2 => {
        this.exposedSetContent = _0x4e5ee2;
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
  ["syncShow"](_0x1785c9) {
    return super.syncShow(_0x1785c9);
  }
}
class AdviceConfigDialog extends ViewHelp {
  constructor() {
    super(pr, 'config-dialog');
  }
  static ["create"]() {
    return new AdviceConfigDialog();
  }
  ["syncShow"](_0x373638) {
    return super.syncShow(_0x373638);
  }
}
class AlertDialog extends ViewHelp {
  constructor() {
    super(Xt, 'alert-dialog');
  }
  static ['create']() {
    return new AlertDialog();
  }
  ['syncShow'](_0x31b02c) {
    return super.syncShow(_0x31b02c);
  }
}
let Cr = (e = class {
  constructor(_0x4631b2, _0x317263, _0x2b0156 = 0) {
    V(this, "raw");
    let _0x3d34f8 = _0x4631b2 ? _0x4631b2.buffer : new ArrayBuffer(e.SIZE);
    this.raw = new DataView(_0x3d34f8);
    this.flag = 85;
    this.commandId = _0x317263;
  }
  static ['getData']() {
    return new DataView(new ArrayBuffer(e.SIZE));
  }
  get ["flag"]() {
    return this.raw.getUint8(0);
  }
  set ["flag"](_0x37ef2a) {
    this.raw.setUint8(0, _0x37ef2a);
  }
  get ["commandId"]() {
    return this.raw.getUint8(1);
  }
  set ["commandId"](_0x8ef1c7) {
    this.raw.setUint8(1, _0x8ef1c7);
  }
  get ["key"]() {
    return this.raw.getUint8(2);
  }
  set ["key"](_0x485708) {
    this.raw.setUint8(2, _0x485708);
  }
  get ["len"]() {
    return this.raw.getUint8(4);
  }
  set ['len'](_0x4dc18a) {
    this.raw.setUint8(4, _0x4dc18a);
  }
  get ["addr"]() {
    return this.raw.getUint16(5, true);
  }
  set ["addr"](_0x5913b3) {
    this.raw.setUint16(5, _0x5913b3, true);
  }
  ["toUint8Array"]() {
    const _0x6eba60 = Array.from(new Uint8Array(this.raw.buffer.slice(3, e.SIZE))).reduce((_0x508569, _0x4c1e61) => _0x508569 + _0x4c1e61, 0);
    this.raw.setUint8(3, 255 & _0x6eba60);
    return new Uint8Array(this.raw.buffer);
  }
  get ["baseOffset"]() {
    return e.baseOffset;
  }
  ["setRaw"](_0x24c9d8) {
    this.raw = _0x24c9d8;
    return this;
  }
  ["toStringTx"]() {
    return "requestCode: " + this.commandId + ',\x20commandId:\x20' + this.commandId;
  }
  ['toStringRx']() {
    return "requestCode: " + this.commandId + ", commandId: " + this.commandId;
  }
}, V(e, "SIZE", 64), V(e, "baseOffset", 8), e);
var Sr = (_0x78cf36 => (_0x78cf36[_0x78cf36.ReplyId = 170] = "ReplyId", _0x78cf36[_0x78cf36.DebugId = 160] = "DebugId", _0x78cf36[_0x78cf36.SyncId = 161] = "SyncId", _0x78cf36[_0x78cf36.FastCommunicationStart = 1] = "FastCommunicationStart", _0x78cf36[_0x78cf36.FastCommunicationStop = 2] = "FastCommunicationStop", _0x78cf36[_0x78cf36.GetInfo = 3] = "GetInfo", _0x78cf36[_0x78cf36.GetBase = 4] = 'GetBase', _0x78cf36[_0x78cf36.GetFunc = 5] = "GetFunc", _0x78cf36[_0x78cf36.SetFunc = 6] = "SetFunc", _0x78cf36[_0x78cf36.GetDefaultKeyMatrix = 7] = 'GetDefaultKeyMatrix', _0x78cf36[_0x78cf36.GetUseKeyMatrix = 8] = "GetUseKeyMatrix", _0x78cf36[_0x78cf36.SetUseKeyMatrix = 9] = "SetUseKeyMatrix", _0x78cf36[_0x78cf36.GetLedDefine = 10] = "GetLedDefine", _0x78cf36[_0x78cf36.SetLedDefine = 11] = "SetLedDefine", _0x78cf36[_0x78cf36.GetMacro = 12] = "GetMacro", _0x78cf36[_0x78cf36.SetMacro = 13] = 'SetMacro', _0x78cf36[_0x78cf36.FactoryDataReset = 238] = "FactoryDataReset", _0x78cf36[_0x78cf36.GetKeyTriggerTravel = 160] = 'GetKeyTriggerTravel', _0x78cf36[_0x78cf36.SetKeyTriggerTravel = 161] = "SetKeyTriggerTravel", _0x78cf36[_0x78cf36.GetDskInfo = 162] = "GetDskInfo", _0x78cf36[_0x78cf36.SetDskInfo = 163] = 'SetDskInfo', _0x78cf36[_0x78cf36.GetMtKeyInfo = 164] = 'GetMtKeyInfo', _0x78cf36[_0x78cf36.SetMtKeyInfo = 165] = "SetMtKeyInfo", _0x78cf36[_0x78cf36.GetTglKeyInfo = 166] = "GetTglKeyInfo", _0x78cf36[_0x78cf36.SetTglKeyInfo = 167] = "SetTglKeyInfo", _0x78cf36[_0x78cf36.StartCalibration = 168] = "StartCalibration", _0x78cf36[_0x78cf36.EndCalibration = 169] = "EndCalibration", _0x78cf36[_0x78cf36.GetCalibration = 170] = 'GetCalibration', _0x78cf36[_0x78cf36.GetAppDefine = 241] = "GetAppDefine", _0x78cf36[_0x78cf36.SetAppDefine = 242] = "SetAppDefine", _0x78cf36))(Sr || {}),
  Ur = (_0x156e34 => (_0x156e34[_0x156e34.null = 0] = "null", _0x156e34[_0x156e34.general = 16] = 'general', _0x156e34[_0x156e34.oksRt = 20] = "oksRt", _0x156e34[_0x156e34.mouse = 32] = "mouse", _0x156e34[_0x156e34.mouseWheel = 33] = "mouseWheel", _0x156e34[_0x156e34.mouseSwing = 34] = 'mouseSwing', _0x156e34[_0x156e34.mouseXY = 35] = 'mouseXY', _0x156e34[_0x156e34.consumer = 48] = "consumer", _0x156e34[_0x156e34.system = 64] = "system", _0x156e34[_0x156e34.exe = 80] = "exe", _0x156e34[_0x156e34.web = 96] = "web", _0x156e34[_0x156e34.macro = 112] = "macro", _0x156e34[_0x156e34.keyboardWheel = 128] = "keyboardWheel", _0x156e34[_0x156e34.dsk = 144] = 'dsk', _0x156e34[_0x156e34.tgl = 145] = 'tgl', _0x156e34[_0x156e34.mtk = 146] = "mtk", _0x156e34[_0x156e34.rs = 147] = 'rs', _0x156e34[_0x156e34.socd = 148] = "socd", _0x156e34[_0x156e34.oks = 149] = "oks", _0x156e34[_0x156e34.function = 240] = "function", _0x156e34))(Ur || {}),
  Dr = (_0x2f1df0 => (_0x2f1df0[_0x2f1df0.RWin = 128] = "RWin", _0x2f1df0[_0x2f1df0.RAlt = 64] = "RAlt", _0x2f1df0[_0x2f1df0.RShift = 32] = 'RShift', _0x2f1df0[_0x2f1df0.RCtrl = 16] = "RCtrl", _0x2f1df0[_0x2f1df0.LWin = 8] = "LWin", _0x2f1df0[_0x2f1df0.LAlt = 4] = "LAlt", _0x2f1df0[_0x2f1df0.LShift = 2] = 'LShift', _0x2f1df0[_0x2f1df0.LCtrl = 1] = 'LCtrl', _0x2f1df0))(Dr || {}),
  Or = (_0x3e974e => (_0x3e974e[_0x3e974e.LastWin = 0] = 'LastWin', _0x3e974e[_0x3e974e.OwnWin = 16] = "OwnWin", _0x3e974e[_0x3e974e.BondWin = 32] = "BondWin", _0x3e974e[_0x3e974e.Nature = 48] = "Nature", _0x3e974e))(Or || {}),
  xr = (_0x2bd336 => (_0x2bd336[_0x2bd336.MagneticWhite = 1] = 'MagneticWhite', _0x2bd336[_0x2bd336.MagneticJade = 2] = "MagneticJade", _0x2bd336[_0x2bd336.Magneto = 3] = "Magneto", _0x2bd336[_0x2bd336.MagneticAmber = 4] = 'MagneticAmber', _0x2bd336[_0x2bd336.MagneticJadePro = 5] = 'MagneticJadePro', _0x2bd336[_0x2bd336.Leviathan = 6] = 'Leviathan', _0x2bd336[_0x2bd336.Uranus = 7] = 'Uranus', _0x2bd336[_0x2bd336.MagneticKingGrainGold = 8] = "MagneticKingGrainGold", _0x2bd336[_0x2bd336.MagneticJadeEsports = 9] = 'MagneticJadeEsports', _0x2bd336[_0x2bd336.MagnetoGaming = 10] = "MagnetoGaming", _0x2bd336[_0x2bd336.MagnetoKing = 11] = 'MagnetoKing', _0x2bd336[_0x2bd336.MagneticGod = 12] = "MagneticGod", _0x2bd336[_0x2bd336.PhantomGod = 13] = 'PhantomGod', _0x2bd336[_0x2bd336.AuroraMagnetic = 14] = "AuroraMagnetic", _0x2bd336))(xr || {});
const Kr = new Error('request\x20for\x20lock\x20canceled');
var Ar = function (_0x42f848, _0x19c829, _0x1fb295, _0x172cf9) {
  return new (_0x1fb295 || (_0x1fb295 = Promise))(function (_0x14b789, _0x52df36) {
    function _0x21a26d(_0x5720e4) {
      try {
        _0x304cb1(_0x172cf9.next(_0x5720e4));
      } catch (_0x4fd7cc) {
        _0x52df36(_0x4fd7cc);
      }
    }
    function _0x3b77e9(_0x4eab45) {
      try {
        _0x304cb1(_0x172cf9.throw(_0x4eab45));
      } catch (_0x1f9898) {
        _0x52df36(_0x1f9898);
      }
    }
    function _0x304cb1(_0x498753) {
      var _0x30514a;
      if (_0x498753.done) _0x14b789(_0x498753.value);else (_0x30514a = _0x498753.value, _0x30514a instanceof _0x1fb295 ? _0x30514a : new _0x1fb295(function (_0x170754) {
        _0x170754(_0x30514a);
      })).then(_0x21a26d, _0x3b77e9);
    }
    _0x304cb1((_0x172cf9 = _0x172cf9.apply(_0x42f848, _0x19c829 || [])).next());
  });
};
class Semaphore {
  constructor(_0x4748b9, _0x4694ba = Kr) {
    this._value = _0x4748b9;
    this._cancelError = _0x4694ba;
    this._weightedQueues = [];
    this._weightedWaiters = [];
  }
  ['acquire'](_0x9eeaaa = 1) {
    if (_0x9eeaaa <= 0) throw new Error('invalid\x20weight\x20' + _0x9eeaaa + ": must be positive");
    return new Promise((_0x429ea7, _0x1b2351) => {
      this._weightedQueues[_0x9eeaaa - 1] || (this._weightedQueues[_0x9eeaaa - 1] = []);
      this._weightedQueues[_0x9eeaaa - 1].push({
        resolve: _0x429ea7,
        reject: _0x1b2351
      });
      this._dispatch();
    });
  }
  ["runExclusive"](_0x2bdf85, _0x13c693 = 1) {
    return Ar(this, void 0, void 0, function* () {
      const [_0x3540f1, _0xe3f44a] = yield this.acquire(_0x13c693);
      try {
        return yield _0x2bdf85(_0x3540f1);
      } finally {
        _0xe3f44a();
      }
    });
  }
  ['waitForUnlock'](_0x2db912 = 1) {
    if (_0x2db912 <= 0) throw new Error("invalid weight " + _0x2db912 + ':\x20must\x20be\x20positive');
    return new Promise(_0x5404f1 => {
      this._weightedWaiters[_0x2db912 - 1] || (this._weightedWaiters[_0x2db912 - 1] = []);
      this._weightedWaiters[_0x2db912 - 1].push(_0x5404f1);
      this._dispatch();
    });
  }
  ["isLocked"]() {
    return this._value <= 0;
  }
  ["getValue"]() {
    return this._value;
  }
  ["setValue"](_0x3eb07f) {
    this._value = _0x3eb07f;
    this._dispatch();
  }
  ["release"](_0x2e681f = 1) {
    if (_0x2e681f <= 0) throw new Error("invalid weight " + _0x2e681f + ": must be positive");
    this._value += _0x2e681f;
    this._dispatch();
  }
  ["cancel"]() {
    this._weightedQueues.forEach(_0x5d7d24 => _0x5d7d24.forEach(_0x47fc82 => _0x47fc82.reject(this._cancelError)));
    this._weightedQueues = [];
  }
  ["_dispatch"]() {
    var _0x1e60a5;
    for (let _0x1ae46 = this._value; _0x1ae46 > 0; _0x1ae46--) {
      const _0x1483be = null === (_0x1e60a5 = this._weightedQueues[_0x1ae46 - 1]) || void 0 === _0x1e60a5 ? void 0 : _0x1e60a5.shift();
      if (!_0x1483be) continue;
      const _0x546e0b = this._value,
        _0x587a18 = _0x1ae46;
      this._value -= _0x1ae46;
      _0x1ae46 = this._value + 1;
      _0x1483be.resolve([_0x546e0b, this._newReleaser(_0x587a18)]);
    }
    this._drainUnlockWaiters();
  }
  ["_newReleaser"](_0x1d52bb) {
    let _0x1de693 = false;
    return () => {
      _0x1de693 || (_0x1de693 = true, this.release(_0x1d52bb));
    };
  }
  ['_drainUnlockWaiters']() {
    for (let _0x28522d = this._value; _0x28522d > 0; _0x28522d--) this._weightedWaiters[_0x28522d - 1] && (this._weightedWaiters[_0x28522d - 1].forEach(_0x5170c2 => _0x5170c2()), this._weightedWaiters[_0x28522d - 1] = []);
  }
}
var Ir = function (_0x30c369, _0x56ef7a, _0x2e8c53, _0x40ad28) {
  return new (_0x2e8c53 || (_0x2e8c53 = Promise))(function (_0x4c1a07, _0x5073a9) {
    function _0x569cd4(_0x8fd12d) {
      try {
        _0x4d6361(_0x40ad28.next(_0x8fd12d));
      } catch (_0x440107) {
        _0x5073a9(_0x440107);
      }
    }
    function _0x28297c(_0x2c17d4) {
      try {
        _0x4d6361(_0x40ad28.throw(_0x2c17d4));
      } catch (_0x200f26) {
        _0x5073a9(_0x200f26);
      }
    }
    function _0x4d6361(_0x1f5d61) {
      var _0x257fc9;
      if (_0x1f5d61.done) _0x4c1a07(_0x1f5d61.value);else (_0x257fc9 = _0x1f5d61.value, _0x257fc9 instanceof _0x2e8c53 ? _0x257fc9 : new _0x2e8c53(function (_0x43ca0c) {
        _0x43ca0c(_0x257fc9);
      })).then(_0x569cd4, _0x28297c);
    }
    _0x4d6361((_0x40ad28 = _0x40ad28.apply(_0x30c369, _0x56ef7a || [])).next());
  });
};
class Mutex {
  constructor(_0x2b3f83) {
    this._semaphore = new Semaphore(1, _0x2b3f83);
  }
  ["acquire"]() {
    return Ir(this, void 0, void 0, function* () {
      const [, _0x5e8fde] = yield this._semaphore.acquire();
      return _0x5e8fde;
    });
  }
  ['runExclusive'](_0x22dcbe) {
    return this._semaphore.runExclusive(() => _0x22dcbe());
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
  constructor(_0x261ace) {
    V(this, "endpointPath", kr());
    V(this, "customData", {});
    this.device = _0x261ace;
    _0x261ace.oninputreport = this.inputReportListener.bind(this);
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
  ['setCustomData'](_0x412f4c) {
    this.customData = _0x412f4c;
  }
  ["getCustomData"]() {
    return this.customData;
  }
  ["inputReportListener"](_0x1a20ab) {}
}
class NoticeEvent extends Event {
  constructor() {
    super(...arguments);
    V(this, "notice");
  }
  set ["data"](_0x37b94d) {
    this.notice = _0x37b94d;
  }
  get ["data"]() {
    return this.notice;
  }
}
function Pr(_0x342002, _0x421817) {
  const _0x1835cb = new NoticeEvent(_0x342002, {
    bubbles: true
  });
  _0x1835cb.data = _0x421817;
  globalThis.dispatchEvent(_0x1835cb);
}
function Mr(_0x1c47e6, _0x1ca4f6) {
  globalThis.addEventListener(_0x1c47e6, _0x1ca4f6);
}
function Tr(_0x137296, _0x1c5034) {
  globalThis.removeEventListener(_0x137296, _0x1c5034);
}
let Rr = class KeyAction {
  constructor(_0x2d56d7, _0x3838bc) {
    V(this, 'dataView');
    V(this, "offset");
    this.dataView = _0x2d56d7;
    this.offset = _0x3838bc;
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
  static ["createDataView"](_0x10bb73, _0x681184, _0x2dd21d) {
    const _0x3aaa9a = new DataView(new ArrayBuffer(3));
    _0x3aaa9a.setUint8(0, _0x10bb73);
    _0x3aaa9a.setUint8(1, _0x681184);
    _0x3aaa9a.setUint8(2, _0x2dd21d);
    return _0x3aaa9a;
  }
  static ['fromDataView'](_0x4faedb, _0x2331b6) {
    switch (_0x4faedb.getUint8(_0x2331b6)) {
      case Ur.null:
        return new Br(_0x4faedb, _0x2331b6);
      case Ur.general:
        return new Vr(_0x4faedb, _0x2331b6);
      case Ur.mouse:
        return new Nr(_0x4faedb, _0x2331b6);
      case Ur.mouseWheel:
        return new zr(_0x4faedb, _0x2331b6);
      case Ur.mouseSwing:
        return new Wr(_0x4faedb, _0x2331b6);
      case Ur.mouseXY:
        return new Yr(_0x4faedb, _0x2331b6);
      case Ur.consumer:
        return new qr(_0x4faedb, _0x2331b6);
      case Ur.system:
        return new Xr(_0x4faedb, _0x2331b6);
      case Ur.exe:
        return new Qr(_0x4faedb, _0x2331b6);
      case Ur.web:
        return new ts(_0x4faedb, _0x2331b6);
      case Ur.macro:
        return new ss(_0x4faedb, _0x2331b6);
      case Ur.keyboardWheel:
        return new as(_0x4faedb, _0x2331b6);
      case Ur.dsk:
        return new os(_0x4faedb, _0x2331b6);
      case Ur.tgl:
        return new cs(_0x4faedb, _0x2331b6);
      case Ur.mtk:
        return new fs(_0x4faedb, _0x2331b6);
      case Ur.function:
        return new bs(_0x4faedb, _0x2331b6);
      case Ur.rs:
        return new ds(_0x4faedb, _0x2331b6);
      case Ur.socd:
        return new ms(_0x4faedb, _0x2331b6);
      case Ur.oks:
        return new ys(_0x4faedb, _0x2331b6);
      default:
        return new KeyAction(_0x4faedb, _0x2331b6);
    }
  }
  ["toNumArr"]() {
    return Array.from(new Uint8Array(this.dataView.buffer.slice(this.offset, this.offset + 3)));
  }
  ['toString']() {
    return Array.from([this.keyClass, this.code, this.code1]).map(_0x456e54 => _0x456e54.toString().padStart(2, '0')).join('');
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
  static ["create"](_0x5d5649, _0x5b0ab6) {
    return new _KeyGeneralAction(Rr.createDataView(_KeyGeneralAction.TYPE, _0x5d5649, _0x5b0ab6), 0);
  }
};
V(Lr, "TYPE", Ur.general);
let Vr = Lr;
const Fr = class _KeyMouseAction extends Rr {
  get ["i18nText"]() {
    return "key.mouseKeyboard";
  }
  static ["create"](_0x4646e1, _0x5788fe) {
    return new _KeyMouseAction(Rr.createDataView(_KeyMouseAction.TYPE, _0x4646e1, _0x5788fe), 0);
  }
};
V(Fr, 'TYPE', Ur.mouse);
let Nr = Fr;
const Gr = class _KeyMouseWheelAction extends Rr {
  get ["i18nText"]() {
    return "key.wheel";
  }
  static ["create"](_0x2bd9da, _0x1008ae) {
    return new _KeyMouseWheelAction(Rr.createDataView(_KeyMouseWheelAction.TYPE, _0x2bd9da, _0x1008ae), 0);
  }
};
V(Gr, "TYPE", Ur.mouseWheel);
let zr = Gr;
const Hr = class _KeyMouseSwingAction extends Rr {
  get ["i18nText"]() {
    return "key.swing";
  }
  static ["create"](_0x45afb0, _0x3e2aef) {
    return new _KeyMouseSwingAction(Rr.createDataView(_KeyMouseSwingAction.TYPE, _0x45afb0, _0x3e2aef), 0);
  }
};
V(Hr, "TYPE", Ur.mouseSwing);
let Wr = Hr;
const jr = class _KeyMouseXYAction extends Rr {
  get ["i18nText"]() {
    return "key.mouseXY";
  }
  static ["create"](_0x987d42, _0x23eb29) {
    return new _KeyMouseXYAction(Rr.createDataView(_KeyMouseXYAction.TYPE, _0x987d42, _0x23eb29), 0);
  }
};
V(jr, "TYPE", Ur.mouseXY);
let Yr = jr;
const $r = class _KeyConsumerAction extends Rr {
  get ['i18nText']() {
    return "key.consumer";
  }
  static ["create"](_0x21f53f, _0x416dfb) {
    return new _KeyConsumerAction(Rr.createDataView(_KeyConsumerAction.TYPE, _0x21f53f, _0x416dfb), 0);
  }
};
V($r, "TYPE", Ur.consumer);
let qr = $r;
const Jr = class _KeySystemAction extends Rr {
  get ["i18nText"]() {
    return "key.system";
  }
  static ["create"](_0x1ca89b, _0x3fc4c6) {
    return new _KeySystemAction(Rr.createDataView(_KeySystemAction.TYPE, _0x1ca89b, _0x3fc4c6), 0);
  }
};
V(Jr, 'TYPE', Ur.system);
let Xr = Jr;
const Zr = class _KeyExeAction extends Rr {
  get ["i18nText"]() {
    return "key.exe";
  }
  static ["create"](_0x5a4bd0, _0x2a3c50) {
    return new _KeyExeAction(Rr.createDataView(_KeyExeAction.TYPE, _0x5a4bd0, _0x2a3c50), 0);
  }
};
V(Zr, "TYPE", Ur.exe);
let Qr = Zr;
const es = class _KeyWebAction extends Rr {
  get ["i18nText"]() {
    return "key.web";
  }
  static ["create"](_0xfa38f2, _0x2f0237) {
    return new _KeyWebAction(Rr.createDataView(_KeyWebAction.TYPE, _0xfa38f2, _0x2f0237), 0);
  }
};
V(es, "TYPE", Ur.web);
let ts = es;
const rs = class _KeyMacroAction extends Rr {
  get ['i18nText']() {
    return "key.macro";
  }
  static ["create"](_0x5c1bfc, _0xf66c8b) {
    return new _KeyMacroAction(Rr.createDataView(_KeyMacroAction.TYPE, _0x5c1bfc, _0xf66c8b), 0);
  }
};
V(rs, "TYPE", Ur.macro);
let ss = rs;
const ns = class _KeyKeyboardWheelAction extends Rr {
  get ["i18nText"]() {
    return "key.keyboardWheel";
  }
  static ['create'](_0x2fa9c8, _0x25a508) {
    return new _KeyKeyboardWheelAction(Rr.createDataView(_KeyKeyboardWheelAction.TYPE, _0x2fa9c8, _0x25a508), 0);
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
  static ["create"](_0x434796) {
    return new _KeyDskAction(Rr.createDataView(_KeyDskAction.TYPE, _0x434796, 0), 0);
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
  static ["create"](_0x364e51) {
    return new _KeyTglAction(Rr.createDataView(_KeyTglAction.TYPE, _0x364e51, 0), 0);
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
  static ["create"](_0x27532e, _0x4e79f0) {
    return new _KeyMtkAction(Rr.createDataView(_KeyMtkAction.TYPE, _0x27532e, _0x4e79f0), 0);
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
  static ["create"](_0x331b09, _0x4f792b) {
    return new _KeyRsAction(Rr.createDataView(_KeyRsAction.TYPE, _0x331b09, _0x4f792b), 0);
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
  static ["create"](_0x1b1824, _0x146a53) {
    return new _KeySocdAction(Rr.createDataView(_KeySocdAction.TYPE, _0x1b1824, _0x146a53), 0);
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
  static ["create"](_0x3d6d31, _0x5a931d) {
    return new _KeyOksAction(Rr.createDataView(_KeyOksAction.TYPE, _0x3d6d31, _0x5a931d), 0);
  }
};
V(ps, "TYPE", Ur.oks);
let ys = ps;
const ws = class _KeyFunctionAction extends Rr {
  get ["i18nText"]() {
    return 'key.function';
  }
  static ['create'](_0x24b4e4, _0xad2bcc = 0) {
    return new _KeyFunctionAction(Rr.createDataView(_KeyFunctionAction.TYPE, _0x24b4e4, _0xad2bcc), 0);
  }
};
V(ws, 'TYPE', Ur.function);
let bs = ws,
  _s = (t = class {
    constructor(_0x29767b, _0xb5b833) {
      V(this, "raw");
      V(this, 'offset');
      this.raw = _0x29767b;
      this.offset = _0xb5b833;
    }
    static ["create"]() {
      return new t(new DataView(new ArrayBuffer(t.size)), 0);
    }
    static ["fromDataView"](_0x4e8126, _0x241fbc) {
      return new t(_0x4e8126, _0x241fbc);
    }
    get ["delay"]() {
      return this.raw.getUint16(this.offset, true);
    }
    set ["delay"](_0x17f723) {
      this.raw.setUint16(this.offset, _0x17f723, true);
    }
    get ["type"]() {
      return 31 & this.raw.getUint8(this.offset + 2);
    }
    set ["type"](_0x4c4344) {
      const _0x11ecfd = 248 & this.raw.getUint8(this.offset + 2) | 31 & _0x4c4344;
      this.raw.setUint8(this.offset + 2, _0x11ecfd);
    }
    get ["keyStatus"]() {
      return this.raw.getUint8(this.offset + 2) >> 6 & 1;
    }
    set ['keyStatus'](_0x595227) {
      const _0x48a5b0 = this.raw.getUint8(this.offset + 2);
      this.raw.setUint8(this.offset + 2, 63 & _0x48a5b0 | (1 & _0x595227) << 6);
      this.type = _0x595227 >= 224 && _0x595227 <= 231 ? 1 : 2;
    }
    get ["end"]() {
      return this.raw.getUint8(this.offset + 2) >> 7 & 1;
    }
    set ["end"](_0x3b7e48) {
      const _0x45d5e6 = this.raw.getUint8(this.offset + 2);
      this.raw.setUint8(this.offset + 2, 127 & _0x45d5e6 | (1 & _0x3b7e48) << 7);
    }
    get ["keyCode"]() {
      return this.raw.getUint8(this.offset + 3);
    }
    set ['keyCode'](_0x4866c4) {
      this.raw.setUint8(this.offset + 3, _0x4866c4);
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
  constructor(_0x476dd0, _0x4766c9) {
    V(this, "raw");
    V(this, "offset");
    this.raw = _0x476dd0;
    this.offset = _0x4766c9;
  }
  get ["point1"]() {
    return this.raw.getUint8(this.offset);
  }
  set ["point1"](_0x1793b9) {
    this.raw.setUint8(this.offset, _0x1793b9);
  }
  get ["point2"]() {
    return this.raw.getUint8(this.offset + 1);
  }
  set ["point2"](_0x1342dd) {
    this.raw.setUint8(this.offset + 1, _0x1342dd);
  }
  get ["point3"]() {
    return this.raw.getUint8(this.offset + 2);
  }
  set ['point3'](_0xde5563) {
    this.raw.setUint8(this.offset + 2, _0xde5563);
  }
  get ['point4']() {
    return this.raw.getUint8(this.offset + 3);
  }
  set ["point4"](_0x4a55c4) {
    this.raw.setUint8(this.offset + 3, _0x4a55c4);
  }
  get ["subset"]() {
    return Array.from({
      length: 4
    }, (_0x300e21, _0x22ef86) => Ss.fromDataView(this.raw, this.offset + 4 + 5 * _0x22ef86));
  }
  set ["subset"](_0x586779) {
    for (let _0x22f61d = 0; _0x22f61d < _0x586779.length; _0x22f61d++) {
      const _0x35b45e = _0x586779[_0x22f61d].buffer;
      for (let _0x4f50d7 = 0; _0x4f50d7 < _0x35b45e.byteLength; _0x4f50d7++) this.raw.setUint8(this.offset + 4 + 5 * _0x22f61d + _0x4f50d7, _0x35b45e.getUint8(_0x4f50d7));
    }
  }
  static ['fromDataView'](_0x59fe64, _0x9f9493) {
    return new _DynamicStrokeAction(_0x59fe64, _0x9f9493);
  }
  static ["create"](_0x133242, _0x48a0d4) {
    const _0x260d93 = new _DynamicStrokeAction(new DataView(new ArrayBuffer(_DynamicStrokeAction.size)), 0),
      [_0x345139, _0x238ebe, _0x44fa1f, _0x34add1] = _0x133242;
    _0x260d93.subset = _0x48a0d4;
    _0x260d93.point1 = _0x345139;
    _0x260d93.point2 = _0x238ebe;
    _0x260d93.point3 = _0x44fa1f;
    _0x260d93.point4 = _0x34add1;
    return _0x260d93;
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
      subset: this.subset.map(_0x50e6ac => _0x50e6ac.toJSON())
    };
  }
};
V(vs, 'size', 24);
let ks = vs;
const Cs = class _DynamicStrokeActionSubset {
  constructor(_0x213a13, _0x452d52) {
    V(this, 'raw');
    V(this, "offset");
    this.raw = _0x213a13;
    this.offset = _0x452d52;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.offset, this.offset + _DynamicStrokeActionSubset.size));
  }
  static ['fromDataView'](_0x4a46a8, _0x2e234d) {
    return new _DynamicStrokeActionSubset(_0x4a46a8, _0x2e234d);
  }
  get ['statusArray']() {
    const _0x5992f8 = this.raw.getUint16(this.offset + 3, true);
    return [_0x5992f8 >> 0 & 1, _0x5992f8 >> 1 & 1, _0x5992f8 >> 2 & 1, _0x5992f8 >> 3 & 1, _0x5992f8 >> 4 & 1, _0x5992f8 >> 5 & 1, _0x5992f8 >> 6 & 1, _0x5992f8 >> 7 & 1, _0x5992f8 >> 8 & 1, _0x5992f8 >> 9 & 1];
  }
  get ["status"]() {
    const _0x3b589f = this.raw.getUint16(this.offset + 3, true);
    return {
      bit0: _0x3b589f >> 0 & 1,
      bit1: _0x3b589f >> 1 & 1,
      bit2: _0x3b589f >> 2 & 1,
      bit3: _0x3b589f >> 3 & 1,
      bit4: _0x3b589f >> 4 & 1,
      bit5: _0x3b589f >> 5 & 1,
      bit6: _0x3b589f >> 6 & 1,
      bit7: _0x3b589f >> 7 & 1,
      bit8: _0x3b589f >> 8 & 1,
      bit9: _0x3b589f >> 9 & 1
    };
  }
  set ["status"](_0x1e6713) {
    this.raw.setUint16(this.offset + 3, (_0x1e6713.bit0 || 0) << 0 | (_0x1e6713.bit1 || 0) << 1 | (_0x1e6713.bit2 || 0) << 2 | (_0x1e6713.bit3 || 0) << 3 | (_0x1e6713.bit4 || 0) << 4 | (_0x1e6713.bit5 || 0) << 5 | (_0x1e6713.bit6 || 0) << 6 | (_0x1e6713.bit7 || 0) << 7 | (_0x1e6713.bit8 || 0) << 8 | (_0x1e6713.bit9 || 0) << 9, true);
  }
  get ['keyCode']() {
    return Rr.fromDataView(this.raw, this.offset);
  }
  set ['keyCode'](_0x8a4592) {
    this.raw.setUint8(0, _0x8a4592.keyClass);
    this.raw.setUint8(1, _0x8a4592.code);
    this.raw.setUint8(2, _0x8a4592.code1);
  }
  static ['create'](_0x4b27c6, _0x4984dc) {
    const _0x21a6f6 = new _DynamicStrokeActionSubset(new DataView(new ArrayBuffer(_DynamicStrokeActionSubset.size)), 0);
    _0x21a6f6.status = _0x4b27c6;
    _0x21a6f6.keyCode = _0x4984dc;
    return _0x21a6f6;
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
  constructor(_0x31ace9, _0x1f4e91) {
    V(this, "raw");
    V(this, 'offset');
    this.raw = _0x31ace9;
    this.offset = _0x1f4e91;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelAction.size));
  }
  get ["magneticShaftType"]() {
    return this.raw.getUint8(this.offset);
  }
  set ["magneticShaftType"](_0x32e8b4) {
    this.raw.setUint8(this.offset, _0x32e8b4);
  }
  get ["triggerType"]() {
    return this.raw.getUint8(this.offset + 1);
  }
  set ["triggerType"](_0x3c66db) {
    this.raw.setUint8(this.offset + 1, _0x3c66db);
  }
  get ['point']() {
    return 511 & this.raw.getUint16(this.offset + 2, true);
  }
  set ["point"](_0x55b818) {
    const _0x2b6ac5 = this.raw.getUint16(this.offset + 2, true);
    this.raw.setUint16(this.offset + 2, -512 & _0x2b6ac5 | 511 & _0x55b818, true);
  }
  get ["pressRT"]() {
    return 511 & this.raw.getUint16(this.offset + 4, true);
  }
  set ["pressRT"](_0x2ea19e) {
    const _0x1cb76e = this.raw.getUint16(this.offset + 4, true);
    this.raw.setUint16(this.offset + 4, -512 & _0x1cb76e | 511 & _0x2ea19e, true);
  }
  get ["pressTheDeadZone"]() {
    return (65024 & this.raw.getUint16(this.offset + 4, true)) >> 9;
  }
  set ["pressTheDeadZone"](_0x56f7f8) {
    const _0x101399 = this.raw.getUint16(this.offset + 4, true);
    this.raw.setUint16(this.offset + 4, -65025 & _0x101399 | _0x56f7f8 << 9 & 65024, true);
  }
  get ["releaseRT"]() {
    return 511 & this.raw.getUint16(this.offset + 6, true);
  }
  set ["releaseRT"](_0x8bf9a2) {
    const _0x338ff3 = this.raw.getUint16(this.offset + 6, true);
    this.raw.setUint16(this.offset + 6, -512 & _0x338ff3 | 511 & _0x8bf9a2, true);
  }
  get ["releaseTheDeadZone"]() {
    return (65024 & this.raw.getUint16(this.offset + 6, true)) >> 9;
  }
  set ["releaseTheDeadZone"](_0x5173bf) {
    const _0x314a5c = this.raw.getUint16(this.offset + 6, true);
    this.raw.setUint16(this.offset + 6, -65025 & _0x314a5c | _0x5173bf << 9 & 65024, true);
  }
  static ["create"]() {
    return new _KeyTriggerTravelAction(new DataView(new ArrayBuffer(_KeyTriggerTravelAction.size)), 0);
  }
  static ['fromDataView'](_0x35c574, _0x380115) {
    return new _KeyTriggerTravelAction(_0x35c574, _0x380115);
  }
  ['toNumArr']() {
    return Array.from(new Uint8Array(this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelAction.size)));
  }
  ["toString"]() {
    const _0x471926 = this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelAction.size);
    return Array.from(new Uint8Array(_0x471926)).join(':');
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
  constructor(_0x5480d1, _0x2c7d4d) {
    V(this, "raw");
    V(this, 'offset');
    this.raw = _0x5480d1;
    this.offset = _0x2c7d4d;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelActionV2.size));
  }
  get ["magneticShaftType"]() {
    return 31 & this.raw.getUint8(this.offset);
  }
  set ["magneticShaftType"](_0xe3cde0) {
    const _0x381218 = this.raw.getUint8(this.offset);
    this.raw.setUint8(this.offset, -32 & _0x381218 | 31 & _0xe3cde0);
  }
  get ["magneticShaftDefaultType"]() {
    return (224 & this.raw.getUint8(this.offset)) >> 5;
  }
  set ['magneticShaftDefaultType'](_0x1d970f) {
    const _0x4a04b5 = this.raw.getUint8(this.offset);
    this.raw.setUint8(this.offset, -225 & _0x4a04b5 | _0x1d970f << 5 & 224);
  }
  get ['triggerType']() {
    return 15 & this.raw.getUint8(this.offset + 1);
  }
  set ["triggerType"](_0x26d6be) {
    const _0x47f9e1 = this.raw.getUint8(this.offset + 1);
    this.raw.setUint8(this.offset + 1, -16 & _0x47f9e1 | 15 & _0x26d6be);
  }
  get ["socdPriority"]() {
    return 240 & this.raw.getUint8(this.offset + 1);
  }
  set ["socdPriority"](_0x137a28) {
    const _0x77abab = this.raw.getUint8(this.offset + 1);
    this.raw.setUint8(this.offset + 1, -241 & _0x77abab | 240 & _0x137a28);
  }
  get ["point"]() {
    return 511 & this.raw.getUint16(this.offset + 2, true);
  }
  set ["point"](_0x318a01) {
    const _0x3bff82 = this.raw.getUint16(this.offset + 2, true);
    this.raw.setUint16(this.offset + 2, -512 & _0x3bff82 | 511 & _0x318a01, true);
  }
  get ['pressRT']() {
    return 511 & this.raw.getUint16(this.offset + 4, true);
  }
  set ["pressRT"](_0x3db4df) {
    const _0x303683 = this.raw.getUint16(this.offset + 4, true);
    this.raw.setUint16(this.offset + 4, -512 & _0x303683 | 511 & _0x3db4df, true);
  }
  get ["pressTheDeadZone"]() {
    return (65024 & this.raw.getUint16(this.offset + 4, true)) >> 9;
  }
  set ["pressTheDeadZone"](_0xa56370) {
    const _0x533efb = this.raw.getUint16(this.offset + 4, true);
    this.raw.setUint16(this.offset + 4, -65025 & _0x533efb | _0xa56370 << 9 & 65024, true);
  }
  get ["releaseRT"]() {
    return 511 & this.raw.getUint16(this.offset + 6, true);
  }
  set ["releaseRT"](_0x9cb17a) {
    const _0x18a39f = this.raw.getUint16(this.offset + 6, true);
    this.raw.setUint16(this.offset + 6, -512 & _0x18a39f | 511 & _0x9cb17a, true);
  }
  get ["releaseTheDeadZone"]() {
    return (65024 & this.raw.getUint16(this.offset + 6, true)) >> 9;
  }
  set ['releaseTheDeadZone'](_0x1a2fdf) {
    const _0x16c253 = this.raw.getUint16(this.offset + 6, true);
    this.raw.setUint16(this.offset + 6, -65025 & _0x16c253 | _0x1a2fdf << 9 & 65024, true);
  }
  static ['create']() {
    return new _KeyTriggerTravelActionV2(new DataView(new ArrayBuffer(_KeyTriggerTravelActionV2.size)), 0);
  }
  static ['fromDataView'](_0x98389d, _0x5ba28a) {
    return new _KeyTriggerTravelActionV2(_0x98389d, _0x5ba28a);
  }
  ["toNumArr"]() {
    return Array.from(new Uint8Array(this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelActionV2.size)));
  }
  ['toString']() {
    const _0x1fd5d3 = this.raw.buffer.slice(this.offset, this.offset + _KeyTriggerTravelActionV2.size);
    return Array.from(new Uint8Array(_0x1fd5d3)).join(':');
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
  set ["configIndex"](_0x1d4ebc) {
    this.raw.setUint8(this.baseOffset, _0x1d4ebc);
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
  set ["reportRates"](_0x24fe48) {
    const _0x56f7fe = this.raw.getUint8(this.baseOffset + 4);
    this.raw.setUint8(this.baseOffset + 4, 240 & _0x56f7fe | 15 & _0x24fe48);
  }
  get ["tickRate"]() {
    return (240 & this.raw.getUint8(this.baseOffset + 4)) >> 4;
  }
  set ['tickRate'](_0x262e59) {
    const _0x5aca03 = this.raw.getUint8(this.baseOffset + 4);
    this.raw.setUint8(this.baseOffset + 4, 15 & _0x5aca03 | (15 & _0x262e59) << 4);
  }
  get ['winLock']() {
    return this.raw.getUint8(this.baseOffset + 6) >> 0 & 1;
  }
  set ["winLock"](_0x519cd3) {
    const _0x20df5b = this.raw.getUint8(this.baseOffset + 6);
    this.raw.setUint8(this.baseOffset + 6, -2 & _0x20df5b | 1 & _0x519cd3);
  }
  get ["altTabLock"]() {
    return this.raw.getUint8(this.baseOffset + 6) >> 1 & 1;
  }
  set ["altTabLock"](_0x2f50c7) {
    const _0x5f3a4d = this.raw.getUint8(this.baseOffset + 6);
    this.raw.setUint8(this.baseOffset + 6, 253 & _0x5f3a4d | (1 & _0x2f50c7) << 1);
  }
  get ["altF4Lock"]() {
    return this.raw.getUint8(this.baseOffset + 6) >> 2 & 1;
  }
  set ["altF4Lock"](_0x3c6954) {
    const _0x455b9b = this.raw.getUint8(this.baseOffset + 6);
    this.raw.setUint8(this.baseOffset + 6, 251 & _0x455b9b | (1 & _0x3c6954) << 2);
  }
  get ["appLock"]() {
    return this.raw.getUint8(this.baseOffset + 6) >> 3 & 1;
  }
  set ["appLock"](_0x115e24) {
    const _0x4d0b6a = this.raw.getUint8(this.baseOffset + 6);
    this.raw.setUint8(this.baseOffset + 6, 247 & _0x4d0b6a | (1 & _0x115e24) << 3);
  }
  get ["alwaysTriggeredWhenItHitsBottom"]() {
    return this.raw.getUint8(this.baseOffset + 7) >> 1 & 1;
  }
  set ["alwaysTriggeredWhenItHitsBottom"](_0x2547d0) {
    const _0x6fdc55 = this.raw.getUint8(this.baseOffset + 7);
    this.raw.setUint8(this.baseOffset + 7, 253 & _0x6fdc55 | (1 & _0x2547d0) << 1);
  }
  get ["debugMode"]() {
    return this.raw.getUint8(this.baseOffset + 7) >> 3 & 1;
  }
  set ["debugMode"](_0x262146) {
    const _0x10412c = this.raw.getUint8(this.baseOffset + 7);
    this.raw.setUint8(this.baseOffset + 7, _0x262146 ? 8 | _0x10412c : -9 & _0x10412c);
  }
  get ["antiShakeRating"]() {
    return (224 & this.raw.getUint8(this.baseOffset + 7)) >> 5;
  }
  set ["antiShakeRating"](_0x1fb44e) {
    const _0x53039e = 31 & this.raw.getUint8(this.baseOffset + 7);
    this.raw.setUint8(this.baseOffset + 7, _0x53039e | _0x1fb44e << 5);
  }
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset + 8);
  }
  set ["mode"](_0x4d44c4) {
    this.raw.setUint8(this.baseOffset + 8, _0x4d44c4);
  }
  get ["brightness"]() {
    return this.raw.getUint8(this.baseOffset + 9);
  }
  set ['brightness'](_0x39add5) {
    this.raw.setUint8(this.baseOffset + 9, _0x39add5);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 10);
  }
  set ["speed"](_0x469f29) {
    this.raw.setUint8(this.baseOffset + 10, _0x469f29);
  }
  get ["direction"]() {
    return this.raw.getUint8(this.baseOffset + 11);
  }
  set ["direction"](_0x4c1ca9) {
    this.raw.setUint8(this.baseOffset + 11, _0x4c1ca9);
  }
  get ["colorMark"]() {
    return this.raw.getUint8(this.baseOffset + 12);
  }
  set ["colorMark"](_0x2c3c4f) {
    this.raw.setUint8(this.baseOffset + 12, _0x2c3c4f);
  }
  get ["monochromaticIndex"]() {
    return this.raw.getUint8(this.baseOffset + 13);
  }
  set ['monochromaticIndex'](_0x383bca) {
    this.raw.setUint8(this.baseOffset + 13, _0x383bca);
  }
  get ['color']() {
    return [this.raw.getUint8(this.baseOffset + 14), this.raw.getUint8(this.baseOffset + 15), this.raw.getUint8(this.baseOffset + 16)];
  }
  set ["color"]([_0x4104fe, _0x3f1df2, _0x248469]) {
    this.raw.setUint8(this.baseOffset + 14, _0x4104fe);
    this.raw.setUint8(this.baseOffset + 15, _0x3f1df2);
    this.raw.setUint8(this.baseOffset + 16, _0x248469);
  }
  get ['sidelightMode']() {
    return this.raw.getUint8(this.baseOffset + 24);
  }
  set ["sidelightMode"](_0x3bb930) {
    this.raw.setUint8(this.baseOffset + 24, _0x3bb930);
  }
  get ["sidelightBrightness"]() {
    return this.raw.getUint8(this.baseOffset + 25);
  }
  set ["sidelightBrightness"](_0x4c905d) {
    this.raw.setUint8(this.baseOffset + 25, _0x4c905d);
  }
  get ['sidelightSpeed']() {
    return this.raw.getUint8(this.baseOffset + 26);
  }
  set ["sidelightSpeed"](_0x5455bd) {
    this.raw.setUint8(this.baseOffset + 26, _0x5455bd);
  }
  get ['sidelightColorMark']() {
    return this.raw.getUint8(this.baseOffset + 27);
  }
  set ['sidelightColorMark'](_0x5715f1) {
    this.raw.setUint8(this.baseOffset + 27, _0x5715f1);
  }
  get ["sidelightColorIndex"]() {
    return this.raw.getUint8(this.baseOffset + 28);
  }
  set ["sidelightColorIndex"](_0x33621a) {
    this.raw.setUint8(this.baseOffset + 28, _0x33621a);
  }
  get ["sidelightColor"]() {
    return [this.raw.getUint8(this.baseOffset + 29), this.raw.getUint8(this.baseOffset + 30), this.raw.getUint8(this.baseOffset + 31)];
  }
  set ["sidelightColor"]([_0x1d8ce6, _0x5a3268, _0x19b526]) {
    this.raw.setUint8(this.baseOffset + 29, _0x1d8ce6);
    this.raw.setUint8(this.baseOffset + 30, _0x5a3268);
    this.raw.setUint8(this.baseOffset + 31, _0x19b526);
  }
  static ["get"](_0x20c2f1 = 0) {
    const _0x50f65b = new _FunctionVariableArea(this.getData(), Sr.GetFunc);
    _0x50f65b.len = 56;
    _0x50f65b.addr = _0x20c2f1;
    return _0x50f65b;
  }
  static ["create"](_0x4772e7, _0x1b559c = 0) {
    const _0x5da61a = new _FunctionVariableArea(this.getData(), Sr.SetFunc);
    _0x5da61a.len = 56;
    _0x5da61a.addr = _0x1b559c;
    _0x5da61a.raw.setUint8(this.baseOffset, 80);
    _0x5da61a.raw.setUint8(this.baseOffset + 2, 170);
    _0x5da61a.raw.setUint8(this.baseOffset + 3, 187);
    if (_0x4772e7) {
      for (const _0x15d083 of _FunctionVariableArea.getterName) _0x5da61a[_0x15d083] = _0x4772e7[_0x15d083];
    }
    return _0x5da61a;
  }
  static ['fromDataView'](_0x5e0c07, _0x3a3a5a) {
    return new _FunctionVariableArea(_0x5e0c07, _0x3a3a5a);
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
  static ["get"](_0x2b4148, _0x2bbc8d = 55) {
    const _0x37e68a = new CustomLighting(this.getData(), Sr.GetLedDefine);
    _0x37e68a.len = _0x2bbc8d;
    _0x37e68a.addr = _0x2b4148;
    return _0x37e68a;
  }
  static ["create"](_0x59d103, _0x2f5c6d = 55) {
    const _0x14a55b = new CustomLighting(this.getData(), Sr.SetLedDefine);
    _0x14a55b.len = _0x2f5c6d;
    _0x14a55b.addr = _0x59d103;
    return _0x14a55b;
  }
  get ['buffer']() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ['buffer'](_0x2deb92) {
    for (let _0x139f31 = 0; _0x139f31 < _0x2deb92.byteLength; _0x139f31++) this.raw.setUint8(this.baseOffset + _0x139f31, _0x2deb92.getUint8(_0x139f31));
  }
}
class KeyMatrix extends Cr {
  static ['get'](_0x296185, _0x22f31f = 55, _0x124ccf = false) {
    const _0x901108 = new KeyMatrix(this.getData(), _0x124ccf ? Sr.GetDefaultKeyMatrix : Sr.GetUseKeyMatrix);
    _0x901108.len = _0x22f31f;
    _0x901108.addr = _0x296185;
    return _0x901108;
  }
  static ["create"](_0x15aebd, _0x1b39f6 = 55) {
    const _0x26d39a = new KeyMatrix(this.getData(), Sr.SetUseKeyMatrix);
    _0x26d39a.len = _0x1b39f6;
    _0x26d39a.addr = _0x15aebd;
    return _0x26d39a;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ["buffer"](_0x2f3bae) {
    for (let _0x27009f = 0; _0x27009f < _0x2f3bae.byteLength; _0x27009f++) this.raw.setUint8(this.baseOffset + _0x27009f, _0x2f3bae.getUint8(_0x27009f));
  }
}
class DynamicStroke extends Cr {
  static ["get"](_0x12f9b6, _0x255f86 = 56) {
    const _0x618bc9 = new DynamicStroke(this.getData(), Sr.GetDskInfo);
    _0x618bc9.addr = _0x12f9b6;
    _0x618bc9.len = _0x255f86;
    return _0x618bc9;
  }
  static ['create'](_0x18368a, _0xe5bb74 = 56) {
    const _0x4235e9 = new DynamicStroke(this.getData(), Sr.SetDskInfo);
    _0x4235e9.addr = _0x18368a;
    _0x4235e9.len = _0xe5bb74;
    return _0x4235e9;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ['buffer'](_0x2a3efb) {
    for (let _0x47a9f1 = 0; _0x47a9f1 < _0x2a3efb.byteLength; _0x47a9f1++) this.raw.setUint8(this.baseOffset + _0x47a9f1, _0x2a3efb.getUint8(_0x47a9f1));
  }
}
class DoubleClick extends Cr {
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ["buffer"](_0x10150f) {
    for (let _0x35097a = 0; _0x35097a < _0x10150f.byteLength; _0x35097a++) this.raw.setUint8(this.baseOffset + _0x35097a, _0x10150f.getUint8(_0x35097a));
  }
  static ["get"](_0x4fe1a4, _0x2a0505 = 56) {
    const _0xb74233 = new DoubleClick(this.getData(), Sr.GetMtKeyInfo);
    _0xb74233.len = _0x2a0505;
    _0xb74233.addr = _0x4fe1a4;
    return _0xb74233;
  }
  static ['create'](_0xfe572c, _0x1e3f73 = 56) {
    const _0x107085 = new DoubleClick(this.getData(), Sr.SetMtKeyInfo);
    _0x107085.len = _0x1e3f73;
    _0x107085.addr = _0xfe572c;
    return _0x107085;
  }
}
class ToggleSwitch extends Cr {
  static ['get'](_0x110671, _0x2cc058 = 56) {
    const _0x225aea = new ToggleSwitch(this.getData(), Sr.GetTglKeyInfo);
    _0x225aea.addr = _0x110671;
    _0x225aea.len = _0x2cc058;
    return _0x225aea;
  }
  static ["create"](_0x290102, _0x31fa25 = 56) {
    const _0x22c678 = new ToggleSwitch(this.getData(), Sr.SetTglKeyInfo);
    _0x22c678.addr = _0x290102;
    _0x22c678.len = _0x31fa25;
    return _0x22c678;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ["buffer"](_0x236cc2) {
    for (let _0x24434c = 0; _0x24434c < _0x236cc2.byteLength; _0x24434c++) this.raw.setUint8(this.baseOffset + _0x24434c, _0x236cc2.getUint8(_0x24434c));
  }
}
class Macro extends Cr {
  static ["get"](_0x611a57, _0x19f779 = 56) {
    const _0x2d62e2 = new Macro(this.getData(), Sr.GetMacro);
    _0x2d62e2.len = _0x19f779;
    _0x2d62e2.addr = _0x611a57;
    return _0x2d62e2;
  }
  static ["create"](_0x757f23, _0x5d8cfa = 56) {
    const _0x5b8c2e = new Macro(this.getData(), Sr.SetMacro);
    _0x5b8c2e.len = _0x5d8cfa;
    _0x5b8c2e.addr = _0x757f23;
    return _0x5b8c2e;
  }
  get ["buffer"]() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ["buffer"](_0x9e0bbb) {
    for (let _0x42906b = 0; _0x42906b < _0x9e0bbb.byteLength; _0x42906b++) this.raw.setUint8(this.baseOffset + _0x42906b, _0x9e0bbb.getUint8(_0x42906b));
  }
}
class KeyTriggerTravel extends Cr {
  static ['get'](_0x41a0c9, _0x4089af = 56) {
    const _0x4c409e = new KeyTriggerTravel(this.getData(), Sr.GetKeyTriggerTravel);
    _0x4c409e.addr = _0x41a0c9;
    _0x4c409e.len = _0x4089af;
    return _0x4c409e;
  }
  static ["create"](_0x111906, _0x2852a7 = 56) {
    const _0x1dfbfc = new KeyTriggerTravel(this.getData(), Sr.SetKeyTriggerTravel);
    _0x1dfbfc.addr = _0x111906;
    _0x1dfbfc.len = _0x2852a7;
    return _0x1dfbfc;
  }
  get ['buffer']() {
    return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
  }
  set ['buffer'](_0x30bba7) {
    for (let _0x3237da = 0; _0x3237da < _0x30bba7.byteLength; _0x3237da++) this.raw.setUint8(this.baseOffset + _0x3237da, _0x30bba7.getUint8(_0x3237da));
  }
}
class CustomInfo extends Cr {
  get ["globalKeyTriggerTravel"]() {
    return Ds.fromDataView(this.raw, this.baseOffset + 16);
  }
  set ['globalKeyTriggerTravel'](_0x1c1052) {
    const _0x4996b3 = _0x1c1052.buffer;
    for (let _0x3a3bf2 = 0; _0x3a3bf2 < _0x4996b3.byteLength; _0x3a3bf2++) this.raw.setUint8(this.baseOffset + 16 + _0x3a3bf2, _0x4996b3.getUint8(_0x3a3bf2));
  }
  get ["competitiveMode"]() {
    return this.raw.getUint8(this.baseOffset + 24);
  }
  set ["competitiveMode"](_0xa9a49) {
    this.raw.setUint8(this.baseOffset + 24, _0xa9a49);
  }
  static ["get"]() {
    const _0x53d28b = new CustomInfo(this.getData(), Sr.GetAppDefine);
    _0x53d28b.addr = 500;
    _0x53d28b.len = 56;
    return _0x53d28b;
  }
  static ["create"]() {
    const _0x3a3d55 = new CustomInfo(this.getData(), Sr.SetAppDefine);
    _0x3a3d55.addr = 500;
    _0x3a3d55.len = 56;
    return _0x3a3d55;
  }
  static ["fromDataView"](_0x52a566, _0x335407) {
    return new CustomInfo(_0x52a566, _0x335407);
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
  set ['globalKeyTriggerTravel'](_0x542b94) {
    const _0x4f6e09 = _0x542b94.buffer;
    for (let _0x116fe0 = 0; _0x116fe0 < _0x4f6e09.byteLength; _0x116fe0++) this.raw.setUint8(this.baseOffset + 16 + _0x116fe0, _0x4f6e09.getUint8(_0x116fe0));
  }
  get ["competitiveMode"]() {
    return this.raw.getUint8(this.baseOffset + 24);
  }
  set ["competitiveMode"](_0x57a9e4) {
    this.raw.setUint8(this.baseOffset + 24, _0x57a9e4);
  }
  static ["get"]() {
    const _0x39a292 = new CustomInfoV2(this.getData(), Sr.GetAppDefine);
    _0x39a292.addr = 500;
    _0x39a292.len = 56;
    return _0x39a292;
  }
  static ['create']() {
    const _0x381f71 = new CustomInfoV2(this.getData(), Sr.SetAppDefine);
    _0x381f71.addr = 500;
    _0x381f71.len = 56;
    return _0x381f71;
  }
  static ["fromDataView"](_0x4549dc, _0x32ef1a) {
    return new CustomInfoV2(_0x4549dc, _0x32ef1a);
  }
  ["toJSON"]() {
    return {
      globalKeyTriggerTravel: this.globalKeyTriggerTravel.toJSON(),
      competitiveMode: this.competitiveMode
    };
  }
}
const Is = class _DebugInfo {
  constructor(_0x41ce7a) {
    V(this, 'raw');
    let _0x42901f = _0x41ce7a ? _0x41ce7a.buffer : new ArrayBuffer(Cr.SIZE);
    this.raw = new DataView(_0x42901f);
  }
  get ["baseOffset"]() {
    return _DebugInfo.baseOffset;
  }
  static ["fromDataView"](_0x2addae) {
    return new _DebugInfo(_0x2addae);
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
  constructor(_0x199818) {
    V(this, "raw");
    let _0x53a1e6 = _0x199818 ? _0x199818.buffer : new ArrayBuffer(Cr.SIZE);
    this.raw = new DataView(_0x53a1e6);
  }
  get ["baseOffset"]() {
    return _SynchronousInfo.baseOffset;
  }
  static ["fromDataView"](_0xbb5fbe) {
    return new _SynchronousInfo(_0xbb5fbe);
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
    static ["get"](_0x57bfe8, _0x3f0398 = 56) {
      const _0x5c6636 = new Calibration(this.getData(), Sr.GetCalibration);
      _0x5c6636.len = _0x3f0398;
      _0x5c6636.addr = _0x57bfe8;
      return _0x5c6636;
    }
    get ["buffer"]() {
      return new DataView(this.raw.buffer.slice(this.baseOffset, this.baseOffset + this.len));
    }
    set ["buffer"](_0xd40990) {
      for (let _0x45a802 = 0; _0x45a802 < _0xd40990.byteLength; _0x45a802++) this.raw.setUint8(this.baseOffset + _0x45a802, _0xd40990.getUint8(_0x45a802));
    }
  },
  Es = class HidDevice extends WebHidGeneral {
    constructor() {
      super(...arguments);
      V(this, 'mutex', new Mutex());
      V(this, "pendingTransfers", []);
    }
    ["onDeviceToHostReportReceived"](_0x224b36) {}
    async ["transferForResultAsync"](_0x5b20db) {
      var _0x1b1c5e;
      const _0x23f7c2 = new DataView(_0x5b20db.buffer).getUint8(1);
      let _0x3ca835;
      const _0x1a333c = new Promise(_0x4a5186 => {
          _0x3ca835 = _0x4a5186;
        }),
        _0x2d41ea = {
          requestCode: _0x23f7c2,
          data: _0x5b20db,
          promiseResolve: _0x3ca835
        };
      await new Promise(_0x12c363 => {
        const _0x3092bc = setInterval(() => {
          0 === this.pendingTransfers.length && (_0x12c363(), clearInterval(_0x3092bc));
        }, 1);
      });
      this.pendingTransfers.push(_0x2d41ea);
      await (null == (_0x1b1c5e = this.device) ? void 0 : _0x1b1c5e.sendReport(0, _0x5b20db));
      return _0x1a333c;
    }
    ["inputReportListener"](_0xa0475f) {
      super.inputReportListener(_0xa0475f);
      this.handleInputReport(_0xa0475f.data);
    }
    ["handleInputReport"](_0x56a809) {
      this.mutex.runExclusive(() => {
        let _0x776e21 = false;
        const _0x39708c = _0x56a809.getUint8(0);
        if (_0x39708c === Ps.COMMAND_ID) return void Pr("debug-reporting", Ps.fromDataView(_0x56a809));
        if (_0x39708c === Ts.COMMAND_ID) return void Pr("synchronous-reporting", Ts.fromDataView(_0x56a809));
        const _0x1e98db = _0x56a809.getUint8(1);
        if (0 != _0x1e98db) {
          for (const _0x5774b0 of this.pendingTransfers) if (_0x5774b0.requestCode === _0x1e98db) {
            _0x5774b0.promiseResolve(_0x56a809);
            this.pendingTransfers.splice(this.pendingTransfers.indexOf(_0x5774b0), 1);
            _0x776e21 = true;
            break;
          }
          _0x776e21 || new Uint8Array(_0x56a809.buffer).toString();
        } else this.onDeviceToHostReportReceived(_0x56a809);
      });
    }
  };
class HidDeviceUpgrade extends WebHidGeneral {
  constructor() {
    super(...arguments);
    V(this, "mutex", new Mutex());
    V(this, 'pendingTransfers', []);
  }
  ["onDeviceToHostReportReceived"](_0x341792) {}
  async ["transferForResultAsync"](_0x3ce95b, _0xe50c19 = false) {
    var _0x41bbd2, _0x2828a9;
    if (_0xe50c19) return void (await (null == (_0x41bbd2 = this.device) ? void 0 : _0x41bbd2.sendReport(0, _0x3ce95b)));
    let _0x151619;
    const _0x32ad56 = new Promise(_0x5a661f => {
        _0x151619 = _0x5a661f;
      }),
      _0x462ae0 = {
        requestCode: 0,
        data: _0x3ce95b,
        promiseResolve: _0x151619
      };
    this.pendingTransfers.push(_0x462ae0);
    await (null == (_0x2828a9 = this.device) ? void 0 : _0x2828a9.sendReport(0, _0x3ce95b));
    return _0x32ad56;
  }
  ["inputReportListener"](_0xefd1f9) {
    super.inputReportListener(_0xefd1f9);
    this.handleInputReport(_0xefd1f9.data);
  }
  ['handleInputReport'](_0x4036d6) {
    this.mutex.runExclusive(() => {
      let _0x2c7016 = false;
      for (const _0x52a7a5 of this.pendingTransfers) if (0 === _0x52a7a5.requestCode) {
        _0x52a7a5.promiseResolve(_0x4036d6);
        this.pendingTransfers.splice(this.pendingTransfers.indexOf(_0x52a7a5), 1);
        _0x2c7016 = true;
        break;
      }
      _0x2c7016 || new Uint8Array(_0x4036d6.buffer).toString();
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
      custom: _0xff3037
    } = this.getCustomData();
    return !_0xff3037.firmwareVersion || Number(this.version) >= Number(_0xff3037.firmwareVersion);
  }
  get ["hasAdvancedKey"]() {
    const {
      custom: _0x4f4439
    } = this.getCustomData();
    return !_0x4f4439.advancedKeyVersion || Number(this.version) >= Number(_0x4f4439.advancedKeyVersion);
  }
  get ["deviceVersion"]() {
    return this.version;
  }
  async ["getDeviceInfo"]() {
    const _0x113b4f = await this.transferForResult(DeviceInfo.get());
    this.version = _0x113b4f.version;
    return _0x113b4f;
  }
  async ['startCommunication']() {
    return this.transferForResult(Communication.start());
  }
  async ["stopCommunication"]() {
    return this.transferForResult(Communication.stop());
  }
  async ['getBaseInfo']() {
    const _0x23331a = await this.transferForResult(GetDeviceBase.get());
    this.configIndex = _0x23331a.configIndex || 0;
    return _0x23331a;
  }
  async ["getFunctionVariableArea"]() {
    return this.transferForResult(As.get(this.configIndex * _Fire.FunctionVariableAreaOffset));
  }
  async ["setFunctionVariableArea"](_0x9b4fc2) {
    return this.transferForResult(As.create(_0x9b4fc2, this.configIndex * _Fire.FunctionVariableAreaOffset));
  }
  async ['getKeyActions'](_0x462ed2, _0x27659d = false) {
    const _0xa4dbb = Math.ceil(6.9818181818181815);
    let _0x1cc4e4 = 512 * _0x462ed2 + this.configIndex * _Fire.KeyActionsOffset;
    const _0x470021 = [];
    for (let _0x59dfc3 = 0; _0x59dfc3 < _0xa4dbb; _0x59dfc3++) {
      const _0x4dc119 = 384 - _0x470021.length,
        _0x363f28 = KeyMatrix.get(_0x1cc4e4, _0x4dc119 >= 55 ? 55 : _0x4dc119, _0x27659d),
        _0x51bf35 = await this.transferForResult(_0x363f28);
      _0x1cc4e4 += _0x51bf35.buffer.byteLength;
      _0x470021.push(...Array.from(new Uint8Array(_0x51bf35.buffer.buffer)));
    }
    return rt.map(rt.chunk(_0x470021, 3), _0x515730 => Rr.fromDataView(new DataView(new Uint8Array(_0x515730).buffer), 0));
  }
  async ['setKeyActionLayer'](_0x883af3, _0x17336f) {
    let _0xc8956b = 512 * _0x883af3 + this.configIndex * _Fire.KeyActionsOffset;
    const _0x9f1e92 = _0x17336f.map(_0x150204 => _0x150204.toObject().dataView).map(_0x280cf6 => Array.from(new Uint8Array(_0x280cf6.buffer))).flat(),
      _0x278be9 = rt.chunk(_0x9f1e92, 55),
      _0xf18384 = _0x278be9.length;
    for (let _0x4f289e = 0; _0x4f289e < _0xf18384; _0x4f289e++) {
      const _0x47c62d = _0x278be9[_0x4f289e],
        _0x5c0b7f = KeyMatrix.create(_0xc8956b, _0x47c62d.length);
      _0x5c0b7f.buffer = new DataView(new Uint8Array(_0x47c62d).buffer);
      await this.transferForResult(_0x5c0b7f);
      _0xc8956b += _0x47c62d.length;
    }
  }
  async ["setKeyActions"](_0x2f9d26) {
    for (let _0x1ee4c1 = 0; _0x1ee4c1 < _0x2f9d26.length; _0x1ee4c1++) await this.setKeyActionLayer(_0x1ee4c1, _0x2f9d26[_0x1ee4c1]);
  }
  async ["setOneKeyAction"](_0xaa3848, _0x4d0ed3, _0x3df1c4) {
    const _0xb10207 = KeyMatrix.create(512 * _0xaa3848 + 3 * _0x4d0ed3 + this.configIndex * _Fire.KeyActionsOffset, 3);
    _0xb10207.buffer = _0x3df1c4.toObject().dataView;
    await this.transferForResult(_0xb10207);
  }
  async ["getCustomLighting"]() {
    const _0x5e6f56 = Math.ceil(6.9818181818181815);
    let _0x810a30 = this.configIndex * _Fire.CustomLightingOffset;
    const _0x12e6f4 = [];
    for (let _0x587171 = 0; _0x587171 < _0x5e6f56; _0x587171++) {
      const _0x182daf = 384 - _0x12e6f4.length,
        _0x47bd31 = CustomLighting.get(_0x810a30, _0x182daf >= 55 ? 55 : _0x182daf),
        _0x44acc4 = await this.transferForResult(_0x47bd31);
      _0x810a30 += _0x44acc4.buffer.byteLength;
      _0x12e6f4.push(...Array.from(new Uint8Array(_0x44acc4.buffer.buffer)));
    }
    return rt.map(rt.chunk(_0x12e6f4, 3));
  }
  async ['setCustomLighting'](_0x3d5413) {
    const _0x1dd621 = rt.chunk(_0x3d5413.flat(), 56);
    let _0x2c8a79 = this.configIndex * _Fire.CustomLightingOffset;
    for (let _0x20bd1a = 0; _0x20bd1a < _0x1dd621.length; _0x20bd1a++) {
      const _0x1833e0 = _0x1dd621[_0x20bd1a],
        _0x2f59db = CustomLighting.create(_0x2c8a79, _0x1833e0.length);
      _0x2f59db.buffer = new DataView(new Uint8Array(_0x1833e0).buffer);
      await this.transferForResult(_0x2f59db);
      _0x2c8a79 += _0x2f59db.buffer.byteLength;
    }
  }
  async ["setCustomLightingOne"](_0x32ffcf, _0x41c05e) {
    const _0x4b46af = 3 * _0x32ffcf + this.configIndex * _Fire.CustomLightingOffset,
      _0x1fdf28 = CustomLighting.create(_0x4b46af, 3);
    _0x1fdf28.buffer = new DataView(new Uint8Array(_0x41c05e).buffer);
    await this.transferForResult(_0x1fdf28);
  }
  async ["getDynamicStroke"]() {
    const _0x3bdbbd = Math.ceil(13.714285714285714);
    let _0xaf588e = this.configIndex * _Fire.DynamicStrokeOffset;
    const _0xda4bd0 = [];
    for (let _0x45b2dc = 0; _0x45b2dc < _0x3bdbbd; _0x45b2dc++) {
      const _0x14a7b4 = 768 - _0xda4bd0.length,
        _0x3b3c45 = DynamicStroke.get(_0xaf588e, _0x14a7b4 >= 56 ? 56 : _0x14a7b4),
        _0x3f0e9f = await this.transferForResult(_0x3b3c45);
      _0xaf588e += _0x3f0e9f.buffer.byteLength;
      const _0x1166c8 = Array.from(new Uint8Array(_0x3f0e9f.buffer.buffer));
      _0xda4bd0.push(..._0x1166c8);
    }
    return rt.chunk(_0xda4bd0, 24).filter(_0x6fd0a => _0x6fd0a.reduce((_0x4a1a6a, _0x19708c) => _0x4a1a6a + _0x19708c) > 0).map(_0x4ae756 => ks.fromDataView(new DataView(new Uint8Array(_0x4ae756).buffer), 0));
  }
  async ["setDynamicStroke"](_0x381c5b) {
    const _0x30fc1c = _0x381c5b.map(_0x283d3c => _0x283d3c.toNumArr()).flat(),
      _0x12d1e3 = rt.chunk(_0x30fc1c, 56);
    let _0x2946c1 = this.configIndex * _Fire.DynamicStrokeOffset;
    for (let _0x550931 = 0; _0x550931 < _0x12d1e3.length; _0x550931++) {
      const _0x47c171 = _0x12d1e3[_0x550931],
        _0x417ed1 = DynamicStroke.create(_0x2946c1, _0x47c171.length);
      _0x417ed1.buffer = new DataView(new Uint8Array(_0x47c171).buffer);
      await this.transferForResult(_0x417ed1);
      _0x2946c1 += _0x417ed1.buffer.byteLength;
    }
  }
  async ["setDynamicStrokeOne"](_0x2771f0, _0x41e990) {
    const _0x3d8351 = 24 * _0x2771f0 + this.configIndex * _Fire.DynamicStrokeOffset,
      _0x5d77d3 = DynamicStroke.create(_0x3d8351, 24);
    _0x5d77d3.buffer = _0x41e990.buffer;
    await this.transferForResult(_0x5d77d3);
  }
  async ["getDoubleClick"]() {
    const _0x1c7e38 = Math.ceil(3.4285714285714284);
    let _0x1be5eb = this.configIndex * _Fire.DoubleClickOffset;
    const _0x44374c = [];
    for (let _0x3880bf = 0; _0x3880bf < _0x1c7e38; _0x3880bf++) {
      const _0x43c471 = 192 - _0x44374c.length,
        _0x202951 = DoubleClick.get(_0x1be5eb, _0x43c471 >= 56 ? 56 : _0x43c471),
        _0x13ac86 = await this.transferForResult(_0x202951);
      _0x1be5eb += _0x13ac86.buffer.byteLength;
      const _0x4459c7 = Array.from(new Uint8Array(_0x13ac86.buffer.buffer));
      _0x44374c.push(..._0x4459c7);
    }
    return rt.chunk(_0x44374c, 6).filter(_0x49e480 => _0x49e480.reduce((_0x1f85e7, _0x5b4995) => _0x1f85e7 + _0x5b4995) > 0).map(_0x2d2f42 => rt.chunk(_0x2d2f42, 3).map(_0xe6d44d => Rr.fromDataView(new DataView(new Uint8Array(_0xe6d44d).buffer), 0)));
  }
  async ['setDoubleClick'](_0x3d9464) {
    const _0x484f2d = rt.chunk(_0x3d9464.map(_0x6e3c20 => _0x6e3c20.map(_0x20cfed => _0x20cfed.toNumArr()).flat()).flat(), 56);
    let _0x5dcfe2 = this.configIndex * _Fire.DoubleClickOffset;
    for (let _0x480440 = 0; _0x480440 < _0x484f2d.length; _0x480440++) {
      const _0x88c96e = _0x484f2d[_0x480440],
        _0x416a96 = DoubleClick.create(_0x5dcfe2, _0x88c96e.length);
      _0x416a96.buffer = new DataView(new Uint8Array(_0x88c96e).buffer);
      await this.transferForResult(_0x416a96);
      _0x5dcfe2 += _0x416a96.buffer.byteLength;
    }
  }
  async ["setDoubleClickOne"](_0x2df888, _0x4b31e9, _0x2cb9c3 = false) {
    const _0x5548ed = 6 * _0x2df888 + this.configIndex * _Fire.DoubleClickOffset,
      _0x7e53f8 = DoubleClick.create(_0x5548ed, _0x2cb9c3 ? 12 : 6),
      _0x9d355d = _0x4b31e9.map(_0x19e117 => Array.from(new Uint8Array(_0x19e117.toObject().dataView.buffer))).flat();
    _0x7e53f8.buffer = new DataView(new Uint8Array(_0x9d355d).buffer);
    await this.transferForResult(_0x7e53f8);
  }
  async ["getToggleSwitch"]() {
    const _0x2534af = Math.ceil(1.7142857142857142);
    let _0x22949d = this.configIndex * _Fire.ToggleSwitchOffset;
    const _0x15fb33 = [];
    for (let _0x12f544 = 0; _0x12f544 < _0x2534af; _0x12f544++) {
      const _0x44fb70 = 96 - _0x15fb33.length,
        _0x2774e7 = ToggleSwitch.get(_0x22949d, _0x44fb70 >= 56 ? 56 : _0x44fb70),
        _0x4ecefe = await this.transferForResult(_0x2774e7);
      _0x22949d += _0x4ecefe.buffer.byteLength;
      const _0x418d84 = Array.from(new Uint8Array(_0x4ecefe.buffer.buffer));
      _0x15fb33.push(..._0x418d84);
    }
    return rt.chunk(_0x15fb33, 3).filter(_0x462c80 => _0x462c80.reduce((_0x2de4e3, _0x46b876) => _0x2de4e3 + _0x46b876) > 0).map(_0x4d5044 => Rr.fromDataView(new DataView(new Uint8Array(_0x4d5044).buffer), 0));
  }
  async ["setToggleSwitch"](_0x33b715) {
    const _0x2e6619 = _0x33b715.map(_0x3d91b4 => _0x3d91b4.toNumArr()).flat(),
      _0x5399be = rt.chunk(_0x2e6619, 56);
    let _0x43d555 = this.configIndex * _Fire.ToggleSwitchOffset;
    for (let _0x4b2abe = 0; _0x4b2abe < _0x5399be.length; _0x4b2abe++) {
      const _0x14566f = _0x5399be[_0x4b2abe],
        _0x4ee1dd = ToggleSwitch.create(_0x43d555, _0x14566f.length);
      _0x4ee1dd.buffer = new DataView(new Uint8Array(_0x14566f).buffer);
      await this.transferForResult(_0x4ee1dd);
      _0x43d555 += _0x4ee1dd.buffer.byteLength;
    }
  }
  async ['setToggleSwitchOne'](_0x431540, _0x51c751) {
    const _0x2ddd27 = 3 * _0x431540 + this.configIndex * _Fire.ToggleSwitchOffset,
      _0x442637 = ToggleSwitch.create(_0x2ddd27, 3);
    _0x442637.buffer = _0x51c751.toObject().dataView;
    await this.transferForResult(_0x442637);
  }
  async ["getMacroList"]() {
    const _0x8ac867 = Math.ceil(36.57142857142857),
      _0x3fff9b = [];
    let _0x3606ef = this.configIndex * _Fire.MacroListOffset;
    for (let _0x59a40d = 0; _0x59a40d < _0x8ac867; _0x59a40d++) {
      const _0x469cc1 = 2048 - _0x3fff9b.length,
        _0x5d2f7d = Macro.get(_0x3606ef, _0x469cc1 >= 56 ? 56 : _0x469cc1),
        _0x315537 = await this.transferForResult(_0x5d2f7d);
      _0x3606ef += _0x315537.buffer.byteLength;
      const _0x271f1d = Array.from(new Uint8Array(_0x315537.buffer.buffer));
      _0x3fff9b.push(..._0x271f1d);
    }
    const _0x31f20e = rt.chunk(_0x3fff9b.slice(0, 64), 2).map(_0x4a7417 => new DataView(new Uint8Array(_0x4a7417).buffer).getUint16(0, true)).slice(0, 11);
    return _0x31f20e.map((_0x2528cb, _0x3a2f3f) => {
      let _0x317fe2 = (null == _0x31f20e ? void 0 : _0x31f20e[_0x3a2f3f + 1]) ? _0x31f20e[_0x3a2f3f + 1] - _0x2528cb : 0;
      if (0 === _0x317fe2 && _0x3a2f3f + 1 === _0x31f20e.length) {
        const _0x500a49 = _0x3fff9b.slice(_0x2528cb, -1),
          _0x34299b = rt.chunk(_0x500a49, 4).findIndex(_0x614803 => 0 === _0x614803.reduce((_0x37e303, _0x516733) => _0x37e303 + _0x516733));
        _0x317fe2 = -1 === _0x34299b ? _0x3fff9b.length : 4 * _0x34299b;
      }
      return rt.chunk(_0x3fff9b.slice(_0x2528cb, _0x2528cb + _0x317fe2), 4).map(_0x55dd45 => {
        if (0 !== _0x55dd45.reduce((_0x26ecb5, _0x358cfa) => _0x26ecb5 + _0x358cfa)) return _s.fromDataView(new DataView(new Uint8Array(_0x55dd45).buffer), 0);
      }).filter(Boolean);
    }).slice(0, 10);
  }
  async ['setMacroList'](_0x44bf76) {
    const _0x50a13c = (_0x44bf76 = _0x44bf76.map(_0x5b9a8d => _0x5b9a8d.length ? _0x5b9a8d : [_s.create(), _s.create()])).map(_0xb71b8d => 4 * _0xb71b8d.length),
      _0x5aa397 = [64];
    _0x50a13c.forEach((_0x2a6718, _0x3b2b9c) => _0x5aa397.push(_0x2a6718 + _0x5aa397[_0x3b2b9c]));
    const _0x25b354 = new DataView(new ArrayBuffer(2 * _0x5aa397.length)),
      _0x5cce07 = Macro.create(this.configIndex * _Fire.MacroListOffset, _0x25b354.byteLength);
    _0x5aa397.map((_0x13a8dc, _0x5b8a5a) => _0x25b354.setUint16(2 * _0x5b8a5a, 11 == _0x5b8a5a ? 0 : _0x13a8dc, true));
    _0x5cce07.buffer = _0x25b354;
    await this.transferForResult(_0x5cce07);
    const _0x1e9460 = _0x44bf76.flat().map(_0x57f6b0 => Array.from(new Uint8Array(_0x57f6b0.buffer))).flat(),
      _0x660bce = rt.chunk(_0x1e9460, 56).map(_0x2fda55 => new DataView(new Uint8Array(_0x2fda55).buffer)),
      _0x45c86b = _0x660bce.length;
    let _0xd63e85 = 64;
    for (let _0x30de21 = 0; _0x30de21 < _0x45c86b; _0x30de21++) {
      const _0x3531a9 = _0x660bce[_0x30de21],
        _0x602635 = Macro.create(_0xd63e85, _0x3531a9.byteLength);
      _0x602635.buffer = _0x3531a9;
      await this.transferForResult(_0x602635);
      _0xd63e85 += _0x3531a9.byteLength;
    }
  }
  async ["getKeyTriggerTravel"]() {
    if (this.isV2) return this.getKeyTriggerTravelV2();
    const _0x397c46 = Math.ceil(18.285714285714285),
      _0x26b661 = [];
    let _0x4f8143 = this.configIndex * _Fire.KeyTriggerTravelOffset;
    for (let _0x5c8d6f = 0; _0x5c8d6f < _0x397c46; _0x5c8d6f++) {
      const _0x35874c = 1024 - _0x26b661.length,
        _0x378367 = KeyTriggerTravel.get(_0x4f8143, _0x35874c >= 56 ? 56 : _0x35874c),
        _0x2df551 = await this.transferForResult(_0x378367);
      _0x4f8143 += _0x2df551.buffer.byteLength;
      const _0xfe66a3 = new Uint8Array(_0x2df551.buffer.buffer);
      _0x26b661.push(...Array.from(_0xfe66a3));
    }
    return rt.chunk(_0x26b661, 8).map(_0x3dddc2 => Ds.fromDataView(new DataView(new Uint8Array(_0x3dddc2).buffer), 0));
  }
  async ["getKeyTriggerTravelV2"]() {
    const _0x566942 = Math.ceil(18.285714285714285),
      _0x154f8c = [];
    let _0x17f322 = this.configIndex * _Fire.KeyTriggerTravelOffset;
    for (let _0x32a1cf = 0; _0x32a1cf < _0x566942; _0x32a1cf++) {
      const _0x53fed3 = 1024 - _0x154f8c.length,
        _0x5082e6 = KeyTriggerTravel.get(_0x17f322, _0x53fed3 >= 56 ? 56 : _0x53fed3),
        _0x11207c = await this.transferForResult(_0x5082e6);
      _0x17f322 += _0x11207c.buffer.byteLength;
      const _0x4808f6 = new Uint8Array(_0x11207c.buffer.buffer);
      _0x154f8c.push(...Array.from(_0x4808f6));
    }
    return rt.chunk(_0x154f8c, 8).map(_0x2db68e => xs.fromDataView(new DataView(new Uint8Array(_0x2db68e).buffer), 0));
  }
  async ['setKeyTriggerTravel'](_0x4037f0) {
    if (this.isV2) return this.setKeyTriggerTravelV2(_0x4037f0);
    const _0x110fe0 = rt.chunk(_0x4037f0.map(_0x3466a0 => _0x3466a0.toNumArr()).flat(), 56),
      _0x2c49a3 = _0x110fe0.length;
    let _0x53e355 = this.configIndex * _Fire.KeyTriggerTravelOffset;
    for (let _0x11a348 = 0; _0x11a348 < _0x2c49a3; _0x11a348++) {
      const _0x5bdc95 = _0x110fe0[_0x11a348],
        _0x8ce168 = KeyTriggerTravel.create(_0x53e355, _0x5bdc95.length);
      _0x8ce168.buffer = new DataView(new Uint8Array(_0x5bdc95).buffer);
      await this.transferForResult(_0x8ce168);
      _0x53e355 += _0x5bdc95.length;
    }
  }
  async ['setKeyTriggerTravelV2'](_0x52f68f) {
    const _0x56a2bb = rt.chunk(_0x52f68f.map(_0x3a1fa8 => _0x3a1fa8.toNumArr()).flat(), 56),
      _0x3793b7 = _0x56a2bb.length;
    let _0x2391ca = this.configIndex * _Fire.KeyTriggerTravelOffset;
    for (let _0xf0a0f3 = 0; _0xf0a0f3 < _0x3793b7; _0xf0a0f3++) {
      const _0x2d7231 = _0x56a2bb[_0xf0a0f3],
        _0x439e82 = KeyTriggerTravel.create(_0x2391ca, _0x2d7231.length);
      _0x439e82.buffer = new DataView(new Uint8Array(_0x2d7231).buffer);
      await this.transferForResult(_0x439e82);
      _0x2391ca += _0x2d7231.length;
    }
  }
  async ["getOneKeyTriggerTravel"](_0x2ee126) {
    const _0x456347 = KeyTriggerTravel.get(8 * _0x2ee126, 8),
      _0x11c00a = await this.transferForResult(_0x456347);
    if (this.isV2) return xs.fromDataView(_0x11c00a.buffer, 0);
    return Ds.fromDataView(_0x11c00a.buffer, 0);
  }
  async ["setOneKeyTriggerTravel"](_0x327f32, _0x3b6d9e) {
    const _0x4e0a2b = KeyTriggerTravel.create(8 * _0x327f32, 8);
    _0x4e0a2b.buffer = _0x3b6d9e.buffer;
    await this.transferForResult(_0x4e0a2b);
  }
  async ['getCustomInfo']() {
    if (this.isV2) return this.transferForResult(CustomInfoV2.get());
    return this.transferForResult(CustomInfo.get());
  }
  async ["setCustomInfo"](_0x49c161, _0x177a4f) {
    if (this.isV2) return this.setCustomInfoV2(_0x49c161, _0x177a4f);
    const _0x231661 = CustomInfo.create();
    _0x231661.globalKeyTriggerTravel = _0x49c161;
    _0x231661.competitiveMode = _0x177a4f ?? _0x231661.competitiveMode;
    await this.transferForResult(_0x231661);
  }
  async ['setCustomInfoV2'](_0x5d63ad, _0x27ff14) {
    const _0x1b7c11 = CustomInfoV2.create();
    _0x1b7c11.globalKeyTriggerTravel = _0x5d63ad;
    _0x1b7c11.competitiveMode = _0x27ff14 ?? _0x1b7c11.competitiveMode;
    await this.transferForResult(_0x1b7c11);
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
    const _0x34fe17 = Math.ceil(9.142857142857142),
      _0x1c065d = [];
    let _0xa40ed5 = 0;
    for (let _0x4c73fb = 0; _0x4c73fb < _0x34fe17; _0x4c73fb++) {
      const _0x20a69b = 512 - _0x1c065d.length,
        _0x556378 = Rs.get(_0xa40ed5, _0x20a69b >= 56 ? 56 : _0x20a69b),
        _0x4988b9 = await this.transferForResult(_0x556378);
      _0xa40ed5 += _0x4988b9.buffer.byteLength;
      const _0x481b12 = Array.from(new Uint8Array(_0x4988b9.buffer.buffer));
      _0x1c065d.push(..._0x481b12);
    }
    rt.chunk(_0x1c065d, 4).map(_0x472c86 => new DataView(new Uint8Array(_0x472c86).buffer).getFloat32(0, true).toFixed(2));
  }
  async ["transferForResult"](_0x3776fb) {
    _0x3776fb.raw = await this.transferForResultAsync(_0x3776fb.toUint8Array());
    return _0x3776fb;
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
function Gs(_0x5f56f8, _0x6979ad) {
  "object" != typeof _0x6979ad || Fs(_0x6979ad).forEach(function (_0x4bd544) {
    _0x5f56f8[_0x4bd544] = _0x6979ad[_0x4bd544];
  });
  return _0x5f56f8;
}
"undefined" == typeof Promise || Vs.Promise || (Vs.Promise = Promise);
const zs = Object.getPrototypeOf,
  Hs = {}.hasOwnProperty;
function Ws(_0x38c9bd, _0xa57c94) {
  return Hs.call(_0x38c9bd, _0xa57c94);
}
function js(_0x2f2648, _0x13735e) {
  'function' == typeof _0x13735e && (_0x13735e = _0x13735e(zs(_0x2f2648)));
  ('undefined' == typeof Reflect ? Fs : Reflect.ownKeys)(_0x13735e).forEach(_0x49addb => {
    $s(_0x2f2648, _0x49addb, _0x13735e[_0x49addb]);
  });
}
const Ys = Object.defineProperty;
function $s(_0x56094d, _0x2b32ec, _0x5d69e3, _0x11605d) {
  Ys(_0x56094d, _0x2b32ec, Gs(_0x5d69e3 && Ws(_0x5d69e3, 'get') && "function" == typeof _0x5d69e3.get ? {
    get: _0x5d69e3.get,
    set: _0x5d69e3.set,
    configurable: true
  } : {
    value: _0x5d69e3,
    configurable: true,
    writable: true
  }, _0x11605d));
}
function qs(_0x3a0b66) {
  return {
    from: function (_0x481a43) {
      _0x3a0b66.prototype = Object.create(_0x481a43.prototype);
      $s(_0x3a0b66.prototype, "constructor", _0x3a0b66);
      return {
        extend: js.bind(null, _0x3a0b66.prototype)
      };
    }
  };
}
const Js = Object.getOwnPropertyDescriptor;
function Xs(_0x539f81, _0x19a9d1) {
  let _0x13fb67;
  return Js(_0x539f81, _0x19a9d1) || (_0x13fb67 = zs(_0x539f81)) && Xs(_0x13fb67, _0x19a9d1);
}
const Zs = [].slice;
function Qs(_0x1bbbd9, _0x409aeb, _0x140539) {
  return Zs.call(_0x1bbbd9, _0x409aeb, _0x140539);
}
function tn(_0x444e29, _0x1c34b2) {
  return _0x1c34b2(_0x444e29);
}
function rn(_0x5322e9) {
  if (!_0x5322e9) throw new Error("Assertion Failed");
}
function sn(_0x5461eb) {
  if (Vs.setImmediate) setImmediate(_0x5461eb);else setTimeout(_0x5461eb, 0);
}
function nn(_0x2a706d, _0x1d270b) {
  return _0x2a706d.reduce((_0x579b12, _0x45835f, _0x12915) => {
    var _0x436fb5 = _0x1d270b(_0x45835f, _0x12915);
    _0x436fb5 && (_0x579b12[_0x436fb5[0]] = _0x436fb5[1]);
    return _0x579b12;
  }, {});
}
function on(_0x48a8da, _0x3f695f) {
  if (Ws(_0x48a8da, _0x3f695f)) return _0x48a8da[_0x3f695f];
  if (!_0x3f695f) return _0x48a8da;
  if ("string" != typeof _0x3f695f) {
    for (var _0x2cef27 = [], _0x3b9c02 = 0, _0x2544b9 = _0x3f695f.length; _0x3b9c02 < _0x2544b9; ++_0x3b9c02) {
      var _0x34510b = on(_0x48a8da, _0x3f695f[_0x3b9c02]);
      _0x2cef27.push(_0x34510b);
    }
    return _0x2cef27;
  }
  var _0x309643 = _0x3f695f.indexOf('.');
  if (-1 !== _0x309643) {
    var _0x2fdea2 = _0x48a8da[_0x3f695f.substr(0, _0x309643)];
    if (void 0 === _0x2fdea2) return void 0;
    return on(_0x2fdea2, _0x3f695f.substr(_0x309643 + 1));
  }
}
function un(_0x515f87, _0x371376, _0x32b2b6) {
  if (_0x515f87 && void 0 !== _0x371376 && (!("isFrozen" in Object) || !Object.isFrozen(_0x515f87))) {
    if ("string" != typeof _0x371376 && "length" in _0x371376) {
      rn("string" != typeof _0x32b2b6 && "length" in _0x32b2b6);
      for (var _0x1c5175 = 0, _0x160501 = _0x371376.length; _0x1c5175 < _0x160501; ++_0x1c5175) un(_0x515f87, _0x371376[_0x1c5175], _0x32b2b6[_0x1c5175]);
    } else {
      var _0x31f854 = _0x371376.indexOf('.');
      if (-1 !== _0x31f854) {
        var _0x85c960 = _0x371376.substr(0, _0x31f854),
          _0x2302aa = _0x371376.substr(_0x31f854 + 1);
        if ('' === _0x2302aa) {
          if (void 0 === _0x32b2b6) {
            if (Ns(_0x515f87) && !isNaN(parseInt(_0x85c960))) _0x515f87.splice(_0x85c960, 1);else delete _0x515f87[_0x85c960];
          } else _0x515f87[_0x85c960] = _0x32b2b6;
        } else {
          var _0x191572 = _0x515f87[_0x85c960];
          _0x191572 && Ws(_0x515f87, _0x85c960) || (_0x191572 = _0x515f87[_0x85c960] = {});
          un(_0x191572, _0x2302aa, _0x32b2b6);
        }
      } else if (void 0 === _0x32b2b6) {
        if (Ns(_0x515f87) && !isNaN(parseInt(_0x371376))) _0x515f87.splice(_0x371376, 1);else delete _0x515f87[_0x371376];
      } else _0x515f87[_0x371376] = _0x32b2b6;
    }
  }
}
function cn(_0x37f928) {
  var _0x104b91 = {};
  for (var _0x32c8ca in _0x37f928) Ws(_0x37f928, _0x32c8ca) && (_0x104b91[_0x32c8ca] = _0x37f928[_0x32c8ca]);
  return _0x104b91;
}
const ln = [].concat;
function fn(_0x263d84) {
  return ln.apply([], _0x263d84);
}
const hn = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(',').concat(fn([8, 16, 32, 64].map(_0x42ce99 => ["Int", 'Uint', "Float"].map(_0x104c70 => _0x104c70 + _0x42ce99 + 'Array')))).filter(_0x140861 => Vs[_0x140861]),
  dn = hn.map(_0x149555 => Vs[_0x149555]);
nn(hn, _0x420c75 => [_0x420c75, true]);
let gn = null;
function mn(_0x5a8cbe) {
  gn = 'undefined' != typeof WeakMap && new WeakMap();
  const _0x5f1b80 = pn(_0x5a8cbe);
  gn = null;
  return _0x5f1b80;
}
function pn(_0x41f69a) {
  if (!_0x41f69a || 'object' != typeof _0x41f69a) return _0x41f69a;
  let _0x2d9080 = gn && gn.get(_0x41f69a);
  if (_0x2d9080) return _0x2d9080;
  if (Ns(_0x41f69a)) {
    _0x2d9080 = [];
    gn && gn.set(_0x41f69a, _0x2d9080);
    for (var _0x2ccaa8 = 0, _0x19955d = _0x41f69a.length; _0x2ccaa8 < _0x19955d; ++_0x2ccaa8) _0x2d9080.push(pn(_0x41f69a[_0x2ccaa8]));
  } else {
    if (dn.indexOf(_0x41f69a.constructor) >= 0) _0x2d9080 = _0x41f69a;else {
      const _0x5a4303 = zs(_0x41f69a);
      for (var _0x306a04 in _0x2d9080 = _0x5a4303 === Object.prototype ? {} : Object.create(_0x5a4303), gn && gn.set(_0x41f69a, _0x2d9080), _0x41f69a) Ws(_0x41f69a, _0x306a04) && (_0x2d9080[_0x306a04] = pn(_0x41f69a[_0x306a04]));
    }
  }
  return _0x2d9080;
}
const {
  toString: yn
} = {};
function wn(_0x24c072) {
  return yn.call(_0x24c072).slice(8, -1);
}
const bn = 'undefined' != typeof Symbol ? Symbol.iterator : "@@iterator",
  _n = "symbol" == typeof bn ? function (_0x35dc2d) {
    var _0xb2d5ed;
    return null != _0x35dc2d && (_0xb2d5ed = _0x35dc2d[bn]) && _0xb2d5ed.apply(_0x35dc2d);
  } : function () {
    return null;
  },
  vn = {};
function kn(_0x9bde0d) {
  var _0x58e34c, _0x2e2d0b, _0x547d29, _0x584d22;
  if (1 === arguments.length) {
    if (Ns(_0x9bde0d)) return _0x9bde0d.slice();
    if (this === vn && "string" == typeof _0x9bde0d) return [_0x9bde0d];
    if (_0x584d22 = _n(_0x9bde0d)) {
      for (_0x2e2d0b = []; !(_0x547d29 = _0x584d22.next()).done;) _0x2e2d0b.push(_0x547d29.value);
      return _0x2e2d0b;
    }
    if (null == _0x9bde0d) return [_0x9bde0d];
    if ('number' == typeof (_0x58e34c = _0x9bde0d.length)) {
      for (_0x2e2d0b = new Array(_0x58e34c); _0x58e34c--;) _0x2e2d0b[_0x58e34c] = _0x9bde0d[_0x58e34c];
      return _0x2e2d0b;
    }
    return [_0x9bde0d];
  }
  _0x58e34c = arguments.length;
  for (_0x2e2d0b = new Array(_0x58e34c); _0x58e34c--;) _0x2e2d0b[_0x58e34c] = arguments[_0x58e34c];
  return _0x2e2d0b;
}
const Cn = "undefined" != typeof Symbol ? _0x23fa49 => 'AsyncFunction' === _0x23fa49[Symbol.toStringTag] : () => false;
var Sn = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function Un(_0x200a4f, _0x40f593) {
  Sn = _0x200a4f;
  Dn = _0x40f593;
}
var Dn = () => true;
const xn = !new Error('').stack;
function Kn() {
  if (xn) try {
    Kn.arguments;
    throw new Error();
  } catch (_0x3b663d) {
    return _0x3b663d;
  }
  return new Error();
}
function An(_0xf6bd3b, _0x471bbc) {
  var _0x4f0c00 = _0xf6bd3b.stack;
  if (_0x4f0c00) {
    _0x471bbc = _0x471bbc || 0;
    0 === _0x4f0c00.indexOf(_0xf6bd3b.name) && (_0x471bbc += (_0xf6bd3b.name + _0xf6bd3b.message).split('\x0a').length);
    return _0x4f0c00.split('\x0a').slice(_0x471bbc).filter(Dn).map(_0x55ba4c => '\x0a' + _0x55ba4c).join('');
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
function Tn(_0x5d638c, _0x22f506) {
  this._e = Kn();
  this.name = _0x5d638c;
  this.message = _0x22f506;
}
function Rn(_0x1412fc, _0xc7bffc) {
  return _0x1412fc + ". Errors: " + Object.keys(_0xc7bffc).map(_0x17cb64 => _0xc7bffc[_0x17cb64].toString()).filter((_0x26d5c5, _0x53f237, _0x199997) => _0x199997.indexOf(_0x26d5c5) === _0x53f237).join('\x0a');
}
function En(_0x45a8e4, _0x746685, _0x2cd95d, _0x49f22d) {
  this._e = Kn();
  this.failures = _0x746685;
  this.failedKeys = _0x49f22d;
  this.successCount = _0x2cd95d;
  this.message = Rn(_0x45a8e4, _0x746685);
}
function Bn(_0x3fd082, _0x824e87) {
  this._e = Kn();
  this.name = "BulkError";
  this.failures = Object.keys(_0x824e87).map(_0x32f8b5 => _0x824e87[_0x32f8b5]);
  this.failuresByPos = _0x824e87;
  this.message = Rn(_0x3fd082, _0x824e87);
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
var Ln = Pn.reduce((_0x2ae579, _0x17e4ad) => (_0x2ae579[_0x17e4ad] = _0x17e4ad + "Error", _0x2ae579), {});
const Vn = Tn;
var Fn = Pn.reduce((_0x5612f5, _0x3da0f0) => {
  var _0x54a376 = _0x3da0f0 + 'Error';
  function _0x2a6f62(_0x219179, _0xdc68e4) {
    this._e = Kn();
    this.name = _0x54a376;
    if (_0x219179) {
      if ("string" == typeof _0x219179) {
        this.message = '' + _0x219179 + (_0xdc68e4 ? '\x0a\x20' + _0xdc68e4 : '');
        this.inner = _0xdc68e4 || null;
      } else "object" == typeof _0x219179 && (this.message = _0x219179.name + '\x20' + _0x219179.message, this.inner = _0x219179);
    } else {
      this.message = Mn[_0x3da0f0] || _0x54a376;
      this.inner = null;
    }
  }
  qs(_0x2a6f62).from(Vn);
  _0x5612f5[_0x3da0f0] = _0x2a6f62;
  return _0x5612f5;
}, {});
Fn.Syntax = SyntaxError;
Fn.Type = TypeError;
Fn.Range = RangeError;
var Nn = In.reduce((_0x207f01, _0xd67d84) => (_0x207f01[_0xd67d84 + "Error"] = Fn[_0xd67d84], _0x207f01), {}),
  Gn = Pn.reduce((_0x5f0562, _0x2c55f1) => (-1 === ["Syntax", "Type", "Range"].indexOf(_0x2c55f1) && (_0x5f0562[_0x2c55f1 + "Error"] = Fn[_0x2c55f1]), _0x5f0562), {});
function zn() {}
function Hn(_0x153477) {
  return _0x153477;
}
function Wn(_0x136361, _0x1f54d1) {
  if (null == _0x136361 || _0x136361 === Hn) return _0x1f54d1;
  return function (_0x5e8522) {
    return _0x1f54d1(_0x136361(_0x5e8522));
  };
}
function jn(_0x4a8bbc, _0x30d487) {
  return function () {
    _0x4a8bbc.apply(this, arguments);
    _0x30d487.apply(this, arguments);
  };
}
function Yn(_0x34d87d, _0x5319fe) {
  if (_0x34d87d === zn) return _0x5319fe;
  return function () {
    var _0x368069 = _0x34d87d.apply(this, arguments);
    void 0 !== _0x368069 && (arguments[0] = _0x368069);
    var _0xf2bcd = this.onsuccess,
      _0xb3c254 = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var _0x225859 = _0x5319fe.apply(this, arguments);
    _0xf2bcd && (this.onsuccess = this.onsuccess ? jn(_0xf2bcd, this.onsuccess) : _0xf2bcd);
    _0xb3c254 && (this.onerror = this.onerror ? jn(_0xb3c254, this.onerror) : _0xb3c254);
    return void 0 !== _0x225859 ? _0x225859 : _0x368069;
  };
}
function $n(_0x41fcb2, _0x408447) {
  if (_0x41fcb2 === zn) return _0x408447;
  return function () {
    _0x41fcb2.apply(this, arguments);
    var _0x1bdbe6 = this.onsuccess,
      _0x25004c = this.onerror;
    this.onsuccess = this.onerror = null;
    _0x408447.apply(this, arguments);
    _0x1bdbe6 && (this.onsuccess = this.onsuccess ? jn(_0x1bdbe6, this.onsuccess) : _0x1bdbe6);
    _0x25004c && (this.onerror = this.onerror ? jn(_0x25004c, this.onerror) : _0x25004c);
  };
}
function qn(_0x356c22, _0x985256) {
  if (_0x356c22 === zn) return _0x985256;
  return function (_0x58e0c7) {
    var _0x366d56 = _0x356c22.apply(this, arguments);
    Gs(_0x58e0c7, _0x366d56);
    var _0x32c014 = this.onsuccess,
      _0x1eb63a = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var _0x176f8c = _0x985256.apply(this, arguments);
    _0x32c014 && (this.onsuccess = this.onsuccess ? jn(_0x32c014, this.onsuccess) : _0x32c014);
    _0x1eb63a && (this.onerror = this.onerror ? jn(_0x1eb63a, this.onerror) : _0x1eb63a);
    if (void 0 === _0x366d56) return void 0 === _0x176f8c ? void 0 : _0x176f8c;
    return Gs(_0x366d56, _0x176f8c);
  };
}
function Jn(_0x4e9074, _0x2604f2) {
  if (_0x4e9074 === zn) return _0x2604f2;
  return function () {
    return false !== _0x2604f2.apply(this, arguments) && _0x4e9074.apply(this, arguments);
  };
}
function Qn(_0x251cd6, _0x47bb4b) {
  if (_0x251cd6 === zn) return _0x47bb4b;
  return function () {
    var _0x526017 = _0x251cd6.apply(this, arguments);
    if (_0x526017 && "function" == typeof _0x526017.then) {
      for (var _0x114cf7 = this, _0x401e9e = arguments.length, _0x43b984 = new Array(_0x401e9e); _0x401e9e--;) _0x43b984[_0x401e9e] = arguments[_0x401e9e];
      return _0x526017.then(function () {
        return _0x47bb4b.apply(_0x114cf7, _0x43b984);
      });
    }
    return _0x47bb4b.apply(this, arguments);
  };
}
Gn.ModifyError = En;
Gn.DexieError = Tn;
Gn.BulkError = Bn;
var ea = {};
const ta = 100,
  [ra, sa, na] = "undefined" == typeof Promise ? [] : (() => {
    let _0x2bc6f0 = Promise.resolve();
    if ("undefined" == typeof crypto || !crypto.subtle) return [_0x2bc6f0, zs(_0x2bc6f0), _0x2bc6f0];
    const _0x253a82 = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
    return [_0x253a82, zs(_0x253a82), _0x2bc6f0];
  })(),
  aa = sa && sa.then,
  ia = ra && ra.constructor,
  oa = !!na;
var ua = false,
  ca = na ? () => {
    na.then(Pa);
  } : Vs.setImmediate ? setImmediate.bind(null, Pa) : Vs.MutationObserver ? () => {
    var _0x77c31f = document.createElement('div');
    new MutationObserver(() => {
      Pa();
      _0x77c31f = null;
    }).observe(_0x77c31f, {
      attributes: true
    });
    _0x77c31f.setAttribute('i', '1');
  } : () => {
    setTimeout(Pa, 0);
  },
  la = function (_0x43777f, _0x50286a) {
    ba.push([_0x43777f, _0x50286a]);
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
      this.unhandleds.forEach(_0x117e3f => {
        try {
          si(_0x117e3f[0], _0x117e3f[1]);
        } catch (_0x3b155f) {}
      });
    }
  },
  wa = ya,
  ba = [],
  _a = 0,
  va = [];
function ka(_0xdde280) {
  if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
  this._listeners = [];
  this.onuncatched = zn;
  this._lib = false;
  var _0x4c16e3 = this._PSD = wa;
  Sn && (this._stackHolder = Kn(), this._prev = null, this._numPrev = 0);
  if ('function' != typeof _0xdde280) {
    if (_0xdde280 !== ea) throw new TypeError("Not a function");
    this._state = arguments[1];
    this._value = arguments[2];
    return void (false === this._state && Da(this, this._value));
  }
  this._state = null;
  this._value = null;
  ++_0x4c16e3.ref;
  Ua(this, _0xdde280);
}
const Ca = {
  get: function () {
    var _0x4faa1b = wa,
      _0x2e8b5c = Ga;
    function _0x5d64c9(_0x5c396d, _0xef1df9) {
      var _0x5ad09a = !_0x4faa1b.global && (_0x4faa1b !== wa || _0x2e8b5c !== Ga);
      const _0x889b59 = _0x5ad09a && !ja();
      var _0x3188bf = new ka((_0x1bcc43, _0x310b32) => {
        xa(this, new Sa(ei(_0x5c396d, _0x4faa1b, _0x5ad09a, _0x889b59), ei(_0xef1df9, _0x4faa1b, _0x5ad09a, _0x889b59), _0x1bcc43, _0x310b32, _0x4faa1b));
      });
      Sn && Ia(_0x3188bf, this);
      return _0x3188bf;
    }
    _0x5d64c9.prototype = ea;
    return _0x5d64c9;
  },
  set: function (_0x2d303f) {
    $s(this, "then", _0x2d303f && _0x2d303f.prototype === ea ? Ca : {
      get: function () {
        return _0x2d303f;
      },
      set: Ca.set
    });
  }
};
function Sa(_0x4f29d5, _0x179bd8, _0x355a21, _0x3e8357, _0x1c1fb7) {
  this.onFulfilled = "function" == typeof _0x4f29d5 ? _0x4f29d5 : null;
  this.onRejected = "function" == typeof _0x179bd8 ? _0x179bd8 : null;
  this.resolve = _0x355a21;
  this.reject = _0x3e8357;
  this.psd = _0x1c1fb7;
}
function Ua(_0x552333, _0x515015) {
  try {
    _0x515015(_0x1b746b => {
      if (null === _0x552333._state) {
        if (_0x1b746b === _0x552333) throw new TypeError("A promise cannot be resolved with itself.");
        var _0x5c7b2d = _0x552333._lib && Ma();
        if (_0x1b746b && 'function' == typeof _0x1b746b.then) Ua(_0x552333, (_0x35e22b, _0x117f41) => {
          if (_0x1b746b instanceof ka) _0x1b746b._then(_0x35e22b, _0x117f41);else _0x1b746b.then(_0x35e22b, _0x117f41);
        });else {
          _0x552333._state = true;
          _0x552333._value = _0x1b746b;
          Oa(_0x552333);
        }
        _0x5c7b2d && Ta();
      }
    }, Da.bind(null, _0x552333));
  } catch (_0xc19b26) {
    Da(_0x552333, _0xc19b26);
  }
}
function Da(_0x30cfe3, _0x3658f0) {
  ga.push(_0x3658f0);
  if (null === _0x30cfe3._state) {
    var _0x4b01c6 = _0x30cfe3._lib && Ma();
    _0x3658f0 = pa(_0x3658f0);
    _0x30cfe3._state = false;
    _0x30cfe3._value = _0x3658f0;
    Sn && null !== _0x3658f0 && 'object' == typeof _0x3658f0 && !_0x3658f0._promise && function (_0x494d26, _0xe8ff64, _0x40c859) {
      try {
        (() => {
          var _0x1b1d3c = Xs(_0x3658f0, "stack");
          _0x3658f0._promise = _0x30cfe3;
          $s(_0x3658f0, "stack", {
            get: () => ua ? _0x1b1d3c && (_0x1b1d3c.get ? _0x1b1d3c.get.apply(_0x3658f0) : _0x1b1d3c.value) : _0x30cfe3.stack
          });
        }).apply(null, void 0);
      } catch (_0x301ca0) {}
    }();
    _0x3e8d76 = _0x30cfe3;
    da.some(_0x5a1001 => _0x5a1001._value === _0x3e8d76._value) || da.push(_0x3e8d76);
    Oa(_0x30cfe3);
    _0x4b01c6 && Ta();
  }
  var _0x3e8d76;
}
function Oa(_0x4d2f0e) {
  var _0x53594a = _0x4d2f0e._listeners;
  _0x4d2f0e._listeners = [];
  for (var _0x4bb046 = 0, _0x2e3c80 = _0x53594a.length; _0x4bb046 < _0x2e3c80; ++_0x4bb046) xa(_0x4d2f0e, _0x53594a[_0x4bb046]);
  var _0x22ed00 = _0x4d2f0e._PSD;
  --_0x22ed00.ref || _0x22ed00.finalize();
  0 === _a && (++_a, la(() => {
    0 == --_a && Ra();
  }, []));
}
function xa(_0x1f2274, _0x49a2e6) {
  if (null !== _0x1f2274._state) {
    var _0x2c70b0 = _0x1f2274._state ? _0x49a2e6.onFulfilled : _0x49a2e6.onRejected;
    if (null === _0x2c70b0) return (_0x1f2274._state ? _0x49a2e6.resolve : _0x49a2e6.reject)(_0x1f2274._value);
    ++_0x49a2e6.psd.ref;
    ++_a;
    la(Ka, [_0x2c70b0, _0x1f2274, _0x49a2e6]);
  } else _0x1f2274._listeners.push(_0x49a2e6);
}
function Ka(_0x269ab8, _0x5be656, _0x283184) {
  try {
    ma = _0x5be656;
    var _0x3de6db,
      _0x5ac085 = _0x5be656._value;
    if (_0x5be656._state) _0x3de6db = _0x269ab8(_0x5ac085);else {
      ga.length && (ga = []);
      _0x3de6db = _0x269ab8(_0x5ac085);
      -1 === ga.indexOf(_0x5ac085) && function (_0x17b926) {
        for (var _0x2b92a6 = da.length; _0x2b92a6;) if (da[--_0x2b92a6]._value === _0x17b926._value) return void da.splice(_0x2b92a6, 1);
      }(_0x5be656);
    }
    _0x283184.resolve(_0x3de6db);
  } catch (_0x5bdefe) {
    _0x283184.reject(_0x5bdefe);
  } finally {
    ma = null;
    0 == --_a && Ra();
    --_0x283184.psd.ref || _0x283184.psd.finalize();
  }
}
function Aa(_0x59ef5b, _0x559609, _0x105641) {
  if (_0x559609.length === _0x105641) return _0x559609;
  var _0x6b8410 = '';
  if (false === _0x59ef5b._state) {
    var _0x4c8e71,
      _0x1233fd,
      _0x21bc2f = _0x59ef5b._value;
    if (null != _0x21bc2f) {
      _0x4c8e71 = _0x21bc2f.name || "Error";
      _0x1233fd = _0x21bc2f.message || _0x21bc2f;
      _0x6b8410 = An(_0x21bc2f, 0);
    } else {
      _0x4c8e71 = _0x21bc2f;
      _0x1233fd = '';
    }
    _0x559609.push(_0x4c8e71 + (_0x1233fd ? ':\x20' + _0x1233fd : '') + _0x6b8410);
  }
  Sn && ((_0x6b8410 = An(_0x59ef5b._stackHolder, 2)) && -1 === _0x559609.indexOf(_0x6b8410) && _0x559609.push(_0x6b8410), _0x59ef5b._prev && Aa(_0x59ef5b._prev, _0x559609, _0x105641));
  return _0x559609;
}
function Ia(_0x591a8e, _0x4f54ff) {
  var _0x12e18e = _0x4f54ff ? _0x4f54ff._numPrev + 1 : 0;
  _0x12e18e < 100 && (_0x591a8e._prev = _0x4f54ff, _0x591a8e._numPrev = _0x12e18e);
}
function Pa() {
  Ma() && Ta();
}
function Ma() {
  var _0x222309 = fa;
  fa = false;
  ha = false;
  return _0x222309;
}
function Ta() {
  var _0x30264b, _0x34938e, _0x3f9a5e;
  do {
    for (; ba.length > 0;) {
      _0x30264b = ba;
      ba = [];
      _0x3f9a5e = _0x30264b.length;
      for (_0x34938e = 0; _0x34938e < _0x3f9a5e; ++_0x34938e) {
        var _0x29b504 = _0x30264b[_0x34938e];
        _0x29b504[0].apply(null, _0x29b504[1]);
      }
    }
  } while (ba.length > 0);
  fa = true;
  ha = true;
}
function Ra() {
  var _0x3d9318 = da;
  da = [];
  _0x3d9318.forEach(_0xe8785b => {
    _0xe8785b._PSD.onunhandled.call(null, _0xe8785b._value, _0xe8785b);
  });
  for (var _0x590d2f = va.slice(0), _0x12cfc3 = _0x590d2f.length; _0x12cfc3;) _0x590d2f[--_0x12cfc3]();
}
function Ea(_0x18d990) {
  return new ka(ea, false, _0x18d990);
}
function Ba(_0x590fd9, _0x5de640) {
  var _0x1e5322 = wa;
  return function () {
    var _0x226523 = Ma(),
      _0x504243 = wa;
    try {
      Ja(_0x1e5322, true);
      return _0x590fd9.apply(this, arguments);
    } catch (_0x1fa403) {
      _0x5de640 && _0x5de640(_0x1fa403);
    } finally {
      Ja(_0x504243, false);
      _0x226523 && Ta();
    }
  };
}
js(ka.prototype, {
  then: Ca,
  _then: function (_0x44992d, _0x74317d) {
    xa(this, new Sa(null, null, _0x44992d, _0x74317d, wa));
  },
  catch: function (_0x294428) {
    if (1 === arguments.length) return this.then(null, _0x294428);
    var _0x298f65 = arguments[0],
      _0x299135 = arguments[1];
    if ("function" == typeof _0x298f65) return this.then(null, _0x37b7af => _0x37b7af instanceof _0x298f65 ? _0x299135(_0x37b7af) : Ea(_0x37b7af));
    return this.then(null, _0x36cb83 => _0x36cb83 && _0x36cb83.name === _0x298f65 ? _0x299135(_0x36cb83) : Ea(_0x36cb83));
  },
  finally: function (_0x25fdd9) {
    return this.then(_0x4eae06 => (_0x25fdd9(), _0x4eae06), _0xa3b3ed => (_0x25fdd9(), Ea(_0xa3b3ed)));
  },
  stack: {
    get: function () {
      if (this._stack) return this._stack;
      try {
        ua = true;
        var _0x884d0e = Aa(this, [], 20).join("\nFrom previous: ");
        null !== this._state && (this._stack = _0x884d0e);
        return _0x884d0e;
      } finally {
        ua = false;
      }
    }
  },
  timeout: function (_0x5c5b47, _0x2795e3) {
    if (_0x5c5b47 < 1 / 0) return new ka((_0xf46099, _0x202540) => {
      var _0x119e9a = setTimeout(() => _0x202540(new Fn.Timeout(_0x2795e3)), _0x5c5b47);
      this.then(_0xf46099, _0x202540).finally(clearTimeout.bind(null, _0x119e9a));
    });
    return this;
  }
});
"undefined" != typeof Symbol && Symbol.toStringTag && $s(ka.prototype, Symbol.toStringTag, 'Dexie.Promise');
ya.env = Xa();
js(ka, {
  all: function () {
    var _0x3482ee = kn.apply(null, arguments).map(Ya);
    return new ka(function (_0x2dcc94, _0x4f9cb7) {
      0 === _0x3482ee.length && _0x2dcc94([]);
      var _0x39b8d0 = _0x3482ee.length;
      _0x3482ee.forEach((_0xe2ee2b, _0x29eb9b) => ka.resolve(_0xe2ee2b).then(_0x1017e4 => {
        _0x3482ee[_0x29eb9b] = _0x1017e4;
        --_0x39b8d0 || _0x2dcc94(_0x3482ee);
      }, _0x4f9cb7));
    });
  },
  resolve: _0x289298 => {
    if (_0x289298 instanceof ka) return _0x289298;
    if (_0x289298 && "function" == typeof _0x289298.then) return new ka((_0x4da920, _0x4a9897) => {
      _0x289298.then(_0x4da920, _0x4a9897);
    });
    var _0x57f472 = new ka(ea, true, _0x289298);
    Ia(_0x57f472, ma);
    return _0x57f472;
  },
  reject: Ea,
  race: function () {
    var _0xd9146 = kn.apply(null, arguments).map(Ya);
    return new ka((_0x18fd71, _0x534099) => {
      _0xd9146.map(_0xaa2575 => ka.resolve(_0xaa2575).then(_0x18fd71, _0x534099));
    });
  },
  PSD: {
    get: () => wa,
    set: _0x1dc7ba => wa = _0x1dc7ba
  },
  totalEchoes: {
    get: () => Ga
  },
  newPSD: Ha,
  usePSD: Za,
  scheduler: {
    get: () => la,
    set: _0x1cb6e4 => {
      la = _0x1cb6e4;
    }
  },
  rejectionMapper: {
    get: () => pa,
    set: _0x479770 => {
      pa = _0x479770;
    }
  },
  follow: (_0x28e5de, _0x3aa76f) => new ka((_0x1dec95, _0x3248b5) => Ha((_0x596f6b, _0x40ad7c) => {
    var _0x5ed652 = wa;
    _0x5ed652.unhandleds = [];
    _0x5ed652.onunhandled = _0x40ad7c;
    _0x5ed652.finalize = jn(function () {
      var _0x4fae0e;
      _0x4fae0e = () => {
        if (0 === this.unhandleds.length) _0x596f6b();else _0x40ad7c(this.unhandleds[0]);
      };
      va.push(function _0x28427e() {
        _0x4fae0e();
        va.splice(va.indexOf(_0x28427e), 1);
      });
      ++_a;
      la(() => {
        0 == --_a && Ra();
      }, []);
    }, _0x5ed652.finalize);
    _0x28e5de();
  }, _0x3aa76f, _0x1dec95, _0x3248b5))
});
ia && (ia.allSettled && $s(ka, 'allSettled', function () {
  const _0x451107 = kn.apply(null, arguments).map(Ya);
  return new ka(_0x1a3074 => {
    0 === _0x451107.length && _0x1a3074([]);
    let _0x5862ac = _0x451107.length;
    const _0x1739ee = new Array(_0x5862ac);
    _0x451107.forEach((_0x35fcaa, _0x3d887a) => ka.resolve(_0x35fcaa).then(_0x22a9b2 => _0x1739ee[_0x3d887a] = {
      status: 'fulfilled',
      value: _0x22a9b2
    }, _0x34cf9b => _0x1739ee[_0x3d887a] = {
      status: "rejected",
      reason: _0x34cf9b
    }).then(() => --_0x5862ac || _0x1a3074(_0x1739ee)));
  });
}), ia.any && "undefined" != typeof AggregateError && $s(ka, 'any', function () {
  const _0x5b3e15 = kn.apply(null, arguments).map(Ya);
  return new ka((_0x564651, _0xed6a4f) => {
    0 === _0x5b3e15.length && _0xed6a4f(new AggregateError([]));
    let _0x4784d7 = _0x5b3e15.length;
    const _0x3fa550 = new Array(_0x4784d7);
    _0x5b3e15.forEach((_0x2f8576, _0x275217) => ka.resolve(_0x2f8576).then(_0x173c24 => _0x564651(_0x173c24), _0x299abf => {
      _0x3fa550[_0x275217] = _0x299abf;
      --_0x4784d7 || _0xed6a4f(new AggregateError(_0x3fa550));
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
function Ha(_0x41f938, _0xf699ba, _0x2196ae, _0x489c31) {
  var _0x2a9a7b = wa,
    _0x35f728 = Object.create(_0x2a9a7b);
  _0x35f728.parent = _0x2a9a7b;
  _0x35f728.ref = 0;
  _0x35f728.global = false;
  _0x35f728.id = ++za;
  var _0x59ccf2 = ya.env;
  _0x35f728.env = oa ? {
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
    nthen: ti(_0x59ccf2.nthen, _0x35f728),
    gthen: ti(_0x59ccf2.gthen, _0x35f728)
  } : {};
  _0xf699ba && Gs(_0x35f728, _0xf699ba);
  ++_0x2a9a7b.ref;
  _0x35f728.finalize = function () {
    --this.parent.ref || this.parent.finalize();
  };
  var _0x3221b9 = Za(_0x35f728, _0x41f938, _0x2196ae, _0x489c31);
  0 === _0x35f728.ref && _0x35f728.finalize();
  return _0x3221b9;
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
function Ya(_0x57c7d6) {
  if (La.echoes && _0x57c7d6 && _0x57c7d6.constructor === ia) {
    Wa();
    return _0x57c7d6.then(_0x3dbf9e => (ja(), _0x3dbf9e), _0x16b8fe => (ja(), ni(_0x16b8fe)));
  }
  return _0x57c7d6;
}
function $a(_0x4685ab) {
  ++Ga;
  La.echoes && 0 != --La.echoes || (La.echoes = La.id = 0);
  Fa.push(wa);
  Ja(_0x4685ab, true);
}
function qa() {
  var _0x404ec6 = Fa[Fa.length - 1];
  Fa.pop();
  Ja(_0x404ec6, false);
}
function Ja(_0x3f3d88, _0x1b474d) {
  var _0x391157 = wa;
  (_0x1b474d ? !La.echoes || Na++ && _0x3f3d88 === wa : !Na || --Na && _0x3f3d88 === wa) || Qa(_0x1b474d ? $a.bind(null, _0x3f3d88) : qa);
  if (_0x3f3d88 !== wa && (wa = _0x3f3d88, _0x391157 === ya && (ya.env = Xa()), oa)) {
    var _0x590e12 = ya.env.Promise,
      _0x5f2f3e = _0x3f3d88.env;
    sa.then = _0x5f2f3e.nthen;
    _0x590e12.prototype.then = _0x5f2f3e.gthen;
    (_0x391157.global || _0x3f3d88.global) && (Object.defineProperty(Vs, "Promise", _0x5f2f3e.PromiseProp), _0x590e12.all = _0x5f2f3e.all, _0x590e12.race = _0x5f2f3e.race, _0x590e12.resolve = _0x5f2f3e.resolve, _0x590e12.reject = _0x5f2f3e.reject, _0x5f2f3e.allSettled && (_0x590e12.allSettled = _0x5f2f3e.allSettled), _0x5f2f3e.any && (_0x590e12.any = _0x5f2f3e.any));
  }
}
function Xa() {
  var _0x147863 = Vs.Promise;
  if (oa) return {
    Promise: _0x147863,
    PromiseProp: Object.getOwnPropertyDescriptor(Vs, "Promise"),
    all: _0x147863.all,
    race: _0x147863.race,
    allSettled: _0x147863.allSettled,
    any: _0x147863.any,
    resolve: _0x147863.resolve,
    reject: _0x147863.reject,
    nthen: sa.then,
    gthen: _0x147863.prototype.then
  };
  return {};
}
function Za(_0x1beace, _0x3a30d6, _0x3251b3, _0x1c23d3, _0x3ce968) {
  var _0x1cfe68 = wa;
  try {
    Ja(_0x1beace, true);
    return _0x3a30d6(_0x3251b3, _0x1c23d3, _0x3ce968);
  } finally {
    Ja(_0x1cfe68, false);
  }
}
function Qa(_0x270851) {
  aa.call(ra, _0x270851);
}
function ei(_0xb8d613, _0x1b4bc6, _0x5ed956, _0x3f74d4) {
  if ("function" != typeof _0xb8d613) return _0xb8d613;
  return function () {
    var _0x43be57 = wa;
    _0x5ed956 && Wa();
    Ja(_0x1b4bc6, true);
    try {
      return _0xb8d613.apply(this, arguments);
    } finally {
      Ja(_0x43be57, false);
      _0x3f74d4 && Qa(ja);
    }
  };
}
function ti(_0x7deee4, _0x196c1d) {
  return function (_0x58e0b9, _0x423b55) {
    return _0x7deee4.call(this, ei(_0x58e0b9, _0x196c1d), ei(_0x423b55, _0x196c1d));
  };
}
-1 === ('' + aa).indexOf("[native code]") && (Wa = ja = zn);
const ri = 'unhandledrejection';
function si(_0x3de2b6, _0x4c778b) {
  var _0x2e0136;
  try {
    _0x2e0136 = _0x4c778b.onuncatched(_0x3de2b6);
  } catch (_0x4762fd) {}
  if (false !== _0x2e0136) try {
    var _0x5038ec,
      _0x134be7 = {
        promise: _0x4c778b,
        reason: _0x3de2b6
      };
    if (Vs.document && document.createEvent) {
      (_0x5038ec = document.createEvent("Event")).initEvent(ri, true, true);
      Gs(_0x5038ec, _0x134be7);
    } else Vs.CustomEvent && Gs(_0x5038ec = new CustomEvent(ri, {
      detail: _0x134be7
    }), _0x134be7);
    if (_0x5038ec && Vs.dispatchEvent && (dispatchEvent(_0x5038ec), !Vs.PromiseRejectionEvent && Vs.onunhandledrejection)) try {
      Vs.onunhandledrejection(_0x5038ec);
    } catch (_0x28ac9d) {}
    Sn && _0x5038ec && !_0x5038ec.defaultPrevented && _0x3de2b6.stack;
  } catch (_0x36dbf2) {}
}
var ni = ka.reject;
function ai(_0x542235, _0xeabba2, _0x55b198, _0x50b38c) {
  if (_0x542235.idbdb && (_0x542235._state.openComplete || wa.letThrough || _0x542235._vip)) {
    var _0x2b7f14 = _0x542235._createTransaction(_0xeabba2, _0x55b198, _0x542235._dbSchema);
    try {
      _0x2b7f14.create();
      _0x542235._state.PR1398_maxLoop = 3;
    } catch (_0x44fcb9) {
      if (_0x44fcb9.name === Ln.InvalidState && _0x542235.isOpen() && --_0x542235._state.PR1398_maxLoop > 0) {
        _0x542235._close();
        return _0x542235.open().then(() => ai(_0x542235, _0xeabba2, _0x55b198, _0x50b38c));
      }
      return ni(_0x44fcb9);
    }
    return _0x2b7f14._promise(_0xeabba2, (_0x3183c5, _0x16ff08) => Ha(() => (wa.trans = _0x2b7f14, _0x50b38c(_0x3183c5, _0x16ff08, _0x2b7f14)))).then(_0x2accc4 => _0x2b7f14._completion.then(() => _0x2accc4));
  }
  if (_0x542235._state.openComplete) return ni(new Fn.DatabaseClosed(_0x542235._state.dbOpenError));
  if (!_0x542235._state.isBeingOpened) {
    if (!_0x542235._options.autoOpen) return ni(new Fn.DatabaseClosed());
    _0x542235.open().catch(zn);
  }
  return _0x542235._state.dbReadyPromise.then(() => ai(_0x542235, _0xeabba2, _0x55b198, _0x50b38c));
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
  mi = _0x25cd69 => !/(dexie\.js|dexie\.min\.js)/.test(_0x25cd69),
  pi = "__dbnames",
  yi = 'readonly',
  wi = "readwrite";
function bi(_0x316751, _0x5367a5) {
  if (_0x316751) return _0x5367a5 ? function () {
    return _0x316751.apply(this, arguments) && _0x5367a5.apply(this, arguments);
  } : _0x316751;
  return _0x5367a5;
}
const _i = {
  type: 3,
  lower: -1 / 0,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function vi(_0x2d8465) {
  if ('string' != typeof _0x2d8465 || /\./.test(_0x2d8465)) return _0x131a3e => _0x131a3e;
  return _0x4cad3d => (void 0 === _0x4cad3d[_0x2d8465] && _0x2d8465 in _0x4cad3d && delete (_0x4cad3d = mn(_0x4cad3d))[_0x2d8465], _0x4cad3d);
}
class jt {
  ["_trans"](_0x466591, _0x79a003, _0x281b0e) {
    const _0x321887 = this._tx || wa.trans,
      _0x5f5031 = this.name;
    function _0x5afa69(_0x12f37f, _0x284655, _0x1aa88b) {
      if (!_0x1aa88b.schema[_0x5f5031]) throw new Fn.NotFound("Table " + _0x5f5031 + " not part of transaction");
      return _0x79a003(_0x1aa88b.idbtrans, _0x1aa88b);
    }
    const _0x4b4d79 = Ma();
    try {
      if (_0x321887 && _0x321887.db === this.db) return _0x321887 === wa.trans ? _0x321887._promise(_0x466591, _0x5afa69, _0x281b0e) : Ha(() => _0x321887._promise(_0x466591, _0x5afa69, _0x281b0e), {
        trans: _0x321887,
        transless: wa.transless || wa
      });
      return ai(this.db, _0x466591, [this.name], _0x5afa69);
    } finally {
      _0x4b4d79 && Ta();
    }
  }
  ['get'](_0x8ae052, _0x4471b4) {
    if (_0x8ae052 && _0x8ae052.constructor === Object) return this.where(_0x8ae052).first(_0x4471b4);
    return this._trans("readonly", _0x12fec0 => this.core.get({
      trans: _0x12fec0,
      key: _0x8ae052
    }).then(_0x549217 => this.hook.reading.fire(_0x549217))).then(_0x4471b4);
  }
  ["where"](_0x48a529) {
    if ('string' == typeof _0x48a529) return new this.db.WhereClause(this, _0x48a529);
    if (Ns(_0x48a529)) return new this.db.WhereClause(this, '[' + _0x48a529.join('+') + ']');
    const _0x508657 = Fs(_0x48a529);
    if (1 === _0x508657.length) return this.where(_0x508657[0]).equals(_0x48a529[_0x508657[0]]);
    const _0x680a6c = this.schema.indexes.concat(this.schema.primKey).filter(_0x40e723 => _0x40e723.compound && _0x508657.every(_0x4439a6 => _0x40e723.keyPath.indexOf(_0x4439a6) >= 0) && _0x40e723.keyPath.every(_0x5f50c2 => _0x508657.indexOf(_0x5f50c2) >= 0))[0];
    if (_0x680a6c && this.db._maxKey !== oi) return this.where(_0x680a6c.name).equals(_0x680a6c.keyPath.map(_0x4227d4 => _0x48a529[_0x4227d4]));
    !_0x680a6c && Sn && (JSON.stringify(_0x48a529), this.name, _0x508657.join('+'));
    const {
        idxByName: _0x29e5e7
      } = this.schema,
      _0x109664 = this.db._deps.indexedDB;
    function _0x1bb867(_0x9c0df, _0x1fd1ea) {
      try {
        return 0 === _0x109664.cmp(_0x9c0df, _0x1fd1ea);
      } catch (_0x40329e) {
        return false;
      }
    }
    const [_0x579f3f, _0x148049] = _0x508657.reduce(([_0x21a68d, _0x53e45a], _0x23cae6) => {
      const _0x2d190e = _0x29e5e7[_0x23cae6],
        _0x4f06c3 = _0x48a529[_0x23cae6];
      return [_0x21a68d || _0x2d190e, _0x21a68d || !_0x2d190e ? bi(_0x53e45a, _0x2d190e && _0x2d190e.multi ? _0x95af18 => {
        const _0x8a7f38 = on(_0x95af18, _0x23cae6);
        return Ns(_0x8a7f38) && _0x8a7f38.some(_0xffe335 => _0x1bb867(_0x4f06c3, _0xffe335));
      } : _0x5130b4 => _0x1bb867(_0x4f06c3, on(_0x5130b4, _0x23cae6))) : _0x53e45a];
    }, [null, null]);
    if (_0x579f3f) return this.where(_0x579f3f.name).equals(_0x48a529[_0x579f3f.keyPath]).filter(_0x148049);
    if (_0x680a6c) return this.filter(_0x148049);
    return this.where(_0x508657).equals('');
  }
  ["filter"](_0x58bd67) {
    return this.toCollection().and(_0x58bd67);
  }
  ["count"](_0x305928) {
    return this.toCollection().count(_0x305928);
  }
  ["offset"](_0x57070f) {
    return this.toCollection().offset(_0x57070f);
  }
  ['limit'](_0x8e32f7) {
    return this.toCollection().limit(_0x8e32f7);
  }
  ["each"](_0x33d2cc) {
    return this.toCollection().each(_0x33d2cc);
  }
  ['toArray'](_0x4a0d03) {
    return this.toCollection().toArray(_0x4a0d03);
  }
  ['toCollection']() {
    return new this.db.Collection(new this.db.WhereClause(this));
  }
  ['orderBy'](_0x450c69) {
    return new this.db.Collection(new this.db.WhereClause(this, Ns(_0x450c69) ? '[' + _0x450c69.join('+') + ']' : _0x450c69));
  }
  ["reverse"]() {
    return this.toCollection().reverse();
  }
  ["mapToClass"](_0x37c4a6) {
    this.schema.mappedClass = _0x37c4a6;
    const _0x330d2c = _0x593c5f => {
      if (!_0x593c5f) return _0x593c5f;
      const _0x1c4179 = Object.create(_0x37c4a6.prototype);
      for (var _0x15491f in _0x593c5f) if (Ws(_0x593c5f, _0x15491f)) try {
        _0x1c4179[_0x15491f] = _0x593c5f[_0x15491f];
      } catch (_0x268b08) {}
      return _0x1c4179;
    };
    this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook);
    this.schema.readHook = _0x330d2c;
    this.hook("reading", _0x330d2c);
    return _0x37c4a6;
  }
  ["defineClass"]() {
    return this.mapToClass(function (_0x8861c3) {
      Gs(this, _0x8861c3);
    });
  }
  ["add"](_0x12549a, _0x4471a7) {
    const {
      auto: _0x4722a3,
      keyPath: _0x3c283d
    } = this.schema.primKey;
    let _0x1822fd = _0x12549a;
    _0x3c283d && _0x4722a3 && (_0x1822fd = vi(_0x3c283d)(_0x12549a));
    return this._trans("readwrite", _0x49914e => this.core.mutate({
      trans: _0x49914e,
      type: "add",
      keys: null != _0x4471a7 ? [_0x4471a7] : null,
      values: [_0x1822fd]
    })).then(_0x14f2bf => _0x14f2bf.numFailures ? ka.reject(_0x14f2bf.failures[0]) : _0x14f2bf.lastResult).then(_0xd275bd => {
      if (_0x3c283d) try {
        un(_0x12549a, _0x3c283d, _0xd275bd);
      } catch (_0x926808) {}
      return _0xd275bd;
    });
  }
  ["update"](_0x4baff3, _0x4b39de) {
    if ("object" != typeof _0x4baff3 || Ns(_0x4baff3)) return this.where(":id").equals(_0x4baff3).modify(_0x4b39de);
    {
      const _0x151efa = on(_0x4baff3, this.schema.primKey.keyPath);
      if (void 0 === _0x151efa) return ni(new Fn.InvalidArgument('Given\x20object\x20does\x20not\x20contain\x20its\x20primary\x20key'));
      try {
        if ('function' != typeof _0x4b39de) Fs(_0x4b39de).forEach(_0x4a3053 => {
          un(_0x4baff3, _0x4a3053, _0x4b39de[_0x4a3053]);
        });else _0x4b39de(_0x4baff3, {
          value: _0x4baff3,
          primKey: _0x151efa
        });
      } catch (_0xe2e6d6) {}
      return this.where(":id").equals(_0x151efa).modify(_0x4b39de);
    }
  }
  ["put"](_0x3b5edf, _0x3b488b) {
    const {
      auto: _0x431c02,
      keyPath: _0x267f72
    } = this.schema.primKey;
    let _0x5f046f = _0x3b5edf;
    _0x267f72 && _0x431c02 && (_0x5f046f = vi(_0x267f72)(_0x3b5edf));
    return this._trans('readwrite', _0x4f67b3 => this.core.mutate({
      trans: _0x4f67b3,
      type: "put",
      values: [_0x5f046f],
      keys: null != _0x3b488b ? [_0x3b488b] : null
    })).then(_0x391187 => _0x391187.numFailures ? ka.reject(_0x391187.failures[0]) : _0x391187.lastResult).then(_0x1c1084 => {
      if (_0x267f72) try {
        un(_0x3b5edf, _0x267f72, _0x1c1084);
      } catch (_0x1e2d2d) {}
      return _0x1c1084;
    });
  }
  ["delete"](_0x4dca38) {
    return this._trans("readwrite", _0x3ee1ff => this.core.mutate({
      trans: _0x3ee1ff,
      type: "delete",
      keys: [_0x4dca38]
    })).then(_0x1656c0 => _0x1656c0.numFailures ? ka.reject(_0x1656c0.failures[0]) : void 0);
  }
  ["clear"]() {
    return this._trans('readwrite', _0x474ccf => this.core.mutate({
      trans: _0x474ccf,
      type: "deleteRange",
      range: _i
    })).then(_0x5b03c7 => _0x5b03c7.numFailures ? ka.reject(_0x5b03c7.failures[0]) : void 0);
  }
  ["bulkGet"](_0x2d932b) {
    return this._trans("readonly", _0x44be60 => this.core.getMany({
      keys: _0x2d932b,
      trans: _0x44be60
    }).then(_0x2af519 => _0x2af519.map(_0x3afb3f => this.hook.reading.fire(_0x3afb3f))));
  }
  ['bulkAdd'](_0x31672e, _0x4f5993, _0x5c372b) {
    const _0x37b118 = Array.isArray(_0x4f5993) ? _0x4f5993 : void 0,
      _0x5d40ba = (_0x5c372b = _0x5c372b || (_0x37b118 ? void 0 : _0x4f5993)) ? _0x5c372b.allKeys : void 0;
    return this._trans("readwrite", _0x15ce39 => {
      const {
        auto: _0x199553,
        keyPath: _0x16eec0
      } = this.schema.primKey;
      if (_0x16eec0 && _0x37b118) throw new Fn.InvalidArgument('bulkAdd():\x20keys\x20argument\x20invalid\x20on\x20tables\x20with\x20inbound\x20keys');
      if (_0x37b118 && _0x37b118.length !== _0x31672e.length) throw new Fn.InvalidArgument("Arguments objects and keys must have the same length");
      const _0x569a15 = _0x31672e.length;
      let _0x107a7d = _0x16eec0 && _0x199553 ? _0x31672e.map(vi(_0x16eec0)) : _0x31672e;
      return this.core.mutate({
        trans: _0x15ce39,
        type: 'add',
        keys: _0x37b118,
        values: _0x107a7d,
        wantResults: _0x5d40ba
      }).then(({
        numFailures: _0xb04a23,
        results: _0x1ae581,
        lastResult: _0x506365,
        failures: _0x28973a
      }) => {
        if (0 === _0xb04a23) return _0x5d40ba ? _0x1ae581 : _0x506365;
        throw new Bn(this.name + ".bulkAdd(): " + _0xb04a23 + '\x20of\x20' + _0x569a15 + '\x20operations\x20failed', _0x28973a);
      });
    });
  }
  ['bulkPut'](_0x515e08, _0x10c459, _0x59ffdc) {
    const _0x4b521b = Array.isArray(_0x10c459) ? _0x10c459 : void 0,
      _0x20468f = (_0x59ffdc = _0x59ffdc || (_0x4b521b ? void 0 : _0x10c459)) ? _0x59ffdc.allKeys : void 0;
    return this._trans("readwrite", _0x2420c0 => {
      const {
        auto: _0x1e1481,
        keyPath: _0x1e7893
      } = this.schema.primKey;
      if (_0x1e7893 && _0x4b521b) throw new Fn.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (_0x4b521b && _0x4b521b.length !== _0x515e08.length) throw new Fn.InvalidArgument("Arguments objects and keys must have the same length");
      const _0xd1e680 = _0x515e08.length;
      let _0x2aaaf8 = _0x1e7893 && _0x1e1481 ? _0x515e08.map(vi(_0x1e7893)) : _0x515e08;
      return this.core.mutate({
        trans: _0x2420c0,
        type: "put",
        keys: _0x4b521b,
        values: _0x2aaaf8,
        wantResults: _0x20468f
      }).then(({
        numFailures: _0x5d3295,
        results: _0x3051c6,
        lastResult: _0x1010c7,
        failures: _0x6fa480
      }) => {
        if (0 === _0x5d3295) return _0x20468f ? _0x3051c6 : _0x1010c7;
        throw new Bn(this.name + ".bulkPut(): " + _0x5d3295 + '\x20of\x20' + _0xd1e680 + " operations failed", _0x6fa480);
      });
    });
  }
  ["bulkDelete"](_0x12eabe) {
    const _0x1339c6 = _0x12eabe.length;
    return this._trans('readwrite', _0x2ce2ec => this.core.mutate({
      trans: _0x2ce2ec,
      type: "delete",
      keys: _0x12eabe
    })).then(({
      numFailures: _0x9c834c,
      lastResult: _0x5d87fb,
      failures: _0x33a970
    }) => {
      if (0 === _0x9c834c) return _0x5d87fb;
      throw new Bn(this.name + ".bulkDelete(): " + _0x9c834c + " of " + _0x1339c6 + " operations failed", _0x33a970);
    });
  }
}
function ki(_0x16af52) {
  var _0x353470 = {},
    _0x1923a9 = function (_0xdbbd17, _0x13432d) {
      if (_0x13432d) {
        for (var _0x371ba3 = arguments.length, _0x18b006 = new Array(_0x371ba3 - 1); --_0x371ba3;) _0x18b006[_0x371ba3 - 1] = arguments[_0x371ba3];
        _0x353470[_0xdbbd17].subscribe.apply(null, _0x18b006);
        return _0x16af52;
      }
      if ("string" == typeof _0xdbbd17) return _0x353470[_0xdbbd17];
    };
  _0x1923a9.addEventType = _0x440b36;
  for (var _0x1a999c = 1, _0x4432e3 = arguments.length; _0x1a999c < _0x4432e3; ++_0x1a999c) _0x440b36(arguments[_0x1a999c]);
  return _0x1923a9;
  function _0x440b36(_0x77c736, _0x1cf4ae, _0x4a9253) {
    if ('object' != typeof _0x77c736) {
      var _0xc68d4c;
      _0x1cf4ae || (_0x1cf4ae = Jn);
      _0x4a9253 || (_0x4a9253 = zn);
      var _0x586ed3 = {
        subscribers: [],
        fire: _0x4a9253,
        subscribe: function (_0x358372) {
          -1 === _0x586ed3.subscribers.indexOf(_0x358372) && (_0x586ed3.subscribers.push(_0x358372), _0x586ed3.fire = _0x1cf4ae(_0x586ed3.fire, _0x358372));
        },
        unsubscribe: function (_0x61d1d5) {
          _0x586ed3.subscribers = _0x586ed3.subscribers.filter(function (_0x5382d7) {
            return _0x5382d7 !== _0x61d1d5;
          });
          _0x586ed3.fire = _0x586ed3.subscribers.reduce(_0x1cf4ae, _0x4a9253);
        }
      };
      _0x353470[_0x77c736] = _0x1923a9[_0x77c736] = _0x586ed3;
      return _0x586ed3;
    }
    Fs(_0xc68d4c = _0x77c736).forEach(function (_0x3144e0) {
      var _0x2b616f = _0xc68d4c[_0x3144e0];
      if (Ns(_0x2b616f)) _0x440b36(_0x3144e0, _0xc68d4c[_0x3144e0][0], _0xc68d4c[_0x3144e0][1]);else {
        if ("asap" !== _0x2b616f) throw new Fn.InvalidArgument("Invalid event config");
        var _0x6e23c2 = _0x440b36(_0x3144e0, Hn, function () {
          for (var _0x4531a7 = arguments.length, _0x4e317d = new Array(_0x4531a7); _0x4531a7--;) _0x4e317d[_0x4531a7] = arguments[_0x4531a7];
          _0x6e23c2.subscribers.forEach(function (_0x2709aa) {
            sn(function () {
              _0x2709aa.apply(null, _0x4e317d);
            });
          });
        });
      }
    });
  }
}
function Ci(_0x3cc329, _0x13e121) {
  qs(_0x13e121).from({
    prototype: _0x3cc329
  });
  return _0x13e121;
}
function Si(_0x100504, _0x267f49) {
  return !(_0x100504.filter || _0x100504.algorithm || _0x100504.or) && (_0x267f49 ? _0x100504.justLimit : !_0x100504.replayFilter);
}
function Ui(_0xc5fcf3, _0x45a886) {
  _0xc5fcf3.filter = bi(_0xc5fcf3.filter, _0x45a886);
}
function Di(_0x25d520, _0x40ee6a, _0xde5ec) {
  var _0x3c3a2b = _0x25d520.replayFilter;
  _0x25d520.replayFilter = _0x3c3a2b ? () => bi(_0x3c3a2b(), _0x40ee6a()) : _0x40ee6a;
  _0x25d520.justLimit = _0xde5ec && !_0x3c3a2b;
}
function Oi(_0x145206, _0x4b8696) {
  if (_0x145206.isPrimKey) return _0x4b8696.primaryKey;
  const _0x236857 = _0x4b8696.getIndexByKeyPath(_0x145206.index);
  if (!_0x236857) throw new Fn.Schema("KeyPath " + _0x145206.index + " on object store " + _0x4b8696.name + '\x20is\x20not\x20indexed');
  return _0x236857;
}
function xi(_0x1cad65, _0xbf19da, _0x1ebb58) {
  const _0x52df4c = Oi(_0x1cad65, _0xbf19da.schema);
  return _0xbf19da.openCursor({
    trans: _0x1ebb58,
    values: !_0x1cad65.keysOnly,
    reverse: "prev" === _0x1cad65.dir,
    unique: !!_0x1cad65.unique,
    query: {
      index: _0x52df4c,
      range: _0x1cad65.range
    }
  });
}
function Ki(_0x5b6c9d, _0x27e226, _0x53a47c, _0x49b4c6) {
  const _0x8d164f = _0x5b6c9d.replayFilter ? bi(_0x5b6c9d.filter, _0x5b6c9d.replayFilter()) : _0x5b6c9d.filter;
  if (_0x5b6c9d.or) {
    const _0x1e24ef = {},
      _0x139d1c = (_0x3fda35, _0x317c21, _0xebfa06) => {
        if (!_0x8d164f || _0x8d164f(_0x317c21, _0xebfa06, _0x4d1d0a => _0x317c21.stop(_0x4d1d0a), _0x20323c => _0x317c21.fail(_0x20323c))) {
          var _0x173245 = _0x317c21.primaryKey,
            _0x167821 = '' + _0x173245;
          "[object ArrayBuffer]" === _0x167821 && (_0x167821 = '' + new Uint8Array(_0x173245));
          Ws(_0x1e24ef, _0x167821) || (_0x1e24ef[_0x167821] = true, _0x27e226(_0x3fda35, _0x317c21, _0xebfa06));
        }
      };
    return Promise.all([_0x5b6c9d.or._iterate(_0x139d1c, _0x53a47c), Ai(xi(_0x5b6c9d, _0x49b4c6, _0x53a47c), _0x5b6c9d.algorithm, _0x139d1c, !_0x5b6c9d.keysOnly && _0x5b6c9d.valueMapper)]);
  }
  return Ai(xi(_0x5b6c9d, _0x49b4c6, _0x53a47c), bi(_0x5b6c9d.algorithm, _0x8d164f), _0x27e226, !_0x5b6c9d.keysOnly && _0x5b6c9d.valueMapper);
}
function Ai(_0xfc788e, _0x59a759, _0x221598, _0x577445) {
  var _0x58e661 = Ba(_0x577445 ? (_0x21b360, _0x10f6a3, _0x50e8c1) => _0x221598(_0x577445(_0x21b360), _0x10f6a3, _0x50e8c1) : _0x221598);
  return _0xfc788e.then(_0x427e69 => {
    if (_0x427e69) return _0x427e69.start(() => {
      var _0xd0d862 = () => _0x427e69.continue();
      _0x59a759 && !_0x59a759(_0x427e69, _0x217066 => _0xd0d862 = _0x217066, _0x3f417f => {
        _0x427e69.stop(_0x3f417f);
        _0xd0d862 = zn;
      }, _0x3838a5 => {
        _0x427e69.fail(_0x3838a5);
        _0xd0d862 = zn;
      }) || _0x58e661(_0x427e69.value, _0x427e69, _0xd5da5c => _0xd0d862 = _0xd5da5c);
      _0xd0d862();
    });
  });
}
function Ii(_0x52e894, _0x932f38) {
  try {
    const _0x3cc48c = Pi(_0x52e894),
      _0x5eaa09 = Pi(_0x932f38);
    if (_0x3cc48c !== _0x5eaa09) return "Array" === _0x3cc48c ? 1 : "Array" === _0x5eaa09 ? -1 : "binary" === _0x3cc48c ? 1 : "binary" === _0x5eaa09 ? -1 : "string" === _0x3cc48c ? 1 : "string" === _0x5eaa09 ? -1 : "Date" === _0x3cc48c ? 1 : "Date" !== _0x5eaa09 ? NaN : -1;
    switch (_0x3cc48c) {
      case "number":
      case "Date":
      case "string":
        return _0x52e894 > _0x932f38 ? 1 : _0x52e894 < _0x932f38 ? -1 : 0;
      case "binary":
        return function (_0x5f93e4, _0x153070) {
          const _0x2df930 = _0x5f93e4.length,
            _0x27e595 = _0x153070.length,
            _0xec6c14 = _0x2df930 < _0x27e595 ? _0x2df930 : _0x27e595;
          for (let _0xe37705 = 0; _0xe37705 < _0xec6c14; ++_0xe37705) if (_0x5f93e4[_0xe37705] !== _0x153070[_0xe37705]) return _0x5f93e4[_0xe37705] < _0x153070[_0xe37705] ? -1 : 1;
          if (_0x2df930 === _0x27e595) return 0;
          if (_0x2df930 < _0x27e595) return -1;
          return 1;
        }(Mi(_0x52e894), Mi(_0x932f38));
      case "Array":
        return function (_0x44e86d, _0x589391) {
          const _0x4b9c3d = _0x44e86d.length,
            _0x792ce8 = _0x589391.length,
            _0x14225f = _0x4b9c3d < _0x792ce8 ? _0x4b9c3d : _0x792ce8;
          for (let _0x45ff93 = 0; _0x45ff93 < _0x14225f; ++_0x45ff93) {
            const _0xdfc1ba = Ii(_0x44e86d[_0x45ff93], _0x589391[_0x45ff93]);
            if (0 !== _0xdfc1ba) return _0xdfc1ba;
          }
          if (_0x4b9c3d === _0x792ce8) return 0;
          if (_0x4b9c3d < _0x792ce8) return -1;
          return 1;
        }(_0x52e894, _0x932f38);
    }
  } catch (_0x45ee02) {}
  return NaN;
}
function Pi(_0x2530f8) {
  const _0x4c341b = typeof _0x2530f8;
  if ("object" !== _0x4c341b) return _0x4c341b;
  if (ArrayBuffer.isView(_0x2530f8)) return 'binary';
  const _0x2d3ecd = wn(_0x2530f8);
  return "ArrayBuffer" === _0x2d3ecd ? 'binary' : _0x2d3ecd;
}
function Mi(_0x322fc6) {
  if (_0x322fc6 instanceof Uint8Array) return _0x322fc6;
  if (ArrayBuffer.isView(_0x322fc6)) return new Uint8Array(_0x322fc6.buffer, _0x322fc6.byteOffset, _0x322fc6.byteLength);
  return new Uint8Array(_0x322fc6);
}
class Vt {
  ["_read"](_0x327788, _0x3b8e8c) {
    var _0x50fd26 = this._ctx;
    if (_0x50fd26.error) return _0x50fd26.table._trans(null, ni.bind(null, _0x50fd26.error));
    return _0x50fd26.table._trans("readonly", _0x327788).then(_0x3b8e8c);
  }
  ["_write"](_0x2d83ba) {
    var _0x3e14aa = this._ctx;
    if (_0x3e14aa.error) return _0x3e14aa.table._trans(null, ni.bind(null, _0x3e14aa.error));
    return _0x3e14aa.table._trans('readwrite', _0x2d83ba, "locked");
  }
  ["_addAlgorithm"](_0x1607b7) {
    var _0x3fd81e = this._ctx;
    _0x3fd81e.algorithm = bi(_0x3fd81e.algorithm, _0x1607b7);
  }
  ['_iterate'](_0x531c82, _0x257e5d) {
    return Ki(this._ctx, _0x531c82, _0x257e5d, this._ctx.table.core);
  }
  ['clone'](_0x33635a) {
    var _0x2927c8 = Object.create(this.constructor.prototype),
      _0x2d2bfb = Object.create(this._ctx);
    _0x33635a && Gs(_0x2d2bfb, _0x33635a);
    _0x2927c8._ctx = _0x2d2bfb;
    return _0x2927c8;
  }
  ['raw']() {
    this._ctx.valueMapper = null;
    return this;
  }
  ["each"](_0x10ef8d) {
    var _0x3ecaf8 = this._ctx;
    return this._read(_0x3a3f5a => Ki(_0x3ecaf8, _0x10ef8d, _0x3a3f5a, _0x3ecaf8.table.core));
  }
  ['count'](_0x32db2b) {
    return this._read(_0x553cb3 => {
      const _0x5c0526 = this._ctx,
        _0x198285 = _0x5c0526.table.core;
      if (Si(_0x5c0526, true)) return _0x198285.count({
        trans: _0x553cb3,
        query: {
          index: Oi(_0x5c0526, _0x198285.schema),
          range: _0x5c0526.range
        }
      }).then(_0x30fb96 => Math.min(_0x30fb96, _0x5c0526.limit));
      var _0x2a704b = 0;
      return Ki(_0x5c0526, () => (++_0x2a704b, false), _0x553cb3, _0x198285).then(() => _0x2a704b);
    }).then(_0x32db2b);
  }
  ['sortBy'](_0x24ff41, _0x4bfc6e) {
    const _0x187b3b = _0x24ff41.split('.').reverse(),
      _0x27de9d = _0x187b3b[0],
      _0x81d61c = _0x187b3b.length - 1;
    function _0x20217f(_0x25cb53, _0x26d66a) {
      if (_0x26d66a) return _0x20217f(_0x25cb53[_0x187b3b[_0x26d66a]], _0x26d66a - 1);
      return _0x25cb53[_0x27de9d];
    }
    var _0x7a5146 = "next" === this._ctx.dir ? 1 : -1;
    function _0x425c0c(_0x362980, _0x3c6288) {
      var _0x18ff22 = _0x20217f(_0x362980, _0x81d61c),
        _0x3dfbde = _0x20217f(_0x3c6288, _0x81d61c);
      if (_0x18ff22 < _0x3dfbde) return -_0x7a5146;
      return _0x18ff22 > _0x3dfbde ? _0x7a5146 : 0;
    }
    return this.toArray(function (_0xedbe4a) {
      return _0xedbe4a.sort(_0x425c0c);
    }).then(_0x4bfc6e);
  }
  ['toArray'](_0x3f2f29) {
    return this._read(_0x5d6ef9 => {
      var _0x46ceaa = this._ctx;
      if ("next" === _0x46ceaa.dir && Si(_0x46ceaa, true) && _0x46ceaa.limit > 0) {
        const {
            valueMapper: _0x5ca8bc
          } = _0x46ceaa,
          _0x11d798 = Oi(_0x46ceaa, _0x46ceaa.table.core.schema);
        return _0x46ceaa.table.core.query({
          trans: _0x5d6ef9,
          limit: _0x46ceaa.limit,
          values: true,
          query: {
            index: _0x11d798,
            range: _0x46ceaa.range
          }
        }).then(({
          result: _0x3eaacb
        }) => _0x5ca8bc ? _0x3eaacb.map(_0x5ca8bc) : _0x3eaacb);
      }
      {
        const _0x2e12db = [];
        return Ki(_0x46ceaa, _0x1f9749 => _0x2e12db.push(_0x1f9749), _0x5d6ef9, _0x46ceaa.table.core).then(() => _0x2e12db);
      }
    }, _0x3f2f29);
  }
  ["offset"](_0x4a8951) {
    var _0x4f1fae = this._ctx;
    _0x4a8951 <= 0 || (_0x4f1fae.offset += _0x4a8951, Si(_0x4f1fae) ? Di(_0x4f1fae, () => {
      var _0x30c15d = _0x4a8951;
      return (_0x5d1f86, _0x275fa5) => 0 === _0x30c15d || (1 === _0x30c15d ? (--_0x30c15d, false) : (_0x275fa5(() => {
        _0x5d1f86.advance(_0x30c15d);
        _0x30c15d = 0;
      }), false));
    }) : Di(_0x4f1fae, () => {
      var _0x4faa44 = _0x4a8951;
      return () => --_0x4faa44 < 0;
    }));
    return this;
  }
  ['limit'](_0x2f7226) {
    this._ctx.limit = Math.min(this._ctx.limit, _0x2f7226);
    Di(this._ctx, () => {
      var _0x48e7f1 = _0x2f7226;
      return function (_0x5e5f79, _0xba6a2d, _0x114fdd) {
        --_0x48e7f1 <= 0 && _0xba6a2d(_0x114fdd);
        return _0x48e7f1 >= 0;
      };
    }, true);
    return this;
  }
  ["until"](_0x17e8fc, _0x203082) {
    Ui(this._ctx, function (_0x5aa2b0, _0xc8ce96, _0xa848f8) {
      return !_0x17e8fc(_0x5aa2b0.value) || (_0xc8ce96(_0xa848f8), _0x203082);
    });
    return this;
  }
  ['first'](_0x1e12b3) {
    return this.limit(1).toArray(function (_0x211c45) {
      return _0x211c45[0];
    }).then(_0x1e12b3);
  }
  ['last'](_0xca5c35) {
    return this.reverse().first(_0xca5c35);
  }
  ["filter"](_0xa05bd6) {
    var _0x338c28, _0x546d38;
    Ui(this._ctx, function (_0x55ef5b) {
      return _0xa05bd6(_0x55ef5b.value);
    });
    _0x338c28 = this._ctx;
    _0x546d38 = _0xa05bd6;
    _0x338c28.isMatch = bi(_0x338c28.isMatch, _0x546d38);
    return this;
  }
  ["and"](_0x59d86d) {
    return this.filter(_0x59d86d);
  }
  ['or'](_0x5e6627) {
    return new this.db.WhereClause(this._ctx.table, _0x5e6627, this);
  }
  ['reverse']() {
    this._ctx.dir = "prev" === this._ctx.dir ? 'next' : "prev";
    this._ondirectionchange && this._ondirectionchange(this._ctx.dir);
    return this;
  }
  ["desc"]() {
    return this.reverse();
  }
  ["eachKey"](_0x25353f) {
    var _0x3ac60b = this._ctx;
    _0x3ac60b.keysOnly = !_0x3ac60b.isMatch;
    return this.each(function (_0x1254f3, _0x29b7ea) {
      _0x25353f(_0x29b7ea.key, _0x29b7ea);
    });
  }
  ['eachUniqueKey'](_0x26f4b8) {
    this._ctx.unique = 'unique';
    return this.eachKey(_0x26f4b8);
  }
  ["eachPrimaryKey"](_0x3aeaf0) {
    var _0x4cda8d = this._ctx;
    _0x4cda8d.keysOnly = !_0x4cda8d.isMatch;
    return this.each(function (_0x2463c3, _0x15db1c) {
      _0x3aeaf0(_0x15db1c.primaryKey, _0x15db1c);
    });
  }
  ["keys"](_0x4b75dd) {
    var _0x46d64d = this._ctx;
    _0x46d64d.keysOnly = !_0x46d64d.isMatch;
    var _0x26232f = [];
    return this.each(function (_0x52d4fe, _0x2ff24f) {
      _0x26232f.push(_0x2ff24f.key);
    }).then(function () {
      return _0x26232f;
    }).then(_0x4b75dd);
  }
  ["primaryKeys"](_0x3876ba) {
    var _0x2f3336 = this._ctx;
    if ("next" === _0x2f3336.dir && Si(_0x2f3336, true) && _0x2f3336.limit > 0) return this._read(_0x440f15 => {
      var _0x1631d = Oi(_0x2f3336, _0x2f3336.table.core.schema);
      return _0x2f3336.table.core.query({
        trans: _0x440f15,
        values: false,
        limit: _0x2f3336.limit,
        query: {
          index: _0x1631d,
          range: _0x2f3336.range
        }
      });
    }).then(({
      result: _0x5b8877
    }) => _0x5b8877).then(_0x3876ba);
    _0x2f3336.keysOnly = !_0x2f3336.isMatch;
    var _0xd8469e = [];
    return this.each(function (_0x52e402, _0x5ab377) {
      _0xd8469e.push(_0x5ab377.primaryKey);
    }).then(function () {
      return _0xd8469e;
    }).then(_0x3876ba);
  }
  ['uniqueKeys'](_0x26a054) {
    this._ctx.unique = 'unique';
    return this.keys(_0x26a054);
  }
  ["firstKey"](_0x360159) {
    return this.limit(1).keys(function (_0x307e22) {
      return _0x307e22[0];
    }).then(_0x360159);
  }
  ["lastKey"](_0x32e716) {
    return this.reverse().firstKey(_0x32e716);
  }
  ["distinct"]() {
    var _0x4965f7 = this._ctx,
      _0x4f4d39 = _0x4965f7.index && _0x4965f7.table.schema.idxByName[_0x4965f7.index];
    if (!_0x4f4d39 || !_0x4f4d39.multi) return this;
    var _0x25aa65 = {};
    Ui(this._ctx, function (_0x4333b2) {
      var _0x5b1bd4 = _0x4333b2.primaryKey.toString(),
        _0x2838f1 = Ws(_0x25aa65, _0x5b1bd4);
      _0x25aa65[_0x5b1bd4] = true;
      return !_0x2838f1;
    });
    return this;
  }
  ['modify'](_0x1d7c5b) {
    var _0x4fa26a = this._ctx;
    return this._write(_0x553363 => {
      var _0x5a095b;
      if ('function' == typeof _0x1d7c5b) _0x5a095b = _0x1d7c5b;else {
        var _0x391de5 = Fs(_0x1d7c5b),
          _0x22e75d = _0x391de5.length;
        _0x5a095b = function (_0x2718de) {
          for (var _0x5f50e5 = false, _0x4275ec = 0; _0x4275ec < _0x22e75d; ++_0x4275ec) {
            var _0x1d274e = _0x391de5[_0x4275ec],
              _0x3c1bea = _0x1d7c5b[_0x1d274e];
            on(_0x2718de, _0x1d274e) !== _0x3c1bea && (un(_0x2718de, _0x1d274e, _0x3c1bea), _0x5f50e5 = true);
          }
          return _0x5f50e5;
        };
      }
      const _0x1f407f = _0x4fa26a.table.core,
        {
          outbound: _0x44c98c,
          extractKey: _0x5e6bb6
        } = _0x1f407f.schema.primaryKey,
        _0x22748b = this.db._options.modifyChunkSize || 200,
        _0x315985 = [];
      let _0xbbc23d = 0;
      const _0x138274 = [],
        _0x21cdf9 = (_0x5d4e25, _0x36fe04) => {
          const {
            failures: _0x5dae70,
            numFailures: _0x4ebf96
          } = _0x36fe04;
          _0xbbc23d += _0x5d4e25 - _0x4ebf96;
          for (let _0xbc2f97 of Fs(_0x5dae70)) _0x315985.push(_0x5dae70[_0xbc2f97]);
        };
      return this.clone().primaryKeys().then(_0x481960 => {
        const _0x47153f = _0x4f6dbe => {
          const _0x477555 = Math.min(_0x22748b, _0x481960.length - _0x4f6dbe);
          return _0x1f407f.getMany({
            trans: _0x553363,
            keys: _0x481960.slice(_0x4f6dbe, _0x4f6dbe + _0x477555),
            cache: "immutable"
          }).then(_0x40f942 => {
            const _0x37e56b = [],
              _0x4b031d = [],
              _0x472979 = _0x44c98c ? [] : null,
              _0x1017e5 = [];
            for (let _0x4c2814 = 0; _0x4c2814 < _0x477555; ++_0x4c2814) {
              const _0x494bb8 = _0x40f942[_0x4c2814],
                _0x479f94 = {
                  value: mn(_0x494bb8),
                  primKey: _0x481960[_0x4f6dbe + _0x4c2814]
                };
              false !== _0x5a095b.call(_0x479f94, _0x479f94.value, _0x479f94) && (null == _0x479f94.value ? _0x1017e5.push(_0x481960[_0x4f6dbe + _0x4c2814]) : _0x44c98c || 0 === Ii(_0x5e6bb6(_0x494bb8), _0x5e6bb6(_0x479f94.value)) ? (_0x4b031d.push(_0x479f94.value), _0x44c98c && _0x472979.push(_0x481960[_0x4f6dbe + _0x4c2814])) : (_0x1017e5.push(_0x481960[_0x4f6dbe + _0x4c2814]), _0x37e56b.push(_0x479f94.value)));
            }
            const _0x389589 = Si(_0x4fa26a) && _0x4fa26a.limit === 1 / 0 && ("function" != typeof _0x1d7c5b || _0x1d7c5b === Ti) && {
              index: _0x4fa26a.index,
              range: _0x4fa26a.range
            };
            return Promise.resolve(_0x37e56b.length > 0 && _0x1f407f.mutate({
              trans: _0x553363,
              type: 'add',
              values: _0x37e56b
            }).then(_0x4465d8 => {
              for (let _0x5b85da in _0x4465d8.failures) _0x1017e5.splice(parseInt(_0x5b85da), 1);
              _0x21cdf9(_0x37e56b.length, _0x4465d8);
            })).then(() => (_0x4b031d.length > 0 || _0x389589 && "object" == typeof _0x1d7c5b) && _0x1f407f.mutate({
              trans: _0x553363,
              type: 'put',
              keys: _0x472979,
              values: _0x4b031d,
              criteria: _0x389589,
              changeSpec: "function" != typeof _0x1d7c5b && _0x1d7c5b
            }).then(_0x213c34 => _0x21cdf9(_0x4b031d.length, _0x213c34))).then(() => (_0x1017e5.length > 0 || _0x389589 && _0x1d7c5b === Ti) && _0x1f407f.mutate({
              trans: _0x553363,
              type: 'delete',
              keys: _0x1017e5,
              criteria: _0x389589
            }).then(_0x1c4414 => _0x21cdf9(_0x1017e5.length, _0x1c4414))).then(() => _0x481960.length > _0x4f6dbe + _0x477555 && _0x47153f(_0x4f6dbe + _0x22748b));
          });
        };
        return _0x47153f(0).then(() => {
          if (_0x315985.length > 0) throw new En("Error modifying one or more objects", _0x315985, _0xbbc23d, _0x138274);
          return _0x481960.length;
        });
      });
    });
  }
  ["delete"]() {
    var _0x14b4ba = this._ctx,
      _0x546df9 = _0x14b4ba.range;
    if (Si(_0x14b4ba) && (_0x14b4ba.isPrimKey && !gi || 3 === _0x546df9.type)) return this._write(_0x4fc08f => {
      const {
          primaryKey: _0x5f21c5
        } = _0x14b4ba.table.core.schema,
        _0x405e55 = _0x546df9;
      return _0x14b4ba.table.core.count({
        trans: _0x4fc08f,
        query: {
          index: _0x5f21c5,
          range: _0x405e55
        }
      }).then(_0x552830 => _0x14b4ba.table.core.mutate({
        trans: _0x4fc08f,
        type: "deleteRange",
        range: _0x405e55
      }).then(({
        failures: _0x4b7be8,
        lastResult: _0x5a5559,
        results: _0x2163aa,
        numFailures: _0x12f1c6
      }) => {
        if (_0x12f1c6) throw new En("Could not delete some values", Object.keys(_0x4b7be8).map(_0x302731 => _0x4b7be8[_0x302731]), _0x552830 - _0x12f1c6);
        return _0x552830 - _0x12f1c6;
      }));
    });
    return this.modify(Ti);
  }
}
const Ti = (_0xf2a18a, _0xc1e514) => _0xc1e514.value = null;
function Ri(_0x383a07, _0x33ee9a) {
  if (_0x383a07 < _0x33ee9a) return -1;
  return _0x383a07 === _0x33ee9a ? 0 : 1;
}
function Ei(_0xaa688, _0x5181e9) {
  if (_0xaa688 > _0x5181e9) return -1;
  return _0xaa688 === _0x5181e9 ? 0 : 1;
}
function Bi(_0x506ec0, _0x43a2d3, _0x193b9d) {
  var _0x5a9a61 = _0x506ec0 instanceof en ? new _0x506ec0.Collection(_0x506ec0) : _0x506ec0;
  _0x5a9a61._ctx.error = _0x193b9d ? new _0x193b9d(_0x43a2d3) : new TypeError(_0x43a2d3);
  return _0x5a9a61;
}
function Li(_0x3987ea) {
  return new _0x3987ea.Collection(_0x3987ea, () => Gi('')).limit(0);
}
function Vi(_0x163bd5, _0x172c76, _0x59a0f6, _0x4732c4, _0x95fe5e, _0x127701) {
  for (var _0x3d73c0 = Math.min(_0x163bd5.length, _0x4732c4.length), _0x5e7ea0 = -1, _0x3160c6 = 0; _0x3160c6 < _0x3d73c0; ++_0x3160c6) {
    var _0x59aab7 = _0x172c76[_0x3160c6];
    if (_0x59aab7 !== _0x4732c4[_0x3160c6]) return _0x95fe5e(_0x163bd5[_0x3160c6], _0x59a0f6[_0x3160c6]) < 0 ? _0x163bd5.substr(0, _0x3160c6) + _0x59a0f6[_0x3160c6] + _0x59a0f6.substr(_0x3160c6 + 1) : _0x95fe5e(_0x163bd5[_0x3160c6], _0x4732c4[_0x3160c6]) < 0 ? _0x163bd5.substr(0, _0x3160c6) + _0x4732c4[_0x3160c6] + _0x59a0f6.substr(_0x3160c6 + 1) : _0x5e7ea0 >= 0 ? _0x163bd5.substr(0, _0x5e7ea0) + _0x172c76[_0x5e7ea0] + _0x59a0f6.substr(_0x5e7ea0 + 1) : null;
    _0x95fe5e(_0x163bd5[_0x3160c6], _0x59aab7) < 0 && (_0x5e7ea0 = _0x3160c6);
  }
  if (_0x3d73c0 < _0x4732c4.length && 'next' === _0x127701) return _0x163bd5 + _0x59a0f6.substr(_0x163bd5.length);
  if (_0x3d73c0 < _0x163bd5.length && "prev" === _0x127701) return _0x163bd5.substr(0, _0x59a0f6.length);
  if (_0x5e7ea0 < 0) return null;
  return _0x163bd5.substr(0, _0x5e7ea0) + _0x4732c4[_0x5e7ea0] + _0x59a0f6.substr(_0x5e7ea0 + 1);
}
function Fi(_0x14a9ec, _0x3e444e, _0x5b3538, _0x508edf) {
  var _0x498260,
    _0x3e1bb3,
    _0x3fc9cb,
    _0x5bb58e,
    _0x18c6fa,
    _0x2c65e5,
    _0x3005da,
    _0x96efd3 = _0x5b3538.length;
  if (!_0x5b3538.every(_0x46d50f => "string" == typeof _0x46d50f)) return Bi(_0x14a9ec, li);
  function _0x356ce8(_0x5cbbbf) {
    _0x498260 = function (_0x4a79ba) {
      if ("next" === _0x4a79ba) return _0x3d5200 => _0x3d5200.toUpperCase();
      return _0x24a3b4 => _0x24a3b4.toLowerCase();
    }(_0x5cbbbf);
    _0x3e1bb3 = function (_0x9a8acb) {
      if ('next' === _0x9a8acb) return _0xbbc21d => _0xbbc21d.toLowerCase();
      return _0x4aad0d => _0x4aad0d.toUpperCase();
    }(_0x5cbbbf);
    _0x3fc9cb = "next" === _0x5cbbbf ? Ri : Ei;
    var _0x37dbec = _0x5b3538.map(function (_0x1f2f4e) {
      return {
        lower: _0x3e1bb3(_0x1f2f4e),
        upper: _0x498260(_0x1f2f4e)
      };
    }).sort(function (_0x51f4c6, _0x5b4c3e) {
      return _0x3fc9cb(_0x51f4c6.lower, _0x5b4c3e.lower);
    });
    _0x5bb58e = _0x37dbec.map(function (_0x22bdfc) {
      return _0x22bdfc.upper;
    });
    _0x18c6fa = _0x37dbec.map(function (_0x131995) {
      return _0x131995.lower;
    });
    _0x2c65e5 = _0x5cbbbf;
    _0x3005da = 'next' === _0x5cbbbf ? '' : _0x508edf;
  }
  _0x356ce8("next");
  var _0x52e79e = new _0x14a9ec.Collection(_0x14a9ec, () => Ni(_0x5bb58e[0], _0x18c6fa[_0x96efd3 - 1] + _0x508edf));
  _0x52e79e._ondirectionchange = function (_0xc4fb58) {
    _0x356ce8(_0xc4fb58);
  };
  var _0x3ca9ab = 0;
  _0x52e79e._addAlgorithm(function (_0x7b0504, _0x2424f8, _0x9ec4a) {
    var _0x1e2040 = _0x7b0504.key;
    if ("string" != typeof _0x1e2040) return false;
    var _0x2b11bc = _0x3e1bb3(_0x1e2040);
    if (_0x3e444e(_0x2b11bc, _0x18c6fa, _0x3ca9ab)) return true;
    for (var _0x5c6f17 = null, _0x30007b = _0x3ca9ab; _0x30007b < _0x96efd3; ++_0x30007b) {
      var _0x1bbf1b = Vi(_0x1e2040, _0x2b11bc, _0x5bb58e[_0x30007b], _0x18c6fa[_0x30007b], _0x3fc9cb, _0x2c65e5);
      if (null === _0x1bbf1b && null === _0x5c6f17) _0x3ca9ab = _0x30007b + 1;else (null === _0x5c6f17 || _0x3fc9cb(_0x5c6f17, _0x1bbf1b) > 0) && (_0x5c6f17 = _0x1bbf1b);
    }
    _0x2424f8(null !== _0x5c6f17 ? function () {
      _0x7b0504.continue(_0x5c6f17 + _0x3005da);
    } : _0x9ec4a);
    return false;
  });
  return _0x52e79e;
}
function Ni(_0x4888fb, _0x23f7a2, _0x4288a4, _0x534fe8) {
  return {
    type: 2,
    lower: _0x4888fb,
    upper: _0x23f7a2,
    lowerOpen: _0x4288a4,
    upperOpen: _0x534fe8
  };
}
function Gi(_0x335d27) {
  return {
    type: 1,
    lower: _0x335d27,
    upper: _0x335d27
  };
}
class en {
  get ["Collection"]() {
    return this._ctx.table.db.Collection;
  }
  ['between'](_0xef0ae6, _0xa04fe7, _0x10cd1a, _0x34f556) {
    _0x10cd1a = false !== _0x10cd1a;
    _0x34f556 = true === _0x34f556;
    try {
      if (this._cmp(_0xef0ae6, _0xa04fe7) > 0 || 0 === this._cmp(_0xef0ae6, _0xa04fe7) && (_0x10cd1a || _0x34f556) && (!_0x10cd1a || !_0x34f556)) return Li(this);
      return new this.Collection(this, () => Ni(_0xef0ae6, _0xa04fe7, !_0x10cd1a, !_0x34f556));
    } catch (_0x3d53a6) {
      return Bi(this, ci);
    }
  }
  ["equals"](_0x10881a) {
    if (null == _0x10881a) return Bi(this, ci);
    return new this.Collection(this, () => Gi(_0x10881a));
  }
  ["above"](_0x310ad4) {
    if (null == _0x310ad4) return Bi(this, ci);
    return new this.Collection(this, () => Ni(_0x310ad4, void 0, true));
  }
  ["aboveOrEqual"](_0x4d9c15) {
    if (null == _0x4d9c15) return Bi(this, ci);
    return new this.Collection(this, () => Ni(_0x4d9c15, void 0, false));
  }
  ["below"](_0x35a865) {
    if (null == _0x35a865) return Bi(this, ci);
    return new this.Collection(this, () => Ni(void 0, _0x35a865, false, true));
  }
  ['belowOrEqual'](_0x2b2ea7) {
    if (null == _0x2b2ea7) return Bi(this, ci);
    return new this.Collection(this, () => Ni(void 0, _0x2b2ea7));
  }
  ['startsWith'](_0x4bff18) {
    if ("string" != typeof _0x4bff18) return Bi(this, li);
    return this.between(_0x4bff18, _0x4bff18 + oi, true, true);
  }
  ['startsWithIgnoreCase'](_0x44409e) {
    if ('' === _0x44409e) return this.startsWith(_0x44409e);
    return Fi(this, (_0x4bb296, _0x4ca12a) => 0 === _0x4bb296.indexOf(_0x4ca12a[0]), [_0x44409e], oi);
  }
  ["equalsIgnoreCase"](_0x50260c) {
    return Fi(this, (_0x1890c5, _0x4df04e) => _0x1890c5 === _0x4df04e[0], [_0x50260c], '');
  }
  ["anyOfIgnoreCase"]() {
    var _0x4b222b = kn.apply(vn, arguments);
    if (0 === _0x4b222b.length) return Li(this);
    return Fi(this, (_0x224703, _0x195c4d) => -1 !== _0x195c4d.indexOf(_0x224703), _0x4b222b, '');
  }
  ["startsWithAnyOfIgnoreCase"]() {
    var _0x1c724b = kn.apply(vn, arguments);
    if (0 === _0x1c724b.length) return Li(this);
    return Fi(this, (_0x522cf8, _0x24cced) => _0x24cced.some(_0x2bcef2 => 0 === _0x522cf8.indexOf(_0x2bcef2)), _0x1c724b, oi);
  }
  ["anyOf"]() {
    const _0x53f516 = kn.apply(vn, arguments);
    let _0x4656c2 = this._cmp;
    try {
      _0x53f516.sort(_0x4656c2);
    } catch (_0x349413) {
      return Bi(this, ci);
    }
    if (0 === _0x53f516.length) return Li(this);
    const _0x2ba62f = new this.Collection(this, () => Ni(_0x53f516[0], _0x53f516[_0x53f516.length - 1]));
    _0x2ba62f._ondirectionchange = _0x13fc66 => {
      _0x4656c2 = "next" === _0x13fc66 ? this._ascending : this._descending;
      _0x53f516.sort(_0x4656c2);
    };
    let _0x55c423 = 0;
    _0x2ba62f._addAlgorithm((_0x680313, _0x2e9308, _0x32918f) => {
      const _0xcf279a = _0x680313.key;
      for (; _0x4656c2(_0xcf279a, _0x53f516[_0x55c423]) > 0;) {
        ++_0x55c423;
        if (_0x55c423 === _0x53f516.length) {
          _0x2e9308(_0x32918f);
          return false;
        }
      }
      return 0 === _0x4656c2(_0xcf279a, _0x53f516[_0x55c423]) || (_0x2e9308(() => {
        _0x680313.continue(_0x53f516[_0x55c423]);
      }), false);
    });
    return _0x2ba62f;
  }
  ["notEqual"](_0x4f2248) {
    return this.inAnyRange([[ui, _0x4f2248], [_0x4f2248, this.db._maxKey]], {
      includeLowers: false,
      includeUppers: false
    });
  }
  ["noneOf"]() {
    const _0x4e7573 = kn.apply(vn, arguments);
    if (0 === _0x4e7573.length) return new this.Collection(this);
    try {
      _0x4e7573.sort(this._ascending);
    } catch (_0x36e1b7) {
      return Bi(this, ci);
    }
    const _0x189991 = _0x4e7573.reduce((_0x43247f, _0x4a2651) => _0x43247f ? _0x43247f.concat([[_0x43247f[_0x43247f.length - 1][1], _0x4a2651]]) : [[ui, _0x4a2651]], null);
    _0x189991.push([_0x4e7573[_0x4e7573.length - 1], this.db._maxKey]);
    return this.inAnyRange(_0x189991, {
      includeLowers: false,
      includeUppers: false
    });
  }
  ["inAnyRange"](_0x1d491d, _0xf663fc) {
    const _0x161855 = this._cmp,
      _0x4f32cd = this._ascending,
      _0x5d9eba = this._descending,
      _0x29cd63 = this._min,
      _0x200031 = this._max;
    if (0 === _0x1d491d.length) return Li(this);
    if (!_0x1d491d.every(_0xae98e7 => void 0 !== _0xae98e7[0] && void 0 !== _0xae98e7[1] && _0x4f32cd(_0xae98e7[0], _0xae98e7[1]) <= 0)) return Bi(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Fn.InvalidArgument);
    const _0x3cd519 = !_0xf663fc || false !== _0xf663fc.includeLowers,
      _0x317893 = _0xf663fc && true === _0xf663fc.includeUppers;
    let _0x567809,
      _0x3bff4a = _0x4f32cd;
    function _0x3806f9(_0x1ad6f6, _0xe3fc9a) {
      return _0x3bff4a(_0x1ad6f6[0], _0xe3fc9a[0]);
    }
    try {
      _0x567809 = _0x1d491d.reduce(function (_0x483ea2, _0x36ddb6) {
        let _0x3b295a = 0,
          _0x3a43a4 = _0x483ea2.length;
        for (; _0x3b295a < _0x3a43a4; ++_0x3b295a) {
          const _0x3e1afe = _0x483ea2[_0x3b295a];
          if (_0x161855(_0x36ddb6[0], _0x3e1afe[1]) < 0 && _0x161855(_0x36ddb6[1], _0x3e1afe[0]) > 0) {
            _0x3e1afe[0] = _0x29cd63(_0x3e1afe[0], _0x36ddb6[0]);
            _0x3e1afe[1] = _0x200031(_0x3e1afe[1], _0x36ddb6[1]);
            break;
          }
        }
        _0x3b295a === _0x3a43a4 && _0x483ea2.push(_0x36ddb6);
        return _0x483ea2;
      }, []);
      _0x567809.sort(_0x3806f9);
    } catch (_0x282ab4) {
      return Bi(this, ci);
    }
    let _0x47272f = 0;
    const _0x525432 = _0x317893 ? _0x51cceb => _0x4f32cd(_0x51cceb, _0x567809[_0x47272f][1]) > 0 : _0x6989b8 => _0x4f32cd(_0x6989b8, _0x567809[_0x47272f][1]) >= 0,
      _0x2be0cb = _0x3cd519 ? _0x170dfe => _0x5d9eba(_0x170dfe, _0x567809[_0x47272f][0]) > 0 : _0x365ef5 => _0x5d9eba(_0x365ef5, _0x567809[_0x47272f][0]) >= 0;
    let _0x5e17bb = _0x525432;
    const _0x6b8767 = new this.Collection(this, () => Ni(_0x567809[0][0], _0x567809[_0x567809.length - 1][1], !_0x3cd519, !_0x317893));
    _0x6b8767._ondirectionchange = _0x32860a => {
      if ("next" === _0x32860a) {
        _0x5e17bb = _0x525432;
        _0x3bff4a = _0x4f32cd;
      } else {
        _0x5e17bb = _0x2be0cb;
        _0x3bff4a = _0x5d9eba;
      }
      _0x567809.sort(_0x3806f9);
    };
    _0x6b8767._addAlgorithm((_0x46634c, _0xbc223b, _0x33d967) => {
      for (var _0x116e45 = _0x46634c.key; _0x5e17bb(_0x116e45);) {
        ++_0x47272f;
        if (_0x47272f === _0x567809.length) {
          _0xbc223b(_0x33d967);
          return false;
        }
      }
      return !(_0x55fda8 = _0x116e45, (_0x525432(_0x55fda8) || _0x2be0cb(_0x55fda8)) && (0 === this._cmp(_0x116e45, _0x567809[_0x47272f][1]) || 0 === this._cmp(_0x116e45, _0x567809[_0x47272f][0]) || _0xbc223b(() => {
        if (_0x3bff4a === _0x4f32cd) _0x46634c.continue(_0x567809[_0x47272f][0]);else _0x46634c.continue(_0x567809[_0x47272f][1]);
      }), 1));
      var _0x55fda8;
    });
    return _0x6b8767;
  }
  ["startsWithAnyOf"]() {
    const _0x5bd4ce = kn.apply(vn, arguments);
    if (_0x5bd4ce.every(_0xebd823 => "string" == typeof _0xebd823)) return 0 === _0x5bd4ce.length ? Li(this) : this.inAnyRange(_0x5bd4ce.map(_0x125c24 => [_0x125c24, _0x125c24 + oi]));
    return Bi(this, 'startsWithAnyOf()\x20only\x20works\x20with\x20strings');
  }
}
function zi(_0x5528df) {
  return Ba(function (_0x5b718e) {
    Hi(_0x5b718e);
    _0x5528df(_0x5b718e.target.error);
    return false;
  });
}
function Hi(_0x3bdaad) {
  _0x3bdaad.stopPropagation && _0x3bdaad.stopPropagation();
  _0x3bdaad.preventDefault && _0x3bdaad.preventDefault();
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
      var _0x45b8f4 = this._blockedFuncs.shift();
      try {
        Za(_0x45b8f4[1], _0x45b8f4[0]);
      } catch (_0x381c39) {}
    }
    return this;
  }
  ["_locked"]() {
    return this._reculock && wa.lockOwnerFor !== this;
  }
  ["create"](_0x26731f) {
    if (!this.mode) return this;
    const _0x3aa5b2 = this.db.idbdb,
      _0x21b2b4 = this.db._state.dbOpenError;
    rn(!this.idbtrans);
    if (!_0x26731f && !_0x3aa5b2) switch (_0x21b2b4 && _0x21b2b4.name) {
      case "DatabaseClosedError":
        throw new Fn.DatabaseClosed(_0x21b2b4);
      case "MissingAPIError":
        throw new Fn.MissingAPI(_0x21b2b4.message, _0x21b2b4);
      default:
        throw new Fn.OpenFailed(_0x21b2b4);
    }
    if (!this.active) throw new Fn.TransactionInactive();
    rn(null === this._completion._state);
    (_0x26731f = this.idbtrans = _0x26731f || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }) : _0x3aa5b2.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }))).onerror = Ba(_0x4a84fb => {
      Hi(_0x4a84fb);
      this._reject(_0x26731f.error);
    });
    _0x26731f.onabort = Ba(_0x4d6a28 => {
      Hi(_0x4d6a28);
      this.active && this._reject(new Fn.Abort(_0x26731f.error));
      this.active = false;
      this.on('abort').fire(_0x4d6a28);
    });
    _0x26731f.oncomplete = Ba(() => {
      this.active = false;
      this._resolve();
      "mutatedParts" in _0x26731f && Yi.storagemutated.fire(_0x26731f.mutatedParts);
    });
    return this;
  }
  ['_promise'](_0x3afebd, _0x2e0810, _0x4943d2) {
    if ("readwrite" === _0x3afebd && 'readwrite' !== this.mode) return ni(new Fn.ReadOnly("Transaction is readonly"));
    if (!this.active) return ni(new Fn.TransactionInactive());
    if (this._locked()) return new ka((_0x4402d4, _0x5017fd) => {
      this._blockedFuncs.push([() => {
        this._promise(_0x3afebd, _0x2e0810, _0x4943d2).then(_0x4402d4, _0x5017fd);
      }, wa]);
    });
    if (_0x4943d2) return Ha(() => {
      var _0x473e22 = new ka((_0x521b93, _0x40e140) => {
        this._lock();
        const _0x348ab7 = _0x2e0810(_0x521b93, _0x40e140, this);
        _0x348ab7 && _0x348ab7.then && _0x348ab7.then(_0x521b93, _0x40e140);
      });
      _0x473e22.finally(() => this._unlock());
      _0x473e22._lib = true;
      return _0x473e22;
    });
    var _0x3af3e5 = new ka((_0x27236f, _0x38f0b1) => {
      var _0x495992 = _0x2e0810(_0x27236f, _0x38f0b1, this);
      _0x495992 && _0x495992.then && _0x495992.then(_0x27236f, _0x38f0b1);
    });
    _0x3af3e5._lib = true;
    return _0x3af3e5;
  }
  ["_root"]() {
    if (this.parent) return this.parent._root();
    return this;
  }
  ["waitFor"](_0x55fdf1) {
    var _0x2ea78d = this._root();
    const _0x513aca = ka.resolve(_0x55fdf1);
    if (_0x2ea78d._waitingFor) _0x2ea78d._waitingFor = _0x2ea78d._waitingFor.then(() => _0x513aca);else {
      _0x2ea78d._waitingFor = _0x513aca;
      _0x2ea78d._waitingQueue = [];
      var _0x118564 = _0x2ea78d.idbtrans.objectStore(_0x2ea78d.storeNames[0]);
      !function _0x1d1163() {
        for (++_0x2ea78d._spinCount; _0x2ea78d._waitingQueue.length;) _0x2ea78d._waitingQueue.shift()();
        _0x2ea78d._waitingFor && (_0x118564.get(-1 / 0).onsuccess = _0x1d1163);
      }();
    }
    var _0x1b5c14 = _0x2ea78d._waitingFor;
    return new ka((_0x15b101, _0x226995) => {
      _0x513aca.then(_0x27735e => _0x2ea78d._waitingQueue.push(Ba(_0x15b101.bind(null, _0x27735e))), _0x15a41b => _0x2ea78d._waitingQueue.push(Ba(_0x226995.bind(null, _0x15a41b)))).finally(() => {
        _0x2ea78d._waitingFor === _0x1b5c14 && (_0x2ea78d._waitingFor = null);
      });
    });
  }
  ["abort"]() {
    this.active && (this.active = false, this.idbtrans && this.idbtrans.abort(), this._reject(new Fn.Abort()));
  }
  ["table"](_0x1a95d6) {
    const _0xa690b2 = this._memoizedTables || (this._memoizedTables = {});
    if (Ws(_0xa690b2, _0x1a95d6)) return _0xa690b2[_0x1a95d6];
    const _0x35d355 = this.schema[_0x1a95d6];
    if (!_0x35d355) throw new Fn.NotFound("Table " + _0x1a95d6 + '\x20not\x20part\x20of\x20transaction');
    const _0x3150fc = new this.db.Table(_0x1a95d6, _0x35d355, this);
    _0x3150fc.core = this.db.core.table(_0x1a95d6);
    _0xa690b2[_0x1a95d6] = _0x3150fc;
    return _0x3150fc;
  }
}
function $i(_0x4317fd, _0x4005b7, _0x3631e2, _0x4dd4fc, _0x6360ff, _0x15c944, _0x3623eb) {
  return {
    name: _0x4317fd,
    keyPath: _0x4005b7,
    unique: _0x3631e2,
    multi: _0x4dd4fc,
    auto: _0x6360ff,
    compound: _0x15c944,
    src: (_0x3631e2 && !_0x3623eb ? '&' : '') + (_0x4dd4fc ? '*' : '') + (_0x6360ff ? '++' : '') + qi(_0x4005b7)
  };
}
function qi(_0x1bd080) {
  if ("string" == typeof _0x1bd080) return _0x1bd080;
  if (_0x1bd080) return '[' + [].join.call(_0x1bd080, '+') + ']';
  return '';
}
function Ji(_0x4d6162, _0x349e3f, _0x14c206) {
  return {
    name: _0x4d6162,
    primKey: _0x349e3f,
    indexes: _0x14c206,
    mappedClass: null,
    idxByName: nn(_0x14c206, _0x337e5c => [_0x337e5c.name, _0x337e5c])
  };
}
let Xi = _0x39e217 => {
  try {
    _0x39e217.only([[]]);
    Xi = () => [[]];
    return [[]];
  } catch (_0x3c9212) {
    Xi = () => oi;
    return oi;
  }
};
function Zi(_0x1064c1) {
  if (null == _0x1064c1) return () => {};
  if ('string' == typeof _0x1064c1) return 1 === (_0x1b79ab = _0x1064c1).split('.').length ? _0xca7fc9 => _0xca7fc9[_0x1b79ab] : _0x2858f0 => on(_0x2858f0, _0x1b79ab);
  return _0x4c1f1d => on(_0x4c1f1d, _0x1064c1);
  var _0x1b79ab;
}
function Qi(_0x271a8d) {
  return [].slice.call(_0x271a8d);
}
let eo = 0;
function to(_0x432f6e) {
  if (null == _0x432f6e) return ":id";
  if ('string' == typeof _0x432f6e) return _0x432f6e;
  return '[' + _0x432f6e.join('+') + ']';
}
function ro({
  _novip: _0x1314f5
}, _0x3f02a8) {
  const _0x34b0a4 = _0x3f02a8.db,
    _0x5b7a3f = function (_0x3e174c, _0x4289f5, {
      IDBKeyRange: _0x2dbab9,
      indexedDB: _0x5202b7
    }, _0x56b3db) {
      const _0x10c327 = (_0x40d585 = function (_0x4148fd, _0x480a42, _0x8f31cd) {
        function _0x22aab7(_0x45e37a) {
          if (3 === _0x45e37a.type) return null;
          if (4 === _0x45e37a.type) throw new Error("Cannot convert never type to IDBKeyRange");
          const {
            lower: _0x436700,
            upper: _0x30988e,
            lowerOpen: _0x2415d8,
            upperOpen: _0x270f39
          } = _0x45e37a;
          if (void 0 === _0x436700) return void 0 === _0x30988e ? null : _0x480a42.upperBound(_0x30988e, !!_0x270f39);
          if (void 0 === _0x30988e) return _0x480a42.lowerBound(_0x436700, !!_0x2415d8);
          return _0x480a42.bound(_0x436700, _0x30988e, !!_0x2415d8, !!_0x270f39);
        }
        const {
            schema: _0x5ca547,
            hasGetAll: _0x520adb
          } = function (_0x636a8c, _0xc591b6) {
            const _0xa03daf = Qi(_0x636a8c.objectStoreNames);
            return {
              schema: {
                name: _0x636a8c.name,
                tables: _0xa03daf.map(_0x41d8c7 => _0xc591b6.objectStore(_0x41d8c7)).map(_0x14562c => {
                  const {
                      keyPath: _0xce9eb1,
                      autoIncrement: _0xac54bb
                    } = _0x14562c,
                    _0x1e8782 = Ns(_0xce9eb1),
                    _0x1cc474 = null == _0xce9eb1,
                    _0x5ca393 = {},
                    _0x38d215 = {
                      name: _0x14562c.name,
                      primaryKey: {
                        name: null,
                        isPrimaryKey: true,
                        outbound: _0x1cc474,
                        compound: _0x1e8782,
                        keyPath: _0xce9eb1,
                        autoIncrement: _0xac54bb,
                        unique: true,
                        extractKey: Zi(_0xce9eb1)
                      },
                      indexes: Qi(_0x14562c.indexNames).map(_0x1bd1d2 => _0x14562c.index(_0x1bd1d2)).map(_0x2189bd => {
                        const {
                            name: _0x1a32a7,
                            unique: _0x72c12,
                            multiEntry: _0x2007c4,
                            keyPath: _0x47ffac
                          } = _0x2189bd,
                          _0x427225 = {
                            name: _0x1a32a7,
                            compound: Ns(_0x47ffac),
                            keyPath: _0x47ffac,
                            unique: _0x72c12,
                            multiEntry: _0x2007c4,
                            extractKey: Zi(_0x47ffac)
                          };
                        _0x5ca393[to(_0x47ffac)] = _0x427225;
                        return _0x427225;
                      }),
                      getIndexByKeyPath: _0x16e906 => _0x5ca393[to(_0x16e906)]
                    };
                  _0x5ca393[":id"] = _0x38d215.primaryKey;
                  null != _0xce9eb1 && (_0x5ca393[to(_0xce9eb1)] = _0x38d215.primaryKey);
                  return _0x38d215;
                })
              },
              hasGetAll: _0xa03daf.length > 0 && "getAll" in _0xc591b6.objectStore(_0xa03daf[0]) && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
            };
          }(_0x4148fd, _0x8f31cd),
          _0x4a0a5a = _0x5ca547.tables.map(_0x4d2bc3 => function (_0x5b9b28) {
            const _0x311f09 = _0x5b9b28.name;
            return {
              name: _0x311f09,
              schema: _0x5b9b28,
              mutate: function ({
                trans: _0x3a27bf,
                type: _0x2a21fe,
                keys: _0x5691f2,
                values: _0x1ec1e4,
                range: _0x3434e8
              }) {
                return new Promise((_0x4da6f2, _0x47ad7b) => {
                  _0x4da6f2 = Ba(_0x4da6f2);
                  const _0x4dd2c1 = _0x3a27bf.objectStore(_0x311f09),
                    _0x4c7f20 = null == _0x4dd2c1.keyPath,
                    _0x5a754c = "put" === _0x2a21fe || 'add' === _0x2a21fe;
                  if (!_0x5a754c && "delete" !== _0x2a21fe && "deleteRange" !== _0x2a21fe) throw new Error("Invalid operation type: " + _0x2a21fe);
                  const {
                    length: _0x42b72a
                  } = _0x5691f2 || _0x1ec1e4 || {
                    length: 1
                  };
                  if (_0x5691f2 && _0x1ec1e4 && _0x5691f2.length !== _0x1ec1e4.length) throw new Error("Given keys array must have same length as given values array.");
                  if (0 === _0x42b72a) return _0x4da6f2({
                    numFailures: 0,
                    failures: {},
                    results: [],
                    lastResult: void 0
                  });
                  let _0x4ad07a;
                  const _0x35032a = [],
                    _0x1c148f = [];
                  let _0xe57c84 = 0;
                  const _0xfc0cca = _0x2cdf80 => {
                    ++_0xe57c84;
                    Hi(_0x2cdf80);
                  };
                  if ("deleteRange" === _0x2a21fe) {
                    if (4 === _0x3434e8.type) return _0x4da6f2({
                      numFailures: _0xe57c84,
                      failures: _0x1c148f,
                      results: [],
                      lastResult: void 0
                    });
                    if (3 === _0x3434e8.type) _0x35032a.push(_0x4ad07a = _0x4dd2c1.clear());else _0x35032a.push(_0x4ad07a = _0x4dd2c1.delete(_0x22aab7(_0x3434e8)));
                  } else {
                    const [_0x1451d2, _0x226754] = _0x5a754c ? _0x4c7f20 ? [_0x1ec1e4, _0x5691f2] : [_0x1ec1e4, null] : [_0x5691f2, null];
                    if (_0x5a754c) {
                      for (let _0x27ec19 = 0; _0x27ec19 < _0x42b72a; ++_0x27ec19) {
                        _0x35032a.push(_0x4ad07a = _0x226754 && void 0 !== _0x226754[_0x27ec19] ? _0x4dd2c1[_0x2a21fe](_0x1451d2[_0x27ec19], _0x226754[_0x27ec19]) : _0x4dd2c1[_0x2a21fe](_0x1451d2[_0x27ec19]));
                        _0x4ad07a.onerror = _0xfc0cca;
                      }
                    } else {
                      for (let _0x1c9973 = 0; _0x1c9973 < _0x42b72a; ++_0x1c9973) {
                        _0x35032a.push(_0x4ad07a = _0x4dd2c1[_0x2a21fe](_0x1451d2[_0x1c9973]));
                        _0x4ad07a.onerror = _0xfc0cca;
                      }
                    }
                  }
                  const _0xc8b155 = _0x452564 => {
                    const _0x97106a = _0x452564.target.result;
                    _0x35032a.forEach((_0x3987f1, _0x5a54a2) => null != _0x3987f1.error && (_0x1c148f[_0x5a54a2] = _0x3987f1.error));
                    _0x4da6f2({
                      numFailures: _0xe57c84,
                      failures: _0x1c148f,
                      results: 'delete' === _0x2a21fe ? _0x5691f2 : _0x35032a.map(_0x5a4b88 => _0x5a4b88.result),
                      lastResult: _0x97106a
                    });
                  };
                  _0x4ad07a.onerror = _0x50253a => {
                    _0xfc0cca(_0x50253a);
                    _0xc8b155(_0x50253a);
                  };
                  _0x4ad07a.onsuccess = _0xc8b155;
                });
              },
              getMany: ({
                trans: _0x2d372c,
                keys: _0x433430
              }) => new Promise((_0x80620b, _0x2195f1) => {
                _0x80620b = Ba(_0x80620b);
                const _0x44965f = _0x2d372c.objectStore(_0x311f09),
                  _0x74151e = _0x433430.length,
                  _0x2cf87c = new Array(_0x74151e);
                let _0x279ac2,
                  _0x2abebf = 0,
                  _0x5281af = 0;
                const _0x223691 = _0x54a803 => {
                    const _0x176f99 = _0x54a803.target;
                    _0x2cf87c[_0x176f99._pos] = _0x176f99.result;
                    ++_0x5281af === _0x2abebf && _0x80620b(_0x2cf87c);
                  },
                  _0x1a1ac6 = zi(_0x2195f1);
                for (let _0xbc234f = 0; _0xbc234f < _0x74151e; ++_0xbc234f) null != _0x433430[_0xbc234f] && (_0x279ac2 = _0x44965f.get(_0x433430[_0xbc234f]), _0x279ac2._pos = _0xbc234f, _0x279ac2.onsuccess = _0x223691, _0x279ac2.onerror = _0x1a1ac6, ++_0x2abebf);
                0 === _0x2abebf && _0x80620b(_0x2cf87c);
              }),
              get: ({
                trans: _0x33d109,
                key: _0x59a128
              }) => new Promise((_0x2a281a, _0x51b1bb) => {
                _0x2a281a = Ba(_0x2a281a);
                const _0x304a18 = _0x33d109.objectStore(_0x311f09).get(_0x59a128);
                _0x304a18.onsuccess = _0x5faba => _0x2a281a(_0x5faba.target.result);
                _0x304a18.onerror = zi(_0x51b1bb);
              }),
              query: function (_0x1ac6a2) {
                return _0x12b49f => new Promise((_0x307259, _0x3ceb38) => {
                  _0x307259 = Ba(_0x307259);
                  const {
                      trans: _0x20b731,
                      values: _0x4384e1,
                      limit: _0x33985c,
                      query: _0x688e4e
                    } = _0x12b49f,
                    _0x56a37e = _0x33985c === 1 / 0 ? void 0 : _0x33985c,
                    {
                      index: _0x32fb31,
                      range: _0x28393a
                    } = _0x688e4e,
                    _0x232fc4 = _0x20b731.objectStore(_0x311f09),
                    _0x511efd = _0x32fb31.isPrimaryKey ? _0x232fc4 : _0x232fc4.index(_0x32fb31.name),
                    _0x113654 = _0x22aab7(_0x28393a);
                  if (0 === _0x33985c) return _0x307259({
                    result: []
                  });
                  if (_0x1ac6a2) {
                    const _0x337201 = _0x4384e1 ? _0x511efd.getAll(_0x113654, _0x56a37e) : _0x511efd.getAllKeys(_0x113654, _0x56a37e);
                    _0x337201.onsuccess = _0x45dfaf => _0x307259({
                      result: _0x45dfaf.target.result
                    });
                    _0x337201.onerror = zi(_0x3ceb38);
                  } else {
                    let _0xff107b = 0;
                    const _0x3f4a5c = _0x4384e1 || !("openKeyCursor" in _0x511efd) ? _0x511efd.openCursor(_0x113654) : _0x511efd.openKeyCursor(_0x113654),
                      _0x5cab67 = [];
                    _0x3f4a5c.onsuccess = _0x5c665b => {
                      const _0x528aac = _0x3f4a5c.result;
                      if (_0x528aac) {
                        _0x5cab67.push(_0x4384e1 ? _0x528aac.value : _0x528aac.primaryKey);
                        if (++_0xff107b === _0x33985c) return _0x307259({
                          result: _0x5cab67
                        });
                        return void _0x528aac.continue();
                      }
                      return _0x307259({
                        result: _0x5cab67
                      });
                    };
                    _0x3f4a5c.onerror = zi(_0x3ceb38);
                  }
                });
              }(_0x520adb),
              openCursor: function ({
                trans: _0x36cf1e,
                values: _0x23b16e,
                query: _0x1bb181,
                reverse: _0x5e0f97,
                unique: _0x32fcf3
              }) {
                return new Promise((_0x4d4a3e, _0x3e4e00) => {
                  _0x4d4a3e = Ba(_0x4d4a3e);
                  const {
                      index: _0x25abea,
                      range: _0x28955b
                    } = _0x1bb181,
                    _0x3864a4 = _0x36cf1e.objectStore(_0x311f09),
                    _0x1534fc = _0x25abea.isPrimaryKey ? _0x3864a4 : _0x3864a4.index(_0x25abea.name),
                    _0x3b2c39 = _0x5e0f97 ? _0x32fcf3 ? "prevunique" : "prev" : _0x32fcf3 ? "nextunique" : "next",
                    _0x28cc37 = _0x23b16e || !('openKeyCursor' in _0x1534fc) ? _0x1534fc.openCursor(_0x22aab7(_0x28955b), _0x3b2c39) : _0x1534fc.openKeyCursor(_0x22aab7(_0x28955b), _0x3b2c39);
                  _0x28cc37.onerror = zi(_0x3e4e00);
                  _0x28cc37.onsuccess = Ba(_0x48fe7f => {
                    const _0x49fe40 = _0x28cc37.result;
                    if (!_0x49fe40) return void _0x4d4a3e(null);
                    _0x49fe40.___id = ++eo;
                    _0x49fe40.done = false;
                    const _0x54678a = _0x49fe40.continue.bind(_0x49fe40);
                    let _0x4afd21 = _0x49fe40.continuePrimaryKey;
                    _0x4afd21 && (_0x4afd21 = _0x4afd21.bind(_0x49fe40));
                    const _0x36a671 = _0x49fe40.advance.bind(_0x49fe40),
                      _0x15a8d2 = () => {
                        throw new Error('Cursor\x20not\x20stopped');
                      };
                    _0x49fe40.trans = _0x36cf1e;
                    _0x49fe40.stop = _0x49fe40.continue = _0x49fe40.continuePrimaryKey = _0x49fe40.advance = () => {
                      throw new Error("Cursor not started");
                    };
                    _0x49fe40.fail = Ba(_0x3e4e00);
                    _0x49fe40.next = function () {
                      let _0x30bdc5 = 1;
                      return this.start(() => _0x30bdc5-- ? this.continue() : this.stop()).then(() => this);
                    };
                    _0x49fe40.start = _0x29f4b6 => {
                      const _0x320390 = new Promise((_0x351ce3, _0x3b7bb5) => {
                          _0x351ce3 = Ba(_0x351ce3);
                          _0x28cc37.onerror = zi(_0x3b7bb5);
                          _0x49fe40.fail = _0x3b7bb5;
                          _0x49fe40.stop = _0x5d9c1f => {
                            _0x49fe40.stop = _0x49fe40.continue = _0x49fe40.continuePrimaryKey = _0x49fe40.advance = _0x15a8d2;
                            _0x351ce3(_0x5d9c1f);
                          };
                        }),
                        _0x3898b0 = () => {
                          if (_0x28cc37.result) try {
                            _0x29f4b6();
                          } catch (_0x4c128a) {
                            _0x49fe40.fail(_0x4c128a);
                          } else {
                            _0x49fe40.done = true;
                            _0x49fe40.start = () => {
                              throw new Error("Cursor behind last entry");
                            };
                            _0x49fe40.stop();
                          }
                        };
                      _0x28cc37.onsuccess = Ba(_0x2d575e => {
                        _0x28cc37.onsuccess = _0x3898b0;
                        _0x3898b0();
                      });
                      _0x49fe40.continue = _0x54678a;
                      _0x49fe40.continuePrimaryKey = _0x4afd21;
                      _0x49fe40.advance = _0x36a671;
                      _0x3898b0();
                      return _0x320390;
                    };
                    _0x4d4a3e(_0x49fe40);
                  }, _0x3e4e00);
                });
              },
              'count'({
                query: _0x2e0a5f,
                trans: _0x39a4fa
              }) {
                const {
                  index: _0x4d9908,
                  range: _0xd10caf
                } = _0x2e0a5f;
                return new Promise((_0x4be8f0, _0x50fe47) => {
                  const _0x5ffb5a = _0x39a4fa.objectStore(_0x311f09),
                    _0x54da1c = _0x4d9908.isPrimaryKey ? _0x5ffb5a : _0x5ffb5a.index(_0x4d9908.name),
                    _0x5e7ee0 = _0x22aab7(_0xd10caf),
                    _0x5e363d = _0x5e7ee0 ? _0x54da1c.count(_0x5e7ee0) : _0x54da1c.count();
                  _0x5e363d.onsuccess = Ba(_0x5e7582 => _0x4be8f0(_0x5e7582.target.result));
                  _0x5e363d.onerror = zi(_0x50fe47);
                });
              }
            };
          }(_0x4d2bc3)),
          _0x999c89 = {};
        _0x4a0a5a.forEach(_0x18e862 => _0x999c89[_0x18e862.name] = _0x18e862);
        return {
          stack: 'dbcore',
          transaction: _0x4148fd.transaction.bind(_0x4148fd),
          'table'(_0x88a18a) {
            if (!_0x999c89[_0x88a18a]) throw new Error("Table '" + _0x88a18a + "' not found");
            return _0x999c89[_0x88a18a];
          },
          MIN_KEY: -1 / 0,
          MAX_KEY: Xi(_0x480a42),
          schema: _0x5ca547
        };
      }(_0x4289f5, _0x2dbab9, _0x56b3db), _0x3e174c.dbcore.reduce((_0x4ab9f6, {
        create: _0x2f0bf2
      }) => ({
        ..._0x4ab9f6,
        ..._0x2f0bf2(_0x4ab9f6)
      }), _0x40d585));
      var _0x40d585;
      return {
        dbcore: _0x10c327
      };
    }(_0x1314f5._middlewares, _0x34b0a4, _0x1314f5._deps, _0x3f02a8);
  _0x1314f5.core = _0x5b7a3f.dbcore;
  _0x1314f5.tables.forEach(_0x1d879b => {
    const _0x5dbd79 = _0x1d879b.name;
    _0x1314f5.core.schema.tables.some(_0x552b48 => _0x552b48.name === _0x5dbd79) && (_0x1d879b.core = _0x1314f5.core.table(_0x5dbd79), _0x1314f5[_0x5dbd79] instanceof _0x1314f5.Table && (_0x1314f5[_0x5dbd79].core = _0x1d879b.core));
  });
}
function so({
  _novip: _0x3a54a8
}, _0x40812f, _0x21f62d, _0x3ab5d3) {
  _0x21f62d.forEach(_0x276af5 => {
    const _0x155dd4 = _0x3ab5d3[_0x276af5];
    _0x40812f.forEach(_0x2feb9c => {
      const _0x1a4afd = Xs(_0x2feb9c, _0x276af5);
      (!_0x1a4afd || "value" in _0x1a4afd && void 0 === _0x1a4afd.value) && (_0x2feb9c === _0x3a54a8.Transaction.prototype || _0x2feb9c instanceof _0x3a54a8.Transaction ? $s(_0x2feb9c, _0x276af5, {
        'get'() {
          return this.table(_0x276af5);
        },
        'set'(_0x46d945) {
          Ys(this, _0x276af5, {
            value: _0x46d945,
            writable: true,
            configurable: true,
            enumerable: true
          });
        }
      }) : _0x2feb9c[_0x276af5] = new _0x3a54a8.Table(_0x276af5, _0x155dd4));
    });
  });
}
function no({
  _novip: _0xec5dd9
}, _0x3da50e) {
  _0x3da50e.forEach(_0x3dfdbc => {
    for (let _0x31c3fc in _0x3dfdbc) _0x3dfdbc[_0x31c3fc] instanceof _0xec5dd9.Table && delete _0x3dfdbc[_0x31c3fc];
  });
}
function ao(_0x39b967, _0x524c01) {
  return _0x39b967._cfg.version - _0x524c01._cfg.version;
}
function io(_0x14e30f, _0x571608) {
  const _0x5c142e = {
    del: [],
    add: [],
    change: []
  };
  let _0x1f1a80;
  for (_0x1f1a80 in _0x14e30f) _0x571608[_0x1f1a80] || _0x5c142e.del.push(_0x1f1a80);
  for (_0x1f1a80 in _0x571608) {
    const _0x426d3a = _0x14e30f[_0x1f1a80],
      _0x59528a = _0x571608[_0x1f1a80];
    if (_0x426d3a) {
      const _0x368efe = {
        name: _0x1f1a80,
        def: _0x59528a,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ('' + (_0x426d3a.primKey.keyPath || '') != '' + (_0x59528a.primKey.keyPath || '') || _0x426d3a.primKey.auto !== _0x59528a.primKey.auto && !hi) {
        _0x368efe.recreate = true;
        _0x5c142e.change.push(_0x368efe);
      } else {
        const _0x281f21 = _0x426d3a.idxByName,
          _0x5ba15f = _0x59528a.idxByName;
        let _0x2461cd;
        for (_0x2461cd in _0x281f21) _0x5ba15f[_0x2461cd] || _0x368efe.del.push(_0x2461cd);
        for (_0x2461cd in _0x5ba15f) {
          const _0x27d39e = _0x281f21[_0x2461cd],
            _0x52caa0 = _0x5ba15f[_0x2461cd];
          if (_0x27d39e) _0x27d39e.src !== _0x52caa0.src && _0x368efe.change.push(_0x52caa0);else _0x368efe.add.push(_0x52caa0);
        }
        (_0x368efe.del.length > 0 || _0x368efe.add.length > 0 || _0x368efe.change.length > 0) && _0x5c142e.change.push(_0x368efe);
      }
    } else _0x5c142e.add.push([_0x1f1a80, _0x59528a]);
  }
  return _0x5c142e;
}
function oo(_0x38cbe2, _0xb2963a, _0x2fea63, _0x58effe) {
  const _0x198007 = _0x38cbe2.db.createObjectStore(_0xb2963a, _0x2fea63.keyPath ? {
    keyPath: _0x2fea63.keyPath,
    autoIncrement: _0x2fea63.auto
  } : {
    autoIncrement: _0x2fea63.auto
  });
  _0x58effe.forEach(_0x353b87 => uo(_0x198007, _0x353b87));
  return _0x198007;
}
function uo(_0x4bd48c, _0x15fe15) {
  _0x4bd48c.createIndex(_0x15fe15.name, _0x15fe15.keyPath, {
    unique: _0x15fe15.unique,
    multiEntry: _0x15fe15.multi
  });
}
function co(_0x34b40f, _0x4e9d50, _0x1059fd) {
  const _0x56f35a = {};
  Qs(_0x4e9d50.objectStoreNames, 0).forEach(_0x2f3953 => {
    const _0x31cde4 = _0x1059fd.objectStore(_0x2f3953);
    let _0x1cbc4c = _0x31cde4.keyPath;
    const _0x1ed816 = $i(qi(_0x1cbc4c), _0x1cbc4c || '', false, false, !!_0x31cde4.autoIncrement, _0x1cbc4c && 'string' != typeof _0x1cbc4c, true),
      _0x13ddee = [];
    for (let _0x739064 = 0; _0x739064 < _0x31cde4.indexNames.length; ++_0x739064) {
      const _0x23c5bf = _0x31cde4.index(_0x31cde4.indexNames[_0x739064]);
      _0x1cbc4c = _0x23c5bf.keyPath;
      var _0x458863 = $i(_0x23c5bf.name, _0x1cbc4c, !!_0x23c5bf.unique, !!_0x23c5bf.multiEntry, false, _0x1cbc4c && "string" != typeof _0x1cbc4c, false);
      _0x13ddee.push(_0x458863);
    }
    _0x56f35a[_0x2f3953] = Ji(_0x2f3953, _0x1ed816, _0x13ddee);
  });
  return _0x56f35a;
}
function lo({
  _novip: _0x500456
}, _0x40407e, _0x383cdf) {
  const _0x4e9231 = _0x383cdf.db.objectStoreNames;
  for (let _0x50e952 = 0; _0x50e952 < _0x4e9231.length; ++_0x50e952) {
    const _0xe3386b = _0x4e9231[_0x50e952],
      _0x567eb4 = _0x383cdf.objectStore(_0xe3386b);
    _0x500456._hasGetAll = "getAll" in _0x567eb4;
    for (let _0x2f00c2 = 0; _0x2f00c2 < _0x567eb4.indexNames.length; ++_0x2f00c2) {
      const _0x2f20a = _0x567eb4.indexNames[_0x2f00c2],
        _0x112af1 = _0x567eb4.index(_0x2f20a).keyPath,
        _0x5db227 = "string" == typeof _0x112af1 ? _0x112af1 : '[' + Qs(_0x112af1).join('+') + ']';
      if (_0x40407e[_0xe3386b]) {
        const _0x2458e0 = _0x40407e[_0xe3386b].idxByName[_0x5db227];
        _0x2458e0 && (_0x2458e0.name = _0x2f20a, delete _0x40407e[_0xe3386b].idxByName[_0x5db227], _0x40407e[_0xe3386b].idxByName[_0x2f20a] = _0x2458e0);
      }
    }
  }
  'undefined' != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && Vs.WorkerGlobalScope && Vs instanceof Vs.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (_0x500456._hasGetAll = false);
}
class On {
  ['_parseStoresSpec'](_0x4b6e40, _0xc5de5d) {
    Fs(_0x4b6e40).forEach(_0x2a8d9a => {
      if (null !== _0x4b6e40[_0x2a8d9a]) {
        var _0x3f765d = _0x4b6e40[_0x2a8d9a].split(',').map((_0x1fc6a5, _0x4f4c75) => {
            const _0x14375a = (_0x1fc6a5 = _0x1fc6a5.trim()).replace(/([&*]|\+\+)/g, ''),
              _0x3566d0 = /^\[/.test(_0x14375a) ? _0x14375a.match(/^\[(.*)\]$/)[1].split('+') : _0x14375a;
            return $i(_0x14375a, _0x3566d0 || null, /\&/.test(_0x1fc6a5), /\*/.test(_0x1fc6a5), /\+\+/.test(_0x1fc6a5), Ns(_0x3566d0), 0 === _0x4f4c75);
          }),
          _0x2a907f = _0x3f765d.shift();
        if (_0x2a907f.multi) throw new Fn.Schema("Primary key cannot be multi-valued");
        _0x3f765d.forEach(_0x1a34c9 => {
          if (_0x1a34c9.auto) throw new Fn.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!_0x1a34c9.keyPath) throw new Fn.Schema("Index must have a name and cannot be an empty string");
        });
        _0xc5de5d[_0x2a8d9a] = Ji(_0x2a8d9a, _0x2a907f, _0x3f765d);
      }
    });
  }
  ["stores"](_0x52ff5a) {
    const _0x23a5fe = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? Gs(this._cfg.storesSource, _0x52ff5a) : _0x52ff5a;
    const _0x5aa64e = _0x23a5fe._versions,
      _0x6bd160 = {};
    let _0x3c6b93 = {};
    _0x5aa64e.forEach(_0x161031 => {
      Gs(_0x6bd160, _0x161031._cfg.storesSource);
      _0x3c6b93 = _0x161031._cfg.dbschema = {};
      _0x161031._parseStoresSpec(_0x6bd160, _0x3c6b93);
    });
    _0x23a5fe._dbSchema = _0x3c6b93;
    no(_0x23a5fe, [_0x23a5fe._allTables, _0x23a5fe, _0x23a5fe.Transaction.prototype]);
    so(_0x23a5fe, [_0x23a5fe._allTables, _0x23a5fe, _0x23a5fe.Transaction.prototype, this._cfg.tables], Fs(_0x3c6b93), _0x3c6b93);
    _0x23a5fe._storeNames = Fs(_0x3c6b93);
    return this;
  }
  ["upgrade"](_0x58d054) {
    this._cfg.contentUpgrade = Qn(this._cfg.contentUpgrade || zn, _0x58d054);
    return this;
  }
}
function fo(_0x42f624, _0x5896f5) {
  let _0x544d82 = _0x42f624._dbNamesDB;
  _0x544d82 || (_0x544d82 = _0x42f624._dbNamesDB = new Xn(pi, {
    addons: [],
    indexedDB: _0x42f624,
    IDBKeyRange: _0x5896f5
  }), _0x544d82.version(1).stores({
    dbnames: "name"
  }));
  return _0x544d82.table("dbnames");
}
function ho(_0x1acfc5) {
  return _0x1acfc5 && "function" == typeof _0x1acfc5.databases;
}
function go(_0x445de2) {
  return Ha(function () {
    wa.letThrough = true;
    return _0x445de2();
  });
}
function mo() {
  var _0x25c2ea;
  if (!navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases) return new Promise(function (_0x565757) {
    var _0x494301 = function () {
      return indexedDB.databases().finally(_0x565757);
    };
    _0x25c2ea = setInterval(_0x494301, 100);
    _0x494301();
  }).finally(function () {
    return clearInterval(_0x25c2ea);
  });
  return Promise.resolve();
}
function po(_0x5f276b) {
  const _0x5ac170 = _0x5f276b._state,
    {
      indexedDB: _0x442df1
    } = _0x5f276b._deps;
  if (_0x5ac170.isBeingOpened || _0x5f276b.idbdb) return _0x5ac170.dbReadyPromise.then(() => _0x5ac170.dbOpenError ? ni(_0x5ac170.dbOpenError) : _0x5f276b);
  Sn && (_0x5ac170.openCanceller._stackHolder = Kn());
  _0x5ac170.isBeingOpened = true;
  _0x5ac170.dbOpenError = null;
  _0x5ac170.openComplete = false;
  const _0x4a6d9d = _0x5ac170.openCanceller;
  function _0xb92643() {
    if (_0x5ac170.openCanceller !== _0x4a6d9d) throw new Fn.DatabaseClosed("db.open() was cancelled");
  }
  let _0x239c9c = _0x5ac170.dbReadyResolve,
    _0x3c324a = null,
    _0x420b89 = false;
  return ka.race([_0x4a6d9d, ('undefined' == typeof navigator ? ka.resolve() : mo()).then(() => new ka((_0x55bb9b, _0xcc3e05) => {
    _0xb92643();
    if (!_0x442df1) throw new Fn.MissingAPI();
    const _0x765794 = _0x5f276b.name,
      _0x8a3b71 = _0x5ac170.autoSchema ? _0x442df1.open(_0x765794) : _0x442df1.open(_0x765794, Math.round(10 * _0x5f276b.verno));
    if (!_0x8a3b71) throw new Fn.MissingAPI();
    _0x8a3b71.onerror = zi(_0xcc3e05);
    _0x8a3b71.onblocked = Ba(_0x5f276b._fireOnBlocked);
    _0x8a3b71.onupgradeneeded = Ba(_0x2cb590 => {
      _0x3c324a = _0x8a3b71.transaction;
      if (_0x5ac170.autoSchema && !_0x5f276b._options.allowEmptyDB) {
        _0x8a3b71.onerror = Hi;
        _0x3c324a.abort();
        _0x8a3b71.result.close();
        const _0x5ce58b = _0x442df1.deleteDatabase(_0x765794);
        _0x5ce58b.onsuccess = _0x5ce58b.onerror = Ba(() => {
          _0xcc3e05(new Fn.NoSuchDatabase("Database " + _0x765794 + " doesnt exist"));
        });
      } else {
        _0x3c324a.onerror = zi(_0xcc3e05);
        var _0x49a351 = _0x2cb590.oldVersion > Math.pow(2, 62) ? 0 : _0x2cb590.oldVersion;
        _0x420b89 = _0x49a351 < 1;
        _0x5f276b._novip.idbdb = _0x8a3b71.result;
        (function (_0x2f925a, _0x3b1a26, _0x55b423, _0x52b188) {
          const _0x490eea = _0x2f925a._dbSchema,
            _0x51d0c8 = _0x2f925a._createTransaction("readwrite", _0x2f925a._storeNames, _0x490eea);
          _0x51d0c8.create(_0x55b423);
          _0x51d0c8._completion.catch(_0x52b188);
          const _0x4bc26d = _0x51d0c8._reject.bind(_0x51d0c8),
            _0x3ec05c = wa.transless || wa;
          Ha(() => {
            wa.trans = _0x51d0c8;
            wa.transless = _0x3ec05c;
            if (0 === _0x3b1a26) {
              Fs(_0x490eea).forEach(_0x35d125 => {
                oo(_0x55b423, _0x35d125, _0x490eea[_0x35d125].primKey, _0x490eea[_0x35d125].indexes);
              });
              ro(_0x2f925a, _0x55b423);
              ka.follow(() => _0x2f925a.on.populate.fire(_0x51d0c8)).catch(_0x4bc26d);
            } else (function ({
              _novip: _0xd9d3da
            }, _0x282703, _0xcad576, _0x2e4b45) {
              const _0x4c8b6d = [],
                _0x5dd0f4 = _0xd9d3da._versions;
              let _0x524dfd = _0xd9d3da._dbSchema = co(0, _0xd9d3da.idbdb, _0x2e4b45),
                _0x1f31d7 = false;
              _0x5dd0f4.filter(_0x5488a6 => _0x5488a6._cfg.version >= _0x282703).forEach(_0xa275f7 => {
                _0x4c8b6d.push(() => {
                  const _0x17eb59 = _0x524dfd,
                    _0x13aed3 = _0xa275f7._cfg.dbschema;
                  lo(_0xd9d3da, _0x17eb59, _0x2e4b45);
                  lo(_0xd9d3da, _0x13aed3, _0x2e4b45);
                  _0x524dfd = _0xd9d3da._dbSchema = _0x13aed3;
                  const _0xdee03a = io(_0x17eb59, _0x13aed3);
                  _0xdee03a.add.forEach(_0x5250de => {
                    oo(_0x2e4b45, _0x5250de[0], _0x5250de[1].primKey, _0x5250de[1].indexes);
                  });
                  _0xdee03a.change.forEach(_0x21eb1c => {
                    if (_0x21eb1c.recreate) throw new Fn.Upgrade("Not yet support for changing primary key");
                    {
                      const _0x2960bc = _0x2e4b45.objectStore(_0x21eb1c.name);
                      _0x21eb1c.add.forEach(_0x5e0f91 => uo(_0x2960bc, _0x5e0f91));
                      _0x21eb1c.change.forEach(_0x24b05f => {
                        _0x2960bc.deleteIndex(_0x24b05f.name);
                        uo(_0x2960bc, _0x24b05f);
                      });
                      _0x21eb1c.del.forEach(_0x1f157d => _0x2960bc.deleteIndex(_0x1f157d));
                    }
                  });
                  const _0x596973 = _0xa275f7._cfg.contentUpgrade;
                  if (_0x596973 && _0xa275f7._cfg.version > _0x282703) {
                    ro(_0xd9d3da, _0x2e4b45);
                    _0xcad576._memoizedTables = {};
                    _0x1f31d7 = true;
                    let _0x2aed14 = cn(_0x13aed3);
                    _0xdee03a.del.forEach(_0x2e6def => {
                      _0x2aed14[_0x2e6def] = _0x17eb59[_0x2e6def];
                    });
                    no(_0xd9d3da, [_0xd9d3da.Transaction.prototype]);
                    so(_0xd9d3da, [_0xd9d3da.Transaction.prototype], Fs(_0x2aed14), _0x2aed14);
                    _0xcad576.schema = _0x2aed14;
                    const _0x38b689 = Cn(_0x596973);
                    let _0x49cd4e;
                    _0x38b689 && Wa();
                    const _0xb8017d = ka.follow(() => {
                      _0x49cd4e = _0x596973(_0xcad576);
                      if (_0x49cd4e && _0x38b689) {
                        var _0x5a4e58 = ja.bind(null, null);
                        _0x49cd4e.then(_0x5a4e58, _0x5a4e58);
                      }
                    });
                    if (_0x49cd4e && "function" == typeof _0x49cd4e.then) return ka.resolve(_0x49cd4e);
                    return _0xb8017d.then(() => _0x49cd4e);
                  }
                });
                _0x4c8b6d.push(_0x11ff50 => {
                  var _0x59d954, _0x12cdc3;
                  _0x1f31d7 && di || (_0x59d954 = _0xa275f7._cfg.dbschema, _0x12cdc3 = _0x11ff50, [].slice.call(_0x12cdc3.db.objectStoreNames).forEach(_0x5a90a4 => null == _0x59d954[_0x5a90a4] && _0x12cdc3.db.deleteObjectStore(_0x5a90a4)));
                  no(_0xd9d3da, [_0xd9d3da.Transaction.prototype]);
                  so(_0xd9d3da, [_0xd9d3da.Transaction.prototype], _0xd9d3da._storeNames, _0xd9d3da._dbSchema);
                  _0xcad576.schema = _0xd9d3da._dbSchema;
                });
              });
              return function _0x1b96db() {
                if (_0x4c8b6d.length) return ka.resolve(_0x4c8b6d.shift()(_0xcad576.idbtrans)).then(_0x1b96db);
                return ka.resolve();
              }().then(() => {
                var _0x1ebad8, _0x367565;
                _0x367565 = _0x2e4b45;
                Fs(_0x1ebad8 = _0x524dfd).forEach(_0x12da9a => {
                  _0x367565.db.objectStoreNames.contains(_0x12da9a) || oo(_0x367565, _0x12da9a, _0x1ebad8[_0x12da9a].primKey, _0x1ebad8[_0x12da9a].indexes);
                });
              });
            })(_0x2f925a, _0x3b1a26, _0x51d0c8, _0x55b423).catch(_0x4bc26d);
          });
        })(_0x5f276b, _0x49a351 / 10, _0x3c324a, _0xcc3e05);
      }
    }, _0xcc3e05);
    _0x8a3b71.onsuccess = Ba(() => {
      _0x3c324a = null;
      const _0x513f98 = _0x5f276b._novip.idbdb = _0x8a3b71.result,
        _0x5b5903 = Qs(_0x513f98.objectStoreNames);
      if (_0x5b5903.length > 0) try {
        const _0x51b4fc = _0x513f98.transaction(1 === (_0x125a35 = _0x5b5903).length ? _0x125a35[0] : _0x125a35, "readonly");
        if (_0x5ac170.autoSchema) (function ({
          _novip: _0x24fa2f
        }, _0xe7b596, _0x29ace8) {
          _0x24fa2f.verno = _0xe7b596.version / 10;
          const _0x167c1a = _0x24fa2f._dbSchema = co(0, _0xe7b596, _0x29ace8);
          _0x24fa2f._storeNames = Qs(_0xe7b596.objectStoreNames, 0);
          so(_0x24fa2f, [_0x24fa2f._allTables], Fs(_0x167c1a), _0x167c1a);
        })(_0x5f276b, _0x513f98, _0x51b4fc);else {
          lo(_0x5f276b, _0x5f276b._dbSchema, _0x51b4fc);
          (function (_0x15abe9, _0x2fff08) {
            const _0x462eee = io(co(0, _0x15abe9.idbdb, _0x2fff08), _0x15abe9._dbSchema);
            _0x462eee.add.length || _0x462eee.change.some(_0x420411 => _0x420411.add.length || _0x420411.change.length);
          })(_0x5f276b, _0x51b4fc);
        }
        ro(_0x5f276b, _0x51b4fc);
      } catch (_0x5a7be4) {}
      var _0x125a35;
      fi.push(_0x5f276b);
      _0x513f98.onversionchange = Ba(_0xcd7314 => {
        _0x5ac170.vcFired = true;
        _0x5f276b.on('versionchange').fire(_0xcd7314);
      });
      _0x513f98.onclose = Ba(_0x49c0c5 => {
        _0x5f276b.on("close").fire(_0x49c0c5);
      });
      _0x420b89 && function ({
        indexedDB: _0x19b336,
        IDBKeyRange: _0x5b05b1
      }, _0x3ece42) {
        !ho(_0x19b336) && _0x3ece42 !== pi && fo(_0x19b336, _0x5b05b1).put({
          name: _0x3ece42
        }).catch(zn);
      }(_0x5f276b._deps, _0x765794);
      _0x55bb9b();
    }, _0xcc3e05);
  }))]).then(() => (_0xb92643(), _0x5ac170.onReadyBeingFired = [], ka.resolve(go(() => _0x5f276b.on.ready.fire(_0x5f276b.vip))).then(function _0x44d0c6() {
    if (_0x5ac170.onReadyBeingFired.length > 0) {
      let _0x3f07dc = _0x5ac170.onReadyBeingFired.reduce(Qn, zn);
      _0x5ac170.onReadyBeingFired = [];
      return ka.resolve(go(() => _0x3f07dc(_0x5f276b.vip))).then(_0x44d0c6);
    }
  }))).finally(() => {
    _0x5ac170.onReadyBeingFired = null;
    _0x5ac170.isBeingOpened = false;
  }).then(() => _0x5f276b).catch(_0x31f6ac => {
    _0x5ac170.dbOpenError = _0x31f6ac;
    try {
      _0x3c324a && _0x3c324a.abort();
    } catch (_0x11bbb3) {}
    _0x4a6d9d === _0x5ac170.openCanceller && _0x5f276b._close();
    return ni(_0x31f6ac);
  }).finally(() => {
    _0x5ac170.openComplete = true;
    _0x239c9c();
  });
}
function yo(_0x4422f9) {
  var _0x11cd48 = _0x303568 => _0x4422f9.next(_0x303568),
    _0x1e12b9 = _0x3ee1f0(_0x11cd48),
    _0x5f5424 = _0x3ee1f0(_0x3fe1fa => _0x4422f9.throw(_0x3fe1fa));
  function _0x3ee1f0(_0x5c94cc) {
    return _0x2586f9 => {
      var _0x5a0624 = _0x5c94cc(_0x2586f9),
        _0x52e29e = _0x5a0624.value;
      if (_0x5a0624.done) return _0x52e29e;
      if (_0x52e29e && 'function' == typeof _0x52e29e.then) return _0x52e29e.then(_0x1e12b9, _0x5f5424);
      if (Ns(_0x52e29e)) return Promise.all(_0x52e29e).then(_0x1e12b9, _0x5f5424);
      return _0x1e12b9(_0x52e29e);
    };
  }
  return _0x3ee1f0(_0x11cd48)();
}
function wo(_0x462fb4, _0x3dabf6, _0x1607c2) {
  var _0x50f8d3 = arguments.length;
  if (_0x50f8d3 < 2) throw new Fn.InvalidArgument("Too few arguments");
  for (var _0xc013da = new Array(_0x50f8d3 - 1); --_0x50f8d3;) _0xc013da[_0x50f8d3 - 1] = arguments[_0x50f8d3];
  _0x1607c2 = _0xc013da.pop();
  return [_0x462fb4, fn(_0xc013da), _0x1607c2];
}
function bo(_0xf73795, _0x1c1260, _0x824d0f, _0x1bffb9, _0x1024e5) {
  return ka.resolve().then(() => {
    const _0x137f83 = wa.transless || wa,
      _0x5d4cb5 = _0xf73795._createTransaction(_0x1c1260, _0x824d0f, _0xf73795._dbSchema, _0x1bffb9),
      _0x1e8cf6 = {
        trans: _0x5d4cb5,
        transless: _0x137f83
      };
    if (_0x1bffb9) _0x5d4cb5.idbtrans = _0x1bffb9.idbtrans;else try {
      _0x5d4cb5.create();
      _0xf73795._state.PR1398_maxLoop = 3;
    } catch (_0x12e7ce) {
      if (_0x12e7ce.name === Ln.InvalidState && _0xf73795.isOpen() && --_0xf73795._state.PR1398_maxLoop > 0) {
        _0xf73795._close();
        return _0xf73795.open().then(() => bo(_0xf73795, _0x1c1260, _0x824d0f, null, _0x1024e5));
      }
      return ni(_0x12e7ce);
    }
    const _0x478bf6 = Cn(_0x1024e5);
    let _0x51fa9e;
    _0x478bf6 && Wa();
    const _0x269461 = ka.follow(() => {
      _0x51fa9e = _0x1024e5.call(_0x5d4cb5, _0x5d4cb5);
      if (_0x51fa9e) {
        if (_0x478bf6) {
          var _0x49f781 = ja.bind(null, null);
          _0x51fa9e.then(_0x49f781, _0x49f781);
        } else "function" == typeof _0x51fa9e.next && "function" == typeof _0x51fa9e.throw && (_0x51fa9e = yo(_0x51fa9e));
      }
    }, _0x1e8cf6);
    return (_0x51fa9e && "function" == typeof _0x51fa9e.then ? ka.resolve(_0x51fa9e).then(_0x3e8507 => _0x5d4cb5.active ? _0x3e8507 : ni(new Fn.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : _0x269461.then(() => _0x51fa9e)).then(_0x2ab255 => (_0x1bffb9 && _0x5d4cb5._resolve(), _0x5d4cb5._completion.then(() => _0x2ab255))).catch(_0x4cece1 => (_0x5d4cb5._reject(_0x4cece1), ni(_0x4cece1)));
  });
}
function _o(_0x436b2e, _0x3a2fca, _0x4debc7) {
  const _0xba350f = Ns(_0x436b2e) ? _0x436b2e.slice() : [_0x436b2e];
  for (let _0x2b43eb = 0; _0x2b43eb < _0x4debc7; ++_0x2b43eb) _0xba350f.push(_0x3a2fca);
  return _0xba350f;
}
const vo = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: function (_0x140b27) {
    return {
      ..._0x140b27,
      'table'(_0x151431) {
        const _0x4efa2c = _0x140b27.table(_0x151431),
          {
            schema: _0x49546f
          } = _0x4efa2c,
          _0x538370 = {},
          _0xc4770b = [];
        function _0x5f043b(_0x546268, _0x983775, _0xdfea63) {
          const _0x535927 = to(_0x546268),
            _0x13363c = _0x538370[_0x535927] = _0x538370[_0x535927] || [],
            _0x1ee40b = null == _0x546268 ? 0 : "string" == typeof _0x546268 ? 1 : _0x546268.length,
            _0x42773f = _0x983775 > 0,
            _0x116146 = {
              ..._0xdfea63,
              isVirtual: _0x42773f,
              keyTail: _0x983775,
              keyLength: _0x1ee40b,
              extractKey: Zi(_0x546268),
              unique: !_0x42773f && _0xdfea63.unique
            };
          _0x13363c.push(_0x116146);
          _0x116146.isPrimaryKey || _0xc4770b.push(_0x116146);
          _0x1ee40b > 1 && _0x5f043b(2 === _0x1ee40b ? _0x546268[0] : _0x546268.slice(0, _0x1ee40b - 1), _0x983775 + 1, _0xdfea63);
          _0x13363c.sort((_0x430000, _0x5f53dc) => _0x430000.keyTail - _0x5f53dc.keyTail);
          return _0x116146;
        }
        const _0x27e4ff = _0x5f043b(_0x49546f.primaryKey.keyPath, 0, _0x49546f.primaryKey);
        _0x538370[":id"] = [_0x27e4ff];
        for (const _0x41560e of _0x49546f.indexes) _0x5f043b(_0x41560e.keyPath, 0, _0x41560e);
        function _0x272d40(_0x1a170c) {
          const _0x53d160 = _0x1a170c.query.index;
          if (_0x53d160.isVirtual) return {
            ..._0x1a170c,
            query: {
              index: _0x53d160,
              range: (_0x43db6d = _0x1a170c.query.range, _0x1317a9 = _0x53d160.keyTail, {
                type: 1 === _0x43db6d.type ? 2 : _0x43db6d.type,
                lower: _o(_0x43db6d.lower, _0x43db6d.lowerOpen ? _0x140b27.MAX_KEY : _0x140b27.MIN_KEY, _0x1317a9),
                lowerOpen: true,
                upper: _o(_0x43db6d.upper, _0x43db6d.upperOpen ? _0x140b27.MIN_KEY : _0x140b27.MAX_KEY, _0x1317a9),
                upperOpen: true
              })
            }
          };
          return _0x1a170c;
          var _0x43db6d, _0x1317a9;
        }
        return {
          ..._0x4efa2c,
          schema: {
            ..._0x49546f,
            primaryKey: _0x27e4ff,
            indexes: _0xc4770b,
            getIndexByKeyPath: function (_0x40d6a1) {
              const _0x333626 = _0x538370[to(_0x40d6a1)];
              return _0x333626 && _0x333626[0];
            }
          },
          count: _0x140489 => _0x4efa2c.count(_0x272d40(_0x140489)),
          query: _0x26ca06 => _0x4efa2c.query(_0x272d40(_0x26ca06)),
          'openCursor'(_0x38a514) {
            const {
              keyTail: _0x48b30f,
              isVirtual: _0x1fe55c,
              keyLength: _0x1ce61f
            } = _0x38a514.query.index;
            if (_0x1fe55c) return _0x4efa2c.openCursor(_0x272d40(_0x38a514)).then(_0x3bd1f4 => {
              return _0x3bd1f4 && (_0x26b4c5 = _0x3bd1f4, Object.create(_0x26b4c5, {
                continue: {
                  value: function (_0x2c07b1) {
                    if (null != _0x2c07b1) _0x26b4c5.continue(_o(_0x2c07b1, _0x38a514.reverse ? _0x140b27.MAX_KEY : _0x140b27.MIN_KEY, _0x48b30f));else if (_0x38a514.unique) _0x26b4c5.continue(_0x26b4c5.key.slice(0, _0x1ce61f).concat(_0x38a514.reverse ? _0x140b27.MIN_KEY : _0x140b27.MAX_KEY, _0x48b30f));else _0x26b4c5.continue();
                  }
                },
                continuePrimaryKey: {
                  'value'(_0x18102b, _0x3c42be) {
                    _0x26b4c5.continuePrimaryKey(_o(_0x18102b, _0x140b27.MAX_KEY, _0x48b30f), _0x3c42be);
                  }
                },
                primaryKey: {
                  get: () => _0x26b4c5.primaryKey
                },
                key: {
                  'get'() {
                    const _0x154ff5 = _0x26b4c5.key;
                    if (1 === _0x1ce61f) return _0x154ff5[0];
                    return _0x154ff5.slice(0, _0x1ce61f);
                  }
                },
                value: {
                  get: () => _0x26b4c5.value
                }
              }));
              var _0x26b4c5;
            });
            return _0x4efa2c.openCursor(_0x38a514);
          }
        };
      }
    };
  }
};
function ko(_0x3bffe7, _0x53a30f, _0xf5185, _0x3f04a3) {
  _0xf5185 = _0xf5185 || {};
  _0x3f04a3 = _0x3f04a3 || '';
  Fs(_0x3bffe7).forEach(_0x7828e2 => {
    if (Ws(_0x53a30f, _0x7828e2)) {
      var _0xdf8388 = _0x3bffe7[_0x7828e2],
        _0x32324f = _0x53a30f[_0x7828e2];
      if ('object' == typeof _0xdf8388 && "object" == typeof _0x32324f && _0xdf8388 && _0x32324f) {
        const _0x5d464a = wn(_0xdf8388);
        if (_0x5d464a !== wn(_0x32324f)) _0xf5185[_0x3f04a3 + _0x7828e2] = _0x53a30f[_0x7828e2];else if ("Object" === _0x5d464a) ko(_0xdf8388, _0x32324f, _0xf5185, _0x3f04a3 + _0x7828e2 + '.');else _0xdf8388 !== _0x32324f && (_0xf5185[_0x3f04a3 + _0x7828e2] = _0x53a30f[_0x7828e2]);
      } else _0xdf8388 !== _0x32324f && (_0xf5185[_0x3f04a3 + _0x7828e2] = _0x53a30f[_0x7828e2]);
    } else _0xf5185[_0x3f04a3 + _0x7828e2] = void 0;
  });
  Fs(_0x53a30f).forEach(_0x48f024 => {
    Ws(_0x3bffe7, _0x48f024) || (_0xf5185[_0x3f04a3 + _0x48f024] = _0x53a30f[_0x48f024]);
  });
  return _0xf5185;
}
const Co = {
  stack: "dbcore",
  name: 'HooksMiddleware',
  level: 2,
  create: _0x55669e => ({
    ..._0x55669e,
    'table'(_0x2e31cd) {
      const _0x417a57 = _0x55669e.table(_0x2e31cd),
        {
          primaryKey: _0x4e630e
        } = _0x417a57.schema;
      return {
        ..._0x417a57,
        'mutate'(_0x376252) {
          const _0x569fa1 = wa.trans,
            {
              deleting: _0x133b3b,
              creating: _0x338abd,
              updating: _0x2b33eb
            } = _0x569fa1.table(_0x2e31cd).hook;
          switch (_0x376252.type) {
            case "add":
              if (_0x338abd.fire === zn) break;
              return _0x569fa1._promise("readwrite", () => _0x2391fb(_0x376252), true);
            case 'put':
              if (_0x338abd.fire === zn && _0x2b33eb.fire === zn) break;
              return _0x569fa1._promise("readwrite", () => _0x2391fb(_0x376252), true);
            case "delete":
              if (_0x133b3b.fire === zn) break;
              return _0x569fa1._promise('readwrite', () => _0x2391fb(_0x376252), true);
            case 'deleteRange':
              if (_0x133b3b.fire === zn) break;
              return _0x569fa1._promise('readwrite', () => {
                return _0x570d18((_0x1b409d = _0x376252).trans, _0x1b409d.range, 10000);
                var _0x1b409d;
              }, true);
          }
          return _0x417a57.mutate(_0x376252);
          function _0x2391fb(_0x260392) {
            const _0x2be60b = wa.trans,
              _0x156b8b = _0x260392.keys || (_0x31ddf8 = _0x4e630e, "delete" === (_0x549e08 = _0x260392).type ? _0x549e08.keys : _0x549e08.keys || _0x549e08.values.map(_0x31ddf8.extractKey));
            var _0x31ddf8, _0x549e08;
            if (!_0x156b8b) throw new Error("Keys missing");
            "delete" !== (_0x260392 = 'add' === _0x260392.type || "put" === _0x260392.type ? {
              ..._0x260392,
              keys: _0x156b8b
            } : {
              ..._0x260392
            }).type && (_0x260392.values = [..._0x260392.values]);
            _0x260392.keys && (_0x260392.keys = [..._0x260392.keys]);
            return function (_0xeb19f6, _0x28ffc5, _0xfa0e71) {
              if ("add" === _0x28ffc5.type) return Promise.resolve([]);
              return _0xeb19f6.getMany({
                trans: _0x28ffc5.trans,
                keys: _0xfa0e71,
                cache: 'immutable'
              });
            }(_0x417a57, _0x260392, _0x156b8b).then(_0x35ced6 => {
              const _0x47f90e = _0x156b8b.map((_0x37b2b6, _0x5dc314) => {
                const _0x274f6c = _0x35ced6[_0x5dc314],
                  _0x3bd714 = {
                    onerror: null,
                    onsuccess: null
                  };
                if ('delete' === _0x260392.type) _0x133b3b.fire.call(_0x3bd714, _0x37b2b6, _0x274f6c, _0x2be60b);else {
                  if ("add" === _0x260392.type || void 0 === _0x274f6c) {
                    const _0xdfddb8 = _0x338abd.fire.call(_0x3bd714, _0x37b2b6, _0x260392.values[_0x5dc314], _0x2be60b);
                    null == _0x37b2b6 && null != _0xdfddb8 && (_0x37b2b6 = _0xdfddb8, _0x260392.keys[_0x5dc314] = _0x37b2b6, _0x4e630e.outbound || un(_0x260392.values[_0x5dc314], _0x4e630e.keyPath, _0x37b2b6));
                  } else {
                    const _0x4e5dbf = ko(_0x274f6c, _0x260392.values[_0x5dc314]),
                      _0x2df2f5 = _0x2b33eb.fire.call(_0x3bd714, _0x4e5dbf, _0x37b2b6, _0x274f6c, _0x2be60b);
                    if (_0x2df2f5) {
                      const _0x548833 = _0x260392.values[_0x5dc314];
                      Object.keys(_0x2df2f5).forEach(_0x18232a => {
                        if (Ws(_0x548833, _0x18232a)) _0x548833[_0x18232a] = _0x2df2f5[_0x18232a];else un(_0x548833, _0x18232a, _0x2df2f5[_0x18232a]);
                      });
                    }
                  }
                }
                return _0x3bd714;
              });
              return _0x417a57.mutate(_0x260392).then(({
                failures: _0x4cd704,
                results: _0x58129d,
                numFailures: _0x1cd931,
                lastResult: _0x1b05e0
              }) => {
                for (let _0x285d7d = 0; _0x285d7d < _0x156b8b.length; ++_0x285d7d) {
                  const _0x5e8cd3 = _0x58129d ? _0x58129d[_0x285d7d] : _0x156b8b[_0x285d7d],
                    _0x18135e = _0x47f90e[_0x285d7d];
                  if (null == _0x5e8cd3) _0x18135e.onerror && _0x18135e.onerror(_0x4cd704[_0x285d7d]);else _0x18135e.onsuccess && _0x18135e.onsuccess("put" === _0x260392.type && _0x35ced6[_0x285d7d] ? _0x260392.values[_0x285d7d] : _0x5e8cd3);
                }
                return {
                  failures: _0x4cd704,
                  results: _0x58129d,
                  numFailures: _0x1cd931,
                  lastResult: _0x1b05e0
                };
              }).catch(_0x585bc2 => (_0x47f90e.forEach(_0x53fb0a => _0x53fb0a.onerror && _0x53fb0a.onerror(_0x585bc2)), Promise.reject(_0x585bc2)));
            });
          }
          function _0x570d18(_0x2a70e4, _0x4f67d4, _0x46185a) {
            return _0x417a57.query({
              trans: _0x2a70e4,
              values: false,
              query: {
                index: _0x4e630e,
                range: _0x4f67d4
              },
              limit: _0x46185a
            }).then(({
              result: _0x3b3f02
            }) => _0x2391fb({
              type: 'delete',
              keys: _0x3b3f02,
              trans: _0x2a70e4
            }).then(_0x501418 => _0x501418.numFailures > 0 ? Promise.reject(_0x501418.failures[0]) : _0x3b3f02.length < _0x46185a ? {
              failures: [],
              numFailures: 0,
              lastResult: void 0
            } : _0x570d18(_0x2a70e4, {
              ..._0x4f67d4,
              lower: _0x3b3f02[_0x3b3f02.length - 1],
              lowerOpen: true
            }, _0x46185a)));
          }
        }
      };
    }
  })
};
function So(_0x258577, _0x557eec, _0x1fc439) {
  try {
    if (!_0x557eec) return null;
    if (_0x557eec.keys.length < _0x258577.length) return null;
    const _0xf99096 = [];
    for (let _0x94a886 = 0, _0x499131 = 0; _0x94a886 < _0x557eec.keys.length && _0x499131 < _0x258577.length; ++_0x94a886) 0 === Ii(_0x557eec.keys[_0x94a886], _0x258577[_0x499131]) && (_0xf99096.push(_0x1fc439 ? mn(_0x557eec.values[_0x94a886]) : _0x557eec.values[_0x94a886]), ++_0x499131);
    return _0xf99096.length === _0x258577.length ? _0xf99096 : null;
  } catch (_0x244b36) {
    return null;
  }
}
const Uo = {
  stack: "dbcore",
  level: -1,
  create: _0x2dc9b1 => ({
    table: _0x36ec8f => {
      const _0x582ade = _0x2dc9b1.table(_0x36ec8f);
      return {
        ..._0x582ade,
        getMany: _0x5d4d95 => {
          if (!_0x5d4d95.cache) return _0x582ade.getMany(_0x5d4d95);
          const _0x3f8790 = So(_0x5d4d95.keys, _0x5d4d95.trans._cache, "clone" === _0x5d4d95.cache);
          if (_0x3f8790) return ka.resolve(_0x3f8790);
          return _0x582ade.getMany(_0x5d4d95).then(_0x375332 => (_0x5d4d95.trans._cache = {
            keys: _0x5d4d95.keys,
            values: "clone" === _0x5d4d95.cache ? mn(_0x375332) : _0x375332
          }, _0x375332));
        },
        mutate: _0x4e1242 => ("add" !== _0x4e1242.type && (_0x4e1242.trans._cache = null), _0x582ade.mutate(_0x4e1242))
      };
    }
  })
};
function Do(_0x3a4c6b) {
  return !("from" in _0x3a4c6b);
}
const Oo = function (_0x4169c2, _0xc5f07f) {
  if (!this) {
    const _0x2c035f = new Oo();
    _0x4169c2 && 'd' in _0x4169c2 && Gs(_0x2c035f, _0x4169c2);
    return _0x2c035f;
  }
  Gs(this, arguments.length ? {
    d: 1,
    from: _0x4169c2,
    to: arguments.length > 1 ? _0xc5f07f : _0x4169c2
  } : {
    d: 0
  });
};
function xo(_0x4106eb, _0x42aab8, _0x7b36d) {
  const _0x498e1a = Ii(_0x42aab8, _0x7b36d);
  if (isNaN(_0x498e1a)) return;
  if (_0x498e1a > 0) throw RangeError();
  if (Do(_0x4106eb)) return Gs(_0x4106eb, {
    from: _0x42aab8,
    to: _0x7b36d,
    d: 1
  });
  const _0x23740b = _0x4106eb.l,
    _0x102143 = _0x4106eb.r;
  if (Ii(_0x7b36d, _0x4106eb.from) < 0) {
    if (_0x23740b) xo(_0x23740b, _0x42aab8, _0x7b36d);else _0x4106eb.l = {
      from: _0x42aab8,
      to: _0x7b36d,
      d: 1,
      l: null,
      r: null
    };
    return Io(_0x4106eb);
  }
  if (Ii(_0x42aab8, _0x4106eb.to) > 0) {
    if (_0x102143) xo(_0x102143, _0x42aab8, _0x7b36d);else _0x4106eb.r = {
      from: _0x42aab8,
      to: _0x7b36d,
      d: 1,
      l: null,
      r: null
    };
    return Io(_0x4106eb);
  }
  Ii(_0x42aab8, _0x4106eb.from) < 0 && (_0x4106eb.from = _0x42aab8, _0x4106eb.l = null, _0x4106eb.d = _0x102143 ? _0x102143.d + 1 : 1);
  Ii(_0x7b36d, _0x4106eb.to) > 0 && (_0x4106eb.to = _0x7b36d, _0x4106eb.r = null, _0x4106eb.d = _0x4106eb.l ? _0x4106eb.l.d + 1 : 1);
  const _0x28d707 = !_0x4106eb.r;
  _0x23740b && !_0x4106eb.l && Ko(_0x4106eb, _0x23740b);
  _0x102143 && _0x28d707 && Ko(_0x4106eb, _0x102143);
}
function Ko(_0x309a3e, _0x2430e5) {
  Do(_0x2430e5) || function _0x175974(_0x794676, {
    from: _0x332376,
    to: _0x36fa6d,
    l: _0x2fb3a3,
    r: _0x42ecb7
  }) {
    xo(_0x794676, _0x332376, _0x36fa6d);
    _0x2fb3a3 && _0x175974(_0x794676, _0x2fb3a3);
    _0x42ecb7 && _0x175974(_0x794676, _0x42ecb7);
  }(_0x309a3e, _0x2430e5);
}
function Ao(_0x4ccffe) {
  let _0x184cfb = Do(_0x4ccffe) ? null : {
    s: 0,
    n: _0x4ccffe
  };
  return {
    'next'(_0x524eff) {
      const _0x592e57 = arguments.length > 0;
      for (; _0x184cfb;) switch (_0x184cfb.s) {
        case 0:
          _0x184cfb.s = 1;
          if (_0x592e57) {
            for (; _0x184cfb.n.l && Ii(_0x524eff, _0x184cfb.n.from) < 0;) _0x184cfb = {
              up: _0x184cfb,
              n: _0x184cfb.n.l,
              s: 1
            };
          } else {
            for (; _0x184cfb.n.l;) _0x184cfb = {
              up: _0x184cfb,
              n: _0x184cfb.n.l,
              s: 1
            };
          }
        case 1:
          _0x184cfb.s = 2;
          if (!_0x592e57 || Ii(_0x524eff, _0x184cfb.n.to) <= 0) return {
            value: _0x184cfb.n,
            done: false
          };
        case 2:
          if (_0x184cfb.n.r) {
            _0x184cfb.s = 3;
            _0x184cfb = {
              up: _0x184cfb,
              n: _0x184cfb.n.r,
              s: 0
            };
            continue;
          }
        case 3:
          _0x184cfb = _0x184cfb.up;
      }
      return {
        done: true
      };
    }
  };
}
function Io(_0x2168ad) {
  var _0x56f7e1, _0xbf84f5;
  const _0x39912b = ((null === (_0x56f7e1 = _0x2168ad.r) || void 0 === _0x56f7e1 ? void 0 : _0x56f7e1.d) || 0) - ((null === (_0xbf84f5 = _0x2168ad.l) || void 0 === _0xbf84f5 ? void 0 : _0xbf84f5.d) || 0),
    _0x538b5e = _0x39912b > 1 ? 'r' : _0x39912b < -1 ? 'l' : '';
  if (_0x538b5e) {
    const _0x1e143c = 'r' === _0x538b5e ? 'l' : 'r',
      _0x1774f6 = {
        ..._0x2168ad
      },
      _0x15cba1 = _0x2168ad[_0x538b5e];
    _0x2168ad.from = _0x15cba1.from;
    _0x2168ad.to = _0x15cba1.to;
    _0x2168ad[_0x538b5e] = _0x15cba1[_0x538b5e];
    _0x1774f6[_0x538b5e] = _0x15cba1[_0x1e143c];
    _0x2168ad[_0x1e143c] = _0x1774f6;
    _0x1774f6.d = Po(_0x1774f6);
  }
  _0x2168ad.d = Po(_0x2168ad);
}
function Po({
  r: _0x488dbb,
  l: _0x3f09c9
}) {
  return (_0x488dbb ? _0x3f09c9 ? Math.max(_0x488dbb.d, _0x3f09c9.d) : _0x488dbb.d : _0x3f09c9 ? _0x3f09c9.d : 0) + 1;
}
js(Oo.prototype, {
  'add'(_0x22c019) {
    Ko(this, _0x22c019);
    return this;
  },
  'addKey'(_0x2ea1b3) {
    xo(this, _0x2ea1b3, _0x2ea1b3);
    return this;
  },
  'addKeys'(_0x294702) {
    _0x294702.forEach(_0x291d16 => xo(this, _0x291d16, _0x291d16));
    return this;
  },
  [bn]() {
    return Ao(this);
  }
});
const Mo = {
  stack: "dbcore",
  level: 0,
  create: _0x13d5e8 => {
    const _0x59573f = _0x13d5e8.schema.name,
      _0x2fc803 = new Oo(_0x13d5e8.MIN_KEY, _0x13d5e8.MAX_KEY);
    return {
      ..._0x13d5e8,
      table: _0x23077e => {
        const _0x1ce9b6 = _0x13d5e8.table(_0x23077e),
          {
            schema: _0x302283
          } = _0x1ce9b6,
          {
            primaryKey: _0x20fe91
          } = _0x302283,
          {
            extractKey: _0x5f13f6,
            outbound: _0x3285b2
          } = _0x20fe91,
          _0x372614 = {
            ..._0x1ce9b6,
            mutate: _0x3e0419 => {
              const _0x190d63 = _0x3e0419.trans,
                _0x44c370 = _0x190d63.mutatedParts || (_0x190d63.mutatedParts = {}),
                _0xf3836c = _0x168834 => {
                  const _0x4bf75b = "idb://" + _0x59573f + '/' + _0x23077e + '/' + _0x168834;
                  return _0x44c370[_0x4bf75b] || (_0x44c370[_0x4bf75b] = new Oo());
                },
                _0x233d1f = _0xf3836c(''),
                _0x296457 = _0xf3836c(":dels"),
                {
                  type: _0x1be961
                } = _0x3e0419;
              let [_0x257553, _0x2fec2d] = "deleteRange" === _0x3e0419.type ? [_0x3e0419.range] : "delete" === _0x3e0419.type ? [_0x3e0419.keys] : _0x3e0419.values.length < 50 ? [[], _0x3e0419.values] : [];
              const _0x3ab80e = _0x3e0419.trans._cache;
              return _0x1ce9b6.mutate(_0x3e0419).then(_0x4f04c4 => {
                if (Ns(_0x257553)) {
                  'delete' !== _0x1be961 && (_0x257553 = _0x4f04c4.results);
                  _0x233d1f.addKeys(_0x257553);
                  const _0x2c9d89 = So(_0x257553, _0x3ab80e);
                  _0x2c9d89 || 'add' === _0x1be961 || _0x296457.addKeys(_0x257553);
                  (_0x2c9d89 || _0x2fec2d) && (_0x519e12 = _0xf3836c, _0xef6346 = _0x2c9d89, _0x337bb6 = _0x2fec2d, _0x302283.indexes.forEach(function (_0x95994) {
                    const _0x43ce19 = _0x519e12(_0x95994.name || '');
                    function _0x2c24e5(_0x70dfbc) {
                      if (null != _0x70dfbc) return _0x95994.extractKey(_0x70dfbc);
                      return null;
                    }
                    const _0x39b525 = _0x41dc76 => _0x95994.multiEntry && Ns(_0x41dc76) ? _0x41dc76.forEach(_0xa5a71 => _0x43ce19.addKey(_0xa5a71)) : _0x43ce19.addKey(_0x41dc76);
                    (_0xef6346 || _0x337bb6).forEach((_0x330b76, _0x597f3e) => {
                      const _0x5f3efe = _0xef6346 && _0x2c24e5(_0xef6346[_0x597f3e]),
                        _0x40be2a = _0x337bb6 && _0x2c24e5(_0x337bb6[_0x597f3e]);
                      0 !== Ii(_0x5f3efe, _0x40be2a) && (null != _0x5f3efe && _0x39b525(_0x5f3efe), null != _0x40be2a && _0x39b525(_0x40be2a));
                    });
                  }));
                } else {
                  if (_0x257553) {
                    const _0x2560e0 = {
                      from: _0x257553.lower,
                      to: _0x257553.upper
                    };
                    _0x296457.add(_0x2560e0);
                    _0x233d1f.add(_0x2560e0);
                  } else {
                    _0x233d1f.add(_0x2fc803);
                    _0x296457.add(_0x2fc803);
                    _0x302283.indexes.forEach(_0x568e25 => _0xf3836c(_0x568e25.name).add(_0x2fc803));
                  }
                }
                var _0x519e12, _0xef6346, _0x337bb6;
                return _0x4f04c4;
              });
            }
          },
          _0xb132de = ({
            query: {
              index: _0x5e5ae0,
              range: _0x3c049a
            }
          }) => {
            var _0x5e44e7, _0x381149;
            return [_0x5e5ae0, new Oo(null !== (_0x5e44e7 = _0x3c049a.lower) && void 0 !== _0x5e44e7 ? _0x5e44e7 : _0x13d5e8.MIN_KEY, null !== (_0x381149 = _0x3c049a.upper) && void 0 !== _0x381149 ? _0x381149 : _0x13d5e8.MAX_KEY)];
          },
          _0xb63dab = {
            get: _0x3707ef => [_0x20fe91, new Oo(_0x3707ef.key)],
            getMany: _0x1b515a => [_0x20fe91, new Oo().addKeys(_0x1b515a.keys)],
            count: _0xb132de,
            query: _0xb132de,
            openCursor: _0xb132de
          };
        Fs(_0xb63dab).forEach(_0x2c1bd1 => {
          _0x372614[_0x2c1bd1] = function (_0x4ab3b2) {
            const {
              subscr: _0x441103
            } = wa;
            if (_0x441103) {
              const _0x5b05c4 = _0x33b59e => {
                  const _0x3595fb = "idb://" + _0x59573f + '/' + _0x23077e + '/' + _0x33b59e;
                  return _0x441103[_0x3595fb] || (_0x441103[_0x3595fb] = new Oo());
                },
                _0x3a3a5e = _0x5b05c4(''),
                _0x3b6090 = _0x5b05c4(":dels"),
                [_0x2497f2, _0x2be260] = _0xb63dab[_0x2c1bd1](_0x4ab3b2);
              _0x5b05c4(_0x2497f2.name || '').add(_0x2be260);
              if (!_0x2497f2.isPrimaryKey) {
                if ("count" !== _0x2c1bd1) {
                  const _0x40f0e5 = 'query' === _0x2c1bd1 && _0x3285b2 && _0x4ab3b2.values && _0x1ce9b6.query({
                    ..._0x4ab3b2,
                    values: false
                  });
                  return _0x1ce9b6[_0x2c1bd1].apply(this, arguments).then(_0x24d174 => {
                    if ('query' === _0x2c1bd1) {
                      if (_0x3285b2 && _0x4ab3b2.values) return _0x40f0e5.then(({
                        result: _0x320560
                      }) => (_0x3a3a5e.addKeys(_0x320560), _0x24d174));
                      const _0x3fedc7 = _0x4ab3b2.values ? _0x24d174.result.map(_0x5f13f6) : _0x24d174.result;
                      if (_0x4ab3b2.values) _0x3a3a5e.addKeys(_0x3fedc7);else _0x3b6090.addKeys(_0x3fedc7);
                    } else {
                      if ("openCursor" === _0x2c1bd1) {
                        const _0x43d2a = _0x24d174,
                          _0x3d1a7b = _0x4ab3b2.values;
                        return _0x43d2a && Object.create(_0x43d2a, {
                          key: {
                            get: () => (_0x3b6090.addKey(_0x43d2a.primaryKey), _0x43d2a.key)
                          },
                          primaryKey: {
                            'get'() {
                              const _0x7877c7 = _0x43d2a.primaryKey;
                              _0x3b6090.addKey(_0x7877c7);
                              return _0x7877c7;
                            }
                          },
                          value: {
                            get: () => (_0x3d1a7b && _0x3a3a5e.addKey(_0x43d2a.primaryKey), _0x43d2a.value)
                          }
                        });
                      }
                    }
                    return _0x24d174;
                  });
                }
                _0x3b6090.add(_0x2fc803);
              }
            }
            return _0x1ce9b6[_0x2c1bd1].apply(this, arguments);
          };
        });
        return _0x372614;
      }
    };
  }
};
class Xn {
  constructor(_0x4fb228, _0x28526e) {
    this._middlewares = {};
    this.verno = 0;
    const _0x47ae93 = Xn.dependencies;
    this._options = _0x28526e = {
      addons: Xn.addons,
      autoOpen: true,
      indexedDB: _0x47ae93.indexedDB,
      IDBKeyRange: _0x47ae93.IDBKeyRange,
      ..._0x28526e
    };
    this._deps = {
      indexedDB: _0x28526e.indexedDB,
      IDBKeyRange: _0x28526e.IDBKeyRange
    };
    const {
      addons: _0x5ee469
    } = _0x28526e;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    const _0x317116 = {
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
    var _0x815f82, _0x61df97;
    _0x317116.dbReadyPromise = new ka(_0x259ee9 => {
      _0x317116.dbReadyResolve = _0x259ee9;
    });
    _0x317116.openCanceller = new ka((_0x2b751f, _0x12100b) => {
      _0x317116.cancelOpen = _0x12100b;
    });
    this._state = _0x317116;
    this.name = _0x4fb228;
    this.on = ki(this, "populate", "blocked", "versionchange", "close", {
      ready: [Qn, zn]
    });
    this.on.ready.subscribe = tn(this.on.ready.subscribe, _0xac07b7 => (_0x14b55a, _0x26dfaf) => {
      Xn.vip(() => {
        const _0x485def = this._state;
        if (_0x485def.openComplete) {
          _0x485def.dbOpenError || ka.resolve().then(_0x14b55a);
          _0x26dfaf && _0xac07b7(_0x14b55a);
        } else {
          if (_0x485def.onReadyBeingFired) {
            _0x485def.onReadyBeingFired.push(_0x14b55a);
            _0x26dfaf && _0xac07b7(_0x14b55a);
          } else {
            _0xac07b7(_0x14b55a);
            const _0xc2d597 = this;
            _0x26dfaf || _0xac07b7(function _0x46a004() {
              _0xc2d597.on.ready.unsubscribe(_0x14b55a);
              _0xc2d597.on.ready.unsubscribe(_0x46a004);
            });
          }
        }
      });
    });
    this.Collection = (_0x815f82 = this, Ci(Vt.prototype, function (_0x241d1f, _0x203ad0) {
      this.db = _0x815f82;
      let _0x3e1310 = _i,
        _0x125a7a = null;
      if (_0x203ad0) try {
        _0x3e1310 = _0x203ad0();
      } catch (_0x421cfd) {
        _0x125a7a = _0x421cfd;
      }
      const _0x32717a = _0x241d1f._ctx,
        _0x4a263a = _0x32717a.table,
        _0x34c5ad = _0x4a263a.hook.reading.fire;
      this._ctx = {
        table: _0x4a263a,
        index: _0x32717a.index,
        isPrimKey: !_0x32717a.index || _0x4a263a.schema.primKey.keyPath && _0x32717a.index === _0x4a263a.schema.primKey.name,
        range: _0x3e1310,
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
        error: _0x125a7a,
        or: _0x32717a.or,
        valueMapper: _0x34c5ad !== Hn ? _0x34c5ad : null
      };
    }));
    this.Table = (_0x61df97 = this, Ci(jt.prototype, function (_0x5385a6, _0x76f714, _0x3ee7cd) {
      this.db = _0x61df97;
      this._tx = _0x3ee7cd;
      this.name = _0x5385a6;
      this.schema = _0x76f714;
      this.hook = _0x61df97._allTables[_0x5385a6] ? _0x61df97._allTables[_0x5385a6].hook : ki(null, {
        creating: [Yn, zn],
        reading: [Wn, Hn],
        updating: [qn, zn],
        deleting: [$n, zn]
      });
    }));
    this.Transaction = function (_0x9f0798) {
      return Ci(an.prototype, function (_0x497a62, _0x39d165, _0xd9337, _0x5d7337, _0x308055) {
        this.db = _0x9f0798;
        this.mode = _0x497a62;
        this.storeNames = _0x39d165;
        this.schema = _0xd9337;
        this.chromeTransactionDurability = _0x5d7337;
        this.idbtrans = null;
        this.on = ki(this, "complete", "error", "abort");
        this.parent = _0x308055 || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0;
        this._completion = new ka((_0x47ff6d, _0x5b3dda) => {
          this._resolve = _0x47ff6d;
          this._reject = _0x5b3dda;
        });
        this._completion.then(() => {
          this.active = false;
          this.on.complete.fire();
        }, _0x4fd335 => {
          var _0x851882 = this.active;
          this.active = false;
          this.on.error.fire(_0x4fd335);
          if (this.parent) this.parent._reject(_0x4fd335);else _0x851882 && this.idbtrans && this.idbtrans.abort();
          return ni(_0x4fd335);
        });
      });
    }(this);
    this.Version = function (_0x4bac8a) {
      return Ci(On.prototype, function (_0x1c9486) {
        this.db = _0x4bac8a;
        this._cfg = {
          version: _0x1c9486,
          storesSource: null,
          dbschema: {},
          tables: {},
          contentUpgrade: null
        };
      });
    }(this);
    this.WhereClause = function (_0x9d59cd) {
      return Ci(en.prototype, function (_0x3998c1, _0xa24ae7, _0x41f8ee) {
        this.db = _0x9d59cd;
        this._ctx = {
          table: _0x3998c1,
          index: ":id" === _0xa24ae7 ? null : _0xa24ae7,
          or: _0x41f8ee
        };
        const _0x481335 = _0x9d59cd._deps.indexedDB;
        if (!_0x481335) throw new Fn.MissingAPI();
        this._cmp = this._ascending = _0x481335.cmp.bind(_0x481335);
        this._descending = (_0x5ad9dd, _0x325a79) => _0x481335.cmp(_0x325a79, _0x5ad9dd);
        this._max = (_0xce5d9, _0x2e3121) => _0x481335.cmp(_0xce5d9, _0x2e3121) > 0 ? _0xce5d9 : _0x2e3121;
        this._min = (_0x41f778, _0x503d5a) => _0x481335.cmp(_0x41f778, _0x503d5a) < 0 ? _0x41f778 : _0x503d5a;
        this._IDBKeyRange = _0x9d59cd._deps.IDBKeyRange;
      });
    }(this);
    this.on('versionchange', _0x52f6fb => {
      if (_0x52f6fb.newVersion > 0) this.name;else this.name;
      this.close();
    });
    this.on("blocked", _0xdc1977 => {
      if (!_0xdc1977.newVersion || _0xdc1977.newVersion < _0xdc1977.oldVersion) this.name;else {
        this.name;
        _0xdc1977.oldVersion;
      }
    });
    this._maxKey = Xi(_0x28526e.IDBKeyRange);
    this._createTransaction = (_0x1c4ab4, _0x3dca1e, _0x2c5332, _0x514e81) => new this.Transaction(_0x1c4ab4, _0x3dca1e, _0x2c5332, this._options.chromeTransactionDurability, _0x514e81);
    this._fireOnBlocked = _0x5a7bcc => {
      this.on("blocked").fire(_0x5a7bcc);
      fi.filter(_0x2f9f46 => _0x2f9f46.name === this.name && _0x2f9f46 !== this && !_0x2f9f46._state.vcFired).map(_0x480dbc => _0x480dbc.on("versionchange").fire(_0x5a7bcc));
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
    _0x5ee469.forEach(_0x17f28e => _0x17f28e(this));
  }
  ['version'](_0x18f30b) {
    if (isNaN(_0x18f30b) || _0x18f30b < 0.1) throw new Fn.Type('Given\x20version\x20is\x20not\x20a\x20positive\x20number');
    _0x18f30b = Math.round(10 * _0x18f30b) / 10;
    if (this.idbdb || this._state.isBeingOpened) throw new Fn.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, _0x18f30b);
    const _0x55a46a = this._versions;
    var _0x481ff7 = _0x55a46a.filter(_0x1d261c => _0x1d261c._cfg.version === _0x18f30b)[0];
    return _0x481ff7 || (_0x481ff7 = new this.Version(_0x18f30b), _0x55a46a.push(_0x481ff7), _0x55a46a.sort(ao), _0x481ff7.stores({}), this._state.autoSchema = false, _0x481ff7);
  }
  ['_whenReady'](_0x31ffbd) {
    if (this.idbdb && (this._state.openComplete || wa.letThrough || this._vip)) return _0x31ffbd();
    return new ka((_0x16db45, _0x1af337) => {
      if (this._state.openComplete) return _0x1af337(new Fn.DatabaseClosed(this._state.dbOpenError));
      if (!this._state.isBeingOpened) {
        if (!this._options.autoOpen) return void _0x1af337(new Fn.DatabaseClosed());
        this.open().catch(zn);
      }
      this._state.dbReadyPromise.then(_0x16db45, _0x1af337);
    }).then(_0x31ffbd);
  }
  ['use']({
    stack: _0x2eaef1,
    create: _0x6ee389,
    level: _0xbb61fd,
    name: _0x4a3bde
  }) {
    _0x4a3bde && this.unuse({
      stack: _0x2eaef1,
      name: _0x4a3bde
    });
    const _0xa21f63 = this._middlewares[_0x2eaef1] || (this._middlewares[_0x2eaef1] = []);
    _0xa21f63.push({
      stack: _0x2eaef1,
      create: _0x6ee389,
      level: null == _0xbb61fd ? 10 : _0xbb61fd,
      name: _0x4a3bde
    });
    _0xa21f63.sort((_0x29405d, _0x2e6cda) => _0x29405d.level - _0x2e6cda.level);
    return this;
  }
  ['unuse']({
    stack: _0x1f6c45,
    name: _0x322905,
    create: _0x1e4427
  }) {
    _0x1f6c45 && this._middlewares[_0x1f6c45] && (this._middlewares[_0x1f6c45] = this._middlewares[_0x1f6c45].filter(_0x52e13e => _0x1e4427 ? _0x52e13e.create !== _0x1e4427 : !!_0x322905 && _0x52e13e.name !== _0x322905));
    return this;
  }
  ["open"]() {
    return po(this);
  }
  ["_close"]() {
    const _0x5e6066 = this._state,
      _0x52f0bd = fi.indexOf(this);
    _0x52f0bd >= 0 && fi.splice(_0x52f0bd, 1);
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (_0x2347b3) {}
      this._novip.idbdb = null;
    }
    _0x5e6066.dbReadyPromise = new ka(_0xd46310 => {
      _0x5e6066.dbReadyResolve = _0xd46310;
    });
    _0x5e6066.openCanceller = new ka((_0x5a90b8, _0x25c5bf) => {
      _0x5e6066.cancelOpen = _0x25c5bf;
    });
  }
  ['close']() {
    this._close();
    const _0x2945d8 = this._state;
    this._options.autoOpen = false;
    _0x2945d8.dbOpenError = new Fn.DatabaseClosed();
    _0x2945d8.isBeingOpened && _0x2945d8.cancelOpen(_0x2945d8.dbOpenError);
  }
  ['delete']() {
    const _0x3fe37d = arguments.length > 0,
      _0x4b98a9 = this._state;
    return new ka((_0x52cfc5, _0x26e94a) => {
      const _0x40e0cf = () => {
        this.close();
        var _0x4b5211 = this._deps.indexedDB.deleteDatabase(this.name);
        _0x4b5211.onsuccess = Ba(() => {
          !function ({
            indexedDB: _0x1d4789,
            IDBKeyRange: _0x2374b7
          }, _0x4185a1) {
            !ho(_0x1d4789) && _0x4185a1 !== pi && fo(_0x1d4789, _0x2374b7).delete(_0x4185a1).catch(zn);
          }(this._deps, this.name);
          _0x52cfc5();
        });
        _0x4b5211.onerror = zi(_0x26e94a);
        _0x4b5211.onblocked = this._fireOnBlocked;
      };
      if (_0x3fe37d) throw new Fn.InvalidArgument("Arguments not allowed in db.delete()");
      if (_0x4b98a9.isBeingOpened) _0x4b98a9.dbReadyPromise.then(_0x40e0cf);else _0x40e0cf();
    });
  }
  ["backendDB"]() {
    return this.idbdb;
  }
  ['isOpen']() {
    return null !== this.idbdb;
  }
  ["hasBeenClosed"]() {
    const _0x3b0c80 = this._state.dbOpenError;
    return _0x3b0c80 && "DatabaseClosed" === _0x3b0c80.name;
  }
  ["hasFailed"]() {
    return null !== this._state.dbOpenError;
  }
  ["dynamicallyOpened"]() {
    return this._state.autoSchema;
  }
  get ['tables']() {
    return Fs(this._allTables).map(_0x48be17 => this._allTables[_0x48be17]);
  }
  ["transaction"]() {
    const _0x3a3750 = wo.apply(this, arguments);
    return this._transaction.apply(this, _0x3a3750);
  }
  ["_transaction"](_0xe2fb30, _0x326485, _0x5d1b3c) {
    let _0x46a3cf = wa.trans;
    _0x46a3cf && _0x46a3cf.db === this && -1 === _0xe2fb30.indexOf('!') || (_0x46a3cf = null);
    const _0x19a20f = -1 !== _0xe2fb30.indexOf('?');
    let _0x3d0be1, _0x55e61d;
    _0xe2fb30 = _0xe2fb30.replace('!', '').replace('?', '');
    try {
      _0x55e61d = _0x326485.map(_0x2d5baa => {
        var _0xa099b6 = _0x2d5baa instanceof this.Table ? _0x2d5baa.name : _0x2d5baa;
        if ("string" != typeof _0xa099b6) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return _0xa099b6;
      });
      if ('r' == _0xe2fb30 || _0xe2fb30 === yi) _0x3d0be1 = yi;else {
        if ('rw' != _0xe2fb30 && _0xe2fb30 != wi) throw new Fn.InvalidArgument("Invalid transaction mode: " + _0xe2fb30);
        _0x3d0be1 = wi;
      }
      if (_0x46a3cf) {
        if (_0x46a3cf.mode === yi && _0x3d0be1 === wi) {
          if (!_0x19a20f) throw new Fn.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
          _0x46a3cf = null;
        }
        _0x46a3cf && _0x55e61d.forEach(_0x4d978c => {
          if (_0x46a3cf && -1 === _0x46a3cf.storeNames.indexOf(_0x4d978c)) {
            if (!_0x19a20f) throw new Fn.SubTransaction("Table " + _0x4d978c + " not included in parent transaction.");
            _0x46a3cf = null;
          }
        });
        _0x19a20f && _0x46a3cf && !_0x46a3cf.active && (_0x46a3cf = null);
      }
    } catch (_0xab75e1) {
      if (_0x46a3cf) return _0x46a3cf._promise(null, (_0x1030d6, _0x463b9e) => {
        _0x463b9e(_0xab75e1);
      });
      return ni(_0xab75e1);
    }
    const _0x2f6079 = bo.bind(null, this, _0x3d0be1, _0x55e61d, _0x46a3cf, _0x5d1b3c);
    if (_0x46a3cf) return _0x46a3cf._promise(_0x3d0be1, _0x2f6079, "lock");
    if (wa.trans) return Za(wa.transless, () => this._whenReady(_0x2f6079));
    return this._whenReady(_0x2f6079);
  }
  ["table"](_0x59ca95) {
    if (!Ws(this._allTables, _0x59ca95)) throw new Fn.InvalidTable("Table " + _0x59ca95 + '\x20does\x20not\x20exist');
    return this._allTables[_0x59ca95];
  }
}
const To = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable";
class Zn {
  constructor(_0x1c8632) {
    this._subscribe = _0x1c8632;
  }
  ["subscribe"](_0x246c62, _0x30be50, _0x120ab0) {
    return this._subscribe(_0x246c62 && "function" != typeof _0x246c62 ? _0x246c62 : {
      next: _0x246c62,
      error: _0x30be50,
      complete: _0x120ab0
    });
  }
  [To]() {
    return this;
  }
}
function Ro(_0x34fa38, _0x30e09b) {
  Fs(_0x30e09b).forEach(_0x247a30 => {
    Ko(_0x34fa38[_0x247a30] || (_0x34fa38[_0x247a30] = new Oo()), _0x30e09b[_0x247a30]);
  });
  return _0x34fa38;
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
function Lo(_0x1ff0d2) {
  let _0xd0ab96 = Vo;
  try {
    Vo = true;
    Yi.storagemutated.fire(_0x1ff0d2);
  } finally {
    Vo = _0xd0ab96;
  }
}
js(Bo, {
  ...Gn,
  delete: _0x53c891 => new Bo(_0x53c891, {
    addons: []
  }).delete(),
  exists: _0x5cc672 => new Bo(_0x5cc672, {
    addons: []
  }).open().then(_0x4d7a36 => (_0x4d7a36.close(), true)).catch("NoSuchDatabaseError", () => false),
  'getDatabaseNames'(_0x5be154) {
    try {
      return function ({
        indexedDB: _0x4e0a49,
        IDBKeyRange: _0x4244d4
      }) {
        if (ho(_0x4e0a49)) return Promise.resolve(_0x4e0a49.databases()).then(_0x4ccf9b => _0x4ccf9b.map(_0x48ca6b => _0x48ca6b.name).filter(_0x430dc9 => _0x430dc9 !== pi));
        return fo(_0x4e0a49, _0x4244d4).toCollection().primaryKeys();
      }(Bo.dependencies).then(_0x5be154);
    } catch (_0x5d1b37) {
      return ni(new Fn.MissingAPI());
    }
  },
  defineClass: () => function (_0x4300f5) {
    Gs(this, _0x4300f5);
  },
  ignoreTransaction: _0x438737 => wa.trans ? Za(wa.transless, _0x438737) : _0x438737(),
  vip: go,
  async: function (_0x158374) {
    return function () {
      try {
        var _0xfc8dea = yo(_0x158374.apply(this, arguments));
        if (_0xfc8dea && "function" == typeof _0xfc8dea.then) return _0xfc8dea;
        return ka.resolve(_0xfc8dea);
      } catch (_0x170e16) {
        return ni(_0x170e16);
      }
    };
  },
  spawn: function (_0x3979be, _0x4177de, _0x25d650) {
    try {
      var _0xf3b4fa = yo(_0x3979be.apply(_0x25d650, _0x4177de || []));
      if (_0xf3b4fa && "function" == typeof _0xf3b4fa.then) return _0xf3b4fa;
      return ka.resolve(_0xf3b4fa);
    } catch (_0x15ea9f) {
      return ni(_0x15ea9f);
    }
  },
  currentTransaction: {
    get: () => wa.trans || null
  },
  waitFor: function (_0x18f43e, _0x50368b) {
    const _0x47e2ba = ka.resolve("function" == typeof _0x18f43e ? Bo.ignoreTransaction(_0x18f43e) : _0x18f43e).timeout(_0x50368b || 60000);
    if (wa.trans) return wa.trans.waitFor(_0x47e2ba);
    return _0x47e2ba;
  },
  Promise: ka,
  debug: {
    get: () => Sn,
    set: _0x5ca873 => {
      Un(_0x5ca873, "dexie" === _0x5ca873 ? () => true : mi);
    }
  },
  derive: qs,
  extend: Gs,
  props: js,
  override: tn,
  Events: ki,
  on: Yi,
  liveQuery: function (_0x52d897) {
    let _0x5088e7,
      _0x4fc034 = false;
    const _0x4bb7bc = new Zn(_0xb01686 => {
      const _0x447fb3 = Cn(_0x52d897);
      let _0x391f3b = false,
        _0xb8fee6 = {},
        _0x1804f2 = {};
      const _0xa77d7 = {
        get 'closed'() {
          return _0x391f3b;
        },
        unsubscribe: () => {
          _0x391f3b = true;
          Yi.storagemutated.unsubscribe(_0x5d2814);
        }
      };
      _0xb01686.start && _0xb01686.start(_0xa77d7);
      let _0x3b667a = false,
        _0x1b6f6b = false;
      function _0x56f4a6() {
        return Fs(_0x1804f2).some(_0xdfeb1b => _0xb8fee6[_0xdfeb1b] && function (_0x329b6a, _0x56f91d) {
          const _0x132933 = Ao(_0x56f91d);
          let _0x3f7b9e = _0x132933.next();
          if (_0x3f7b9e.done) return false;
          let _0x5b49e3 = _0x3f7b9e.value;
          const _0x589e34 = Ao(_0x329b6a);
          let _0xd93e60 = _0x589e34.next(_0x5b49e3.from),
            _0x4eec57 = _0xd93e60.value;
          for (; !_0x3f7b9e.done && !_0xd93e60.done;) {
            if (Ii(_0x4eec57.from, _0x5b49e3.to) <= 0 && Ii(_0x4eec57.to, _0x5b49e3.from) >= 0) return true;
            if (Ii(_0x5b49e3.from, _0x4eec57.from) < 0) _0x5b49e3 = (_0x3f7b9e = _0x132933.next(_0x4eec57.from)).value;else _0x4eec57 = (_0xd93e60 = _0x589e34.next(_0x5b49e3.from)).value;
          }
          return false;
        }(_0xb8fee6[_0xdfeb1b], _0x1804f2[_0xdfeb1b]));
      }
      const _0x5d2814 = _0x601d81 => {
          Ro(_0xb8fee6, _0x601d81);
          _0x56f4a6() && _0x18fb7d();
        },
        _0x18fb7d = () => {
          if (_0x3b667a || _0x391f3b) return;
          _0xb8fee6 = {};
          const _0x4f5a17 = {},
            _0x123db7 = function (_0x55ea26) {
              _0x447fb3 && Wa();
              const _0x28c3a8 = () => Ha(_0x52d897, {
                  subscr: _0x55ea26,
                  trans: null
                }),
                _0x304a44 = wa.trans ? Za(wa.transless, _0x28c3a8) : _0x28c3a8();
              _0x447fb3 && _0x304a44.then(ja, ja);
              return _0x304a44;
            }(_0x4f5a17);
          _0x1b6f6b || (Yi(Wi, _0x5d2814), _0x1b6f6b = true);
          _0x3b667a = true;
          Promise.resolve(_0x123db7).then(_0x452530 => {
            _0x4fc034 = true;
            _0x5088e7 = _0x452530;
            _0x3b667a = false;
            _0x391f3b || (_0x56f4a6() ? _0x18fb7d() : (_0xb8fee6 = {}, _0x1804f2 = _0x4f5a17, _0xb01686.next && _0xb01686.next(_0x452530)));
          }, _0x4b7c48 => {
            _0x3b667a = false;
            _0x4fc034 = false;
            _0xb01686.error && _0xb01686.error(_0x4b7c48);
            _0xa77d7.unsubscribe();
          });
        };
      _0x18fb7d();
      return _0xa77d7;
    });
    _0x4bb7bc.hasValue = () => _0x4fc034;
    _0x4bb7bc.getValue = () => _0x5088e7;
    return _0x4bb7bc;
  },
  extendObservabilitySet: Ro,
  getByKeyPath: on,
  setByKeyPath: un,
  delByKeyPath: function (_0x421cca, _0xfa3feb) {
    if ('string' == typeof _0xfa3feb) un(_0x421cca, _0xfa3feb, void 0);else 'length' in _0xfa3feb && [].map.call(_0xfa3feb, function (_0x31c9bd) {
      un(_0x421cca, _0x31c9bd, void 0);
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
  version: ii.split('.').map(_0x498612 => parseInt(_0x498612)).reduce((_0x2b35e7, _0x32dfa3, _0x575b19) => _0x2b35e7 + _0x32dfa3 / Math.pow(10, 2 * _0x575b19))
});
Bo.maxKey = Xi(Bo.dependencies.IDBKeyRange);
'undefined' != typeof dispatchEvent && "undefined" != typeof addEventListener && (Yi(Wi, _0x413f3c => {
  if (!Vo) {
    let _0x4858a0;
    if (hi) {
      _0x4858a0 = document.createEvent("CustomEvent");
      _0x4858a0.initCustomEvent(ji, true, true, _0x413f3c);
    } else _0x4858a0 = new CustomEvent(ji, {
      detail: _0x413f3c
    });
    Vo = true;
    dispatchEvent(_0x4858a0);
    Vo = false;
  }
}), addEventListener(ji, ({
  detail: _0x295646
}) => {
  Vo || Lo(_0x295646);
}));
let Vo = false;
if ("undefined" != typeof BroadcastChannel) {
  const e = new BroadcastChannel(ji);
  "function" == typeof e.unref && e.unref();
  Yi(Wi, _0x106279 => {
    Vo || e.postMessage(_0x106279);
  });
  e.onmessage = _0x52f192 => {
    _0x52f192.data && Lo(_0x52f192.data);
  };
} else {
  if ("undefined" != typeof self && "undefined" != typeof navigator) {
    Yi(Wi, _0x25bd62 => {
      try {
        Vo || ("undefined" != typeof localStorage && localStorage.setItem(ji, JSON.stringify({
          trig: Math.random(),
          changedParts: _0x25bd62
        })), "object" == typeof self.clients && [...self.clients.matchAll({
          includeUncontrolled: true
        })].forEach(_0x23f7bd => _0x23f7bd.postMessage({
          type: ji,
          changedParts: _0x25bd62
        })));
      } catch (_0x5a6092) {}
    });
    "undefined" != typeof addEventListener && addEventListener('storage', _0x24b81d => {
      if (_0x24b81d.key === ji) {
        const _0x336310 = JSON.parse(_0x24b81d.newValue);
        _0x336310 && Lo(_0x336310.changedParts);
      }
    });
    const e = self.document && navigator.serviceWorker;
    e && e.addEventListener('message', function ({
      data: _0x31e71d
    }) {
      _0x31e71d && _0x31e71d.type === ji && Lo(_0x31e71d.changedParts);
    });
  }
}
ka.rejectionMapper = function (_0x1e3f30, _0x282710) {
  if (!_0x1e3f30 || _0x1e3f30 instanceof Tn || _0x1e3f30 instanceof TypeError || _0x1e3f30 instanceof SyntaxError || !_0x1e3f30.name || !Nn[_0x1e3f30.name]) return _0x1e3f30;
  var _0x547653 = new Nn[_0x1e3f30.name](_0x282710 || _0x1e3f30.message, _0x1e3f30);
  "stack" in _0x1e3f30 && $s(_0x547653, "stack", {
    get: function () {
      return this.inner.stack;
    }
  });
  return _0x547653;
};
Un(Sn, mi);
class Digital {
  constructor(_0x4755cf, _0x2c095c, _0xc374d, _0x3562cd, _0x12ffba) {
    V(this, "saveName", 'digital');
    V(this, "defaultProfileCount", 1);
    V(this, "customProfileIndex", 0);
    V(this, "showCustomProfile", false);
    V(this, "banToggleProfile", false);
    V(this, 'defaultConfig', {});
    V(this, 'db');
    this.saveName = _0x4755cf;
    this.defaultProfileCount = _0x2c095c;
    this.customProfileIndex = _0xc374d;
    this.showCustomProfile = _0x3562cd;
    this.banToggleProfile = _0x12ffba;
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
    const _0x1288e0 = localStorage.getItem(this.saveName + "-selectId");
    if (_0x1288e0) return +_0x1288e0;
  }
  set ["lastSelectId"](_0x202898) {
    localStorage.setItem(this.saveName + "-selectId", _0x202898 + '');
  }
  async ['delCacheProfileById'](_0x57edd4) {
    await this.db.friends.delete(_0x57edd4);
  }
  async ["getCacheProfile"]() {
    return this.db.friends.toArray();
  }
  async ['getCacheProfileById'](_0xeb5e20) {
    return this.db.friends.get({
      id: _0xeb5e20
    });
  }
  async ["setCacheProfileById"](_0x56428c, _0x2dfd42, _0x1183da) {
    await this.db.friends.update(_0x56428c, {
      name: _0x2dfd42,
      data: _0x1183da
    });
  }
  async ["setCacheProfileList"](_0x149357) {
    for (const _0x5ecfd3 of _0x149357) await this.db.friends.add({
      name: _0x5ecfd3.name,
      data: _0x5ecfd3.data
    });
    const _0x132c39 = Se();
    _0x132c39.setCacheProfileCount(_0x132c39.cacheProfileCount + 1);
  }
  async ['setCacheProfile'](_0x5e9187, _0x56f551) {
    await this.db.friends.add({
      name: _0x5e9187,
      data: _0x56f551
    });
    const _0x2ae8c7 = Se();
    _0x2ae8c7.setCacheProfileCount(_0x2ae8c7.cacheProfileCount + 1);
  }
}
class DigitalDexie extends Xn {
  constructor(_0x4a8220) {
    super(_0x4a8220);
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
  vu = _u.map(_0x11ce75 => _0x11ce75.filters).flat().map(_0x2956f8 => {
    const {
      boot: _0x5b269d
    } = _0x2956f8;
    return {
      ..._0x2956f8,
      ..._0x5b269d,
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
  Uu = Su.map(_0x4b5894 => _0x4b5894.filters).flat().map(_0x4ca1bc => {
    const {
      boot: _0xef0d67
    } = _0x4ca1bc;
    return {
      ..._0x4ca1bc,
      ..._0xef0d67,
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
  Ou = Du.map(_0x3d5e66 => _0x3d5e66.filters).flat().map(_0x493ff0 => {
    const {
      boot: _0x5ebb31
    } = _0x493ff0;
    return {
      ..._0x493ff0,
      ..._0x5ebb31,
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
  Iu = xu.map(_0x206e96 => _0x206e96.filters).flat().map(_0x230d7b => null == _0x230d7b ? void 0 : _0x230d7b.boot).filter(Boolean);
let Pu = (r = class {
  constructor(_0x1d563f, _0x9bd39e) {
    V(this, "raw");
    let _0x3e1e92 = _0x1d563f ? _0x1d563f.buffer : new ArrayBuffer(r.SIZE);
    this.raw = new DataView(_0x3e1e92);
    this.commandId = _0x9bd39e;
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
  set ['commandId'](_0x599b07) {
    this.raw.setUint8(0, _0x599b07);
  }
  ["setRaw"](_0x2d9426) {
    this.raw = _0x2d9426;
    return this;
  }
  ["toStringTx"]() {
    return "requestCode: " + this.commandId + ',\x20commandId:\x20' + this.commandId;
  }
  ["toStringRx"]() {
    return "requestCode: " + this.commandId + ", commandId: " + this.commandId;
  }
}, V(r, "SIZE", 32), V(r, "baseOffset", 1), r);
var Mu = (_0x2c8333 => (_0x2c8333[_0x2c8333.id_get_protocol_version = 1] = "id_get_protocol_version", _0x2c8333[_0x2c8333.id_get_keyboard_value = 2] = "id_get_keyboard_value", _0x2c8333[_0x2c8333.id_set_keyboard_value = 3] = "id_set_keyboard_value", _0x2c8333[_0x2c8333.id_dynamic_keymap_get_keycode = 4] = "id_dynamic_keymap_get_keycode", _0x2c8333[_0x2c8333.id_dynamic_keymap_set_keycode = 5] = "id_dynamic_keymap_set_keycode", _0x2c8333[_0x2c8333.id_dynamic_keymap_reset = 6] = 'id_dynamic_keymap_reset', _0x2c8333[_0x2c8333.id_custom_set_value = 7] = "id_custom_set_value", _0x2c8333[_0x2c8333.id_custom_get_value = 8] = "id_custom_get_value", _0x2c8333[_0x2c8333.id_custom_save = 9] = 'id_custom_save', _0x2c8333[_0x2c8333.id_lighting_set_value = 7] = "id_lighting_set_value", _0x2c8333[_0x2c8333.id_lighting_get_value = 8] = "id_lighting_get_value", _0x2c8333[_0x2c8333.id_lighting_save = 9] = "id_lighting_save", _0x2c8333[_0x2c8333.id_eeprom_reset = 10] = "id_eeprom_reset", _0x2c8333[_0x2c8333.id_bootloader_jump = 11] = "id_bootloader_jump", _0x2c8333[_0x2c8333.id_dynamic_keymap_macro_get_count = 12] = 'id_dynamic_keymap_macro_get_count', _0x2c8333[_0x2c8333.id_dynamic_keymap_macro_get_buffer_size = 13] = "id_dynamic_keymap_macro_get_buffer_size", _0x2c8333[_0x2c8333.id_dynamic_keymap_macro_get_buffer = 14] = "id_dynamic_keymap_macro_get_buffer", _0x2c8333[_0x2c8333.id_dynamic_keymap_macro_set_buffer = 15] = "id_dynamic_keymap_macro_set_buffer", _0x2c8333[_0x2c8333.id_dynamic_keymap_macro_reset = 16] = "id_dynamic_keymap_macro_reset", _0x2c8333[_0x2c8333.id_dynamic_keymap_get_layer_count = 17] = "id_dynamic_keymap_get_layer_count", _0x2c8333[_0x2c8333.id_dynamic_keymap_get_buffer = 18] = "id_dynamic_keymap_get_buffer", _0x2c8333[_0x2c8333.id_dynamic_keymap_set_buffer = 19] = 'id_dynamic_keymap_set_buffer', _0x2c8333[_0x2c8333.id_vial_prefix = 254] = "id_vial_prefix", _0x2c8333[_0x2c8333.id_unhandled = 255] = "id_unhandled", _0x2c8333))(Mu || {}),
  Tu = (_0x28449b => (_0x28449b[_0x28449b.general = 0] = "general", _0x28449b[_0x28449b.lt0 = 64] = 'lt0', _0x28449b[_0x28449b.lt1 = 65] = "lt1", _0x28449b[_0x28449b.lt2 = 66] = "lt2", _0x28449b[_0x28449b.lt3 = 67] = 'lt3', _0x28449b[_0x28449b.layer = 82] = "layer", _0x28449b[_0x28449b.swap = 86] = "swap", _0x28449b[_0x28449b.tapDance = 87] = "tapDance", _0x28449b[_0x28449b.magic = 112] = 'magic', _0x28449b[_0x28449b.midi = 113] = "midi", _0x28449b[_0x28449b.sequencer = 114] = "sequencer", _0x28449b[_0x28449b.programming = 116] = 'programming', _0x28449b[_0x28449b.macro = 119] = "macro", _0x28449b[_0x28449b.light = 120] = 'light', _0x28449b[_0x28449b.system = 124] = 'system', _0x28449b[_0x28449b.kbAndUser = 126] = "kbAndUser", _0x28449b))(Tu || {}),
  Ru = (_0x34428a => (_0x34428a[_0x34428a.SS_TAP_CODE = 1] = "SS_TAP_CODE", _0x34428a[_0x34428a.SS_DOWN_CODE = 2] = 'SS_DOWN_CODE', _0x34428a[_0x34428a.SS_UP_CODE = 3] = "SS_UP_CODE", _0x34428a[_0x34428a.SS_DELAY_CODE = 4] = 'SS_DELAY_CODE', _0x34428a[_0x34428a.VIAL_MACRO_EXT_TAP = 5] = "VIAL_MACRO_EXT_TAP", _0x34428a[_0x34428a.VIAL_MACRO_EXT_DOWN = 6] = "VIAL_MACRO_EXT_DOWN", _0x34428a[_0x34428a.VIAL_MACRO_EXT_UP = 7] = "VIAL_MACRO_EXT_UP", _0x34428a))(Ru || {}),
  Eu = (_0x4ffb37 => (_0x4ffb37[_0x4ffb37.normal = 0] = "normal", _0x4ffb37[_0x4ffb37.erase = 1] = "erase", _0x4ffb37[_0x4ffb37.write = 2] = "write", _0x4ffb37[_0x4ffb37.eraseAndWrite = 3] = "eraseAndWrite", _0x4ffb37))(Eu || {}),
  Bu = (_0x262b54 => (_0x262b54[_0x262b54.customId = 150] = "customId", _0x262b54[_0x262b54.oneTogTh = 3] = "oneTogTh", _0x262b54[_0x262b54.bufferTogTh = 13] = "bufferTogTh", _0x262b54[_0x262b54.oneRt = 7] = "oneRt", _0x262b54[_0x262b54.bufferRt = 14] = "bufferRt", _0x262b54[_0x262b54.deadBand = 11] = "deadBand", _0x262b54[_0x262b54.lightInfo = 65] = "lightInfo", _0x262b54[_0x262b54.mixAxle = 16] = "mixAxle", _0x262b54[_0x262b54.iap = 152] = "iap", _0x262b54[_0x262b54.calibrate = 8] = "calibrate", _0x262b54[_0x262b54.feature = 17] = 'feature', _0x262b54[_0x262b54.dks = 15] = "dks", _0x262b54[_0x262b54.setCustomLamplight = 66] = 'setCustomLamplight', _0x262b54[_0x262b54.getCustomLamplight = 69] = "getCustomLamplight", _0x262b54[_0x262b54.saveLamplight = 18] = "saveLamplight", _0x262b54[_0x262b54.entryOp = 13] = "entryOp", _0x262b54[_0x262b54.tapDanceGet = 1] = "tapDanceGet", _0x262b54[_0x262b54.tapDanceSet = 2] = "tapDanceSet", _0x262b54[_0x262b54.layer = 19] = "layer", _0x262b54[_0x262b54.dataReporting = 20] = 'dataReporting', _0x262b54[_0x262b54.resetAll = 21] = 'resetAll', _0x262b54[_0x262b54.realTimeAdcAxle = 9] = "realTimeAdcAxle", _0x262b54[_0x262b54.realTimeTripAxle = 10] = "realTimeTripAxle", _0x262b54[_0x262b54.realTimeAdcAxleBuffer = 22] = "realTimeAdcAxleBuffer", _0x262b54[_0x262b54.realTimeTripAxleBuffer = 23] = "realTimeTripAxleBuffer", _0x262b54[_0x262b54.calibrationStart = 24] = 'calibrationStart', _0x262b54[_0x262b54.calibrationFinish = 25] = "calibrationFinish", _0x262b54[_0x262b54.completeStatusBuffer = 27] = "completeStatusBuffer", _0x262b54[_0x262b54.adcTripCompStatusBuffer = 28] = "adcTripCompStatusBuffer", _0x262b54[_0x262b54.bottomOptimizeSwitch = 29] = "bottomOptimizeSwitch", _0x262b54[_0x262b54.gameMode = 30] = "gameMode", _0x262b54[_0x262b54.calibration = 31] = "calibration", _0x262b54[_0x262b54.rs = 32] = 'rs', _0x262b54[_0x262b54.boxLight = 33] = "boxLight", _0x262b54))(Bu || {}),
  Lu = (_0x67bcb8 => (_0x67bcb8[_0x67bcb8.START_CFG = 1] = 'START_CFG', _0x67bcb8[_0x67bcb8.SAVE_CFG = 2] = 'SAVE_CFG', _0x67bcb8[_0x67bcb8.GET_KEY = 3] = 'GET_KEY', _0x67bcb8[_0x67bcb8.GET_KEY_BUFFER = 4] = "GET_KEY_BUFFER", _0x67bcb8[_0x67bcb8.SET_KEY = 5] = "SET_KEY", _0x67bcb8[_0x67bcb8.SET_KEY_BUFFER = 6] = 'SET_KEY_BUFFER', _0x67bcb8[_0x67bcb8.SET_KEY_ALL = 7] = "SET_KEY_ALL", _0x67bcb8))(Lu || {}),
  Vu = (_0x5b5922 => (_0x5b5922[_0x5b5922.NONE = 0] = 'NONE', _0x5b5922[_0x5b5922.RS = 1] = 'RS', _0x5b5922[_0x5b5922.SOCD = 2] = "SOCD", _0x5b5922[_0x5b5922.SOCD_KEY1 = 3] = "SOCD_KEY1", _0x5b5922[_0x5b5922.SOCD_KEY2 = 4] = "SOCD_KEY2", _0x5b5922[_0x5b5922.SOCD_BALANCE = 5] = "SOCD_BALANCE", _0x5b5922[_0x5b5922.OKS = 6] = "OKS", _0x5b5922))(Vu || {}),
  Fu = (_0x5eb105 => (_0x5eb105[_0x5eb105.get = 1] = "get", _0x5eb105[_0x5eb105.getBuffer = 2] = "getBuffer", _0x5eb105[_0x5eb105.set = 3] = 'set', _0x5eb105[_0x5eb105.setBuffer = 4] = 'setBuffer', _0x5eb105))(Fu || {}),
  Nu = (_0x4b9510 => (_0x4b9510[_0x4b9510.get = 1] = "get", _0x4b9510[_0x4b9510.getBuffer = 2] = "getBuffer", _0x4b9510[_0x4b9510.set = 3] = "set", _0x4b9510[_0x4b9510.setBuffer = 4] = "setBuffer", _0x4b9510))(Nu || {}),
  Gu = (_0x548413 => (_0x548413[_0x548413.noneSt = 0] = 'noneSt', _0x548413[_0x548413.defaultLayerSt = 1] = "defaultLayerSt", _0x548413[_0x548413.swapWasdSt = 2] = "swapWasdSt", _0x548413[_0x548413.macosSt = 3] = 'macosSt', _0x548413[_0x548413.winLockSt = 4] = "winLockSt", _0x548413[_0x548413.nKroSt = 5] = "nKroSt", _0x548413))(Gu || {});
let zu = class KeyAction2 {
    constructor(_0x12a65e, _0x3cc886) {
      V(this, "dataView");
      V(this, "offset");
      this.dataView = _0x12a65e;
      this.offset = _0x3cc886;
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
    static ['createDataView'](_0x1203ce, _0x2edacc) {
      const _0x4befa0 = new DataView(new ArrayBuffer(2));
      _0x4befa0.setUint8(0, _0x1203ce);
      _0x4befa0.setUint8(1, _0x2edacc);
      return _0x4befa0;
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
      return Array.from([this.keyClass, this.keyId]).map(_0x4db9b => _0x4db9b.toString().padStart(2, '0')).join('');
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
    static ["fromDataView"](_0x48a8f2, _0x37e8e8) {
      switch (_0x48a8f2.getUint8(_0x37e8e8)) {
        case Tu.lt0:
        case Tu.lt1:
        case Tu.lt2:
        case Tu.lt3:
          return new rc(_0x48a8f2, _0x37e8e8);
        case Tu.layer:
          return new ju(_0x48a8f2, _0x37e8e8);
        case Tu.swap:
          return new Yu(_0x48a8f2, _0x37e8e8);
        case Tu.magic:
          return new $u(_0x48a8f2, _0x37e8e8);
        case Tu.midi:
          return new qu(_0x48a8f2, _0x37e8e8);
        case Tu.sequencer:
          return new Ju(_0x48a8f2, _0x37e8e8);
        case Tu.programming:
          return new Xu(_0x48a8f2, _0x37e8e8);
        case Tu.macro:
          return new Zu(_0x48a8f2, _0x37e8e8);
        case Tu.light:
          return new Qu(_0x48a8f2, _0x37e8e8);
        case Tu.system:
          return new ec(_0x48a8f2, _0x37e8e8);
        case Tu.kbAndUser:
          return new tc(_0x48a8f2, _0x37e8e8);
        case Tu.general:
          return 1 === _0x48a8f2.getUint8(_0x37e8e8 + 1) ? new Hu(_0x48a8f2, _0x37e8e8) : new Wu(_0x48a8f2, _0x37e8e8);
        case Tu.tapDance:
          return new sc(_0x48a8f2, _0x37e8e8);
        default:
          return new KeyAction2(_0x48a8f2, _0x37e8e8);
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
    static ["create"](_0x28cec4) {
      return new n(super.createDataView(this.TYPE, _0x28cec4), 0);
    }
  }, 'TYPE', Tu.general), n),
  ju = (V(a = class extends zu {
    get ['i18nText']() {
      return "key.layer";
    }
    static ["create"](_0x13dabd) {
      return new a(super.createDataView(this.TYPE, _0x13dabd), 0);
    }
  }, "TYPE", Tu.layer), a),
  Yu = (V(i = class extends zu {
    get ["i18nText"]() {
      return "key.swap";
    }
    static ['create'](_0x430956) {
      return new i(super.createDataView(this.TYPE, _0x430956), 0);
    }
  }, "TYPE", Tu.swap), i),
  $u = (V(o = class extends zu {
    get ["i18nText"]() {
      return "key.magic";
    }
    static ["create"](_0x4ae933) {
      return new o(super.createDataView(this.TYPE, _0x4ae933), 0);
    }
  }, "TYPE", Tu.magic), o),
  qu = (V(u = class extends zu {
    get ['i18nText']() {
      return "key.midi";
    }
    static ["create"](_0x3174b7) {
      return new u(super.createDataView(this.TYPE, _0x3174b7), 0);
    }
  }, 'TYPE', Tu.midi), u),
  Ju = (V(c = class extends zu {
    get ["i18nText"]() {
      return "key.midi";
    }
    static ['create'](_0x1699cd) {
      return new c(super.createDataView(this.TYPE, _0x1699cd), 0);
    }
  }, "TYPE", Tu.sequencer), c),
  Xu = (V(l = class extends zu {
    get ["i18nText"]() {
      return "key.programming";
    }
    static ["create"](_0x45e61c) {
      return new l(super.createDataView(this.TYPE, _0x45e61c), 0);
    }
  }, "TYPE", Tu.programming), l),
  Zu = (V(f = class extends zu {
    get ['i18nText']() {
      return "key.macroKey";
    }
    static ["create"](_0x28e54f) {
      return new f(super.createDataView(this.TYPE, _0x28e54f), 0);
    }
  }, 'TYPE', Tu.macro), f),
  Qu = (V(h = class extends zu {
    get ["i18nText"]() {
      return "key.light";
    }
    static ['create'](_0x5daab4) {
      return new h(super.createDataView(this.TYPE, _0x5daab4), 0);
    }
  }, "TYPE", Tu.light), h),
  ec = (V(d = class extends zu {
    get ["i18nText"]() {
      return "key.system";
    }
    static ["create"](_0x4773ab) {
      return new d(super.createDataView(this.TYPE, _0x4773ab), 0);
    }
  }, "TYPE", Tu.system), d),
  tc = (V(g = class extends zu {
    get ["i18nText"]() {
      return "key.kbAndUser";
    }
    static ['create'](_0x5ddc7a) {
      return new g(super.createDataView(this.TYPE, _0x5ddc7a), 0);
    }
  }, "TYPE", Tu.kbAndUser), g),
  rc = class LTKeyAction extends zu {
    get ["i18nText"]() {
      return "key.lt";
    }
    static ["create"](_0x2052f2) {
      return new LTKeyAction(super.createDataView(_0x2052f2, 0), 0);
    }
  },
  sc = (V(m = class extends zu {
    get ['i18nText']() {
      return "Change Key Menu." + (this.keyId <= 19 ? "mt.title" : 'tgl.title');
    }
    static ['create'](_0x3a813c) {
      return new m(super.createDataView(m.TYPE, _0x3a813c), 0);
    }
  }, 'TYPE', Tu.tapDance), m);
const nc = class _DeLangKeyAction extends zu {
  get ["i18nText"]() {
    return ">\n<";
  }
  static ["create"](_0x41a03b) {
    return new _DeLangKeyAction(super.createDataView(sc.TYPE, _0x41a03b), 0);
  }
};
V(nc, "TYPE", Tu.general);
let ac = (p = class {
    constructor(_0x39b741, _0x14a21a, _0xb64999) {
      V(this, "raw");
      V(this, "offset");
      V(this, 'length');
      this.raw = _0x39b741;
      this.offset = _0x14a21a;
      this.length = _0xb64999;
    }
    get ["count"]() {
      return this.length;
    }
    get ["dataView"]() {
      return new DataView(this.raw.buffer.slice(this.offset, this.offset + this.length));
    }
    static ["fromDataView"](_0x3a53b5, _0x2f2664) {
      switch (_0x3a53b5.getUint8(_0x2f2664 + 1)) {
        case Ru.SS_TAP_CODE:
          return new ic(_0x3a53b5, _0x2f2664, 3);
        case Ru.SS_DOWN_CODE:
          return new oc(_0x3a53b5, _0x2f2664, 3);
        case Ru.SS_UP_CODE:
          return new uc(_0x3a53b5, _0x2f2664, 3);
        case Ru.SS_DELAY_CODE:
          return new hc(_0x3a53b5, _0x2f2664, 4);
        case Ru.VIAL_MACRO_EXT_TAP:
          return new cc(_0x3a53b5, _0x2f2664, 4);
        case Ru.VIAL_MACRO_EXT_DOWN:
          return new lc(_0x3a53b5, _0x2f2664, 4);
        case Ru.VIAL_MACRO_EXT_UP:
          return new fc(_0x3a53b5, _0x2f2664, 4);
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
    static ["create"](_0x606861) {
      const _0x50e814 = new DataView(new ArrayBuffer(this.size));
      _0x50e814.setUint8(0, 1);
      _0x50e814.setUint8(1, this.TYPE);
      _0x50e814.setUint8(2, _0x606861.keyId);
      return new y(_0x50e814, 0, this.size);
    }
  }, "TYPE", Ru.SS_TAP_CODE), y),
  oc = (V(w = class extends ac {
    get ["keycode"]() {
      return Wu.create(this.raw.getUint8(this.offset + 2));
    }
    static ["create"](_0x8cb860) {
      const _0x5aada7 = new DataView(new ArrayBuffer(this.size));
      _0x5aada7.setUint8(0, 1);
      _0x5aada7.setUint8(1, this.TYPE);
      _0x5aada7.setUint8(2, _0x8cb860.keyId);
      return new w(_0x5aada7, 0, this.size);
    }
  }, "TYPE", Ru.SS_DOWN_CODE), w),
  uc = (V(b = class extends ac {
    get ["keycode"]() {
      return Wu.create(this.raw.getUint8(this.offset + 2));
    }
    static ['create'](_0x524c3f) {
      const _0x32a4c1 = new DataView(new ArrayBuffer(this.size));
      _0x32a4c1.setUint8(0, 1);
      _0x32a4c1.setUint8(1, this.TYPE);
      _0x32a4c1.setUint8(2, _0x524c3f.keyId);
      return new b(_0x32a4c1, 0, this.size);
    }
  }, "TYPE", Ru.SS_UP_CODE), b),
  cc = (V(_ = class extends ac {
    get ["keycode"]() {
      const _0x406e8c = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
      return zu.fromDataView(_0x406e8c, 0);
    }
    static ["create"](_0x3fc9b3) {
      const _0x5d33b1 = new DataView(new ArrayBuffer(this.size));
      _0x5d33b1.setUint8(0, 1);
      _0x5d33b1.setUint8(1, this.TYPE);
      _0x5d33b1.setUint8(2, _0x3fc9b3.keyId);
      _0x5d33b1.setUint8(3, _0x3fc9b3.keyClass);
      return new _(_0x5d33b1, 0, this.size);
    }
  }, "size", 4), V(_, "TYPE", Ru.VIAL_MACRO_EXT_TAP), _),
  lc = (V(v = class extends ac {
    get ['keycode']() {
      const _0x4f1f65 = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
      return zu.fromDataView(_0x4f1f65, 0);
    }
    static ["create"](_0x54e307) {
      const _0x390bb9 = new DataView(new ArrayBuffer(this.size));
      _0x390bb9.setUint8(0, 1);
      _0x390bb9.setUint8(1, this.TYPE);
      _0x390bb9.setUint8(2, _0x54e307.keyId);
      _0x390bb9.setUint8(3, _0x54e307.keyClass);
      return new v(_0x390bb9, 0, this.size);
    }
  }, "size", 4), V(v, "TYPE", Ru.VIAL_MACRO_EXT_DOWN), v),
  fc = (V(k = class extends ac {
    get ['keycode']() {
      const _0x195c56 = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
      return zu.fromDataView(_0x195c56, 0);
    }
    static ["create"](_0x46fa33) {
      const _0x1ae138 = new DataView(new ArrayBuffer(this.size));
      _0x1ae138.setUint8(0, 1);
      _0x1ae138.setUint8(1, this.TYPE);
      _0x1ae138.setUint8(2, _0x46fa33.keyId);
      _0x1ae138.setUint8(3, _0x46fa33.keyClass);
      return new k(_0x1ae138, 0, this.size);
    }
  }, "size", 4), V(k, "TYPE", Ru.VIAL_MACRO_EXT_UP), k),
  hc = (V(C = class extends ac {
    get ["delay"]() {
      const _0x44d8d8 = new DataView(new ArrayBuffer(2));
      _0x44d8d8.setUint8(0, this.raw.getUint8(this.offset + 2) - 1);
      _0x44d8d8.setUint8(1, this.raw.getUint8(this.offset + 3) - 1);
      return _0x44d8d8.getUint16(0, true);
    }
    static ["create"](_0xeda4d3) {
      const _0xe9a74a = new DataView(new ArrayBuffer(2));
      _0xe9a74a.setUint16(0, _0xeda4d3, true);
      const _0x478efc = _0xe9a74a.getUint8(0) + 1,
        _0x344fa7 = _0xe9a74a.getUint8(1) + 1,
        _0x4da66d = new DataView(new ArrayBuffer(this.size));
      _0x4da66d.setUint8(0, 1);
      _0x4da66d.setUint8(1, this.TYPE);
      _0x4da66d.setUint8(2, _0x478efc > 255 ? 255 : _0x478efc);
      _0x4da66d.setUint8(3, _0x344fa7 > 255 ? 255 : _0x344fa7);
      return new C(_0x4da66d, 0, this.size);
    }
  }, "size", 4), V(C, 'TYPE', Ru.SS_DELAY_CODE), C),
  dc = (S = class {
    constructor(_0x10d8cc, _0xae93ee) {
      V(this, "raw");
      V(this, "offset");
      this.raw = _0x10d8cc;
      this.offset = _0xae93ee;
    }
    static ["fromDataView"](_0x2f3d2, _0x1b4451) {
      return new S(_0x2f3d2, _0x1b4451);
    }
    static ["create"](_0x516e0b, _0x1be157) {
      const _0x1b6fff = new S(new DataView(new ArrayBuffer(S.size)), 0);
      _0x1b6fff.status = _0x516e0b;
      _0x1b6fff.keyCode = _0x1be157;
      return _0x1b6fff;
    }
    get ["dataView"]() {
      const _0x425d45 = new DataView(new ArrayBuffer(S.size), 0);
      _0x425d45.setUint8(0, this.raw.getUint8(this.offset));
      _0x425d45.setUint8(1, this.raw.getUint8(this.offset + 1));
      _0x425d45.setUint8(2, this.raw.getUint8(this.offset + 2));
      _0x425d45.setUint8(3, this.raw.getUint8(this.offset + 3));
      return _0x425d45;
    }
    get ["statusArray"]() {
      const _0x31317f = this.raw.getUint16(this.offset);
      return [_0x31317f >> 0 & 1, _0x31317f >> 1 & 1, _0x31317f >> 2 & 1, _0x31317f >> 3 & 1, _0x31317f >> 4 & 1, _0x31317f >> 5 & 1, _0x31317f >> 6 & 1, _0x31317f >> 7 & 1, _0x31317f >> 8 & 1, _0x31317f >> 9 & 1];
    }
    get ["status"]() {
      const _0x58bada = this.raw.getUint16(this.offset);
      return {
        bit0: _0x58bada >> 0 & 1,
        bit1: _0x58bada >> 1 & 1,
        bit2: _0x58bada >> 2 & 1,
        bit3: _0x58bada >> 3 & 1,
        bit4: _0x58bada >> 4 & 1,
        bit5: _0x58bada >> 5 & 1,
        bit6: _0x58bada >> 6 & 1,
        bit7: _0x58bada >> 7 & 1,
        bit8: _0x58bada >> 8 & 1,
        bit9: _0x58bada >> 9 & 1
      };
    }
    set ["status"](_0x2b54ee) {
      this.raw.setUint16(this.offset, (_0x2b54ee.bit0 || 0) << 0 | (_0x2b54ee.bit1 || 0) << 1 | (_0x2b54ee.bit2 || 0) << 2 | (_0x2b54ee.bit3 || 0) << 3 | (_0x2b54ee.bit4 || 0) << 4 | (_0x2b54ee.bit5 || 0) << 5 | (_0x2b54ee.bit6 || 0) << 6 | (_0x2b54ee.bit7 || 0) << 7 | (_0x2b54ee.bit8 || 0) << 8 | (_0x2b54ee.bit9 || 0) << 9);
    }
    get ['keyCode']() {
      return zu.fromDataView(this.raw, this.offset + 2);
    }
    set ["keyCode"](_0x47d442) {
      this.raw.setUint8(this.offset + 2, _0x47d442.keyClass);
      this.raw.setUint8(this.offset + 3, _0x47d442.keyId);
    }
  }, V(S, "size", 4), S),
  gc = class OneKeyAction extends Pu {
    get ["layer"]() {
      return this.raw.getUint8(this.baseOffset);
    }
    set ["layer"](_0x104fb6) {
      this.raw.setUint8(this.baseOffset, _0x104fb6);
    }
    get ["row"]() {
      return this.raw.getUint8(this.baseOffset + 1);
    }
    set ['row'](_0x544a71) {
      this.raw.setUint8(this.baseOffset + 1, _0x544a71);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["col"](_0x378975) {
      this.raw.setUint8(this.baseOffset + 2, _0x378975);
    }
    get ['keyAction']() {
      return zu.fromDataView(this.raw, this.baseOffset + 3);
    }
    set ["keyAction"](_0x264a89) {
      this.raw.setUint8(this.baseOffset + 3, _0x264a89.keyClass);
      this.raw.setUint8(this.baseOffset + 4, _0x264a89.keyId);
    }
    static ["get"](_0xbcbfb9, _0x329f19, _0x20aead) {
      const _0x3d8b15 = new OneKeyAction(this.getData(), Mu.id_dynamic_keymap_get_keycode);
      _0x3d8b15.layer = _0xbcbfb9;
      _0x3d8b15.row = _0x329f19;
      _0x3d8b15.col = _0x20aead;
      return _0x3d8b15;
    }
    static ["create"](_0x268fb2, _0x4c4dd6, _0x4365f0, _0x5be860) {
      const _0x205ef3 = new OneKeyAction(this.getData(), Mu.id_dynamic_keymap_set_keycode);
      _0x205ef3.layer = _0x268fb2;
      _0x205ef3.row = _0x4c4dd6;
      _0x205ef3.col = _0x4365f0;
      _0x205ef3.keyAction = _0x5be860;
      return _0x205ef3;
    }
  },
  mc = class BufferKeyAction extends Pu {
    get ["offset"]() {
      return this.raw.getUint16(this.baseOffset);
    }
    set ["offset"](_0x21c576) {
      this.raw.setUint16(this.baseOffset, _0x21c576);
    }
    get ['length']() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ['length'](_0x9ef58e) {
      this.raw.setUint8(this.baseOffset + 2, _0x9ef58e);
    }
    get ["keyActionList"]() {
      return Array.from({
        length: this.length / 2
      }).map((_0x5b8c06, _0x317ae2) => zu.fromDataView(this.raw, this.baseOffset + 3 + 2 * _0x317ae2));
    }
    set ["keyActionList"](_0x582eff) {
      for (let _0x3fb345 = 0; _0x3fb345 < _0x582eff.length; _0x3fb345++) {
        this.raw.setUint8(this.baseOffset + 3 + 2 * _0x3fb345, _0x582eff[_0x3fb345].keyClass);
        this.raw.setUint8(this.baseOffset + 4 + 2 * _0x3fb345, _0x582eff[_0x3fb345].keyId);
      }
    }
    static ['get'](_0x549fe1, _0x4ee831) {
      const _0x2b7959 = new BufferKeyAction(this.getData(), Mu.id_dynamic_keymap_get_buffer);
      _0x2b7959.offset = _0x549fe1;
      _0x2b7959.length = _0x4ee831;
      return _0x2b7959;
    }
    static ['create'](_0xa9e0b8, _0x389a1e, _0x5ca0e0) {
      const _0x400d3a = new BufferKeyAction(this.getData(), Mu.id_dynamic_keymap_set_buffer);
      _0x400d3a.offset = _0xa9e0b8;
      _0x400d3a.length = _0x389a1e;
      _0x400d3a.keyActionList = _0x5ca0e0;
      return _0x400d3a;
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
    set ['sz'](_0x41bd6e) {
      this.raw.setUint8(this.baseOffset + 2, _0x41bd6e);
    }
    get ["offset"]() {
      return this.raw.getUint16(this.baseOffset);
    }
    set ["offset"](_0x2a440f) {
      this.raw.setUint16(this.baseOffset, _0x2a440f);
    }
    get ["buffer"]() {
      const _0x1bf738 = this.raw.buffer.slice(this.baseOffset + 3, this.baseOffset + 3 + this.sz);
      return new DataView(_0x1bf738);
    }
    set ["buffer"](_0x1aaa89) {
      for (let _0x47687c = 0; _0x47687c < this.sz; _0x47687c++) this.raw.setUint8(this.baseOffset + 3 + _0x47687c, _0x1aaa89.getUint8(_0x47687c));
    }
    static ["get"](_0x5ed0c0, _0x10843d) {
      const _0x25bc62 = new MacroBuffer(this.getData(), Mu.id_dynamic_keymap_macro_get_buffer);
      _0x25bc62.offset = _0x5ed0c0;
      _0x25bc62.sz = _0x10843d;
      return _0x25bc62;
    }
    static ["create"](_0x250f72, _0x54be2f, _0x14fe26) {
      const _0x494f7a = new MacroBuffer(this.getData(), Mu.id_dynamic_keymap_macro_set_buffer);
      _0x494f7a.offset = _0x250f72;
      _0x494f7a.sz = _0x14fe26;
      _0x494f7a.buffer = _0x54be2f;
      return _0x494f7a;
    }
  },
  bc = class OneTogTh extends Pu {
    get ["row"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ['row'](_0x27261b) {
      this.raw.setUint8(this.baseOffset + 2, _0x27261b);
    }
    get ['col']() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ["col"](_0x59085d) {
      this.raw.setUint8(this.baseOffset + 3, _0x59085d);
    }
    get ["apc"]() {
      return 0.02 * this.raw.getUint8(this.baseOffset + 4);
    }
    set ['apc'](_0x4a3d5c) {
      this.raw.setUint8(this.baseOffset + 4, _0x4a3d5c / 0.02);
    }
    static ["get"](_0x3703b1, _0x4b7290) {
      const _0x2d12ed = new OneTogTh(this.getData(), Mu.id_get_keyboard_value);
      _0x2d12ed.raw.setUint8(this.baseOffset, Bu.customId);
      _0x2d12ed.raw.setUint8(this.baseOffset + 1, Bu.oneTogTh);
      _0x2d12ed.row = _0x3703b1;
      _0x2d12ed.col = _0x4b7290;
      return _0x2d12ed;
    }
    static ["create"](_0x267c22, _0x7d0d05, _0x4ea7d6) {
      const _0x456807 = new OneTogTh(this.getData(), Mu.id_set_keyboard_value);
      _0x456807.raw.setUint8(this.baseOffset, Bu.customId);
      _0x456807.raw.setUint8(this.baseOffset + 1, Bu.oneTogTh);
      _0x456807.row = _0x267c22;
      _0x456807.col = _0x7d0d05;
      _0x456807.apc = _0x4ea7d6;
      return _0x456807;
    }
    static ["fromDataView"](_0x5ecf33) {
      return new OneTogTh(this.getData(), Mu.id_set_keyboard_value).setRaw(_0x5ecf33);
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
    set ["row"](_0x4756b4) {
      this.raw.setUint8(this.baseOffset + 2, _0x4756b4);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ["col"](_0x40bb4a) {
      this.raw.setUint8(this.baseOffset + 3, _0x40bb4a);
    }
    get ["apc"]() {
      return Number((0.01 * this.raw.getUint16(this.baseOffset + 4)).toFixed(2));
    }
    set ["apc"](_0x868f7d) {
      this.raw.setUint16(this.baseOffset + 4, 100 * _0x868f7d);
    }
    get ["apcArr"]() {
      return [this.raw.getUint8(this.baseOffset + 4), this.raw.getUint8(this.baseOffset + 5)];
    }
    static ['get'](_0x608cb7, _0x2d5536) {
      const _0x4991b1 = new OneTogThV2(this.getData(), Mu.id_get_keyboard_value);
      _0x4991b1.raw.setUint8(this.baseOffset, Bu.customId);
      _0x4991b1.raw.setUint8(this.baseOffset + 1, Bu.oneTogTh);
      _0x4991b1.row = _0x608cb7;
      _0x4991b1.col = _0x2d5536;
      return _0x4991b1;
    }
    static ["create"](_0x3de4f7, _0x5495de, _0x5ccfc6) {
      const _0x1519d4 = new OneTogThV2(this.getData(), Mu.id_set_keyboard_value);
      _0x1519d4.raw.setUint8(this.baseOffset, Bu.customId);
      _0x1519d4.raw.setUint8(this.baseOffset + 1, Bu.oneTogTh);
      _0x1519d4.row = _0x3de4f7;
      _0x1519d4.col = _0x5495de;
      _0x1519d4.apc = _0x5ccfc6;
      return _0x1519d4;
    }
    static ["fromDataView"](_0x11d5ef) {
      return new bc(this.getData(), Mu.id_set_keyboard_value).setRaw(_0x11d5ef);
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
    set ['offset'](_0xe1b5a6) {
      this.raw.setUint16(this.baseOffset + 4, _0xe1b5a6);
    }
    get ["size"]() {
      return this.raw.getUint8(this.baseOffset + 6);
    }
    set ["size"](_0x199c93) {
      this.raw.setUint8(this.baseOffset + 6, _0x199c93);
    }
    set ['flashOp'](_0x43e497) {
      this.raw.setUint8(this.baseOffset + 7, _0x43e497);
    }
    set ["togThsFlash"](_0x4d6cc8) {
      for (let _0x1b5910 = 0; _0x1b5910 < _0x4d6cc8.byteLength; _0x1b5910++) this.raw.setUint8(this.baseOffset + 8 + _0x1b5910, _0x4d6cc8.getUint8(_0x1b5910));
    }
    get ["togThs"]() {
      const _0x410a59 = this.size,
        _0x4366de = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + _0x410a59);
      return new DataView(_0x4366de);
    }
    set ["togThs"](_0x5c9879) {
      for (let _0x3b3564 = 0; _0x3b3564 < _0x5c9879.byteLength; _0x3b3564++) this.raw.setUint8(this.baseOffset + 7 + _0x3b3564, _0x5c9879.getUint8(_0x3b3564));
    }
    get ["togThsV2"]() {
      const _0x5f0e50 = 2 * this.size,
        _0x492234 = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + _0x5f0e50);
      return new DataView(_0x492234);
    }
    static ["get"](_0x292728, _0xdde68a) {
      const _0x31465a = new BufferTogTh(this.getData(), Mu.id_get_keyboard_value);
      _0x31465a.raw.setUint8(this.baseOffset, Bu.customId);
      _0x31465a.raw.setUint8(this.baseOffset + 1, Bu.bufferTogTh);
      _0x31465a.offset = _0x292728;
      _0x31465a.size = _0xdde68a;
      return _0x31465a;
    }
    static ["create"](_0x5e4f4e, _0x30f20d, _0x4bc737, _0x475586) {
      const _0x543a8d = new BufferTogTh(this.getData(), Mu.id_set_keyboard_value);
      _0x543a8d.raw.setUint8(this.baseOffset, Bu.customId);
      _0x543a8d.raw.setUint8(this.baseOffset + 1, Bu.bufferTogTh);
      _0x543a8d.offset = _0x5e4f4e;
      _0x543a8d.size = _0x30f20d;
      _0x543a8d.flashOp = _0x4bc737;
      _0x543a8d.togThsFlash = _0x475586;
      return _0x543a8d;
    }
  },
  kc = class OneRTKeyInfo extends Pu {
    get ['row']() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ['row'](_0x1f8db0) {
      this.raw.setUint8(this.baseOffset + 2, _0x1f8db0);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ['col'](_0x1d37c8) {
      this.raw.setUint8(this.baseOffset + 3, _0x1d37c8);
    }
    get ['on']() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ['on'](_0x15bf09) {
      this.raw.setUint8(this.baseOffset + 4, _0x15bf09);
    }
    get ["release"]() {
      return 0.02 * this.raw.getUint8(this.baseOffset + 5);
    }
    set ["release"](_0x210e75) {
      this.raw.setUint8(this.baseOffset + 5, _0x210e75 / 0.02);
    }
    get ["press"]() {
      return 0.02 * this.raw.getUint8(this.baseOffset + 6);
    }
    set ["press"](_0x2b2db2) {
      this.raw.setUint8(this.baseOffset + 6, _0x2b2db2 / 0.02);
    }
    static ["get"](_0x261df8, _0x25fe96) {
      const _0x4b5b05 = new OneRTKeyInfo(this.getData(), Mu.id_get_keyboard_value);
      _0x4b5b05.raw.setUint8(this.baseOffset, Bu.customId);
      _0x4b5b05.raw.setUint8(this.baseOffset + 1, Bu.oneRt);
      _0x4b5b05.row = _0x261df8;
      _0x4b5b05.col = _0x25fe96;
      return _0x4b5b05;
    }
    static ['create'](_0x39a1db) {
      const _0x360c5a = new OneRTKeyInfo(this.getData(), Mu.id_set_keyboard_value);
      _0x360c5a.raw.setUint8(this.baseOffset, Bu.customId);
      _0x360c5a.raw.setUint8(this.baseOffset + 1, Bu.oneRt);
      _0x360c5a.row = _0x39a1db.row;
      _0x360c5a.col = _0x39a1db.col;
      _0x360c5a.on = _0x39a1db.on;
      _0x360c5a.release = _0x39a1db.release;
      _0x360c5a.press = _0x39a1db.press;
      return _0x360c5a;
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
    set ["row"](_0x13da7a) {
      this.raw.setUint8(this.baseOffset + 2, _0x13da7a);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ['col'](_0x3b6130) {
      this.raw.setUint8(this.baseOffset + 3, _0x3b6130);
    }
    get ['on']() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ['on'](_0x30d2a5) {
      this.raw.setUint8(this.baseOffset + 4, _0x30d2a5);
    }
    get ["release"]() {
      return Number((0.01 * this.raw.getUint16(this.baseOffset + 5)).toFixed(2));
    }
    set ["release"](_0x2a33b4) {
      this.raw.setUint16(this.baseOffset + 5, 100 * _0x2a33b4);
    }
    get ["releaseArr"]() {
      return [this.raw.getUint8(this.baseOffset + 5), this.raw.getUint8(this.baseOffset + 6)];
    }
    get ["press"]() {
      return Number((0.01 * this.raw.getUint16(this.baseOffset + 7)).toFixed(2));
    }
    set ["press"](_0x444373) {
      this.raw.setUint16(this.baseOffset + 7, 100 * _0x444373);
    }
    get ["pressArr"]() {
      return [this.raw.getUint8(this.baseOffset + 7), this.raw.getUint8(this.baseOffset + 8)];
    }
    static ['get'](_0x24889b, _0x2bbb0e) {
      const _0x459d1b = new OneRTKeyInfoV2(this.getData(), Mu.id_get_keyboard_value);
      _0x459d1b.raw.setUint8(this.baseOffset, Bu.customId);
      _0x459d1b.raw.setUint8(this.baseOffset + 1, Bu.oneRt);
      _0x459d1b.row = _0x24889b;
      _0x459d1b.col = _0x2bbb0e;
      return _0x459d1b;
    }
    static ['create'](_0x5879ad) {
      const _0x24e029 = new OneRTKeyInfoV2(this.getData(), Mu.id_set_keyboard_value);
      _0x24e029.raw.setUint8(this.baseOffset, Bu.customId);
      _0x24e029.raw.setUint8(this.baseOffset + 1, Bu.oneRt);
      _0x24e029.row = _0x5879ad.row;
      _0x24e029.col = _0x5879ad.col;
      _0x24e029.on = _0x5879ad.on;
      _0x24e029.release = _0x5879ad.release;
      _0x24e029.press = _0x5879ad.press;
      return _0x24e029;
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
    set ["offset"](_0xada8f) {
      this.raw.setUint16(this.baseOffset + 4, _0xada8f);
    }
    get ["size"]() {
      return this.raw.getUint8(this.baseOffset + 6);
    }
    set ['size'](_0x3e3e2b) {
      this.raw.setUint8(this.baseOffset + 6, _0x3e3e2b);
    }
    get ['rt']() {
      const _0x183897 = 3 * this.size,
        _0x290639 = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + _0x183897);
      return new DataView(_0x290639);
    }
    set ['rt'](_0x5553d1) {
      for (let _0x14070c = 0; _0x14070c < _0x5553d1.byteLength; _0x14070c++) this.raw.setUint8(this.baseOffset + 7 + _0x14070c, _0x5553d1.getUint8(_0x14070c));
    }
    get ["rtV2"]() {
      const _0x282fc4 = 5 * this.size,
        _0x568722 = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + _0x282fc4);
      return new DataView(_0x568722);
    }
    set ["flashOp"](_0xe16c96) {
      this.raw.setUint8(this.baseOffset + 7, _0xe16c96);
    }
    set ["rtFlash"](_0x255993) {
      for (let _0x1f746d = 0; _0x1f746d < _0x255993.byteLength; _0x1f746d++) this.raw.setUint8(this.baseOffset + 8 + _0x1f746d, _0x255993.getUint8(_0x1f746d));
    }
    static ["get"](_0x2e0f71, _0x1b18f1) {
      const _0x1ebbd4 = new BufferRTKeyInfo(this.getData(), Mu.id_get_keyboard_value);
      _0x1ebbd4.raw.setUint8(this.baseOffset, Bu.customId);
      _0x1ebbd4.raw.setUint8(this.baseOffset + 1, Bu.bufferRt);
      _0x1ebbd4.offset = _0x2e0f71;
      _0x1ebbd4.size = _0x1b18f1;
      return _0x1ebbd4;
    }
    static ["create"](_0x12d96f, _0x5a556f, _0x41544f, _0x3d1efd) {
      const _0x5f2e4b = new BufferRTKeyInfo(this.getData(), Mu.id_set_keyboard_value);
      _0x5f2e4b.raw.setUint8(this.baseOffset, Bu.customId);
      _0x5f2e4b.raw.setUint8(this.baseOffset + 1, Bu.bufferRt);
      _0x5f2e4b.offset = _0x12d96f;
      _0x5f2e4b.size = _0x5a556f;
      _0x5f2e4b.flashOp = _0x41544f;
      _0x5f2e4b.rtFlash = _0x3d1efd;
      return _0x5f2e4b;
    }
  },
  Uc = class DeadBand extends Pu {
    get ['top']() {
      return 0.02 * this.raw.getUint8(this.baseOffset + 2);
    }
    set ["top"](_0x5cbff0) {
      this.raw.setUint8(this.baseOffset + 2, _0x5cbff0 / 0.02);
    }
    get ["bottom"]() {
      return 0.02 * this.raw.getUint8(this.baseOffset + 3);
    }
    set ['bottom'](_0x1df837) {
      this.raw.setUint8(this.baseOffset + 3, _0x1df837 / 0.02);
    }
    static ["get"]() {
      const _0x134d88 = new DeadBand(this.getData(), Mu.id_get_keyboard_value);
      _0x134d88.raw.setUint8(this.baseOffset, Bu.customId);
      _0x134d88.raw.setUint8(this.baseOffset + 1, Bu.deadBand);
      return _0x134d88;
    }
    static ["create"](_0xb62dab, _0x1f0f8b) {
      const _0x3d83bc = new DeadBand(this.getData(), Mu.id_set_keyboard_value);
      _0x3d83bc.raw.setUint8(this.baseOffset, Bu.customId);
      _0x3d83bc.raw.setUint8(this.baseOffset + 1, Bu.deadBand);
      _0x3d83bc.top = _0xb62dab;
      _0x3d83bc.bottom = _0x1f0f8b;
      return _0x3d83bc;
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
    set ['top'](_0x49ff83) {
      this.raw.setUint16(this.baseOffset + 2, _0x49ff83 / 0.01);
    }
    get ["bottom"]() {
      return 0.01 * this.raw.getUint16(this.baseOffset + 4);
    }
    set ['bottom'](_0x380161) {
      this.raw.setUint16(this.baseOffset + 4, _0x380161 / 0.01);
    }
    static ["get"]() {
      const _0x5b6329 = new DeadBandV2(this.getData(), Mu.id_get_keyboard_value);
      _0x5b6329.raw.setUint8(this.baseOffset, Bu.customId);
      _0x5b6329.raw.setUint8(this.baseOffset + 1, Bu.deadBand);
      return _0x5b6329;
    }
    static ["create"](_0x10ec1d, _0x27e062) {
      const _0x13419a = new DeadBandV2(this.getData(), Mu.id_set_keyboard_value);
      _0x13419a.raw.setUint8(this.baseOffset, Bu.customId);
      _0x13419a.raw.setUint8(this.baseOffset + 1, Bu.deadBand);
      _0x13419a.top = _0x10ec1d;
      _0x13419a.bottom = _0x27e062;
      return _0x13419a;
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
    set ['effect'](_0x1ba18f) {
      this.raw.setUint8(this.baseOffset + 1, _0x1ba18f);
    }
    get ['speed']() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ["speed"](_0x1b480b) {
      this.raw.setUint8(this.baseOffset + 3, _0x1b480b);
    }
    get ['color']() {
      const [_0x430775, _0x225075, _0x4bb18f] = [this.raw.getUint8(this.baseOffset + 4), this.raw.getUint8(this.baseOffset + 5), this.raw.getUint8(this.baseOffset + 6)];
      return {
        r: _0x430775,
        g: _0x225075,
        b: _0x4bb18f
      };
    }
    set ["color"](_0xd1c945) {
      this.raw.setUint8(this.baseOffset + 4, _0xd1c945.r);
      this.raw.setUint8(this.baseOffset + 5, _0xd1c945.g);
      this.raw.setUint8(this.baseOffset + 6, _0xd1c945.b);
    }
    get ["brightness"]() {
      return this.raw.getUint8(this.baseOffset + 7);
    }
    set ["brightness"](_0x2383df) {
      this.raw.setUint8(this.baseOffset + 7, _0x2383df);
    }
    static ["get"]() {
      const _0x3e7cc8 = new LightInfo(this.getData(), Mu.id_lighting_get_value);
      _0x3e7cc8.raw.setUint8(this.baseOffset, Bu.lightInfo);
      return _0x3e7cc8;
    }
    static ["create"](_0x2852e5) {
      const _0x56fc2f = new LightInfo(this.getData(), Mu.id_lighting_set_value);
      _0x56fc2f.raw.setUint8(this.baseOffset, Bu.lightInfo);
      _0x56fc2f.effect = _0x2852e5.effect;
      _0x56fc2f.speed = _0x2852e5.speed;
      _0x56fc2f.color = _0x2852e5.color;
      _0x56fc2f.brightness = _0x2852e5.brightness;
      return _0x56fc2f;
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
      const _0x52cc85 = new ProtocolVersion(this.getData(), Mu.id_get_keyboard_value);
      _0x52cc85.raw.setUint8(this.baseOffset, Bu.customId);
      return _0x52cc85;
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
    set ["rgbArea"](_0x271cce) {
      this.raw.setUint8(this.baseOffset + 2, _0x271cce);
    }
    get ["wasdSwitch"]() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ['wasdSwitch'](_0x5922a1) {
      this.raw.setUint8(this.baseOffset + 3, _0x5922a1);
    }
    get ['macSwitch']() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ["macSwitch"](_0x58e843) {
      this.raw.setUint8(this.baseOffset + 4, _0x58e843);
    }
    get ['winLock']() {
      return this.raw.getUint8(this.baseOffset + 5);
    }
    set ["winLock"](_0x462dd4) {
      this.raw.setUint8(this.baseOffset + 5, _0x462dd4);
    }
    get ['nKroSwitch']() {
      return this.raw.getUint8(this.baseOffset + 6);
    }
    set ["nKroSwitch"](_0x2f5153) {
      this.raw.setUint8(this.baseOffset + 6, _0x2f5153);
    }
    static ["get"]() {
      const _0x203816 = new KeyboardFeature(this.getData(), Mu.id_get_keyboard_value);
      _0x203816.raw.setUint8(this.baseOffset, Bu.customId);
      _0x203816.raw.setUint8(this.baseOffset + 1, Bu.feature);
      return _0x203816;
    }
    static ['create'](_0x3a62fd) {
      const _0x3724f5 = new KeyboardFeature(this.getData(), Mu.id_set_keyboard_value);
      _0x3724f5.raw.setUint8(this.baseOffset, Bu.customId);
      _0x3724f5.raw.setUint8(this.baseOffset + 1, Bu.feature);
      _0x3724f5.rgbArea = _0x3a62fd.rgbArea;
      _0x3724f5.wasdSwitch = _0x3a62fd.wasdSwitch;
      _0x3724f5.macSwitch = _0x3a62fd.macSwitch;
      _0x3724f5.winLock = _0x3a62fd.winLock;
      _0x3724f5.nKroSwitch = _0x3a62fd.nKroSwitch;
      return _0x3724f5;
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
      const _0x4dd6a3 = new ResetKeyboardDefault(this.getData(), Mu.id_set_keyboard_value);
      _0x4dd6a3.raw.setUint8(this.baseOffset, Bu.customId);
      _0x4dd6a3.raw.setUint8(this.baseOffset + 1, Bu.resetAll);
      return _0x4dd6a3;
    }
    static ["getKeyAction"]() {
      return new ResetKeyboardDefault(this.getData(), Mu.id_dynamic_keymap_reset);
    }
  },
  Ic = (V(U = class extends Pu {
    get ["layer"]() {
      return U.layerMap[this.raw.getUint8(this.baseOffset + 2)];
    }
    set ['layer'](_0x1920be) {
      this.raw.setUint8(this.baseOffset + 2, _0x1920be);
    }
    static ["get"]() {
      const _0x5741ea = new U(this.getData(), Mu.id_get_keyboard_value);
      _0x5741ea.raw.setUint8(this.baseOffset, Bu.customId);
      _0x5741ea.raw.setUint8(this.baseOffset + 1, Bu.layer);
      return _0x5741ea;
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
    set ['opt'](_0x42b198) {
      this.raw.setUint8(this.baseOffset + 2, _0x42b198);
    }
    static ["get"]() {
      const _0x3e03a1 = new BottomOptimizeSwitch(this.getData(), Mu.id_get_keyboard_value);
      _0x3e03a1.raw.setUint8(this.baseOffset, Bu.customId);
      _0x3e03a1.raw.setUint8(this.baseOffset + 1, Bu.bottomOptimizeSwitch);
      return _0x3e03a1;
    }
    static ["create"](_0x8e47b7) {
      const _0x53d197 = new BottomOptimizeSwitch(this.getData(), Mu.id_set_keyboard_value);
      _0x53d197.raw.setUint8(this.baseOffset, Bu.customId);
      _0x53d197.raw.setUint8(this.baseOffset + 1, Bu.bottomOptimizeSwitch);
      _0x53d197.opt = _0x8e47b7;
      return _0x53d197;
    }
  },
  Mc = class GameModeSwitch extends Pu {
    get ["mode"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["mode"](_0x8a6bd5) {
      this.raw.setUint8(this.baseOffset + 2, _0x8a6bd5);
    }
    static ['get']() {
      const _0x4e4989 = new GameModeSwitch(this.getData(), Mu.id_get_keyboard_value);
      _0x4e4989.raw.setUint8(this.baseOffset, Bu.customId);
      _0x4e4989.raw.setUint8(this.baseOffset + 1, Bu.gameMode);
      return _0x4e4989;
    }
    static ["create"](_0x3afb8a) {
      const _0xb92f89 = new GameModeSwitch(this.getData(), Mu.id_set_keyboard_value);
      _0xb92f89.raw.setUint8(this.baseOffset, Bu.customId);
      _0xb92f89.raw.setUint8(this.baseOffset + 1, Bu.gameMode);
      _0xb92f89.mode = _0x3afb8a;
      return _0xb92f89;
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
  set ["mode"](_0x4f62e1) {
    this.raw.setUint8(this.baseOffset + 2, _0x4f62e1);
  }
  get ['colorful']() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["colorful"](_0x360e8e) {
    this.raw.setUint8(this.baseOffset + 3, _0x360e8e);
  }
  get ["brightness"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["brightness"](_0x54a3ee) {
    this.raw.setUint8(this.baseOffset + 4, _0x54a3ee);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ['speed'](_0x5db07b) {
    this.raw.setUint8(this.baseOffset + 5, _0x5db07b);
  }
  get ["color"]() {
    const [_0x8f96bf, _0x42d510, _0x43bdc0] = [this.raw.getUint8(this.baseOffset + 6), this.raw.getUint8(this.baseOffset + 7), this.raw.getUint8(this.baseOffset + 8)];
    return {
      r: _0x8f96bf,
      g: _0x42d510,
      b: _0x43bdc0
    };
  }
  set ["color"](_0x3ba072) {
    this.raw.setUint8(this.baseOffset + 6, _0x3ba072.r);
    this.raw.setUint8(this.baseOffset + 7, _0x3ba072.g);
    this.raw.setUint8(this.baseOffset + 8, _0x3ba072.b);
  }
  static ['get']() {
    const _0xfbdd9 = new BoxLightInfo(this.getData(), Mu.id_get_keyboard_value);
    _0xfbdd9.raw.setUint8(this.baseOffset, Bu.customId);
    _0xfbdd9.raw.setUint8(this.baseOffset + 1, Bu.boxLight);
    return _0xfbdd9;
  }
  static ["create"](_0x1ec620) {
    const _0x4c1af9 = new BoxLightInfo(this.getData(), Mu.id_set_keyboard_value);
    _0x4c1af9.raw.setUint8(this.baseOffset, Bu.customId);
    _0x4c1af9.raw.setUint8(this.baseOffset + 1, Bu.boxLight);
    _0x4c1af9.mode = _0x1ec620.mode;
    _0x4c1af9.colorful = _0x1ec620.colorful;
    _0x4c1af9.speed = _0x1ec620.speed;
    _0x4c1af9.brightness = _0x1ec620.brightness;
    _0x4c1af9.color = _0x1ec620.color;
    return _0x4c1af9;
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
    set ["row"](_0x395fb5) {
      this.raw.setUint8(this.baseOffset + 2, _0x395fb5);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ['col'](_0x569259) {
      this.raw.setUint8(this.baseOffset + 3, _0x569259);
    }
    get ["subField"]() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ["subField"](_0x2bb5e5) {
      this.raw.setUint8(this.baseOffset + 4, _0x2bb5e5);
    }
  },
  Rc = class OneMixAxle extends Tc {
    static ["get"](_0x42d445, _0x3ffc06) {
      const _0x462935 = new OneMixAxle(this.getData(), Mu.id_get_keyboard_value);
      _0x462935.raw.setUint8(this.baseOffset, Bu.customId);
      _0x462935.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      _0x462935.row = _0x42d445;
      _0x462935.col = _0x3ffc06;
      _0x462935.subField = Lu.GET_KEY;
      return _0x462935;
    }
    static ["create"](_0x12d104, _0x2fde6c, _0xb45783) {
      const _0x1ec6b9 = new OneMixAxle(this.getData(), Mu.id_set_keyboard_value);
      _0x1ec6b9.raw.setUint8(this.baseOffset, Bu.customId);
      _0x1ec6b9.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      _0x1ec6b9.subField = Lu.SET_KEY;
      _0x1ec6b9.row = _0x12d104;
      _0x1ec6b9.col = _0x2fde6c;
      _0x1ec6b9.keyType = _0xb45783;
      return _0x1ec6b9;
    }
    static ["createAll"](_0x39fd82) {
      const _0x33cbf1 = new OneMixAxle(this.getData(), Mu.id_set_keyboard_value);
      _0x33cbf1.raw.setUint8(this.baseOffset, Bu.customId);
      _0x33cbf1.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      _0x33cbf1.subField = Lu.SET_KEY_ALL;
      _0x33cbf1.keyType = _0x39fd82;
      return _0x33cbf1;
    }
    get ["keyType"]() {
      return this.raw.getUint8(this.baseOffset + 5);
    }
    set ['keyType'](_0x52495c) {
      this.raw.setUint8(this.baseOffset + 5, _0x52495c);
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
      const _0x54cebc = new OptionMixAxle(this.getData(), Mu.id_get_keyboard_value);
      _0x54cebc.raw.setUint8(this.baseOffset, Bu.customId);
      _0x54cebc.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      _0x54cebc.subField = Lu.START_CFG;
      return _0x54cebc;
    }
    static ["save"]() {
      const _0x15c203 = new OptionMixAxle(this.getData(), Mu.id_set_keyboard_value);
      _0x15c203.raw.setUint8(this.baseOffset, Bu.customId);
      _0x15c203.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      _0x15c203.subField = Lu.SAVE_CFG;
      return _0x15c203;
    }
  },
  Bc = class BufferMixAxle extends Tc {
    static ["get"](_0x4d974e, _0x59f24f) {
      const _0x537d76 = new BufferMixAxle(this.getData(), Mu.id_get_keyboard_value);
      _0x537d76.raw.setUint8(this.baseOffset, Bu.customId);
      _0x537d76.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      _0x537d76.subField = Lu.GET_KEY_BUFFER;
      _0x537d76.offset = _0x4d974e;
      _0x537d76.size = _0x59f24f;
      return _0x537d76;
    }
    static ["create"](_0x4ba156, _0xa72073, _0x1f5642) {
      const _0x1853a6 = new BufferMixAxle(this.getData(), Mu.id_set_keyboard_value);
      _0x1853a6.raw.setUint8(this.baseOffset, Bu.customId);
      _0x1853a6.raw.setUint8(this.baseOffset + 1, Bu.mixAxle);
      _0x1853a6.subField = Lu.SET_KEY_BUFFER;
      _0x1853a6.offset = _0x4ba156;
      _0x1853a6.size = _0xa72073;
      _0x1853a6.keyTypes = _0x1f5642;
      return _0x1853a6;
    }
    get ['offset']() {
      return this.raw.getUint16(this.baseOffset + 5);
    }
    set ["offset"](_0x134262) {
      this.raw.setUint16(this.baseOffset + 5, _0x134262);
    }
    get ['size']() {
      return this.raw.getUint8(this.baseOffset + 7);
    }
    set ["size"](_0x2d37ad) {
      this.raw.setUint8(this.baseOffset + 7, _0x2d37ad);
    }
    get ["keyTypes"]() {
      const _0x5a0541 = this.raw.buffer.slice(this.baseOffset + 8, this.baseOffset + 8 + this.size);
      return new DataView(_0x5a0541);
    }
    set ["keyTypes"](_0x45b8d) {
      for (let _0x577c94 = 0; _0x577c94 < this.size; _0x577c94++) this.raw.setUint8(this.baseOffset + 8 + _0x577c94, _0x45b8d.getUint8(_0x577c94));
    }
  },
  Lc = class AxleCalibrate extends Pu {
    static ['start']() {
      const _0x4bee89 = new AxleCalibrate(this.getData(), Mu.id_set_keyboard_value);
      _0x4bee89.raw.setUint8(this.baseOffset, Bu.customId);
      _0x4bee89.raw.setUint8(this.baseOffset + 1, Bu.calibrate);
      return _0x4bee89;
    }
  },
  Vc = class DynamicKeyStroke extends Pu {
    static ['get'](_0x4f05a6) {
      const _0xf45c38 = new DynamicKeyStroke(this.getData(), Mu.id_get_keyboard_value);
      _0xf45c38.raw.setUint8(this.baseOffset, Bu.customId);
      _0xf45c38.raw.setUint8(this.baseOffset + 1, Bu.dks);
      _0xf45c38.subField = Nu.get;
      _0xf45c38.index = _0x4f05a6;
      return _0xf45c38;
    }
    static ["create"](_0x12b7d9, _0x3504fb) {
      const _0x599fcb = new DynamicKeyStroke(this.getData(), Mu.id_set_keyboard_value);
      _0x599fcb.raw.setUint8(this.baseOffset, Bu.customId);
      _0x599fcb.raw.setUint8(this.baseOffset + 1, Bu.dks);
      _0x599fcb.subField = Nu.set;
      _0x599fcb.index = _0x12b7d9;
      _0x599fcb.actions = _0x3504fb;
      return _0x599fcb;
    }
    get ['subField']() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ["subField"](_0x2d5a29) {
      this.raw.setUint8(this.baseOffset + 4, _0x2d5a29);
    }
    get ['index']() {
      return this.raw.getUint8(this.baseOffset + 5);
    }
    set ['index'](_0x27ee51) {
      this.raw.setUint8(this.baseOffset + 5, _0x27ee51);
    }
    get ["actions"]() {
      const _0x9918e4 = this.raw.buffer.slice(this.baseOffset + 6, this.baseOffset + 6 + 16),
        _0x180931 = _0x9918e4.byteLength / 4,
        _0x3ae678 = [];
      for (let _0x2b3dcf = 0; _0x2b3dcf < _0x180931; _0x2b3dcf++) {
        const _0x87de47 = _0x9918e4.slice(4 * _0x2b3dcf, 4 * _0x2b3dcf + 4),
          _0x539470 = new DataView(_0x87de47),
          _0x45a7cc = new dc(_0x539470, 0);
        _0x3ae678.push(_0x45a7cc);
      }
      return _0x3ae678;
    }
    set ["actions"](_0x4dd73f) {
      for (let _0x329592 = 0; _0x329592 < _0x4dd73f.length; _0x329592++) {
        const _0x344b16 = _0x4dd73f[_0x329592].dataView;
        for (let _0x4aa56b = 0; _0x4aa56b < _0x344b16.byteLength; _0x4aa56b++) this.raw.setUint8(this.baseOffset + 6 + 4 * _0x329592 + _0x4aa56b, _0x344b16.getUint8(_0x4aa56b));
      }
    }
  },
  Fc = class CustomLamplight extends Pu {
    static ["save"]() {
      const _0x527c14 = new CustomLamplight(this.getData(), Mu.id_set_keyboard_value);
      _0x527c14.raw.setUint8(this.baseOffset, Bu.customId);
      _0x527c14.raw.setUint8(this.baseOffset + 1, Bu.saveLamplight);
      return _0x527c14;
    }
    static ["get"](_0x460478, _0x56c23b, _0x34dcae) {
      const _0x363bc7 = new CustomLamplight(this.getData(), Mu.id_custom_get_value);
      _0x363bc7.raw.setUint8(this.baseOffset, Bu.getCustomLamplight);
      _0x363bc7.row = _0x460478;
      _0x363bc7.col = _0x56c23b;
      _0x363bc7.num = _0x34dcae;
      return _0x363bc7;
    }
    static ['create'](_0x480af1, _0x268ad1, _0x3d6cf, _0x1d170b) {
      const _0x4d5ad2 = new CustomLamplight(this.getData(), Mu.id_custom_set_value);
      _0x4d5ad2.raw.setUint8(this.baseOffset, Bu.setCustomLamplight);
      _0x4d5ad2.row = _0x480af1;
      _0x4d5ad2.col = _0x268ad1;
      _0x4d5ad2.num = _0x3d6cf;
      _0x4d5ad2.colors = _0x1d170b;
      return _0x4d5ad2;
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
    set ['row'](_0x3873d9) {
      this.raw.setUint8(this.baseOffset + 1, _0x3873d9);
    }
    get ["col"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["col"](_0x32b784) {
      this.raw.setUint8(this.baseOffset + 2, _0x32b784);
    }
    get ['num']() {
      return this.raw.getUint8(this.baseOffset + 3);
    }
    set ["num"](_0x3f1a6a) {
      this.raw.setUint8(this.baseOffset + 3, _0x3f1a6a);
    }
    get ["colors"]() {
      const _0x5b436f = this.raw.buffer.slice(this.baseOffset + 4, this.baseOffset + 4 + 3 * this.num);
      return rt.chunk(Array.from(new Uint8Array(_0x5b436f)), 3);
    }
    set ['colors'](_0x3746b9) {
      const _0xabf0cd = _0x3746b9.flat();
      for (let _0x3b20f4 = 0; _0x3b20f4 < _0xabf0cd.length; _0x3b20f4++) this.raw.setUint8(this.baseOffset + 4 + _0x3b20f4, _0xabf0cd[_0x3b20f4]);
    }
  },
  Nc = class TapDance extends Pu {
    static ["get"](_0x43da61) {
      const _0xd653c9 = new TapDance(this.getData(), Mu.id_vial_prefix);
      _0xd653c9.raw.setUint8(this.baseOffset, Bu.entryOp);
      _0xd653c9.raw.setUint8(this.baseOffset + 1, Bu.tapDanceGet);
      _0xd653c9.index = _0x43da61;
      return _0xd653c9;
    }
    static ['create'](_0x1e597d, _0x1e151a) {
      const _0x73f040 = new TapDance(this.getData(), Mu.id_vial_prefix);
      _0x73f040.raw.setUint8(this.baseOffset, Bu.entryOp);
      _0x73f040.raw.setUint8(this.baseOffset + 1, Bu.tapDanceSet);
      _0x73f040.index = _0x1e597d;
      (null == _0x1e151a ? void 0 : _0x1e151a.tap) && (_0x73f040.tap = _0x1e151a.tap);
      (null == _0x1e151a ? void 0 : _0x1e151a.hold) && (_0x73f040.hold = _0x1e151a.hold);
      (null == _0x1e151a ? void 0 : _0x1e151a.timer) && (_0x73f040.timer = _0x1e151a.timer);
      return _0x73f040;
    }
    get ["index"]() {
      return this.raw.getUint8(this.baseOffset + 2);
    }
    set ["index"](_0x255022) {
      this.raw.setUint8(this.baseOffset + 2, _0x255022);
    }
    get ['tap']() {
      const _0x525fce = this.raw.buffer.slice(this.baseOffset + 3, this.baseOffset + 3 + 2);
      return zu.fromDataView(new DataView(_0x525fce), 0);
    }
    set ["tap"](_0x397d42) {
      this.raw.setUint8(this.baseOffset + 3, _0x397d42.keyClass);
      this.raw.setUint8(this.baseOffset + 4, _0x397d42.keyId);
    }
    get ["hold"]() {
      const _0x36f8c5 = this.raw.buffer.slice(this.baseOffset + 5, this.baseOffset + 5 + 2);
      return zu.fromDataView(new DataView(_0x36f8c5), 0);
    }
    set ["hold"](_0x14a6c3) {
      this.raw.setUint8(this.baseOffset + 5, _0x14a6c3.keyClass);
      this.raw.setUint8(this.baseOffset + 6, _0x14a6c3.keyId);
    }
    get ["timer"]() {
      return this.raw.getUint16(this.baseOffset + 7);
    }
    set ['timer'](_0x1aa46a) {
      this.raw.setUint16(this.baseOffset + 7, _0x1aa46a);
    }
  },
  Gc = (V(D = class extends Pu {
    static ["get"]() {
      const [_0x5cc358, _0x396aac, _0x1bb6a7] = D.dataReporting,
        _0x369c23 = new D(D.getData(), _0x5cc358);
      _0x369c23.raw.setUint8(this.baseOffset, _0x396aac);
      _0x369c23.raw.setUint8(this.baseOffset + 1, _0x1bb6a7);
      return _0x369c23;
    }
    static ["fromDataView"](_0x1cc79f) {
      return new D(_0x1cc79f, rt.first(D.dataReporting));
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
      const _0x3b2d65 = new Calibration2(this.getData(), Mu.id_set_keyboard_value);
      _0x3b2d65.raw.setUint8(this.baseOffset, Bu.customId);
      _0x3b2d65.raw.setUint8(this.baseOffset + 1, Bu.calibrationStart);
      return _0x3b2d65;
    }
    static ['finish']() {
      const _0x1233c0 = new Calibration2(this.getData(), Mu.id_set_keyboard_value);
      _0x1233c0.raw.setUint8(this.baseOffset, Bu.customId);
      _0x1233c0.raw.setUint8(this.baseOffset + 1, Bu.calibrationFinish);
      return _0x1233c0;
    }
    static ["getCompleteStatusBuffer"](_0x3830e0, _0x3223c1) {
      const _0x543f75 = new Calibration2(this.getData(), Mu.id_get_keyboard_value);
      _0x543f75.raw.setUint8(this.baseOffset, Bu.customId);
      _0x543f75.raw.setUint8(this.baseOffset + 1, Bu.completeStatusBuffer);
      _0x543f75.offset = _0x3830e0;
      _0x543f75.size = _0x3223c1;
      return _0x543f75;
    }
    static ['getAdcTripCompStatusBuffer'](_0x119746, _0x144c06) {
      const _0x20c63a = new Calibration2(this.getData(), Mu.id_get_keyboard_value);
      _0x20c63a.raw.setUint8(this.baseOffset, Bu.customId);
      _0x20c63a.raw.setUint8(this.baseOffset + 1, Bu.adcTripCompStatusBuffer);
      _0x20c63a.offset = _0x119746;
      _0x20c63a.size = _0x144c06;
      return _0x20c63a;
    }
    static ["getInitStatusBuffer"](_0x2b6cd6, _0x38a8b5) {
      const _0x3181f2 = new Calibration2(this.getData(), Mu.id_get_keyboard_value);
      _0x3181f2.raw.setUint8(this.baseOffset, Bu.customId);
      _0x3181f2.raw.setUint8(this.baseOffset + 1, Bu.calibration);
      _0x3181f2.offset = _0x2b6cd6;
      _0x3181f2.size = _0x38a8b5;
      return _0x3181f2;
    }
    get ['size']() {
      return this.raw.getUint8(this.baseOffset + 6);
    }
    set ["size"](_0x1e9a15) {
      this.raw.setUint8(this.baseOffset + 6, _0x1e9a15);
    }
    get ["offset"]() {
      return this.raw.getUint16(this.baseOffset + 4);
    }
    set ['offset'](_0x1c4ba7) {
      this.raw.setUint16(this.baseOffset + 4, _0x1c4ba7);
    }
    get ["completeStatusList"]() {
      const _0x26a4a3 = [];
      for (let _0x3f4d09 = 0; _0x3f4d09 < this.size; _0x3f4d09++) _0x26a4a3.push(this.raw.getUint8(this.baseOffset + 7 + _0x3f4d09));
      return _0x26a4a3;
    }
    get ["initStatusList"]() {
      const _0x8dcb13 = [];
      for (let _0x21871b = 0; _0x21871b < this.size; _0x21871b++) _0x8dcb13.push(this.raw.getUint8(this.baseOffset + 7 + _0x21871b));
      return _0x8dcb13;
    }
    get ["adcTripCompStatusList"]() {
      const _0x5520f4 = [];
      for (let _0x16518d = 0; _0x16518d < this.size; _0x16518d++) _0x5520f4.push([this.raw.getUint16(this.baseOffset + 7 + 4 * _0x16518d), 0.02 * this.raw.getUint8(this.baseOffset + 7 + 4 * _0x16518d + 2), this.raw.getUint8(this.baseOffset + 7 + 4 * _0x16518d + 3)]);
      return _0x5520f4;
    }
    get ["adcTripCompStatusListV2"]() {
      const _0x167a85 = [];
      for (let _0x2218be = 0; _0x2218be < this.size; _0x2218be++) _0x167a85.push([this.raw.getUint16(this.baseOffset + 7 + 5 * _0x2218be), 0.01 * this.raw.getUint16(this.baseOffset + 7 + 5 * _0x2218be + 2), this.raw.getUint8(this.baseOffset + 7 + 5 * _0x2218be + 4)]);
      return _0x167a85;
    }
  },
  Hc = class RappySnappy extends Pu {
    get ["subField"]() {
      return this.raw.getUint8(this.baseOffset + 4);
    }
    set ['subField'](_0x496d1a) {
      this.raw.setUint8(this.baseOffset + 4, _0x496d1a);
    }
    get ['index']() {
      return this.raw.getUint8(this.baseOffset + 5);
    }
    set ['index'](_0x1ec7f9) {
      this.raw.setUint8(this.baseOffset + 5, _0x1ec7f9);
    }
    get ["mode"]() {
      return this.raw.getUint8(this.baseOffset + 6);
    }
    set ["mode"](_0x1334c9) {
      this.raw.setUint8(this.baseOffset + 6, _0x1334c9);
    }
    get ['id']() {
      return this.raw.getUint8(this.baseOffset + 7);
    }
    set ['id'](_0x32a851) {
      _0x32a851 >= 26 && (_0x32a851 -= 26);
      this.raw.setUint8(this.baseOffset + 7, _0x32a851);
    }
    get ['rsApcLv']() {
      return this.raw.getUint16(this.baseOffset + 8);
    }
    set ['rsApcLv'](_0x331632) {
      this.raw.setUint16(this.baseOffset + 8, _0x331632);
    }
    get ["gapcSw"]() {
      return this.raw.getUint8(this.baseOffset + 10);
    }
    set ['gapcSw'](_0xdd6d3a) {
      this.raw.setUint8(this.baseOffset + 10, _0xdd6d3a);
    }
    get ['rtSw']() {
      return this.raw.getUint8(this.baseOffset + 11);
    }
    set ["rtSw"](_0x51a016) {
      this.raw.setUint8(this.baseOffset + 11, _0x51a016);
    }
    get ["key1Row"]() {
      return this.raw.getUint8(this.baseOffset + 12);
    }
    set ['key1Row'](_0x374938) {
      this.raw.setUint8(this.baseOffset + 12, _0x374938);
    }
    get ["key1Col"]() {
      return this.raw.getUint8(this.baseOffset + 13);
    }
    set ["key1Col"](_0x18c44b) {
      this.raw.setUint8(this.baseOffset + 13, _0x18c44b);
    }
    get ["key2Row"]() {
      return this.raw.getUint8(this.baseOffset + 14);
    }
    set ['key2Row'](_0x431529) {
      this.raw.setUint8(this.baseOffset + 14, _0x431529);
    }
    get ["key2Col"]() {
      return this.raw.getUint8(this.baseOffset + 15);
    }
    set ["key2Col"](_0x4b965d) {
      this.raw.setUint8(this.baseOffset + 15, _0x4b965d);
    }
    get ["layer"]() {
      return this.raw.getUint8(this.baseOffset + 16);
    }
    set ['layer'](_0x378c03) {
      this.raw.setUint8(this.baseOffset + 16, _0x378c03);
    }
    static ["get"](_0x5ed0cb) {
      const _0x15a74c = new RappySnappy(this.getData(), Mu.id_get_keyboard_value);
      _0x15a74c.raw.setUint8(this.baseOffset, Bu.customId);
      _0x15a74c.raw.setUint8(this.baseOffset + 1, Bu.rs);
      _0x15a74c.subField = Fu.get;
      _0x15a74c.index = _0x5ed0cb;
      _0x15a74c.id = _0x5ed0cb;
      return _0x15a74c;
    }
    static ["create"](_0x1fb11f, _0x547bb8, _0x2d1d32) {
      const _0x247eb1 = new RappySnappy(this.getData(), Mu.id_set_keyboard_value);
      _0x247eb1.raw.setUint8(this.baseOffset, Bu.customId);
      _0x247eb1.raw.setUint8(this.baseOffset + 1, Bu.rs);
      _0x247eb1.raw.setUint8(this.baseOffset + 2, 0);
      _0x247eb1.raw.setUint8(this.baseOffset + 3, 0);
      _0x247eb1.subField = Fu.set;
      _0x247eb1.index = _0x1fb11f;
      _0x247eb1.id = _0x547bb8;
      (null == _0x2d1d32 ? void 0 : _0x2d1d32.mode) && (_0x247eb1.mode = _0x2d1d32.mode);
      (null == _0x2d1d32 ? void 0 : _0x2d1d32.rsApcLv) && (_0x247eb1.rsApcLv = _0x2d1d32.rsApcLv);
      (null == _0x2d1d32 ? void 0 : _0x2d1d32.gapcSw) && (_0x247eb1.gapcSw = _0x2d1d32.gapcSw);
      (null == _0x2d1d32 ? void 0 : _0x2d1d32.rtSw) && (_0x247eb1.rtSw = _0x2d1d32.rtSw);
      (null == _0x2d1d32 ? void 0 : _0x2d1d32.key1Row) && (_0x247eb1.key1Row = _0x2d1d32.key1Row);
      (null == _0x2d1d32 ? void 0 : _0x2d1d32.key1Col) && (_0x247eb1.key1Col = _0x2d1d32.key1Col);
      (null == _0x2d1d32 ? void 0 : _0x2d1d32.key2Row) && (_0x247eb1.key2Row = _0x2d1d32.key2Row);
      (null == _0x2d1d32 ? void 0 : _0x2d1d32.key2Col) && (_0x247eb1.key2Col = _0x2d1d32.key2Col);
      (null == _0x2d1d32 ? void 0 : _0x2d1d32.layer) && (_0x247eb1.layer = _0x2d1d32.layer);
      return _0x247eb1;
    }
  },
  Wc = class HidDevice2 extends WebHidGeneral {
    constructor() {
      super(...arguments);
      V(this, 'mutex', new Mutex());
      V(this, "pendingTransfers", []);
    }
    ["onDeviceToHostReportReceived"](_0x54ba4b) {}
    async ["transferForResultAsync"](_0x113a78) {
      var _0x54b379;
      const _0xd9e970 = new DataView(_0x113a78.buffer).getUint8(0);
      let _0x281fa1;
      const _0x3ec344 = new Promise(_0x2e507e => {
          _0x281fa1 = _0x2e507e;
        }),
        _0x530363 = {
          requestCode: _0xd9e970,
          data: _0x113a78,
          promiseResolve: _0x281fa1
        };
      this.pendingTransfers.push(_0x530363);
      await (null == (_0x54b379 = this.device) ? void 0 : _0x54b379.sendReport(0, _0x113a78));
      return _0x3ec344;
    }
    ["inputReportListener"](_0x1bb46c) {
      super.inputReportListener(_0x1bb46c);
      this.handleInputReport(_0x1bb46c.data);
    }
    ["handleInputReport"](_0x1a472b) {
      this.mutex.runExclusive(() => {
        const _0x537063 = _0x1a472b.getUint8(0);
        if (0 == _0x537063) return void this.onDeviceToHostReportReceived(_0x1a472b);
        let _0x3a69e7 = false;
        Array.from(new Uint8Array(_0x1a472b.buffer.slice(0, 3))).join('') === Gc.dataReporting.join('') && (Pr("data-reporting", Gc.fromDataView(_0x1a472b)), _0x3a69e7 = true);
        if (!_0x3a69e7) {
          for (const _0x8880b2 of this.pendingTransfers) if (_0x8880b2.requestCode === _0x537063) {
            _0x8880b2.promiseResolve(_0x1a472b);
            this.pendingTransfers.splice(this.pendingTransfers.indexOf(_0x8880b2), 1);
            _0x3a69e7 = true;
            break;
          }
        }
        _0x3a69e7 || new Uint8Array(_0x1a472b.buffer).toString();
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
      custom: _0x4d31b4
    } = this.getCustomData();
    return !('advancedKeyVersion' in _0x4d31b4) || Number(this.version) >= Number(_0x4d31b4.advancedKeyVersion);
  }
  get ["deviceVersion"]() {
    return this.version;
  }
  async ["getAllKeyAction"](_0x5cdd96, _0x10a15b, _0x3fb4f6) {
    const _0x1d5651 = _0x5cdd96 * _0x10a15b * _0x3fb4f6 * 2 / 28,
      _0x143920 = [];
    for (let _0x481b05 = 0; _0x481b05 < _0x1d5651; _0x481b05++) {
      const _0x3c934e = await this.transferForResult(mc.get(28 * _0x481b05, 28));
      _0x143920.push(..._0x3c934e.keyActionList);
    }
    return _0x143920;
  }
  async ["setAllKeyAction"](_0xc705ca) {
    const _0x2e86f1 = _0xc705ca.map(_0x587397 => _0x587397.map(_0x2b4f18 => _0x2b4f18.flat()).flat()).flat(),
      _0x48163d = _0x2e86f1.length / 14;
    for (let _0xddc1fa = 0; _0xddc1fa < _0x48163d; _0xddc1fa++) {
      const _0x249449 = _0x2e86f1.slice(14 * _0xddc1fa, 14 * (_0xddc1fa + 1));
      await this.transferForResult(mc.create(28 * _0xddc1fa, 28, _0x249449));
    }
  }
  async ['getOneKeyAction'](_0x3f015e, _0x3eb517, _0x454b3b) {
    return this.transferForResult(gc.get(_0x3f015e, _0x3eb517, _0x454b3b));
  }
  async ["setOneKeyAction"](_0xa98e28, _0x42d7e2, _0x1ac51d, _0x408b14) {
    return this.transferForResult(gc.create(_0xa98e28, _0x42d7e2, _0x1ac51d, _0x408b14));
  }
  async ["getMacroCount"]() {
    return this.transferForResult(pc.get());
  }
  async ["getMacroBufferSize"]() {
    return this.transferForResult(yc.get());
  }
  async ["getMacroBuffer"]() {
    const {
        count: _0x133a7e
      } = await this.getMacroCount(),
      {
        size: _0x47bf9d
      } = await this.getMacroBufferSize(),
      _0x5ec322 = [],
      _0x474aad = Math.ceil(_0x47bf9d / 28);
    for (let _0x42de20 = 0; _0x42de20 < _0x474aad; _0x42de20++) {
      const _0x5f2d5a = 28 * _0x42de20,
        _0xc565d9 = await this.transferForResult(wc.get(_0x5f2d5a, 28));
      _0x5ec322.push(...Array.from(new Uint8Array(_0xc565d9.buffer.buffer)));
      if (_0x5ec322.filter(_0x3d3286 => 0 === _0x3d3286).length > _0x133a7e) break;
    }
    const _0x2ddca9 = [];
    let _0xd7cb6d = [];
    for (const _0x367629 of _0x5ec322) {
      if (0 != _0x367629) _0xd7cb6d.push(_0x367629);else {
        _0x2ddca9.push(_0xd7cb6d);
        _0xd7cb6d = [];
      }
      if (_0x2ddca9.length >= _0x133a7e) break;
    }
    const _0x4d4e93 = [];
    for (let _0x48fdfb = 0; _0x48fdfb < _0x2ddca9.length; _0x48fdfb++) {
      const _0x546d1d = _0x2ddca9[_0x48fdfb];
      if (0 === _0x546d1d.length) {
        _0x4d4e93.push([]);
        continue;
      }
      let _0x389c84 = 0;
      const _0x205979 = [];
      for (; _0x389c84 < _0x546d1d.length;) {
        const _0x2cfc65 = new DataView(new Uint8Array(_0x546d1d).buffer),
          _0x427e4d = ac.fromDataView(_0x2cfc65, _0x389c84);
        _0x389c84 += _0x427e4d.count;
        _0x205979.push(_0x427e4d);
      }
      _0x4d4e93.push(_0x205979);
    }
    return _0x4d4e93;
  }
  async ["setMacroBuffer"](_0x2fe041, _0x40e2c2) {
    const _0x155274 = await this.getMacroBuffer();
    _0x155274[_0x2fe041] = _0x40e2c2;
    const _0x1de1bb = [];
    for (let _0x1b1d8f = 0; _0x1b1d8f < _0x155274.length; _0x1b1d8f++) {
      const _0x24d839 = _0x155274[_0x1b1d8f].map(_0x59f96b => Array.from(new Uint8Array(_0x59f96b.dataView.buffer))).flat();
      _0x1de1bb.push(_0x24d839);
    }
    const _0x20c0e4 = _0x1de1bb.map(_0x246304 => _0x246304.length ? [..._0x246304, 0] : 0).flat(),
      _0x221d1a = rt.chunk(_0x20c0e4, 28);
    for (let _0x11114d = 0; _0x11114d < _0x221d1a.length; _0x11114d++) {
      const _0x303cb1 = 28 * _0x11114d,
        _0x404c75 = new DataView(new Uint8Array(_0x221d1a[_0x11114d]).buffer);
      await this.transferForResult(wc.create(_0x303cb1, _0x404c75, _0x404c75.byteLength));
    }
  }
  async ["getOneTogTh"](_0x1c4ee2, _0x2d8d81) {
    if (this.isV2) return this.transferForResult(_c.get(_0x1c4ee2, _0x2d8d81));
    return this.transferForResult(bc.get(_0x1c4ee2, _0x2d8d81));
  }
  async ["setOneTogTh"](_0x5d8d3d, _0x362924, _0x1b1cb4) {
    if (this.isV2) return this.transferForResult(_c.create(_0x5d8d3d, _0x362924, _0x1b1cb4));
    return this.transferForResult(bc.create(_0x5d8d3d, _0x362924, _0x1b1cb4));
  }
  async ["getTogThAll"](_0x4e9c77, _0x5cbc8f) {
    if (this.isV2) return this.getTogThAllV2(_0x4e9c77, _0x5cbc8f);
    const _0x3e2187 = Math.ceil(_0x4e9c77 * _0x5cbc8f / 24),
      _0x504a43 = [];
    for (let _0x3af12f = 0; _0x3af12f < _0x3e2187; _0x3af12f++) {
      const _0x2d1e3d = await this.transferForResult(vc.get(24 * _0x3af12f, 24));
      _0x504a43.push(...new Uint8Array(_0x2d1e3d.togThs.buffer));
    }
    return rt.chunk(_0x504a43, _0x5cbc8f).map((_0x2abcf4, _0x4dfdb6) => _0x2abcf4.map((_0x4eee09, _0xe79151) => bc.create(_0x4dfdb6, _0xe79151, 0.02 * _0x4eee09)));
  }
  async ["setTogThAll"](_0x1f0356) {
    if (this.isV2) return this.setTogThAllV2(_0x1f0356);
    const _0x2d2bf4 = _0x1f0356.map(_0x289596 => _0x289596.map(_0x544d23 => _0x544d23.apc / 0.02)).flat(),
      _0x4a2f64 = rt.chunk(_0x2d2bf4, 23);
    for (let _0x3d4d24 = 0; _0x3d4d24 < _0x4a2f64.length; _0x3d4d24++) {
      const _0x4c94af = _0x4a2f64[_0x3d4d24];
      let _0xbff9f6 = Eu.normal;
      0 === _0x3d4d24 && (_0xbff9f6 = Eu.erase);
      _0x3d4d24 === _0x4a2f64.length - 1 && (_0xbff9f6 = Eu.write);
      await this.transferForResult(vc.create(23 * _0x3d4d24, 23, _0xbff9f6, new DataView(new Uint8Array(_0x4c94af).buffer)));
      0 !== _0x3d4d24 && _0x3d4d24 !== _0x4a2f64.length - 1 || (await Ng(200));
    }
  }
  async ["setTogThAllV2"](_0x51bb90) {
    const _0x2e72ee = _0x51bb90.map(_0x34309f => _0x34309f.map(_0x4e5698 => _0x4e5698.apcArr).flat()).flat(),
      _0x71a880 = rt.chunk(_0x2e72ee, 22);
    for (let _0x48fcbb = 0; _0x48fcbb < _0x71a880.length; _0x48fcbb++) {
      const _0x55da3b = _0x71a880[_0x48fcbb];
      let _0x567efb = Eu.normal;
      0 === _0x48fcbb && (_0x567efb = Eu.erase);
      _0x48fcbb === _0x71a880.length - 1 && (_0x567efb = Eu.write);
      const _0x763c44 = vc.create(11 * _0x48fcbb, 11, _0x567efb, new DataView(new Uint8Array(_0x55da3b).buffer));
      await this.transferForResult(_0x763c44);
      0 !== _0x48fcbb && _0x48fcbb !== _0x71a880.length - 1 || (await Ng(200));
    }
  }
  async ["getOneRTKeyInfo"](_0x271583, _0x4ec5ea) {
    if (this.isV2) return this.transferForResult(Cc.get(_0x271583, _0x4ec5ea));
    return this.transferForResult(kc.get(_0x271583, _0x4ec5ea));
  }
  async ['getRTKeyInfoAll'](_0x43327f, _0x1539e6) {
    if (this.isV2) return this.getRTKeyInfoAllV2(_0x43327f, _0x1539e6);
    const _0x4b07c4 = Math.ceil(_0x43327f * _0x1539e6 / 8),
      _0x3b972e = [];
    for (let _0x3f397a = 0; _0x3f397a < _0x4b07c4; _0x3f397a++) {
      const _0x5a8b90 = await this.transferForResult(Sc.get(8 * _0x3f397a, 8));
      _0x3b972e.push(...new Uint8Array(_0x5a8b90.rt.buffer));
    }
    return rt.chunk(rt.chunk(_0x3b972e, 3), _0x1539e6).map((_0x5eb939, _0x5036b8) => _0x5eb939.map((_0x3308ad, _0x535e27) => {
      const _0x1e662e = kc.get(_0x5036b8, _0x535e27),
        [_0x56f9e8, _0x49002f, _0x2775d9] = _0x3308ad;
      _0x1e662e.on = _0x56f9e8;
      _0x1e662e.release = 0.02 * _0x49002f;
      _0x1e662e.press = 0.02 * _0x2775d9;
      return _0x1e662e;
    }));
  }
  async ["setRTKeyInfoAll"](_0x263a09) {
    if (this.isV2) return this.setRTKeyInfoAllV2(_0x263a09);
    const _0x29600a = _0x263a09.map(_0x566b45 => _0x566b45.map(_0xd5c321 => [_0xd5c321.on, _0xd5c321.release / 0.02, _0xd5c321.press / 0.02]).flat()).flat(),
      _0x35ee2b = rt.chunk(_0x29600a, 18);
    for (let _0x54a5be = 0; _0x54a5be < _0x35ee2b.length; _0x54a5be++) {
      const _0x556207 = _0x35ee2b[_0x54a5be];
      let _0x363f43 = Eu.normal;
      0 === _0x54a5be && (_0x363f43 = Eu.erase);
      _0x54a5be === _0x35ee2b.length - 1 && (_0x363f43 = Eu.write);
      await this.transferForResult(Sc.create(6 * _0x54a5be, 6, _0x363f43, new DataView(new Uint8Array(_0x556207).buffer)));
      0 !== _0x54a5be && _0x54a5be !== _0x35ee2b.length - 1 || (await Ng(200));
    }
  }
  async ["setOneRTKeyInfo"](_0x2bf6e2) {
    if (_0x2bf6e2 instanceof Cc) return this.transferForResult(Cc.create(_0x2bf6e2));
    return this.transferForResult(kc.create(_0x2bf6e2));
  }
  async ['getDeadBand']() {
    if (this.isV2) return this.getDeadBandV2();
    return this.transferForResult(Uc.get());
  }
  async ["setDeadBand"](_0x14d0bf, _0x54ad3e) {
    if (this.isV2) return this.setDeadBandV2(_0x14d0bf, _0x54ad3e);
    return this.transferForResult(Uc.create(_0x14d0bf, _0x54ad3e));
  }
  async ["getLightInfo"]() {
    return this.transferForResult(Oc.get());
  }
  async ["setLightInfo"](_0x467343) {
    return this.transferForResult(Oc.create(_0x467343));
  }
  async ['getOneMixAxle'](_0x31699a, _0x2ae30b) {
    return this.transferForResult(Rc.get(_0x31699a, _0x2ae30b));
  }
  async ['getMixAxleAll'](_0x3544b8, _0x3a3292) {
    const _0x513b82 = Math.ceil(_0x3544b8 * _0x3a3292 / 23),
      _0x584d0e = [];
    for (let _0x5f5cac = 0; _0x5f5cac < _0x513b82; _0x5f5cac++) {
      const _0x557ea6 = await this.transferForResult(Bc.get(23 * _0x5f5cac, 23));
      _0x584d0e.push(...new Uint8Array(_0x557ea6.keyTypes.buffer));
    }
    return rt.chunk(_0x584d0e, _0x3a3292).map((_0x475b18, _0x52ca66) => _0x475b18.map((_0x55d626, _0xa2c46f) => Rc.create(_0x52ca66, _0xa2c46f, _0x55d626)));
  }
  async ['setMixAxleAll'](_0x4c65c5) {
    const _0x16d914 = _0x4c65c5.map(_0x1842b0 => _0x1842b0.map(_0x39e28b => _0x39e28b.keyType).flat()).flat(),
      _0x333bff = rt.chunk(_0x16d914, 23);
    for (let _0x18c311 = 0; _0x18c311 < _0x333bff.length; _0x18c311++) {
      const _0x4053e5 = _0x333bff[_0x18c311];
      await this.transferForResult(Bc.create(23 * _0x18c311, 23, new DataView(new Uint8Array(_0x4053e5).buffer)));
    }
  }
  async ["setOneMixAxle"](_0x1a0d93, _0x47746b, _0x56aaf0) {
    return this.transferForResult(Rc.create(_0x1a0d93, _0x47746b, _0x56aaf0));
  }
  async ["setUnifyMixAxle"](_0x2d91b9) {
    return this.transferForResult(Rc.createAll(_0x2d91b9));
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
    const _0x246f77 = await this.transferForResult(xc.get());
    this.version = _0x246f77.version;
    return _0x246f77;
  }
  async ['getKeyboardFeature']() {
    return this.transferForResult(Kc.get());
  }
  async ["setKeyboardFeature"](_0x41992c) {
    return this.transferForResult(Kc.create(_0x41992c));
  }
  async ['resetDefault'](_0x563dc8 = "keyAction") {
    return this.transferForResult("All" === _0x563dc8 ? Ac.getAll() : Ac.getKeyAction());
  }
  async ["getCustomLamplight"](_0x4d4436, _0x3e6915) {
    const _0x55ea38 = Math.ceil(_0x3e6915 / 8),
      _0xfbb7f4 = Array.from({
        length: _0x4d4436
      }, () => []);
    for (let _0x3c8b3e = 0; _0x3c8b3e < _0x4d4436; _0x3c8b3e++) {
      const _0x11fd87 = [];
      for (let _0x28e062 = 0; _0x28e062 < _0x55ea38; _0x28e062++) {
        const _0x354ea6 = await this.transferForResult(Fc.get(_0x3c8b3e, 8 * _0x28e062, 8));
        _0x11fd87.push(..._0x354ea6.colors);
      }
      _0xfbb7f4[_0x3c8b3e] = _0x11fd87;
    }
    return _0xfbb7f4;
  }
  async ['setCustomLamplightOne'](_0x15c748, _0x4ce5b8, _0x546de6) {
    return this.transferForResult(Fc.create(_0x15c748, _0x4ce5b8, 1, [_0x546de6]));
  }
  async ["setCustomLamplight"](_0x21a179) {
    const _0xa485f2 = _0x21a179.length,
      _0x70661e = rt.first(_0x21a179).length,
      _0x4d4765 = Math.ceil(_0x70661e / 8);
    for (let _0x11d6eb = 0; _0x11d6eb < _0xa485f2; _0x11d6eb++) for (let _0x1fb35b = 0; _0x1fb35b < _0x4d4765; _0x1fb35b++) await this.transferForResult(Fc.create(_0x11d6eb, 8 * _0x1fb35b, 8, _0x21a179[_0x11d6eb].slice(8 * _0x1fb35b, 8 * (_0x1fb35b + 1))));
  }
  async ["saveCustomLamplight"]() {
    const _0x1dfe4f = await this.transferForResult(Fc.save());
    await Ng(100);
    return _0x1dfe4f;
  }
  async ["getTapDance"](_0x2608b3) {
    return this.transferForResult(Nc.get(_0x2608b3));
  }
  async ["setTapDance"](_0x4d5868, _0x564b15) {
    return this.transferForResult(Nc.create(_0x4d5868, _0x564b15));
  }
  async ["getLayer"]() {
    return this.transferForResult(Ic.get());
  }
  async ["getDynamicKeyStroke"](_0x1dbbd3) {
    return this.transferForResult(Vc.get(_0x1dbbd3));
  }
  async ["setDynamicKeyStroke"](_0x25bb0d, _0x44a61d) {
    return this.transferForResult(Vc.create(_0x25bb0d, _0x44a61d));
  }
  async ["getRappySnappy"](_0x3b3377) {
    return this.transferForResult(Hc.get(_0x3b3377));
  }
  async ["setRappySnappy"](_0x8e67bd, _0x5e8128) {
    return this.transferForResult(Hc.create(_0x8e67bd, _0x8e67bd, _0x5e8128));
  }
  async ["startCalibration"]() {
    return this.transferForResult(zc.start());
  }
  async ["finishCalibration"]() {
    return this.transferForResult(zc.finish());
  }
  async ["getCalibrationAdcTripCompStatusBuffer"](_0x28f7f5, _0x3b0f58) {
    if (this.isV2) return this.getCalibrationAdcTripCompStatusBufferV2(_0x28f7f5, _0x3b0f58);
    const _0x34bcac = Math.ceil(_0x28f7f5 * _0x3b0f58 / 6),
      _0x42c00b = [];
    for (let _0x398b69 = 0; _0x398b69 < _0x34bcac; _0x398b69++) {
      const _0x2ad117 = await this.transferForResult(zc.getAdcTripCompStatusBuffer(6 * _0x398b69, 6));
      _0x42c00b.push(..._0x2ad117.adcTripCompStatusList);
    }
    return rt.chunk(_0x42c00b, _0x3b0f58);
  }
  async ['getCalibrationAdcTripInitStatusBuffer'](_0x4a5efb, _0x4d451e) {
    const _0x1c20eb = Math.ceil(_0x4a5efb * _0x4d451e / 24),
      _0x5759a7 = [];
    for (let _0x295771 = 0; _0x295771 < _0x1c20eb; _0x295771++) {
      const _0x54d5ac = await this.transferForResult(zc.getInitStatusBuffer(24 * _0x295771, 24));
      _0x5759a7.push(..._0x54d5ac.initStatusList);
    }
    return rt.chunk(_0x5759a7, _0x4d451e);
  }
  async ['getCalibrationAdcTripCompStatusBufferV2'](_0x387f7b, _0x10c306) {
    const _0x39362e = Math.ceil(_0x387f7b * _0x10c306 / 4),
      _0x193fc2 = [];
    for (let _0x4a3334 = 0; _0x4a3334 < _0x39362e; _0x4a3334++) {
      const _0x309124 = await this.transferForResult(zc.getAdcTripCompStatusBuffer(4 * _0x4a3334, 4));
      _0x193fc2.push(..._0x309124.adcTripCompStatusListV2);
    }
    return rt.chunk(_0x193fc2, _0x10c306);
  }
  async ["getBottomOptimizeSwitch"]() {
    return this.transferForResult(Pc.get());
  }
  async ["setBottomOptimizeSwitch"](_0x6477) {
    return this.transferForResult(Pc.create(_0x6477));
  }
  async ["getGameModeSwitch"]() {
    if (this.isV2) return this.transferForResult(Mc.get());
    return Mc.create(0);
  }
  async ['setGameModeSwitch'](_0x44adbf) {
    return this.transferForResult(Mc.create(_0x44adbf));
  }
  async ["getBoxLightInfo"]() {
    return this.transferForResult(BoxLightInfo.get());
  }
  async ["setBoxLightInfo"](_0x5c0f6b) {
    return this.transferForResult(BoxLightInfo.create(_0x5c0f6b));
  }
  async ["transferForResult"](_0x23e0a5) {
    _0x23e0a5.raw = await this.transferForResultAsync(_0x23e0a5.toUint8Array());
    return _0x23e0a5;
  }
  async ['getTogThAllV2'](_0x5464bc, _0x57045b) {
    const _0x59169f = Math.ceil(_0x5464bc * _0x57045b / 12),
      _0x387b1d = [];
    for (let _0x59194a = 0; _0x59194a < _0x59169f; _0x59194a++) {
      const _0x3d25cb = vc.get(12 * _0x59194a, 12),
        _0x113c0d = await this.transferForResult(_0x3d25cb);
      _0x387b1d.push(...new Uint8Array(_0x113c0d.togThsV2.buffer));
    }
    return rt.chunk(rt.chunk(_0x387b1d, 2), _0x57045b).map((_0x3942dd, _0x5e6f29) => _0x3942dd.map((_0x49c1fb, _0x4eefd4) => _c.create(_0x5e6f29, _0x4eefd4, 0.01 * new DataView(new Uint8Array(_0x49c1fb).buffer).getUint16(0))));
  }
  async ['getRTKeyInfoAllV2'](_0x54ccd2, _0x133c9b) {
    const _0x35b500 = Math.ceil(_0x54ccd2 * _0x133c9b / 4),
      _0x501d3b = [];
    for (let _0x163510 = 0; _0x163510 < _0x35b500; _0x163510++) {
      const _0x52f24a = Sc.get(4 * _0x163510, 4),
        _0x237278 = await this.transferForResult(_0x52f24a);
      _0x501d3b.push(...new Uint8Array(_0x237278.rtV2.buffer));
    }
    return rt.chunk(rt.chunk(_0x501d3b, 5), _0x133c9b).map((_0x3c11a3, _0x30b93a) => _0x3c11a3.map((_0x6f976, _0x243fa2) => {
      const _0x117fd5 = Cc.get(_0x30b93a, _0x243fa2),
        [_0x121f2d, _0x1e2674, _0x1d36d1, _0x2cc4ac, _0x221920] = _0x6f976;
      _0x117fd5.on = _0x121f2d;
      _0x117fd5.release = 0.01 * new DataView(new Uint8Array([_0x1e2674, _0x1d36d1]).buffer).getUint16(0);
      _0x117fd5.press = 0.01 * new DataView(new Uint8Array([_0x2cc4ac, _0x221920]).buffer).getUint16(0);
      return _0x117fd5;
    }));
  }
  async ["setRTKeyInfoAllV2"](_0x26da4d) {
    const _0x161c8f = _0x26da4d.map(_0x25bc92 => _0x25bc92.map(_0x2a1f94 => [_0x2a1f94.on, ..._0x2a1f94.releaseArr, ..._0x2a1f94.pressArr]).flat()).flat(),
      _0xed4b47 = rt.chunk(_0x161c8f, 20);
    for (let _0x3bd0eb = 0; _0x3bd0eb < _0xed4b47.length; _0x3bd0eb++) {
      const _0x32f4d2 = _0xed4b47[_0x3bd0eb];
      let _0x3ea96a = Eu.normal;
      0 === _0x3bd0eb && (_0x3ea96a = Eu.erase);
      _0x3bd0eb === _0xed4b47.length - 1 && (_0x3ea96a = Eu.write);
      const _0x5d7720 = Sc.create(4 * _0x3bd0eb, 4, _0x3ea96a, new DataView(new Uint8Array(_0x32f4d2).buffer));
      await this.transferForResult(_0x5d7720);
      0 !== _0x3bd0eb && _0x3bd0eb !== _0xed4b47.length - 1 || (await Ng(200));
    }
  }
  async ["getDeadBandV2"]() {
    return this.transferForResult(Dc.get());
  }
  async ['setDeadBandV2'](_0x257f9a, _0x46ea4e) {
    return this.transferForResult(Dc.create(_0x257f9a, _0x46ea4e));
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
  Ll = Bl.map(_0x4fd732 => _0x4fd732.filters).flat().map(_0x4f3ea8 => {
    const {
      boot: _0x10a29b
    } = _0x4f3ea8;
    return {
      ..._0x4f3ea8,
      ..._0x10a29b
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
    filters: [...Vl.map(_0x1a944a => _0x1a944a.filters).flat().map(_0x2ece66 => {
      const {
        boot: _0x86a127
      } = _0x2ece66;
      return {
        ..._0x2ece66,
        ..._0x86a127
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
    filters: [...Fl.map(_0x2ba64b => _0x2ba64b.filters).flat().map(_0x6917be => {
      const {
        boot: _0x34b41f
      } = _0x6917be;
      return {
        ..._0x6917be,
        ..._0x34b41f
      };
    })]
  }],
  Gl = [...Bl, ...Vl, ...Fl],
  zl = Gl.map(_0xf1da7 => _0xf1da7.filters).flat().map(_0x4b75f9 => null == _0x4b75f9 ? void 0 : _0x4b75f9.boot).filter(Boolean),
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
  constructor(_0x172192, _0x3c49b8) {
    V(this, "raw");
    let _0x58f7ba = _0x172192 ? _0x172192.buffer : new ArrayBuffer(O.SIZE);
    this.raw = new DataView(_0x58f7ba);
    this.commandId = _0x3c49b8;
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
  set ["commandId"](_0x12133f) {
    this.raw.setUint8(0, _0x12133f);
  }
  ["toStringTx"]() {
    return "requestCode: " + this.commandId + ", commandId: " + this.commandId;
  }
  ["toStringRx"]() {
    return 'requestCode:\x20' + this.commandId + ", commandId: " + this.commandId;
  }
}, V(O, "SIZE", 64), V(O, "baseOffset", 1), O);
var ql = (_0x34e03a => (_0x34e03a[_0x34e03a.GetFirmwareVersion = 128] = 'GetFirmwareVersion', _0x34e03a[_0x34e03a.GetMouseInfo = 129] = "GetMouseInfo", _0x34e03a[_0x34e03a.SetMouseInfo = 1] = "SetMouseInfo", _0x34e03a[_0x34e03a.SetReportRate = 32] = "SetReportRate", _0x34e03a[_0x34e03a.SetDpiStage = 33] = "SetDpiStage", _0x34e03a[_0x34e03a.SetRGB = 34] = "SetRGB", _0x34e03a[_0x34e03a.GetConfigData = 130] = "GetConfigData", _0x34e03a[_0x34e03a.SetRGBColor = 35] = 'SetRGBColor', _0x34e03a[_0x34e03a.GetRGBColor = 163] = "GetRGBColor", _0x34e03a[_0x34e03a.SetKeyMatrix = 36] = 'SetKeyMatrix', _0x34e03a[_0x34e03a.GetKeyMatrix = 164] = 'GetKeyMatrix', _0x34e03a[_0x34e03a.SetDpiConfig = 37] = "SetDpiConfig", _0x34e03a[_0x34e03a.GetDpiConfig = 165] = 'GetDpiConfig', _0x34e03a[_0x34e03a.SetDpiValue = 38] = 'SetDpiValue', _0x34e03a[_0x34e03a.GetDpiValue = 166] = 'GetDpiValue', _0x34e03a[_0x34e03a.SetDpiColor = 39] = "SetDpiColor", _0x34e03a[_0x34e03a.GetDpiColor = 167] = "GetDpiColor", _0x34e03a[_0x34e03a.SetSensorLift = 40] = "SetSensorLift", _0x34e03a[_0x34e03a.GetSensorLift = 168] = "GetSensorLift", _0x34e03a[_0x34e03a.SetMouseSpecialOption = 42] = "SetMouseSpecialOption", _0x34e03a[_0x34e03a.GetMouseSpecialOption = 170] = "GetMouseSpecialOption", _0x34e03a[_0x34e03a.SetMotionLessSleepTime = 43] = "SetMotionLessSleepTime", _0x34e03a[_0x34e03a.GetMotionLessSleepTime = 171] = "GetMotionLessSleepTime", _0x34e03a[_0x34e03a.SetKeyDebounce = 44] = "SetKeyDebounce", _0x34e03a[_0x34e03a.GetKeyDebounce = 172] = "GetKeyDebounce", _0x34e03a[_0x34e03a.SetMacroKey = 4] = "SetMacroKey", _0x34e03a[_0x34e03a.GetMacroKey = 132] = "GetMacroKey", _0x34e03a[_0x34e03a.ResetDefaultSettings = 10] = "ResetDefaultSettings", _0x34e03a[_0x34e03a.Pair = 3] = 'Pair', _0x34e03a[_0x34e03a.Set8KDongleRgb = 48] = 'Set8KDongleRgb', _0x34e03a[_0x34e03a.Get8KDongleRgb = 176] = 'Get8KDongleRgb', _0x34e03a[_0x34e03a.CheckPairStatus = 50] = "CheckPairStatus", _0x34e03a[_0x34e03a.ClearPairPipe = 53] = "ClearPairPipe", _0x34e03a[_0x34e03a.GetScPairMode = 56] = "GetScPairMode", _0x34e03a[_0x34e03a.SetPairMode = 30] = 'SetPairMode', _0x34e03a[_0x34e03a.GetPairStatus = 158] = "GetPairStatus", _0x34e03a[_0x34e03a.ReportMouseStatus = 250] = "ReportMouseStatus", _0x34e03a))(ql || {}),
  Jl = (_0x5547df => (_0x5547df[_0x5547df.Start = 1] = "Start", _0x5547df[_0x5547df.Exit = 15] = "Exit", _0x5547df))(Jl || {}),
  Xl = (_0x2f5890 => (_0x2f5890[_0x2f5890.Success = 1] = "Success", _0x2f5890[_0x2f5890.Waiting = 0] = "Waiting", _0x2f5890))(Xl || {}),
  Zl = (_0x35e6da => (_0x35e6da[_0x35e6da.dongle_1k = 0] = "dongle_1k", _0x35e6da[_0x35e6da.dongle_8k = 1] = "dongle_8k", _0x35e6da[_0x35e6da.wired = 2] = "wired", _0x35e6da))(Zl || {}),
  Ql = (_0x19b35e => (_0x19b35e[_0x19b35e.GeneralKey = 1] = "GeneralKey", _0x19b35e[_0x19b35e.MouseKey = 2] = 'MouseKey', _0x19b35e[_0x19b35e.SystemKey = 4] = 'SystemKey', _0x19b35e[_0x19b35e.MediaKey = 3] = "MediaKey", _0x19b35e[_0x19b35e.MacroKey = 5] = "MacroKey", _0x19b35e[_0x19b35e.DpiKey = 11] = "DpiKey", _0x19b35e[_0x19b35e.SpecialKey = 240] = 'SpecialKey', _0x19b35e[_0x19b35e.FireKey = 12] = "FireKey", _0x19b35e[_0x19b35e.RGBKey = 10] = "RGBKey", _0x19b35e))(Ql || {}),
  ef = (_0x5612bb => (_0x5612bb[_0x5612bb.Power = 1] = 'Power', _0x5612bb[_0x5612bb.Sleep = 2] = "Sleep", _0x5612bb[_0x5612bb.Wake = 4] = "Wake", _0x5612bb))(ef || {}),
  tf = (_0x533ff5 => (_0x533ff5[_0x533ff5.Left = 240] = "Left", _0x533ff5[_0x533ff5.Right = 241] = "Right", _0x533ff5[_0x533ff5.Middle = 242] = "Middle", _0x533ff5[_0x533ff5.Back = 243] = 'Back', _0x533ff5[_0x533ff5.Forward = 244] = 'Forward', _0x533ff5[_0x533ff5.WheelUp = 245] = "WheelUp", _0x533ff5[_0x533ff5.WheelDown = 246] = "WheelDown", _0x533ff5[_0x533ff5.AcPanLeft = 247] = 'AcPanLeft', _0x533ff5[_0x533ff5.AcPanRight = 248] = "AcPanRight", _0x533ff5))(tf || {}),
  rf = (_0x2d59ac => (_0x2d59ac[_0x2d59ac.DPICycle = 3] = "DPICycle", _0x2d59ac[_0x2d59ac.DPIPlus = 1] = "DPIPlus", _0x2d59ac[_0x2d59ac.DPIMinus = 2] = "DPIMinus", _0x2d59ac[_0x2d59ac.DPIValue = 4] = "DPIValue", _0x2d59ac))(rf || {}),
  sf = (_0x435f73 => (_0x435f73[_0x435f73.Fn = 0] = 'Fn', _0x435f73[_0x435f73.Profile = 1] = "Profile", _0x435f73[_0x435f73.Report = 2] = 'Report', _0x435f73[_0x435f73.Snipe = 3] = 'Snipe', _0x435f73[_0x435f73.TabFunction = 4] = "TabFunction", _0x435f73))(sf || {}),
  nf = (_0x434be8 => (_0x434be8[_0x434be8.ProfilePlus = 1] = 'ProfilePlus', _0x434be8[_0x434be8.ProfileMinus = 2] = "ProfileMinus", _0x434be8[_0x434be8.ProfileLoop = 3] = "ProfileLoop", _0x434be8[_0x434be8.ProfileValue = 4] = "ProfileValue", _0x434be8))(nf || {}),
  af = (_0x5c494 => (_0x5c494[_0x5c494.ReportPlus = 1] = 'ReportPlus', _0x5c494[_0x5c494.ReportMinus = 2] = 'ReportMinus', _0x5c494[_0x5c494.ReportLoop = 3] = 'ReportLoop', _0x5c494[_0x5c494.ReportValue = 4] = 'ReportValue', _0x5c494))(af || {}),
  of = (_0x8ad09b => (_0x8ad09b[_0x8ad09b.MacroType_Cycle = 1] = "MacroType_Cycle", _0x8ad09b[_0x8ad09b.MacroType_CycleUntilPressed = 2] = "MacroType_CycleUntilPressed", _0x8ad09b[_0x8ad09b.MacroType_CycleUntilReleased = 3] = 'MacroType_CycleUntilReleased', _0x8ad09b))(of || {}),
  uf = (_0x17667a => (_0x17667a[_0x17667a.Hz1000 = 1] = 'Hz1000', _0x17667a[_0x17667a.Hz500 = 2] = "Hz500", _0x17667a[_0x17667a.Hz250 = 4] = "Hz250", _0x17667a[_0x17667a.Hz125 = 8] = "Hz125", _0x17667a[_0x17667a.Hz2000 = 33] = "Hz2000", _0x17667a[_0x17667a.Hz4000 = 65] = "Hz4000", _0x17667a[_0x17667a.Hz8000 = 129] = 'Hz8000', _0x17667a))(uf || {}),
  cf = (_0x1f87c3 => (_0x1f87c3[_0x1f87c3.Down = 0] = "Down", _0x1f87c3[_0x1f87c3.Up = 1] = 'Up', _0x1f87c3))(cf || {}),
  lf = (_0xd67dee => (_0xd67dee[_0xd67dee.MotionSync = 1] = "MotionSync", _0xd67dee[_0xd67dee.LinearCorrection = 2] = "LinearCorrection", _0xd67dee[_0xd67dee.Ripple = 4] = "Ripple", _0xd67dee[_0xd67dee.CorderMode = 8] = "CorderMode", _0xd67dee[_0xd67dee.DpiRgb = 16] = "DpiRgb", _0xd67dee[_0xd67dee.LongDistance = 32] = "LongDistance", _0xd67dee))(lf || {}),
  ff = (_0x284fba => (_0x284fba[_0x284fba.All = 255] = "All", _0x284fba[_0x284fba.Key = 1] = 'Key', _0x284fba[_0x284fba.Dpi = 2] = 'Dpi', _0x284fba[_0x284fba.Rgb = 4] = "Rgb", _0x284fba))(ff || {}),
  hf = (_0x34f88f => (_0x34f88f[_0x34f88f.Off = 0] = "Off", _0x34f88f[_0x34f88f.Static = 1] = 'Static', _0x34f88f[_0x34f88f.Breath = 2] = "Breath", _0x34f88f[_0x34f88f.Neon = 3] = "Neon", _0x34f88f[_0x34f88f.ClickLight = 4] = "ClickLight", _0x34f88f[_0x34f88f.WithBattery = 5] = 'WithBattery', _0x34f88f[_0x34f88f.DPIBreath = 10] = "DPIBreath", _0x34f88f))(hf || {});
let df = class ButtonAction {
    constructor(_0xb08d8d, _0x1ed6a6) {
      V(this, "dataView");
      V(this, 'offset');
      this.dataView = _0xb08d8d;
      this.offset = _0x1ed6a6;
    }
    get ["i18nText"]() {
      return "Unknown";
    }
    static ["createDataView"](_0x2b25a6, _0x20fcfe, _0x126038, _0x5a4351) {
      const _0x5cdeea = new DataView(new ArrayBuffer(4));
      _0x5cdeea.setUint8(3, _0x2b25a6);
      _0x5cdeea.setUint8(2, _0x20fcfe);
      _0x5cdeea.setUint8(1, _0x126038);
      _0x5cdeea.setUint8(0, _0x5a4351);
      return _0x5cdeea;
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
    static ["fromDataView"](_0xde06f6, _0x4ccc51) {
      switch (_0xde06f6.getUint8(_0x4ccc51 + 3)) {
        case Ql.GeneralKey:
          return new gf(_0xde06f6, _0x4ccc51);
        case Ql.MouseKey:
          return new pf(_0xde06f6, _0x4ccc51);
        case Ql.SystemKey:
          return new yf(_0xde06f6, _0x4ccc51);
        case Ql.MediaKey:
          return new bf(_0xde06f6, _0x4ccc51);
        case Ql.MacroKey:
          return new _f(_0xde06f6, _0x4ccc51);
        case Ql.DpiKey:
          return new kf(_0xde06f6, _0x4ccc51);
        case Ql.SpecialKey:
          return new Sf(_0xde06f6, _0x4ccc51);
        case Ql.FireKey:
          return new Df(_0xde06f6, _0x4ccc51);
        case Ql.RGBKey:
          return new RGBKeyAction(_0xde06f6, _0x4ccc51);
        default:
          return new ButtonAction(_0xde06f6, _0x4ccc51);
      }
    }
    ['toString']() {
      return Array.from([this.keyValue1, this.keyValue2, this.keyValue3, this.keyClass]).map(_0x330c4c => _0x330c4c.toString().padStart(2, '0')).join('');
    }
  },
  gf = (V(x = class extends df {
    get ["keyCode"]() {
      return this.keyValue1;
    }
    static ["create"](_0x2d50bb, _0x160f92 = 0) {
      return new x(super.createDataView(this.TYPE, 0, _0x160f92, _0x2d50bb), 0);
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
  static ["create"](_0x143d50, _0x479592 = 0) {
    return new _MouseKeyAction(super.createDataView(this.TYPE, 0, _0x479592, _0x143d50), 0);
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
    static ["create"](_0x59341c) {
      return new K(super.createDataView(this.TYPE, 0, 0, _0x59341c), 0);
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
  static ['create'](_0x489dfe, _0x44501e = 0) {
    return new _MediaKeyAction(super.createDataView(this.TYPE, 0, _0x44501e, _0x489dfe), 0);
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
    static ["create"](_0x3e3340, _0x4639aa) {
      return new A(super.createDataView(this.TYPE, _0x3e3340, 0, _0x4639aa), 0);
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
  static ["create"](_0x4e9fc5) {
    return new _DpiKeyAction(super.createDataView(this.TYPE, 0, 0, _0x4e9fc5), 0);
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
  static ["createProfile"](_0x3af879, _0x323f56 = 0) {
    return new _SpecialKeyAction(super.createDataView(this.TYPE, sf.Profile, _0x323f56, _0x3af879), 0);
  }
  static ["createReport"](_0x3aa04e, _0x2807ef = 0) {
    return new _SpecialKeyAction(super.createDataView(this.TYPE, sf.Report, _0x2807ef, _0x3aa04e), 0);
  }
  static ["createSnipe"](_0x5ed36e) {
    const _0x3941b3 = new DataView(new ArrayBuffer(2));
    _0x3941b3.setUint16(0, _0x5ed36e);
    return new _SpecialKeyAction(super.createDataView(this.TYPE, sf.Snipe, _0x3941b3.getUint8(0), _0x3941b3.getUint8(1)), 0);
  }
  static ["createTabFunction"](_0x1e906e, _0x5ee486 = 0) {
    return new _SpecialKeyAction(super.createDataView(this.TYPE, sf.TabFunction, _0x1e906e, _0x5ee486), 0);
  }
  static ['create'](_0x1d11b1) {
    return new _SpecialKeyAction(super.createDataView(this.TYPE, _0x1d11b1, 0, 0), 0);
  }
};
V(Cf, "TYPE", Ql.SpecialKey);
let Sf = Cf;
const Uf = class _FireKeyAction extends df {
  get ["i18nText"]() {
    return "key.flameKey";
  }
  static ['create'](_0x117993 = 0, _0x4dde34 = 0, _0x574706) {
    return new _FireKeyAction(super.createDataView(this.TYPE, _0x117993, _0x4dde34, _0x574706), 0);
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
  set ["type"](_0x512423) {
    this.raw.setUint8(this.baseOffset, _0x512423);
  }
  set ["profile"](_0x541ef0) {
    this.raw.setUint8(this.baseOffset + 2, _0x541ef0);
  }
  static ["create"](_0x448015) {
    const _0x28d101 = new SetMouseInfo(this.getData(), ql.SetMouseInfo);
    _0x28d101.type = 0;
    _0x28d101.profile = _0x448015;
    return _0x28d101;
  }
}
let Of = class SetReportRate extends $l {
  set ["reportRate"](_0xa12c52) {
    this.raw.setUint8(this.baseOffset + 2, _0xa12c52);
  }
  static ["create"](_0x5f4c86) {
    const _0x53855a = new SetReportRate(this.getData(), ql.SetReportRate);
    _0x53855a.reportRate = _0x5f4c86;
    return _0x53855a;
  }
};
class GetDpiConfig extends $l {
  get ["dpiCount"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['dpiCount'](_0x1601cf) {
    this.raw.setUint8(this.baseOffset, _0x1601cf);
  }
  get ["dpiEnable"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  static ["get"]() {
    return new GetDpiConfig(this.getData(), ql.GetDpiConfig);
  }
}
class SetDpiConfig extends $l {
  set ["dpiCount"](_0x43971d) {
    this.raw.setUint8(this.baseOffset + 2, _0x43971d);
  }
  set ["dpiEnable"](_0x370eb7) {
    this.raw.setUint8(this.baseOffset + 3, _0x370eb7);
  }
  static ["create"](_0x3c2ca4, _0x299fed) {
    const _0x414a39 = new SetDpiConfig(this.getData(), ql.SetDpiConfig);
    _0x414a39.dpiCount = _0x3c2ca4;
    _0x414a39.dpiEnable = _0x299fed;
    return _0x414a39;
  }
}
class SetDpiStage extends $l {
  set ['dpi'](_0x56db3e) {
    this.raw.setUint8(this.baseOffset + 2, _0x56db3e);
  }
  static ['create'](_0x366921) {
    const _0x1b53bc = new SetDpiStage(this.getData(), ql.SetDpiStage);
    _0x1b53bc.dpi = _0x366921;
    return _0x1b53bc;
  }
}
class SetRGB extends $l {
  set ["rgbEffect"](_0x4fd385) {
    this.raw.setUint8(this.baseOffset + 2, _0x4fd385);
  }
  set ["rgbBrightness"](_0x278815) {
    this.raw.setUint8(this.baseOffset + 3, _0x278815);
  }
  set ["rgbSpeed"](_0x5286a9) {
    this.raw.setUint8(this.baseOffset + 4, _0x5286a9);
  }
  set ["rgbColor"](_0x5b3ab8) {
    this.raw.setUint8(this.baseOffset + 5, _0x5b3ab8);
  }
  static ['create'](_0x264d1a) {
    const _0x3b5e3e = new SetRGB(this.getData(), ql.SetRGB);
    _0x3b5e3e.rgbEffect = _0x264d1a.rgbEffect;
    _0x3b5e3e.rgbBrightness = _0x264d1a.rgbBrightness;
    _0x3b5e3e.rgbSpeed = _0x264d1a.rgbSpeed;
    _0x3b5e3e.rgbColor = _0x264d1a.rgbColor;
    return _0x3b5e3e;
  }
}
class GetConfigData extends $l {
  get ['reportRate']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['reportRate'](_0x5cd2ec) {
    this.raw.setUint8(this.baseOffset, _0x5cd2ec);
  }
  get ["currentDpiStage"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ["currentDpiStage"](_0x3bab06) {
    this.raw.setUint8(this.baseOffset + 1, _0x3bab06);
  }
  get ["rgbEffect"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["rgbEffect"](_0xfdb452) {
    this.raw.setUint8(this.baseOffset + 2, _0xfdb452);
  }
  get ["rgbBrightness"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ['rgbBrightness'](_0x7f3291) {
    this.raw.setUint8(this.baseOffset + 3, _0x7f3291);
  }
  get ["rgbSpeed"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["rgbSpeed"](_0x382d78) {
    this.raw.setUint8(this.baseOffset + 4, _0x382d78);
  }
  get ["rgbColor"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["rgbColor"](_0x3ea583) {
    this.raw.setUint8(this.baseOffset + 5, _0x3ea583);
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
    }, (_0x49ff25, _0x532627) => ({
      colorId: _0x532627,
      r: this.raw.getUint8(this.baseOffset + 3 * _0x532627),
      g: this.raw.getUint8(this.baseOffset + 1 + 3 * _0x532627),
      b: this.raw.getUint8(this.baseOffset + 2 + 3 * _0x532627)
    }));
  }
  static ["get"](_0x12188a = 255) {
    const _0x975b1a = this.getData();
    _0x975b1a.setUint8(this.baseOffset + 1, _0x12188a);
    return new GetRGBColor(_0x975b1a, ql.GetRGBColor);
  }
}
class SetDpiValue extends $l {
  set ["dpiId"](_0x5e0209) {
    this.raw.setUint8(this.baseOffset + 1, _0x5e0209);
  }
  set ["value"](_0x4c1900) {
    let _0x3c7af9 = 255 & _0x4c1900,
      _0x2b9662 = _0x4c1900 >>> 8;
    this.raw.setUint8(this.baseOffset + 2, _0x3c7af9);
    this.raw.setUint8(this.baseOffset + 3, _0x2b9662);
  }
  static ["create"](_0x4a3f57, _0x448f25) {
    const _0x10ef38 = new SetDpiValue(this.getData(), ql.SetDpiValue);
    _0x10ef38.dpiId = _0x4a3f57;
    _0x10ef38.value = _0x448f25;
    return _0x10ef38;
  }
}
class GetDpiValue extends $l {
  get ["dpiValues"]() {
    return Array.from({
      length: 8
    }, (_0x2bd128, _0x25fb95) => ({
      dpiId: _0x25fb95,
      value: this.raw.getUint8(this.baseOffset + 2 * _0x25fb95) + (this.raw.getUint8(this.baseOffset + 2 * _0x25fb95 + 1) << 8)
    }));
  }
  set ['dpiValues'](_0x2d83d4) {
    for (let _0x55c61e = 0; _0x55c61e < 8; _0x55c61e++) {
      const {
        value: _0x54397
      } = _0x2d83d4[_0x55c61e];
      let _0x224973 = 255 & _0x54397,
        _0x4354a2 = _0x54397 >> 8;
      this.raw.setUint8(this.baseOffset + 2 * _0x55c61e, _0x224973);
      this.raw.setUint8(this.baseOffset + 2 * _0x55c61e + 1, _0x4354a2);
    }
  }
  static ["get"](_0x2acadd = 255) {
    const _0x552e51 = this.getData();
    _0x552e51.setUint8(this.baseOffset + 1, _0x2acadd);
    return new GetDpiValue(_0x552e51, ql.GetDpiValue);
  }
}
class SetDpiColor extends $l {
  set ['dpiId'](_0x58911a) {
    this.raw.setUint8(this.baseOffset + 1, _0x58911a);
  }
  set ['r'](_0x253a19) {
    this.raw.setUint8(this.baseOffset + 2, _0x253a19);
  }
  set ['g'](_0x5c4e24) {
    this.raw.setUint8(this.baseOffset + 3, _0x5c4e24);
  }
  set ['b'](_0x5195fb) {
    this.raw.setUint8(this.baseOffset + 4, _0x5195fb);
  }
  static ['create'](_0x3effda, _0x53fb4a, _0x48869a, _0x4d58db) {
    const _0x1ef1a2 = new SetDpiColor(this.getData(), ql.SetDpiColor);
    _0x1ef1a2.dpiId = _0x3effda;
    _0x1ef1a2.r = _0x53fb4a;
    _0x1ef1a2.g = _0x48869a;
    _0x1ef1a2.b = _0x4d58db;
    return _0x1ef1a2;
  }
}
class GetDpiColor extends $l {
  get ["dpiColors"]() {
    return Array.from({
      length: 8
    }, (_0x33d979, _0x58d143) => ({
      dpiId: _0x58d143,
      r: this.raw.getUint8(this.baseOffset + 3 * _0x58d143),
      g: this.raw.getUint8(this.baseOffset + 1 + 3 * _0x58d143),
      b: this.raw.getUint8(this.baseOffset + 2 + 3 * _0x58d143)
    }));
  }
  set ["dpiColors"](_0x375efe) {
    for (let _0x5ef28a = 0; _0x5ef28a < 8; _0x5ef28a++) {
      this.raw.setUint8(this.baseOffset + 3 * _0x5ef28a, _0x375efe[_0x5ef28a].r);
      this.raw.setUint8(this.baseOffset + 1 + 3 * _0x5ef28a, _0x375efe[_0x5ef28a].g);
      this.raw.setUint8(this.baseOffset + 2 + 3 * _0x5ef28a, _0x375efe[_0x5ef28a].b);
    }
  }
  static ["get"](_0x4da613 = 255) {
    const _0xfdb886 = this.getData();
    _0xfdb886.setUint8(this.baseOffset + 1, _0x4da613);
    return new GetDpiColor(_0xfdb886, ql.GetDpiColor);
  }
}
class SetMouseSpecialOption extends $l {
  set ["specialOption"](_0x4a04a8) {
    this.raw.setUint8(this.baseOffset + 2, _0x4a04a8);
  }
  static ["create"](_0x5364ce) {
    const _0x5530fb = new SetMouseSpecialOption(this.getData(), ql.SetMouseSpecialOption);
    _0x5530fb.specialOption = _0x5364ce;
    return _0x5530fb;
  }
}
class GetMouseSpecialOption extends $l {
  get ['specialOption']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["specialOption"](_0x554c77) {
    this.raw.setUint8(this.baseOffset, _0x554c77);
  }
  static ["get"]() {
    return new GetMouseSpecialOption(this.getData(), ql.GetMouseSpecialOption);
  }
}
class SetMotionLessSleepTime extends $l {
  set ["time"](_0x193371) {
    this.raw.setUint8(this.baseOffset + 2, _0x193371);
  }
  static ["create"](_0x56f77c) {
    const _0x4bed97 = new SetMotionLessSleepTime(this.getData(), ql.SetMotionLessSleepTime);
    _0x4bed97.time = _0x56f77c;
    return _0x4bed97;
  }
}
class GetKeyDebounce extends $l {
  get ["debounce"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["debounce"](_0x1ee610) {
    this.raw.setUint8(this.baseOffset, _0x1ee610);
  }
  static ["get"]() {
    return new GetKeyDebounce(this.getData(), ql.GetKeyDebounce);
  }
}
class SetKeyDebounce extends $l {
  set ["debounce"](_0xe1c6e1) {
    this.raw.setUint8(this.baseOffset + 2, _0xe1c6e1);
  }
  static ["create"](_0x397e94) {
    const _0x49dab1 = new SetKeyDebounce(this.getData(), ql.SetKeyDebounce);
    _0x49dab1.debounce = _0x397e94;
    return _0x49dab1;
  }
}
class GetMotionLessSleepTime extends $l {
  get ["motionLessSleepTime"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["motionLessSleepTime"](_0x517928) {
    this.raw.setUint8(this.baseOffset, _0x517928);
  }
  static ["get"]() {
    return new GetMotionLessSleepTime(this.getData(), ql.GetMotionLessSleepTime);
  }
}
class SetSensorLift extends $l {
  set ['lift'](_0x3c85ec) {
    this.raw.setUint8(this.baseOffset + 2, _0x3c85ec);
  }
  static ["create"](_0x2c8bf8) {
    const _0xbefe27 = new SetSensorLift(this.getData(), ql.SetSensorLift);
    _0xbefe27.lift = _0x2c8bf8;
    return _0xbefe27;
  }
}
class GetSensorLift extends $l {
  get ['lift']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["lift"](_0x278de4) {
    this.raw.setUint8(this.baseOffset, _0x278de4);
  }
  static ['get']() {
    return new GetSensorLift(this.getData(), ql.GetSensorLift);
  }
}
class SetMouseMatrix extends $l {
  get ['key']() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ["key"](_0x52d1e2) {
    this.raw.setUint8(this.baseOffset + 1, _0x52d1e2);
  }
  get ["button"]() {
    return df.fromDataView(this.raw, this.baseOffset + 2);
  }
  set ["button"](_0x357e3d) {
    const {
      keyClass: _0x5aa4bc,
      keyValue1: _0x4f3617,
      keyValue2: _0x4daa9f,
      keyValue3: _0x34ba72
    } = _0x357e3d;
    this.raw.setUint8(this.baseOffset + 2, _0x34ba72);
    this.raw.setUint8(this.baseOffset + 3, _0x4daa9f);
    this.raw.setUint8(this.baseOffset + 4, _0x4f3617);
    this.raw.setUint8(this.baseOffset + 5, _0x5aa4bc);
  }
  static ['create'](_0xbb2bb, _0x250e12) {
    const _0x2e214e = new SetMouseMatrix(this.getData(), ql.SetKeyMatrix);
    _0x2e214e.key = _0xbb2bb;
    _0x2e214e.button = _0x250e12;
    return _0x2e214e;
  }
}
class MouseMatrix extends $l {
  get ["matrixList"]() {
    if (this.commandId !== ql.GetKeyMatrix) return [];
    return Array.from({
      length: 10
    }, (_0xc3c269, _0x4eb8b4) => df.fromDataView(this.raw, this.baseOffset + 4 * _0x4eb8b4));
  }
  set ["keyId"](_0x64a9e2) {
    this.raw.setUint8(this.baseOffset + 1, _0x64a9e2);
  }
  set ["keyCode"](_0xb2b0f2) {
    for (let _0x1916c7 = 0; _0x1916c7 < 4; _0x1916c7++) this.raw.setUint8(this.baseOffset + 2 + _0x1916c7, _0xb2b0f2[_0x1916c7]);
  }
  static ["create"](_0x2637a4, _0x3ede6e) {
    const _0x3486e5 = new MouseMatrix(this.getData(), ql.SetKeyMatrix);
    _0x3486e5.keyCode = _0x3ede6e;
    _0x3486e5.keyId = _0x2637a4;
    return _0x3486e5;
  }
  static ['get'](_0x3e23d9 = 255) {
    const _0x502b87 = this.getData();
    _0x502b87.setUint8(this.baseOffset + 1, _0x3e23d9);
    return new MouseMatrix(_0x502b87, ql.GetKeyMatrix);
  }
}
let xf = class SetMacroKey extends $l {
  set ['macroIndex'](_0x41a63d) {
    this.raw.setUint8(this.baseOffset, _0x41a63d);
  }
  set ["length"](_0x18555b) {
    this.raw.setUint8(this.baseOffset + 1, _0x18555b);
  }
  static ["create"](_0x410f7f, _0x4d0bff) {
    const _0x1850cd = new SetMacroKey(this.getData(), ql.SetMacroKey);
    _0x1850cd.macroIndex = _0x410f7f;
    _0x1850cd.length = _0x4d0bff;
    return _0x1850cd;
  }
};
const Kf = class _SetMacroDetail extends $l {
  get ["count"]() {
    const _0x2e2980 = this.raw.getUint8(0);
    return this.raw.getUint8(_SetMacroDetail.baseOffset) << 8 | _0x2e2980;
  }
  set ["count"](_0x305ffb) {
    let _0x146f7d = 255 & _0x305ffb,
      _0x5b2654 = _0x305ffb >>> 8;
    this.raw.setUint8(0, _0x146f7d);
    this.raw.setUint8(_SetMacroDetail.baseOffset, _0x5b2654);
  }
  set ['macro'](_0x4595b2) {
    let _0x4853ca = 2;
    for (const _0x2cc7d9 of _0x4595b2) {
      let {
        value: _0x2eaf3b,
        keyStatus: _0x3530b4,
        delay: _0x22c7dd,
        keyType: _0x52cd61
      } = _0x2cc7d9;
      _0x22c7dd /= 10;
      const _0xc2e2f5 = _0x22c7dd >= 128,
        _0xeb8260 = _0x3530b4 === cf.Down ? 127 : 255,
        _0x39a797 = _0x3530b4 === cf.Down ? 1 : 129;
      let _0x6b1a93 = 255 & _0x22c7dd;
      if (_0x3530b4 === cf.Up && _0x6b1a93) {
        let _0x403dd8 = _0x6b1a93.toString(2).padStart(8, '0');
        '1' !== _0x403dd8[0] && (_0x403dd8 = '1' + _0x403dd8.slice(1));
        _0x6b1a93 = rt.parseInt(rt.parseInt(_0x403dd8, 2).toString(16), 16);
      }
      if (_0x52cd61 === pt.Mouse_Key) switch (_0x2eaf3b) {
        case 1:
          _0x2eaf3b = 240;
          break;
        case 2:
          _0x2eaf3b = 241;
          break;
        case 4:
          _0x2eaf3b = 242;
          break;
        case 8:
          _0x2eaf3b = 243;
          break;
        case 16:
          _0x2eaf3b = 244;
      }
      if (_0xc2e2f5) {
        const _0x24e1e9 = _0x22c7dd >>> 8 & 255;
        this.raw.setUint8(_0x4853ca, _0xeb8260);
        this.raw.setUint8(_0x4853ca + 1, _0x2eaf3b);
        this.raw.setUint8(_0x4853ca + 2, _0x6b1a93);
        this.raw.setUint8(_0x4853ca + 3, _0x24e1e9);
        _0x4853ca += 4;
      } else {
        this.raw.setUint8(_0x4853ca, _0x6b1a93 || _0x39a797);
        this.raw.setUint8(_0x4853ca + 1, _0x2eaf3b);
        _0x4853ca += 2;
      }
    }
    this.raw.setUint8(_0x4853ca, 0);
    this.raw.setUint8(_0x4853ca + 1, 0);
  }
  static ["create"](_0x260411) {
    const {
        count: _0x2d0200,
        actions: _0x3050b0
      } = _0x260411,
      _0x4ad556 = 4 * (null == _0x3050b0 ? void 0 : _0x3050b0.length) + 4,
      _0x3d89b3 = Math.max(_0x4ad556, _SetMacroDetail.SIZE),
      _0x43587f = new _SetMacroDetail(new DataView(new ArrayBuffer(_0x3d89b3)));
    _0x43587f.count = _0x2d0200;
    _0x43587f.macro = _0x3050b0;
    return _0x43587f;
  }
};
V(Kf, "SIZE", 64);
V(Kf, 'baseOffset', 1);
let Af = Kf;
class GetPairStatus extends $l {
  get ['status']() {
    return this.raw.getUint8(0);
  }
  set ["status"](_0x4aaf6a) {
    this.raw.setUint8(0, _0x4aaf6a);
  }
  static ["get"]() {
    return new GetPairStatus(this.getData(), ql.GetPairStatus);
  }
}
class SetPairMode extends $l {
  set ["status"](_0xde3e5d) {
    this.raw.setUint8(this.baseOffset + 2, _0xde3e5d);
  }
  static ['create'](_0x2078c4) {
    const _0x283a0b = new SetPairMode(this.getData(), ql.SetPairMode);
    _0x283a0b.status = _0x2078c4;
    return _0x283a0b;
  }
}
class ResetDefaultSettings extends $l {
  set ["type"](_0x1b5e1b) {
    this.raw.setUint8(this.baseOffset, _0x1b5e1b);
  }
  static ['create'](_0x5b9f88) {
    const _0x4be1cd = new ResetDefaultSettings(this.getData(), ql.ResetDefaultSettings);
    _0x4be1cd.type = _0x5b9f88;
    return _0x4be1cd;
  }
}
class Get8KDongleRgb extends $l {
  get ["effect"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['effect'](_0x22b906) {
    this.raw.setUint8(this.baseOffset, _0x22b906);
  }
  get ["brightness"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ['brightness'](_0x414b4) {
    this.raw.setUint8(this.baseOffset + 1, _0x414b4);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["speed"](_0x2158c3) {
    this.raw.setUint8(this.baseOffset + 2, _0x2158c3);
  }
  get ["color"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["color"](_0x246f71) {
    this.raw.result(this.baseOffset + 3, _0x246f71);
  }
  static ["get"]() {
    return new Get8KDongleRgb(this.getData(), ql.Get8KDongleRgb);
  }
}
class Set8KDongleRgb extends $l {
  set ["effect"](_0x59a98b) {
    this.raw.setUint8(this.baseOffset + 2, _0x59a98b);
  }
  set ["brightness"](_0x5cd64b) {
    this.raw.setUint8(this.baseOffset + 3, _0x5cd64b);
  }
  set ["speed"](_0x2d1846) {
    this.raw.setUint8(this.baseOffset + 4, _0x2d1846);
  }
  set ["color"](_0x367cb5) {
    this.raw.setUint8(this.baseOffset + 5, _0x367cb5);
  }
  static ['create'](_0x2a75c4) {
    const _0x410629 = new Set8KDongleRgb(this.getData(), ql.Set8KDongleRgb);
    _0x410629.effect = _0x2a75c4.effect;
    _0x410629.brightness = _0x2a75c4.brightness;
    _0x410629.speed = _0x2a75c4.speed;
    _0x410629.color = _0x2a75c4.color;
    return _0x410629;
  }
}
var If = (_0xe79876 => (_0xe79876[_0xe79876.Power = 17] = 'Power', _0xe79876[_0xe79876.Led = 10] = 'Led', _0xe79876[_0xe79876.Dpi = 11] = "Dpi", _0xe79876[_0xe79876.ReportRate_Profile = 240] = "ReportRate_Profile", _0xe79876[_0xe79876.LinkStatus = 15] = "LinkStatus", _0xe79876))(If || {}),
  Pf = (_0x4cf81d => (_0x4cf81d[_0x4cf81d.Led_Effect = 0] = "Led_Effect", _0x4cf81d[_0x4cf81d.Led_Color = 3] = 'Led_Color', _0x4cf81d[_0x4cf81d.ReportRate = 2] = "ReportRate", _0x4cf81d[_0x4cf81d.Profile = 1] = 'Profile', _0x4cf81d))(Pf || {});
let Mf = (V(I = class extends $l {
    static ["get"]() {
      return new I(I.getData(), I.dataReporting);
    }
    static ["fromDataView"](_0x1d38b6) {
      return new I(_0x1d38b6, I.dataReporting);
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
    ["onDeviceToHostReportReceived"](_0x28c0ea) {}
    async ["transferForResultAsync"](_0x4f4122, _0x2519c6) {
      var _0x2e8310, _0x114367, _0x2c3204;
      const _0x441c1c = (null == _0x2519c6 ? void 0 : _0x2519c6.sendReport) ? null == (_0x2e8310 = this.device) ? void 0 : _0x2e8310.sendReport : null == (_0x114367 = this.device) ? void 0 : _0x114367.sendFeatureReport;
      if ((null == _0x2519c6 ? void 0 : _0x2519c6.sendReport) && _0x4f4122.length > 64) {
        const _0x49d33d = this.handleSliceReportData(_0x4f4122);
        for (const _0x335eb8 of _0x49d33d) await _0x441c1c.bind(this.device)(0, _0x335eb8);
        if (null == _0x2519c6 ? void 0 : _0x2519c6.noResponse) return;
      }
      if (null == _0x2519c6 ? void 0 : _0x2519c6.noResponse) return _0x441c1c.bind(this.device)(0, _0x4f4122);
      if (null == _0x2519c6 ? void 0 : _0x2519c6.synchronous) {
        _0x441c1c.bind(this.device)(0, _0x4f4122);
        const _0x548157 = await (null == (_0x2c3204 = this.device) ? void 0 : _0x2c3204.receiveFeatureReport(0));
        return new DataView(_0x548157.buffer.slice(1, _0x548157.byteLength));
      }
      const _0xc1144f = new DataView(_0x4f4122.buffer).getUint8(0);
      let _0xea7931;
      const _0x3b45c3 = new Promise(_0x27ab23 => {
          _0xea7931 = _0x27ab23;
        }),
        _0x4cb726 = {
          requestCode: _0xc1144f,
          data: _0x4f4122,
          promiseResolve: _0xea7931
        };
      this.pendingTransfers.push(_0x4cb726);
      _0x441c1c.bind(this.device)(0, _0x4f4122);
      return _0x3b45c3;
    }
    ["handleSliceReportData"](_0x1e1fb9, _0x4d082b = 64) {
      if (_0x1e1fb9.length <= _0x4d082b) return [_0x1e1fb9];
      {
        const _0x6a518b = [];
        for (let _0x3fdf5e = 0; _0x3fdf5e < _0x1e1fb9.length; _0x3fdf5e += _0x4d082b) {
          const _0x1d0441 = _0x1e1fb9.slice(_0x3fdf5e, _0x3fdf5e + _0x4d082b);
          this.isAllZeroesOptimized(_0x1d0441) || _0x6a518b.push(_0x1d0441);
        }
        return _0x6a518b;
      }
    }
    ["isAllZeroesOptimized"](_0x4e6c01) {
      return _0x4e6c01.every(_0x5e4d1e => 0 === _0x5e4d1e);
    }
    ["inputReportListener"](_0x2568fb) {
      super.inputReportListener(_0x2568fb);
      this.handleInputReport(_0x2568fb.data);
    }
    ["handleInputReport"](_0x2148d1) {
      this.mutex.runExclusive(() => {
        const _0x1ded2e = _0x2148d1.getUint8(0);
        if (0 == _0x1ded2e) return void this.onDeviceToHostReportReceived(_0x2148d1);
        let _0x489941 = false;
        _0x1ded2e === Mf.dataReporting && (Pr('data-reporting', Mf.fromDataView(_0x2148d1)), _0x489941 = true);
        for (const _0x55d32e of this.pendingTransfers) if (_0x55d32e.requestCode === _0x1ded2e) {
          _0x55d32e.promiseResolve(_0x2148d1);
          this.pendingTransfers.splice(this.pendingTransfers.indexOf(_0x55d32e), 1);
          _0x489941 = true;
          break;
        }
        _0x489941 || new Uint8Array(_0x2148d1.buffer).toString();
      });
    }
  };
class Holtek extends Tf {
  async ["getFirmwareVersion"]() {
    return this.transferForResult(GetFirmwareVersion.get(), false, true);
  }
  async ["resetDefaultSettings"](_0x4b96b0 = ff.All) {
    return this.transferForResult(ResetDefaultSettings.create(_0x4b96b0), false, true);
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
  async ["setCurrentProfile"](_0x497e9b) {
    return this.transferForResult(SetMouseInfo.create(_0x497e9b), false, true);
  }
  async ["getMotionLessSleepTime"]() {
    return this.transferForResult(GetMotionLessSleepTime.get());
  }
  async ['setMotionLessSleepTime'](_0x3d2f76) {
    return this.transferForResult(SetMotionLessSleepTime.create(_0x3d2f76), false, true);
  }
  async ['getKeyDebounce']() {
    return this.transferForResult(GetKeyDebounce.get());
  }
  async ["setKeyDebounce"](_0x4b6802) {
    return this.transferForResult(SetKeyDebounce.create(_0x4b6802), false, true);
  }
  async ['getSensorLift']() {
    return this.transferForResult(GetSensorLift.get());
  }
  async ['setSensorLift'](_0x3eca7a) {
    return this.transferForResult(SetSensorLift.create(_0x3eca7a), false, true);
  }
  async ["getMouseSpecialOption"]() {
    return this.transferForResult(GetMouseSpecialOption.get());
  }
  async ["setMouseSpecialOption"](_0xaa26d5) {
    return this.transferForResult(SetMouseSpecialOption.create(_0xaa26d5), false, true);
  }
  async ['setReportRate'](_0x1eb906) {
    return this.transferForResult(Of.create(_0x1eb906), false, true);
  }
  async ['setRGB'](_0x14277c) {
    return this.transferForResult(SetRGB.create(_0x14277c), false, true);
  }
  async ["setDpiStage"](_0x1b338a) {
    return this.transferForResult(SetDpiStage.create(_0x1b338a), false, true);
  }
  async ["setDpiValue"](_0x4b30ab, _0x57e8b3) {
    return await this.transferForResult(SetDpiValue.create(_0x4b30ab, _0x57e8b3), false, true);
  }
  async ["setDpiValues"](_0x4d0d41) {
    for (const _0x4c2927 of _0x4d0d41) {
      const {
        dpiId: _0x29f2b6,
        value: _0x21fa3e
      } = _0x4c2927;
      await this.setDpiValue(_0x29f2b6, _0x21fa3e);
      await new Promise(_0x22a837 => {
        setTimeout(_0x22a837, 20);
      });
    }
  }
  async ['setDpiColor'](_0x30399d, _0x2477fe, _0x237fb0, _0x128fca) {
    return await this.transferForResult(SetDpiColor.create(_0x30399d, _0x2477fe, _0x237fb0, _0x128fca), false, true);
  }
  async ['setDpiColors'](_0x47d5b8) {
    for (const _0x190e1a of _0x47d5b8) {
      const {
        dpiId: _0x5a01ac,
        r: _0x422e78,
        g: _0x423d05,
        b: _0x4ad2c9
      } = _0x190e1a;
      await this.setDpiColor(_0x5a01ac, _0x422e78, _0x423d05, _0x4ad2c9);
      await new Promise(_0x168ac4 => {
        setTimeout(_0x168ac4, 20);
      });
    }
  }
  async ['setDpiConfig'](_0x42cd19, _0x5df1d8 = 255) {
    return await this.transferForResult(SetDpiConfig.create(_0x42cd19, _0x5df1d8), false, true);
  }
  async ["setMouseButtonOne"](_0x20ca81, _0x583057) {
    return this.transferForResult(SetMouseMatrix.create(_0x20ca81, _0x583057), true, true);
  }
  async ["setMouseButtons"](_0x5e0ced) {
    let _0x274f0b = 0;
    for (const _0x5b9401 of _0x5e0ced) {
      await this.setMouseButtonOne(_0x274f0b, _0x5b9401);
      await new Promise(_0x3dc4a4 => {
        setTimeout(_0x3dc4a4, 20);
      });
      _0x274f0b++;
    }
  }
  async ['setMacroConfig'](_0x249bc9, _0x46f088) {
    return this.transferForResult(xf.create(_0x249bc9, _0x46f088), true, true);
  }
  async ["setMacroDetail"](_0x295ea5) {
    return this.transferForResult(Af.create(_0x295ea5), true, true, true);
  }
  async ["setPairMode"](_0x371484) {
    return this.transferForResult(SetPairMode.create(_0x371484), false, true);
  }
  async ["getPairStatus"]() {
    return this.transferForResult(GetPairStatus.get(), false, true);
  }
  async ["get8KDongleRgb"]() {
    return this.transferForResult(Get8KDongleRgb.get());
  }
  async ["set8KDongleRgb"](_0x5c96f7) {
    return this.transferForResult(Set8KDongleRgb.create(_0x5c96f7), false, true);
  }
  async ["transferForResult"](_0x2fefb1, _0x452b06 = false, _0x2eeb7c, _0xb1934b) {
    await Ng(20);
    const _0x4083c1 = await this.transferForResultAsync(_0x2fefb1.toUint8Array(), {
      noResponse: _0x452b06,
      synchronous: _0x2eeb7c,
      sendReport: _0xb1934b
    });
    if (!_0x452b06) {
      _0x2fefb1.raw = _0x4083c1;
      return _0x2fefb1;
    }
  }
}
var Rf = (_0x3a51dc => (_0x3a51dc[_0x3a51dc.StopImmediately = 0] = "StopImmediately", _0x3a51dc[_0x3a51dc.RepeatUntilNextKeyPress = 1] = 'RepeatUntilNextKeyPress', _0x3a51dc[_0x3a51dc.RepeatUntilNextAnyKeyPress = 2] = "RepeatUntilNextAnyKeyPress", _0x3a51dc[_0x3a51dc.LoopCount = 3] = "LoopCount", _0x3a51dc))(Rf || {});
class MacroDexie extends Xn {
  constructor(_0x13dff7) {
    super(_0x13dff7);
    V(this, 'friends');
    this.version(1).stores({
      friends: "&id, name, startType,loopNumber,macroList,createdAt,updateAt"
    });
  }
}
class AutoIncreaseMacroDexie extends Xn {
  constructor(_0x2d0d90) {
    super(_0x2d0d90);
    V(this, 'friends');
    this.version(1).stores({
      friends: "&id++ , name, startType,loopNumber,macroList,createdAt,updateAt"
    });
  }
}
class MacroStore {
  constructor(_0x59030f, _0x17d4aa, _0x529641) {
    V(this, "maxMacroId", 12);
    V(this, "saveName", "macro");
    V(this, "isAutoIncrease", false);
    V(this, 'db');
    this.saveName = _0x59030f || this.saveName;
    this.maxMacroId = _0x17d4aa || this.maxMacroId;
    this.isAutoIncrease = _0x529641 || this.isAutoIncrease;
    this.db = _0x529641 ? new AutoIncreaseMacroDexie(this.saveName) : new MacroDexie(this.saveName);
  }
  async ["getMacroList"]() {
    return this.db.friends.orderBy("createdAt").toArray();
  }
  async ["getMacroById"](_0x4b5f80) {
    return this.db.friends.get({
      id: _0x4b5f80
    });
  }
  async ["createMacro"](_0x147a29) {
    const _0x2cf509 = De(Date.now());
    if (this.isAutoIncrease) return this.db.friends.add({
      ..._0x147a29,
      createdAt: _0x2cf509,
      updatedAt: _0x2cf509
    });
    const _0x2f43bb = await this.db.friends.toCollection().primaryKeys();
    if (_0x2f43bb.length > this.maxMacroId + 1) throw new Error("Macro limit reached");
    let _0x1a71d5 = 0;
    for (; _0x1a71d5 <= this.maxMacroId && _0x2f43bb.includes(_0x1a71d5);) _0x1a71d5++;
    if (_0x1a71d5 > this.maxMacroId) throw new Error("Internal error: No available ID found");
    return this.db.friends.add({
      ..._0x147a29,
      id: _0x1a71d5,
      createdAt: _0x2cf509,
      updatedAt: _0x2cf509
    });
  }
  async ['createMacroById'](_0x35413f, _0x23a14f) {
    const _0x318905 = De(Date.now());
    return this.db.friends.add({
      ..._0x23a14f,
      id: _0x35413f,
      createdAt: _0x318905,
      updatedAt: _0x318905
    });
  }
  async ["updateMacro"](_0x464832, _0x1a20bb) {
    const _0x58e52f = De(Date.now());
    await this.db.friends.update(_0x464832, {
      ..._0x1a20bb,
      updatedAt: _0x58e52f
    });
  }
  async ["removeMacro"](_0x7585c2) {
    await this.db.friends.delete(_0x7585c2);
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
  Vf = Lf.map(_0x2274a5 => _0x2274a5.filters).flat().filter(_0x394dbc => !(null == _0x394dbc ? void 0 : _0x394dbc.receiver)).map(_0x56fe00 => null == _0x56fe00 ? void 0 : _0x56fe00.custom).filter(Boolean).reduce((_0x3aa890, _0x3bbe74) => (_0x3aa890[_0x3bbe74.mouseCidMid] = _0x3bbe74, _0x3aa890), {});
let Ff = (P = class {
  constructor(_0x2ad5e0, _0x75963c) {
    V(this, "raw");
    let _0x13bafe = _0x2ad5e0 ? _0x2ad5e0.buffer : new ArrayBuffer(P.SIZE);
    this.raw = new DataView(_0x13bafe);
    this.commandId = _0x75963c;
  }
  static ["getData"]() {
    return new DataView(new ArrayBuffer(P.SIZE));
  }
  get ['commandId']() {
    return this.raw.getUint8(0);
  }
  set ["commandId"](_0x3f608c) {
    this.raw.setUint8(0, _0x3f608c);
  }
  get ["commandStatus"]() {
    return this.raw.getUint8(1);
  }
  set ['commandStatus'](_0x421fac) {
    this.raw.setUint8(1, _0x421fac);
  }
  get ['eepromAddress']() {
    return this.raw.getUint16(2);
  }
  set ["eepromAddress"](_0x3b2848) {
    this.raw.setUint16(2, _0x3b2848);
  }
  get ['dataValidLen']() {
    return this.raw.getUint8(4);
  }
  set ['dataValidLen'](_0x4612ea) {
    this.raw.setUint8(4, _0x4612ea);
  }
  get ["checkSum"]() {
    return this.raw.getUint8(15);
  }
  set ["checkSum"](_0x2d10d9) {
    this.raw.setUint8(15, _0x2d10d9);
  }
  ["toUint8Array"]() {
    const _0x4305ad = new Uint8Array(this.raw.buffer);
    this.checkSum = 85 - (255 & rt.sum([8, ..._0x4305ad.slice(0, 15)]));
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
  eh = (_0xff5fa => (_0xff5fa[_0xff5fa.DownLoadData = 1] = "DownLoadData", _0xff5fa[_0xff5fa.DownLoadDriverStatus = 2] = "DownLoadDriverStatus", _0xff5fa[_0xff5fa.GetWirelessMouseOnline = 3] = "GetWirelessMouseOnline", _0xff5fa[_0xff5fa.GetBatteryLevel = 4] = "GetBatteryLevel", _0xff5fa[_0xff5fa.SetWirelessDonglePair = 5] = 'SetWirelessDonglePair', _0xff5fa[_0xff5fa.GetWirelessDonglePairResult = 6] = "GetWirelessDonglePairResult", _0xff5fa[_0xff5fa.SetEEPROM = 7] = "SetEEPROM", _0xff5fa[_0xff5fa.GetEEPROM = 8] = "GetEEPROM", _0xff5fa[_0xff5fa.RestoreFactory = 9] = "RestoreFactory", _0xff5fa[_0xff5fa.ReportMouseStatus = 10] = "ReportMouseStatus", _0xff5fa[_0xff5fa.Reserved1 = 11] = "Reserved1", _0xff5fa[_0xff5fa.Reserved2 = 12] = "Reserved2", _0xff5fa[_0xff5fa.EnterUSBUpgradeMode = 13] = "EnterUSBUpgradeMode", _0xff5fa[_0xff5fa.GetCurrentConfig = 14] = "GetCurrentConfig", _0xff5fa[_0xff5fa.SetCurrentConfig = 15] = 'SetCurrentConfig', _0xff5fa[_0xff5fa.GetMouseCIDMID = 16] = "GetMouseCIDMID", _0xff5fa[_0xff5fa.Reserved3 = 17] = "Reserved3", _0xff5fa[_0xff5fa.GetMouseVersion = 18] = "GetMouseVersion", _0xff5fa[_0xff5fa.DongleExitPair = 19] = "DongleExitPair", _0xff5fa[_0xff5fa.Set4KRGBMode = 20] = 'Set4KRGBMode', _0xff5fa[_0xff5fa.Get4KRGBMode = 21] = "Get4KRGBMode", _0xff5fa[_0xff5fa.SetFarDistanceMode = 22] = "SetFarDistanceMode", _0xff5fa[_0xff5fa.GetFarDistanceMode = 23] = 'GetFarDistanceMode', _0xff5fa[_0xff5fa.SetDongleLightMode = 24] = "SetDongleLightMode", _0xff5fa[_0xff5fa.GetDongleLightMode = 25] = "GetDongleLightMode", _0xff5fa[_0xff5fa.ReportMouseUpgradeStatus = 91] = "ReportMouseUpgradeStatus", _0xff5fa[_0xff5fa.ReportMouseUpgradeErrorStatus = 90] = 'ReportMouseUpgradeErrorStatus', _0xff5fa))(eh || {}),
  th = (_0x3dae82 => (_0x3dae82[_0x3dae82.dongle1K = 0] = 'dongle1K', _0x3dae82[_0x3dae82.dongle4K = 1] = "dongle4K", _0x3dae82[_0x3dae82.wired1K = 2] = "wired1K", _0x3dae82[_0x3dae82.wired8K = 3] = "wired8K", _0x3dae82[_0x3dae82.dongle2K = 4] = "dongle2K", _0x3dae82[_0x3dae82.dongle8K = 5] = "dongle8K", _0x3dae82))(th || {});
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
var rh = (_0x2c8fb9 => (_0x2c8fb9[_0x2c8fb9.eraseBackupArea = 1] = "eraseBackupArea", _0x2c8fb9[_0x2c8fb9.eraseRunArea = 2] = "eraseRunArea", _0x2c8fb9[_0x2c8fb9.checkRunArea = 5] = "checkRunArea", _0x2c8fb9[_0x2c8fb9.success = 136] = 'success', _0x2c8fb9))(rh || {}),
  sh = (_0x115c36 => (_0x115c36[_0x115c36.erase = 0] = "erase", _0x115c36[_0x115c36.success = 1] = 'success', _0x115c36))(sh || {});
class DownLoadData extends Ff {
  static ["get"](_0x1a5f0a) {
    const _0x41bdc0 = new DownLoadData(Ff.getData(), eh.DownLoadData);
    _0x41bdc0.dataValidLen = 8;
    _0x41bdc0.encryptedData = _0x1a5f0a;
    return _0x41bdc0;
  }
  get ['encryptedData']() {
    return [this.raw.getUint8(this.baseOffset), this.raw.getUint8(this.baseOffset + 1), this.raw.getUint8(this.baseOffset + 2), this.raw.getUint8(this.baseOffset + 3)];
  }
  set ["encryptedData"](_0x2319de) {
    for (let _0x2159a4 = 0; _0x2159a4 < 4; _0x2159a4++) this.raw.setUint8(this.baseOffset + _0x2159a4, (null == _0x2319de ? void 0 : _0x2319de[_0x2159a4]) ?? 0);
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
  static ["get"](_0x461792) {
    const _0xa2f7f9 = new DownLoadDriverStatus(Ff.getData(), eh.DownLoadDriverStatus);
    _0xa2f7f9.driverStatus = _0x461792;
    return _0xa2f7f9;
  }
  get ['driverStatus']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["driverStatus"](_0x10f7dd) {
    this.raw.setUint8(this.baseOffset, _0x10f7dd);
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
  static ["get"](_0x5b3ecb, _0x50a149) {
    const _0xf0217e = new StartPairing(StartPairing.getData(), eh.SetWirelessDonglePair);
    _0xf0217e.dataValidLen = 2;
    _0xf0217e.cid = _0x5b3ecb;
    _0xf0217e.mid = _0x50a149;
    return _0xf0217e;
  }
  set ["cid"](_0x29c855) {
    this.raw.setUint8(this.baseOffset, _0x29c855);
  }
  set ["mid"](_0x378c92) {
    this.raw.setUint8(this.baseOffset + 1, _0x378c92);
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
  set ["currentConfigFile"](_0x123c9f) {
    this.raw.setUint8(this.baseOffset, _0x123c9f);
  }
  static ["get"]() {
    return new CurrentConfigFile(CurrentConfigFile.getData(), eh.GetCurrentConfig);
  }
  static ['create'](_0xf4ba42) {
    const _0x2e83e6 = new CurrentConfigFile(CurrentConfigFile.getData(), eh.SetCurrentConfig);
    _0x2e83e6.dataValidLen = 1;
    _0x2e83e6.currentConfigFile = _0xf4ba42;
    return _0x2e83e6;
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
  set ["mode"](_0x5938f3) {
    this.raw.setUint8(this.baseOffset, _0x5938f3);
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
  set ["colors"](_0x3671e9) {
    for (let _0x139e25 = 0; _0x139e25 < 3; _0x139e25++) {
      const {
        r: _0x53ed66,
        g: _0x3c5aaa,
        b: _0x333d50
      } = _0x3671e9[_0x139e25];
      this.raw.setUint8(this.baseOffset + 3 * _0x139e25 + 1, _0x53ed66);
      this.raw.setUint8(this.baseOffset + 3 * _0x139e25 + 2, _0x3c5aaa);
      this.raw.setUint8(this.baseOffset + 3 * _0x139e25 + 3, _0x333d50);
    }
  }
  static ['get']() {
    return new RGBModeBy4K(RGBModeBy4K.getData(), eh.Get4KRGBMode);
  }
  static ['create'](_0x1fc1f4) {
    const _0x1c6df5 = new RGBModeBy4K(RGBModeBy4K.getData(), eh.Set4KRGBMode);
    _0x1c6df5.dataValidLen = 10;
    _0x1c6df5.colors = _0x1fc1f4.colors;
    _0x1c6df5.mode = _0x1fc1f4.mode;
    return _0x1c6df5;
  }
}
class FarDistance extends Ff {
  get ["farDistanceMode"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['farDistanceMode'](_0x4379ad) {
    this.raw.setUint8(this.baseOffset, _0x4379ad);
  }
  static ["get"]() {
    return new FarDistance(FarDistance.getData(), eh.GetFarDistanceMode);
  }
  static ['createRaw'](_0x114d9d) {
    return new FarDistance(_0x114d9d, eh.SetFarDistanceMode);
  }
  static ["create"](_0x58cbf9) {
    const _0x137d45 = new FarDistance(FarDistance.getData(), eh.SetFarDistanceMode);
    _0x137d45.dataValidLen = 10;
    _0x137d45.farDistanceMode = _0x58cbf9;
    return _0x137d45;
  }
}
class DongleLight extends Ff {
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['mode'](_0x5cd899) {
    this.raw.setUint8(this.baseOffset, _0x5cd899);
  }
  get ["color"]() {
    return {
      r: this.raw.getUint8(this.baseOffset + 1),
      g: this.raw.getUint8(this.baseOffset + 2),
      b: this.raw.getUint8(this.baseOffset + 3)
    };
  }
  set ["color"](_0x294720) {
    this.raw.setUint8(this.baseOffset + 1, _0x294720.r);
    this.raw.setUint8(this.baseOffset + 2, _0x294720.g);
    this.raw.setUint8(this.baseOffset + 3, _0x294720.b);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['speed'](_0x1db257) {
    this.raw.setUint8(this.baseOffset + 4, _0x1db257);
  }
  get ["brightness"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["brightness"](_0x21fdff) {
    this.raw.setUint8(this.baseOffset + 5, _0x21fdff);
  }
  get ["sleepTime"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ["sleepTime"](_0x56b0fe) {
    this.raw.setUint8(this.baseOffset + 6, _0x56b0fe);
  }
  static ["get"]() {
    return new DongleLight(DongleLight.getData(), eh.GetDongleLightMode);
  }
  static ["create"](_0x2dc1ae) {
    const _0x2836cf = new DongleLight(DongleLight.getData(), eh.SetDongleLightMode);
    _0x2836cf.dataValidLen = 10;
    _0x2836cf.mode = _0x2dc1ae.mode;
    _0x2836cf.color = _0x2dc1ae.color;
    _0x2836cf.brightness = _0x2dc1ae.brightness;
    _0x2836cf.speed = _0x2dc1ae.speed;
    _0x2836cf.sleepTime = _0x2dc1ae.sleepTime;
    return _0x2836cf;
  }
}
let ah = (V(M = class extends Ff {
  static ["get"]() {
    return new M(M.getData(), M.dataReporting);
  }
  static ["fromDataView"](_0x3f2e75) {
    return new M(_0x3f2e75, M.dataReporting);
  }
  get ["mouseStatusChanged"]() {
    const _0x5d8790 = this.raw.getUint8(this.baseOffset);
    return {
      dpi: 1 & _0x5d8790,
      report: 2 & _0x5d8790,
      configFile: 4 & _0x5d8790,
      dpiIndicatorLight: 8 & _0x5d8790,
      logoIndicatorLight: 16 & _0x5d8790,
      lampWithIndicatorLight: 32 & _0x5d8790,
      batteryLevel: 64 & _0x5d8790
    };
  }
}, "dataReporting", eh.ReportMouseStatus), M);
class MouseReportRateDpi extends Ff {
  static ["get"]() {
    const _0x5f5cbb = new MouseReportRateDpi(MouseReportRateDpi.getData(), eh.GetEEPROM);
    _0x5f5cbb.eepromAddress = Nf.Address.reportRate;
    _0x5f5cbb.dataValidLen = 6;
    return _0x5f5cbb;
  }
  static ["createRaw"](_0x456f15) {
    return new MouseReportRateDpi(_0x456f15, eh.SetEEPROM);
  }
  static ["create"](_0x12769a) {
    const _0x451f06 = new MouseReportRateDpi(MouseReportRateDpi.getData(), eh.SetEEPROM);
    _0x451f06.eepromAddress = Nf.Address.reportRate;
    _0x451f06.dataValidLen = 6;
    _0x451f06.reportRate = _0x12769a.reportRate;
    _0x451f06.maxDpi = _0x12769a.maxDpi;
    _0x451f06.currentDpi = _0x12769a.currentDpi;
    return _0x451f06;
  }
  get ["reportRate"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["reportRate"](_0x31f784) {
    this.raw.setUint8(this.baseOffset, _0x31f784);
    this.raw.setUint8(this.baseOffset + 1, 85 - _0x31f784);
  }
  get ["maxDpi"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['maxDpi'](_0x2ec216) {
    this.raw.setUint8(this.baseOffset + 2, _0x2ec216);
    this.raw.setUint8(this.baseOffset + 3, 85 - _0x2ec216);
  }
  get ['currentDpi']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["currentDpi"](_0x2bfcc6) {
    this.raw.setUint8(this.baseOffset + 4, _0x2bfcc6);
    this.raw.setUint8(this.baseOffset + 5, 85 - _0x2bfcc6);
  }
}
class MouseSilentHeight extends Ff {
  static ["get"]() {
    const _0x4deacd = new MouseSilentHeight(MouseSilentHeight.getData(), eh.GetEEPROM);
    _0x4deacd.eepromAddress = Nf.Address.silentHeight;
    _0x4deacd.dataValidLen = 2;
    return _0x4deacd;
  }
  static ["createRaw"](_0x1b5d4e) {
    return new MouseSilentHeight(_0x1b5d4e, eh.SetEEPROM);
  }
  static ["create"](_0x376420) {
    const _0x200f3f = new MouseSilentHeight(MouseSilentHeight.getData(), eh.SetEEPROM);
    _0x200f3f.eepromAddress = Nf.Address.silentHeight;
    _0x200f3f.dataValidLen = 2;
    _0x200f3f.silentHeight = _0x376420.silentHeight;
    return _0x200f3f;
  }
  get ["silentHeight"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["silentHeight"](_0x3bec7f) {
    this.raw.setUint8(this.baseOffset, _0x3bec7f);
    this.raw.setUint8(this.baseOffset + 1, 85 - _0x3bec7f);
  }
}
class MouseDpi {
  constructor(_0x51b687, _0x39537b) {
    V(this, "raw");
    V(this, "offset");
    this.raw = _0x51b687;
    this.offset = _0x39537b;
  }
  static ["get"]() {
    return new MouseDpi(new DataView(new ArrayBuffer(4)), 0);
  }
  static ["fromDataView"](_0x1d0721, _0x40ec15) {
    return new MouseDpi(_0x1d0721, _0x40ec15);
  }
  static ["create"](_0x4f2d47) {
    const _0x4c1e89 = MouseDpi.get();
    _0x4c1e89.dpi = _0x4f2d47;
    return _0x4c1e89;
  }
  get ['dpi']() {
    return {
      xDpi: this.raw.getUint8(this.offset),
      yDpi: this.raw.getUint8(this.offset + 1),
      dpiEx: this.raw.getUint8(this.offset + 2)
    };
  }
  set ["dpi"](_0x28015e) {
    this.raw.setUint8(this.offset, _0x28015e.xDpi);
    this.raw.setUint8(this.offset + 1, _0x28015e.yDpi);
    this.raw.setUint8(this.offset + 2, _0x28015e.dpiEx);
    this.raw.setUint8(this.offset + 3, 85 - (_0x28015e.xDpi + _0x28015e.yDpi + _0x28015e.dpiEx) & 255);
  }
}
class MouseDpiColor {
  constructor(_0x245b2c, _0x3c0039) {
    V(this, "raw");
    V(this, 'offset');
    this.raw = _0x245b2c;
    this.offset = _0x3c0039;
  }
  static ["get"]() {
    return new MouseDpiColor(new DataView(new ArrayBuffer(4)), 0);
  }
  static ["fromDataView"](_0x2d36f8, _0x4d568c) {
    return new MouseDpiColor(_0x2d36f8, _0x4d568c);
  }
  get ["color"]() {
    return {
      r: this.raw.getUint8(this.offset),
      g: this.raw.getUint8(this.offset + 1),
      b: this.raw.getUint8(this.offset + 2)
    };
  }
  set ["color"](_0x5cd6fb) {
    const {
      r: _0xecdda6,
      g: _0x4001e0,
      b: _0xafe019
    } = _0x5cd6fb;
    this.raw.setUint8(this.offset, _0xecdda6);
    this.raw.setUint8(this.offset + 1, _0x4001e0);
    this.raw.setUint8(this.offset + 2, _0xafe019);
    this.raw.setUint8(this.offset + 3, 85 - (_0xecdda6 + _0x4001e0 + _0xafe019) & 255);
  }
}
class MouseDpiConfig extends Ff {
  static ['get'](_0x3cdc40) {
    const _0x14cd16 = new MouseDpiConfig(MouseDpiConfig.getData(), eh.GetEEPROM);
    _0x14cd16.eepromAddress = _0x3cdc40;
    _0x14cd16.dataValidLen = 8;
    return _0x14cd16;
  }
  static ['create'](_0x3767fb, _0x5a717) {
    const _0x482c21 = new MouseDpiConfig(MouseDpiConfig.getData(), eh.SetEEPROM);
    _0x482c21.eepromAddress = _0x3767fb;
    _0x482c21.dataValidLen = 8;
    _0x482c21.dpiList = _0x5a717;
    return _0x482c21;
  }
  get ["dpiList"]() {
    return Array.from({
      length: 2
    }, (_0x4b5bf6, _0x2324d4) => MouseDpi.fromDataView(this.raw, this.baseOffset + 4 * _0x2324d4));
  }
  set ['dpiList'](_0x124132) {
    if (_0x124132.length > 2) throw new Error("DpiList length must be 2");
    for (let _0x44ccf3 = 0; _0x44ccf3 < 2; _0x44ccf3++) {
      const {
        dpi: _0x2d1e4a,
        raw: _0x4c06b6,
        offset: _0x31aec8
      } = _0x124132[_0x44ccf3];
      this.raw.setUint8(this.baseOffset + 4 * _0x44ccf3, _0x2d1e4a.xDpi);
      this.raw.setUint8(this.baseOffset + 4 * _0x44ccf3 + 1, _0x2d1e4a.yDpi);
      this.raw.setUint8(this.baseOffset + 4 * _0x44ccf3 + 2, _0x2d1e4a.dpiEx);
      this.raw.setUint8(this.baseOffset + 4 * _0x44ccf3 + 3, _0x4c06b6.getUint8(_0x31aec8 + 3));
    }
  }
}
class MouseDpiColorConfig extends Ff {
  static ["get"](_0x514e3e) {
    const _0x27e2b9 = new MouseDpiColorConfig(MouseDpiColorConfig.getData(), eh.GetEEPROM);
    _0x27e2b9.eepromAddress = _0x514e3e;
    _0x27e2b9.dataValidLen = 8;
    return _0x27e2b9;
  }
  static ["create"](_0x5011de, _0x1cd1f7) {
    const _0xdaa97f = new MouseDpiColorConfig(MouseDpiColorConfig.getData(), eh.SetEEPROM);
    _0xdaa97f.eepromAddress = _0x5011de;
    _0xdaa97f.dataValidLen = 8;
    _0xdaa97f.dpiColorList = _0x1cd1f7;
    return _0xdaa97f;
  }
  get ["dpiColorList"]() {
    return Array.from({
      length: 2
    }, (_0x30cce1, _0x1c2c69) => MouseDpiColor.fromDataView(this.raw, this.baseOffset + 4 * _0x1c2c69));
  }
  set ["dpiColorList"](_0x3d0c24) {
    if (_0x3d0c24.length > 2) throw new Error("MouseDpiColor length must be 2");
    for (let _0x3fb625 = 0; _0x3fb625 < 2; _0x3fb625++) {
      const {
        color: {
          r: _0x1f8fd8,
          g: _0x115ebf,
          b: _0x49b288
        },
        raw: _0x44ef47,
        offset: _0x29cdaf
      } = _0x3d0c24[_0x3fb625];
      this.raw.setUint8(this.baseOffset + 4 * _0x3fb625, _0x1f8fd8);
      this.raw.setUint8(this.baseOffset + 4 * _0x3fb625 + 1, _0x115ebf);
      this.raw.setUint8(this.baseOffset + 4 * _0x3fb625 + 2, _0x49b288);
      this.raw.setUint8(this.baseOffset + 4 * _0x3fb625 + 3, _0x44ef47.getUint8(_0x29cdaf + 3));
    }
  }
}
class MouseDpiRGBEffects extends Ff {
  static ["get"]() {
    const _0x32d054 = new MouseDpiRGBEffects(MouseDpiRGBEffects.getData(), eh.GetEEPROM);
    _0x32d054.eepromAddress = Nf.Address.dpiRGBLightingEffects;
    _0x32d054.dataValidLen = 8;
    return _0x32d054;
  }
  static ["createRaw"](_0x1ef185) {
    return new MouseDpiRGBEffects(_0x1ef185, eh.SetEEPROM);
  }
  static ["create"](_0x1a76e1) {
    const _0x19e865 = new MouseDpiRGBEffects(MouseDpiRGBEffects.getData(), eh.SetEEPROM);
    _0x19e865.eepromAddress = Nf.Address.dpiRGBLightingEffects;
    _0x19e865.dataValidLen = 8;
    _0x19e865.rgbLightingEffects = _0x1a76e1.rgbLightingEffects;
    _0x19e865.longBrightBrightness = _0x1a76e1.longBrightBrightness;
    _0x19e865.breathingSpeed = _0x1a76e1.breathingSpeed;
    _0x19e865.dpiRGBEnabled = _0x1a76e1.dpiRGBEnabled;
    return _0x19e865;
  }
  get ["rgbLightingEffects"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['rgbLightingEffects'](_0x3d59d6) {
    this.raw.setUint8(this.baseOffset, _0x3d59d6);
    this.raw.setUint8(this.baseOffset + 1, 85 - _0x3d59d6);
  }
  get ["longBrightBrightness"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["longBrightBrightness"](_0x4cf61b) {
    this.raw.setUint8(this.baseOffset + 2, _0x4cf61b);
    this.raw.setUint8(this.baseOffset + 3, 85 - _0x4cf61b);
  }
  get ["breathingSpeed"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["breathingSpeed"](_0xd8690f) {
    this.raw.setUint8(this.baseOffset + 4, _0xd8690f);
    this.raw.setUint8(this.baseOffset + 5, 85 - _0xd8690f);
  }
  get ["dpiRGBEnabled"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ["dpiRGBEnabled"](_0x58a5be) {
    this.raw.setUint8(this.baseOffset + 6, _0x58a5be);
    this.raw.setUint8(this.baseOffset + 7, 85 - _0x58a5be);
  }
}
class MouseBeforePerformanceSetting extends Ff {
  static ["get"]() {
    const _0x4ad82d = new MouseBeforePerformanceSetting(MouseBeforePerformanceSetting.getData(), eh.GetEEPROM);
    _0x4ad82d.eepromAddress = Nf.Address.stabilizationTime;
    _0x4ad82d.dataValidLen = 10;
    return _0x4ad82d;
  }
  static ['createRaw'](_0x16664b) {
    return new MouseBeforePerformanceSetting(_0x16664b, eh.SetEEPROM);
  }
  static ['create'](_0x304696) {
    const _0x1fa9f1 = new MouseBeforePerformanceSetting(MouseBeforePerformanceSetting.getData(), eh.SetEEPROM);
    _0x1fa9f1.eepromAddress = Nf.Address.stabilizationTime;
    _0x1fa9f1.dataValidLen = 10;
    _0x1fa9f1.stabilizationTime = _0x304696.stabilizationTime;
    _0x1fa9f1.motionSync = _0x304696.motionSync;
    _0x1fa9f1.closeLedTime = _0x304696.closeLedTime;
    _0x1fa9f1.linearCorrection = _0x304696.linearCorrection;
    _0x1fa9f1.rippleControl = _0x304696.rippleControl;
    return _0x1fa9f1;
  }
  get ["stabilizationTime"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['stabilizationTime'](_0x532829) {
    this.raw.setUint8(this.baseOffset, _0x532829);
    this.raw.setUint8(this.baseOffset + 1, 85 - _0x532829);
  }
  get ["motionSync"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["motionSync"](_0x2202a3) {
    this.raw.setUint8(this.baseOffset + 2, _0x2202a3);
    this.raw.setUint8(this.baseOffset + 3, 85 - _0x2202a3);
  }
  get ["closeLedTime"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["closeLedTime"](_0x37d61e) {
    this.raw.setUint8(this.baseOffset + 4, _0x37d61e);
    this.raw.setUint8(this.baseOffset + 5, 85 - _0x37d61e);
  }
  get ["linearCorrection"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['linearCorrection'](_0x5c2c43) {
    this.raw.setUint8(this.baseOffset + 6, _0x5c2c43);
    this.raw.setUint8(this.baseOffset + 7, 85 - _0x5c2c43);
  }
  get ["rippleControl"]() {
    return this.raw.getUint8(this.baseOffset + 8);
  }
  set ["rippleControl"](_0x52ab85) {
    this.raw.setUint8(this.baseOffset + 8, _0x52ab85);
    this.raw.setUint8(this.baseOffset + 9, 85 - _0x52ab85);
  }
}
class MouseAfterPerformanceSetting extends Ff {
  static ['get']() {
    const _0x1c106a = new MouseAfterPerformanceSetting(MouseAfterPerformanceSetting.getData(), eh.GetEEPROM);
    _0x1c106a.eepromAddress = Nf.Address.moveCloseLights;
    _0x1c106a.dataValidLen = 10;
    return _0x1c106a;
  }
  static ["createRaw"](_0x25bd46) {
    return new MouseAfterPerformanceSetting(_0x25bd46, eh.SetEEPROM);
  }
  static ['create'](_0x205ac3) {
    const _0x5a1329 = new MouseAfterPerformanceSetting(MouseAfterPerformanceSetting.getData(), eh.SetEEPROM);
    _0x5a1329.eepromAddress = Nf.Address.moveCloseLights;
    _0x5a1329.dataValidLen = 10;
    _0x5a1329.moveCloseLed = _0x205ac3.moveCloseLed;
    _0x5a1329.sensorSleepEnabled = _0x205ac3.sensorSleepEnabled;
    _0x5a1329.sensorSleepTime = _0x205ac3.sensorSleepTime;
    _0x5a1329.sensorModel = _0x205ac3.sensorModel;
    _0x5a1329.rfTxTime = _0x205ac3.rfTxTime;
    return _0x5a1329;
  }
  get ["moveCloseLed"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["moveCloseLed"](_0x4a2a0a) {
    this.raw.setUint8(this.baseOffset, _0x4a2a0a);
    this.raw.setUint8(this.baseOffset + 1, 85 - _0x4a2a0a);
  }
  get ["sensorSleepEnabled"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["sensorSleepEnabled"](_0x349d50) {
    this.raw.setUint8(this.baseOffset + 2, _0x349d50);
    this.raw.setUint8(this.baseOffset + 3, 85 - _0x349d50);
  }
  get ["sensorSleepTime"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['sensorSleepTime'](_0x548df0) {
    this.raw.setUint8(this.baseOffset + 4, _0x548df0);
    this.raw.setUint8(this.baseOffset + 5, 85 - _0x548df0);
  }
  get ["sensorModel"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['sensorModel'](_0x1246ca) {
    this.raw.setUint8(this.baseOffset + 6, _0x1246ca);
    this.raw.setUint8(this.baseOffset + 7, 85 - _0x1246ca);
  }
  get ["rfTxTime"]() {
    return this.raw.getUint8(this.baseOffset + 8);
  }
  set ["rfTxTime"](_0x51f9f2) {
    this.raw.setUint8(this.baseOffset + 8, _0x51f9f2);
    this.raw.setUint8(this.baseOffset + 9, 85 - _0x51f9f2);
  }
}
class MouseButton extends Ff {
  static ['get'](_0x420571) {
    const _0x3f7812 = new MouseButton(MouseButton.getData(), eh.GetEEPROM);
    _0x3f7812.eepromAddress = _0x420571;
    _0x3f7812.dataValidLen = 8;
    return _0x3f7812;
  }
  static ['createOne'](_0x284b4f, _0x4d42ae) {
    const _0x4e7866 = new MouseButton(MouseButton.getData(), eh.SetEEPROM);
    _0x4e7866.eepromAddress = _0x284b4f;
    _0x4e7866.dataValidLen = 4;
    _0x4e7866.button = _0x4d42ae;
    return _0x4e7866;
  }
  static ["create"](_0xb14a1f, _0x4e7019) {
    const _0x4b1681 = new MouseButton(MouseButton.getData(), eh.SetEEPROM);
    _0x4b1681.eepromAddress = _0xb14a1f;
    _0x4b1681.dataValidLen = 8;
    _0x4b1681.buttonList = _0x4e7019;
    return _0x4b1681;
  }
  get ["button"]() {
    return ih.fromDataView(this.raw, this.baseOffset);
  }
  set ["button"](_0x39ffc0) {
    const {
      keyClass: _0x50ab89,
      getKeyValue1: _0x2c33f5,
      getKeyValue2: _0x18cad8
    } = _0x39ffc0;
    this.raw.setUint8(this.baseOffset, _0x39ffc0.keyClass);
    this.raw.setUint8(this.baseOffset + 1, _0x39ffc0.getKeyValue1);
    this.raw.setUint8(this.baseOffset + 2, _0x39ffc0.getKeyValue2);
    this.raw.setUint8(this.baseOffset + 3, 85 - (_0x50ab89 + _0x2c33f5 + _0x18cad8) & 255);
  }
  get ["buttonList"]() {
    const _0x3650ba = [];
    for (let _0x2d69c3 = 0; _0x2d69c3 < 2; _0x2d69c3++) _0x3650ba.push(ih.fromDataView(this.raw, this.baseOffset + 4 * _0x2d69c3));
    return _0x3650ba;
  }
  set ['buttonList'](_0x30b8c7) {
    for (let _0x57f12d = 0; _0x57f12d < 2; _0x57f12d++) {
      const {
        keyClass: _0x2b0568,
        getKeyValue1: _0x1af577,
        getKeyValue2: _0x40a61c
      } = _0x30b8c7[_0x57f12d];
      this.raw.setUint8(this.baseOffset + 4 * _0x57f12d, _0x30b8c7[_0x57f12d].keyClass);
      this.raw.setUint8(this.baseOffset + 4 * _0x57f12d + 1, _0x30b8c7[_0x57f12d].getKeyValue1);
      this.raw.setUint8(this.baseOffset + 4 * _0x57f12d + 2, _0x30b8c7[_0x57f12d].getKeyValue2);
      this.raw.setUint8(this.baseOffset + 4 * _0x57f12d + 3, 85 - (_0x2b0568 + _0x1af577 + _0x40a61c) & 255);
    }
  }
}
class MouseShortcutAction extends Ff {
  static ["get"](_0x1c6421) {
    const _0x2bd3d4 = new MouseShortcutAction(MouseShortcutAction.getData(), eh.GetEEPROM);
    _0x2bd3d4.eepromAddress = _0x1c6421;
    _0x2bd3d4.dataValidLen = 10;
    return _0x2bd3d4;
  }
  static ['create'](_0x42304d) {
    const _0x740c11 = new MouseShortcutAction(MouseShortcutAction.getData(), eh.SetEEPROM);
    _0x740c11.eepromAddress = _0x42304d;
    _0x740c11.dataValidLen = 10;
    return _0x740c11;
  }
  get ["shortcutCount"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["shortcutCount"](_0x14f161) {
    this.raw.setUint8(this.baseOffset, _0x14f161);
  }
  ['getDataView'](_0x14058c) {
    const _0x343689 = MouseShortcutAction.SIZE - this.baseOffset - _0x14058c - 1;
    return new DataView(this.raw.buffer.slice(this.baseOffset + _0x14058c, this.baseOffset + _0x14058c + _0x343689), 0, _0x343689);
  }
  ['setDataView'](_0x45034a, _0x54b437) {
    for (let _0x3f5584 = 0; _0x3f5584 < _0x45034a.byteLength; _0x3f5584++) this.raw.setUint8(this.baseOffset + _0x54b437 + _0x3f5584, _0x45034a.getUint8(_0x3f5584));
  }
}
class MouseMacroAction extends Ff {
  static ["get"](_0x39c9f8, _0x528985 = 10) {
    const _0x18ac17 = new MouseMacroAction(MouseMacroAction.getData(), eh.GetEEPROM);
    _0x18ac17.eepromAddress = _0x39c9f8;
    _0x18ac17.dataValidLen = _0x528985;
    return _0x18ac17;
  }
  static ["create"](_0x42c374, _0x511b73 = 10) {
    const _0x40033c = new MouseMacroAction(MouseMacroAction.getData(), eh.SetEEPROM);
    _0x40033c.eepromAddress = _0x42c374;
    _0x40033c.dataValidLen = _0x511b73;
    return _0x40033c;
  }
  get ["macroCount"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["macroCount"](_0x4c5d86) {
    this.raw.setUint8(this.baseOffset, _0x4c5d86);
  }
  ["getDataView"](_0x2bb4fc) {
    const _0x3a954f = MouseMacroAction.SIZE - this.baseOffset - _0x2bb4fc - 1;
    return new DataView(this.raw.buffer.slice(this.baseOffset + _0x2bb4fc, this.baseOffset + _0x2bb4fc + _0x3a954f), 0, _0x3a954f);
  }
  ["setDataView"](_0x26b91c, _0x8df256) {
    for (let _0xa7fc54 = 0; _0xa7fc54 < _0x26b91c.byteLength; _0xa7fc54++) this.raw.setUint8(this.baseOffset + _0x8df256 + _0xa7fc54, _0x26b91c.getUint8(_0xa7fc54));
  }
}
let ih = class ButtonAction2 {
  constructor(_0x333625, _0x54f141) {
    V(this, "dataView");
    V(this, "offset");
    this.dataView = _0x333625;
    this.offset = _0x54f141;
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
  static ['createDataView'](_0xdd3be2, _0x25f910, _0x5f1109) {
    const _0xed4257 = new DataView(new ArrayBuffer(4));
    _0xed4257.setUint8(0, _0xdd3be2);
    _0xed4257.setUint8(1, _0x25f910);
    _0xed4257.setUint8(2, _0x5f1109);
    _0xed4257.setUint8(3, 85 - (_0xdd3be2 + _0x25f910 + _0x5f1109) & 255);
    return _0xed4257;
  }
  static ['fromDataView'](_0x2aea2c, _0x4f9fea) {
    switch (_0x2aea2c.getUint8(_0x4f9fea)) {
      case Nf.ButtonKeyClass.Close:
        return new uh(_0x2aea2c, _0x4f9fea);
      case Nf.ButtonKeyClass.Mouse:
        return new lh(_0x2aea2c, _0x4f9fea);
      case Nf.ButtonKeyClass.Dpi:
        return new hh(_0x2aea2c, _0x4f9fea);
      case Nf.ButtonKeyClass.RollSideToSide:
        return new gh(_0x2aea2c, _0x4f9fea);
      case Nf.ButtonKeyClass.FirepowerKey:
        return new ph(_0x2aea2c, _0x4f9fea);
      case Nf.ButtonKeyClass.ShortcutKey:
        return new wh(_0x2aea2c, _0x4f9fea);
      case Nf.ButtonKeyClass.Macro:
        return new _h(_0x2aea2c, _0x4f9fea);
      case Nf.ButtonKeyClass.ReportRate:
        return new kh(_0x2aea2c, _0x4f9fea);
      case Nf.ButtonKeyClass.ConfigFile:
        return new Sh(_0x2aea2c, _0x4f9fea);
      case Nf.ButtonKeyClass.Wheel:
        return new Dh(_0x2aea2c, _0x4f9fea);
      default:
        return new uh(_0x2aea2c, _0x4f9fea);
    }
  }
  ["toString"]() {
    return Array.from([this.keyClass, this.getKeyValue1, this.getKeyValue2]).map(_0x47eeed => _0x47eeed.toString().padStart(2, '0')).join('');
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
  static ["create"](_0x48e020) {
    return new _ButtonMouse(super.createDataView(_ButtonMouse.TYPE, _0x48e020, 0), 0);
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
  static ["create"](_0x3e5637) {
    return new _ButtonDpi(super.createDataView(_ButtonDpi.TYPE, _0x3e5637, 0), 0);
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
  static ['create'](_0x501867) {
    return new _ButtonRollSideToSide(super.createDataView(_ButtonRollSideToSide.TYPE, _0x501867, 0), 0);
  }
};
V(dh, 'TYPE', Nf.ButtonKeyClass.RollSideToSide);
let gh = dh;
const mh = class _ButtonFirepowerKey extends ih {
  get ["i18nText"]() {
    return "key.flameKey";
  }
  static ["create"](_0x47541f, _0x329fdf) {
    return new _ButtonFirepowerKey(super.createDataView(_ButtonFirepowerKey.TYPE, _0x47541f, _0x329fdf), 0);
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
  static ["create"](_0x4da423, _0x303994) {
    return new _ButtonMacro(super.createDataView(_ButtonMacro.TYPE, _0x4da423, _0x303994), 0);
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
  static ["create"](_0x35ff60) {
    return new _ButtonConfigFile(super.createDataView(_ButtonConfigFile.TYPE, _0x35ff60, 0), 0);
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
  static ['create'](_0x34e604) {
    return new _ButtonWheel(super.createDataView(_ButtonWheel.TYPE, _0x34e604, 0), 0);
  }
};
V(Uh, "TYPE", Nf.ButtonKeyClass.Wheel);
let Dh = Uh;
const Oh = class _ShortcutAction {
  constructor(_0x41ec3b, _0x394522) {
    V(this, "raw");
    V(this, 'offset');
    this.raw = _0x41ec3b;
    this.offset = _0x394522;
  }
  static ["create"](_0x95aaa2) {
    const _0x5b9b11 = new _ShortcutAction(new DataView(new ArrayBuffer(_ShortcutAction.size)), 0);
    _0x5b9b11.keyStatus = _0x95aaa2.keyState;
    _0x5b9b11.keyType = _0x95aaa2.keyType;
    _0x5b9b11.value1 = _0x95aaa2.value1;
    _0x5b9b11.value2 = _0x95aaa2.value2;
    return _0x5b9b11;
  }
  static ['fromDataView'](_0x13fe7a, _0x2bce26) {
    return new _ShortcutAction(_0x13fe7a, _0x2bce26);
  }
  get ["dataView"]() {
    const _0xf96bf4 = new DataView(new ArrayBuffer(_ShortcutAction.size), 0);
    _0xf96bf4.setUint8(0, this.raw.getUint8(this.offset));
    _0xf96bf4.setUint8(1, this.raw.getUint8(this.offset + 1));
    _0xf96bf4.setUint8(2, this.raw.getUint8(this.offset + 2));
    return _0xf96bf4;
  }
  get ['keyStatus']() {
    if (128 & this.raw.getUint8(this.offset)) return Nf.KeyState.Down;
    return Nf.KeyState.Up;
  }
  set ["keyStatus"](_0x1ebf94) {
    let _0x5a30b5 = this.raw.getUint8(this.offset);
    _0x5a30b5 = _0x1ebf94 === Nf.KeyState.Down ? -65 & (128 | _0x5a30b5) : -129 & (64 | _0x5a30b5);
    this.raw.setUint8(this.offset, _0x5a30b5);
  }
  get ['keyType']() {
    const _0xdaf3ee = this.raw.getUint8(this.offset);
    return [Number(!!(4 & _0xdaf3ee)), Number(!!(2 & _0xdaf3ee)), Number(!!(1 & _0xdaf3ee))].join('');
  }
  set ["keyType"](_0x3b5790) {
    let _0x399105 = this.raw.getUint8(this.offset);
    _0x3b5790 == Nf.KeyType.Modify && (_0x399105 |= 0);
    _0x3b5790 == Nf.KeyType.GeneralKey && (_0x399105 |= 1);
    _0x3b5790 == Nf.KeyType.MediaKey && (_0x399105 |= 2);
    _0x3b5790 == Nf.KeyType.PowerKey && (_0x399105 |= 3);
    _0x3b5790 == Nf.KeyType.MouseKey && (_0x399105 |= 4);
    this.raw.setUint8(this.offset, _0x399105);
  }
  get ["value1"]() {
    return this.raw.getUint8(this.offset + 1);
  }
  set ["value1"](_0x90ae4e) {
    this.raw.setUint8(this.offset + 1, _0x90ae4e);
  }
  get ["value2"]() {
    return this.raw.getUint8(this.offset + 2);
  }
  set ["value2"](_0x3c28c1) {
    this.raw.setUint8(this.offset + 2, _0x3c28c1);
  }
  ["toString"]() {
    return Array.from([this.keyType, this.keyStatus, this.value1, this.value2]).map(_0x60bc1c => _0x60bc1c.toString().padStart(2, '0')).join('');
  }
};
V(Oh, "size", 3);
let xh = Oh,
  Kh = (T = class {
    constructor(_0x29c4b9, _0x544131) {
      V(this, "raw");
      V(this, "offset");
      this.raw = _0x29c4b9;
      this.offset = _0x544131;
    }
    static ['create'](_0x3d5fae) {
      const _0x4dc440 = new T(new DataView(new ArrayBuffer(T.size)), 0);
      _0x4dc440.keyStatus = _0x3d5fae.keyState;
      _0x4dc440.keyType = _0x3d5fae.keyType;
      _0x4dc440.value1 = _0x3d5fae.value1;
      _0x4dc440.value2 = _0x3d5fae.value2;
      _0x4dc440.delay = _0x3d5fae.delay;
      return _0x4dc440;
    }
    static ["fromDataView"](_0x16269b, _0x33e423) {
      return new T(_0x16269b, _0x33e423);
    }
    get ["dataView"]() {
      const _0xe1f25e = new DataView(new ArrayBuffer(T.size), 0);
      _0xe1f25e.setUint8(0, this.raw.getUint8(this.offset));
      _0xe1f25e.setUint8(1, this.raw.getUint8(this.offset + 1));
      _0xe1f25e.setUint8(2, this.raw.getUint8(this.offset + 2));
      _0xe1f25e.setUint16(3, this.raw.getUint16(this.offset + 3));
      return _0xe1f25e;
    }
    get ['keyStatus']() {
      if (128 & this.raw.getUint8(this.offset)) return Nf.KeyState.Down;
      return Nf.KeyState.Up;
    }
    set ["keyStatus"](_0x2689af) {
      let _0x1197b5 = this.raw.getUint8(this.offset);
      _0x1197b5 = _0x2689af === Nf.KeyState.Down ? -65 & (128 | _0x1197b5) : -129 & (64 | _0x1197b5);
      this.raw.setUint8(this.offset, _0x1197b5);
    }
    get ["keyType"]() {
      const _0x242965 = this.raw.getUint8(this.offset);
      return [Number(!!(4 & _0x242965)), Number(!!(2 & _0x242965)), Number(!!(1 & _0x242965))].join('');
    }
    set ["keyType"](_0x416e14) {
      let _0x548004 = this.raw.getUint8(this.offset);
      _0x416e14 == Nf.KeyType.Modify && (_0x548004 |= 0);
      _0x416e14 == Nf.KeyType.GeneralKey && (_0x548004 |= 1);
      _0x416e14 == Nf.KeyType.MediaKey && (_0x548004 |= 2);
      _0x416e14 == Nf.KeyType.PowerKey && (_0x548004 |= 3);
      _0x416e14 == Nf.KeyType.MouseKey && (_0x548004 |= 4);
      _0x416e14 == Nf.KeyType.MoveXY && (_0x548004 |= 5);
      _0x416e14 == Nf.KeyType.Scroll && (_0x548004 |= 6);
      this.raw.setUint8(this.offset, _0x548004);
    }
    get ["value1"]() {
      return this.raw.getUint8(this.offset + 1);
    }
    set ["value1"](_0x3340a3) {
      this.raw.setUint8(this.offset + 1, _0x3340a3);
    }
    get ['value2']() {
      return this.raw.getUint8(this.offset + 2);
    }
    set ["value2"](_0x42ac3b) {
      this.raw.setUint8(this.offset + 2, _0x42ac3b);
    }
    get ['delay']() {
      return this.raw.getUint16(this.offset + 3);
    }
    set ["delay"](_0x4825ab) {
      this.raw.setUint16(this.offset + 3, _0x4825ab);
    }
    ["toString"]() {
      return Array.from([this.keyType, this.keyStatus, this.value1, this.value2, this.delay]).map(_0xfc624d => _0xfc624d.toString().padStart(2, '0')).join('');
    }
  }, V(T, 'size', 5), T);
const Ah = class _UpgradeFile {
  constructor(_0x2442b3, _0x55f462) {
    V(this, 'SIZE', 0);
    V(this, "raw");
    this.SIZE = _0x55f462;
    this.raw = _0x2442b3;
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
    const _0x3bb20d = 23 + _UpgradeFile.MaxCmdLength,
      _0x12e0c9 = this.raw.buffer.slice(_0x3bb20d, _0x3bb20d + _UpgradeFile.MaxCmdLength);
    return this.arrayBufferToCharString(_0x12e0c9);
  }
  ["arrayBufferToCharString"](_0x4c25bd) {
    return Array.from(new Uint8Array(_0x4c25bd)).map(_0xc22e7d => String.fromCharCode(_0xc22e7d)).filter(_0x18f119 => '\x00' != _0x18f119).join('');
  }
  ["pointPathToObject"](_0x1cbad0) {
    const _0x3e1244 = this.arrayBufferToCharString(_0x1cbad0).split('&'),
      _0x3bef7c = {
        vendorId: "vid_(.*?)$",
        productId: "pid_(.*?)$"
      };
    return Object.assign({}, ...Object.keys(_0x3bef7c).map(_0x1b74d6 => {
      const _0x4a65f3 = _0x3bef7c[_0x1b74d6];
      return {
        [_0x1b74d6]: parseInt(_0x3e1244.map(_0x2528ed => {
          var _0x4bf9ff;
          if (null == (_0x4bf9ff = _0x2528ed.match(_0x4a65f3))) return void 0;
          return _0x4bf9ff[1];
        }).find(Boolean), 16)
      };
    }).flat());
  }
  get ['bootInputEndPoint']() {
    const _0xd39c59 = 23 + 2 * _UpgradeFile.MaxCmdLength,
      _0x1eb30c = this.raw.buffer.slice(_0xd39c59, _0xd39c59 + _UpgradeFile.MaxCmdLength);
    return {
      usagePage: 65282,
      usage: 2,
      ...this.pointPathToObject(_0x1eb30c)
    };
  }
  get ["bootOutputEndPoint"]() {
    const _0x2bd61b = 23 + 3 * _UpgradeFile.MaxCmdLength,
      _0x419a05 = this.raw.buffer.slice(_0x2bd61b, _0x2bd61b + _UpgradeFile.MaxCmdLength);
    return {
      usagePage: 65282,
      usage: 2,
      ...this.pointPathToObject(_0x419a05)
    };
  }
  get ["normalInputEndPoint"]() {
    const _0x5851e9 = 23 + 4 * _UpgradeFile.MaxCmdLength,
      _0x29bc53 = this.raw.buffer.slice(_0x5851e9, _0x5851e9 + _UpgradeFile.MaxCmdLength);
    return {
      usagePage: 65282,
      usage: 2,
      ...this.pointPathToObject(_0x29bc53)
    };
  }
  get ["normalOutputEndPoint"]() {
    const _0x3bc45a = 23 + 5 * _UpgradeFile.MaxCmdLength,
      _0x53469c = this.raw.buffer.slice(_0x3bc45a, _0x3bc45a + _UpgradeFile.MaxCmdLength);
    return {
      usagePage: 65282,
      usage: 2,
      ...this.pointPathToObject(_0x53469c)
    };
  }
  get ["resetToUpdateModeCmd"]() {
    const _0x38cf2a = 23 + 6 * _UpgradeFile.MaxCmdLength;
    return new DataView(this.raw.buffer.slice(_0x38cf2a, _0x38cf2a + _UpgradeFile.MaxCmdLength));
  }
  get ['prepareDownLoadCmd']() {
    const _0x2d4a5a = 23 + 7 * _UpgradeFile.MaxCmdLength;
    return new DataView(this.raw.buffer.slice(_0x2d4a5a, _0x2d4a5a + _UpgradeFile.MaxCmdLength));
  }
  get ["dataDownLoadCmd"]() {
    const _0x484d2a = 23 + 8 * _UpgradeFile.MaxCmdLength;
    return new DataView(this.raw.buffer.slice(_0x484d2a, _0x484d2a + _UpgradeFile.MaxCmdLength));
  }
  get ["sensorName"]() {
    const _0x2439f5 = 23 + 9 * _UpgradeFile.MaxCmdLength,
      _0x39e762 = this.raw.buffer.slice(_0x2439f5, _0x2439f5 + _UpgradeFile.MaxCmdLength);
    return this.arrayBufferToCharString(_0x39e762);
  }
  get ["productName"]() {
    const _0x5c2128 = 23 + 10 * _UpgradeFile.MaxCmdLength,
      _0x981c07 = this.raw.buffer.slice(_0x5c2128, _0x5c2128 + _UpgradeFile.MaxCmdLength);
    return this.arrayBufferToCharString(_0x981c07);
  }
  ['getDataView'](_0x52ca58, _0x432938) {
    return new DataView(this.raw.buffer.slice(_0x52ca58, _0x52ca58 + _0x432938));
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
  static ["fromDataView"](_0x3a67d9) {
    return new _UpgradeDataReporting(_0x3a67d9, eh.ReportMouseUpgradeStatus);
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
  static ['fromDataView'](_0x5b0fbf) {
    return new _UpgradeDataErrorReporting(_0x5b0fbf, eh.ReportMouseUpgradeErrorStatus);
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
    ["inputReportListener"](_0x3d486f) {
      super.inputReportListener(_0x3d486f);
      this.handleInputReport(_0x3d486f.data);
    }
    ['onDeviceToHostReportReceived'](_0x1b9347) {}
    ["handleInputReport"](_0x3544c2) {
      this.mutex.runExclusive(() => {
        const _0x2fcf81 = _0x3544c2.getUint8(0);
        if (0 == _0x2fcf81) return void this.onDeviceToHostReportReceived(_0x3544c2);
        let _0x16e0fe = false;
        for (const _0x25d0f0 of this.pendingTransfers) if (_0x25d0f0.requestCode === _0x2fcf81) {
          _0x25d0f0.promiseResolve(_0x3544c2);
          this.pendingTransfers.splice(this.pendingTransfers.indexOf(_0x25d0f0), 1);
          _0x16e0fe = true;
          break;
        }
        _0x2fcf81 === ah.dataReporting && (Pr("data-reporting", ah.fromDataView(_0x3544c2)), _0x16e0fe = true);
        _0x2fcf81 === Mh.dataReporting && (Pr("compx-upgrade-reporting", Mh.fromDataView(_0x3544c2)), _0x16e0fe = true);
        _0x2fcf81 === Rh.dataReporting && (Pr("compx-upgrade-reporting", Rh.fromDataView(_0x3544c2)), _0x16e0fe = true);
        _0x16e0fe || new Uint8Array(_0x3544c2.buffer).toString();
      });
    }
    async ["transferForResultAsync"](_0x342024, _0x29fe04 = false, _0x51e7c6 = 8) {
      var _0x459745, _0x6cfa89;
      const _0x4aa0fa = new DataView(_0x342024.buffer).getUint8(0);
      let _0x452295;
      const _0x1b892c = new Promise(_0x58da3e => {
          _0x452295 = _0x58da3e;
        }),
        _0x33428d = {
          requestCode: _0x4aa0fa,
          data: _0x342024,
          promiseResolve: _0x452295
        };
      await new Promise(_0x5ee93f => {
        const _0x137c31 = setInterval(() => {
          0 === this.pendingTransfers.length && (_0x5ee93f(), clearInterval(_0x137c31));
        }, 1);
      });
      this.pendingTransfers.push(_0x33428d);
      if (_0x29fe04) await (null == (_0x6cfa89 = this.device) ? void 0 : _0x6cfa89.sendFeatureReport(_0x51e7c6, _0x342024));else await (null == (_0x459745 = this.device) ? void 0 : _0x459745.sendReport(_0x51e7c6, _0x342024));
      return _0x1b892c;
    }
  };
class Compx extends Eh {
  async ['downLoadData']() {
    return this.transferForResult(DownLoadData.get([Math.floor(255 * Math.random()), Math.floor(255 * Math.random()), Math.floor(255 * Math.random()), Math.floor(255 * Math.random())]));
  }
  async ["downLoadDriverStatus"](_0xb4139) {
    return this.transferForResult(DownLoadDriverStatus.get(_0xb4139));
  }
  async ["getWirelessMouseOnline"]() {
    return this.transferForResult(WirelessMouseOnline.get());
  }
  async ["getBatteryLevel"]() {
    return this.transferForResult(nh.get());
  }
  async ["startPairing"](_0x3da7b5, _0x4aae1b) {
    return this.transferForResult(StartPairing.get(_0x3da7b5, _0x4aae1b));
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
  async ["setCurrentConfigFile"](_0x4f23a7) {
    return this.transferForResult(CurrentConfigFile.create(_0x4f23a7));
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
  async ['setRGBModeBy4K'](_0x5bf72d) {
    return this.transferForResult(RGBModeBy4K.create(_0x5bf72d));
  }
  async ["getFarDistanceMode"]() {
    return this.transferForResult(FarDistance.get());
  }
  async ["setFarDistanceMode"](_0x2a60d8) {
    return this.transferForResult(FarDistance.create(_0x2a60d8));
  }
  async ["getDongleLightMode"]() {
    return this.transferForResult(DongleLight.get());
  }
  async ["setDongleLightMode"](_0x39a280) {
    return this.transferForResult(DongleLight.create(_0x39a280));
  }
  async ["getMouseReportRateDpi"]() {
    return this.transferForResult(MouseReportRateDpi.get());
  }
  async ["setMouseReportRateDpi"](_0x2d49e8) {
    return this.transferForResult(MouseReportRateDpi.create(_0x2d49e8));
  }
  async ['getMouseDpiConfig']() {
    const _0x355d7b = [Nf.Address.dpi1, Nf.Address.dpi3, Nf.Address.dpi5, Nf.Address.dpi7],
      _0x3c6277 = [];
    for (const _0x2987eb of _0x355d7b) {
      const _0x32e8a2 = await this.transferForResult(MouseDpiConfig.get(_0x2987eb));
      _0x3c6277.push(..._0x32e8a2.dpiList);
    }
    return _0x3c6277;
  }
  async ["setMouseDpiConfigOne"](_0x1c1845, _0x45383e) {
    const _0x5ac39e = [Nf.Address.dpi1, Nf.Address.dpi3, Nf.Address.dpi5, Nf.Address.dpi7],
      _0x3e520c = rt.chunk(_0x1c1845, 2),
      _0x48f0e7 = Math.floor(_0x45383e / 2);
    return await this.transferForResult(MouseDpiConfig.create(_0x5ac39e[_0x48f0e7], _0x3e520c[_0x48f0e7]));
  }
  async ["setMouseDpiConfig"](_0x1776c7) {
    const _0x454268 = [Nf.Address.dpi1, Nf.Address.dpi3, Nf.Address.dpi5, Nf.Address.dpi7],
      _0x2e9787 = rt.chunk(_0x1776c7, 2);
    let _0x2a44ae = 0,
      _0x43b570 = 0;
    for (const _0x468623 of _0x454268) {
      const _0x45ff8b = await this.transferForResult(MouseDpiConfig.create(_0x468623, _0x2e9787[_0x2a44ae]));
      _0x2a44ae++;
      _0x43b570 += _0x45ff8b.commandStatus;
    }
    return _0x43b570;
  }
  async ["getMouseDpiColorConfig"]() {
    const _0x8f500 = [Nf.Address.dpi1Color, Nf.Address.dpi3Color, Nf.Address.dpi5Color, Nf.Address.dpi7Color],
      _0x5867dc = [];
    for (const _0x57b24f of _0x8f500) {
      const _0x4a8acb = await this.transferForResult(MouseDpiColorConfig.get(_0x57b24f));
      _0x5867dc.push(..._0x4a8acb.dpiColorList);
    }
    return _0x5867dc;
  }
  async ["setMouseDpiColorConfigOne"](_0x93fbda, _0x21a0b5) {
    const _0x5fd9c4 = [Nf.Address.dpi1Color, Nf.Address.dpi3Color, Nf.Address.dpi5Color, Nf.Address.dpi7Color],
      _0x291844 = Math.floor(_0x21a0b5 / 2),
      _0x2a64e0 = rt.chunk(_0x93fbda, 2);
    return await this.transferForResult(MouseDpiColorConfig.create(_0x5fd9c4[_0x291844], _0x2a64e0[_0x291844]));
  }
  async ["setMouseDpiColorConfig"](_0x306728) {
    const _0x3172cd = [Nf.Address.dpi1Color, Nf.Address.dpi3Color, Nf.Address.dpi5Color, Nf.Address.dpi7Color],
      _0x4deb21 = rt.chunk(_0x306728, 2);
    let _0xcad5ca = 0,
      _0x68a1e0 = 0;
    for (const _0x2e7620 of _0x3172cd) {
      _0x68a1e0 += (await this.transferForResult(MouseDpiColorConfig.create(_0x2e7620, _0x4deb21[_0xcad5ca]))).commandStatus;
      _0xcad5ca++;
    }
    return _0x68a1e0;
  }
  async ['getMouseDpiRGBEffects']() {
    return this.transferForResult(MouseDpiRGBEffects.get());
  }
  async ["setMouseDpiRGBEffects"](_0x2cff64) {
    return await this.transferForResult(MouseDpiRGBEffects.create(_0x2cff64));
  }
  async ['getMouseBeforePerformanceSetting']() {
    return await this.transferForResult(MouseBeforePerformanceSetting.get());
  }
  async ["setMouseBeforePerformanceSetting"](_0x5b6ceb) {
    return await this.transferForResult(MouseBeforePerformanceSetting.create(_0x5b6ceb));
  }
  async ['getMouseAfterPerformanceSetting']() {
    return await this.transferForResult(MouseAfterPerformanceSetting.get());
  }
  async ["setMouseAfterPerformanceSetting"](_0x4b226b) {
    return await this.transferForResult(MouseAfterPerformanceSetting.create(_0x4b226b));
  }
  async ["getMouseButton"]() {
    const _0x39440e = [Nf.Address.key0, Nf.Address.key2, Nf.Address.key4],
      _0x2885a4 = [];
    for (const _0x2c8f8d of _0x39440e) {
      const _0x23432a = await this.transferForResult(MouseButton.get(_0x2c8f8d));
      _0x2885a4.push(..._0x23432a.buttonList);
    }
    return _0x2885a4;
  }
  async ["setMouseButtonOne"](_0x9af40, _0x1b22ff) {
    const {
      commandStatus: _0x4f5abc
    } = await this.transferForResult(MouseButton.createOne(_0x9af40, _0x1b22ff));
    return _0x4f5abc;
  }
  async ["setMouseButton"](_0x5b6ce3) {
    const _0x2c304f = [Nf.Address.key0, Nf.Address.key2, Nf.Address.key4];
    let _0x2a80c9 = 0;
    for (let _0x263b55 = 0; _0x263b55 < _0x2c304f.length; _0x263b55++) {
      const _0x3187c3 = _0x5b6ce3.splice(0, 2);
      _0x2a80c9 += (await this.transferForResult(MouseButton.create(_0x2c304f[_0x263b55], _0x3187c3))).commandStatus;
    }
    return _0x2a80c9;
  }
  async ["getShortcutAction"](_0x5f0567) {
    const _0x3b8156 = [Nf.Address.keyShortcuts0, Nf.Address.keyShortcuts1, Nf.Address.keyShortcuts2, Nf.Address.keyShortcuts3, Nf.Address.keyShortcuts4, Nf.Address.keyShortcuts5][_0x5f0567];
    let _0x2bcbbb = 0;
    const _0x50ea27 = [];
    for (let _0x59f5ae = 0; _0x59f5ae < 2; _0x59f5ae++) {
      const _0x24462f = await this.transferForResult(MouseShortcutAction.get(_0x3b8156 + 10 * _0x59f5ae));
      0 == _0x59f5ae && (_0x2bcbbb = _0x24462f.shortcutCount);
      _0x50ea27.push(...Array.from(new Uint8Array(_0x24462f.getDataView(Number(0 == _0x59f5ae)).buffer)));
    }
    if (0 == _0x2bcbbb || _0x2bcbbb > 6) return [];
    const _0x311cc1 = 3 * _0x2bcbbb,
      _0x1150ca = new DataView(new Uint8Array(_0x50ea27.slice(0, _0x311cc1)).buffer);
    return Array.from({
      length: _0x2bcbbb
    }, (_0x5db5d8, _0x21e775) => xh.fromDataView(_0x1150ca, 3 * _0x21e775));
  }
  async ["setShortcutAction"](_0x3ee976, _0x54592b) {
    const _0x24d0b0 = [Nf.Address.keyShortcuts0, Nf.Address.keyShortcuts1, Nf.Address.keyShortcuts2, Nf.Address.keyShortcuts3, Nf.Address.keyShortcuts4, Nf.Address.keyShortcuts5][_0x3ee976],
      _0x1059f8 = [];
    for (const _0x1fd597 of _0x54592b) _0x1059f8.push(...new Uint8Array(_0x1fd597.dataView.buffer));
    const _0x55bb45 = 85 - rt.sum([_0x54592b.length, ..._0x1059f8]) & 255;
    _0x1059f8.push(_0x55bb45);
    const _0x50ea92 = new DataView(new Uint8Array(_0x1059f8).buffer),
      _0x184195 = _0x50ea92.byteLength <= 9 ? 1 : 2;
    let _0x42f2c0 = 0;
    for (let _0xdf83b8 = 0; _0xdf83b8 < _0x184195; _0xdf83b8++) {
      const _0x36ee6e = MouseShortcutAction.create(_0x24d0b0 + 10 * _0xdf83b8);
      0 == _0xdf83b8 && (_0x36ee6e.shortcutCount = _0x54592b.length);
      const _0x3b9491 = _0x50ea92.buffer.slice(9 * _0xdf83b8, (_0xdf83b8 + 1) * (0 == _0xdf83b8 ? 9 : 10));
      _0x36ee6e.setDataView(new DataView(_0x3b9491), Number(0 == _0xdf83b8));
      _0x42f2c0 += (await this.transferForResult(_0x36ee6e)).commandStatus;
    }
    return _0x42f2c0;
  }
  async ["getMouseSilentHeight"]() {
    return this.transferForResult(MouseSilentHeight.get());
  }
  async ['setMouseSilentHeight'](_0x54ae1d) {
    return this.transferForResult(MouseSilentHeight.create(_0x54ae1d));
  }
  async ['getMouseMacroList'](_0x1f0e22) {
    const _0x4904b8 = [Nf.Address.macro0, Nf.Address.macro1, Nf.Address.macro2, Nf.Address.macro3, Nf.Address.macro4, Nf.Address.macro5, Nf.Address.macro6][_0x1f0e22] + 31,
      _0x247d93 = await this.transferForResult(MouseMacroAction.get(_0x4904b8, 1));
    if (_0x247d93.macroCount <= 0 || _0x247d93.macroCount > 70) return [];
    const _0x226e67 = 5 * _0x247d93.macroCount / 10,
      _0x2086dd = [];
    for (let _0x2007c8 = 0; _0x2007c8 < _0x226e67; _0x2007c8++) {
      const _0x45908d = _0x4904b8 + 1 + 10 * _0x2007c8,
        _0x15b803 = await this.transferForResult(MouseMacroAction.get(_0x45908d));
      for (let _0x51535c = 0; _0x51535c < 2; _0x51535c++) _0x2086dd.push(Kh.fromDataView(_0x15b803.getDataView(0), 5 * _0x51535c));
    }
    return _0x2086dd;
  }
  async ["setMouseMacroList"](_0x727630, _0x2645e5) {
    if (_0x2645e5.length > 70) return 1;
    const _0x11b168 = [Nf.Address.macro0, Nf.Address.macro1, Nf.Address.macro2, Nf.Address.macro3, Nf.Address.macro4, Nf.Address.macro5, Nf.Address.macro6, Nf.Address.macro7, Nf.Address.macro8, Nf.Address.macro9, Nf.Address.macro10, Nf.Address.macro11, Nf.Address.macro12, Nf.Address.macro13, Nf.Address.macro14, Nf.Address.macro15][_0x727630],
      _0x5b27fd = [8, ...Array.from({
        length: 8
      }, () => 2), ...Array.from({
        length: 22
      }, () => 255)],
      _0x561894 = [_0x2645e5.length];
    for (const _0x22f30b of _0x2645e5) _0x561894.push(...new Uint8Array(_0x22f30b.dataView.buffer));
    const _0x55388a = 85 - rt.sum(_0x561894) & 255;
    _0x561894.push(_0x55388a);
    let _0x15236a = 0;
    const _0x3173e8 = new DataView(new Uint8Array([..._0x5b27fd, ..._0x561894]).buffer),
      _0x470b19 = _0x3173e8.byteLength / 10;
    for (let _0x4283c2 = 0; _0x4283c2 < _0x470b19; _0x4283c2++) {
      const _0x39bde5 = MouseMacroAction.create(_0x11b168 + 10 * _0x4283c2),
        _0x1628f5 = _0x3173e8.buffer.slice(10 * _0x4283c2, 10 * (_0x4283c2 + 1));
      _0x39bde5.setDataView(new DataView(_0x1628f5), 0);
      _0x15236a += (await this.transferForResult(_0x39bde5)).commandStatus;
    }
    return _0x15236a;
  }
  async ["transferForResult"](_0x1dd72a) {
    _0x1dd72a.raw = await this.transferForResultAsync(_0x1dd72a.toUint8Array());
    return _0x1dd72a;
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
  Nh = Lh.map(_0x3cb124 => _0x3cb124.filters).flat().map(_0x33233a => null == _0x33233a ? void 0 : _0x33233a.boot).filter(Boolean),
  Gh = Lh.map(_0x2b03ac => _0x2b03ac.filters).flat().filter(_0x5480e7 => !(null == _0x5480e7 ? void 0 : _0x5480e7.receiver)).map(_0x7af1a2 => null == _0x7af1a2 ? void 0 : _0x7af1a2.custom).filter(Boolean).reduce((_0x1f62c5, _0x5ddd1f) => (_0x1f62c5[_0x5ddd1f.mouseCidMid] = _0x5ddd1f, _0x1f62c5), {});
var zh = (_0x27222b => (_0x27222b[_0x27222b.usbMouse = 0] = 'usbMouse', _0x27222b[_0x27222b.dongleMouse = 1] = 'dongleMouse', _0x27222b[_0x27222b.dongle = 0] = "dongle", _0x27222b))(zh || {}),
  Hh = (_0x1275c6 => (_0x1275c6[_0x1275c6.GetDongleConnectStatus = 1] = "GetDongleConnectStatus", _0x1275c6[_0x1275c6.SetDonglePairMode = 2] = 'SetDonglePairMode', _0x1275c6[_0x1275c6.ClearDonglePairInfo = 3] = 'ClearDonglePairInfo', _0x1275c6[_0x1275c6.GetDonglePairStatus = 4] = "GetDonglePairStatus", _0x1275c6[_0x1275c6.SetReportRate = 1] = "SetReportRate", _0x1275c6[_0x1275c6.SetDpi = 2] = "SetDpi", _0x1275c6[_0x1275c6.SetSilentHeight = 3] = "SetSilentHeight", _0x1275c6[_0x1275c6.SetButtonKey = 5] = "SetButtonKey", _0x1275c6[_0x1275c6.SetMacroKey = 6] = "SetMacroKey", _0x1275c6[_0x1275c6.GetBatteryLevel = 7] = "GetBatteryLevel", _0x1275c6[_0x1275c6.GetCurrentWorkerMode = 8] = "GetCurrentWorkerMode", _0x1275c6[_0x1275c6.GetCurrentMouseConfig = 9] = "GetCurrentMouseConfig", _0x1275c6[_0x1275c6.SetCurrentMouseConfig = 10] = "SetCurrentMouseConfig", _0x1275c6[_0x1275c6.SetLinearCorrection = 11] = "SetLinearCorrection", _0x1275c6[_0x1275c6.SetRippleControl = 12] = "SetRippleControl", _0x1275c6[_0x1275c6.SetMotionSync = 13] = 'SetMotionSync', _0x1275c6[_0x1275c6.SetLEDLightEffect = 20] = 'SetLEDLightEffect', _0x1275c6[_0x1275c6.SetSensorSleepTime = 21] = "SetSensorSleepTime", _0x1275c6[_0x1275c6.SetStabilizationTime = 22] = "SetStabilizationTime", _0x1275c6[_0x1275c6.GetBatteryChargingStatus = 15] = 'GetBatteryChargingStatus', _0x1275c6[_0x1275c6.Reset = 19] = "Reset", _0x1275c6[_0x1275c6.GetAddressData = 23] = "GetAddressData", _0x1275c6[_0x1275c6.SetAddressData = 24] = "SetAddressData", _0x1275c6[_0x1275c6.GetDeviceType = 26] = "GetDeviceType", _0x1275c6[_0x1275c6.GetDeviceVersion = 28] = "GetDeviceVersion", _0x1275c6))(Hh || {}),
  Wh = (_0x1f9c63 => (_0x1f9c63[_0x1f9c63.Hz1000 = 0] = "Hz1000", _0x1f9c63[_0x1f9c63.Hz500 = 1] = "Hz500", _0x1f9c63[_0x1f9c63.Hz250 = 2] = "Hz250", _0x1f9c63[_0x1f9c63.Hz125 = 3] = "Hz125", _0x1f9c63[_0x1f9c63.Hz8000 = 4] = "Hz8000", _0x1f9c63[_0x1f9c63.Hz4000 = 5] = "Hz4000", _0x1f9c63[_0x1f9c63.Hz2000 = 6] = "Hz2000", _0x1f9c63))(Wh || {}),
  jh = (_0x22b987 => (_0x22b987[_0x22b987.None = 0] = "None", _0x22b987[_0x22b987.Mouse = 1] = 'Mouse', _0x22b987[_0x22b987.SystemKey = 2] = "SystemKey", _0x22b987[_0x22b987.Keyboard = 3] = "Keyboard", _0x22b987[_0x22b987.Macro = 4] = "Macro", _0x22b987[_0x22b987.FireKey = 5] = "FireKey", _0x22b987[_0x22b987.DpiCycle = 10] = 'DpiCycle', _0x22b987[_0x22b987.DpiAdd = 11] = 'DpiAdd', _0x22b987[_0x22b987.DpiSub = 12] = 'DpiSub', _0x22b987[_0x22b987.ScrollUp = 13] = "ScrollUp", _0x22b987[_0x22b987.ScrollDown = 14] = "ScrollDown", _0x22b987[_0x22b987.ScrollLeft = 15] = 'ScrollLeft', _0x22b987[_0x22b987.ScrollRight = 16] = 'ScrollRight', _0x22b987))(jh || {}),
  Yh = (_0x498ea8 => (_0x498ea8[_0x498ea8.Left = 0] = 'Left', _0x498ea8[_0x498ea8.Right = 1] = "Right", _0x498ea8[_0x498ea8.Middle = 2] = "Middle", _0x498ea8[_0x498ea8.Center = 2] = "Center", _0x498ea8[_0x498ea8.Back = 3] = "Back", _0x498ea8[_0x498ea8.Forward = 4] = "Forward", _0x498ea8[_0x498ea8.Side1 = 4] = "Side1", _0x498ea8[_0x498ea8.Side2 = 3] = "Side2", _0x498ea8))(Yh || {}),
  $h = (_0x3d9d02 => (_0x3d9d02[_0x3d9d02.None = 0] = "None", _0x3d9d02[_0x3d9d02.LeftCtrl = 1] = "LeftCtrl", _0x3d9d02[_0x3d9d02.LeftShift = 2] = 'LeftShift', _0x3d9d02[_0x3d9d02.LeftAlt = 4] = "LeftAlt", _0x3d9d02[_0x3d9d02.LeftWin = 8] = "LeftWin", _0x3d9d02[_0x3d9d02.RightCtrl = 16] = "RightCtrl", _0x3d9d02[_0x3d9d02.RightShift = 32] = "RightShift", _0x3d9d02[_0x3d9d02.RightAlt = 64] = "RightAlt", _0x3d9d02[_0x3d9d02.RightWin = 128] = "RightWin", _0x3d9d02))($h || {}),
  qh = (_0x521b8c => (_0x521b8c[_0x521b8c.dongle1K = 0] = "dongle1K", _0x521b8c[_0x521b8c.dongle4K = 1] = "dongle4K", _0x521b8c[_0x521b8c.wired1K = 2] = "wired1K", _0x521b8c[_0x521b8c.wired8K = 3] = "wired8K", _0x521b8c[_0x521b8c.dongle2K = 4] = "dongle2K", _0x521b8c[_0x521b8c.dongle8K = 5] = "dongle8K", _0x521b8c[_0x521b8c.wired2K = 6] = "wired2K", _0x521b8c[_0x521b8c.wired4K = 7] = "wired4K", _0x521b8c))(qh || {});
let Jh = (R = class {
  constructor(_0x5345a8, _0x174d99, _0x2baeaa = 114) {
    V(this, "dongleInstructions", false);
    V(this, 'raw');
    let _0xaca896 = _0x5345a8 ? _0x5345a8.buffer : new ArrayBuffer(R.SIZE);
    this.raw = new DataView(_0xaca896);
    this.commandId = _0x174d99;
    this.cmdCode = _0x2baeaa;
  }
  static ["getData"]() {
    return new DataView(new ArrayBuffer(R.SIZE));
  }
  get ["cmdCode"]() {
    return this.raw.getUint8(1);
  }
  set ["cmdCode"](_0x5c1861) {
    this.raw.setUint8(1, _0x5c1861);
  }
  get ["commandId"]() {
    return this.raw.getUint8(5);
  }
  set ["commandId"](_0x510c97) {
    this.raw.setUint8(5, _0x510c97);
  }
  get ['paramLen']() {
    return this.raw.getUint8(2);
  }
  set ["paramLen"](_0x412e22) {
    this.raw.setUint8(2, _0x412e22);
  }
  get ["returnStatus"]() {
    return this.raw.getUint8(2);
  }
  get ["cmdSn"]() {
    return this.raw.getUint8(3);
  }
  set ['cmdSn'](_0x179fd5) {
    this.raw.setUint8(3, _0x179fd5);
  }
  get ["target"]() {
    return this.raw.getUint8(4);
  }
  set ['target'](_0x17345f) {
    this.raw.setUint8(4, _0x17345f);
  }
  get ["checkSum"]() {
    return this.raw.getUint8(0);
  }
  set ['checkSum'](_0x15d779) {
    this.raw.setUint8(0, _0x15d779);
  }
  get ["cmdLen"]() {
    return this.raw.getUint8(6);
  }
  set ["cmdLen"](_0x389f9e) {
    this.raw.setUint8(6, _0x389f9e);
  }
  ["toUint8Array"]() {
    const _0x369e99 = new Uint8Array(this.raw.buffer);
    this.checkSum = 255 & rt.sum(_0x369e99.slice(1, _0x369e99.length));
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
  constructor(_0xf4a290, _0x13f706 = 0) {
    this.dataView = _0xf4a290;
    this.offset = _0x13f706;
  }
  get ['left']() {
    const _0x287659 = ButtonAction3.fromDataView(this.dataView, this.offset);
    if (_0x287659 instanceof Zh) return ed.create(Yh.Left);
    return _0x287659;
  }
  get ["right"]() {
    const _0x502234 = ButtonAction3.fromDataView(this.dataView, this.offset + 5);
    if (_0x502234 instanceof Zh) return ed.create(Yh.Right);
    return _0x502234;
  }
  get ["center"]() {
    const _0x11c469 = ButtonAction3.fromDataView(this.dataView, this.offset + 10);
    if (_0x11c469 instanceof Zh) return ed.create(Yh.Center);
    return _0x11c469;
  }
  get ["side1"]() {
    const _0x37eb3d = ButtonAction3.fromDataView(this.dataView, this.offset + 15);
    if (_0x37eb3d instanceof Zh) return ed.create(Yh.Forward);
    return _0x37eb3d;
  }
  get ['side2']() {
    const _0x233b30 = ButtonAction3.fromDataView(this.dataView, this.offset + 20);
    if (_0x233b30 instanceof Zh) return ed.create(Yh.Back);
    return _0x233b30;
  }
}
class ButtonAction3 {
  constructor(_0x767549, _0x3274f1) {
    V(this, "dataView");
    V(this, "offset");
    this.dataView = _0x767549;
    this.offset = _0x3274f1;
  }
  get ['i18nText']() {
    return "Unknown";
  }
  get ["keyClass"]() {
    return this.dataView.getUint8(this.offset);
  }
  static ["createDataView"](_0x5d9b18, _0x23571c, _0x3c9d5e, _0xef0010) {
    const _0x13503e = new DataView(new ArrayBuffer(5));
    _0x13503e.setUint8(0, _0x5d9b18);
    _0x13503e.setUint8(1, _0x23571c);
    _0x13503e.setUint8(2, _0x3c9d5e);
    _0x13503e.setUint8(3, _0xef0010[0]);
    _0x13503e.setUint8(4, _0xef0010[1]);
    return _0x13503e;
  }
  static ["fromJSON"](_0x49525d) {
    const _0x4c10b6 = new DataView(new Uint8Array([_0x49525d.keyClass, _0x49525d.modifierKeys, _0x49525d.buttonKeyMouse, ..._0x49525d.keycode]).buffer);
    return ButtonAction3.fromDataView(_0x4c10b6, 0);
  }
  static ["fromDataView"](_0x1c94bc, _0xa28ad9) {
    switch (_0x1c94bc.getUint8(_0xa28ad9)) {
      case jh.None:
        return new Zh(_0x1c94bc, _0xa28ad9);
      case jh.Mouse:
        return new ed(_0x1c94bc, _0xa28ad9);
      case jh.SystemKey:
        return new rd(_0x1c94bc, _0xa28ad9);
      case jh.Keyboard:
        return new nd(_0x1c94bc, _0xa28ad9);
      case jh.Macro:
        return new id(_0x1c94bc, _0xa28ad9);
      case jh.FireKey:
        return new ud(_0x1c94bc, _0xa28ad9);
      case jh.DpiCycle:
        return new ld(_0x1c94bc, _0xa28ad9);
      case jh.DpiAdd:
        return new hd(_0x1c94bc, _0xa28ad9);
      case jh.DpiSub:
        return new gd(_0x1c94bc, _0xa28ad9);
      case jh.ScrollUp:
        return new pd(_0x1c94bc, _0xa28ad9);
      case jh.ScrollDown:
        return new wd(_0x1c94bc, _0xa28ad9);
      case jh.ScrollLeft:
        return new _d(_0x1c94bc, _0xa28ad9);
      case jh.ScrollRight:
        return new kd(_0x1c94bc, _0xa28ad9);
      default:
        return new ButtonAction3(_0x1c94bc, _0xa28ad9);
    }
  }
  ["toString"]() {
    return Array.from(new Uint8Array(this.dataView.buffer)).map(_0x2ab4ae => _0x2ab4ae.toString().padStart(2, '0')).join('');
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
  static ["create"](_0x10ee1b) {
    return new _ButtonMouseAction(super.createDataView(_ButtonMouseAction.TYPE, $h.None, _0x10ee1b, [0, 0]), 0);
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
  static ["create"](_0x2c7bfe) {
    return new _ButtonSystemKeyAction(super.createDataView(_ButtonSystemKeyAction.TYPE, $h.None, Yh.Left, _0x2c7bfe), 0);
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
  static ['create'](_0x4278d8, _0x5c8199 = [0, 0]) {
    return new _ButtonKeyboardAction(super.createDataView(_ButtonKeyboardAction.TYPE, _0x4278d8, Yh.Left, _0x5c8199), 0);
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
  static ["create"](_0x59ddef) {
    return new _ButtonMacroAction(super.createDataView(_ButtonMacroAction.TYPE, $h.None, Yh.Left, [_0x59ddef, 0]), 0);
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
  static ['create'](_0xe9ba40 = 1, _0xd13e4e = 0) {
    const _0x1b6903 = new DataView(new ArrayBuffer(2));
    _0x1b6903.setUint16(0, _0xd13e4e, true);
    return new _ButtonFireKeyAction(super.createDataView(_ButtonFireKeyAction.TYPE, $h.None, _0xe9ba40, [_0x1b6903.getUint8(0), _0x1b6903.getUint8(1)]), 0);
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
  constructor(_0x14ace0, _0x217b27 = 0) {
    V(this, "dataView");
    V(this, "offset");
    this.dataView = _0x14ace0;
    this.offset = _0x217b27;
  }
  get ["currentIndex"]() {
    return this.dataView.getUint8(this.offset);
  }
  set ["currentIndex"](_0x2442a4) {
    this.dataView.setUint8(this.offset, _0x2442a4);
  }
  get ["max"]() {
    return this.dataView.getUint8(this.offset + 1);
  }
  set ["max"](_0x47747e) {
    this.dataView.setUint8(this.offset + 1, _0x47747e);
  }
  get ["dpiValues"]() {
    return Array.from({
      length: 8
    }, (_0x50e937, _0x187763) => {
      let _0x253e87 = this.offset + 2 + 6 * _0x187763;
      return {
        dpiValue: this.dataView.getUint16(_0x253e87, true),
        dpiColor: [this.dataView.getUint8(_0x253e87 + 4), this.dataView.getUint8(_0x253e87 + 3), this.dataView.getUint8(_0x253e87 + 2), this.dataView.getUint8(_0x253e87 + 5)]
      };
    });
  }
  set ['dpiValues'](_0x30c41c) {
    _0x30c41c.forEach((_0x2ba8fe, _0x1d037a) => {
      let _0x654bac = this.offset + 2 + 6 * _0x1d037a;
      this.dataView.setUint16(_0x654bac, _0x2ba8fe.dpiValue, true);
      this.dataView.setUint8(_0x654bac + 4, _0x2ba8fe.dpiColor[0]);
      this.dataView.setUint8(_0x654bac + 3, _0x2ba8fe.dpiColor[1]);
      this.dataView.setUint8(_0x654bac + 2, _0x2ba8fe.dpiColor[2]);
      this.dataView.setUint8(_0x654bac + 5, _0x2ba8fe.dpiColor[3]);
    });
  }
  static ['formatting'](_0x4ce096) {
    const _0x46bbb5 = new DpiAction(new DataView(new ArrayBuffer(50)));
    _0x46bbb5.currentIndex = _0x4ce096.currentIndex;
    _0x46bbb5.max = _0x4ce096.max;
    _0x46bbb5.dpiValues = _0x4ce096.dpiValues;
    return _0x46bbb5;
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
  constructor(_0x292b26, _0x1cbf20 = 0) {
    V(this, "dataView");
    V(this, "offset");
    this.dataView = _0x292b26;
    this.offset = _0x1cbf20;
  }
  get ["style"]() {
    return this.dataView.getUint8(this.offset);
  }
  set ["style"](_0x542dc6) {
    this.dataView.setUint8(this.offset, _0x542dc6);
  }
  get ['brightness']() {
    return this.dataView.getUint8(this.offset + 1);
  }
  set ["brightness"](_0xff5d79) {
    this.dataView.setUint8(this.offset + 1, _0xff5d79);
  }
  get ["speed"]() {
    return this.dataView.getUint8(this.offset + 2);
  }
  set ["speed"](_0xa2aff5) {
    this.dataView.setUint8(this.offset + 2, _0xa2aff5);
  }
  static ["formatting"](_0x5c7847) {
    const _0x3014a9 = new DpiLightEffectAction(new DataView(new ArrayBuffer(3)));
    _0x3014a9.style = _0x5c7847.style;
    _0x3014a9.brightness = _0x5c7847.brightness;
    _0x3014a9.speed = _0x5c7847.speed;
    return _0x3014a9;
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
    let _0xeabf75 = new Battery2(Battery2.getData(), Hh.GetBatteryLevel);
    _0xeabf75.paramLen = 2;
    _0xeabf75.cmdLen = 1;
    return _0xeabf75;
  }
  get ["batteryLevel"]() {
    return this.raw.getUint8(this.baseOffset);
  }
}
class BatteryChargingStatus extends Jh {
  static ["get"]() {
    let _0x1e3b52 = new BatteryChargingStatus(BatteryChargingStatus.getData(), Hh.GetBatteryChargingStatus);
    _0x1e3b52.paramLen = 2;
    _0x1e3b52.cmdLen = 1;
    return _0x1e3b52;
  }
  get ['chargingStatus']() {
    return !!this.raw.getUint8(this.baseOffset);
  }
}
class SetReportRate2 extends Jh {
  static ["set"](_0x3b5096) {
    const _0x21fd93 = new SetReportRate2(SetReportRate2.getData(), Hh.SetReportRate);
    _0x21fd93.paramLen = 3;
    _0x21fd93.cmdLen = 1;
    _0x21fd93.reportRate = _0x3b5096;
    return _0x21fd93;
  }
  set ["reportRate"](_0x176989) {
    this.raw.setUint8(this.baseOffset, _0x176989);
  }
}
class SetDPI extends Jh {
  static ['set'](_0x5332e8) {
    const _0x533dc6 = new SetDPI(SetDPI.getData(), Hh.SetDpi);
    _0x533dc6.paramLen = 10;
    _0x533dc6.cmdLen = 8;
    _0x533dc6.currentIndex = _0x5332e8.currentIndex;
    _0x533dc6.dpiValue = _0x5332e8.dpiValue;
    _0x533dc6.color = [_0x5332e8.color.r, _0x5332e8.color.g, _0x5332e8.color.b];
    _0x533dc6.enable = _0x5332e8.enable;
    return _0x533dc6;
  }
  set ["currentIndex"](_0x1685f4) {
    this.raw.setUint8(this.baseOffset, _0x1685f4);
  }
  get ["currentIndex"]() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ['dpiValue'](_0x364758) {
    this.raw.setUint16(this.baseOffset + 1, _0x364758, true);
  }
  set ["color"](_0x4dd15d) {
    const [_0x2da375, _0x151aef, _0x3e19c4] = _0x4dd15d;
    this.raw.setUint8(this.baseOffset + 3, _0x3e19c4);
    this.raw.setUint8(this.baseOffset + 4, _0x151aef);
    this.raw.setUint8(this.baseOffset + 5, _0x2da375);
    this.raw.setUint8(this.baseOffset + 6, 0);
  }
  set ['enable'](_0xab2381) {
    this.raw.setUint8(this.baseOffset + 7, Number(_0xab2381));
  }
}
class SetSilentHeight extends Jh {
  static ["set"](_0x3a0430) {
    const _0x13dbed = new SetSilentHeight(SetSilentHeight.getData(), Hh.SetSilentHeight);
    _0x13dbed.paramLen = 3;
    _0x13dbed.cmdLen = 1;
    _0x13dbed.height = _0x3a0430;
    return _0x13dbed;
  }
  set ["height"](_0x56855c) {
    this.raw.setUint8(this.baseOffset, _0x56855c);
  }
}
class SetButtonKey extends Jh {
  static ['set'](_0x529471, _0x922b67) {
    const _0x548fc4 = new SetButtonKey(SetButtonKey.getData(), Hh.SetButtonKey);
    _0x548fc4.paramLen = 8;
    _0x548fc4.cmdLen = 5;
    _0x548fc4.keyIndex = _0x529471;
    _0x548fc4.key = _0x922b67;
    return _0x548fc4;
  }
  set ["keyIndex"](_0x3a1f22) {
    this.raw.setUint8(this.baseOffset, _0x3a1f22);
  }
  set ["key"](_0x1d9c44) {
    this.raw.setUint8(this.baseOffset + 1, _0x1d9c44.keyClass);
    if (_0x1d9c44 instanceof ud) {
      this.raw.setUint8(this.baseOffset + 2, _0x1d9c44.clicks);
      return void this.raw.setUint16(this.baseOffset + 3, _0x1d9c44.clickInterval, true);
    }
    if (_0x1d9c44 instanceof ed) {
      this.raw.setUint8(this.baseOffset + 2, 0);
      this.raw.setUint8(this.baseOffset + 3, _0x1d9c44.mouseValue);
      return void this.raw.setUint8(this.baseOffset + 4, 0);
    }
    if (_0x1d9c44 instanceof nd) {
      this.raw.setUint8(this.baseOffset + 2, _0x1d9c44.modifierKeys);
      const [_0x81088, _0x4e886f] = _0x1d9c44.keycode;
      this.raw.setUint8(this.baseOffset + 3, _0x81088);
      return void this.raw.setUint8(this.baseOffset + 4, _0x4e886f);
    }
    if (_0x1d9c44 instanceof rd) {
      const [_0x4ed93e, _0x375bac] = _0x1d9c44.keycode;
      this.raw.setUint8(this.baseOffset + 2, 0);
      this.raw.setUint8(this.baseOffset + 3, _0x4ed93e);
      return void this.raw.setUint8(this.baseOffset + 4, _0x375bac);
    }
    this.raw.setUint8(this.baseOffset + 2, 0);
    this.raw.setUint8(this.baseOffset + 3, 0);
    this.raw.setUint8(this.baseOffset + 4, 0);
  }
}
class SetMacroKey2 extends Jh {
  static ['set'](_0x40c50d, _0x3d96d4) {
    const _0x2e2d76 = new SetMacroKey2(SetMacroKey2.getData(), Hh.SetMacroKey);
    _0x2e2d76.paramLen = 14;
    _0x2e2d76.cmdLen = 11;
    _0x2e2d76.keyIndex = _0x40c50d;
    _0x2e2d76.macro = _0x3d96d4;
    return _0x2e2d76;
  }
  set ["keyIndex"](_0x3f3b93) {
    this.raw.setUint8(this.baseOffset, _0x3f3b93);
  }
  set ["macro"](_0x266713) {
    const _0xf5501f = _0x266713.dataView.byteLength;
    for (let _0x274835 = 0; _0x274835 < _0xf5501f; _0x274835++) this.raw.setUint8(this.baseOffset + 1 + _0x274835, _0x266713.dataView.getUint8(_0x274835));
  }
}
class GetDongleConnectStatus extends Jh {
  static ["get"]() {
    const _0xfb919f = new GetDongleConnectStatus(GetDongleConnectStatus.getData(), Hh.GetDongleConnectStatus);
    _0xfb919f.paramLen = 3;
    _0xfb919f.cmdLen = 1;
    _0xfb919f.dongleInstructions = true;
    return _0xfb919f;
  }
  get ["status"]() {
    return !!this.raw.getUint8(this.baseOffset);
  }
}
class GetCurrentWorkerMode extends Jh {
  static ["get"]() {
    const _0x275250 = new GetCurrentWorkerMode(GetCurrentWorkerMode.getData(), Hh.GetCurrentWorkerMode);
    _0x275250.paramLen = 3;
    _0x275250.cmdLen = 1;
    return _0x275250;
  }
  get ["workerMode"]() {
    return this.raw.getUint8(this.baseOffset);
  }
}
class GetCurrentMouseConfig extends Jh {
  static ["get"]() {
    const _0x49fe83 = new GetCurrentMouseConfig(GetCurrentMouseConfig.getData(), Hh.GetCurrentMouseConfig);
    _0x49fe83.paramLen = 19;
    _0x49fe83.cmdLen = 17;
    return _0x49fe83;
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
  static ["set"](_0xb0761b) {
    const _0x169d14 = new SetCurrentMouseConfig(SetCurrentMouseConfig.getData(), Hh.SetCurrentMouseConfig);
    _0x169d14.paramLen = 3;
    _0x169d14.cmdLen = 1;
    _0x169d14.configIndex = _0xb0761b;
    return _0x169d14;
  }
  set ["configIndex"](_0x2c8f7c) {
    this.raw.setUint8(this.baseOffset, _0x2c8f7c);
  }
}
class SetLinearCorrection extends Jh {
  static ["set"](_0xad0508) {
    const _0x19b239 = new SetLinearCorrection(SetLinearCorrection.getData(), Hh.SetLinearCorrection);
    _0x19b239.paramLen = 3;
    _0x19b239.cmdLen = 1;
    _0x19b239.straightLineCorrection = _0xad0508;
    return _0x19b239;
  }
  set ["straightLineCorrection"](_0x49d67b) {
    this.raw.setUint8(this.baseOffset, +_0x49d67b);
  }
}
class SetRippleControl extends Jh {
  static ["set"](_0x3d23f6) {
    const _0x4fc9c0 = new SetRippleControl(SetRippleControl.getData(), Hh.SetRippleControl);
    _0x4fc9c0.paramLen = 3;
    _0x4fc9c0.cmdLen = 1;
    _0x4fc9c0.jitterCorrection = _0x3d23f6;
    return _0x4fc9c0;
  }
  set ["jitterCorrection"](_0xe08cb) {
    this.raw.setUint8(this.baseOffset, +_0xe08cb);
  }
}
class SetMotionSync extends Jh {
  static ['set'](_0x67e94c) {
    const _0x3d304c = new SetMotionSync(SetMotionSync.getData(), Hh.SetMotionSync);
    _0x3d304c.paramLen = 3;
    _0x3d304c.cmdLen = 1;
    _0x3d304c.mobileSynchronization = _0x67e94c;
    return _0x3d304c;
  }
  set ["mobileSynchronization"](_0x55be64) {
    this.raw.setUint8(this.baseOffset, +_0x55be64);
  }
}
class SetLEDLightEffect extends Jh {
  static ["set"](_0x370595) {
    const _0x2e67c6 = new SetLEDLightEffect(SetLEDLightEffect.getData(), Hh.SetLEDLightEffect);
    _0x2e67c6.paramLen = 6;
    _0x2e67c6.cmdLen = 3;
    _0x2e67c6.mode = _0x370595.style;
    _0x2e67c6.brightness = _0x370595.brightness;
    _0x2e67c6.speed = _0x370595.speed;
    return _0x2e67c6;
  }
  set ["mode"](_0xf177e5) {
    this.raw.setUint8(this.baseOffset, _0xf177e5);
  }
  set ["brightness"](_0x210ae8) {
    this.raw.setUint8(this.baseOffset + 1, _0x210ae8);
  }
  set ["speed"](_0x26d332) {
    this.raw.setUint8(this.baseOffset + 2, _0x26d332);
  }
}
class SetSensorSleepTime extends Jh {
  static ["set"](_0x126e70) {
    const _0x1c22f0 = new SetSensorSleepTime(SetSensorSleepTime.getData(), Hh.SetSensorSleepTime);
    _0x1c22f0.paramLen = 5;
    _0x1c22f0.cmdLen = 2;
    _0x1c22f0.sleepTime = _0x126e70;
    return _0x1c22f0;
  }
  set ["sleepTime"](_0x2e7b22) {
    this.raw.setUint16(this.baseOffset, _0x2e7b22, true);
  }
}
class SetStabilizationTime extends Jh {
  static ["set"](_0x2d04bc) {
    const _0x1b11fa = new SetStabilizationTime(SetStabilizationTime.getData(), Hh.SetStabilizationTime);
    _0x1b11fa.paramLen = 3;
    _0x1b11fa.cmdLen = 1;
    _0x1b11fa.keyShakeEliminationTime = _0x2d04bc;
    return _0x1b11fa;
  }
  set ["keyShakeEliminationTime"](_0x537d38) {
    this.raw.setUint8(this.baseOffset, _0x537d38);
  }
}
class GetAddressData extends Jh {
  static ["get"](_0x205ddb, _0x58d593) {
    const _0x349245 = new GetAddressData(GetAddressData.getData(), Hh.GetAddressData);
    _0x349245.paramLen = 10;
    _0x349245.cmdLen = 13;
    _0x349245.address = _0x205ddb;
    _0x349245.len = _0x58d593;
    return _0x349245;
  }
  set ["address"](_0x2b832c) {
    this.raw.setUint16(this.baseOffset, _0x2b832c, true);
  }
  get ["len"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["len"](_0x41a453) {
    this.raw.setUint8(this.baseOffset + 2, _0x41a453);
  }
  get ["data"]() {
    const _0x2816d1 = this.raw.buffer.slice(this.baseOffset + 3, this.baseOffset + 3 + this.len);
    return new DataView(_0x2816d1);
  }
}
class SetAddressData extends Jh {
  static ['save'](_0x40f278, _0x671ba4) {
    const _0x1997ae = new SetAddressData(SetAddressData.getData(), Hh.SetAddressData);
    _0x1997ae.paramLen = 5 + _0x671ba4.byteLength;
    _0x1997ae.cmdLen = 3 + _0x671ba4.byteLength;
    _0x1997ae.len = 0;
    _0x1997ae.address = _0x40f278;
    _0x1997ae.data = _0x671ba4;
    return _0x1997ae;
  }
  static ['set'](_0x472477, _0x160563) {
    const _0x4c328b = new SetAddressData(SetAddressData.getData(), Hh.SetAddressData);
    _0x4c328b.paramLen = 5 + _0x160563.byteLength;
    _0x4c328b.cmdLen = 3 + _0x160563.byteLength;
    _0x4c328b.len = _0x160563.byteLength;
    _0x4c328b.address = _0x472477;
    _0x4c328b.data = _0x160563;
    return _0x4c328b;
  }
  set ["address"](_0x327cee) {
    this.raw.setUint16(this.baseOffset, _0x327cee, true);
  }
  get ['len']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['len'](_0x24488a) {
    this.raw.setUint8(this.baseOffset + 2, _0x24488a);
  }
  set ['data'](_0x1a7b7b) {
    for (let _0x438dc7 = 0; _0x438dc7 < _0x1a7b7b.byteLength; _0x438dc7++) this.raw.setUint8(this.baseOffset + 3 + _0x438dc7, _0x1a7b7b.getUint8(_0x438dc7));
  }
}
class GetDeviceType extends Jh {
  static ["get"]() {
    const _0x5dbcca = new GetDeviceType(GetDeviceType.getData(), Hh.GetDeviceType);
    _0x5dbcca.dongleInstructions = true;
    _0x5dbcca.paramLen = 2;
    _0x5dbcca.cmdLen = 1;
    return _0x5dbcca;
  }
  get ["type"]() {
    return this.raw.getUint8(this.baseOffset);
  }
}
class GetDeviceVersion extends Jh {
  static ['get']() {
    const _0xafa4a2 = new GetDeviceVersion(GetDeviceVersion.getData(), Hh.GetDeviceVersion);
    _0xafa4a2.paramLen = 5;
    _0xafa4a2.cmdLen = 3;
    return _0xafa4a2;
  }
  get ["version"]() {
    return [this.raw.getUint8(this.baseOffset), this.raw.getUint8(this.baseOffset + 1), this.raw.getUint8(this.baseOffset + 2)].join('.');
  }
}
class Pair extends Jh {
  static ["start"]() {
    const _0x193228 = new Pair(Pair.getData(), Hh.SetDonglePairMode);
    _0x193228.paramLen = 3;
    _0x193228.cmdLen = 0;
    _0x193228.dongleInstructions = true;
    return _0x193228;
  }
  static ["clearPair"]() {
    const _0x6c0d41 = new Pair(Pair.getData(), Hh.ClearDonglePairInfo);
    _0x6c0d41.paramLen = 3;
    _0x6c0d41.cmdLen = 0;
    _0x6c0d41.dongleInstructions = true;
    return _0x6c0d41;
  }
  static ["getStatus"]() {
    const _0x58b65b = new Pair(Pair.getData(), Hh.GetDonglePairStatus);
    _0x58b65b.paramLen = 3;
    _0x58b65b.cmdLen = 1;
    _0x58b65b.dongleInstructions = true;
    return _0x58b65b;
  }
  get ["pairStatus"]() {
    return this.raw.getUint8(this.baseOffset);
  }
}
class Reset extends Jh {
  static ["reset"]() {
    const _0x27064c = new Reset(Reset.getData(), Hh.Reset);
    _0x27064c.paramLen = 2;
    _0x27064c.cmdLen = 1;
    return _0x27064c;
  }
}
let Cd = class HidDevice5 extends WebHidGeneral {
  constructor() {
    super(...arguments);
    V(this, 'mutex', new Mutex());
    V(this, "pendingTransfers", []);
  }
  ["inputReportListener"](_0x57d2d4) {
    super.inputReportListener(_0x57d2d4);
    this.handleInputReport(_0x57d2d4.data);
  }
  ["onDeviceToHostReportReceived"](_0x4fa696) {}
  ["handleInputReport"](_0x75d3be) {
    this.mutex.runExclusive(() => {
      const _0x4b11e3 = _0x75d3be.getUint8(4),
        _0x3f6b4b = _0x75d3be.getUint8(1);
      if (0 == _0x4b11e3) return void this.onDeviceToHostReportReceived(_0x75d3be);
      if (2 == _0x3f6b4b) return;
      let _0x316caf = false;
      for (const _0x465cef of this.pendingTransfers) if (_0x465cef.requestCode === _0x4b11e3) {
        let _0x449e6f = Array.from(new Uint8Array(_0x75d3be.buffer));
        const _0x1077ab = new DataView(new Uint8Array([0, ..._0x449e6f]).slice(0, 64).buffer);
        _0x465cef.promiseResolve(_0x1077ab);
        this.pendingTransfers.splice(this.pendingTransfers.indexOf(_0x465cef), 1);
        _0x316caf = true;
        break;
      }
      if (!_0x316caf && _0x4b11e3 === Hh.SetDpi) {
        let _0x159cf5 = Array.from(new Uint8Array(_0x75d3be.buffer));
        const _0x4fb04f = new DataView(new Uint8Array([0, ..._0x159cf5]).slice(0, 64).buffer),
          _0x466baf = new SetDPI(SetDPI.getData(), Hh.SetDpi);
        _0x466baf.raw = _0x4fb04f;
        Pr('data-reporting', _0x466baf);
        _0x316caf = true;
      }
    });
  }
  async ["transferForResultAsync"](_0xc0a8d6, _0x2de0fe = false, _0x4584ed = 8) {
    var _0x1f13d0, _0x54b057;
    const _0x1bf81a = new DataView(_0xc0a8d6.buffer).getUint8(5);
    let _0x26911c;
    const _0xae5b30 = new Promise(_0x5d6052 => {
        _0x26911c = _0x5d6052;
      }),
      _0x1d2a16 = {
        requestCode: _0x1bf81a,
        data: _0xc0a8d6,
        promiseResolve: _0x26911c
      };
    await new Promise(_0xd33ee3 => {
      const _0x552f4c = setInterval(() => {
        0 === this.pendingTransfers.length && (_0xd33ee3(), clearInterval(_0x552f4c));
      }, 1);
    });
    this.pendingTransfers.push(_0x1d2a16);
    if (_0x2de0fe) await (null == (_0x54b057 = this.device) ? void 0 : _0x54b057.sendFeatureReport(_0x4584ed, _0xc0a8d6));else await (null == (_0x1f13d0 = this.device) ? void 0 : _0x1f13d0.sendReport(_0x4584ed, _0xc0a8d6));
    return _0xae5b30;
  }
};
class BitMouse extends Cd {
  async ['transferForResult'](_0x53bf80) {
    let {
      receiver: _0x5c0647
    } = this.getCustomData();
    true === _0x5c0647 && (_0x53bf80.target = zh.dongleMouse);
    true === _0x5c0647 && _0x53bf80.dongleInstructions && (_0x53bf80.target = zh.dongle);
    _0x53bf80.raw = await this.transferForResultAsync(_0x53bf80.toUint8Array());
    if (1 == _0x53bf80.returnStatus) throw new Error("指令执行失败");
    return _0x53bf80;
  }
  async ["getFlashDataMap"]() {
    const _0x57cef5 = await this.getDeviceType(),
      _0x38b7dc = await this.getDpiConfig(),
      _0x553ade = await this.getMouseConfig(),
      _0x73f584 = await this.getDpiLightEffectStyle(),
      _0x1365fe = await this.getDeviceVersion(),
      _0x204033 = await this.getButtonKeys();
    return {
      deviceType: _0x57cef5,
      dpi: _0x38b7dc.toJSON(),
      reportRate: _0x553ade.reportRate,
      silentHeight: _0x553ade.silentHeight,
      sensorSleepTime: _0x553ade.sensorSleepTime,
      stabilizationTime: _0x553ade.stabilizationTime,
      dpiLightEffect: _0x73f584.toJSON(),
      motionSync: _0x553ade.motionSync,
      linearCorrection: _0x553ade.linearCorrection,
      rippleControl: _0x553ade.rippleControl,
      ..._0x1365fe,
      btnKeys: {
        left: _0x204033.left.toJSON(),
        right: _0x204033.right.toJSON(),
        center: _0x204033.center.toJSON(),
        side1: _0x204033.side1.toJSON(),
        side2: _0x204033.side2.toJSON(),
        bottom: _0x204033.side2.toJSON()
      },
      currentConfigFile: _0x553ade.configIndex
    };
  }
  async ['getWorkerMode']() {
    return this.transferForResult(GetCurrentWorkerMode.get());
  }
  async ["getMouseConnectStatus"]() {
    let {
      receiver: _0x1bf6d0
    } = this.getCustomData();
    if (!_0x1bf6d0) return true;
    const {
      status: _0x35a987
    } = await this.transferForResult(GetDongleConnectStatus.get());
    return _0x35a987;
  }
  async ["getBattery"]() {
    const {
        batteryLevel: _0x3502f2
      } = await this.transferForResult(Battery2.get()),
      {
        chargingStatus: _0x2d97a4
      } = await this.transferForResult(BatteryChargingStatus.get());
    return {
      batteryLevel: _0x3502f2,
      chargingStatus: _0x2d97a4
    };
  }
  async ["getMouseConfig"]() {
    return this.transferForResult(GetCurrentMouseConfig.get());
  }
  async ['getDpiConfig']() {
    const _0x43ded1 = [];
    for (let _0x112134 = 0; _0x112134 < 5; _0x112134++) {
      const _0xc74a35 = await this.transferForResult(GetAddressData.get(10 * _0x112134 + 1, 10));
      _0x43ded1.push(...new Uint8Array(_0xc74a35.data.buffer));
    }
    return new DpiAction(new DataView(Uint8Array.from(_0x43ded1).buffer));
  }
  async ["setDpiConfig"](_0x3cc9c3) {
    const _0x41cbee = DpiAction.formatting(_0x3cc9c3);
    for (let _0x2e0e23 = 0; _0x2e0e23 < 5; _0x2e0e23++) {
      const _0x3ea7d6 = _0x41cbee.dataView.buffer.slice(10 * _0x2e0e23, 10 * _0x2e0e23 + 10),
        _0x49f0a6 = SetAddressData.set(10 * _0x2e0e23 + 1, new DataView(_0x3ea7d6));
      await this.transferForResult(_0x49f0a6);
    }
  }
  async ["updateDPI"](_0x3de3e2) {
    return this.transferForResult(SetDPI.set(_0x3de3e2));
  }
  async ['getDeviceType']() {
    const {
      type: _0x4a3dc0
    } = await this.transferForResult(GetDeviceType.get());
    return _0x4a3dc0;
  }
  async ['setReportRate'](_0x187e68) {
    return this.transferForResult(SetReportRate2.set(_0x187e68));
  }
  async ["setMouseSilentHeight"](_0x5644c7) {
    return this.transferForResult(SetSilentHeight.set(_0x5644c7));
  }
  async ["setSensorSleepTime"](_0x15d830) {
    return this.transferForResult(SetSensorSleepTime.set(_0x15d830));
  }
  async ["setStabilizationTime"](_0xdd47e0) {
    return this.transferForResult(SetStabilizationTime.set(_0xdd47e0));
  }
  async ["getDpiLightEffectStyle"]() {
    const _0x5b3174 = GetAddressData.get(59, 3),
      _0x23677b = await this.transferForResult(_0x5b3174);
    return new DpiLightEffectAction(_0x23677b.data);
  }
  async ['setMouseDpiRGBEffects'](_0x13c439) {
    return this.transferForResult(SetLEDLightEffect.set(_0x13c439));
  }
  async ["setMotionSync"](_0x43c2f6) {
    return this.transferForResult(SetMotionSync.set(!!_0x43c2f6));
  }
  async ['setLinearCorrection'](_0x333755) {
    return this.transferForResult(SetLinearCorrection.set(!!_0x333755));
  }
  async ['setRippleControl'](_0x46b1a6) {
    return this.transferForResult(SetRippleControl.set(!!_0x46b1a6));
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
      pairStatus: _0x277a72
    } = await this.transferForResult(Pair.getStatus());
    return !!_0x277a72;
  }
  async ["getDeviceVersion"]() {
    const _0xdb5edf = GetDeviceVersion.get();
    _0xdb5edf.dongleInstructions = true;
    const {
        version: _0x1b2bb7
      } = await this.transferForResult(_0xdb5edf),
      {
        version: _0x41a934
      } = await this.transferForResult(GetDeviceVersion.get());
    return {
      dongleVersion: _0x1b2bb7,
      mouseVersion: _0x41a934
    };
  }
  async ["getButtonKeys"]() {
    const _0x5d737a = [];
    for (let _0x45d92e = 0; _0x45d92e < 3; _0x45d92e++) {
      const {
        data: _0x15e761
      } = await this.transferForResult(GetAddressData.get(65 + 10 * _0x45d92e, 10));
      _0x5d737a.push(...new Uint8Array(_0x15e761.buffer));
    }
    const _0x85c1ea = new DataView(new Uint8Array(_0x5d737a.slice(0, 25)).buffer);
    return new ButtonKeysAction(_0x85c1ea);
  }
  async ["setButtonKey"](_0x4f3c68, _0x5d62f0) {
    return this.transferForResult(SetButtonKey.set(_0x4f3c68, _0x5d62f0));
  }
  async ['setButtonKeyToMacro'](_0x1afeea, _0x548418) {
    for (let _0x4cfe38 = 0; _0x4cfe38 < _0x548418.length; _0x4cfe38++) await this.transferForResult(SetMacroKey2.set(_0x1afeea, _0x548418[_0x4cfe38]));
  }
  async ["setCurrentMouseConfig"](_0x1f67c2) {
    return this.transferForResult(SetCurrentMouseConfig.set(_0x1f67c2));
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
    constructor(_0xd8804d, _0x373ea6) {
      V(this, "raw");
      let _0x6551ac = _0xd8804d ? _0xd8804d.buffer : new ArrayBuffer(_ConfiguratorReport.SIZE);
      this.raw = new DataView(_0x6551ac);
      this.commandId = _0x373ea6;
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
    set ["commandId"](_0x5a9469) {
      this.raw.setUint8(0, _0x5a9469);
    }
    ["setRaw"](_0x5cfe9a) {
      this.raw = _0x5cfe9a;
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
var Od = (_0xb941f1 => (_0xb941f1[_0xb941f1.id_get_protocol_version = 1] = 'id_get_protocol_version', _0xb941f1[_0xb941f1.id_get_keyboard_value = 2] = "id_get_keyboard_value", _0xb941f1[_0xb941f1.id_set_keyboard_value = 3] = "id_set_keyboard_value", _0xb941f1[_0xb941f1.id_dynamic_keymap_get_keycode = 4] = "id_dynamic_keymap_get_keycode", _0xb941f1[_0xb941f1.id_dynamic_keymap_set_keycode = 5] = 'id_dynamic_keymap_set_keycode', _0xb941f1[_0xb941f1.id_dynamic_keymap_reset = 6] = "id_dynamic_keymap_reset", _0xb941f1[_0xb941f1.id_custom_set_value = 7] = "id_custom_set_value", _0xb941f1[_0xb941f1.id_custom_get_value = 8] = 'id_custom_get_value', _0xb941f1[_0xb941f1.id_custom_save = 9] = 'id_custom_save', _0xb941f1[_0xb941f1.id_lighting_set_value = 7] = 'id_lighting_set_value', _0xb941f1[_0xb941f1.id_lighting_get_value = 8] = 'id_lighting_get_value', _0xb941f1[_0xb941f1.id_lighting_save = 9] = "id_lighting_save", _0xb941f1[_0xb941f1.id_eeprom_reset = 10] = 'id_eeprom_reset', _0xb941f1[_0xb941f1.id_bootloader_jump = 11] = "id_bootloader_jump", _0xb941f1[_0xb941f1.id_dynamic_keymap_macro_get_count = 12] = "id_dynamic_keymap_macro_get_count", _0xb941f1[_0xb941f1.id_dynamic_keymap_macro_get_buffer_size = 13] = "id_dynamic_keymap_macro_get_buffer_size", _0xb941f1[_0xb941f1.id_dynamic_keymap_macro_get_buffer = 14] = "id_dynamic_keymap_macro_get_buffer", _0xb941f1[_0xb941f1.id_dynamic_keymap_macro_set_buffer = 15] = 'id_dynamic_keymap_macro_set_buffer', _0xb941f1[_0xb941f1.id_dynamic_keymap_macro_reset = 16] = "id_dynamic_keymap_macro_reset", _0xb941f1[_0xb941f1.id_dynamic_keymap_get_layer_count = 17] = "id_dynamic_keymap_get_layer_count", _0xb941f1[_0xb941f1.id_dynamic_keymap_get_buffer = 18] = "id_dynamic_keymap_get_buffer", _0xb941f1[_0xb941f1.id_dynamic_keymap_set_buffer = 19] = "id_dynamic_keymap_set_buffer", _0xb941f1[_0xb941f1.id_vial_prefix = 254] = "id_vial_prefix", _0xb941f1[_0xb941f1.id_unhandled = 255] = 'id_unhandled', _0xb941f1))(Od || {}),
  xd = (_0x3d6a6d => (_0x3d6a6d[_0x3d6a6d.general = 0] = "general", _0x3d6a6d[_0x3d6a6d.lt0 = 64] = "lt0", _0x3d6a6d[_0x3d6a6d.lt1 = 65] = "lt1", _0x3d6a6d[_0x3d6a6d.lt2 = 66] = "lt2", _0x3d6a6d[_0x3d6a6d.lt3 = 67] = "lt3", _0x3d6a6d[_0x3d6a6d.layer = 82] = "layer", _0x3d6a6d[_0x3d6a6d.swap = 86] = "swap", _0x3d6a6d[_0x3d6a6d.tapDance = 87] = "tapDance", _0x3d6a6d[_0x3d6a6d.magic = 112] = "magic", _0x3d6a6d[_0x3d6a6d.midi = 113] = "midi", _0x3d6a6d[_0x3d6a6d.sequencer = 114] = "sequencer", _0x3d6a6d[_0x3d6a6d.programming = 116] = "programming", _0x3d6a6d[_0x3d6a6d.macro = 119] = 'macro', _0x3d6a6d[_0x3d6a6d.light = 120] = 'light', _0x3d6a6d[_0x3d6a6d.system = 124] = "system", _0x3d6a6d[_0x3d6a6d.kbAndUser = 126] = "kbAndUser", _0x3d6a6d))(xd || {}),
  Kd = (_0x1d6f4d => (_0x1d6f4d[_0x1d6f4d.SS_TAP_CODE = 1] = "SS_TAP_CODE", _0x1d6f4d[_0x1d6f4d.SS_DOWN_CODE = 2] = "SS_DOWN_CODE", _0x1d6f4d[_0x1d6f4d.SS_UP_CODE = 3] = "SS_UP_CODE", _0x1d6f4d[_0x1d6f4d.SS_DELAY_CODE = 4] = "SS_DELAY_CODE", _0x1d6f4d[_0x1d6f4d.VIAL_MACRO_EXT_TAP = 5] = "VIAL_MACRO_EXT_TAP", _0x1d6f4d[_0x1d6f4d.VIAL_MACRO_EXT_DOWN = 6] = 'VIAL_MACRO_EXT_DOWN', _0x1d6f4d[_0x1d6f4d.VIAL_MACRO_EXT_UP = 7] = "VIAL_MACRO_EXT_UP", _0x1d6f4d))(Kd || {}),
  Ad = (_0x5f15d1 => (_0x5f15d1[_0x5f15d1.normal = 0] = 'normal', _0x5f15d1[_0x5f15d1.erase = 1] = "erase", _0x5f15d1[_0x5f15d1.write = 2] = "write", _0x5f15d1[_0x5f15d1.eraseAndWrite = 3] = "eraseAndWrite", _0x5f15d1))(Ad || {}),
  Id = (_0x167f04 => (_0x167f04[_0x167f04.customId = 150] = "customId", _0x167f04[_0x167f04.oneTogTh = 3] = 'oneTogTh', _0x167f04[_0x167f04.bufferTogTh = 13] = "bufferTogTh", _0x167f04[_0x167f04.oneRt = 7] = "oneRt", _0x167f04[_0x167f04.bufferRt = 14] = "bufferRt", _0x167f04[_0x167f04.deadBand = 11] = "deadBand", _0x167f04[_0x167f04.lightInfo = 65] = "lightInfo", _0x167f04[_0x167f04.mixAxle = 16] = "mixAxle", _0x167f04[_0x167f04.iap = 152] = "iap", _0x167f04[_0x167f04.calibrate = 8] = 'calibrate', _0x167f04[_0x167f04.feature = 17] = "feature", _0x167f04[_0x167f04.dks = 15] = "dks", _0x167f04[_0x167f04.setCustomLamplight = 66] = "setCustomLamplight", _0x167f04[_0x167f04.getCustomLamplight = 69] = "getCustomLamplight", _0x167f04[_0x167f04.saveLamplight = 18] = "saveLamplight", _0x167f04[_0x167f04.entryOp = 13] = 'entryOp', _0x167f04[_0x167f04.tapDanceGet = 1] = 'tapDanceGet', _0x167f04[_0x167f04.tapDanceSet = 2] = "tapDanceSet", _0x167f04[_0x167f04.layer = 19] = 'layer', _0x167f04[_0x167f04.dataReporting = 20] = "dataReporting", _0x167f04[_0x167f04.resetAll = 21] = 'resetAll', _0x167f04[_0x167f04.realTimeAdcAxle = 9] = "realTimeAdcAxle", _0x167f04[_0x167f04.realTimeTripAxle = 10] = "realTimeTripAxle", _0x167f04[_0x167f04.realTimeAdcAxleBuffer = 22] = "realTimeAdcAxleBuffer", _0x167f04[_0x167f04.realTimeTripAxleBuffer = 23] = "realTimeTripAxleBuffer", _0x167f04[_0x167f04.calibrationStart = 24] = "calibrationStart", _0x167f04[_0x167f04.calibrationFinish = 25] = 'calibrationFinish', _0x167f04[_0x167f04.completeStatusBuffer = 27] = "completeStatusBuffer", _0x167f04[_0x167f04.adcTripCompStatusBuffer = 28] = "adcTripCompStatusBuffer", _0x167f04[_0x167f04.bottomOptimizeSwitch = 29] = "bottomOptimizeSwitch", _0x167f04[_0x167f04.gameMode = 30] = "gameMode", _0x167f04[_0x167f04.calibration = 31] = "calibration", _0x167f04[_0x167f04.rs = 32] = 'rs', _0x167f04[_0x167f04.extraLight = 33] = "extraLight", _0x167f04[_0x167f04.physical = 34] = 'physical', _0x167f04[_0x167f04.profile = 35] = "profile", _0x167f04[_0x167f04.travel = 36] = 'travel', _0x167f04[_0x167f04.aiMatch = 37] = 'aiMatch', _0x167f04[_0x167f04.lightOff = 38] = "lightOff", _0x167f04))(Id || {}),
  Pd = (_0x43669e => (_0x43669e[_0x43669e.START_CFG = 1] = "START_CFG", _0x43669e[_0x43669e.SAVE_CFG = 2] = "SAVE_CFG", _0x43669e[_0x43669e.GET_KEY = 3] = "GET_KEY", _0x43669e[_0x43669e.GET_KEY_BUFFER = 4] = 'GET_KEY_BUFFER', _0x43669e[_0x43669e.SET_KEY = 5] = "SET_KEY", _0x43669e[_0x43669e.SET_KEY_BUFFER = 6] = "SET_KEY_BUFFER", _0x43669e[_0x43669e.SET_KEY_ALL = 7] = "SET_KEY_ALL", _0x43669e))(Pd || {}),
  Md = (_0x30772f => (_0x30772f[_0x30772f.RT = 0] = 'RT', _0x30772f[_0x30772f.COMPETITIVE = 1] = 'COMPETITIVE', _0x30772f[_0x30772f.ADVANCED_KEY = 2] = "ADVANCED_KEY", _0x30772f[_0x30772f.BAN = 3] = "BAN", _0x30772f[_0x30772f.PROFILE = 10] = "PROFILE", _0x30772f))(Md || {}),
  Td = (_0x4bdd14 => (_0x4bdd14[_0x4bdd14.NONE = 0] = 'NONE', _0x4bdd14[_0x4bdd14.RS = 1] = 'RS', _0x4bdd14[_0x4bdd14.SOCD = 2] = 'SOCD', _0x4bdd14[_0x4bdd14.SOCD_KEY1 = 3] = 'SOCD_KEY1', _0x4bdd14[_0x4bdd14.SOCD_KEY2 = 4] = "SOCD_KEY2", _0x4bdd14[_0x4bdd14.SOCD_BALANCE = 5] = "SOCD_BALANCE", _0x4bdd14[_0x4bdd14.OKS = 6] = "OKS", _0x4bdd14))(Td || {}),
  Rd = (_0x2ceff4 => (_0x2ceff4[_0x2ceff4.get = 1] = "get", _0x2ceff4[_0x2ceff4.getBuffer = 2] = "getBuffer", _0x2ceff4[_0x2ceff4.set = 3] = "set", _0x2ceff4[_0x2ceff4.setBuffer = 4] = "setBuffer", _0x2ceff4))(Rd || {}),
  Ed = (_0x4d835e => (_0x4d835e[_0x4d835e.get = 1] = "get", _0x4d835e[_0x4d835e.getBuffer = 2] = "getBuffer", _0x4d835e[_0x4d835e.set = 3] = "set", _0x4d835e[_0x4d835e.setBuffer = 4] = 'setBuffer', _0x4d835e))(Ed || {}),
  Bd = (_0x452a78 => (_0x452a78[_0x452a78.noneSt = 0] = "noneSt", _0x452a78[_0x452a78.defaultLayerSt = 1] = 'defaultLayerSt', _0x452a78[_0x452a78.swapWasdSt = 2] = "swapWasdSt", _0x452a78[_0x452a78.macosSt = 3] = "macosSt", _0x452a78[_0x452a78.winLockSt = 4] = 'winLockSt', _0x452a78[_0x452a78.nKroSt = 5] = "nKroSt", _0x452a78[_0x452a78.physical = 7] = 'physical', _0x452a78[_0x452a78.light = 8] = "light", _0x452a78))(Bd || {});
class KeyAction3 {
  constructor(_0x52a4d9, _0x491b9a) {
    V(this, "dataView");
    V(this, "offset");
    this.dataView = _0x52a4d9;
    this.offset = _0x491b9a;
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
  static ["createDataView"](_0x77b78b, _0x39ee57) {
    const _0x1116d4 = new DataView(new ArrayBuffer(2));
    _0x1116d4.setUint8(0, _0x77b78b);
    _0x1116d4.setUint8(1, _0x39ee57);
    return _0x1116d4;
  }
  static ["fromDataView"](_0x618f45, _0xce72b9) {
    switch (_0x618f45.getUint8(_0xce72b9)) {
      case xd.lt0:
      case xd.lt1:
      case xd.lt2:
      case xd.lt3:
        return new LTKeyAction2(_0x618f45, _0xce72b9);
      case xd.layer:
        return new Nd(_0x618f45, _0xce72b9);
      case xd.swap:
        return new zd(_0x618f45, _0xce72b9);
      case xd.magic:
        return new Wd(_0x618f45, _0xce72b9);
      case xd.midi:
        return new Yd(_0x618f45, _0xce72b9);
      case xd.sequencer:
        return new qd(_0x618f45, _0xce72b9);
      case xd.programming:
        return new Xd(_0x618f45, _0xce72b9);
      case xd.macro:
        return new Qd(_0x618f45, _0xce72b9);
      case xd.light:
        return new tg(_0x618f45, _0xce72b9);
      case xd.system:
        return new sg(_0x618f45, _0xce72b9);
      case xd.kbAndUser:
        return new ag(_0x618f45, _0xce72b9);
      case xd.general:
        return 1 === _0x618f45.getUint8(_0xce72b9 + 1) ? new GeneralNextKeyAction(_0x618f45, _0xce72b9) : new Vd(_0x618f45, _0xce72b9);
      case xd.tapDance:
        return new og(_0x618f45, _0xce72b9);
      default:
        return new KeyAction3(_0x618f45, _0xce72b9);
    }
  }
  ['toJSON']() {
    return {
      keyClass: this.keyClass,
      keyId: this.keyId
    };
  }
  ["toString"]() {
    return Array.from([this.keyClass, this.keyId]).map(_0x5bc7b1 => _0x5bc7b1.toString().padStart(2, '0')).join('');
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
  static ["create"](_0x14cd1a) {
    return new _GeneralKeyAction(super.createDataView(this.TYPE, _0x14cd1a), 0);
  }
};
V(Ld, "TYPE", xd.general);
let Vd = Ld;
const Fd = class _LayerKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.layer";
  }
  static ["create"](_0x285c39) {
    return new _LayerKeyAction(super.createDataView(this.TYPE, _0x285c39), 0);
  }
};
V(Fd, "TYPE", xd.layer);
let Nd = Fd;
const Gd = class _SwapKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.swap";
  }
  static ["create"](_0x2cd774) {
    return new _SwapKeyAction(super.createDataView(this.TYPE, _0x2cd774), 0);
  }
};
V(Gd, "TYPE", xd.swap);
let zd = Gd;
const Hd = class _MagicKeyAction extends KeyAction3 {
  get ['i18nText']() {
    return "key.magic";
  }
  static ['create'](_0x432b66) {
    return new _MagicKeyAction(super.createDataView(this.TYPE, _0x432b66), 0);
  }
};
V(Hd, 'TYPE', xd.magic);
let Wd = Hd;
const jd = class _MIDIKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return 'key.midi';
  }
  static ["create"](_0x505dc6) {
    return new _MIDIKeyAction(super.createDataView(this.TYPE, _0x505dc6), 0);
  }
};
V(jd, "TYPE", xd.midi);
let Yd = jd;
const $d = class _SequencerKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return 'key.midi';
  }
  static ["create"](_0x2d3ced) {
    return new _SequencerKeyAction(super.createDataView(this.TYPE, _0x2d3ced), 0);
  }
};
V($d, "TYPE", xd.sequencer);
let qd = $d;
const Jd = class _ProgrammingKeyAction extends KeyAction3 {
  get ['i18nText']() {
    return "key.programming";
  }
  static ["create"](_0x14eb3d) {
    return new _ProgrammingKeyAction(super.createDataView(this.TYPE, _0x14eb3d), 0);
  }
};
V(Jd, "TYPE", xd.programming);
let Xd = Jd;
const Zd = class _MacroKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.macroKey";
  }
  static ['create'](_0x499d12) {
    return new _MacroKeyAction(super.createDataView(this.TYPE, _0x499d12), 0);
  }
};
V(Zd, "TYPE", xd.macro);
let Qd = Zd;
const eg = class _LightKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.light";
  }
  static ["create"](_0x5a6c5b) {
    return new _LightKeyAction(super.createDataView(this.TYPE, _0x5a6c5b), 0);
  }
};
V(eg, "TYPE", xd.light);
let tg = eg;
const rg = class _SystemKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return "key.system";
  }
  static ["create"](_0x4f8d11) {
    return new _SystemKeyAction(super.createDataView(this.TYPE, _0x4f8d11), 0);
  }
};
V(rg, "TYPE", xd.system);
let sg = rg;
const ng = class _KbAndUserKeyAction extends KeyAction3 {
  get ["i18nText"]() {
    return 'key.kbAndUser';
  }
  static ["create"](_0x29d469) {
    return new _KbAndUserKeyAction(super.createDataView(this.TYPE, _0x29d469), 0);
  }
};
V(ng, "TYPE", xd.kbAndUser);
let ag = ng;
class LTKeyAction2 extends KeyAction3 {
  get ["i18nText"]() {
    return 'key.lt';
  }
  static ["create"](_0x4d488e) {
    return new LTKeyAction2(super.createDataView(_0x4d488e, 0), 0);
  }
}
const ig = class _TapDanceKeyAction extends KeyAction3 {
  get ['i18nText']() {
    return "Change Key Menu." + (this.keyId <= 19 ? 'mt.title' : "tgl.title");
  }
  static ['create'](_0x2f429c) {
    return new _TapDanceKeyAction(super.createDataView(_TapDanceKeyAction.TYPE, _0x2f429c), 0);
  }
};
V(ig, "TYPE", xd.tapDance);
let og = ig;
class MacroAction {
  constructor(_0x5a43eb, _0x49d3f6, _0x28c16c) {
    V(this, "raw");
    V(this, "offset");
    V(this, "length");
    this.raw = _0x5a43eb;
    this.offset = _0x49d3f6;
    this.length = _0x28c16c;
  }
  get ["count"]() {
    return this.length;
  }
  get ['dataView']() {
    return new DataView(this.raw.buffer.slice(this.offset, this.offset + this.length));
  }
  static ["fromDataView"](_0x3ff612, _0x3a05ee) {
    switch (_0x3ff612.getUint8(_0x3a05ee + 1)) {
      case Kd.SS_TAP_CODE:
        return new cg(_0x3ff612, _0x3a05ee, 3);
      case Kd.SS_DOWN_CODE:
        return new fg(_0x3ff612, _0x3a05ee, 3);
      case Kd.SS_UP_CODE:
        return new dg(_0x3ff612, _0x3a05ee, 3);
      case Kd.SS_DELAY_CODE:
        return new vg(_0x3ff612, _0x3a05ee, 4);
      case Kd.VIAL_MACRO_EXT_TAP:
        return new mg(_0x3ff612, _0x3a05ee, 4);
      case Kd.VIAL_MACRO_EXT_DOWN:
        return new yg(_0x3ff612, _0x3a05ee, 4);
      case Kd.VIAL_MACRO_EXT_UP:
        return new bg(_0x3ff612, _0x3a05ee, 4);
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
  static ['create'](_0x5f0e84) {
    const _0x588d12 = new DataView(new ArrayBuffer(this.size));
    _0x588d12.setUint8(0, 1);
    _0x588d12.setUint8(1, this.TYPE);
    _0x588d12.setUint8(2, _0x5f0e84.keyId);
    return new _MacroTapKeyAction(_0x588d12, 0, this.size);
  }
};
V(ug, "TYPE", Kd.SS_TAP_CODE);
let cg = ug;
const lg = class _MacroDownKeyAction extends MacroAction {
  get ['keycode']() {
    return Vd.create(this.raw.getUint8(this.offset + 2));
  }
  static ['create'](_0x4c51c8) {
    const _0x49bdaa = new DataView(new ArrayBuffer(this.size));
    _0x49bdaa.setUint8(0, 1);
    _0x49bdaa.setUint8(1, this.TYPE);
    _0x49bdaa.setUint8(2, _0x4c51c8.keyId);
    return new _MacroDownKeyAction(_0x49bdaa, 0, this.size);
  }
};
V(lg, "TYPE", Kd.SS_DOWN_CODE);
let fg = lg;
const hg = class _MacroUpKeyAction extends MacroAction {
  get ['keycode']() {
    return Vd.create(this.raw.getUint8(this.offset + 2));
  }
  static ["create"](_0x2c99ac) {
    const _0x5ac26e = new DataView(new ArrayBuffer(this.size));
    _0x5ac26e.setUint8(0, 1);
    _0x5ac26e.setUint8(1, this.TYPE);
    _0x5ac26e.setUint8(2, _0x2c99ac.keyId);
    return new _MacroUpKeyAction(_0x5ac26e, 0, this.size);
  }
};
V(hg, 'TYPE', Kd.SS_UP_CODE);
let dg = hg;
const gg = class _MacroTapExtKeyAction extends MacroAction {
  get ["keycode"]() {
    const _0x308010 = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
    return KeyAction3.fromDataView(_0x308010, 0);
  }
  static ["create"](_0x1360a9) {
    const _0x3fbb65 = new DataView(new ArrayBuffer(this.size));
    _0x3fbb65.setUint8(0, 1);
    _0x3fbb65.setUint8(1, this.TYPE);
    _0x3fbb65.setUint8(2, _0x1360a9.keyId);
    _0x3fbb65.setUint8(3, _0x1360a9.keyClass);
    return new _MacroTapExtKeyAction(_0x3fbb65, 0, this.size);
  }
};
V(gg, "size", 4);
V(gg, "TYPE", Kd.VIAL_MACRO_EXT_TAP);
let mg = gg;
const pg = class _MacroDownExtKeyAction extends MacroAction {
  get ["keycode"]() {
    const _0x1c7d30 = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
    return KeyAction3.fromDataView(_0x1c7d30, 0);
  }
  static ["create"](_0x52f886) {
    const _0x5ed76a = new DataView(new ArrayBuffer(this.size));
    _0x5ed76a.setUint8(0, 1);
    _0x5ed76a.setUint8(1, this.TYPE);
    _0x5ed76a.setUint8(2, _0x52f886.keyId);
    _0x5ed76a.setUint8(3, _0x52f886.keyClass);
    return new _MacroDownExtKeyAction(_0x5ed76a, 0, this.size);
  }
};
V(pg, "size", 4);
V(pg, "TYPE", Kd.VIAL_MACRO_EXT_DOWN);
let yg = pg;
const wg = class _MacroUpExtKeyAction extends MacroAction {
  get ["keycode"]() {
    const _0x592d3c = new DataView(new Uint8Array([this.raw.getUint8(this.offset + 3), this.raw.getUint8(this.offset + 2)]).buffer);
    return KeyAction3.fromDataView(_0x592d3c, 0);
  }
  static ["create"](_0x319d1b) {
    const _0xeb6163 = new DataView(new ArrayBuffer(this.size));
    _0xeb6163.setUint8(0, 1);
    _0xeb6163.setUint8(1, this.TYPE);
    _0xeb6163.setUint8(2, _0x319d1b.keyId);
    _0xeb6163.setUint8(3, _0x319d1b.keyClass);
    return new _MacroUpExtKeyAction(_0xeb6163, 0, this.size);
  }
};
V(wg, "size", 4);
V(wg, 'TYPE', Kd.VIAL_MACRO_EXT_UP);
let bg = wg;
const _g = class _MacroDelayAction extends MacroAction {
  get ["delay"]() {
    const _0x584f60 = new DataView(new ArrayBuffer(2));
    _0x584f60.setUint8(0, this.raw.getUint8(this.offset + 2) - 1);
    _0x584f60.setUint8(1, this.raw.getUint8(this.offset + 3) - 1);
    return _0x584f60.getUint16(0, true);
  }
  static ['create'](_0x1e7639) {
    const _0x1a7402 = new DataView(new ArrayBuffer(2));
    _0x1a7402.setUint16(0, _0x1e7639, true);
    const _0x25db23 = _0x1a7402.getUint8(0) + 1,
      _0x222426 = _0x1a7402.getUint8(1) + 1,
      _0x346c6a = new DataView(new ArrayBuffer(this.size));
    _0x346c6a.setUint8(0, 1);
    _0x346c6a.setUint8(1, this.TYPE);
    _0x346c6a.setUint8(2, _0x25db23 > 255 ? 255 : _0x25db23);
    _0x346c6a.setUint8(3, _0x222426 > 255 ? 255 : _0x222426);
    return new _MacroDelayAction(_0x346c6a, 0, this.size);
  }
};
V(_g, "size", 4);
V(_g, "TYPE", Kd.SS_DELAY_CODE);
let vg = _g;
const kg = class _DynamicKeyStrokeAction {
  constructor(_0x498677, _0x37a25e) {
    V(this, "raw");
    V(this, "offset");
    this.raw = _0x498677;
    this.offset = _0x37a25e;
  }
  get ["dataView"]() {
    const _0x40e0cd = new DataView(new ArrayBuffer(_DynamicKeyStrokeAction.size), 0);
    _0x40e0cd.setUint8(0, this.raw.getUint8(this.offset));
    _0x40e0cd.setUint8(1, this.raw.getUint8(this.offset + 1));
    _0x40e0cd.setUint8(2, this.raw.getUint8(this.offset + 2));
    _0x40e0cd.setUint8(3, this.raw.getUint8(this.offset + 3));
    return _0x40e0cd;
  }
  get ["statusArray"]() {
    const _0x14abbe = this.raw.getUint16(this.offset);
    return [_0x14abbe >> 0 & 1, _0x14abbe >> 1 & 1, _0x14abbe >> 2 & 1, _0x14abbe >> 3 & 1, _0x14abbe >> 4 & 1, _0x14abbe >> 5 & 1, _0x14abbe >> 6 & 1, _0x14abbe >> 7 & 1, _0x14abbe >> 8 & 1, _0x14abbe >> 9 & 1];
  }
  get ["status"]() {
    const _0x37ef7d = this.raw.getUint16(this.offset);
    return {
      bit0: _0x37ef7d >> 0 & 1,
      bit1: _0x37ef7d >> 1 & 1,
      bit2: _0x37ef7d >> 2 & 1,
      bit3: _0x37ef7d >> 3 & 1,
      bit4: _0x37ef7d >> 4 & 1,
      bit5: _0x37ef7d >> 5 & 1,
      bit6: _0x37ef7d >> 6 & 1,
      bit7: _0x37ef7d >> 7 & 1,
      bit8: _0x37ef7d >> 8 & 1,
      bit9: _0x37ef7d >> 9 & 1
    };
  }
  set ["status"](_0x2106f2) {
    this.raw.setUint16(this.offset, (_0x2106f2.bit0 || 0) << 0 | (_0x2106f2.bit1 || 0) << 1 | (_0x2106f2.bit2 || 0) << 2 | (_0x2106f2.bit3 || 0) << 3 | (_0x2106f2.bit4 || 0) << 4 | (_0x2106f2.bit5 || 0) << 5 | (_0x2106f2.bit6 || 0) << 6 | (_0x2106f2.bit7 || 0) << 7 | (_0x2106f2.bit8 || 0) << 8 | (_0x2106f2.bit9 || 0) << 9);
  }
  get ['keyCode']() {
    return KeyAction3.fromDataView(this.raw, this.offset + 2);
  }
  set ["keyCode"](_0x3070e2) {
    this.raw.setUint8(this.offset + 2, _0x3070e2.keyClass);
    this.raw.setUint8(this.offset + 3, _0x3070e2.keyId);
  }
  static ['fromDataView'](_0x1ede12, _0x512778) {
    return new _DynamicKeyStrokeAction(_0x1ede12, _0x512778);
  }
  static ["create"](_0x133ef2, _0x2fdbfc) {
    const _0x2040ad = new _DynamicKeyStrokeAction(new DataView(new ArrayBuffer(_DynamicKeyStrokeAction.size)), 0);
    _0x2040ad.status = _0x133ef2;
    _0x2040ad.keyCode = _0x2fdbfc;
    return _0x2040ad;
  }
};
V(kg, "size", 4);
let Cg = kg;
class OneKeyAction2 extends Dd {
  get ['layer']() {
    return this.raw.getUint8(this.baseOffset);
  }
  set ["layer"](_0x49be2f) {
    this.raw.setUint8(this.baseOffset, _0x49be2f);
  }
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ["row"](_0x1b4176) {
    this.raw.setUint8(this.baseOffset + 1, _0x1b4176);
  }
  get ['col']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["col"](_0x384a7d) {
    this.raw.setUint8(this.baseOffset + 2, _0x384a7d);
  }
  get ["keyAction"]() {
    return KeyAction3.fromDataView(this.raw, this.baseOffset + 3);
  }
  set ['keyAction'](_0x46de49) {
    this.raw.setUint8(this.baseOffset + 3, _0x46de49.keyClass);
    this.raw.setUint8(this.baseOffset + 4, _0x46de49.keyId);
  }
  static ["get"](_0x5d864c, _0x56d85f, _0x378265) {
    const _0x2397b5 = new OneKeyAction2(this.getData(), Od.id_dynamic_keymap_get_keycode);
    _0x2397b5.layer = _0x5d864c;
    _0x2397b5.row = _0x56d85f;
    _0x2397b5.col = _0x378265;
    return _0x2397b5;
  }
  static ["create"](_0x46202a, _0x3aaacb, _0x36411f, _0x4f26e1) {
    const _0x458314 = new OneKeyAction2(this.getData(), Od.id_dynamic_keymap_set_keycode);
    _0x458314.layer = _0x46202a;
    _0x458314.row = _0x3aaacb;
    _0x458314.col = _0x36411f;
    _0x458314.keyAction = _0x4f26e1;
    return _0x458314;
  }
}
class BufferKeyAction2 extends Dd {
  get ["offset"]() {
    return this.raw.getUint16(this.baseOffset);
  }
  set ['offset'](_0x26fa34) {
    this.raw.setUint16(this.baseOffset, _0x26fa34);
  }
  get ["length"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["length"](_0x4103dc) {
    this.raw.setUint8(this.baseOffset + 2, _0x4103dc);
  }
  get ["keyActionList"]() {
    return Array.from({
      length: this.length / 2
    }).map((_0x4d5b8c, _0x583446) => KeyAction3.fromDataView(this.raw, this.baseOffset + 3 + 2 * _0x583446));
  }
  set ["keyActionList"](_0x132274) {
    for (let _0x42f6ad = 0; _0x42f6ad < _0x132274.length; _0x42f6ad++) {
      this.raw.setUint8(this.baseOffset + 3 + 2 * _0x42f6ad, _0x132274[_0x42f6ad].keyClass);
      this.raw.setUint8(this.baseOffset + 4 + 2 * _0x42f6ad, _0x132274[_0x42f6ad].keyId);
    }
  }
  static ['get'](_0x456926, _0x9d84a5) {
    const _0x38ba3f = new BufferKeyAction2(this.getData(), Od.id_dynamic_keymap_get_buffer);
    _0x38ba3f.offset = _0x456926;
    _0x38ba3f.length = _0x9d84a5;
    return _0x38ba3f;
  }
  static ['create'](_0x69418a, _0x25b730, _0x53069c) {
    const _0x1f8441 = new BufferKeyAction2(this.getData(), Od.id_dynamic_keymap_set_buffer);
    _0x1f8441.offset = _0x69418a;
    _0x1f8441.length = _0x25b730;
    _0x1f8441.keyActionList = _0x53069c;
    return _0x1f8441;
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
  set ['sz'](_0x5356d3) {
    this.raw.setUint8(this.baseOffset + 2, _0x5356d3);
  }
  get ['offset']() {
    return this.raw.getUint16(this.baseOffset);
  }
  set ["offset"](_0x302818) {
    this.raw.setUint16(this.baseOffset, _0x302818);
  }
  get ['buffer']() {
    const _0x3836d0 = this.raw.buffer.slice(this.baseOffset + 3, this.baseOffset + 3 + this.sz);
    return new DataView(_0x3836d0);
  }
  set ["buffer"](_0x47be12) {
    for (let _0x2e83b8 = 0; _0x2e83b8 < this.sz; _0x2e83b8++) this.raw.setUint8(this.baseOffset + 3 + _0x2e83b8, _0x47be12.getUint8(_0x2e83b8));
  }
  static ["get"](_0x3a96cb, _0x1741fc) {
    const _0x17566d = new MacroBuffer2(this.getData(), Od.id_dynamic_keymap_macro_get_buffer);
    _0x17566d.offset = _0x3a96cb;
    _0x17566d.sz = _0x1741fc;
    return _0x17566d;
  }
  static ["create"](_0x3cd7ba, _0x53df01, _0x5addb1) {
    const _0x121316 = new MacroBuffer2(this.getData(), Od.id_dynamic_keymap_macro_set_buffer);
    _0x121316.offset = _0x3cd7ba;
    _0x121316.sz = _0x5addb1;
    _0x121316.buffer = _0x53df01;
    return _0x121316;
  }
}
class OneTogTh2 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["row"](_0x18acfc) {
    this.raw.setUint8(this.baseOffset + 2, _0x18acfc);
  }
  get ["col"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ['col'](_0x297b00) {
    this.raw.setUint8(this.baseOffset + 3, _0x297b00);
  }
  get ["apc"]() {
    return 0.02 * this.raw.getUint8(this.baseOffset + 4);
  }
  set ["apc"](_0x5712b7) {
    this.raw.setUint8(this.baseOffset + 4, _0x5712b7 / 0.02);
  }
  static ["get"](_0x707b67, _0x2f3b34) {
    const _0x26e72c = new OneTogTh2(this.getData(), Od.id_get_keyboard_value);
    _0x26e72c.raw.setUint8(this.baseOffset, Id.customId);
    _0x26e72c.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    _0x26e72c.row = _0x707b67;
    _0x26e72c.col = _0x2f3b34;
    return _0x26e72c;
  }
  static ["create"](_0xfce305, _0x172cb6, _0x254a6e) {
    const _0x2b4fc3 = new OneTogTh2(this.getData(), Od.id_set_keyboard_value);
    _0x2b4fc3.raw.setUint8(this.baseOffset, Id.customId);
    _0x2b4fc3.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    _0x2b4fc3.row = _0xfce305;
    _0x2b4fc3.col = _0x172cb6;
    _0x2b4fc3.apc = _0x254a6e;
    return _0x2b4fc3;
  }
  static ["fromDataView"](_0x5dcd22) {
    return new OneTogTh2(this.getData(), Od.id_set_keyboard_value).setRaw(_0x5dcd22);
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
  set ['row'](_0x3cc422) {
    this.raw.setUint8(this.baseOffset + 2, _0x3cc422);
  }
  get ['col']() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ['col'](_0x885a8c) {
    this.raw.setUint8(this.baseOffset + 3, _0x885a8c);
  }
  get ["apc"]() {
    return Number((0.01 * this.raw.getUint16(this.baseOffset + 4)).toFixed(2));
  }
  set ['apc'](_0x132bc1) {
    this.raw.setUint16(this.baseOffset + 4, 100 * _0x132bc1);
  }
  get ["apcArr"]() {
    return [this.raw.getUint8(this.baseOffset + 4), this.raw.getUint8(this.baseOffset + 5)];
  }
  static ['get'](_0x421353, _0x1b93f6) {
    const _0x558e97 = new OneTogThV22(this.getData(), Od.id_get_keyboard_value);
    _0x558e97.raw.setUint8(this.baseOffset, Id.customId);
    _0x558e97.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    _0x558e97.row = _0x421353;
    _0x558e97.col = _0x1b93f6;
    return _0x558e97;
  }
  static ['create'](_0x479ab9, _0x20ca21, _0x441f1b) {
    const _0x483b5f = new OneTogThV22(this.getData(), Od.id_set_keyboard_value);
    _0x483b5f.raw.setUint8(this.baseOffset, Id.customId);
    _0x483b5f.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    _0x483b5f.row = _0x479ab9;
    _0x483b5f.col = _0x20ca21;
    _0x483b5f.apc = _0x441f1b;
    return _0x483b5f;
  }
  static ["fromDataView"](_0x49ff7) {
    return new OneTogTh2(this.getData(), Od.id_set_keyboard_value).setRaw(_0x49ff7);
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
  set ['row'](_0x4e7eae) {
    this.raw.setUint8(this.baseOffset + 2, _0x4e7eae);
  }
  get ['col']() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["col"](_0x3d043b) {
    this.raw.setUint8(this.baseOffset + 3, _0x3d043b);
  }
  get ["apc"]() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 4)).toFixed(3));
  }
  set ["apc"](_0xff33eb) {
    this.raw.setUint16(this.baseOffset + 4, 1000 * _0xff33eb);
  }
  get ["apcArr"]() {
    return [this.raw.getUint8(this.baseOffset + 4), this.raw.getUint8(this.baseOffset + 5)];
  }
  static ["get"](_0x479b9a, _0x2df669) {
    const _0x40ebd5 = new OneTogThV3(this.getData(), Od.id_get_keyboard_value);
    _0x40ebd5.raw.setUint8(this.baseOffset, Id.customId);
    _0x40ebd5.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    _0x40ebd5.row = _0x479b9a;
    _0x40ebd5.col = _0x2df669;
    return _0x40ebd5;
  }
  static ["create"](_0xe8ad6d, _0x47cf9f, _0x53d4b6) {
    const _0x3b280d = new OneTogThV3(this.getData(), Od.id_set_keyboard_value);
    _0x3b280d.raw.setUint8(this.baseOffset, Id.customId);
    _0x3b280d.raw.setUint8(this.baseOffset + 1, Id.oneTogTh);
    _0x3b280d.row = _0xe8ad6d;
    _0x3b280d.col = _0x47cf9f;
    _0x3b280d.apc = _0x53d4b6;
    return _0x3b280d;
  }
  static ["fromDataView"](_0x518b94) {
    return new OneTogTh2(this.getData(), Od.id_set_keyboard_value).setRaw(_0x518b94);
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
  set ["offset"](_0x1e0783) {
    this.raw.setUint16(this.baseOffset + 4, _0x1e0783);
  }
  get ["size"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['size'](_0x3cc6a4) {
    this.raw.setUint8(this.baseOffset + 6, _0x3cc6a4);
  }
  set ["flashOp"](_0x3ce446) {
    this.raw.setUint8(this.baseOffset + 7, _0x3ce446);
  }
  set ["togThsFlash"](_0x307bda) {
    for (let _0x1d9b26 = 0; _0x1d9b26 < _0x307bda.byteLength; _0x1d9b26++) this.raw.setUint8(this.baseOffset + 8 + _0x1d9b26, _0x307bda.getUint8(_0x1d9b26));
  }
  get ["togThs"]() {
    const _0xc5516 = this.size,
      _0x5f214d = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + _0xc5516);
    return new DataView(_0x5f214d);
  }
  set ['togThs'](_0x1541db) {
    for (let _0x397bac = 0; _0x397bac < _0x1541db.byteLength; _0x397bac++) this.raw.setUint8(this.baseOffset + 7 + _0x397bac, _0x1541db.getUint8(_0x397bac));
  }
  get ['togThsV2']() {
    const _0x39e212 = 2 * this.size,
      _0x158f37 = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + _0x39e212);
    return new DataView(_0x158f37);
  }
  static ["get"](_0x260bd0, _0x3dc5b7) {
    const _0x3beba2 = new BufferTogTh2(this.getData(), Od.id_get_keyboard_value);
    _0x3beba2.raw.setUint8(this.baseOffset, Id.customId);
    _0x3beba2.raw.setUint8(this.baseOffset + 1, Id.bufferTogTh);
    _0x3beba2.offset = _0x260bd0;
    _0x3beba2.size = _0x3dc5b7;
    return _0x3beba2;
  }
  static ["create"](_0x1daf22, _0x4d6712, _0x51eb95, _0x3aa3e9) {
    const _0x1c9523 = new BufferTogTh2(this.getData(), Od.id_set_keyboard_value);
    _0x1c9523.raw.setUint8(this.baseOffset, Id.customId);
    _0x1c9523.raw.setUint8(this.baseOffset + 1, Id.bufferTogTh);
    _0x1c9523.offset = _0x1daf22;
    _0x1c9523.size = _0x4d6712;
    _0x1c9523.flashOp = _0x51eb95;
    _0x1c9523.togThsFlash = _0x3aa3e9;
    return _0x1c9523;
  }
}
class OneRTKeyInfo2 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["row"](_0x19658a) {
    this.raw.setUint8(this.baseOffset + 2, _0x19658a);
  }
  get ["col"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["col"](_0x577150) {
    this.raw.setUint8(this.baseOffset + 3, _0x577150);
  }
  get ['on']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['on'](_0x2d7c5e) {
    this.raw.setUint8(this.baseOffset + 4, _0x2d7c5e);
  }
  get ["release"]() {
    return 0.02 * this.raw.getUint8(this.baseOffset + 5);
  }
  set ["release"](_0x4d575d) {
    this.raw.setUint8(this.baseOffset + 5, _0x4d575d / 0.02);
  }
  get ['press']() {
    return 0.02 * this.raw.getUint8(this.baseOffset + 6);
  }
  set ["press"](_0x514fb2) {
    this.raw.setUint8(this.baseOffset + 6, _0x514fb2 / 0.02);
  }
  static ["get"](_0x5375c6, _0x224e93) {
    const _0x2e317a = new OneRTKeyInfo2(this.getData(), Od.id_get_keyboard_value);
    _0x2e317a.raw.setUint8(this.baseOffset, Id.customId);
    _0x2e317a.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    _0x2e317a.row = _0x5375c6;
    _0x2e317a.col = _0x224e93;
    return _0x2e317a;
  }
  static ['create'](_0x5b44a8) {
    const _0x37a86d = new OneRTKeyInfo2(this.getData(), Od.id_set_keyboard_value);
    _0x37a86d.raw.setUint8(this.baseOffset, Id.customId);
    _0x37a86d.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    _0x37a86d.row = _0x5b44a8.row;
    _0x37a86d.col = _0x5b44a8.col;
    _0x37a86d.on = _0x5b44a8.on;
    _0x37a86d.release = _0x5b44a8.release;
    _0x37a86d.press = _0x5b44a8.press;
    return _0x37a86d;
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
  set ['row'](_0x9af07a) {
    this.raw.setUint8(this.baseOffset + 2, _0x9af07a);
  }
  get ['col']() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["col"](_0x515781) {
    this.raw.setUint8(this.baseOffset + 3, _0x515781);
  }
  get ['on']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['on'](_0x32bfa6) {
    this.raw.setUint8(this.baseOffset + 4, _0x32bfa6);
  }
  get ['release']() {
    return Number((0.01 * this.raw.getUint16(this.baseOffset + 5)).toFixed(2));
  }
  set ["release"](_0x4a308f) {
    this.raw.setUint16(this.baseOffset + 5, 100 * _0x4a308f);
  }
  get ["releaseArr"]() {
    return [this.raw.getUint8(this.baseOffset + 5), this.raw.getUint8(this.baseOffset + 6)];
  }
  get ["press"]() {
    return Number((0.01 * this.raw.getUint16(this.baseOffset + 7)).toFixed(2));
  }
  set ["press"](_0x93ac0c) {
    this.raw.setUint16(this.baseOffset + 7, 100 * _0x93ac0c);
  }
  get ["pressArr"]() {
    return [this.raw.getUint8(this.baseOffset + 7), this.raw.getUint8(this.baseOffset + 8)];
  }
  static ['get'](_0x11df6a, _0x2bdcf9) {
    const _0x890de0 = new OneRTKeyInfoV22(this.getData(), Od.id_get_keyboard_value);
    _0x890de0.raw.setUint8(this.baseOffset, Id.customId);
    _0x890de0.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    _0x890de0.row = _0x11df6a;
    _0x890de0.col = _0x2bdcf9;
    return _0x890de0;
  }
  static ["create"](_0x16eee6) {
    const _0x2b356a = new OneRTKeyInfoV22(this.getData(), Od.id_set_keyboard_value);
    _0x2b356a.raw.setUint8(this.baseOffset, Id.customId);
    _0x2b356a.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    _0x2b356a.row = _0x16eee6.row;
    _0x2b356a.col = _0x16eee6.col;
    _0x2b356a.on = _0x16eee6.on;
    _0x2b356a.release = _0x16eee6.release;
    _0x2b356a.press = _0x16eee6.press;
    return _0x2b356a;
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
  set ["row"](_0x2959a1) {
    this.raw.setUint8(this.baseOffset + 2, _0x2959a1);
  }
  get ["col"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["col"](_0x173da8) {
    this.raw.setUint8(this.baseOffset + 3, _0x173da8);
  }
  get ['on']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['on'](_0x1d7906) {
    this.raw.setUint8(this.baseOffset + 4, _0x1d7906);
  }
  get ["release"]() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 5)).toFixed(3));
  }
  set ["release"](_0x31e257) {
    this.raw.setUint16(this.baseOffset + 5, 1000 * _0x31e257);
  }
  get ["releaseArr"]() {
    return [this.raw.getUint8(this.baseOffset + 5), this.raw.getUint8(this.baseOffset + 6)];
  }
  get ["press"]() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 7)).toFixed(3));
  }
  set ["press"](_0x127b4c) {
    this.raw.setUint16(this.baseOffset + 7, 1000 * _0x127b4c);
  }
  get ['pressArr']() {
    return [this.raw.getUint8(this.baseOffset + 7), this.raw.getUint8(this.baseOffset + 8)];
  }
  static ["get"](_0x3db149, _0x27e704) {
    const _0x1a29b3 = new OneRTKeyInfoV3(this.getData(), Od.id_get_keyboard_value);
    _0x1a29b3.raw.setUint8(this.baseOffset, Id.customId);
    _0x1a29b3.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    _0x1a29b3.row = _0x3db149;
    _0x1a29b3.col = _0x27e704;
    return _0x1a29b3;
  }
  static ["create"](_0x1a5995) {
    const _0x162a2e = new OneRTKeyInfoV3(this.getData(), Od.id_set_keyboard_value);
    _0x162a2e.raw.setUint8(this.baseOffset, Id.customId);
    _0x162a2e.raw.setUint8(this.baseOffset + 1, Id.oneRt);
    _0x162a2e.row = _0x1a5995.row;
    _0x162a2e.col = _0x1a5995.col;
    _0x162a2e.on = _0x1a5995.on;
    _0x162a2e.release = _0x1a5995.release;
    _0x162a2e.press = _0x1a5995.press;
    return _0x162a2e;
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
  set ["offset"](_0x4813f1) {
    this.raw.setUint16(this.baseOffset + 4, _0x4813f1);
  }
  get ["size"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['size'](_0x1173a5) {
    this.raw.setUint8(this.baseOffset + 6, _0x1173a5);
  }
  get ['rt']() {
    const _0x49c00f = 3 * this.size,
      _0x3b5328 = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + _0x49c00f);
    return new DataView(_0x3b5328);
  }
  set ['rt'](_0x3cdc9c) {
    for (let _0x346966 = 0; _0x346966 < _0x3cdc9c.byteLength; _0x346966++) this.raw.setUint8(this.baseOffset + 7 + _0x346966, _0x3cdc9c.getUint8(_0x346966));
  }
  get ["rtV2"]() {
    const _0x59164e = 5 * this.size,
      _0x4e4fb5 = this.raw.buffer.slice(this.baseOffset + 7, this.baseOffset + 7 + _0x59164e);
    return new DataView(_0x4e4fb5);
  }
  set ["flashOp"](_0x2b24a3) {
    this.raw.setUint8(this.baseOffset + 7, _0x2b24a3);
  }
  set ["rtFlash"](_0x4c270d) {
    for (let _0x508914 = 0; _0x508914 < _0x4c270d.byteLength; _0x508914++) this.raw.setUint8(this.baseOffset + 8 + _0x508914, _0x4c270d.getUint8(_0x508914));
  }
  static ["get"](_0x4bd2e6, _0x2a7faf) {
    const _0x23e683 = new BufferRTKeyInfo2(this.getData(), Od.id_get_keyboard_value);
    _0x23e683.raw.setUint8(this.baseOffset, Id.customId);
    _0x23e683.raw.setUint8(this.baseOffset + 1, Id.bufferRt);
    _0x23e683.offset = _0x4bd2e6;
    _0x23e683.size = _0x2a7faf;
    return _0x23e683;
  }
  static ["create"](_0x2aec43, _0x326640, _0x345eea, _0x569db9) {
    const _0x40c289 = new BufferRTKeyInfo2(this.getData(), Od.id_set_keyboard_value);
    _0x40c289.raw.setUint8(this.baseOffset, Id.customId);
    _0x40c289.raw.setUint8(this.baseOffset + 1, Id.bufferRt);
    _0x40c289.offset = _0x2aec43;
    _0x40c289.size = _0x326640;
    _0x40c289.flashOp = _0x345eea;
    _0x40c289.rtFlash = _0x569db9;
    return _0x40c289;
  }
}
class DeadBand2 extends Dd {
  get ["top"]() {
    return 0.02 * this.raw.getUint8(this.baseOffset + 2);
  }
  set ["top"](_0x350d1b) {
    this.raw.setUint8(this.baseOffset + 2, _0x350d1b / 0.02);
  }
  get ["bottom"]() {
    return 0.02 * this.raw.getUint8(this.baseOffset + 3);
  }
  set ["bottom"](_0x43a950) {
    this.raw.setUint8(this.baseOffset + 3, _0x43a950 / 0.02);
  }
  static ['get']() {
    const _0x4ea0e5 = new DeadBand2(this.getData(), Od.id_get_keyboard_value);
    _0x4ea0e5.raw.setUint8(this.baseOffset, Id.customId);
    _0x4ea0e5.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    return _0x4ea0e5;
  }
  static ['create'](_0x440398, _0x59269a) {
    const _0x1a2d2c = new DeadBand2(this.getData(), Od.id_set_keyboard_value);
    _0x1a2d2c.raw.setUint8(this.baseOffset, Id.customId);
    _0x1a2d2c.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    _0x1a2d2c.top = _0x440398;
    _0x1a2d2c.bottom = _0x59269a;
    return _0x1a2d2c;
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
  set ["top"](_0x1ab6d3) {
    this.raw.setUint16(this.baseOffset + 2, _0x1ab6d3 / 0.01);
  }
  get ["bottom"]() {
    return 0.01 * this.raw.getUint16(this.baseOffset + 4);
  }
  set ["bottom"](_0x558d2a) {
    this.raw.setUint16(this.baseOffset + 4, _0x558d2a / 0.01);
  }
  static ["get"]() {
    const _0x488759 = new DeadBandV22(this.getData(), Od.id_get_keyboard_value);
    _0x488759.raw.setUint8(this.baseOffset, Id.customId);
    _0x488759.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    return _0x488759;
  }
  static ["create"](_0x394b58, _0x4f942a) {
    const _0x2c796d = new DeadBandV22(this.getData(), Od.id_set_keyboard_value);
    _0x2c796d.raw.setUint8(this.baseOffset, Id.customId);
    _0x2c796d.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    _0x2c796d.top = _0x394b58;
    _0x2c796d.bottom = _0x4f942a;
    return _0x2c796d;
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
  set ["top"](_0x281347) {
    this.raw.setUint16(this.baseOffset + 2, 1000 * _0x281347);
  }
  get ['bottom']() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 4)).toFixed(3));
  }
  set ["bottom"](_0x4683ad) {
    this.raw.setUint16(this.baseOffset + 4, 1000 * _0x4683ad);
  }
  static ["get"]() {
    const _0x3a9601 = new DeadBandV3(this.getData(), Od.id_get_keyboard_value);
    _0x3a9601.raw.setUint8(this.baseOffset, Id.customId);
    _0x3a9601.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    return _0x3a9601;
  }
  static ["create"](_0x28f9ad, _0x8a569a) {
    const _0x437b58 = new DeadBandV3(this.getData(), Od.id_set_keyboard_value);
    _0x437b58.raw.setUint8(this.baseOffset, Id.customId);
    _0x437b58.raw.setUint8(this.baseOffset + 1, Id.deadBand);
    _0x437b58.top = _0x28f9ad;
    _0x437b58.bottom = _0x8a569a;
    return _0x437b58;
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
  set ["effect"](_0x47111e) {
    this.raw.setUint8(this.baseOffset + 1, _0x47111e);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["speed"](_0x4c04f1) {
    this.raw.setUint8(this.baseOffset + 3, _0x4c04f1);
  }
  get ["color"]() {
    const [_0x347970, _0x2b7c2d, _0x27d031] = [this.raw.getUint8(this.baseOffset + 4), this.raw.getUint8(this.baseOffset + 5), this.raw.getUint8(this.baseOffset + 6)];
    return {
      r: _0x347970,
      g: _0x2b7c2d,
      b: _0x27d031
    };
  }
  set ['color'](_0xcd1b7d) {
    this.raw.setUint8(this.baseOffset + 4, _0xcd1b7d.r);
    this.raw.setUint8(this.baseOffset + 5, _0xcd1b7d.g);
    this.raw.setUint8(this.baseOffset + 6, _0xcd1b7d.b);
  }
  get ["brightness"]() {
    return this.raw.getUint8(this.baseOffset + 7);
  }
  set ["brightness"](_0x5bf2e5) {
    this.raw.setUint8(this.baseOffset + 7, _0x5bf2e5);
  }
  static ["get"]() {
    const _0x596a51 = new LightInfo2(this.getData(), Od.id_lighting_get_value);
    _0x596a51.raw.setUint8(this.baseOffset, Id.lightInfo);
    return _0x596a51;
  }
  static ["create"](_0x2bfb2c) {
    const _0x5b27fc = new LightInfo2(this.getData(), Od.id_lighting_set_value);
    _0x5b27fc.raw.setUint8(this.baseOffset, Id.lightInfo);
    _0x5b27fc.effect = _0x2bfb2c.effect;
    _0x5b27fc.speed = _0x2bfb2c.speed;
    _0x5b27fc.color = _0x2bfb2c.color;
    _0x5b27fc.brightness = _0x2bfb2c.brightness;
    return _0x5b27fc;
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
    const _0x2cbb8e = new ProtocolVersion2(this.getData(), Od.id_get_keyboard_value);
    _0x2cbb8e.raw.setUint8(this.baseOffset, Id.customId);
    return _0x2cbb8e;
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
  set ["rgbArea"](_0xd984a6) {
    this.raw.setUint8(this.baseOffset + 2, _0xd984a6);
  }
  get ["wasdSwitch"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["wasdSwitch"](_0x145778) {
    this.raw.setUint8(this.baseOffset + 3, _0x145778);
  }
  get ["macSwitch"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['macSwitch'](_0x4a9bde) {
    this.raw.setUint8(this.baseOffset + 4, _0x4a9bde);
  }
  get ["winLock"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["winLock"](_0x5b05ec) {
    this.raw.setUint8(this.baseOffset + 5, _0x5b05ec);
  }
  get ["nKroSwitch"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ["nKroSwitch"](_0x7f639e) {
    this.raw.setUint8(this.baseOffset + 6, _0x7f639e);
  }
  static ["get"]() {
    const _0xf5d4d4 = new KeyboardFeature2(this.getData(), Od.id_get_keyboard_value);
    _0xf5d4d4.raw.setUint8(this.baseOffset, Id.customId);
    _0xf5d4d4.raw.setUint8(this.baseOffset + 1, Id.feature);
    return _0xf5d4d4;
  }
  static ["create"](_0x3caa91) {
    const _0x40a9f3 = new KeyboardFeature2(this.getData(), Od.id_set_keyboard_value);
    _0x40a9f3.raw.setUint8(this.baseOffset, Id.customId);
    _0x40a9f3.raw.setUint8(this.baseOffset + 1, Id.feature);
    _0x40a9f3.rgbArea = _0x3caa91.rgbArea;
    _0x40a9f3.wasdSwitch = _0x3caa91.wasdSwitch;
    _0x40a9f3.macSwitch = _0x3caa91.macSwitch;
    _0x40a9f3.winLock = _0x3caa91.winLock;
    _0x40a9f3.nKroSwitch = _0x3caa91.nKroSwitch;
    return _0x40a9f3;
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
    const _0x3aac0f = new ResetKeyboardDefault2(this.getData(), Od.id_set_keyboard_value);
    _0x3aac0f.raw.setUint8(this.baseOffset, Id.customId);
    _0x3aac0f.raw.setUint8(this.baseOffset + 1, Id.resetAll);
    return _0x3aac0f;
  }
  static ['getKeyAction']() {
    return new ResetKeyboardDefault2(this.getData(), Od.id_dynamic_keymap_reset);
  }
}
const Sg = class _Layer extends Dd {
  get ['layer']() {
    return _Layer.layerMap[this.raw.getUint8(this.baseOffset + 2)];
  }
  set ["layer"](_0x5d1503) {
    this.raw.setUint8(this.baseOffset + 2, _0x5d1503);
  }
  static ["get"]() {
    const _0x44ba15 = new _Layer(this.getData(), Od.id_get_keyboard_value);
    _0x44ba15.raw.setUint8(this.baseOffset, Id.customId);
    _0x44ba15.raw.setUint8(this.baseOffset + 1, Id.layer);
    return _0x44ba15;
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
  set ['opt'](_0x553b00) {
    this.raw.setUint8(this.baseOffset + 2, _0x553b00);
  }
  static ["get"]() {
    const _0xf380a1 = new BottomOptimizeSwitch2(this.getData(), Od.id_get_keyboard_value);
    _0xf380a1.raw.setUint8(this.baseOffset, Id.customId);
    _0xf380a1.raw.setUint8(this.baseOffset + 1, Id.bottomOptimizeSwitch);
    return _0xf380a1;
  }
  static ["create"](_0x182b81) {
    const _0x37619b = new BottomOptimizeSwitch2(this.getData(), Od.id_set_keyboard_value);
    _0x37619b.raw.setUint8(this.baseOffset, Id.customId);
    _0x37619b.raw.setUint8(this.baseOffset + 1, Id.bottomOptimizeSwitch);
    _0x37619b.opt = _0x182b81;
    return _0x37619b;
  }
}
class GameModeSwitch2 extends Dd {
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["mode"](_0xf3d6ff) {
    this.raw.setUint8(this.baseOffset + 2, _0xf3d6ff);
  }
  static ['get']() {
    const _0x54557f = new GameModeSwitch2(this.getData(), Od.id_get_keyboard_value);
    _0x54557f.raw.setUint8(this.baseOffset, Id.customId);
    _0x54557f.raw.setUint8(this.baseOffset + 1, Id.gameMode);
    return _0x54557f;
  }
  static ["create"](_0x399969) {
    const _0xa01a63 = new GameModeSwitch2(this.getData(), Od.id_set_keyboard_value);
    _0xa01a63.raw.setUint8(this.baseOffset, Id.customId);
    _0xa01a63.raw.setUint8(this.baseOffset + 1, Id.gameMode);
    _0xa01a63.mode = _0x399969;
    return _0xa01a63;
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
  set ["type"](_0x1bd2b3) {
    this.raw.setUint8(this.baseOffset + 2, _0x1bd2b3);
  }
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["mode"](_0x13595b) {
    this.raw.setUint8(this.baseOffset + 3, _0x13595b);
  }
  static ["get"]() {
    const _0x1dc800 = new PhysicalKeysSwitch(this.getData(), Od.id_get_keyboard_value);
    _0x1dc800.raw.setUint8(this.baseOffset, Id.customId);
    _0x1dc800.raw.setUint8(this.baseOffset + 1, Id.physical);
    return _0x1dc800;
  }
  static ["create"](_0x454e64) {
    const _0xbda2b2 = new PhysicalKeysSwitch(this.getData(), Od.id_set_keyboard_value);
    _0xbda2b2.raw.setUint8(this.baseOffset, Id.customId);
    _0xbda2b2.raw.setUint8(this.baseOffset + 1, Id.physical);
    _0xbda2b2.mode = _0x454e64.mode;
    _0xbda2b2.type = _0x454e64.type;
    return _0xbda2b2;
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
  set ["mode"](_0x77bf1d) {
    this.raw.setUint8(this.baseOffset + 2, _0x77bf1d);
  }
  get ["colorful"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ['colorful'](_0x4c3643) {
    this.raw.setUint8(this.baseOffset + 3, _0x4c3643);
  }
  get ['brightness']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["brightness"](_0x471581) {
    this.raw.setUint8(this.baseOffset + 4, _0x471581);
  }
  get ["speed"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["speed"](_0x4776ab) {
    this.raw.setUint8(this.baseOffset + 5, _0x4776ab);
  }
  get ["color"]() {
    const [_0x22076a, _0x38fe77, _0x1ea7c9] = [this.raw.getUint8(this.baseOffset + 6), this.raw.getUint8(this.baseOffset + 7), this.raw.getUint8(this.baseOffset + 8)];
    return {
      r: _0x22076a,
      g: _0x38fe77,
      b: _0x1ea7c9
    };
  }
  set ["color"](_0x34403b) {
    this.raw.setUint8(this.baseOffset + 6, _0x34403b.r);
    this.raw.setUint8(this.baseOffset + 7, _0x34403b.g);
    this.raw.setUint8(this.baseOffset + 8, _0x34403b.b);
  }
  static ["get"]() {
    const _0x5e82fe = new ExtraLightInfo(this.getData(), Od.id_get_keyboard_value);
    _0x5e82fe.raw.setUint8(this.baseOffset, Id.customId);
    _0x5e82fe.raw.setUint8(this.baseOffset + 1, Id.extraLight);
    return _0x5e82fe;
  }
  static ["create"](_0x1ce2c2) {
    const _0x5db507 = new ExtraLightInfo(this.getData(), Od.id_set_keyboard_value);
    _0x5db507.raw.setUint8(this.baseOffset, Id.customId);
    _0x5db507.raw.setUint8(this.baseOffset + 1, Id.extraLight);
    _0x5db507.mode = _0x1ce2c2.mode;
    _0x5db507.colorful = _0x1ce2c2.colorful;
    _0x5db507.speed = _0x1ce2c2.speed;
    _0x5db507.brightness = _0x1ce2c2.brightness;
    _0x5db507.color = _0x1ce2c2.color;
    return _0x5db507;
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
  set ['profile'](_0x1233fe) {
    this.raw.setUint8(this.baseOffset + 2, _0x1233fe);
  }
  static ["get"]() {
    const _0x262b3d = new ProfileInfo(this.getData(), Od.id_get_keyboard_value);
    _0x262b3d.raw.setUint8(this.baseOffset, Id.customId);
    _0x262b3d.raw.setUint8(this.baseOffset + 1, Id.profile);
    return _0x262b3d;
  }
  static ["create"](_0xaf0501) {
    const _0x4bff2b = new ProfileInfo(this.getData(), Od.id_set_keyboard_value);
    _0x4bff2b.raw.setUint8(this.baseOffset, Id.customId);
    _0x4bff2b.raw.setUint8(this.baseOffset + 1, Id.profile);
    _0x4bff2b.profile = _0xaf0501.profile;
    return _0x4bff2b;
  }
  ["toJSON"]() {
    return {
      mode: this.profile
    };
  }
}
class TravelInfo extends Dd {
  get ["travelMax"]() {
    const _0x53a6ea = this.raw.getUint16(this.baseOffset + 2);
    return Number((0.001 * _0x53a6ea).toFixed(3));
  }
  get ["travelMin"]() {
    const _0x350b76 = this.raw.getUint16(this.baseOffset + 4);
    return Number((0.001 * _0x350b76).toFixed(3));
  }
  get ["travelStep"]() {
    const _0x2853ad = this.raw.getUint16(this.baseOffset + 6);
    return Number((0.001 * _0x2853ad).toFixed(3));
  }
  get ["rtMax"]() {
    const _0x3abdc8 = this.raw.getUint16(this.baseOffset + 8);
    return Number((0.001 * _0x3abdc8).toFixed(3));
  }
  get ["rtMin"]() {
    const _0x49a031 = this.raw.getUint16(this.baseOffset + 10);
    return Number((0.001 * _0x49a031).toFixed(3));
  }
  get ["rtStep"]() {
    const _0x20ca7d = this.raw.getUint16(this.baseOffset + 12);
    return Number((0.001 * _0x20ca7d).toFixed(3));
  }
  static ["get"]() {
    const _0x40d6a8 = new TravelInfo(this.getData(), Od.id_get_keyboard_value);
    _0x40d6a8.raw.setUint8(this.baseOffset, Id.customId);
    _0x40d6a8.raw.setUint8(this.baseOffset + 1, Id.travel);
    return _0x40d6a8;
  }
}
class AiMatchSwitch extends Dd {
  get ["mode"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["mode"](_0x1a013b) {
    this.raw.setUint8(this.baseOffset + 2, _0x1a013b);
  }
  static ["get"]() {
    const _0x96079c = new AiMatchSwitch(this.getData(), Od.id_get_keyboard_value);
    _0x96079c.raw.setUint8(this.baseOffset, Id.customId);
    _0x96079c.raw.setUint8(this.baseOffset + 1, Id.aiMatch);
    return _0x96079c;
  }
  static ["create"](_0x4866b7) {
    const _0x56a509 = new AiMatchSwitch(this.getData(), Od.id_set_keyboard_value);
    _0x56a509.raw.setUint8(this.baseOffset, Id.customId);
    _0x56a509.raw.setUint8(this.baseOffset + 1, Id.aiMatch);
    _0x56a509.mode = _0x4866b7.mode;
    return _0x56a509;
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
  set ['time'](_0x583259) {
    this.raw.setUint8(this.baseOffset + 2, _0x583259);
  }
  static ["get"]() {
    const _0x7de7bf = new LightSleepTime(this.getData(), Od.id_get_keyboard_value);
    _0x7de7bf.raw.setUint8(this.baseOffset, Id.customId);
    _0x7de7bf.raw.setUint8(this.baseOffset + 1, Id.lightOff);
    return _0x7de7bf;
  }
  static ['create'](_0x1920c4) {
    const _0x513fdb = new LightSleepTime(this.getData(), Od.id_set_keyboard_value);
    _0x513fdb.raw.setUint8(this.baseOffset, Id.customId);
    _0x513fdb.raw.setUint8(this.baseOffset + 1, Id.lightOff);
    _0x513fdb.time = _0x1920c4.time;
    return _0x513fdb;
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
    const _0x43df1d = new MixedAxisInfo(this.getData(), Od.id_get_keyboard_value);
    _0x43df1d.raw.setUint8(this.baseOffset, Id.customId);
    _0x43df1d.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    _0x43df1d.raw.setUint8(this.baseOffset + 4, 8);
    return _0x43df1d;
  }
}
class MixAxle2 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ['row'](_0xf2e5a5) {
    this.raw.setUint8(this.baseOffset + 2, _0xf2e5a5);
  }
  get ["col"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["col"](_0x1be935) {
    this.raw.setUint8(this.baseOffset + 3, _0x1be935);
  }
  get ["subField"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["subField"](_0x83326c) {
    this.raw.setUint8(this.baseOffset + 4, _0x83326c);
  }
}
class OneMixAxle2 extends MixAxle2 {
  get ['keyType']() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["keyType"](_0x5d930c) {
    this.raw.setUint8(this.baseOffset + 5, _0x5d930c);
  }
  static ["get"](_0x2026ec, _0x5245a4) {
    const _0x546b6a = new OneMixAxle2(this.getData(), Od.id_get_keyboard_value);
    _0x546b6a.raw.setUint8(this.baseOffset, Id.customId);
    _0x546b6a.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    _0x546b6a.row = _0x2026ec;
    _0x546b6a.col = _0x5245a4;
    _0x546b6a.subField = Pd.GET_KEY;
    return _0x546b6a;
  }
  static ["create"](_0xa65929, _0x5a0977, _0x4b8a4b) {
    const _0x1c55aa = new OneMixAxle2(this.getData(), Od.id_set_keyboard_value);
    _0x1c55aa.raw.setUint8(this.baseOffset, Id.customId);
    _0x1c55aa.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    _0x1c55aa.subField = Pd.SET_KEY;
    _0x1c55aa.row = _0xa65929;
    _0x1c55aa.col = _0x5a0977;
    _0x1c55aa.keyType = _0x4b8a4b;
    return _0x1c55aa;
  }
  static ["createAll"](_0x51da8c) {
    const _0x11a4b0 = new OneMixAxle2(this.getData(), Od.id_set_keyboard_value);
    _0x11a4b0.raw.setUint8(this.baseOffset, Id.customId);
    _0x11a4b0.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    _0x11a4b0.subField = Pd.SET_KEY_ALL;
    _0x11a4b0.keyType = _0x51da8c;
    return _0x11a4b0;
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
    const _0x270b78 = new OptionMixAxle2(this.getData(), Od.id_get_keyboard_value);
    _0x270b78.raw.setUint8(this.baseOffset, Id.customId);
    _0x270b78.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    _0x270b78.subField = Pd.START_CFG;
    return _0x270b78;
  }
  static ["save"]() {
    const _0x5709f5 = new OptionMixAxle2(this.getData(), Od.id_set_keyboard_value);
    _0x5709f5.raw.setUint8(this.baseOffset, Id.customId);
    _0x5709f5.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    _0x5709f5.subField = Pd.SAVE_CFG;
    return _0x5709f5;
  }
}
class BufferMixAxle2 extends MixAxle2 {
  get ["offset"]() {
    return this.raw.getUint16(this.baseOffset + 5);
  }
  set ["offset"](_0x20a843) {
    this.raw.setUint16(this.baseOffset + 5, _0x20a843);
  }
  get ["size"]() {
    return this.raw.getUint8(this.baseOffset + 7);
  }
  set ["size"](_0x190453) {
    this.raw.setUint8(this.baseOffset + 7, _0x190453);
  }
  get ["keyTypes"]() {
    const _0x191949 = this.raw.buffer.slice(this.baseOffset + 8, this.baseOffset + 8 + this.size);
    return new DataView(_0x191949);
  }
  set ["keyTypes"](_0x9ad430) {
    for (let _0x1351eb = 0; _0x1351eb < this.size; _0x1351eb++) this.raw.setUint8(this.baseOffset + 8 + _0x1351eb, _0x9ad430.getUint8(_0x1351eb));
  }
  static ["get"](_0x534010, _0x392f09) {
    const _0x5150c3 = new BufferMixAxle2(this.getData(), Od.id_get_keyboard_value);
    _0x5150c3.raw.setUint8(this.baseOffset, Id.customId);
    _0x5150c3.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    _0x5150c3.subField = Pd.GET_KEY_BUFFER;
    _0x5150c3.offset = _0x534010;
    _0x5150c3.size = _0x392f09;
    return _0x5150c3;
  }
  static ["create"](_0x493c4c, _0x2bdd09, _0x18dd67) {
    const _0x3e38af = new BufferMixAxle2(this.getData(), Od.id_set_keyboard_value);
    _0x3e38af.raw.setUint8(this.baseOffset, Id.customId);
    _0x3e38af.raw.setUint8(this.baseOffset + 1, Id.mixAxle);
    _0x3e38af.subField = Pd.SET_KEY_BUFFER;
    _0x3e38af.offset = _0x493c4c;
    _0x3e38af.size = _0x2bdd09;
    _0x3e38af.keyTypes = _0x18dd67;
    return _0x3e38af;
  }
}
class AxleCalibrate2 extends Dd {
  static ["start"]() {
    const _0x1ffebb = new AxleCalibrate2(this.getData(), Od.id_set_keyboard_value);
    _0x1ffebb.raw.setUint8(this.baseOffset, Id.customId);
    _0x1ffebb.raw.setUint8(this.baseOffset + 1, Id.calibrate);
    return _0x1ffebb;
  }
}
class DynamicKeyStroke2 extends Dd {
  get ["subField"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["subField"](_0x470ffa) {
    this.raw.setUint8(this.baseOffset + 4, _0x470ffa);
  }
  get ['index']() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["index"](_0x221dfa) {
    this.raw.setUint8(this.baseOffset + 5, _0x221dfa);
  }
  get ["actions"]() {
    const _0x14ff97 = this.raw.buffer.slice(this.baseOffset + 6, this.baseOffset + 6 + 16),
      _0x170883 = _0x14ff97.byteLength / 4,
      _0x108f20 = [];
    for (let _0x4618b1 = 0; _0x4618b1 < _0x170883; _0x4618b1++) {
      const _0x36fe1e = _0x14ff97.slice(4 * _0x4618b1, 4 * _0x4618b1 + 4),
        _0x23aa1b = new DataView(_0x36fe1e),
        _0x32ac86 = new Cg(_0x23aa1b, 0);
      _0x108f20.push(_0x32ac86);
    }
    return _0x108f20;
  }
  set ["actions"](_0x313d7a) {
    for (let _0x46a13e = 0; _0x46a13e < _0x313d7a.length; _0x46a13e++) {
      const _0x565e1e = _0x313d7a[_0x46a13e].dataView;
      for (let _0x5deb72 = 0; _0x5deb72 < _0x565e1e.byteLength; _0x5deb72++) this.raw.setUint8(this.baseOffset + 6 + 4 * _0x46a13e + _0x5deb72, _0x565e1e.getUint8(_0x5deb72));
    }
  }
  static ["get"](_0x1d5346) {
    const _0x3e2dee = new DynamicKeyStroke2(this.getData(), Od.id_get_keyboard_value);
    _0x3e2dee.raw.setUint8(this.baseOffset, Id.customId);
    _0x3e2dee.raw.setUint8(this.baseOffset + 1, Id.dks);
    _0x3e2dee.subField = Ed.get;
    _0x3e2dee.index = _0x1d5346;
    return _0x3e2dee;
  }
  static ["create"](_0x34e9e8, _0x5efa8c) {
    const _0x186a89 = new DynamicKeyStroke2(this.getData(), Od.id_set_keyboard_value);
    _0x186a89.raw.setUint8(this.baseOffset, Id.customId);
    _0x186a89.raw.setUint8(this.baseOffset + 1, Id.dks);
    _0x186a89.subField = Ed.set;
    _0x186a89.index = _0x34e9e8;
    _0x186a89.actions = _0x5efa8c;
    return _0x186a89;
  }
}
class CustomLamplight2 extends Dd {
  get ["row"]() {
    return this.raw.getUint8(this.baseOffset + 1);
  }
  set ["row"](_0x12aba2) {
    this.raw.setUint8(this.baseOffset + 1, _0x12aba2);
  }
  get ['col']() {
    return this.raw.getUint8(this.baseOffset + 2);
  }
  set ["col"](_0x51e7dd) {
    this.raw.setUint8(this.baseOffset + 2, _0x51e7dd);
  }
  get ["num"]() {
    return this.raw.getUint8(this.baseOffset + 3);
  }
  set ["num"](_0x569a2c) {
    this.raw.setUint8(this.baseOffset + 3, _0x569a2c);
  }
  get ['colors']() {
    const _0x438c2c = this.raw.buffer.slice(this.baseOffset + 4, this.baseOffset + 4 + 3 * this.num);
    return rt.chunk(Array.from(new Uint8Array(_0x438c2c)), 3);
  }
  set ["colors"](_0x24c9a0) {
    const _0x4b9e4a = _0x24c9a0.flat();
    for (let _0x7a845b = 0; _0x7a845b < _0x4b9e4a.length; _0x7a845b++) this.raw.setUint8(this.baseOffset + 4 + _0x7a845b, _0x4b9e4a[_0x7a845b]);
  }
  static ["save"]() {
    const _0x5c13c4 = new CustomLamplight2(this.getData(), Od.id_set_keyboard_value);
    _0x5c13c4.raw.setUint8(this.baseOffset, Id.customId);
    _0x5c13c4.raw.setUint8(this.baseOffset + 1, Id.saveLamplight);
    return _0x5c13c4;
  }
  static ["get"](_0x25a70f, _0x48562b, _0x5997c8) {
    const _0x5258a0 = new CustomLamplight2(this.getData(), Od.id_custom_get_value);
    _0x5258a0.raw.setUint8(this.baseOffset, Id.getCustomLamplight);
    _0x5258a0.row = _0x25a70f;
    _0x5258a0.col = _0x48562b;
    _0x5258a0.num = _0x5997c8;
    return _0x5258a0;
  }
  static ["create"](_0x262040, _0x10ee92, _0x138fd9, _0x476114) {
    const _0x2943ff = new CustomLamplight2(this.getData(), Od.id_custom_set_value);
    _0x2943ff.raw.setUint8(this.baseOffset, Id.setCustomLamplight);
    _0x2943ff.row = _0x262040;
    _0x2943ff.col = _0x10ee92;
    _0x2943ff.num = _0x138fd9;
    _0x2943ff.colors = _0x476114;
    return _0x2943ff;
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
  set ["index"](_0x19ac73) {
    this.raw.setUint8(this.baseOffset + 2, _0x19ac73);
  }
  get ['tap']() {
    const _0xfdc7d0 = this.raw.buffer.slice(this.baseOffset + 3, this.baseOffset + 3 + 2);
    return KeyAction3.fromDataView(new DataView(_0xfdc7d0), 0);
  }
  set ["tap"](_0x538934) {
    this.raw.setUint8(this.baseOffset + 3, _0x538934.keyClass);
    this.raw.setUint8(this.baseOffset + 4, _0x538934.keyId);
  }
  get ["hold"]() {
    const _0x24ee0d = this.raw.buffer.slice(this.baseOffset + 5, this.baseOffset + 5 + 2);
    return KeyAction3.fromDataView(new DataView(_0x24ee0d), 0);
  }
  set ["hold"](_0x1904df) {
    this.raw.setUint8(this.baseOffset + 5, _0x1904df.keyClass);
    this.raw.setUint8(this.baseOffset + 6, _0x1904df.keyId);
  }
  get ["timer"]() {
    return this.raw.getUint16(this.baseOffset + 7);
  }
  set ["timer"](_0x33e69b) {
    this.raw.setUint16(this.baseOffset + 7, _0x33e69b);
  }
  static ["get"](_0xfeb8c7) {
    const _0x4034fe = new TapDance2(this.getData(), Od.id_vial_prefix);
    _0x4034fe.raw.setUint8(this.baseOffset, Id.entryOp);
    _0x4034fe.raw.setUint8(this.baseOffset + 1, Id.tapDanceGet);
    _0x4034fe.index = _0xfeb8c7;
    return _0x4034fe;
  }
  static ['create'](_0xb4a575, _0x209985) {
    const _0x562c4a = new TapDance2(this.getData(), Od.id_vial_prefix);
    _0x562c4a.raw.setUint8(this.baseOffset, Id.entryOp);
    _0x562c4a.raw.setUint8(this.baseOffset + 1, Id.tapDanceSet);
    _0x562c4a.index = _0xb4a575;
    (null == _0x209985 ? void 0 : _0x209985.tap) && (_0x562c4a.tap = _0x209985.tap);
    (null == _0x209985 ? void 0 : _0x209985.hold) && (_0x562c4a.hold = _0x209985.hold);
    (null == _0x209985 ? void 0 : _0x209985.timer) && (_0x562c4a.timer = _0x209985.timer);
    return _0x562c4a;
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
    const [_0x5bfd8b, _0x5d6b40, _0x243703] = _DataReporting.dataReporting,
      _0x4a2471 = new _DataReporting(_DataReporting.getData(), _0x5bfd8b);
    _0x4a2471.raw.setUint8(this.baseOffset, _0x5d6b40);
    _0x4a2471.raw.setUint8(this.baseOffset + 1, _0x243703);
    return _0x4a2471;
  }
  static ["fromDataView"](_0x49b1b9) {
    return new _DataReporting(_0x49b1b9, rt.first(_DataReporting.dataReporting));
  }
};
V(Dg, 'baseOffset', 1);
V(Dg, "dataReporting", [Od.id_get_keyboard_value, Id.customId, Id.dataReporting]);
let Og = Dg;
class Calibration3 extends Dd {
  get ["size"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ["size"](_0x48bd1f) {
    this.raw.setUint8(this.baseOffset + 6, _0x48bd1f);
  }
  get ['offset']() {
    return this.raw.getUint16(this.baseOffset + 4);
  }
  set ['offset'](_0x565f9b) {
    this.raw.setUint16(this.baseOffset + 4, _0x565f9b);
  }
  get ["completeStatusList"]() {
    const _0x25cd1e = [];
    for (let _0x41f4e9 = 0; _0x41f4e9 < this.size; _0x41f4e9++) _0x25cd1e.push(this.raw.getUint8(this.baseOffset + 7 + _0x41f4e9));
    return _0x25cd1e;
  }
  get ['initStatusList']() {
    const _0xb50cb9 = [];
    for (let _0x1759e0 = 0; _0x1759e0 < this.size; _0x1759e0++) _0xb50cb9.push(this.raw.getUint8(this.baseOffset + 7 + _0x1759e0));
    return _0xb50cb9;
  }
  get ["adcTripCompStatusList"]() {
    const _0x52c581 = [];
    for (let _0x11a273 = 0; _0x11a273 < this.size; _0x11a273++) _0x52c581.push([this.raw.getUint16(this.baseOffset + 7 + 4 * _0x11a273), 0.02 * this.raw.getUint8(this.baseOffset + 7 + 4 * _0x11a273 + 2), this.raw.getUint8(this.baseOffset + 7 + 4 * _0x11a273 + 3)]);
    return _0x52c581;
  }
  get ["adcTripCompStatusListV2"]() {
    const _0xe5e0ab = [];
    for (let _0x5940bf = 0; _0x5940bf < this.size; _0x5940bf++) _0xe5e0ab.push([this.raw.getUint16(this.baseOffset + 7 + 5 * _0x5940bf), 0.01 * this.raw.getUint16(this.baseOffset + 7 + 5 * _0x5940bf + 2), this.raw.getUint8(this.baseOffset + 7 + 5 * _0x5940bf + 4)]);
    return _0xe5e0ab;
  }
  get ["adcTripCompStatusListV3"]() {
    const _0x3ce9c6 = [];
    for (let _0x5493ce = 0; _0x5493ce < this.size; _0x5493ce++) _0x3ce9c6.push([this.raw.getUint16(this.baseOffset + 7 + 5 * _0x5493ce), 0.001 * this.raw.getUint16(this.baseOffset + 7 + 5 * _0x5493ce + 2), this.raw.getUint8(this.baseOffset + 7 + 5 * _0x5493ce + 4)]);
    return _0x3ce9c6;
  }
  static ["start"]() {
    const _0x5c4725 = new Calibration3(this.getData(), Od.id_set_keyboard_value);
    _0x5c4725.raw.setUint8(this.baseOffset, Id.customId);
    _0x5c4725.raw.setUint8(this.baseOffset + 1, Id.calibrationStart);
    return _0x5c4725;
  }
  static ["finish"]() {
    const _0x263467 = new Calibration3(this.getData(), Od.id_set_keyboard_value);
    _0x263467.raw.setUint8(this.baseOffset, Id.customId);
    _0x263467.raw.setUint8(this.baseOffset + 1, Id.calibrationFinish);
    return _0x263467;
  }
  static ["getCompleteStatusBuffer"](_0x15f9d6, _0x19e399) {
    const _0x988060 = new Calibration3(this.getData(), Od.id_get_keyboard_value);
    _0x988060.raw.setUint8(this.baseOffset, Id.customId);
    _0x988060.raw.setUint8(this.baseOffset + 1, Id.completeStatusBuffer);
    _0x988060.offset = _0x15f9d6;
    _0x988060.size = _0x19e399;
    return _0x988060;
  }
  static ["getAdcTripCompStatusBuffer"](_0x394c78, _0x1e7c2b) {
    const _0x23650a = new Calibration3(this.getData(), Od.id_get_keyboard_value);
    _0x23650a.raw.setUint8(this.baseOffset, Id.customId);
    _0x23650a.raw.setUint8(this.baseOffset + 1, Id.adcTripCompStatusBuffer);
    _0x23650a.offset = _0x394c78;
    _0x23650a.size = _0x1e7c2b;
    return _0x23650a;
  }
  static ["getInitStatusBuffer"](_0x22bd27, _0x1f3f8e) {
    const _0x5930af = new Calibration3(this.getData(), Od.id_get_keyboard_value);
    _0x5930af.raw.setUint8(this.baseOffset, Id.customId);
    _0x5930af.raw.setUint8(this.baseOffset + 1, Id.calibration);
    _0x5930af.offset = _0x22bd27;
    _0x5930af.size = _0x1f3f8e;
    return _0x5930af;
  }
}
class RappySnappy2 extends Dd {
  get ['subField']() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ["subField"](_0x704053) {
    this.raw.setUint8(this.baseOffset + 4, _0x704053);
  }
  get ["index"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ['index'](_0x37a363) {
    this.raw.setUint8(this.baseOffset + 5, _0x37a363);
  }
  get ["mode"]() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['mode'](_0x5636ea) {
    this.raw.setUint8(this.baseOffset + 6, _0x5636ea);
  }
  get ['id']() {
    return this.raw.getUint8(this.baseOffset + 7);
  }
  set ['id'](_0x1bb8f1) {
    _0x1bb8f1 >= 26 && (_0x1bb8f1 -= 26);
    this.raw.setUint8(this.baseOffset + 7, _0x1bb8f1);
  }
  get ["rsApcLv"]() {
    return Number((0.01 * this.raw.getUint16(this.baseOffset + 8)).toFixed(3));
  }
  set ['rsApcLv'](_0x2a42c6) {
    this.raw.setUint16(this.baseOffset + 8, 100 * _0x2a42c6);
  }
  get ["gapcSw"]() {
    return this.raw.getUint8(this.baseOffset + 10);
  }
  set ["gapcSw"](_0x14622e) {
    this.raw.setUint8(this.baseOffset + 10, _0x14622e);
  }
  get ["rtSw"]() {
    return this.raw.getUint8(this.baseOffset + 11);
  }
  set ['rtSw'](_0x2ce039) {
    this.raw.setUint8(this.baseOffset + 11, _0x2ce039);
  }
  get ["key1Row"]() {
    return this.raw.getUint8(this.baseOffset + 12);
  }
  set ["key1Row"](_0x466089) {
    this.raw.setUint8(this.baseOffset + 12, _0x466089);
  }
  get ["key1Col"]() {
    return this.raw.getUint8(this.baseOffset + 13);
  }
  set ['key1Col'](_0x2a8559) {
    this.raw.setUint8(this.baseOffset + 13, _0x2a8559);
  }
  get ["key2Row"]() {
    return this.raw.getUint8(this.baseOffset + 14);
  }
  set ["key2Row"](_0x32f886) {
    this.raw.setUint8(this.baseOffset + 14, _0x32f886);
  }
  get ["key2Col"]() {
    return this.raw.getUint8(this.baseOffset + 15);
  }
  set ['key2Col'](_0xf8cd49) {
    this.raw.setUint8(this.baseOffset + 15, _0xf8cd49);
  }
  get ["layer"]() {
    return this.raw.getUint8(this.baseOffset + 16);
  }
  set ["layer"](_0x525227) {
    this.raw.setUint8(this.baseOffset + 16, _0x525227);
  }
  static ['get'](_0x1e4233) {
    const _0x4cd8ea = new RappySnappy2(this.getData(), Od.id_get_keyboard_value);
    _0x4cd8ea.raw.setUint8(this.baseOffset, Id.customId);
    _0x4cd8ea.raw.setUint8(this.baseOffset + 1, Id.rs);
    _0x4cd8ea.subField = Rd.get;
    _0x4cd8ea.index = _0x1e4233;
    _0x4cd8ea.id = _0x1e4233;
    return _0x4cd8ea;
  }
  static ['create'](_0x441fc1, _0x3dca67, _0x117d06) {
    const _0x258120 = new RappySnappy2(this.getData(), Od.id_set_keyboard_value);
    _0x258120.raw.setUint8(this.baseOffset, Id.customId);
    _0x258120.raw.setUint8(this.baseOffset + 1, Id.rs);
    _0x258120.raw.setUint8(this.baseOffset + 2, 0);
    _0x258120.raw.setUint8(this.baseOffset + 3, 0);
    _0x258120.subField = Rd.set;
    _0x258120.index = _0x441fc1;
    _0x258120.id = _0x3dca67;
    (null == _0x117d06 ? void 0 : _0x117d06.mode) && (_0x258120.mode = _0x117d06.mode);
    (null == _0x117d06 ? void 0 : _0x117d06.rsApcLv) && (_0x258120.rsApcLv = _0x117d06.rsApcLv);
    (null == _0x117d06 ? void 0 : _0x117d06.gapcSw) && (_0x258120.gapcSw = _0x117d06.gapcSw);
    (null == _0x117d06 ? void 0 : _0x117d06.rtSw) && (_0x258120.rtSw = _0x117d06.rtSw);
    (null == _0x117d06 ? void 0 : _0x117d06.key1Row) && (_0x258120.key1Row = _0x117d06.key1Row);
    (null == _0x117d06 ? void 0 : _0x117d06.key1Col) && (_0x258120.key1Col = _0x117d06.key1Col);
    (null == _0x117d06 ? void 0 : _0x117d06.key2Row) && (_0x258120.key2Row = _0x117d06.key2Row);
    (null == _0x117d06 ? void 0 : _0x117d06.key2Col) && (_0x258120.key2Col = _0x117d06.key2Col);
    (null == _0x117d06 ? void 0 : _0x117d06.layer) && (_0x258120.layer = _0x117d06.layer);
    return _0x258120;
  }
}
class RappySnappyV3 extends Dd {
  get ["subField"]() {
    return this.raw.getUint8(this.baseOffset + 4);
  }
  set ['subField'](_0x2dacf1) {
    this.raw.setUint8(this.baseOffset + 4, _0x2dacf1);
  }
  get ["index"]() {
    return this.raw.getUint8(this.baseOffset + 5);
  }
  set ["index"](_0x2bf923) {
    this.raw.setUint8(this.baseOffset + 5, _0x2bf923);
  }
  get ['mode']() {
    return this.raw.getUint8(this.baseOffset + 6);
  }
  set ['mode'](_0x806d3) {
    this.raw.setUint8(this.baseOffset + 6, _0x806d3);
  }
  get ['id']() {
    return this.raw.getUint8(this.baseOffset + 7);
  }
  set ['id'](_0x526d87) {
    _0x526d87 >= 26 && (_0x526d87 -= 26);
    this.raw.setUint8(this.baseOffset + 7, _0x526d87);
  }
  get ['rsApcLv']() {
    return Number((0.001 * this.raw.getUint16(this.baseOffset + 8)).toFixed(3));
  }
  set ["rsApcLv"](_0x36c685) {
    this.raw.setUint16(this.baseOffset + 8, 1000 * _0x36c685);
  }
  get ["gapcSw"]() {
    return this.raw.getUint8(this.baseOffset + 10);
  }
  set ["gapcSw"](_0x1bdeb9) {
    this.raw.setUint8(this.baseOffset + 10, _0x1bdeb9);
  }
  get ["rtSw"]() {
    return this.raw.getUint8(this.baseOffset + 11);
  }
  set ["rtSw"](_0x6e531f) {
    this.raw.setUint8(this.baseOffset + 11, _0x6e531f);
  }
  get ["key1Row"]() {
    return this.raw.getUint8(this.baseOffset + 12);
  }
  set ['key1Row'](_0xeece64) {
    this.raw.setUint8(this.baseOffset + 12, _0xeece64);
  }
  get ["key1Col"]() {
    return this.raw.getUint8(this.baseOffset + 13);
  }
  set ["key1Col"](_0x48d7fd) {
    this.raw.setUint8(this.baseOffset + 13, _0x48d7fd);
  }
  get ["key2Row"]() {
    return this.raw.getUint8(this.baseOffset + 14);
  }
  set ["key2Row"](_0xa66fda) {
    this.raw.setUint8(this.baseOffset + 14, _0xa66fda);
  }
  get ["key2Col"]() {
    return this.raw.getUint8(this.baseOffset + 15);
  }
  set ["key2Col"](_0x4c0bad) {
    this.raw.setUint8(this.baseOffset + 15, _0x4c0bad);
  }
  get ['layer']() {
    return this.raw.getUint8(this.baseOffset + 16);
  }
  set ["layer"](_0x66751e) {
    this.raw.setUint8(this.baseOffset + 16, _0x66751e);
  }
  static ['get'](_0x2a5fdb) {
    const _0x4157f3 = new RappySnappyV3(this.getData(), Od.id_get_keyboard_value);
    _0x4157f3.raw.setUint8(this.baseOffset, Id.customId);
    _0x4157f3.raw.setUint8(this.baseOffset + 1, Id.rs);
    _0x4157f3.subField = Rd.get;
    _0x4157f3.index = _0x2a5fdb;
    _0x4157f3.id = _0x2a5fdb;
    return _0x4157f3;
  }
  static ['create'](_0x209962, _0x14a631, _0x2cba97) {
    const _0x345276 = new RappySnappyV3(this.getData(), Od.id_set_keyboard_value);
    _0x345276.raw.setUint8(this.baseOffset, Id.customId);
    _0x345276.raw.setUint8(this.baseOffset + 1, Id.rs);
    _0x345276.raw.setUint8(this.baseOffset + 2, 0);
    _0x345276.raw.setUint8(this.baseOffset + 3, 0);
    _0x345276.subField = Rd.set;
    _0x345276.index = _0x209962;
    _0x345276.id = _0x14a631;
    (null == _0x2cba97 ? void 0 : _0x2cba97.mode) && (_0x345276.mode = _0x2cba97.mode);
    (null == _0x2cba97 ? void 0 : _0x2cba97.rsApcLv) && (_0x345276.rsApcLv = _0x2cba97.rsApcLv);
    (null == _0x2cba97 ? void 0 : _0x2cba97.gapcSw) && (_0x345276.gapcSw = _0x2cba97.gapcSw);
    (null == _0x2cba97 ? void 0 : _0x2cba97.rtSw) && (_0x345276.rtSw = _0x2cba97.rtSw);
    (null == _0x2cba97 ? void 0 : _0x2cba97.key1Row) && (_0x345276.key1Row = _0x2cba97.key1Row);
    (null == _0x2cba97 ? void 0 : _0x2cba97.key1Col) && (_0x345276.key1Col = _0x2cba97.key1Col);
    (null == _0x2cba97 ? void 0 : _0x2cba97.key2Row) && (_0x345276.key2Row = _0x2cba97.key2Row);
    (null == _0x2cba97 ? void 0 : _0x2cba97.key2Col) && (_0x345276.key2Col = _0x2cba97.key2Col);
    (null == _0x2cba97 ? void 0 : _0x2cba97.layer) && (_0x345276.layer = _0x2cba97.layer);
    return _0x345276;
  }
}
class HidDevice6 extends WebHidGeneral {
  constructor() {
    super(...arguments);
    V(this, "mutex", new Mutex());
    V(this, "pendingTransfers", []);
  }
  ["onDeviceToHostReportReceived"](_0x2b50ed) {}
  async ["transferForResultAsync"](_0x3162dd) {
    var _0x301f82;
    const _0x3ea9af = new DataView(_0x3162dd.buffer).getUint8(0);
    let _0x56756d;
    const _0x593b81 = new Promise(_0x5815f3 => {
        _0x56756d = _0x5815f3;
      }),
      _0x243010 = {
        requestCode: _0x3ea9af,
        data: _0x3162dd,
        promiseResolve: _0x56756d
      };
    this.pendingTransfers.push(_0x243010);
    await (null == (_0x301f82 = this.device) ? void 0 : _0x301f82.sendReport(0, _0x3162dd));
    return _0x593b81;
  }
  async ["transferAsync"](_0x48e782) {
    var _0x2f650c;
    await (null == (_0x2f650c = this.device) ? void 0 : _0x2f650c.sendReport(0, _0x48e782));
  }
  ["inputReportListener"](_0x89d112) {
    super.inputReportListener(_0x89d112);
    this.handleInputReport(_0x89d112.data);
  }
  ['handleInputReport'](_0x5189df) {
    this.mutex.runExclusive(() => {
      const _0x593e96 = _0x5189df.getUint8(0);
      if (0 == _0x593e96) return void this.onDeviceToHostReportReceived(_0x5189df);
      let _0x46a585 = false;
      Array.from(new Uint8Array(_0x5189df.buffer.slice(0, 3))).join('') === Og.dataReporting.join('') && (Pr("data-reporting", Og.fromDataView(_0x5189df)), _0x46a585 = true);
      if (!_0x46a585) {
        for (const _0x27e4ca of this.pendingTransfers) if (_0x27e4ca.requestCode === _0x593e96) {
          _0x27e4ca.promiseResolve(_0x5189df);
          this.pendingTransfers.splice(this.pendingTransfers.indexOf(_0x27e4ca), 1);
          _0x46a585 = true;
          break;
        }
      }
      _0x46a585 || new Uint8Array(_0x5189df.buffer).toString();
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
      custom: _0x2ab235
    } = this.getCustomData();
    return !_0x2ab235.advancedKeyVersion || Number(this.version) >= Number(_0x2ab235.advancedKeyVersion);
  }
  get ["deviceVersion"]() {
    return this.version;
  }
  async ['getAllKeyAction'](_0x2a9a73, _0x45ee18, _0x46bd07) {
    const _0x5d87e2 = _0x2a9a73 * _0x45ee18 * _0x46bd07 * 2 / 28,
      _0x1ecaa0 = [];
    for (let _0x442d34 = 0; _0x442d34 < _0x5d87e2; _0x442d34++) {
      const _0x4e7323 = await this.transferForResult(BufferKeyAction2.get(28 * _0x442d34, 28));
      _0x1ecaa0.push(..._0x4e7323.keyActionList);
    }
    return _0x1ecaa0;
  }
  async ["setAllKeyAction"](_0x80c84f) {
    const _0x310916 = _0x80c84f.map(_0x52ce97 => _0x52ce97.map(_0x1e8b39 => _0x1e8b39.flat()).flat()).flat(),
      _0x28a723 = _0x310916.length / 14;
    for (let _0x2c0d44 = 0; _0x2c0d44 < _0x28a723; _0x2c0d44++) {
      const _0x522248 = _0x310916.slice(14 * _0x2c0d44, 14 * (_0x2c0d44 + 1));
      await this.transferForResult(BufferKeyAction2.create(28 * _0x2c0d44, 28, _0x522248));
    }
  }
  async ['getOneKeyAction'](_0x1c57d7, _0x209261, _0x3459ed) {
    return this.transferForResult(OneKeyAction2.get(_0x1c57d7, _0x209261, _0x3459ed));
  }
  async ["setOneKeyAction"](_0x123f32, _0x551ec0, _0x46113a, _0x5d193f) {
    return this.transferForResult(OneKeyAction2.create(_0x123f32, _0x551ec0, _0x46113a, _0x5d193f));
  }
  async ["getMacroCount"]() {
    return this.transferForResult(MacroCount2.get());
  }
  async ["getMacroBufferSize"]() {
    return this.transferForResult(MacroBufferSize2.get());
  }
  async ["getMacroBuffer"]() {
    const {
        count: _0x36b68a
      } = await this.getMacroCount(),
      {
        size: _0x5de127
      } = await this.getMacroBufferSize(),
      _0x27bd9d = [],
      _0x6f57dd = Math.ceil(_0x5de127 / 28);
    for (let _0xb1d0de = 0; _0xb1d0de < _0x6f57dd; _0xb1d0de++) {
      const _0x41a05e = 28 * _0xb1d0de,
        _0xeea548 = await this.transferForResult(MacroBuffer2.get(_0x41a05e, 28));
      _0x27bd9d.push(...Array.from(new Uint8Array(_0xeea548.buffer.buffer)));
      if (_0x27bd9d.filter(_0x626dc7 => 0 === _0x626dc7).length > _0x36b68a) break;
    }
    const _0x18f8f2 = [];
    let _0x5e3b6f = [];
    for (const _0x506b4b of _0x27bd9d) {
      if (0 != _0x506b4b) _0x5e3b6f.push(_0x506b4b);else {
        _0x18f8f2.push(_0x5e3b6f);
        _0x5e3b6f = [];
      }
      if (_0x18f8f2.length >= _0x36b68a) break;
    }
    const _0x418339 = [];
    for (let _0x25124 = 0; _0x25124 < _0x18f8f2.length; _0x25124++) {
      const _0x57e2ae = _0x18f8f2[_0x25124];
      if (0 === _0x57e2ae.length) {
        _0x418339.push([]);
        continue;
      }
      let _0x2d5336 = 0;
      const _0x7c8ddb = [];
      for (; _0x2d5336 < _0x57e2ae.length;) {
        const _0x11f074 = new DataView(new Uint8Array(_0x57e2ae).buffer),
          _0x5825b6 = MacroAction.fromDataView(_0x11f074, _0x2d5336);
        _0x2d5336 += _0x5825b6.count;
        _0x7c8ddb.push(_0x5825b6);
      }
      _0x418339.push(_0x7c8ddb);
    }
    return _0x418339;
  }
  async ["setMacroBuffer"](_0x4d6e98, _0x5b6763) {
    const _0x3e2c98 = await this.getMacroBuffer();
    _0x3e2c98[_0x4d6e98] = _0x5b6763;
    const _0x2ee8ab = [];
    for (let _0x5581f3 = 0; _0x5581f3 < _0x3e2c98.length; _0x5581f3++) {
      const _0x1b559a = _0x3e2c98[_0x5581f3].map(_0x81e4f5 => Array.from(new Uint8Array(_0x81e4f5.dataView.buffer))).flat();
      _0x2ee8ab.push(_0x1b559a);
    }
    const _0x4a024e = _0x2ee8ab.map(_0x1ddb8f => _0x1ddb8f.length ? [..._0x1ddb8f, 0] : 0).flat(),
      _0x242ffd = rt.chunk(_0x4a024e, 28);
    for (let _0x2e28c3 = 0; _0x2e28c3 < _0x242ffd.length; _0x2e28c3++) {
      const _0x260ce6 = 28 * _0x2e28c3,
        _0x149123 = new DataView(new Uint8Array(_0x242ffd[_0x2e28c3]).buffer);
      await this.transferForResult(MacroBuffer2.create(_0x260ce6, _0x149123, _0x149123.byteLength));
    }
  }
  async ["getOneTogTh"](_0x2c9a1f, _0x3ac247) {
    if (this.isV2) return this.transferForResult(OneTogThV22.get(_0x2c9a1f, _0x3ac247));
    return this.transferForResult(OneTogTh2.get(_0x2c9a1f, _0x3ac247));
  }
  async ['setOneTogTh'](_0x3c3b81, _0x672ab4, _0x15808e) {
    if (this.isV2) return this.transferForResult(OneTogThV22.create(_0x3c3b81, _0x672ab4, _0x15808e));
    return this.transferForResult(OneTogTh2.create(_0x3c3b81, _0x672ab4, _0x15808e));
  }
  async ['getTogThAll'](_0x3d4386, _0xb556d5) {
    if (this.isV3) return this.getTogThAllV3(_0x3d4386, _0xb556d5);
    if (this.isV2) return this.getTogThAllV2(_0x3d4386, _0xb556d5);
    const _0x2f0e80 = Math.ceil(_0x3d4386 * _0xb556d5 / 24),
      _0xb7c249 = [];
    for (let _0x2664e3 = 0; _0x2664e3 < _0x2f0e80; _0x2664e3++) {
      const _0x4fe09d = await this.transferForResult(BufferTogTh2.get(24 * _0x2664e3, 24));
      _0xb7c249.push(...new Uint8Array(_0x4fe09d.togThs.buffer));
    }
    return rt.chunk(_0xb7c249, _0xb556d5).map((_0x2e5b16, _0x432b75) => _0x2e5b16.map((_0x1c9ff5, _0x3d729b) => OneTogTh2.create(_0x432b75, _0x3d729b, 0.02 * _0x1c9ff5)));
  }
  async ["setTogThAll"](_0xdbc857) {
    if (this.isV3) return this.setTogThAllV3(_0xdbc857);
    if (this.isV2) return this.setTogThAllV2(_0xdbc857);
    const _0x12d22b = _0xdbc857.map(_0x54461e => _0x54461e.map(_0xfa258f => _0xfa258f.apc / 0.02)).flat(),
      _0xd155c = rt.chunk(_0x12d22b, 23);
    for (let _0x28cfb3 = 0; _0x28cfb3 < _0xd155c.length; _0x28cfb3++) {
      const _0x163658 = _0xd155c[_0x28cfb3];
      let _0x500fba = Ad.normal;
      0 === _0x28cfb3 && (_0x500fba = Ad.erase);
      _0x28cfb3 === _0xd155c.length - 1 && (_0x500fba = Ad.write);
      await this.transferForResult(BufferTogTh2.create(23 * _0x28cfb3, 23, _0x500fba, new DataView(new Uint8Array(_0x163658).buffer)));
      0 !== _0x28cfb3 && _0x28cfb3 !== _0xd155c.length - 1 || (await Ng(200));
    }
  }
  async ['setTogThAllV2'](_0x5e7db1) {
    const _0x1bf1f4 = _0x5e7db1.map(_0x57219f => _0x57219f.map(_0x3d026d => _0x3d026d.apcArr).flat()).flat(),
      _0x1c97b7 = rt.chunk(_0x1bf1f4, 22);
    for (let _0x574914 = 0; _0x574914 < _0x1c97b7.length; _0x574914++) {
      const _0x52e643 = _0x1c97b7[_0x574914];
      let _0x2bed24 = Ad.normal;
      0 === _0x574914 && (_0x2bed24 = Ad.erase);
      _0x574914 === _0x1c97b7.length - 1 && (_0x2bed24 = Ad.write);
      const _0x361040 = BufferTogTh2.create(11 * _0x574914, 11, _0x2bed24, new DataView(new Uint8Array(_0x52e643).buffer));
      await this.transferForResult(_0x361040);
      0 !== _0x574914 && _0x574914 !== _0x1c97b7.length - 1 || (await Ng(200));
    }
  }
  async ["setTogThAllV3"](_0x10adad) {
    const _0xd4c1f = _0x10adad.map(_0x225742 => _0x225742.map(_0x48f1f3 => _0x48f1f3.apcArr).flat()).flat(),
      _0x29a821 = rt.chunk(_0xd4c1f, 22);
    for (let _0x1ff87a = 0; _0x1ff87a < _0x29a821.length; _0x1ff87a++) {
      const _0x53e706 = _0x29a821[_0x1ff87a];
      let _0x819a3 = Ad.normal;
      0 === _0x1ff87a && (_0x819a3 = Ad.erase);
      _0x1ff87a === _0x29a821.length - 1 && (_0x819a3 = Ad.write);
      const _0x10e951 = BufferTogTh2.create(11 * _0x1ff87a, 11, _0x819a3, new DataView(new Uint8Array(_0x53e706).buffer));
      await this.transferForResult(_0x10e951);
      0 !== _0x1ff87a && _0x1ff87a !== _0x29a821.length - 1 || (await Ng(200));
    }
  }
  async ["getOneRTKeyInfo"](_0x15f290, _0x258681) {
    if (this.isV2) return this.transferForResult(OneRTKeyInfoV22.get(_0x15f290, _0x258681));
    return this.transferForResult(OneRTKeyInfo2.get(_0x15f290, _0x258681));
  }
  async ["getRTKeyInfoAll"](_0x43ad49, _0x34fb4d) {
    if (this.isV3) return this.getRTKeyInfoAllV3(_0x43ad49, _0x34fb4d);
    if (this.isV2) return this.getRTKeyInfoAllV2(_0x43ad49, _0x34fb4d);
    const _0x1d8b1f = Math.ceil(_0x43ad49 * _0x34fb4d / 8),
      _0x3492b5 = [];
    for (let _0x4cffb5 = 0; _0x4cffb5 < _0x1d8b1f; _0x4cffb5++) {
      const _0x2fd797 = await this.transferForResult(BufferRTKeyInfo2.get(8 * _0x4cffb5, 8));
      _0x3492b5.push(...new Uint8Array(_0x2fd797.rt.buffer));
    }
    return rt.chunk(rt.chunk(_0x3492b5, 3), _0x34fb4d).map((_0x48bc39, _0x85b1bb) => _0x48bc39.map((_0x22afee, _0x239293) => {
      const _0x360990 = OneRTKeyInfo2.get(_0x85b1bb, _0x239293),
        [_0x24fc00, _0x52669a, _0x84faa4] = _0x22afee;
      _0x360990.on = _0x24fc00;
      _0x360990.release = 0.02 * _0x52669a;
      _0x360990.press = 0.02 * _0x84faa4;
      return _0x360990;
    }));
  }
  async ["setRTKeyInfoAll"](_0x438ca) {
    if (this.isV3) return this.setRTKeyInfoAllV3(_0x438ca);
    if (this.isV2) return this.setRTKeyInfoAllV2(_0x438ca);
    const _0x4db7fb = _0x438ca.map(_0x4f0b43 => _0x4f0b43.map(_0x4c9436 => [_0x4c9436.on, _0x4c9436.release / 0.02, _0x4c9436.press / 0.02]).flat()).flat(),
      _0x256fb0 = rt.chunk(_0x4db7fb, 18);
    for (let _0x5cecf6 = 0; _0x5cecf6 < _0x256fb0.length; _0x5cecf6++) {
      const _0x4f2b75 = _0x256fb0[_0x5cecf6];
      let _0x542170 = Ad.normal;
      0 === _0x5cecf6 && (_0x542170 = Ad.erase);
      _0x5cecf6 === _0x256fb0.length - 1 && (_0x542170 = Ad.write);
      await this.transferForResult(BufferRTKeyInfo2.create(6 * _0x5cecf6, 6, _0x542170, new DataView(new Uint8Array(_0x4f2b75).buffer)));
      0 !== _0x5cecf6 && _0x5cecf6 !== _0x256fb0.length - 1 || (await Ng(200));
    }
  }
  async ["setOneRTKeyInfo"](_0x4335cf) {
    if (_0x4335cf instanceof OneRTKeyInfoV22) return this.transferForResult(OneRTKeyInfoV22.create(_0x4335cf));
    return this.transferForResult(OneRTKeyInfo2.create(_0x4335cf));
  }
  async ["getDeadBand"]() {
    if (this.isV3) return this.getDeadBandV3();
    if (this.isV2) return this.getDeadBandV2();
    return this.transferForResult(DeadBand2.get());
  }
  async ["setDeadBand"](_0x2a150a, _0x40fc1e) {
    if (this.isV3) return this.setDeadBandV3(_0x2a150a, _0x40fc1e);
    if (this.isV2) return this.setDeadBandV2(_0x2a150a, _0x40fc1e);
    return this.transferForResult(DeadBand2.create(_0x2a150a, _0x40fc1e));
  }
  async ['getLightInfo']() {
    return this.transferForResult(LightInfo2.get());
  }
  async ["setLightInfo"](_0x2028f9) {
    return this.transferForResult(LightInfo2.create(_0x2028f9));
  }
  async ["getOneMixAxle"](_0x2cf1bb, _0x84485f) {
    return this.transferForResult(OneMixAxle2.get(_0x2cf1bb, _0x84485f));
  }
  async ["getMixAxleAll"](_0x6d8d97, _0x31cf0e) {
    const _0x59799a = Math.ceil(_0x6d8d97 * _0x31cf0e / 23),
      _0x44b6cb = [];
    for (let _0x188b90 = 0; _0x188b90 < _0x59799a; _0x188b90++) {
      const _0x5b76d0 = await this.transferForResult(BufferMixAxle2.get(23 * _0x188b90, 23));
      _0x44b6cb.push(...new Uint8Array(_0x5b76d0.keyTypes.buffer));
    }
    return rt.chunk(_0x44b6cb, _0x31cf0e).map((_0x4ff32d, _0x7eb444) => _0x4ff32d.map((_0x5c7f20, _0x3929c6) => OneMixAxle2.create(_0x7eb444, _0x3929c6, _0x5c7f20)));
  }
  async ["setMixAxleAll"](_0x45813f) {
    const _0x4421f5 = _0x45813f.map(_0x2d44b7 => _0x2d44b7.map(_0x9de0d => _0x9de0d.keyType).flat()).flat(),
      _0x57e3a3 = rt.chunk(_0x4421f5, 23);
    for (let _0x3b16c7 = 0; _0x3b16c7 < _0x57e3a3.length; _0x3b16c7++) {
      const _0x4a598a = _0x57e3a3[_0x3b16c7];
      await this.transferForResult(BufferMixAxle2.create(23 * _0x3b16c7, 23, new DataView(new Uint8Array(_0x4a598a).buffer)));
    }
  }
  async ["setOneMixAxle"](_0x3996e6, _0x3ccb56, _0x49952d) {
    return this.transferForResult(OneMixAxle2.create(_0x3996e6, _0x3ccb56, _0x49952d));
  }
  async ["setUnifyMixAxle"](_0x5161ff) {
    return this.transferForResult(OneMixAxle2.createAll(_0x5161ff));
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
    const _0x39c38a = await this.transferForResult(ProtocolVersion2.get());
    this.version = _0x39c38a.version;
    return _0x39c38a;
  }
  async ["getKeyboardFeature"]() {
    return this.transferForResult(KeyboardFeature2.get());
  }
  async ["setKeyboardFeature"](_0x4c1d3e) {
    return this.transferForResult(KeyboardFeature2.create(_0x4c1d3e));
  }
  async ["resetDefault"](_0x3da47c = "keyAction") {
    return this.transferForResult("All" === _0x3da47c ? ResetKeyboardDefault2.getAll() : ResetKeyboardDefault2.getKeyAction());
  }
  async ["getCustomLamplight"](_0x1a74ce, _0x34e7ac) {
    const _0x1adf6f = Math.ceil(_0x34e7ac / 8),
      _0x174f53 = Array.from({
        length: _0x1a74ce
      }, () => []);
    for (let _0x4cb9ff = 0; _0x4cb9ff < _0x1a74ce; _0x4cb9ff++) {
      const _0x4c6638 = [];
      for (let _0x124267 = 0; _0x124267 < _0x1adf6f; _0x124267++) {
        const _0x61d66f = await this.transferForResult(CustomLamplight2.get(_0x4cb9ff, 8 * _0x124267, 8));
        _0x4c6638.push(..._0x61d66f.colors);
      }
      _0x174f53[_0x4cb9ff] = _0x4c6638;
    }
    return _0x174f53;
  }
  async ["setCustomLamplightOne"](_0x1fa0d6, _0x2e9a89, _0x293a86) {
    return this.transferForResult(CustomLamplight2.create(_0x1fa0d6, _0x2e9a89, 1, [_0x293a86]));
  }
  async ['setCustomLamplight'](_0x534bb7) {
    const _0x34c63c = _0x534bb7.length,
      _0x3f9524 = rt.first(_0x534bb7).length,
      _0x3ed87c = Math.ceil(_0x3f9524 / 8);
    for (let _0x5500ef = 0; _0x5500ef < _0x34c63c; _0x5500ef++) for (let _0x57da84 = 0; _0x57da84 < _0x3ed87c; _0x57da84++) await this.transferForResult(CustomLamplight2.create(_0x5500ef, 8 * _0x57da84, 8, _0x534bb7[_0x5500ef].slice(8 * _0x57da84, 8 * (_0x57da84 + 1))));
  }
  async ['saveCustomLamplight']() {
    const _0x4a43b9 = await this.transferForResult(CustomLamplight2.save());
    await Ng(100);
    return _0x4a43b9;
  }
  async ["getTapDance"](_0x34127a) {
    return this.transferForResult(TapDance2.get(_0x34127a));
  }
  async ["setTapDance"](_0x34c03e, _0x1fd0f1) {
    return this.transferForResult(TapDance2.create(_0x34c03e, _0x1fd0f1));
  }
  async ["getLayer"]() {
    return this.transferForResult(Ug.get());
  }
  async ["getDynamicKeyStroke"](_0x4a6023) {
    return this.transferForResult(DynamicKeyStroke2.get(_0x4a6023));
  }
  async ['setDynamicKeyStroke'](_0x19a2ed, _0x26c122) {
    return this.transferForResult(DynamicKeyStroke2.create(_0x19a2ed, _0x26c122));
  }
  async ['getRappySnappy'](_0x5df452) {
    if (this.isV3) return this.getRappySnappyV3(_0x5df452);
    return this.transferForResult(RappySnappy2.get(_0x5df452));
  }
  async ["getRappySnappyV3"](_0xa8b798) {
    return this.transferForResult(RappySnappyV3.get(_0xa8b798));
  }
  async ["setRappySnappy"](_0x59f73f, _0x58f1a7) {
    if (this.isV3) return this.setRappySnappyV3(_0x59f73f, _0x58f1a7);
    return this.transferForResult(RappySnappy2.create(_0x59f73f, _0x59f73f, _0x58f1a7));
  }
  async ["setRappySnappyV3"](_0x599346, _0x4e83b0) {
    return this.transferForResult(RappySnappyV3.create(_0x599346, _0x599346, _0x4e83b0));
  }
  async ['startCalibration']() {
    return this.transferForResult(Calibration3.start());
  }
  async ['finishCalibration']() {
    return this.transferForResult(Calibration3.finish());
  }
  async ['getCalibrationAdcTripCompStatusBuffer'](_0x36eeb5, _0x505bd1) {
    if (this.isV3) return this.getCalibrationAdcTripCompStatusBufferV3(_0x36eeb5, _0x505bd1);
    if (this.isV2) return this.getCalibrationAdcTripCompStatusBufferV2(_0x36eeb5, _0x505bd1);
    const _0x38f647 = Math.ceil(_0x36eeb5 * _0x505bd1 / 6),
      _0x552c5d = [];
    for (let _0x2d6fa0 = 0; _0x2d6fa0 < _0x38f647; _0x2d6fa0++) {
      const _0x50ab56 = await this.transferForResult(Calibration3.getAdcTripCompStatusBuffer(6 * _0x2d6fa0, 6));
      _0x552c5d.push(..._0x50ab56.adcTripCompStatusList);
    }
    return rt.chunk(_0x552c5d, _0x505bd1);
  }
  async ["getCalibrationAdcTripInitStatusBuffer"](_0x57db3e, _0x5119e3) {
    const _0x280b51 = Math.ceil(_0x57db3e * _0x5119e3 / 24),
      _0x1f09a1 = [];
    for (let _0x1ecbf4 = 0; _0x1ecbf4 < _0x280b51; _0x1ecbf4++) {
      const _0x470fd3 = await this.transferForResult(Calibration3.getInitStatusBuffer(24 * _0x1ecbf4, 24));
      _0x1f09a1.push(..._0x470fd3.initStatusList);
    }
    return rt.chunk(_0x1f09a1, _0x5119e3);
  }
  async ["getCalibrationAdcTripCompStatusBufferV2"](_0xfde1c3, _0xc759e8) {
    const _0x4a5a3f = Math.ceil(_0xfde1c3 * _0xc759e8 / 4),
      _0x367fc7 = [];
    for (let _0x477ff9 = 0; _0x477ff9 < _0x4a5a3f; _0x477ff9++) {
      const _0x2de4d5 = await this.transferForResult(Calibration3.getAdcTripCompStatusBuffer(4 * _0x477ff9, 4));
      _0x367fc7.push(..._0x2de4d5.adcTripCompStatusListV2);
    }
    return rt.chunk(_0x367fc7, _0xc759e8);
  }
  async ["getCalibrationAdcTripCompStatusBufferV3"](_0x12011b, _0x390b2d) {
    const _0x55c7eb = Math.ceil(_0x12011b * _0x390b2d / 4),
      _0x326947 = [];
    for (let _0x5d2f24 = 0; _0x5d2f24 < _0x55c7eb; _0x5d2f24++) {
      const _0x354abf = await this.transferForResult(Calibration3.getAdcTripCompStatusBuffer(4 * _0x5d2f24, 4));
      _0x326947.push(..._0x354abf.adcTripCompStatusListV3);
    }
    return rt.chunk(_0x326947, _0x390b2d);
  }
  async ["getBottomOptimizeSwitch"]() {
    return this.transferForResult(BottomOptimizeSwitch2.get());
  }
  async ['setBottomOptimizeSwitch'](_0x21f27f) {
    return this.transferForResult(BottomOptimizeSwitch2.create(_0x21f27f));
  }
  async ['getGameModeSwitch']() {
    if (this.isV2) return this.transferForResult(GameModeSwitch2.get());
    return GameModeSwitch2.create(0);
  }
  async ['getTravelInfo']() {
    return this.transferForResult(TravelInfo.get());
  }
  async ["setGameModeSwitch"](_0x43b9c6) {
    return this.transferForResult(GameModeSwitch2.create(_0x43b9c6));
  }
  async ["getPhysicalKeysSwitch"]() {
    return this.transferForResult(PhysicalKeysSwitch.get());
  }
  async ["setPhysicalKeysSwitch"](_0x54fe51) {
    return this.transferForResult(PhysicalKeysSwitch.create(_0x54fe51));
  }
  async ["getAiMatchSwitchSwitch"]() {
    return this.transferForResult(AiMatchSwitch.get());
  }
  async ["setAiMatchSwitchSwitch"](_0x440b0a) {
    return this.transferForResult(AiMatchSwitch.create(_0x440b0a));
  }
  async ["getLightSleepTime"]() {
    return this.transferForResult(LightSleepTime.get());
  }
  async ["setLightSleepTime"](_0x4ad46a) {
    return this.transferForResult(LightSleepTime.create(_0x4ad46a));
  }
  async ["getExtraLightInfo"]() {
    return this.transferForResult(ExtraLightInfo.get());
  }
  async ['setExtraLightInfo'](_0xd90530) {
    return this.transferForResult(ExtraLightInfo.create(_0xd90530));
  }
  async ["getProfileInfo"]() {
    return this.transferForResult(ProfileInfo.get());
  }
  async ["setProfileInfo"](_0x1018fe) {
    return this.transferForResult(ProfileInfo.create(_0x1018fe));
  }
  async ["getMixedAxisInfo"]() {
    return this.transferForResult(MixedAxisInfo.get());
  }
  async ["transferForResult"](_0x5d3200) {
    _0x5d3200.raw = await this.transferForResultAsync(_0x5d3200.toUint8Array());
    return _0x5d3200;
  }
  async ["getTogThAllV2"](_0x1d4ac7, _0xcb213e) {
    const _0x55dc02 = Math.ceil(_0x1d4ac7 * _0xcb213e / 12),
      _0x3dc5bf = [];
    for (let _0x271111 = 0; _0x271111 < _0x55dc02; _0x271111++) {
      const _0x332db5 = BufferTogTh2.get(12 * _0x271111, 12),
        _0x63bc9b = await this.transferForResult(_0x332db5);
      _0x3dc5bf.push(...new Uint8Array(_0x63bc9b.togThsV2.buffer));
    }
    return rt.chunk(rt.chunk(_0x3dc5bf, 2), _0xcb213e).map((_0x44e2af, _0x387b23) => _0x44e2af.map((_0xc9ee7, _0x135683) => OneTogThV22.create(_0x387b23, _0x135683, new DataView(new Uint8Array(_0xc9ee7).buffer).getUint16(0) * _BitKeyboard.AccuracyV2)));
  }
  async ["getTogThAllV3"](_0x3e7c64, _0x1af27c) {
    const _0x871e54 = Math.ceil(_0x3e7c64 * _0x1af27c / 12),
      _0x2b6046 = [];
    for (let _0x431501 = 0; _0x431501 < _0x871e54; _0x431501++) {
      const _0x3317fb = BufferTogTh2.get(12 * _0x431501, 12),
        _0x58e174 = await this.transferForResult(_0x3317fb);
      _0x2b6046.push(...new Uint8Array(_0x58e174.togThsV2.buffer));
    }
    return rt.chunk(rt.chunk(_0x2b6046, 2), _0x1af27c).map((_0x15f7ce, _0x3931c7) => _0x15f7ce.map((_0x4c4e90, _0x44af80) => OneTogThV3.create(_0x3931c7, _0x44af80, new DataView(new Uint8Array(_0x4c4e90).buffer).getUint16(0) * _BitKeyboard.AccuracyV3)));
  }
  async ["getRTKeyInfoAllV2"](_0x2ca4e3, _0x5b4949) {
    const _0x57c64e = Math.ceil(_0x2ca4e3 * _0x5b4949 / 4),
      _0x27c79f = [];
    for (let _0xa4193f = 0; _0xa4193f < _0x57c64e; _0xa4193f++) {
      const _0x4f9eab = BufferRTKeyInfo2.get(4 * _0xa4193f, 4),
        _0x45bec4 = await this.transferForResult(_0x4f9eab);
      _0x27c79f.push(...new Uint8Array(_0x45bec4.rtV2.buffer));
    }
    return rt.chunk(rt.chunk(_0x27c79f, 5), _0x5b4949).map((_0x1b12fc, _0x4b225a) => _0x1b12fc.map((_0x9c7ffe, _0x373df1) => {
      const _0xfd75d0 = OneRTKeyInfoV22.get(_0x4b225a, _0x373df1),
        [_0x3038a0, _0x1511b9, _0xeb2d51, _0x483462, _0x3cbcac] = _0x9c7ffe;
      _0xfd75d0.on = _0x3038a0;
      _0xfd75d0.release = new DataView(new Uint8Array([_0x1511b9, _0xeb2d51]).buffer).getUint16(0) * _BitKeyboard.AccuracyV2;
      _0xfd75d0.press = new DataView(new Uint8Array([_0x483462, _0x3cbcac]).buffer).getUint16(0) * _BitKeyboard.AccuracyV2;
      return _0xfd75d0;
    }));
  }
  async ["getRTKeyInfoAllV3"](_0x31990f, _0x5aad2e) {
    const _0x3f88a8 = Math.ceil(_0x31990f * _0x5aad2e / 4),
      _0x56a750 = [];
    for (let _0x1c65cc = 0; _0x1c65cc < _0x3f88a8; _0x1c65cc++) {
      const _0x25874d = BufferRTKeyInfo2.get(4 * _0x1c65cc, 4),
        _0x344f93 = await this.transferForResult(_0x25874d);
      _0x56a750.push(...new Uint8Array(_0x344f93.rtV2.buffer));
    }
    return rt.chunk(rt.chunk(_0x56a750, 5), _0x5aad2e).map((_0x2c28f6, _0x12d039) => _0x2c28f6.map((_0x501b38, _0x286594) => {
      const _0x4c4a85 = OneRTKeyInfoV3.get(_0x12d039, _0x286594),
        [_0x244edc, _0x4ced78, _0x485e07, _0x37dd44, _0x50aa45] = _0x501b38;
      _0x4c4a85.on = _0x244edc;
      _0x4c4a85.release = new DataView(new Uint8Array([_0x4ced78, _0x485e07]).buffer).getUint16(0) * _BitKeyboard.AccuracyV3;
      _0x4c4a85.press = new DataView(new Uint8Array([_0x37dd44, _0x50aa45]).buffer).getUint16(0) * _BitKeyboard.AccuracyV3;
      return _0x4c4a85;
    }));
  }
  async ['setRTKeyInfoAllV2'](_0x1a98a2) {
    const _0x4d7858 = _0x1a98a2.map(_0x15e41e => _0x15e41e.map(_0x1b553c => [_0x1b553c.on, ..._0x1b553c.releaseArr, ..._0x1b553c.pressArr]).flat()).flat(),
      _0xedd82a = rt.chunk(_0x4d7858, 20);
    for (let _0x46f44c = 0; _0x46f44c < _0xedd82a.length; _0x46f44c++) {
      const _0x573675 = _0xedd82a[_0x46f44c];
      let _0x40e07f = Ad.normal;
      0 === _0x46f44c && (_0x40e07f = Ad.erase);
      _0x46f44c === _0xedd82a.length - 1 && (_0x40e07f = Ad.write);
      const _0x55f402 = BufferRTKeyInfo2.create(4 * _0x46f44c, 4, _0x40e07f, new DataView(new Uint8Array(_0x573675).buffer));
      await this.transferForResult(_0x55f402);
      0 !== _0x46f44c && _0x46f44c !== _0xedd82a.length - 1 || (await Ng(200));
    }
  }
  async ["setRTKeyInfoAllV3"](_0x51137b) {
    const _0x5dd666 = _0x51137b.map(_0x7526ea => _0x7526ea.map(_0x43cc43 => [_0x43cc43.on, ..._0x43cc43.releaseArr, ..._0x43cc43.pressArr]).flat()).flat(),
      _0x216708 = rt.chunk(_0x5dd666, 20);
    for (let _0x146ed1 = 0; _0x146ed1 < _0x216708.length; _0x146ed1++) {
      const _0x216ef6 = _0x216708[_0x146ed1];
      let _0x48d1d7 = Ad.normal;
      0 === _0x146ed1 && (_0x48d1d7 = Ad.erase);
      _0x146ed1 === _0x216708.length - 1 && (_0x48d1d7 = Ad.write);
      const _0x4b0a91 = BufferRTKeyInfo2.create(4 * _0x146ed1, 4, _0x48d1d7, new DataView(new Uint8Array(_0x216ef6).buffer));
      await this.transferForResult(_0x4b0a91);
      0 !== _0x146ed1 && _0x146ed1 !== _0x216708.length - 1 || (await Ng(200));
    }
  }
  async ["getDeadBandV3"]() {
    return this.transferForResult(DeadBandV3.get());
  }
  async ["getDeadBandV2"]() {
    return this.transferForResult(DeadBandV22.get());
  }
  async ["setDeadBandV2"](_0x44f8a0, _0x4098ba) {
    return this.transferForResult(DeadBandV22.create(_0x44f8a0, _0x4098ba));
  }
  async ["setDeadBandV3"](_0x4fcb42, _0x3b8b30) {
    return this.transferForResult(DeadBandV3.create(_0x4fcb42, _0x3b8b30));
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
    filters: Pg.map(_0x566d20 => _0x566d20.filters).flat().map(_0x633567 => {
      const {
        boot: _0x48e70f
      } = _0x633567;
      return {
        ..._0x633567,
        ..._0x48e70f
      };
    })
  }],
  Tg = [...Pg, ...Mg],
  Rg = Pg.map(_0xe1ad07 => _0xe1ad07.filters).flat().map(_0x177ec9 => null == _0x177ec9 ? void 0 : _0x177ec9.boot).filter(Boolean),
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
B = async function (_0x29836f) {
  const _0x29fea0 = null == _0x29836f ? void 0 : _0x29836f.controller;
  if (!_0x29fea0) throw new Error('No\x20controller\x20found');
  this.api = new _0x29fea0(this.device);
  _0x29836f.digital && (this.digital = new _0x29836f.digital());
  if (_0x29836f.macro) this.macro = new _0x29836f.macro();else this.macro = null;
  await this.api.connect();
  const _0x2c5151 = Se(),
    _0x27a0b8 = (null == _0x29836f ? void 0 : _0x29836f.meta) || null;
  this.curDeviceFilter = _0x29836f.filters.find(_0x1b7274 => rt.some([rt.pick(_0x1b7274, ["productId", "vendorId"])], {
    productId: this.device.productId,
    vendorId: this.device.vendorId
  }));
  const {
      custom: _0x5bbabf,
      productId: _0x144084
    } = this.curDeviceFilter,
    _0x3453e4 = (null == _0x5bbabf ? void 0 : _0x5bbabf.name) + '-' + _0x144084;
  _0x2c5151.setMeta({
    ..._0x27a0b8,
    deviceName: _0x3453e4
  });
  this.api.setCustomData(this.curDeviceFilter);
  return this.api;
};
const Vg = new class WebHid {
  constructor() {
    var _0x236af6;
    ((_0x126809, _0x251d13, _0x5cf7d0) => {
      if (_0x251d13.has(_0x126809)) throw TypeError("Cannot add the same private member more than once");
      if (_0x251d13 instanceof WeakSet) _0x251d13.add(_0x126809);else _0x251d13.set(_0x126809, _0x5cf7d0);
    })(this, E);
    V(this, "device", null);
    V(this, "curDeviceFilter", null);
    V(this, "filters", Lg);
    V(this, "api", null);
    V(this, "digital", null);
    V(this, "macro", null);
    null == (_0x236af6 = null == navigator ? void 0 : navigator.hid) || _0x236af6.addEventListener("disconnect", _0x5246d4 => {
      var _0x4a216c;
      _0x5246d4.device === this.device && (Pr("device-disconnect", _0x5246d4.device), null == (_0x4a216c = this.api) || _0x4a216c.destroy(), this.device = null, this.api = null);
    });
  }
  get ["historyConnect"]() {
    try {
      return JSON.parse(localStorage.getItem("history-connect"));
    } catch (_0x3e1bf9) {
      return;
    }
  }
  set ['historyConnect'](_0x4445c1) {
    localStorage.setItem("history-connect", JSON.stringify({
      vendorId: _0x4445c1.vendorId,
      productId: _0x4445c1.productId
    }));
  }
  get ["getFilters"]() {
    return this.filters.map(_0x5b9cfe => _0x5b9cfe.filters).flat();
  }
  ['getDevices']() {
    var _0x1a9f87;
    if (null == (_0x1a9f87 = null == navigator ? void 0 : navigator.hid)) return void 0;
    return _0x1a9f87.getDevices();
  }
  ["getFilter"](_0x4b280f) {
    return rt.find(this.filters, _0x53a492 => -1 !== _0x53a492.filters.findIndex(_0x913de5 => {
      if (!rt.some([_0x913de5], {
        vendorId: _0x4b280f.vendorId,
        productId: _0x4b280f.productId
      })) return false;
      return -1 !== Fg(_0x4b280f).findIndex(_0x1a23b => rt.some([_0x1a23b], {
        usage: _0x913de5.usage,
        usagePage: _0x913de5.usagePage
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
    const _0x27c7d8 = await navigator.hid.getDevices();
    if (!_0x27c7d8.length) return [];
    const _0x1d6f0a = _0x27c7d8.map(_0x52876e => ({
      device: _0x52876e,
      filter: this.getFilter(_0x52876e)
    })).filter(_0x5e992e => !!_0x5e992e.filter);
    for (const _0x506f2a of _0x1d6f0a) {
      const {
        device: _0x55e243,
        filter: _0x93a162
      } = _0x506f2a;
      _0x55e243.opened || (await _0x506f2a.device.open());
      _0x506f2a.customInfo = _0x93a162.filters.find(_0x4b6516 => rt.some([rt.pick(_0x4b6516, ['productId', "vendorId"])], {
        productId: _0x55e243.productId,
        vendorId: _0x55e243.vendorId
      }));
    }
    return _0x1d6f0a;
  }
  async ["testConnection"]() {
    var _0xdf5fd3;
    const _0x52fdab = await navigator.hid.getDevices();
    if (!_0x52fdab.length) return;
    const {
      device: _0x520a4a,
      filter: _0x3908cb
    } = (null == (_0xdf5fd3 = _0x52fdab.map(_0x1d6e8e => ({
      device: _0x1d6e8e,
      filter: this.getFilter(_0x1d6e8e)
    })).filter(_0x556860 => {
      if (!this.historyConnect) return false;
      const {
        vendorId: _0x1faeea,
        productId: _0x1039f3
      } = this.historyConnect;
      return _0x556860.device.vendorId === _0x1faeea && _0x556860.device.productId === _0x1039f3;
    })) ? void 0 : _0xdf5fd3.find(_0x5cef88 => !!_0x5cef88.filter)) || {};
    if (_0x520a4a) return {
      device: _0x520a4a,
      filter: _0x3908cb
    };
    return void 0;
  }
  async ["autoConnect"]() {
    if (this.api) return;
    const _0x1f7957 = await this.testConnection();
    if (!_0x1f7957 || !(null == _0x1f7957 ? void 0 : _0x1f7957.device)) return;
    const {
      device: _0x265218,
      filter: _0x490c22
    } = _0x1f7957;
    this.device = _0x265218;
    return F(this, E, B).call(this, _0x490c22);
  }
  async ["connect"]() {
    var _0x2e4405;
    this.api && (await this.api.destroy());
    const _0xf15db6 = await navigator.hid.requestDevice({
      filters: this.getFilters
    });
    if (!_0xf15db6.length) throw new Error('No\x20device\x20found');
    this.device = rt.last(_0xf15db6);
    const _0x17c4ee = this.getFilter(this.device);
    "recovery-mode" !== (null == (_0x2e4405 = null == _0x17c4ee ? void 0 : _0x17c4ee.meta) ? void 0 : _0x2e4405.component) && localStorage.setItem('history-connect', JSON.stringify({
      vendorId: this.device.vendorId,
      productId: this.device.productId
    }));
    return F(this, E, B).call(this, _0x17c4ee);
  }
  async ["equipmentConnect"](_0x21d39b) {
    var _0x20924c;
    this.device = _0x21d39b;
    const _0x5961ba = this.getFilter(this.device);
    "recovery-mode" !== (null == (_0x20924c = null == _0x5961ba ? void 0 : _0x5961ba.meta) ? void 0 : _0x20924c.component) && localStorage.setItem("history-connect", JSON.stringify({
      vendorId: this.device.vendorId,
      productId: this.device.productId
    }));
    return F(this, E, B).call(this, _0x5961ba);
  }
  async ["getReceiverList"](_0x502437) {
    const _0x15762a = await navigator.hid.requestDevice({
      filters: this.filters.filter(_0x59551e => _0x59551e.meta.deviceName === _0x502437).map(_0x3ab555 => _0x3ab555.filters).flat().filter(_0xf37cd7 => _0xf37cd7.receiver)
    });
    if (!_0x15762a.length) throw new Error('No\x20device\x20found');
    return _0x15762a.map(_0x162499 => {
      const _0x12332a = this.getFilter(_0x162499),
        _0x24c700 = null == _0x12332a ? void 0 : _0x12332a.controller;
      if (!_0x24c700) throw new Error("No controller found");
      return new _0x24c700(_0x162499);
    });
  }
}();
function Fg(_0x544929) {
  return _0x544929.collections.map(_0x1d98a3 => rt.pick(_0x1d98a3, ["usage", "usagePage"]));
}
function Ng(_0x783aad) {
  return new Promise(_0x1472ec => {
    setTimeout(() => {
      _0x1472ec();
    }, _0x783aad);
  });
}
function Gg(_0x5eab06) {
  return !!a28_0x4451a3() && (a28_0x24153a(_0x5eab06), true);
}
function zg(_0x131480) {
  if ("function" == typeof _0x131480) return _0x131480();
  return a28_0x56e515(_0x131480);
}
const Hg = "undefined" != typeof window && "undefined" != typeof document;
"undefined" != typeof WorkerGlobalScope && (globalThis, WorkerGlobalScope);
const Wg = Object.prototype.toString,
  jg = _0x54688e => '[object\x20Object]' === Wg.call(_0x54688e),
  Yg = () => {};
function $g(_0x1295d9, _0x217171 = true, _0x600d54) {
  const _0xb60c94 = function (_0x4b57e8) {
    return _0x4b57e8 || a28_0x46b033();
  }();
  if (_0xb60c94) a28_0x417103(_0x1295d9, _0x600d54);else if (_0x217171) _0x1295d9();else a28_0x483ac4(_0x1295d9);
}
function qg(_0xc01258, _0x3223ff, _0x344f65) {
  let _0x399202 = (null == _0x344f65 ? void 0 : _0x344f65.immediate) ? [] : [...(_0xc01258 instanceof Function ? _0xc01258() : Array.isArray(_0xc01258) ? _0xc01258 : zg(_0xc01258))];
  return a28_0x3ca890(_0xc01258, (_0x1ea0be, _0x5a299f, _0x4d15d1) => {
    const _0x458e23 = Array.from({
        length: _0x399202.length
      }),
      _0x57a4f8 = [];
    for (const _0x4ede53 of _0x1ea0be) {
      let _0x265522 = false;
      for (let _0x51aa14 = 0; _0x51aa14 < _0x399202.length; _0x51aa14++) if (!_0x458e23[_0x51aa14] && _0x4ede53 === _0x399202[_0x51aa14]) {
        _0x458e23[_0x51aa14] = true;
        _0x265522 = true;
        break;
      }
      _0x265522 || _0x57a4f8.push(_0x4ede53);
    }
    const _0x1b963a = _0x399202.filter((_0x107861, _0x57f071) => !_0x458e23[_0x57f071]);
    _0x3223ff(_0x1ea0be, _0x399202, _0x57a4f8, _0x1b963a, _0x4d15d1);
    _0x399202 = [..._0x1ea0be];
  }, _0x344f65);
}
function Jg(_0x467784) {
  var _0x1c033a;
  const _0x3b68c4 = zg(_0x467784);
  return null != (_0x1c033a = null == _0x3b68c4 ? void 0 : _0x3b68c4.$el) ? _0x1c033a : _0x3b68c4;
}
const Xg = Hg ? window : void 0;
function Zg(_0x4cd115) {
  const _0x22d2d0 = function () {
    const _0x559740 = a28_0x34ade5(false),
      _0x2c477a = a28_0x46b033();
    _0x2c477a && a28_0x417103(() => {
      _0x559740.value = true;
    }, _0x2c477a);
    return _0x559740;
  }();
  return a28_0x3ab4c6(() => (_0x22d2d0.value, Boolean(_0x4cd115())));
}
function Qg(_0xad4652, _0x57939f = {
  width: 0,
  height: 0
}, _0xc00fa6 = {}) {
  const {
      window: _0x17ab04 = Xg,
      box: _0x18ba92 = "content-box"
    } = _0xc00fa6,
    _0x3f60fc = a28_0x3ab4c6(() => {
      var _0x243af2, _0x59755e;
      if (null == (_0x59755e = null == (_0x243af2 = Jg(_0xad4652)) ? void 0 : _0x243af2.namespaceURI)) return void 0;
      return _0x59755e.includes("svg");
    }),
    _0x6d2491 = a28_0x34ade5(_0x57939f.width),
    _0x5a45f4 = a28_0x34ade5(_0x57939f.height),
    {
      stop: _0x1b5ce2
    } = function (_0x19c7b5, _0x2ed666, _0x104625 = {}) {
      const {
        window: _0xb7afb8 = Xg,
        ..._0x43b6c6
      } = _0x104625;
      let _0xb1049f;
      const _0x5abcf0 = Zg(() => _0xb7afb8 && "ResizeObserver" in _0xb7afb8),
        _0x54701a = () => {
          _0xb1049f && (_0xb1049f.disconnect(), _0xb1049f = void 0);
        },
        _0x33d96d = a28_0x3ab4c6(() => Array.isArray(_0x19c7b5) ? _0x19c7b5.map(_0x400684 => Jg(_0x400684)) : [Jg(_0x19c7b5)]),
        _0x32f21a = a28_0x3ca890(_0x33d96d, _0x561dba => {
          _0x54701a();
          if (_0x5abcf0.value && _0xb7afb8) {
            _0xb1049f = new ResizeObserver(_0x2ed666);
            for (const _0x36a25b of _0x561dba) _0x36a25b && _0xb1049f.observe(_0x36a25b, _0x43b6c6);
          }
        }, {
          immediate: true,
          flush: "post"
        }),
        _0x2eee01 = () => {
          _0x54701a();
          _0x32f21a();
        };
      Gg(_0x2eee01);
      return {
        isSupported: _0x5abcf0,
        stop: _0x2eee01
      };
    }(_0xad4652, ([_0x1398d1]) => {
      const _0xd944b4 = "border-box" === _0x18ba92 ? _0x1398d1.borderBoxSize : "content-box" === _0x18ba92 ? _0x1398d1.contentBoxSize : _0x1398d1.devicePixelContentBoxSize;
      if (_0x17ab04 && _0x3f60fc.value) {
        const _0x20503f = Jg(_0xad4652);
        if (_0x20503f) {
          const _0x185bf1 = _0x17ab04.getComputedStyle(_0x20503f);
          _0x6d2491.value = Number.parseFloat(_0x185bf1.width);
          _0x5a45f4.value = Number.parseFloat(_0x185bf1.height);
        }
      } else {
        if (_0xd944b4) {
          const _0x310b0e = Array.isArray(_0xd944b4) ? _0xd944b4 : [_0xd944b4];
          _0x6d2491.value = _0x310b0e.reduce((_0x35ffb1, {
            inlineSize: _0x3a3ce0
          }) => _0x35ffb1 + _0x3a3ce0, 0);
          _0x5a45f4.value = _0x310b0e.reduce((_0x540829, {
            blockSize: _0x4d6217
          }) => _0x540829 + _0x4d6217, 0);
        } else {
          _0x6d2491.value = _0x1398d1.contentRect.width;
          _0x5a45f4.value = _0x1398d1.contentRect.height;
        }
      }
    }, _0xc00fa6);
  $g(() => {
    const _0x1c9832 = Jg(_0xad4652);
    _0x1c9832 && (_0x6d2491.value = 'offsetWidth' in _0x1c9832 ? _0x1c9832.offsetWidth : _0x57939f.width, _0x5a45f4.value = "offsetHeight" in _0x1c9832 ? _0x1c9832.offsetHeight : _0x57939f.height);
  });
  const _0x216efa = a28_0x3ca890(() => Jg(_0xad4652), _0x5b663f => {
    _0x6d2491.value = _0x5b663f ? _0x57939f.width : 0;
    _0x5a45f4.value = _0x5b663f ? _0x57939f.height : 0;
  });
  return {
    width: _0x6d2491,
    height: _0x5a45f4,
    stop: function () {
      _0x1b5ce2();
      _0x216efa();
    }
  };
}
function em(_0x11ea08 = {}) {
  const {
      window: _0x1e384a = Xg,
      initialWidth: _0x42d44c = Number.POSITIVE_INFINITY,
      initialHeight: _0x59c8bc = Number.POSITIVE_INFINITY,
      listenOrientation: _0x84647c = true,
      includeScrollbar: _0x4c7d0b = true
    } = _0x11ea08,
    _0x1d3ce3 = a28_0x34ade5(_0x42d44c),
    _0x29ac23 = a28_0x34ade5(_0x59c8bc),
    _0x550571 = () => {
      _0x1e384a && (_0x4c7d0b ? (_0x1d3ce3.value = _0x1e384a.innerWidth, _0x29ac23.value = _0x1e384a.innerHeight) : (_0x1d3ce3.value = _0x1e384a.document.documentElement.clientWidth, _0x29ac23.value = _0x1e384a.document.documentElement.clientHeight));
    };
  _0x550571();
  $g(_0x550571);
  (function (..._0x14a436) {
    let _0x6b86ac, _0x5dcaab, _0x1ae5e7, _0x471f80;
    if ('string' == typeof _0x14a436[0] || Array.isArray(_0x14a436[0])) {
      [_0x5dcaab, _0x1ae5e7, _0x471f80] = _0x14a436;
      _0x6b86ac = Xg;
    } else [_0x6b86ac, _0x5dcaab, _0x1ae5e7, _0x471f80] = _0x14a436;
    if (!_0x6b86ac) return Yg;
    Array.isArray(_0x5dcaab) || (_0x5dcaab = [_0x5dcaab]);
    Array.isArray(_0x1ae5e7) || (_0x1ae5e7 = [_0x1ae5e7]);
    const _0x57f3e1 = [],
      _0x5a688f = () => {
        _0x57f3e1.forEach(_0xeea500 => _0xeea500());
        _0x57f3e1.length = 0;
      },
      _0x585a70 = a28_0x3ca890(() => [Jg(_0x6b86ac), zg(_0x471f80)], ([_0x367d82, _0x328bf0]) => {
        _0x5a688f();
        if (!_0x367d82) return;
        const _0x48c7c8 = jg(_0x328bf0) ? {
          ..._0x328bf0
        } : _0x328bf0;
        _0x57f3e1.push(..._0x5dcaab.flatMap(_0x2fc904 => _0x1ae5e7.map(_0x3f2842 => ((_0x3a73db, _0x1ac982, _0x1f14fd, _0x80a4d) => (_0x3a73db.addEventListener(_0x1ac982, _0x1f14fd, _0x80a4d), () => _0x3a73db.removeEventListener(_0x1ac982, _0x1f14fd, _0x80a4d)))(_0x367d82, _0x2fc904, _0x3f2842, _0x48c7c8))));
      }, {
        immediate: true,
        flush: 'post'
      }),
      _0x2ba6cc = () => {
        _0x585a70();
        _0x5a688f();
      };
    Gg(_0x2ba6cc);
  })("resize", _0x550571, {
    passive: true
  });
  if (_0x84647c) {
    const _0x18f527 = function (_0x3144f2, _0x5abe7b = {}) {
      const {
          window: _0x5c3745 = Xg
        } = _0x5abe7b,
        _0x602cac = Zg(() => _0x5c3745 && "matchMedia" in _0x5c3745 && "function" == typeof _0x5c3745.matchMedia);
      let _0x1d8535;
      const _0x32d269 = a28_0x34ade5(false),
        _0x37d67d = _0x3d8d35 => {
          _0x32d269.value = _0x3d8d35.matches;
        },
        _0x41367c = () => {
          _0x1d8535 && ("removeEventListener" in _0x1d8535 ? _0x1d8535.removeEventListener('change', _0x37d67d) : _0x1d8535.removeListener(_0x37d67d));
        },
        _0x549706 = a28_0x5be947(() => {
          _0x602cac.value && (_0x41367c(), _0x1d8535 = _0x5c3745.matchMedia(zg(_0x3144f2)), 'addEventListener' in _0x1d8535 ? _0x1d8535.addEventListener("change", _0x37d67d) : _0x1d8535.addListener(_0x37d67d), _0x32d269.value = _0x1d8535.matches);
        });
      Gg(() => {
        _0x549706();
        _0x41367c();
        _0x1d8535 = void 0;
      });
      return _0x32d269;
    }('(orientation:\x20portrait)');
    a28_0x3ca890(_0x18f527, () => _0x550571());
  }
  return {
    width: _0x1d3ce3,
    height: _0x29ac23
  };
}
export { Vu as $, KeyAction3 as A, Ce as B, Compx as C, DuckBread as D, Md as E, Ot as F, Vd as G, Holtek as H, InputDialog as I, qg as J, ag as K, tg as L, Qd as M, Pe as N, AlertDialog as O, ProgressDialog as P, OneTogThV3 as Q, xt as R, OneTogThV22 as S, og as T, OneRTKeyInfoV3 as U, OneRTKeyInfoV22 as V, Me as W, Pg as X, Rg as Y, ViewHelp as Z, Ie as _, Ls as a, Qu as a$, Cg as a0, TapDance2 as a1, RappySnappyV3 as a2, RappySnappy2 as a3, wt as a4, vg as a5, fg as a6, yt as a7, dg as a8, Ue as a9, Wh as aA, AdviceConfigDialog as aB, SetDPI as aC, Nf as aD, ph as aE, ih as aF, xh as aG, lh as aH, hh as aI, gh as aJ, Dh as aK, Sh as aL, uh as aM, wh as aN, _h as aO, Kh as aP, Ke as aQ, th as aR, MouseAfterPerformanceSetting as aS, MouseBeforePerformanceSetting as aT, FarDistance as aU, MouseDpi as aV, MouseDpiColor as aW, MouseDpiRGBEffects as aX, MouseReportRateDpi as aY, MouseSilentHeight as aZ, Wu as a_, Mr as aa, NotificationDialog as ab, DeadBandV3 as ac, DeadBandV22 as ad, LightInfo2 as ae, KeyboardFeature2 as af, GameModeSwitch2 as ag, Og as ah, Bd as ai, ed as aj, Yh as ak, ld as al, hd as am, gd as an, _d as ao, kd as ap, pd as aq, wd as ar, rd as as, nd as at, ButtonAction3 as au, id as av, ud as aw, Oe as ax, xe as ay, qh as az, Kg as b, of as b$, tc as b0, ju as b1, Hu as b2, Zu as b3, Dt as b4, rc as b5, sc as b6, dc as b7, zu as b8, Nc as b9, Ur as bA, Ss as bB, ks as bC, Dr as bD, Ds as bE, xs as bF, As as bG, bs as bH, qr as bI, xr as bJ, Ze as bK, Xe as bL, Je as bM, Rf as bN, Df as bO, gf as bP, pf as bQ, tf as bR, kf as bS, rf as bT, Sf as bU, af as bV, bf as bW, _f as bX, df as bY, Ql as bZ, Bf as b_, Hc as ba, MacroStore as bb, oc as bc, uc as bd, hc as be, Qg as bf, Gl as bg, _c as bh, Cc as bi, Dc as bj, Oc as bk, Kc as bl, Mc as bm, Gc as bn, Gu as bo, Vr as bp, ys as bq, ds as br, ms as bs, Rr as bt, ss as bu, _s as bv, Or as bw, os as bx, fs as by, cs as bz, Pr as c, Zl as c0, uf as c1, lf as c2, hf as c3, If as c4, Pf as c5, Kt as c6, St as c7, Ct as c8, kr as c9, Jl as ca, Xl as cb, Eh as cc, Ih as cd, Rh as ce, rh as cf, sh as cg, Fh as ch, Nh as ci, Pu as cj, Bu as ck, Wc as cl, jl as cm, Yl as cn, Wl as co, zl as cp, Iu as cq, HidDeviceUpgrade as cr, xu as cs, Xn as ct, Gh as d, Vf as e, BitMouse as f, Ae as g, Ng as h, PromptDialog as i, em as j, Dd as k, rt as l, HidDevice6 as m, Fg as n, Eg as o, Bg as p, mt as q, Tr as r, pt as s, GeneralNextKeyAction as t, Se as u, Nd as v, Vg as w, Ut as x, LTKeyAction2 as y, Td as z };