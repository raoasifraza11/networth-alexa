/**
 * Created by raoasifraza on 26/10/2017.
 */
var lodash = require('lodash');
require('dotenv').load();
var Raven = require('raven');
Raven.config(process.env.SENTRY_DSN, { sendTimeout: 5 }).install();

/**
 * uncomment to test sentry
 *
 try {
        doSomething(a[0]);
    } catch (e) {
        Raven.captureException(e);
    }
 */


console.log('Hello, world!');