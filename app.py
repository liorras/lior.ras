from flask import Flask, redirect, url_for
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('CV.html', name='visitor')


@app.route('/home')
def home():
    return redirect(url_for('index'))


@app.route("/index_js")
def index_js():
    return render_template("../static/js/CV.js")

if __name__ == '__main__':
    app.run(debug=True)