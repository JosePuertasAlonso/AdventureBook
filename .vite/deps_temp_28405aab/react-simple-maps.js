import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object3) {
          if (typeof object3 === "object" && object3 !== null) {
            var $$typeof = object3.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object3.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object3) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object3) || typeOf(object3) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object3) {
          return typeOf(object3) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object3) {
          return typeOf(object3) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object3) {
          return typeOf(object3) === REACT_PROVIDER_TYPE;
        }
        function isElement(object3) {
          return typeof object3 === "object" && object3 !== null && object3.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object3) {
          return typeOf(object3) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object3) {
          return typeOf(object3) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object3) {
          return typeOf(object3) === REACT_LAZY_TYPE;
        }
        function isMemo(object3) {
          return typeOf(object3) === REACT_MEMO_TYPE;
        }
        function isPortal(object3) {
          return typeOf(object3) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object3) {
          return typeOf(object3) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object3) {
          return typeOf(object3) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object3) {
          return typeOf(object3) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-simple-maps/dist/index.es.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/d3-geo/src/index.js
var src_exports = {};
__export(src_exports, {
  geoAlbers: () => albers_default,
  geoAlbersUsa: () => albersUsa_default,
  geoArea: () => area_default,
  geoAzimuthalEqualArea: () => azimuthalEqualArea_default,
  geoAzimuthalEqualAreaRaw: () => azimuthalEqualAreaRaw,
  geoAzimuthalEquidistant: () => azimuthalEquidistant_default,
  geoAzimuthalEquidistantRaw: () => azimuthalEquidistantRaw,
  geoBounds: () => bounds_default,
  geoCentroid: () => centroid_default,
  geoCircle: () => circle_default,
  geoClipAntimeridian: () => antimeridian_default,
  geoClipCircle: () => circle_default2,
  geoClipExtent: () => extent_default2,
  geoClipRectangle: () => clipRectangle,
  geoConicConformal: () => conicConformal_default,
  geoConicConformalRaw: () => conicConformalRaw,
  geoConicEqualArea: () => conicEqualArea_default,
  geoConicEqualAreaRaw: () => conicEqualAreaRaw,
  geoConicEquidistant: () => conicEquidistant_default,
  geoConicEquidistantRaw: () => conicEquidistantRaw,
  geoContains: () => contains_default,
  geoDistance: () => distance_default,
  geoEqualEarth: () => equalEarth_default,
  geoEqualEarthRaw: () => equalEarthRaw,
  geoEquirectangular: () => equirectangular_default,
  geoEquirectangularRaw: () => equirectangularRaw,
  geoGnomonic: () => gnomonic_default,
  geoGnomonicRaw: () => gnomonicRaw,
  geoGraticule: () => graticule,
  geoGraticule10: () => graticule10,
  geoIdentity: () => identity_default3,
  geoInterpolate: () => interpolate_default,
  geoLength: () => length_default,
  geoMercator: () => mercator_default,
  geoMercatorRaw: () => mercatorRaw,
  geoNaturalEarth1: () => naturalEarth1_default,
  geoNaturalEarth1Raw: () => naturalEarth1Raw,
  geoOrthographic: () => orthographic_default,
  geoOrthographicRaw: () => orthographicRaw,
  geoPath: () => path_default,
  geoProjection: () => projection,
  geoProjectionMutator: () => projectionMutator,
  geoRotation: () => rotation_default,
  geoStereographic: () => stereographic_default,
  geoStereographicRaw: () => stereographicRaw,
  geoStream: () => stream_default,
  geoTransform: () => transform_default,
  geoTransverseMercator: () => transverseMercator_default,
  geoTransverseMercatorRaw: () => transverseMercatorRaw
});

// node_modules/d3-array/src/ascending.js
function ascending_default(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector_default(f) {
  let delta = f;
  let compare = f;
  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }
  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }
  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }
  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return { left, center, right };
}
function ascendingComparator(f) {
  return (d, x) => ascending_default(f(d), x);
}

// node_modules/d3-array/src/number.js
function number_default(x) {
  return x === null ? NaN : +x;
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector_default(number_default).center;

// node_modules/d3-array/src/fsum.js
var Adder = class {
  constructor() {
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  add(x) {
    const p = this._partials;
    let i = 0;
    for (let j = 0; j < this._n && j < 32; j++) {
      const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
      if (lo) p[i++] = lo;
      x = hi;
    }
    p[i] = x;
    this._n = i + 1;
    return this;
  }
  valueOf() {
    const p = this._partials;
    let n = this._n, x, y, lo, hi = 0;
    if (n > 0) {
      hi = p[--n];
      while (n > 0) {
        x = hi;
        y = p[--n];
        hi = x + y;
        lo = y - (hi - x);
        if (lo) break;
      }
      if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
        y = lo * 2;
        x = hi + y;
        if (y == x - hi) hi = x;
      }
    }
    return hi;
  }
};

// node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);

// node_modules/d3-array/src/merge.js
function* flatten(arrays) {
  for (const array2 of arrays) {
    yield* array2;
  }
}
function merge(arrays) {
  return Array.from(flatten(arrays));
}

// node_modules/d3-array/src/range.js
function range_default(start2, stop, step) {
  start2 = +start2, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start2) / step)) | 0, range2 = new Array(n);
  while (++i < n) {
    range2[i] = start2 + i * step;
  }
  return range2;
}

// node_modules/d3-array/src/shuffle.js
var shuffle_default = shuffler(Math.random);
function shuffler(random) {
  return function shuffle(array2, i0 = 0, i1 = array2.length) {
    let m = i1 - (i0 = +i0);
    while (m) {
      const i = random() * m-- | 0, t = array2[m + i0];
      array2[m + i0] = array2[i + i0];
      array2[i + i0] = t;
    }
    return array2;
  };
}

// node_modules/d3-geo/src/math.js
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var hypot = Math.hypot;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function haversin(x) {
  return (x = sin(x / 2)) * x;
}

// node_modules/d3-geo/src/noop.js
function noop() {
}

// node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
var streamObjectType = {
  Feature: function(object3, stream) {
    streamGeometry(object3.geometry, stream);
  },
  FeatureCollection: function(object3, stream) {
    var features = object3.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};
var streamGeometryType = {
  Sphere: function(object3, stream) {
    stream.sphere();
  },
  Point: function(object3, stream) {
    object3 = object3.coordinates;
    stream.point(object3[0], object3[1], object3[2]);
  },
  MultiPoint: function(object3, stream) {
    var coordinates2 = object3.coordinates, i = -1, n = coordinates2.length;
    while (++i < n) object3 = coordinates2[i], stream.point(object3[0], object3[1], object3[2]);
  },
  LineString: function(object3, stream) {
    streamLine(object3.coordinates, stream, 0);
  },
  MultiLineString: function(object3, stream) {
    var coordinates2 = object3.coordinates, i = -1, n = coordinates2.length;
    while (++i < n) streamLine(coordinates2[i], stream, 0);
  },
  Polygon: function(object3, stream) {
    streamPolygon(object3.coordinates, stream);
  },
  MultiPolygon: function(object3, stream) {
    var coordinates2 = object3.coordinates, i = -1, n = coordinates2.length;
    while (++i < n) streamPolygon(coordinates2[i], stream);
  },
  GeometryCollection: function(object3, stream) {
    var geometries = object3.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};
function streamLine(coordinates2, stream, closed) {
  var i = -1, n = coordinates2.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates2[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates2, stream) {
  var i = -1, n = coordinates2.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates2[i], stream, 1);
  stream.polygonEnd();
}
function stream_default(object3, stream) {
  if (object3 && streamObjectType.hasOwnProperty(object3.type)) {
    streamObjectType[object3.type](object3, stream);
  } else {
    streamGeometry(object3, stream);
  }
}

// node_modules/d3-geo/src/area.js
var areaRingSum = new Adder();
var areaSum = new Adder();
var lambda00;
var phi00;
var lambda0;
var cosPhi0;
var sinPhi0;
var areaStream = {
  point: noop,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: function() {
    areaRingSum = new Adder();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? tau + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = noop;
  },
  sphere: function() {
    areaSum.add(tau);
  }
};
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaRingEnd() {
  areaPoint(lambda00, phi00);
}
function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= radians, phi *= radians;
  lambda0 = lambda, cosPhi0 = cos(phi = phi / 2 + quarterPi), sinPhi0 = sin(phi);
}
function areaPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  phi = phi / 2 + quarterPi;
  var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = cos(phi), sinPhi = sin(phi), k = sinPhi0 * sinPhi, u = cosPhi0 * cosPhi + k * cos(adLambda), v = k * sdLambda * sin(adLambda);
  areaRingSum.add(atan2(v, u));
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}
function area_default(object3) {
  areaSum = new Adder();
  stream_default(object3, areaStream);
  return areaSum * 2;
}

// node_modules/d3-geo/src/cartesian.js
function spherical(cartesian2) {
  return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
}
function cartesian(spherical2) {
  var lambda = spherical2[0], phi = spherical2[1], cosPhi = cos(phi);
  return [cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi)];
}
function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

// node_modules/d3-geo/src/bounds.js
var lambda02;
var phi0;
var lambda1;
var phi1;
var lambda2;
var lambda002;
var phi002;
var p0;
var deltaSum;
var ranges;
var range;
var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum = new Adder();
    areaStream.polygonStart();
  },
  polygonEnd: function() {
    areaStream.polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (areaRingSum < 0) lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > epsilon) phi1 = 90;
    else if (deltaSum < -epsilon) phi0 = -90;
    range[0] = lambda02, range[1] = lambda1;
  },
  sphere: function() {
    lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
  }
};
function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda02 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}
function linePoint(lambda, phi) {
  var p = cartesian([lambda * radians, phi * radians]);
  if (p0) {
    var normal = cartesianCross(p0, p), equatorial = [normal[1], -normal[0], 0], inflection = cartesianCross(equatorial, normal);
    cartesianNormalizeInPlace(inflection);
    inflection = spherical(inflection);
    var delta = lambda - lambda2, sign2 = delta > 0 ? 1 : -1, lambdai = inflection[0] * degrees * sign2, phii, antimeridian = abs(delta) > 180;
    if (antimeridian ^ (sign2 * lambda2 < lambdai && lambdai < sign2 * lambda)) {
      phii = inflection[1] * degrees;
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign2 * lambda2 < lambdai && lambdai < sign2 * lambda)) {
      phii = -inflection[1] * degrees;
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda02, lambda) > angle(lambda02, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda02, lambda1)) lambda02 = lambda;
      }
    } else {
      if (lambda1 >= lambda02) {
        if (lambda < lambda02) lambda02 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda02, lambda) > angle(lambda02, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda02, lambda1)) lambda02 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda02 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}
function boundsLineStart() {
  boundsStream.point = linePoint;
}
function boundsLineEnd() {
  range[0] = lambda02, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}
function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda002 = lambda, phi002 = phi;
  }
  areaStream.point(lambda, phi);
  linePoint(lambda, phi);
}
function boundsRingStart() {
  areaStream.lineStart();
}
function boundsRingEnd() {
  boundsRingPoint(lambda002, phi002);
  areaStream.lineEnd();
  if (abs(deltaSum) > epsilon) lambda02 = -(lambda1 = 180);
  range[0] = lambda02, range[1] = lambda1;
  p0 = null;
}
function angle(lambda04, lambda12) {
  return (lambda12 -= lambda04) < 0 ? lambda12 + 360 : lambda12;
}
function rangeCompare(a, b) {
  return a[0] - b[0];
}
function rangeContains(range2, x) {
  return range2[0] <= range2[1] ? range2[0] <= x && x <= range2[1] : x < range2[0] || range2[1] < x;
}
function bounds_default(feature2) {
  var i, n, a, b, merged, deltaMax, delta;
  phi1 = lambda1 = -(lambda02 = phi0 = Infinity);
  ranges = [];
  stream_default(feature2, boundsStream);
  if (n = ranges.length) {
    ranges.sort(rangeCompare);
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda02 = b[0], lambda1 = a[1];
    }
  }
  ranges = range = null;
  return lambda02 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda02, phi0], [lambda1, phi1]];
}

// node_modules/d3-geo/src/centroid.js
var W0;
var W1;
var X0;
var Y0;
var Z0;
var X1;
var Y1;
var Z1;
var X2;
var Y2;
var Z2;
var lambda003;
var phi003;
var x0;
var y0;
var z0;
var centroidStream = {
  sphere: noop,
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};
function centroidPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi);
  centroidPointCartesian(cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi));
}
function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}
function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}
function centroidLinePointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi);
  x0 = cosPhi * cos(lambda);
  y0 = cosPhi * sin(lambda);
  z0 = sin(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}
function centroidLinePoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi), x = cosPhi * cos(lambda), y = cosPhi * sin(lambda), z = sin(phi), w = atan2(sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}
function centroidRingEnd() {
  centroidRingPoint(lambda003, phi003);
  centroidStream.point = centroidPoint;
}
function centroidRingPointFirst(lambda, phi) {
  lambda003 = lambda, phi003 = phi;
  lambda *= radians, phi *= radians;
  centroidStream.point = centroidRingPoint;
  var cosPhi = cos(phi);
  x0 = cosPhi * cos(lambda);
  y0 = cosPhi * sin(lambda);
  z0 = sin(phi);
  centroidPointCartesian(x0, y0, z0);
}
function centroidRingPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi), x = cosPhi * cos(lambda), y = cosPhi * sin(lambda), z = sin(phi), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = hypot(cx, cy, cz), w = asin(m), v = m && -w / m;
  X2.add(v * cx);
  Y2.add(v * cy);
  Z2.add(v * cz);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}
