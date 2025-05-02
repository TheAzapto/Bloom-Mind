import joblib
import re
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

# Define the same preprocessing function used during training
def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'(https?://|www\.|@\S+|#\S+)', '', text)
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    tokens = text.split()
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word not in stop_words]
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(word) for word in tokens]
    return " ".join(tokens)

# Loading Saved Model
model = joblib.load('backend\model\mental_health_model.joblib')

# Define a prediction function
def predict_status(text):
    cleaned_text = preprocess_text(text)
    return model.predict([cleaned_text])[0]  # Wrap in list for single-sample prediction