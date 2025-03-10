import { defineConfig } from "@lynx-js/rspeedy";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginTypeCheck({
      enable: true,
    }),
    pluginReactLynx(),
    pluginImageCompress(),
  ],
  environments: {
    web: {
      output: {
        assetPrefix: "/",
      },
    },
    lynx: {},
  },
});
