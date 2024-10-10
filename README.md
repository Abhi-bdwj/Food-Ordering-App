# Need to ENABLE CORS to allow fetching data from swiggy API
- As we are using third party API(swiggy) we need to allow CORS 

- CORS (Cross-Origin Resource Sharing) is a security feature implemented in web browsers to prevent unauthorized requests from one origin (domain) to another. It allows a server to specify who can access its resources and which HTTP methods are allowed

- How CORS Works
Same-Origin Policy: By default, browsers enforce a same-origin policy that restricts web pages from making requests to a different origin. An origin is defined by the combination of the scheme (http or https), domain (example.com), and port (80, 443, etc.).

Preflight Requests: For certain types of requests (e.g., those that modify data or use custom headers), the browser sends an OPTIONS request to the server to check if the actual request is allowed. This is known as a preflight request.

CORS Headers: The server can respond with specific CORS headers to control access. Key headers include:

Access-Control-Allow-Origin: Specifies which origins are allowed to access the resource. It can be a specific origin or a wildcard (*) to allow all origins.
Access-Control-Allow-Methods: Specifies which HTTP methods (GET, POST, etc.) are allowed.
Access-Control-Allow-Headers: Specifies which headers can be used in the actual request.
Access-Control-Allow-Credentials: Indicates whether credentials (cookies, HTTP authentication) are allowed in the request.


# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Food Delivery App

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Star Rating, cuisine, delery tie
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() - Superpowerful State Variables in react
- useEffect()

# 2 types Routing in web apps

- Client Side Routing
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Install jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
