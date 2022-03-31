import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import parse, { domToReact } from 'html-react-parser';
import button from '@components/search/SortBy/sortBy.html.twig'

export async function getStaticProps () {
  const fs = require('fs');
  const d = new Date();

  const menu = JSON.parse(fs.readFileSync('data/menu.json', 'utf8'));
  


  return { props: {menu: menu}, revalidate: 120};
}


export default function Home(menu) {
  const foo = button({options: [
  {
    "text": "Relevance",
    "value": "relevance"
  },
  {
    "text": "Most recent",
    "value": "created"
  }
  ], sort_by: 'Sort by'} );
  const compares = [
    {
      class: "sort__select",
      addAttribs: { 'onChange': (e) => { console.log('foo', e);  } }
    }
  ];
  const baz = parse(foo,
    { replace: (node) => {
      if (!node.attribs) {
        return;
      }
      compares.forEach((compare) => { 
        if (node.attribs.class === compare.class) {
          node.attribs = { ...compare.addAttribs, ...node.attribs };
          return node;
        }
      });
    }  
  });
  console.log(menu);
  return (
    <div className="Foo">{baz}</div>
  )
}
