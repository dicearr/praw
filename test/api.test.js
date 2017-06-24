const assert = require('chai').assert
const request = require('supertest')
const server = require('../server')

describe('/api/review operations', () => {
  it('GET /api/review should return a list of reviews', async () => {
    const res = await request(server)
      .get('/api/review')
      .set('Accept', 'application/json')
      .expect(200)
    assert.isArray(res.body, 'Should be an array')
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
