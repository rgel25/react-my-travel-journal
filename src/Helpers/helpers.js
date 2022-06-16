const formatDate = function (date) {
  // prettier-ignore
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const toFormat = new Date(date);
  const formatedDate = `${
    month[toFormat.getMonth()]
  } ${toFormat.getDate()}, ${toFormat.getFullYear()}`;
  return formatedDate;
};

export default formatDate;
