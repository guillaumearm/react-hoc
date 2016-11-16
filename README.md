# react-hoc

> a higher order component creator helper

`reactHOC :: (Enhancer, enhancerDisplayName) => Enhancer`

__reactHOC is a higher order enhancer__ :
it take one enhancer and return one enhancer.

it does 3 things :
  - [hoist non react statics](https://www.npmjs.com/package/hoist-non-react-statics)
  - hoist/set WrappedComponent property
  - hoist/set displayName property


### Installation

`npm install --save react-hoc`

### Usage

__example with a very basic hoc :__
```js
import React from 'react';
import reactHOC from 'react-hoc';

import Dummy from './Dummy';

const withColor = color => reactHOC(WrappedComponent => props => {
    return <WrappedComponent color={color} {...props} />
}, color);
const withBlue = withColor('blue');
const BlueComponent = withBlue(Dummy);
BlueComponent.displayName // => "blue(Dummy)"
```
if `reactHOC` enhancerDisplayName parameter is missing, `Hoc()` will be used.
```js
const noColor = withColor();
const Test = noColor(Dummy);
Test.displayName // => "Hoc(Dummy)"
```

### Utils
`getDisplayName :: (Component) => String`

__example :__
```js
import React from 'react';
import { reactHOC, getDisplayName } from 'react-hoc';

const myEnhancer = reactHOC(WrappedComponent => {
  return class extends Component {
      // set your own displayName
    static displayName = `Enhanced [${getDisplayName(WrappedComponent)}]`

    render() { return <WrappedComponent /> }
  };
});
const EnhancedDummy = myEnhancer(Dummy);
```
