const { References } = require('../models');
const SqlGo = require('../utils/SqlGo');
const { pick } = require('lodash');
const { findOneByData, findById, save, removeById } = require("../helpers");

exports.showAll = async(req, res) => {
  try{
    const { query } = req;
    const results = await SqlGo(References)
      .like("type", query.type)
      .getSeries();

    res.json({
      status: "success",
      data: results,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: `Nie udało się pobrać słowników. ErrorMessage: ${error}`,
    });
  }
  
}

exports.save = async (req, res) =>{
  try{
   const { body } = req // zostawiam możliwie do przerobienia podajac dodatkowo id
    const data = pick(body,[
      "id",
      "nazwa",
      "projekt",
      "od",
      "do",
      "firma",
      "tematyka",
      "beneficjent",
      "img_name"
    ])

    const processedData = { // zostawiam możliwie do przerobienia podajac dodatkowo id 
      ...data
    };
    await save({
      model: References,
      data: processedData
    })
    res.json({
      status: "success",
      message: "Książka została dodana"
    })

  }catch(error){
    console.error('błąd podczas zapisywania książki ', error)
    res.json({
      status: error,
      message: "Błąd" + error.message
    })
  }
}

exports.remove = async (req, res) => {
  const id = req.params.id;
  removeById({ id: id, model: References});
};