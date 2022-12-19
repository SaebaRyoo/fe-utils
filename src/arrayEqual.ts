const arrayEqual = (arr1: any[], arr2: any[]): boolean => {
  if (arr1 === arr2) return true;
  if (arr1.length != arr2.length) return false;

  let i = 0;
  const len = arr1.length;

  while (i < len - 1) {
    if (arr1[i] !== arr2[i]) return false;
    i++;
  }

  return true;
};

export { arrayEqual };
