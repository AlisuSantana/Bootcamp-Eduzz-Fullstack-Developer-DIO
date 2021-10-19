const os = require('os');
const { start } = require('repl');

//console.log(os); mostra functions/métodos

setInterval(() => {
    const {arch, platform, totalmem, freemem} = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100;
    
    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRam: `${parseInt(tRam)} MB`,
        FreeRam: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)} %`
    }    
    console.clear();
    console.table(stats);

    exports.stats = stats;

}, 1000);