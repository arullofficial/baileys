process.noDeprecation = true;

const chalk = require("chalk");

console.log("\n\n");

const line = chalk.cyan("━".repeat(50));

console.log(line);
console.log(chalk.magentaBright.bold("            MODIFIED BAILEYS"));
console.log(chalk.whiteBright("               BY ARULXOFFC"));
console.log(line);

console.log(chalk.yellowBright("\n📌 [ MESSAGE ]"));
console.log(chalk.greenBright("   Hi, thank you for using my modified Baileys ^-^"));

const update = new Date("2026-02-23");
console.log(chalk.blueBright("\n📅 [ LATEST UPDATE ]"));
console.log(chalk.whiteBright(`   ${update.toLocaleDateString("id-ID", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
})}`));

console.log(chalk.magenta("\n📬 Telegram : @arulofficialll"));
console.log(line + "\n\n");

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
