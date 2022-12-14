import "i18next";
import locales from "./public/locales";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: typeof locales["en"];
  }
}
