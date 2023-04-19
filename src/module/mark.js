export const mark = (markedItem) => {
  const prevArray = JSON.parse(localStorage.getItem("markedList"));
  localStorage.setItem(
    "markedList",
    JSON.stringify(prevArray.push(markedItem))
  );
};

export const unmark = (unmarkedItem) => {
  const prevArray = JSON.parse(localStorage.getItem("markedList"));
  const newArray = prevArray.filter((item) => item.name !== unmarkedItem.name);
  localStorage.setItem("markedList", JSON.stringify(newArray));
};
