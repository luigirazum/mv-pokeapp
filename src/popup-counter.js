// counts the number of elements of a given class

const CounterCheck = (pClassName) => {
  const contaExist = document.getElementsByClassName(`${pClassName}`);
  return contaExist.length;
};

export default CounterCheck;