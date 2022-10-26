import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { ChakraProvider } from '@chakra-ui/react'




const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ChakraProvider>

            <BrowserRouter>
                <h1>asd</h1>
            </BrowserRouter>
            
        </ChakraProvider>

    </React.StrictMode>
)