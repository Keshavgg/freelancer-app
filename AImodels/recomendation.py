import pandas as pd
import psycopg2
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import json
import load_dotenv

# Load environment variables
load_dotenv()
connection_string = os.getenv("DATABASE_URL")


# Project required skills
project_required_skills = ["MongoDB", "Node.js", "React", "TypeScript", "Next.js"]

# Initialize connection and cursor to None
conn = None
cur = None
def recomender(connection_string, project_required_skills):
    conn = None
    cur = None
    freelancers = pd.DataFrame()  # Initialize an empty DataFrame in case of an error
    
    try:
        # Establish a database connection
        conn = psycopg2.connect(connection_string)
        print("Connection established successfully.")
        
        # Create a cursor
        cur = conn.cursor()
        print("Cursor created successfully.")
        
        # Query to fetch data from the User table
        query = '''SELECT "name", "skills", "rating", "profile", "username" FROM "users" WHERE "role" = 'freelancer';'''
        cur.execute(query)
        print("Query executed successfully.")
        
        # Fetch all rows and load into DataFrame
        rows = cur.fetchall()
        freelancers = pd.DataFrame(rows, columns=["name", "skills", "rating", "profile", "username"])
        print(f"Number of rows fetched: {len(freelancers)}")
        print(f"DataFrame structure:\n{freelancers.head()}")  # Print first few rows to verify structure
        print(f"DataFrame columns: {freelancers.columns}")  # Print column names to verify

    except psycopg2.Error as db_error:
        print("Database error occurred:", db_error)
    except Exception as e:
        print("An error occurred:", e)
    finally:
        # Ensure the cursor and connection are closed
        if cur:
            cur.close()
            print("Cursor closed.")
        if conn:
            conn.close()
            print("Connection closed.")

    # Ensure we have fetched some data
    if freelancers.empty:
        print("No data was fetched or an error occurred.")
        return []

    # Handle None values in the skills column by replacing them with empty lists
    freelancers['skills'] = freelancers['skills'].apply(lambda x: x if x is not None else [])

    # Preprocess data (skills is already an array, no need to split it)
    all_skills = list(set(sum(freelancers['skills'], []) + project_required_skills))

    # Create a project vector
    project_vector = np.array([skill in project_required_skills for skill in all_skills], dtype=int).reshape(1, -1)

    # Function to compute skill vector
    def get_skill_vector(skills):
        return np.array([skill in skills for skill in all_skills], dtype=int).reshape(1, -1)

    # Compute similarity scores
    freelancers['similarity_score'] = freelancers['skills'].apply(lambda x: cosine_similarity(get_skill_vector(x), project_vector)[0][0])

    # Filter freelancers with similarity score >= 0.2
    filtered_freelancers = freelancers[freelancers['similarity_score'] >= 0.2]

    # Sort by similarity score (descending) and rating (descending)
    sorted_freelancers = filtered_freelancers.sort_values(by=['similarity_score', 'rating'], ascending=[False, False])

    # Get top 5 freelancers (or fewer if less than 5 matches are found)
    top_freelancers = sorted_freelancers.head(5)

    # Convert the top freelancers to a list of dictionaries for JSON serialization
    top_freelancers_json = top_freelancers.to_dict(orient='records')

    return top_freelancers_json


    
