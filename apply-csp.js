const { JSDOM } = require("jsdom");
const cspHashGen = require("csp-hash-generator");
const syncPackage = require("browser-sync/package.json");
const fs = require("fs");
const CSP = require("./config/csp");


 -65,51 +63,18 
  const addCspHash = async (rawContent, outputPath) => {
      hashes.push.apply(hashes, AUTO_RELOAD_SCRIPTS);
    }

    content = dom.serialize();

    // write CSP Policy in headers file
    const headersPath = "../_headers";
    const filePath = outputPath.replace("_site/", "/"); // _site/blog/index.html ->  /blog/index.html
    const filePathPrettyURL = filePath.slice(0, -10); // blog/index.html ->  /blog/
    try {
      const headers = fs.readFileSync(headersPath, { encoding: "utf-8" });
      const regExp = /(# \[csp headers\][\r\n]+)([\s\S]*)(# \[end csp headers\])/;
      const match = headers.match(regExp);
      if (!match) {
        throw `Check your _headers file. I couldn't find the text block for the csp headers:
          # [csp headers]
          # this text will be replaced by apply-csp.js plugin
          # [end csp headers]`;
      }
      const oldCustomHeaders = headers.match(regExp)[2].toString();
      const CSPPolicy = `Content-Security-Policy: ${CSP.apply().regular.replace(
        "HASHES",
        hashes.join(" ")
      )}`;
      let newCustomHeaders = oldCustomHeaders.concat(
        "\n",
        filePath,
        "\n  ",
        CSPPolicy
      );
      if (filePath != filePathPrettyURL) {
        newCustomHeaders = newCustomHeaders.concat(
          "\n",
          filePathPrettyURL,
          "\n  ",
          CSPPolicy
        );
      }
      fs.writeFileSync(
        headersPath,
        headers.replace(regExp, `$1${newCustomHeaders}\n$3`)
      );
    } catch (error) {
      console.log(
        "[apply-csp] Something went wrong with the creation of the csp headers\n",
        error
      );
    const csp = dom.window.document.querySelector(
      "meta[http-equiv='Content-Security-Policy']"
    );
    if (!csp) {
      return content;
    }
    csp.setAttribute(
      "content",
      csp.getAttribute("content").replace("HASHES", hashes.join(" "))
    );

    content = dom.serialize();
  }

  return content;
 -137,33 +102,6 = module.exports = {
  configFunction: async (eleventyConfig, pluginOptions = {}) => {
    eleventyConfig.addTransform("csp", addCspHash);
  },
  parseHeaders: parseHeaders,
  cspDevMiddleware: function (req, res, next) {
    const url = new URL(req.originalUrl, `http://${req.headers.host}/)`);
    // add csp headers only for html pages (include pretty urls)
    if (url.pathname.endsWith("/") || url.pathname.endsWith(".html")) {
      let headers;
      try {
        headers = parseHeaders(
          fs.readFileSync("_site/_headers", {
            encoding: "utf-8",
          })
        )[url.pathname];
      } catch (error) {
        console.error(
          "[setBrowserSyncConfig] Something went wrong with the creation of the csp headers\n",
          error
        );
      }
      if (headers) {
        const csp = headers["Content-Security-Policy"];
        if (csp) {
          res.setHeader("Content-Security-Policy", csp);
        }
      }
    }
    next();
  },
};

function isDevelopmentMode() {
    return /serve|dev/.test(process.argv.join());
  }