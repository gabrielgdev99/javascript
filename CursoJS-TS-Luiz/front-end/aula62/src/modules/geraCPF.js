import ValidCPF from "./validaCPF";

export default class GenerateCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  generateNewCPF() {
    const noDigitCPF = this.rand();
    const digit1 = ValidCPF.createDigit(noDigitCPF);
    const digit2 = ValidCPF.createDigit(noDigitCPF + digit1);
    const newCpf = noDigitCPF + digit1 + digit2;
    return this.formatCPF(newCpf);
  }
  formatCPF(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 11)
    );
  }
}
