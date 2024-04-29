import { update as Update } from "../../other/update.js"

export class mambaUpdate extends plugin {
  constructor() {
    super({
      name: "[曼巴插件]更新插件",
      event: "message",
      priority: 1000,
      rule: [
        {
          reg: "^#*曼巴(插件)?(强制)?更新$",
          fnc: "update"
        }
      ]
    })
  }

  async update(e = this.e) {
    if (!e.isMaster) return
    e.isMaster = true
    e.msg = `#${e.msg.includes("强制") ? "强制" : ""}更新yenai-plugin`
    const up = new Update(e)
    up.e = e
    return up.update()
  }
}
