export function textTemplate(headerType: string, classNames: string) {
  switch (headerType) {
    case "h1":
      return "text-[130px] font-bold " + classNames;
    case "h2":
      return (
        "text-[1.3rem] md:text-[1.5] lg:text-[90px] font-bold " + classNames
      );
    case "h3":
      return "text-2xl font-bold " + classNames;
    case "h4":
      return "text-xl font-bold " + classNames;
    case "h5":
      return "text-lg font-bold " + classNames;
    case "p":
      return "text-[.6rem] " + classNames;
    default:
      return "text-base " + classNames;
  }
}
