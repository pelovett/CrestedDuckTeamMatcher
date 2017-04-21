"""
Very simple Flask test page.

"""


import flask
from flask import render_template
from flask import request
from flask import url_for
from flask import make_response
from flask_cors import CORS, cross_origin

import io
import csv


import json
import logging

import algorithm
from algorithm import Algorithm

###
# Globals
###
app = flask.Flask(__name__)
 
import CONFIG


###
# Pages
###


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route("/")
@app.route("/index")

def index():
  app.logger.debug("Main page entry")
  #TODO add variables to ajax
  return flask.render_template('index.html')

def transform(text_file_contents):
    return text_file_contents.replace("=", ",")

@app.route('/result', methods=["POST", "OPTIONS"])
def transform_view():
    f = request.files['csv-file']
    if not f:
        return "No file"

    csv_list = []

    stream = io.StringIO(f.stream.read().decode("UTF8"), newline=None)
    csv_input = csv.reader(stream)
    #print("file contents: ", file_contents)
    #print(type(file_contents))
    print(csv_input)
    for row in csv_input:
        print(row)
        csv_list.append(row)

    stream.seek(0)
    result = transform(stream.read())

    #TODO TypeError: list indices must be integers or slices, not str
    #something = Algorithm(csv_list).generate()
    #print(something)

    response = make_response(result)

    response.headers["Content-Disposition"] = "attachment; filename=result.csv"

    #response.csv.html downloaded
    return response

@app.errorhandler(404)
def page_not_found(error):
    app.logger.debug("Page not found")
    flask.session['linkback'] =  flask.url_for("index")
    return flask.render_template('page_not_found.html'), 404


#############
#
# Set up to run from cgi-bin script, from
# gunicorn, or stand-alone.
#
app.secret_key = CONFIG.secret_key
app.debug=CONFIG.DEBUG
app.logger.setLevel(logging.DEBUG)
if __name__ == "__main__":
    print("Opening for global access on port {}".format(CONFIG.PORT))
    app.run(port=CONFIG.PORT, host="0.0.0.0") #port is found in CONFIG
