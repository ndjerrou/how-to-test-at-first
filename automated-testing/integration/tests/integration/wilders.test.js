const request = require('supertest');

let server;

const Wilder = require('../../models/Wilder');
const mongoose = require('mongoose');

describe('/api/wilders', () => {
  beforeEach(() => {
    server = require('../../index');
  });
  afterEach(async () => {
    server.close();
    await Wilder.deleteMany({});
  });
  describe('GET /', () => {
    it('should return all wilders', async () => {
      const wilders = [
        { name: 'w1', city: 'Paris', skills: [{ title: 'PHP', vote: 10 }] },
        {
          name: 'w2',
          city: 'Marseille',
          skills: [{ title: 'Deno', vote: 10 }],
        },
      ];

      await Wilder.collection.insertMany(wilders);

      const res = await request(server).get('/api/wilders');

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((g) => g.city === 'Paris')).toBeTruthy();
      expect(res.body.some((g) => g.city === 'Marseille')).toBeTruthy();
    });
  });

  describe('GET /:id', () => {
    it('should return a wilder if valid id is passed', async () => {
      const wilder = new Wilder({
        name: 'w1',
        city: 'Paris',
        skills: [{ title: 'Javascript', vote: 10 }],
      });
      await wilder.save();

      const res = await request(server).get('/api/wilders/' + wilder._id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('name', wilder.name);
    });

    it('should return 404 if invalid id is passed', async () => {
      const res = await request(server).get('/api/wilders/1');

      expect(res.status).toBe(404);
    });
  });
});
