from flask import Blueprint, render_template, redirect, url_for, request
from flask import mysql
import mysql.connector

assignment10 = Blueprint('assignment10', __name__,
                          static_folder='static',
                          static_url_path='/assignment10',
                          template_folder='templates')

# ----------------------DATABASE CONNECTION --------------------#
# --------------------------------------------------------------#
def interact_db(query, query_type: str):
    return_value = False
    connection = mysql.connector.connect(host='localhost',
                                         user='root',
                                         password='root',
                                         database='cv_schema')
    cursor = connection.cursor(named_tuple=True)
    cursor.execute(query)

    if query_type == 'commit':
        connection.commit()
        return_value = True

    if query_type == 'fetch':
        query_result = cursor.fetchall()
        return_value = query_result

    connection.close()
    cursor.close()
    return return_value

global message
message = ''
@assignment10.route('/assignment10', methods=['GET', 'POST'])
@assignment10.route('/', methods=['GET', 'POST'])
def ass_10():
    query = "select * from users"
    query_result = interact_db(query=query, query_type='fetch')
    return render_template('assignment10.html',
                           message=message,
                           users=query_result)

@assignment10.route('/insert_user', methods=['GET', 'POST'])
def insert_to_users():
    message = 'INSERT user'
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        like_dogs = request.form['like_dogs']
        query = "INSERT INTO users(first_name, last_name, email, like_dogs) VALUES ('%s', '%s', '%s', '%s');" % (first_name, last_name, email, like_dogs)
        interact_db(query=query, query_type='commit')

    return redirect('/assignment10')


@assignment10.route('/delete_user', methods=['GET', 'POST'])
def delete_from_users():
    message = 'DELETE user'
    if request.method == 'POST':
        user_id = request.form['id']
        query = "DELETE FROM users WHERE id='%s';" % user_id
        interact_db(query=query, query_type='commit')
    return redirect('/assignment10')

@assignment10.route('/update_user', methods=['GET', 'POST'])
def update_user_from_users():
    message = 'UPDATE user'
    if request.method == 'POST':
        user_id = request.form['id']
        user_first_name = request.form['first_name']
        user_last_name = request.form['last_name']
        user_email = request.form['email']
        user_like_dogs = request.form['like_dogs']
        query = "UPDATE users SET first_name='%s', last_name='%s', email='%s', like_dogs='%s' WHERE id='%s';" % (user_first_name, user_last_name, user_email, user_like_dogs, user_id)
        interact_db(query=query, query_type='commit')
    return redirect('/assignment10')
