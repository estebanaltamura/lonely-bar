'use client';

import { Box } from '@mui/material';
import React from 'react';
import carta from '../../carta.json';

const Carta: React.FC = () => {
  return (
    <Box
      className='newsReaderFont'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '0 13px',
        color: '#FCF0DD',
      }}
    >
      {/* Título de sección */}
      <Box sx={{ width: '300px', color: 'white', fontSize: '41px' }}>
        Cocktails de autor
      </Box>

      {/* Items container*/}
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
        {carta.cocktails.map((item, index) => (
          <Box key={index} sx={{ marginBottom: '10px' }}>
            {/* header */}
            <Box sx={{ display: 'flex', width: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '80px',
                  flexWrap: 'wrap',
                  fontSize: '25px',
                }}
              >
                {item.title}
              </Box>
              <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
              <Box
                sx={{ display: 'flex', alignItems: 'end' }}
              >{`${item.price} €`}</Box>
            </Box>
            {/*Description */}
            <Box
              sx={{
                position: 'relative',
                lineHeight: '18px',
                fontSize: '14px',
                marginTop: '7px',
                paddingLeft: '8px',
              }}
            >
              <Box
                sx={{
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '10%',
                    bottom: '10%',
                    width: '1px',
                    backgroundColor: '#FCF0DD',
                  },
                }}
              ></Box>
              {item.description}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carta;
