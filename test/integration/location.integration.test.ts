import { server } from "../../server";
import request from 'supertest'

describe('GET / - get location.', () => {

    afterEach(() => {
        server.close()
    })

    it("Find by ID", async () => {

        expect.assertions(1);

        const id = 1
        const result = await request(server).get(`/api/location/${id}`)
        
        expect(result.statusCode).toBe(200);

    })
})