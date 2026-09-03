# 卡卡速联流量卡 · GitHub Pages 落地页

一个**移动端优先**的流量卡推销单页，双入口转化：**买卡**（跳转云号卡微店）+ **招代理**（跳转代理注册页），完全静态、零后端，可直接部署到 GitHub Pages。

## 目录结构

```
flowcard-site/
├── index.html          # 落地页（单页，含最新资讯预览）
├── articles.html       # 流量卡资讯列表页（自动按日期倒序）
├── articles/           # 资讯文章页（每篇一个 html）
├── build_articles.py   # 文章生成脚本（可选，用于批量生成）
├── css/
│   ├── style.css       # 主样式
│   └── article.css     # 文章/资讯样式
├── js/
│   ├── app.js          # 爆款渲染 + 资费表筛选逻辑
│   ├── products.js     # 号卡套餐数据（23 款）＋ 两个关键跳转链接
│   └── articles.js     # 资讯文章列表数据（驱动列表页+首页预览）
├── images/
│   ├── avatar.webp     # 店铺宣传图（已压缩）
│   ├── hero-banner.webp# 靓号业务 banner
│   ├── banner2.webp    # 随身 Wi-Fi banner
│   ├── favicon.png     # 网站图标
│   ├── qr-buy.png      # 「扫码领卡」二维码（微店链接）
│   └── qr-agent.png    # 「扫码做代理」二维码（注册链接）
└── README.md
```

## 部署到 GitHub Pages（3 分钟）

1. 打开 https://github.com 登录，点右上角 **+** → **New repository**。
2. 仓库名随意（如 `flowcard-lp`），选 **Public**，点 **Create repository**。
3. 在仓库页面点 **Add file → Upload files**，把 `flowcard-site` 文件夹**里面的全部内容**拖进去（要保证 `index.html` 在仓库根目录，不要套一层文件夹），点 **Commit changes**。
4. 进入仓库 **Settings → Pages**，在 **Branch** 处选择 `main` + 根目录 `/ (root)`，点 **Save**。
5. 等 1~2 分钟，访问 `https://你的用户名.github.io/flowcard-lp/` 即可看到网站。

> 提示：第 5 步地址里的 `flowcard-lp` 要替换成你第 2 步填的仓库名。若第 3 步直接传到了仓库根目录，访问 `https://你的用户名.github.io/仓库名/`。

## 绑定你自己的域名（可选）

如果你手上有闲置中文域名（比如用于流量卡 SEO 的长尾域名），可以：
1. 在仓库 **Settings → Pages → Custom domain** 填域名，如 `liuliangka.example.com`，点 Save。
2. 到你的域名服务商（阿里云/腾讯云/Cloudflare）加一条 **CNAME** 记录，指向 `你的用户名.github.io`，TTL 默认即可。
3. 等待解析生效（几分钟到几小时），即可用自己域名访问。

## 更新套餐数据

所有卡品都在 `js/products.js` 的 `window.CARDS` 数组里，字段说明：

| 字段 | 含义 |
|---|---|
| `name` | 套餐名 |
| `op` | 运营商（移动/联通/广电/电信） |
| `cur` / `orig` | 现月租 / 原月租（元） |
| `g` | 月流量（GB，已含定向） |
| `call` | 通话分钟（0 = 无） |
| `age` | 年龄限制 |
| `area` | 发货区域，`全国` 或 `只发XX` |
| `charge` | 首充/激活说明 |
| `hot` | 是否上「爆款推荐」（`true/false`） |
| `url` | 对应套餐的办理页链接 |

改完保存，重新上传到 GitHub 仓库即可自动更新，无需重新部署。

## 更新资讯文章（每日更新）

文章是**数据驱动**的：列表页 `articles.html` 和首页「最新资讯」都会读取 `js/articles.js`，按日期倒序自动排列，所以你**不用改任何页面代码**，只需两步：

### 方式一：让我代写（推荐）
把新文章的**标题 + 大致内容（或要点）**发给我，我用 `build_articles.py` 帮你生成文章页并自动更新 `js/articles.js`，再把文件打包给你上传。

### 方式二：自己手动加（两步）
**第 1 步**：在 `articles/` 文件夹里新建一个 HTML（复制一篇现有文章，改标题、正文、日期、`<title>`、`<meta name="description">`，文件名用英文小写+连字符，如 `liuliangka-xxx.html`）。

**第 2 步**：打开 `js/articles.js`，把新文章信息加到数组**最前面**，格式如下：
```js
{
  "id": "liuliangka-xxx",              // 必须和 html 文件名一致
  "title": "新文章标题",
  "date": "2026-09-03",                // YYYY-MM-DD
  "tag": "避坑指南",                    // 套餐评测/避坑指南/办卡答疑/用卡技巧/套餐推荐/代理攻略
  "summary": "列表页显示的一句话简介",
  "url": "articles/liuliangka-xxx.html"
}
```

**第 3 步**：把改动的文件（新文章 html + `js/articles.js`）上传覆盖到 GitHub 仓库即可，列表页和首页预览会自动按日期排到最前，老文章不受影响。不用每次重新上传整个网站。

## 两个关键链接在哪里改

都在 `js/products.js` 底部的 `window.LINKS`：

```js
window.LINKS = {
  store: "https://hk.yunhaoka.cn/#/pages/micro_store/index?agent_id=你的代理ID",   // 买卡
  agent: "https://hk.yunhaoka.cn/#/pages/public/register?code=你的邀请码"           // 招代理
};
```

`index.html` 里的顶部按钮、首屏按钮、更多业务卡片、页脚等处的链接也需要同步替换（搜索 `hk.yunhaoka.cn` 即可全部找到）。

## 合规提示

- 号卡需**本人实名认证**激活，页面已含合规声明，不要添加"永久免费""无限流量"等夸大宣传词。
- 套餐资费以运营商与店铺办理页实际生效为准，页面数据来自店铺接口，更新时请核对。
