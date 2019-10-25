export const getRegistrationStep = (profile) => {
  const user = { ...profile };
  if (user.ownership !== ''
    && user.cf_1130 !== ''
    && user.cf_1132 !== ''
    && user.phone !== ''
    && user.profesion !== ''
    && user.fecha_nacimiento !== ''
    && user.pais_nacimiento !== ''
    && user.entidad_nacimiento !== ''
    && user.cf_1368 !== ''
    && user.cf_1372 !== ''
    && user.cf_1370 !== ''
    && user.cf_1382 !== ''
  ) {
    return 1;
  }
  return 0;
};

export default {
  getRegistrationStep,
};
