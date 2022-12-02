import {useRouter} from "next/router";
import {useEffect} from "react";

function Preview() {
  const {query, isReady} = useRouter();

  useEffect(() => {
    if (!isReady) return;

    const {id, style, isWelsh} = query;

    let widths = {
      1: '26.75rem',
      2: '30rem',
      3: '16.188rem',
      4: '7.813rem',
      5: '11.813rem'
    };
    const container = document.createElement('div');
    const scriptTag = document.createElement('script');
    scriptTag.src = '/embed/embed-badge.js';
    container.style = 'width:' + widths[style];

    scriptTag.setAttribute('data-business-id', id);
    scriptTag.setAttribute('data-rating-style', style);
    scriptTag.setAttribute('data-welsh', isWelsh.toString());
    scriptTag.setAttribute('defer', 'defer');
    container.appendChild(scriptTag);
    document.body.appendChild(container);
  }, [isReady]);

  return null;
}

export default Preview;
