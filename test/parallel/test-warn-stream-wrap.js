'use strict';

const common = require('../common');

// _stream_wrap is deprecated.

common.expectWarning('DeprecationWarning',
                     'The _stream_wrap module is deprecated.', 'DEP0XXX');

require('_stream_wrap');
