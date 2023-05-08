export const isLastElement = (index, arr) => index == arr.length - 1;

export const isNotEmptyArray = (arr) =>
  arr != (null || undefined) && arr.length > 0;

export const isEmptyArray = (arr) =>
  arr == (null || undefined) || arr.length <= 0;
