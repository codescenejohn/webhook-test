const hi = (name) => {
  if (name.length) {
    return `Hi, ${name}`;
  }

  return "Hi, world";
}

hi("john");
