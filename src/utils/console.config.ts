/* eslint-disable no-console */
import util from "util";

// Sobrescreve o console.log globalmente para formatar objetos automaticamente
const originalLog = console.log;

console.log = (...args) => {
  const formattedArgs = args.map((arg) =>
    typeof arg === "object" && arg !== null
      ? util.inspect(arg, { depth: null, colors: true })
      : arg,
  );
  originalLog(...formattedArgs);
};

// Exporta vazio apenas para permitir o import
export {};
