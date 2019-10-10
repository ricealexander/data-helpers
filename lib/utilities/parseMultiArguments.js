export default function (args) {
  const isSingleArray = (args.length === 1 && Array.isArray(args[0]))
  return isSingleArray ? args[0] : args
}
