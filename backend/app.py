from flask import Flask, request, jsonify
from flask_cors import CORS
import nlp_script

app = Flask(__name__)
CORS(app, origins=['*'])

@app.route('/process', methods=['POST'])
def process_text():

    data = request.get_json()
    user_input = data['text']
        
    result = nlp_script.predict_status(user_input)
        
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(port=5050)