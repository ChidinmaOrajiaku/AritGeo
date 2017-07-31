const assert = require('chai').assert
const myApp = require('../src/main.js');


describe("Determine number progression",function(){
   describe("Case of arithmetic progression",function(){

      it("should return Arithmetic for [5,10,15,20]",function(){
         assert.equal(myApp.aritGeo([5,10,15,20]),"Arithmetic");
      });

      it("should return Arithmetic for [3,6,9,12,15,18,21,24]",function(){
         assert.equal(myApp.aritGeo([3,6,9,12,15,18,21,24]),"Arithmetic");
      });

      it("should return Arithmetic for [8,6,4,2,0,-2,-4,-6]",function(){
         assert.equal(myApp.aritGeo([8,6,4,2,0,-2,-4,-6]),"Arithmetic");
      });

   });