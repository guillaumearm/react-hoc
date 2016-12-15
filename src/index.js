import hoistNonReactStatics from 'hoist-non-react-statics';

const getDisplayName = WrappedComponent => (
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

const composeNames = (enhancerName, componentName) => (
    enhancerName ? `${enhancerName}(${componentName})` : `Hoc(${componentName})`
);

export const reactHOC = (enhancer, enhancerName, customStatics) => (Component) => {
    const enhancedDisplayName = composeNames(enhancerName, getDisplayName(Component));
    const EnhancedComponent = enhancer(Component);
    if (Component === EnhancedComponent) {
        EnhancedComponent.displayName = enhancedDisplayName;
        return EnhancedComponent;
    }

    const HoistedEnhanced = hoistNonReactStatics(EnhancedComponent, Component, customStatics);
    HoistedEnhanced.WrappedComponent = Component.WrappedComponent || Component;
    HoistedEnhanced.displayName = enhancedDisplayName;
    return HoistedEnhanced;
};

export default reactHOC;
