const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // Точка входа
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    // Говорим, что нам нужна карта исходников🗺️
    devtool: 'inline-source-map',
    module: {
        rules: [
            // Компилируем TypeScript
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: "./src/index.html" })
    ],

    // Говорим что если не указано расширение файла, то пробуем эти варианты
    // @see https://webpack.js.org/configuration/resolve/#resolveextensions
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    // Точка выхода


    devServer: {
        // Здесь указывается вся статика, которая будет на нашем сервере
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,

        // Сжимать ли бандл при компиляции📦
        compress: true,
        open: true,
        // Порт на котором будет наш сервер
        port: 9000,

        client: {

            // Показывает ошибки при компиляции в самом браузере
            overlay: {

                // Ошибки
                errors: true,

                // Предупреждения
                warnings: false,
            },

            // Показывает прогесс компиляции
            progress: true
        },
    },


};