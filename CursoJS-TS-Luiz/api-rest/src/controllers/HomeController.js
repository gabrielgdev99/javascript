import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Rodnei",
      sobrenome: "Rodrigo",
      email: "rodnei@gmail.com",
      idade: 21,
      peso: 60,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
