export const toValidNumber = (val: any) => {
  if (
    typeof val === "string" &&
    Number.isInteger(Number(val)) &&
    Number(val) >= 0
  )
    return Number(val);
  return 0;
};