function centroid_default(object3) {
  W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = 0;
  X2 = new Adder();
  Y2 = new Adder();
  Z2 = new Adder();
  stream_default(object3, centroidStream);
  var x = +X2, y = +Y2, z = +Z2, m = hypot(x, y, z);
  if (m < epsilon2) {
    x = X1, y = Y1, z = Z1;
    if (W1 < epsilon) x = X0, y = Y0, z = Z0;
    m = hypot(x, y, z);
    if (m < epsilon2) return [NaN, NaN];
  }
  return [atan2(y, x) * degrees, asin(z / m) * degrees];
}

// node_modules/d3-geo/src/constant.js
function constant_default2(x) {
  return function() {
    return x;
  };
}

// node_modules/d3-geo/src/compose.js
function compose_default(a, b) {
  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }
  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };
  return compose;
}

// node_modules/d3-geo/src/rotation.js
function rotationIdentity(lambda, phi) {
  return [abs(lambda) > pi ? lambda + Math.round(-lambda / tau) * tau : lambda, phi];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau) ? deltaPhi || deltaGamma ? compose_default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > pi ? lambda - tau : lambda < -pi ? lambda + tau : lambda, phi];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos(deltaPhi), sinDeltaPhi = sin(deltaPhi), cosDeltaGamma = cos(deltaGamma), sinDeltaGamma = sin(deltaGamma);
  function rotation(lambda, phi) {
    var cosPhi = cos(phi), x = cos(lambda) * cosPhi, y = sin(lambda) * cosPhi, z = sin(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      asin(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }
  rotation.invert = function(lambda, phi) {
    var cosPhi = cos(phi), x = cos(lambda) * cosPhi, y = sin(lambda) * cosPhi, z = sin(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      asin(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };
  return rotation;
}
function rotation_default(rotate) {
  rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);
  function forward(coordinates2) {
    coordinates2 = rotate(coordinates2[0] * radians, coordinates2[1] * radians);
    return coordinates2[0] *= degrees, coordinates2[1] *= degrees, coordinates2;
  }
  forward.invert = function(coordinates2) {
    coordinates2 = rotate.invert(coordinates2[0] * radians, coordinates2[1] * radians);
    return coordinates2[0] *= degrees, coordinates2[1] *= degrees, coordinates2;
  };
  return forward;
}

// node_modules/d3-geo/src/circle.js
function circleStream(stream, radius, delta, direction, t02, t12) {
  if (!delta) return;
  var cosRadius = cos(radius), sinRadius = sin(radius), step = direction * delta;
  if (t02 == null) {
    t02 = radius + direction * tau;
    t12 = radius - step / 2;
  } else {
    t02 = circleRadius(cosRadius, t02);
    t12 = circleRadius(cosRadius, t12);
    if (direction > 0 ? t02 < t12 : t02 > t12) t02 += direction * tau;
  }
  for (var point, t = t02; direction > 0 ? t > t12 : t < t12; t -= step) {
    point = spherical([cosRadius, -sinRadius * cos(t), -sinRadius * sin(t)]);
    stream.point(point[0], point[1]);
  }
}
function circleRadius(cosRadius, point) {
  point = cartesian(point), point[0] -= cosRadius;
  cartesianNormalizeInPlace(point);
  var radius = acos(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
}
function circle_default() {
  var center = constant_default2([0, 0]), radius = constant_default2(90), precision = constant_default2(6), ring, rotate, stream = { point };
  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= degrees, x[1] *= degrees;
  }
  function circle2() {
    var c = center.apply(this, arguments), r = radius.apply(this, arguments) * radians, p = precision.apply(this, arguments) * radians;
    ring = [];
    rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
    circleStream(stream, r, p, 1);
    c = { type: "Polygon", coordinates: [ring] };
    ring = rotate = null;
    return c;
  }
  circle2.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : constant_default2([+_[0], +_[1]]), circle2) : center;
  };
  circle2.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default2(+_), circle2) : radius;
  };
  circle2.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : constant_default2(+_), circle2) : precision;
  };
  return circle2;
}

// node_modules/d3-geo/src/clip/buffer.js
function buffer_default() {
  var lines = [], line;
  return {
    point: function(x, y, m) {
      line.push([x, y, m]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop,
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}

// node_modules/d3-geo/src/pointEqual.js
function pointEqual_default(a, b) {
  return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
}

// node_modules/d3-geo/src/clip/rejoin.js
function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other;
  this.e = entry;
  this.v = false;
  this.n = this.p = null;
}
function rejoin_default(segments, compareIntersection2, startInside, interpolate, stream) {
  var subject = [], clip = [], i, n;
  segments.forEach(function(segment) {
    if ((n2 = segment.length - 1) <= 0) return;
    var n2, p02 = segment[0], p1 = segment[n2], x;
    if (pointEqual_default(p02, p1)) {
      if (!p02[2] && !p1[2]) {
        stream.lineStart();
        for (i = 0; i < n2; ++i) stream.point((p02 = segment[i])[0], p02[1]);
        stream.lineEnd();
        return;
      }
      p1[0] += 2 * epsilon;
    }
    subject.push(x = new Intersection(p02, segment, null, true));
    clip.push(x.o = new Intersection(p02, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });
  if (!subject.length) return;
  clip.sort(compareIntersection2);
  link(subject);
  link(clip);
  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }
  var start2 = subject[0], points, point;
  while (1) {
    var current = start2, isSubject = true;
    while (current.v) if ((current = current.n) === start2) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array2) {
  if (!(n = array2.length)) return;
  var n, i = 0, a = array2[0], b;
  while (++i < n) {
    a.n = b = array2[i];
    b.p = a;
    a = b;
  }
  a.n = b = array2[0];
  b.p = a;
}

// node_modules/d3-geo/src/polygonContains.js
function longitude(point) {
  if (abs(point[0]) <= pi)
    return point[0];
  else
    return sign(point[0]) * ((abs(point[0]) + pi) % tau - pi);
}
function polygonContains_default(polygon, point) {
  var lambda = longitude(point), phi = point[1], sinPhi = sin(phi), normal = [sin(lambda), -cos(lambda), 0], angle2 = 0, winding = 0;
  var sum2 = new Adder();
  if (sinPhi === 1) phi = halfPi + epsilon;
  else if (sinPhi === -1) phi = -halfPi - epsilon;
  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring, m, point0 = ring[m - 1], lambda04 = longitude(point0), phi02 = point0[1] / 2 + quarterPi, sinPhi03 = sin(phi02), cosPhi03 = cos(phi02);
    for (var j = 0; j < m; ++j, lambda04 = lambda12, sinPhi03 = sinPhi1, cosPhi03 = cosPhi1, point0 = point1) {
      var point1 = ring[j], lambda12 = longitude(point1), phi12 = point1[1] / 2 + quarterPi, sinPhi1 = sin(phi12), cosPhi1 = cos(phi12), delta = lambda12 - lambda04, sign2 = delta >= 0 ? 1 : -1, absDelta = sign2 * delta, antimeridian = absDelta > pi, k = sinPhi03 * sinPhi1;
      sum2.add(atan2(k * sign2 * sin(absDelta), cosPhi03 * cosPhi1 + k * cos(absDelta)));
      angle2 += antimeridian ? delta + sign2 * tau : delta;
      if (antimeridian ^ lambda04 >= lambda ^ lambda12 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection2 = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection2);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection2[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }
  return (angle2 < -epsilon || angle2 < epsilon && sum2 < -epsilon2) ^ winding & 1;
}

// node_modules/d3-geo/src/clip/index.js
function clip_default(pointVisible, clipLine, interpolate, start2) {
  return function(sink) {
    var line = clipLine(sink), ringBuffer = buffer_default(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
    var clip = {
      point,
      lineStart,
      lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains_default(polygon, start2);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          rejoin_default(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }
    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }
    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }
    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point2;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n) return;
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point2 = segment[i])[0], point2[1]);
          sink.lineEnd();
        }
        return;
      }
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - halfPi - epsilon : halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon : halfPi - b[1]);
}

// node_modules/d3-geo/src/clip/antimeridian.js
var antimeridian_default = clip_default(
  function() {
    return true;
  },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-pi, -halfPi]
);
function clipAntimeridianLine(stream) {
  var lambda04 = NaN, phi02 = NaN, sign0 = NaN, clean;
  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda12, phi12) {
      var sign1 = lambda12 > 0 ? pi : -pi, delta = abs(lambda12 - lambda04);
      if (abs(delta - pi) < epsilon) {
        stream.point(lambda04, phi02 = (phi02 + phi12) / 2 > 0 ? halfPi : -halfPi);
        stream.point(sign0, phi02);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi02);
        stream.point(lambda12, phi02);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi) {
        if (abs(lambda04 - sign0) < epsilon) lambda04 -= sign0 * epsilon;
        if (abs(lambda12 - sign1) < epsilon) lambda12 -= sign1 * epsilon;
        phi02 = clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12);
        stream.point(sign0, phi02);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi02);
        clean = 0;
      }
      stream.point(lambda04 = lambda12, phi02 = phi12);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda04 = phi02 = NaN;
    },
    clean: function() {
      return 2 - clean;
    }
  };
}
function clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12) {
  var cosPhi03, cosPhi1, sinLambda0Lambda1 = sin(lambda04 - lambda12);
  return abs(sinLambda0Lambda1) > epsilon ? atan((sin(phi02) * (cosPhi1 = cos(phi12)) * sin(lambda12) - sin(phi12) * (cosPhi03 = cos(phi02)) * sin(lambda04)) / (cosPhi03 * cosPhi1 * sinLambda0Lambda1)) : (phi02 + phi12) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * halfPi;
    stream.point(-pi, phi);
    stream.point(0, phi);
    stream.point(pi, phi);
    stream.point(pi, 0);
    stream.point(pi, -phi);
    stream.point(0, -phi);
    stream.point(-pi, -phi);
    stream.point(-pi, 0);
    stream.point(-pi, phi);
  } else if (abs(from[0] - to[0]) > epsilon) {
    var lambda = from[0] < to[0] ? pi : -pi;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}

// node_modules/d3-geo/src/clip/circle.js
function circle_default2(radius) {
  var cr = cos(radius), delta = 6 * radians, smallRadius = cr > 0, notHemisphere = abs(cr) > epsilon;
  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }
  function visible(lambda, phi) {
    return cos(lambda) * cos(phi) > cr;
  }
  function clipLine(stream) {
    var point0, c0, v0, v00, clean;
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? pi : -pi), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || pointEqual_default(point0, point2) || pointEqual_default(point1, point2))
            point1[2] = 1;
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1], 2);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1], 3);
            }
          }
        }
        if (v && (!point0 || !pointEqual_default(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | (v00 && v0) << 1;
      }
    };
  }
  function intersect(a, b, two) {
    var pa = cartesian(a), pb = cartesian(b);
    var n1 = [1, 0, 0], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
    if (!determinant) return !two && a;
    var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A5 = cartesianScale(n1, c1), B2 = cartesianScale(n2, c2);
    cartesianAddInPlace(A5, B2);
    var u = n1xn2, w = cartesianDot(A5, u), uu = cartesianDot(u, u), t22 = w * w - uu * (cartesianDot(A5, A5) - 1);
    if (t22 < 0) return;
    var t = sqrt(t22), q = cartesianScale(u, (-w - t) / uu);
    cartesianAddInPlace(q, A5);
    q = spherical(q);
    if (!two) return q;
    var lambda04 = a[0], lambda12 = b[0], phi02 = a[1], phi12 = b[1], z;
    if (lambda12 < lambda04) z = lambda04, lambda04 = lambda12, lambda12 = z;
    var delta2 = lambda12 - lambda04, polar = abs(delta2 - pi) < epsilon, meridian = polar || delta2 < epsilon;
    if (!polar && phi12 < phi02) z = phi02, phi02 = phi12, phi12 = z;
    if (meridian ? polar ? phi02 + phi12 > 0 ^ q[1] < (abs(q[0] - lambda04) < epsilon ? phi02 : phi12) : phi02 <= q[1] && q[1] <= phi12 : delta2 > pi ^ (lambda04 <= q[0] && q[0] <= lambda12)) {
      var q1 = cartesianScale(u, (-w + t) / uu);
      cartesianAddInPlace(q1, A5);
      return [q, spherical(q1)];
    }
  }
  function code(lambda, phi) {
    var r = smallRadius ? radius : pi - radius, code2 = 0;
    if (lambda < -r) code2 |= 1;
    else if (lambda > r) code2 |= 2;
    if (phi < -r) code2 |= 4;
    else if (phi > r) code2 |= 8;
    return code2;
  }
  return clip_default(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi, radius - pi]);
}

// node_modules/d3-geo/src/clip/line.js
function line_default(a, b, x06, y06, x12, y12) {
  var ax = a[0], ay = a[1], bx = b[0], by = b[1], t02 = 0, t12 = 1, dx = bx - ax, dy = by - ay, r;
  r = x06 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t02) return;
    if (r < t12) t12 = r;
  } else if (dx > 0) {
    if (r > t12) return;
    if (r > t02) t02 = r;
  }
  r = x12 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t12) return;
    if (r > t02) t02 = r;
  } else if (dx > 0) {
    if (r < t02) return;
    if (r < t12) t12 = r;
  }
  r = y06 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t02) return;
    if (r < t12) t12 = r;
  } else if (dy > 0) {
    if (r > t12) return;
    if (r > t02) t02 = r;
  }
  r = y12 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t12) return;
    if (r > t02) t02 = r;
  } else if (dy > 0) {
    if (r < t02) return;
    if (r < t12) t12 = r;
  }
  if (t02 > 0) a[0] = ax + t02 * dx, a[1] = ay + t02 * dy;
  if (t12 < 1) b[0] = ax + t12 * dx, b[1] = ay + t12 * dy;
  return true;
}

