class Logging {
  log(message, id, result) {
    console.log(`Log - ID: ${id}, Message: ${message}, Result: ${result}`);
  }
}

module.exports = new Logging();
