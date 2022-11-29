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
    var result = 0;
    result += dificultad/2;
    const d = distance(lat, lon, lat_correcta, lon_correcta);
    if (d <= CLOSE_FOR_BONUS && time_left >= TIME_FOR_BONUS)
    {
        result += 1;
    }
    const max_points_left = 10 - result; // assign remaining points based on the distance from the correct answer

    

}