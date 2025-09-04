const fs = require("fs").promises;

module.exports = (path, data) => {
  fs.writeFile(path, data, { flag: "w" }); //usar a flag a ele escreve embaixo no arquivo ao ivnes de sobreescrever igual na flag w
};
