const isArray = o => {
  if (typeof o === "object")
    return Object.prototype.toString.call(o) === "[object Array]";
  return false;
};
