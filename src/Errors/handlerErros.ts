const noContent = () => {
  throw 'The Modal body content it is required';
};

const noTitle = () => {
  throw 'You need put Title options';
};

export default { noContent, noTitle };
