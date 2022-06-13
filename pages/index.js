import Head from 'next/head'
import Image from 'next/image'
import sortBy from '@components/components/search/SortBy/sortBy.html.twig';
import input from '@components/components/form/InputField/inputField.html.twig';
import TwigTemplate from '../lib/parse.js';
import React, { useState, useEffect, useMemo, componentDidMount } from 'react';
import api from '../lib/api.js';

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

// Test data for the ratings api
//   const data = async () => {
//     // Regions
//     console.log('Regions');
//     console.log("pages", await api.setType('regions', {pageNumber: 2, pageSize: 5}).getResults());
//     console.log("basicPages", await api.setType('regions', {pageNumber: 2, pageSize: 5, basic: true}).getResults());
//     console.log("basic", await api.setType('regions', {basic: true}).getResults());
//     console.log("all", await api.setType('regions').getResults());
//     console.log("single", await api.setType('regions', {id: 5}).getResults());
//     // Authorities
//     console.log('Authorities');
//     console.log("pages", await api.setType('authorities', {pageNumber: 2, pageSize: 5}).getResults());
//     console.log("basicPages", await api.setType('authorities', {pageNumber: 2, pageSize: 5, basic: true}).getResults());
//     console.log("basic", await api.setType('authorities', {basic: true}).getResults());
//     console.log("all", await api.setType('authorities').getResults());
//     console.log("single", await api.setType('authorities', {id: 5}).getResults());
//     // Business Types
//     console.log('Business Types');
//     console.log("pages", await api.setType('businessTypes', {pageNumber: 2, pageSize: 5}).getResults());
//     console.log("basicPages", await api.setType('businessTypes', {pageNumber: 2, pageSize: 5, basic: true}).getResults());
//     console.log("basic", await api.setType('businessTypes', {basic: true}).getResults());
//     console.log("all", await api.setType('businessTypes').getResults());
//     console.log("single", await api.setType('businessTypes', {id: 5}).getResults());
//     // Countries
//     console.log('Countries');
//     console.log("pages", await api.setType('countries', {pageNumber: 2, pageSize: 5}).getResults());
//     console.log("basicPages", await api.setType('countries', {pageNumber: 2, pageSize: 5, basic: true}).getResults());
//     console.log("basic", await api.setType('countries', {basic: true}).getResults());
//     console.log("all", await api.setType('countries').getResults());
//     console.log("single", await api.setType('countries', {id: 2}).getResults());
//     // Establishments
//     console.log('Establishments');
//     console.log("basicPages", await api.setType('establishments', {pageNumber: 2, pageSize: 5, basic: true}).getResults());
//     console.log("basic", await api.setType('establishments', {basic: true}).getResults());
//     console.log("single", await api.setType('establishments', {id: 4}).getResults());
//     console.log("withParams", await api.setType('establishments', {}, {name: 'mcdonalds', ratingKey: '1'}).getResults());
//     // Scheme types
//     console.log('Scheme types');
//     console.log("all", await api.setType('schemetypes').getResults());
//     // Sort Options
//     console.log('Sort options');
//     console.log("all", await api.setType('sortoptions').getResults());
//     // Score descriptors
//     console.log('Score descriptors');
//     console.log("all", await api.setType('scoredescriptors', {establishmentId : '4'}).getResults());
//     // Ratings
//     console.log('Ratings');
//     console.log("all", await api.setType('ratings').getResults());
//     // Ratings operators
//     console.log('Rating operators');
//     console.log("all", await api.setType('ratingoperators').getResults());
//   }
  return (
    <div>
      <TwigTemplate template={sortBy} values={sort} attribs={sortAttribs} />
      <TwigTemplate template={input} values={businessNameField} attribs={businessAttribs} />
      <TwigTemplate template={input} values={addressField} attribs={addressAttribs} />
    </div>
  )
}
