const assert = require('chai').assert
const myApp = require('../src/main.js');


describe("Determine number progression",function(){
   
   describe("Case of empty array",function(){
      it("should return 0 for an empty array",function(){
          assert.equal(myApp.aritGeo([]),0);
      });
   }); 
