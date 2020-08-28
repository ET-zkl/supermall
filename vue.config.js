module.export = {
    configurewebpack: {
        reslove: {
            extensions: [],
            alias: {
                'assets':'@/assets',//或者把@换成src
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}