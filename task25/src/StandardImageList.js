import React from 'react';

import { ImageList, ImageListItem } from '@mui/material'; // Ensure you have @mui/material installed

const itemData = [
  
  
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.U7ZMmnxUyk-Bpo19ZopWKwHaFf&pid=Api&P=0&h=180',
    title: 'Burger',
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.ifUYNYInpatZGmPpcbS5tQHaJ4&pid=Api&P=0&h=180',
    title: 'Camera',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.-zNhI58BcbIPA3ph9jX71wAAAA&pid=Api&P=0&h=180',
    title: 'Coffee',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.7he6S2-DPXCsIuJ3geSgfAHaE5&pid=Api&P=0&h=180',
    title: 'Hats',
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.Skv5hrok-KQE8Upgf0wMDAHaD1&pid=Api&P=0&h=180',
    title: 'Honey',
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.X4rf899r6Ah_g-KZ8s-pbQHaHa&pid=Api&P=0&h=180',
    title: 'Basketball',
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.W8Vs0vEAlt5tLrqlfN4ztQHaEK&pid=Api&P=0&h=180',
    title: 'Basketball',
  },
];

function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default StandardImageList;
