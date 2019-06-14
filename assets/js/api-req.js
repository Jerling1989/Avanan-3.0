// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
// Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.open('GET', 'https://u7q76ggsff.execute-api.us-east-1.amazonaws.com/production', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var emails = data['Total Emails/Files Scanned by Avanan'];
  var phishing = data['Phishing Attacks Blocked By Avanan'];
  var malware = data['Malware Attacks Blocked By Avanan'];
  // console.log(data);
  console.log('Emails Scanned: ' + emails);
  console.log('Phishing: ' + phishing);
  console.log('Malware: ' + malware);   

  document.getElementById('scannedEmails').setAttribute('data-to', emails);
}
// Send request
request.send()
