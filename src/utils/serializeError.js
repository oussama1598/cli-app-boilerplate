import serializeError from 'serialize-error';

export default function(message, error) {
  return `${message}, reason: ${error.message}, fullError: ${JSON.stringify(
    serializeError(error)
  )}`;
}
