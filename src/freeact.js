(() => {
  function anElement(element, props, children) {
    if (isClass(element)) {
      return handleClass(element, props);
    } else if (isStatelessComponent(element)) {
      return element(props);
    } else if (typeof (element) === 'function') {
      return element();
    } else {
      const anElement = document.createElement(element);
      children.forEach((child) => {
        if (typeof(child) === "object") {
          anElement.appendChild(child);
        } else {
          anElement.innerHTML += child;
        }
      });
      return anElement;
    }
  }

  function createElement(el, props, ...children) {
    return anElement(el, props, children);
  }

  function handleClass(classEl, props) {
    const component = new classEl(props);
    return component.render();
  }

  class Component {
    constructor(props) {
      this.props = props;
    }
  }

  window.Freeact = {
    createElement,
    Component
  };

  window.FreeactDOM = {
    render: (el, domEl) => {
      domEl.appendChild(el);
    }
  };
})();
