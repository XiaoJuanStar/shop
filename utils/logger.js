var path = require('path');
var log4js = require('log4js');

var logPath = path.join(__dirname, '..', 'log', 'all');

Logger = {
    init: function(){
        log4js.configure({
            pm2: true,
            // pm2InstanceVar: 'INSTANCE_ID',
            appenders: { 
                file: { 
                    type: 'dateFile', 
                    filename: logPath,
                    pattern: '.yyyy-MM-dd.log',
                    alwaysIncludePattern: true
                },
                stdout: { type: 'stdout' },
            },
            categories: { default: { appenders: ['file', 'stdout'], level: 'debug' } }
        });
    },
    getLogger: function(category){
        return log4js.getLogger(category);
    }
}

Logger.init();

module.exports = Logger