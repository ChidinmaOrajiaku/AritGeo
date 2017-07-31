const assert = require('chai').assert
const myApp = require('../src/main.js');


describe("Determine number progression",function(){
 describe ("Case of neither arithmetic nor geometric progression",function(){
       
       it("should return -1 for [2,4,16,25,34,98]",function(){
            assert.equal(myApp.aritGeo([2,4,16,25,34,98]),"-1")
       });
       
       it("should return -1 for [-2,-10,-19,4,5,17]",function(){
            assert.equal(myApp.aritGeo([-2,-10,-19,4,5,17]),"-1")
       });

       it("should return -1 for [1,2,3,5,8,13]",function(){
            assert.equal(myApp.aritGeo([1,2,3,5,8,13]),"-1")
       });
   });

});