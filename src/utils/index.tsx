function validateEmail(email: string) {
  const check =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return check.test(String(email).toLowerCase());
}

function getPage(loc: string) {
  const location = loc.split("/");
  const page = location[location.length - 1];
  return page === "" ? "about" : page;
}

export { validateEmail, getPage };