// node_modules/d3-geo/src/clip/rectangle.js
var clipMax = 1e9;
var clipMin = -clipMax;
function clipRectangle(x06, y06, x12, y12) {
  function visible(x, y) {
    return x06 <= x && x <= x12 && y06 <= y && y <= y12;
  }
  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do
        stream.point(a === 0 || a === 3 ? x06 : x12, a > 1 ? y12 : y06);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p, direction) {
    return abs(p[0] - x06) < epsilon ? direction > 0 ? 0 : 3 : abs(p[0] - x12) < epsilon ? direction > 0 ? 2 : 1 : abs(p[1] - y06) < epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
  }
  function compareIntersection2(a, b) {
    return comparePoint(a.x, b.x);
  }
  function comparePoint(a, b) {
    var ca = corner(a, 1), cb = corner(b, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
  }
  return function(stream) {
    var activeStream = stream, bufferStream = buffer_default(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
    var clipStream = {
      point,
      lineStart,
      lineEnd,
      polygonStart,
      polygonEnd
    };
    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }
    function polygonInside() {
      var winding = 0;
      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring2 = polygon[i], j = 1, m = ring2.length, point2 = ring2[0], a0, a1, b02 = point2[0], b12 = point2[1]; j < m; ++j) {
          a0 = b02, a1 = b12, point2 = ring2[j], b02 = point2[0], b12 = point2[1];
          if (a1 <= y12) {
            if (b12 > y12 && (b02 - a0) * (y12 - a1) > (b12 - a1) * (x06 - a0)) ++winding;
          } else {
            if (b12 <= y12 && (b02 - a0) * (y12 - a1) < (b12 - a1) * (x06 - a0)) --winding;
          }
        }
      }
      return winding;
    }
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge(segments)).length;
      if (cleanInside || visible2) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible2) {
          rejoin_default(segments, compareIntersection2, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint2;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }
    function lineEnd() {
      if (segments) {
        linePoint2(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }
    function linePoint2(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (line_default(a, b, x06, y06, x12, y12)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }
    return clipStream;
  };
}

// node_modules/d3-geo/src/clip/extent.js
function extent_default2() {
  var x06 = 0, y06 = 0, x12 = 960, y12 = 500, cache, cacheStream, clip;
  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = clipRectangle(x06, y06, x12, y12)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1], cache = cacheStream = null, clip) : [[x06, y06], [x12, y12]];
    }
  };
}

// node_modules/d3-geo/src/length.js
var lengthSum;
var lambda03;
var sinPhi02;
var cosPhi02;
var lengthStream = {
  sphere: noop,
  point: noop,
  lineStart: lengthLineStart,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop
};
function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = noop;
}
function lengthPointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  lambda03 = lambda, sinPhi02 = sin(phi), cosPhi02 = cos(phi);
  lengthStream.point = lengthPoint;
}
function lengthPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var sinPhi = sin(phi), cosPhi = cos(phi), delta = abs(lambda - lambda03), cosDelta = cos(delta), sinDelta = sin(delta), x = cosPhi * sinDelta, y = cosPhi02 * sinPhi - sinPhi02 * cosPhi * cosDelta, z = sinPhi02 * sinPhi + cosPhi02 * cosPhi * cosDelta;
  lengthSum.add(atan2(sqrt(x * x + y * y), z));
  lambda03 = lambda, sinPhi02 = sinPhi, cosPhi02 = cosPhi;
}
function length_default(object3) {
  lengthSum = new Adder();
  stream_default(object3, lengthStream);
  return +lengthSum;
}

// node_modules/d3-geo/src/distance.js
var coordinates = [null, null];
var object = { type: "LineString", coordinates };
function distance_default(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return length_default(object);
}

// node_modules/d3-geo/src/contains.js
var containsObjectType = {
  Feature: function(object3, point) {
    return containsGeometry(object3.geometry, point);
  },
  FeatureCollection: function(object3, point) {
    var features = object3.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};
var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object3, point) {
    return containsPoint(object3.coordinates, point);
  },
  MultiPoint: function(object3, point) {
    var coordinates2 = object3.coordinates, i = -1, n = coordinates2.length;
    while (++i < n) if (containsPoint(coordinates2[i], point)) return true;
    return false;
  },
  LineString: function(object3, point) {
    return containsLine(object3.coordinates, point);
  },
  MultiLineString: function(object3, point) {
    var coordinates2 = object3.coordinates, i = -1, n = coordinates2.length;
    while (++i < n) if (containsLine(coordinates2[i], point)) return true;
    return false;
  },
  Polygon: function(object3, point) {
    return containsPolygon(object3.coordinates, point);
  },
  MultiPolygon: function(object3, point) {
    var coordinates2 = object3.coordinates, i = -1, n = coordinates2.length;
    while (++i < n) if (containsPolygon(coordinates2[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object3, point) {
    var geometries = object3.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};
function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point) : false;
}
function containsPoint(coordinates2, point) {
  return distance_default(coordinates2, point) === 0;
}
function containsLine(coordinates2, point) {
  var ao, bo, ab;
  for (var i = 0, n = coordinates2.length; i < n; i++) {
    bo = distance_default(coordinates2[i], point);
    if (bo === 0) return true;
    if (i > 0) {
      ab = distance_default(coordinates2[i], coordinates2[i - 1]);
      if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < epsilon2 * ab)
        return true;
    }
    ao = bo;
  }
  return false;
}
function containsPolygon(coordinates2, point) {
  return !!polygonContains_default(coordinates2.map(ringRadians), pointRadians(point));
}
function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}
function pointRadians(point) {
  return [point[0] * radians, point[1] * radians];
}
function contains_default(object3, point) {
  return (object3 && containsObjectType.hasOwnProperty(object3.type) ? containsObjectType[object3.type] : containsGeometry)(object3, point);
}

// node_modules/d3-geo/src/graticule.js
function graticuleX(y06, y12, dy) {
  var y = range_default(y06, y12 - epsilon, dy).concat(y12);
  return function(x) {
    return y.map(function(y2) {
      return [x, y2];
    });
  };
}
function graticuleY(x06, x12, dx) {
  var x = range_default(x06, x12 - epsilon, dx).concat(x12);
  return function(y) {
    return x.map(function(x2) {
      return [x2, y];
    });
  };
}
function graticule() {
  var x12, x06, X13, X03, y12, y06, Y13, Y03, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
  function graticule2() {
    return { type: "MultiLineString", coordinates: lines() };
  }
  function lines() {
    return range_default(ceil(X03 / DX) * DX, X13, DX).map(X).concat(range_default(ceil(Y03 / DY) * DY, Y13, DY).map(Y)).concat(range_default(ceil(x06 / dx) * dx, x12, dx).filter(function(x2) {
      return abs(x2 % DX) > epsilon;
    }).map(x)).concat(range_default(ceil(y06 / dy) * dy, y12, dy).filter(function(y2) {
      return abs(y2 % DY) > epsilon;
    }).map(y));
  }
  graticule2.lines = function() {
    return lines().map(function(coordinates2) {
      return { type: "LineString", coordinates: coordinates2 };
    });
  };
  graticule2.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X03).concat(
          Y(Y13).slice(1),
          X(X13).reverse().slice(1),
          Y(Y03).reverse().slice(1)
        )
      ]
    };
  };
  graticule2.extent = function(_) {
    if (!arguments.length) return graticule2.extentMinor();
    return graticule2.extentMajor(_).extentMinor(_);
  };
  graticule2.extentMajor = function(_) {
    if (!arguments.length) return [[X03, Y03], [X13, Y13]];
    X03 = +_[0][0], X13 = +_[1][0];
    Y03 = +_[0][1], Y13 = +_[1][1];
    if (X03 > X13) _ = X03, X03 = X13, X13 = _;
    if (Y03 > Y13) _ = Y03, Y03 = Y13, Y13 = _;
    return graticule2.precision(precision);
  };
  graticule2.extentMinor = function(_) {
    if (!arguments.length) return [[x06, y06], [x12, y12]];
    x06 = +_[0][0], x12 = +_[1][0];
    y06 = +_[0][1], y12 = +_[1][1];
    if (x06 > x12) _ = x06, x06 = x12, x12 = _;
    if (y06 > y12) _ = y06, y06 = y12, y12 = _;
    return graticule2.precision(precision);
  };
  graticule2.step = function(_) {
    if (!arguments.length) return graticule2.stepMinor();
    return graticule2.stepMajor(_).stepMinor(_);
  };
  graticule2.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule2;
  };
  graticule2.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule2;
  };
  graticule2.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y06, y12, 90);
    y = graticuleY(x06, x12, precision);
    X = graticuleX(Y03, Y13, 90);
    Y = graticuleY(X03, X13, precision);
    return graticule2;
  };
  return graticule2.extentMajor([[-180, -90 + epsilon], [180, 90 - epsilon]]).extentMinor([[-180, -80 - epsilon], [180, 80 + epsilon]]);
}
function graticule10() {
  return graticule()();
}

// node_modules/d3-geo/src/interpolate.js
function interpolate_default(a, b) {
  var x06 = a[0] * radians, y06 = a[1] * radians, x12 = b[0] * radians, y12 = b[1] * radians, cy0 = cos(y06), sy0 = sin(y06), cy1 = cos(y12), sy1 = sin(y12), kx0 = cy0 * cos(x06), ky0 = cy0 * sin(x06), kx1 = cy1 * cos(x12), ky1 = cy1 * sin(x12), d = 2 * asin(sqrt(haversin(y12 - y06) + cy0 * cy1 * haversin(x12 - x06))), k = sin(d);
  var interpolate = d ? function(t) {
    var B2 = sin(t *= d) / k, A5 = sin(d - t) / k, x = A5 * kx0 + B2 * kx1, y = A5 * ky0 + B2 * ky1, z = A5 * sy0 + B2 * sy1;
    return [
      atan2(y, x) * degrees,
      atan2(z, sqrt(x * x + y * y)) * degrees
    ];
  } : function() {
    return [x06 * degrees, y06 * degrees];
  };
  interpolate.distance = d;
  return interpolate;
}

// node_modules/d3-geo/src/identity.js
var identity_default2 = (x) => x;

// node_modules/d3-geo/src/path/area.js
var areaSum2 = new Adder();
var areaRingSum2 = new Adder();
var x00;
var y00;
var x02;
var y02;
var areaStream2 = {
  point: noop,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: function() {
    areaStream2.lineStart = areaRingStart2;
    areaStream2.lineEnd = areaRingEnd2;
  },
  polygonEnd: function() {
    areaStream2.lineStart = areaStream2.lineEnd = areaStream2.point = noop;
    areaSum2.add(abs(areaRingSum2));
    areaRingSum2 = new Adder();
  },
  result: function() {
    var area = areaSum2 / 2;
    areaSum2 = new Adder();
    return area;
  }
};
function areaRingStart2() {
  areaStream2.point = areaPointFirst2;
}
function areaPointFirst2(x, y) {
  areaStream2.point = areaPoint2;
  x00 = x02 = x, y00 = y02 = y;
}
function areaPoint2(x, y) {
  areaRingSum2.add(y02 * x - x02 * y);
  x02 = x, y02 = y;
}
function areaRingEnd2() {
  areaPoint2(x00, y00);
}
var area_default2 = areaStream2;

// node_modules/d3-geo/src/path/bounds.js
var x03 = Infinity;
var y03 = x03;
var x1 = -x03;
var y1 = x1;
var boundsStream2 = {
  point: boundsPoint2,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop,
  result: function() {
    var bounds = [[x03, y03], [x1, y1]];
    x1 = y1 = -(y03 = x03 = Infinity);
    return bounds;
  }
};
function boundsPoint2(x, y) {
  if (x < x03) x03 = x;
  if (x > x1) x1 = x;
  if (y < y03) y03 = y;
  if (y > y1) y1 = y;
}
var bounds_default2 = boundsStream2;

