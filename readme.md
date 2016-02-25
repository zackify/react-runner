##react-runner

Goal: Abstract running / building assets on web and native so tht you can rely on the same commands for all platforms. Hide the need for webpack and babel, but allow using custom `.babelrc` and webpack configs.

###Todo

 - production command to get transpiled js
 - server rendering
 - use custom webpack config

A tool to quickly get started on building a react app. The end goal is to run any jsx file in dev mode, output to production, or even a production ready way to server render your app. Provides a uniform api for running reactjs and native apps

```js
npm install react-runner -g
```

Commands can be ran by `react-runner` or `rr` for short.

###init

Run this command in a new project folder, or even an existing react app. It will install the required dependencies needed to run your app. You don't need to worry about making a webpack config. If you need to use a custom config, this will use that instead (coming soon).


###development

run react apps in development mode:


- `rr index.jsx` runs your react code using a webpack dev server on `localhost:8080`
- `rr ios` to run an ios app
- `rr android` to run react native android project

###build

build assets for native and web (coming soon)

###Example

Run `rr init` in a new folder, create a file like this: 

```js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>Hey there</div>
    )
  }
}
  

ReactDOM.render(<App />, document.getElementById('app'))
```

run `rr index.js` and boom, you have the app in your browser ready to go. I know there are other tools for this, most make everything a hard dependency, but this installs everything as a peer so that you can control the version.
