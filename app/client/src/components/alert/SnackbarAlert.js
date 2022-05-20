import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from './Alert'

export default function SnackbarAlert({ severity, children }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (children) {
      setOpen(true)
    }
  }, [children])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {children}
      </Alert>
    </Snackbar>
  )
}