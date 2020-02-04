const pageLayoutTemplate = async ({ attributes, files, publicPath, title }) => {
    const scripts = (files.js || [])
      .map(({ fileName }) => {
        const attrs = makeHtmlAttributes(attributes.script);
        return `<script crossorigin src="${publicPath}${fileName}"${attrs}></script>`;
      })
      .join('\n');
  
    const links = (files.css || [])
      .map(({ fileName }) => {
        const attrs = makeHtmlAttributes(attributes.link);
        return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
      })
      .join('\n');
  
    return `
  <!doctype html>
  <html${makeHtmlAttributes(attributes.html)}>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      ${links}
    </head>
    <body>
        <div id="app"></div>
      ${scripts}
    </body>
  </html>`;
  };

  function makeHtmlAttributes(attributes) {
    if (!attributes) {
      return '';
    }
  
    const keys = Object.keys(attributes);
    // eslint-disable-next-line no-param-reassign
    return keys.reduce((result, key) => (result += ` ${key}="${attributes[key]}"`), '');
  };

  export default pageLayoutTemplate;