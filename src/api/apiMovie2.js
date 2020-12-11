import * as Axios from 'axios';

const apiMovie = Axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});
export default apiMovie;

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ4M2I5MGYzZDcyYjNjM2Q5MGM1YzM3ZWNjOTc5MiIsInN1YiI6IjVmZDM1MTBkNmRjNTA3MDAzY2EyZTFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gekoCJp7WnoAMyUhVldUrsf2VYGikgHrbszA9tdb_i4';

apiMovie.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${ token }`
});
