# newslive
 An Interactive Web Application that contains news articles on different categories like Technology, Politics,
Entertainment etc:
# Technologies Used
  * React Js
  * ExpressJs
  * MongoDB
  * NodeJs
# Usage (run fullstack app on your machine)
  ## Prerequisites
  * <a href="https://nodejs.org/en/download/" target="_blank">Node</a>
  * <a href="https://nodejs.org/en/download/package-manager/" target="_blank">npm</a>
  ## Client-side usage(PORT: 3000)
 ```
    $ cd client   // go to client folder
    $ npm i       // npm install packages
    $ npm run dev // run it locally

    // deployment for client app
    $ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
    $ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site  
```
  ## Server-side usage(PORT: 8000)
    ```
    $ cd server   // go to server folder
    $ npm i       // npm install packages
    $ npm run dev // run it locally
    $ npm run build // this will build the server code to es5 js codes and generate a dist file
   ```
