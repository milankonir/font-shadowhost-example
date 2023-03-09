const style = new CSSStyleSheet();
style.replaceSync(`
  @font-face {
    font-family: CustomFont;
    font-style: normal;
    font-weight: 500;
    src: url(test.otf)
 }

 * {
  font-family: CustomFont;
  color: red;
}`);

const shadow = document.getElementById("shadow-host");
shadow.attachShadow({ mode: "open" });
shadow.shadowRoot.innerHTML = "<div>Some shadow text</div>";
shadow.shadowRoot.adoptedStyleSheets = [style];
