const { ESLint } = require("eslint");
const config = require("../../../index");

const RULE_ID = "curly";

const eslint = new ESLint({ baseConfig: config });

(async () => {
  describe("eslint-config-yceffort curly", function () {
    it("right curly", async function () {
      const [result] = await eslint.lintFiles([`${__dirname}/curly.right.js`]);

      const errors = result.messages.some(
        (message) => message.ruleId === RULE_ID
      );

      expect(errors).toBe(false);
    });

    it("wrong curly", async function () {
      const [result] = await eslint.lintFiles([`${__dirname}/curly.wrong.js`]);

      const errors = result.messages.some(
        (message) => message.ruleId === RULE_ID
      );

      expect(errors).toBe(true);
    });
  });
})();
