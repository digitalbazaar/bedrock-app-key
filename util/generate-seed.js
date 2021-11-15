/*!
 * Copyright (c) 2020-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {driver} = require('@digitalbazaar/did-method-key');
const {generateSecretKeySeed, decodeSecretKeySeed} = require('bnid');

const didKeyDriver = driver();

(async () => {
  // generate a random seed
  const secretKeySeed = await generateSecretKeySeed();
  const seedBytes = await decodeSecretKeySeed({secretKeySeed});
  const didKey = await didKeyDriver.generate({seed: seedBytes});

  console.log('PUBLIC DID', didKey.didDocument.id);
  console.log(`SECRET seedMultibase: ${secretKeySeed}`);
})();
