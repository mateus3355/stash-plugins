import sys

# Log messages are transmitted via stderr with a special prefix:
# SOH + level char + STX + message
# Level chars: t=trace, d=debug, i=info, w=warning, e=error, p=progress

def __prefix(levelChar):
    startLevelChar = b'\x01'
    endLevelChar = b'\x02'
    return (startLevelChar + levelChar + endLevelChar).decode()

def __log(levelChar, s):
    print(__prefix(levelChar) + s + "\n", file=sys.stderr, flush=True)

def trace(s):   __log(b't', s)
def debug(s):   __log(b'd', s)
def info(s):    __log(b'i', s)
def warning(s): __log(b'w', s)
def error(s):   __log(b'e', s)

def progress(p):
    __log(b'p', str(min(max(0.0, p), 1.0)))
