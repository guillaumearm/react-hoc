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
    return enhancerName ? enhancerName + '(' + componentName + ')' : 'Hoc(' + componentName + ')';
};

var reactHOC = function reactHOC(enhancer, enhancerName, customStatics) {
    return function (Component) {
        var enhancedDisplayName = composeNames(enhancerName, getDisplayName(Component));
        var EnhancedComponent = enhancer(Component);
        if (Component === EnhancedComponent) {
            EnhancedComponent.displayName = enhancedDisplayName;
            return EnhancedComponent;
        }

        var HoistedEnhanced = (0, _hoistNonReactStatics2.default)(EnhancedComponent, Component, customStatics);
        HoistedEnhanced.WrappedComponent = Component.WrappedComponent || Component;
        HoistedEnhanced.displayName = enhancedDisplayName;
        return HoistedEnhanced;
    };
};

exports.default = reactHOC;