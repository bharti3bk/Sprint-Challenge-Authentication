const request = require("supertest");
const server = require("../api/server.js");   

//Test for Register
describe("/register", () => {
    it("should return a 201  request status", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "fnu", password: "bharti" });
        expect(response.status).toBe(201);
    })   
}) 
// Test for Login
describe("/Login" , () => {
    it("should return request status 200" , async () => {
        const tstResult = await request(server)
        .post("/api/auth/login")
        .send({ username: "fnu", password: "bharti" })
       expect(tstResult.status).toBe(200);
    })
}) 

describe("/GET" , () => {

})