function findString(_, args) {
  if (!args.stringInput) return [];

  return args.stringInput.map(function(str) {
    return {
      input: str,
      isMatch: isNaN(str),
    };
  });
}

module.exports = findString;
