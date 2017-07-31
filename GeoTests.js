const assert = require('chai').assert
const myApp = require('../src/main.js');


describe("Determine number progression",function(){
   describe("Case of geometric progression",function(){
      
       it("should return Geometric for [2,4,8,16,32,64]",function(){
           assert.equal(myApp.aritGeo([2,4,8,16,32,64]),"Geometric")
       });
       
       it("should return Geometric for [-5,-10,-20,-40,-80,-160]",function(){
           assert.equal(myApp.aritGeo([-5,10,-20,40,-80,160]),"Geometric")
       });

       it("should return Geometric for [0.5,0.25,0.125,0.0625,0.03125]",function(){
           assert.equal(myApp.aritGeo([0.5,0.25,0.125,0.0625,0.03125]),"Geometric")
       });
   });

  });