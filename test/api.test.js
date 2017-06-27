const assert = require('chai').assert
const request = require('supertest')
const server = require('../server')

let review
const valid = {
  author_name: 'test',
  text: 'some text',
  place_id: 'nonexistentid321',
  rating: 2
}
const invalid = {
  author_name: 'test',
  text: 'some text',
  rating: 2
}

describe('Review REST API', () => {
  describe('POST /api/review', () => {
    it('sould return 401 with invalid data', () => {
      return request(server)
        .post('/api/review')
        .send(invalid)
        .expect(400)
    })
    it('should return 201 with valid data', async () => {
      const res = await request(server)
        .post('/api/review')
        .send(valid)
        .expect(201)
      review = res.body
    })
  })
  describe('GET /api/review', () => {
    it('should return a json array', async () => {
      const res = await request(server)
        .get('/api/review')
        .set('Accept', 'application/json')
      assert(res.status === 200 || res.status === 206)
      assert.isArray(res.body)
    })
  })
  describe('GET /api/review/:id', () => {
    it('should return a review with a valid id', async () => {
      const res = await request(server)
        .get(`/api/review/${review._id}`)
        .set('Accept', 'application/json')
        .expect(200)
      assert.deepEqual(delete res.body._id && delete res.body.__v && res.body, valid)
    })
    it('should return 404 with an ivalid id', () => {
      return request(server)
        .get(`/api/review/59514237bf5a274f5423b96d`)
        .set('Accept', 'application/json')
        .expect(404)
    })
  })
  describe('DELETE /api/review/id', () => {
    it('should return 400 with a valid id', () => {
      return request(server)
        .delete(`/api/review/${review._id}`)
        .expect(200)
    })
    it('should return 404 with an invalid id', () => {
      return request(server)
        .delete('/api/review/59514237bf5a274f5423b96d')
        .expect(404)
    })
  })
})

describe('API documentation', () => {
  it('GET /api should return the API docs', async () => {
    const res = await request(server)
      .get('/api')
      .set('Accept', 'application/json')
      .expect(200)
    assert.property(res.body, 'swagger')
    assert.property(res.body, 'info')
    assert.property(res.body, 'definitions')
    assert.property(res.body, 'paths')
  })
})
