const { exec } = require('node:child_process');
const { mkdir } = require('node:fs');

mkdir(`${__dirname}/../bin`, { recursive: true }, (err) => {
    if (err) throw err;
});

let cmd = `docker run --rm \
    -v ${__dirname}/../:/v \
    emscripten/emsdk emcc \
    /v/src/cli.cpp -o /v/bin/lzma.js`;

function puts(error, stdout, stderr)
{
    if (error)
    {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
}

exec(cmd, puts);