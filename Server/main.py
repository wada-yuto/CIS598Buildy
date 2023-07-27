import sys
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import json

import numpy as np
from sentence_transformers import SentenceTransformer

csv1 = 'imdb_top_1000.csv'
csv2 = 'dataset2.csv'
data = pd.read_csv(csv2)
X = np.array(data.Notes)
data['Ratings'] = np.random.randint(low=0, high=10, size=len(data))

data = data.assign(Run_ID=range(len(data)))

data['Run_ID'] = data['Run_ID'].astype('str')

data['Description'] = data['Pace'] + ' | ' + str(data['Distance'][0]) + ' | ' + data['Duration'] + ' | '+ data['Run_ID'] 

tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 2), min_df=.5, stop_words='english')
tfidf_matrix = tf.fit_transform(data['Notes'])

cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

text_data = X
model = SentenceTransformer('distilbert-base-nli-mean-tokens')
embeddings = model.encode(text_data, convert_to_tensor=True)
cosine_sim[0]

data = data.reset_index()
titles = data['Notes']
indices = pd.Series(data.index, index=data['Notes'])

def get_recommendations(title):
    idx = indices[int(title)]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:20]
    run_indices = [i[0] for i in sim_scores]
    return titles.iloc[run_indices]

notes = get_recommendations(sys.argv[1]).iloc[0]

def get_json(notes):
    title = 'Recommended Run'
    runType = str(data.loc[data['Notes'] == notes].iloc[0]['Run Type'])
    distance = int(data.loc[data['Notes'] == notes].iloc[0]['Distance'])
    pace = str(data.loc[data['Notes'] == notes].iloc[0]['Pace'])
    pre = 0
    rating = 0
    duration = str(data.loc[data['Notes'] == notes].iloc[0]['Duration'])
    notes = str(data.loc[data['Notes'] == notes].iloc[0]['Notes'])

    value = {
        'title': title,
        'runType': runType,
        'distance': distance,
        'pace': pace,
        'pre': pre,
        'rating': rating,
        'duration': duration,
        'notes': notes
    }

    return json.dumps(value)

print(get_json(notes))
