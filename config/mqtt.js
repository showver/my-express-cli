const mongoConfig = require('../config/mongodbConfig');
const mosca = require('mosca');

exports.serverConfig = {
    port: 1883,
    backend: {
        type: 'mongo',
        url: mongoConfig.aliDBUrl,
        pubsubCollection: 'mqttStore',
        mongo: {}
    },
    persistence: {
        factory: mosca.persistence.Mongo,
        url: mongoConfig.aliDBUrl
    }
};

exports.clientConfig = {
    keepAlive: 10,
    port: 1883,
    clientId: 'CarFans_Server_debug_' + Math.random(Date.now()),
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: false,
    reconnectPeriod: 10000
};

exports.MQTTAliServerUrl = 'mqtt://39.108.59.98';
