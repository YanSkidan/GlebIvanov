var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/components/navigation/navigation.ts
function initNavigation() {
  if (!navigation) return;
}
var init_navigation = __esm({
  "src/components/navigation/navigation.ts"() {
    "use strict";
  }
});

// src/ts/main.ts
var require_main = __commonJS({
  "src/ts/main.ts"() {
    init_navigation();
    document.addEventListener("DOMContentLoaded", () => {
      initNavigation();
    });
  }
});
export default require_main();
//# sourceMappingURL=main.js.map
