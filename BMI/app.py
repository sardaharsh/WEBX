from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    weight = float(request.form['weight'])
    height = float(request.form['height'])
    
    bmi = calculate_bmi(weight, height)
    
    return render_template('result.html', bmi=bmi)

def calculate_bmi(weight, height):
    return round(weight / (height * height), 2)

if __name__ == '__main__':
    app.run(debug=True)
