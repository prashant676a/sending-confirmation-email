# README
In this project whenever the user signs up for the application the confirmation email or welcome email is sent to the user.
Figaro gem is used for storing gmail credentitals and delayed_job gem for background job.

### SETUP

1. Clone  Github repo

```bash
git clone git@github.com:prashant676a/sending-confirmation-email.git
```

2.Enter into sending-confirmation-email directory
```bash
cd sending-confirmation-email
```

3.Install required gems figaro, delayed_jobs and daemons
```bash
bundle install
```

4.Figaro Configuration
- Install Figaro
```bash
bundle exec figaro install
```
- Generate a passkey using your google acount which you can do from 
https://myaccount.google.com/signinoptions/passkeys?continue=https://myaccount.google.com/security?hl%3Den_GB%26utm_source%3DOGB%26utm_medium%3Dact&rapt=AEjHL4Mep6DUb56f6DaR7bHuXrCPkubClM1csqrxMHJN_-n7_xWFgU-o0nToXwE6JWzUE8oIieFktZ3N775domky66CWJFDUt-EM5KrSFRiYYkXzCI0tVqM

this link.

- In config/application.yml put your google passkey with key `gmail_password`
and also don't  forget to change your user_name in development.rb

That's all setup for figaro

5. delayed_job Setup

- activerecord requires table generate that using
```bash
rails generate delayed_job:active_record
rake db:migrate
```

6.If any problem occur while setting up figaro or delayed job
- documentation of figaro
https://github.com/laserlemon/figaro

- documentation of delayed_job
https://github.com/collectiveidea/delayed_job

7. Run the rails Server
```bash
rails s
```

and visit localhost:3000 in your browser and create the new user with valid email and email will be sent to that user in gmail account from your account.

8. Finally to send the mails that are queued in delayed_jobs open another terminal 
```bash
rake jobs:work
```
