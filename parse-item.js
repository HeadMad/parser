

export default function({ start, end }, input) {
  const startMatch = input.match(start);
  if (!startMatch)
    return null;

  let endMatch;
  var content = input.substring(startMatch.index + startMatch[0].length);

  endMatch = content.match(end ?? /\r?\n|$/);

  if (!endMatch)
    return null;

  const [startString, ...args] = startMatch;
  const beforeStart = startMatch.index;
  const afterStart = beforeStart + startString.length;
  const beforeEnd = afterStart + endMatch.index;
  const afterEnd = !end ? beforeEnd : beforeEnd + endMatch[0].length;

  return {
    beforeStart,
    afterStart,
    beforeEnd,
    afterEnd,
    args
  };
}