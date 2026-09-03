/* ===== 卡卡速联流量卡 · 落地页渲染逻辑 ===== */
(function () {
  const CARDS = window.CARDS || [];
  const LINKS = window.LINKS || {};

  const opColor = { 移动: "#0b6bff", 联通: "#e4382c", 广电: "#7a4dff", 电信: "#0aa06e" };

  // ---- 爆款推荐：全国可办 + hot 优先 ----
  function renderHot() {
    const grid = document.getElementById("hotGrid");
    if (!grid) return;
    const hot = CARDS.filter(c => c.area === "全国" && c.hot).slice(0, 6);
    if (!hot.length) return;
    grid.innerHTML = hot.map(c => `
      <div class="card">
        <div class="top">
          <span class="op" style="background:${opColor[c.op] || "#fff"}">${c.op}</span>
          <span class="area-tag">发全国</span>
          <div class="fee">
            <span class="price"><small>¥</small>${c.cur}</span><span>/月</span>
            <span class="orig">¥${c.orig}</span>
          </div>
          <h3>${c.name}</h3>
        </div>
        <div class="body">
          <div class="metrics">
            <div class="m"><b>${c.g}G</b><span>月流量</span></div>
            <div class="m"><b>${c.call > 0 ? c.call + "分" : "—"}</b><span>通话</span></div>
            <div class="m"><b>${c.age}</b><span>适用年龄</span></div>
          </div>
          <div class="charge"><b>首充提醒：</b>${c.charge}</div>
          <a class="go" href="${c.url}" target="_blank" rel="noopener">立即办理 →</a>
        </div>
      </div>`).join("");
  }

  // ---- 全部套餐表格 ----
  function renderTable(filter) {
    const tbody = document.getElementById("tbody");
    if (!tbody) return;
    let list = CARDS.slice();
    if (filter === "national") list = list.filter(c => c.area === "全国");
    else if (filter !== "all") list = list.filter(c => c.op === filter);

    if (!list.length) {
      tbody.innerHTML = `<tr class="empty-row"><td colspan="8">该筛选下暂无套餐，看看其他运营商吧～</td></tr>`;
      return;
    }
    tbody.innerHTML = list.map(c => `
      <tr>
        <td class="cell-name">${c.name}<span class="tag tag-${c.area === "全国" ? "全国" : "只发"}">${c.area === "全国" ? "全国可办" : c.area}</span></td>
        <td class="cell-op">${c.op}</td>
        <td class="cell-price">¥${c.cur}<span class="orig">¥${c.orig}</span></td>
        <td>${c.g}G</td>
        <td>${c.call > 0 ? c.call + " 分钟" : "—"}</td>
        <td class="cell-age">${c.age} 岁</td>
        <td class="cell-area">${c.area}</td>
        <td class="cell-go"><a href="${c.url}" target="_blank" rel="noopener">立即办理</a></td>
      </tr>`).join("");
  }

  // ---- 事件绑定 ----
  function bindTabs() {
    const tabs = document.getElementById("tabs");
    if (!tabs) return;
    tabs.addEventListener("click", e => {
      const btn = e.target.closest("button");
      if (!btn) return;
      tabs.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderTable(btn.dataset.f);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHot();
    renderTable("national");
    bindTabs();
  });
})();
