import Head from "next/head";
import { Main } from "components/en/Main";

export default function survivalTool() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
        <title>IdentityV Survival Tool</title>
        <meta
          name="description"
          content="A useful tool for survivors, managing Trait/Skill cool-time and Persona of hunters. Compatible with ALL hunters!"
        />
        <meta name="theme-color" content="#292b2f" />
        <meta
          property="og:url"
          content="https://koniooo.github.io/IdentityV-SurvivalTool/en"
        />
        <meta property="og:title" content="IdentityV Survival Tool" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A useful tool for survivors, managing Trait/Skill cool-time and Persona of hunters. Compatible with ALL hunters!"
        />
        <meta
          property="og:image"
          content="https://koniooo.github.io/IdentityV-SurvivalTool/ogp_en.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@konio_tracy" />

        <link
          rel="icon"
          href="https://koniooo.github.io/IdentityV-SurvivalTool/favicon.svg"
          type="image/svg+xml"
          sizes="any"
        />
      </Head>
      <Main />
    </>
  );
}
