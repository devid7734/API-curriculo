
const getCurriculo = "SELECT * FROM curriculos";
const getCurriculoById = "SELECT * FROM curriculo id = $1";
const checkEmailExist = "SELECT s FROM curriculo s WHERE s.email =$1";
const addCurriculo ="INSERT INTO curriculo (nome, idade, email, numero, escolaridade, instituicao) VALUES($1,$2,$3, $4)";
const removeCurriculo ="DELETE FROM curriculo WHERE id= $1";
const updateCurriculo = "UPDATE curriculo SET nome = $1 WHERE id = $2";


module.exports = {
    getCurriculo,
    getCurriculoById,
    checkEmailExist,
    addCurriculo,
    removeCurriculo,
    updateCurriculo,
};