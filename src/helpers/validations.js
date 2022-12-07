const isEmpty = (value) => {
  return value.length > 0;
};

const nameValidation = (name) => {
  return isEmpty(name);
};

const sectionValidation = (section) => {
  return isEmpty(section);
};

export { nameValidation, sectionValidation };
