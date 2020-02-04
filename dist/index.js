
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { R as React, a as ReactDOM } from './vendor-a4062769.js';

function App() {
  return React.createElement("p", null, "Rollup + TypeScript + React = \u2764\uFE0F");
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
