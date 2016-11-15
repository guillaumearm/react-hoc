import hoistNonReactStatics from 'hoist-non-react-statics';

const getDisplayName = WrappedComponent => (
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

const composeNames = (enhancerName, componentName) => (
    enhancerName ? `${enhancerName}(${componentName})` : componentName
);

const reactHOC = (enhancer, enhancerName, customStatics) => (Component) => {
    const EnhancedComponent = enhancer(Component);
    if (Component === EnhancedComponent) return EnhancedComponent;

    const HoistedEnhanced = hoistNonReactStatics(EnhancedComponent, Component, customStatics);
    HoistedEnhanced.WrappedComponent = Component.WrappedComponent || Component;
    HoistedEnhanced.displayName = composeNames(enhancerName, getDisplayName(Component));
    return HoistedEnhanced;
};

export default reactHOC;
