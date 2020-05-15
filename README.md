# fetch-store-json
[![npm v1.1.3](https://img.shields.io/badge/npm-v1.1.3-blue)](https://github.com/nishanthbs1998/fetch-store-json)

This package lets you fetch data from an API and store it into a file in JSON format

## Installing
```
npm install fetch-store-json
```
## Inputs
You need to provide 7 inputs in this order:
```
(API-Endpoint-URL,client_id,client_secret,authorization,starting_page_number,ending_page_number,page_size)
```
**Note:** 
1. API_Endpoint_URL,client_id,client_secret and authorization must all be in strings. The remaining three parameters must be integers.
2. Do not include query parameter symbol `?` at the end of the API_Endpoint_URL.

## Example
```
const fetch=require('fetch-store-json');
fetch('https://www.somesite.com/api-2.0/courses/','paste_your_client_id','paste_your_client_secret','paste_your_authorization',1,10,1000);
```