// node_modules/d3-geo/src/path/centroid.js
var X02 = 0;
var Y02 = 0;
var Z02 = 0;
var X12 = 0;
var Y12 = 0;
var Z12 = 0;
var X22 = 0;
var Y22 = 0;
var Z22 = 0;
var x002;
var y002;
var x04;
var y04;
var centroidStream2 = {
  point: centroidPoint2,
  lineStart: centroidLineStart2,
  lineEnd: centroidLineEnd2,
  polygonStart: function() {
    centroidStream2.lineStart = centroidRingStart2;
    centroidStream2.lineEnd = centroidRingEnd2;
  },
  polygonEnd: function() {
    centroidStream2.point = centroidPoint2;
    centroidStream2.lineStart = centroidLineStart2;
    centroidStream2.lineEnd = centroidLineEnd2;
  },
  result: function() {
    var centroid = Z22 ? [X22 / Z22, Y22 / Z22] : Z12 ? [X12 / Z12, Y12 / Z12] : Z02 ? [X02 / Z02, Y02 / Z02] : [NaN, NaN];
    X02 = Y02 = Z02 = X12 = Y12 = Z12 = X22 = Y22 = Z22 = 0;
    return centroid;
  }
};
function centroidPoint2(x, y) {
  X02 += x;
  Y02 += y;
  ++Z02;
}
function centroidLineStart2() {
  centroidStream2.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x, y) {
  centroidStream2.point = centroidPointLine;
  centroidPoint2(x04 = x, y04 = y);
}
function centroidPointLine(x, y) {
  var dx = x - x04, dy = y - y04, z = sqrt(dx * dx + dy * dy);
  X12 += z * (x04 + x) / 2;
  Y12 += z * (y04 + y) / 2;
  Z12 += z;
  centroidPoint2(x04 = x, y04 = y);
}
function centroidLineEnd2() {
  centroidStream2.point = centroidPoint2;
}
function centroidRingStart2() {
  centroidStream2.point = centroidPointFirstRing;
}
function centroidRingEnd2() {
  centroidPointRing(x002, y002);
}
function centroidPointFirstRing(x, y) {
  centroidStream2.point = centroidPointRing;
  centroidPoint2(x002 = x04 = x, y002 = y04 = y);
}
function centroidPointRing(x, y) {
  var dx = x - x04, dy = y - y04, z = sqrt(dx * dx + dy * dy);
  X12 += z * (x04 + x) / 2;
  Y12 += z * (y04 + y) / 2;
  Z12 += z;
  z = y04 * x - x04 * y;
  X22 += z * (x04 + x);
  Y22 += z * (y04 + y);
  Z22 += z * 3;
  centroidPoint2(x04 = x, y04 = y);
}
var centroid_default2 = centroidStream2;

// node_modules/d3-geo/src/path/context.js
function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, tau);
        break;
      }
    }
  },
  result: noop
};

// node_modules/d3-geo/src/path/measure.js
var lengthSum2 = new Adder();
var lengthRing;
var x003;
var y003;
var x05;
var y05;
var lengthStream2 = {
  point: noop,
  lineStart: function() {
    lengthStream2.point = lengthPointFirst2;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint2(x003, y003);
    lengthStream2.point = noop;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum2;
    lengthSum2 = new Adder();
    return length;
  }
};
function lengthPointFirst2(x, y) {
  lengthStream2.point = lengthPoint2;
  x003 = x05 = x, y003 = y05 = y;
}
function lengthPoint2(x, y) {
  x05 -= x, y05 -= y;
  lengthSum2.add(sqrt(x05 * x05 + y05 * y05));
  x05 = x, y05 = y;
}
var measure_default = lengthStream2;

// node_modules/d3-geo/src/path/string.js
function PathString() {
  this._string = [];
}
PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};
function circle(radius) {
  return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

// node_modules/d3-geo/src/path/index.js
function path_default(projection2, context) {
  var pointRadius = 4.5, projectionStream, contextStream;
  function path(object3) {
    if (object3) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      stream_default(object3, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path.area = function(object3) {
    stream_default(object3, projectionStream(area_default2));
    return area_default2.result();
  };
  path.measure = function(object3) {
    stream_default(object3, projectionStream(measure_default));
    return measure_default.result();
  };
  path.bounds = function(object3) {
    stream_default(object3, projectionStream(bounds_default2));
    return bounds_default2.result();
  };
  path.centroid = function(object3) {
    stream_default(object3, projectionStream(centroid_default2));
    return centroid_default2.result();
  };
  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection2 = null, identity_default2) : (projection2 = _).stream, path) : projection2;
  };
  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new PathString()) : new PathContext(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };
  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };
  return path.projection(projection2).context(context);
}

// node_modules/d3-geo/src/transform.js
function transform_default(methods) {
  return {
    stream: transformer(methods)
  };
}
function transformer(methods) {
  return function(stream) {
    var s = new TransformStream();
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}
function TransformStream() {
}
TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) {
    this.stream.point(x, y);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};

// node_modules/d3-geo/src/projection/fit.js
function fit(projection2, fitBounds, object3) {
  var clip = projection2.clipExtent && projection2.clipExtent();
  projection2.scale(150).translate([0, 0]);
  if (clip != null) projection2.clipExtent(null);
  stream_default(object3, projection2.stream(bounds_default2));
  fitBounds(bounds_default2.result());
  if (clip != null) projection2.clipExtent(clip);
  return projection2;
}
function fitExtent(projection2, extent, object3) {
  return fit(projection2, function(b) {
    var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k).translate([x, y]);
  }, object3);
}
function fitSize(projection2, size, object3) {
  return fitExtent(projection2, [[0, 0], size], object3);
}
function fitWidth(projection2, width, object3) {
  return fit(projection2, function(b) {
    var w = +width, k = w / (b[1][0] - b[0][0]), x = (w - k * (b[1][0] + b[0][0])) / 2, y = -k * b[0][1];
    projection2.scale(150 * k).translate([x, y]);
  }, object3);
}
function fitHeight(projection2, height, object3) {
  return fit(projection2, function(b) {
    var h = +height, k = h / (b[1][1] - b[0][1]), x = -k * b[0][0], y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k).translate([x, y]);
  }, object3);
}

// node_modules/d3-geo/src/projection/resample.js
var maxDepth = 16;
var cosMinDistance = cos(30 * radians);
function resample_default(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
}
function resampleNone(project) {
  return transformer({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}
function resample(project, delta2) {
  function resampleLineTo(x06, y06, lambda04, a0, b02, c0, x12, y12, lambda12, a1, b12, c1, depth, stream) {
    var dx = x12 - x06, dy = y12 - y06, d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1, b = b02 + b12, c = c0 + c1, m = sqrt(a * a + b * b + c * c), phi2 = asin(c /= m), lambda22 = abs(abs(c) - 1) < epsilon || abs(lambda04 - lambda12) < epsilon ? (lambda04 + lambda12) / 2 : atan2(b, a), p = project(lambda22, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x06, dy2 = y2 - y06, dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b02 * b12 + c0 * c1 < cosMinDistance) {
        resampleLineTo(x06, y06, lambda04, a0, b02, c0, x2, y2, lambda22, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda22, a, b, c, x12, y12, lambda12, a1, b12, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda004, x004, y004, a00, b00, c00, lambda04, x06, y06, a0, b02, c0;
    var resampleStream = {
      point,
      lineStart,
      lineEnd,
      polygonStart: function() {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function() {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }
    function lineStart() {
      x06 = NaN;
      resampleStream.point = linePoint2;
      stream.lineStart();
    }
    function linePoint2(lambda, phi) {
      var c = cartesian([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x06, y06, lambda04, a0, b02, c0, x06 = p[0], y06 = p[1], lambda04 = lambda, a0 = c[0], b02 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x06, y06);
    }
    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi) {
      linePoint2(lambda004 = lambda, phi), x004 = x06, y004 = y06, a00 = a0, b00 = b02, c00 = c0;
      resampleStream.point = linePoint2;
    }
    function ringEnd() {
      resampleLineTo(x06, y06, lambda04, a0, b02, c0, x004, y004, lambda004, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}

// node_modules/d3-geo/src/projection/index.js
var transformRadians = transformer({
  point: function(x, y) {
    this.stream.point(x * radians, y * radians);
  }
});
function transformRotate(rotate) {
  return transformer({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function scaleTranslate(k, dx, dy, sx, sy) {
  function transform2(x, y) {
    x *= sx;
    y *= sy;
    return [dx + k * x, dy - k * y];
  }
  transform2.invert = function(x, y) {
    return [(x - dx) / k * sx, (dy - y) / k * sy];
  };
  return transform2;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
  if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
  var cosAlpha = cos(alpha), sinAlpha = sin(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform2(x, y) {
    x *= sx;
    y *= sy;
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform2.invert = function(x, y) {
    return [sx * (ai * x - bi * y + ci), sy * (fi - bi * x - ai * y)];
  };
  return transform2;
}
function projection(project) {
  return projectionMutator(function() {
    return project;
  })();
}
function projectionMutator(projectAt) {
  var project, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = antimeridian_default, x06 = null, y06, x12, y12, postclip = identity_default2, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
  function projection2(point) {
    return projectRotateTransform(point[0] * radians, point[1] * radians);
  }
  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * degrees, point[1] * degrees];
  }
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };
  projection2.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = void 0, reset()) : preclip;
  };
  projection2.postclip = function(_) {
    return arguments.length ? (postclip = _, x06 = y06 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? circle_default2(theta = _ * radians) : (theta = null, antimeridian_default), reset()) : theta * degrees;
  };
  projection2.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x06 = y06 = x12 = y12 = null, identity_default2) : clipRectangle(x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  projection2.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };
  projection2.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };
  projection2.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees, phi * degrees];
  };
  projection2.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees, deltaPhi * degrees, deltaGamma * degrees];
  };
  projection2.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians, recenter()) : alpha * degrees;
  };
  projection2.reflectX = function(_) {
    return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
  };
  projection2.reflectY = function(_) {
    return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
  };
  projection2.precision = function(_) {
    return arguments.length ? (projectResample = resample_default(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
  };
  projection2.fitExtent = function(extent, object3) {
    return fitExtent(projection2, extent, object3);
  };
  projection2.fitSize = function(size, object3) {
    return fitSize(projection2, size, object3);
  };
  projection2.fitWidth = function(width, object3) {
    return fitWidth(projection2, width, object3);
  };
  projection2.fitHeight = function(height, object3) {
    return fitHeight(projection2, height, object3);
  };
  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform2 = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
    rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = compose_default(project, transform2);
    projectRotateTransform = compose_default(rotate, projectTransform);
    projectResample = resample_default(projectTransform, delta2);
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection2;
  }
  return function() {
    project = projectAt.apply(this, arguments);
    projection2.invert = project.invert && invert;
    return recenter();
  };
}

// node_modules/d3-geo/src/projection/conic.js
function conicProjection(projectAt) {
  var phi02 = 0, phi12 = pi / 3, m = projectionMutator(projectAt), p = m(phi02, phi12);
  p.parallels = function(_) {
    return arguments.length ? m(phi02 = _[0] * radians, phi12 = _[1] * radians) : [phi02 * degrees, phi12 * degrees];
  };
  return p;
}

// node_modules/d3-geo/src/projection/cylindricalEqualArea.js
function cylindricalEqualAreaRaw(phi02) {
  var cosPhi03 = cos(phi02);
  function forward(lambda, phi) {
    return [lambda * cosPhi03, sin(phi) / cosPhi03];
  }
  forward.invert = function(x, y) {
    return [x / cosPhi03, asin(y * cosPhi03)];
  };
  return forward;
}

// node_modules/d3-geo/src/projection/conicEqualArea.js
function conicEqualAreaRaw(y06, y12) {
  var sy0 = sin(y06), n = (sy0 + sin(y12)) / 2;
  if (abs(n) < epsilon) return cylindricalEqualAreaRaw(y06);
  var c = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c) / n;
  function project(x, y) {
    var r = sqrt(c - 2 * n * sin(y)) / n;
    return [r * sin(x *= n), r0 - r * cos(x)];
  }
  project.invert = function(x, y) {
    var r0y = r0 - y, l = atan2(x, abs(r0y)) * sign(r0y);
    if (r0y * n < 0)
      l -= pi * sign(x) * sign(r0y);
    return [l / n, asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };
  return project;
}
function conicEqualArea_default() {
  return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
}

// node_modules/d3-geo/src/projection/albers.js
function albers_default() {
  return conicEqualArea_default().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}

// node_modules/d3-geo/src/projection/albersUsa.js
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) {
      var i = -1;
      while (++i < n) streams[i].point(x, y);
    },
    sphere: function() {
      var i = -1;
      while (++i < n) streams[i].sphere();
    },
    lineStart: function() {
      var i = -1;
      while (++i < n) streams[i].lineStart();
    },
    lineEnd: function() {
      var i = -1;
      while (++i < n) streams[i].lineEnd();
    },
    polygonStart: function() {
      var i = -1;
      while (++i < n) streams[i].polygonStart();
    },
    polygonEnd: function() {
      var i = -1;
      while (++i < n) streams[i].polygonEnd();
    }
  };
}
function albersUsa_default() {
  var cache, cacheStream, lower48 = albers_default(), lower48Point, alaska = conicEqualArea_default().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, hawaii = conicEqualArea_default().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, point, pointStream = { point: function(x, y) {
    point = [x, y];
  } };
  function albersUsa(coordinates2) {
    var x = coordinates2[0], y = coordinates2[1];
    return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point);
  }
  albersUsa.invert = function(coordinates2) {
    var k = lower48.scale(), t = lower48.translate(), x = (coordinates2[0] - t[0]) / k, y = (coordinates2[1] - t[1]) / k;
    return (y >= 0.12 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates2);
  };
  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };
  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };
  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };
  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];
    lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream);
    alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + epsilon, y + 0.12 * k + epsilon], [x - 0.214 * k - epsilon, y + 0.234 * k - epsilon]]).stream(pointStream);
    hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + epsilon, y + 0.166 * k + epsilon], [x - 0.115 * k - epsilon, y + 0.234 * k - epsilon]]).stream(pointStream);
    return reset();
  };
  albersUsa.fitExtent = function(extent, object3) {
    return fitExtent(albersUsa, extent, object3);
  };
  albersUsa.fitSize = function(size, object3) {
    return fitSize(albersUsa, size, object3);
  };
  albersUsa.fitWidth = function(width, object3) {
    return fitWidth(albersUsa, width, object3);
  };
  albersUsa.fitHeight = function(height, object3) {
    return fitHeight(albersUsa, height, object3);
  };
  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }
  return albersUsa.scale(1070);
}

