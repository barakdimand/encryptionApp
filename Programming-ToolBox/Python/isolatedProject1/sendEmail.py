import smtplib

gmail_user = 'itc.test.bot@gmail.com'
gmail_password = '*4PfOq77g&1&'

try:
  server = smtplib.SMTP_SSL('smtp.gmail.com')
  sent_from = 'you@gmail.com'
  to = 'blueofer@gmail.com'
  subject = 'Cookies on top floor!'
  body = 'Hey, whats up?\nThere\'s cookies on the top floor!\n\n- ITC Bot'

  message = """Subject: Hi there2\nThis message is sent from Python."""
  server.login(gmail_user, gmail_password)
  server.sendmail(sent_from, to, message)
  server.close()
except:
  print('Something went wrong...')