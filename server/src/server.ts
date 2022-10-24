import express, { response } from 'express';

const app = express();

/**
 * HTTP Codes:
 * 200..(Sucesso),
 * 300..(Redirecionamento),
 * 400..(Erros de Aplicação),
 * 500..(Erros inesperados)
 */

/**
 * Parametros:
 * Query: Vem no "?" da url => É usado quando é necessario persistir estado (filtros, paginacao)
 *        Nao é usado para informacoes sensiveis
 *        Todos os parametros sao nomeados
 * Route: Vem na rota. Ex: ads/5
 *        Usado quando quer fazer a identificacao de um recurso na api
 * Body:  Enviar varias informacoes em uma unica requisicao (Formularios)
 *        Envio de informacoes sensiveis
 */

app.get('/games', (req, res) => {
  return res.json([]);
});

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
});

app.get('/games/:id/ads', (req, res) => {
  // const gameId = req.params.id;

  return res.json([
    { id: 1, name: 'Anuncio 1' },
    { id: 2, name: 'Anuncio 2' },
    { id: 3, name: 'Anuncio 3' },
    { id: 4, name: 'Anuncio 4' },
  ]);
});

app.get('/ads/:id/discord', (req, res) => {
  // const adId = req.params.id;

  return res.json([]);
});

app.listen(3333);
