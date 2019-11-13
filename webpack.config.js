// const isDevelopment = process.env.NODE_ENV === 'development';
// --env.NODE_ENV=local
let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const CssUrlRelativePlugin = require('css-url-relative-plugin');


module.exports = (env, argv) => {
    const isDevelopmentMode = (argv.mode === "development");
    // const isDevelopment = process.env.NODE_ENV === 'development';
    var devtool = isDevelopmentMode
        ? "eval-source-map"
        : "nosources-source-map"
        ;

    return {
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: '[name].js',
            publicPath: '/',
        },
        devtool: devtool,

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ["@babel/plugin-transform-react-jsx",
                                "@babel/plugin-proposal-class-properties"]
                        }
                    }
                },
                /*        {
                           test: /\.scss$/,
                           use: [
                               {
                                   loader: MiniCssExtractPlugin.loader,
                               },
                               
                               {
                                   loader: 'css-loader',
                                   options: {
                                       importLoaders: 1,
                                       modules: {
                                           localIdentName: '[local]__[sha1:hash:hex:7]'
                                       },
                                       sourceMap: true,
                                   }
                               }, {
                                   loader: 'sass-loader'
                               }
                           ]
                       }, */

                {
                    test: /\.module\.s(a|c)ss$/,
                    loader: [
                        isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[local]__[sha1:hash:hex:7]'
                                },
                            }
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    loader: [
                        isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            }
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                        }
                    ]
                },
                {
                    test: /\.(png|jp(e*)g|svg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'imagesCss/[hash]-[name].[ext]'
                        }
                    }]
                }

            ]
        },
        plugins: [


            new webpack.SourceMapDevToolPlugin({
                filename: "[file].map"
            }),
            new MiniCssExtractPlugin({
                filename: isDevelopmentMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopmentMode ? '[id].css' : '[id].[hash].css'
            }),
            new HtmlWebpackPlugin({
                hash: false,
                template: './src/index.html',
                filename: 'index.html',
            }),

            new CopyWebpackPlugin([
                { from: `src/img`, to: `img` },
            ]),

        ],

    }
}

// module.exports = conf;