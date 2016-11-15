'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDisplayName = function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

var composeNames = function composeNames(enhancerName, componentName) {
    return enhancerName ? enhancerName + '(' + componentName + ')' : 'hoc(' + componentName + ')';
};

var reactHOC = function reactHOC(enhancer, enhancerName, customStatics) {
    return function (Component) {
        var Enhanced = (0, _hoistNonReactStatics2.default)(enhancer(Component), Component, customStatics);
        Enhanced.WrappedComponent = Component.WrappedComponent || Component;
        Enhanced.displayName = composeNames(enhancerName, getDisplayName(Component));
        return Enhanced;
    };
};

exports.default = reactHOC;