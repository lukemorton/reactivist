// Make sure we display Promise exceptions
process.on('unhandledrejection', (e) => console.error(e))
