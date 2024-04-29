import plugin from '../../../lib/plugins/plugin.js'
import common from '../../../lib/common/common.js'

const _path = process.cwd() + '/plugins/mamba-plugin'

export class globalBindHelp extends plugin {
  constructor() {
    super({
      name: '[曼巴插件]国际服Cookie(Stoken)绑定帮助',
      dsc: '适用扫码登录/密码登录的记录帮助，覆盖云崽自身记录帮助',
      event: 'message',
      priority: 100,
      rule: [
        {
          reg: '^#?(国际服|国际|global|g)(ck|cookie|sk|stoken)(帮助|教程)$',
          fnc: 'help'
        }
      ]
    })
  }

  async help() {
    const messages = [([
      '1.首先选择任意渠道下载软件【国际服一键获取Stoken.apk】\n',
      '123盘: https://www.123pan.com/s/6QMTjv-w0L0h.html\n',
      '蓝奏云盘: https://wwl.lanzoum.com/iJfOF1x21ave 密码:gycb'
    ]), ([
      '2.下载完后打开代理后进入此软件', segment.image(`${_path}/resources/globalBindHelp/1.png`),
      `\n随后输入自己的邮箱账号密码并登录`
    ]), ([
      '3.登录完成以后点击右上角获取Stoken', segment.image(`${_path}/resources/globalBindHelp/2.png`),
      `\n(如果提示没找到通行证ID请手动输入此页面的User ID)`
    ]), ([
      '4.在弹出的页面中全选复制Stoken', segment.image(`${_path}/resources/globalBindHelp/3.png`)
    ]), ([
      '5.最后添加机器人好友,发送获取到的Stoken待机器人反应后再发送【#刷新ck】即可', segment.image(`${_path}/resources/globalBindHelp/4.png`)
    ])]
    await this.e.reply(await common.makeForwardMsg(this.e, messages))
  }
}