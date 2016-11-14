react-hoc
=====

> a higher order component creator helper

`hoc :: (Enhancer, enhancerDisplayName) => Enhancer`

__hoc is a higher order enhancer__ :
it take one enhancer and return one enhancer.

it does 3 things :
  - hoist non react statics
  - hoist/set WrappedComponent property
  - hoist/set displayName property


### Installation

`npm install --save guillaumearm/react-hoc`


### Usage

__example with a very basic hoc :__
```js
import React from 'react';
import hoc from 'react-hoc';

import Dummy from './Dummy';

const withDefaultColor = color => hoc(WrappedComponent => props => {
    return <WrappedComponent color={color} {...props} />
}, color);
const withDefaultBlue = withDefaultColor('blue');
const BlueComponent = withDefaultBlue(Dummy);
BlueComponent.displayName // => "blue(Dummy)"
```
if `hoc` second parameter is missing, __displayName will be hoisted__.
```js
const noColor = withDefaultColor();
const Test = noColor(Dummy);
Test.displayName // => "Dummy"
```
