# mongo-express-userauth

A basic user auth with mongoDB Atlas, node and express. 

You can use the code after creating a default.json in config file and filling inside as followed:

{
  "mongoURI": "mongo connection string from Atlas",
  "jwtSecret": "any secret key you choose"
}

React frontend and user auth scripts added on client folder you can run "npm run dev" command in root directory and use both front and backend together.

[You can also read the blog post about the project](https://blog.akbuluteren.com/blog/mongoatlas-express-starter)

*Currently only the mongo connection part is available*
