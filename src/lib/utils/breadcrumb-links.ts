export const breadcrumbLinks = (array: string[]) => {
  let string: string = "";
  return array.map((link) => (string += `/${link}`));
};
