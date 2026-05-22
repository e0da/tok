import Button from '@material-ui/core/Button'
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import React, { useCallback, useState } from 'react'
import { lightGreen, deepOrange } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: { primary: lightGreen, secondary: deepOrange }
})

const useStyles = makeStyles(() => ({
  accessTimeIcon: {
    marginRight: theme.spacing(1)
  }
}))

const App = () => {
  const classes = useStyles()
  const [timerRunning, setTimerRunning] = useState(false)
  const [timerDisplayValue, setTimerDisplayValue] = useState('00:00')
  const startInterval = useCallback(() => {
    setTimerDisplayValue('25:00')
    setTimerRunning(true)
  }, [])
  const startBreak = useCallback(() => {
    setTimerDisplayValue('05:00')
    setTimerRunning(true)
  }, [])
  const pause = useCallback(() => {
    setTimerRunning(false)
  }, [])
  return (
    <MuiThemeProvider theme={theme}>
      <p>{timerRunning ? timerDisplayValue : `${timerDisplayValue} paused`}</p>
      <Button variant="contained" color="primary" onClick={startInterval}>
        <AccessTimeIcon className={classes.accessTimeIcon} />
        Start Interval
      </Button>
      <Button variant="contained" color="secondary" onClick={startBreak}>
        <AccessTimeIcon className={classes.accessTimeIcon} />
        Start Break
      </Button>
      <Button variant="contained" onClick={pause}>
        <AccessTimeIcon className={classes.accessTimeIcon} />
        Pause
      </Button>
    </MuiThemeProvider>
  )
}
export default App
