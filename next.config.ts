import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["tr", "en"], // desteklenen diller
    defaultLocale: "tr",   // varsayılan dil
  },
};

export default nextConfig;
