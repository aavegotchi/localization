import t from "i18next";
import requiredir from "require-dir";

const keys = requiredir('../data/');

export {
  t,
  keys
}