// node_modules/d3-geo/src/projection/azimuthal.js
function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = cos(x), cy = cos(y), k = scale(cx * cy);
    if (k === Infinity) return [2, 0];
    return [
      k * cy * sin(x),
      k * sin(y)
    ];
  };
}
function azimuthalInvert(angle2) {
  return function(x, y) {
    var z = sqrt(x * x + y * y), c = angle2(z), sc = sin(c), cc = cos(c);
    return [
      atan2(x * sc, z * cc),
      asin(z && y * sc / z)
    ];
  };
}

// node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
  return sqrt(2 / (1 + cxcy));
});
azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
  return 2 * asin(z / 2);
});
function azimuthalEqualArea_default() {
  return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
}

// node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
  return (c = acos(c)) && c / sin(c);
});
azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
  return z;
});
function azimuthalEquidistant_default() {
  return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
}

// node_modules/d3-geo/src/projection/mercator.js
function mercatorRaw(lambda, phi) {
  return [lambda, log(tan((halfPi + phi) / 2))];
}
mercatorRaw.invert = function(x, y) {
  return [x, 2 * atan(exp(y)) - halfPi];
};
function mercator_default() {
  return mercatorProjection(mercatorRaw).scale(961 / tau);
}
function mercatorProjection(project) {
  var m = projection(project), center = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x06 = null, y06, x12, y12;
  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };
  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };
  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };
  m.clipExtent = function(_) {
    return arguments.length ? (_ == null ? x06 = y06 = x12 = y12 = null : (x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reclip()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  function reclip() {
    var k = pi * scale(), t = m(rotation_default(m.rotate()).invert([0, 0]));
    return clipExtent(x06 == null ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw ? [[Math.max(t[0] - k, x06), y06], [Math.min(t[0] + k, x12), y12]] : [[x06, Math.max(t[1] - k, y06)], [x12, Math.min(t[1] + k, y12)]]);
  }
  return reclip();
}

// node_modules/d3-geo/src/projection/conicConformal.js
function tany(y) {
  return tan((halfPi + y) / 2);
}
function conicConformalRaw(y06, y12) {
  var cy0 = cos(y06), n = y06 === y12 ? sin(y06) : log(cy0 / cos(y12)) / log(tany(y12) / tany(y06)), f = cy0 * pow(tany(y06), n) / n;
  if (!n) return mercatorRaw;
  function project(x, y) {
    if (f > 0) {
      if (y < -halfPi + epsilon) y = -halfPi + epsilon;
    } else {
      if (y > halfPi - epsilon) y = halfPi - epsilon;
    }
    var r = f / pow(tany(y), n);
    return [r * sin(n * x), f - r * cos(n * x)];
  }
  project.invert = function(x, y) {
    var fy = f - y, r = sign(n) * sqrt(x * x + fy * fy), l = atan2(x, abs(fy)) * sign(fy);
    if (fy * n < 0)
      l -= pi * sign(x) * sign(fy);
    return [l / n, 2 * atan(pow(f / r, 1 / n)) - halfPi];
  };
  return project;
}
function conicConformal_default() {
  return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
}

// node_modules/d3-geo/src/projection/equirectangular.js
function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}
equirectangularRaw.invert = equirectangularRaw;
function equirectangular_default() {
  return projection(equirectangularRaw).scale(152.63);
}

// node_modules/d3-geo/src/projection/conicEquidistant.js
function conicEquidistantRaw(y06, y12) {
  var cy0 = cos(y06), n = y06 === y12 ? sin(y06) : (cy0 - cos(y12)) / (y12 - y06), g = cy0 / n + y06;
  if (abs(n) < epsilon) return equirectangularRaw;
  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * sin(nx), g - gy * cos(nx)];
  }
  project.invert = function(x, y) {
    var gy = g - y, l = atan2(x, abs(gy)) * sign(gy);
    if (gy * n < 0)
      l -= pi * sign(x) * sign(gy);
    return [l / n, g - sign(n) * sqrt(x * x + gy * gy)];
  };
  return project;
}
function conicEquidistant_default() {
  return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
}

// node_modules/d3-geo/src/projection/equalEarth.js
var A1 = 1.340264;
var A2 = -0.081106;
var A3 = 893e-6;
var A4 = 3796e-6;
var M = sqrt(3) / 2;
var iterations = 12;
function equalEarthRaw(lambda, phi) {
  var l = asin(M * sin(phi)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}
equalEarthRaw.invert = function(x, y) {
  var l = y, l2 = l * l, l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (abs(delta) < epsilon2) break;
  }
  return [
    M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos(l),
    asin(sin(l) / M)
  ];
};
function equalEarth_default() {
  return projection(equalEarthRaw).scale(177.158);
}

// node_modules/d3-geo/src/projection/gnomonic.js
function gnomonicRaw(x, y) {
  var cy = cos(y), k = cos(x) * cy;
  return [cy * sin(x) / k, sin(y) / k];
}
gnomonicRaw.invert = azimuthalInvert(atan);
function gnomonic_default() {
  return projection(gnomonicRaw).scale(144.049).clipAngle(60);
}

// node_modules/d3-geo/src/projection/identity.js
function identity_default3() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, alpha = 0, ca, sa, x06 = null, y06, x12, y12, kx = 1, ky = 1, transform2 = transformer({
    point: function(x, y) {
      var p = projection2([x, y]);
      this.stream.point(p[0], p[1]);
    }
  }), postclip = identity_default2, cache, cacheStream;
  function reset() {
    kx = k * sx;
    ky = k * sy;
    cache = cacheStream = null;
    return projection2;
  }
  function projection2(p) {
    var x = p[0] * kx, y = p[1] * ky;
    if (alpha) {
      var t = y * ca - x * sa;
      x = x * ca + y * sa;
      y = t;
    }
    return [x + tx, y + ty];
  }
  projection2.invert = function(p) {
    var x = p[0] - tx, y = p[1] - ty;
    if (alpha) {
      var t = y * ca + x * sa;
      x = x * ca - y * sa;
      y = t;
    }
    return [x / kx, y / ky];
  };
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transform2(postclip(cacheStream = stream));
  };
  projection2.postclip = function(_) {
    return arguments.length ? (postclip = _, x06 = y06 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x06 = y06 = x12 = y12 = null, identity_default2) : clipRectangle(x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  projection2.scale = function(_) {
    return arguments.length ? (k = +_, reset()) : k;
  };
  projection2.translate = function(_) {
    return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
  };
  projection2.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians, sa = sin(alpha), ca = cos(alpha), reset()) : alpha * degrees;
  };
  projection2.reflectX = function(_) {
    return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
  };
  projection2.reflectY = function(_) {
    return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
  };
  projection2.fitExtent = function(extent, object3) {
    return fitExtent(projection2, extent, object3);
  };
  projection2.fitSize = function(size, object3) {
    return fitSize(projection2, size, object3);
  };
  projection2.fitWidth = function(width, object3) {
    return fitWidth(projection2, width, object3);
  };
  projection2.fitHeight = function(height, object3) {
    return fitHeight(projection2, height, object3);
  };
  return projection2;
}

// node_modules/d3-geo/src/projection/naturalEarth1.js
function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi2 - 1529e-6 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 5916e-6 * phi4)))
  ];
}
naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 5916e-6 * phi4))) - y) / (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 5916e-6 * 11 * phi4)));
  } while (abs(delta) > epsilon && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (3971e-6 - 1529e-6 * phi2)))),
    phi
  ];
};
function naturalEarth1_default() {
  return projection(naturalEarth1Raw).scale(175.295);
}

// node_modules/d3-geo/src/projection/orthographic.js
function orthographicRaw(x, y) {
  return [cos(y) * sin(x), sin(y)];
}
orthographicRaw.invert = azimuthalInvert(asin);
function orthographic_default() {
  return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon);
}

// node_modules/d3-geo/src/projection/stereographic.js
function stereographicRaw(x, y) {
  var cy = cos(y), k = 1 + cos(x) * cy;
  return [cy * sin(x) / k, sin(y) / k];
}
stereographicRaw.invert = azimuthalInvert(function(z) {
  return 2 * atan(z);
});
function stereographic_default() {
  return projection(stereographicRaw).scale(250).clipAngle(142);
}

// node_modules/d3-geo/src/projection/transverseMercator.js
function transverseMercatorRaw(lambda, phi) {
  return [log(tan((halfPi + phi) / 2)), -lambda];
}
transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * atan(exp(x)) - halfPi];
};
function transverseMercator_default() {
  var m = mercatorProjection(transverseMercatorRaw), center = m.center, rotate = m.rotate;
  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };
  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };
  return rotate([0, 0, 90]).scale(159.155);
}

// node_modules/topojson-client/src/identity.js
function identity_default4(x) {
  return x;
}

// node_modules/topojson-client/src/transform.js
function transform_default2(transform2) {
  if (transform2 == null) return identity_default4;
  var x06, y06, kx = transform2.scale[0], ky = transform2.scale[1], dx = transform2.translate[0], dy = transform2.translate[1];
  return function(input, i) {
    if (!i) x06 = y06 = 0;
    var j = 2, n = input.length, output = new Array(n);
    output[0] = (x06 += input[0]) * kx + dx;
    output[1] = (y06 += input[1]) * ky + dy;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
}

// node_modules/topojson-client/src/reverse.js
function reverse_default(array2, n) {
  var t, j = array2.length, i = j - n;
  while (i < --j) t = array2[i], array2[i++] = array2[j], array2[j] = t;
}

// node_modules/topojson-client/src/feature.js
function feature_default(topology, o) {
  if (typeof o === "string") o = topology.objects[o];
  return o.type === "GeometryCollection" ? { type: "FeatureCollection", features: o.geometries.map(function(o2) {
    return feature(topology, o2);
  }) } : feature(topology, o);
}
function feature(topology, o) {
  var id2 = o.id, bbox = o.bbox, properties = o.properties == null ? {} : o.properties, geometry = object2(topology, o);
  return id2 == null && bbox == null ? { type: "Feature", properties, geometry } : bbox == null ? { type: "Feature", id: id2, properties, geometry } : { type: "Feature", id: id2, bbox, properties, geometry };
}
function object2(topology, o) {
  var transformPoint = transform_default2(topology.transform), arcs = topology.arcs;
  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0) reverse_default(points, n);
  }
  function point(p) {
    return transformPoint(p);
  }
  function line(arcs2) {
    var points = [];
    for (var i = 0, n = arcs2.length; i < n; ++i) arc(arcs2[i], points);
    if (points.length < 2) points.push(points[0]);
    return points;
  }
  function ring(arcs2) {
    var points = line(arcs2);
    while (points.length < 4) points.push(points[0]);
    return points;
  }
  function polygon(arcs2) {
    return arcs2.map(ring);
  }
  function geometry(o2) {
    var type = o2.type, coordinates2;
    switch (type) {
      case "GeometryCollection":
        return { type, geometries: o2.geometries.map(geometry) };
      case "Point":
        coordinates2 = point(o2.coordinates);
        break;
      case "MultiPoint":
        coordinates2 = o2.coordinates.map(point);
        break;
      case "LineString":
        coordinates2 = line(o2.arcs);
        break;
      case "MultiLineString":
        coordinates2 = o2.arcs.map(line);
        break;
      case "Polygon":
        coordinates2 = polygon(o2.arcs);
        break;
      case "MultiPolygon":
        coordinates2 = o2.arcs.map(polygon);
        break;
      default:
        return null;
    }
    return { type, coordinates: coordinates2 };
  }
  return geometry(o);
}

// node_modules/topojson-client/src/stitch.js
function stitch_default(topology, arcs) {
  var stitchedArcs = {}, fragmentByStart = {}, fragmentByEnd = {}, fragments = [], emptyIndex = -1;
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });
  arcs.forEach(function(i) {
    var e = ends(i), start2 = e[0], end = e[1], f, g;
    if (f = fragmentByEnd[start2]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start2;
      if (g = fragmentByEnd[start2]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start2] = fragmentByEnd[f.end = end] = f;
    }
  });
  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p02 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) {
      p1[0] += dp[0], p1[1] += dp[1];
    });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p02] : [p02, p1];
  }
  function flush(fragmentByEnd2, fragmentByStart2) {
    for (var k in fragmentByEnd2) {
      var f = fragmentByEnd2[k];
      delete fragmentByStart2[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) {
        stitchedArcs[i < 0 ? ~i : i] = 1;
      });
      fragments.push(f);
    }
  }
  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) {
    if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]);
  });
  return fragments;
}

// node_modules/topojson-client/src/mesh.js
function mesh_default(topology) {
  return object2(topology, meshArcs.apply(this, arguments));
}
function meshArcs(topology, object3, filter3) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object3, filter3);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return { type: "MultiLineString", arcs: stitch_default(topology, arcs) };
}
function extractArcs(topology, object3, filter3) {
  var arcs = [], geomsByArc = [], geom;
  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({ i, g: geom });
  }
  function extract1(arcs2) {
    arcs2.forEach(extract0);
  }
  function extract2(arcs2) {
    arcs2.forEach(extract1);
  }
  function extract3(arcs2) {
    arcs2.forEach(extract2);
  }
  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection":
        o.geometries.forEach(geometry);
        break;
      case "LineString":
        extract1(o.arcs);
        break;
      case "MultiLineString":
      case "Polygon":
        extract2(o.arcs);
        break;
      case "MultiPolygon":
        extract3(o.arcs);
        break;
    }
  }
  geometry(object3);
  geomsByArc.forEach(filter3 == null ? function(geoms) {
    arcs.push(geoms[0].i);
  } : function(geoms) {
    if (filter3(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i);
  });
  return arcs;
}

