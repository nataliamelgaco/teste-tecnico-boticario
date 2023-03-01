jest.mock('../../models/repositorioGithubModel.js');
const customExpress = require('../../config/customExpress');
const request = require('supertest');

const app = customExpress();

describe('Testes da classe controllers/repositorioGithubController.js', () => {
  test('Deve listar os repositórios com sucesso', async () => {
    const res = await request(app).get('/repositorio-github');

    expect(res.status).toEqual(200);
  })

  test('Deve executar a busca de um repositório específico a partir do nome com sucesso', async () => {
    const nome = 'any_nome';
    const res = await request(app).get('/repositorio-github/'+nome);

    expect(res.status).toEqual(200);  
  })

  test('Deve salvar um repositório com sucesso', async () => {
    const nome = 'any_nome';

    const res = await request(app).post('/repositorio-github/'+nome);

    expect(res.status).toEqual(201);
  })
})
