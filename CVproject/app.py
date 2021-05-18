from flask import Flask, url_for, render_template, redirect
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('CV.html')

@app.route('/contactList')
def list_of_contacts():
    return render_template('contactList.html')

@app.route('/contactMe')
def contact_me():
    return render_template('contactMe.html')

@app.route('/facebook')
def facebook_link():
    return redirect("https://www.facebook.com/liorra/")

@app.route('/assignment8')
def assignment_8():
    return render_template('assignment8.html',
                           name="Ariel",
                           now=datetime.now().hour,
                           bands=[{'bandname': "aerosmith",     'genre': "rock"},
                                  {'bandname': "a-ha",          'genre': "pop"},
                                  {'bandname': "bon jovi",      'genre': "rock"},
                                  {'bandname': "foo fighters",  'genre': "rock"},
                                  {'bandname': "j-lo",          'genre': "pop"},
                                  {'bandname': "queen B",       'genre': "pop"},
                                  {'bandname': "the killers",   'genre': "rock"}]
                           )

if __name__ == '__main__':
    app.run(debug=True)

