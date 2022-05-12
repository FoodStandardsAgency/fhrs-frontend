import Head from 'next/head'
import Image from 'next/image'
import sortBy from '@components/components/search/SortBy/sortBy.html.twig';
import input from '@components/components/form/InputField/inputField.html.twig';
import TwigTemplate from '../lib/parse.js';
import React, { useState, useEffect, useMemo } from 'react';

export async function getStaticProps () {
  const fs = require('fs');
  const d = new Date();
  const path = require('path');
  let menu = {};

  return { props: {menu: menu}, revalidate: 120};
}

// Sort by
const sort = {
  options: [
    {
      "text": "Relevance",
      "value": "relevance"
    },
    {
      "text": "Most recent",
      "value": "created"
    },
    {
      "text": "Alphabetical",
      "value": "alpha"
    }
  ], 
  sort_by: 'Sort by'
};
const sortAttribs = [
  {
    id: "sort",
    addAttribs: { 'onChange': (e) => { console.log('foo', e.target.value);  } }
  }
];

// Business name
const businessNameField = {
  name: 'business',
  id: 'business',
  label: 'Business name',
  caption: '',
  required: 'required',
  value: '',
  type: 'text',
  prefix: '',
  nested: true
};

const addressField = {
  name: 'address',
  id: 'address',
  label: 'Address',
  caption: '',
  required: 'required',
  value: 'Default address',
  type: 'text',
  prefix: '',
  nested: true
};

export default function Home(menu) {
  const [business, setBusiness] = useState(businessNameField.value);
  const [address, setAddress] = useState(addressField.value);
  const businessAttribs = [
    {
      id: "business",
      addAttribs: { 'onChange': (e) => { setBusiness(e.target.value); } }
    }
  ];
  const addressAttribs = [
    {
      id: "address",
      addAttribs: { 'onChange': (e) => { setAddress(e.target.value); } }
    }
  ];

  useMemo(() => { console.log(`Business ${business}`);  }, [business]);
  useMemo(() => { console.log(`Address ${address}`);  }, [address]);
  
  return (
    <div>
      <TwigTemplate template={sortBy} values={sort} attribs={sortAttribs} />
      <TwigTemplate template={input} values={businessNameField} attribs={businessAttribs} />
      <TwigTemplate template={input} values={addressField} attribs={addressAttribs} />
    </div>
  )
}
