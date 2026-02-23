process.noDeprecation = true;

const chalk = require("chalk");

console.log("\n\n\n");

console.log(chalk.hex("#FF6B6B")("┌────────────────────────────────────┐"));
console.log(chalk.hex("#FF6B6B")("│") + chalk.hex("#4ECDC4").bold("      MODIFIED BAILEYS BY ARULXOFFC ") + chalk.hex("#FF6B6B")("│"));
console.log(chalk.hex("#FF6B6B")("├────────────────────────────────────┤"));
console.log(chalk.hex("#FF6B6B")("│") + chalk.hex("#FFE66D")("            [ MESSAGE ]             ") + chalk.hex("#FF6B6B")("│"));
console.log(chalk.hex("#FF6B6B")("│") + chalk.hex("#95E1D3")("  Hi, thank you for using my        ") + chalk.hex("#FF6B6B")("│"));
console.log(chalk.hex("#FF6B6B")("│") + chalk.hex("#95E1D3")("      modified Baileys ^-^          ") + chalk.hex("#FF6B6B")("│"));
console.log(chalk.hex("#FF6B6B")("├────────────────────────────────────┤"));

const update = new Date("2026-02-23");
const formattedDate = update.toLocaleDateString("id-ID", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

console.log(chalk.hex("#FF6B6B")("│") + chalk.hex("#6C5CE7")("         [ LATEST UPDATE ]          ") + chalk.hex("#FF6B6B")("│"));
console.log(chalk.hex("#FF6B6B")("│") + chalk.hex("#A8E6CF")("       " + formattedDate + "      ") + chalk.hex("#FF6B6B")("│"));
console.log(chalk.hex("#FF6B6B")("├────────────────────────────────────┤"));
console.log(chalk.hex("#FF6B6B")("│") + chalk.hex("#F9A826")("    Telegram : @arulofficialll      ") + chalk.hex("#FF6B6B")("│"));
console.log(chalk.hex("#FF6B6B")("└────────────────────────────────────┘"));

console.log("\n");

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
