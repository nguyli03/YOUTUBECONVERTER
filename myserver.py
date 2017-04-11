from flask import Flask, request, Response
from json import dumps, loads
from flask_pymongo import PyMongo
from flask import jsonify
from bson.json_util import dumps
from bson.objectid import ObjectId
import requests as req

app = Flask(__name__)
mongo = PyMongo(app)

@app.route('/proxy/youtubegettermain/', methods=['GET'])
def do_proxy():
    args = request.url.split("?")[1]
    res = req.get('http://www.youtubeinmp3.com/fetch/?format=text&video=https://www.youtube.com/watch?v={}'.format(args))
    return res.text


@app.route('/proxy/youtubeurlgettermain/', methods=["GET"])
def get_url():
    args = request.url.split("?")[1]
    print(args)
    res = req.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+args+'&type=video&videoDefinition=high&key=AIzaSyALErhy00FVzLkMGiK3bZTubiPXZzw4YIA')
    return res.text

@app.route('/proxy/weather/<string:state>/<string:city>', methods=['GET'])
def get_weather(state,city):
    print("helloword")
    res=req.get("http://api.wunderground.com/api/f5c219a47e0685f8/conditions/q/{}/{}.json".format(state,city))
    print(res)
    return res.text

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8088)
