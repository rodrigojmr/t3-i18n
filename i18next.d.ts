import "i18next";
import locales from "./public/locales";

import type common from "./public/locales/en/common.json";
import type extra from "./public/locales/en/extra.json";

interface I18nNamespaces {
  common: typeof common;
  extra: typeof extra;
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: typeof locales["en"];
  }
}
