const express = require('express');
const router = express.Router();
const axios = require('axios');
const FipeController = require('./controller.fipe')

/* GET home page. */
router.get('/', (req, res) => {
  res.json("Nada por aqui...")
})
router.get('/marcas', async (req, res) => {
  const { data } = await axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')

  res.json(data);
});

router.get('/marcas/:id', async (req, res) => {
  const { id } = req.params;

  const { data } = await axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`);

  res.json(data);
});

router.get('/marcas/:idMarca/:idModelo', async (req, res) => {
  const { idMarca, idModelo } = req.params;

  const { data } = await axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${idMarca}/modelos/${idModelo}/anos`)

  res.json(data);
});

router.get('/marcas/:idMarca/:idModelo/:idAno', async (req, res) => {
  const { idMarca, idModelo, idAno } = req.params;

  const { data } = await axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${idMarca}/modelos/${idModelo}/anos/${idAno}`)

  res.json(data);
});


/* POST home page. */
router.post('/criar', FipeController.getVehicle);

module.exports = router;
