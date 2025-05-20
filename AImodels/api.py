from flask import Flask, request, jsonify
import pandas as pd
import psycopg2
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import recomendation as recom  # Import the recommendation module

# Connection string and project skills (avoid using globals)
connection_string = "postgresql://postgres.rjswaffellocyrumpdxf:HykVNzZooX0F1ARL@aws-0-ap-south-1.pooler.supabase.com:5432/postgres"
project_required_skills = ["MongoDB", "Node.js", "React", "TypeScript", "Next.js"]

# Create a Flask application
app = Flask(__name__)

# Define a route for recommendation
@app.route('/recommendation', methods=['GET'])
def recommendation():
    # Get the result from the recommendation function
    try:
        result = recom.recomender(connection_string, project_required_skills)
        return jsonify({"result": result}), 200
    except Exception as e:
        # Handle errors and return a proper error response
        return jsonify({"error": str(e)}), 500

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
