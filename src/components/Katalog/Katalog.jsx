import React from 'react';
import Grid from '@material-ui/core';

const katalog = [
    {
        id: 1, name: 'ASS', description : 'ABCS'
    },
    {
        id: 2, name: 'ASs', description : 'ABCS'
    }
];

const Katalog = () => {
  <main>
      <Grid container justify="center" spacing={4}>
          {katalog.map((produk)=>(
              <Grid item key={katalog.id} xs={12} sm={6} md={4} lg={3}>
                  <Katalog/>
              </Grid>
          ))}
      </Grid>
  </main>
}

export default Katalog;