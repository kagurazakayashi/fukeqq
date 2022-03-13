# fukeqq

本脚本用于腾讯课堂的自动签到，防止不小心错过签到。

- 不支持答题卡，只处理签到用！
- 请勿偷懒，好好听课……

# 编译

你可以从 `Releases` 处下载生成好的 `fukeqq.js` 文件，而跳过编译步骤。

0. 安装 `nodejs` 和 `npm`
1. `git clone` 本仓库
2. `cd fukeqq`
3. `npm install -g gulp`
4. `npm install`
5. `npm run build`

完成后会在 `dist` 文件夹中生成一个 `fukeqq.js` 文件。

# 使用

1. 打开网页版课堂，进入听课状态。
2. 打开网页开发者工具，将 `dist` 文件夹中生成的 JS 文件中的代码复制到浏览器控制台中回车。
3. 看到 `签到使能` 提示并且没有红字错误输出即可。

# 工作中

1. 脚本每 5 秒检测一次是否有签到弹窗。
2. 每检测 100 次输出 `签到运行中` ，以示脚本没有卡死。
3. 当签到弹窗出现，脚本会尝试点击 `签到` 按钮，并输出黄字提示 `签到完毕！`
4. 确认是否真的成功请检查弹窗是否已经自动消失，并且控制台没有相关错误输出。

# 许可

- 本软件使用 `DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE` 许可。
- 总之你爱干嘛干嘛。