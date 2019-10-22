import { curry, prop, descend, sort, filter, map } from "ramda";

export const getFirstLetter = (letters: string) =>
  letters && letters[0] ? letters[0].toUpperCase() : "";

export const sortByKey = (data?: any, key?: string) => {
  const byKey: any = descend(prop(key || ""));
  return sort(byKey, data);
};

export const getFilteredData = (data: any, key: string, value?: any) => {
  const isArray = typeof value === "object" ? true : false;
  data.filter((x: any) =>
    isArray ? value && value.includes(x[key]) : x[key] === value
  );
};

export const remove = (prop: string, value: number | string, data: any) =>
  filter((x: any) => x[prop] !== value, data);

export const generateId = () => Math.floor(Math.random() * 10000000000000000);

export const mergeWith = curry(
  (
    firstArrayOfObjects: any,
    secondArrayOfObjects: any,
    key1: string,
    key2: string,
    mergedIn: string
  ) => {
    return (
      firstArrayOfObjects.map((first: any) => {
        const isArray = typeof first[key1] === "object" ? true : false;
        const filteredObjects =
          (secondArrayOfObjects &&
            secondArrayOfObjects.filter((second: any) =>
              isArray
                ? first[key1].includes(second[key2])
                : first[key1] === second[key2]
            )) ||
          [];
        const result = {
          ...first
        };
        result[mergedIn] = filteredObjects;
        return result;
      }) || []
    );
  }
);

export const link = (
  list1: any,
  list2: any,
  key1: string,
  key2: string,
  getKey: string
) => {
  return map((x: any) => {
    x.linkedResults = map(
      (y: any) => y[getKey],
      filter((y: any) => {
        if (y[key2].includes(x[key1])) {
          return true;
        }
        return false;
      }, list2)
    );

    return x;
  }, list1);
};
