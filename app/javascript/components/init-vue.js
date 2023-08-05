import { createApp } from 'vue/dist/vue.esm-bundler.js';

const WRAPPER_CLASS = 'vue-component-wrapper';

const initVue = (components) => {
  const findComponentByTagName = (tagName) => {
    tagName = tagName.toLowerCase();

    for (const name in components)
      if (name === tagName)
        return true;

    return false;
  };

  const hasWrapper = (el) => {
    let parent = el;

    while (parent) {
      parent = parent.parentNode;

      if (parent) {
        if (parent.className === WRAPPER_CLASS)
          return true;

        if (parent.tagName && findComponentByTagName(parent.tagName))
          return true;
      }
    }

    return false;
  };

  const wrapElement = (el) => {
    const wrapper = document.createElement('div');

    wrapper.className = WRAPPER_CLASS;

    el.parentNode.insertBefore(wrapper, el.nextSibling);
    wrapper.appendChild(el);

    return wrapper;
  };

  document.addEventListener('DOMContentLoaded', () => {
    for (const name in components)
      [...document.querySelectorAll(name)].forEach((el) => {
        if (hasWrapper(el))
          return;

        const app = createApp({
          components,
          mounted () {
            const input = document.querySelector('[autofocus]');

            if (input)
              input.focus();
          }
        });

        app.mount(wrapElement(el));
      });
  });
};

export default initVue;
