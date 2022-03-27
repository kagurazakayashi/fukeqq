# fukeqq

本脚本用于腾讯课堂的自动签到，防止不小心错过签到。 `fu ke.qq`

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

1. 打开 **网页版** 课堂，进入听课状态。
2. 打开网页开发者工具，将 `fukeqq.js` 中的代码复制到浏览器控制台中回车。
  - 如果是编译的而不是从 `Releases` 处下载的，可以在编译后在 `dist` 文件夹中找到它。
3. 看到 `签到使能` 提示并且没有红字错误输出即可。

# 工作中

1. 脚本每 5 秒检测一次是否有签到弹窗。
2. 每检测 100 次输出 `签到运行中` （ 8.3 分钟），以示脚本没有卡死。
3. 当签到弹窗出现，脚本会黄字输出 `准备签到` 的提示，随机等待 1 - 6 秒后尝试点击 `签到` 按钮，并输出黄字提示 `签到完毕！` 。
  - 在模拟点击签到按钮后， **不会尝试关闭网页的 `签到成功` 提示框** ，以便确认是否出现过签到并且成功。

# 安全性

- 在开发中已经经过 12 节实际课程的测试，教师在课程中随机时间发起签到，确认可以正常工作。
  - 但本脚本不会保证一直更新（尤其是作者不再需要用课堂之后）。
  - 随着课堂的更新，本脚本以后可能会失效。
  - 如果出现这种情况，欢迎提交 pull request 跟进修复。
- 在本脚本开发和作者亲自使用测试期间，因使用该脚本并没有引起课堂和教师方面额外的反应（如出现检测提示信息或封号等），一切都很正常。
  - 即使这样，我也在模拟点击签到按钮之前，加入了一个随机的延迟。
  - 不排除随着课堂版本的更新，推出相关的检测甚至惩罚功能。

# 许可和责任

- 本软件使用 `DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE` 许可。
- 总之你爱干嘛干嘛，但是后果自负。
- 作者不对本软件提供任何人工帮助和支持，作者不对使用本软件出现和导致的任何问题负责。
