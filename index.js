/**
 * Created by she on 2015/2/12.
 */
// through2 is a thin wrapper around node transform streams
var through = require('through2');
var PluginError = require('gulp-util').PluginError;
var path = require('path');
var compiler = require('./ember-template-compiler');
var fs = require('fs');

const PLUGIN_NAME = 'gulp-ember-templates';

function compile(file, templateName) {
    var fs = require('fs');
    var input = fs.readFileSync(file, {encoding: 'utf8'});
    var template = compiler.precompile(input, false);
    var output = 'Ember.TEMPLATES[\'' + templateName + '\'] =  Ember.HTMLBars.template(' + template + ');';
    return new Buffer(output);
}

function tidy(filename) {
    filename = filename.replace(/^\W+/, '').replace(/\W+$/, '');
    while (filename.indexOf('\\') !== -1) {
        filename = filename.replace('\\', '/');
    }
    return filename;
}

function getTemplateName(filename, base) {
    var basename = path.basename(filename).split('.')[0];
    var dirname = path.dirname(filename);
    var start = dirname.indexOf(base) + base.length;
    var templateName = tidy(dirname.substring(start) + '/' + basename);
    return templateName;
}

function gulpEmberTemplates(params) {
    params = params ? params : {}
    return through.obj(function (file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
            cb();
        }
        if (params.base === undefined) {
            cb(null, file);
            return;
        }
        var base = tidy(params.base);
        var filename = tidy(file.path.toString());
        if (filename.indexOf(base) === -1) {
            cb(null, file);
            return;
        }
        file.contents = compile(filename, getTemplateName(filename, base));
        cb(null, file);
    });
};
module.exports = gulpEmberTemplates;