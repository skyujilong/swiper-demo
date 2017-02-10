'use strict';
const path = require('path');
const fs = require('fs');
const SpritesmithPlugin = require('webpack-spritesmith');
const config = require('../config.js');
let spritePlugins = [];
config.sprites.forEach((item) => {
    let name = item.name.trim();
    let dir = path.resolve(__dirname, '..', 'pages', 'sprite', name);
    //如果没有这个文件夹就建立这个文件夹
    fs.stat(dir, (err) => {
        if (err) {
            fs.mkdir(dir, () => {
                console.log('generate dir' + name);
            });
        }
    });
    spritePlugins.push(new SpritesmithPlugin({
        src: {
            cwd: dir,
            glob: '*.*'
        },
        target: {
            image: path.resolve(__dirname, '..', 'pages/img/' + name + '-sprite.png'),
            css: path.resolve(__dirname, '..', 'pages/scss/' + name + '-sprite.scss')
        },
        apiOptions: {
            cssImageRef: '~' + name
        },
        // retina: '@2x'
        retina: {
            //判断是否是高清图，同时返回对应图片的信息，是否是高清图，对应普通图片与高清图片的绝对地址。
            classifier: (fileName) => {
                var result = /([^/.]+)\.([^.]+)/.exec(fileName);
                if (!result) {
                    throw new Error('name error');
                }
                var fName = result[1];

                if (fName.indexOf('@2x') > 0) {
                    return {
                        type: 'retina',
                        retinaName: fileName,
                        normalName: fileName.replace('@2x', '')
                    };
                } else {
                    return {
                        type: 'normal',
                        retinaName: fileName.replace(fName, fName + '@2x'),
                        normalName: fileName
                    };
                }
            },
            //生成的图片地址
            targetImage: path.resolve(__dirname, '..', 'pages/img/' + name + '-sprite@2x.png'),
            //在scss中引用的webpack对象
            cssImageRef: '~' + name + '@2x'
        }
    }));
});
module.exports = spritePlugins;
