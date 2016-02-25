##react-runner

A tool to quickly get started on building a react app. The end goal is to run any jsx file in dev mode, output to production, or even a production ready way to server render your app.

```js
npm install react-runner -g
```

###rr init

Run this command in a new project folder, or even an existing react app. It wil install the required dependencies needed to run your app. You don't need to worry about making a webpack config. If you need to use a custom config, this will use that instead (coming soon).


###rr dev

`rr dev index.jsx` runs your react code using a webpack dev server on `localhost:8080`

###Example

Run `rr init` in a new folder, create a file like this: 

```js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>Hey thereyrrrt</div>
    )
  }
}
  

ReactDOM.render(<App />, document.getElementById('app'))
```

run `rr dev index.js` and boom, you have the app in your browser ready to go. I know there are other tools for this, most make everything a hard dependency, but this installs everything as a peer so that you can control the version.
