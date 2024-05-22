export function textTemplate(headerType: string, classNames: string) {
  switch (headerType) {
    case "h1":
      return "text-[130px] font-bold font-poppins " + classNames;
    case "h2":
      return (
        "text-[1.5rem] md:text-[90px] font-bold font-poppins " + classNames
      );
    case "h3":
      return "text-2xl font-bold font-poppins " + classNames;
    case "h4":
      return "text-xl font-bold font-poppins " + classNames;
    case "h5":
      return "text-lg font-bold font-poppins " + classNames;
    case "p":
      return "text-[.8rem] font-poppins " + classNames;
    default:
      return "text-base font-poppins " + classNames;
  }
}
