import slugify from "slugify";

export const createSlug = (text: string, options = {}) => {
  const convertedSlug = slugify(text, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: false,
    locale: "vi",
    trim: true,
  });
  return convertedSlug;
};

export const createUrlSLug = (id: string, text: string) => {
  return `${id}-${createSlug(text)}`;
};
