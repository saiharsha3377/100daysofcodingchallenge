favorite_movies = ["After", "My Fault", "Beautiful Disaster"]

favorite_movies.append("Transformers")

release_years = (2019, 2023, 2023, 2007)

print("Third movie:", favorite_movies[2])
print("Release year:", release_years[2])

specific_movie = "After"

if specific_movie in favorite_movies:
    print(specific_movie, "is in the list.")
else:
    print(specific_movie, "is not in the list.")

friend_movies = ["Put Your Head On My Shoulder", "Squid Game", "Stranger Things"]
combined_list = favorite_movies + friend_movies
print("Combined list:", combined_list)