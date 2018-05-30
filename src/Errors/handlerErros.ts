const noContent = () => {
  throw 'The Modal body content it is required';
};

const noTitle = () => {
  throw 'You need put Title options';
};

const oneElement = () => {
  throw 'Only one element';
};

const errorIntern = () => {
  throw 'Ipss Upsss error internal';
};

const needAdd = () => {
  throw 'you have not placed the data correctly';
};

export default { noContent,
                 noTitle,
                 oneElement,
                 errorIntern,
                 needAdd };
