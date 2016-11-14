import hoistNonReactStatics from 'hoist-non-react-statics';

const getDisplayName = WrappedComponent => (
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

const composeNames = (enhancerName, componentName) => (
    enhancerName ? `${enhancerName}(${componentName})` : componentName
);

const reactHOC = (enhancer, enhancerName, customStatics) => (Component) => {
    const Enhanced = hoistNonReactStatics(enhancer(Component), Component, customStatics);
    Enhanced.WrappedComponent = Component.WrappedComponent || Component;
    Enhanced.displayName = composeNames(enhancerName, getDisplayName(Component));
    return Enhanced;
};

export default reactHOC;
