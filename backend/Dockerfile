# backend/Dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY requirement.txt .
RUN pip install --no-cache-dir -r requirement.txt

COPY mental_health_model.joblib ./
COPY . .

EXPOSE 5000

CMD ["python", "app.py"]