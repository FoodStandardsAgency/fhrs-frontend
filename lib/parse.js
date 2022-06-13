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
      props.attribs.forEach((attrib) => {
        if (node.attribs.id === attrib.id || node.attribs.class === attrib.class) {
          node.attribs = { ...attrib.addAttribs, ...node.attribs };
          return node;
        }
      });
    }
  });
}
