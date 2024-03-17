import pandas as pd

# Load Palmer Penguins dataset
penguins = pd.read_csv("https://raw.githubusercontent.com/allisonhorst/palmerpenguins/master/inst/extdata/penguins.csv")

# Display first few rows of the dataset
print(penguins.head())


# Check for missing values
print(penguins.isnull().sum())

# Drop rows with missing values
penguins.dropna(inplace=True)

# Handle categorical data (if needed)
# For example, convert species column to categorical data type
penguins['species'] = penguins['species'].astype('category')

# Perform further exploration and manipulation as needed


import matplotlib.pyplot as plt
import seaborn as sns

# Example: Pairplot
sns.pairplot(penguins, hue='species')
plt.show()

# Example: Bar plot
sns.countplot(x='species', data=penguins)
plt.title('Species Distribution')
plt.show()

# Add more visualizations as needed