// node_modules/d3-dispatch/src/dispatch.js
var noop2 = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set2(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set2(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};
function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set2(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop2, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name, value: callback });
  return type;
}
var dispatch_default = dispatch;

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group2[i]) && (subnode = select.call(node, node.__data__, i, group2))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array_default(x) {
  return typeof x === "object" && "length" in x ? x : Array.from(x);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    var group2 = select.apply(this, arguments);
    return group2 == null ? [] : array_default(group2);
  };
}
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        subgroups.push(select.call(node, node.__data__, i, group2));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter2 = Array.prototype.filter;
function children() {
  return this.children;
}
function childrenFilter(match) {
  return function() {
    return filter2.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group2[i]) && match.call(node, node.__data__, i, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default3(x) {
  return function() {
    return x;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group2, enter, update, exit, data) {
  var i = 0, node, groupLength = group2.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group2[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group2[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group2, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group2.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group2[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group2) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group2[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups2 = this._groups;
  if (typeof value !== "function") value = constant_default3(value);
  for (var m = groups2.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group2 = groups2[j], groupLength = group2.length, data = array_default(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group2, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default2(selection2) {
  if (!(selection2 instanceof Selection)) throw new Error("invalid merge");
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge2[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups2 = this._groups, j = -1, m = groups2.length; ++j < m; ) {
    for (var group2 = groups2[j], i = group2.length - 1, next = group2[i], node; --i >= 0; ) {
      if (node = group2[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups2 = this._groups, m = groups2.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups2 = this._groups, j = 0, m = groups2.length; j < m; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length; i < n; ++i) {
      var node = group2[i];
      if (node) return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this) ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups2 = this._groups, j = 0, m = groups2.length; j < m; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length, node; i < n; ++i) {
      if (node = group2[i]) callback.call(node, node.__data__, i, group2);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function dispatch_default2(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups2 = this._groups, j = 0, m = groups2.length; j < m; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length, node; i < n; ++i) {
      if (node = group2[i]) yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups2, parents) {
  this._groups = groups2;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default2,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/local.js
var nextId = 0;
function local() {
  return new Local();
}
function Local() {
  this._ = "@" + (++nextId).toString(36);
}
Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id2 = this._;
    while (!(id2 in node)) if (!(node = node.parentNode)) return;
    return node[id2];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-drag/src/noevent.js
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, true);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, true);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, true);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}

// node_modules/d3-drag/src/event.js
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x,
  y,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x, enumerable: true, configurable: true },
    y: { value: y, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s = max2 - min2, l = (max2 + min2) / 2;
  if (s) {
    if (r === max2) h = (g - b) / s + (g < b) * 6;
    else if (g === max2) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-color/src/math.js
var radians2 = Math.PI / 180;
var degrees2 = 180 / Math.PI;

// node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y;
  else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new Rgb(
      lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.033454 * z),
      lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x) {
  return 255 * (x <= 31308e-7 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * degrees2;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}
function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * radians2;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), h = s ? Math.atan2(k, bl) * degrees2 - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians2, l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh2 = Math.cos(h), sinh2 = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh2 + B * sinh2)),
      255 * (l + a * (C * cosh2 + D * sinh2)),
      255 * (l + a * (E * cosh2)),
      this.opacity
    );
  }
}));

// node_modules/d3-interpolate/src/basis.js
function basis(t12, v0, v1, v2, v3) {
  var t22 = t12 * t12, t32 = t22 * t12;
  return ((1 - 3 * t12 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t12 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default5 = (x) => () => x;

// node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default5(isNaN(a) ? b : a);
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant_default5(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default5(isNaN(a) ? b : a);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/number.js
function number_default2(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default2(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees3 = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees3,
    skewX: Math.atan(skewX) * degrees3,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default2(xa, xb) }, { i: i - 2, x: number_default2(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;
      else if (b - a > 180) a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default2(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default2(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default2(xa, xb) }, { i: i - 2, x: number_default2(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon22 = 1e-12;
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p02, p1) {
    var ux0 = p02[0], uy0 = p02[1], w0 = p02[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon22) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b02 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b12 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b02 * b02 + 1) - b02), r1 = Math.log(Math.sqrt(b12 * b12 + 1) - b12);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start2, end) {
    var h = hue2((start2 = hsl(start2)).h, (end = hsl(end)).h), s = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.h = h(t);
      start2.s = s(t);
      start2.l = l(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  };
}
var hsl_default = hsl2(hue);
var hslLong = hsl2(nogamma);

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end) {
    var h = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c = nogamma(start2.c, end.c), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.h = h(t);
      start2.c = c(t);
      start2.l = l(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y) {
    y = +y;
    function cubehelix3(start2, end) {
      var h = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.h = h(t);
        start2.s = s(t);
        start2.l = l(Math.pow(t, y));
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t02, t12 = taskHead, t22, time = Infinity;
  while (t12) {
    if (t12._call) {
      if (time > t12._time) time = t12._time;
      t02 = t12, t12 = t12._next;
    } else {
      t22 = t12._next, t12._next = null;
      t12 = t02 ? t02._next = t22 : taskHead = t22;
    }
  }
  taskTail = t02;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index2, group2, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index: index2,
    // For context during callback.
    group: group2,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set3(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2) delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set3(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set3(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set3(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default2(a, b) {
  var c;
  return (typeof b === "number" ? number_default2 : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default2;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t02, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t02 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t02;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t02, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t02 = (i0 = i) && attrInterpolate(name, i);
    return t02;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set3(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set3(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set3(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set3(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group2[i]) && match.call(node, node.__data__, i, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default3(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge2[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set3;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group2[i]) && (subnode = select.call(node, node.__data__, i, group2))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        for (var children2 = select.call(node, node.__data__, i, group2), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set3(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default2;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t02, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t02 = (i0 = i) && textInterpolate(i);
    return t02;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups2 = this._groups, m = groups2.length, j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group2, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups2, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0) resolve();
    } };
    that.each(function() {
      var schedule = set3(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0) resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups2, parents, name, id2) {
  this._groups = groups2;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default3,
  filter: filter_default2,
  merge: merge_default3,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-ease/src/poly.js
var exponent = 3;
var polyIn = function custom(e) {
  e = +e;
  function polyIn2(t) {
    return Math.pow(t, e);
  }
  polyIn2.exponent = custom;
  return polyIn2;
}(exponent);
var polyOut = function custom2(e) {
  e = +e;
  function polyOut2(t) {
    return 1 - Math.pow(1 - t, e);
  }
  polyOut2.exponent = custom2;
  return polyOut2;
}(exponent);
var polyInOut = function custom3(e) {
  e = +e;
  function polyInOut2(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }
  polyInOut2.exponent = custom3;
  return polyInOut2;
}(exponent);

// node_modules/d3-ease/src/sin.js
var pi2 = Math.PI;
var halfPi2 = pi2 / 2;

// node_modules/d3-ease/src/math.js
function tpmt(x) {
  return (Math.pow(2, -10 * x) - 9765625e-10) * 1.0009775171065494;
}

// node_modules/d3-ease/src/bounce.js
var b1 = 4 / 11;
var b2 = 6 / 11;
var b3 = 8 / 11;
var b4 = 3 / 4;
var b5 = 9 / 11;
var b6 = 10 / 11;
var b7 = 15 / 16;
var b8 = 21 / 22;
var b9 = 63 / 64;
var b0 = 1 / b1 / b1;

// node_modules/d3-ease/src/back.js
var overshoot = 1.70158;
var backIn = function custom4(s) {
  s = +s;
  function backIn2(t) {
    return (t = +t) * t * (s * (t - 1) + t);
  }
  backIn2.overshoot = custom4;
  return backIn2;
}(overshoot);
var backOut = function custom5(s) {
  s = +s;
  function backOut2(t) {
    return --t * t * ((t + 1) * s + t) + 1;
  }
  backOut2.overshoot = custom5;
  return backOut2;
}(overshoot);
var backInOut = function custom6(s) {
  s = +s;
  function backInOut2(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }
  backInOut2.overshoot = custom6;
  return backInOut2;
}(overshoot);

// node_modules/d3-ease/src/elastic.js
var tau2 = 2 * Math.PI;
var amplitude = 1;
var period = 0.3;
var elasticIn = function custom7(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau2);
  function elasticIn2(t) {
    return a * tpmt(- --t) * Math.sin((s - t) / p);
  }
  elasticIn2.amplitude = function(a2) {
    return custom7(a2, p * tau2);
  };
  elasticIn2.period = function(p2) {
    return custom7(a, p2);
  };
  return elasticIn2;
}(amplitude, period);
var elasticOut = function custom8(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau2);
  function elasticOut2(t) {
    return 1 - a * tpmt(t = +t) * Math.sin((t + s) / p);
  }
  elasticOut2.amplitude = function(a2) {
    return custom8(a2, p * tau2);
  };
  elasticOut2.period = function(p2) {
    return custom8(a, p2);
  };
  return elasticOut2;
}(amplitude, period);
var elasticInOut = function custom9(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau2);
  function elasticInOut2(t) {
    return ((t = t * 2 - 1) < 0 ? a * tpmt(-t) * Math.sin((s - t) / p) : 2 - a * tpmt(t) * Math.sin((s + t) / p)) / 2;
  }
  elasticInOut2.amplitude = function(a2) {
    return custom9(a2, p * tau2);
  };
  elasticInOut2.period = function(p2) {
    return custom9(a, p2);
  };
  return elasticInOut2;
}(amplitude, period);

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups2 = this._groups, m = groups2.length, j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        schedule_default(node, name, id2, i, group2, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups2, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-zoom/src/constant.js
var constant_default6 = (x) => () => x;

// node_modules/d3-zoom/src/event.js
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}

// node_modules/d3-zoom/src/transform.js
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
  return node.__zoom;
}

// node_modules/d3-zoom/src/noevent.js
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-zoom/src/zoom.js
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom_default2() {
  var filter3 = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom.scaleTo = function(selection2, k, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t02 = this.__zoom, p02 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t02.invert(p02), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t02, k1), p02, p1), e, translateExtent);
    }, p, event);
  };
  zoom.translateBy = function(selection2, x, y, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x, y, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p02 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity2.translate(p02[0], p02[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p02, p1) {
    var x = p02[0] - p1[0] * transform2.k, y = p02[1] - p1[1] * transform2.k;
    return x === transform2.x && y === transform2.y ? transform2 : new Transform(transform2.k, x, y);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select_default2(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter3.apply(this, arguments)) return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer_default(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default2(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter3.apply(this, arguments)) return;
    var g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), currentTarget = event.currentTarget, x06 = event.clientX, y06 = event.clientY;
    nodrag_default(event.view);
    nopropagation2(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved(event2) {
      noevent_default2(event2);
      if (!g.moved) {
        var dx = event2.clientX - x06, dy = event2.clientY - y06;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g.moved);
      noevent_default2(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter3.apply(this, arguments)) return;
    var t02 = this.__zoom, p02 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t02.invert(p02), k1 = t02.k * (event.shiftKey ? 0.5 : 2), t12 = constrain(translate(scale(t02, k1), p02, p1), extent.apply(this, args), translateExtent);
    noevent_default2(event);
    if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t12, p02, event);
    else select_default2(this).call(zoom.transform, t12, p02, event);
  }
  function touchstarted(event, ...args) {
    if (!filter3.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p02 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p02[0]) * dp + (dp = p1[1] - p02[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p02[0] + p1[0]) / 2, (p02[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation2(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer_default(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select_default2(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant_default6(+_), zoom) : wheelDelta;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter3 = typeof _ === "function" ? _ : constant_default6(!!_), zoom) : filter3;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default6(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default6([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };
  return zoom;
}

// node_modules/react-simple-maps/dist/index.es.js
function ownKeys(object3, enumerableOnly) {
  var keys = Object.keys(object3);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object3);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object3, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
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
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var _excluded$a = ["width", "height", "projection", "projectionConfig"];
var geoPath = path_default;
var projections = _objectWithoutProperties(src_exports, ["geoPath"]);
var MapContext = (0, import_react.createContext)();
var makeProjection = function makeProjection2(_ref) {
  var _ref$projectionConfig = _ref.projectionConfig, projectionConfig = _ref$projectionConfig === void 0 ? {} : _ref$projectionConfig, _ref$projection = _ref.projection, projection2 = _ref$projection === void 0 ? "geoEqualEarth" : _ref$projection, _ref$width = _ref.width, width = _ref$width === void 0 ? 800 : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? 600 : _ref$height;
  var isFunc = typeof projection2 === "function";
  if (isFunc) return projection2;
  var proj = projections[projection2]().translate([width / 2, height / 2]);
  var supported = [proj.center ? "center" : null, proj.rotate ? "rotate" : null, proj.scale ? "scale" : null, proj.parallels ? "parallels" : null];
  supported.forEach(function(d) {
    if (!d) return;
    proj = proj[d](projectionConfig[d] || proj[d]());
  });
  return proj;
};
var MapProvider = function MapProvider2(_ref2) {
  var width = _ref2.width, height = _ref2.height, projection2 = _ref2.projection, projectionConfig = _ref2.projectionConfig, restProps = _objectWithoutProperties(_ref2, _excluded$a);
  var _ref3 = projectionConfig.center || [], _ref4 = _slicedToArray(_ref3, 2), cx = _ref4[0], cy = _ref4[1];
  var _ref5 = projectionConfig.rotate || [], _ref6 = _slicedToArray(_ref5, 3), rx = _ref6[0], ry = _ref6[1], rz = _ref6[2];
  var _ref7 = projectionConfig.parallels || [], _ref8 = _slicedToArray(_ref7, 2), p1 = _ref8[0], p2 = _ref8[1];
  var s = projectionConfig.scale || null;
  var projMemo = (0, import_react.useMemo)(function() {
    return makeProjection({
      projectionConfig: {
        center: cx || cx === 0 || cy || cy === 0 ? [cx, cy] : null,
        rotate: rx || rx === 0 || ry || ry === 0 ? [rx, ry, rz] : null,
        parallels: p1 || p1 === 0 || p2 || p2 === 0 ? [p1, p2] : null,
        scale: s
      },
      projection: projection2,
      width,
      height
    });
  }, [width, height, projection2, cx, cy, rx, ry, rz, p1, p2, s]);
  var proj = (0, import_react.useCallback)(projMemo, [projMemo]);
  var value = (0, import_react.useMemo)(function() {
    return {
      width,
      height,
      projection: proj,
      path: geoPath().projection(proj)
    };
  }, [width, height, proj]);
  return import_react.default.createElement(MapContext.Provider, _extends({
    value
  }, restProps));
};
MapProvider.propTypes = {
  width: import_prop_types.default.number,
  height: import_prop_types.default.number,
  projection: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  projectionConfig: import_prop_types.default.object
};
var useMapContext = function useMapContext2() {
  return (0, import_react.useContext)(MapContext);
};
var _excluded$9 = ["width", "height", "projection", "projectionConfig", "className"];
var ComposableMap = (0, import_react.forwardRef)(function(_ref, ref) {
  var _ref$width = _ref.width, width = _ref$width === void 0 ? 800 : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? 600 : _ref$height, _ref$projection = _ref.projection, projection2 = _ref$projection === void 0 ? "geoEqualEarth" : _ref$projection, _ref$projectionConfig = _ref.projectionConfig, projectionConfig = _ref$projectionConfig === void 0 ? {} : _ref$projectionConfig, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, restProps = _objectWithoutProperties(_ref, _excluded$9);
  return import_react.default.createElement(MapProvider, {
    width,
    height,
    projection: projection2,
    projectionConfig
  }, import_react.default.createElement("svg", _extends({
    ref,
    viewBox: "0 0 ".concat(width, " ").concat(height),
    className: "rsm-svg ".concat(className)
  }, restProps)));
});
ComposableMap.displayName = "ComposableMap";
ComposableMap.propTypes = {
  width: import_prop_types.default.number,
  height: import_prop_types.default.number,
  projection: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  projectionConfig: import_prop_types.default.object,
  className: import_prop_types.default.string
};
function getCoords(w, h, t) {
  var xOffset = (w * t.k - w) / 2;
  var yOffset = (h * t.k - h) / 2;
  return [w / 2 - (xOffset + t.x) / t.k, h / 2 - (yOffset + t.y) / t.k];
}
function fetchGeographies(url) {
  return fetch(url).then(function(res) {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  })["catch"](function(error) {
    console.log("There was a problem when fetching the data: ", error);
  });
}
function getFeatures(geographies, parseGeographies) {
  var isTopojson = geographies.type === "Topology";
  if (!isTopojson) {
    return parseGeographies ? parseGeographies(geographies.features || geographies) : geographies.features || geographies;
  }
  var feats = feature_default(geographies, geographies.objects[Object.keys(geographies.objects)[0]]).features;
  return parseGeographies ? parseGeographies(feats) : feats;
}
function getMesh(geographies) {
  var isTopojson = geographies.type === "Topology";
  if (!isTopojson) return null;
  var outline = mesh_default(geographies, geographies.objects[Object.keys(geographies.objects)[0]], function(a, b) {
    return a === b;
  });
  var borders = mesh_default(geographies, geographies.objects[Object.keys(geographies.objects)[0]], function(a, b) {
    return a !== b;
  });
  return {
    outline,
    borders
  };
}
function prepareMesh(outline, borders, path) {
  return outline && borders ? {
    outline: _objectSpread2(_objectSpread2({}, outline), {}, {
      rsmKey: "outline",
      svgPath: path(outline)
    }),
    borders: _objectSpread2(_objectSpread2({}, borders), {}, {
      rsmKey: "borders",
      svgPath: path(borders)
    })
  } : {};
}
function prepareFeatures(geographies, path) {
  return geographies ? geographies.map(function(d, i) {
    return _objectSpread2(_objectSpread2({}, d), {}, {
      rsmKey: "geo-".concat(i),
      svgPath: path(d)
    });
  }) : [];
}
function createConnectorPath() {
  var dx = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 30;
  var dy = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 30;
  var curve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.5;
  var curvature = Array.isArray(curve) ? curve : [curve, curve];
  var curveX = dx / 2 * curvature[0];
  var curveY = dy / 2 * curvature[1];
  return "M".concat(0, ",", 0, " Q", -dx / 2 - curveX, ",").concat(-dy / 2 + curveY, " ").concat(-dx, ",").concat(-dy);
}
function isString(geo) {
  return typeof geo === "string";
}
function useGeographies(_ref) {
  var geography = _ref.geography, parseGeographies = _ref.parseGeographies;
  var _useContext = (0, import_react.useContext)(MapContext), path = _useContext.path;
  var _useState = (0, import_react.useState)({}), _useState2 = _slicedToArray(_useState, 2), output = _useState2[0], setOutput = _useState2[1];
  (0, import_react.useEffect)(function() {
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "undefined") return;
    if (!geography) return;
    if (isString(geography)) {
      fetchGeographies(geography).then(function(geos) {
        if (geos) {
          setOutput({
            geographies: getFeatures(geos, parseGeographies),
            mesh: getMesh(geos)
          });
        }
      });
    } else {
      setOutput({
        geographies: getFeatures(geography, parseGeographies),
        mesh: getMesh(geography)
      });
    }
  }, [geography, parseGeographies]);
  var _useMemo = (0, import_react.useMemo)(function() {
    var mesh = output.mesh || {};
    var preparedMesh = prepareMesh(mesh.outline, mesh.borders, path);
    return {
      geographies: prepareFeatures(output.geographies, path),
      outline: preparedMesh.outline,
      borders: preparedMesh.borders
    };
  }, [output, path]), geographies = _useMemo.geographies, outline = _useMemo.outline, borders = _useMemo.borders;
  return {
    geographies,
    outline,
    borders
  };
}
var _excluded$8 = ["geography", "children", "parseGeographies", "className"];
var Geographies = (0, import_react.forwardRef)(function(_ref, ref) {
  var geography = _ref.geography, children2 = _ref.children, parseGeographies = _ref.parseGeographies, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, restProps = _objectWithoutProperties(_ref, _excluded$8);
  var _useContext = (0, import_react.useContext)(MapContext), path = _useContext.path, projection2 = _useContext.projection;
  var _useGeographies = useGeographies({
    geography,
    parseGeographies
  }), geographies = _useGeographies.geographies, outline = _useGeographies.outline, borders = _useGeographies.borders;
  return import_react.default.createElement("g", _extends({
    ref,
    className: "rsm-geographies ".concat(className)
  }, restProps), geographies && geographies.length > 0 && children2({
    geographies,
    outline,
    borders,
    path,
    projection: projection2
  }));
});
Geographies.displayName = "Geographies";
Geographies.propTypes = {
  geography: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.object, import_prop_types.default.array]),
  children: import_prop_types.default.func,
  parseGeographies: import_prop_types.default.func,
  className: import_prop_types.default.string
};
var _excluded$7 = ["geography", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "style", "className"];
var Geography = (0, import_react.forwardRef)(function(_ref, ref) {
  var geography = _ref.geography, onMouseEnter = _ref.onMouseEnter, onMouseLeave = _ref.onMouseLeave, onMouseDown = _ref.onMouseDown, onMouseUp = _ref.onMouseUp, onFocus = _ref.onFocus, onBlur = _ref.onBlur, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, restProps = _objectWithoutProperties(_ref, _excluded$7);
  var _useState = (0, import_react.useState)(false), _useState2 = _slicedToArray(_useState, 2), isPressed = _useState2[0], setPressed = _useState2[1];
  var _useState3 = (0, import_react.useState)(false), _useState4 = _slicedToArray(_useState3, 2), isFocused = _useState4[0], setFocus = _useState4[1];
  function handleMouseEnter(evt) {
    setFocus(true);
    if (onMouseEnter) onMouseEnter(evt);
  }
  function handleMouseLeave(evt) {
    setFocus(false);
    if (isPressed) setPressed(false);
    if (onMouseLeave) onMouseLeave(evt);
  }
  function handleFocus(evt) {
    setFocus(true);
    if (onFocus) onFocus(evt);
  }
  function handleBlur(evt) {
    setFocus(false);
    if (isPressed) setPressed(false);
    if (onBlur) onBlur(evt);
  }
  function handleMouseDown(evt) {
    setPressed(true);
    if (onMouseDown) onMouseDown(evt);
  }
  function handleMouseUp(evt) {
    setPressed(false);
    if (onMouseUp) onMouseUp(evt);
  }
  return import_react.default.createElement("path", _extends({
    ref,
    tabIndex: "0",
    className: "rsm-geography ".concat(className),
    d: geography.svgPath,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    style: style[isPressed || isFocused ? isPressed ? "pressed" : "hover" : "default"]
  }, restProps));
});
Geography.displayName = "Geography";
Geography.propTypes = {
  geography: import_prop_types.default.object,
  onMouseEnter: import_prop_types.default.func,
  onMouseLeave: import_prop_types.default.func,
  onMouseDown: import_prop_types.default.func,
  onMouseUp: import_prop_types.default.func,
  onFocus: import_prop_types.default.func,
  onBlur: import_prop_types.default.func,
  style: import_prop_types.default.object,
  className: import_prop_types.default.string
};
var Geography$1 = (0, import_react.memo)(Geography);
var _excluded$6 = ["fill", "stroke", "step", "className"];
var Graticule = (0, import_react.forwardRef)(function(_ref, ref) {
  var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "transparent" : _ref$fill, _ref$stroke = _ref.stroke, stroke = _ref$stroke === void 0 ? "currentcolor" : _ref$stroke, _ref$step = _ref.step, step = _ref$step === void 0 ? [10, 10] : _ref$step, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, restProps = _objectWithoutProperties(_ref, _excluded$6);
  var _useContext = (0, import_react.useContext)(MapContext), path = _useContext.path;
  return import_react.default.createElement("path", _extends({
    ref,
    d: path(graticule().step(step)()),
    fill,
    stroke,
    className: "rsm-graticule ".concat(className)
  }, restProps));
});
Graticule.displayName = "Graticule";
Graticule.propTypes = {
  fill: import_prop_types.default.string,
  stroke: import_prop_types.default.string,
  step: import_prop_types.default.array,
  className: import_prop_types.default.string
};
var Graticule$1 = (0, import_react.memo)(Graticule);
var _excluded$5 = ["value"];
var ZoomPanContext = (0, import_react.createContext)();
var defaultValue = {
  x: 0,
  y: 0,
  k: 1,
  transformString: "translate(0 0) scale(1)"
};
var ZoomPanProvider = function ZoomPanProvider2(_ref) {
  var _ref$value = _ref.value, value = _ref$value === void 0 ? defaultValue : _ref$value, restProps = _objectWithoutProperties(_ref, _excluded$5);
  return import_react.default.createElement(ZoomPanContext.Provider, _extends({
    value
  }, restProps));
};
ZoomPanProvider.propTypes = {
  x: import_prop_types.default.number,
  y: import_prop_types.default.number,
  k: import_prop_types.default.number,
  transformString: import_prop_types.default.string
};
var useZoomPanContext = function useZoomPanContext2() {
  return (0, import_react.useContext)(ZoomPanContext);
};
function useZoomPan(_ref) {
  var center = _ref.center, filterZoomEvent = _ref.filterZoomEvent, onMoveStart = _ref.onMoveStart, onMoveEnd = _ref.onMoveEnd, onMove = _ref.onMove, _ref$translateExtent = _ref.translateExtent, translateExtent = _ref$translateExtent === void 0 ? [[-Infinity, -Infinity], [Infinity, Infinity]] : _ref$translateExtent, _ref$scaleExtent = _ref.scaleExtent, scaleExtent = _ref$scaleExtent === void 0 ? [1, 8] : _ref$scaleExtent, _ref$zoom = _ref.zoom, zoom$1 = _ref$zoom === void 0 ? 1 : _ref$zoom;
  var _useContext = (0, import_react.useContext)(MapContext), width = _useContext.width, height = _useContext.height, projection2 = _useContext.projection;
  var _center = _slicedToArray(center, 2), lon = _center[0], lat = _center[1];
  var _useState = (0, import_react.useState)({
    x: 0,
    y: 0,
    k: 1
  }), _useState2 = _slicedToArray(_useState, 2), position = _useState2[0], setPosition = _useState2[1];
  var lastPosition = (0, import_react.useRef)({
    x: 0,
    y: 0,
    k: 1
  });
  var mapRef = (0, import_react.useRef)();
  var zoomRef = (0, import_react.useRef)();
  var bypassEvents = (0, import_react.useRef)(false);
  var _translateExtent = _slicedToArray(translateExtent, 2), a = _translateExtent[0], b = _translateExtent[1];
  var _a = _slicedToArray(a, 2), a1 = _a[0], a2 = _a[1];
  var _b = _slicedToArray(b, 2), b12 = _b[0], b22 = _b[1];
  var _scaleExtent = _slicedToArray(scaleExtent, 2), minZoom = _scaleExtent[0], maxZoom = _scaleExtent[1];
  (0, import_react.useEffect)(function() {
    var svg = select_default2(mapRef.current);
    function handleZoomStart(d3Event) {
      if (!onMoveStart || bypassEvents.current) return;
      onMoveStart({
        coordinates: projection2.invert(getCoords(width, height, d3Event.transform)),
        zoom: d3Event.transform.k
      }, d3Event);
    }
    function handleZoom(d3Event) {
      if (bypassEvents.current) return;
      var transform2 = d3Event.transform, sourceEvent = d3Event.sourceEvent;
      setPosition({
        x: transform2.x,
        y: transform2.y,
        k: transform2.k,
        dragging: sourceEvent
      });
      if (!onMove) return;
      onMove({
        x: transform2.x,
        y: transform2.y,
        zoom: transform2.k,
        dragging: sourceEvent
      }, d3Event);
    }
    function handleZoomEnd(d3Event) {
      if (bypassEvents.current) {
        bypassEvents.current = false;
        return;
      }
      var _projection$invert = projection2.invert(getCoords(width, height, d3Event.transform)), _projection$invert2 = _slicedToArray(_projection$invert, 2), x = _projection$invert2[0], y = _projection$invert2[1];
      lastPosition.current = {
        x,
        y,
        k: d3Event.transform.k
      };
      if (!onMoveEnd) return;
      onMoveEnd({
        coordinates: [x, y],
        zoom: d3Event.transform.k
      }, d3Event);
    }
    function filterFunc(d3Event) {
      if (filterZoomEvent) {
        return filterZoomEvent(d3Event);
      }
      return d3Event ? !d3Event.ctrlKey && !d3Event.button : false;
    }
    var zoom$12 = zoom_default2().filter(filterFunc).scaleExtent([minZoom, maxZoom]).translateExtent([[a1, a2], [b12, b22]]).on("start", handleZoomStart).on("zoom", handleZoom).on("end", handleZoomEnd);
    zoomRef.current = zoom$12;
    svg.call(zoom$12);
  }, [width, height, a1, a2, b12, b22, minZoom, maxZoom, projection2, onMoveStart, onMove, onMoveEnd, filterZoomEvent]);
  (0, import_react.useEffect)(function() {
    if (lon === lastPosition.current.x && lat === lastPosition.current.y && zoom$1 === lastPosition.current.k) return;
    var coords = projection2([lon, lat]);
    var x = coords[0] * zoom$1;
    var y = coords[1] * zoom$1;
    var svg = select_default2(mapRef.current);
    bypassEvents.current = true;
    svg.call(zoomRef.current.transform, identity2.translate(width / 2 - x, height / 2 - y).scale(zoom$1));
    setPosition({
      x: width / 2 - x,
      y: height / 2 - y,
      k: zoom$1
    });
    lastPosition.current = {
      x: lon,
      y: lat,
      k: zoom$1
    };
  }, [lon, lat, zoom$1, width, height, projection2]);
  return {
    mapRef,
    position,
    transformString: "translate(".concat(position.x, " ").concat(position.y, ") scale(").concat(position.k, ")")
  };
}
var _excluded$4 = ["center", "zoom", "minZoom", "maxZoom", "translateExtent", "filterZoomEvent", "onMoveStart", "onMove", "onMoveEnd", "className"];
var ZoomableGroup = (0, import_react.forwardRef)(function(_ref, ref) {
  var _ref$center = _ref.center, center = _ref$center === void 0 ? [0, 0] : _ref$center, _ref$zoom = _ref.zoom, zoom = _ref$zoom === void 0 ? 1 : _ref$zoom, _ref$minZoom = _ref.minZoom, minZoom = _ref$minZoom === void 0 ? 1 : _ref$minZoom, _ref$maxZoom = _ref.maxZoom, maxZoom = _ref$maxZoom === void 0 ? 8 : _ref$maxZoom, translateExtent = _ref.translateExtent, filterZoomEvent = _ref.filterZoomEvent, onMoveStart = _ref.onMoveStart, onMove = _ref.onMove, onMoveEnd = _ref.onMoveEnd, className = _ref.className, restProps = _objectWithoutProperties(_ref, _excluded$4);
  var _useContext = (0, import_react.useContext)(MapContext), width = _useContext.width, height = _useContext.height;
  var _useZoomPan = useZoomPan({
    center,
    filterZoomEvent,
    onMoveStart,
    onMove,
    onMoveEnd,
    scaleExtent: [minZoom, maxZoom],
    translateExtent,
    zoom
  }), mapRef = _useZoomPan.mapRef, transformString = _useZoomPan.transformString, position = _useZoomPan.position;
  return import_react.default.createElement(ZoomPanProvider, {
    value: {
      x: position.x,
      y: position.y,
      k: position.k,
      transformString
    }
  }, import_react.default.createElement("g", {
    ref: mapRef
  }, import_react.default.createElement("rect", {
    width,
    height,
    fill: "transparent"
  }), import_react.default.createElement("g", _extends({
    ref,
    transform: transformString,
    className: "rsm-zoomable-group ".concat(className)
  }, restProps))));
});
ZoomableGroup.displayName = "ZoomableGroup";
ZoomableGroup.propTypes = {
  center: import_prop_types.default.array,
  zoom: import_prop_types.default.number,
  minZoom: import_prop_types.default.number,
  maxZoom: import_prop_types.default.number,
  translateExtent: import_prop_types.default.arrayOf(import_prop_types.default.array),
  onMoveStart: import_prop_types.default.func,
  onMove: import_prop_types.default.func,
  onMoveEnd: import_prop_types.default.func,
  className: import_prop_types.default.string
};
var _excluded$3 = ["id", "fill", "stroke", "strokeWidth", "className"];
var Sphere = (0, import_react.forwardRef)(function(_ref, ref) {
  var _ref$id = _ref.id, id2 = _ref$id === void 0 ? "rsm-sphere" : _ref$id, _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "transparent" : _ref$fill, _ref$stroke = _ref.stroke, stroke = _ref$stroke === void 0 ? "currentcolor" : _ref$stroke, _ref$strokeWidth = _ref.strokeWidth, strokeWidth = _ref$strokeWidth === void 0 ? 0.5 : _ref$strokeWidth, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, restProps = _objectWithoutProperties(_ref, _excluded$3);
  var _useContext = (0, import_react.useContext)(MapContext), path = _useContext.path;
  var spherePath = (0, import_react.useMemo)(function() {
    return path({
      type: "Sphere"
    });
  }, [path]);
  return import_react.default.createElement(import_react.Fragment, null, import_react.default.createElement("defs", null, import_react.default.createElement("clipPath", {
    id: id2
  }, import_react.default.createElement("path", {
    d: spherePath
  }))), import_react.default.createElement("path", _extends({
    ref,
    d: spherePath,
    fill,
    stroke,
    strokeWidth,
    style: {
      pointerEvents: "none"
    },
    className: "rsm-sphere ".concat(className)
  }, restProps)));
});
Sphere.displayName = "Sphere";
Sphere.propTypes = {
  id: import_prop_types.default.string,
  fill: import_prop_types.default.string,
  stroke: import_prop_types.default.string,
  strokeWidth: import_prop_types.default.number,
  className: import_prop_types.default.string
};
var Sphere$1 = (0, import_react.memo)(Sphere);
var _excluded$2 = ["coordinates", "children", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "style", "className"];
var Marker = (0, import_react.forwardRef)(function(_ref, ref) {
  var coordinates2 = _ref.coordinates, children2 = _ref.children, onMouseEnter = _ref.onMouseEnter, onMouseLeave = _ref.onMouseLeave, onMouseDown = _ref.onMouseDown, onMouseUp = _ref.onMouseUp, onFocus = _ref.onFocus, onBlur = _ref.onBlur, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, restProps = _objectWithoutProperties(_ref, _excluded$2);
  var _useContext = (0, import_react.useContext)(MapContext), projection2 = _useContext.projection;
  var _useState = (0, import_react.useState)(false), _useState2 = _slicedToArray(_useState, 2), isPressed = _useState2[0], setPressed = _useState2[1];
  var _useState3 = (0, import_react.useState)(false), _useState4 = _slicedToArray(_useState3, 2), isFocused = _useState4[0], setFocus = _useState4[1];
  var _projection = projection2(coordinates2), _projection2 = _slicedToArray(_projection, 2), x = _projection2[0], y = _projection2[1];
  function handleMouseEnter(evt) {
    setFocus(true);
    if (onMouseEnter) onMouseEnter(evt);
  }
  function handleMouseLeave(evt) {
    setFocus(false);
    if (isPressed) setPressed(false);
    if (onMouseLeave) onMouseLeave(evt);
  }
  function handleFocus(evt) {
    setFocus(true);
    if (onFocus) onFocus(evt);
  }
  function handleBlur(evt) {
    setFocus(false);
    if (isPressed) setPressed(false);
    if (onBlur) onBlur(evt);
  }
  function handleMouseDown(evt) {
    setPressed(true);
    if (onMouseDown) onMouseDown(evt);
  }
  function handleMouseUp(evt) {
    setPressed(false);
    if (onMouseUp) onMouseUp(evt);
  }
  return import_react.default.createElement("g", _extends({
    ref,
    transform: "translate(".concat(x, ", ").concat(y, ")"),
    className: "rsm-marker ".concat(className),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    style: style[isPressed || isFocused ? isPressed ? "pressed" : "hover" : "default"]
  }, restProps), children2);
});
Marker.displayName = "Marker";
Marker.propTypes = {
  coordinates: import_prop_types.default.array,
  children: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.arrayOf(import_prop_types.default.node)]),
  onMouseEnter: import_prop_types.default.func,
  onMouseLeave: import_prop_types.default.func,
  onMouseDown: import_prop_types.default.func,
  onMouseUp: import_prop_types.default.func,
  onFocus: import_prop_types.default.func,
  onBlur: import_prop_types.default.func,
  style: import_prop_types.default.object,
  className: import_prop_types.default.string
};
var _excluded$1 = ["from", "to", "coordinates", "stroke", "strokeWidth", "fill", "className"];
var Line = (0, import_react.forwardRef)(function(_ref, ref) {
  var _ref$from = _ref.from, from = _ref$from === void 0 ? [0, 0] : _ref$from, _ref$to = _ref.to, to = _ref$to === void 0 ? [0, 0] : _ref$to, coordinates2 = _ref.coordinates, _ref$stroke = _ref.stroke, stroke = _ref$stroke === void 0 ? "currentcolor" : _ref$stroke, _ref$strokeWidth = _ref.strokeWidth, strokeWidth = _ref$strokeWidth === void 0 ? 3 : _ref$strokeWidth, _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "transparent" : _ref$fill, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, restProps = _objectWithoutProperties(_ref, _excluded$1);
  var _useContext = (0, import_react.useContext)(MapContext), path = _useContext.path;
  var lineData = {
    type: "LineString",
    coordinates: coordinates2 || [from, to]
  };
  return import_react.default.createElement("path", _extends({
    ref,
    d: path(lineData),
    className: "rsm-line ".concat(className),
    stroke,
    strokeWidth,
    fill
  }, restProps));
});
Line.displayName = "Line";
Line.propTypes = {
  from: import_prop_types.default.array,
  to: import_prop_types.default.array,
  coordinates: import_prop_types.default.array,
  stroke: import_prop_types.default.string,
  strokeWidth: import_prop_types.default.number,
  fill: import_prop_types.default.string,
  className: import_prop_types.default.string
};
var _excluded = ["subject", "children", "connectorProps", "dx", "dy", "curve", "className"];
var Annotation = (0, import_react.forwardRef)(function(_ref, ref) {
  var subject = _ref.subject, children2 = _ref.children, connectorProps = _ref.connectorProps, _ref$dx = _ref.dx, dx = _ref$dx === void 0 ? 30 : _ref$dx, _ref$dy = _ref.dy, dy = _ref$dy === void 0 ? 30 : _ref$dy, _ref$curve = _ref.curve, curve = _ref$curve === void 0 ? 0 : _ref$curve, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, restProps = _objectWithoutProperties(_ref, _excluded);
  var _useContext = (0, import_react.useContext)(MapContext), projection2 = _useContext.projection;
  var _projection = projection2(subject), _projection2 = _slicedToArray(_projection, 2), x = _projection2[0], y = _projection2[1];
  var connectorPath = createConnectorPath(dx, dy, curve);
  return import_react.default.createElement("g", _extends({
    ref,
    transform: "translate(".concat(x + dx, ", ").concat(y + dy, ")"),
    className: "rsm-annotation ".concat(className)
  }, restProps), import_react.default.createElement("path", _extends({
    d: connectorPath,
    fill: "transparent",
    stroke: "#000"
  }, connectorProps)), children2);
});
Annotation.displayName = "Annotation";
Annotation.propTypes = {
  subject: import_prop_types.default.array,
  children: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.arrayOf(import_prop_types.default.node)]),
  dx: import_prop_types.default.number,
  dy: import_prop_types.default.number,
  curve: import_prop_types.default.number,
  connectorProps: import_prop_types.default.object,
  className: import_prop_types.default.string
};
export {
  Annotation,
  ComposableMap,
  Geographies,
  Geography$1 as Geography,
  Graticule$1 as Graticule,
  Line,
  MapContext,
  MapProvider,
  Marker,
  Sphere$1 as Sphere,
  ZoomPanContext,
  ZoomPanProvider,
  ZoomableGroup,
  useGeographies,
  useMapContext,
  useZoomPan,
  useZoomPanContext
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-simple-maps.js.map
