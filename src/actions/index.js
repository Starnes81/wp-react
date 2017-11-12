import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const FETCH_PAGES = 'fetch_pages';
export const FETCH_PAGE = 'fetch_page';

const ROOT_URL = 'http://blackonair.com/wp-json/wp/v2/';

// Get posts with catagory number 18
export function fetchPosts(catNum = 18, post_type = 'posts') {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/${post_type}?_embed&categories=${catNum}`)
            .then(response => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: response.data
                });
            });
    }
}
// Get a single post
export function fetchPost(post_type = 'post', id) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/posts/${id}`)
            .then(response => {
                dispatch({
                    type: FETCH_POST,
                    payload: [response.data]
                });
            });
    }
}

// Get published pages
export function fetchPages(pageStatus='publish') {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/pages/${id}`)
            .then(response => {
                dispatch({
                    type: FETCH_PAGES,
                    payload: [response.data]
                });
            });
    }
}

// Get a published single page
export function fetchPages(id) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/pages/${id}`)
            .then(response => {
                dispatch({
                    type: FETCH_PAGES,
                    payload: [response.data]
                });
            });
    }
}
