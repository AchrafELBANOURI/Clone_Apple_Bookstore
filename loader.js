// If you intend to build and deploy your application, consider the following points:
/*
    The `loader.js` file is responsible for loading external resources, 
    such as JavaScript libraries, CSS files, images, and other assets. 
    It dynamically inserts these resources into the DOM as needed.
    
    In our case, we specifically need it to load images efficiently.
    
    After implementing the necessary changes, you can run the following command to build your application:
    npm run build
    
    Upon successful execution, you will find an `out` folder in your project directory. 
    This `out` folder contains the compiled assets, which can be used for deploying your application.

    Remember to create a directory named 'bookstore' on your deployment server, 
    where you will place all the files from the 'out' folder generated during the build process.
*/

// "use client"

// export default function myImageLoader( { src , width , quality } ){
//     if(src.startsWith('https://images.pexels.com')) return src // For external images
//     return `https://yourDomainName.net/${src}?w=${width}&q=${quaity || 75}`
// }
