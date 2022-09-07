const nextElementInList = (list, value) => {
  const currentActionIndex = list.indexOf(value);
  const nextValueIndex = (currentActionIndex + 1) % list.length;
  return list[nextValueIndex];
};

export default nextElementInList;
