

export defaultfunction(input, rulesSheduler) {
  if (!input)
    return input;

  if (!rulesSheduler || !rulesSheduler.length)
    return input;

  let result = '';
  const [key, ...sheduler] = rulesSheduler;
  const rule = rules.get(key);

  const parsedItem = parseItem(rule, input);

  if (!parsedItem)
    return sheduler.length ? parse(input, sheduler) : input;

  const {
    beforeStart,
    afterStart,
    beforeEnd,
    afterEnd,
    args
  } = parsedItem;

  const inner = input.substring(afterStart, beforeEnd);
  const contentAfter = parse(input.substring(afterEnd), rulesSheduler);

  if ('test' in rule && !rule.test.test(inner))
    return input.substring(0, afterEnd) + contentAfter;

  const content = parse(inner, rule.parse);
  const contentBefore = parse(input.substring(0, beforeStart), sheduler);

  result += contentBefore;
  result += rule.replace(content, ...args);
  result += contentAfter;

  return result;
}


