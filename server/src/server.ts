import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';
const app = express();

app.use(express.json());

/**
 * Limite os frontend q podem fazer as requisições,
 * sem passar parâmetro para o cors, ele aceita todos
 */
app.use(cors());

const prisma = new PrismaClient({
  log: ['query'],
});

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

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.json(games);
});

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body = request.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return response.status(201).json(ad);
});

app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return res.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
      };
    })
  );
});

app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json({
    discord: ad.discord,
  });
});

app.listen(3333);
