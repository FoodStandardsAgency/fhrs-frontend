import parse, { domToReact } from 'html-react-parser';
import React from 'react';

export default function TwigTemplate (props) {
  let html = '';
  if (!props.html && props.template && props.values) {
    html = props.template(props.values);
  }
  else if (props.html) {
    html = props.html;
  }
  return parse(html,
    { replace: (node) => {
      if (!node.attribs) {
        return;
      }
      /*
       * If the node is a dropdown option, replace it and add the value manually.
       * TODO: parse won't accept 'value' as a valid option prop - ideally this should all be handled by parse
       */
      if ((node.attribs && node.attribs.class === 'dropdown__option')||(node.attribs && node.attribs.class === 'sort__option')) {
        const text = node.children[0].data;
        const {value} = node.attribs;
        const parent = node.parent;
        const defaultVal = parent.attribs['data-default-value'];
        const selected = defaultVal === value;
        return <option className={node.attribs.class} selected={selected} value={value}>{text}</option>;
      }
      props.attribs.forEach((attrib) => {
        if (node.attribs.id === attrib.id || node.attribs.class === attrib.class) {
          node.attribs = { ...attrib.addAttribs, ...node.attribs };
          return node;
        }
      });
    }
  });
}
