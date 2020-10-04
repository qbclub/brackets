module.exports = function check(str, bracketsConfig) {
  let stack = [],
  open = [],
  close = [],
  itsOpen = true

bracketsConfig.forEach(element => {
  open.push(element[0])
  close.push(element[1])
});



for (let i = 0; i < str.length; i++) {

  if (open.indexOf(str[i]) == close.indexOf(str[i])) {
    if (itsOpen) {
      stack.push(str[i])
      itsOpen = false
    } else {
      if (close.indexOf(str[i]) != -1) {
        if (close.indexOf(str[i]) != open.indexOf(stack.pop())) {
          return false
        }
        itsOpen = true
      }
    }
  } else {
    if (open.indexOf(str[i]) != -1) {
      stack.push(str[i])
    }
    if (close.indexOf(str[i]) != -1) {

      if (close.indexOf(str[i]) != open.indexOf(stack.pop())) {
        return false
      }
    }
  }
}

if (stack.length !== 0) {
  return false;
}

return true;
}
