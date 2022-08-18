const timeToSeconds = (time: string) => {
  const [hours = '0', minuts = '0', seconds = '0'] = time.split(':')

  const hoursInSeconds = Number(hours) * 3600
  const minutsInSeconds = Number(minuts) * 60

  return hoursInSeconds + minutsInSeconds + Number(seconds)
}

export default timeToSeconds
