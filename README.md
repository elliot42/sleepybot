# sleepybot

This is a helpful robot to help you go to sleep.  It speak to
you nicely.

# Setup

1. Install Firebase tools: `npm install -g firebase-tools`
2. Login: `firebase login`
2. Get permissions on the Firebase to the project (ask Elliot)

# Developing the code

- The primary server functions (respond to requests) live in `index.js`
- The homepage lives in `index.html`
- To start a local development server run `firebase serve`
- Then direct your browser to `http://localhost:5000`

# Deploy

To deploy the project to the web run `firebase deploy`

# Loading the app

The homepage is hosted here:
[https://sleepybot-2a22d.firebaseapp.com/](https://sleepybot-2a22d.firebaseapp.com/)

# Making phone calls

- Set up a virtual environment:
  - One-time setup: `virtualenv venv && source venv/bin/activate && pip install twilio`

- Using the virtual environment:
  - `source venv/bin/activate` (activate virtual environment)

- Calling the script:
  - `python twilio/sleepycall.py`

# Webhook Locations

(config): https://us-central1-sleepybot-2a22d.cloudfunctions.net/config
