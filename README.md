<p align="center">
	<a href="https://kyechan99.github.io/dragond-react"><img src="https://raw.githubusercontent.com/kyechan99/kyechan99.github.io/c7529044a08823da3b42044f11a2c31b362e8f4b/public/img/2024-1-18-npm/dragond.gif"/></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/dragond-react">
    <img src="https://img.shields.io/npm/v/dragond-react" alt="npm version" >
  </a>
<!--   <a href="https://codecov.io/gh/kyechan99/dragond-react">
    <img alt="Tests Coverage" src="https://codecov.io/gh/kyechan99/dragond-react/graph/badge.svg" />
  </a> -->
  <a href="https://www.npmjs.com/package/dragond-react">
    <img src="https://img.shields.io/npm/dependency-version/dragond-react/peer/react" alt="npm version" >
  </a>
  <a href="https://www.npmjs.com/package/dragond-react">
    <img src="https://img.shields.io/npm/dependency-version/dragond-react/peer/react-dom" alt="npm version" >
  </a>
  <a href="https://nodejs.org/en/about/previous-releases">
    <img src="https://img.shields.io/node/v/dragond-react" alt="node compatibility">
  </a>
  <a href="https://packagephobia.now.sh/result?p=dragond-react">
    <img src="https://packagephobia.now.sh/badge?p=dragond-react" alt="install size" >
  </a>
  <a href="https://github.com/kyechan99/dragond-react/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/dragond-react" alt="license">
  </a>
<!--   <a href="https://github.com/kyechan99/dragond-react/graphs/contributors">
    <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/kyechan99/dragond-react" />
  </a>
  <a href="https://github.com/kyechan99/dragond-react/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/kyechan99/dragond-react?color=0088ff" />
  </a>
  <a href="https://github.com/kyechan99/dragond-react/pulls">
    <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/kyechan99/dragond-react?color=0088ff" />
  </a> -->
</p>

<h1 align="center">Dragond</h1>


## Install
```
npm install dragond-react --save
```



## Usage

Detailed usage is in the [Docs](https://kyechan99.github.io/dragond/).


```jsx
import { DragondProvider, Dragond, DragondDevice } from "dragond-react";

return (
  <DragondProvider>
    <Dragond>...</Dragond>
    <DragondDevice>...</DragondDevice>
  </DragondProvider>
);
```

### DragondProvider
`DragondProvider` is the provider that must be located at the top to use `dragond-react`.

All `dragond-react` depend on the closest `DragondProvider` for data determination.

```html
<DragondProvider>
    ...
</DragondProvider>
```


### Dragond
`Dragond` is the area where you will **recognize the drag**.

It must depend on the parent element's `DragondProvider`.
Alone it does nothing.
Must be used with `DragondDevice`.

```html
<DragondProvider>
    <Dragond> Lorem Ipsum ... </Dragond>
</DragondProvider>
```


### DragondDevice
DragondDevice is **a component that will be displayed** when dragged.

It must depend on the parent element's `DragondProvider`.
Alone it does nothing.
Should be used with `Dragond`.

```html
<DragondProvider>
    <Dragond> ... </Dragond>
    <DragondDevice> I am Dragond! </DragondDevice>
</DragondProvider>
```

