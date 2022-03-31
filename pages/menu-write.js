import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import parse, { domToReact } from 'html-react-parser';
import button from '@components/search/SortBy/sortBy.html.twig';

export async function getServerSideProps () {
  const fs = require('fs');
  const path = require('path');
  const d = new Date();
  const menu = { date: d.toLocaleString(), menu: { random: Math.random(), menu: 'things' } } 

  fs.writeFileSync(path.resolve(__dirname, './menu.json'), JSON.stringify(menu, null, 4));
  return { props: {menu: menu}};
}

export default function Home(menu) {
  console.log(menu);
  return (
    <div className="Foo">Something</div>
  )
}
