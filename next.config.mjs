/** @type {import('next').NextConfig} */
const nextConfig = {
    // To build and deploy your application using the Image component from React, 
    // it is essential to manage image loading through a custom loader file.
    
    // Uncomment the following lines to configure the output settings and image loader:
    /*
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './loader.js'
    }
    */

    // When you navigate to the URL: yourDomainName/bookstore, 
    // you will access the website.
    // Ensure that you create a directory named 'bookstore' on your deployment server, 
    // where you will place all the files from the 'out' folder generated during the build process.

    // Uncomment the following lines to set the base path and asset prefix:
    /*
    basePath: '/bookstore',
    assetPrefix: '/bookstore/',
    */
};

export default nextConfig;
