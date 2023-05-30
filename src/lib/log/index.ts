import { createLogger, format, transports } from 'winston'

const formatter = format.printf((info) => {
  const { timestamp, level, message, name, ...rest } = info
  const labels = Object.entries(rest).map(([key, value]) => `${key}=${JSON.stringify(value)}`)
  const loggerName = name ?? 'root'
  return `${timestamp} ${level}[${loggerName}]: ${message} ${labels.join(' ')}`
})

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.json(),
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    formatter,
  ),
  transports: [new transports.Console()],
})

export default logger
