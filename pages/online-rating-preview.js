import {useRouter} from "next/router";
import {useEffect} from "react";

function Preview() {
  const {query, isReady} = useRouter();

  useEffect(() => {
    if (!isReady) return;

    const {id, style, isWelsh} = query;

    const scriptTag = document.createElement('script');
    scriptTag.src = '/embed/embed-badge.js';
    scriptTag.setAttribute('data-business-id', id);
    scriptTag.setAttribute('data-rating-style', style);
    scriptTag.setAttribute('data-welsh', isWelsh.toString());
    scriptTag.setAttribute('defer', 'defer');
    document.body.appendChild(scriptTag);
  }, [isReady]);

  return null;
}

export default Preview;
