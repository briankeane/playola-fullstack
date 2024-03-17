/* eslint-disable no-console */
var _suppressOutput: boolean = false;

function suppressLogger() {
  _suppressOutput = true;
}

function enableLogger() {
  _suppressOutput = false;
}

export function log(str: string): void {
  if (
    process.env.NODE_ENV !== "test" &&
    process.env.LOGGING_LEVEL !== "verbose" &&
    !_suppressOutput
  ) {
    console.log(str);
  }
}

export function error(str: string): void {
  if (
    !_suppressOutput &&
    (process.env.NODE_ENV !== "test" || process.env.LOGGING_LEVEL === "verbose")
  ) {
    console.error(str);
  }
}

export function logAndReturnError(err: Error): Error {
  error(err.message);
  return err;
}

export const always = {
  log: (str: string): void => console.log(str),
  error: (str: string): void => console.error(str),
};

export default {
  log,
  error,
  always,
  logAndReturnError,
  suppressLogger,
  enableLogger,
};

/* eslint-enable no-console */
