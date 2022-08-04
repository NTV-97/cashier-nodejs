export const removeEmptyObject = <T>(object: T): T => {
  const newObj: any = {};
  Object.keys(object).forEach((key) => {
    //@ts-ignore
    if (object[key] === Object(object[key])) newObj[key] = removeEmptyObject(object[key]);
    //@ts-ignore
    else if (object[key] !== undefined) newObj[key] = object[key];
  });
  return newObj;
};
