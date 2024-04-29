import fs from 'node:fs'
import chalk from 'chalk'

if (!global.segment) {
  global.segment = (await import('oicq')).segment
}

let ret = []

logger.info(chalk.rgb(120, 255, 58)(`=========QAQ=========`))
logger.info(chalk.rgb(120, 255, 58)(`曼巴插件插件载入成功~pwq`))
logger.info(chalk.rgb(120, 255, 58)(`Author - 曉K`))
logger.info(chalk.rgb(120, 255, 58)(`我的原神群285258025，欢迎来玩~`))
logger.info(chalk.rgb(120, 255, 58)(`=====================`));

const files = fs
  .readdirSync('./plugins/mamba-plugin/apps')
  .filter((file) => file.endsWith('.js'))

  files.forEach((file) => {
    ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')
  
  if (ret[i].status != 'fulfilled') {
    logger.error(`载入插件错误：${logger.red(name)}`)
    logger.error(ret[i].reason)
    continue
    }
    apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}
export { apps }
