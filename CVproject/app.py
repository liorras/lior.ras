from flask import Flask, render_template, redirect, request
from datetime import datetime
from flask import session
from flask import mysql
from mysql import connector

app = Flask(__name__)
app.secret_key = '123'

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
                           bands=[{'bandname': "aerosmith", 'genre': "rock"},
                                  {'bandname': "a-ha", 'genre': "pop"},
                                  {'bandname': "bon jovi", 'genre': "rock"},
                                  {'bandname': "foo fighters", 'genre': "rock"},
                                  {'bandname': "j-lo", 'genre': "pop"},
                                  {'bandname': "queen B", 'genre': "pop"},
                                  {'bandname': "the killers", 'genre': "rock"}]
                           )


usersList = [{'email': "michael.lawson@reqres.in", 'first_name': "Michael", 'last_name': "Lawson"},
             {'email': "lindsay.ferguson@reqres.in", 'first_name': "Lindsay", 'last_name': "Ferguson"},
             {'email': "tobias.funke@reqres.in", 'first_name': "Tobias", 'last_name': "Funke"},
             {'email': "byron.fields@reqres.in", 'first_name': "Byron", 'last_name': "Fields"},
             {'email': "george.edwards@reqres.in", 'first_name': "George", 'last_name': "Edwards"},
             {'email': "rachel.howell@reqres.in", 'first_name': "Rachel", 'last_name': "Howell"}]


@app.route('/assignment9', methods=['GET', 'POST'])
def assignment_9():
    global usersList
    found_user = False
    selected_user = []

    if 'firstname' in request.args:
        qp_firstname = request.args['firstname']
    else:
        qp_firstname = ''
    if 'lastname' in request.args:
        qp_lastname = request.args['lastname']
    else:
        qp_lastname = ''
    if 'email' in request.args:
        qp_email = request.args['email']
    else:
        qp_email = ''

    for user in usersList:
        if ((qp_firstname is '' or user["first_name"] == qp_firstname) and (
                qp_lastname is '' or user["last_name"] == qp_lastname) and (
                qp_email is '' or user["email"] == qp_email)):
            selected_user.append(user)

    if len(selected_user) == 1:
        found_user = True

    current_method = request.method
    if current_method == 'POST':
        if 'firstname' in request.form:
            user_firstname = request.form['firstname']
            user_lastname = request.form['lastname']
    else:
        user_firstname = ''
        user_lastname = ''
    session['firstname'] = user_firstname
    session['lastname'] = user_lastname
    return render_template('assignment9.html',
                           usersList=usersList,
                           selected_user=selected_user,
                           current_method=current_method,
                           found_user=found_user,
                           user_firstname=user_firstname,
                           user_lastname=user_lastname)

from pages.assignment10.assignment10 import assignment10
app.register_blueprint(assignment10)

if __name__ == '__main__':
    app.run(debug=True)
