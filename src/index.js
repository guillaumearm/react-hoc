/* eslint-disable no-param-reassign */
import hoistNonReactStatics from 'hoist-non-react-statics';

const composeNames = (enhancerName, componentName) => (
    enhancerName ? `${enhancerName}(${componentName})` : `Hoc(${componentName})`
);

const setDisplayNameIfNot = (Component, displayName) => {
    if (!Component.displayName)
        Component.displayName = displayName;
    return Component;
};

export const getDisplayName = WrappedComponent => (
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

export const reactHOC = (enhancer, enhancerName, customStatics) => (Component) => {
    const enhancedDisplayName = composeNames(enhancerName, getDisplayName(Component));
    const EnhancedComponent = enhancer(Component);
    if (Component === EnhancedComponent)
        return setDisplayNameIfNot(EnhancedComponent, enhancedDisplayName);

    const HoistedEnhanced = hoistNonReactStatics(EnhancedComponent, Component, customStatics);
    HoistedEnhanced.WrappedComponent = Component.WrappedComponent || Component;
    return setDisplayNameIfNot(HoistedEnhanced, enhancedDisplayName);
};

export default reactHOC;
