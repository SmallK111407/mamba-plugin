import plugin from '../../../lib/plugins/plugin.js'
import setting from '../model/setting.js'

const _path = process.cwd() + '/plugins/mamba-plugin'

export class gachaLogHelp extends plugin {
  constructor() {
    super({
      name: '[曼巴插件]抽卡记录帮助',
      dsc: '适用扫码登录/密码登录的记录帮助，覆盖云崽自身记录帮助',
      event: 'message',
      priority: 100,
      rule: [
        {
          reg: '^#?(记录帮助|抽卡帮助)$',
          fnc: 'help'
        }
      ]
    })
  }
  get appconfig() { return setting.getConfig('config') }

  async help() {
    if (!this.appconfig['gachaLogHelp']) return false
    await this.e.reply(segment.image(`${_path}/resources/gachaLogHelp/记录帮助.png`))
  }
}