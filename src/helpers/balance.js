export const transformBalance = (datos) => {
  const format = Object.keys(datos).map((key) => {
    const campos = datos[key];
    const { TOTAL, ...sobras } = campos;

    const metodos = Object.keys(sobras).map(id => ({
      label: id,
      value: sobras[id],
    }));

    return { label: key, TOTAL, metodos };
  });

  return format;
};

export const transformCCInfo = (datos) => {
  const newDatos = Object.keys(datos).map((key) => {
    const type = { ...datos[key] };

    type.Efectivo = Object.keys(type.Efectivo).map((optionKey) => {
      const field = type.Efectivo[optionKey];
      if (typeof field === 'object') {
        field.id = optionKey;
        return { ...field };
      }
      return null;
    }).filter(el => el != null);

    return { ...type, label: key };
  });

  return newDatos;
};

export const validateCheckbox = (checkboxes, id) => (
  checkboxes[id] === undefined ? true : checkboxes[id]
);

export default {
  transformCCInfo,
  transformBalance,
};
