export function capitalize(str: string) {
  return str
    .split(" ")
    .map(
      (ele: string) =>
        ele.slice(0, 1).toLocaleUpperCase() + ele.slice(1).toLocaleLowerCase()
    )
    .join(" ");
}

export function getInitials(str: string) {
  return str
    .split(" ")
    .map((ele) => ele.slice(0, 1))
    .join("");
}
