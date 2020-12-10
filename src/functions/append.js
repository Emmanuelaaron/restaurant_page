const appends = (myContainer, elementsArray) => {
  for (let i = 0; i < elementsArray.length; i += 1) {
    myContainer.appendChild(elementsArray[i]);
  }
};

export default appends;