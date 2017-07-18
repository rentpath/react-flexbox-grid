export default function getClass(className, localCss) {
  return (localCss && localCss[className]) ? localCss[className] : className;
}
