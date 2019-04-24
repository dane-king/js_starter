- Initial dependency on rxjs and axios, remove from package.json before install if not needed 
- Babel is handling typescript conversion
- [Info](https://iamturns.com/typescript-babel/)
    - it strips out typescript info for speed
    - separate typescript task to check type
- Since all files are now ts, need to add resolve to webpack
- using babel-jest for Jest setup, and also needed to moduleFileExtensions for .ts
- had to add test env to babel to convert to ES5 since node doesn't support imports
    - seems like we could solve this somehow with a babel plugin
    
#### Usage
- download zip
- copy to work directory
- cd into root
```javascript
npm install
npm test //to verify
```
