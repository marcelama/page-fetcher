/*Implement a node app called fetcher.js.

It should take two command line arguments:

-a URL
-a local file path
It should download the resource at the URL to the local path on your machine
Upon completion, it should print out a message like:
Downloaded and saved 1235 bytes to ./index.html. */


const request = require('request');
const fs = require('fs'); // to write the file

//node fetcher.js http://www.example.edu/ ./index.html
const url = process.argv[2];//provided in command line
console.log(url);//http://www.example.edu/

const filePath = process.argv[3];//provided in command line
console.log(filePath); // ./index.html

//make an http request and wait for the response
//After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
request(url, (error, response, body) => {
  // Printing the error if occurred
  if (error) {
    console.log(error);
    // response  if a response was received - save the file with fs (from https://nodejs.dev/en/learn/writing-files-with-nodejs/)
  } fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`); // Print the result ADD FILE SIZE (length)
  });
});
