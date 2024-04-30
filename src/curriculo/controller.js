const pool = require('../db');
const queries = require('./queries');

const getCurriculo = (req, res) => {
    pool.query(queries.getCurriculo, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    } )
};

const getCurriculoById = (req, res) =>{
   const id = parseInt(req.params.id);
   pool.query(queries.getCurriculoById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
   });
}
const addCurriculo = (req, res) =>{
    const {nome, idade, email, numero, escolaridade, instituicao} = req.body;
    pool.query(queries.checkEmailExist, [email], (error, results)=>{
        if(results.rows.length){
            res.send("esse email já existe");
        }

        pool.query(queries.addCurriculo, [nome, idade, email, numero, escolaridade, instituicao], (error, results) => {
            if (error) throw error;
            res.status(201).send("curriculo criado com sucesso");
            
        });
    });

};

const removeCurriculo =(req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeCurriculo, [id], (error, results) => {
        const noCurriculoFound = !results.rows.length;
        if(noCurriculoFound){
            res.send("esse curriculo não existe mais");

        }
        pool.query(queries.removeCurriculo,[id], (error, results) =>{
            if (error) throw error;
            res.status(200).send("curriculo removido com sucesso");
        });
    });
};

const updateCurriculo = (req, res) =>{
    const id = parseInt(req.pareams.id);
    const {nome} = req.body;

    pool.query(queries.getCurriculoById, [id], (error, results) =>{
        if(noCurriculoFound){
            res.send("esse curriculo não existe mais");

        }
    pool.query(queries.updateCurriculo,[nome, id], (error, results) =>{
        if (error) throw error;
        res.status(200).send("update de sucesso");
    })    

    })

}

module.exports = {
    getCurriculo,
    getCurriculoById,
    addCurriculo,
    removeCurriculo,
    updateCurriculo,


};