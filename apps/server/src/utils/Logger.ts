import { createLogger, format, transports } from 'winston'
const { combine, timestamp, json, colorize ,cli} = format

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf((info: any) => {
    return `${info.level}: ${info.message}`
  })
)

// Create a Winston logger
const logger = createLogger({
  level: 'info',
  format: combine(colorize(), timestamp(), json(), cli()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    })
  ],
})

export default logger
