export default class StringFormat {
  static removeMaskCNPJ(cnpj) {
    return cnpj.replace(/(\.|\/|-)/g, "");
  }

  static removeMaskNumber(value) {
    return value.replace(/(\.|\/|,)/g, "");
  }

  static removeMaskCurrency(value) {
    return parseFloat(
      String(value)
        .replace("R$", "")
        .replace(/(\.)/g, "")
        .replace(",", ".")
        .trim()
    ).toFixed(2);
  }

  static formatRateWithPoint(value) {
    return value && value.toString().replace(".", ",");
  }

  static formatPhone(phone) {
    const rawPhone = phone.replace(/\D/g, "");

    phone = rawPhone
      .replace(/\D/g, "")
      .replace(/(\d{10,11})(.*)/g, "$1")
      .replace(/^(\d{2})(\d)/g, "($1)$2");

    const regex =
      rawPhone.length < 11
        ? /^(\(\d{2}\))(\d{4})(\d)/g
        : /^(\(\d{2}\))(\d{5})(\d)/g;

    return phone.replace(regex, "$1 $2-$3");
  }

  static formatDateWithHiffen(value) {
    return value && value.toString().replace("-", "/").replace("-", "/");
  }

  static formatDecimal(value) {
    if (value) {
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{2})(\d)/, "$1,$2");
      value = value.replace(/(\d{2})(\d)/, "$1,$2");
      value = value.replace(/([0-9]{2}\.[0-9]{2})(.*)/, "$1");
      return value;
    }
  }

  static inputMaskMonetary(value) {
    try {
      value = value.toString().replace(".", ",");
      if (value.toLocaleString().indexOf(",") >= 0) {
        return value
          .toString()
          .split(/(?=(?:\d{3})+(?:,|$))/g)
          .join(".");
      } else {
        return value
          .toString()
          .split(/(?=(?:\d{3})+(?:.|$))/g)
          .join(",");
      }
    } catch (ex) {
      return "erro";
    }
  }

  static formatMaskCEP(value) {
    if (value) {
      value = value.replace(/\D/g, "");
      value = value.substring(0, 5) + "-" + value.substring(5, 10);
      return value;
    }
  }

  static formatToMonetary(value) {
    try {
      value = Math.abs(parseFloat(value))
        .toFixed(2)
        .toString()
        .replace(".", ",");
      if (value.toLocaleString().indexOf(",") >= 0) {
        return value
          .toString()
          .split(/(?=(?:\d{3})+(?:,|$))/g)
          .join(".");
      } else {
        return value
          .toString()
          .split(/(?=(?:\d{3})+(?:.|$))/g)
          .join(",");
      }
    } catch (ex) {
      return "erro";
    }
  }

  static removeMaskCPF(cpf) {
    return cpf.replace(/(\.|\/|-)/g, "");
  }

  static formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1-$2");
    cpf = cpf.replace(/([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})(.*)/, "$1");
    return cpf;
  }

  static formatCNPJ(cnpj) {
    cnpj = StringFormat.justNumber(cnpj);
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
    return cnpj;
  }

  static justNumber(d) {
    return d.replace(/\D/g, "");
  }

  static removeSpecialCharacter(text) {
    return text.replace(/[^a-zA-Z0-9]+/gi, "");
  }

  static replaceSpecialCharacter(text) {
    text = text.replace(/[ÀÁÂÃÄÅ]/g, "A");
    text = text.replace(/[àáâãäå]/g, "a");
    text = text.replace(/[ÈÉÊË]/g, "E");
    text = text.replace(/[éèẽê]/g, "e");
    text = text.replace(/[íìĩî]/g, "i");
    text = text.replace(/[ÍÌĨÎ]/g, "I");
    text = text.replace(/[óòõô]/g, "o");
    text = text.replace(/[ÓÒÕÔ]/g, "O");
    text = text.replace(/[úùũû]/g, "u");
    text = text.replace(/[ÚÙŨÛ]/g, "U");
    text = text.replace(/[ç]/g, "c");
    text = text.replace(/[Ç]/g, "C");
    return text;
  }

  static encodingCardName(name) {
    if (name.indexOf("Refei") !== -1) {
      return "Refeição";
    } else if (name.indexOf("Alim") !== -1) {
      return "Alimentação";
    } else if (name.indexOf("Prem") !== -1) {
      return "Premiação";
    } else if (name.indexOf("Mult") !== -1) {
      return "Multibenefício";
    }
    return name;
  }
}
