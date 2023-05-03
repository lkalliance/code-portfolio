function validateEmail(email: string) {
  const check =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return check.test(String(email).toLowerCase());
}

function getPage(loc: string) {
  const pages = ["", "about", "portfolio", "materials", "contact"];
  const location = loc.split("/");
  let page = location[location.length - 1];
  return pages.indexOf(page) > 0 ? page : "portfolio";
}

export { validateEmail, getPage };
