// Handy function to check the type of a value. 
export function typeCheck(value: any): string {
  const returnValue = Object.prototype.toString.call(value);
  const type = returnValue.substring(
    returnValue.indexOf(" ") + 1,
    returnValue.indexOf("]")
  );
  return type.toLowerCase();
}
