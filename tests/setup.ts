import * as zlib from 'node:zlib';
import { Transform } from 'node:stream';

// Polyfill para compatibilidade do undici / zlib em ambientes Node < 22.15 (evita erro 'createZstdDecompress.bind')
const zlibObj = zlib as any;
if (!zlibObj.createZstdDecompress) {
  zlibObj.createZstdDecompress = function () {
    return new Transform({
      transform(chunk, _encoding, callback) {
        callback(null, chunk);
      },
    });
  };
}

if (!zlibObj.constants) {
  zlibObj.constants = {};
}

if (zlibObj.constants.ZSTD_d_windowLogMax === undefined) {
  zlibObj.constants.ZSTD_d_windowLogMax = 23;
}
