function score(lat, lon, lat_correcta, lon_correcta, dificultad, time_left)
{
    // Compute score of the answer, up to a maximum of 10 points.
    // The formula is as follows:
    // First, sum half od the difficulty (so we avoid having 0)
    // Then, assign one bonus point if the answer was close (less than 300km) and the student answered in less than 10 seconds
    const MAX_SCORE = 10;
    const CLOSE_FOR_BONUS = 300; // se puede tunear quizás
    const TIME_FOR_BONUS = 20;
    const MAX_POINTS = 10;
    var points = 0;
    points += dificultad/2;
    const d = distance(lat, lon, lat_correcta, lon_correcta);
    if (d <= CLOSE_FOR_BONUS && time_left >= TIME_FOR_BONUS)
    {
        points += 1;
    }
    const max_points_left = 10 - points; // assign remaining points based on the distance from the correct answer

    if (distance < 50) {
        points += max_points_left;
    }
    else if (distance < 100) {
        points += 0.9 * max_points_left;
    }
    else if (distance < 200) {
        points += 0.8 * max_points_left;
    }
    else if (distance < 300) {
        points += 0.7 * max_points_left;
    }
    else if (distance < 400) {
        points += 0.6 * max_points_left;
    }
    else if (distance < 500) {
        points += 0.5 * max_points_left;
    }
    else if (distance < 1000) {
        points += 0.25 * max_points_left;
    }
    else if (distance < 2000) {
        points += 0.1 * max_points_left;
    }

    return points;
}