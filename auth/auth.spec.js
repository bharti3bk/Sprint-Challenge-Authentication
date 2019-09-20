const request = require("supertest");
const server = require("../api/server.js");    
const Users = require("../users/usersModel.js");

//Test for Register
describe("/register", () => {
    it("should return a 201  request status", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "fnu", password: "bharti" });
        expect(response.status).toBe(201);
    })   
})  
// for status code 500 
describe("/register" , () => {
    it("returns status 500" , async () => {
        const response = await request(server) 
        .post("api/auth/register")
        .send({username: "abc" , password: "hello"})
        expect(response.status).toBe(500);
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

// for status code 500
describe("/Login" , () => { 
    it("returns status 500" , async() => {
        const response = await request(server) 
        .post("api/auth/login")
        .send({username: "abc" , password: "hello"})
        expect(response.status).toBe(500);
    })

})  
// Tests For GetEndpoint  
describe("GET/" , () => {
    it("should return {api : 'working'}") , async () => {
      const res = await request(server).get('/');
      expect(res.body.api).toBe('working');
      expect(res.body).toEqual({api : 'working'});
    }
})
describe("GET/" , () => {
    it('returns 200 status', ()  => {
        return request(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200);
        })
    })
})  

// Tests for jock enpoints
describe("GET /api/jokes" , () => {
  it('returns status 400' , () => {
      return request(server).get('/api/jokes')
      .then(response => {
          expect(response.status).toBe(400)
      })
  })
})  
describe('GET /api/jokes' , () => {
    it('requires authorization' , () => {
        return request(server)
        .get('/api/jokes')
        .then(results => {
            expect(results.status).toBe(400);
            expect(results.body.message).toBe('No Creds Provided');
        })
    })
})
describe('GET /api/jokes' , () => {
    it('should return a json object' ,  async () => {
       const response = await request(server).get('/api/jokes');
      expect(response.type).toMatch(/json/i);
    })
}) 



