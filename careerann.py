# -*- coding: utf-8 -*-
"""
Created on Fri Oct  7 07:05:27 2022

@author: Abhitui
"""

# Artificial Neural Network

# Importing the libraries
import numpy as np
import pandas as pd
import tensorflow as tf



# Part 1 - Data Preprocessing

# Importing the dataset
dataset = pd.read_csv('data.csv')
#dfn =dataset.astype('str').dtypes
#dfn.astype({'CGPA': 'float64'}).dtypes

#independent variable matrix upperbound is exclusive
X = dataset.iloc[:, 0:19].values #pd illoc

#taking care of missing data
from sklearn.impute import SimpleImputer
imputer = SimpleImputer(missing_values=np.nan, strategy='most_frequent')
#fitting our imputer obj to data 
imputer = imputer.fit(X[:,:])
#replacing the missing data
X[:,:] = imputer.transform(X[:,:])

#dependent variable matrix
y = dataset.iloc[:, -1].values



# Encoding categorical data
# Label Encoding column
from sklearn.preprocessing import LabelEncoder,OneHotEncoder
from sklearn.compose import ColumnTransformer
le = LabelEncoder()
X[:, 1] = le.fit_transform(X[:, 1])

# Label Encoding column
#from sklearn.preprocessing import LabelEncoder
le_1 = LabelEncoder()
X[:, 2] = le_1.fit_transform(X[:, 2])

# Label Encoding column
le_2 = LabelEncoder()
X[:, 3] = le_2.fit_transform(X[:, 3])


# Label Encoding column
le_3 = LabelEncoder()
X[:, 4] = le_3.fit_transform(X[:, 4])


# Label Encoding column
le_4 = LabelEncoder()
X[:, 5] = le_4.fit_transform(X[:, 5])

# Label Encoding column
le_5 = LabelEncoder()
X[:, 6] = le_5.fit_transform(X[:, 6])


# Label Encoding column
le_6 = LabelEncoder()
X[:, 7] = le_6.fit_transform(X[:, 7])



# Label Encoding column
le_7 = LabelEncoder()
X[:, 8] = le_7.fit_transform(X[:, 8])

# Label Encoding column
le_8 = LabelEncoder()
X[:, 9] = le_8.fit_transform(X[:, 9])

# Label Encoding column
le_9 = LabelEncoder()
X[:, 10] = le_9.fit_transform(X[:, 10])

# Label Encoding column
le_10 = LabelEncoder()
X[:, 11] = le_10.fit_transform(X[:, 11])

# Label Encoding column
le_11 = LabelEncoder()
X[:, 12] = le_11.fit_transform(X[:, 12])

# Label Encoding column
le_12 = LabelEncoder()
X[:, 13] = le_12.fit_transform(X[:, 13])

# Label Encoding column
le_13 = LabelEncoder()
X[:, 14] = le_13.fit_transform(X[:, 14])

# Label Encoding column
le_14 = LabelEncoder()
X[:, 15] = le_14.fit_transform(X[:, 15])


# Label Encoding column
le_15 = LabelEncoder()
X[:, 16] = le_15.fit_transform(X[:, 16])

# Label Encoding column
le_16 = LabelEncoder()
X[:, 17] = le_16.fit_transform(X[:, 17])


# Label Encoding column
le_17 = LabelEncoder()
X[:, 18] = le_17.fit_transform(X[:, 18])






#dummy encoding
ct = ColumnTransformer(
    [('one_hot_encoder', OneHotEncoder(categories='auto'), [3])],   # The column numbers to be transformed 
    remainder='passthrough'                                         # Leave the rest of the columns untouched
)

X = ct.fit_transform(X)


#removing one dummy to avoid dummy variable trap
X = X[:,1:]


#label encoding the dependent col
le_y = LabelEncoder()
y = le_y.fit_transform(y)
y_bef = y

#dummy encoding
onehotencoder = OneHotEncoder(categories='auto')
y = onehotencoder.fit_transform(y.reshape(-1,1)).toarray()
#dummy trap removal
y = y[:,1:]



# Splitting the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)


# Part 2 - Building the ANN

# Initializing the ANN
ann = tf.keras.models.Sequential()

# Adding the input layer and the first hidden layer
ann.add(tf.keras.layers.Dense(units=15, activation='relu'))

#adding dropout
ann.add(tf.keras.layers.Dropout(.1))

# Adding the second hidden layer
ann.add(tf.keras.layers.Dense(units=15, activation='relu'))
#ann.add(tf.keras.layers.Dropout(.1))

# Adding the output layer
ann.add(tf.keras.layers.Dense(units=9, activation='softmax'))


# Part 3 - Compiling the ANN
ann.compile(optimizer = 'adam', loss = 'categorical_crossentropy', metrics = ['accuracy'])

# Training the ANN on the Training set
ann.fit(X_train, y_train, batch_size = 10, epochs = 100)


# Predicting the Test set results
y_pred = ann.predict(X_test)
y_pred = (y_pred >0.5)


#making confusion matrix
from sklearn.metrics import multilabel_confusion_matrix
cm = multilabel_confusion_matrix(y_test,y_pred)


# Predicting the result of a single observation
#print(ann.predict(sc.transform([[12, 6, 0, 16, 0, 1, 78]])) > 0.5)

single_pred = ann.predict(sc.transform([[0,0,7.5,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1]]))

single_pred = (single_pred > 0.2)



#k-fold cross val

from keras.wrappers.scikit_learn import KerasClassifier
from sklearn.model_selection import cross_val_score
def build_ann():
    ann = tf.keras.models.Sequential()
    ann.add(tf.keras.layers.Dense(units=15, activation='relu'))
    ann.add(tf.keras.layers.Dense(units=15, activation='relu'))
    ann.add(tf.keras.layers.Dense(units=9, activation='softmax'))
    ann.compile(optimizer = 'adam', loss = 'categorical_crossentropy', metrics = ['accuracy'])
    return ann

ann = KerasClassifier(build_fn=build_ann,batch_size = 10, epochs = 100)
accuracies = cross_val_score(estimator=ann,X = X_train,y = y_train, cv = 10 , n_jobs = -1)

mean = accuracies.mean()
variance = accuracies.std()
    




    
    